/* basic-db.js - The Database for Basic & Spoken English */

const basicDB = {
    // MODULE 1: The S+V+O Rule
    "m1": {
        title: "1. The Magic Rule (S+V+O)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Welcome to your first step in mastering English! 🚀</p>
                <p>In Bengali, we put the action (verb) at the very end. For example: <br>
                <b>আমি (I) + ভাত (Rice) + খাই (Eat).</b></p>
                <p>But English has a <b>Magic Rule</b>. The Action MUST come right after the Person doing it!</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #d946ef; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #d946ef;">The English Formula:</h4>
                    <b style="color: #3b82f6;">Subject (Who)</b> + 
                    <b style="color: #10b981;">Verb (Action)</b> + 
                    <b style="color: #f59e0b;">Object (What)</b>
                </div>
                
                <p>So, "আমি ভাত খাই" becomes: <br>
                <b>I (Subject) + eat (Verb) + rice (Object).</b></p>
            </div>
        `,
        practice: [
            { bn: "আমি ভাত খাই", words: ["eat", "rice", "I"], correct: ["I", "eat", "rice"], exp: "Subject (I) comes first, then the Action (eat)!" },
            { bn: "সে ফুটবল খেলে", words: ["football", "He", "plays"], correct: ["He", "plays", "football"], exp: "Subject (He) -> Verb (plays) -> Object (football)." },
            { bn: "আমরা বই পড়ি", words: ["We", "books", "read"], correct: ["We", "read", "books"], exp: "Who? (We) -> Does what? (read) -> What? (books)." }
        ]
    },

    // MODULE 2: The 'Be' Verbs
    "m2": {
        title: "2. The 'Be' Verbs (Am/Is/Are)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>In English, a sentence <b>cannot exist without a verb!</b></p>
                <p>But what if there is no action? What if you just want to say "আমি খুশি" (I happy)?</p>
                <p>Because there is no action word (like run or eat), we must use a <b>'Be' Verb</b> as a bridge to connect the words.</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #3b82f6;">The 'Be' Verb Rules:</h4>
                    • <b>I</b> always takes <b>am</b>.<br>
                    • <b>He / She / It</b> takes <b>is</b>.<br>
                    • <b>You / We / They</b> takes <b>are</b>.
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি খুশি", words: ["happy", "am", "I"], correct: ["I", "am", "happy"], exp: "Because there is no action, 'am' acts as the verb bridge!" },
            { bn: "সে একজন ছাত্র", words: ["a student", "is", "He"], correct: ["He", "is", "a student"], exp: "For 'He', we always use 'is'." },
            { bn: "তারা আমার বন্ধু", words: ["are", "They", "my friends"], correct: ["They", "are", "my friends"], exp: "For 'They' (plural), we always use 'are'." }
        ]
    },

    // MODULE 3: Introductions
    "m3": {
        title: "1. Introducing Yourself",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>When you meet someone new, the first thing you do is tell them your name and where you are from.</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #10b981;">Spoken Formulas:</h4>
                    • <b>Formula 1:</b> Hello, my name is [Your Name].<br>
                    • <b>Formula 2:</b> I am from [Your City].<br>
                    <br><i>Never say "Myself Asif". It is grammatically incorrect!</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমার নাম আসিফ", words: ["name", "is", "Asif", "My"], correct: ["My", "name", "is", "Asif"], exp: "A perfect, polite introduction!" },
            { bn: "আমি ঢাকা থেকে এসেছি", words: ["am", "Dhaka", "from", "I"], correct: ["I", "am", "from", "Dhaka"], exp: "Use 'I am from...' to talk about your hometown." },
            { bn: "তোমার সাথে দেখা হয়ে ভালো লাগলো", words: ["meet", "Nice", "you", "to"], correct: ["Nice", "to", "meet", "you"], exp: "Always end an introduction with this polite phrase!" }
        ]
    },

    // MODULE 4: Asking Questions
    "m4": {
        title: "2. Asking Questions (W/H Words)",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>To have a conversation, you MUST know how to ask questions!</p>
                <p>We use <b>W/H Words</b> at the very beginning of a sentence to ask for information.</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #f59e0b;">The Question Toolkit:</h4>
                    • <b>What</b> = কী? (Information)<br>
                    • <b>Where</b> = কোথায়? (Location)<br>
                    • <b>How</b> = কেমন / কীভাবে? (Condition)
                </div>
            </div>
        `,
        practice: [
            { bn: "তোমার নাম কী?", words: ["your", "What", "name", "is"], correct: ["What", "is", "your", "name"], exp: "Start with 'What' to ask for information." },
            { bn: "তুমি কোথায় থাকো?", words: ["live", "Where", "you", "do"], correct: ["Where", "do", "you", "live"], exp: "'Where' is always used to ask about a place." },
            { bn: "তুমি কেমন আছো?", words: ["you", "are", "How"], correct: ["How", "are", "you"], exp: "'How' asks about a person's condition or health." }
        ]
    },

    // MODULE 5: Politeness (Thank You / Sorry)
    "m5": {
        title: "3. Saying Sorry & Thank You",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Being polite makes your English sound professional and friendly.</p>
                <p>Don't just say a simple "Sorry" or "Thanks". Let's learn the smart way to say it!</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #ec4899; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #ec4899;">Smart Phrases:</h4>
                    • Instead of "Thanks", say: <b>Thank you so much.</b><br>
                    • Instead of "Sorry", say: <b>I am really sorry.</b><br>
                    • When someone says Thank You, reply: <b>You are welcome.</b>
                </div>
            </div>
        `,
        practice: [
            { bn: "আপনাকে অনেক ধন্যবাদ", words: ["much", "Thank", "so", "you"], correct: ["Thank", "you", "so", "much"], exp: "Adding 'so much' makes it sound much warmer!" },
            { bn: "স্বাগতম (কোনো ব্যাপার না)", words: ["are", "welcome", "You"], correct: ["You", "are", "welcome"], exp: "Always say this when someone thanks you." },
            { bn: "আমি সত্যিই দুঃখিত", words: ["really", "I", "sorry", "am"], correct: ["I", "am", "really", "sorry"], exp: "This is much more polite than just saying 'Sorry'." }
        ]
    },

    // MODULE 6: Daily Action Words
    "m6": {
        title: "4. Daily Routine Vocabulary",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Let's talk about the things you do every single day!</p>
                <p>Since these are regular habits, we always use the <b>Present Tense</b> (The Base Verb).</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #8b5cf6; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #8b5cf6;">Daily Action Formula:</h4>
                    <b>I + [Action Word] + [Time/Object].</b><br><br>
                    <i>Examples: Wake up, Brush, Eat, Go.</i>
                </div>
            </div>
        `,
        practice: [
            { bn: "আমি সকালে ঘুম থেকে উঠি", words: ["up", "in the morning", "I", "wake"], correct: ["I", "wake", "up", "in the morning"], exp: "'Wake up' is the action. 'In the morning' is the time!" },
            { bn: "আমি আমার দাঁত মাজি", words: ["my", "brush", "I", "teeth"], correct: ["I", "brush", "my", "teeth"], exp: "Subject (I) + Verb (brush) + Object (my teeth)." },
            { bn: "আমি স্কুলে যাই", words: ["go", "to school", "I"], correct: ["I", "go", "to school"], exp: "Use 'go to' when moving toward a place." }
        ]
    },

    // MODULE 7: Polite Requests
    "m7": {
        title: "5. Making Polite Requests",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Never order people around! If you want something, you have to ask politely.</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #06b6d4; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #06b6d4;">Request Formulas:</h4>
                    • <b>Can you please...?</b> (Friendly/Casual)<br>
                    • <b>Could you please...?</b> (Very Formal/Respectful)<br>
                    • <b>May I...?</b> (Asking for permission)
                </div>
            </div>
        `,
        practice: [
            { bn: "দয়া করে আমাকে সাহায্য করতে পারবেন?", words: ["help me", "you", "Can", "please"], correct: ["Can", "you", "please", "help me"], exp: "Using 'Can you please' is the best way to ask for help." },
            { bn: "আমাকে এক গ্লাস পানি দিন", words: ["a glass of water", "Give me", "please"], correct: ["Please", "give me", "a glass of water"], exp: "Always add 'Please' to avoid sounding rude." },
            { bn: "আমি কি ভেতরে আসতে পারি?", words: ["come in", "I", "May"], correct: ["May", "I", "come in"], exp: "'May I' is the most respectful way to ask for permission!" }
        ]
    }
};
