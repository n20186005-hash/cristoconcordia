const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const files = fs.readdirSync(galleryDir);

const BASE_IMAGE_RE = /\.(jpg|jpeg|png)$/i;
const THUMB_RE = /-thumb\.(jpg|jpeg|png)$/i;

/**
 * 画廊文件名规范：`<主体>-<场景>-<序号>.<ext>`
 *   例：ccc-via-crucis-1.jpg / ccc-escalinata-3.jpg
 * 规则：
 *   - 全小写，仅用连字符 `-` 分隔，不含空格、括号、重音符号
 *   - 序号必须是文件名末尾的纯数字（`-1` 与 `-01` 均可）
 *   - 不要手动添加 `-thumb` / `.webp` 后缀，由 optimize-images.js 自动派生
 * 兼容旧命名：`christ-of-the-concord-monument (3).jpg`
 * 排序策略：先按「前缀分组」，再按序号升序，保证同组照片连续且顺序可控。
 */
const LEGACY_NUM_RE = /\((\d+)\)\s*$/;
const SUFFIX_NUM_RE = /-(\d+)$/;

function parseName(file) {
  const base = file.replace(/\.[^.]+$/, '');
  let m = base.match(LEGACY_NUM_RE);
  if (m) return { group: base.slice(0, m.index).trim(), num: parseInt(m[1], 10) };
  m = base.match(SUFFIX_NUM_RE);
  if (m) return { group: base.slice(0, m.index), num: parseInt(m[1], 10) };
  return { group: base, num: 0 };
}

/** 读取 JPEG 宽高（纯 JS，无额外依赖） */
function readJpegSize(buffer) {
  let i = 2;
  while (i < buffer.length - 1) {
    if (buffer[i] !== 0xff) {
      i++;
      continue;
    }
    const marker = buffer[i + 1];
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      i += 2;
      continue;
    }
    if (marker === 0xd9) break;
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: buffer.readUInt16BE(i + 5), width: buffer.readUInt16BE(i + 7) };
    }
    i += 2 + buffer.readUInt16BE(i + 2);
  }
  return null;
}

function fileExists(p) {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
}

const images = files
  .filter((f) => BASE_IMAGE_RE.test(f) && !THUMB_RE.test(f))
  .sort((a, b) => {
    const pa = parseName(a);
    const pb = parseName(b);
    if (pa.group !== pb.group) return pa.group < pb.group ? -1 : 1;
    if (pa.num !== pb.num) return pa.num - pb.num;
    return a < b ? -1 : a > b ? 1 : 0;
  })
  .map((file) => {
    const ext = path.extname(file);
    const baseName = file.slice(0, -ext.length);
    const fullPath = path.join(galleryDir, file);

    const webpFile = `${baseName}.webp`;
    const thumbFile = `${baseName}-thumb.jpg`;
    const thumbWebpFile = `${baseName}-thumb.webp`;

    let size = null;
    try {
      size = readJpegSize(fs.readFileSync(fullPath));
    } catch {
      size = null;
    }

    return {
      src: `/gallery/${file}`,
      webp: fileExists(path.join(galleryDir, webpFile)) ? `/gallery/${webpFile}` : undefined,
      thumbSrc: fileExists(path.join(galleryDir, thumbFile)) ? `/gallery/${thumbFile}` : `/gallery/${file}`,
      thumbWebp: fileExists(path.join(galleryDir, thumbWebpFile)) ? `/gallery/${thumbWebpFile}` : undefined,
      width: size?.width,
      height: size?.height,
    };
  });

const outputFilePath = path.join(__dirname, '../src/gallery-data.json');
fs.writeFileSync(outputFilePath, JSON.stringify(images, null, 2));

console.log(`Generated gallery-data.json with ${images.length} images.`);
