/* database.js - The Master Database for Part A (Seen Texts) */

const unitData = {
    // ==========================================
    // UNIT 1: People or Institutions Making History
    // ==========================================
    "u1_l1": {
        title: "Unit 1, Lesson 1: Nelson Mandela",
        vocab: [
            { w: "Shackle", m: "শৃঙ্খল / বাধা", s: "Restriction / Chain" },
            { w: "Apartheid", m: "বর্ণবাদ", s: "Racial segregation / Discrimination" },
            { w: "Emancipation", m: "মুক্তি", s: "Liberation / Freedom" },
            { w: "Manifestation", m: "প্রকাশ / লক্ষণ", s: "Expression / Sign" },
            { w: "Chasm", m: "ফাটল / গভীর ব্যবধান", s: "Gap / Cleft" },
            { w: "Revered", m: "শ্রদ্ধেয়", s: "Respected / Honored" },
            { w: "Testimony", m: "সাক্ষ্য / প্রমাণ", s: "Evidence / Proof" },
            { w: "Laud", m: "প্রশংসা করা", s: "Praise / Applaud" }
        ],
        chunks: [
            {
                en: "Johannesburg (Reuters)-Nelson Mandela guided South Africa from the shackles of apartheid to a multi-racial democracy, as an icon of peace and reconciliation who came to embody the struggle for justice around the world.",
                bn: "জোহানেসবার্গ (রয়টার্স)- নেলসন ম্যান্ডেলা দক্ষিণ আফ্রিকাকে বর্ণবাদের শৃঙ্খল থেকে মুক্ত করে একটি বহুজাতিক গণতন্ত্রের দিকে পরিচালিত করেছিলেন। তিনি ছিলেন শান্তি ও সম্প্রীতির এমন এক প্রতীক, যিনি বিশ্বব্যাপী ন্যায়বিচারের সংগ্রামের মূর্ত প্রতীক হয়ে উঠেছিলেন।"
            },
            {
                en: "Imprisoned for nearly three decades for his fight against white minority rule, Mandela never lost his resolve to fight for his people's emancipation. He was determined to bring down apartheid while avoiding a civil war.",
                bn: "শ্বেতাঙ্গ সংখ্যালঘু শাসনের বিরুদ্ধে লড়াইয়ের কারণে প্রায় তিন দশক কারারুদ্ধ থাকলেও, ম্যান্ডেলা তার জনগণের মুক্তির জন্য লড়াই করার সংকল্প কখনো হারাননি। তিনি গৃহযুদ্ধ এড়িয়ে বর্ণবাদের পতন ঘটাতে দৃঢ়প্রতিজ্ঞ ছিলেন।"
            },
            {
                en: "In 1993, Mandela was awarded the Nobel Peace Prize, an honor he shared with F.W. de Klerk, the white African leader who had freed him from prison three years earlier and negotiated the end of apartheid.",
                bn: "১৯৯৩ সালে ম্যান্ডেলাকে নোবেল শান্তি পুরস্কারে ভূষিত করা হয়। তিনি এই সম্মান ভাগ করে নেন শ্বেতাঙ্গ আফ্রিকান নেতা এফ. ডব্লিউ. ডি ক্লার্কের সাথে, যিনি তিন বছর আগে তাকে কারাগার থেকে মুক্ত করেছিলেন এবং বর্ণবাদের অবসান নিয়ে আলোচনা করেছিলেন।"
            },
            {
                en: "He formally left public life in June 2004 before his 86th birthday, telling his adoring countrymen: 'Don't call me. I'll call you.' But he remained one of the world's most revered public figures.",
                bn: "তিনি ২০০৪ সালের জুনে, তার ৮৬তম জন্মদিনের আগে, আনুষ্ঠানিকভাবে জনজীবন থেকে অবসর নেন। তিনি তার স্নেহশীল দেশবাসীকে বলেছিলেন: 'আমাকে ডাকবেন না। আমিই আপনাদের ডাকব।' কিন্তু তারপরও তিনি বিশ্বের অন্যতম শ্রদ্ধেয় ব্যক্তিত্ব হিসেবেই রয়ে যান।"
            },
            {
                en: "During my lifetime I have dedicated myself to this struggle of the African people. I have fought against white domination, and I have fought against black domination.",
                bn: "আমার জীবদ্দশায় আমি নিজেকে আফ্রিকান জনগণের এই সংগ্রামের জন্য উৎসর্গ করেছি। আমি শ্বেতাঙ্গ আধিপত্যের বিরুদ্ধে লড়াই করেছি, এবং কৃষ্ণাঙ্গ আধিপত্যের বিরুদ্ধেও লড়াই করেছি।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does 'apartheid' in the title refer to?", options: ["Apart", "Distance", "Discrimination", "Dialogue"], ans: 2 },
                { q: "The word 'icon' in the text means-", options: ["Portrait", "Image", "Symbol", "Idol"], ans: 2 },
                { q: "What do 'shackles' refer to?", options: ["Restraints", "Sick", "Stigma", "Spur"], ans: 0 },
                { q: "Race discrimination refers to-", options: ["Differences on the basis of caste, creed and colour", "Competition among the members of a race", "Demoralization of people", "Domination of others"], ans: 0 },
                { q: "The word 'emancipation' means-", options: ["Participation", "Encouragement", "Expectation", "Liberation"], ans: 3 }
            ],
            openEnded: [
                "a. What emancipation did Mandela hint at by saying 'We have, at last, achieved our political emancipation'?",
                "b. Why can Nelson Mandela be called 'an icon of peace and reconciliation'?",
                "c. Who was F.W. de Klerk? What do you know about him from the passage?"
            ],
            flowChartTopic: "the incidents of Nelson Mandela's life",
            flowChartBox1: "Fought against white minority",
            summaryPrompt: "Write a summary of the passage highlighting Mandela's struggle and achievements."
        }
    },
    "u1_l2": {
        title: "Unit 1, Lesson 2: Two Women",
        vocab: [
            { w: "Cosmonaut", m: "নভোচারী (রুশ)", s: "Astronaut / Spaceman" },
            { w: "Discomfort", m: "অস্বস্তি", s: "Uneasiness / Pain" },
            { w: "Legislature", m: "আইনসভা", s: "Parliament / Assembly" },
            { w: "Disintegrate", m: "টুকরো টুকরো হওয়া", s: "Break apart / Shatter" },
            { w: "Malfunction", m: "ত্রুটিযুক্ত হওয়া", s: "Break down / Fail" },
            { w: "Isolation", m: "বিচ্ছিন্নতা", s: "Separation / Segregation" }
        ],
        chunks: [
            {
                en: "Valentina Tereshkova was born in the village Maslennikovo, Tutayevsky District, in Central Russia. Tereshkova's father was a tractor driver and her mother worked in a textile plant.",
                bn: "ভ্যালেন্টিনা তেরেসকোভা মধ্য রাশিয়ার তুতায়েভস্কি জেলার মাসলেনিকোভো গ্রামে জন্মগ্রহণ করেন। তেরেসকোভার বাবা ছিলেন একজন ট্রাক্টর চালক এবং মা একটি টেক্সটাইল কারখানায় কাজ করতেন।"
            },
            {
                en: "On 16 February 1962, 'proletaria' Valentina Tereshkova was selected for this project from among more than four hundred applicants.",
                bn: "১৯৬২ সালের ১৬ ফেব্রুয়ারি, 'সর্বহারা' ভ্যালেন্টিনা তেরেসকোভাকে চার শতাধিক আবেদনকারীর মধ্য থেকে এই মহাকাশ প্রকল্পের জন্য নির্বাচিত করা হয়।"
            },
            {
                en: "Although Tereshkova experienced nausea and physical discomfort for much of the flight, she orbited the earth 48 times and spent almost three days in space.",
                bn: "যদিও তেরেসকোভা ফ্লাইটের বেশিরভাগ সময় বমি বমি ভাব এবং শারীরিক অস্বস্তি অনুভব করেছিলেন, তবু তিনি পৃথিবীকে ৪৮ বার প্রদক্ষিণ করেন এবং মহাকাশে প্রায় তিন দিন কাটান।"
            },
            {
                en: "Kalpana Chawla was born in Karnal, India. She is the first Indian-born woman and the second person in space from this sub-continent. She joined NASA in 1988.",
                bn: "কল্পনা চাওলা ভারতের কর্নালে জন্মগ্রহণ করেন। তিনি ভারত উপমহাদেশ থেকে মহাকাশে গমনকারী প্রথম ভারতীয় বংশোদ্ভূত নারী এবং দ্বিতীয় ব্যক্তি। তিনি ১৯৮৮ সালে নাসায় যোগ দেন।"
            },
            {
                en: "After a 16 day scientific mission in space, on 1 February 2003, Columbia disintegrated over Texas during its re-entry into the Earth's atmosphere. All the crew in Columbia including Chawla died.",
                bn: "মহাকাশে ১৬ দিনের বৈজ্ঞানিক মিশন শেষে, ২০০৩ সালের ১ ফেব্রুয়ারি, পৃথিবীর বায়ুমণ্ডলে পুনরায় প্রবেশের সময় কলাম্বিয়া স্পেস শাটলটি টেক্সাসের আকাশে টুকরো টুকরো হয়ে যায়। চাওলাসহ কলাম্বিয়ার সব ক্রু মারা যান।"
            }
        ],
        exam: {
            mcqs: [
                { q: "Where was Valentina Tereshkova employed before becoming a cosmonaut?", options: ["In a school", "In a textile factory", "In a hospital", "In an aeroclub"], ans: 1 },
                { q: "How many times did Tereshkova orbit the earth?", options: ["40 times", "45 times", "48 times", "50 times"], ans: 2 },
                { q: "Where did Kalpana Chawla obtain her Ph.D. in Aerospace Engineering from?", options: ["Punjab Engineering College", "University of Texas", "University of Colorado", "NASA Academy"], ans: 2 },
                { q: "What does the word 'disintegrate' mean?", options: ["To become much worse", "To combine together", "To break into small parts", "To fly high"], ans: 2 },
                { q: "What was the name of the space shuttle that carried Kalpana Chawla on her fatal mission?", options: ["Vostok-6", "Apollo 11", "Challenger", "Columbia"], ans: 3 }
            ],
            openEnded: [
                "a. What led to Valentina Tereshkova's selection as a cosmonaut?",
                "b. Why did Kalpana Chawla go to the USA?",
                "c. What caused the fatal accident of the space shuttle Columbia?"
            ],
            flowChartTopic: "Kalpana Chawla's road to NASA",
            flowChartBox1: "Graduated in Aeronautical Engineering",
            summaryPrompt: "Write a brief summary of the achievements and tragedies of the two women astronauts."
        }
    },

    // ==========================================
    // UNIT 2: Traffic Education
    // ==========================================
    "u2_l1": {
        title: "Unit 2, Lesson 1: How Your Brain Negotiates Traffic",
        vocab: [
            { w: "Visible", m: "দৃশ্যমান", s: "Clear / Observable" },
            { w: "Unseen", m: "অদৃশ্য", s: "Invisible / Hidden" },
            { w: "Sophisticated", m: "অত্যাধুনিক / জটিল", s: "Advanced / Complex" },
            { w: "Invariably", m: "সর্বদা / অপরিবর্তনীয়ভাবে", s: "Always / Constantly" },
            { w: "Encounter", m: "সম্মুখীন হওয়া", s: "Face / Meet" },
            { w: "Pedestrian", m: "পথচারী", s: "Walker / Commuter" },
            { w: "Conscience", m: "বিবেক", s: "Moral sense / Principles" }
        ],
        chunks: [
            {
                en: "When you are in the driving seat of a car, you have the steering and the horn in your hands, the brake and accelerator under your feet, eyes open looking ahead, left and right. The same can be said about a motorcycle rider, with some modifications.",
                bn: "যখন আপনি একটি গাড়ির ড্রাইভিং সিটে থাকেন, তখন আপনার হাতে স্টিয়ারিং এবং হর্ন থাকে, পায়ের নিচে ব্রেক এবং অ্যাক্সিলারেটর থাকে, আর চোখ খোলা রেখে সামনে, ডানে ও বামে তাকাতে হয়। কিছু পরিবর্তন সাপেক্ষে একজন মোটরসাইকেল চালকের ক্ষেত্রেও একই কথা বলা যেতে পারে।"
            },
            {
                en: "These are all very visible. But, behind all, there is something that keeps working unseen. And that is the Central Processing Unit (CPU), your brain.",
                bn: "এগুলো সবই খুব দৃশ্যমান। কিন্তু সবকিছুর আড়ালে এমন একটি জিনিস আছে যা অদৃশ্যভাবে কাজ করতে থাকে। আর সেটি হলো সেন্ট্রাল প্রসেসিং ইউনিট (CPU), অর্থাৎ আপনার মস্তিষ্ক।"
            },
            {
                en: "CPUs are artificially intelligent machines that are programmed to do specific jobs under fixed conditions and judgements. But the human brain is intelligent by nature. It is the most sophisticated machine that is able to operate on ever-changing conditions and standards of judgment.",
                bn: "সিপিইউ হলো কৃত্রিমভাবে বুদ্ধিমত্তাসম্পন্ন মেশিন, যা নির্দিষ্ট শর্ত ও বিচারে সুনির্দিষ্ট কাজ করার জন্য প্রোগ্রাম করা থাকে। কিন্তু মানুষের মস্তিষ্ক স্বভাবগতভাবেই বুদ্ধিমান। এটি সবচেয়ে অত্যাধুনিক একটি যন্ত্র যা প্রতিনিয়ত পরিবর্তনশীল শর্ত এবং বিচারের মানদণ্ডে কাজ করতে সক্ষম।"
            },
            {
                en: "As conditions in the traffic keep invariably changing, this virtue of sophistication of your brain must be at work when you are driving. The difference between traffic in the roads and highways and racing circuit must not be blurring inside you. Never imagine yourself to be a Michael Schumacher driving an F-1 at 300 mph. Leave no room for fantasy.",
                bn: "যেহেতু ট্রাফিক পরিস্থিতি সবসময় পরিবর্তিত হতে থাকে, তাই গাড়ি চালানোর সময় আপনার মস্তিষ্কের এই অত্যাধুনিক গুণটি অবশ্যই কাজে লাগাতে হবে। রাস্তা ও হাইওয়ের ট্রাফিক এবং রেসিং সার্কিটের মধ্যে পার্থক্য আপনার ভেতরে যেন অস্পষ্ট না হয়ে যায়। নিজেকে কখনো মাইকেল শুমাখার ভাববেন না, যিনি ঘণ্টায় ৩০০ মাইল বেগে এফ-১ রেসিং কার চালাচ্ছেন। কল্পনার কোনো সুযোগ রাখবেন না।"
            },
            {
                en: "You must always be ready to encounter unexpected behavior from any vehicle or pedestrian. 'Keep your cool' is easy to advice but difficult to maintain. Still you must always restrain yourself because, at the end of the day, you don't want to be regarded as killer. Now you see, the last thing that differentiates you from a computer is your conscience.",
                bn: "যেকোনো যানবাহন বা পথচারীর কাছ থেকে অপ্রত্যাশিত আচরণের সম্মুখীন হওয়ার জন্য আপনাকে সবসময় প্রস্তুত থাকতে হবে। 'মাথা ঠান্ডা রাখুন'- এ উপদেশ দেওয়া সহজ কিন্তু মেনে চলা কঠিন। তবুও আপনাকে সবসময় নিজেকে সংযত রাখতে হবে, কারণ দিন শেষে আপনি নিশ্চয়ই একজন খুনি হিসেবে পরিচিত হতে চাইবেন না। এখন আপনি বুঝতে পারছেন, শেষ যে জিনিসটি আপনাকে একটি কম্পিউটার থেকে আলাদা করে, তা হলো আপনার বিবেক।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is the closest meaning of the word 'sophisticated'?", options: ["Complex and advanced", "Primitive", "Simple", "Artificial"], ans: 0 },
                { q: "According to the passage, what is the Central Processing Unit (CPU) compared to?", options: ["A car's engine", "The human brain", "A racing circuit", "A computer monitor"], ans: 1 },
                { q: "Which organ is the word 'visible' associated with?", options: ["Ear", "Nose", "Eyes", "Skin"], ans: 2 },
                { q: "Michael Schumacher is mentioned as a symbol of-", options: ["A reckless pedestrian", "An artificial machine", "A high-speed racing driver", "A traffic policeman"], ans: 2 },
                { q: "What finally differentiates a human being from a computer?", options: ["Physical strength", "Speed", "Conscience", "Artificial Intelligence"], ans: 2 }
            ],
            openEnded: [
                "a. What is the difference between a CPU and the human brain?",
                "b. Why is fantasy discouraged while driving?",
                "c. Why is it easy to say 'keep your cool' but difficult to maintain practically?"
            ],
            flowChartTopic: "the function and characteristics of the human brain",
            flowChartBox1: "Working invisibly",
            summaryPrompt: "Write a summary of the passage in your own words."
        }
    },
    "u2_l2": {
        title: "Unit 2, Lesson 2: Traffic Capital of the World",
        vocab: [
            { w: "Commute", m: "যাতায়াত করা", s: "Travel / Journey" },
            { w: "Infrastructure", m: "অবকাঠামো", s: "Framework / Base" },
            { w: "Congestion", m: "যানজট", s: "Jam / Overcrowding" },
            { w: "Unpredictable", m: "অপ্রত্যাশিত", s: "Uncertain / Unforeseen" },
            { w: "Stuttering", m: "থেমে থেমে চলা", s: "Stammering / Halting" }
        ],
        chunks: [
            {
                en: "I am in a tiny steel cage attached to a motorcycle, stuttering through traffic in Dhaka, Bangladesh. In the last ten years, Dhaka's population has doubled to 15 million.",
                bn: "আমি বাংলাদেশের ঢাকায় একটি মোটরসাইকেলের সাথে যুক্ত ছোট একটি স্টিলের খাঁচায় করে থেমে থেমে ট্রাফিকের মধ্য দিয়ে যাচ্ছি। গত দশ বছরে ঢাকার জনসংখ্যা দ্বিগুণ হয়ে ১৫ মিলিয়নে দাঁড়িয়েছে।"
            },
            {
                en: "The city's infrastructure doesn't match the scale of its population. Just 7 percent of the city is covered by roads, compared with around 25 percent of Paris and Vienna.",
                bn: "শহরের অবকাঠামো এর জনসংখ্যার সাথে সামঞ্জস্যপূর্ণ নয়। শহরের মাত্র ৭ শতাংশ রাস্তা দ্বারা আচ্ছাদিত, যেখানে প্যারিস এবং ভিয়েনায় এটি প্রায় ২৫ শতাংশ।"
            },
            {
                en: "The jam costs an estimated $3.2 billion a year in lost time. People spend hours stuck in traffic, breathing in exhaust fumes and losing valuable working hours.",
                bn: "যানজটের কারণে সময় নষ্ট হওয়ার ফলে বছরে প্রায় ৩.২ বিলিয়ন ডলার ক্ষতি হয়। মানুষ ঘণ্টার পর ঘণ্টা যানজটে আটকে থাকে, গাড়ির ধোঁয়া শ্বাস নেয় এবং মূল্যবান কর্মঘণ্টা হারায়।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does the phrase 'tiny steel cage' refer to?", options: ["A prison", "A CNG auto-rickshaw", "A bus", "A train"], ans: 1 },
                { q: "What percentage of Dhaka is covered by roads?", options: ["25 percent", "15 percent", "7 percent", "3.2 percent"], ans: 2 },
                { q: "What is the estimated yearly financial loss due to traffic jams in Dhaka?", options: ["$3.2 million", "$3.2 billion", "$15 million", "$7 billion"], ans: 1 },
                { q: "What is the closest meaning of 'Congestion'?", options: ["Empty space", "Overcrowding", "Fast movement", "Pollution"], ans: 1 },
                { q: "Compared to Dhaka, how much road coverage do Paris and Vienna have?", options: ["7 percent", "15 percent", "Around 25 percent", "50 percent"], ans: 2 }
            ],
            openEnded: [
                "a. Why is Dhaka called the 'Traffic Capital of the World'?",
                "b. What are the economic and physical effects of traffic jams on the people of Dhaka?",
                "c. How does Dhaka's infrastructure compare to its population?"
            ],
            flowChartTopic: "the causes and effects of traffic jams in Dhaka",
            flowChartBox1: "Rapid population growth",
            summaryPrompt: "Write a summary of the passage highlighting the traffic situation in Dhaka."
        }
    }
}, 
    
"u2_l3": {
        title: "Unit 2, Lesson 3: The Traffic Police",
        vocab: [
            { w: "Erratic", m: "অস্থির / অনিয়মিত", s: "Unpredictable / Irregular" },
            { w: "Plight", m: "দুর্দশা", s: "Difficult situation / Trouble" },
            { w: "Vigil", m: "সজাগ", s: "Watchful / Alert" },
            { w: "Agile", m: "চটপটে", s: "Quick-moving / Nimble" },
            { w: "Swerve", m: "দিক পরিবর্তন করা", s: "Turn aside / Deviate" },
            { w: "Unpredictable", m: "অপ্রত্যাশিত", s: "Unforeseen / Uncertain" }
        ],
        chunks: [
            {
                en: "Amidst killer speeds I stand\nFacing the traffic, stretching my hand.",
                bn: "ঘাতক গতির মাঝে আমি দাঁড়িয়ে থাকি\nট্রাফিক মোকাবেলা করে, আমার হাত প্রসারিত করে।"
            },
            {
                en: "I am seen on kid's books and as cartoons everywhere\nEducating people and asking them to beware\nOf the erratic traffic and the signboards\nSeen on almost all the roads.",
                bn: "আমাকে শিশুদের বইতে এবং সব জায়গায় কার্টুন হিসেবে দেখা যায়\nমানুষকে শিক্ষিত করি এবং তাদেরকে সতর্ক থাকতে বলি\nঅস্থির ট্রাফিক এবং প্রায় সব রাস্তায় দেখা যাওয়া\nসাইনবোর্ডগুলো সম্পর্কে।"
            },
            {
                en: "So that you're safe I see each one of you\nBut my sweet, my plight on the road sees who?",
                bn: "যাতে তোমরা নিরাপদ থাকো, আমি তোমাদের প্রত্যেককে দেখি\nকিন্তু আমার সোনা, রাস্তায় আমার দুর্দশা কে দেখে?"
            },
            {
                en: "Be it sunny or rainy,\nFor your safety I must be\nVigil and agile, on the middle\nStanding erect, as fit as a fiddle.",
                bn: "রোদ হোক বা বৃষ্টি,\nতোমাদের নিরাপত্তার জন্য আমাকে অবশ্যই\nসজাগ এবং চটপটে থাকতে হয়, রাস্তার মাঝখানে\nসোজা হয়ে দাঁড়িয়ে, সম্পূর্ণ সুস্থ ও সবলভাবে।"
            },
            {
                en: "Oh! My ear hurts! Oh! My head aches!\nOh! Look at the weather such unpredictable days!\nBut I cannot swerve; I must be on duty.\nI care for your safety.\nBe it noisy or dusty; Be it sunny or rainy;\nI must be on duty. I care for your safety.",
                bn: "ওহ! আমার কান ব্যথা করছে! ওহ! আমার মাথা ব্যথা করছে!\nওহ! আবহাওয়ার দিকে তাকাও, কী অপ্রত্যাশিত দিন!\nকিন্তু আমি সরতে পারি না; আমাকে অবশ্যই কর্তব্যে থাকতে হবে।\nআমি তোমাদের নিরাপত্তার যত্ন নিই।\nকোলাহলপূর্ণ হোক বা ধুলোবালি হোক; রোদ হোক বা বৃষ্টি হোক;\nআমাকে অবশ্যই কর্তব্যে থাকতে হবে। আমি তোমাদের নিরাপত্তার যত্ন নিই।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does the phrase 'killer speeds' imply?", options: ["Fast animals", "Reckless and dangerously fast vehicles", "Running people", "High-speed winds"], ans: 1 },
                { q: "What does the word 'plight' refer to in the poem?", options: ["Happiness", "Responsibility", "A dangerous or difficult situation", "Salary"], ans: 2 },
                { q: "The traffic policeman is 'fit as a fiddle'. This means he is-", options: ["Playing a musical instrument", "Very weak", "In perfect health", "Standing like a statue"], ans: 2 },
                { q: "Why do his ears hurt and head ache?", options: ["Because he is sick", "Because of the unpredictable weather", "Because of the extreme noise and dust of the traffic", "Because he is hungry"], ans: 2 },
                { q: "What does the word 'swerve' mean?", options: ["To deviate or move away from his spot", "To jump high", "To blow a whistle", "To sleep"], ans: 0 }
            ],
            openEnded: [
                "a. Who is the speaker in the poem and what is his main duty?",
                "b. What kind of physical and mental pressure does a traffic policeman face?",
                "c. Why does the traffic policeman say 'my plight on the road sees who'?"
            ],
            flowChartTopic: "the sufferings and duties of a traffic police",
            flowChartBox1: "Standing amidst killer speeds",
            summaryPrompt: "Write a summary of the poem highlighting the sacrifices of a traffic policeman."
        }
    },
    "u3_l1": {
        title: "Unit 3, Lesson 1: Food Adulteration Reaches New Height",
        vocab: [
            { w: "Pesticide", m: "কীটনাশক", s: "Insecticide / Poison" },
            { w: "Contaminated", m: "দূষিত", s: "Polluted / Adulterated" },
            { w: "Mandatory", m: "বাধ্যতামূলক", s: "Compulsory / Obligatory" },
            { w: "Enact", m: "আইন প্রণয়ন করা", s: "Establish / Pass" },
            { w: "Microbial", m: "জীবাণু সংক্রান্ত", s: "Bacterial" },
            { w: "Fatal", m: "মারাত্মক / প্রাণঘাতী", s: "Deadly / Lethal" }
        ],
        chunks: [
            {
                en: "Unsafe levels of pesticides are present in around half of the vegetables and more than a quarter of fruits sold in the capital's markets, a recent survey has found. A 15-member team of the National Food Safety Laboratory, with support from the Food and Agriculture Organisation (FAO), came up with the findings after collecting and testing food samples from the capital's Gulshan, Karwanbazar and Mohakhali markets.",
                bn: "রাজধানীর বাজারগুলোতে বিক্রি হওয়া শাকসবজির প্রায় অর্ধেক এবং ফলের এক-চতুর্থাংশের বেশি অংশে অনিরাপদ মাত্রার কীটনাশক রয়েছে বলে সাম্প্রতিক এক জরিপে দেখা গেছে। খাদ্য ও কৃষি সংস্থার (FAO) সহায়তায় ন্যাশনাল ফুড সেফটি ল্যাবরেটরির ১৫ সদস্যের একটি দল রাজধানীর গুলশান, কারওয়ান বাজার এবং মহাখালী বাজার থেকে খাবারের নমুনা সংগ্রহ ও পরীক্ষা করার পর এই তথ্য পেয়েছে।"
            },
            {
                en: "The survey report read that nearly 40% of 82 samples of milk, milk products, fish, fruits and vegetables contained banned pesticides such as DDT, Aldrin, Chlordane and Heptachlor. The amounts of pesticide in these samples were found to be 3 to 20 times greater than the limits set by the European Union. Around 50% vegetables and 35% fruits were found to be contaminated with unsafe level of pesticides.",
                bn: "জরিপ প্রতিবেদনে বলা হয়েছে যে দুধ, দুগ্ধজাত দ্রব্য, মাছ, ফলমূল এবং শাকসবজির ৮২টি নমুনার প্রায় ৪০ শতাংশেই ডিডিটি, অলড্রিন, ক্লোরডেন এবং হেপ্টাক্লোরের মতো নিষিদ্ধ কীটনাশক ছিল। এই নমুনাগুলোতে কীটনাশকের পরিমাণ ইউরোপীয় ইউনিয়নের নির্ধারিত সীমার চেয়ে ৩ থেকে ২০ গুণ বেশি পাওয়া গেছে। প্রায় ৫০% শাকসবজি এবং ৩৫% ফল অনিরাপদ মাত্রার কীটনাশক দ্বারা দূষিত বলে পাওয়া গেছে।"
            },
            {
                en: "Analysing more than 30 samples of turmeric powder (branded, packaged and open), the team also found that nearly 30% of the samples contained traces of lead chromate, which can be fatal if swallowed or inhaled. These samples also contained lead at 20 to 50 times above the safety limit of 2.5 parts per million set by the Bangladesh Standard Testing Institute (BSTI).",
                bn: "হলুদের গুঁড়ার (ব্র্যান্ডেড, প্যাকেটজাত এবং খোলা) ৩০টির বেশি নমুনা বিশ্লেষণ করে দলটি দেখেছে যে নমুনাগুলোর প্রায় ৩০ শতাংশে লেড ক্রোমেটের সন্ধান মিলেছে, যা গিলে ফেললে বা নিঃশ্বাসের সাথে গ্রহণ করলে মারাত্মক হতে পারে। এই নমুনাগুলোতে লেডের পরিমাণও বাংলাদেশ স্ট্যান্ডার্ড টেস্টিং ইনস্টিটিউট (BSTI) দ্বারা নির্ধারিত ২.৫ পিপিএম (পার্টস পার মিলিয়ন) নিরাপদ সীমার চেয়ে ২০ থেকে ৫০ গুণ বেশি ছিল।"
            },
            {
                en: "The tests indicated that poultry feed in the country had also been contaminated, as samples of chicken and fish contained traces of antibiotics. High microbial populations were found in several samples of pasteurised milk, indicating poor processing procedures by the manufacturers.",
                bn: "পরীক্ষাগুলো ইঙ্গিত দেয় যে দেশের পোল্ট্রি ফিডও দূষিত হয়েছে, কারণ মুরগি এবং মাছের নমুনায় অ্যান্টিবায়োটিকের সন্ধান পাওয়া গেছে। পাস্তুরিত দুধের বেশ কয়েকটি নমুনায় উচ্চ জীবাণুর উপস্থিতি পাওয়া গেছে, যা প্রস্তুতকারকদের দুর্বল প্রক্রিয়াকরণ পদ্ধতি নির্দেশ করে।"
            },
            {
                en: "Adulterated food products are reportedly the cause behind thousands of people suffering from fatal diseases like cancer, kidney failure and heart problems. Health specialists told the Dhaka Tribune that the Ministry of Food had enacted a Food Safety Act, but was yet to prepare the necessary rules.",
                bn: "ভেজাল খাদ্যপণ্য হাজার হাজার মানুষের ক্যান্সার, কিডনি ফেইলিউর এবং হার্টের সমস্যার মতো মারাত্মক রোগে ভোগার কারণ বলে জানা গেছে। স্বাস্থ্য বিশেষজ্ঞরা ঢাকা ট্রিবিউনকে বলেছেন যে খাদ্য মন্ত্রণালয় একটি 'নিরাপদ খাদ্য আইন' প্রণয়ন করেছে, তবে প্রয়োজনীয় বিধিমালা এখনও তৈরি করতে পারেনি।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does the abbreviation FAO stand for?", options: ["Food and Agricultural Office", "Food and Agriculture Organisation", "Federal Agriculture Organization", "Food Adulteration Office"], ans: 1 },
                { q: "What is the consequence of swallowing or inhaling lead chromate?", options: ["It cures diseases", "It improves taste", "It can be fatal", "It preserves food"], ans: 2 },
                { q: "What percentage of milk, fish, fruits, and vegetable samples contained banned pesticides?", options: ["50%", "30%", "nearly 40%", "20%"], ans: 2 },
                { q: "What was found in the samples of pasteurized milk?", options: ["Formaldehyde", "Antibiotics", "Lead chromate", "High microbial populations"], ans: 3 },
                { q: "What does the word 'mandatory' mean in the text?", options: ["Optional", "Compulsory", "Suggested", "Useless"], ans: 1 }
            ],
            openEnded: [
                "a. What did the 15-member team of the National Food Safety Laboratory find out about our food?",
                "b. What are the fatal effects of eating adulterated food products?",
                "c. What is the current status of the Food Safety Act in Bangladesh according to the passage?"
            ],
            flowChartTopic: "the alarming findings of the National Food Safety Laboratory regarding food adulteration",
            flowChartBox1: "Collecting food samples from capital's markets",
            summaryPrompt: "Write a summary of the passage focusing on the extent of food adulteration and its impacts."
        }
    }
