/* ============================================================
   Unit 1 题库 · 六年级英语
   按 P1~P6 分组，每页每句全部覆盖
   每题只挖 1 个空（避免多个空挤在一起）
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
    sentence: "It ______ great!",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "It was great!"
  },
  {
    page: "P2", emoji: "🧱",
    sentence: "I ______ the Great Wall.",
    hint: "攀登（过去式）",
    answer: "climbed",
    options: ["climbed", "climb", "climbs", "climbing"],
    full: "I climbed the Great Wall."
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
    sentence: "Liu Jia's family ______ to Paris.",
    hint: "旅行（过去式）",
    answer: "travelled",
    options: ["travelled", "travel", "travels", "travelling"],
    full: "Liu Jia's family travelled to Paris."
  },
  {
    page: "P3", emoji: "🗼",
    sentence: "Liu Jia's family visited ______ Eiffel Tower.",
    hint: "定冠词（特指埃菲尔铁塔）",
    answer: "the",
    options: ["the", "a", "an", "/"],
    full: "Liu Jia's family visited the Eiffel Tower."
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
    hint: "形容词（上一个）",
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
    sentence: "I ______ Xi'an.",
    hint: "喜欢（一般现在时）",
    answer: "like",
    options: ["like", "liked", "likes", "liking"],
    full: "I like Xi'an."
  },
  {
    page: "P4", emoji: "❓",
    sentence: "What ______ you do there?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "What did you do there?"
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
    sentence: "Wow! I really ______ to go there!",
    hint: "想要（一般现在时）",
    answer: "want",
    options: ["want", "wanted", "wants", "wanting"],
    full: "Wow! I really want to go there!"
  },
  {
    page: "P4", emoji: "😮",
    sentence: "How ______ it?",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "How was it?"
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
    sentence: "I ______ pictures on the internet.",
    hint: "看见（过去式）",
    answer: "saw",
    options: ["saw", "see", "sees", "seeing"],
    full: "I saw pictures on the internet."
  },
  {
    page: "P4", emoji: "❓",
    sentence: "What else ______ you do?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "What else did you do?"
  },
  {
    page: "P4", emoji: "🚴",
    sentence: "We ______ around the old city.",
    hint: "走（过去式）",
    answer: "walked",
    options: ["walked", "walk", "walks", "walking"],
    full: "We walked around the old city."
  },
  {
    page: "P4", emoji: "🚴",
    sentence: "We rode ______ on the old city wall.",
    hint: "自行车（复数）",
    answer: "bikes",
    options: ["bikes", "bike", "bicycle", "cars"],
    full: "We rode bikes on the old city wall."
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
    sentence: "I ______ to Wuhan.",
    hint: "去（过去式）",
    answer: "went",
    options: ["went", "go", "goes", "going"],
    full: "I went to Wuhan."
  },
  {
    page: "P5", emoji: "🍜",
    sentence: "I ______ hot dry noodles.",
    hint: "吃（过去式）",
    answer: "ate",
    options: ["ate", "eat", "eats", "eating"],
    full: "I ate hot dry noodles."
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
    sentence: "We ______ many ducks and fresh fruit there.",
    hint: "看见（过去式）",
    answer: "saw",
    options: ["saw", "see", "sees", "seeing"],
    full: "We saw many ducks and fresh fruit there."
  },
  {
    page: "P5", emoji: "🍎",
    sentence: "We ate fresh ______ there.",
    hint: "水果",
    answer: "fruit",
    options: ["fruit", "food", "rice", "noodles"],
    full: "We ate fresh fruit there."
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
    sentence: "I ______ around the museum for hours.",
    hint: "走（过去式）",
    answer: "walked",
    options: ["walked", "walk", "walks", "walking"],
    full: "I walked around the museum for hours."
  },
  {
    page: "P6", emoji: "📚",
    sentence: "I saw many old ______ and photos.",
    hint: "书（复数）",
    answer: "books",
    options: ["books", "book", "notebooks", "cards"],
    full: "I saw many old books and photos."
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
    sentence: "We ______ the Jinggang Mountains.",
    hint: "攀登（过去式）",
    answer: "climbed",
    options: ["climbed", "climb", "climbs", "climbing"],
    full: "We climbed the Jinggang Mountains."
  },
  {
    page: "P6", emoji: "📷",
    sentence: "We took many ______ there.",
    hint: "照片（复数）",
    answer: "photos",
    options: ["photos", "photo", "pictures", "books"],
    full: "We took many photos there."
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
/* ============================================================
   Unit 2 题库 · 六年级英语
   Getting together · Why do we get together?
   ============================================================ */

const UNIT2_QUESTIONS = [

  /* ============ P14 · Unit 2 封面 ============ */
  {
    page: "P14", emoji: "🎇",
    sentence: "Why ______ we get together?",
    hint: "助动词（一般现在时）",
    answer: "do",
    options: ["do", "does", "did", "doing"],
    full: "Why do we get together?"
  },

  /* ============ P16 · A. Let's talk（中秋） ============ */
  {
    page: "P16", emoji: "🎤",
    sentence: "Mike and Matt are having ______.",
    hint: "早餐",
    answer: "breakfast",
    options: ["breakfast", "lunch", "dinner", "a party"],
    full: "Mike and Matt are having breakfast."
  },
  {
    page: "P16", emoji: "🌕",
    sentence: "How ______ your Mid-Autumn Festival holiday, Binbin?",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "How was your Mid-Autumn Festival holiday, Binbin?"
  },
  {
    page: "P16", emoji: "😄",
    sentence: "It ______ great! My family and I had a really nice day.",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "It was great! My family and I had a really nice day."
  },
  {
    page: "P16", emoji: "❓",
    sentence: "What ______ you do? Did you take a trip?",
    hint: "助动词（过去时疑问句）",
    answer: "did",
    options: ["did", "do", "does", "doing"],
    full: "What did you do? Did you take a trip?"
  },
  {
    page: "P16", emoji: "🚫",
    sentence: "No, we ______.",
    hint: "否定助动词（过去时）",
    answer: "didn't",
    options: ["didn't", "don't", "doesn't", "wasn't"],
    full: "No, we didn't."
  },
  {
    page: "P16", emoji: "👨‍👩‍👧",
    sentence: "My aunt's family ______ us.",
    hint: "拜访（过去式）",
    answer: "visited",
    options: ["visited", "visit", "visits", "visiting"],
    full: "My aunt's family visited us."
  },
  {
    page: "P16", emoji: "🥮",
    sentence: "Did you ______ mooncakes?",
    hint: "吃（动词原形）",
    answer: "eat",
    options: ["eat", "ate", "eats", "eating"],
    full: "Did you eat mooncakes?"
  },
  {
    page: "P16", emoji: "😋",
    sentence: "Yes, we ______.",
    hint: "肯定助动词（过去时）",
    answer: "did",
    options: ["did", "do", "does", "was"],
    full: "Yes, we did."
  },
  {
    page: "P16", emoji: "🍽️",
    sentence: "We ______ some mooncakes and fruit.",
    hint: "享用（过去式）",
    answer: "enjoyed",
    options: ["enjoyed", "enjoy", "enjoys", "enjoying"],
    full: "We enjoyed some mooncakes and fruit."
  },
  {
    page: "P16", emoji: "📖",
    sentence: "Grandpa ______ us some stories about the festival.",
    hint: "讲述（过去式）",
    answer: "told",
    options: ["told", "tell", "tells", "telling"],
    full: "Grandpa told us some stories about the festival."
  },
  {
    page: "P16", emoji: "🎊",
    sentence: "Sure. You can also ______ us for the Spring Festival.",
    hint: "加入（动词原形）",
    answer: "join",
    options: ["join", "joined", "joins", "joining"],
    full: "Sure. You can also join us for the Spring Festival."
  },
  {
    page: "P16", emoji: "🥟",
    sentence: "We can paste fu and eat ______ together.",
    hint: "饺子",
    answer: "jiaozi",
    options: ["jiaozi", "mooncakes", "noodles", "zongzi"],
    full: "We can paste fu and eat jiaozi together."
  },

  /* ============ P16 · Ask and answer（教师节） ============ */
  {
    page: "P16", emoji: "🎨",
    sentence: "Did you ______ pictures for our teachers?",
    hint: "画（动词原形）",
    answer: "draw",
    options: ["draw", "drew", "draws", "drawing"],
    full: "Did you draw pictures for our teachers?"
  },
  {
    page: "P16", emoji: "📷",
    sentence: "No, I didn't. I ______ some photos.",
    hint: "拍摄（过去式）",
    answer: "took",
    options: ["took", "take", "takes", "taking"],
    full: "No, I didn't. I took some photos."
  },
  {
    page: "P16", emoji: "💌",
    sentence: "Did you ______ cards for our teachers?",
    hint: "制作（动词原形）",
    answer: "make",
    options: ["make", "made", "makes", "making"],
    full: "Did you make cards for our teachers?"
  },
  {
    page: "P16", emoji: "✅",
    sentence: "Yes, I ______.",
    hint: "肯定助动词（过去时）",
    answer: "did",
    options: ["did", "do", "does", "was"],
    full: "Yes, I did."
  },
  {
    page: "P16", emoji: "🎁",
    sentence: "Think of what you did last ______ Day.",
    hint: "教师节",
    answer: "Teachers'",
    options: ["Teachers'", "Children's", "Mother's", "Father's"],
    full: "Think of what you did last Teachers' Day."
  },

  /* ============ P17 · A. Let's learn（春节） ============ */
  {
    page: "P17", emoji: "🧹",
    sentence: "My dad and I ______ the house.",
    hint: "打扫（过去式）",
    answer: "cleaned",
    options: ["cleaned", "clean", "cleans", "cleaning"],
    full: "My dad and I cleaned the house."
  },
  {
    page: "P17", emoji: "🧧",
    sentence: "My sister and I ______ fu on the door.",
    hint: "张贴（过去式）",
    answer: "pasted",
    options: ["pasted", "paste", "pastes", "pasting"],
    full: "My sister and I pasted fu on the door."
  },
  {
    page: "P17", emoji: "👗",
    sentence: "We ______ in red.",
    hint: "穿衣服（过去式）",
    answer: "dressed",
    options: ["dressed", "dress", "dresses", "dressing"],
    full: "We dressed in red."
  },
  {
    page: "P17", emoji: "📺",
    sentence: "We ______ for the Spring Festival Gala.",
    hint: "等待（过去式）",
    answer: "waited",
    options: ["waited", "wait", "waits", "waiting"],
    full: "We waited for the Spring Festival Gala."
  },
  {
    page: "P17", emoji: "🕐",
    sentence: "We ______ down to the new year.",
    hint: "倒数（过去式，词组）",
    answer: "counted",
    options: ["counted", "count", "counts", "counting"],
    full: "We counted down to the new year."
  },
  {
    page: "P17", emoji: "❓",
    sentence: "What did you ______ for the Spring Festival?",
    hint: "做（动词原形）",
    answer: "do",
    options: ["do", "did", "does", "doing"],
    full: "What did you do for the Spring Festival?"
  },
  {
    page: "P17", emoji: "🧧",
    sentence: "Xinxin and I ______ fu on the door.",
    hint: "张贴（过去式）",
    answer: "pasted",
    options: ["pasted", "paste", "pastes", "pasting"],
    full: "Xinxin and I pasted fu on the door."
  },
  {
    page: "P17", emoji: "🌕",
    sentence: "Did you eat ______?",
    hint: "月饼",
    answer: "mooncakes",
    options: ["mooncakes", "jiaozi", "zongzi", "noodles"],
    full: "Did you eat mooncakes?"
  },
  {
    page: "P17", emoji: "🚫",
    sentence: "No, we ______.",
    hint: "否定助动词（过去时）",
    answer: "didn't",
    options: ["didn't", "don't", "doesn't", "wasn't"],
    full: "No, we didn't."
  },
  {
    page: "P17", emoji: "🎉",
    sentence: "Oh, it's the ______ Festival!",
    hint: "春节",
    answer: "Spring",
    options: ["Spring", "Mid-Autumn", "Dragon Boat", "Lantern"],
    full: "Oh, it's the Spring Festival!"
  },

  /* ============ P17 · Play a guessing game ============ */
  {
    page: "P17", emoji: "🎡",
    sentence: "Did you count down to 12 ______?",
    hint: "点钟",
    answer: "o'clock",
    options: ["o'clock", "hours", "minutes", "seconds"],
    full: "Did you count down to 12 o'clock?"
  },
  {
    page: "P17", emoji: "✅",
    sentence: "Yes, we ______.",
    hint: "肯定助动词（过去时）",
    answer: "did",
    options: ["did", "do", "does", "was"],
    full: "Yes, we did."
  },
  {
    page: "P17", emoji: "🐲",
    sentence: "This is the ______ Boat Festival.",
    hint: "龙舟节",
    answer: "Dragon",
    options: ["Dragon", "Spring", "Mid-Autumn", "Lantern"],
    full: "This is the Dragon Boat Festival."
  },
  {
    page: "P17", emoji: "🏮",
    sentence: "This is the ______ Festival.",
    hint: "元宵节",
    answer: "Lantern",
    options: ["Lantern", "Spring", "Dragon Boat", "Mid-Autumn"],
    full: "This is the Lantern Festival."
  },

  /* ============ P18 · B. Let's talk（马拉松/书市） ============ */
  {
    page: "P18", emoji: "🏃",
    sentence: "How ______ your weekend, Amy?",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "How was your weekend, Amy?"
  },
  {
    page: "P18", emoji: "🎽",
    sentence: "My mother and I ______ to a marathon on Sunday.",
    hint: "去（过去式）",
    answer: "went",
    options: ["went", "go", "goes", "going"],
    full: "My mother and I went to a marathon on Sunday."
  },
  {
    page: "P18", emoji: "🙋",
    sentence: "She ______ as a volunteer.",
    hint: "工作（过去式）",
    answer: "worked",
    options: ["worked", "work", "works", "working"],
    full: "She worked as a volunteer."
  },
  {
    page: "P18", emoji: "👀",
    sentence: "I ______ the race.",
    hint: "观看（过去式）",
    answer: "watched",
    options: ["watched", "watch", "watches", "watching"],
    full: "I watched the race."
  },
  {
    page: "P18", emoji: "❓",
    sentence: "What did you ______ about it?",
    hint: "喜欢（动词原形）",
    answer: "like",
    options: ["like", "liked", "likes", "liking"],
    full: "What did you like about it?"
  },
  {
    page: "P18", emoji: "🏃",
    sentence: "I liked ______ the runners.",
    hint: "观看（动名词）",
    answer: "watching",
    options: ["watching", "watch", "watched", "watches"],
    full: "I liked watching the runners."
  },
  {
    page: "P18", emoji: "💨",
    sentence: "They ______ very fast.",
    hint: "跑（过去式）",
    answer: "ran",
    options: ["ran", "run", "runs", "running"],
    full: "They ran very fast."
  },
  {
    page: "P18", emoji: "📣",
    sentence: "I ______ for them.",
    hint: "欢呼（过去式）",
    answer: "cheered",
    options: ["cheered", "cheer", "cheers", "cheering"],
    full: "I cheered for them."
  },
  {
    page: "P18", emoji: "📚",
    sentence: "I ______ an online book fair.",
    hint: "参加（过去式）",
    answer: "joined",
    options: ["joined", "join", "joins", "joining"],
    full: "I joined an online book fair."
  },
  {
    page: "P18", emoji: "❤️",
    sentence: "I liked it very ______.",
    hint: "非常（副词）",
    answer: "much",
    options: ["much", "many", "more", "most"],
    full: "I liked it very much."
  },
  {
    page: "P18", emoji: "💬",
    sentence: "We ______ ideas and talked about different books.",
    hint: "分享（过去式）",
    answer: "shared",
    options: ["shared", "share", "shares", "sharing"],
    full: "We shared ideas and talked about different books."
  },
  {
    page: "P18", emoji: "🎉",
    sentence: "That ______ fun!",
    hint: "听起来（第三人称单数）",
    answer: "sounds",
    options: ["sounds", "sound", "sounded", "sounding"],
    full: "That sounds fun!"
  },

  /* ============ P18 · Choose and discuss ============ */
  {
    page: "P18", emoji: "🎂",
    sentence: "How ______ your birthday?",
    hint: "be 动词（过去式）",
    answer: "was",
    options: ["was", "were", "is", "are"],
    full: "How was your birthday?"
  },
  {
    page: "P18", emoji: "🏅",
    sentence: "How was your ______ meet?",
    hint: "运动会",
    answer: "sports",
    options: ["sports", "school", "birthday", "class"],
    full: "How was your sports meet?"
  },
  {
    page: "P18", emoji: "🎒",
    sentence: "How was your school ______?",
    hint: "旅行",
    answer: "trip",
    options: ["trip", "fair", "meet", "day"],
    full: "How was your school trip?"
  },

  /* ============ P19 · B. Let's learn ============ */
  {
    page: "P19", emoji: "📖",
    sentence: "The writer ______ his book to the children.",
    hint: "朗读（过去式）",
    answer: "read",
    options: ["read", "reads", "reading", "red"],
    full: "The writer read his book to the children."
  },
  {
    page: "P19", emoji: "🏃",
    sentence: "People from different places ______ a marathon.",
    hint: "跑（过去式）",
    answer: "ran",
    options: ["ran", "run", "runs", "running"],
    full: "People from different places ran a marathon."
  },
  {
    page: "P19", emoji: "🤖",
    sentence: "Students ______ different robots.",
    hint: "制作（过去式）",
    answer: "made",
    options: ["made", "make", "makes", "making"],
    full: "Students made different robots."
  },
  {
    page: "P19", emoji: "🎤",
    sentence: "Children ______ and danced at an art festival.",
    hint: "唱歌（过去式）",
    answer: "sang",
    options: ["sang", "sing", "sings", "singing"],
    full: "Children sang and danced at an art festival."
  },
  {
    page: "P19", emoji: "👗",
    sentence: "Children ______ beautiful clothes on China's National Day.",
    hint: "穿（过去式）",
    answer: "wore",
    options: ["wore", "wear", "wears", "wearing"],
    full: "Children wore beautiful clothes on China's National Day."
  },
  {
    page: "P19", emoji: "📚",
    sentence: "Did you go to the book fair ______?",
    hint: "昨天",
    answer: "yesterday",
    options: ["yesterday", "today", "tomorrow", "now"],
    full: "Did you go to the book fair yesterday?"
  },
  {
    page: "P19", emoji: "✅",
    sentence: "Yes, I ______. I liked it.",
    hint: "肯定助动词（过去时）",
    answer: "did",
    options: ["did", "do", "does", "was"],
    full: "Yes, I did. I liked it."
  },
  {
    page: "P19", emoji: "✍️",
    sentence: "The writer ______ his book to us.",
    hint: "朗读（过去式）",
    answer: "read",
    options: ["read", "reads", "reading", "red"],
    full: "The writer read his book to us."
  },
  {
    page: "P19", emoji: "📖",
    sentence: "What did you ______ about it?",
    hint: "喜欢（动词原形）",
    answer: "like",
    options: ["like", "liked", "likes", "liking"],
    full: "What did you like about it?"
  },
  {
    page: "P19", emoji: "💬",
    sentence: "The writer read his ______ to us.",
    hint: "书",
    answer: "book",
    options: ["book", "story", "card", "photo"],
    full: "The writer read his book to us."
  },

  /* ============ P19 · Look and say ============ */
  {
    page: "P19", emoji: "🌍",
    sentence: "Students in Class One did fun ______ on Earth Day.",
    hint: "活动",
    answer: "activities",
    options: ["activities", "things", "games", "songs"],
    full: "Students in Class One did fun activities on Earth Day."
  },
  {
    page: "P19", emoji: "🏕️",
    sentence: "They went ______ together.",
    hint: "露营（动名词）",
    answer: "camping",
    options: ["camping", "camp", "camped", "camps"],
    full: "They went camping together."
  },
  {
    page: "P19", emoji: "⛺",
    sentence: "Some students put ______ a tent.",
    hint: "搭起（词组）",
    answer: "up",
    options: ["up", "on", "in", "out"],
    full: "Some students put up a tent."
  },
  {
    page: "P19", emoji: "💃",
    sentence: "They ______ and sang together.",
    hint: "跳舞（过去式）",
    answer: "danced",
    options: ["danced", "dance", "dances", "dancing"],
    full: "They danced and sang together."
  },

  /* ============ P20 · Read and write（端午节） ============ */
  {
    page: "P20", emoji: "📰",
    sentence: "The notice about the dragon boat race finally came ______ last Friday.",
    hint: "出来（词组，过去式）",
    answer: "out",
    options: ["out", "in", "on", "up"],
    full: "The notice about the dragon boat race finally came out last Friday."
  },
  {
    page: "P20", emoji: "😲",
    sentence: "I was ______ because my father was on a race team!",
    hint: "激动的（形容词）",
    answer: "excited",
    options: ["excited", "exciting", "excite", "excites"],
    full: "I was excited because my father was on a race team!"
  },
  {
    page: "P20", emoji: "🛏️",
    sentence: "In the morning, my dad ______ up early.",
    hint: "醒来（过去式）",
    answer: "woke",
    options: ["woke", "wake", "wakes", "waking"],
    full: "In the morning, my dad woke up early."
  },
  {
    page: "P20", emoji: "🏞️",
    sentence: "He went to the ______.",
    hint: "河边",
    answer: "river",
    options: ["river", "sea", "lake", "pool"],
    full: "He went to the river."
  },
  {
    page: "P20", emoji: "⏳",
    sentence: "My mum and I went later and ______ for the race.",
    hint: "等待（过去式）",
    answer: "waited",
    options: ["waited", "wait", "waits", "waiting"],
    full: "My mum and I went later and waited for the race."
  },
  {
    page: "P20", emoji: "👨‍⚖️",
    sentence: "Then the ______ counted down.",
    hint: "裁判",
    answer: "judge",
    options: ["judge", "coach", "player", "writer"],
    full: "Then the judge counted down."
  },
  {
    page: "P20", emoji: "🚩",
    sentence: "The race ______!",
    hint: "开始（过去式）",
    answer: "began",
    options: ["began", "begin", "begins", "beginning"],
    full: "The race began!"
  },
  {
    page: "P20", emoji: "📣",
    sentence: "I ran and ______ for my dad.",
    hint: "欢呼（过去式）",
    answer: "cheered",
    options: ["cheered", "cheer", "cheers", "cheering"],
    full: "I ran and cheered for my dad."
  },
  {
    page: "P20", emoji: "🚣",
    sentence: "His boat was very ______.",
    hint: "快的（形容词）",
    answer: "fast",
    options: ["fast", "slow", "long", "short"],
    full: "His boat was very fast."
  },
  {
    page: "P20", emoji: "🏆",
    sentence: "His team ______ the race!",
    hint: "获胜（过去式）",
    answer: "won",
    options: ["won", "win", "wins", "winning"],
    full: "His team won the race!"
  },
  {
    page: "P20", emoji: "🎵",
    sentence: "They all ______ their team song together.",
    hint: "唱歌（过去式）",
    answer: "sang",
    options: ["sang", "sing", "sings", "singing"],
    full: "They all sang their team song together."
  },
  {
    page: "P20", emoji: "😊",
    sentence: "They were so ______!",
    hint: "开心的（形容词）",
    answer: "happy",
    options: ["happy", "sad", "angry", "tired"],
    full: "They were so happy!"
  },
  {
    page: "P20", emoji: "🍙",
    sentence: "In the evening, our family ______ zongzi.",
    hint: "制作（过去式）",
    answer: "made",
    options: ["made", "make", "makes", "making"],
    full: "In the evening, our family made zongzi."
  },
  {
    page: "P20", emoji: "🌙",
    sentence: "It was the best Dragon Boat Festival ______!",
    hint: "曾经（副词）",
    answer: "ever",
    options: ["ever", "never", "always", "often"],
    full: "It was the best Dragon Boat Festival ever!"
  }
];
/* ============================================================
   Unit 3 题库 · 六年级英语
   Healthy life · What is a healthy lifestyle?
   ============================================================ */

const UNIT3_QUESTIONS = [

  /* ============ P26 · Unit 3 封面 ============ */
  {
    page: "P26", emoji: "🥗",
    sentence: "What is a healthy ______?",
    hint: "生活方式",
    answer: "lifestyle",
    options: ["lifestyle", "life", "style", "living"],
    full: "What is a healthy lifestyle?"
  },

  /* ============ P28 · A. Let's talk（生病打电话） ============ */
  {
    page: "P28", emoji: "🎮",
    sentence: "Mike and Chen Jie are in the ______.",
    hint: "操场",
    answer: "playground",
    options: ["playground", "classroom", "library", "hospital"],
    full: "Mike and Chen Jie are in the playground."
  },
  {
    page: "P28", emoji: "📞",
    sentence: "Hi, Mike. It's ______.",
    hint: "人名（打电话）",
    answer: "Binbin",
    options: ["Binbin", "Mike", "Amy", "Sarah"],
    full: "Hi, Mike. It's Binbin."
  },
  {
    page: "P28", emoji: "🏛️",
    sentence: "I'm going to the science ______ tomorrow.",
    hint: "博物馆",
    answer: "museum",
    options: ["museum", "library", "park", "school"],
    full: "I'm going to the science museum tomorrow."
  },
  {
    page: "P28", emoji: "❓",
    sentence: "Are you ______?",
    hint: "去（现在进行时）",
    answer: "going",
    options: ["going", "go", "goes", "went"],
    full: "Are you going?"
  },
  {
    page: "P28", emoji: "😷",
    sentence: "I'm afraid not, Binbin. I have a bad ______.",
    hint: "感冒（词组）",
    answer: "cold",
    options: ["cold", "fever", "cough", "headache"],
    full: "I'm afraid not, Binbin. I have a bad cold."
  },
  {
    page: "P28", emoji: "😔",
    sentence: "Oh dear! How do you ______?",
    hint: "感觉（动词原形）",
    answer: "feel",
    options: ["feel", "feels", "felt", "feeling"],
    full: "Oh dear! How do you feel?"
  },
  {
    page: "P28", emoji: "🤒",
    sentence: "I feel ______.",
    hint: "不舒服（形容词）",
    answer: "ill",
    options: ["ill", "good", "happy", "well"],
    full: "I feel ill."
  },
  {
    page: "P28", emoji: "🤕",
    sentence: "My head ______.",
    hint: "疼痛（第三人称单数）",
    answer: "hurts",
    options: ["hurts", "hurt", "hurting", "ached"],
    full: "My head hurts."
  },
  {
    page: "P28", emoji: "🤧",
    sentence: "I have a ______ nose.",
    hint: "流鼻涕（形容词）",
    answer: "runny",
    options: ["runny", "red", "big", "long"],
    full: "I have a runny nose."
  },
  {
    page: "P28", emoji: "😟",
    sentence: "I'm sorry to ______ that.",
    hint: "听到（动词原形）",
    answer: "hear",
    options: ["hear", "heard", "hears", "hearing"],
    full: "I'm sorry to hear that."
  },
  {
    page: "P28", emoji: "👨‍⚕️",
    sentence: "Maybe you should see a ______.",
    hint: "医生",
    answer: "doctor",
    options: ["doctor", "nurse", "teacher", "driver"],
    full: "Maybe you should see a doctor."
  },
  {
    page: "P28", emoji: "🏥",
    sentence: "My mum is going to take me to ______ this afternoon.",
    hint: "医院",
    answer: "hospital",
    options: ["hospital", "school", "park", "museum"],
    full: "My mum is going to take me to hospital this afternoon."
  },
  {
    page: "P28", emoji: "💊",
    sentence: "Take ______ and get well soon!",
    hint: "保重（词组）",
    answer: "care",
    options: ["care", "rest", "medicine", "water"],
    full: "Take care and get well soon!"
  },
  {
    page: "P28", emoji: "😊",
    sentence: "I'm not feeling well. I feel ______ and I have a runny nose.",
    hint: "冷（形容词）",
    answer: "cold",
    options: ["cold", "hot", "hungry", "thirsty"],
    full: "I'm not feeling well. I feel cold and I have a runny nose."
  },

  /* ============ P29 · A. Let's learn（看病） ============ */
  {
    page: "P29", emoji: "❓",
    sentence: "What's the ______?",
    hint: "怎么了（口语表达）",
    answer: "matter",
    options: ["matter", "wrong", "thing", "problem"],
    full: "What's the matter?"
  },
  {
    page: "P29", emoji: "😷",
    sentence: "I have a bad ______.",
    hint: "感冒",
    answer: "cold",
    options: ["cold", "fever", "cough", "headache"],
    full: "I have a bad cold."
  },
  {
    page: "P29", emoji: "🤕",
    sentence: "My ______ hurts and I have a runny nose.",
    hint: "头",
    answer: "head",
    options: ["head", "hand", "leg", "eye"],
    full: "My head hurts and I have a runny nose."
  },
  {
    page: "P29", emoji: "🤒",
    sentence: "He has a ______.",
    hint: "发烧",
    answer: "fever",
    options: ["fever", "cold", "cough", "headache"],
    full: "He has a fever."
  },
  {
    page: "P29", emoji: "😮‍💨",
    sentence: "She has a ______.",
    hint: "咳嗽",
    answer: "cough",
    options: ["cough", "cold", "fever", "headache"],
    full: "She has a cough."
  },
  {
    page: "P29", emoji: "🤧",
    sentence: "He has a fever. His head hurts and he has a ______ nose.",
    hint: "流鼻涕（形容词）",
    answer: "runny",
    options: ["runny", "red", "big", "long"],
    full: "He has a fever. His head hurts and he has a runny nose."
  },
  {
    page: "P29", emoji: "🏠",
    sentence: "What's the matter? I have a bad cold. And I have a runny nose. You ______ ...",
    hint: "应该（情态动词）",
    answer: "should",
    options: ["should", "shall", "would", "could"],
    full: "What's the matter? I have a bad cold. And I have a runny nose. You should ..."
  },
  {
    page: "P29", emoji: "👩‍🏫",
    sentence: "The teacher asked, \"What's the ______?\"",
    hint: "怎么了",
    answer: "matter",
    options: ["matter", "wrong", "thing", "problem"],
    full: "The teacher asked, \"What's the matter?\""
  },
  {
    page: "P29", emoji: "👨‍👩‍👦",
    sentence: "His ______ took him to see a doctor.",
    hint: "父母",
    answer: "parents",
    options: ["parents", "teachers", "friends", "doctors"],
    full: "His parents took him to see a doctor."
  },
  {
    page: "P29", emoji: "🏥",
    sentence: "She is in ______.",
    hint: "医院",
    answer: "hospital",
    options: ["hospital", "school", "park", "home"],
    full: "She is in hospital."
  },
  {
    page: "P29", emoji: "🏫",
    sentence: "He is at ______.",
    hint: "学校",
    answer: "school",
    options: ["school", "home", "hospital", "park"],
    full: "He is at school."
  },

  /* ============ P30 · B. Let's talk（健康讨论） ============ */
  {
    page: "P30", emoji: "📚",
    sentence: "Binbin and Sarah meet in the ______.",
    hint: "图书馆",
    answer: "library",
    options: ["library", "classroom", "playground", "museum"],
    full: "Binbin and Sarah meet in the library."
  },
  {
    page: "P30", emoji: "🗣️",
    sentence: "Class, now we're going to ______ health.",
    hint: "讨论（动词原形）",
    answer: "discuss",
    options: ["discuss", "discussed", "discusses", "discussing"],
    full: "Class, now we're going to discuss health."
  },
  {
    page: "P30", emoji: "❓",
    sentence: "First, what is ______?",
    hint: "健康",
    answer: "health",
    options: ["health", "healthy", "wealth", "life"],
    full: "First, what is health?"
  },
  {
    page: "P30", emoji: "💪",
    sentence: "Health is having a good body and feeling ______.",
    hint: "开心的（形容词）",
    answer: "happy",
    options: ["happy", "sad", "tired", "ill"],
    full: "Health is having a good body and feeling happy."
  },
  {
    page: "P30", emoji: "🤔",
    sentence: "So, how can we live a ______ life?",
    hint: "健康的（形容词）",
    answer: "healthy",
    options: ["healthy", "health", "unhealthy", "happy"],
    full: "So, how can we live a healthy life?"
  },
  {
    page: "P30", emoji: "🥦",
    sentence: "We need to eat ______ food.",
    hint: "健康的（形容词）",
    answer: "healthy",
    options: ["healthy", "health", "delicious", "fast"],
    full: "We need to eat healthy food."
  },
  {
    page: "P30", emoji: "🏃",
    sentence: "We should ______ too.",
    hint: "锻炼（动词原形）",
    answer: "exercise",
    options: ["exercise", "exercised", "exercises", "exercising"],
    full: "We should exercise too."
  },
  {
    page: "P30", emoji: "👨‍👩‍👧",
    sentence: "I think our family and friends are also very ______.",
    hint: "重要的（形容词）",
    answer: "important",
    options: ["important", "interesting", "different", "beautiful"],
    full: "I think our family and friends are also very important."
  },
  {
    page: "P30", emoji: "💬",
    sentence: "It's always good to ______ to our family and friends.",
    hint: "交谈（动词原形）",
    answer: "talk",
    options: ["talk", "talked", "talks", "talking"],
    full: "It's always good to talk to our family and friends."
  },
  {
    page: "P30", emoji: "👍",
    sentence: "Good ______, everyone!",
    hint: "工作（名词）",
    answer: "job",
    options: ["job", "work", "day", "luck"],
    full: "Good job, everyone!"
  },
  {
    page: "P30", emoji: "😴",
    sentence: "How can we live a healthy life? We need to ______ well.",
    hint: "睡觉（动词原形）",
    answer: "sleep",
    options: ["sleep", "slept", "sleeps", "sleeping"],
    full: "How can we live a healthy life? We need to sleep well."
  },
  {
    page: "P30", emoji: "💧",
    sentence: "We should drink ______ water.",
    hint: "足够的（形容词）",
    answer: "enough",
    options: ["enough", "many", "much", "some"],
    full: "We should drink enough water."
  },
  {
    page: "P30", emoji: "👀",
    sentence: "We should take care of your eyes and ______.",
    hint: "牙齿（复数）",
    answer: "teeth",
    options: ["teeth", "tooth", "eyes", "ears"],
    full: "We should take care of your eyes and teeth."
  },

  /* ============ P31 · B. Let's learn（健康生活） ============ */
  {
    page: "P31", emoji: "🥗",
    sentence: "Have a healthy ______.",
    hint: "饮食",
    answer: "diet",
    options: ["diet", "food", "meal", "drink"],
    full: "Have a healthy diet."
  },
  {
    page: "P31", emoji: "🌙",
    sentence: "Don't ______ up late.",
    hint: "熬夜（词组）",
    answer: "stay",
    options: ["stay", "stayed", "stays", "staying"],
    full: "Don't stay up late."
  },
  {
    page: "P31", emoji: "🏃",
    sentence: "______ often.",
    hint: "锻炼（动词原形）",
    answer: "Exercise",
    options: ["Exercise", "Exercised", "Exercises", "Exercising"],
    full: "Exercise often."
  },
  {
    page: "P31", emoji: "😊",
    sentence: "Think about ______ things.",
    hint: "开心的（形容词）",
    answer: "happy",
    options: ["happy", "sad", "tired", "angry"],
    full: "Think about happy things."
  },
  {
    page: "P31", emoji: "⚽",
    sentence: "Join clubs and ______.",
    hint: "团队（复数）",
    answer: "teams",
    options: ["teams", "team", "groups", "class"],
    full: "Join clubs and teams."
  },
  {
    page: "P31", emoji: "🎉",
    sentence: "Have ______ with your friends and family.",
    hint: "乐趣",
    answer: "fun",
    options: ["fun", "time", "food", "game"],
    full: "Have fun with your friends and family."
  },
  {
    page: "P31", emoji: "🤸",
    sentence: "I can exercise often. I can jump ______ or play ball games every day.",
    hint: "跳绳（词组）",
    answer: "rope",
    options: ["rope", "run", "walk", "jump"],
    full: "I can exercise often. I can jump rope or play ball games every day."
  },
  {
    page: "P31", emoji: "🎾",
    sentence: "I can jump rope or play ball ______ every day.",
    hint: "游戏（复数）",
    answer: "games",
    options: ["games", "game", "sports", "things"],
    full: "I can jump rope or play ball games every day."
  },
  {
    page: "P31", emoji: "🤔",
    sentence: "How can you live a ______ life?",
    hint: "健康的（形容词）",
    answer: "healthy",
    options: ["healthy", "health", "unhealthy", "happy"],
    full: "How can you live a healthy life?"
  },

  /* ============ P32 · Read and write（Liu Jia 的故事） ============ */
  {
    page: "P32", emoji: "😢",
    sentence: "Liu Jia was ______.",
    hint: "哭（过去进行时）",
    answer: "crying",
    options: ["crying", "cry", "cried", "cries"],
    full: "Liu Jia was crying."
  },
  {
    page: "P32", emoji: "❓",
    sentence: "So Miss White asked her, \"What's the ______, Liu Jia?\"",
    hint: "怎么了",
    answer: "matter",
    options: ["matter", "wrong", "thing", "problem"],
    full: "So Miss White asked her, \"What's the matter, Liu Jia?\""
  },
  {
    page: "P32", emoji: "😔",
    sentence: "You look ______.",
    hint: "难过的（形容词）",
    answer: "sad",
    options: ["sad", "happy", "tired", "ill"],
    full: "You look sad."
  },
  {
    page: "P32", emoji: "💬",
    sentence: "Liu Jia ______, \"I'm feeling down.\"",
    hint: "回答（过去式）",
    answer: "answered",
    options: ["answered", "answer", "answers", "answering"],
    full: "Liu Jia answered, \"I'm feeling down.\""
  },
  {
    page: "P32", emoji: "👋",
    sentence: "My good friend Lucy ______ to another city.",
    hint: "搬家（过去式）",
    answer: "moved",
    options: ["moved", "move", "moves", "moving"],
    full: "My good friend Lucy moved to another city."
  },
  {
    page: "P32", emoji: "👂",
    sentence: "Miss White listened ______ and told Liu Jia, \"Think about happy things.\"",
    hint: "仔细地（副词）",
    answer: "carefully",
    options: ["carefully", "careful", "quickly", "slowly"],
    full: "Miss White listened carefully and told Liu Jia, \"Think about happy things.\""
  },
  {
    page: "P32", emoji: "📧",
    sentence: "Call your friend or ______ her some emails.",
    hint: "发送（动词原形）",
    answer: "send",
    options: ["send", "sends", "sent", "sending"],
    full: "Call your friend or send her some emails."
  },
  {
    page: "P32", emoji: "😞",
    sentence: "I tried that, but I still feel ______.",
    hint: "不快乐（形容词）",
    answer: "unhappy",
    options: ["unhappy", "happy", "tired", "ill"],
    full: "I tried that, but I still feel unhappy."
  },
  {
    page: "P32", emoji: "💧",
    sentence: "Miss White gave her a ______ of water.",
    hint: "一杯",
    answer: "glass",
    options: ["glass", "cup", "bowl", "bottle"],
    full: "Miss White gave her a glass of water."
  },
  {
    page: "P32", emoji: "🏃",
    sentence: "Maybe you can do some ______.",
    hint: "锻炼（名词）",
    answer: "exercise",
    options: ["exercise", "exercises", "exercising", "exercised"],
    full: "Maybe you can do some exercise."
  },
  {
    page: "P32", emoji: "😊",
    sentence: "Exercise may ______ you up!",
    hint: "让……高兴（词组）",
    answer: "cheer",
    options: ["cheer", "cheers", "cheered", "cheering"],
    full: "Exercise may cheer you up!"
  },
  {
    page: "P32", emoji: "🏫",
    sentence: "Join some after-school ______ and make new friends!",
    hint: "俱乐部（复数）",
    answer: "clubs",
    options: ["clubs", "club", "classes", "teams"],
    full: "Join some after-school clubs and make new friends!"
  },
  {
    page: "P32", emoji: "💌",
    sentence: "I often make video ______ with my friend now.",
    hint: "通话（复数）",
    answer: "calls",
    options: ["calls", "call", "phones", "chats"],
    full: "I often make video calls with my friend now."
  },
  {
    page: "P32", emoji: "🏓",
    sentence: "I also ______ a ping-pong club and made some new friends.",
    hint: "加入（过去式）",
    answer: "joined",
    options: ["joined", "join", "joins", "joining"],
    full: "I also joined a ping-pong club and made some new friends."
  }
];
const TIME_GRADE = {
  S: { maxTime: 40, minCorrect: 8 },
  A: { maxTime: 55, minCorrect: 6 },
  C: { }
};
