import {
  ENTITY,
  ENTITY_ID,
  WEBSITE_ID,
  SITE_URL,
  HERO_IMAGE_ABS,
} from "@/lib/site-config";

export function generateSchema(locale: string) {
  const baseUrl = SITE_URL;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? ENTITY.fullNameEs
    : locale === "zh"
    ? "和谐基督纪念碑"
    : locale === "qu"
    ? ENTITY.shortName
    : ENTITY.fullName;

  const description = locale === "es"
    ? `Guía completa del visitante del ${ENTITY.fullNameEs} en ${ENTITY.city}, ${ENTITY.province}, ${ENTITY.country}. Impresionante escultura religiosa que simboliza la paz y la unidad.`
    : locale === "zh"
    ? `${ENTITY.city}的和谐基督纪念碑（${ENTITY.fullNameEs}）游客指南。这座象征和平与团结的宏伟宗教雕塑是南半球最大的基督雕像之一。`
    : locale === "qu"
    ? `${ENTITY.shortName}, ${ENTITY.city}, ${ENTITY.country}. Religioso escultura.`
    : `Comprehensive visitor guide to the ${ENTITY.fullName} in ${ENTITY.city}, ${ENTITY.province}, ${ENTITY.country}. A magnificent religious sculpture symbolizing peace and unity.`;

  const breadcrumbName = locale === "es"
    ? `Inicio > ${ENTITY.city} > ${ENTITY.fullNameEs}`
    : locale === "zh"
    ? `首页 > ${ENTITY.city} > 和谐基督纪念碑`
    : `Home > ${ENTITY.city} > ${ENTITY.fullName}`;

  const inLanguage = locale === "es" ? "es-BO" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-BO" : "en-US";

  return {
    "@context": "https://schema.org",
    "@graph": [
      // ── 景点实体（TouristAttraction）──────────────────────────────
      {
        "@type": ["TouristAttraction", "Place", "LandmarksOrHistoricalBuildings"],
        "@id": ENTITY_ID,
        "name": name,
        "alternateName": [
          ENTITY.shortName,
          ENTITY.fullNameEs,
          ENTITY.fullName,
          "和谐基督纪念碑",
          `${ENTITY.city} ${ENTITY.fullName}`,
        ],
        "description": description,
        "url": localUrl,
        "image": [
          HERO_IMAGE_ABS,
          `${baseUrl}/gallery/christ-of-the-concord-monument (2).jpg`,
          `${baseUrl}/gallery/christ-of-the-concord-monument (7).jpg`,
        ],
        "isAccessibleForFree": true,

        // 评分与评价数量（与 Google 地图公开资料保持一致，助力富媒体摘要）
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": ENTITY.ratingValue,
          "reviewCount": String(ENTITY.reviewCount),
          "bestRating": "5",
          "worstRating": "1",
        },

        // 精确地理坐标（科恰班巴和谐基督纪念碑）
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": ENTITY.latitude,
          "longitude": ENTITY.longitude,
        },

        // 地址信息（NAP 一致性：与 Google 地图资料完全一致）
        "address": {
          "@type": "PostalAddress",
          "streetAddress": ENTITY.streetAddress,
          "addressLocality": ENTITY.city,
          "addressRegion": ENTITY.province,
          "postalCode": ENTITY.postalCode,
          "addressCountry": ENTITY.countryCode,
        },

        // 开放时间
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "08:00",
          "closes": "21:00",
        },

        "hasMap": ENTITY.mapsShareUrl,
        "priceRange": "Free",

        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "geoCoordinate",
            "value": ENTITY.streetAddress,
          },
          {
            "@type": "PropertyValue",
            "name": "monumentType",
            "value": "Religious sculpture",
          },
          {
            "@type": "PropertyValue",
            "name": "symbolism",
            "value": "Peace and unity",
          },
        ],

        // 社交媒体和地图链接
        "sameAs": [ENTITY.mapsShareUrl, ENTITY.govtTourismUrl, "https://cochabamba.bo/"],
      },

      // ── 网站实体（WebSite）────────────────────────────────────────
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        "url": localUrl,
        "name": name,
        "inLanguage": inLanguage,
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Christ of the Concord Monument Guide",
          "url": baseUrl,
        },
        "about": { "@id": ENTITY_ID },
      },

      // ── 面包屑（BreadcrumbList）───────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": `${localUrl}/#breadcrumb`,
        "name": breadcrumbName,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": ENTITY.country,
            "item": baseUrl,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${ENTITY.city}, ${ENTITY.province}`,
            "item": localUrl,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": name,
            "item": localUrl,
          },
        ],
      },
    ],
  };
}
