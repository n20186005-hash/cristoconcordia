export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "cristoconcordia.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "es"
    ? "Monumento al Cristo de la Concordia"
    : locale === "zh"
    ? "和谐基督纪念碑"
    : locale === "qu"
    ? "Cristo de la Concordia"
    : "Christ of the Concord Monument";

  const description = locale === "es"
    ? "Monumento al Cristo de la Concordia en Cochabamba, Bolivia. Impresionante escultura religiosa que simboliza la paz y la unidad."
    : locale === "zh"
    ? "玻利维亚科恰班巴的和谐基督纪念碑（Monumento al Cristo de la Concordia），是一座象征和平与团结的宏伟宗教雕塑。"
    : locale === "qu"
    ? "Cristo de la Concordia, Cochabamba, Bolivia. Religioso escultura."
    : "Christ of the Concord Monument in Cochabamba, Bolivia. A magnificent religious sculpture symbolizing peace and unity.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Place", "LandmarksOrHistoricalBuildings"],
        "name": name,
        "alternateName": ["Monumento al Cristo de la Concordia", "Christ of the Concord Monument", "和谐基督纪念碑", "Cristo de la Concordia"],
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/christ-of-the-concord-monument (1).jpg`,
        
        // 精确地理坐标（科恰班巴和谐基督纪念碑）
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -17.3935,
          "longitude": -66.1570
        },
        
        // 地址信息
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "JV88+72C, Av. de la Concordia",
          "addressLocality": "Cochabamba",
          "addressRegion": "Cochabamba",
          "addressCountry": "BO"
        },
        
        // 开放时间
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "21:00"
        },
        
        // 价格信息
        "priceRange": "Free",
        "isAccessibleForFree": true,
        
        // 景点信息
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "geoCoordinate",
            "value": "JV88+72C, Av. de la Concordia"
          },
          {
            "@type": "PropertyValue",
            "name": "monumentType",
            "value": "Religious sculpture"
          },
          {
            "@type": "PropertyValue",
            "name": "symbolism",
            "value": "Peace and unity"
          }
        ],
        
        // 社交媒体和地图链接
        "sameAs": [
          "https://maps.app.goo.gl/J9HMnLUeamBGn2co8",
          "https://visitbolivia.produccion.gob.bo/",
          "https://cochabamba.bo/"
        ]
      },
      
      // Website 结构化数据
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "es" ? "es-BO" : locale === "zh" ? "zh-CN" : locale === "qu" ? "qu-BO" : "en-US",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Christ of the Concord Monument Guide",
        }
      }
    ]
  };
}
