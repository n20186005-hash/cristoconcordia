"use client";

import React from "react";
import { useLang } from "@/components/LangProvider";

export function StructuredData() {
  const { t, locale } = useLang();

  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "cristoconcordia.com"}`;

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "Place", "LandmarksOrHistoricalBuildings"],
    "name": locale === "es" ? "Monumento al Cristo de la Concordia" : locale === "zh" ? "和谐基督纪念碑" : locale === "qu" ? "Cristo de la Concordia" : "Christ of the Concord Monument",
    "description": t.history.intro,
    "url": `${baseUrl}/${locale}`,
    "image": `${baseUrl}/gallery/christ-of-the-concord-monument (1).jpg`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "6724"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -17.3935,
      "longitude": -66.1570
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cochabamba",
      "addressRegion": "Cochabamba",
      "addressCountry": "BO"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map((item: any) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
