"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";
import { SITE_URL } from "@/lib/site-config";

/**
 * 常见问题（FAQPage）结构化数据。
 *
 * 说明：景点实体（TouristAttraction）的结构化数据统一由服务端
 * `src/app/schema.ts` 的 generateSchema 输出（含 aggregateRating），
 * 此处不再重复输出同名 @id 的实体，避免 Google 解析时出现冲突。
 */
export function StructuredData() {
  const { t, locale } = useLang();

  const inLanguage =
    locale === "es" ? "es-BO" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-BO" : "en-US";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/${locale}/#faq`,
    "inLanguage": inLanguage,
    "mainEntity": t.faq.items.map((item: { question: string; answer: string }) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
