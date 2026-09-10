/**
 * 单景点 SEO 实体绑定配置
 * ------------------------------------------------------------------
 * 集中维护景点的 NAP（名称 / 地址 / 电话）与地理实体信息，
 * 确保网站正文、结构化数据、地图与页脚显示的信息完全一致。
 *
 * 若需复用到其他景点，仅需替换本文件中的常量即可。
 */

export const SITE_DOMAIN = process.env.CURRENT_SITE_DOMAIN || "cristoconcordia.com";

export const SITE_URL = `https://${SITE_DOMAIN}`;

export const ENTITY = {
  /** 景点官方全称 */
  fullName: "Christ of the Concord Monument",
  /** 景点官方西语全称 */
  fullNameEs: "Monumento al Cristo de la Concordia",
  /** 景点常用俗称 / 域名对应含义 */
  shortName: "Cristo de la Concordia",
  /** 所在城市 */
  city: "Cochabamba",
  /** 所在省 / 州 */
  province: "Cochabamba",
  /** 所在国家 */
  country: "Bolivia",
  /** 两位国家代码 */
  countryCode: "BO",
  /** 邮政编码 */
  postalCode: "2500",
  /** 街道地址 / Plus Code */
  streetAddress: "JV88+72C, Av. de la Concordia",
  /** 纬度 */
  latitude: -17.384311699999998,
  /** 经度 */
  longitude: -66.1349937,
  /** Google Maps 分享短链接 */
  mapsShareUrl: "https://maps.app.goo.gl/J9HMnLUeamBGn2co8",
  /** Google Maps 嵌入 src */
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6767.364461682799!2d-66.1349937!3d-17.384311699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e376ac68bb73bb%3A0x2732d0d1aee659ff!2sChrist%20of%20the%20Concord%20Monument!5e1!3m2!1szh-CN!2s!4v1789006355563!5m2!1szh-CN!2s",
  /** 当地官方旅游局链接（.gob） */
  govtTourismUrl: "https://www.visitbolivia.produccion.gob.bo/lugares",
  /** 周边核心地标 1 */
  nearbyLandmark1: "Centro de Cochabamba (Plaza 14 de Septiembre)",
  /** 周边核心地标 2 */
  nearbyLandmark2: "Santuario de San Antonio & La Cancha",
  /** Google 评分 */
  ratingValue: "4.5",
  /** Google 评价数量 */
  reviewCount: 6817,
} as const;

/** 结构化数据节点锚点 */
export const ENTITY_ID = `${SITE_URL}/#attraction`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** 主视觉图片（Hero） */
export const HERO_IMAGE = "/gallery/christ-of-the-concord-monument (1).jpg";
export const HERO_IMAGE_ABS = `${SITE_URL}${HERO_IMAGE}`;

/** Google Analytics 4 衡量 ID */
export const GA4_ID = "G-HXM22WWPKP";
