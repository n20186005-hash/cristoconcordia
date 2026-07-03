export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史背景", architecture: "雕塑特色", monuments: "艺术价值", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["宗教艺术", "文化地标", "科恰班巴必游"], tagline: "玻利维亚 · 科恰班巴", title: "和谐基督纪念碑", subtitle: "Monumento al Cristo de la Concordia · 和平象征 · 宏伟雕塑", cta: "探索纪念碑" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "历史背景与建造",
      intro: `和谐基督纪念碑（Monumento al Cristo de la Concordia）位于玻利维亚科恰班巴市，是一座象征和平与团结的宏伟宗教雕塑。\n\n**建造历史**：这座纪念碑建于20世纪末，旨在传达和平、团结与和谐的信息。雕塑栩栩如生地描绘了基督张开双臂的姿态，象征着对全人类的拥抱与祝福。\n\n**文化意义**：作为科恰班巴的重要宗教和文化地标，和谐基督纪念碑不仅吸引了众多信徒前来朝圣，也成为游客了解玻利维亚宗教艺术和文化的重要窗口。`
    },
    curiosities: {
      title: "隐藏的故事：艺术价值与象征意义",
      content: `**艺术风格**：和谐基督纪念碑采用了写实主义雕塑风格，基督的形象庄重而慈祥，细节刻画精致，展现出高超的雕塑艺术水平。\n\n**象征意义**：纪念碑的名称"Concordia"（和谐）体现了其核心价值——促进不同文化、信仰人群之间的理解、尊重与和谐共处。张开双臂的基督形象，传递出包容与博爱的普世价值。\n\n**参观礼仪**：作为宗教场所，请游客保持庄重和安静。尊重当地的宗教习俗，穿着得体，避免大声喧哗。`
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
      before: "建造中的纪念碑",
      after: "今日的 和谐基督纪念碑"
    },
    visiting: {
      title: "实用游览指南",
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
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 科恰班巴国际机场 (CBB) ➔ 和谐基督纪念碑", content: "Jorge Wilstermann 国际机场位于科恰班巴市附近，距离和谐基督纪念碑较近。", options: [
        { name: "出租车/网约车（推荐）", price: "约 20-40 玻利维亚诺", time: "15-25 分钟", steps: ["在机场到达大厅外寻找官方出租车柜台或使用 Uber/inDrive 等网约车软件", "告知司机前往 Cristo de la Concordia（和谐基督纪念碑）", "科恰班巴交通相对便利，车程较短"] }
      ]},
      publicTransport: {
        title: "🚌 公共交通",
        content: "从科恰班巴市中心前往和谐基督纪念碑可以乘坐公共交通。",
        options: [
          {
            name: "小巴/公交 (Minibus)",
            description: "从市中心乘坐前往纪念碑附近的小巴，下车后步行到达。",
            steps: [
              "从市中心找到前往 Av. de la Concordia 方向的小巴",
              "告知司机在 Cristo de la Concordia 附近停车",
              "下车后步行约 5-10 分钟到达纪念碑"
            ]
          }
        ]
      },
      city: { title: "🚶 从科恰班巴市中心出发", content: "和谐基督纪念碑位于科恰班巴市内，从市中心出发可以选择多种交通方式。建议预留半天时间，将纪念碑与附近景点一并游览。", steps: ["从市中心乘坐出租车约 10-20 分钟，费用约 15-30 玻利维亚诺", "或乘坐小巴到 Av. de la Concordia 方向，费用更经济", "到达后步行进入纪念碑广场"] },
      tips: { title: "交通与气候小贴士", items: [
        "🌡️ **气候优势**：科恰班巴海拔约 2500 米，气候温暖宜人，被称为'永恒春城'，是玻利维亚气候最舒适的城市之一",
        "市区内建议使用打车软件（Uber/inDrive）更安全便捷",
        "参观时间建议安排在清晨或傍晚，避开中午的炎热",
        "可与科恰班巴市中心、圣安东尼奥教堂等景点安排在同一行程",
        "科恰班巴的交通相对不那么拥堵，出行较为便利"
      ] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自和谐基督纪念碑的声音：Google Maps 真实见证", 
      viewMore: "在 Google Maps 查看更多评价",
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "参观完和谐基督纪念碑后，您可以顺道游览以下附近景点：",
      nearbyItems: [
        { name: "科恰班巴市中心 (Centro de Cochabamba)", description: "玻利维亚的宪法首都，拥有历史悠久的教堂、广场和市场，以及美味的地方美食。" },
        { name: "圣安东尼奥教堂 (Santuario de San Antonio)", description: "科恰班巴著名的教堂，建筑风格独特，是当地重要的宗教场所。" },
        { name: "科恰班巴基督像 (Cristo de la Concordia)", description: "另一座位于科恰班巴的基督雕像，规模更大，同样值得参观。" }
      ]
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多相片" },
    faq: { title: "常见问题", subtitle: "深入了解和谐基督纪念碑", items: [
      { question: "和谐基督纪念碑的开放时间和门票价格？", answer: "开放时间：每天 08:00 - 21:00。门票：免费开放。所有游客都可以免费参观这座纪念碑。" },
      { question: "游览和谐基督纪念碑需要多长时间？", answer: "建议游览时间：30分钟 - 1小时。您可以静静地欣赏雕塑艺术，拍照留念，或在此反思冥想。时间可根据个人兴趣灵活安排。" },
      { question: "和谐基督纪念碑的海拔是多少？气候如何？", answer: "科恰班巴海拔约 2500 米，气候温暖宜人，被称为'永恒春城'。相比拉巴斯和波托西等高原城市，科恰班巴的气候更加舒适，几乎不会有高原反应。" },
      { question: "参观和谐基督纪念碑有什么注意事项？", answer: "⚠️ 着装要求：作为宗教场所，建议穿着得体。保持安静，尊重他人的祈祷和反思。可以拍照，但请关闭闪光灯。请保持环境整洁，不要攀爬雕塑或基座。" }
    ]},
    location: { title: "地图位置", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia\n（玻利维亚科恰班巴）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为科恰班巴的重要文化地标，请与我们一起爱护环境、尊重宗教习俗，共同维护这一庄严而美丽的空间。", text: "© 2026 和谐基督纪念碑指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播和谐基督纪念碑信息。我们与玻利维亚政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "玻利维亚旅游局科恰班巴大区", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "科恰班巴市政府", url: "https://www.cochabamba.bo/" },
      { name: "玻利维亚国家旅游推广门户", url: "https://boliviatravel.gob.bo/" },
      { name: "玻利维亚旅游与文化部", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "认识玻利维亚官方旅游导览计划", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  en: {
    nav: { history: "Geology", architecture: "Features", monuments: "Formations", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Natural Wonder", "Geological Park", "La Paz Must-See"], tagline: "Bolivia · La Paz", title: "Valle de la Luna", subtitle: "Moon Valley · Lunar Landscape · Unique Geological Wonder", cta: "Explore the Valley" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "Geological History & Formation",
      intro: "Valle de la Luna (Moon Valley) is located in the southern district (Mallasa) of La Paz, Bolivia. This breathtaking geological park features a landscape formed by millions of years of erosion, presenting surface features strikingly similar to the Moon.\n\n**Neil Armstrong's Naming Story**: The current name 'Moon Valley' originated from a fascinating historical event. In 1969, Neil Armstrong, the first person to walk on the Moon, visited La Paz. While playing golf at the nearby Mallasilla golf course, he saw this landscape and exclaimed that it looked remarkably similar to the lunar surface he had just visited. Since then, the name 'Valle de la Luna' has become famous worldwide.\n\n**Geological Formation**: This is a classic example of 'Badlands' topography. The terrain was originally an ancient mountain range, mainly composed of extremely fragile clay lacking vegetation protection. Under the dual forces of concentrated rainfall during La Paz's rainy season and strong winds, the clay eroded like 'melting ice cream,' creating the current stone forests, spires, and gullies."
    },
    curiosities: {
      title: "Hidden Secrets: Cultural Significance & Naming Story",
      content: "**Neil Armstrong's Exclamation**: As mentioned above, Neil Armstrong's visit in 1969 brought the name 'Moon Valley' to worldwide fame. The astronaut's exclamation upon seeing this landscape became the most famous promotional story for this attraction.\n\n**Local Cultural Perception**: In Aymara culture, strangely shaped rocks are often regarded as dwellings of souls (Achachilas, meaning ancestors' spirits). This is also why another similar nearby attraction is called 'Valle de las Animas' (Spirit Valley). For indigenous locals, these naturally sculpted rock formations are not only geological wonders but also sacred spaces connecting the human world and the spiritual realm.\n\n**Conservation Appeal**: The clay rock formations in Moon Valley are extremely fragile. Visitors must walk only on designated wooden walkways or stone paths. Absolutely do not climb or touch the rock pillars, as this may cause irreversible damage. Please take away all your trash and respect this natural wonder formed over millions of years."
    },
    architecture: {
      title: "Landform Features & Geological Structure",
      intro: "The landscape of Valle de la Luna was formed by millions of years of natural erosion, presenting one of the most unique geological landscapes on Earth. The rock formations, canyons, and strange landforms are like art pieces carefully carved by nature.",
      specs: {
        structure: { title: "Geological Structure", content: "The rock formations in the Moon Valley are mainly composed of clay, sandstone, and conglomerate. These sedimentary rocks formed in different geological periods and, after long-term weathering and erosion, created the unique landscape we see today." },
        design: { title: "Landform Features", content: "Hundreds of rock formations with different shapes are distributed throughout the park—some like spires, some like domes, and some like labyrinthine canyons. These landforms are especially spectacular at sunrise and sunset." },
        optics: { title: "Viewing Experience", content: "Valle de la Luna has dedicated walking paths and viewing points, allowing visitors to safely explore this magical landscape. At sunset, the sunlight gilds the rock formations in golden-red light—the best time for photography." }
      },
      plaque: {
        title: "Basic Information",
        items: [
          { label: "Name", value: "Valle de la Luna (Moon Valley)" },
          { label: "Location", value: "Southern District, La Paz, Bolivia" },
          { label: "Opening Hours", value: "09:00 - 17:00" },
          { label: "Phone", value: "+591 78937547" },
          { label: "Landform Type", value: "Erosional landscape, sedimentary rocks" },
          { label: "Best Time to Visit", value: "2 hours before sunset" }
        ]
      }
    },
    monuments: {
      title: "Geological Wonders Analysis",
      intro: "Valle de la Luna is home to numerous breathtaking geological wonders, each with its own unique formation story and viewing value.",
      items: [
        { name: "Spire Rock Formations", description: "One of the most spectacular sights in the park, dozens of spire-shaped rock formations stand tall, the tallest reaching several meters. These spires are protected by hard sandstone caps atop soft clay, creating unique 'hat' shapes." },
        { name: "Mini Canyons", description: "Winding mini-canyons run through the entire park, some only wide enough for one person to pass. These canyons vary in depth and shape, masterpieces of millions of years of water erosion." }
      ]
    },
    contrast: {
      title: "Valley Across Time",
      intro: "Although the landscape of Valle de la Luna formed millions of years ago, human exploration and documentation of it spans only over a century. Through the contrast of old photos and modern panoramas, we can feel the eternal charm of nature's masterful craftsmanship.",
      before: "Early Exploration: Moon Valley",
      after: "Today: Valle de la Luna"
    },
    visiting: {
      title: "Plan Your Visit",
      intro: "Valle de la Luna is an ideal destination for exploring La Paz's natural scenery. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "09:00 - 17:00 (Daily)", note: "Arrive 2 hours before sunset for the best light." },
      price: { title: "Entrance Fee", content: "Foreigners: 15 Bolivianos | Bolivian Citizens: 3 Bolivianos", note: "Prices may vary; please confirm on-site. Differentiated pricing reflects support for the local community." },
      duration: { title: "Trails & Suggested Duration", content: "**Short Trail** (Punto del Diablo / Devil's Horn): ~15 minutes, suitable for visitors with limited mobility, offers panoramic views.\n**Long Trail**: ~45 minutes, goes deep into the canyon, allowing close exploration among labyrinthine spires.", note: "Both trails offer highlights of Moon Valley. Please choose according to your physical condition." },
      tips: { title: "Travel Tips & Important Notes", items: [
        "⚠️ **Accessibility Warning**: Due to natural dirt paths with narrow steps, Moon Valley is **NOT suitable for wheelchairs or strollers**. Please consider this before visiting",
        "High altitude area—use sun protection and dress warmly for temperature swings",
        "Wear comfortable walking shoes; some sections have slopes",
        "Bring enough drinking water; there are no shops in the park",
        "Sunset is the best time for photography—arrive early",
        "Consider combining with nearby Valle de las Animas on the same day",
        "🌱 **Conservation Appeal**: Please walk only on designated wooden walkways or stone paths. Do NOT climb or touch rock pillars. Take away all trash. Help protect this natural wonder formed over millions of years"
      ] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ La Paz Int'l Airport (LPB) ➔ Moon Valley", content: "El Alto International Airport is located on a mountain top at 4000+ meters elevation, quite far from Moon Valley which is located in the southern valley (Mallasa).", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 80-120 Bolivianos", time: "1-1.5 hours", steps: ["Find official taxi counters at the airport arrivals hall or use ride-hailing apps like Uber/inDrive", "Tell the driver you are going to Valle de la Luna (Moon Valley)", "⚠️ Note: La Paz traffic is extremely congested, and there's a large elevation difference between the airport and Moon Valley. Please allow ample time"] }
      ]},
      publicTransport: {
        title: "🚌 Public Transport",
        content: "You can take public transport from downtown La Paz to Moon Valley, but it requires finding the right minibus.",
        options: [
          {
            name: "Minibus",
            description: "Take a minibus heading to Mallasa from near San Francisco Church in the city center, get off near Moon Valley and walk.",
            steps: [
              "Find a minibus heading to Mallasa near San Francisco Church in the city center",
              "Tell the driver to stop near Valle de la Luna",
              "After getting off, walk about 10 minutes to the entrance"
            ]
          }
        ]
      },
      city: { title: "🚶 From Downtown La Paz", content: "Valle de la Luna is located in the southern district (Mallasa) of La Paz. You can choose various transportation options from the city center. It is recommended to allocate half a day to visit Moon Valley together with nearby attractions.", steps: ["Take a taxi from downtown, about 20-30 minutes, costing about 40-60 Bolivianos", "Or take a minibus heading to Mallasa, which is more economical", "After arrival, walk into the park"] },
      tips: { title: "Transportation & Altitude Tips", items: [
        "🌡️ **Altitude Advantage**: Moon Valley is at ~3200-3300m elevation, about 300-400m LOWER than downtown La Paz (3600m+). The climate is warmer and more pleasant, with relatively more oxygen, making it an excellent place to alleviate altitude sickness",
        "Using ride-hailing apps (Uber/inDrive) in the city is safer and more convenient",
        "Schedule your visit in the afternoon to enjoy the sunset",
        "Combine with Valle de las Animas in the same trip",
        "La Paz traffic is heavily congested—please allow ample travel time"
      ] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Voices from Valle de la Luna: Real Testimonies from Google Maps", 
      viewMore: "View More Reviews on Google Maps",
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Valle de la Luna, you can easily visit the following nearby attractions:",
      nearbyItems: [
        { name: "Valle de las Animas", description: "Another breathtaking geological landscape, not far from Moon Valley, with equally unique and spectacular landforms." },
        { name: "Downtown La Paz (Centro de La Paz)", description: "Bolivia's administrative capital, home to San Francisco Church, the Presidential Palace, and unique cable car transportation." },
        { name: "Tiwanaku Archaeological Site", description: "A UNESCO World Heritage Site near La Paz, one of South America's oldest civilizations, over 1500 years old." }
      ]
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Valle de la Luna", items: [
      { question: "How did Valle de la Luna get its name?", answer: "The name 'Valle de la Luna' originated from Neil Armstrong's visit in 1969. After walking on the Moon, Armstrong visited La Paz and played golf at the nearby Mallasilla golf course. Seeing this landscape, he exclaimed that it looked remarkably similar to the lunar surface. Since then, the name 'Moon Valley' has become famous worldwide." },
      { question: "What are the opening hours and entrance fees?", answer: "Opening hours: Daily 09:00 - 17:00. Entrance fee: Foreigners 15 Bolivianos, Bolivian citizens 3 Bolivianos. Differentiated pricing reflects support for the local community." },
      { question: "How long does it take to visit Valle de la Luna? What trails are available?", answer: "Short Trail (Punto del Diablo / Devil's Horn): ~15 minutes, suitable for visitors with limited mobility, offers panoramic views. Long Trail: ~45 minutes, goes deep into the canyon, allowing close exploration among labyrinthine spires. Please choose according to your physical condition." },
      { question: "What is the altitude of Moon Valley? Will I have altitude sickness?", answer: "Moon Valley is at ~3200-3300m elevation, about 300-400m LOWER than downtown La Paz (3600m+). The climate is warmer and more pleasant, with relatively more oxygen, making it an excellent place to alleviate altitude sickness." },
      { question: "What are the important notes for visiting Moon Valley?", answer: "⚠️ Accessibility Warning: Due to natural dirt paths with narrow steps, Moon Valley is NOT suitable for wheelchairs or strollers. Please walk only on designated wooden walkways or stone paths. Do NOT climb or touch rock pillars. Take away all trash. Help protect this natural wonder." }
    ]},
    location: { title: "Map Location", address: "CWM4+3C4\nLa Paz\nBolivia", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important cultural landmark in Cochabamba, please join us in caring for the environment and respecting religious customs. Keep the attraction clean and maintain this solemn and beautiful space together.", text: "© 2026 Christ of the Concord Monument Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about the Christ of the Concord Monument. We are not affiliated with the Bolivian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Bolivia Tourism - Cochabamba Region", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Municipal Government", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia National Tourism Portal", url: "https://boliviatravel.gob.bo/" },
      { name: "Bolivia Ministry of Tourism and Cultures", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Discover Bolivia Official Guide Program", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  es: {
    nav: { history: "Geología", architecture: "Características", monuments: "Formaciones", visiting: "Información", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: { tags: ["Maravilla Natural", "Parque Geológico", "Imperdible en La Paz"], tagline: "Bolivia · La Paz", title: "Valle de la Luna", subtitle: "Valle de la Luna · Paisaje Lunar · Maravilla Geológica", cta: "Explorar" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia Geológica y Formación",
      intro: "El Valle de la Luna se encuentra en el distrito sur (Mallasa) de La Paz, Bolivia. Este impresionante parque geológico cuenta con un paisaje formado por millones de años de erosión, presentando características superficiales sorprendentemente similares a las de la Luna.\n\n**La Historia del Nombramiento por Armstrong**: El nombre actual 'Valle de la Luna' se originó a partir de un fascinante evento histórico. En 1969, Neil Armstrong, la primera persona en caminar sobre la Luna, visitó La Paz. Mientras jugaba golf en el cercano campo de golf de Mallasilla, vio este paisaje y exclamó que se parecía increíblemente a la superficie lunar que acababa de visitar. Desde entonces, el nombre 'Valle de la Luna' se ha hecho famoso mundialmente.\n\n**Formación Geológica**: Este es un ejemplo clásico de topografía de 'Badlands' (tierras baldías). El terreno fue originalmente una antigua cadena montañosa, compuesta principalmente por arcilla extremadamente frágil que carece de protección vegetal. Bajo la acción dual de las lluvias concentradas durante la temporada de lluvias de La Paz y los fuertes vientos, la arcilla se erosionó como 'helado derritiéndose', creando los actuales bosques de piedra, agujas y barrancos."
    },
    curiosities: {
      title: "Secretos Ocultos: Significado Cultural e Historia del Nombre",
      content: "**La Exclamación de Armstrong**: Como se mencionó anteriormente, la visita de Neil Armstrong en 1969 trajo fama mundial al nombre 'Valle de la Luna'. La exclamación del astronauta al ver este paisaje se convirtió en la historia promocional más famosa de esta atracción.\n\n**Percepción Cultural Local**: En la cultura aimara, las rocas de formas extrañas a menudo se consideran moradas de almas (Achachilas, que significa espíritus de los antepasados). Esta es también la razón por la que otra atracción similar cercana se llama 'Valle de las Animas'. Para los lugareños indígenas, estas formaciones rocosas esculpidas por la naturaleza no son solo maravillas geológicas, sino también espacios sagrados que conectan el mundo humano con el reino espiritual.\n\n**Llamado a la Conservación**: Las formaciones rocosas de arcilla en el Valle de la Luna son extremadamente frágiles. Los visitantes deben caminar solo por los pasarelas de madera designadas o caminos de piedra. Absolutamente NO se debe escalar ni tocar los pilares rocosos, ya que esto puede causar daños irreversibles. Por favor, lleve consigo toda su basura y respete esta maravilla natural formada a lo largo de millones de años."
    },
    architecture: {
      title: "Características del Terreno y Estructura Geológica",
      intro: "El paisaje del Valle de la Luna fue formado por millones de años de erosión natural, presentando uno de los paisajes geológicos más únicos de la Tierra. Las formaciones rocosas, cañones y extrañas formas terrestres son como obras de arte cuidadosamente esculpidas por la naturaleza.",
      specs: {
        structure: { title: "Estructura Geológica", content: "Las formaciones rocosas en el Valle de la Luna están compuestas principalmente por arcilla, arenisca y conglomerado. Estas rocas sedimentarias se formaron en diferentes períodos geológicos y, después de un largo tiempo de meteorización y erosión, crearon el paisaje único que vemos hoy." },
        design: { title: "Características del Terreno", content: "Cientos de formaciones rocosas con diferentes formas están distribuidas por todo el parque: algunas como agujas, algunas como cúpulas, y algunas como cañones laberínticos. Estas formas terrestres son especialmente espectaculares al amanecer y al atardecer." },
        optics: { title: "Experiencia de Visualización", content: "El Valle de la Luna cuenta con senderos peatonales dedicados y miradores, permitiendo a los visitantes explorar este mágico paisaje de manera segura. Al atardecer, la luz del sol baña las formaciones rocosas en un tono rojo dorado: el mejor momento para la fotografía." }
      },
      plaque: {
        title: "Información Básica",
        items: [
          { label: "Nombre", value: "Valle de la Luna" },
          { label: "Ubicación", value: "Distrito Sur, La Paz, Bolivia" },
          { label: "Horario", value: "09:00 - 17:00" },
          { label: "Teléfono", value: "+591 78937547" },
          { label: "Tipo de Terreno", value: "Paisaje erosional, rocas sedimentarias" },
          { label: "Mejor Momento", value: "2 horas antes del atardecer" }
        ]
      }
    },
    monuments: {
      title: "Análisis de Maravillas Geológicas",
      intro: "El Valle de la Luna alberga numerosas maravillas geológicas impresionantes, cada una con su propia historia de formación única y valor de visualización.",
      items: [
        { name: "Formaciones Rocosas en Forma de Aguja", description: "Una de las vistas más espectaculares del parque, docenas de formaciones rocosas en forma de aguja se elevan majestuosamente, las más altas alcanzan varios metros. Estas agujas están protegidas por tapas de arenisca dura sobre arcilla blanda, creando singulares formas de 'sombrero'." },
        { name: "Mini Cañones", description: "Cañones mini serpenteantes recorren todo el parque, algunos solo tienen el ancho suficiente para que pase una persona. Estos cañones varían en profundidad y forma, son obras maestras de millones de años de erosión hídrica." }
      ]
    },
    contrast: {
      title: "El Valle a Través del Tiempo",
      intro: "Aunque el paisaje del Valle de la Luna se formó hace millones de años, la exploración y documentación humana del mismo abarca solo poco más de un siglo. A través del contraste de fotos antiguas y panoramas modernos, podemos sentir el encanto eterno de la magistral artesanía de la naturaleza.",
      before: "Exploración Temprana: Valle de la Luna",
      after: "Hoy: Valle de la Luna"
    },
    visiting: {
      title: "Planifica Tu Visita",
      intro: "El Valle de la Luna es un destino ideal para explorar el paisaje natural de La Paz. Para obtener la mejor experiencia, consulte la siguiente información práctica.",
      hours: { title: "Horario de Apertura", content: "09:00 - 17:00 (Todos los días)", note: "Llegue 2 horas antes del atardecer para la mejor luz." },
      price: { title: "Entrada", content: "Extranjeros: 15 Bolivianos | Ciudadanos Bolivianos: 3 Bolivianos", note: "Los precios pueden variar; confirme en el lugar. La fijación de precios diferenciada refleja el apoyo a la comunidad local." },
      duration: { title: "Senderos y Duración Sugerida", content: "**Sendero Corto** (Punto del Diablo / Cuerno del Diablo): ~15 minutos, adecuado para visitantes con movilidad limitada, ofrece vistas panorámicas.\n**Sendero Largo**: ~45 minutos, se adentra en el cañón, permitiendo la exploración cercana entre agujas laberínticas.", note: "Ambos senderos ofrecen los aspectos más destacados del Valle de la Luna. Por favor, elija según su condición física." },
      tips: { title: "Consejos de Viaje y Notas Importantes", items: [
        "⚠️ **Advertencia de Accesibilidad**: Debido a que los caminos son de tierra natural con escalones estrechos, el Valle de la Luna **NO es adecuado para sillas de ruedas o cochecitos de bebé**. Por favor, considere esto antes de visitar",
        "Zona de gran altitud: use protección solar y abríguese para los cambios de temperatura",
        "Use zapatos cómodos para caminar; algunas secciones tienen pendientes",
        "Traiga suficiente agua potable; no hay tiendas en el parque",
        "El atardecer es el mejor momento para la fotografía: llegue temprano",
        "Considere combinar con el cercano Valle de las Animas el mismo día",
        "🌱 **Llamado a la Conservación**: Por favor, camine solo por los pasarelas de madera designadas o caminos de piedra. NO escalar ni tocar los pilares rocosos. Lleve consigo toda su basura. Ayude a proteger esta maravilla natural formada a lo largo de millones de años"
      ] }
    },
    transportation: {
      title: "Guía de Transporte Precisa",
      airport: { title: "✈️ Aeropuerto Int'l de La Paz (LPB) ➔ Valle de la Luna", content: "El Aeropuerto Internacional de El Alto está ubicado en la cima de una montaña a 4000+ metros de altitud, bastante lejos del Valle de la Luna que se encuentra en el valle sur (Mallasa).", options: [
        { name: "Taxi / Aplicación (Recomendado)", price: "Aprox. 80-120 Bolivianos", time: "1-1.5 horas", steps: ["Busque mostradores de taxis oficiales en la sala de llegadas del aeropuerto o use aplicaciones de transporte como Uber/inDrive", "Dígale al conductor que va al Valle de la Luna (Moon Valley)", "⚠️ Nota: El tráfico en La Paz es extremadamente congestionado, y hay una gran diferencia de altitud entre el aeropuerto y el Valle de la Luna. Por favor, permita tiempo suficiente"] }
      ]},
      publicTransport: {
        title: "🚌 Transporte Público",
        content: "Puede tomar transporte público desde el centro de La Paz al Valle de la Luna, pero requiere encontrar el minibús correcto.",
        options: [
          {
            name: "Minibús",
            description: "Tome un minibús hacia Mallasa cerca de la Iglesia de San Francisco en el centro, bájese cerca del Valle de la Luna y camine.",
            steps: [
              "Busque un minibús hacia Mallasa cerca de la Iglesia de San Francisco en el centro",
              "Dígale al conductor que pare cerca del Valle de la Luna",
              "Después de bajarse, camine unos 10 minutos hasta la entrada"
            ]
          }
        ]
      },
      city: { title: "🚶 Desde el Centro de La Paz", content: "El Valle de la Luna se encuentra en el distrito sur (Mallasa) de La Paz. Puede elegir varias opciones de transporte desde el centro de la ciudad. Se recomienda asignar medio día para visitar el Valle de la Luna junto con atracciones cercanas.", steps: ["Tome un taxi desde el centro, unos 20-30 minutos, costando aproximadamente 40-60 Bolivianos", "O tome un minibús hacia Mallasa, que es más económico", "Después de llegar, camine hacia el parque"] },
      tips: { title: "Consejos de Transporte y Altitud", items: [
        "🌡️ **Ventaja de Altitud**: El Valle de la Luna está a ~3200-3300m de altitud, aproximadamente 300-400m MÁS BAJO que el centro de La Paz (3600m+). El clima es más cálido y agradable, con relaticamente más oxígeno, lo que lo convierte en un excelente lugar para aliviar el mal de altura",
        "Usar aplicaciones de transporte (Uber/inDrive) en la ciudad es más seguro y conveniente",
        "Programe su visita por la tarde para disfrutar del atardecer",
        "Combine con el Valle de las Animas en el mismo viaje",
        "El tráfico en La Paz está muy congestionado — por favor, permita tiempo de viaje suficiente"
      ] }
    },
    reviews: { 
      title: "Reseñas de Visitantes y Exploración Cercana", 
      subtitle: "Voces del Valle de la Luna: Testimonios Reales de Google Maps", 
      viewMore: "Ver Más Reseñas en Google Maps",
      nearbyTitle: "Atracciones Cercanas que Valen la Pena Visitar",
      nearbyIntro: "Después de visitar el Valle de la Luna, puede visitar fácilmente las siguientes atracciones cercanas:",
      nearbyItems: [
        { name: "Valle de las Animas", description: "Otro paisaje geológico impresionante, no lejos del Valle de la Luna, con formaciones terrestres igualmente únicas y espectaculares." },
        { name: "Centro de La Paz", description: "Capital administrativa de Bolivia, hogar de la Iglesia de San Francisco, el Palacio Presidencial y un único sistema de transporte por teleférico." },
        { name: "Sitio Arqueológico de Tiwanaku", description: "Patrimonio de la Humanidad de la UNESCO cerca de La Paz, una de las civilizaciones más antiguas de Sudamérica, con más de 1500 años de antigüedad." }
      ]
    },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre el Valle de la Luna", items: [
      { question: "¿Cómo obtuvo el Valle de la Luna su nombre?", answer: "El nombre 'Valle de la Luna' se originó a partir de la visita de Neil Armstrong en 1969. Después de caminar sobre la Luna, Armstrong visitó La Paz y jugó golf en el cercano campo de golf de Mallasilla. Al ver este paisaje, exclamó que se parecía increíblemente a la superficie lunar. Desde entonces, el nombre 'Valle de la Luna' se ha hecho famoso mundialmente." },
      { question: "¿Cuál es el horario de apertura y las entradas?", answer: "Horario de apertura: Todos los días 09:00 - 17:00. Entrada: Extranjeros 15 Bolivianos, Ciudadanos Bolivianos 3 Bolivianos. La fijación de precios diferenciada refleja el apoyo a la comunidad local." },
      { question: "¿Cuánto tiempo se necesita para visitar el Valle de la Luna? ¿Qué senderos hay?", answer: "Sendero Corto (Punto del Diablo / Cuerno del Diablo): ~15 minutos, adecuado para visitantes con movilidad limitada, ofrece vistas panorámicas. Sendero Largo: ~45 minutos, se adentra en el cañón, permitiendo la exploración cercana entre agujas laberínticas. Por favor, elija según su condición física." },
      { question: "¿Cuál es la altitud del Valle de la Luna? ¿Tendré mal de altura?", answer: "El Valle de la Luna está a ~3200-3300m de altitud, aproximadamente 300-400m MÁS BAJO que el centro de La Paz (3600m+). El clima es más cálido y agradable, con relaticamente más oxígeno, lo que lo convierte en un excelente lugar para aliviar el mal de altura." },
      { question: "¿Cuáles son las notas importantes para visitar el Valle de la Luna?", answer: "⚠️ Advertencia de Accesibilidad: Debido a que los caminos son de tierra natural con escalones estrechos, el Valle de la Luna NO es adecuado para sillas de ruedas o cochecitos de bebé. Por favor, camine solo por los pasarelas de madera designadas o caminos de piedra. NO escalar ni tocar los pilares rocosos. Lleve consigo toda su basura. Ayude a proteger esta maravilla natural." }
    ]},
    location: { title: "Ubicación", address: "CWM4+3C4\nLa Paz\nBolivia", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como importante punto cultural en Cochabamba, únase a nosotros para cuidar el medio ambiente y respetar las costumbres religiosas. Mantenga la atracción limpia y conserve este solemne y hermoso espacio juntos.", text: "© 2026 Guía del Monumento al Cristo de la Concordia · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de guía de terceros dedicado a compartir información precisa sobre el Monumento al Cristo de la Concordia. No estamos afiliados con el gobierno boliviano o ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de guía de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Bolivia Turismo - Región Cochabamba", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Gobierno Municipal de Cochabamba", url: "https://www.cochabamba.bo/" },
      { name: "Portal Nacional de Turismo de Bolivia", url: "https://boliviatravel.gob.bo/" },
      { name: "Ministerio de Turismo y Culturas de Bolivia", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia Programa Oficial de Guía", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  qu: {
    nav: { history: "Ñawpaq", architecture: "Ruwasqa", monuments: "Rikuykuna", visiting: "Puriy", transportation: "Chaykamuy", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tags: ["Natural", "Geológico", "La Paz"], tagline: "Bolivia · La Paz", title: "Valle de la Luna", subtitle: "Killa Llaqta · Lunar Landscape · Geológico", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    history: {
      title: "Ñawpaq Kawsay",
      intro: "Valle de la Luna, La Paz, Bolivia. Killa Llaqta. Millions of years erosion. Unique landscape.\n\n**Neil Armstrong nisqan**: 1969 watapi, Neil Armstrong (Moon-man) La Paz-ta purin. Mallasilla golf-pi, kay llacta-ta rikuspan, 'Moon- hina' nispa. Chaymanta 'Valle de la Luna' suticha riqsisqa.\n\n**Geological wonder**: Badlands topography. Clay, sandstone, conglomerate. Rain, wind erosion. Like melting ice cream."
    },
    curiosities: {
      title: "Pakasqa Yachay: Inca willakuy",
      content: "Inca legends. Aymara, Quechua willakuy. Special sound resonance. 'Pachamama rimay'."
    },
    architecture: {
      title: "Imayna ruwasqa",
      intro: "Valle de la Luna, millions of years. Unique landscape. Clay, sandstone.",
      specs: {
        structure: { title: "Geological", content: "Clay, sandstone, conglomerate. Millions of years." },
        design: { title: "Landform", content: "Hundreds rock formations. Spires, domes, canyons." },
        optics: { title: "Rikuy", content: "Walking paths. Viewpoints. Sunset best photography." }
      },
      plaque: {
        title: "Willakuykuna",
        items: [
          { label: "Suti", value: "Valle de la Luna" },
          { label: "Maypi", value: "La Paz, Bolivia" },
          { label: "Punchaw", value: "09:00 - 17:00" },
          { label: "Telefono", value: "+591 78937547" }
        ]
      }
    },
    monuments: {
      title: "Rikunapaq",
      intro: "Unique rock formations, canyons.",
      items: [
        { name: "Spire Rocks", description: "Tall spire rock formations. Unique shapes. Sandstone caps." },
        { name: "Mini Canyons", description: "Winding canyons. Water erosion. Millions of years." }
      ]
    },
    contrast: {
      title: "Ñawpaq vs Kunan",
      intro: "Valle de la Luna ñawpaq vs kunan.",
      before: "Ñawpaq",
      after: "Kunan"
    },
    visiting: {
      title: "Puriy",
      intro: "Valle de la Luna purinapaq allin.",
      hours: { title: "Punchaw", content: "09:00 - 17:00", note: "Sunset before 2 hours." },
      price: { title: "Qullqi", content: "Foreigners: 15 Bs | Bolivians: 3 Bs", note: "Different price." },
      duration: { title: "Hayk'aq", content: "Short trail: 15 min. Long trail: 45 min.", note: "Short: panoramic. Long: deep canyon." },
      tips: { title: "Yachay", items: ["⚠️ NOT for wheelchairs/strollers", "Comfortable shoes", "Water", "Sunset best", "Valle de las Animas", "🌱 Don't climb rocks!"] }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "La Paz-manta", content: "El Alto airport (4000m) to Moon Valley (3200m).", options: [
        { name: "Taxi (Allin)", price: "80-120 Bolivianos", time: "1-1.5 hours", steps: ["Airport taxi counter", "Uber/inDrive app", "Valle de la Luna"] }
      ]},
      publicTransport: {
        title: "Minibus",
        content: "Minibus to Mallasa.",
        options: [
          {
            name: "Minibus Mallasa",
            description: "San Francisco near. Minibus Mallasa.",
            steps: [
              "San Francisco near minibus",
              "Mallasa direction",
              "Walk 10 min"
            ]
          }
        ]
      },
      city: { title: "La Paz Centro", content: "Downtown to Moon Valley (40-60 Bs, 20-30 min).", steps: ["Taxi 20-30 min", "Minibus Mallasa (cheaper)"] },
      tips: { title: "Yachay", items: ["Moon Valley: 3200-3300m (LOWER than La Paz center)", "Less altitude sickness here!", "Ride app safe", "Afternoon visit", "Sunset"] }
    },
    reviews: { 
      title: "Niykuna", 
      subtitle: "Valle de la Luna niykuna", 
      viewMore: "Astawan niykuna",
      nearbyTitle: "Huk kitikuna",
      nearbyIntro: "Huk.attractions:",
      nearbyItems: [
        { name: "Valle de las Animas", description: "Nearby geological park." },
        { name: "La Paz Centro", description: "Bolivia capital. Historic." }
      ]
    },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "09:00 - 17:00. Sunset best." },
      { question: "Qullqi paganan chá?", answer: "Yes. ~15 Bolivianos." },
      { question: "Imaynam paqarimuptan?", answer: "Millions years erosion. Clay, sandstone." }
    ]},
    location: { title: "Maypipas", address: "CWM4+3C4\nLa Paz\nBolivia", openMaps: "Google Maps" },
    footer: { callToAction: "Cristo de la Concordia cuiday.", text: "© 2026 Cristo de la Concordia.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "Bolivia Turismo", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Gobierno", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia Travel", url: "https://boliviatravel.gob.bo/" },
      { name: "Turismo y Culturas", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  }
};
