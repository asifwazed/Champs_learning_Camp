/* basic-db.js - The Ultimate Grammar & Spoken Database */

const basicDB = {
    // ==========================================
    // PHASE 1: GRAMMAR FOUNDATION
    // ==========================================
    "m1": {
        title: "1. The Building Blocks (Noun & Pronoun)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>To speak English, you need to know the bricks that build a sentence.</p>
                <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>1. Noun (বিশেষ্য):</b> Names anything. A person, place, or thing. <i>(Asif, Dhaka, Book, Water)</i><br><br>
                    <b>2. Pronoun (সর্বনাম):</b> Replaces a Noun so we don't repeat names. <i>(I, He, She, They, We, It)</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "সে একজন ছাত্র", words: ["is", "student", "a", "He"], correct: ["He", "is", "a", "student"], exp: "'He' is a Pronoun replacing a boy's name!" },
            { bn: "ঢাকা একটি বড় শহর", words: ["city", "big", "a", "is", "Dhaka"], correct: ["Dhaka", "is", "a", "big", "city"], exp: "'Dhaka' and 'city' are both Nouns." },
            { bn: "তারা আমার বন্ধু", words: ["friends", "are", "They", "my"], correct: ["They", "are", "my", "friends"], exp: "'They' is a plural Pronoun." }
        ]
    },
    "m2": {
        title: "2. The Engine (Verbs & Adjectives)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>A sentence cannot survive without an engine (Verb).</p>
                <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>3. Verb (ক্রিয়া):</b> The action word. <i>(Play, Eat, Sleep, Run)</i><br><br>
                    <b>4. Adjective (বিশেষণ):</b> Describes the Noun. Tells us how it looks or feels. <i>(Good, Bad, Red, Tall)</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি দ্রুত দৌড়াই", words: ["run", "fast", "I"], correct: ["I", "run", "fast"], exp: "'Run' is the action (Verb)!" },
            { bn: "সে একটি লাল গাড়ি কিনেছে", words: ["bought", "a", "car", "red", "He"], correct: ["He", "bought", "a", "red", "car"], exp: "'Red' is the Adjective describing the car." },
            { bn: "চা খুব গরম", words: ["tea", "very", "is", "The", "hot"], correct: ["The", "tea", "is", "very", "hot"], exp: "'Hot' describes the condition of the tea." }
        ]
    },
    "m3": {
        title: "3. The S+V+O Magic Rule",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>In Bengali, the action is always at the end: <b>আমি (I) + ভাত (Rice) + খাই (Eat).</b></p>
                <p>In English, the action MUST come immediately after the person:</p>
                <div style="background: #fdf4ff; border-left: 4px solid #d946ef; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-weight: bold;">
                    Subject (Who) + Verb (Action) + Object (What)
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি ভাত খাই", words: ["eat", "rice", "I"], correct: ["I", "eat", "rice"], exp: "Subject (I) + Action (eat) + Object (rice)!" },
            { bn: "তারা ফুটবল খেলে", words: ["football", "play", "They"], correct: ["They", "play", "football"], exp: "Who? (They) -> Action? (play) -> What? (football)." },
            { bn: "আমরা বই পড়ি", words: ["read", "We", "books"], correct: ["We", "read", "books"], exp: "We (Subject) -> read (Verb) -> books (Object)." }
        ]
    },
    "m4": {
        title: "4. Tense Hacks (Time Travel)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Tense just means "Time". Let's learn to jump between times!</p>
                <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>Present:</b> Happening now or everyday. <i>(I go)</i><br>
                    <b>Past:</b> Already finished. <i>(I went)</i><br>
                    <b>Future:</b> Will happen later. <i>(I will go)</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি গতকাল বাজারে গিয়েছিলাম", words: ["went", "market", "yesterday", "I", "to", "the"], correct: ["I", "went", "to", "the", "market", "yesterday"], exp: "Past tense! Use 'went' instead of 'go'." },
            { bn: "আমি আগামীকাল আসব", words: ["tomorrow", "will", "come", "I"], correct: ["I", "will", "come", "tomorrow"], exp: "Future tense! Always use 'will' before the action." },
            { bn: "সে এখন টিভি দেখছে", words: ["watching", "He", "is", "TV", "now"], correct: ["He", "is", "watching", "TV", "now"], exp: "Present Continuous! Is + Verb with 'ing'." }
        ]
    },

    // ==========================================
    // PHASE 2: DAILY SCENARIOS & VOCAB
    // ==========================================
    "m5": {
        title: "5. Daily Action Words",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>To talk about your daily routine, you just need basic verbs and the Present Tense.</p>
                <div style="background: #f8fafc; border-left: 4px solid #8b5cf6; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>Routine Formula:</b> I + [Action] + [Time/Place].<br>
                    <i>Actions: Wake up, Brush, Eat, Work, Sleep.</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি সকালে ঘুম থেকে উঠি", words: ["wake", "in", "up", "I", "the", "morning"], correct: ["I", "wake", "up", "in", "the", "morning"], exp: "'Wake up' is the core action." },
            { bn: "আমি আমার দাঁত মাজি", words: ["teeth", "my", "brush", "I"], correct: ["I", "brush", "my", "teeth"], exp: "Subject (I) + Verb (brush) + Object (my teeth)." },
            { bn: "আমি রাত দশটায় ঘুমাই", words: ["at", "sleep", "I", "10 PM"], correct: ["I", "sleep", "at", "10 PM"], exp: "Always use 'at' before specific clock times!" }
        ]
    },
    "m6": {
        title: "6. Polite Introductions",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>When you meet someone new, don't just say "Hi". Make a smart first impression.</p>
                <div style="background: #ecfdf5; border-left: 4px solid #10b981; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>Formula:</b> Greeting + Name + Location + Politeness.<br><br>
                    <i>Never say "Myself Asif." That is grammatically wrong! Say "I am Asif."</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমার নাম আসিফ", words: ["name", "Asif", "is", "My"], correct: ["My", "name", "is", "Asif"], exp: "The perfect standard introduction." },
            { bn: "আমি ঢাকা থেকে এসেছি", words: ["am", "Dhaka", "from", "I"], correct: ["I", "am", "from", "Dhaka"], exp: "Use 'from' to talk about your hometown." },
            { bn: "তোমার সাথে দেখা হয়ে ভালো লাগলো", words: ["to", "you", "Nice", "meet"], correct: ["Nice", "to", "meet", "you"], exp: "Always say this at the end of an introduction!" }
        ]
    },
    "m7": {
        title: "7. Asking W/H Questions",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>To keep a conversation alive, you must ask questions!</p>
                <div style="background: #fff7ed; border-left: 4px solid #f97316; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>What</b> = কী? (Information)<br>
                    <b>Where</b> = কোথায়? (Location)<br>
                    <b>When</b> = কখন? (Time)<br>
                    <b>How</b> = কেমন/কীভাবে? (Condition/Method)
                </div>
            </div>
        `,
        practice: [
            { bn: "তোমার নাম কী?", words: ["your", "is", "What", "name"], correct: ["What", "is", "your", "name"], exp: "Start with 'What' to get information." },
            { bn: "তুমি কোথায় থাকো?", words: ["do", "live", "Where", "you"], correct: ["Where", "do", "you", "live"], exp: "'Where' asks for a location." },
            { bn: "তুমি কেমন আছো?", words: ["are", "you", "How"], correct: ["How", "are", "you"], exp: "'How' checks condition or feelings." }
        ]
    },

    // ==========================================
    // PHASE 3: REAL-LIFE ROLEPLAY
    // ==========================================
    "m8": {
        title: "8. Roleplay: At the Restaurant",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>You are at a nice restaurant. The waiter approaches you.</p>
                <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #ef4444;"><i class="fas fa-utensils"></i> Waiter says:</h4>
                    <i>"Good evening! Are you ready to order?"</i><br><br>
                    <b>Rule:</b> Never say "Give me". Say "I would like..."
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি মেনুটা দেখতে পারি?", words: ["see", "menu", "I", "Can", "the"], correct: ["Can", "I", "see", "the", "menu"], exp: "Use 'Can I' for a polite request." },
            { bn: "আমি একটি বার্গার নেব", words: ["a", "burger", "like", "would", "I"], correct: ["I", "would", "like", "a", "burger"], exp: "'I would like' is the most polite way to order food." },
            { bn: "দয়া করে বিলটা দেবেন?", words: ["the", "check", "please", "get", "Could", "we"], correct: ["Could", "we", "get", "the", "check", "please"], exp: "In restaurants, the bill is often called the 'check'." }
        ]
    },
    "m9": {
        title: "9. Roleplay: Shopping",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>You are at a clothing store looking for a jacket.</p>
                <div style="background: #fdf4ff; border-left: 4px solid #d946ef; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #d946ef;"><i class="fas fa-store"></i> Shopkeeper says:</h4>
                    <i>"Hello! How can I help you today?"</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি শুধু দেখছি, ধন্যবাদ", words: ["just", "looking", "am", "I", "thanks"], correct: ["I", "am", "just", "looking", "thanks"], exp: "Use this if you don't need help right now." },
            { bn: "এটার দাম কত?", words: ["much", "is", "How", "this"], correct: ["How", "much", "is", "this"], exp: "Always use 'How much' for prices." },
            { bn: "আমি এটা কিনে নেব", words: ["take", "I", "it", "will"], correct: ["I", "will", "take", "it"], exp: "The perfect phrase to confirm your purchase." }
        ]
    },
    "m10": {
        title: "10. Talk Like a Native (Hacks)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Native speakers don't use boring textbook words. Let's upgrade your vocabulary!</p>
                <div style="background: #f0fdfa; border-left: 4px solid #14b8a6; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    ❌ Very good -> ✅ <b>Excellent</b><br>
                    ❌ Very bad -> ✅ <b>Terrible</b><br>
                    ❌ I think -> ✅ <b>In my opinion</b><br>
                    ❌ Sorry -> ✅ <b>My apologies</b>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমার মতে, এটি চমৎকার", words: ["excellent", "opinion", "In", "my", "it", "is"], correct: ["In", "my", "opinion", "it", "is", "excellent"], exp: "A very professional way to state your feelings." },
            { bn: "আমি সত্যিই দুঃখিত", words: ["really", "sorry", "am", "I"], correct: ["I", "am", "really", "sorry"], exp: "Much better than just a plain 'sorry'." },
            { bn: "স্বাগতম (কোনো ব্যাপার না)", words: ["welcome", "are", "You"], correct: ["You", "are", "welcome"], exp: "Always reply with this when someone thanks you." }
        ]
    }
};
