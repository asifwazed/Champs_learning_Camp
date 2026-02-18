/* database.js - The Brain of Champ's Camp */

const unitData = {
    "u1": {
        title: "Nelson Mandela",
        sub: "Unit 1 • Lesson 1",
        // The Reading Text (English & Bangla)
        text: [
            {
                en: "Nelson Mandela guided South Africa from the shackles of apartheid to a multi-racial democracy, as an icon of peace and reconciliation who came to embody the struggle for justice around the world.",
                bn: "নেলসন ম্যান্ডেলা দক্ষিণ আফ্রিকাকে বর্ণবাদের শিকল থেকে মুক্ত করে একটি বহু-জাতিগত গণতন্ত্রের দিকে পরিচালিত করেছিলেন, শান্তি ও পুনর্মিলনের প্রতীক হিসেবে।"
            },
            {
                en: "Imprisoned for nearly three decades for his fight against white minority rule, Mandela never lost his resolve to fight for his people's emancipation.",
                bn: "সংখ্যালঘু শ্বেতাঙ্গ শাসনের বিরুদ্ধে সংগ্রামের জন্য প্রায় তিন দশক কারাবন্দী থেকেও, ম্যান্ডেলা তার জনগণের মুক্তির সংগ্রামের সংকল্প কখনও হারাননি।"
            }
        ],
        // Vocabulary List
        vocab: [
            { w: "Apartheid", m: "বর্ণবৈষম্য", s: "Discrimination" },
            { w: "Shackles", m: "শিকল", s: "Chains" },
            { w: "Emancipation", m: "মুক্তি", s: "Liberation" },
            { w: "Reconciliation", m: "পুনর্মিলন", s: "Reunion" },
            { w: "Resolve", m: "সংকল্প", s: "Determination" }
        ],
        // Exam Data
        exam: {
            mcq: [
                { q: "1. What does 'apartheid' refer to?", opts: ["Discrimination", "Distance", "Dialogue"], ans: 0 },
                { q: "2. How long was Mandela imprisoned?", opts: ["Two decades", "Nearly 30 years", "Five years"], ans: 1 },
                { q: "3. In 1993, Mandela was awarded the...", opts: ["Nobel Peace Prize", "Oscar", "Gold Medal"], ans: 0 },
                { q: "4. Synonym of 'Emancipation' is:", opts: ["Bondage", "Liberation", "Slavery"], ans: 1 },
                { q: "5. Mandela is an icon of:", opts: ["War", "Peace", "Anger"], ans: 1 }
            ],
            written: [
                "Q1: Why is Nelson Mandela called an 'icon of peace'? (2 Marks)",
                "Q2: What do you understand by 'shackles of apartheid'? (2 Marks)",
                "Q3: Write a summary of the text in your own words. (5 Marks)"
            ]
        }
    },

    "u2": {
        title: "Traffic Education",
        sub: "Unit 2 • Lesson 1 & Poem",
        text: [
            {
                en: "When you are in the driving seat of a car, you have the steering and the horn in your hands... But, behind all, there is something that keeps working unseen. And that is the Central Processing Unit (CPU), your brain.",
                bn: "যখন আপনি গাড়ির ড্রাইভিং সিটে থাকেন... সবকিছুর আড়ালে এমন কিছু থাকে যা অদৃশ্যে কাজ করে। আর সেটি হলো সিপিইউ (CPU), বা আপনার মস্তিষ্ক।"
            },
            {
                en: "The Poem: Amidst killer speeds I stand, Facing the traffic, stretching my hand. I am seen on kids' books and as cartoons everywhere...",
                bn: "কবিতা: ঘাতক গতির মাঝে আমি দাঁড়িয়ে থাকি, ট্রাফিকের মুখোমুখি, হাত বাড়িয়ে। আমাকে শিশুদের বইয়ে এবং কার্টুনে সব জায়গায় দেখা যায়..."
            }
        ],
        vocab: [
            { w: "Sophisticated", m: "জটিল/আধুনিক", s: "Complex/Refined" },
            { w: "Stuttering", m: "তোতলানো", s: "Faltering" },
            { w: "Erratic", m: "অনিয়মিত", s: "Unpredictable" },
            { w: "Plight", m: "দুর্দশা", s: "Suffering" },
            { w: "Coordination", m: "সমন্বয়", s: "Harmony" }
        ],
        exam: {
            mcq: [
                { q: "1. 'Sophisticated' means:", opts: ["Primitive", "Refined", "Simple"], ans: 1 },
                { q: "2. 'Killer speeds' implies:", opts: ["Dangerous driving", "Fast runners", "Speedboats"], ans: 0 },
                { q: "3. The traffic police stands:", opts: ["Sitting down", "Amidst traffic", "In office"], ans: 1 },
                { q: "4. Dhaka's traffic loss per year:", opts: ["$3.8 Billion", "$1 Million", "Zero"], ans: 0 },
                { q: "5. The brain is compared to:", opts: ["CPU", "Monitor", "Mouse"], ans: 0 }
            ],
            written: [
                "Q1: Why is the human brain compared to a CPU? (2 Marks)",
                "Q2: Describe the suffering of the Traffic Police. (2 Marks)",
                "Q3: Flow Chart: Make a flow chart showing the difficulties of a traffic police. (10 Marks)"
            ]
        }
    },

    "u3": {
        title: "Food Adulteration",
        sub: "Unit 3 • Lesson 1",
        text: [
            {
                en: "Unsafe levels of pesticides are present in around half of the vegetables and more than a quarter of fruits sold in the capital's markets.",
                bn: "রাজধানীর বাজারে বিক্রি হওয়া প্রায় অর্ধেক শাকসবজি এবং এক চতুর্থাংশের বেশি ফলে অনিরাপদ মাত্রার কীটনাশক রয়েছে।"
            },
            {
                en: "The Luncheon: 'I caught sight of her at the play... It was twenty years ago and I was living in Paris. I had a tiny apartment...'",
                bn: "দ্য লাঞ্চন: 'নাটকে তাকে আমার চোখে পড়ল... সেটা ছিল বিশ বছর আগের কথা এবং আমি তখন প্যারিসে থাকতাম। আমার একটি ছোট অ্যাপার্টমেন্ট ছিল...'"
            }
        ],
        vocab: [
            { w: "Adulteration", m: "ভেজাল", s: "Contamination" },
            { w: "Pesticide", m: "কীটনাশক", s: "Toxin" },
            { w: "Luncheon", m: "মধ্যাহ্নভোজ", s: "Formal Lunch" },
            { w: "Imposing", m: "চিত্তাকর্ষক", s: "Impressive" },
            { w: "Asparagus", m: "শতমূলী", s: "Expensive Veg" }
        ],
        exam: {
            mcq: [
                { q: "1. Percentage of unsafe milk samples?", opts: ["40%", "50%", "25%"], ans: 0 },
                { q: "2. Which metal was found in turmeric?", opts: ["Gold", "Lead Chromate", "Iron"], ans: 1 },
                { q: "3. Where did the writer live?", opts: ["London", "Paris", "Dhaka"], ans: 1 },
                { q: "4. 'Startled' means:", opts: ["Shocked", "Happy", "Hungry"], ans: 0 },
                { q: "5. Total items the lady ate:", opts: ["One", "Three", "Seven"], ans: 2 }
            ],
            written: [
                "Q1: What is food adulteration? Mention two health risks. (2 Marks)",
                "Q2: Why did the writer panic when the lady ordered Asparagus? (2 Marks)",
                "Q3: Write a paragraph on 'Food Safety in Bangladesh'. (10 Marks)"
            ]
        }
    }
};
