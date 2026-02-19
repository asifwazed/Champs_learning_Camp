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
    }, 
                
"u3_l2": {
        title: "Unit 3, Lesson 2: Eating Habit and Hazards (The Luncheon)",
        vocab: [
            { w: "Beckon", m: "ইশারা করে ডাকা", s: "Signal / Gesture" },
            { w: "Cemetery", m: "গোরস্থান", s: "Graveyard / Burial ground" },
            { w: "Imposing", m: "চিত্তাকর্ষক / প্রভাব বিস্তারকারী", s: "Impressive / Striking" },
            { w: "Startled", m: "চমকে ওঠা", s: "Surprised / Shocked" },
            { w: "Generous", m: "উদার", s: "Liberal / Kind" },
            { w: "Vindictive", m: "প্রতিহিংসাপরায়ণ", s: "Revengeful / Spiteful" },
            { w: "Complacency", m: "আত্মসন্তুষ্টি", s: "Self-satisfaction / Smugness" }
        ],
        chunks: [
            {
                en: "I caught sight of her at the play, and in answer to her beckoning, I went over during the interval and sat down beside her. It was long since I had last seen her, and if someone had not mentioned her name I hardly think I would have recognized her. She addressed me brightly. 'Well, it's many years since we first met. How time does fly! We're none of us getting any younger. Do you remember the first time I saw you? You asked me to luncheon.'",
                bn: "আমি নাটকের মাঝে তাকে দেখতে পেলাম, এবং তার ইশারার জবাবে বিরতির সময় আমি তার কাছে গেলাম এবং তার পাশে বসলাম। তাকে শেষবার দেখার পর অনেক দিন পেরিয়ে গেছে, এবং যদি কেউ তার নাম উল্লেখ না করত, আমি মনে হয় না তাকে চিনতে পারতাম। সে আমাকে আনন্দের সাথে সম্বোধন করল। 'অনেক বছর হয়ে গেল আমাদের প্রথম দেখা হওয়ার পর। সময় কত দ্রুত চলে যায়! আমরা কেউই আর তরুণ হচ্ছি না। তোমার কি মনে আছে প্রথমবার আমি তোমাকে কবে দেখেছিলাম? তুমি আমাকে দুপুরের খাবারের (লাঞ্চন) আমন্ত্রণ জানিয়েছিলে।'"
            },
            {
                en: "It was twenty years ago and I was living in Paris. I had a tiny apartment in the Latin quarter overlooking a cemetery, and I was earning barely enough money to keep body and soul together. She had read a book of mine and had written to me about it. I answered, thanking her, and presently I received from her another letter saying that she was passing through Paris and would like to have a chat with me; but her time was limited, and the only free moment she had was on the following Thursday; she was spending the morning at the Luxembourg and would I give her a little luncheon at Foyot's afterwards?",
                bn: "এটি বিশ বছর আগের কথা এবং আমি প্যারিসে থাকতাম। ল্যাটিন কোয়ার্টারে আমার একটি ছোট্ট অ্যাপার্টমেন্ট ছিল, যেখান থেকে একটি গোরস্থান দেখা যেত। আমি কোনোমতে বেঁচে থাকার মতো সামান্য অর্থ উপার্জন করতাম। সে আমার একটি বই পড়েছিল এবং এ বিষয়ে আমাকে চিঠি লিখেছিল। আমি তাকে ধন্যবাদ জানিয়ে উত্তর দিয়েছিলাম। এর পরপরই তার আরেকটি চিঠি পেলাম যেখানে সে জানিয়েছিল যে সে প্যারিস হয়ে যাচ্ছে এবং আমার সাথে কথা বলতে চায়; তবে তার সময় সীমিত, শুধু আগামী বৃহস্পতিবার তার একটু সময় আছে; সে সকালটা লুক্সেমবার্গে কাটাবে, তারপর আমি কি তাকে ফয়োটস (Foyot's)-এ ছোট্ট একটি লাঞ্চন খাওয়াতে পারব?"
            },
            {
                en: "Foyot's is a restaurant at which the French senators eat, and it was so far beyond my means that I had never even thought of going there. But I was flattered, and I was too young to have learned to say no to a woman. I had eighty francs (gold francs) to last me the rest of the month, and a modest luncheon should not cost more than fifteen. If I cut out coffee for the next two weeks I could manage well enough.",
                bn: "ফয়োটস এমন একটি রেস্তোরাঁ যেখানে ফরাসি সিনেটররা খাবার খান, এবং এটি আমার সামর্থ্যের এতই বাইরে ছিল যে আমি কখনো সেখানে যাওয়ার কথা চিন্তাও করিনি। কিন্তু আমি তোষামোদিত হয়েছিলাম, আর আমি এতটাই তরুণ ছিলাম যে কোনো নারীকে 'না' বলা শিখিনি। পুরো মাস চলার জন্য আমার কাছে আশি ফ্রাঙ্ক (স্বর্ণমুদ্রা) ছিল, এবং একটি সাধারণ লাঞ্চনের খরচ পনেরো ফ্রাঙ্কের বেশি হওয়ার কথা নয়। আমি যদি পরবর্তী দুই সপ্তাহ কফি খাওয়া বাদ দিই, তবে বেশ ভালোভাবে ম্যানেজ করতে পারব।"
            },
            {
                en: "I answered that I would meet my friend-by correspondence-at Foyot's on Thursday at half-past twelve. She was not so young as I expected and in appearance imposing rather than attractive. She was, in fact, a woman of forty... She was talkative, but since she seemed inclined to talk about me I was prepared to be an attentive listener.",
                bn: "আমি উত্তর দিলাম যে আমি বৃহস্পতিবার সাড়ে বারোটায় ফয়োটসে আমার চিঠির বন্ধুর সাথে দেখা করব। সে আমার প্রত্যাশার মতো তরুণ ছিল না, আর দেখতে আকর্ষণীয়ের চেয়ে বরং একটু বেশিই প্রভাব বিস্তারকারী ছিল। আসলে, সে ছিল চল্লিশোর্ধ্ব এক নারী... সে বাচাল ছিল, কিন্তু যেহেতু সে আমার সম্পর্কেই কথা বলতে ইচ্ছুক ছিল, আমি একজন মনোযোগী শ্রোতা হওয়ার জন্য প্রস্তুত ছিলাম।"
            },
            {
                en: "I was startled when the bill of fare was brought, for the prices were a great deal higher than I had anticipated. But she reassured me. 'I never eat anything for luncheon,' she said. 'Oh, don't say that!' I answered generously. 'I never eat more than one thing. I think people eat far too much nowadays. A little fish, perhaps. I wonder if they have any salmon.'",
                bn: "খাবারের বিল বা মেন্যু যখন আনা হলো, আমি চমকে উঠলাম, কারণ দাম আমার অনুমানের চেয়ে অনেক বেশি ছিল। কিন্তু সে আমাকে আশ্বস্ত করল। 'আমি লাঞ্চনে কখনো কিছু খাই না,' সে বলল। 'ওহ, এমন কথা বলবেন না!' আমি উদারভাবে উত্তর দিলাম। 'আমি কখনোই একটার বেশি পদ খাই না। আমার মনে হয় আজকাল মানুষ বড্ড বেশি খায়। হয়তো একটু মাছ। দেখি তাদের কাছে স্যামন মাছ আছে কি না।'"
            },
            {
                en: "Well, it was early in the year for salmon and it was not on the bill of fare, but I asked the waiter if there was any. Yes, a beautiful salmon had just come in... I ordered it for my guest. The waiter asked her if she would have something while it was being cooked. 'No,' she answered, 'I never eat more than one thing unless you have a little caviare, I never mind caviare.'",
                bn: "বছরের ওই সময়ে স্যামন মাছ পাওয়া কঠিন এবং এটি মেন্যুতেও ছিল না, কিন্তু আমি ওয়েটারকে জিজ্ঞেস করলাম স্যামন হবে কি না। হ্যাঁ, একটি চমৎকার স্যামন মাত্রই এসেছে... আমি আমার অতিথির জন্য তা অর্ডার করলাম। ওয়েটার তাকে জিজ্ঞেস করল, স্যামন রান্না হতে হতে সে অন্য কিছু খাবে কি না। 'না,' সে উত্তর দিল, 'আমি কখনোই একটার বেশি পদ খাই না, তবে যদি একটু ক্যাভিয়ার (বিশেষ ধরনের মাছের ডিম) থাকে, আমি ক্যাভিয়ার খেতে আপত্তি করব না।'"
            },
            {
                en: "My heart sank a little. I knew I could not afford caviare, but I could not very well tell her that. I told the waiter by all means to bring caviare. For myself I chose the cheapest dish on the menu and that was a mutton chop. 'I think you are unwise to eat meat,' she said. 'I don't know how you can expect to work after eating heavy things like chops. I don't believe in overloading my stomach.'",
                bn: "আমার মনটা একটু দমে গেল। আমি জানতাম ক্যাভিয়ার কেনার সামর্থ্য আমার নেই, কিন্তু আমি তাকে সে কথা বলতে পারলাম না। আমি ওয়েটারকে যেকোনো মূল্যে ক্যাভিয়ার আনতে বললাম। নিজের জন্য আমি মেন্যুর সবচেয়ে সস্তা পদটি বেছে নিলাম, আর সেটি ছিল মাটন চপ (খাসির মাংস)। 'আমার মনে হয় মাংস খাওয়াটা তোমার জন্য বোকামি,' সে বলল। 'আমি জানি না চপের মতো ভারী খাবার খেয়ে তুমি কীভাবে কাজ করার আশা করো। আমি পাকস্থলী অতিরিক্ত বোঝাই করায় বিশ্বাসী নই।'"
            },
            {
                en: "Then came the question of drink. 'I never drink anything for luncheon,' she said. 'Neither do I,' I answered promptly. 'Except white wine,' she proceeded as though I had not spoken. 'These French white wines are so light. They're wonderful for the digestion.' 'What would you like?' I asked... 'My doctor won't let me drink anything but champagne.'",
                bn: "এরপর এল পানীয়র প্রশ্ন। 'আমি লাঞ্চনে কখনো কোনো পানীয় পান করি না,' সে বলল। 'আমিও না,' আমি সাথে সাথে উত্তর দিলাম। 'তবে হোয়াইট ওয়াইন ছাড়া,' সে এমনভাবে কথা চালিয়ে গেল যেন আমি কিছুই বলিনি। 'এই ফরাসি হোয়াইট ওয়াইনগুলো খুব হালকা। হজমের জন্য এগুলো চমৎকার।' 'আপনি কোনটি পছন্দ করবেন?' আমি জিজ্ঞেস করলাম... 'আমার ডাক্তার আমাকে শ্যাম্পেন ছাড়া আর কিছু পান করতে নিষেধ করেছেন।'"
            },
            {
                en: "I fancy I turned a trifle pale. I ordered half a bottle. I mentioned casually that my doctor had absolutely forbidden me to drink champagne. 'What are you going to drink, then?' 'Water.' She ate the caviare and she ate the salmon. She talked gaily of art and literature and music. But I wondered what the bill would come to.",
                bn: "আমার মনে হলো আমি কিছুটা ফ্যাকাশে হয়ে গেলাম। আমি অর্ধেক বোতল শ্যাম্পেন অর্ডার করলাম। আমি সাধারণভাবে উল্লেখ করলাম যে আমার ডাক্তার আমাকে শ্যাম্পেন পান করতে একেবারেই নিষেধ করেছেন। 'তাহলে তুমি কী পান করবে?' 'পানি।' সে ক্যাভিয়ার খেল এবং স্যামন খেল। সে আনন্দিত চিত্তে শিল্প, সাহিত্য এবং সঙ্গীত নিয়ে কথা বলতে লাগল। কিন্তু আমি শুধু ভাবছিলাম খাবারের বিল কত আসবে।"
            },
            {
                en: "When my mutton chop arrived she took me quite seriously to task. 'I see that you're in the habit of eating a heavy luncheon. I'm sure it's a mistake. Why don't you follow my example and just eat one thing?' ... 'I couldn't possibly eat anything more unless they had some of those giant asparagus. I should be sorry to leave Paris without having some of them.'",
                bn: "যখন আমার মাটন চপ এল, সে আমাকে বেশ কড়াভাবে তিরস্কার করল। 'আমি দেখছি ভারী লাঞ্চন খাওয়ার অভ্যাস তোমার আছে। আমি নিশ্চিত এটি একটি ভুল। তুমি কেন আমার দৃষ্টান্ত অনুসরণ করে শুধু একটি পদ খাও না?' ... 'আমি হয়তো আর কিছুই খেতে পারব না, যদি না তাদের কাছে ওই বিশাল অ্যাসপারাগাসগুলো থাকে। প্যারিস থেকে অ্যাসপারাগাস না খেয়ে চলে গেলে আমার খুব আফসোস হবে।'"
            },
            {
                en: "My heart sank. I had seen them in the shops, and I knew that they were horribly expensive... 'Madame wants to know if you have any of those giant asparagus.' I asked the waiter... 'I'm not in the least hungry,' my guest sighed, 'but if you insist I don't mind having some asparagus.' I ordered them.",
                bn: "আমার মন ভেঙে গেল। আমি দোকানে সেগুলো দেখেছি এবং জানতাম ওগুলো ভয়ানক দামি... 'ম্যাডাম জানতে চাইছেন আপনাদের কাছে ওই বিশাল অ্যাসপারাগাস আছে কি না।' আমি ওয়েটারকে জিজ্ঞেস করলাম... 'আমি মোটেও ক্ষুধার্ত নই,' আমার অতিথি দীর্ঘশ্বাস ছেড়ে বলল, 'তবে তুমি যদি জোরাজুরি করো, একটু অ্যাসপারাগাস খেতে আমার আপত্তি নেই।' আমি সেগুলো অর্ডার করলাম।"
            },
            {
                en: "'Coffee?' I said. 'Yes, just an ice cream and coffee,' she answered. I was past caring now. So I ordered coffee for myself and an ice cream and coffee for her. 'You know, there's one thing I thoroughly believe in,' she said, as she ate the ice cream. 'One should always get up from a meal feeling one could eat a little more.'",
                bn: "'কফি?' আমি বললাম। 'হ্যাঁ, শুধু একটি আইসক্রিম আর কফি,' সে উত্তর দিল। আমার আর কোনো পরোয়া ছিল না। তাই আমি নিজের জন্য কফি এবং তার জন্য আইসক্রিম ও কফি অর্ডার করলাম। আইসক্রিম খেতে খেতে সে বলল, 'জানো, আমি একটা জিনিস খুব শক্তভাবে বিশ্বাস করি, খাবারের টেবিল থেকে এমনভাবে ওঠা উচিত যেন মনে হয় আরেকটু খেতে পারলে ভালো হতো।'"
            },
            {
                en: "Then a terrible thing happened. While we were waiting for the coffee, the head waiter... came up to us bearing a large basket full of huge peaches... Lord knew what they cost. 'You see, you've filled your stomach with a lot of meat'-my one miserable little chop-'and you can't eat any more. But I've just had a snack and I shall enjoy a peach'.",
                bn: "তারপর এক ভয়ংকর ঘটনা ঘটল। কফির জন্য অপেক্ষার সময়, প্রধান ওয়েটার বিশাল পিচ ফলে ভরা একটি বড় ঝুড়ি নিয়ে আমাদের কাছে এল... ঈশ্বরই জানেন সেগুলোর দাম কত। 'দেখো, তুমি প্রচুর মাংস দিয়ে তোমার পেট ভরিয়ে ফেলেছ'-আমার সেই এক টুকরো হতভাগা চপ-'এবং তুমি আর কিছু খেতে পারবে না। কিন্তু আমি তো শুধু একটু স্ন্যাকস খেলাম, তাই আমি একটি পিচ ফল খাব।'"
            },
            {
                en: "The bill came and when I paid it I found that I had only enough for a quite inadequate tip. Her eyes rested for an instant on the three francs I left for the waiter, and I knew that she thought me mean. But when I walked out of the restaurant I had the whole month before me and not a penny in my pocket.",
                bn: "বিল এল এবং আমি যখন তা পরিশোধ করলাম, দেখলাম আমার কাছে ওয়েটারকে দেওয়ার জন্য খুবই সামান্য কিছু বকশিশ অবশিষ্ট আছে। ওয়েটারের জন্য রাখা তিন ফ্রাঙ্কের দিকে এক মুহূর্তের জন্য তার চোখ পড়ল, এবং আমি জানতাম সে আমাকে কিপটে ভাবছে। কিন্তু আমি যখন রেস্তোরাঁ থেকে বের হলাম, আমার সামনে পুরো মাস পড়ে আছে অথচ পকেটে একটা পয়সাও নেই।"
            },
            {
                en: "'Follow my example,' she said as we shook hand, 'and never eat more than one thing for luncheon.' 'I'll do better than that', I retorted. 'I'll eat nothing for dinner to-night.' 'Humorist!' she cried gaily, jumping into a cab, 'you're quite a humorist!' But I have had my revenge at last. I do not believe that I am a vindictive man... Today she weighs twenty-one stone.",
                bn: "হাত মেলানোর সময় সে বলল, 'আমার দৃষ্টান্ত অনুসরণ কোরো, আর লাঞ্চনে কখনোই একটার বেশি পদ খেয়ো না।' 'আমি এর চেয়েও ভালো কিছু করব,' আমি পালটা জবাব দিলাম। 'আমি আজ রাতে ডিনারে কিছুই খাব না।' 'দারুণ রসিক!' সে একটি ক্যাবে লাফিয়ে উঠে আনন্দের সাথে বলে উঠল, 'তুমি বেশ রসিক!' কিন্তু আমি শেষ পর্যন্ত আমার প্রতিশোধ পেয়েছি। আমি নিজেকে প্রতিহিংসাপরায়ণ মানুষ বলে মনে করি না... কিন্তু আজ তার ওজন একুশ স্টোন (প্রায় ১৩৩ কেজি)!"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does the word 'beckon' mean?", options: ["Call by shouting", "Call by a movement of hand or head", "Ignore someone", "Criticize"], ans: 1 },
                { q: "The writer was living in Paris at a-", options: ["Large mansion", "Big apartment", "Small flat", "Hotel"], ans: 2 },
                { q: "How did the writer feel when he saw the bill of fare?", options: ["Frightened", "Startled", "Delighted", "Pleased"], ans: 1 },
                { q: "What does 'Talkative' mean?", options: ["Flatterer", "Sycophant", "Quiet", "Chatterbox"], ans: 3 },
                { q: "How much money did the writer have for the rest of the month?", options: ["Fifty francs", "Eighty gold francs", "Fifteen francs", "A hundred francs"], ans: 1 }
            ],
            openEnded: [
                "a. What is Foyot's? Why was the writer flattered to go there?",
                "b. How many items of food did the lady actually order despite claiming she 'never eats more than one thing'?",
                "c. At one stage of the luncheon, the writer feels panicked. Why?",
                "d. How did the writer finally get his revenge on the lady?"
            ],
            flowChartTopic: "the items of food ordered by the lady during the luncheon",
            flowChartBox1: "Salmon fish",
            summaryPrompt: "Write a summary of the story highlighting the irony of the lady's eating habits."
        }
    }, 
    "u4_l1": {
        title: "Unit 4, Lesson 1: Etiquette and Manners",
        vocab: [
            { w: "Etiquette", m: "শিষ্টাচার", s: "Politeness / Decorum" },
            { w: "Manners", m: "আচরণ / প্রথা", s: "Behavior / Conduct" },
            { w: "Grudge", m: "ক্ষোভ / আক্রোশ", s: "Resentment / Bitterness" },
            { w: "Polite", m: "ভদ্র", s: "Courteous / Respectful" },
            { w: "Pardon", m: "ক্ষমা করা", s: "Forgive / Excuse" },
            { w: "Interrupt", m: "বাধা দেওয়া", s: "Disturb / Break in" }
        ],
        chunks: [
            {
                en: "As a child you must have been told to greet your elders and visitors to your home according to your culture and tradition. You must also have been taught to be polite in company and keep quiet while others, especially your elders, spoke.",
                bn: "শিশু বয়সে নিশ্চয়ই আপনাকে আপনার সংস্কৃতি ও ঐতিহ্য অনুযায়ী বড়দের এবং বাড়িতে আসা দর্শনার্থীদের অভিবাদন জানাতে বলা হয়েছে। আপনাকে নিশ্চয়ই মানুষের সামনে ভদ্র হতে এবং অন্যরা, বিশেষ করে বয়োজ্যেষ্ঠরা যখন কথা বলেন তখন চুপ থাকতে শেখানো হয়েছে।"
            },
            {
                en: "There are rules of behavior for all kinds of social occasions and it is important to learn them and practice them in everyday life. The manners that are correct in a wedding reception will not do in a debating club.",
                bn: "সব ধরনের সামাজিক অনুষ্ঠানের জন্যই আচরণের কিছু নিয়ম রয়েছে এবং সেগুলো শেখা ও দৈনন্দিন জীবনে চর্চা করা গুরুত্বপূর্ণ। একটি বিবাহ সংবর্ধনা অনুষ্ঠানে যে আচরণ সঠিক, একটি বিতর্ক ক্লাবে তা চলবে না।"
            },
            {
                en: "The word 'etiquette' is a French word and it means the rules of correct behavior in society. The word 'manners' means the behavior that is considered to be polite in a particular society or culture. Manners can be good or bad.",
                bn: "'এটিকেট' (শিষ্টাচার) শব্দটি একটি ফরাসি শব্দ এবং এর অর্থ হলো সমাজে সঠিক আচরণের নিয়ম। 'ম্যানারস' (আচরণ) বলতে বোঝায় সেই আচরণ যা কোনো নির্দিষ্ট সমাজে বা সংস্কৃতিতে ভদ্র বলে বিবেচিত হয়। আচরণ ভালো বা খারাপ হতে পারে।"
            },
            {
                en: "For example, it is a bad manner to speak with food in one's mouth. No one likes a bad-mannered person. Remember that etiquette and manners vary from culture to culture and from society to society.",
                bn: "উদাহরণস্বরূপ, মুখে খাবার নিয়ে কথা বলা একটি খারাপ আচরণ। কেউ খারাপ আচরণের মানুষকে পছন্দ করে না। মনে রাখবেন যে শিষ্টাচার এবং আচরণ সংস্কৃতি থেকে সংস্কৃতিতে এবং সমাজ থেকে সমাজে ভিন্ন হয়।"
            },
            {
                en: "We learn etiquette and manners from our parents, families and various institutions, such as schools, colleges or professional bodies. Some polite expressions are 'Pardon me', 'Excuse me', 'May I', etc. They make our everyday life smooth and pleasant.",
                bn: "আমরা আমাদের বাবা-মা, পরিবার এবং বিভিন্ন প্রতিষ্ঠান, যেমন স্কুল, কলেজ বা পেশাজীবী সংগঠন থেকে শিষ্টাচার এবং আচরণ শিখি। কিছু ভদ্র অভিব্যক্তি হলো 'আমাকে ক্ষমা করুন', 'মাফ করবেন', 'আমি কি পারি' ইত্যাদি। এগুলো আমাদের দৈনন্দিন জীবনকে মসৃণ ও আনন্দদায়ক করে।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is the origin of the word 'etiquette'?", options: ["Latin", "English", "French", "Greek"], ans: 2 },
                { q: "What makes our everyday life smooth and pleasant?", options: ["Money", "Polite expressions", "Good clothes", "Being talkative"], ans: 1 },
                { q: "Speaking with food in one's mouth is an example of-", options: ["Good etiquette", "Modern culture", "Bad manners", "Traditional habit"], ans: 2 },
                { q: "From where do we primarily learn etiquette and manners?", options: ["From our friends", "From our parents and family", "From the internet", "From books"], ans: 1 },
                { q: "What does the word 'interrupt' mean?", options: ["To help someone", "To stop someone from speaking", "To agree with someone", "To encourage"], ans: 1 }
            ],
            openEnded: [
                "a. What is the difference between etiquette and manners?",
                "b. Why do you think etiquette and manners vary from culture to culture?",
                "c. List three polite expressions mentioned in the text and explain when you would use them."
            ],
            flowChartTopic: "the sources and importance of good manners",
            flowChartBox1: "Learning from parents and family",
            summaryPrompt: "Write a summary of the passage highlighting the importance of etiquette and manners in human life."
        }
    },
    "u4_l2": {
        title: "Unit 4, Lesson 2: Love and Friendship",
        vocab: [
            { w: "Ingratitude", m: "অকৃতজ্ঞতা", s: "Thanklessness / Unappreciation" },
            { w: "Keen", m: "তীব্র / তীক্ষ্ণ", s: "Sharp / Intense" },
            { w: "Feigning", m: "ভান করা", s: "Pretending / Faking" },
            { w: "Folly", m: "বোকামি", s: "Foolishness / Stupidity" },
            { w: "Warp", m: "বিকৃত করা / বরফ জমানো", s: "Freeze / Distort" }
        ],
        chunks: [
            {
                en: "Blow, blow, thou winter wind,\nThou art not so unkind\nAs man's ingratitude;\nThy tooth is not so keen,\nBecause thou art not seen,\nAlthough thy breath be rude.",
                bn: "বও, বও, হে শীতের বাতাস,\nতুমি ততটা নিষ্ঠুর নও\nযতটা মানুষের অকৃতজ্ঞতা;\nতোমার দংশন ততটা তীক্ষ্ণ নয়,\nকারণ তোমাকে দেখা যায় না,\nযদিও তোমার শ্বাস রূঢ়।"
            },
            {
                en: "Heigh-ho! sing, heigh-ho! unto the green holly:\nMost friendship is feigning, most loving mere folly:\nThen heigh-ho, the holly!\nThis life is most jolly.",
                bn: "হেই-হো! গাও, হেই-হো! সবুজ হলি গাছের উদ্দেশ্যে:\nঅধিকাংশ বন্ধুত্বই ভান, অধিকাংশ ভালোবাসাই নিছক বোকামি:\nতাহলে হেই-হো, হলি গাছ!\nএই জীবনটাই সবচেয়ে আনন্দের।"
            },
            {
                en: "Freeze, freeze, thou bitter sky,\nThat dost not bite so nigh\nAs benefits forgot:\nThough thou the waters warp,\nThy sting is not so sharp\nAs friend remembered not.",
                bn: "জমাট বাঁধো, জমাট বাঁধো, হে তিক্ত আকাশ,\nতুমি ততটা গভীরভাবে কামড় দাও না\nযতটা ভুলে যাওয়া উপকারের বেদনা দেয়:\nযদিও তুমি পানিকে বরফ করে দাও,\nতোমার হুল ততটা তীক্ষ্ণ নয়\nযতটা ভুলে যাওয়া বন্ধুর আঘাত।"
            }
        ],
        exam: {
            mcqs: [
                { q: "Who is the poet comparing the winter wind to?", options: ["A wild animal", "A forgotten friend", "Man's ingratitude", "A dying tree"], ans: 2 },
                { q: "What does the poet say about 'most friendship'?", options: ["It is forever", "It is pretending or fake", "It is sacred", "It is strong"], ans: 1 },
                { q: "The word 'feigning' means-", options: ["Failing", "Pretending", "Crying", "Helping"], ans: 1 },
                { q: "Why is the winter wind's tooth 'not so keen'?", options: ["Because it is invisible", "Because it is warm", "Because it is far away", "Because it is dead"], ans: 0 },
                { q: "What is considered 'mere folly' in the poem?", options: ["Singing", "Working", "Loving", "Freezing"], ans: 2 }
            ],
            openEnded: [
                "a. Why does the poet think the winter wind is kinder than human beings?",
                "b. What is the poet's attitude towards friendship and love?",
                "c. Explain the line: 'Thy sting is not so sharp / As friend remembered not.'"
            ],
            flowChartTopic: "the poet's comparison between harsh nature and human behavior",
            flowChartBox1: "Experiencing the bitter winter wind",
            summaryPrompt: "Write the theme or summary of the poem focusing on the pain of human ingratitude."
        }
    },
    "u5_l1": {
        title: "Unit 5, Lesson 1: The Storm and Stress at Adolescence",
        vocab: [
            { w: "Transition", m: "রূপান্তর / পরিবর্তন", s: "Change / Shift" },
            { w: "Puberty", m: "বয়ঃসন্ধিকাল", s: "Adolescence / Youth" },
            { w: "Determinant", m: "নির্ধারক", s: "Factor / Decider" },
            { w: "Vulnerability", m: "ঝুঁকিপূর্ণতা / দুর্বলতা", s: "Weakness / Susceptibility" },
            { w: "Coercion", m: "জোরজবরদস্তি", s: "Force / Compulsion" }
        ],
        chunks: [
            {
                en: "Children must pass through several stages in their lives to become adults. For most people, there are four or five such stages of growth where they learn certain things: infancy (birth to age 2), early childhood (3 to 8 years), later childhood (9 to 12 years) and adolescence (13 to 18 years).",
                bn: "প্রাপ্তবয়স্ক হওয়ার জন্য শিশুদের জীবনে কয়েকটি পর্যায় অতিক্রম করতে হয়। অধিকাংশ মানুষের জন্য, বৃদ্ধির এমন চার বা পাঁচটি পর্যায় রয়েছে যেখানে তারা কিছু নির্দিষ্ট জিনিস শেখে: শৈশবকাল (জন্ম থেকে ২ বছর), প্রারম্ভিক শৈশব (৩ থেকে ৮ বছর), পরবর্তী শৈশব (৯ থেকে ১২ বছর) এবং বয়ঃসন্ধিকাল (১৩ থেকে ১৮ বছর)।"
            },
            {
                en: "Adolescence is a period in life when transition from childhood to adulthood takes place and behaviors and life styles are shaped. According to the World Health Organization (WHO), adolescence is the period which shapes the future of girls' and boys' lives.",
                bn: "বয়ঃসন্ধিকাল হলো জীবনের এমন একটি সময় যখন শৈশব থেকে যৌবনে রূপান্তর ঘটে এবং আচরণ ও জীবনধারা রূপ লাভ করে। বিশ্ব স্বাস্থ্য সংস্থা (WHO)-এর মতে, বয়ঃসন্ধিকাল হলো সেই সময় যা মেয়ে ও ছেলেদের জীবনের ভবিষ্যৎ গঠন করে।"
            },
            {
                en: "There are 28 million adolescents in Bangladesh; 13.7 million of them are girls and 14.3 million boys. The situation of adolescent girls in Bangladesh is characterized by inequality and subordination within the family and society.",
                bn: "বাংলাদেশে ২৮ মিলিয়ন (২ কোটি ৮০ লাখ) কিশোর-কিশোরী রয়েছে; তাদের মধ্যে ১৩.৭ মিলিয়ন মেয়ে এবং ১৪.৩ মিলিয়ন ছেলে। বাংলাদেশে কিশোরী মেয়েদের পরিস্থিতি পরিবার এবং সমাজে অসমতা ও অধীনতার দ্বারা চিহ্নিত।"
            },
            {
                en: "This inequality leads to widespread practice of child marriage, marginalization or exclusion from health, education and economic opportunities, and vulnerability to violence and sexual abuse.",
                bn: "এই অসমতা বাল্যবিবাহের ব্যাপক প্রচলন, স্বাস্থ্য, শিক্ষা এবং অর্থনৈতিক সুযোগ থেকে বঞ্চনা বা বাদ পড়া এবং সহিংসতা ও যৌন নির্যাতনের ঝুঁকির দিকে নিয়ে যায়।"
            },
            {
                en: "When a girl gets married, she usually drops out of school and begins full-time work in her in-laws' household. In the in-laws' house, she is marginalized. She becomes vulnerable to all forms of abuse, including dowry-related violence.",
                bn: "যখন একটি মেয়ের বিয়ে হয়, তখন সে সাধারণত স্কুল থেকে ঝরে পড়ে এবং তার শ্বশুরবাড়িতে পুরো সময়ের জন্য কাজ শুরু করে। শ্বশুরবাড়িতে, সে প্রান্তিক বা মূল্যহীন হয়ে পড়ে। সে যৌতুক-সম্পর্কিত সহিংসতাসহ সব ধরণের নির্যাতনের শিকার হওয়ার ঝুঁকিতে থাকে।"
            }
        ],
        exam: {
            mcqs: [
                { q: "According to WHO, what does adolescence shape?", options: ["The economy of a country", "The future of girls' and boys' lives", "The political structure", "The education system"], ans: 1 },
                { q: "What is the age range of adolescence according to the passage?", options: ["9 to 12 years", "13 to 18 years", "Birth to 2 years", "19 to 25 years"], ans: 1 },
                { q: "How many adolescents are there in Bangladesh?", options: ["14.3 million", "13.7 million", "28 million", "50 million"], ans: 2 },
                { q: "What happens to a girl in Bangladesh when she gets married early?", options: ["She gets a job", "She goes to university", "She drops out of school", "She becomes independent"], ans: 2 },
                { q: "The word 'vulnerability' implies-", options: ["Strength", "Being at risk or weak", "Wealth", "Protection"], ans: 1 }
            ],
            openEnded: [
                "a. What are the different stages of growth a child passes through to become an adult?",
                "b. How is the situation of adolescent girls characterized in Bangladesh?",
                "c. What are the negative consequences of child marriage for a girl?"
            ],
            flowChartTopic: "the challenges faced by adolescent girls in Bangladesh",
            flowChartBox1: "Facing inequality and subordination",
            summaryPrompt: "Summarize the text focusing on the problems faced by adolescents, particularly girls, in Bangladesh."
        }
    },
    "u5_l2": {
        title: "Unit 5, Lesson 2: Adolescence Problems in Bangladesh",
        vocab: [
            { w: "Maternal", m: "মাতৃ বিষয়ক", s: "Motherly" },
            { w: "Mortality", m: "মৃত্যুর হার", s: "Death rate" },
            { w: "Neonatal", m: "নবজাতক বিষয়ক", s: "Newborn" },
            { w: "Complication", m: "জটিলতা", s: "Difficulty / Problem" },
            { w: "Empowerment", m: "ক্ষমতায়ন", s: "Authorization / Enablement" }
        ],
        chunks: [
            {
                en: "In Bangladesh, the legal age of marriage is 18 for girls and 21 for boys. However, 33 percent of adolescent girls are married before the age of 15 and 60 percent become mothers by the age of 19.",
                bn: "বাংলাদেশে বিয়ের আইনি বয়স মেয়েদের জন্য ১৮ এবং ছেলেদের জন্য ২১। তবে, ৩৩ শতাংশ কিশোরী মেয়ের ১৫ বছর বয়সের আগেই বিয়ে হয়ে যায় এবং ৬০ শতাংশ মেয়ে ১৯ বছর বয়সের মধ্যে মা হয়ে যায়।"
            },
            {
                en: "Research finds that adolescents with higher level of education and from more affluent families tend to marry at a later age. Boys, however, become ready for marriage only after several years of adolescence and young adulthood.",
                bn: "গবেষণায় দেখা যায় যে উচ্চ শিক্ষিত এবং সচ্ছল পরিবারের কিশোর-কিশোরীরা বেশি বয়সে বিয়ে করার প্রবণতা দেখায়। অন্যদিকে, ছেলেরা বয়ঃসন্ধিকাল এবং প্রাথমিক যৌবনের কয়েক বছর পর বিয়ের জন্য প্রস্তুত হয়।"
            },
            {
                en: "When adolescent girls are pulled out of school, either for marriage or work, they often lose their mobility, their friends and social status. The lack of mobility among adolescent girls also curtails their economic and non-formal educational opportunities.",
                bn: "বিয়ে বা কাজের জন্য কিশোরী মেয়েদের যখন স্কুল থেকে ছাড়িয়ে আনা হয়, তখন তারা প্রায়শই তাদের গতিশীলতা, বন্ধুবান্ধব এবং সামাজিক মর্যাদা হারায়। কিশোরী মেয়েদের মধ্যে গতিশীলতার অভাব তাদের অর্থনৈতিক এবং উপানুষ্ঠানিক শিক্ষার সুযোগও কমিয়ে দেয়।"
            },
            {
                en: "Moreover, they lack information about health issues. According to a study, only about three in ten adolescents have even heard of HIV. Maternal mortality is another major concern. The maternal mortality rate for adolescents is double the national rate.",
                bn: "তাছাড়া, তাদের স্বাস্থ্য বিষয়ক তথ্যের অভাব রয়েছে। একটি গবেষণা অনুসারে, দশজনের মধ্যে মাত্র তিনজন কিশোর-কিশোরী এইচআইভি (HIV) সম্পর্কে শুনেছে। মাতৃমৃত্যু আরেকটি প্রধান উদ্বেগের বিষয়। কিশোরীদের মাতৃমৃত্যুর হার জাতীয় হারের দ্বিগুণ।"
            },
            {
                en: "When adolescent girls become mothers, their children are at high risk of death or disease. Neonatal mortality is highly correlated with the young age of mothers.",
                bn: "কিশোরী মেয়েরা যখন মা হয়, তখন তাদের সন্তানদের মৃত্যু বা রোগের ঝুঁকি বেশি থাকে। নবজাতকের মৃত্যুর হার মায়েদের অল্প বয়সের সাথে ব্যাপকভাবে সম্পর্কিত।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is the legal age of marriage for boys in Bangladesh?", options: ["18", "21", "25", "15"], ans: 1 },
                { q: "What percentage of girls become mothers by the age of 19?", options: ["33 percent", "50 percent", "60 percent", "75 percent"], ans: 2 },
                { q: "Who tends to marry at a later age?", options: ["Uneducated adolescents", "Adolescents with higher education", "Poor adolescents", "Rural adolescents"], ans: 1 },
                { q: "What happens when adolescent girls are pulled out of school?", options: ["They get jobs", "They lose their mobility and social status", "They become empowered", "They learn new skills"], ans: 1 },
                { q: "Neonatal mortality is highly correlated with-", options: ["Wealth of the family", "Education of the father", "Young age of mothers", "Weather conditions"], ans: 2 }
            ],
            openEnded: [
                "a. What is the marriage scenario of adolescent girls in Bangladesh?",
                "b. How does dropping out of school affect an adolescent girl?",
                "c. Why is early motherhood dangerous according to the text?"
            ],
            flowChartTopic: "the health and social risks of early marriage for adolescent girls",
            flowChartBox1: "Dropping out of school",
            summaryPrompt: "Write a summary of the passage focusing on the consequences of early marriage and motherhood in Bangladesh."
        }
    }, 
    // ==========================================
    // UNIT 6: Path to Higher Education
    // ==========================================
    "u6_l1": {
        title: "Unit 6, Lesson 1: An Eastern University",
        vocab: [
            { w: "Mechanical", m: "যান্ত্রিক", s: "Automatic / Machine-like" },
            { w: "Hospitality", m: "আতিথেয়তা", s: "Welcoming / Warmth" },
            { w: "Acquainted", m: "পরিচিত", s: "Familiar / Known" },
            { w: "Assimilate", m: "গ্রহণ করা / আত্মস্থ করা", s: "Absorb / Digest" },
            { w: "Aristocracy", m: "অভিজাততন্ত্র / আভিজাত্য", s: "Nobility / Elite" }
        ],
        chunks: [
            {
                en: "Universities should never be made into mechanical organizations for collecting and distributing knowledge. Through them the people should offer their intellectual hospitality, their wealth of mind to others, and earn their proud right in return to receive gifts from the rest of the world.",
                bn: "বিশ্ববিদ্যালয়গুলোকে কখনই জ্ঞান সংগ্রহ এবং বিতরণের জন্য যান্ত্রিক সংগঠনে পরিণত করা উচিত নয়। এর মাধ্যমে মানুষের উচিত তাদের বুদ্ধিবৃত্তিক আতিথেয়তা এবং মনের সম্পদ অন্যদের কাছে নিবেদন করা, এবং বিনিময়ে বাকি বিশ্ব থেকে উপহার গ্রহণের গর্বিত অধিকার অর্জন করা।"
            },
            {
                en: "But in the whole length and breadth of India there is not a single University established in the modern time where a foreign or an Indian student can properly be acquainted with the best products of the Indian mind.",
                bn: "কিন্তু আধুনিক সময়ে সমগ্র ভারতজুড়ে এমন একটি বিশ্ববিদ্যালয়ও প্রতিষ্ঠিত হয়নি যেখানে একজন বিদেশি বা ভারতীয় শিক্ষার্থী ভারতীয় মনের সেরা সৃষ্টির সাথে সঠিকভাবে পরিচিত হতে পারে।"
            },
            {
                en: "For that we have to cross the sea, and knock at the doors of France and Germany. Educational institutions in our country are India's alms-bowl of knowledge; they lower our intellectual self-respect; they encourage us to make a foolish display of decorations composed of borrowed feathers.",
                bn: "তার জন্য আমাদের সমুদ্র পাড়ি দিতে হয় এবং ফ্রান্স ও জার্মানির দরজায় কড়া নাড়তে হয়। আমাদের দেশের শিক্ষাপ্রতিষ্ঠানগুলো হলো ভারতের জ্ঞানের ভিক্ষার পাত্র; এগুলো আমাদের বুদ্ধিবৃত্তিক আত্মসম্মানবোধ কমিয়ে দেয়; এগুলো আমাদেরকে ধার করা পালক দিয়ে তৈরি সাজসজ্জার বোকা প্রদর্শনী করতে উৎসাহিত করে।"
            },
            {
                en: "Man's intellect has a natural pride in its own aristocracy, which is the pride of its culture. When it proudly rejoices in the wealth of its own culture, it becomes ready to assimilate the culture of others.",
                bn: "মানুষের বুদ্ধিবৃত্তির নিজস্ব আভিজাত্যের প্রতি একটি স্বাভাবিক গর্ব আছে, যা হলো তার সংস্কৃতির গর্ব। যখন এটি নিজের সংস্কৃতির সম্পদ নিয়ে গর্বভরে আনন্দ করে, তখন এটি অন্যদের সংস্কৃতি গ্রহণ বা আত্মস্থ করতে প্রস্তুত হয়।"
            }
        ],
        exam: {
            mcqs: [
                { q: "According to Tagore, what should universities NOT be?", options: ["Centers of excellence", "Mechanical organizations", "Places of hospitality", "Intellectual hubs"], ans: 1 },
                { q: "What does the phrase 'alms-bowl of knowledge' imply?", options: ["A rich source of learning", "Depending on others for knowledge", "A bowl full of books", "A wealthy university"], ans: 1 },
                { q: "The word 'assimilate' means-", options: ["To reject", "To destroy", "To absorb and understand", "To ignore"], ans: 2 },
                { q: "Where do students have to go to learn the best products of the Indian mind, ironically?", options: ["Japan", "France and Germany", "USA", "China"], ans: 1 },
                { q: "What is required before one can assimilate the culture of others?", options: ["Money", "Pride in one's own culture", "Mechanical organizations", "Borrowed feathers"], ans: 1 }
            ],
            openEnded: [
                "a. What is the true purpose of a university according to Rabindranath Tagore?",
                "b. Why does Tagore call the educational institutions of his country an 'alms-bowl of knowledge'?",
                "c. What does the metaphor 'borrowed feathers' refer to in the text?"
            ],
            flowChartTopic: "Tagore's view on the characteristics of a true university",
            flowChartBox1: "Offering intellectual hospitality",
            summaryPrompt: "Write a summary of Rabindranath Tagore's thoughts on Eastern universities and their flaws."
        }
    },
    "u6_l2": {
        title: "Unit 6, Lesson 2: Access to Higher Education",
        vocab: [
            { w: "Tertiary", m: "তৃতীয় স্তর (উচ্চশিক্ষা)", s: "Higher / Third-level" },
            { w: "Deficit", m: "ঘাটতি", s: "Shortage / Scarcity" },
            { w: "Accessibility", m: "প্রাপ্যতা / প্রবেশের সুযোগ", s: "Availability / Reachability" },
            { w: "Affiliated", m: "অধিভুক্ত", s: "Associated / Connected" },
            { w: "Multitude", m: "বিপুল সংখ্যক", s: "Crowd / Mass" }
        ],
        chunks: [
            {
                en: "Tertiary education in Bangladesh comprises two categories of institutions: degree awarding universities and colleges affiliated with the National University (NU). There were only 4 universities in Bangladesh at the time of independence in 1971.",
                bn: "বাংলাদেশে তৃতীয় স্তরের শিক্ষা (উচ্চশিক্ষা) দুটি ক্যাটাগরির প্রতিষ্ঠান নিয়ে গঠিত: ডিগ্রি প্রদানকারী বিশ্ববিদ্যালয় এবং জাতীয় বিশ্ববিদ্যালয়ের (NU) অধিভুক্ত কলেজ। ১৯৭১ সালে স্বাধীনতার সময় বাংলাদেশে মাত্র ৪টি বিশ্ববিদ্যালয় ছিল।"
            },
            {
                en: "All of those universities were publicly financed autonomous entities. At present, there are 35 such universities. Private universities are a relatively new phenomenon in this country. In the early 1990s, private sector came forward to establish universities.",
                bn: "সেই বিশ্ববিদ্যালয়গুলোর সবই ছিল সরকারি অর্থায়নে পরিচালিত স্বায়ত্তশাসিত প্রতিষ্ঠান। বর্তমানে এ ধরনের ৩৫টি বিশ্ববিদ্যালয় রয়েছে। বেসরকারি বিশ্ববিদ্যালয় এ দেশে অপেক্ষাকৃত নতুন একটি বিষয়। ১৯৯০-এর দশকের শুরুতে বেসরকারি খাত বিশ্ববিদ্যালয় প্রতিষ্ঠায় এগিয়ে আসে।"
            },
            {
                en: "Since then the country has experienced a spectacular growth in private universities-mostly in and around Dhaka and a couple of other large cities. At present, there are 79 private universities. The number of colleges providing tertiary level education is around 1,400.",
                bn: "তারপর থেকে দেশে বেসরকারি বিশ্ববিদ্যালয়ের দর্শনীয় বৃদ্ধি ঘটেছে—যার বেশিরভাগই ঢাকা ও এর আশপাশে এবং আরো কয়েকটি বড় শহরে অবস্থিত। বর্তমানে ৭৯টি বেসরকারি বিশ্ববিদ্যালয় রয়েছে। তৃতীয় স্তরের শিক্ষা প্রদানকারী কলেজের সংখ্যা প্রায় ১,৪০০।"
            },
            {
                en: "However, accessibility to higher education remains a major problem. Every year, a multitude of students pass the HSC examination, but the universities can only accommodate a fraction of them. This creates a huge deficit in higher education opportunities.",
                bn: "তবে, উচ্চশিক্ষায় প্রবেশের সুযোগ এখনো একটি বড় সমস্যা। প্রতি বছর বিপুলসংখ্যক শিক্ষার্থী এইচএসসি পরীক্ষায় উত্তীর্ণ হয়, কিন্তু বিশ্ববিদ্যালয়গুলো তাদের মাত্র একটি ভগ্নাংশকে জায়গা দিতে পারে। এটি উচ্চশিক্ষার সুযোগের ক্ষেত্রে বিশাল ঘাটতি তৈরি করে।"
            }
        ],
        exam: {
            mcqs: [
                { q: "How many universities were there in Bangladesh during independence?", options: ["35", "79", "4", "1400"], ans: 2 },
                { q: "When did private universities start emerging in Bangladesh?", options: ["1971", "Early 1990s", "2000s", "1980s"], ans: 1 },
                { q: "What does the word 'multitude' mean in the passage?", options: ["A small group", "A large number of people", "A specific subject", "An exam"], ans: 1 },
                { q: "What is the main problem mentioned regarding higher education?", options: ["Lack of teachers", "Accessibility", "Poor syllabus", "High cost"], ans: 1 },
                { q: "Which institution are the degree colleges affiliated with?", options: ["Dhaka University", "Private Universities", "National University (NU)", "Foreign Universities"], ans: 2 }
            ],
            openEnded: [
                "a. What are the two categories of tertiary education institutions in Bangladesh?",
                "b. Describe the growth of private universities in Bangladesh.",
                "c. Why is accessibility to higher education considered a major problem?"
            ],
            flowChartTopic: "the current scenario of tertiary education in Bangladesh",
            flowChartBox1: "Comprising universities and NU affiliated colleges",
            summaryPrompt: "Summarize the text focusing on the growth and challenges of higher education in Bangladesh."
        }
    },

    // ==========================================
    // UNIT 7: Human Rights
    // ==========================================
    "u7_l1": {
        title: "Unit 7, Lesson 1: Amerigo, a Street Child",
        vocab: [
            { w: "Trash", m: "আবর্জনা", s: "Garbage / Rubbish" },
            { w: "Vendor", m: "বিক্রেতা", s: "Seller / Dealer" },
            { w: "Infection", m: "সংক্রমণ", s: "Disease / Contagion" },
            { w: "Starving", m: "অনাহারে থাকা", s: "Famished / Dying of hunger" },
            { w: "Sorting", m: "বাছাই করা", s: "Classifying / Organizing" }
        ],
        chunks: [
            {
                en: "My name is Amerigo. I am 13 years old and I live on the street, alone. My mother, who is separated from my father, doesn't want me. She told me to go away.",
                bn: "আমার নাম আমেরিগো। আমার বয়স ১৩ বছর এবং আমি একাকী রাস্তায় থাকি। আমার মা, যিনি আমার বাবার কাছ থেকে আলাদা হয়ে গেছেন, তিনি আমাকে চান না। তিনি আমাকে চলে যেতে বলেছেন।"
            },
            {
                en: "The streets are now my home. Sometimes I find work. I used to collect trash and sell it to a vendor. I stopped doing that after I had a serious infection and a doctor told me to stay away from the trash dump.",
                bn: "রাস্তাগুলোই এখন আমার বাড়ি। কখনো কখনো আমি কাজ পাই। আমি আগে আবর্জনা কুড়াতাম এবং এক বিক্রেতার কাছে বিক্রি করতাম। আমার একটি মারাত্মক সংক্রমণ হওয়ার পর একজন ডাক্তার আমাকে আবর্জনার স্তূপ থেকে দূরে থাকতে বলার কারণে আমি ওই কাজ ছেড়ে দিই।"
            },
            {
                en: "Once I worked for an ice cream shop owner and sold ice cream on the beach. But I got no money in return. The owner of the shop gave me something to eat, and let me sleep in his hut at night. The work was difficult and painful.",
                bn: "একবার আমি এক আইসক্রিম দোকানের মালিকের জন্য কাজ করেছিলাম এবং সমুদ্রসৈকতে আইসক্রিম বিক্রি করেছিলাম। কিন্তু এর বিনিময়ে আমি কোনো টাকা পাইনি। দোকানের মালিক আমাকে খাওয়ার জন্য কিছু দিতেন, আর রাতে তার কুঁড়েঘরে ঘুমাতে দিতেন। কাজটি ছিল কঠিন এবং যন্ত্রণাদায়ক।"
            },
            {
                en: "The ice cream box is quite heavy when it is full. I had to walk for hours, offering my ice cream to whoever wanted to buy. There were days when I could not even sell one ice cream.",
                bn: "আইসক্রিমের বাক্সটি পূর্ণ থাকলে বেশ ভারী হয়। আমাকে ঘণ্টার পর ঘণ্টা হাঁটতে হতো, যে কিনতে চায় তাকে আইসক্রিম সেধে সেধে। এমন দিনও গেছে যেদিন আমি একটা আইসক্রিমও বিক্রি করতে পারিনি।"
            },
            {
                en: "I am always hungry, and I don't know where I will sleep the next night. I would like to live in my own home and sleep there in peace. The nights are very cold in the winter. You can die of cold in the street.",
                bn: "আমি সবসময় ক্ষুধার্ত থাকি, আর আমি জানি না পরের রাতে আমি কোথায় ঘুমাব। আমি নিজের বাড়িতে বাস করতে এবং সেখানে শান্তিতে ঘুমাতে চাই। শীতকালে রাতগুলো খুব ঠান্ডা থাকে। রাস্তায় আপনি ঠান্ডায় মারাও যেতে পারেন।"
            }
        ],
        exam: {
            mcqs: [
                { q: "How old is Amerigo?", options: ["10", "12", "13", "15"], ans: 2 },
                { q: "Why did Amerigo stop collecting trash?", options: ["He got a better job", "He suffered from a serious infection", "His mother forbade him", "The vendor cheated him"], ans: 1 },
                { q: "What did the ice cream shop owner give Amerigo in return for his work?", options: ["Money", "Clothes", "Food and a place to sleep", "Nothing"], ans: 2 },
                { q: "What is Amerigo's ultimate desire?", options: ["To eat a lot of ice cream", "To live in his own home in peace", "To go to school", "To find his father"], ans: 1 },
                { q: "The word 'starving' is closest in meaning to-", options: ["Working hard", "Sleeping", "Dying of hunger", "Crying"], ans: 2 }
            ],
            openEnded: [
                "a. Why does Amerigo live on the street?",
                "b. Describe Amerigo's experience working for the ice cream shop owner.",
                "c. What are the main sufferings of Amerigo's daily life?"
            ],
            flowChartTopic: "the hardships and experiences of Amerigo's life",
            flowChartBox1: "Living alone on the street",
            summaryPrompt: "Write a summary of Amerigo's life highlighting the struggles of street children."
        }
    },
    "u7_l2": {
        title: "Unit 7, Lesson 2: Human Rights",
        vocab: [
            { w: "Dignity", m: "মর্যাদা", s: "Honor / Respect" },
            { w: "Inalienable", m: "অহস্তান্তরযোগ্য", s: "Absolute / Untransferable" },
            { w: "Endowed", m: "প্রাপ্ত / ভূষিত", s: "Blessed / Provided" },
            { w: "Slavery", m: "দাসত্ব", s: "Bondage / Servitude" },
            { w: "Torture", m: "নির্যাতন", s: "Abuse / Cruelty" }
        ],
        chunks: [
            {
                en: "All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood.",
                bn: "সকল মানুষ স্বাধীনভাবে এবং মর্যাদা ও অধিকারের দিক থেকে সমান হয়ে জন্মগ্রহণ করে। তারা যুক্তি ও বিবেক দ্বারা ভূষিত এবং তাদের একে অপরের প্রতি ভ্রাতৃত্বের মনোভাব নিয়ে কাজ করা উচিত।"
            },
            {
                en: "Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status.",
                bn: "জাতি, বর্ণ, লিঙ্গ, ভাষা, ধর্ম, রাজনৈতিক বা অন্য কোনো মতামত, জাতীয় বা সামাজিক উৎস, সম্পত্তি, জন্ম বা অন্য কোনো মর্যাদার মতো কোনো ধরনের বৈষম্য ছাড়াই প্রত্যেকে এই ঘোষণাপত্রে উল্লেখিত সকল অধিকার ও স্বাধীনতার অধিকারী।"
            },
            {
                en: "Everyone has the right to life, liberty and security of person. No one shall be held in slavery or servitude; slavery and the slave trade shall be prohibited in all their forms.",
                bn: "প্রত্যেকেরই জীবন, স্বাধীনতা এবং ব্যক্তিগত নিরাপত্তার অধিকার রয়েছে। কাউকে দাসত্ব বা পরাধীনতায় আটকে রাখা যাবে না; দাসত্ব এবং দাস ব্যবসা তাদের সব রূপে নিষিদ্ধ করা হবে।"
            },
            {
                en: "No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment. Everyone has the right to recognition everywhere as a person before the law.",
                bn: "কাউকে নির্যাতন করা যাবে না বা নিষ্ঠুর, অমানবিক বা অবমাননাকর আচরণ বা শাস্তির শিকার করা যাবে না। আইনের চোখে ব্যক্তি হিসেবে সর্বত্র স্বীকৃতি পাওয়ার অধিকার প্রত্যেকেরই রয়েছে।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What are all human beings endowed with?", options: ["Wealth", "Reason and conscience", "Weapons", "Political power"], ans: 1 },
                { q: "What should be prohibited in all forms?", options: ["Education", "Freedom of speech", "Slavery and slave trade", "Equality"], ans: 2 },
                { q: "The word 'inalienable' means-", options: ["Transferable", "Temporary", "Cannot be taken away", "Unimportant"], ans: 2 },
                { q: "How should human beings act towards one another?", options: ["In a spirit of competition", "In a spirit of brotherhood", "With jealousy", "With superiority"], ans: 1 },
                { q: "Everyone has the right to be recognized everywhere as-", options: ["A king", "A person before the law", "A criminal", "A foreigner"], ans: 1 }
            ],
            openEnded: [
                "a. What are the basic rights a human being is born with?",
                "b. On what grounds can a person NOT be discriminated against?",
                "c. What does the text say about slavery and torture?"
            ],
            flowChartTopic: "the fundamental human rights mentioned in the text",
            flowChartBox1: "Right to be free and equal",
            summaryPrompt: "Summarize the core principles of human rights as stated in the passage."
        }
    },
    // ==========================================
    // UNIT 8: Environment and Nature
    // ==========================================
    "u8_l1": {
        title: "Unit 8, Lesson 1: Water, Water Everywhere",
        vocab: [
            { w: "Perpetual", m: "চিরস্থায়ী", s: "Continuous / Endless" },
            { w: "Stench", m: "দুর্গন্ধ", s: "Bad smell / Odor" },
            { w: "Tributary", m: "উপনদী", s: "Branch / Feeder" },
            { w: "Chronic", m: "দীর্ঘস্থায়ী / তীব্র", s: "Persistent / Severe" },
            { w: "Toxic", m: "বিষাক্ত", s: "Poisonous / Deadly" }
        ],
        chunks: [
            {
                en: "One of the sources of water in our country are the rivers. Rivers are everywhere in our life, literature, economy and culture. But are the rivers in good shape? Unfortunately, they are not. A few are already dead and several are going through the pangs of death.",
                bn: "আমাদের দেশে পানির অন্যতম উৎস হলো নদী। আমাদের জীবন, সাহিত্য, অর্থনীতি এবং সংস্কৃতিতে নদী সর্বত্র জড়িয়ে আছে। কিন্তু নদীগুলো কি ভালো অবস্থায় আছে? দুর্ভাগ্যবশত, তারা নেই। কয়েকটি নদী ইতোমধ্যে মৃত এবং বেশ কয়েকটি মৃত্যুর যন্ত্রণার মধ্য দিয়ে যাচ্ছে।"
            },
            {
                en: "The river Buriganga is an example of a dying river. A report published in the Daily Sun describes what has happened to the river Buriganga and why. Its water is polluted and a perpetual stench fills the air around it. But that is not what it was like before.",
                bn: "বুড়িগঙ্গা নদী একটি মুমূর্ষু নদীর উদাহরণ। 'ডেইলি সান' পত্রিকায় প্রকাশিত একটি প্রতিবেদনে বর্ণনা করা হয়েছে বুড়িগঙ্গা নদীর কী হয়েছে এবং কেন হয়েছে। এর পানি দূষিত এবং এর চারপাশের বাতাসে একটি চিরস্থায়ী দুর্গন্ধ ছড়িয়ে থাকে। কিন্তু নদীটি আগে এমন ছিল না।"
            },
            {
                en: "The report says that the river had a glorious past. Once it was a tributary of the mighty Ganges and flowed into the Bay of Bengal through the river Dhaleshwari. Gradually, it lost its link with the Ganges and got the name Buriganga.",
                bn: "প্রতিবেদনে বলা হয়েছে যে নদীটির একটি গৌরবময় অতীত ছিল। একসময় এটি প্রমত্ত গঙ্গার একটি উপনদী ছিল এবং ধলেশ্বরী নদীর মাধ্যমে বঙ্গোপসাগরে প্রবাহিত হতো। ধীরে ধীরে, এটি গঙ্গার সাথে তার সংযোগ হারিয়ে ফেলে এবং বুড়িগঙ্গা নাম ধারণ করে।"
            },
            {
                en: "According to newspaper report, the Buriganga is dying because of pollution. Huge quantities of toxic chemicals and wastes from mills and factories, hospitals and clinics and households and other establishments are dumped into the river every day.",
                bn: "খবরের কাগজের প্রতিবেদন অনুযায়ী, দূষণের কারণে বুড়িগঙ্গা মারা যাচ্ছে। কলকারখানা, হাসপাতাল, ক্লিনিক, বাড়িঘর এবং অন্যান্য প্রতিষ্ঠান থেকে প্রতিদিন বিপুল পরিমাণ বিষাক্ত রাসায়নিক ও বর্জ্য নদীতে ফেলা হয়।"
            },
            {
                en: "The city of Dhaka discharges about 4500 tons of solid waste every day and most of it is directly released into the Buriganga... The river would need a monster's stomach to digest all the wastes mentioned above.",
                bn: "ঢাকা শহর প্রতিদিন প্রায় ৪৫০০ টন কঠিন বর্জ্য নির্গত করে এবং এর বেশিরভাগই সরাসরি বুড়িগঙ্গায় ফেলা হয়... উপরে উল্লেখিত সব বর্জ্য হজম করার জন্য নদীটির একটি দৈত্যের পাকস্থলীর প্রয়োজন হবে।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is the Buriganga an example of?", options: ["A mighty river", "A dying river", "A clean river", "A new river"], ans: 1 },
                { q: "What fills the air around the river Buriganga?", options: ["Sweet fragrance", "Fresh breeze", "A perpetual stench", "Toxic smoke"], ans: 2 },
                { q: "Which river was the Buriganga originally a tributary of?", options: ["The Jamuna", "The Meghna", "The Padma", "The Ganges"], ans: 3 },
                { q: "How much solid waste does Dhaka city discharge every day?", options: ["20,000 tons", "4,500 tons", "10,000 tons", "1,500 tons"], ans: 1 },
                { q: "The word 'toxic' means-", options: ["Healthy", "Poisonous", "Useful", "Natural"], ans: 1 }
            ],
            openEnded: [
                "a. What has happened to the river Buriganga?",
                "b. Describe the glorious past of the Buriganga river.",
                "c. Who or what is responsible for the death of the Buriganga river?"
            ],
            flowChartTopic: "the reasons behind the death of our rivers",
            flowChartBox1: "Irresponsibility of human beings",
            summaryPrompt: "Write a summary of the passage highlighting the pollution of the Buriganga river."
        }
    },
    "u8_l2": {
        title: "Unit 8, Lesson 2: The Hakaluki Haor",
        vocab: [
            { w: "Biodiversity", m: "জীববৈচিত্র্য", s: "Variety of life" },
            { w: "Swamp", m: "জলাভূমি", s: "Marsh / Bog" },
            { w: "Aquatic", m: "জলজ", s: "Water-related" },
            { w: "Migratory", m: "পরিযায়ী / অতিথি", s: "Wandering / Travelling" },
            { w: "Poaching", m: "অবৈধ শিকার", s: "Illegal hunting" }
        ],
        chunks: [
            {
                en: "Hakaluki Haor is a rich hub of biodiversity and livelihood. It is a complex ecosystem, containing more than 238 interconnecting beels and jalmahals. The most important beels are Chatla, Pinlarkona, Dulla, Sakua, Barajalla, Balijuri, Lamba, Tekonia, Haorkhal, Tural, Baghalkuri and Chinaura.",
                bn: "হাকালুকি হাওর জীববৈচিত্র্য ও জীবনযাত্রার একটি সমৃদ্ধ কেন্দ্র। এটি একটি জটিল ইকোসিস্টেম বা বাস্তুতন্ত্র, যাতে ২৩৮টিরও বেশি পরস্পর সংযুক্ত বিল এবং জলমহাল রয়েছে। সবচেয়ে গুরুত্বপূর্ণ বিলগুলো হলো চাতলা, পিনলারকোনা, দুল্লা, সাকুয়া, বড়জাল্লা, বালিজুরি, লাম্বা, টেকোনিয়া, হাওরখাল, তুরাল, বাঘালকুড়ি এবং চিনউরা।"
            },
            {
                en: "Hakaluki Haor is bounded by the Kushiara river as well as a part of the Sonai-Bardal river to the north, by the Fenchuganj-Kulaura railway to the west and to the south, and by the Kulaura-Beanibazar road to the east.",
                bn: "হাকালুকি হাওরের উত্তরে কুশিয়ারা নদী এবং সোনাই-বরদাল নদীর একটি অংশ, পশ্চিম ও দক্ষিণে ফেঞ্চুগঞ্জ-কুলাউড়া রেলপথ এবং পূর্বে কুলাউড়া-বিয়ানীবাজার সড়ক দ্বারা বেষ্টিত।"
            },
            {
                en: "The haor had very dense swamp forests in the past, but deforestation and a lack of conservation practices have virtually destroyed this unique forest in the last two decades.",
                bn: "অতীতে এই হাওরে অত্যন্ত ঘন সোয়াম্প (জলাভূমির) বন ছিল, কিন্তু বন উজাড় এবং সংরক্ষণের অভাব গত দুই দশকে এই অনন্য বনটিকে প্রায় ধ্বংস করে দিয়েছে।"
            },
            {
                en: "The haor is a very important resting place for migratory waterfowls flying in from the north. The most interesting species is the Barheaded Goose, which is now hardly seen in fresh water wetlands. Unfortunately, illegal poaching has been a threat to the waterfowl population.",
                bn: "উত্তরাঞ্চল থেকে উড়ে আসা পরিযায়ী জলচর পাখিদের জন্য এই হাওর একটি অত্যন্ত গুরুত্বপূর্ণ বিশ্রামের জায়গা। সবচেয়ে আকর্ষণীয় প্রজাতি হলো 'বারহেডেড গুজ' (দাগিরাজহাঁস), যা এখন মিঠা পানির জলাভূমিতে খুব কমই দেখা যায়। দুর্ভাগ্যবশত, অবৈধ শিকার এই জলচর পাখিদের জন্য একটি হুমকি হয়ে দাঁড়িয়েছে।"
            }
        ],
        exam: {
            mcqs: [
                { q: "How many interconnecting beels does Hakaluki Haor contain?", options: ["More than 100", "Exactly 200", "More than 238", "Around 500"], ans: 2 },
                { q: "What destroyed the dense swamp forests of the haor?", options: ["Floods", "Deforestation and lack of conservation", "Cyclones", "Migratory birds"], ans: 1 },
                { q: "Which rare bird species is mentioned in the text?", options: ["Bald Eagle", "Barheaded Goose", "Kingfisher", "Woodpecker"], ans: 1 },
                { q: "What is a major threat to the migratory birds?", options: ["Lack of food", "Water pollution", "Illegal poaching", "Excessive heat"], ans: 2 },
                { q: "The word 'biodiversity' relates to-", options: ["Only animals", "Only plants", "Variety of plant and animal life", "Human population"], ans: 2 }
            ],
            openEnded: [
                "a. Describe the geographical boundaries of Hakaluki Haor.",
                "b. What has happened to the swamp forests of Hakaluki Haor?",
                "c. Why is Hakaluki Haor important for migratory birds, and what threatens them?"
            ],
            flowChartTopic: "the features and blessings of Hakaluki Haor",
            flowChartBox1: "Supporting rich biodiversity",
            summaryPrompt: "Write a summary of the passage focusing on the ecological importance of Hakaluki Haor."
        }
    },
    "u8_l3": {
        title: "Unit 8, Lesson 3: The Giant Panda",
        vocab: [
            { w: "Devastating", m: "ধ্বংসাত্মক", s: "Destructive / Ruinous" },
            { w: "Endangered", m: "বিপন্ন", s: "Threatened / At risk" },
            { w: "Habitat", m: "বাসস্থান", s: "Home / Environment" },
            { w: "Curtail", m: "হ্রাস করা", s: "Reduce / Cut back" },
            { w: "Encroachment", m: "অনধিকার প্রবেশ", s: "Intrusion / Invasion" }
        ],
        chunks: [
            {
                en: "Though they are one of the most beloved animal species on Earth, pandas aren't safe from the devastating effects of climate change. According to a new study, projected temperature increases in China over the next century will likely seriously hinder bamboo, almost the sole source of food for endangered pandas.",
                bn: "যদিও তারা পৃথিবীর অন্যতম প্রিয় প্রাণী প্রজাতি, জলবায়ু পরিবর্তনের ধ্বংসাত্মক প্রভাব থেকে পান্ডারা নিরাপদ নয়। একটি নতুন সমীক্ষা অনুসারে, আগামী শতাব্দীতে চীনে অনুমিত তাপমাত্রা বৃদ্ধি বাঁশের বৃদ্ধিতে মারাত্মকভাবে বাধাগ্রস্ত করবে, যা বিপন্ন পান্ডাদের প্রায় একমাত্র খাদ্যের উৎস।"
            },
            {
                en: "Ninety-nine percent of a panda's diet is bamboo and an adult panda needs around 38 kilograms of bamboo every day. Only if bamboo can move to new habitats at higher elevations will pandas stand a chance of survival, the researchers said.",
                bn: "একটি পান্ডার খাদ্যের নিরানব্বই শতাংশ হলো বাঁশ এবং একটি প্রাপ্তবয়স্ক পান্ডার প্রতিদিন প্রায় ৩৮ কিলোগ্রাম বাঁশ প্রয়োজন। গবেষকরা বলেছেন, শুধুমাত্র বাঁশ যদি উচ্চতর স্থানে নতুন বাসস্থানে স্থানান্তরিত হতে পারে, তবেই পান্ডাদের বেঁচে থাকার সুযোগ থাকবে।"
            },
            {
                en: "Human activities have already severely limited the animals' habitats, and their dependence on a single source of food, one that is not that nutrient- or energy-rich, doesn't help.",
                bn: "মানুষের কার্যকলাপ ইতোমধ্যে প্রাণীগুলোর বাসস্থানকে মারাত্মকভাবে সীমিত করে ফেলেছে, এবং খাদ্যের একক উৎসের উপর তাদের নির্ভরতা, যা ততটা পুষ্টিকর বা শক্তি-সমৃদ্ধ নয়, মোটেও সহায়ক নয়।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is almost the sole source of food for pandas?", options: ["Leaves", "Fruits", "Bamboo", "Fish"], ans: 2 },
                { q: "How much bamboo does an adult panda need every day?", options: ["20 kilograms", "38 kilograms", "50 kilograms", "10 kilograms"], ans: 1 },
                { q: "What is the major threat to bamboo growth in China?", options: ["Insects", "Deforestation", "Temperature increases due to climate change", "Soil erosion"], ans: 2 },
                { q: "What percentage of a panda's diet consists of bamboo?", options: ["50%", "75%", "90%", "99%"], ans: 3 },
                { q: "The word 'devastating' means-", options: ["Constructive", "Destructive", "Positive", "Beautiful"], ans: 1 }
            ],
            openEnded: [
                "a. Why are pandas considered an endangered species?",
                "b. How is climate change affecting the pandas' food source?",
                "c. What must happen for pandas to survive in the future?"
            ],
            flowChartTopic: "steps that should be taken to save pandas",
            flowChartBox1: "Moving bamboo to new habitats",
            summaryPrompt: "Write a summary of the passage highlighting the threats faced by giant pandas."
        }
    },
    "u8_l4": {
        title: "Unit 8, Lesson 4: Threats to Tigers of Mangrove Forest",
        vocab: [
            { w: "Brunt", m: "প্রধান ধাক্কা / ধকল", s: "Main force / Impact" },
            { w: "Retreat", m: "পিছিয়ে যাওয়া", s: "Withdraw / Recede" },
            { w: "Vulnerability", m: "ঝুঁকিপূর্ণতা", s: "Susceptibility / Weakness" },
            { w: "Extinction", m: "বিলুপ্তি", s: "Wiping out / Dying out" },
            { w: "Anthropogenic", m: "মানুষের সৃষ্ট", s: "Human-caused" }
        ],
        chunks: [
            {
                en: "A vast mangrove forest shared by Bangladesh and India that is home to possibly 500 Bengal tigers is being rapidly destroyed by erosion, rising sea levels and storm surges, according to a major study...",
                bn: "বাংলাদেশ ও ভারতের অংশীদারি একটি বিশাল ম্যানগ্রোভ বন, যা সম্ভবত ৫০০ বেঙ্গল টাইগারের আবাসস্থল, তা ভাঙন, সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি এবং জলোচ্ছ্বাসের কারণে দ্রুত ধ্বংস হয়ে যাচ্ছে, একটি প্রধান গবেষণা অনুযায়ী..."
            },
            {
                en: "The Sundarbans forest took the brunt of super cyclone Sidr in 2007, but new satellite studies show that 71% of the forested coastline is retreating by as much as 200 metres a year. If erosion continues at this pace, already threatened tiger populations living in the forests will be put further at risk.",
                bn: "২০০৭ সালে সুন্দরবন সুপার সাইক্লোন সিডরের প্রধান ধাক্কা সামলেছিল, কিন্তু নতুন স্যাটেলাইট গবেষণায় দেখা গেছে যে বনাঞ্চলযুক্ত উপকূলরেখার ৭১% বছরে ২০০ মিটার পর্যন্ত পিছিয়ে যাচ্ছে। যদি ভাঙন এই গতিতে চলতে থাকে, তবে বনে বসবাসকারী ইতোমধ্যে হুমকির মুখে থাকা বাঘের সংখ্যা আরও ঝুঁকির মধ্যে পড়বে।"
            },
            {
                en: "The causes for increasing coastline retreat, other than direct anthropogenic ones, include increased frequency of storm surges and other extreme natural events, rises in sea-level and increased salinity which increases the vulnerability of mangroves.",
                bn: "উপকূলরেখা পিছিয়ে যাওয়ার ক্রমবর্ধমান কারণগুলোর মধ্যে প্রত্যক্ষ মানুষের সৃষ্ট কারণগুলো ছাড়াও রয়েছে জলোচ্ছ্বাস এবং অন্যান্য চরম প্রাকৃতিক ঘটনার বর্ধিত হার, সমুদ্রপৃষ্ঠের উচ্চতা বৃদ্ধি এবং বর্ধিত লবণাক্ততা, যা ম্যানগ্রোভের দুর্বলতা বাড়ায়।"
            }
        ],
        exam: {
            mcqs: [
                { q: "How many Bengal tigers are estimated to live in the Sundarbans according to the text?", options: ["1000", "500", "200", "300"], ans: 1 },
                { q: "What took the brunt of super cyclone Sidr in 2007?", options: ["Dhaka city", "The Sundarbans", "Cox's Bazar", "Kuakata"], ans: 1 },
                { q: "At what rate is the forested coastline retreating?", options: ["50 metres a year", "100 metres a year", "As much as 200 metres a year", "10 metres a year"], ans: 2 },
                { q: "What does the word 'anthropogenic' mean?", options: ["Natural", "Animal-made", "Human-caused", "Scientific"], ans: 2 },
                { q: "Which of the following increases the vulnerability of mangroves?", options: ["Heavy rainfall", "Increased salinity", "Planting more trees", "Fresh water"], ans: 1 }
            ],
            openEnded: [
                "a. What are the main natural threats destroying the Sundarbans?",
                "b. What will be the consequence if the erosion continues at the current pace?",
                "c. What does Sarah Christie say about the extinction of tigers?"
            ],
            flowChartTopic: "the threats to the Sundarbans and its tigers",
            flowChartBox1: "Rapid destruction by erosion",
            summaryPrompt: "Write a summary of the passage focusing on the environmental threats to the Sundarbans."
        }
    },
    "u8_l5": {
        title: "Unit 8, Lesson 5: Kuakata: Daughter of the Sea",
        vocab: [
            { w: "Picturesque", m: "ছবির মতো সুন্দর", s: "Scenic / Beautiful" },
            { w: "Shimmering", m: "ঝিকমিক করা", s: "Gleaming / Glistening" },
            { w: "Indigenous", m: "দেশীয় / আদিবাসী", s: "Native / Local" },
            { w: "Expelled", m: "বিতাড়িত", s: "Driven out / Banished" },
            { w: "Heritage", m: "ঐতিহ্য", s: "Tradition / Legacy" }
        ],
        chunks: [
            {
                en: "Kuakata, locally known as Sagar Kannya (Daughter of the Sea) is a rare scenic spot located on the southernmost tip of Bangladesh. Kuakata in Latachapli union under Kalapara Police Station of Patuakhali district is about 30 km in length and 6 km in breadth.",
                bn: "স্থানীয়ভাবে সাগর কন্যা নামে পরিচিত কুয়াকাটা, বাংলাদেশের একেবারে দক্ষিণ প্রান্তে অবস্থিত একটি বিরল মনোরম স্থান। পটুয়াখালী জেলার কলাপাড়া থানার অন্তর্গত লতাচাপলী ইউনিয়নে অবস্থিত কুয়াকাটা দৈর্ঘ্যে প্রায় ৩০ কিমি এবং প্রস্থে ৬ কিমি।"
            },
            {
                en: "The name Kuakata takes its origin from the story of a 'Kua'-or well-dug on the sea shore by the early Rakhaine settlers for collecting drinking water. The Rakhaines had landed on Kuakata coast after being expelled from Arakan by the Mughals.",
                bn: "প্রাথমিক রাখাইন বসতি স্থাপনকারীদের দ্বারা পানীয় জল সংগ্রহের জন্য সমুদ্রের তীরে খনন করা একটি 'কূয়া' বা কূপের গল্প থেকে কুয়াকাটা নামের উৎপত্তি হয়েছে। মোগলদের দ্বারা আরাকান থেকে বিতাড়িত হওয়ার পর রাখাইনরা কুয়াকাটা উপকূলে এসে নেমেছিল।"
            },
            {
                en: "Kuakata is one of the unique spots which allow a visitor to watch both the sunrise and the sunset from the beach. That perhaps makes Kuakata one of the world's most attractive beaches.",
                bn: "কুয়াকাটা সেই অনন্য স্থানগুলোর মধ্যে একটি যা একজন দর্শনার্থীকে সৈকত থেকে সূর্যোদয় এবং সূর্যাস্ত উভয়ই দেখার সুযোগ দেয়। সম্ভবত এটিই কুয়াকাটাকে বিশ্বের অন্যতম আকর্ষণীয় সৈকতে পরিণত করেছে।"
            },
            {
                en: "Kuakata is also a sanctuary for migratory winter birds. Fishing boats plying in the Bay of Bengal with colourful sails, surfing waves and everything here touches every visitor's heart. Kuakata is truly a virgin beach and a sanctuary for migratory winter birds.",
                bn: "কুয়াকাটা পরিযায়ী শীতের পাখিদের জন্য একটি অভয়াশ্রমও বটে। বঙ্গোপসাগরে রঙিন পাল তুলে চলা মাছ ধরার নৌকা, সার্ফিং ঢেউ এবং এখানকার সবকিছু প্রত্যেক দর্শনার্থীর হৃদয় ছুঁয়ে যায়। কুয়াকাটা সত্যি একটি অক্ষত সৈকত এবং শীতের পরিযায়ী পাখিদের অভয়াশ্রম।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does the name 'Sagar Kannya' mean?", options: ["Mother of the Sea", "Queen of the Sea", "Daughter of the Sea", "Beauty of the Sea"], ans: 2 },
                { q: "Where does the name Kuakata originate from?", options: ["From a tree", "From a well (kua) dug by Rakhaine settlers", "From a mountain", "From a local king"], ans: 1 },
                { q: "What makes Kuakata a unique beach?", options: ["Its length", "Its location", "It allows watching both sunrise and sunset", "Its hotels"], ans: 2 },
                { q: "Where had the Rakhaines been expelled from?", options: ["Myanmar", "Arakan", "Dhaka", "Chittagong"], ans: 1 },
                { q: "Kuakata is a sanctuary for-", options: ["Tigers", "Wild elephants", "Migratory winter birds", "Crocodiles"], ans: 2 }
            ],
            openEnded: [
                "a. Where is Kuakata located?",
                "b. What is the historical origin of the name 'Kuakata'?",
                "c. Why is Kuakata considered one of the world's most attractive beaches?"
            ],
            flowChartTopic: "the attractive features of Kuakata",
            flowChartBox1: "Offering both sunrise and sunset views",
            summaryPrompt: "Write a summary of the scenic beauty and historical background of Kuakata."
        }
    },

    // ==========================================
    // UNIT 9: Myths and Literature
    // ==========================================
    "u9_l1": {
        title: "Unit 9, Lesson 1: Bengal's Face",
        vocab: [
            { w: "Behold", m: "তাকানো / দেখা", s: "See / Observe" },
            { w: "Roost", m: "পাখির বাসা / বিশ্রাম নেওয়া", s: "Settle / Rest" },
            { w: "Incomparable", m: "অতুলনীয়", s: "Matchless / Unrivaled" },
            { w: "Waning", m: "ক্ষয়িষ্ণু", s: "Fading / Decreasing" },
            { w: "Desolate", m: "নির্জন / একাকী", s: "Lonely / Deserted" }
        ],
        chunks: [
            {
                en: "Because I have seen Bengal's face I will seek no more;\nThe world has not anything more beautiful to show me.\nWaking up in darkness, gazing at the fig-tree, I behold\nDawn's swallows roosting under huge umbrella-like leaves.",
                bn: "যেহেতু আমি বাংলার মুখ দেখেছি, আমি আর খুঁজব না;\nপৃথিবীর আমাকে দেখানোর মতো আর সুন্দর কিছু নেই।\nঅন্ধকারে জেগে উঠে, ডুমুর গাছের দিকে তাকিয়ে, আমি দেখি\nভোরের দোয়েল পাখিগুলো বিশাল ছাতার মতো পাতার নিচে বিশ্রাম নিচ্ছে।"
            },
            {
                en: "I look around me\nAnd discover a leafy dome-Jam, Kanthal, Bat, Hijol and Aswatha trees\nAll in a hush, shadowing clumps of cactus and zedoary bushes.\nWhen long, long ago, Chand came in his honeycombed boat\nTo a blue Hijal, Bat and Tamal shade near the Champa, he too sighted\nBengal's incomparable beauty.",
                bn: "আমি আমার চারপাশে তাকাই\nএবং আবিষ্কার করি একটি পাতাময় গম্বুজ- জাম, কাঁঠাল, বট, হিজল এবং অশ্বত্থ গাছ\nসব শান্ত হয়ে আছে, ক্যাকটাস এবং শটি ঝোপের উপর ছায়া ফেলছে।\nযখন অনেক অনেক আগে, চাঁদ সওদাগর তার মৌচাকের মতো নৌকায় করে\nচম্পার কাছে একটি নীল হিজল, বট এবং তমালের ছায়ায় এসেছিলেন, তিনিও দেখেছিলেন\nবাংলার অতুলনীয় সৌন্দর্য।"
            },
            {
                en: "One day, alas. In the Ganguri,\nOn a raft, as the waning moon sank on the river's sandbanks,\nBehula too saw countless aswaths bats besides golden rice fields\nAnd heard the thrush's soft song. One day, arriving in Amara,\nWhere gods held court, when she danced like a desolate wagtail,\nBengal's rivers, fields, flowers, wailed like strings of bells on her feet.",
                bn: "একদিন, হায়! গাঙ্গুর নদী দিয়ে,\nএকটি ভেলায় করে, যখন ক্ষয়িষ্ণু চাঁদ নদীর বালুচরে ডুবে যাচ্ছিল,\nবেহুলাও সোনালী ধানের ক্ষেতের পাশে অসংখ্য অশ্বত্থ ও বট গাছ দেখেছিল\nএবং শ্যামা পাখির নরম গান শুনেছিল। একদিন, অমরাবতীতে পৌঁছে,\nযেখানে দেবতারা আদালত বসিয়েছিলেন, যখন সে একটি নিঃসঙ্গ খঞ্জন পাখির মতো নেচেছিল,\nবাংলার নদী, মাঠ, ফুল তার পায়ের ঘুঙুরের মতো কেঁদে উঠেছিল।"
            }
        ],
        exam: {
            mcqs: [
                { q: "Why will the poet seek no more?", options: ["He is tired", "He has seen Bengal's beautiful face", "He is old", "He has no money"], ans: 1 },
                { q: "What does the poet behold in the darkness?", options: ["Ghosts", "Dawn's swallows roosting under leaves", "A river", "A boat"], ans: 1 },
                { q: "Which mythological figure is mentioned as sailing in a honeycombed boat?", options: ["Hercules", "Orpheus", "Chand Saudagar", "Gazi Pir"], ans: 2 },
                { q: "Where did Behula dance like a desolate wagtail?", options: ["In the Ganguri", "In Paris", "In Amara (heaven)", "In a field"], ans: 2 },
                { q: "The word 'incomparable' means-", options: ["Ordinary", "Matchless", "Ugly", "Cheap"], ans: 1 }
            ],
            openEnded: [
                "a. What makes the poet feel that the world has nothing more beautiful to show him?",
                "b. How does the poet connect the story of Chand Saudagar and Behula to the beauty of Bengal?",
                "c. Describe the natural scenery the poet sees around him."
            ],
            flowChartTopic: "the natural elements of Bengal mentioned in the poem",
            flowChartBox1: "Fig-trees and dawn's swallows",
            summaryPrompt: "Write a summary of Jibanananda Das's poem highlighting the eternal beauty of Bengal."
        }
    },
    "u9_l2": {
        title: "Unit 9, Lesson 2: Orpheus",
        vocab: [
            { w: "Muse", m: "শিল্পকলার দেবী", s: "Goddess of art/music" },
            { w: "Withstand", m: "প্রতিহত করা", s: "Resist / Hold out against" },
            { w: "Mortal", m: "মরণশীল মানুষ", s: "Human being" },
            { w: "Tame", m: "পোষ মানানো", s: "Domesticate / Soften" },
            { w: "Relax", m: "শিথিল করা", s: "Loosen / Soften" }
        ],
        chunks: [
            {
                en: "Orpheus was the son of Apollo and the Muse Calliope. He was presented by his father with a lyre and taught to play upon it, which he did to such perfection that nothing could withstand the charm of his music.",
                bn: "অরফিয়াস ছিলেন দেবতা অ্যাপোলো এবং শিল্পকলার দেবী ক্যালিওপের পুত্র। তার পিতা তাকে একটি লায়ার (বীণাজাতীয় বাদ্যযন্ত্র) উপহার দিয়েছিলেন এবং সেটি বাজানো শিখিয়েছিলেন, যা সে এত নিখুঁতভাবে বাজাত যে তার সঙ্গীতের মোহ কেউ প্রতিহত করতে পারত না।"
            },
            {
                en: "Not only his fellow-mortals, but wild animals were softened by his music. The very trees and rocks were charmed by him. The former crowded around him and the latter relaxed somewhat of their hardness, softened by his notes.",
                bn: "শুধু তার সঙ্গী মরণশীল মানুষই নয়, বন্য প্রাণীরাও তার সঙ্গীতে নমনীয় হয়ে যেত। এমনকী গাছপালা এবং পাথরও তার দ্বারা মুগ্ধ হতো। গাছগুলো তার চারপাশে ভিড় করত এবং পাথরগুলো তাদের কঠোরতা কিছুটা শিথিল করত, তার সুরের ছোঁয়ায় নরম হয়ে যেত।"
            }
        ],
        exam: {
            mcqs: [
                { q: "Who were Orpheus's parents?", options: ["Zeus and Hera", "Apollo and Calliope", "Hercules and Megara", "Gazi and Behula"], ans: 1 },
                { q: "What instrument did Orpheus play?", options: ["A flute", "A piano", "A lyre", "A drum"], ans: 2 },
                { q: "How did wild animals react to Orpheus's music?", options: ["They attacked him", "They ran away", "They were softened and tamed", "They went to sleep"], ans: 2 },
                { q: "What did the trees do when Orpheus played?", options: ["Shed their leaves", "Crowded around him", "Fell down", "Produced fruits"], ans: 1 },
                { q: "The word 'withstand' means-", options: ["Resist", "Accept", "Enjoy", "Destroy"], ans: 0 }
            ],
            openEnded: [
                "a. Who was Orpheus and what gift did he receive?",
                "b. Describe the magical power of Orpheus's music.",
                "c. How did nature (trees and rocks) react to his notes?"
            ],
            flowChartTopic: "the magical impact of Orpheus's music",
            flowChartBox1: "Fellow mortals could not withstand the charm",
            summaryPrompt: "Write a brief summary of the myth of Orpheus and his musical power."
        }
    },
    "u9_l3": {
        title: "Unit 9, Lesson 3: The Legend of Gazi",
        vocab: [
            { w: "Miracle", m: "অলৌকিক ঘটনা", s: "Wonder / Magic" },
            { w: "Docile", m: "বাধ্য / শান্ত", s: "Obedient / Tame" },
            { w: "Depict", m: "চিত্রিত করা", s: "Portray / Describe" },
            { w: "Vigilant", m: "সতর্ক", s: "Watchful / Alert" },
            { w: "Predatory", m: "শিকারী", s: "Hunting / Carnivorous" }
        ],
        chunks: [
            {
                en: "According to some myths and legends, Gazi Pir was a Muslim saint who is said to have spread Islam in the parts of Bengal close to the Sunderbans. He was credited with many miracles. For example, he could supposedly calm dangerous animals and make them docile.",
                bn: "কিছু কল্পকাহিনি এবং কিংবদন্তি অনুসারে, গাজী পীর ছিলেন একজন মুসলিম সাধক যিনি সুন্দরবনের কাছাকাছি বাংলার বিভিন্ন অংশে ইসলাম প্রচার করেছিলেন বলে বলা হয়। তাকে অনেক অলৌকিক ক্ষমতার কৃতিত্ব দেওয়া হয়েছিল। উদাহরণস্বরূপ, ধারণা করা হয় যে তিনি বিপজ্জনক প্রাণীদের শান্ত এবং বাধ্য করতে পারতেন।"
            },
            {
                en: "He is usually depicted in paats or scroll paintings riding a fierce-looking Bengal tiger, a snake in his hand, but in no apparent danger.",
                bn: "সাধারণত তাকে পট বা স্ক্রল পেইন্টিংয়ে একটি হিংস্র দেখতে বেঙ্গল টাইগারের পিঠে চড়ে থাকা অবস্থায় চিত্রিত করা হয়, তার হাতে একটি সাপ থাকে, কিন্তু তার চোখেমুখে কোনো বিপদের ছাপ থাকে না।"
            },
            {
                en: "According to some stories, he also fought crocodiles who threatened the people of a region full of canals and creeks, indeed, a kind of watery jungle bordering the Bay of Bengal. Because of his alert and vigilant presence, all predatory animals were said to have been kept within bounds.",
                bn: "কিছু গল্প অনুসারে, তিনি কুমিরের সাথেও লড়াই করেছিলেন যারা খাল ও ছোট নদীতে পূর্ণ একটি অঞ্চলের মানুষদের হুমকি দিত, যা প্রকৃতপক্ষে বঙ্গোপসাগরের সীমান্তবর্তী এক ধরনের জলজ জঙ্গল ছিল। তার সতর্ক উপস্থিতির কারণে সব শিকারী প্রাণী সীমানার মধ্যে আটকে থাকত বলে বলা হতো।"
            }
        ],
        exam: {
            mcqs: [
                { q: "Where did Gazi Pir primarily spread Islam?", options: ["Dhaka", "Chittagong", "Parts of Bengal close to the Sunderbans", "Rajshahi"], ans: 2 },
                { q: "How is Gazi Pir usually depicted in scroll paintings?", options: ["Riding an elephant", "Riding a fierce-looking Bengal tiger", "Flying in the sky", "Sailing a boat"], ans: 1 },
                { q: "What miracle was Gazi Pir credited with?", options: ["He could fly", "He could walk on water", "He could calm dangerous animals", "He could make gold"], ans: 2 },
                { q: "What does the word 'docile' mean?", options: ["Wild", "Dangerous", "Obedient and tame", "Fierce"], ans: 2 },
                { q: "What kind of animals did he keep within bounds?", options: ["Domestic animals", "Predatory animals", "Birds", "Insects"], ans: 1 }
            ],
            openEnded: [
                "a. Who was Gazi Pir according to local myths?",
                "b. How is Gazi Pir portrayed in traditional art?",
                "c. Why did the villagers pray to him for protection?"
            ],
            flowChartTopic: "the miraculous activities of Gazi Pir",
            flowChartBox1: "Spreading Islam near the Sundarbans",
            summaryPrompt: "Write a summary of the legend of Gazi Pir and his supernatural abilities."
        }
    },
    "u9_l4": {
        title: "Unit 9, Lesson 4: Hercules",
        vocab: [
            { w: "Undergo", m: "অভিজ্ঞতা লাভ করা / সহ্য করা", s: "Experience / Endure" },
            { w: "Slay", m: "হত্যা করা", s: "Kill / Murder" },
            { w: "Tactic", m: "কৌশল", s: "Strategy / Method" },
            { w: "Immense", m: "বিশাল / প্রচুর", s: "Huge / Massive" },
            { w: "Immortal", m: "অমর", s: "Undying / Eternal" }
        ],
        chunks: [
            {
                en: "Hercules was the son of Jupiter and Alcmena. Eurystheus, the King of Mycenae and his cousin, made him undergo some difficult tasks, which are known in Greek myths as the 'twelve labours of Hercules.'",
                bn: "হারকিউলিস ছিলেন জুপিটার এবং অ্যালকমেনার পুত্র। মাইসেনির রাজা এবং তার চাচাতো ভাই ইউরিসথিউস তাকে কিছু কঠিন কাজ করতে বাধ্য করেছিলেন, যা গ্রিক পুরাণে 'হারকিউলিসের বারোটি কাজ' (twelve labours) হিসেবে পরিচিত।"
            },
            {
                en: "The first involved a fight with a lion. The valley of Nemea was being disturbed by a terrible lion and so Eurystheus ordered Hercules to slay the beast and bring him his skin. At first, Hercules tried to fight the lion with his club and arrows but this took him nowhere.",
                bn: "প্রথম কাজটি ছিল একটি সিংহের সাথে লড়াই। নিমিয়া উপত্যকা একটি ভয়ানক সিংহ দ্বারা উপদ্রুত হচ্ছিল এবং তাই ইউরিসথিউস হারকিউলিসকে প্রাণীটিকে হত্যা করে তার চামড়া নিয়ে আসার নির্দেশ দেন। প্রথমে হারকিউলিস তার গদা ও তীর দিয়ে সিংহের সাথে লড়াই করার চেষ্টা করেছিলেন কিন্তু তাতে কোনো কাজ হয়নি।"
            },
            {
                en: "Then Hercules attempted a different tactic: he decided he would use his hands. He thus managed to slay the animal on his own, relying entirely on his immense strength. Victorious, he returned to Mycenae carrying the dead lion on his shoulders.",
                bn: "তারপর হারকিউলিস একটি ভিন্ন কৌশল অবলম্বন করলেন: তিনি সিদ্ধান্ত নিলেন যে তিনি তার হাত ব্যবহার করবেন। এভাবেই তিনি সম্পূর্ণ নিজের বিশাল শক্তির উপর নির্ভর করে একা প্রাণীটিকে হত্যা করতে সক্ষম হন। বিজয়ী হয়ে তিনি মৃত সিংহটিকে কাঁধে বয়ে নিয়ে মাইসেনিতে ফিরে আসেন।"
            },
            {
                en: "His next task was to slay a monster called Hydra that was ravaging the country of Argos. The Hydra had nine heads, of which the middle one was said to be immortal. Our hero struck off its heads with his club, but whenever he knocked off a head, two new ones erupted in its place.",
                bn: "তার পরবর্তী কাজ ছিল হাইড্রা নামের একটি দানবকে হত্যা করা যা আর্গোস দেশটিকে ধ্বংস করছিল। হাইড্রার নয়টি মাথা ছিল, যার মাঝখানেরটিকে অমর বলে মনে করা হতো। আমাদের নায়ক তার গদা দিয়ে এর মাথাগুলো কেটে ফেললেন, কিন্তু যখনই তিনি একটি মাথা কেটে ফেলতেন, তার জায়গায় দুটি নতুন মাথা গজিয়ে উঠত।"
            },
            {
                en: "Eventually with the help of his devoted servant Iolaus, Hercules succeeded in burning all the heads of the Hydra except the ninth or immortal one, which he decided to bury under a huge rock. In other words, Hercules triumphed again...",
                bn: "অবশেষে তার অনুগত ভৃত্য আইওলাসের সাহায্যে, হারকিউলিস নবম বা অমর মাথাটি ছাড়া হাইড্রার সমস্ত মাথা পুড়িয়ে ফেলতে সক্ষম হন, আর নবম মাথাটিকে তিনি একটি বিশাল পাথরের নিচে চাপা দেওয়ার সিদ্ধান্ত নেন। অন্য কথায়, হারকিউলিস আবারও বিজয়ী হন..."
            }
        ],
        exam: {
            mcqs: [
                { q: "Who forced Hercules to undergo the 'twelve labours'?", options: ["Jupiter", "Alcmena", "Eurystheus", "Iolaus"], ans: 2 },
                { q: "What was Hercules's first task?", options: ["Killing the Hydra", "Slaying the Nemean lion", "Finding gold", "Building a bridge"], ans: 1 },
                { q: "How did Hercules finally kill the lion?", options: ["With arrows", "With his club", "With his bare hands", "With poison"], ans: 2 },
                { q: "How many heads did the monster Hydra have?", options: ["Three", "Seven", "Nine", "Twelve"], ans: 2 },
                { q: "What happened when Hercules cut off one of the Hydra's heads?", options: ["The monster died", "Two new heads erupted", "The head flew away", "It turned into stone"], ans: 1 }
            ],
            openEnded: [
                "a. What are the 'twelve labours of Hercules'?",
                "b. How did Hercules defeat the Nemean lion?",
                "c. Describe the monster Hydra and how Hercules defeated it."
            ],
            flowChartTopic: "the heroic deeds of Hercules",
            flowChartBox1: "Ordered to perform twelve difficult tasks",
            summaryPrompt: "Write a summary of Hercules's legendary battles with the lion and the Hydra."
        }
    }, 
    // ==========================================
    // UNIT 10: Dreams
    // ==========================================
    "u10_l1": {
        title: "Unit 10, Lesson 1: What is a Dream?",
        vocab: [
            { w: "Fascinate", m: "মুগ্ধ করা", s: "Attract / Charm" },
            { w: "Empirical", m: "প্রয়োগমূলক / বাস্তবভিত্তিক", s: "Practical / Experimental" },
            { w: "Baffling", m: "বিভ্রান্তিকর", s: "Confusing / Puzzling" },
            { w: "Unravel", m: "জট খোলা / সমাধান করা", s: "Solve / Untangle" },
            { w: "Incorporate", m: "অন্তর্ভুক্ত করা", s: "Include / Integrate" }
        ],
        chunks: [
            {
                en: "Dreams have fascinated philosophers for thousands of years, but only recently have dreams been subjected to empirical research and scientific study. Chances are that you've often found yourself puzzling over the content of a dream, or perhaps you've wondered why you dream at all.",
                bn: "হাজার হাজার বছর ধরে স্বপ্ন দার্শনিকদের মুগ্ধ করেছে, তবে কেবল সম্প্রতি স্বপ্নগুলোকে বাস্তবভিত্তিক গবেষণা এবং বৈজ্ঞানিক অধ্যয়নের বিষয় করা হয়েছে। এমন হওয়ার সম্ভাবনা রয়েছে যে আপনি প্রায়শই কোনো স্বপ্নের বিষয়বস্তু নিয়ে নিজেকে বিভ্রান্ত হতে দেখেছেন, অথবা হয়তো আপনি ভেবেছেন যে আপনি আদৌ স্বপ্ন কেন দেখেন।"
            },
            {
                en: "First, let's start by answering a basic question: What is a dream? A dream can include any of the images, thoughts and emotions that are experienced during sleep. Dreams can be extraordinarily vivid or very vague; filled with joyful emotions or frightening images.",
                bn: "প্রথমে, একটি মৌলিক প্রশ্নের উত্তর দিয়ে শুরু করা যাক: স্বপ্ন কী? একটি স্বপ্নে ঘুমন্ত অবস্থায় অনুভূত যেকোনো চিত্র, চিন্তাভাবনা এবং আবেগ অন্তর্ভুক্ত থাকতে পারে। স্বপ্ন অসাধারণভাবে প্রাণবন্ত বা খুব অস্পষ্ট হতে পারে; আনন্দদায়ক আবেগে বা ভীতিকর চিত্রে পূর্ণ হতে পারে।"
            },
            {
                en: "Why do we dream? What purpose do dreams serve? While many theories have been proposed, no consensus has emerged. Considering the time we spend in a dreaming state, the fact that researchers do not yet understand the purpose of dreams may seem baffling.",
                bn: "আমরা কেন স্বপ্ন দেখি? স্বপ্ন কোন উদ্দেশ্য পূরণ করে? যদিও অনেক তত্ত্ব প্রস্তাব করা হয়েছে, কোনো ঐকমত্য তৈরি হয়নি। আমরা স্বপ্ন দেখার অবস্থায় যে সময় ব্যয় করি তা বিবেচনা করলে, গবেষকরা এখনও স্বপ্নের উদ্দেশ্য বুঝতে পারেননি- এই বিষয়টি বিভ্রান্তিকর মনে হতে পারে।"
            },
            {
                en: "Some researchers suggest that dreams serve no real purpose, while others believe that dreaming is essential to mental, emotional and physical well-being. Next, let's learn more about some of the most prominent dream theories.",
                bn: "কিছু গবেষক মনে করেন যে স্বপ্ন কোনো বাস্তব উদ্দেশ্য পূরণ করে না, আবার অন্যরা বিশ্বাস করেন যে মানসিক, মানসিক এবং শারীরিক সুস্থতার জন্য স্বপ্ন দেখা অপরিহার্য। এরপর চলুন সবচেয়ে বিশিষ্ট কয়েকটি স্বপ্নতত্ত্ব সম্পর্কে আরও কিছু জানা যাক।"
            }
        ],
        exam: {
            mcqs: [
                { q: "How long have dreams fascinated philosophers?", options: ["A few decades", "Hundreds of years", "Thousands of years", "Since the 20th century"], ans: 2 },
                { q: "What can a dream include according to the text?", options: ["Only frightening images", "Images, thoughts, and emotions", "Only vague ideas", "Physical actions"], ans: 1 },
                { q: "What does the word 'baffling' mean?", options: ["Clear", "Puzzling and confusing", "Scientific", "Helpful"], ans: 1 },
                { q: "What is the consensus among researchers about the purpose of dreams?", options: ["It helps us sleep", "It predicts the future", "There is no consensus yet", "It has no purpose"], ans: 2 },
                { q: "Some researchers believe dreaming is essential for-", options: ["Predicting the future", "Mental, emotional, and physical well-being", "Digestive health", "Remembering the past"], ans: 1 }
            ],
            openEnded: [
                "a. What is the definition of a dream according to the passage?",
                "b. Why does the writer say that our lack of understanding of dreams is 'baffling'?",
                "c. What are the two contrasting views researchers hold regarding the purpose of dreams?"
            ],
            flowChartTopic: "the characteristics and mysteries of dreams",
            flowChartBox1: "Including images, thoughts, and emotions",
            summaryPrompt: "Write a summary of the passage focusing on the mystery and definitions of dreams."
        }
    },
    "u10_l2": {
        title: "Unit 10, Lesson 2: I Have a Dream",
        vocab: [
            { w: "Oppression", m: "নিপীড়ন", s: "Persecution / Cruelty" },
            { w: "Oasis", m: "মরূদ্যান (শান্তির জায়গা)", s: "Haven / Refuge" },
            { w: "Vicious", m: "হিংস্র / দুষ্ট", s: "Cruel / Brutal" },
            { w: "Exalted", m: "উন্নত / মহিমান্বিত", s: "Elevated / Glorified" },
            { w: "Symphony", m: "ঐকতান / সুরের মিলন", s: "Harmony / Melody" }
        ],
        chunks: [
            {
                en: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident; that all men are created equal.'",
                bn: "আমার একটি স্বপ্ন আছে যে, একদিন এই জাতি জেগে উঠবে এবং তার মূলমন্ত্রের প্রকৃত অর্থ নিয়ে বাঁচবে: 'আমরা এই সত্যগুলোকে স্বতঃসিদ্ধ বলে মনে করি; যে সব মানুষকে সমানভাবে সৃষ্টি করা হয়েছে।'"
            },
            {
                en: "I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.",
                bn: "আমার একটি স্বপ্ন আছে যে, একদিন জর্জিয়ার লাল পাহাড়ে, প্রাক্তন দাসদের সন্তান এবং প্রাক্তন দাস মালিকদের সন্তানরা একসঙ্গে ভ্রাতৃত্বের টেবিলে বসতে সক্ষম হবে।"
            },
            {
                en: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
                bn: "আমার একটি স্বপ্ন আছে যে, আমার চার ছোট সন্তান একদিন এমন একটি দেশে বাস করবে যেখানে তাদের গায়ের রঙ দিয়ে বিচার করা হবে না, বরং তাদের চরিত্রের গুণাবলী দিয়ে বিচার করা হবে।"
            },
            {
                en: "I have a dream today. I have a dream that one day down in Alabama, with its vicious racists... little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers.",
                bn: "আজ আমার একটি স্বপ্ন আছে। আমার একটি স্বপ্ন আছে যে, একদিন আলাবামায়, এর হিংস্র বর্ণবাদীদের মাঝেও... ছোট কৃষ্ণাঙ্গ ছেলে এবং মেয়েরা ছোট শ্বেতাঙ্গ ছেলে এবং মেয়েদের সাথে ভাই-বোন হিসেবে হাত মেলাতে সক্ষম হবে।"
            },
            {
                en: "With this faith we will be able to transform the jangling discords of our nation into a beautiful symphony of brotherhood. With this faith we will be able to work together, to pray together, to struggle together...",
                bn: "এই বিশ্বাস নিয়ে আমরা আমাদের জাতির কর্কশ বিরোধগুলোকে ভ্রাতৃত্বের একটি সুন্দর ঐকতানে রূপান্তর করতে সক্ষম হব। এই বিশ্বাস নিয়ে আমরা একসঙ্গে কাজ করতে, একসঙ্গে প্রার্থনা করতে, একসঙ্গে সংগ্রাম করতে সক্ষম হব..."
            }
        ],
        exam: {
            mcqs: [
                { q: "Who gave the famous 'I have a dream' speech?", options: ["Nelson Mandela", "Abraham Lincoln", "Martin Luther King Jr.", "George Washington"], ans: 2 },
                { q: "What does the speaker want his children to be judged by?", options: ["Their skin color", "Their wealth", "Their education", "The content of their character"], ans: 3 },
                { q: "What does the word 'creed' mean in the passage?", options: ["A system of religious or guiding belief", "A type of song", "A race of people", "A state law"], ans: 0 },
                { q: "Where does the speaker hope the sons of former slaves and slave owners will sit together?", options: ["In the parliament", "At the table of brotherhood", "In the court of law", "In Alabama"], ans: 1 },
                { q: "What does the speaker want to transform the 'jangling discords' into?", options: ["A political party", "A beautiful symphony of brotherhood", "A strict law", "A new nation"], ans: 1 }
            ],
            openEnded: [
                "a. What is the 'true meaning of its creed' mentioned in the speech?",
                "b. What is Martin Luther King Jr.'s dream regarding his four little children?",
                "c. How does the speaker describe the future relationship between black and white children in Alabama?"
            ],
            flowChartTopic: "the key elements of Martin Luther King Jr.'s dream",
            flowChartBox1: "Living out the true meaning of equality",
            summaryPrompt: "Write a summary of Martin Luther King Jr.'s dream for a discrimination-free America."
        }
    },

    // ==========================================
    // UNIT 11: Diaspora
    // ==========================================
    "u11_l1": {
        title: "Unit 11, Lesson 1: What is Diaspora?",
        vocab: [
            { w: "Diaspora", m: "দেশত্যাগ / প্রবাস", s: "Migration / Dispersion" },
            { w: "Settlement", m: "বসতি", s: "Colony / Community" },
            { w: "Ravaged", m: "বিধ্বস্ত", s: "Devastated / Ruined" },
            { w: "Phenomenon", m: "ঘটনা / ব্যাপার", s: "Occurrence / Incident" },
            { w: "Noteworthy", m: "লক্ষণীয়", s: "Significant / Remarkable" }
        ],
        chunks: [
            {
                en: "The term 'diaspora' is used to refer to people who have left their homelands and settled in other parts of the world, either because they were forced to do so or because they wanted to leave on their own.",
                bn: "'ডায়াস্পোরা' শব্দটি ব্যবহার করা হয় সেইসব লোকদের বোঝাতে যারা তাদের মাতৃভূমি ছেড়ে বিশ্বের অন্যান্য অংশে বসতি স্থাপন করেছে, হয় তাদের বাধ্য করা হয়েছিল অথবা তারা নিজেদের ইচ্ছায় দেশ ছেড়েছিল।"
            },
            {
                en: "The word is increasingly used for such people as a collective group and/or a community. The world has seen many diasporas but scholars have been studying the phenomenon with great interest only in recent decades.",
                bn: "শব্দটি ক্রমবর্ধমানভাবে এই ধরনের লোকদের একটি যৌথ গোষ্ঠী এবং/অথবা একটি সম্প্রদায় হিসেবে বোঝাতে ব্যবহৃত হচ্ছে। বিশ্ব অনেক ডায়াস্পোরা দেখেছে তবে পণ্ডিতরা কেবল সাম্প্রতিক দশকগুলোতে খুব আগ্রহের সাথে এই ঘটনাটি অধ্যয়ন করছেন।"
            },
            {
                en: "Among the great diasporas of history is that of the Jewish people, who were forced to leave their lands in ancient times. The movement of Aryans from Central Europe to the Indian sub-continent thousands of years ago is also a noteworthy diaspora.",
                bn: "ইতিহাসের বড় ডায়াস্পোরাগুলোর মধ্যে একটি হলো ইহুদি সম্প্রদায়ের ডায়াস্পোরা, যাদের প্রাচীনকালে তাদের মাতৃভূমি ত্যাগ করতে বাধ্য করা হয়েছিল। হাজার হাজার বছর আগে মধ্য ইউরোপ থেকে ভারতীয় উপমহাদেশে আর্যদের চলাচলও একটি লক্ষণীয় ডায়াস্পোরা।"
            },
            {
                en: "In twentieth century history, the Palestinian diaspora has attracted a lot of attention and been a cause of concern for world leaders because of the plight of Palestinians. There have been massive diasporas in Africa, too, over the centuries.",
                bn: "বিংশ শতাব্দীর ইতিহাসে ফিলিস্তিনি ডায়াস্পোরা প্রচুর মনোযোগ আকর্ষণ করেছে এবং ফিলিস্তিনিদের দুর্দশার কারণে বিশ্ব নেতাদের জন্য উদ্বেগের কারণ হয়ে দাঁড়িয়েছে। কয়েক শতাব্দী ধরে আফ্রিকাতেও বিশাল ডায়াস্পোরা ঘটেছে।"
            },
            {
                en: "But the chief reason why the phenomenon of diaspora is attracting so much attention now is globalization.",
                bn: "কিন্তু এখন ডায়াস্পোরা ঘটনাটি এত বেশি মনোযোগ আকর্ষণ করার প্রধান কারণ হলো বিশ্বায়ন।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What does the term 'diaspora' mean?", options: ["People who stay in their homeland", "People who have left their homelands", "Tourists visiting a country", "Ancient kings"], ans: 1 },
                { q: "Which diaspora is mentioned as happening in ancient times due to force?", options: ["The Aryan diaspora", "The African diaspora", "The Jewish diaspora", "The Palestinian diaspora"], ans: 2 },
                { q: "Where did the Aryans migrate to?", options: ["Africa", "Central Europe", "The Indian sub-continent", "America"], ans: 2 },
                { q: "Which 20th-century diaspora has been a major cause of concern for world leaders?", options: ["The Jewish diaspora", "The British diaspora", "The Palestinian diaspora", "The Roman diaspora"], ans: 2 },
                { q: "What is the chief reason diaspora is attracting so much attention nowadays?", options: ["War", "Globalization", "Poverty", "Climate change"], ans: 1 }
            ],
            openEnded: [
                "a. How does the passage define the term 'diaspora'?",
                "b. Give two historical examples of massive diasporas mentioned in the text.",
                "c. Why has the Palestinian diaspora attracted world attention?"
            ],
            flowChartTopic: "the major diasporas mentioned in history",
            flowChartBox1: "The Jewish people forced to leave their lands",
            summaryPrompt: "Write a summary of the passage explaining the concept and historical examples of diaspora."
        }
    },

    // ==========================================
    // UNIT 12: Peace and Conflict
    // ==========================================
    "u12_l1": {
        title: "Unit 12, Lesson 1: Conflict",
        vocab: [
            { w: "Conflict", m: "দ্বন্দ্ব / সংঘাত", s: "Disagreement / Clash" },
            { w: "Clash", m: "সংঘর্ষ", s: "Fight / Argument" },
            { w: "Interpersonal", m: "ব্যক্তিগত / আন্তঃব্যক্তিক", s: "Between persons" },
            { w: "Intrapersonal", m: "অন্তঃব্যক্তিক (নিজের ভেতরের)", s: "Within oneself" },
            { w: "Resolution", m: "সমাধান", s: "Solution / Settlement" }
        ],
        chunks: [
            {
                en: "Conflict can be described as a disagreement among groups or individuals characterized by antagonism and hostility. This is usually fueled by the opposition of one party to another, in an attempt to reach an objective different from that of the other party.",
                bn: "দ্বন্দ্বকে ব্যক্তি বা গোষ্ঠীগুলোর মধ্যে একটি মতবিরোধ হিসেবে বর্ণনা করা যেতে পারে যা শত্রুতা ও বিদ্বেষ দ্বারা চিহ্নিত। এটি সাধারণত এক পক্ষের দ্বারা অন্য পক্ষের বিরোধিতার মাধ্যমে উসকে ওঠে, অন্য পক্ষের থেকে আলাদা কোনো উদ্দেশ্যে পৌঁছানোর চেষ্টায়।"
            },
            {
                en: "The elements involved in the conflict have varied sets of principles and values, thus allowing such a conflict to arise. Conflict can be defined in many ways but one of the simplest is that it pertains to the opposing ideas and actions of different entities.",
                bn: "দ্বন্দ্বে জড়িত উপাদানগুলোর নীতি এবং মূল্যবোধের ভিন্নতা থাকে, যা এমন দ্বন্দ্বের জন্ম দেয়। দ্বন্দ্বকে অনেকভাবে সংজ্ঞায়িত করা যায়, কিন্তু সবচেয়ে সহজ একটি হলো এটি বিভিন্ন সত্তার বিরোধী চিন্তাভাবনা এবং কর্মের সাথে সম্পর্কিত।"
            },
            {
                en: "Conflict is an inevitable part of life. All of us possess our own opinions, ideas and sets of beliefs. We have our own ways of looking at things and we act according to what we think is proper.",
                bn: "দ্বন্দ্ব জীবনের একটি অনিবার্য অংশ। আমাদের সকলেরই নিজস্ব মতামত, ধারণা এবং বিশ্বাসের নিজস্ব সেট রয়েছে। জিনিসগুলোকে দেখার আমাদের নিজস্ব উপায় আছে এবং আমরা যা সঠিক মনে করি সে অনুযায়ী কাজ করি।"
            },
            {
                en: "Hence, we often find ourselves in conflict in different scenarios; it may involve other individuals, groups of people, or a struggle within our own selves. Consequently, conflict influences our actions and decisions in one way or another.",
                bn: "অতএব, আমরা প্রায়শই বিভিন্ন পরিস্থিতিতে নিজেদেরকে দ্বন্দ্বে জড়াতে দেখি; এতে অন্যান্য ব্যক্তি, মানুষের গোষ্ঠী বা আমাদের নিজেদের ভেতরের একটি সংগ্রাম জড়িত থাকতে পারে। ফলস্বরূপ, দ্বন্দ্ব কোনো না কোনোভাবে আমাদের কাজ এবং সিদ্ধান্তগুলোকে প্রভাবিত করে।"
            },
            {
                en: "There are three main types of conflict: Intrapersonal conflict (occurs within an individual), Interpersonal conflict (occurs between two individuals), and Intragroup conflict (occurs among individuals within a team).",
                bn: "দ্বন্দ্বের প্রধান তিনটি ধরন রয়েছে: ইন্ট্রাপারসোনাল কনফ্লিক্ট বা অন্তঃব্যক্তিক দ্বন্দ্ব (একজন ব্যক্তির নিজের ভেতরে ঘটে), ইন্টারপারসোনাল কনফ্লিক্ট বা আন্তঃব্যক্তিক দ্বন্দ্ব (দুইজন ব্যক্তির মধ্যে ঘটে), এবং ইন্ট্রাগ্রুপ কনফ্লিক্ট বা আন্তঃদলীয় দ্বন্দ্ব (একটি দলের ভেতরের ব্যক্তিদের মধ্যে ঘটে)।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is conflict characterized by?", options: ["Love and harmony", "Antagonism and hostility", "Peace and quiet", "Agreement"], ans: 1 },
                { q: "Why is conflict considered an inevitable part of life?", options: ["Because people like to fight", "Because people have different opinions, ideas, and beliefs", "Because of political leaders", "Because of lack of education"], ans: 1 },
                { q: "What type of conflict occurs within a person's own mind?", options: ["Intragroup conflict", "Intergroup conflict", "Intrapersonal conflict", "Interpersonal conflict"], ans: 2 },
                { q: "The word 'inevitable' means-", options: ["Unavoidable", "Unnecessary", "Dangerous", "Temporary"], ans: 0 },
                { q: "Interpersonal conflict occurs between-", options: ["Two nations", "Two teams", "Two individuals", "A person and their own mind"], ans: 2 }
            ],
            openEnded: [
                "a. How is conflict defined in the passage?",
                "b. Why do people find themselves in conflict in different scenarios?",
                "c. Briefly describe the three main types of conflict mentioned in the text."
            ],
            flowChartTopic: "the definition and nature of conflict",
            flowChartBox1: "Disagreement among groups or individuals",
            summaryPrompt: "Write a summary of the passage explaining the concept and types of conflict."
        }
    },
    // ==========================================
    // UNIT 13: Art and Music
    // ==========================================
    "u13_l1": {
        title: "Unit 13, Lesson 1: What is Beauty?",
        vocab: [
            { w: "Appreciate", m: "কদর করা / উপলব্ধি করা", s: "Value / Admire" },
            { w: "Repulsion", m: "বিকর্ষণ / ঘৃণা", s: "Disgust / Distaste" },
            { w: "Manifest", m: "প্রকাশ করা", s: "Show / Exhibit" },
            { w: "Ugliness", m: "কদর্যতা / কুৎসিত রূপ", s: "Unattractiveness / Hideousness" },
            { w: "Incorporate", m: "অন্তর্ভুক্ত করা", s: "Include / Blend" }
        ],
        chunks: [
            {
                en: "Beauty is easy to appreciate but difficult to define. As we look around, we discover beauty in pleasurable objects and sights—in nature, in the laughter of children, in the kindness of strangers.",
                bn: "সৌন্দর্যের কদর করা সহজ কিন্তু সংজ্ঞায়িত করা কঠিন। আমরা যখন চারপাশে তাকাই, তখন আনন্দদায়ক বস্তু এবং দৃশ্যে সৌন্দর্য আবিষ্কার করি—প্রকৃতিতে, শিশুদের হাসিতে, অপরিচিতদের দয়ায়।"
            },
            {
                en: "But asked to define, we run into difficulties. Does beauty have an independent objective identity? Is it universal, or is it dependent on our sense perceptions? Does it lie in the eye of the beholder?",
                bn: "কিন্তু সংজ্ঞায়িত করতে বলা হলে, আমরা অসুবিধায় পড়ি। সৌন্দর্যের কি কোনো স্বাধীন বস্তুনিষ্ঠ পরিচয় আছে? এটি কি সর্বজনীন, নাকি আমাদের ইন্দ্রিয়ের উপলব্ধির উপর নির্ভরশীল? এটি কি দর্শকের চোখের ওপর নির্ভর করে?"
            },
            {
                en: "Thus there will arise a further difficulty when beauty manifests itself not only by its presence, but by its absence as well, as when we are repulsed by ugliness and desire beauty.",
                bn: "সুতরাং আরও একটি অসুবিধা দেখা দেবে যখন সৌন্দর্য কেবল তার উপস্থিতির দ্বারাই নয়, তার অনুপস্থিতির দ্বারাও নিজেকে প্রকাশ করে, যেমন যখন আমরা কদর্যতা দ্বারা বিকর্ষিত হই এবং সৌন্দর্য কামনা করি।"
            },
            {
                en: "But then ugliness has as much a place in our lives as beauty, or maybe more—as when there is widespread hunger and injustice in a society. Philosophers have told us that beauty is an important part of life, but isn't ugliness a part of life too?",
                bn: "কিন্তু তারপর আমাদের জীবনে সৌন্দর্যের মতোই কদর্যতারও স্থান রয়েছে, বা হয়তো আরও বেশি—যেমন যখন সমাজে ব্যাপক ক্ষুধা এবং অবিচার থাকে। দার্শনিকরা আমাদের বলেছেন যে সৌন্দর্য জীবনের একটি গুরুত্বপূর্ণ অংশ, কিন্তু কদর্যতাও কি জীবনের অংশ নয়?"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is easy to appreciate but difficult to define?", options: ["Truth", "Art", "Beauty", "Music"], ans: 2 },
                { q: "Where do we discover beauty according to the passage?", options: ["Only in museums", "In nature and pleasurable objects", "In wealth", "In books"], ans: 1 },
                { q: "What happens when we are repulsed by ugliness?", options: ["We desire beauty", "We become sad", "We close our eyes", "We ignore it"], ans: 0 },
                { q: "The phrase 'lies in the eye of the beholder' implies that beauty is-", options: ["Objective", "Subjective", "Scientific", "Physical"], ans: 1 },
                { q: "According to the passage, what has as much a place in our lives as beauty?", options: ["Wealth", "Ugliness", "Fame", "Power"], ans: 1 }
            ],
            openEnded: [
                "a. Why does the writer say that beauty is difficult to define?",
                "b. How does beauty manifest itself by its absence?",
                "c. What examples of 'ugliness' in society does the passage mention?"
            ],
            flowChartTopic: "the nature and perception of beauty",
            flowChartBox1: "Easy to appreciate but difficult to define",
            summaryPrompt: "Write a summary of the passage highlighting the philosophical questions about beauty and ugliness."
        }
    },
    "u13_l2": {
        title: "Unit 13, Lesson 2: Folk Music",
        vocab: [
            { w: "Sophisticated", m: "অত্যাধুনিক / মার্জিত", s: "Advanced / Refined" },
            { w: "Mystic", m: "মরমী / আধ্যাত্মিক", s: "Spiritual / Occult" },
            { w: "Secular", m: "ধর্মনিরপেক্ষ", s: "Worldly / Non-religious" },
            { w: "Prolific", m: "বিপুল সৃষ্টিকারী", s: "Productive / Creative" },
            { w: "Instrument", m: "বাদ্যযন্ত্র", s: "Device / Tool" }
        ],
        chunks: [
            {
                en: "Folk music consists of songs and music of a community that are uninfluenced by any sophisticated musical rules or any standard music styles. Bangladesh has a heritage of rich folk music which includes both religious and secular songs.",
                bn: "লোকসংগীত এমন একটি সম্প্রদায়ের গান এবং সুর নিয়ে গঠিত যা কোনো অত্যাধুনিক সংগীতের নিয়ম বা মানসম্পন্ন সংগীত শৈলী দ্বারা প্রভাবিত নয়। বাংলাদেশের একটি সমৃদ্ধ লোকসংগীতের ঐতিহ্য রয়েছে যার মধ্যে ধর্মীয় এবং ধর্মনিরপেক্ষ উভয় প্রকার গানই অন্তর্ভুক্ত।"
            },
            {
                en: "Folk music may be described as that type of ancient music which springs from the heart of a community, based on their natural style of expression uninfluenced by the rules of classical music and modern popular songs.",
                bn: "লোকসংগীতকে এমন ধরনের প্রাচীন সংগীত হিসেবে বর্ণনা করা যেতে পারে যা ধ্রুপদী সংগীত এবং আধুনিক জনপ্রিয় গানের নিয়ম দ্বারা প্রভাবিত না হয়ে একটি সম্প্রদায়ের নিজস্ব স্বাভাবিক মত প্রকাশের শৈলীর ওপর ভিত্তি করে তাদের হৃদয় থেকে উৎসারিত হয়।"
            },
            {
                en: "In Bangladesh folk music has great variety, with songs being composed on the culture, festivals, views of life, natural beauty, rivers and rural and riverine life. These songs are also about social inequality and poverty, about the material world and the supernatural.",
                bn: "বাংলাদেশে লোকসংগীতের দারুণ বৈচিত্র্য রয়েছে, যেখানে সংস্কৃতি, উৎসব, জীবনবোধ, প্রাকৃতিক সৌন্দর্য, নদী এবং গ্রামীণ ও নদীমাতৃক জীবনের ওপর গান রচিত হয়। এই গানগুলো সামাজিক বৈষম্য ও দারিদ্র্য, বস্তুগত জগত এবং অতিপ্রাকৃত বিষয় নিয়েও রচিত।"
            },
            {
                en: "The Baul songs are a mixture of Vaishnavism and Sufism. The most prolific builder of Baul tradition was Lalon Fakir. Folk music often uses simple traditional instruments like the Ektara, Dotara, Dhol, and Bashi.",
                bn: "বাউল গান হলো বৈষ্ণববাদ এবং সুফিবাদের একটি মিশ্রণ। বাউল ঐতিহ্যের সবচেয়ে বড় রূপকার ছিলেন লালন ফকির। লোকসংগীতে প্রায়শই একতারা, দোতারা, ঢোল এবং বাঁশির মতো সাধারণ ঐতিহ্যবাহী বাদ্যযন্ত্র ব্যবহার করা হয়।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What is folk music completely uninfluenced by?", options: ["Local culture", "Sophisticated musical rules", "Villagers", "Nature"], ans: 1 },
                { q: "Where does folk music spring from?", options: ["Music schools", "The heart of a community", "The cities", "Royal courts"], ans: 1 },
                { q: "Who was the most prolific builder of the Baul tradition?", options: ["Hasan Raja", "Shah Abdul Karim", "Lalon Fakir", "Hason Raja"], ans: 2 },
                { q: "The word 'secular' means-", options: ["Religious", "Holy", "Non-religious or worldly", "Spiritual"], ans: 2 },
                { q: "Which of the following is a common traditional instrument in folk music?", options: ["Guitar", "Ektara", "Piano", "Violin"], ans: 1 }
            ],
            openEnded: [
                "a. How does the passage define folk music?",
                "b. What are the common themes of folk music in Bangladesh?",
                "c. Name some traditional instruments used in folk music."
            ],
            flowChartTopic: "the characteristics of folk music",
            flowChartBox1: "Springs from the heart of a community",
            summaryPrompt: "Write a summary of the passage highlighting the features and themes of folk music in Bangladesh."
        }
    },

    // ==========================================
    // UNIT 14: Tours and Travels
    // ==========================================
    "u14_l1": {
        title: "Unit 14, Lesson 1: Arriving in the Orient",
        vocab: [
            { w: "Fascination", m: "তীব্র আকর্ষণ", s: "Charm / Attraction" },
            { w: "Picturesque", m: "ছবির মতো সুন্দর", s: "Scenic / Beautiful" },
            { w: "Teeming", m: "জনাকীর্ণ / পরিপূর্ণ", s: "Crowded / Swarming" },
            { w: "Exotic", m: "অপরিচিত কিন্তু আকর্ষণীয়", s: "Foreign / Unusual" },
            { w: "Mingle", m: "মিশ্রিত হওয়া", s: "Mix / Blend" }
        ],
        chunks: [
            {
                en: "Travelling has always been a source of fascination for human beings. The thrill of exploring unknown lands, meeting exotic people, and discovering new cultures drives people to cross oceans and mountains.",
                bn: "ভ্রমণ সবসময়ই মানুষের জন্য তীব্র আকর্ষণের উৎস। অজানা ভূমি অন্বেষণ, অপরিচিত আকর্ষণীয় মানুষের সাথে সাক্ষাত এবং নতুন সংস্কৃতি আবিষ্কারের রোমাঞ্চ মানুষকে সমুদ্র এবং পাহাড় পাড়ি দিতে তাড়িত করে।"
            },
            {
                en: "When a traveler from the West arrives in the Orient, the first impression is usually one of overwhelming sensory overload. The colors are brighter, the sounds are louder, and the air is filled with the scent of spices and street food.",
                bn: "যখন পাশ্চাত্যের কোনো পর্যটক প্রাচ্যে (এশিয়ায়) পৌঁছায়, তখন তার প্রথম অনুভূতিটি সাধারণত অত্যাধিক ইন্দ্রিয়গত বোঝার মতো হয়। রংগুলো অনেক উজ্জ্বল, শব্দগুলো অনেক উচ্চস্বরের, এবং বাতাস মশলা ও রাস্তার খাবারের গন্ধে ভরা থাকে।"
            },
            {
                en: "The teeming streets of an Asian city offer a stark contrast to the structured and quiet avenues of a European capital. Here, life spills out onto the pavements. Vendors shout their wares, rickshaws honk, and people mingle in a chaotic yet harmonious dance of daily survival.",
                bn: "এশিয়ান শহরের জনাকীর্ণ রাস্তাগুলো ইউরোপীয় রাজধানীর সুশৃঙ্খল এবং শান্ত রাস্তাগুলোর সম্পূর্ণ বিপরীত চিত্র উপস্থাপন করে। এখানে, জীবন ফুটপাতে উপচে পড়ে। বিক্রেতারা চিৎকার করে তাদের পণ্য বিক্রি করে, রিকশা হর্ন বাজায়, এবং মানুষ দৈনন্দিন অস্তিত্বের এক বিশৃঙ্খল অথচ সুমধুর নৃত্যে মিশে যায়।"
            }
        ],
        exam: {
            mcqs: [
                { q: "What drives people to cross oceans and mountains?", options: ["Desire for money", "The thrill of exploring unknown lands", "Political reasons", "Health issues"], ans: 1 },
                { q: "What is a Western traveler's first impression of the Orient?", options: ["Silence", "Overwhelming sensory overload", "Emptiness", "Boredom"], ans: 1 },
                { q: "What fills the air in an Oriental city?", options: ["Industrial smoke", "The scent of spices and street food", "Snow", "Perfume"], ans: 1 },
                { q: "The word 'teeming' means-", options: ["Empty", "Clean", "Crowded and swarming", "Dangerous"], ans: 2 },
                { q: "How does the passage describe the daily life on Asian streets?", options: ["A chaotic yet harmonious dance", "A structured system", "A silent movie", "A battlefield"], ans: 0 }
            ],
            openEnded: [
                "a. Why has travelling always been a fascination for human beings?",
                "b. What are the sensory experiences of a traveler arriving in the Orient?",
                "c. How do the streets of an Asian city differ from a European capital?"
            ],
            flowChartTopic: "the experience of a Western traveler in the Orient",
            flowChartBox1: "Overwhelming sensory overload",
            summaryPrompt: "Write a summary of the passage focusing on the contrast between Western and Oriental city life."
        }
    },

    // ==========================================
    // UNIT 15: Science and Technology
    // ==========================================
    "u15_l1": {
        title: "Unit 15, Lesson 1: Great Scientific Achievements",
        vocab: [
            { w: "Illuminated", m: "আলোকিত", s: "Lit up / Brightened" },
            { w: "Unprecedented", m: "নজিরবিহীন", s: "Unmatched / Unparalleled" },
            { w: "Implant", m: "শরীরে স্থাপন করা", s: "Insert / Embed" },
            { w: "Orbit", m: "কক্ষপথ", s: "Path / Course" },
            { w: "Miniature", m: "ক্ষুদ্রাকার", s: "Tiny / Small-scale" }
        ],
        chunks: [
            {
                en: "We human beings tend to forget how far we have come as a species in a relatively short period of time. It was only in the 1870s when we had the first house illuminated with electricity. Cars just started to become available 100 years ago.",
                bn: "তুলনামূলকভাবে অল্প সময়ের মধ্যে প্রজাতি হিসেবে আমরা কতদূর এসেছি, মানুষ হিসেবে আমরা তা ভুলে যাওয়ার প্রবণতা দেখাই। মাত্র ১৮৭০-এর দশকে আমরা প্রথম বিদ্যুতের আলোয় আলোকিত বাড়ি পেয়েছিলাম। গাড়ি মাত্র ১০০ বছর আগে সহজলভ্য হতে শুরু করেছিল।"
            },
            {
                en: "Charles Lindbergh made the first trans-Atlantic flight in 1927, and televisions didn't become widely available until after World War II. In other words, the advances humankind has made in a short period of time are truly unprecedented.",
                bn: "চার্লস লিন্ডবার্গ ১৯২৭ সালে প্রথম আটলান্টিক মহাসাগর পাড়ি দেওয়া ফ্লাইট পরিচালনা করেন, এবং দ্বিতীয় বিশ্বযুদ্ধের পর পর্যন্ত টেলিভিশন ব্যাপকভাবে সহজলভ্য হয়নি। অন্য কথায়, অল্প সময়ের মধ্যে মানবজাতি যে অগ্রগতি করেছে তা সত্যিই নজিরবিহীন।"
            },
            {
                en: "Perhaps no single invention has changed the modern world more than the microchip or integrated circuit. Before its invention, computers were massive, room-sized machines. The microchip allowed for the creation of personal computers, smartphones, and the internet.",
                bn: "সম্ভবত মাইক্রোচিপ বা ইন্টিগ্রেটেড সার্কিটের চেয়ে অন্য কোনো একক আবিষ্কার আধুনিক বিশ্বকে বেশি পরিবর্তন করতে পারেনি। এটি আবিষ্কারের আগে, কম্পিউটারগুলো বিশাল, একটি রুমের আকারের মেশিন ছিল। মাইক্রোচিপ ব্যক্তিগত কম্পিউটার, স্মার্টফোন এবং ইন্টারনেট তৈরির পথ প্রশস্ত করেছে।"
            },
            {
                en: "Another miracle of modern science is the artificial heart. There is nothing that piques the interest of a human being quite as much as the prospect of living a longer life. Implanting a mechanical pump in a human chest to keep a person alive was once science fiction, but it is reality today.",
                bn: "আধুনিক বিজ্ঞানের আরেকটি অলৌকিক ঘটনা হলো কৃত্রিম হৃৎপিণ্ড। দীর্ঘজীবী হওয়ার সম্ভাবনার মতো আর কোনো কিছুই মানুষের আগ্রহকে এতটা জাগিয়ে তোলে না। একজন মানুষকে বাঁচিয়ে রাখার জন্য মানুষের বুকে একটি যান্ত্রিক পাম্প স্থাপন করা একসময় কল্পবিজ্ঞান ছিল, কিন্তু আজ এটি বাস্তব।"
            }
        ],
        exam: {
            mcqs: [
                { q: "When was the first house illuminated with electricity?", options: ["1927", "1870s", "1900s", "After World War II"], ans: 1 },
                { q: "Who made the first trans-Atlantic flight?", options: ["Wright Brothers", "Charles Lindbergh", "Albert Einstein", "Neil Armstrong"], ans: 1 },
                { q: "What single invention allowed for the creation of personal computers and smartphones?", options: ["The artificial heart", "The Television", "The microchip", "The lightbulb"], ans: 2 },
                { q: "The word 'unprecedented' means-", options: ["Common", "Never done or known before", "Expected", "Slow"], ans: 1 },
                { q: "What is described as a 'miracle of modern science' in the text?", options: ["The car", "The television", "The artificial heart", "The airplane"], ans: 2 }
            ],
            openEnded: [
                "a. Mention three early scientific achievements mentioned in the first paragraph.",
                "b. How did the invention of the microchip change the world of computers?",
                "c. Why is the artificial heart considered a scientific miracle?"
            ],
            flowChartTopic: "the great scientific achievements of the modern era",
            flowChartBox1: "Illuminating houses with electricity",
            summaryPrompt: "Write a summary of the passage emphasizing the rapid scientific advancements made by humans."
        }
    };
    
