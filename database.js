/* database.js - The Master Database for Part A (Seen Texts) */

const unitData = {
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
                {
                    q: "What is the closest meaning of the word 'sophisticated'?",
                    options: ["Complex and advanced", "Primitive", "Simple", "Artificial"],
                    ans: 0
                },
                {
                    q: "According to the passage, what is the Central Processing Unit (CPU) compared to?",
                    options: ["A car's engine", "The human brain", "A racing circuit", "A computer monitor"],
                    ans: 1
                },
                {
                    q: "Which organ is the word 'visible' associated with?",
                    options: ["Ear", "Nose", "Eyes", "Skin"],
                    ans: 2
                },
                {
                    q: "Michael Schumacher is mentioned as a symbol of-",
                    options: ["A reckless pedestrian", "An artificial machine", "A high-speed racing driver", "A traffic policeman"],
                    ans: 2
                },
                {
                    q: "What finally differentiates a human being from a computer?",
                    options: ["Physical strength", "Speed", "Conscience", "Artificial Intelligence"],
                    ans: 2
                }
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
    }
};
