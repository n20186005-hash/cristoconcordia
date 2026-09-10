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

// 各语言首页 Title / Meta Description
// 面向游客真实搜索意图：开放时间（horarios）、缆车（teleférico）、交通、历史与台阶
const seoText: Record<
  string,
  { title: string; description: string; ogTitle: string; ogDescription: string; siteName: string }
> = {
  es: {
    title: "Cristo de la Concordia (Cochabamba) - Horarios, Teleférico y Guía",
    description:
      "Descubre el Cristo de la Concordia en Cochabamba, Bolivia. Consulta horarios, precios del teleférico, cómo llegar y la historia del monumento.",
    ogTitle: "Cristo de la Concordia (Cochabamba) - Horarios, Teleférico y Guía",
    ogDescription:
      "Horarios, precios del teleférico, cómo llegar y la historia del Cristo de la Concordia en Cochabamba, Bolivia.",
    siteName: "Monumento al Cristo de la Concordia Guía",
  },
  en: {
    title: "Christ of the Concord Monument, Cochabamba - Cable Car & Visitor Guide",
    description:
      "Plan your visit to the Christ of the Concord in Cochabamba, Bolivia. Find cable car prices, opening hours, steps count, and travel tips.",
    ogTitle: "Christ of the Concord Monument, Cochabamba - Cable Car & Visitor Guide",
    ogDescription:
      "Cable car prices, opening hours, the 1,399 steps and travel tips for the Christ of the Concord Monument in Cochabamba, Bolivia.",
    siteName: "Christ of the Concord Monument Guide",
  },
  zh: {
    title: "和谐基督纪念碑（科恰班巴）- 缆车、开放时间与参观指南",
    description:
      "玻利维亚科恰班巴和谐基督纪念碑参观指南：开放时间与门票、缆车（Teleférico）价格、如何前往、1,399 级台阶与建造历史，一文看懂。",
    ogTitle: "和谐基督纪念碑（科恰班巴）- 缆车、开放时间与参观指南",
    ogDescription: "开放时间与门票、缆车价格、交通方式、1,399 级台阶与建造历史。",
    siteName: "和谐基督纪念碑指南",
  },
  qu: {
    title: "Cristo de la Concordia (Cochabamba) - Horarios, Teleférico y Guía",
    description:
      "Cristo de la Concordia, Cochabamba, Bolivia. Horarios, teleférico chanin, chaykamuy, historia.",
    ogTitle: "Cristo de la Concordia (Cochabamba) - Horarios, Teleférico y Guía",
    ogDescription: "Horarios, teleférico, chaykamuy, historia. Cochabamba, Bolivia.",
    siteName: "Cristo de la Concordia rikuy",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const hreflangs = getHreflangAlternates(baseUrl);
  const seo = seoText[locale] || seoText.es;
  return {
    metadataBase: new URL(baseUrl),
    applicationName: "Christ of the Concord Monument Guide",
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: "Christ of the Concord Monument",
      statusBarStyle: "black-translucent",
    },
    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/favicon.ico",
      apple: "/icon.svg",
    },
    title: {
      default: seo.title,
      template:
        locale === "es"
          ? "%s | Monumento al Cristo de la Concordia"
          : locale === "zh"
          ? "%s | 和谐基督纪念碑"
          : locale === "qu"
          ? "%s | Cristo de la Concordia"
          : "%s | Christ of the Concord Monument",
    },
    description: seo.description,
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
      title: seo.ogTitle,
      description: seo.ogDescription,
      siteName: seo.siteName,
      images: [
        {
          url: "/og-image.jpg",
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
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: ["/og-image.jpg"],
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
import { WeatherProvider } from "@/components/WeatherProvider";
import { fetchWeather } from "@/lib/weather";
import { ENTITY } from "@/lib/site-config";

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

  // 在服务端获取并缓存天气数据（Server Component），下发给客户端模块渲染
  const weather = await fetchWeather(ENTITY.latitude, ENTITY.longitude);

  return (
    <>
      {/* 动态设置 <html lang> 属性（客户端组件） */}
      <HtmlLangSetter htmlLang={htmlLang} />
      <SchemaScript locale={locale} />
      <WeatherProvider data={weather}>{children}</WeatherProvider>
    </>
  );
}
