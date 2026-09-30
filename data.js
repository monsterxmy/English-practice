/* ============================================================
   Unit 1 题库 · 六年级英语
   按 P1~P6 分组，每页每句全部覆盖
   每题结构：
   { page, emoji, sentence, hint, answer, options, full }
   ============================================================ */

const UNIT1_QUESTIONS = [

  /* ============ P1 · Unit 1 封面 ============ */
  {
    page: "P1", emoji: "🌍",
    sentence: "What famous places ______ you know?",
    hint: "助动词（一般现在时）",
    answer: "do",
    options: ["do", "did", "does", "doing"],
    full: "What famous places do you know?"
  },

  /* ============ P2 · A. Let's talk ============ */
  {
    page: "P2", emoji: "📅",
    sentence: "Hi, Leo! How ______ your weekend?",
    hint: "be 动词（过去式，主语是 weekend）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "Hi, Leo! How was your weekend?"
  },
  {
    page: "P2", emoji: "📅",
    sentence: "It ______ great! I ______ the Great Wall.",
    hint: "be 动词过去式 + 攀登（过去式，词组）",
    answer: "was climbed",
    options: ["was climbed", "is climbed", "were climbed", "was climb"],
    full: "It was great! I climbed the Great Wall."
  },
  {
    page: "P2", emoji: "🧱",
    sentence: "Wow! The Great Wall ______ amazing.",
    hint: "be 动词（一般现在时）",
    answer: "is",
    options: ["is", "was", "are", "were"],
    full: "Wow! The Great Wall is amazing."
  },
  {
    page: "P2", emoji: "🧱",
    sentence: "It's about 21,000 kilometres ______.",
    hint: "形容词（描述长度）",
    answer: "long",
    options: ["long", "tall", "high", "wide"],
    full: "It's about 21,000 kilometres long."
  },
  {
    page: "P2", emoji: "❓",
    sentence: "What ______ you do, Leo?",
    hint: "助动词（一般过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "What did you do, Leo?"
  },
  {
    page: "P2", emoji: "🏠",
    sentence: "I ______ the \"Gingerbread House\" last Saturday.",
    hint: "参观（过去式）",
    answer: "visited",
    options: ["visited", "visit", "visits", "visiting"],
    full: "I visited the \"Gingerbread House\" last Saturday."
  },
  {
    page: "P2", emoji: "❓",
    sentence: "What ______ you do there?",
    hint: "助动词（一般过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "What did you do there?"
  },
  {
    page: "P2", emoji: "🍪",
    sentence: "______ gingerbread?",
    hint: "吃（动词原形，疑问句开头）",
    answer: "Eat",
    options: ["Eat", "Ate", "Eating", "Eats"],
    full: "Eat gingerbread?"
  },
  {
    page: "P2", emoji: "🚂",
    sentence: "It's a beautiful train station ______ New Zealand.",
    hint: "介词（在新西兰）",
    answer: "in",
    options: ["in", "on", "at", "to"],
    full: "It's a beautiful train station in New Zealand."
  },
  {
    page: "P2", emoji: "💡",
    sentence: "That ______ interesting.",
    hint: "听起来（第三人称单数）",
    answer: "sounds",
    options: ["sounds", "sound", "sounded", "sounding"],
    full: "That sounds interesting."
  },
  {
    page: "P2", emoji: "📷",
    sentence: "Please ______ me some pictures.",
    hint: "发送（动词原形）",
    answer: "send",
    options: ["send", "sends", "sent", "sending"],
    full: "Please send me some pictures."
  },

  /* ============ P3 · A. Let's learn ============ */
  {
    page: "P3", emoji: "🏯",
    sentence: "Amy ______ the Palace Museum.",
    hint: "走过（过去式，词组）",
    answer: "walked around",
    options: ["walked around", "walk around", "walks around", "walking around"],
    full: "Amy walked around the Palace Museum."
  },
  {
    page: "P3", emoji: "🏯",
    sentence: "Amy walked ______ the Palace Museum.",
    hint: "介词（绕着……走）",
    answer: "around",
    options: ["around", "through", "across", "over"],
    full: "Amy walked around the Palace Museum."
  },
  {
    page: "P3", emoji: "🌉",
    sentence: "Mike ______ the Hong Kong-Zhuhai-Macao Bridge.",
    hint: "参观（过去式）",
    answer: "visited",
    options: ["visited", "visit", "visits", "visiting"],
    full: "Mike visited the Hong Kong-Zhuhai-Macao Bridge."
  },
  {
    page: "P3", emoji: "🌉",
    sentence: "Mike visited ______ Hong Kong-Zhuhai-Macao Bridge.",
    hint: "定冠词（特指这座桥）",
    answer: "the",
    options: ["the", "a", "an", "/"],
    full: "Mike visited the Hong Kong-Zhuhai-Macao Bridge."
  },
  {
    page: "P3", emoji: "⛰️",
    sentence: "Zhang Peng ______ Mount Taishan.",
    hint: "攀登（过去式）",
    answer: "climbed",
    options: ["climbed", "climb", "climbs", "climbing"],
    full: "Zhang Peng climbed Mount Taishan."
  },
  {
    page: "P3", emoji: "⛰️",
    sentence: "Zhang Peng climbed ______ Taishan.",
    hint: "山名前的词（Mount + 山名）",
    answer: "Mount",
    options: ["Mount", "Mountain", "Hill", "Peak"],
    full: "Zhang Peng climbed Mount Taishan."
  },
  {
    page: "P3", emoji: "🗼",
    sentence: "Liu Jia's family ______ to Paris and ______ the Eiffel Tower.",
    hint: "旅行 + 参观（过去式）",
    answer: "travelled visited",
    options: ["travelled visited", "travel visit", "travels visits", "travelling visiting"],
    full: "Liu Jia's family travelled to Paris and visited the Eiffel Tower."
  },
  {
    page: "P3", emoji: "🗼",
    sentence: "Liu Jia's family travelled ______ Paris.",
    hint: "介词（去巴黎）",
    answer: "to",
    options: ["to", "in", "at", "for"],
    full: "Liu Jia's family travelled to Paris."
  },
  {
    page: "P3", emoji: "🎭",
    sentence: "Oliver and his cousin ______ a show at the Sydney Opera House.",
    hint: "观看（过去式）",
    answer: "watched",
    options: ["watched", "watch", "watches", "watching"],
    full: "Oliver and his cousin watched a show at the Sydney Opera House."
  },
  {
    page: "P3", emoji: "🎭",
    sentence: "Oliver and his cousin watched ______ at the Sydney Opera House.",
    hint: "一场演出",
    answer: "a show",
    options: ["a show", "a film", "a play", "a game"],
    full: "Oliver and his cousin watched a show at the Sydney Opera House."
  },
  {
    page: "P3", emoji: "🏖️",
    sentence: "What ______ they do in the summer holidays?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "What did they do in the summer holidays?"
  },
  {
    page: "P3", emoji: "🏖️",
    sentence: "What did they do ______ the summer holidays?",
    hint: "介词（在暑假期间）",
    answer: "in",
    options: ["in", "on", "at", "for"],
    full: "What did they do in the summer holidays?"
  },
  {
    page: "P3", emoji: "📍",
    sentence: "I visited a great place ______ Saturday.",
    hint: "介词（在上周六）",
    answer: "last",
    options: ["last", "next", "this", "every"],
    full: "I visited a great place last Saturday."
  },
  {
    page: "P3", emoji: "⛰️",
    sentence: "I ______ Mount Huangshan.",
    hint: "攀登（过去式）",
    answer: "climbed",
    options: ["climbed", "climb", "climbs", "climbing"],
    full: "I climbed Mount Huangshan."
  },
  {
    page: "P3", emoji: "🌅",
    sentence: "I ______ the sunrise.",
    hint: "观看（过去式）",
    answer: "watched",
    options: ["watched", "watch", "watches", "watching"],
    full: "I watched the sunrise."
  },
  {
    page: "P3", emoji: "💬",
    sentence: "Really? ______ me about it.",
    hint: "告诉（动词原形，祈使句）",
    answer: "Tell",
    options: ["Tell", "Tells", "Told", "Telling"],
    full: "Really? Tell me about it."
  },

  /* ============ P4 · B. Let's talk ============ */
  {
    page: "P4", emoji: "✈️",
    sentence: "Where ______ you go over the summer holidays, Binbin?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "Where did you go over the summer holidays, Binbin?"
  },
  {
    page: "P4", emoji: "🏛️",
    sentence: "I ______ to Xi'an with my family.",
    hint: "去（过去式）",
    answer: "went",
    options: ["went", "go", "goes", "going"],
    full: "I went to Xi'an with my family."
  },
  {
    page: "P4", emoji: "❤️",
    sentence: "I ______ Xi'an. What ______ you do there?",
    hint: "喜欢（一般现在时）+ 助动词",
    answer: "like did",
    options: ["like did", "liked did", "like do", "likes does"],
    full: "I like Xi'an. What did you do there?"
  },
  {
    page: "P4", emoji: "🍜",
    sentence: "We ______ some famous Xi'an noodles.",
    hint: "吃（过去式）",
    answer: "ate",
    options: ["ate", "eat", "eats", "eating"],
    full: "We ate some famous Xi'an noodles."
  },
  {
    page: "P4", emoji: "🐎",
    sentence: "Then we ______ to see the Terracotta Warriors.",
    hint: "去（过去式）",
    answer: "went",
    options: ["went", "go", "goes", "going"],
    full: "Then we went to see the Terracotta Warriors."
  },
  {
    page: "P4", emoji: "😮",
    sentence: "Wow! I really ______ to go there! How ______ it?",
    hint: "想要（一般现在时）+ be 动词过去式",
    answer: "want was",
    options: ["want was", "wanted was", "want were", "wants is"],
    full: "Wow! I really want to go there! How was it?"
  },
  {
    page: "P4", emoji: "🐎",
    sentence: "There ______ over seven thousand clay warriors and horses.",
    hint: "be 动词（复数，一般现在时）",
    answer: "are",
    options: ["are", "is", "was", "were"],
    full: "There are over seven thousand clay warriors and horses."
  },
  {
    page: "P4", emoji: "💻",
    sentence: "I ______ pictures on the internet. What else ______ you do?",
    hint: "看见（过去式）+ 助动词",
    answer: "saw did",
    options: ["saw did", "see did", "saw do", "sees does"],
    full: "I saw pictures on the internet. What else did you do?"
  },
  {
    page: "P4", emoji: "🚴",
    sentence: "We ______ around the old city and ______ bikes.",
    hint: "走 + 骑（过去式）",
    answer: "walked rode",
    options: ["walked rode", "walk ride", "walks rides", "walking riding"],
    full: "We walked around the old city and rode bikes."
  },
  {
    page: "P4", emoji: "😄",
    sentence: "That ______ great fun!",
    hint: "听起来（第三人称单数）",
    answer: "sounds",
    options: ["sounds", "sound", "sounded", "sounding"],
    full: "That sounds great fun!"
  },
  {
    page: "P4", emoji: "❓",
    sentence: "Where ______ Binbin go?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "Where did Binbin go?"
  },
  {
    page: "P4", emoji: "✨",
    sentence: "What ______ his trip special?",
    hint: "使……变得（过去式）",
    answer: "made",
    options: ["made", "make", "makes", "making"],
    full: "What made his trip special?"
  },

  /* ============ P5 · B. Let's learn ============ */
  {
    page: "P5", emoji: "🌸",
    sentence: "Binbin and Xinxin ______ to a nearby village.",
    hint: "去（过去式）",
    answer: "went",
    options: ["went", "go", "goes", "going"],
    full: "Binbin and Xinxin went to a nearby village."
  },
  {
    page: "P5", emoji: "🌸",
    sentence: "They ______ beautiful peach flowers.",
    hint: "看见（过去式）",
    answer: "saw",
    options: ["saw", "see", "sees", "seeing"],
    full: "They saw beautiful peach flowers."
  },
  {
    page: "P5", emoji: "🏙️",
    sentence: "Sarah ______ to Wuhan.",
    hint: "去（过去式）",
    answer: "went",
    options: ["went", "go", "goes", "going"],
    full: "Sarah went to Wuhan."
  },
  {
    page: "P5", emoji: "🍜",
    sentence: "She ______ hot dry noodles.",
    hint: "吃（过去式）",
    answer: "ate",
    options: ["ate", "eat", "eats", "eating"],
    full: "She ate hot dry noodles."
  },
  {
    page: "P5", emoji: "🗼",
    sentence: "Amy ______ a trip to Shanghai.",
    hint: "进行（take a trip 的过去式）",
    answer: "took",
    options: ["took", "take", "takes", "taking"],
    full: "Amy took a trip to Shanghai."
  },
  {
    page: "P5", emoji: "🗼",
    sentence: "The view from the tower ______ great.",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "The view from the tower was great."
  },
  {
    page: "P5", emoji: "🦁",
    sentence: "Chen Jie ______ a trip to Singapore.",
    hint: "进行（take a trip 的过去式）",
    answer: "took",
    options: ["took", "take", "takes", "taking"],
    full: "Chen Jie took a trip to Singapore."
  },
  {
    page: "P5", emoji: "📷",
    sentence: "She ______ nice photos there.",
    hint: "拍摄（过去式）",
    answer: "took",
    options: ["took", "take", "takes", "taking"],
    full: "She took nice photos there."
  },
  {
    page: "P5", emoji: "🏖️",
    sentence: "Where ______ you go over the holidays?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "Where did you go over the holidays?"
  },
  {
    page: "P5", emoji: "🍜",
    sentence: "I ______ to Wuhan. I ______ hot dry noodles.",
    hint: "去 + 吃（过去式）",
    answer: "went ate",
    options: ["went ate", "go eat", "goes eats", "going eating"],
    full: "I went to Wuhan. I ate hot dry noodles."
  },
  {
    page: "P5", emoji: "🌳",
    sentence: "Last week my family ______ a trip to a nearby village.",
    hint: "进行（take a trip 的过去式）",
    answer: "took",
    options: ["took", "take", "takes", "taking"],
    full: "Last week my family took a trip to a nearby village."
  },
  {
    page: "P5", emoji: "☀️",
    sentence: "It ______ warm and sunny.",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "It was warm and sunny."
  },
  {
    page: "P5", emoji: "🦆",
    sentence: "We ______ many ducks and ______ fresh fruit there.",
    hint: "看见 + 吃（过去式）",
    answer: "saw ate",
    options: ["saw ate", "see eat", "sees eats", "seeing eating"],
    full: "We saw many ducks and ate fresh fruit there."
  },

  /* ============ P6 · Read and write ============ */
  {
    page: "P6", emoji: "🏛️",
    sentence: "My trip to the Jinggangshan Revolution Museum ______ amazing!",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "My trip to the Jinggangshan Revolution Museum was amazing!"
  },
  {
    page: "P6", emoji: "📚",
    sentence: "I ______ around the museum for hours and ______ many old books and photos.",
    hint: "走 + 看见（过去式）",
    answer: "walked saw",
    options: ["walked saw", "walk see", "walks sees", "walking seeing"],
    full: "I walked around the museum for hours and saw many old books and photos."
  },
  {
    page: "P6", emoji: "🎖️",
    sentence: "The volunteers ______ great stories about the Red Army.",
    hint: "讲述（过去式）",
    answer: "told",
    options: ["told", "tell", "tells", "telling"],
    full: "The volunteers told great stories about the Red Army."
  },
  {
    page: "P6", emoji: "🌟",
    sentence: "The stories ______ really inspiring.",
    hint: "be 动词（复数，过去式）",
    answer: "were",
    options: ["were", "was", "are", "is"],
    full: "The stories were really inspiring."
  },
  {
    page: "P6", emoji: "📖",
    sentence: "I ______ a lot.",
    hint: "学习（learn 的过去式，英式）",
    answer: "learnt",
    options: ["learnt", "learn", "learns", "learning"],
    full: "I learnt a lot."
  },
  {
    page: "P6", emoji: "❓",
    sentence: "Do you ______ to learn more about the Red Army?",
    hint: "想要（动词原形）",
    answer: "want",
    options: ["want", "wants", "wanted", "wanting"],
    full: "Do you want to learn more about the Red Army?"
  },
  {
    page: "P6", emoji: "👉",
    sentence: "You ______ go there!",
    hint: "情态动词（应该）",
    answer: "should",
    options: ["should", "shall", "would", "could"],
    full: "You should go there!"
  },
  {
    page: "P6", emoji: "🏞️",
    sentence: "This ______ a great place for a summer trip!",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "This was a great place for a summer trip!"
  },
  {
    page: "P6", emoji: "⛰️",
    sentence: "We ______ the Jinggang Mountains and ______ many photos.",
    hint: "攀登 + 拍摄（过去式）",
    answer: "climbed took",
    options: ["climbed took", "climb take", "climbs takes", "climbing taking"],
    full: "We climbed the Jinggang Mountains and took many photos."
  },
  {
    page: "P6", emoji: "🎋",
    sentence: "We took many photos of the ______ forest.",
    hint: "竹子（bamboo + 森林）",
    answer: "bamboo",
    options: ["bamboo", "wood", "tree", "grass"],
    full: "We took many photos of the bamboo forest."
  },
  {
    page: "P6", emoji: "🍲",
    sentence: "We ______ delicious pumpkin soup and red rice too.",
    hint: "尝试（过去式）",
    answer: "tried",
    options: ["tried", "try", "tries", "trying"],
    full: "We tried delicious pumpkin soup and red rice too."
  },
  {
    page: "P6", emoji: "🚌",
    sentence: "The Jinggang Mountains ______ only about 1.5 hours from the airport by bus.",
    hint: "be 动词（复数，一般现在时）",
    answer: "are",
    options: ["are", "is", "was", "were"],
    full: "The Jinggang Mountains are only about 1.5 hours from the airport by bus."
  },
  {
    page: "P6", emoji: "🔁",
    sentence: "I ______ to go there again!",
    hint: "想要（一般现在时）",
    answer: "want",
    options: ["want", "wants", "wanted", "wanting"],
    full: "I want to go there again!"
  }
];

/* ============================================================
   时间分级阈值
   ============================================================ */
const TIME_GRADE = {
  S: { maxTime: 40, minCorrect: 8 },
  A: { maxTime: 55, minCorrect: 6 },
  C: { }  // 其余情况
};
