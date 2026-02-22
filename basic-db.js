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
                <p>Whenever you are confused, just remember this S+V+O Magic Rule!</p>
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
                
                <p>So, "আমি খুশি" becomes: <b>I + am + happy.</b></p>
            </div>
        `,
        practice: [
            { bn: "আমি খুশি", words: ["happy", "am", "I"], correct: ["I", "am", "happy"], exp: "Because there is no action, 'am' acts as the verb bridge!" },
            { bn: "সে একজন ছাত্র", words: ["a student", "is", "He"], correct: ["He", "is", "a student"], exp: "For 'He', we always use 'is'." },
            { bn: "তারা আমার বন্ধু", words: ["are", "They", "my friends"], correct: ["They", "are", "my friends"], exp: "For 'They' (plural), we always use 'are'." }
        ]
    },

    // MODULE 3: Introductions (Spoken Scenario)
    "m3": {
        title: "3. Introducing Yourself",
        theory: `
            <div style="font-size: 15px; line-height: 1.6; color: #334155;">
                <p>Let's use the Grammar we just learned to speak confidently!</p>
                <p>When you meet someone new, the first thing you do is tell them your name and where you are from.</p>
                
                <div style="background: #f8fafc; border-left: 4px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                    <h4 style="margin: 0 0 10px 0; color: #10b981;">Spoken Formulas:</h4>
                    • <b>Formula 1:</b> Hello, my name is [Your Name].<br>
                    • <b>Formula 2:</b> I am from [Your City].<br>
                    <br><i>Never say "Myself [Name]". It is grammatically incorrect!</i>
                </div>
                <p>Let's practice building these natural spoken sentences.</p>
            </div>
        `,
        practice: [
            { bn: "আমার নাম আসিফ", words: ["name", "is", "Asif", "My"], correct: ["My", "name", "is", "Asif"], exp: "A perfect, polite introduction!" },
            { bn: "আমি ঢাকা থেকে এসেছি", words: ["am", "Dhaka", "from", "I"], correct: ["I", "am", "from", "Dhaka"], exp: "Use 'I am from...' to talk about your hometown." },
            { bn: "তোমার সাথে দেখা হয়ে ভালো লাগলো", words: ["meet", "Nice", "you", "to"], correct: ["Nice", "to", "meet", "you"], exp: "Always end an introduction with this polite phrase!" }
        ]
    }
};
