/**
 * 图片压缩与多尺寸派生脚本
 * ------------------------------------------------------------------
 * 为 public/gallery 下的原始照片生成：
 *   1. 压缩后的原图（最大 1800px，mozjpeg 渐进式）
 *   2. WebP 版本（画廊大图 / 灯箱使用）
 *   3. 网格缩略图（最大 700px，JPG + WebP）
 * 并额外生成社交分享图 public/og-image.jpg（1200×630）。
 *
 * 具备幂等性：已处理过的图片（体积已下降且缩略图存在）会自动跳过。
 * 若未安装 sharp，则打印提示并安全退出，不影响构建流程。
 */

const fs = require("fs");
const path = require("path");

const GALLERY_DIR = path.join(__dirname, "../public/gallery");
const PUBLIC_DIR = path.join(__dirname, "../public");
const OG_IMAGE = path.join(PUBLIC_DIR, "og-image.jpg");

const FULL_WIDTH = 1800;
const THUMB_WIDTH = 700;
const JPEG_QUALITY = 80;
const THUMB_QUALITY = 78;
const WEBP_QUALITY = 76;

let sharp;
try {
  sharp = require("sharp");
} catch {
  console.warn("[optimize-images] 未安装 sharp，跳过图片压缩。运行 `npm i -D sharp` 后重试。");
  process.exit(0);
}

const BASE_IMAGE_RE = /\.(jpe?g|png)$/i;
const THUMB_RE = /-thumb\.(jpe?g|png)$/i;

function kb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

async function optimizeOne(file) {
  const fullPath = path.join(GALLERY_DIR, file);
  const ext = path.extname(file);
  const baseName = file.slice(0, -ext.length);
  const webpPath = path.join(GALLERY_DIR, `${baseName}.webp`);
  const thumbJpgPath = path.join(GALLERY_DIR, `${baseName}-thumb.jpg`);
  const thumbWebpPath = path.join(GALLERY_DIR, `${baseName}-thumb.webp`);

  const originalSize = fs.statSync(fullPath).size;
  // 已处理过（WebP 与缩略图均已生成）则跳过，避免重复有损压缩导致画质下降
  if (fs.existsSync(webpPath) && fs.existsSync(thumbWebpPath) && fs.existsSync(thumbJpgPath)) {
    return { skipped: true, originalSize, newSize: originalSize };
  }

  // 读入内存后再交给 sharp，避免 Windows 下文件句柄占用导致无法覆盖原文件
  const inputBuffer = fs.readFileSync(fullPath);
  const source = sharp(inputBuffer, { failOn: "none" }).rotate();
  const meta = await source.metadata();

  const fullPipeline =
    meta.width && meta.width > FULL_WIDTH
      ? source.resize({ width: FULL_WIDTH, withoutEnlargement: true })
      : source;

  const jpegBuffer = await fullPipeline.clone().jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true }).toBuffer();
  const webpBuffer = await fullPipeline.clone().webp({ quality: WEBP_QUALITY }).toBuffer();

  const thumbPipeline = source.resize({ width: THUMB_WIDTH, withoutEnlargement: true });
  const thumbJpegBuffer = await thumbPipeline.clone().jpeg({ quality: THUMB_QUALITY, mozjpeg: true, progressive: true }).toBuffer();
  const thumbWebpBuffer = await thumbPipeline.clone().webp({ quality: THUMB_QUALITY }).toBuffer();

  // 仅在更小时覆盖原图，避免意外放大体积
  if (jpegBuffer.length < originalSize) {
    fs.writeFileSync(fullPath, jpegBuffer);
  }
  fs.writeFileSync(webpPath, webpBuffer);
  fs.writeFileSync(thumbJpgPath, thumbJpegBuffer);
  fs.writeFileSync(thumbWebpPath, thumbWebpBuffer);

  const newSize = fs.statSync(fullPath).size;
  console.log(
    `  ${file}: ${kb(originalSize)} → ${kb(newSize)} | webp ${kb(webpBuffer.length)} | thumb ${kb(thumbWebpBuffer.length)}`
  );
  return { skipped: false, originalSize, newSize };
}

async function buildOgImage(sourceFile) {
  if (fs.existsSync(OG_IMAGE)) return;
  if (!sourceFile) return;
  const src = path.join(GALLERY_DIR, sourceFile);
  if (!fs.existsSync(src)) return;
  await sharp(fs.readFileSync(src), { failOn: "none" })
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(OG_IMAGE);
  console.log(`  已生成社交分享图 og-image.jpg (${kb(fs.statSync(OG_IMAGE).size)})`);
}

async function run() {
  if (!fs.existsSync(GALLERY_DIR)) return;

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => BASE_IMAGE_RE.test(f) && !THUMB_RE.test(f))
    .sort();

  console.log(`[optimize-images] 开始处理 ${files.length} 张图片…`);
  let before = 0;
  let after = 0;

  for (const file of files) {
    try {
      const result = await optimizeOne(file);
      before += result.originalSize;
      after += result.newSize;
    } catch (err) {
      console.warn(`  ⚠️ ${file} 处理失败，已跳过：${err.message}`);
      const size = fs.statSync(path.join(GALLERY_DIR, file)).size;
      before += size;
      after += size;
    }
  }

  await buildOgImage(files[0]);

  console.log(
    `[optimize-images] 完成：原图总量 ${(before / 1024 / 1024).toFixed(1)}MB → ${(after / 1024 / 1024).toFixed(1)}MB`
  );
}

run().catch((err) => {
  console.error("[optimize-images] 处理失败：", err);
  process.exit(0); // 不影响构建
});
