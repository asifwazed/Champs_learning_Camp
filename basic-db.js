/* basic-db.js - The Ultimate Grammar & Spoken Database */

const basicDB = {
    "m1": {
        title: "1. Parts of Speech (Basics)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Before building a house, you need bricks. In English, words are our bricks. There are 8 types of words.</p>
                <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>1. Noun (বিশেষ্য):</b> Names a person, place, or thing. <i>(Asif, Dhaka, Water, Honesty)</i><br><br>
                    <b>2. Pronoun (সর্বনাম):</b> Replaces a Noun. <i>(He, She, They, It)</i><br><br>
                    <b>3. Adjective (বিশেষণ):</b> Describes a Noun. <i>(Good, Bad, Red, Tall)</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "সে একজন ভালো ছেলে", words: ["good", "He", "is", "a", "boy"], correct: ["He", "is", "a", "good", "boy"], exp: "'He' is a Pronoun. 'Good' is an Adjective describing the Noun 'boy'." },
            { bn: "ঢাকা একটি বড় শহর", words: ["city", "Dhaka", "big", "a", "is"], correct: ["Dhaka", "is", "a", "big", "city"], exp: "'Dhaka' is a Noun. 'Big' is an Adjective." }
        ]
    },
    "m2": {
        title: "2. Parts of Speech (Action & Time)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Now let's learn how words move and connect!</p>
                <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>4. Verb (ক্রিয়া):</b> The engine of the sentence! Shows action. <i>(Play, Eat, Is, Are)</i><br><br>
                    <b>5. Adverb (ক্রিয়া বিশেষণ):</b> Describes HOW an action is done. <i>(Slowly, Quickly, Very)</i><br><br>
                    <b>6. Preposition (পদান্বয়ী অব্যয়):</b> Shows position or time. <i>(In, On, At, Under)</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "সে দ্রুত দৌড়ায়", words: ["runs", "He", "fast"], correct: ["He", "runs", "fast"], exp: "'Runs' is the Verb. 'Fast' is the Adverb telling us HOW he runs." },
            { বইটি টেবিলের উপরে", words: ["on", "is", "The", "book", "the", "table"], correct: ["The", "book", "is", "on", "the", "table"], exp: "'On' is a Preposition showing position." }
        ]
    },
    "m3": {
        title: "3. Tense: Present (বর্তমান)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Tense tells us WHEN an action happens. The Present Tense is for things happening now, or universal truths.</p>
                <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0;">
                    <b>Indefinite:</b> I play. (আমি খেলি - Regular habit)<br>
                    <b>Continuous:</b> I am playing. (আমি খেলছি - Happening right now)<br>
                    <b>Perfect:</b> I have played. (আমি খেলেছি - Just finished)
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি এখন বই পড়ছি", words: ["reading", "a", "am", "I", "book", "now"], correct: ["I", "am", "reading", "a", "book", "now"], exp: "Present Continuous! Am/Is/Are + Verb with 'ing'." },
            { bn: "সে প্রতিদিন স্কুলে যায়", words: ["to", "goes", "school", "He", "everyday"], correct: ["He", "goes", "to", "school", "everyday"], exp: "Present Indefinite. Add 's' or 'es' because 'He' is singular." }
        ]
    },
    "m4": {
        title: "4. The S+V+O Magic Rule",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Now that you know the parts of speech, let's build sentences!</p>
                <p>In Bengali, the verb is at the end: <b>আমি (I) + ভাত (Rice) + খাই (Eat).</b></p>
                <p>In English, the verb MUST come second:</p>
                <div style="background: #fdf4ff; border-left: 4px solid #d946ef; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; font-weight: bold;">
                    Subject (Who) + Verb (Action) + Object (What)
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি ভাত খাই", words: ["eat", "rice", "I"], correct: ["I", "eat", "rice"], exp: "Subject (I) + Action (eat) + Object (rice)!" },
            { bn: "তারা ফুটবল খেলে", words: ["play", "They", "football"], correct: ["They", "play", "football"], exp: "Who? (They) -> Action? (play) -> What? (football)." }
        ]
    }
};
