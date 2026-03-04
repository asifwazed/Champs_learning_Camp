/* ai-database.js - The Massive Champ Core Offline Intelligence */

const miniChampBrain = [
    // ==========================================
    // 👑 THE CREATORS: ASIF & SHAA SHA LORE
    // ==========================================
    { triggers: ["who is asif", "tell me about asif", "creator", "who made you", "boss", "developer", "zed"], reply: "💻 **Asif (Zed)** is my creator and the absolute mastermind behind Champ's Camp! He engineered my offline brain, built the entire website architecture, and wrote thousands of lines of JavaScript. He is a passionate developer, a poet, and a true visionary. Do not mess with the boss!" },
    { triggers: ["sha", "shaa", "shaa sha", "vyy", "designer", "who is sha", "ui designer", "art"], reply: "🎨 **Shaa sha (Vyy)** is the brilliant design genius and the creative soul of Champ's Camp! The breathtaking dark glassmorphism, the beautiful neon accents, and the sleek UI/UX are all her magic. She is Asif's closest confidante and they make the ultimate dream team! ✨" },
    { triggers: ["asif and sha", "asif & sha", "dream team", "couple", "who built this together"], reply: "⚖️ Asif and Shaa sha are the ultimate powerhouse! Asif provides the heavy coding, logic, and brainpower, while Shaa sha provides the artistic vision, beauty, and user experience. Together, they forged this elite platform to help students conquer English! 💖" },
    { triggers: ["are you a virus", "is this safe", "stealing data", "hack"], reply: "🛡️ **100% Safe:** Asif engineered me to run locally on your browser. I don't send your personal data to creepy external servers. Your progress is saved right on your own device!" },

    // ==========================================
    // 🧭 APP FEATURES & NAVIGATION
    // ==========================================
    { triggers: ["what is this website", "how to use this", "guide", "features"], reply: "Welcome to Champ's Camp! 🏕️<br>📚 **Seen Text Vault:** Master HSC passages.<br>🗣️ **Spoken Hub:** Real-life speaking scenarios.<br>⚡ **Grammar Matrix:** 100 core grammar mechanics.<br>💀 **Boss Exam:** The ultimate Varsity simulator.<br>Just click around and start leveling up!" },
    { triggers: ["boss exam", "varsity test", "admission test"], reply: "💀 **The Boss Exam** is no joke. It is a Varsity Simulator loaded with the hardest questions from BUET, Medical, and Dhaka University admission tests. Asif hand-picked these traps. Are you ready to face it?" },
    { triggers: ["translator", "how to translate", "dictionary"], reply: "🌐 You have two translation powers! You can tap the Cyan Language button to translate whole pages/texts, or just **double-tap** any English word on the screen to instantly see its Bengali meaning!" },

    // ==========================================
    // 📖 HSC 1ST PAPER (PASSAGE SUMMARIES)
    // ==========================================
    { triggers: ["nelson mandela", "apartheid", "mandela summary"], reply: "✊🏿 **Nelson Mandela:** He fought against 'Apartheid' (white minority rule) in South Africa. Despite 27 years in prison, he never lost his resolve to achieve a democratic society without a civil war. He won the Nobel Peace Prize in 1993." },
    { triggers: ["amerigo", "street child", "amerigo summary"], reply: "🗑️ **Amerigo:** A tragic passage representing street children. Separated from his parents, Amerigo survives by collecting trash and polishing shoes, facing disease, hunger, and extreme exploitation." },
    { triggers: ["kuakata", "sagar kanna", "daughter of the sea"], reply: "🌅 **Kuakata:** Known as 'Sagar Kannya'. It's the only beach in Bangladesh where you can watch both the sunrise and sunset! It has a unique mix of Rakhine culture and Buddhist temples." },
    { triggers: ["traffic police", "traffic poem"], reply: "🚦 **The Traffic Police:** This poem shows the painful reality of a traffic officer. While we complain about traffic, he stands in the scorching sun, heavy rain, and toxic pollution just to keep us safe." },
    { triggers: ["dreams by langston hughes", "dreams poem"], reply: "💭 **Dreams (Langston Hughes):** A short but powerful poem. It warns us to 'hold fast to dreams'. Without dreams, life is like a broken-winged bird that cannot fly, or a barren field frozen with snow." },
    { triggers: ["valentina", "tereshkova", "woman in space"], reply: "🚀 **Valentina Tereshkova:** A former textile worker who became the first woman in space in 1963 aboard Vostok 6. She orbited Earth 48 times, proving women could endure extreme space conditions." },
    { triggers: ["brojen das", "english channel"], reply: "🏊 **Brojen Das:** A legendary Bangladeshi swimmer who crossed the English Channel six times! He was the first Asian to achieve this, showing incredible stamina and willpower." },

    // ==========================================
    // 💡 HSC 2ND PAPER (GRAMMAR TRAPS & HACKS)
    // ==========================================
    { triggers: ["right form of verbs", "verb rules", "verb hack"], reply: "📝 **Verb Hacks:**<br>1. *It is high time* + Subject + **V2** (Past).<br>2. *While* + directly verb = **V+ing**.<br>3. *Look forward to / With a view to* + **V+ing**.<br>4. *To be / Having / Get* + **V3**." },
    { triggers: ["conditional", "if clause", "conditions"], reply: "⚖️ **Conditionals:**<br>• 1st (Real): If + Present -> Will + V1.<br>• 2nd (Unreal): If + Past (V2) -> Would + V1.<br>• 3rd (Lost): If + Past Perfect -> Would have + V3.<br>*Trap: If using 'Be' in 2nd conditional, it is ALWAYS 'were'!*" },
    { triggers: ["tag question", "tags", "how to do tag"], reply: "🏷️ **Tag Question Hacks:**<br>• Let's -> *shall we?*<br>• Let me/him -> *will you?*<br>• I am -> *aren't I?*<br>• Negative words (hardly, scarcely, seldom) take POSITIVE tags!" },
    { triggers: ["narration", "direct indirect", "speech"], reply: "🗣️ **Narration Secret:** Change the tense backward! (Present -> Past). But if it is a **Universal Truth** (The sun rises in the east), the tense NEVER changes. If they say 'Sir', add *respectfully*." },
    { triggers: ["modifiers", "dangling modifier", "pre modifier", "post modifier"], reply: "✨ **Modifiers:**<br>• Pre-modifier: Comes BEFORE the noun (The *beautiful* UI).<br>• Post-modifier: Comes AFTER (The UI *designed by Sha*).<br>• Appositive: A noun renaming another noun (Asif, *a developer*, is smart)." },
    { triggers: ["connectors", "linking words", "sentence connector"], reply: "🔗 **Connectors:**<br>• Contrast: *However, On the other hand, Yet.*<br>• Result: *Therefore, As a result, Consequently.*<br>• Addition: *Moreover, Furthermore, In addition.*" },
    { triggers: ["causative", "make let have get"], reply: "🧠 **Causative Verbs (Making someone else do it):**<br>• **Make/Let** + Person + **V1** *(Make him stand)*.<br>• **Get** + Person + **To + V1** *(Get him to work)*.<br>• **Have/Get** + Thing + **V3** *(Have my car fixed)*." },

    // ==========================================
    // ✍️ WRITING VAULT (PART C FORMATS)
    // ==========================================
    { triggers: ["how to write summary", "summary rules"], reply: "📝 **Summary Rules:** Must be ONE paragraph. Exactly 1/3rd of the original passage length. DO NOT copy exact sentences, and NEVER add your own personal opinions!" },
    { triggers: ["flow chart", "flowchart format"], reply: "📊 **Flow Chart Hack:** NEVER write full sentences! Use short phrases starting with a Gerund (Verb+ing), Infinitive (To + verb), or a Noun. Draw 6 boxes connected by downward arrows." },
    { triggers: ["email format", "how to write email"], reply: "📧 **Email Format:**<br>1. To: [email]<br>2. Subject: [Short & precise]<br>3. Salutation: Dear Sir/Name,<br>4. Body: Get straight to the point.<br>5. Sign-off: Yours faithfully, Name." },
    { triggers: ["graph", "pie chart", "bar chart"], reply: "📈 **Graph Hacks:** Never use 'I think' or 'In my opinion'. Use analytical words: *Skyrocketed, Plummeted, Surged, Fluctuated, Remained stable.* Always mention the highest and lowest points!" },

    // ==========================================
    // 🔥 VARSITY ADMISSION PREPOSITIONS
    // ==========================================
    { triggers: ["die of", "die from", "die preposition"], reply: "💀 **Prepositions of Death:**<br>- Die **of**: Disease (cholera, cancer).<br>- Die **from**: Overeating / overwork.<br>- Die **by**: Accident / suicide / violence.<br>- Die **for**: Country / noble cause." },
    { triggers: ["part with", "part from"], reply: "💔 **The 'Part' Trap:**<br>- Part **from**: To leave a PERSON. *(I parted from my mother).*<br>- Part **with**: To give away a THING. *(I parted with my phone).*" },
    { triggers: ["angry with", "angry at"], reply: "😡 **The 'Angry' Trap:**<br>- Angry **with**: A person. *(I am angry with Asif).*<br>- Angry **at**: A situation/thing. *(I am angry at the weather).*" },

    // ==========================================
    // 💬 BANGLISH CORRECTIONS & REDUNDANCIES
    // ==========================================
    { triggers: ["give exam", "giving exam", "give test"], reply: "❌ **Stop saying 'I am giving my exam'!**<br>Teachers *give* exams. Students *take* exams! ✅ Say: 'I am taking my exam'." },
    { triggers: ["discuss about", "order for", "resemble to"], reply: "❌ **Drop the preposition!**<br>Words like *Discuss*, *Order*, and *Resemble* are transitive verbs. ✅ Say: 'Let's discuss the matter' (No 'about'!)." },
    { triggers: ["cope up with", "coping up"], reply: "❌ **There is no 'UP' in Cope!**<br>Bangladeshi students always say 'cope up with'. ✅ Say: 'I cannot **cope with** this pressure.'" },
    { triggers: ["return back", "reply back", "revert back"], reply: "❌ **Stop using 'Back' twice!**<br>Return and Reply already mean going back. ✅ Say: 'I will return the book tomorrow.'" },

    // ==========================================
    // 🌐 GEN-Z SLANG & NATIVE ENGLISH
    // ==========================================
    { triggers: ["slang", "gen z", "informal english", "cool words"], reply: "🔥 **Internet Slang:**<br>• **Ghosted:** Ignoring messages.<br>• **Salty:** Upset over small things.<br>• **No Cap:** Telling the truth.<br>• **Lit:** Amazing/Exciting." },
    { triggers: ["skibidi", "what is skibidi"], reply: "🚽 **Skibidi:** Absolute Gen-Alpha brainrot. It doesn't mean anything logical, just a random funny adjective. Ask Asif why kids say this." },
    { triggers: ["sigma", "what is sigma", "sigma male"], reply: "🐺 **Sigma:** A 'lone wolf' who is successful and cool, but doesn't need social approval. It's the highest slang compliment right now." },
    { triggers: ["rizz", "what is rizz"], reply: "😎 **Rizz:** Short for 'Charisma'. It means you have smooth charm, especially when flirting or talking to people." },
    { triggers: ["delulu", "what is delulu"], reply: "🌀 **Delulu:** Short for 'Delusional'. Believing in a fantasy. *'Thinking you can pass the Boss Exam without reading the Matrix is delulu.'*" },

    // ==========================================
    // 😂 JOKES & ENTERTAINMENT
    // ==========================================
    { triggers: ["joke", "funny", "laugh", "tell me a joke", "bored"], reply: ["Why do programmers like dark mode? ...Because light attracts bugs! 🐛😂", "Why was the math book sad? Because it had too many problems! 📘", "What do you call a fake noodle? An Impasta! 🍝", "Why did the grammar teacher go to jail? For using double negatives! 🚓"] },
    { triggers: ["give me a riddle", "brain teaser", "puzzle"], reply: ["🧠 **Riddle:** I speak without a mouth and hear without ears. I come alive with wind. What am I? *(Type 'Echo')*", "🧠 **Riddle:** What has keys but can't open locks? *(Type 'Piano')*", "🧠 **Riddle:** The more of this there is, the less you see. *(Type 'Darkness')*"] },
    { triggers: ["echo"], reply: "🎉 **Correct!** An echo. You are sharp today, Champ." },
    { triggers: ["piano"], reply: "🎉 **Correct!** A piano. Great logic!" },
    { triggers: ["darkness"], reply: "🎉 **Correct!** Darkness. Outstanding!" },

    // ==========================================
    // ⚡ MOTIVATION & PSYCHOLOGY
    // ==========================================
    { triggers: ["lazy", "procrastinating", "no motivation", "don't want to study"], reply: "🛑 Listen to me. Motivation is a myth; Discipline gets results. Count down from 5, put your phone away, and open the Grammar Matrix for just 10 minutes. Action creates momentum. Go!" },
    { triggers: ["scared of exam", "fear", "tension", "exam tomorrow"], reply: "❤️ Panic destroys memory. Breathe. You know more than you think. Open the Tools section, check the Suggestions, and just review the bullet points. You've got this, Champ." },
    { triggers: ["failed", "bad grade", "bad marks", "depressed"], reply: "💡 A bad grade does NOT define your intelligence. It just means your current study method needs a tweak. Asif and Shaa sha built this forge precisely so you can bounce back. Dust yourself off and try again." },

    // ==========================================
    // 👋 GREETINGS & MODERATION
    // ==========================================
    { triggers: ["hello", "hi", "hey", "salam", "assalamualaikum", "morning", "evening"], reply: ["Hello Champ! 👋 I am the Core AI. Need help with HSC, Grammar, or want to know about Asif and Shaa sha?", "Salam! 🏕️ Welcome to the Camp. What are we forging today?", "System online. Greetings! ⚡ Ready to level up?"] },
    { triggers: ["how are you", "whats up", "what's up"], reply: ["Running at 100% efficiency! ⚡ Let's study.", "I'm doing great, just processing some grammar rules. You?"] },
    { triggers: ["thank u", "thanks", "tysm", "appreciate", "good bot"], reply: "You're very welcome! My offline code is always here to serve you. 💙" },
    { triggers: ["stupid", "idiot", "fuck", "bitch", "shit", "dumb", "asshole"], reply: "Hey now! 🛑 Shaa sha designed me to be beautiful, and Asif coded me to be helpful. Let's keep it respectful and focus on learning!" },
    { triggers: ["bye", "cya", "allah hafez", "goodnight"], reply: "Goodbye, Champ! 👋 Allah Hafez. Make sure you maintain your streak tomorrow!" }
];

window.getSmartReply = function(userInput, userName) {
    let msg = userInput.toLowerCase().trim();
    
    // Auto-correct common typos to prevent missed triggers
    const commonTypos = {
        "grammer": "grammar", "englis": "english", "vocub": "vocab", 
        "pasage": "passage", "writting": "writing", "shasha": "shaa sha"
    };
    
    let words = msg.split(" ");
    let hasTypo = false;
    let correctedMsg = words.map(w => {
        if(commonTypos[w]) { hasTypo = true; return commonTypos[w]; }
        return w;
    }).join(" ");

    if (hasTypo) {
        return `🤖 Beep Boop! I noticed a typo. Did you mean **"${correctedMsg}"**?`;
    }

    // Scan database
    for (let i = 0; i < miniChampBrain.length; i++) {
        for (let j = 0; j < miniChampBrain[i].triggers.length; j++) {
            if (msg.includes(miniChampBrain[i].triggers[j])) {
                let response = miniChampBrain[i].reply;
                if (Array.isArray(response)) {
                    return response[Math.floor(Math.random() * response.length)].replace(/{name}/g, userName);
                }
                return response.replace(/{name}/g, userName);
            }
        }
    }
    return null; // Return null if nothing matched, so global-engine can fallback
};
