import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "cristoconcordia.com"}`;

// 语言配置：HTML lang 属性 + OG locale 映射
const localeConfig: Record<string, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: "es", ogLocale: "es_BO" },
  en: { htmlLang: "en", ogLocale: "en_US" },
  zh: { htmlLang: "zh-CN", ogLocale: "zh_CN" },
  qu: { htmlLang: "qu", ogLocale: "qu_BO" },
};

// 生成绝对 URL 的 hreflang 映射
function getHreflangAlternates(baseUrl: string) {
  return {
    es: `${baseUrl}/es`,
    en: `${baseUrl}/en`,
    zh: `${baseUrl}/zh`,
    qu: `${baseUrl}/qu`,
    "x-default": `${baseUrl}/es`,  // 默认回退页面设为西班牙文版
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default:
        locale === "es"
          ? "Monumento al Cristo de la Concordia — Cochabamba, Bolivia"
          : locale === "zh"
          ? "和谐基督纪念碑 — 玻利维亚科恰班巴"
          : locale === "qu"
          ? "Cristo de la Concordia — Cochabamba, Bolivia"
          : "Christ of the Concord Monument — Cochabamba, Bolivia",
      template:
        locale === "es"
          ? "%s | Monumento al Cristo de la Concordia"
          : locale === "zh"
          ? "%s | 和谐基督纪念碑"
          : locale === "qu"
          ? "%s | Cristo de la Concordia"
          : "%s | Christ of the Concord Monument",
    },
    description:
      locale === "es"
        ? "Guía del Monumento al Cristo de la Concordia en Cochabamba, Bolivia. Impresionante escultura religiosa que simboliza la paz y la unidad."
        : locale === "zh"
        ? "和谐基督纪念碑指南——探索玻利维亚科恰班巴的宏伟宗教雕塑，感受和平与团结的力量。"
        : locale === "qu"
        ? "Cristo de la Concordia rikuy, Cochabamba, Bolivia. Religioso escultura."
        : "A guide to Christ of the Concord Monument in Cochabamba, Bolivia. A magnificent religious sculpture symbolizing peace and unity.",
    keywords: [
      "Christ of the Concord Monument",
      "Monumento al Cristo de la Concordia",
      "Cochabamba tourism",
      "Bolivia tourism",
      "Religious sculpture",
      "Cochabamba attractions",
      "和谐基督纪念碑",
      "科恰班巴旅游",
    ],
    authors: [{ name: "Christ of the Concord Monument Guide" }],
    creator: "Christ of the Concord Monument Guide",
    publisher: "Christ of the Concord Monument Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale]?.ogLocale || "es_BO",
      alternateLocale: Object.values(localeConfig)
        .map((c) => c.ogLocale)
        .filter(
          (l) => l !== (localeConfig[locale]?.ogLocale || "es_BO")
        ),
      url: `${baseUrl}/${locale}`,
      title:
        locale === "es"
          ? "Monumento al Cristo de la Concordia — Cochabamba, Bolivia"
          : locale === "zh"
          ? "和谐基督纪念碑 — 玻利维亚科恰班巴"
          : locale === "qu"
          ? "Cristo de la Concordia — Cochabamba, Bolivia"
          : "Christ of the Concord Monument — Cochabamba, Bolivia",
      description:
        locale === "es"
          ? "Guía del Monumento al Cristo de la Concordia en Cochabamba, Bolivia. Impresionante escultura religiosa."
          : locale === "zh"
          ? "和谐基督纪念碑指南——探索玻利维亚科恰班巴的宏伟宗教雕塑。"
          : locale === "qu"
          ? "Cristo de la Concordia rikuy, Cochabamba."
          : "A guide to Christ of the Concord Monument in Cochabamba, Bolivia.",
      siteName:
        locale === "es"
          ? "Monumento al Cristo de la Concordia Guía"
          : locale === "zh"
          ? "和谐基督纪念碑指南"
          : locale === "qu"
          ? "Cristo de la Concordia rikuy"
          : "Christ of the Concord Monument Guide",
      images: [
        {
          url: "/gallery/christ-of-the-concord-monument (1).jpg",
          width: 1200,
          height: 630,
          alt:
            locale === "es"
              ? "Monumento al Cristo de la Concordia - Cochabamba, Bolivia"
              : locale === "zh"
              ? "和谐基督纪念碑 - 科恰班巴"
              : locale === "qu"
              ? "Cristo de la Concordia - Cochabamba, Bolivia"
              : "Christ of the Concord Monument - Cochabamba, Bolivia",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        locale === "es"
          ? "Monumento al Cristo de la Concordia — Cochabamba, Bolivia"
          : locale === "zh"
          ? "和谐基督纪念碑 — 玻利维亚科恰班巴"
          : locale === "qu"
          ? "Cristo de la Concordia — Cochabamba, Bolivia"
          : "Christ of the Concord Monument — Cochabamba, Bolivia",
      description:
        locale === "es"
          ? "Guía del Monumento al Cristo de la Concordia en Cochabamba, Bolivia."
          : locale === "zh"
          ? "和谐基督纪念碑指南——探索玻利维亚科恰班巴。"
          : locale === "qu"
          ? "Cristo de la Concordia rikuy, Cochabamba."
          : "A guide to Christ of the Concord Monument in Cochabamba, Bolivia.",
      images: ["/gallery/christ-of-the-concord-monument (1).jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangs,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [
    { locale: "es" },
    { locale: "en" },
    { locale: "zh" },
    { locale: "qu" },
  ];
}

import { generateSchema } from "../schema";
import HtmlLangSetter from "@/components/HtmlLangSetter";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = localeConfig[locale]?.htmlLang || "es";

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      {children}
    </>
  );
}
