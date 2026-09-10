import type { WeatherConditionKey } from "@/lib/weather";
import type { AdviceKey } from "@/lib/weather-advice";

export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type SourceItem = { name: string; description: string; url: string };

export type WeatherAdviceTranslations = {
  title: string;
  clothing: string;
  activity: string;
  items: string;
  risk: string;
  noRisk: string;
  texts: Record<AdviceKey, string>;
};

export type WeatherTranslations = {
  title: string;
  subtitle: string;
  now: string;
  feelsLike: string;
  humidity: string;
  wind: string;
  precipitation: string;
  rainChance: string;
  uvIndex: string;
  forecastTitle: string;
  today: string;
  updated: string;
  unavailable: string;
  advice: WeatherAdviceTranslations;
  conditions: Record<WeatherConditionKey, string>;
  uvLevels: { low: string; moderate: string; high: string; veryHigh: string; extreme: string };
};

export type AmenityItem = { icon: string; title: string; description: string; tip: string };

export type StoryItem = { title: string; content: string };

export type Translations = {
  nav: { history: string; stories: string; architecture: string; monuments: string; visiting: string; amenities: string; transportation: string; recorrido: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string; city: string };
  rating: { reviews: string; source: string };
  entity: { label: string; title: string; intro: string; breadcrumbTitle: string; nearbyTitle: string; nearby: string };
  history: { title: string; intro: string };
  recorrido: { label: string; title: string; intro: string; stationsTitle: string; stations: string[]; sepulcroTitle: string; sepulcroNote: string; caminoTitle: string; camino: string; routesTitle: string; routes: { name: string; meta: string; description: string; bestFor: string }[]; tipsTitle: string; tips: string[] };
  stories: { label: string; title: string; intro: string; items: StoryItem[] };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  weather: WeatherTranslations;
  amenities: { label: string; title: string; intro: string; disclaimer: string; items: AmenityItem[] };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string; drawingTitle: string; drawingCaption: string; drawingAlt: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string; howToVisit: string; officialText: string; officialLinkText: string };
  sources: { title: string; intro: string; items: SourceItem[] };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[]; imageCopyright: string };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史背景", stories: "故事与传统", architecture: "雕塑特色", monuments: "艺术价值", visiting: "游览信息", amenities: "实用设施", transportation: "交通指南", recorrido: "苦路与路线", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["宗教艺术", "文化地标", "科恰班巴必游"], tagline: "玻利维亚 · 科恰班巴", title: "和谐基督纪念碑", subtitle: "Monumento al Cristo de la Concordia · 和平象征 · 宏伟雕塑", cta: "探索纪念碑", city: "科恰班巴" },
    rating: { reviews: "条评价", source: "Google 评论" },
    entity: {
      label: "导览",
      title: "关于和谐基督纪念碑（Christ of the Concord Monument）",
      intro: "欢迎来到 **Christ of the Concord Monument（和谐基督纪念碑）**，它被广泛认为是科恰班巴的核心地标 **Cristo de la Concordia**。它坐落于 **玻利维亚科恰班巴（Cochabamba, Bolivia）** 的中心地带，是前往该地区旅行者的重要枢纽。",
      breadcrumbTitle: "所属层级",
      nearbyTitle: "和谐基督纪念碑周边的地标与景点",
      nearby: "参观 **Christ of the Concord Monument** 时，游客可以轻松探索周边的历史地标与景点，包括 **科恰班巴市中心（Centro de Cochabamba）** 与 **圣安东尼奥教堂及拉坎查市场（Santuario de San Antonio & La Cancha）**。"
    },
    history: {
      title: "历史与宗教意义",
      intro: `和谐基督纪念碑（Monumento al Cristo de la Concordia）位于玻利维亚科恰班巴市，是一座象征和平与团结的宏伟宗教雕塑。\n\n**建造历史与渊源**：这座纪念碑是为了纪念教皇若望·保禄二世（Pope John Paul II）于1988年访问科恰班巴而提议建造的，由当地雕塑家 César 和 Wálter Terrazas Pardo 兄弟设计，最终于1994年完工。雕塑栩栩如生地描绘了基督张开双臂的姿态，象征着对全人类的拥抱与祝福。\n\n**世界级的尺寸记录**：这座雕像不仅是玻利维亚的骄傲，更是南半球最大的基督雕像之一。它的雕像主体高 34.20米，加上基座总高达到 40.44米，这使得它比著名的巴西里约热内卢基督像（Cristo Redentor）还要高出几米。\n\n**文化意义**：作为科恰班巴的重要宗教和文化地标，和谐基督纪念碑不仅吸引了众多信徒前来朝圣，也成为游客了解玻利维亚宗教艺术和文化的重要窗口。`
    },
    recorrido: {
      label: "朝圣路线",
      title: "苦路十四站：圣佩德罗山上的朝圣之路",
      intro: "登上和谐基督纪念碑不只是一段观景路。自 2025 年 4 月起，圣佩德罗山的台阶沿线新增了常设的「苦路」（Vía Crucis），如今已是科恰班巴宗教旅游的核心，也是理解这座雕像精神内涵最好的方式。",
      stationsTitle: "苦路十四站",
      stations: ["耶稣被判死刑", "耶稣背负十字架", "耶稣第一次跌倒", "耶稣遇见母亲玛利亚", "基勒乃人西满帮助耶稣", "韦罗尼加为耶稣拭面", "耶稣第二次跌倒", "耶稣安慰耶路撒冷的妇女", "耶稣第三次跌倒", "耶稣被剥去衣服", "耶稣被钉在十字架上", "耶稣死在十字架上", "耶稣被卸下十字架", "耶稣被安葬"],
      sepulcroTitle: "第十五站：圣墓（Santo Sepulcro）",
      sepulcroNote: "在十四站之后还有 **圣墓（Santo Sepulcro）**，为整条苦路画上句点，也指向复活。沿线每座雕塑站由当地家庭与企业家捐资建成（每座约 Bs 140,000），台阶也开放认捐（每级 Bs 400），石阶上嵌有捐赠者姓名的铭牌。",
      caminoTitle: "沿途风景：石阶、三角梅与观景台",
      camino: "上山走的是 **圣佩德罗山石阶**；公开资料的台阶数量不一（约 1,300 至 2,000 级，视起点与路线而定）。市政改造工程沿线种下 2,500 多株 **三角梅（bugambilias）** 并配套滴灌，还增设了石制观景台、太阳能照明、饮水点，甚至一座 **日晷**。建议清晨出发，带足饮水、穿防滑鞋：下雨时石阶会变得湿滑。",
      routesTitle: "两种上山方式：步行苦路 vs 缆车",
      routes: [
        { name: "步行：石阶与苦路", meta: "约 1,300-2,000 级台阶 · 45-90 分钟", description: "适合想在每一站停留、拍摄苦路雕塑、体验朝圣氛围的游客。海拔约 2,550 米，爬升对体力有一定要求。", bestFor: "适合：文化体验、摄影、朝圣" },
        { name: "缆车（Teleférico）", meta: "票价约 Bs 7.50 · 线路约 860 米", description: "从 Parque de la Autonomía 出发，数分钟直达山顶，沿途可俯瞰整座山谷。带小孩、时间紧张，或想保留体力参观雕像内部时更合适。", bestFor: "适合：家庭、时间有限、俯瞰全景" }
      ],
      tipsTitle: "朝圣路线小贴士",
      tips: [
        "🌅 **早些出发**：清晨人少、气温舒适，光线也最适合拍摄苦路雕塑。",
        "🙏 **圣周（Semana Santa）**期间会有大型游行与朝圣活动，请提前规划并尊重现场宗教仪式。",
        "💧 带足饮用水并做好防晒；海拔较高，爬升较费力。",
        "👟 穿防滑鞋，避免雨天或夜间步行上山。",
        "🔒 如选择步行，尽量结伴并在人多时段进行。"
      ]
    },
    stories: {
      label: "深度阅读",
      title: "历史故事、传说与文化传统",
      intro: "理解一座纪念碑，最好的方式是听它的故事。以下内容依据公开史料与地方文化记录整理，帮助你了解这座雕像为何成为科恰班巴的精神象征。",
      items: [
        { title: "一场教皇到访催生的城市心愿（1987–1988）", content: "1987 年，科恰班巴得知教皇若望·保禄二世将于次年到访，全城希望留下一份足以跨越世代的纪念，于是在圣佩德罗山顶建造一座巨大基督像的构想被提出。1988 年教皇到访时雕像尚在建设中，但愿景已经确立——这份「为一次到访而建、却献给整座城市」的心愿，成为纪念碑最动人的起点。" },
        { title: "Terrazas Pardo 兄弟：把图纸变成 40 米高的人", content: "纪念碑由科恰班巴本地雕塑家 César Terrazas Pardo 与 Wálter Terrazas Pardo 兄弟设计并主持制作。他们在有限的技术条件下，把一张图纸放大成近 40 米高的写实人像：面部比例、长袍褶皱、张开双臂的角度，都必须在大尺度下依然显得自然而庄严。1994 年，雕像正式落成。" },
        { title: "七年建造：从 1987 到 1994 的耐心", content: "雕像于 1987 年动工，历时约七年，于 1994 年 9 月完工并向公众开放。主体高 34.20 米，基座约 6.24 米，总高约 40.44 米，总重量约 2,200 吨。它比里约热内卢的基督像（约 30 米主体、38 米含基座）还要高，是南半球规模最大的基督雕像之一。" },
        { title: "「Concordia」的含义：为什么叫和谐", content: "Concordia 在西班牙语与拉丁语中意为「和谐、同心」。雕像张开双臂的姿态并非单纯的宗教图像，而是城市对自身的期许：不同阶层、不同信仰、不同来处的人，都能在这座山谷城市里彼此接纳。今天它既是朝圣地，也是科恰班巴市民的公共会客厅。" },
        { title: "登顶与朝圣：雕像内部的 1,399 级台阶", content: "雕像内部为中空结构，游客可沿 1,399 级螺旋阶梯上行，抵达位于基督手臂内部的观景台，透过瞭望孔俯瞰整座科恰班巴谷地与远处的 Tunari 山脉。每逢圣周（Semana Santa）等宗教节日，这里也是当地人祈祷与游行的重要一站。" },
        { title: "从山顶看城市：「永恒春城」的地理解释", content: "纪念碑坐落于圣佩德罗山（Cerro San Pedro）山顶，城市本身海拔约 2,550 米，位于安第斯山谷之中，四季温和，因此被称为「永恒春城」（Ciudad de la Eterna Primavera）。相对拉巴斯等高海拔城市，这里海拔更低、气候更舒适，多数游客不会有明显高原反应。" }
      ]
    },
    curiosities: {
      title: "隐藏的故事：艺术价值与象征意义",
      content: `**内部探索的冷知识**：你可能不知道，雕像内部其实是中空的！游客可以攀登内部的 1,399级螺旋阶梯，一直到达基督手臂内部的观景台，通过瞭望孔俯瞰整个科恰班巴谷地的壮丽景色。\n\n**艺术风格**：和谐基督纪念碑采用了写实主义雕塑风格，基督的形象庄重而慈祥，细节刻画精致，展现出高超的雕塑艺术水平。\n\n**象征意义**：纪念碑的名称"Concordia"（和谐）体现了其核心价值——促进不同文化、信仰人群之间的理解、尊重与和谐共处。张开双臂的基督形象，传递出包容与博爱的普世价值。\n\n**参观礼仪**：作为宗教场所，请游客保持庄重和安静。尊重当地的宗教习俗，穿着得体，避免大声喧哗。`
    },
    architecture: {
      title: "雕塑特色与艺术结构",
      intro: "和谐基督纪念碑是一座精美的宗教雕塑作品，展现出卓越的艺术价值和深刻的宗教内涵。雕塑的每一个细节都经过精心雕琢，传递出和平与爱的讯息。",
      specs: {
        structure: { title: "雕塑结构", content: "纪念碑采用高质量材料建造，结构稳固。基督雕像栩栩如生，细节精致，包括面部表情、衣纹褶皱等都刻画得非常逼真。" },
        design: { title: "艺术设计", content: "雕塑设计师巧妙地捕捉了基督的慈爱与庄严。张开双臂的姿态象征着拥抱全人类，传达出和平、爱与和谐的普世价值。" },
        optics: { title: "观赏体验", content: "纪念碑周围环境宁静优美，是反思、祈祷和摄影的理想场所。白天和夜晚的灯光效果各有特色，为游客提供不同的视觉体验。" }
      },
      plaque: {
        title: "纪念碑基本信息",
        items: [
          { label: "名称", value: "Monumento al Cristo de la Concordia（和谐基督纪念碑）" },
          { label: "位置", value: "科恰班巴市，玻利维亚" },
          { label: "开放时间", value: "08:00 - 21:00" },
          { label: "类型", value: "宗教雕塑、文化地标" },
          { label: "象征意义", value: "和平、团结、和谐" },
          { label: "推荐参观", value: "清晨或傍晚" }
        ]
      }
    },
    monuments: {
      title: "艺术价值解析",
      intro: "和谐基督纪念碑不仅是一座宗教雕塑，更是一件精美的艺术品，具有深刻的艺术价值和文化内涵。",
      items: [
        { name: "基督雕像", description: "雕塑的核心部分，栩栩如生地描绘了基督张开双臂的姿态。雕像的高度和细节处理都体现出雕塑家的高超技艺，传达出和平与爱的讯息。" },
        { name: "基座与周边", description: "纪念碑的基座设计简洁大方，与雕塑主体相得益彰。周边环境经过精心布置，为游客提供一个宁静、祥和的参观空间。" }
      ]
    },
    contrast: {
      title: "穿越时空的和平象征",
      intro: "和谐基督纪念碑虽然建成时间相对较短，但它已经成为科恰班巴乃至整个玻利维亚的重要文化符号。通过不同时期的照片对比，我们可以感受到这座纪念碑在城市发展中的重要性。",
      before: "Cerro San Pedro 景观 (1980s)",
      after: "今日的 圣佩德罗山与纪念碑"
    },
    visiting: {
      title: "开放时间与门票",
      intro: "和谐基督纪念碑是探索科恰班巴宗教文化和艺术的重要去处。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "08:00 - 21:00（每天）", note: "建议清晨或傍晚参观，光线柔和，气温宜人。" },
      price: { title: "门票信息", content: "免费开放", note: "纪念碑对外免费开放，欢迎所有游客前来参观。" },
      duration: { title: "游览时长", content: "建议游览时间：30分钟 - 1小时\n可以静静地欣赏雕塑艺术，拍照留念，或在此反思冥想。", note: "时间可根据个人兴趣灵活安排。" },
      tips: { title: "游览贴士与注意事项", items: [
        "⚠️ **着装要求**：作为宗教场所，建议穿着得体，避免过于暴露的服装",
        "保持安静，尊重他人的祈祷和反思",
        "可以拍照，但请关闭闪光灯",
        "携带饮用水，科恰班巴气候温暖",
        "清晨和傍晚是最佳参观时段",
        "可与科恰班巴市中心的其他景点安排在同一天游览",
        "🌱 **文明参观**：请保持环境整洁，不要攀爬雕塑或基座，共同维护这一庄严的文化空间"
      ] }
    },
    weather: {
      title: "实时天气与未来预报",
      subtitle: "出发前先看一眼，决定要不要带伞、要不要防晒（科恰班巴 · 圣佩德罗山，海拔约 2,550 米）",
      now: "当前",
      feelsLike: "体感温度",
      humidity: "湿度",
      wind: "风速",
      precipitation: "降水量",
      rainChance: "降水概率",
      uvIndex: "紫外线",
      forecastTitle: "未来 7 天预报",
      today: "今天",
      updated: "更新时间",
      unavailable: "天气数据暂时不可用，请稍后刷新页面。",
      advice: {
        title: "出行建议",
        clothing: "出行穿搭",
        activity: "游玩安排",
        items: "随身物品",
        risk: "风险提醒",
        noRisk: "暂无气象预警，天气整体平稳。",
        texts: {
          clothingHot: "气温偏高（最高 {max}℃），建议穿轻薄透气的衣物，尽量避开正午外出。",
          clothingCold: "气温偏低（最高仅 {max}℃），注意防寒保暖，建议穿厚外套。",
          clothingDiurnal: "昼夜温差约 {range}℃，建议备一件外套，方便随时增减衣物。",
          clothingRainy: "有降雨，建议穿防水外套或防滑鞋，注意路面湿滑。",
          clothingWindy: "风力偏大（约 {wind} km/h），建议穿防风外套，避免宽松长裙或易被吹起的衣物。",
          clothingMild: "天气温和，正常穿着即可，早晚可加一件薄外套。",
          activityClear: "天气晴朗，适合户外游览，也是观赏日出日落的好时机。",
          activityCloudy: "多云或阴天光线柔和，很适合拍照，也适合长时间户外逛游。",
          activityRain: "有小雨，露天观景体验会打折扣，建议优先安排室内或半室内活动。",
          activityHeavyRain: "降雨较强，不建议进行户外游玩，缆车等露天项目可能停运，可优先选择室内景点。",
          activityThunder: "雷雨天气，不要登山、不要在水边停留，也不要在树下或空旷高地避雨。",
          activityHot: "天气晴好但气温较高，建议避开正午时段，缩短连续户外活动时间。",
          activityWindy: "风力偏大，缆车与部分露天项目可能受影响，注意高空与山脊处安全。",
          activityHighWind: "大风天气，远离广告牌、临时搭建物与山脊高处，户外活动请谨慎。",
          activityFog: "能见度较差，不适合登高观景，行程可考虑顺延。",
          activityMild: "天气平稳，适合按计划游览，出行前留意临近时段的变化。",
          itemUmbrella: "折叠伞",
          itemRaincoat: "雨衣（不建议长柄伞，风大时不便）",
          itemSunscreen: "防晒霜、墨镜、遮阳帽",
          itemWater: "充足饮用水",
          itemJacket: "一件外套（应对早晚温差）",
          itemWarm: "厚外套、围巾等保暖用品",
          itemMask: "口罩（大雾或能见度差时使用）",
          itemSecureHat: "帽子请固定好，不建议佩戴易被吹落的配饰",
          riskThunder: "【气象预警】雷雨天气，请调整行程，不要前往山区、水边等危险区域，密切关注天气变化。",
          riskHeavyRain: "【气象预警】降雨较强，请避开山谷、低洼地带与湿滑台阶，注意防滑与落石风险。",
          riskHighWind: "【气象预警】大风天气，请远离广告牌、临时设施与山脊高处，谨慎安排户外行程。",
          riskFog: "【气象预警】能见度较低，登高观景视线受阻，请留意交通与缆车运行情况。",
          riskExtremeUv: "【气象预警】紫外线极强，请加强防晒，避免长时间暴晒，注意补水。"
        }
      },
      conditions: { clear: "晴", mainlyClear: "晴间多云", partlyCloudy: "局部多云", overcast: "阴", fog: "雾", drizzle: "小雨", rain: "雨", showers: "阵雨", snow: "雪", thunderstorm: "雷雨" },
      uvLevels: { low: "弱", moderate: "中等", high: "强", veryHigh: "很强", extreme: "极强" }
    },
    amenities: {
      label: "实用设施",
      title: "游览所需的生活设施",
      intro: "以下为纪念碑周边及科恰班巴市区常见的生活设施类型，帮助你合理安排行程。设施属公共服务信息，具体开放情况可能随时调整，请以现场为准。",
      disclaimer: "本网站为非营利科普平台，仅提供设施类型参考，不推荐、也不与任何具体商户合作，请根据自身需求自行选择。",
      items: [
        { icon: "🚻", title: "公共洗手间", description: "纪念碑广场及缆车站附近设有公共洗手间；市区内的公园、商场与餐饮场所通常也提供。", tip: "山顶洗手间数量有限，建议上山前先在市区解决。" },
        { icon: "🅿️", title: "停车", description: "山顶纪念碑旁设有停车区域；市中心与缆车起点站附近也有公共或商场停车场。", tip: "周末与节假日车位紧张，建议提早出发或改乘缆车。" },
        { icon: "🍽️", title: "餐饮", description: "科恰班巴市中心（Centro）与拉坎查市场（La Cancha）周边餐饮密集，从地方小吃、市场熟食到正式餐厅一应俱全。", tip: "山顶餐饮选择较少，建议在市区用餐后再上山。" },
        { icon: "🏨", title: "住宿", description: "市中心、北区（Zona Norte）及机场沿线分布有酒店、精品旅馆与青年旅舍，价位从经济到高端不等。", tip: "希望步行游览老城的旅客，可优先考虑市中心住宿。" },
        { icon: "🛒", title: "商超与便利店", description: "市中心与主要大道沿线有大型超市、连锁便利店与社区小卖部，可购买饮用水、零食与日常用品。", tip: "上山前先备好饮用水，山顶售价通常更高。" },
        { icon: "⛽", title: "加油与充电", description: "市区主要干道沿线设有加油站；电动车充电设施在科恰班巴仍较为有限。", tip: "自驾出行请提前规划加油点；电动车用户建议出发前确认充电站位置。" },
        { icon: "💊", title: "医疗与药房", description: "市中心及主干道沿线分布有药房与诊所，大型综合医院多位于城市主要区域。", tip: "建议随身携带常用药物；如感不适请及时休息并就医。" }
      ]
    },
    transportation: {
      title: "如何前往：缆车与台阶",
      airport: { title: "✈️ 科恰班巴国际机场 (CBB) ➔ 和谐基督纪念碑", content: "Jorge Wilstermann 国际机场位于科恰班巴市附近，距离和谐基督纪念碑较近。", options: [
        { name: "出租车/网约车（推荐）", price: "约 20-40 玻利维亚诺", time: "15-25 分钟", steps: ["在机场到达大厅外寻找官方出租车柜台或使用 Uber/inDrive 等网约车软件", "告知司机前往 Cristo de la Concordia（和谐基督纪念碑）", "科恰班巴交通相对便利，车程较短"] }
      ]},
      publicTransport: {
        title: "🚌 公共交通与缆车",
        content: "从科恰班巴市中心前往圣佩德罗山顶（Cerro San Pedro）有以下几种主要方式：",
        options: [
          {
            name: "🚡 缆车 (Teleférico) - 推荐 & 最安全",
            description: "乘坐缆车直达山顶是90%以上游客的首选，既安全又能俯瞰全城。",
            steps: [
              "前往位于 Parque de la Autonomía 的缆车起点站",
              "购买往返票（约 10-15 玻利维亚诺）",
              "享受约 5-10 分钟的空中全景之旅，直达纪念碑下方"
            ]
          },
          {
            name: "🚕 出租车/网约车",
            description: "如果您不想乘坐缆车，可以直接打车前往山顶的停车场。",
            steps: [
              "使用 Uber 或 inDrive 叫车",
              "直接定位到 Cristo de la Concordia 停车场",
              "车程约 15-20 分钟"
            ]
          },
          {
            name: "⚠️ 步行台阶 - 需注意治安",
            description: "有一条拥有 2000 多级台阶的步道通往山顶。但出于安全考虑，非常不建议游客单独步行爬山，沿途曾发生针对游客的抢劫事件。",
            steps: [
              "不推荐选择此方式",
              "如必须步行，请务必在周末人多时，结伴而行，并避免携带贵重物品"
            ]
          }
        ]
      },
      city: { title: "🚶 从科恰班巴市中心出发", content: "和谐基督纪念碑位于科恰班巴市内，从市中心出发建议优先选择缆车（Teleférico）。建议预留半天时间，将纪念碑与附近景点一并游览。", steps: ["从市中心前往缆车站（Parque de la Autonomía）", "乘坐缆车登顶，安全又快捷", "到达后步行进入纪念碑广场"] },
      tips: { title: "交通与气候小贴士", items: [
        "🌡️ **气候优势**：科恰班巴海拔约 2500 米，气候温暖宜人，被称为'永恒春城'，是玻利维亚气候最舒适的城市之一",
        "市区内建议使用打车软件（Uber/inDrive）更安全便捷",
        "强烈推荐乘坐缆车上山，风景极佳且最安全",
        "参观时间建议安排在清晨或傍晚，避开中午的炎热",
        "可与科恰班巴市中心、拉坎查市场等景点安排在同一行程"
      ] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自和谐基督纪念碑的声音：Google Maps 真实见证", 
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "参观完和谐基督纪念碑后，您可以顺道游览以下附近景点：",
      nearbyItems: [
        { name: "科恰班巴市中心 (Centro de Cochabamba)", description: "玻利维亚的美食之都（Capital Gastronómica de Bolivia），拥有历史悠久的教堂、广场，以及美味的地方美食。" },
        { name: "圣安东尼奥教堂 (Santuario de San Antonio)", description: "科恰班巴著名的教堂，建筑风格独特，是当地重要的宗教场所。" },
        { name: "拉坎查市场 (La Cancha)", description: "南美洲最大的露天市场之一，您可以体验最地道的玻利维亚市井生活，购买手工艺品和品尝当地小吃。" }
      ]
    },
    gallery: { title: "照片集锦与设计线稿", viewMore: "在 Google Maps 查看更多相片", drawingTitle: "设计线稿（Dibujo）", drawingCaption: "和谐基督纪念碑设计线稿——Terrazas Pardo 兄弟正是将这一构想放大为 40 米高的巨型雕像。", drawingAlt: "和谐基督纪念碑设计线稿（dibujo del Cristo de la Concordia）" },
    faq: { title: "常见问题", subtitle: "深入了解和谐基督纪念碑", items: [
      { question: "和谐基督纪念碑的开放时间和门票价格？", answer: "开放时间：每天 08:00 - 21:00。门票：免费开放。所有游客都可以免费参观这座纪念碑。" },
      { question: "游览和谐基督纪念碑需要多长时间？", answer: "建议游览时间：30分钟 - 1小时。您可以静静地欣赏雕塑艺术，拍照留念，或在此反思冥想。时间可根据个人兴趣灵活安排。" },
      { question: "和谐基督纪念碑的海拔是多少？气候如何？", answer: "科恰班巴海拔约 2500 米，气候温暖宜人，被称为'永恒春城'。相比拉巴斯和波托西等高原城市，科恰班巴的气候更加舒适，几乎不会有高原反应。" },
      { question: "参观和谐基督纪念碑有什么注意事项？", answer: "⚠️ 着装要求：作为宗教场所，建议穿着得体。保持安静，尊重他人的祈祷和反思。可以拍照，但请关闭闪光灯。请保持环境整洁，不要攀爬雕塑或基座。" },
      { question: "和谐基督纪念碑有多高？在世界范围内排名如何？", answer: "雕像主体高 34.20 米，加上基座总高达到 40.44 米，是南半球最大的基督雕像之一，比巴西里约热内卢的基督像（Cristo Redentor）还要高出几米。" },
      { question: "和谐基督纪念碑内部可以参观吗？", answer: "可以。雕像内部为中空结构，游客可以攀登 1,399 级螺旋阶梯，抵达基督手臂内部的观景台，通过瞭望孔俯瞰整个科恰班巴谷地的壮丽景色。" },
      { question: "和谐基督纪念碑附近有哪些值得游览的景点？", answer: "参观完纪念碑后，可以顺道游览科恰班巴市中心（Centro de Cochabamba）、圣安东尼奥教堂（Santuario de San Antonio）以及南美洲最大的露天市场之一拉坎查市场（La Cancha）。" },
      { question: "和谐基督纪念碑的「苦路十四站」是什么？", answer: "这是 2025 年 4 月在圣佩德罗山台阶沿线落成的朝圣路线（Vía Crucis），包含 14 座耶稣苦路雕塑站以及圣墓（Santo Sepulcro），沿石阶一路通往山顶雕像。圣周（Semana Santa）期间，这里是科恰班巴宗教旅游与朝圣活动的核心。" },
      { question: "可以坐缆车到和谐基督纪念碑吗？", answer: "可以。缆车（Teleférico）从 Parque de la Autonomía 出发，几分钟即可抵达山顶，单程票价约 Bs 7.50（线路约 860 米）。也可以沿苦路石阶步行上山（约 1,300-2,000 级），或从市中心乘坐出租车前往。" },
      { question: "和谐基督纪念碑是谁设计、何时建成的？", answer: "纪念碑由科恰班巴本地雕塑家 César 与 Wálter Terrazas Pardo 兄弟设计，1987 年 7 月 12 日动工，1994 年 11 月 20 日落成，用以纪念教皇若望·保禄二世 1988 年访问科恰班巴。" }
    ]},
    location: { title: "地图位置", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia\n（玻利维亚科恰班巴）", openMaps: "在 Google Maps 查看位置", howToVisit: "如何前往：乘坐缆车（Teleférico）从 Parque de la Autonomía 直达山顶，或从市中心打车约 15-20 分钟。", officialText: "如需官方最新资讯与区域旅游信息，请访问", officialLinkText: "玻利维亚官方旅游门户" },
    sources: { title: "资料来源与权威参考", intro: "为帮助您规划行程并核实信息，我们参考了以下官方与权威来源。", items: [
      { name: "玻利维亚旅游局 · 科恰班巴大区", description: "玻利维亚国家旅游推广机构发布的科恰班巴地区官方景点信息。", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "科恰班巴市政府", description: "科恰班巴市官方门户，提供市政公告与城市资讯。", url: "https://www.cochabamba.bo/" },
      { name: "玻利维亚国家旅游门户", description: "玻利维亚国家级旅游资讯与目的地介绍。", url: "https://boliviatravel.gob.bo/" },
      { name: "玻利维亚旅游与文化部", description: "负责玻利维亚文化遗产与旅游事务的官方部委。", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Google 地图景点资料", description: "和谐基督纪念碑的 Google 地图官方收录页面，含实时评分与地址。", url: "https://maps.app.goo.gl/J9HMnLUeamBGn2co8" }
    ]},
    footer: { callToAction: "作为科恰班巴的重要文化地标，请与我们一起爱护环境、尊重宗教习俗，共同维护这一庄严而美丽的空间。", text: "© 2026 和谐基督纪念碑指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播和谐基督纪念碑信息。我们与玻利维亚政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", imageCopyright: "图片版权声明：本网站所展示的所有图片产权及版权均归原摄影者所有。", links: [
      { name: "玻利维亚旅游局科恰班巴大区", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "科恰班巴市政府", url: "https://www.cochabamba.bo/" },
      { name: "玻利维亚国家旅游推广门户", url: "https://boliviatravel.gob.bo/" },
      { name: "玻利维亚旅游与文化部", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "认识玻利维亚官方旅游导览计划", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  en: {
    nav: { history: "History", stories: "Stories", architecture: "Features", monuments: "Art Value", visiting: "Visit Info", amenities: "Facilities", transportation: "Transportation", recorrido: "Route & Vía Crucis", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Religious Art", "Cultural Landmark", "Cochabamba Must-See"], tagline: "Bolivia · Cochabamba", title: "Christ of the Concord Monument", subtitle: "Monumento al Cristo de la Concordia · Symbol of Peace · Magnificent Sculpture", cta: "Explore the Monument", city: "Cochabamba" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    entity: {
      label: "Introduction",
      title: "About Christ of the Concord Monument",
      intro: "Welcome to the **Christ of the Concord Monument**, widely recognized as the central **Cristo de la Concordia**. Located in the heart of **Cochabamba**, **Cochabamba Department**, **Bolivia**, this destination serves as a primary hub for travelers visiting the region.",
      breadcrumbTitle: "Location Hierarchy",
      nearbyTitle: "Landmarks & Attractions Around Cristo de la Concordia",
      nearby: "When visiting the **Christ of the Concord Monument**, visitors can easily explore surrounding historical landmarks and points of interest, including **Centro de Cochabamba (Plaza 14 de Septiembre)** and **Santuario de San Antonio & La Cancha**."
    },
    history: {
      title: "History & Meaning of the Christ of the Concord",
      intro: `The Christ of the Concord Monument (Monumento al Cristo de la Concordia) is located in Cochabamba, Bolivia. It is a magnificent religious sculpture symbolizing peace and unity.\n\n**Construction History & Origins**: The monument was proposed to commemorate the visit of Pope John Paul II to Cochabamba in 1988. Designed by local sculptors César and Wálter Terrazas Pardo, it was completed in 1994. The sculpture vividly depicts Christ with open arms, symbolizing an embrace and blessing for all humanity.\n\n**World-Class Size Record**: This statue is not only the pride of Bolivia but also one of the largest Christ statues in the Southern Hemisphere. The main statue is 34.20 meters tall, and with its base, it reaches a total height of 40.44 meters, making it taller than the famous Christ the Redeemer (Cristo Redentor) in Rio de Janeiro.\n\n**Cultural Significance**: As an important religious and cultural landmark in Cochabamba, the Christ of the Concord Monument attracts many pilgrims and serves as an important window for visitors to understand Bolivian religious art and culture.`
    },
    recorrido: {
      label: "Pilgrim Route",
      title: "The Route: The Stations of the Cross on Cerro San Pedro",
      intro: "Climbing to the Christ of the Concord is more than a viewpoint. Since April 2025 the stairway of Cerro San Pedro has been lined with a permanent Vía Crucis (Stations of the Cross) — now the heart of Cochabamba's religious tourism and the best way to understand the monument's spiritual meaning.",
      stationsTitle: "The 14 Stations of the Cross",
      stations: ["Jesus is condemned to death", "Jesus carries his cross", "Jesus falls for the first time", "Jesus meets his mother Mary", "Simon of Cyrene helps Jesus", "Veronica wipes the face of Jesus", "Jesus falls for the second time", "Jesus consoles the women of Jerusalem", "Jesus falls for the third time", "Jesus is stripped of his garments", "Jesus is nailed to the cross", "Jesus dies on the cross", "Jesus is taken down from the cross", "Jesus is laid in the tomb"],
      sepulcroTitle: "Station 15: the Holy Sepulchre (Santo Sepulcro)",
      sepulcroNote: "After the fourteen stations comes the **Holy Sepulchre**, which closes the route and points to the Resurrection. Each sculpted station was funded by local families and businesspeople (about Bs 140,000 each), and individual steps can be sponsored for Bs 400, with donor names set into the stone.",
      caminoTitle: "Along the way: stairs, bougainvillea and viewpoints",
      camino: "The climb follows the **stairs of Cerro San Pedro**; published figures for the number of steps vary (roughly 1,300 to 2,000 depending on the starting point and route). The municipal project planted over 2,500 **bougainvillea** with drip irrigation and added stone viewpoints, solar lighting, water points and even a **sundial**. Start early, carry water and wear shoes with good grip: the steps turn slippery in the rain.",
      routesTitle: "Two ways up: on foot via the Vía Crucis, or by cable car",
      routes: [
        { name: "On foot: stairs & Vía Crucis", meta: "About 1,300-2,000 steps · 45-90 minutes", description: "Best for travellers who want to pause at each station, photograph the sculptures and experience the sense of pilgrimage. At about 2,550 m the climb is physically demanding.", bestFor: "Best for: culture, photography and pilgrimage" },
        { name: "Cable car (Teleférico)", meta: "About Bs 7.50 · 860 m line", description: "Runs from Parque de la Autonomía to the summit in a few minutes, with panoramic views over the valley. Ideal with children, when time is short, or to save energy for the viewpoint inside the statue.", bestFor: "Best for: families, limited time and panoramic views" }
      ],
      tipsTitle: "Vía Crucis tips",
      tips: [
        "🌅 **Go early**: fewer people, cooler air and the best light for photographing the stations.",
        "🙏 During **Holy Week (Semana Santa)** there are large processions and pilgrimages — plan ahead and respect the ceremonies.",
        "💧 Carry plenty of water and use sun protection; the altitude makes the climb harder.",
        "👟 Wear shoes with good grip and avoid walking up in the rain or after dark.",
        "🔒 If you walk, go with others and prefer busier hours."
      ]
    },
    stories: {
      label: "In Depth",
      title: "History, Stories & Cultural Traditions",
      intro: "The best way to understand a monument is through its story. The following is compiled from public historical records and local cultural documentation to explain why this statue became the spiritual symbol of Cochabamba.",
      items: [
        { title: "A City's Wish Born from a Papal Visit (1987–1988)", content: "In 1987 Cochabamba learned that Pope John Paul II would visit the city the following year, and the city wanted to leave behind a memorial that would outlast a generation. The idea of raising a colossal Christ on Cerro San Pedro was born. When the Pope arrived in 1988 the statue was still under construction, but the vision was already set — a memorial built for a single visit, yet given to the whole city." },
        { title: "The Terrazas Pardo Brothers: Turning a Drawing into a 40-Metre Figure", content: "The monument was designed and led by local Cochabamba sculptors César Terrazas Pardo and Wálter Terrazas Pardo. Working with limited technology, they scaled a drawing into a realistic figure nearly 40 metres tall — facial proportions, robe folds and the angle of the open arms all had to remain natural and dignified at monumental scale. The statue was completed in 1994." },
        { title: "Seven Years of Patience: 1987 to 1994", content: "Construction began in 1987 and took about seven years, finishing in September 1994. The figure is 34.20 m tall on a base of about 6.24 m, reaching roughly 40.44 m in total and weighing around 2,200 tonnes. It stands taller than Christ the Redeemer in Rio de Janeiro (about 30 m figure, 38 m with pedestal), making it one of the largest Christ statues in the Southern Hemisphere." },
        { title: "What 'Concordia' Means — and Why It Matters", content: "'Concordia' means harmony, an agreement of hearts. The open-armed pose is not only a religious image but a civic aspiration: that people of different classes, faiths and origins can accept one another in this valley city. Today it is both a place of pilgrimage and a public meeting place for cochabambinos." },
        { title: "Climbing and Pilgrimage: 1,399 Steps Inside", content: "The statue is hollow. Visitors climb 1,399 spiral steps to viewing platforms inside Christ's arms, looking out through the lookout holes over the whole Cochabamba valley and the distant Tunari range. During Holy Week (Semana Santa) and other religious festivals it is a key stop for local prayer and processions." },
        { title: "Reading the City from the Summit: the 'City of Eternal Spring'", content: "The monument sits on the summit of Cerro San Pedro. The city lies at about 2,550 m in an Andean valley with mild weather year-round, earning the name 'City of Eternal Spring' (Ciudad de la Eterna Primavera). Because it is lower and gentler than La Paz or Potosí, most visitors experience little or no altitude sickness." }
      ]
    },
    curiosities: {
      title: "Hidden Stories: Artistic Value & Symbolic Meaning",
      content: `**Internal Exploration**: You might not know that the statue is actually hollow! Visitors can climb the 1,399 spiral steps inside, reaching the viewing platforms in Christ's arms to enjoy a breathtaking panoramic view of the Cochabamba valley through lookout holes.\n\n**Artistic Style**: The Christ of the Concord Monument adopts a realistic sculpture style, Christ's image is solemn and benevolent, with exquisite detail carving.\n\n**Symbolic Meaning**: The monument's name "Concordia" (harmony) reflects its core value—promoting understanding, respect, and harmonious coexistence. The image of Christ with open arms conveys universal values of inclusion and love.\n\n**Visit Etiquette**: As a religious site, please maintain solemnity and quietness. Respect local religious customs, dress appropriately, and avoid loud noises.`
    },
    architecture: {
      title: "Sculpture Features & Artistic Structure",
      intro: "The Christ of the Concord Monument is a exquisite work of religious sculpture, demonstrating outstanding artistic value and profound religious connotation. Every detail of the sculpture is carefully crafted, conveying the message of peace and love.",
      specs: {
        structure: { title: "Sculpture Structure", content: "The monument is built with high-quality materials, with a stable structure. The statue of Christ is vivid and lifelike, with exquisite details, including facial expression and clothing folds, all depicted very realistically." },
        design: { title: "Artistic Design", content: "The sculpture designer cleverly captured the benevolence and majesty of Christ. The posture with open arms symbolizes an embrace of all humanity, conveying universal values of peace, love, and harmony." },
        optics: { title: "Viewing Experience", content: "The environment around the monument is quiet and beautiful, making it an ideal place for reflection, prayer, and photography. The lighting effects during the day and at night have their own characteristics, providing visitors with different visual experiences." }
      },
      plaque: {
        title: "Basic Monument Information",
        items: [
          { label: "Name", value: "Monumento al Cristo de la Concordia (Christ of the Concord Monument)" },
          { label: "Location", value: "Cochabamba City, Bolivia" },
          { label: "Opening Hours", value: "08:00 - 21:00" },
          { label: "Type", value: "Religious sculpture, Cultural landmark" },
          { label: "Symbolism", value: "Peace, Unity, Harmony" },
          { label: "Best Time to Visit", value: "Early morning or evening" }
        ]
      }
    },
    monuments: {
      title: "Art Value Analysis",
      intro: "The Christ of the Concord Monument is not only a religious sculpture but also a exquisite work of art, with profound artistic value and cultural connotation.",
      items: [
        { name: "Christ Statue", description: "The core part of the sculpture vividly depicts Christ with open arms. The height of the statue and the detailed processing all reflect the superb craftsmanship of the sculptor, conveying the message of peace and love." },
        { name: "Base and Surroundings", description: "The base design of the monument is simple and elegant, complementing the main sculpture. The surrounding environment is carefully arranged to provide visitors with a quiet and peaceful visiting space." }
      ]
    },
    contrast: {
      title: "Symbol of Peace Across Time",
      intro: "Although the Christ of the Concord Monument was built relatively recently, it has become an important cultural symbol of Cochabamba and even the entire Bolivia. Through photo contrasts from different periods, we can feel the importance of this monument in the city's development.",
      before: "Monument Under Construction",
      after: "Today: Christ of the Concord Monument"
    },
    visiting: {
      title: "Opening Hours & Prices",
      intro: "The Christ of the Concord Monument is an important place to explore Cochabamba's religious culture and art. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "08:00 - 21:00 (Daily)", note: "Early morning or evening visits are recommended for soft light and pleasant temperature." },
      price: { title: "Entrance Fee", content: "Free Admission", note: "The monument is open to all visitors free of charge." },
      duration: { title: "Visit Duration", content: "Suggested visit time: 30 minutes - 1 hour\nYou can quietly appreciate the sculpture art, take photos, or reflect and meditate here.", note: "Time can be arranged flexibly according to personal interest." },
      tips: { title: "Visit Tips & Important Notes", items: [
        "⚠️ **Dress Code**: As a religious site, it is recommended to dress appropriately, avoiding overly exposed clothing",
        "Maintain quietness and respect others' prayer and reflection",
        "Photography is allowed, but please turn off the flash",
        "Bring drinking water, Cochabamba has a warm climate",
        "Early morning and evening are the best visiting times",
        "Can be arranged on the same day with other attractions in downtown Cochabamba",
        "🌱 **Civilized Visit**: Please keep the environment clean, do not climb the sculpture or base, and jointly maintain this solemn cultural space"
      ] }
    },
    weather: {
      title: "Live Weather & Forecast",
      subtitle: "Check before you go — decide whether to pack an umbrella or sunscreen (Cochabamba · Cerro San Pedro, ~2,550 m)",
      now: "Now",
      feelsLike: "Feels like",
      humidity: "Humidity",
      wind: "Wind",
      precipitation: "Precipitation",
      rainChance: "Rain chance",
      uvIndex: "UV index",
      forecastTitle: "7-Day Forecast",
      today: "Today",
      updated: "Updated",
      unavailable: "Weather data is temporarily unavailable. Please refresh the page later.",
      advice: {
        title: "Travel Advice",
        clothing: "What to Wear",
        activity: "What to Do",
        items: "What to Pack",
        risk: "Risk Alerts",
        noRisk: "No weather alerts — conditions look stable overall.",
        texts: {
          clothingHot: "It will be hot (high {max}°C). Wear light, breathable clothing and avoid going out at midday.",
          clothingCold: "It will be cold (high only {max}°C). Dress warmly and bring a thick coat.",
          clothingDiurnal: "The day-to-night swing is about {range}°C — bring a jacket so you can layer up or down.",
          clothingRainy: "Rain is expected. Wear a waterproof jacket or non-slip shoes and watch for slippery ground.",
          clothingWindy: "It will be windy (around {wind} km/h). A windproof jacket is best; avoid loose dresses or flyaway clothing.",
          clothingMild: "Mild weather — normal clothing is fine, with a light jacket for early morning and evening.",
          activityClear: "Clear skies — great for outdoor sightseeing and for watching sunrise or sunset.",
          activityCloudy: "Cloud cover gives soft light — excellent for photos and for long walks outdoors without harsh sun.",
          activityRain: "Light rain will spoil open-air views. Prefer indoor or sheltered activities.",
          activityHeavyRain: "Heavy rain is likely. Outdoor sightseeing is not advised; cable cars and open-air rides may suspend service.",
          activityThunder: "Thunderstorms: do not hike, stay away from water, and never shelter under trees or on open high ground.",
          activityHot: "Sunny but hot — avoid the midday hours and shorten long stretches outdoors.",
          activityWindy: "It is fairly windy; cable cars and some open-air activities may be affected. Take care on ridges and heights.",
          activityHighWind: "Strong winds — stay away from billboards, temporary structures and exposed ridges, and be cautious outdoors.",
          activityFog: "Low visibility — not a good day for summit views; consider postponing.",
          activityMild: "Conditions are stable and suitable for your planned visit; check the latest update before you go.",
          itemUmbrella: "A folding umbrella",
          itemRaincoat: "A raincoat (skip long umbrellas when it is windy)",
          itemSunscreen: "Sunscreen, sunglasses and a hat",
          itemWater: "Plenty of drinking water",
          itemJacket: "A jacket for the day-night temperature swing",
          itemWarm: "A thick coat and scarf",
          itemMask: "A mask if fog or poor visibility",
          itemSecureHat: "Secure your hat — avoid accessories that blow away easily",
          riskThunder: "[Weather Alert] Thunderstorms expected. Adjust your plans, avoid mountains and water, and keep monitoring the weather.",
          riskHeavyRain: "[Weather Alert] Heavy rain. Avoid valleys, low-lying areas and slippery steps; watch for slips and falling rocks.",
          riskHighWind: "[Weather Alert] Strong winds. Stay clear of billboards, temporary structures and exposed ridges.",
          riskFog: "[Weather Alert] Low visibility. Summit views will be limited; check transport and cable-car operations.",
          riskExtremeUv: "[Weather Alert] Extreme UV. Step up sun protection, avoid long exposure and stay hydrated."
        }
      },
      conditions: { clear: "Clear", mainlyClear: "Mainly clear", partlyCloudy: "Partly cloudy", overcast: "Overcast", fog: "Fog", drizzle: "Drizzle", rain: "Rain", showers: "Showers", snow: "Snow", thunderstorm: "Thunderstorm" },
      uvLevels: { low: "Low", moderate: "Moderate", high: "High", veryHigh: "Very high", extreme: "Extreme" }
    },
    amenities: {
      label: "Practical Info",
      title: "Everyday Facilities You May Need",
      intro: "The following describes the types of everyday facilities found around the monument and in Cochabamba. This is public-service information; opening conditions may change, so please verify on site.",
      disclaimer: "This is a non-profit educational site. We only describe categories of facilities — we do not recommend or partner with any specific business. Please choose according to your own needs.",
      items: [
        { icon: "🚻", title: "Public Restrooms", description: "Public restrooms are available near the monument plaza and the cable-car station; parks, malls and eateries downtown usually provide them too.", tip: "Restrooms at the summit are limited — use the facilities downtown before heading up." },
        { icon: "🅿️", title: "Parking", description: "There is a parking area beside the summit monument; additional public and mall parking is available downtown and near the cable-car base station.", tip: "Spaces fill up on weekends and holidays — arrive early or take the cable car." },
        { icon: "🍽️", title: "Dining", description: "Downtown Cochabamba (Centro) and the La Cancha market area are dense with food options, from local snacks and market stalls to full-service restaurants.", tip: "Food options at the summit are limited — eat downtown before going up." },
        { icon: "🏨", title: "Accommodation", description: "Hotels, boutique guesthouses and hostels cluster downtown, in Zona Norte and along the airport corridor, across a wide price range.", tip: "If you plan to explore the old town on foot, staying downtown is most convenient." },
        { icon: "🛒", title: "Supermarkets & Convenience Stores", description: "Large supermarkets, chain convenience stores and neighbourhood shops line downtown and the main avenues, stocking water, snacks and daily necessities.", tip: "Buy water before heading up — prices at the summit are usually higher." },
        { icon: "⛽", title: "Fuel & EV Charging", description: "Gas stations are located along the city's main avenues; electric-vehicle charging infrastructure in Cochabamba is still limited.", tip: "If you are driving or renting a car, plan fuel stops ahead; EV drivers should confirm charger locations before departure." },
        { icon: "💊", title: "Health & Pharmacy", description: "Pharmacies and clinics are found downtown and along the main avenues, with larger hospitals located in the city's main districts.", tip: "Carry any regular medication; if you feel unwell, rest and seek medical care promptly." }
      ]
    },
    transportation: {
      title: "How to Get There: Cable Car & Stairs",
      airport: { title: "✈️ Cochabamba Int'l Airport (CBB) ➔ Christ of the Concord Monument", content: "Jorge Wilstermann International Airport is located near Cochabamba city, relatively close to the Christ of the Concord Monument.", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 20-40 Bolivianos", time: "15-25 minutes", steps: ["Find official taxi counters at the airport arrivals hall or use ride-hailing apps like Uber/inDrive", "Tell the driver you are going to Cristo de la Concordia (Christ of the Concord Monument)", "Cochabamba traffic is relatively convenient, with a short driving distance"] }
      ]},
      publicTransport: {
        title: "🚡 Cable Car (Teleférico) & Stairs",
        content: "The easiest way up is the Teleférico cable car from Parque de la Autonomía; if you prefer walking, a long staircase climbs to the summit of Cerro San Pedro.",
        options: [
          {
            name: "Cable Car (Recommended)",
            description: "The cable car links Parque de la Autonomía with the summit of Cerro San Pedro, right in front of the monument. It is fast, safe and offers panoramic views over the whole Cochabamba valley.",
            steps: [
              "Head to Parque de la Autonomía, in the north of the city",
              "Buy your ticket at the cable car station (inexpensive, priced per segment)",
              "Ride to the summit station and walk a few minutes to the monument plaza",
              "Check operating hours: it can close for maintenance or bad weather"
            ]
          },
          {
            name: "Hill Stairs (on foot)",
            description: "From the base of Cerro San Pedro a long staircase climbs to the monument. It is a demanding climb at ~2,550 m altitude; carry water, wear comfortable shoes and avoid doing it at night.",
            steps: [
              "Reach the base of Cerro San Pedro by taxi or minibus",
              "Climb the stairs slowly and take breaks to rest",
              "Avoid the hottest hours and do not climb in the rain (slippery steps)",
              "Inside the statue, 1,399 spiral steps lead to the viewing platforms in Christ's arms"
            ]
          },
          {
            name: "Minibus",
            description: "Take a minibus heading to the monument vicinity from downtown, get off and walk to the monument.",
            steps: [
              "Find a minibus heading to Av. de la Concordia from downtown",
              "Tell the driver to stop near Cristo de la Concordia",
              "After getting off, walk about 5-10 minutes to the monument"
            ]
          }
        ]
      },
      city: { title: "🚶 From Downtown Cochabamba", content: "The Christ of the Concord Monument is located in Cochabamba city. You can choose various transportation options from the city center. It is recommended to allocate half a day to visit the monument together with nearby attractions.", steps: ["Take a taxi from downtown, about 10-20 minutes, costing about 15-30 Bolivianos", "Or take a minibus heading to Av. de la Concordia, which is more economical", "After arrival, walk into the monument plaza"] },
      tips: { title: "Transportation & Climate Tips", items: [
        "🌡️ **Climate Advantage**: Cochabamba is at ~2500m elevation, with warm and pleasant climate, known as the 'City of Eternal Spring.' It is one of the most comfortable cities in Bolivia in terms of climate.",
        "Using ride-hailing apps (Uber/inDrive) in the city is safer and more convenient",
        "Schedule your visit in the early morning or evening to avoid the midday heat",
        "Combine with downtown Cochabamba, San Antonio Church and other attractions in the same trip",
        "Cochabamba's traffic is relatively less congested, making travel more convenient"
      ] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Voices from Christ of the Concord Monument: Real Testimonials from Google Maps", 
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Christ of the Concord Monument, you can easily visit the following nearby attractions:",
      nearbyItems: [
        { name: "Downtown Cochabamba (Centro de Cochabamba)", description: "Bolivia's constitutional capital, home to historic churches, plazas, and markets, as well as delicious local cuisine." },
        { name: "San Antonio Church (Santuario de San Antonio)", description: "A famous church in Cochabamba with unique architectural style, an important religious site for locals." },
        { name: "Cochabamba Christ Statue (Cristo de la Concordia)", description: "Another Christ statue located in Cochabamba, larger in scale and also worth visiting." }
      ]
    },
    gallery: { title: "Photo Gallery & Drawing", viewMore: "View More Photos on Google Maps", drawingTitle: "Design Drawing (Dibujo)", drawingCaption: "The design drawing of the Christ of the Concord Monument — the concept the Terrazas Pardo brothers scaled into a 40-metre statue.", drawingAlt: "Design drawing of the Christ of the Concord Monument (dibujo del Cristo de la Concordia)" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Christ of the Concord Monument", items: [
      { question: "What are the opening hours and entrance fees for the Christ of the Concord Monument?", answer: "Opening hours: Daily 08:00 - 21:00. Entrance fee: Free admission. All visitors can visit this monument free of charge." },
      { question: "How long does it take to visit the Christ of the Concord Monument?", answer: "Suggested visit time: 30 minutes - 1 hour. You can quietly appreciate the sculpture art, take photos, or reflect and meditate here. Time can be arranged flexibly according to personal interest." },
      { question: "What is the altitude of Cochabamba? Will I have altitude sickness?", answer: "Cochabamba is at ~2500m elevation, with warm and pleasant climate, known as the 'City of Eternal Spring.' Compared with high-altitude cities like La Paz and Potosi, Cochabamba's climate is more comfortable, and altitude sickness is almost non-existent." },
      { question: "What are the important notes for visiting the Christ of the Concord Monument?", answer: "⚠️ Dress Code: As a religious site, it is recommended to dress appropriately. Maintain quietness and respect others' prayer and reflection. Photography is allowed, but please turn off the flash. Please keep the environment clean and do not climb the sculpture or base." },
      { question: "How tall is the Christ of the Concord Monument?", answer: "The main statue is 34.20 meters tall and reaches a total height of 40.44 meters including its base, making it one of the largest Christ statues in the Southern Hemisphere and taller than Christ the Redeemer in Rio de Janeiro." },
      { question: "Can you go inside the Christ of the Concord Monument?", answer: "Yes. The statue is hollow inside, and visitors can climb 1,399 spiral steps to the viewing platforms in Christ's arms, enjoying a panoramic view of the Cochabamba valley through the lookout holes." },
      { question: "What attractions are near the Christ of the Concord Monument?", answer: "After visiting the monument, you can easily explore Centro de Cochabamba, Santuario de San Antonio, and La Cancha, one of the largest open-air markets in South America." },
      { question: "What is the Vía Crucis (Stations of the Cross) at the Christ of the Concord?", answer: "It is a devotional route inaugurated in April 2025 along the stairway of Cerro San Pedro, with 14 sculpted stations plus the Holy Sepulchre, leading up to the monument. During Holy Week (Semana Santa) it is the heart of Cochabamba's religious tourism and pilgrimage." },
      { question: "Can you reach the Christ of the Concord by cable car?", answer: "Yes. The Teleférico cable car runs from Parque de la Autonomía to the summit in a few minutes, at about Bs 7.50 per segment (an 860 m line). You can also walk up the Vía Crucis stairs (about 1,300-2,000 steps) or take a taxi from downtown." },
      { question: "Who designed the Christ of the Concord Monument and when was it built?", answer: "It was designed by Cochabamba sculptors César and Wálter Terrazas Pardo. Construction began on 12 July 1987 and the statue was inaugurated on 20 November 1994, commemorating Pope John Paul II's visit to Cochabamba in 1988." }
    ]},
    location: { title: "Map Location", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia", openMaps: "View Location on Google Maps", howToVisit: "How to visit: take the Teleférico cable car from Parque de la Autonomía directly to the summit, or a 15-20 minute taxi ride from downtown.", officialText: "For official updates and regional tourism information, visit", officialLinkText: "Bolivia Official Tourism Portal" },
    sources: { title: "Sources & Authoritative References", intro: "To help you plan your trip and verify information, we consulted the following official and authoritative sources.", items: [
      { name: "Bolivia Tourism - Cochabamba Region", description: "Official Cochabamba region attraction information published by Bolivia's national tourism promotion agency.", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Municipal Government", description: "Official municipal portal for the city of Cochabamba.", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia National Tourism Portal", description: "National-level tourism information and destination guides for Bolivia.", url: "https://boliviatravel.gob.bo/" },
      { name: "Bolivia Ministry of Tourism and Cultures", description: "The official ministry responsible for Bolivia's cultural heritage and tourism.", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Google Maps Listing", description: "The official Google Maps listing for the Christ of the Concord Monument, including live ratings and address.", url: "https://maps.app.goo.gl/J9HMnLUeamBGn2co8" }
    ]},
    footer: { callToAction: "As an important cultural landmark in Cochabamba, please join us in caring for the environment and respecting religious customs. Keep the attraction clean and maintain this solemn and beautiful space together.", text: "© 2026 Christ of the Concord Monument Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about the Christ of the Concord Monument. We are not affiliated with the Bolivian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", imageCopyright: "Image copyright notice: All images displayed on this website remain the property and copyright of their original photographers.", links: [
      { name: "Bolivia Tourism - Cochabamba Region", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Municipal Government", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia National Tourism Portal", url: "https://boliviatravel.gob.bo/" },
      { name: "Bolivia Ministry of Tourism and Cultures", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Discover Bolivia Official Guide Program", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  es: {
    nav: { history: "Historia", stories: "Relatos", architecture: "Características", monuments: "Valor Artístico", visiting: "Información", amenities: "Servicios", transportation: "Transporte", recorrido: "Recorrido", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: { tags: ["Arte Religioso", "Hit Cultural", "Imperdible en Cochabamba"], tagline: "Bolivia · Cochabamba", title: "Monumento al Cristo de la Concordia", subtitle: "Christ of the Concord Monument · Símbolo de Paz · Magnífica Escultura", cta: "Explorar el Monumento", city: "Cochabamba" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    entity: {
      label: "Introducción",
      title: "Sobre el Monumento al Cristo de la Concordia",
      intro: "Bienvenido al **Monumento al Cristo de la Concordia**, reconocido ampliamente como el **Cristo de la Concordia**. Ubicado en el corazón de **Cochabamba**, **Departamento de Cochabamba**, **Bolivia**, este destino es un punto de referencia principal para los viajeros que visitan la región.",
      breadcrumbTitle: "Jerarquía de ubicación",
      nearbyTitle: "Monumentos y Atracciones Cercanas al Cristo de la Concordia",
      nearby: "Al visitar el **Monumento al Cristo de la Concordia**, los visitantes pueden explorar fácilmente los hitos históricos y puntos de interés cercanos, incluidos el **Centro de Cochabamba (Plaza 14 de Septiembre)** y el **Santuario de San Antonio & La Cancha**."
    },
    history: {
      title: "Historia y Significado del Cristo de la Concordia",
      intro: "El Monumento al Cristo de la Concordia (Cristo de la Concordia) se encuentra en la cima del cerro San Pedro, en Cochabamba, Bolivia. Es una magnífica escultura religiosa que simboliza la paz y la unidad.\n\n**Historia de la Construcción**: El monumento fue propuesto para conmemorar la visita del papa Juan Pablo II a Cochabamba en 1988. Diseñado por los escultores locales César y Wálter Terrazas Pardo, se completó en 1994. La escultura representa a Cristo con los brazos abiertos, simbolizando un abrazo y bendición para toda la humanidad.\n\n**Récord de tamaño**: La estatua principal mide 34.20 metros y, con su base, alcanza los 40.44 metros de altura total, lo que la convierte en una de las estatuas de Cristo más grandes del hemisferio sur y más alta que el famoso Cristo Redentor de Río de Janeiro.\n\n**Significado Cultural**: Como importante hito religioso y cultural en Cochabamba, el Monumento al Cristo de la Concordia atrae a numerosos peregrinos y es una ventana clave para conocer el arte religioso y la cultura de Bolivia."
    },
    recorrido: {
      label: "Recorrido",
      title: "El Recorrido: Las Estaciones del Vía Crucis en el Cerro San Pedro",
      intro: "Subir al Cristo de la Concordia ya no es solo ir a un mirador. Desde abril de 2025, las escalinatas del cerro San Pedro cuentan con un Vía Crucis permanente, hoy el eje del turismo religioso de Cochabamba y la mejor forma de comprender el sentido espiritual del monumento.",
      stationsTitle: "Las 14 estaciones del Vía Crucis",
      stations: ["Jesús es condenado a muerte", "Jesús carga con la cruz", "Jesús cae por primera vez", "Jesús se encuentra con su madre", "Simón de Cirene ayuda a Jesús", "La Verónica limpia el rostro de Jesús", "Jesús cae por segunda vez", "Jesús consuela a las mujeres de Jerusalén", "Jesús cae por tercera vez", "Jesús es despojado de sus vestiduras", "Jesús es clavado en la cruz", "Jesús muere en la cruz", "Jesús es bajado de la cruz", "Jesús es sepultado"],
      sepulcroTitle: "Estación 15: el Santo Sepulcro",
      sepulcroNote: "Tras las catorce estaciones viene el **Santo Sepulcro**, que cierra el recorrido y anuncia la Resurrección. Cada estación fue financiada por familias y empresarios locales (unos Bs 140.000 por escultura), y cada escalón puede apadrinarse por Bs 400, con el nombre del donante grabado en la placa.",
      caminoTitle: "El camino: escalinatas, bugambilias y miradores",
      camino: "El ascenso se hace por las **escalinatas del cerro San Pedro**; las cifras publicadas sobre el número de escalones varían (entre unos 1.300 y 2.000 según el punto de partida y el tramo). El proyecto municipal añadió más de 2.500 **bugambilias** con riego por goteo, miradores de piedra, iluminación solar, bebederos y hasta un **reloj de sol**. Salga temprano, lleve agua y calzado con buen agarre: los escalones se vuelven resbaladizos con la lluvia.",
      routesTitle: "Dos formas de subir: a pie por el Vía Crucis o en teleférico",
      routes: [
        { name: "A pie: escalinatas y Vía Crucis", meta: "Unos 1.300-2.000 escalones · 45-90 min", description: "Ideal para quienes quieren detenerse en cada estación, fotografiar las esculturas y vivir el sentido de peregrinación. A unos 2.550 m, el ascenso exige condición física.", bestFor: "Mejor para: cultura, fotografía y peregrinación" },
        { name: "Teleférico", meta: "Unos Bs 7,50 · 860 m de recorrido", description: "Sube desde el Parque de la Autonomía hasta la cima en pocos minutos, con vistas panorámicas del valle. Recomendado con niños, con poco tiempo o para reservar energía para el mirador interno.", bestFor: "Mejor para: familias, poco tiempo y vistas panorámicas" }
      ],
      tipsTitle: "Consejos para el recorrido",
      tips: [
        "🌅 **Suba temprano**: hay menos gente, menos calor y mejor luz para fotografiar las estaciones.",
        "🙏 Durante la **Semana Santa** hay grandes procesiones y peregrinaciones: planifique con antelación y respete las ceremonias.",
        "💧 Lleve agua y protección solar; la altitud hace el ascenso más exigente.",
        "👟 Use calzado con buen agarre y evite subir con lluvia o de noche.",
        "🔒 Si va a pie, hágalo en grupo y en horarios concurridos."
      ]
    },
    stories: {
      label: "Lectura profunda",
      title: "Historia, relatos y tradiciones culturales",
      intro: "La mejor forma de entender un monumento es escuchar su historia. El siguiente contenido se basa en registros históricos públicos y documentación cultural local para explicar por qué esta estatua se convirtió en el símbolo espiritual de Cochabamba.",
      items: [
        { title: "Un deseo de ciudad nacido de una visita papal (1987–1988)", content: "En 1987 Cochabamba supo que el papa Juan Pablo II visitaría la ciudad al año siguiente, y quiso dejar un memorial que perdurara por generaciones. Así nació la idea de levantar un Cristo colosal en el cerro San Pedro. Cuando el papa llegó en 1988 la estatua aún estaba en construcción, pero la visión ya estaba fijada: un memorial construido para una sola visita, pero entregado a toda la ciudad." },
        { title: "Los hermanos Terrazas Pardo: convertir un dibujo en una figura de 40 metros", content: "El monumento fue diseñado y dirigido por los escultores cochabambinos César Terrazas Pardo y Wálter Terrazas Pardo. Con tecnología limitada, ampliaron un dibujo hasta una figura realista de casi 40 metros: proporciones del rostro, pliegues de la túnica y el ángulo de los brazos abiertos debían seguir pareciendo naturales y solemnes a escala monumental. La estatua se completó en 1994." },
        { title: "Siete años de paciencia: de 1987 a 1994", content: "La construcción comenzó en 1987 y duró unos siete años, finalizando en septiembre de 1994. La figura mide 34,20 m sobre una base de unos 6,24 m, alcanzando unos 40,44 m en total y pesando alrededor de 2.200 toneladas. Supera en altura al Cristo Redentor de Río de Janeiro (unos 30 m de figura y 38 m con pedestal), lo que la convierte en una de las estatuas de Cristo más grandes del hemisferio sur." },
        { title: "Qué significa «Concordia» y por qué importa", content: "«Concordia» significa armonía, acuerdo de corazones. La postura de brazos abiertos no es solo una imagen religiosa, sino una aspiración cívica: que personas de distintas clases, creencias y orígenes puedan aceptarse en esta ciudad de valle. Hoy es a la vez lugar de peregrinación y punto de encuentro público para los cochabambinos." },
        { title: "Ascenso y peregrinación: 1.399 escalones en el interior", content: "La estatua es hueca. Los visitantes suben 1.399 escalones en espiral hasta los miradores situados dentro de los brazos de Cristo, desde donde se contempla todo el valle de Cochabamba y la cordillera del Tunari. Durante la Semana Santa y otras fiestas religiosas es una parada clave para la oración y las procesiones locales." },
        { title: "Leer la ciudad desde la cima: la «Ciudad de la Eterna Primavera»", content: "El monumento se alza en la cima del cerro San Pedro. La ciudad está a unos 2.550 m en un valle andino de clima templado todo el año, por lo que se la llama «Ciudad de la Eterna Primavera». Al estar a menor altitud que La Paz o Potosí, la mayoría de los visitantes apenas siente el mal de altura." }
      ]
    },
    curiosities: {
      title: "Historias Ocultas: Valor Artístico y Significado Simbólico",
      content: "**Exploración interior**: Quizá no lo sepas: ¡la estatua es hueca por dentro! Los visitantes pueden subir 1,399 escalones en espiral hasta los miradores situados en los brazos de Cristo y contemplar todo el valle de Cochabamba a través de los orificios.\n\n**Estilo Artístico**: El Monumento al Cristo de la Concordia adopta un estilo de escultura realista. La imagen de Cristo es solemne y benévola, con un tallado de detalles exquisito, que demuestra un alto nivel de arte escultórico.\n\n**Significado Simbólico**: El nombre del monumento 'Concordia' (armonía) refleja su valor central: promover la comprensión, el respeto y la coexistencia armoniosa entre personas de diferentes culturas y creencias. La imagen de Cristo con los brazos abiertos transmite valores universales de inclusión y amor.\n\n**Etiqueta de Visita**: Como lugar religioso, mantenga la solemnidad y el silencio. Respete las costumbres religiosas locales, vístase apropiadamente y evite hacer ruido fuerte."
    },
    architecture: {
      title: "Características de la Escultura y Estructura Artística",
      intro: "El Monumento al Cristo de la Concordia es una exquisita obra de escultura religiosa, que demuestra un sobresaliente valor artístico y una profunda connotación religiosa. Cada detalle de la escultura está cuidadosamente elaborado, transmitiendo el mensaje de paz y amor.",
      specs: {
        structure: { title: "Estructura de la Escultura", content: "El monumento está construido con materiales de alta calidad, con una estructura estable. La estatua de Cristo es vívida y realista, con detalles exquisitos, incluyendo la expresión facial y los pliegues de la ropa, todo descrito muy realísticamente." },
        design: { title: "Diseño Artístico", content: "El diseñador de la escultura capturó ingeniosamente la benevolencia y majestuosidad de Cristo. La postura con los brazos abiertos simboliza un abrazo a toda la humanidad, transmitiendo valores universales de paz, amor y armonía." },
        optics: { title: "Experiencia de Visualización", content: "El entorno alrededor del monumento es tranquilo y hermoso, convirtiéndolo en un lugar ideal para la reflexión, la oración y la fotografía. Los efectos de iluminación durante el día y la noche tienen sus propias características, proporcionando a los visitantes diferentes experiencias visuales." }
      },
      plaque: {
        title: "Información Básica del Monumento",
        items: [
          { label: "Nombre", value: "Monumento al Cristo de la Concordia" },
          { label: "Ubicación", value: "Cochabamba, Bolivia" },
          { label: "Horario", value: "08:00 - 21:00" },
          { label: "Tipo", value: "Escultura religiosa, Hit cultural" },
          { label: "Simbolismo", value: "Paz, Unidad, Armonía" },
          { label: "Mejor Momento", value: "Madrugada o atardecer" }
        ]
      }
    },
    monuments: {
      title: "Análisis del Valor Artístico",
      intro: "El Monumento al Cristo de la Concordia no es solo una escultura religiosa, sino también una exquisita obra de arte, con profundo valor artístico y connotación cultural.",
      items: [
        { name: "Estatua de Cristo", description: "La parte central de la escultura representa vívidamente a Cristo con los brazos abiertos. La altura de la estatua y el procesamiento de detalles reflejan la alta artesanía del escultor, transmitiendo el mensaje de paz y amor." },
        { name: "Base y Entorno", description: "El diseño de la base del monumento es simple y elegante, complementando la escultura principal. El entorno circundante está cuidadosamente dispuesto para proporcionar a los visitantes un espacio de visita tranquilo y pacífico." }
      ]
    },
    contrast: {
      title: "Símbolo de Paz a Través del Tiempo",
      intro: "Aunque el Monumento al Cristo de la Concordia fue construido relativamente hace poco tiempo, ya se ha convertido en un importante símbolo cultural de Cochabamba e incluso de toda Bolivia. A través del contraste de fotos de diferentes períodos, podemos sentir la importancia de este monumento en el desarrollo de la ciudad.",
      before: "Monumento en Construcción",
      after: "Hoy: Monumento al Cristo de la Concordia"
    },
    visiting: {
      title: "Horarios y Precios",
      intro: "El Monumento al Cristo de la Concordia es un lugar importante para explorar la cultura religiosa y el arte de Cochabamba. Para obtener la mejor experiencia, consulte la siguiente información práctica.",
      hours: { title: "Horario de Apertura", content: "08:00 - 21:00 (Todos los días)", note: "Se recomienda visitar en la madrugada o al atardecer para una luz suave y temperatura agradable." },
      price: { title: "Entrada", content: "Entrada Gratuita", note: "El monumento está abierto gratuitamente a todos los visitantes." },
      duration: { title: "Duración de la Visita", content: "Tiempo sugerido: 30 minutos - 1 hora\nPuede apreciar tranquilamente el arte de la escultura, tomar fotos o reflexionar y meditar aquí.", note: "El tiempo se puede organizar flexiblemente según el interés personal." },
      tips: { title: "Consejos de Visita y Notas Importantes", items: [
        "⚠️ **Código de Vestimenta**: Como lugar religioso, se recomienda vestirse apropiadamente, evitando ropa demasiado reveladora",
        "Mantenga el silencio y respete la oración y reflexión de otros",
        "Se permite fotografía, pero apague el flash",
        "Traiga agua potable, Cochabamba tiene un clima cálido",
        "La madrugada y el atardecer son los mejores momentos para visitar",
        "Puede combinar con otras atracciones en el centro de Cochabamba el mismo día",
        "🌱 **Visita Civilizada**: Por favor, mantenga el entorno limpio, no escale la escultura o la base, y mantenga conjuntamente este solemne espacio cultural"
      ] }
    },
    weather: {
      title: "Clima en vivo y pronóstico",
      subtitle: "Consúltalo antes de salir: decide si llevar paraguas o protector solar (Cochabamba · cerro San Pedro, ~2.550 m)",
      now: "Ahora",
      feelsLike: "Sensación térmica",
      humidity: "Humedad",
      wind: "Viento",
      precipitation: "Precipitación",
      rainChance: "Prob. de lluvia",
      uvIndex: "Índice UV",
      forecastTitle: "Pronóstico de 7 días",
      today: "Hoy",
      updated: "Actualizado",
      unavailable: "Los datos meteorológicos no están disponibles temporalmente. Vuelva a actualizar la página más tarde.",
      advice: {
        title: "Consejos de viaje",
        clothing: "Qué ponerse",
        activity: "Qué hacer",
        items: "Qué llevar",
        risk: "Avisos de riesgo",
        noRisk: "Sin avisos meteorológicos: condiciones estables en general.",
        texts: {
          clothingHot: "Hará calor (máx. {max} °C). Use ropa ligera y transpirable y evite salir al mediodía.",
          clothingCold: "Hará frío (máx. solo {max} °C). Abríguese bien y lleve un abrigo grueso.",
          clothingDiurnal: "La diferencia entre el día y la noche es de unos {range} °C: lleve una chaqueta para abrigarse o quitársela.",
          clothingRainy: "Se espera lluvia. Use chaqueta impermeable o calzado antideslizante y cuidado con el suelo mojado.",
          clothingWindy: "Habrá viento (unos {wind} km/h). Mejor una chaqueta cortavientos y evite prendas sueltas.",
          clothingMild: "Clima templado: ropa normal, con una chaqueta ligera para la mañana y la noche.",
          activityClear: "Cielo despejado: ideal para recorrer al aire libre y ver el amanecer o el atardecer.",
          activityCloudy: "Cielo nublado con luz suave: excelente para fotos y para caminar sin sol fuerte.",
          activityRain: "Lluvia ligera: las vistas al aire libre pierden encanto. Priorice actividades cubiertas.",
          activityHeavyRain: "Lluvia intensa: no se recomienda el turismo al aire libre; el teleférico y otras atracciones abiertas pueden suspender el servicio.",
          activityThunder: "Tormenta eléctrica: no suba a la montaña, no permanezca junto al agua y no se refugie bajo árboles ni en zonas altas despejadas.",
          activityHot: "Soleado pero caluroso: evite el mediodía y acorte el tiempo prolongado al aire libre.",
          activityWindy: "Viento moderado-fuerte: el teleférico y algunas actividades al aire libre pueden verse afectados. Precaución en cumbres y crestas.",
          activityHighWind: "Viento fuerte: aléjese de vallas publicitarias, estructuras provisionales y crestas expuestas.",
          activityFog: "Visibilidad reducida: no es buen día para miradores; considere posponer la visita.",
          activityMild: "Condiciones estables y adecuadas para su plan; consulte la última actualización antes de salir.",
          itemUmbrella: "Un paraguas plegable",
          itemRaincoat: "Un impermeable (mejor que paraguas largo si hay viento)",
          itemSunscreen: "Protector solar, gafas de sol y sombrero",
          itemWater: "Suficiente agua potable",
          itemJacket: "Una chaqueta para el cambio de temperatura",
          itemWarm: "Abrigo grueso y bufanda",
          itemMask: "Mascarilla si hay niebla o mala visibilidad",
          itemSecureHat: "Sujete bien el sombrero; evite accesorios que se vuelen",
          riskThunder: "[Aviso meteorológico] Tormentas eléctricas. Ajuste su plan, evite montañas y zonas de agua y siga la evolución del tiempo.",
          riskHeavyRain: "[Aviso meteorológico] Lluvia intensa. Evite valles, zonas bajas y escalones resbaladizos; atención a resbalones y desprendimientos.",
          riskHighWind: "[Aviso meteorológico] Viento fuerte. Aléjese de vallas publicitarias, estructuras provisionales y crestas expuestas.",
          riskFog: "[Aviso meteorológico] Visibilidad baja. Las vistas desde la cima serán limitadas; verifique el transporte y el teleférico.",
          riskExtremeUv: "[Aviso meteorológico] UV extremo. Refuerce la protección solar, evite la exposición prolongada e hidrátese."
        }
      },
      conditions: { clear: "Despejado", mainlyClear: "Mayormente despejado", partlyCloudy: "Parcialmente nublado", overcast: "Cubierto", fog: "Niebla", drizzle: "Llovizna", rain: "Lluvia", showers: "Chubascos", snow: "Nieve", thunderstorm: "Tormenta" },
      uvLevels: { low: "Bajo", moderate: "Moderado", high: "Alto", veryHigh: "Muy alto", extreme: "Extremo" }
    },
    amenities: {
      label: "Información práctica",
      title: "Servicios que puede necesitar",
      intro: "A continuación se describen los tipos de servicios habituales en los alrededores del monumento y en Cochabamba. Es información de servicio público; las condiciones de apertura pueden cambiar, por lo que conviene verificarlas en el lugar.",
      disclaimer: "Este es un sitio educativo sin fines de lucro. Solo describimos categorías de servicios: no recomendamos ni tenemos convenios con ningún comercio concreto. Elija según sus propias necesidades.",
      items: [
        { icon: "🚻", title: "Baños públicos", description: "Hay baños públicos cerca de la plaza del monumento y de la estación del teleférico; los parques, centros comerciales y locales del centro también suelen ofrecerlos.", tip: "Los baños en la cima son limitados: úselos en el centro antes de subir." },
        { icon: "🅿️", title: "Estacionamiento", description: "Hay una zona de aparcamiento junto al monumento en la cima; también existen estacionamientos públicos y de centros comerciales en el centro y cerca de la estación base del teleférico.", tip: "Los fines de semana y feriados se llenan: llegue temprano o use el teleférico." },
        { icon: "🍽️", title: "Restaurantes", description: "El centro de Cochabamba (Centro) y la zona del mercado de La Cancha concentran muchas opciones gastronómicas, desde snacks locales y puestos de mercado hasta restaurantes formales.", tip: "En la cima hay pocas opciones: coma en el centro antes de subir." },
        { icon: "🏨", title: "Alojamiento", description: "Hay hoteles, hostales boutique y albergues en el centro, en la Zona Norte y a lo largo del corredor del aeropuerto, en un amplio rango de precios.", tip: "Si desea recorrer el casco antiguo a pie, alojarse en el centro es lo más cómodo." },
        { icon: "🛒", title: "Supermercados y tiendas", description: "En el centro y las avenidas principales hay supermercados grandes, tiendas de conveniencia y comercios de barrio con agua, snacks y artículos de uso diario.", tip: "Compre agua antes de subir: en la cima suele ser más cara." },
        { icon: "⛽", title: "Combustible y carga eléctrica", description: "Hay gasolineras a lo largo de las principales avenidas; la infraestructura de carga para vehículos eléctricos en Cochabamba aún es limitada.", tip: "Si conduce o alquila un auto, planifique las paradas de combustible; los vehículos eléctricos deben confirmar la ubicación de los cargadores antes de salir." },
        { icon: "💊", title: "Salud y farmacias", description: "Hay farmacias y clínicas en el centro y las avenidas principales, con hospitales de mayor tamaño en los principales distritos de la ciudad.", tip: "Lleve su medicación habitual; si se siente mal, descanse y busque atención médica a tiempo." }
      ]
    },
    transportation: {
      title: "Cómo Llegar: Teleférico y Escalinatas",
      airport: { title: "✈️ Aeropuerto Int'l de Cochabamba (CBB) ➔ Monumento al Cristo de la Concordia", content: "El Aeropuerto Internacional Jorge Wilstermann está ubicado cerca de Cochabamba, relativamente cerca del Monumento al Cristo de la Concordia.", options: [
        { name: "Taxi / Aplicación (Recomendado)", price: "Aprox. 20-40 Bolivianos", time: "15-25 minutos", steps: ["Busque mostradores de taxis oficiales en la sala de llegadas del aeropuerto o use aplicaciones como Uber/inDrive", "Dígale al conductor que va al Cristo de la Concordia (Monumento al Cristo de la Concordia)", "El transporte en Cochabamba es relativamente conveniente, con una distancia de manejo corta"] }
      ]},
      publicTransport: {
        title: "🚡 Teleférico y Escalinatas",
        content: "La forma más cómoda de subir es el Teleférico desde el Parque de la Autonomía; si prefiere caminar, existe una larga escalinata hasta la cima del cerro San Pedro.",
        options: [
          {
            name: "Teleférico (Recomendado)",
            description: "El teleférico conecta el Parque de la Autonomía con la cima del cerro San Pedro, justo frente al monumento. Es rápido, seguro y ofrece vistas panorámicas de todo el valle de Cochabamba.",
            steps: [
              "Diríjase al Parque de la Autonomía, en la zona norte de la ciudad",
              "Compre su boleto en la estación del teleférico (tarifa económica por tramo)",
              "Suba hasta la estación de la cima y camine unos minutos hasta la plaza del monumento",
              "Confirme el horario de operación: puede cerrar por mantenimiento o mal tiempo"
            ]
          },
          {
            name: "Escalinatas del cerro (a pie)",
            description: "Desde la base del cerro San Pedro una larga escalinata sube hasta el monumento. Es un ascenso exigente por la altitud (~2,550 m); lleve agua, calzado cómodo y evite hacerlo de noche.",
            steps: [
              "Llegue a la base del cerro San Pedro en taxi o minibús",
              "Suba con calma por las escalinatas y haga pausas para descansar",
              "Evite las horas de más calor y no suba con lluvia (escalones resbaladizos)",
              "Dentro de la estatua, 1,399 escalones en espiral llevan a los miradores en los brazos de Cristo"
            ]
          },
          {
            name: "Minibús",
            description: "Tome un minibús hacia las cercanías del monumento desde el centro, bájese y camine hasta el monumento.",
            steps: [
              "Busque un minibús hacia Av. de la Concordia desde el centro",
              "Dígale al conductor que pare cerca del Cristo de la Concordia",
              "Después de bajarse, camine unos 5-10 minutos hasta el monumento"
            ]
          }
        ]
      },
      city: { title: "🚶 Desde el Centro de Cochabamba", content: "El Monumento al Cristo de la Concordia está ubicado en Cochabamba. Puede elegir varias opciones de transporte desde el centro. Se recomienda asignar medio día para visitar el monumento junto con atracciones cercanas.", steps: ["Tome un taxi desde el centro, unos 10-20 minutos, costando aproximadamente 15-30 Bolivianos", "O tome un minibús hacia Av. de la Concordia, que es más económico", "Después de llegar, camine hasta la plaza del monumento"] },
      tips: { title: "Consejos de Transporte y Clima", items: [
        "🚡 **Teleférico**: la forma más rápida y panorámica de subir es el teleférico desde el Parque de la Autonomía; confirme su horario antes de subir.",
        "🌡️ **Ventaja Climática**: Cochabamba está a ~2500m de altitud, con clima cálido y agradable, conocida como la 'Ciudad de la Eterna Primavera'. Es una de las ciudades más cómodas de Bolivia en términos climáticos.",
        "Usar aplicaciones de transporte (Uber/inDrive) en la ciudad es más seguro y conveniente",
        "Programe su visita en la madrugada o al atardecer para evitar el calor del mediodía",
        "Combine con el centro de Cochabamba, la Iglesia de San Antonio y otras atracciones en el mismo viaje",
        "El tráfico en Cochabamba es relativamente menos congestionado, haciendo que viajar sea más conveniente"
      ] }
    },
    reviews: { 
      title: "Reseñas de Visitantes y Exploración Cercana", 
      subtitle: "Voces del Monumento al Cristo de la Concordia: Testimonios Reales de Google Maps", 
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Valen la Pena Visitar",
      nearbyIntro: "Después de visitar el Monumento al Cristo de la Concordia, puede visitar fácilmente las siguientes atracciones cercanas:",
      nearbyItems: [
        { name: "Centro de Cochabamba (Centro de Cochabamba)", description: "Capital constitucional de Bolivia, hogar de iglesias históricas, plazas y mercados, así como deliciosa cocina local." },
        { name: "Iglesia de San Antonio (Santuario de San Antonio)", description: "Una iglesia famosa en Cochabamba con estilo arquitectónico único, un importante lugar religioso para los locales." },
        { name: "Estatua de Cristo de Cochabamba (Cristo de la Concordia)", description: "Otra estatua de Cristo ubicada en Cochabamba, de mayor escala y también vale la pena visitar." }
      ]
    },
    gallery: { title: "Galería de Fotos y Dibujo", viewMore: "Ver Más Fotos en Google Maps", drawingTitle: "Dibujo del diseño (Dibujo)", drawingCaption: "Dibujo del diseño del Monumento al Cristo de la Concordia: el boceto que los hermanos Terrazas Pardo convirtieron en una estatua de 40 metros.", drawingAlt: "Dibujo del Cristo de la Concordia en Cochabamba, Bolivia" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre el Monumento al Cristo de la Concordia", items: [
      { question: "¿Cuál es el horario de apertura y la entrada del Monumento al Cristo de la Concordia?", answer: "Horario de apertura: Todos los días 08:00 - 21:00. Entrada: Entrada gratuita. Todos los visitantes pueden visitar este monumento gratuitamente." },
      { question: "¿Cuánto tiempo se necesita para visitar el Monumento al Cristo de la Concordia?", answer: "Tiempo sugerido: 30 minutos - 1 hora. Puede apreciar tranquilamente el arte de la escultura, tomar fotos o reflexionar y meditar aquí. El tiempo se puede organizar flexiblemente según el interés personal." },
      { question: "¿Cuál es la altitud de Cochabamba? ¿Tendré mal de altura?", answer: "Cochabamba está a ~2500m de altitud, con clima cálido y agradable, conocida como la 'Ciudad de la Eterna Primavera'. En comparación con ciudades de gran altitud como La Paz y Potosí, el clima de Cochabamba es más cómodo, y el mal de altura es casi inexistente." },
      { question: "¿Cuáles son las notas importantes para visitar el Monumento al Cristo de la Concordia?", answer: "⚠️ Código de Vestimenta: Como lugar religioso, se recomienda vestirse apropiadamente. Mantenga el silencio y respete la oración y reflexión de otros. Se permite fotografía, pero apague el flash. Por favor, mantenga el entorno limpio y no escale la escultura o la base." },
      { question: "¿Qué altura tiene el Monumento al Cristo de la Concordia?", answer: "La estatua principal mide 34,20 metros y alcanza una altura total de 40,44 metros con su base, lo que la convierte en una de las estatuas de Cristo más grandes del hemisferio sur y más alta que el Cristo Redentor de Río de Janeiro." },
      { question: "¿Se puede entrar al interior del Monumento al Cristo de la Concordia?", answer: "Sí. La estatua es hueca por dentro y los visitantes pueden subir 1.399 escalones en espiral hasta los miradores en los brazos de Cristo, con vistas panorámicas del valle de Cochabamba." },
      { question: "¿Qué atracciones hay cerca del Monumento al Cristo de la Concordia?", answer: "Después de visitar el monumento, puede explorar fácilmente el Centro de Cochabamba, el Santuario de San Antonio y La Cancha, uno de los mercados al aire libre más grandes de Sudamérica." },
      { question: "¿Qué es el Vía Crucis del Cristo de la Concordia?", answer: "Es un recorrido devocional inaugurado en abril de 2025 a lo largo de las escalinatas del cerro San Pedro, con 14 estaciones esculpidas y el Santo Sepulcro, que acompañan el ascenso hasta el monumento. Durante la Semana Santa es el centro del turismo religioso y de las peregrinaciones de Cochabamba." },
      { question: "¿Se puede subir al Cristo de la Concordia en teleférico?", answer: "Sí. El teleférico sube desde el Parque de la Autonomía hasta la cima en pocos minutos, con una tarifa de unos Bs 7,50 por tramo (recorrido de 860 m). También se puede subir a pie por las escalinatas del Vía Crucis (unos 1.300-2.000 escalones) o en taxi desde el centro." },
      { question: "¿Quién diseñó el Cristo de la Concordia y cuándo se construyó?", answer: "Fue diseñado por los escultores cochabambinos César y Wálter Terrazas Pardo. Las obras comenzaron el 12 de julio de 1987 y la estatua se inauguró el 20 de noviembre de 1994, para conmemorar la visita del papa Juan Pablo II a Cochabamba en 1988." }
    ]},
    location: { title: "Ubicación", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia", openMaps: "Ver en Google Maps", howToVisit: "Cómo visitar: tome el Teleférico desde el Parque de la Autonomía hasta la cima, o un taxi de 15-20 minutos desde el centro.", officialText: "Para información oficial actualizada y turismo regional, visite el", officialLinkText: "Portal Oficial de Turismo de Bolivia" },
    sources: { title: "Fuentes y Referencias Autorizadas", intro: "Para ayudarle a planificar su viaje y verificar la información, consultamos las siguientes fuentes oficiales y autorizadas.", items: [
      { name: "Bolivia Turismo - Región Cochabamba", description: "Información oficial de las atracciones de la región de Cochabamba publicada por la agencia nacional de promoción turística de Bolivia.", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Gobierno Municipal de Cochabamba", description: "Portal municipal oficial de la ciudad de Cochabamba.", url: "https://www.cochabamba.bo/" },
      { name: "Portal Nacional de Turismo de Bolivia", description: "Información turística a nivel nacional y guías de destinos de Bolivia.", url: "https://boliviatravel.gob.bo/" },
      { name: "Ministerio de Turismo y Culturas de Bolivia", description: "El ministerio oficial responsable del patrimonio cultural y el turismo de Bolivia.", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Ficha de Google Maps", description: "La ficha oficial de Google Maps del Monumento al Cristo de la Concordia, con valoraciones y dirección en tiempo real.", url: "https://maps.app.goo.gl/J9HMnLUeamBGn2co8" }
    ]},
    footer: { callToAction: "Como importante hito cultural en Cochabamba, únase a nosotros para cuidar el medio ambiente y respetar las costumbres religiosas. Mantenga la atracción limpia y conserve este solemne y hermoso espacio juntos.", text: "© 2026 Guía del Monumento al Cristo de la Concordia · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de guía de terceros dedicado a compartir información precisa sobre el Monumento al Cristo de la Concordia. No estamos afiliados con el gobierno boliviano o ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de guía de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", imageCopyright: "Aviso de derechos de autor de imágenes: Todas las imágenes mostradas en este sitio web son propiedad y están protegidas por los derechos de autor de sus fotógrafos originales.", links: [
      { name: "Bolivia Turismo - Región Cochabamba", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Gobierno Municipal de Cochabamba", url: "https://www.cochabamba.bo/" },
      { name: "Portal Nacional de Turismo de Bolivia", url: "https://boliviatravel.gob.bo/" },
      { name: "Ministerio de Turismo y Culturas de Bolivia", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia Programa Oficial de Guía", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  qu: {
    nav: { history: "Ñawpaq", stories: "Willakuykuna", architecture: "Ruwasqa", monuments: "Art Value", visiting: "Puriy", amenities: "Yanapay", transportation: "Chaykamuy", recorrido: "Ñan", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tags: ["Religious Art", "Cultural", "Cochabamba"], tagline: "Bolivia · Cochabamba", title: "Cristo de la Concordia", subtitle: "Christ of the Concord Monument · Peace · Love", cta: "Monumento rikuy", city: "Cochabamba" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    entity: {
      label: "Qallariy",
      title: "Cristo de la Concordia",
      intro: "Cristo de la Concordia, Cochabamba, Bolivia. Kay kitipi puriqkunaq chawpin.",
      breadcrumbTitle: "Maypi",
      nearbyTitle: "Cristo de la Concordia muyuriq",
      nearby: "Cristo de la Concordia rikuspa, Cochabamba Centro, San Antonio Iglesia rikuy atinki."
    },
    history: {
      title: "Ñawpaq Kawsay, Yachay",
      intro: "Cristo de la Concordia, Cochabamba, Bolivia. Monumento. Peace, unity.\n\n**Construction**: 20th century. Christ open arms. Symbol of peace.\n\n**Cultural Significance**: Important religious and cultural landmark in Cochabamba. Attracts pilgrims and visitors."
    },
    recorrido: {
      label: "Ñan",
      title: "Vía Crucis: Cerro San Pedro ñan",
      intro: "2025 watamanta Cerro San Pedro escalinata-pi Vía Crucis kan. Cochabamba religioso turismo chawpin.",
      stationsTitle: "14 estaciones",
      stations: ["Jesús condenado", "Jesús cruz apay", "Jesús ñawpaq urmay", "Jesús mamanwan tinkuy", "Simón de Cirene yanapay", "Verónica uya pichay", "Jesús iskay urmay", "Jesús warmikuna sunquchay", "Jesús kimsa urmay", "Jesús p'acha qichuy", "Jesús cruz-pi chutay", "Jesús cruz-pi wañuy", "Jesús cruz-manta uray", "Jesús p'ampay"],
      sepulcroTitle: "15: Santo Sepulcro",
      sepulcroNote: "Santo Sepulcro: recorrido tukuynin, Resurrección willakuy.",
      caminoTitle: "Ñan: escalinata, bugambilia, mirador",
      camino: "Cerro San Pedro escalinata. 1.300-2.000 escalones (willakuy hukniray). 2.500 bugambilias, mirador, inti kancha.",
      routesTitle: "Iskay ñan: puriy utaq teleférico",
      routes: [
        { name: "Puriy: escalinata, Vía Crucis", meta: "1.300-2.000 escalones · 45-90 min", description: "Sapa estación rikuy, foto, peregrinación. 2.550 m.", bestFor: "Cultura, foto, peregrinación" },
        { name: "Teleférico", meta: "Bs 7,50 · 860 m", description: "Parque de la Autonomía-manta cima-man. Familia, pisi pacha.", bestFor: "Familia, pisi pacha, panorama" }
      ],
      tipsTitle: "Yachay",
      tips: [
        "🌅 Paqarin lluqsiy: pisi runa, allin llimpi.",
        "🙏 Semana Santa: procesión, peregrinación.",
        "💧 Yaku apay, protector solar.",
        "👟 Allin zapatos, mana para pacha.",
        "🔒 Purispa: ayniwan, achka runa pacha."
      ]
    },
    stories: {
      label: "Ñawpaq Yachay",
      title: "Ñawpaq Kawsay, Willakuykuna",
      intro: "Monumento yachanapaq, willakuyninta uyarina allin. Kay willakuykuna publico registros-manta, llaqta cultura-manta.",
      items: [
        { title: "Papa Juan Pablo II watukamuy (1987–1988)", content: "1987 watapi Cochabamba yachan: Papa Juan Pablo II hamunqa. Cerro San Pedro-pi hatun Cristo sayachiy yuyay qallarirqan. 1988 watapi Papa hamurqan, estatua ruwakushanraq; lliw llaqtaq yuyayninmi." },
        { title: "Terrazas Pardo wawqikuna", content: "Cochabamba escultores César Terrazas Pardo, Wálter Terrazas Pardo. 40 metros sayay figura ruwarqanku. 1994 watapi tukurqan." },
        { title: "Qanchis wata ruway (1987–1994)", content: "Estatua 34,20 m, base 6,24 m, lliw 40,44 m. 2.200 toneladas. Rio de Janeiro Cristo Redentor-manta astawan hatun." },
        { title: "«Concordia» niy", content: "Concordia = armonía. Brazos abiertos: lliw runakuna uyariy. Kunan: peregrinación, llaqta tinkuy." },
        { title: "1.399 escalones ukhu", content: "Ukhu 1.399 escalones, Cristo marq'anpi mirador. Cochabamba valle, Tunari orqo rikuy. Semana Santa: oración." },
        { title: "Cerro San Pedro cima", content: "2.550 m. Ciudad de la Eterna Primavera. La Paz-manta pisi altura, mal de altura mana kanchu." }
      ]
    },
    curiosities: {
      title: "Pakasqa Yachay: Art Value",
      content: "Realistic sculpture style. Christ image solemn and benevolent. Symbolism: 'Concordia' means harmony. Visit etiquette: religious site, maintain solemnity."
    },
    architecture: {
      title: "Sculpture Features",
      intro: "Cristo de la Concordia, exquisite sculpture. Artistic value, religious connotation.",
      specs: {
        structure: { title: "Sculpture Structure", content: "High-quality materials. Stable structure. Vivid Christ statue." },
        design: { title: "Artistic Design", content: "Christ benevolent and majestic. Open arms symbolize embrace." },
        optics: { title: "Viewing Experience", content: "Quiet and beautiful environment. Ideal for reflection, prayer, photography." }
      },
      plaque: {
        title: "Monumento Willakuykuna",
        items: [
          { label: "Suti", value: "Cristo de la Concordia" },
          { label: "Maypi", value: "Cochabamba, Bolivia" },
          { label: "Punchaw", value: "08:00 - 21:00" },
          { label: "Type", value: "Religious sculpture, Cultural landmark" },
          { label: "Symbolism", value: "Peace, Unity, Harmony" }
        ]
      }
    },
    monuments: {
      title: "Art Value",
      intro: "Cristo de la Concordia. Religious sculpture, exquisite artwork.",
      items: [
        { name: "Christ Statue", description: "Core part. Christ open arms. High craftsmanship." },
        { name: "Base and Surroundings", description: "Simple and elegant base. Quiet visiting space." }
      ]
    },
    contrast: {
      title: "Peace Symbol Across Time",
      intro: "Monument built recently, already important cultural symbol.",
      before: "Monument Under Construction",
      after: "Today: Cristo de la Concordia"
    },
    visiting: {
      title: "Horarios, Qullqi",
      intro: "Cristo de la Concordia purinapaq allin.",
      hours: { title: "Punchaw", content: "08:00 - 21:00", note: "Early morning or evening best." },
      price: { title: "Qullqi", content: "Free admission", note: "Open to all visitors free." },
      duration: { title: "Hayk'aq", content: "30 min - 1 hour", note: "Flexible according to interest." },
      tips: { title: "Yachay", items: ["⚠️ Dress appropriately (religious site)", "Maintain quietness", "Photography allowed (no flash)", "Bring water", "Early morning/evening best", "🌱 Keep environment clean"] }
    },
    weather: {
      title: "Clima kunan, pronóstico",
      subtitle: "Puriy ñawpaq rikuy: paraguas utaq protector solar (Cochabamba · Cerro San Pedro, ~2.550 m)",
      now: "Kunan",
      feelsLike: "Sensación",
      humidity: "Humedad",
      wind: "Wayra",
      precipitation: "Para",
      rainChance: "Para atiynin",
      uvIndex: "UV",
      forecastTitle: "7 punchaw pronóstico",
      today: "Kunan",
      updated: "Musuqyachisqa",
      unavailable: "Clima willakuy mana kanchu. Astawan qhipa musuqyachiy.",
      advice: {
        title: "Puriy yanapay",
        clothing: "Imata churakuna",
        activity: "Imata ruwana",
        items: "Imata apana",
        risk: "Riesgo willakuy",
        noRisk: "Mana peligro willakuy: pacha allin.",
        texts: {
          clothingHot: "Q'uñi kanqa (máx. {max} °C). Llasaq, wayra pacha churakuy; chawpi p'unchaw lluqsiyta anchachiy.",
          clothingCold: "Chiri kanqa (máx. {max} °C). Q'uñichikuy, hatun abrigo apay.",
          clothingDiurnal: "P'unchaw-chisi hukniray {range} °C: chaqueta apay, churakunaykipaq.",
          clothingRainy: "Para hamunqa. Impermeable churakuy, mana resbaladizo zapatos; allpa llusk'a rikuy.",
          clothingWindy: "Wayra kanqa ({wind} km/h). Cortavientos allin; mana k'achasqa p'achata churakuychu.",
          clothingMild: "Pacha templado: normal p'achalla, paqarin-chisi chaqueta apay.",
          activityClear: "Ch'uya pacha: hawapi puriy allin, inti lluqsiy chinkay rikuypaqpas.",
          activityCloudy: "Phuyu pacha, llimpi suave: fotopaq allin, unay hawapi puriypaqpas.",
          activityRain: "Pisi para: hawapi rikuy mana allinchu. Wasipi utaq qatapi ruwana akllay.",
          activityHeavyRain: "Sinchi para: hawapi puriy mana allinchu; teleférico huk ruwaykuna sayarinman.",
          activityThunder: "Rayu pacha: orqoman mana wichariychu, yakuman mana riychu, sach'apipas mana pakakuyichu.",
          activityHot: "Inti q'uñi: chawpi p'unchaw anchachiy, hawapi unay sayayta pisiychiy.",
          activityWindy: "Wayra kallpa: teleférico huk ruwaykuna afectakunman. Orqo patapi allinta rikuy.",
          activityHighWind: "Sinchi wayra: publicidad, temporal estructura, orqo patamanta karunchakuy.",
          activityFog: "Pacha phuyu: mirador mana allinchu; qhipaman sasachakuy.",
          activityMild: "Pacha allin puriyniykipaq; lluqsiy ñawpaq musuq willakuyta rikuy.",
          itemUmbrella: "Paraguas plegable",
          itemRaincoat: "Impermeable (sinchi wayrapi paraguas largo mana allinchu)",
          itemSunscreen: "Protector solar, gafas, sombrero",
          itemWater: "Achka yaku",
          itemJacket: "Chaqueta (p'unchaw-chisi hukniray)",
          itemWarm: "Hatun abrigo, bufanda",
          itemMask: "Mascarilla (pacha phuyu / mana rikuy)",
          itemSecureHat: "Sombrerota allinta watay; wayra apanan accesorio mana allinchu",
          riskThunder: "[Peligro willakuy] Rayu pacha. Puriyta hukniraychiy, orqo, yaku mana riychu, pachata qhaway.",
          riskHeavyRain: "[Peligro willakuy] Sinchi para. Valle, pata pampa, llusk'a escalón karunchakuy.",
          riskHighWind: "[Peligro willakuy] Sinchi wayra. Publicidad, temporal estructura, orqo patamanta karunchakuy.",
          riskFog: "[Peligro willakuy] Mana rikuy. Cima rikuy limitado; transporte, teleférico qhaway.",
          riskExtremeUv: "[Peligro willakuy] Sinchi UV. Protector solar kallpachiy, unay intipi mana sayaychu, yaku upyay."
        }
      },
      conditions: { clear: "Ch'uya", mainlyClear: "Ch'uya pacha", partlyCloudy: "Phuyu pisi", overcast: "Phuyu", fog: "Pacha phuyu", drizzle: "Pisi para", rain: "Para", showers: "Para", snow: "Riti", thunderstorm: "Rayu" },
      uvLevels: { low: "Pisi", moderate: "Chawpi", high: "Hatun", veryHigh: "Ancha hatun", extreme: "Sinchi" }
    },
    amenities: {
      label: "Yanapay",
      title: "Servicios puriqkunapaq",
      intro: "Kay servicios monumento muyuriqpi, Cochabamba llaqtapipas kanmi. Información público; p'unchaw hukniray kanman, chaypi rikuy.",
      disclaimer: "Kay sitio non-profit. Servicio laya willakuylla; mana comercio específico recomendanchikchu. Kikiykipaq akllay.",
      items: [
        { icon: "🚻", title: "Baños públicos", description: "Baños monumento plaza, teleférico estación qayllanpi kanmi. Centro parques, tiendas-pipas kanmi.", tip: "Cima-pi baños pisi: centro-pi ñawpaq apay." },
        { icon: "🅿️", title: "Estacionamiento", description: "Cima-pi estacionamiento kanmi. Centro-pi, teleférico base-pi público estacionamiento kanmi.", tip: "Sábado, domingo hunt'akun: ñawpaq hamuy utaq teleférico apay." },
        { icon: "🍽️", title: "Mikhuy", description: "Centro de Cochabamba, La Cancha mercado: mikhuy achka. Puesto, restaurante kanmi.", tip: "Cima-pi mikhuy pisi: centro-pi mikhuy ñawpaq." },
        { icon: "🏨", title: "Puñuna", description: "Hotel, hostal centro-pi, Zona Norte-pi, aeropuerto ñanpi kanmi. Precio hukniray.", tip: "Casco antiguo puriy munaspa: centro-pi puñuy allin." },
        { icon: "🛒", title: "Tienda hatun", description: "Centro-pi, avenida-pi supermercado, tienda kanmi: yaku, mikhuy apay.", tip: "Yaku ñawpaq rantiy: cima-pi astawan chanin." },
        { icon: "⛽", title: "Combustible, carga eléctrica", description: "Gasolinera avenida-pi kanmi. Auto eléctrico carga pisi Cochabamba-pi.", tip: "Autowan purispa: combustible planiy; eléctrico: carga maypi chayta rikuy." },
        { icon: "💊", title: "Hampi, farmacia", description: "Farmacia, clínica centro-pi, avenida-pi kanmi. Hatun hospital llaqta chawpipi.", tip: "Hampi apay; unquspa: samay, hampiq rikuy." }
      ]
    },
    transportation: {
      title: "Chaykamuy: Teleférico, Escalinata",
      airport: { title: "Cochabamba-manta", content: "Jorge Wilstermann airport to Monument.", options: [
        { name: "Taxi (Allin)", price: "20-40 Bolivianos", time: "15-25 min", steps: ["Airport taxi counter", "Uber/inDrive app", "Cristo de la Concordia"] }
      ]},
      publicTransport: {
        title: "Minibus",
        content: "Minibus to Av. de la Concordia.",
        options: [
          {
            name: "Minibus",
            description: "Downtown to monument.",
            steps: [
              "Downtown minibus",
              "Av. de la Concordia direction",
              "Walk 5-10 min"
            ]
          }
        ]
      },
      city: { title: "Cochabamba Centro", content: "Downtown to Monument (15-30 Bs, 10-20 min).", steps: ["Taxi 10-20 min", "Minibus (cheaper)"] },
      tips: { title: "Yachay", items: ["Cochabamba: 2500m (comfortable climate)", "City of Eternal Spring", "Ride app safe", "Morning/evening visit", "Combine with downtown attractions"] }
    },
    reviews: { 
      title: "Niykuna", 
      subtitle: "Cristo de la Concordia niykuna", 
      viewMore: "Astawan niykuna",
      nearbyTitle: "Huk kitikuna",
      nearbyIntro: "Huk attractions:",
      nearbyItems: [
        { name: "Cochabamba Centro", description: "Bolivia capital. Historic churches, plazas." },
        { name: "San Antonio Church", description: "Famous church in Cochabamba." }
      ]
    },
    gallery: { title: "Rikuy, Dibujo", viewMore: "Google Maps nisqapi astawan rikuy", drawingTitle: "Dibujo (Diseño)", drawingCaption: "Cristo de la Concordia dibujo, Cochabamba.", drawingAlt: "Cristo de la Concordia dibujo, Cochabamba, Bolivia" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "08:00 - 21:00. Free admission." },
      { question: "Hayk'aq puriy?", answer: "30 min - 1 hour. Flexible." },
      { question: "Cochabamba altitude?", answer: "2500m. Comfortable climate. No altitude sickness." },
      { question: "Hayk'aq sayayniyuq?", answer: "34.20 m, basewan 40.44 m. Sud hemisferio-pi hatun Cristo estatuakuna." },
      { question: "Ukhu rikuy atinkichu?", answer: "Arí. Ukhu 1,399 escalones, Cristo marq'anpi mirador, Cochabamba valle rikuy." },
      { question: "Imakunata cerca?", answer: "Cochabamba Centro, San Antonio Iglesia, La Cancha mercado." },
      { question: "Vía Crucis, imataq?", answer: "2025 watapi Cerro San Pedro escalinata-pi 14 estaciones + Santo Sepulcro. Semana Santa: peregrinación, religioso turismo." },
      { question: "Teleférico kanchu?", answer: "Arí. Parque de la Autonomía-manta cima-man, Bs 7,50. Puriy atinki escalinata-pi utaq taxi." },
      { question: "Pitaq ruwarqan, hayk'aq?", answer: "César, Wálter Terrazas Pardo. 1987-07-12 qallariy, 1994-11-20 tukuya." }
    ]},
    location: { title: "Maypipas", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia", openMaps: "Google Maps", howToVisit: "Teleférico Parque de la Autonomía-manta, utaq taxi 15-20 min centro-manta.", officialText: "Oficial willakuykuna:", officialLinkText: "Bolivia Turismo Portal" },
    sources: { title: "Pukyukuna", intro: "Kay pukyukuna rikuspa.", items: [
      { name: "Bolivia Turismo", description: "Bolivia turismo oficial.", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Gobierno", description: "Cochabamba municipio oficial.", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia Travel", description: "Bolivia nacional turismo.", url: "https://boliviatravel.gob.bo/" },
      { name: "Turismo y Culturas", description: "Bolivia ministerio oficial.", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Google Maps", description: "Google Maps ficha oficial.", url: "https://maps.app.goo.gl/J9HMnLUeamBGn2co8" }
    ]},
    footer: { callToAction: "Cristo de la Concordia cuiday.", text: "© 2026 Cristo de la Concordia.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", imageCopyright: "Rikch'akuna: lliu rikch'akuna fotografo originalpa.", links: [
      { name: "Bolivia Turismo", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Gobierno", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia Travel", url: "https://boliviatravel.gob.bo/" },
      { name: "Turismo y Culturas", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  }
};
