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
    nav: { history: "History", architecture: "Features", monuments: "Art Value", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Religious Art", "Cultural Landmark", "Cochabamba Must-See"], tagline: "Bolivia · Cochabamba", title: "Christ of the Concord Monument", subtitle: "Monumento al Cristo de la Concordia · Symbol of Peace · Magnificent Sculpture", cta: "Explore the Monument" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "History & Construction",
      intro: `The Christ of the Concord Monument (Monumento al Cristo de la Concordia) is located in Cochabamba, Bolivia. It is a magnificent religious sculpture symbolizing peace and unity.\n\n**Construction History**: This monument was built in the late 20th century, aiming to convey the message of peace, unity, and harmony. The sculpture vividly depicts Christ with open arms, symbolizing an embrace and blessing for all humanity.\n\n**Cultural Significance**: As an important religious and cultural landmark in Cochabamba, the Christ of the Concord Monument not only attracts many pilgrims but also serves as an important window for visitors to understand Bolivian religious art and culture.`
    },
    curiosities: {
      title: "Hidden Stories: Artistic Value & Symbolic Meaning",
      content: `**Artistic Style**: The Christ of the Concord Monument adopts a realistic sculpture style, Christ's image is solemn and benevolent, with exquisite detail carving, demonstrating a high level of sculpture art.\n\n**Symbolic Meaning**: The monument's name "Concordia" (harmony) reflects its core value—promoting understanding, respect, and harmonious coexistence among people of different cultures and faiths. The image of Christ with open arms conveys universal values of inclusion and love.\n\n**Visit Etiquette**: As a religious site, please maintain solemnity and quietness. Respect local religious customs, dress appropriately, and avoid loud noises.`
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
      title: "Practical Visit Guide",
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
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ Cochabamba Int'l Airport (CBB) ➔ Christ of the Concord Monument", content: "Jorge Wilstermann International Airport is located near Cochabamba city, relatively close to the Christ of the Concord Monument.", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 20-40 Bolivianos", time: "15-25 minutes", steps: ["Find official taxi counters at the airport arrivals hall or use ride-hailing apps like Uber/inDrive", "Tell the driver you are going to Cristo de la Concordia (Christ of the Concord Monument)", "Cochabamba traffic is relatively convenient, with a short driving distance"] }
      ]},
      publicTransport: {
        title: "🚌 Public Transport",
        content: "You can take public transport from downtown Cochabamba to the Christ of the Concord Monument.",
        options: [
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
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Christ of the Concord Monument", items: [
      { question: "What are the opening hours and entrance fees for the Christ of the Concord Monument?", answer: "Opening hours: Daily 08:00 - 21:00. Entrance fee: Free admission. All visitors can visit this monument free of charge." },
      { question: "How long does it take to visit the Christ of the Concord Monument?", answer: "Suggested visit time: 30 minutes - 1 hour. You can quietly appreciate the sculpture art, take photos, or reflect and meditate here. Time can be arranged flexibly according to personal interest." },
      { question: "What is the altitude of Cochabamba? Will I have altitude sickness?", answer: "Cochabamba is at ~2500m elevation, with warm and pleasant climate, known as the 'City of Eternal Spring.' Compared with high-altitude cities like La Paz and Potosi, Cochabamba's climate is more comfortable, and altitude sickness is almost non-existent." },
      { question: "What are the important notes for visiting the Christ of the Concord Monument?", answer: "⚠️ Dress Code: As a religious site, it is recommended to dress appropriately. Maintain quietness and respect others' prayer and reflection. Photography is allowed, but please turn off the flash. Please keep the environment clean and do not climb the sculpture or base." }
    ]},
    location: { title: "Map Location", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important cultural landmark in Cochabamba, please join us in caring for the environment and respecting religious customs. Keep the attraction clean and maintain this solemn and beautiful space together.", text: "© 2026 Christ of the Concord Monument Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about the Christ of the Concord Monument. We are not affiliated with the Bolivian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Bolivia Tourism - Cochabamba Region", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Municipal Government", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia National Tourism Portal", url: "https://boliviatravel.gob.bo/" },
      { name: "Bolivia Ministry of Tourism and Cultures", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Discover Bolivia Official Guide Program", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  es: {
    nav: { history: "Historia", architecture: "Características", monuments: "Valor Artístico", visiting: "Información", transportation: "Transporte", gallery: "Galería", reviews: "Reseñas", faq: "FAQ", location: "Ubicación" },
    hero: { tags: ["Arte Religioso", "Hit Cultural", "Imperdible en Cochabamba"], tagline: "Bolivia · Cochabamba", title: "Monumento al Cristo de la Concordia", subtitle: "Christ of the Concord Monument · Símbolo de Paz · Magnífica Escultura", cta: "Explorar el Monumento" },
    rating: { reviews: "reseñas", source: "Google Reseñas" },
    history: {
      title: "Historia y Construcción",
      intro: "El Monumento al Cristo de la Concordia se encuentra en Cochabamba, Bolivia. Es una magnífica escultura religiosa que simboliza la paz y la unidad.\n\n**Historia de la Construcción**: Este monumento fue construido a finales del siglo XX, con el objetivo de transmitir el mensaje de paz, unidad y armonía. La escultura representa vívidamente a Cristo con los brazos abiertos, simbolizando un abrazo y bendición para toda la humanidad.\n\n**Significado Cultural**: Como importante hito religioso y cultural en Cochabamba, el Monumento al Cristo de la Concordia no solo atrae a muchos peregrinos, sino que también sirve como una ventana importante para que los visitantes conozcan el arte religioso y la cultura de Bolivia."
    },
    curiosities: {
      title: "Historias Ocultas: Valor Artístico y Significado Simbólico",
      content: "**Estilo Artístico**: El Monumento al Cristo de la Concordia adopta un estilo de escultura realista. La imagen de Cristo es solemne y benévola, con un tallado de detalles exquisito, que demuestra un alto nivel de arte escultórico.\n\n**Significado Simbólico**: El nombre del monumento 'Concordia' (armonía) refleja su valor central: promover la comprensión, el respeto y la coexistencia armoniosa entre personas de diferentes culturas y creencias. La imagen de Cristo con los brazos abiertos transmite valores universales de inclusión y amor.\n\n**Etiqueta de Visita**: Como lugar religioso, mantenga la solemnidad y el silencio. Respete las costumbres religiosas locales, vístase apropiadamente y evite hacer ruido fuerte."
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
      title: "Guía Práctica de Visita",
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
    transportation: {
      title: "Guía Precisa de Transporte",
      airport: { title: "✈️ Aeropuerto Int'l de Cochabamba (CBB) ➔ Monumento al Cristo de la Concordia", content: "El Aeropuerto Internacional Jorge Wilstermann está ubicado cerca de Cochabamba, relativamente cerca del Monumento al Cristo de la Concordia.", options: [
        { name: "Taxi / Aplicación (Recomendado)", price: "Aprox. 20-40 Bolivianos", time: "15-25 minutos", steps: ["Busque mostradores de taxis oficiales en la sala de llegadas del aeropuerto o use aplicaciones como Uber/inDrive", "Dígale al conductor que va al Cristo de la Concordia (Monumento al Cristo de la Concordia)", "El transporte en Cochabamba es relativamente conveniente, con una distancia de manejo corta"] }
      ]},
      publicTransport: {
        title: "🚌 Transporte Público",
        content: "Puede tomar transporte público desde el centro de Cochabamba al Monumento al Cristo de la Concordia.",
        options: [
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
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más Fotos en Google Maps" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda Más Sobre el Monumento al Cristo de la Concordia", items: [
      { question: "¿Cuál es el horario de apertura y la entrada del Monumento al Cristo de la Concordia?", answer: "Horario de apertura: Todos los días 08:00 - 21:00. Entrada: Entrada gratuita. Todos los visitantes pueden visitar este monumento gratuitamente." },
      { question: "¿Cuánto tiempo se necesita para visitar el Monumento al Cristo de la Concordia?", answer: "Tiempo sugerido: 30 minutos - 1 hora. Puede apreciar tranquilamente el arte de la escultura, tomar fotos o reflexionar y meditar aquí. El tiempo se puede organizar flexiblemente según el interés personal." },
      { question: "¿Cuál es la altitud de Cochabamba? ¿Tendré mal de altura?", answer: "Cochabamba está a ~2500m de altitud, con clima cálido y agradable, conocida como la 'Ciudad de la Eterna Primavera'. En comparación con ciudades de gran altitud como La Paz y Potosí, el clima de Cochabamba es más cómodo, y el mal de altura es casi inexistente." },
      { question: "¿Cuáles son las notas importantes para visitar el Monumento al Cristo de la Concordia?", answer: "⚠️ Código de Vestimenta: Como lugar religioso, se recomienda vestirse apropiadamente. Mantenga el silencio y respete la oración y reflexión de otros. Se permite fotografía, pero apague el flash. Por favor, mantenga el entorno limpio y no escale la escultura o la base." }
    ]},
    location: { title: "Ubicación", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia", openMaps: "Ver en Google Maps" },
    footer: { callToAction: "Como importante hito cultural en Cochabamba, únase a nosotros para cuidar el medio ambiente y respetar las costumbres religiosas. Mantenga la atracción limpia y conserve este solemne y hermoso espacio juntos.", text: "© 2026 Guía del Monumento al Cristo de la Concordia · Todos los derechos reservados.\nEste sitio web es un proyecto independiente de guía de terceros dedicado a compartir información precisa sobre el Monumento al Cristo de la Concordia. No estamos afiliados con el gobierno boliviano o ninguna autoridad oficial.", made: "Este sitio web es un proyecto independiente de guía de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Bolivia Turismo - Región Cochabamba", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Gobierno Municipal de Cochabamba", url: "https://www.cochabamba.bo/" },
      { name: "Portal Nacional de Turismo de Bolivia", url: "https://boliviatravel.gob.bo/" },
      { name: "Ministerio de Turismo y Culturas de Bolivia", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia Programa Oficial de Guía", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  },
  qu: {
    nav: { history: "Ñawpaq", architecture: "Ruwasqa", monuments: "Art Value", visiting: "Puriy", transportation: "Chaykamuy", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tags: ["Religious Art", "Cultural", "Cochabamba"], tagline: "Bolivia · Cochabamba", title: "Cristo de la Concordia", subtitle: "Christ of the Concord Monument · Peace · Love", cta: "Monumento rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    history: {
      title: "Ñawpaq Kawsay",
      intro: "Cristo de la Concordia, Cochabamba, Bolivia. Monumento. Peace, unity.\n\n**Construction**: 20th century. Christ open arms. Symbol of peace.\n\n**Cultural Significance**: Important religious and cultural landmark in Cochabamba. Attracts pilgrims and visitors."
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
      title: "Puriy",
      intro: "Cristo de la Concordia purinapaq allin.",
      hours: { title: "Punchaw", content: "08:00 - 21:00", note: "Early morning or evening best." },
      price: { title: "Qullqi", content: "Free admission", note: "Open to all visitors free." },
      duration: { title: "Hayk'aq", content: "30 min - 1 hour", note: "Flexible according to interest." },
      tips: { title: "Yachay", items: ["⚠️ Dress appropriately (religious site)", "Maintain quietness", "Photography allowed (no flash)", "Bring water", "Early morning/evening best", "🌱 Keep environment clean"] }
    },
    transportation: {
      title: "Chaykamuy",
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
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Hayk'aq kachkan?", answer: "08:00 - 21:00. Free admission." },
      { question: "Hayk'aq puriy?", answer: "30 min - 1 hour. Flexible." },
      { question: "Cochabamba altitude?", answer: "2500m. Comfortable climate. No altitude sickness." }
    ]},
    location: { title: "Maypipas", address: "JV88+72C, Av. de la Concordia\nCochabamba\nBolivia", openMaps: "Google Maps" },
    footer: { callToAction: "Cristo de la Concordia cuiday.", text: "© 2026 Cristo de la Concordia.", made: "Kayqa puriy yachay.", linksTitle: "Imakunata", links: [
      { name: "Bolivia Turismo", url: "https://www.visitbolivia.produccion.gob.bo/lugares" },
      { name: "Cochabamba Gobierno", url: "https://www.cochabamba.bo/" },
      { name: "Bolivia Travel", url: "https://boliviatravel.gob.bo/" },
      { name: "Turismo y Culturas", url: "https://www.turismoyculturas.gob.bo/" },
      { name: "Conoce Bolivia", url: "https://conocebolivia.turismoyculturas.gob.bo/" }
    ]}
  }
};
