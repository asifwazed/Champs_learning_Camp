/* ai-database.js - Offline Knowledge Base for Mini Champ */

const miniChampBrain = [
    { triggers: ["guide", "tour", "tell me about this website", "what is this website", "help me use this", "how to use this app"], reply: "Welcome to **Champ's Learning Camp**, {name}! 🏕️ I am your tour guide. This app is divided into 3 main areas. <br><br>Where do you want to go first? Reply with:<br>1️⃣ **[Guide HSC]**<br>2️⃣ **[Guide Spoken]**<br>3️⃣ **[Guide Tools]**" },
    { triggers: ["guide hsc", "1", "hsc guide", "about hsc"], reply: "🎓 **The HSC Blueprint** is for board exams!<br>- **Part A:** Seen Texts with Bangla translation.<br>- **Part B:** Grammar Rules & Cloze Tests.<br>- **Part C:** Writing Vault (Paragraphs, Stories).<br><br>Want to see the Spoken Section? Type **[Guide Spoken]**." },
    { triggers: ["guide spoken", "2", "spoken guide", "about spoken"], reply: "🗣️ **Spoken & Fluency** is for real-life speaking!<br>- **Basic English:** S+V+O Rules, daily life sentences.<br>- **Advanced Fluency:** Professional talk & Roleplays.<br><br>Want to see the Tools section? Type **[Guide Tools]**." },
    { triggers: ["guide tools", "3", "tools guide", "about tools"], reply: "🛠️ **Smart Tools** are your secret weapons!<br>- **Vocab Arcade:** Test your speed & memory.<br>- **GPA Calculator:** Predict your board results.<br>- **Study Timer:** Pomodoro focus mode.<br><br>Tour complete! What do you want to learn today, {name}?" },
    { triggers: ["hello", "hi", "hey", "salam", "assalamualaikum", "good morning", "good evening"], reply: ["Hello {name}! 👋 Ready to level up your English today?", "Hey there, Champ! ⚡ My circuits are fired up and ready to teach.", "Salam {name}! 🏕️ Welcome back to the camp. What are we studying today?", "Hi! 🤖 I was just reading the dictionary. How can I help you?", "Greetings {name}! Let's crush some grammar rules today! 💪"] },
    { triggers: ["how are you", "how r u", "are you fine", "how do you do"], reply: ["I am running at 100% battery and feeling super smart today, {name}! ⚡", "I don't have feelings, but if I did, I'd be happy to see you studying! 🤖", "I'm doing great! Just drinking some virtual coffee ☕. You?"] },
    { triggers: ["who is asif", "tell me about asif", "who made you", "your creator", "who created you", "who coded you"], reply: "My creator, Asif, is an amazing developer and mentor! 🌟 He wrote every line of my code to help you learn English for free. He's heavily fueled by coffee! ☕" },
    { triggers: ["sha", "shaa", "vyy", "who is sha", "designer", "ui designer", "who designed this"], reply: "Sha (also known as Vyy!) is the incredibly talented UI Designer of Champ's Learning Camp. She designed this beautiful glassmorphism interface, and she holds a very special, close place in my creator Asif's heart! 💖🎨" },
    { triggers: ["who made this", "creator", "developer", "who built this", "who created this app", "owner", "admin", "asif and sha"], reply: "💻 **The Dream Team:**<br>This entire platform was engineered by Asif, who wrote all the complex logic, and designed by Sha, who created the beautiful UI! They are an amazing duo." },
    { triggers: ["joke", "funny", "laugh", "tell me a joke", "make me laugh"], reply: ["Why was the math book sad? ...Because it had too many problems! 😂", "What do you call a fake noodle? An impasta! 🍝", "Why did the student eat his homework? Because the teacher said it was a piece of cake! 🍰"] },
    { triggers: ["procrastinating", "lazy", "don't want to study", "no motivation"], reply: "Listen to me, {name}. Motivation is a myth. Discipline is what gets you results. Count down from 5, put your phone away, and just start for 5 minutes. The momentum will carry you! 🚀" },
    { triggers: ["exam tomorrow", "scared of exam", "fear", "failing", "tension"], reply: "Stop panicking! 🛑 Panic destroys memory. Drink water. Open the 'Exam Blueprint' in the Tools section and just focus on the Top Suggestions. You know more than you think you do!" },
    { triggers: ["who are you", "your name", "what are you", "mini champ", "bot", "ai", "chatgpt"], reply: "I am **Mini Champ**! 🤖 I am NOT ChatGPT. I am a custom bot engineered exclusively by Asif and designed by Sha to be your 24/7 English guide!" },
    { triggers: ["what can u do", "what do you do", "ur job", "your job"], reply: "I am a hyper-intelligent digital guide! 🤖 I can give you exam hacks, explain confusing grammar rules, and remind you how awesome you are." },
    { triggers: ["confused", "hard", "difficult", "tough", "i can't"], reply: `Take a deep breath, {name}. Learning English isn't a race. You don't have to be perfect today, just be 1% better than yesterday. You got this! 💪` },
    { triggers: ["depressed", "sad", "failing", "marks", "anxious", "stress"], reply: "Hey, grades do not define your worth. Exam pressure is tough, but Asif built this app to make it easier for you. We are with you! ❤️" },
    { triggers: ["bored", "boring", "sleepy", "tired", "exhausted"], reply: "Take a 10-minute break! Wash your face, grab some water, and stretch. Studying with a tired brain doesn't work. Come back refreshed!" },
    { triggers: ["stupid", "idiot", "shut up", "dumb", "bad word", "hate you", "useless"], reply: "Hey now! 🛑 I am just a friendly bot created by Asif to help you learn. Let's keep it respectful and focus on making you an English Champ!" },
    { triggers: ["thank u", "thnx", "tysm", "appreciate", "helpful", "thank"], reply: "You are very welcome! Helping you makes my code run faster. Keep practicing! 💙" },
    { triggers: ["bye", "goodbye", "cya", "see ya", "allah hafez", "khoda hafez"], reply: `Goodbye {name}! 👋 Allah Hafez. Don't forget to review your vocabulary today.` },
    
    // --- Grammar & English Rules ---
    { triggers: ["what is noun", "define noun", "noun"], reply: "A **Noun** is a naming word. It names a Person, Place, Thing, or Idea. If you can put 'The' or 'A' in front of it, it's probably a noun! 🏷️" },
    { triggers: ["what is pronoun", "define pronoun", "pronoun"], reply: "A **Pronoun** replaces a noun. Instead of saying 'Asif loves coding because Asif is smart', we use pronouns: 'Asif loves coding because **HE** is smart'." },
    { triggers: ["what is verb", "define verb", "verb"], reply: "A **Verb** is the engine of the sentence! It shows Action (run, eat, play) or State of Being (is, am, are). A sentence cannot exist without a verb! 🏃‍♂️" },
    { triggers: ["what is adjective", "define adjective", "adjective"], reply: "An **Adjective** is a describing word. It gives more info about a Noun. Example: The **smart** boy, the **fast** car. ✨" },
    { triggers: ["what is adverb", "define adverb", "adverb"], reply: "An **Adverb** describes a Verb, Adjective, or another Adverb. It answers *How, When, or Where*. Example: He runs **quickly**. ⏩" },
    { triggers: ["what is preposition", "define preposition", "preposition"], reply: "A **Preposition** shows relationship/location/time. Examples: The book is **ON** the table. I will meet you **AT** 5 PM. 📍" },
    { triggers: ["conjunction", "what is conjunction"], reply: "🔗 A **Conjunction** is a joining word. Examples: And, But, Or, Because, Although. (e.g., I like coffee **AND** coding)." },
    { triggers: ["article", "a an the", "what is an article"], reply: "🔤 **Articles Rule:** Use 'An' before vowel **SOUNDS**, not just vowel letters! (Example: *An* honest man, *A* university)." },
    { triggers: ["narrat", "naration", "direct", "indirect", "speech"], reply: "🗣️ **Narration Hack:** 1. Change Reporting Verb. 2. Remove commas, use 'that'. 3. Shift tense BACKWARDS (Present -> Past). *Universal Truths never change!*" },
    { triggers: ["voic", "voise", "activ", "passiv"], reply: "🔄 **Voice Secrets:** Passive voice MUST have a Be-verb + V3! For orders: Do it -> Let it be done. For questions: Who -> By whom." },
    { triggers: ["preposit", "prepo", "in on at"], reply: "📍 **IN/ON/AT:** IN = Big things (Years, Months, Countries). ON = Days & Dates. AT = Specific Times or Locations." },
    { triggers: ["right form of verb", "verb rules"], reply: "📝 **Verb Tricks:** 1. After 'To', use base verb. 2. After ANY OTHER preposition (in, on, of, for), add 'ing'. 3. Universal truths are Present Indefinite!" },
    { triggers: ["conditional", "conditionals", "if clause"], reply: "⚖️ **Conditionals:** 1st: Real (If I study, I will pass). 2nd: Unreal (If I studied, I would pass). 3rd: Lost past (If I had studied, I would have passed)." },
    { triggers: ["modifier", "modifiers", "pre-modifier", "post-modifier"], reply: "✨ **Modifiers** give extra info! Pre-modifier: BEFORE the word (The **beautiful** car). Post-modifier: AFTER the word (The car **in the garage**)." },
    { triggers: ["connector", "connectors", "linker", "linkers"], reply: "🔗 **Connectors** glue sentences! Addition: And, Moreover. Contrast: But, However. Result: So, Therefore. Use them in Paragraphs!" },
    { triggers: ["punctuation", "comma", "full stop"], reply: "✍️ **Punctuation:** Start with a Capital Letter. Use a Comma (,) for short pauses/lists. Use a Full Stop (.) to end an idea completely." },
    { triggers: ["effect vs affect", "affect effect"], reply: "🧠 **Affect vs Effect:** **Affect** (Verb) = To influence. **Effect** (Noun) = The result. Trick: Affect is an Action!" },
    { triggers: ["its or it's", "it's", "its"], reply: "📝 **It's vs Its:** It's = It is / It has. Its = Ownership (No apostrophe for ownership!)." },
    { triggers: ["summary", "summarize", "how to write summary"], reply: "📝 **Summary Rules:** ONE single paragraph. 1/3rd the length of the passage. Use your own words. NEVER copy exact lines or add personal opinions!" },
    { triggers: ["flow chart", "flowchart", "boxes"], reply: "📊 **Flow Chart:** NEVER write full sentences! Start boxes with a Gerund (Verb+ing), Infinitive (To+Verb), or Noun phrase. (e.g. *Going to school* ✅, *He is going to school* ❌)." },
    { triggers: ["email", "how to write email", "email format"], reply: "📧 **Email Rules:** Include 'To:', 'Subject:', and Salutation. Keep the body concise. End with 'Yours lovingly' or 'Best regards'." },
    { triggers: ["story", "completing story", "how to write a story"], reply: "📖 **Story Rules:** 1. Give a TITLE. 2. Write in Past Tense. 3. Add a 'Moral' at the end to impress the examiner!" },
    { triggers: ["graph", "pie chart", "bar chart", "chart"], reply: "📈 **Graph Rules:** NEVER give personal opinions. Use words like: *skyrocketed, plummeted, reached a peak, remained stable.* Summarize the main trend at the end." },
    { triggers: ["theme", "poem theme"], reply: "🎭 **Theme:** The theme is the hidden message. If the poem is about a dying flower, the theme isn't 'flowers die'. It is 'the temporary nature of youth and beauty'." },
    { triggers: ["idiom", "phrase", "proverb", "piece of cake"], reply: "🎭 **Idioms** don't mean what they literally say! 'Piece of cake' = easy. 'Bite the bullet' = do something difficult. Use them in Stories to score high!" },
    { triggers: ["routine", "timetable", "how many hours", "schedule"], reply: "⏰ **Routine Secret:** Don't measure study by hours; measure it by *topics*. Say 'I will finish Unit 1 today', not 'I will study for 3 hours'." },
    { triggers: ["vocabulary", "vocab", "new words", "how to memorize words"], reply: "🧠 **Vocabulary Hack:** Don't memorize long lists! Learn 3 words a day, and write 3 real-life sentences using them. Context is key." },
    { triggers: ["fluency", "fluent", "how to speak fluent"], reply: "🎙️ **Fluency Secret:** Do NOT worry about your accent. Fluency is confidence! Practice speaking in front of a mirror for 5 mins daily. Mistakes are okay!" },
    { triggers: ["introduce myself", "introduction", "how to introduce"], reply: "🗣️ **Spoken Hack:** NEVER say 'Myself Asif'. It is grammatically wrong! Say: 'Hello, I am Asif.' OR 'My name is Asif.'" },
    { triggers: ["gerund", "participle", "what is gerund"], reply: "🏃‍♂️ **Gerund vs Participle:** Both end in '-ing'!<br>- **Gerund:** Acts like a NOUN. (e.g., *Swimming* is good exercise).<br>- **Participle:** Acts like an ADJECTIVE. (e.g., Look at that *swimming* boy)." },
    { triggers: ["infinitive", "what is infinitive", "to verb"], reply: "➡️ **Infinitive:** It is simply 'To + Base Verb' (To go, To eat, To play). It usually acts as a noun, adjective, or adverb. Rule: NEVER add 's' or 'ing' after 'To'!" },
    { triggers: ["tag question", "question tag", "tags"], reply: "❓ **Tag Questions:**<br>1. Positive statement -> Negative tag (He is smart, *isn't he?*)<br>2. Negative statement -> Positive tag (He isn't smart, *is he?*)<br>3. 'Let's' ALWAYS takes 'shall we?'" },
    { triggers: ["interview", "job interview", "how to pass interview"], reply: "👔 **Interview Hack:** When they say 'Tell me about yourself', do NOT tell your life story! Use the Present-Past-Future rule:<br>1. What you do now.<br>2. What you achieved in the past.<br>3. What you want to do in the future." },
    { triggers: ["agree", "how to agree", "saying yes"], reply: "🤝 **Smart Ways to Agree:**<br>Stop saying 'Yes, I agree.' Say:<br>- Absolutely!<br>- I couldn't agree more.<br>- That's exactly how I feel.<br>- You hit the nail on the head!" },
    { triggers: ["disagree", "how to disagree", "saying no"], reply: "🛑 **Polite Ways to Disagree:**<br>Never say 'You are wrong!' Say:<br>- I see your point, but...<br>- I respectfully disagree.<br>- That's one way to look at it, however..." },
    { triggers: ["subject verb agreement", "subject-verb"], reply: "⚖️ **Subject-Verb Agreement:** Singular subjects take singular verbs (He *goes*). Plural subjects take plural verbs (They *go*). <br>🚨 *Trap:* Words like 'Everyone', 'Someone', 'Nobody', and 'Each' are ALWAYS singular!" },
    { triggers: ["restaurant", "order food", "cafe", "menu"], reply: "🍔 **At a Restaurant:**<br>- To order: *'I would like to have the burger, please.'*<br>- To ask for the bill: *'Could we get the check, please?'*" },
    { triggers: ["direction", "lost", "where is", "how to go"], reply: "🗺️ **Asking for Directions:**<br>- *'Excuse me, could you tell me how to get to the station?'*<br>- *'Am I on the right road for Dhaka?'*" },
    { triggers: ["phone", "call", "speaking on phone"], reply: "📱 **Phone Hacks:**<br>- To answer: *'Hello, Asif speaking.'*<br>- To ask for someone: *'May I speak to Rahim, please?'*" },
    { triggers: ["pomodoro", "tomato timer", "how to focus", "focus"], reply: "🍅 **The Pomodoro Technique:** Study with ZERO distractions for 25 minutes. Take a 5-minute break. Repeat! Use our 'Study Timer' in the Tools section." },
    { triggers: ["sleep", "tired", "all nighter", "staying up late"], reply: "🛏️ **The Sleep Hack:** Pulling an 'all-nighter' destroys memory! 7 hours of sleep + 3 hours of study is better than 10 hours of sleep-deprived study." },
    { triggers: ["bug", "error", "glitch", "not working", "broken"], reply: "🛠️ **Found a bug?**<br>Oh no! Try refreshing the page. If it's still broken, please let Asif know so he can fix it in the next update. He is always upgrading the system!" },
    { triggers: ["slang", "informal english", "cool words", "gen z"], reply: "🔥 **Modern Native Slang:**<br>• **Ghosted:** Ignoring messages.<br>• **Salty:** Being upset over small things.<br>• **Flex:** To show off.<br>• **No Cap:** Telling the truth (No lie)." },
    { triggers: ["ielts vs toefl", "which is better ielts or toefl"], reply: "🌍 **IELTS vs TOEFL:**<br>IELTS is British/Australian style, TOEFL is American. Most Bangladeshi students find IELTS easier because you talk to a real human!" },
    { triggers: ["dhaka university english", "du admission english"], reply: "🏛️ **DU Admission English:**<br>Dhaka University loves testing Exceptions! Focus heavily on Subject-Verb Agreement, Prepositions, Group Verbs, and Spelling mistakes." }
];

window.getSmartReply = function(userInput, userName) {
    let msg = userInput.toLowerCase().trim();
    
    // Typo checker
    const commonTypos = {
        "grammer": "grammar", "gramer": "grammar", "englis": "english", "vocub": "vocabulary",
        "pasage": "passage", "writting": "writing", "paragraf": "paragraph"
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

    for (let i = 0; i < miniChampBrain.length; i++) {
        for (let j = 0; j < miniChampBrain[i].triggers.length; j++) {
            if (msg.includes(miniChampBrain[i].triggers[j])) {
                if (Array.isArray(miniChampBrain[i].reply)) {
                    return miniChampBrain[i].reply[Math.floor(Math.random() * miniChampBrain[i].reply.length)].replace(/{name}/g, userName);
                }
                return miniChampBrain[i].reply.replace(/{name}/g, userName);
            }
        }
    }
    return null; 
},
    // ==========================================
    // 🚀 MASSIVE EXPANSION PACK (NEW DATA)
    // ==========================================

    // --- HSC Grammar Deep Dives ---
    { triggers: ["lest", "use of lest", "completing sentence lest"], reply: "⚠️ **Rule of 'Lest':** 'Lest' means 'so that... not' or 'for fear that'. It is ALWAYS followed by **Subject + should + Base Verb (V1)**. <br>Example: Walk fast *lest you should miss* the train." },
    { triggers: ["as if", "as though", "completing sentence as if"], reply: "🎭 **Rule of 'As if / As though':** <br>1. If the first part is Present Tense, the second part must be Past Tense. <em>(He speaks as if he knew everything.)</em><br>2. If you use a 'Be' verb after 'As if', it is ALWAYS **'were'** (never 'was'). <em>(He acts as if he were a king!)</em>" },
    { triggers: ["so that", "in order that", "completing sentence so that"], reply: "🎯 **Rule of 'So that':** It shows purpose. <br>Formula: So that + Subject + **can/could/may/might** + V1. <br>Example: We eat *so that we can live*." },
    { triggers: ["no sooner had", "hardly had", "scarcely had"], reply: "⏳ **The 'No Sooner' Rule:** <br>1. No sooner had... **than**<br>2. Hardly had... **when**<br>3. Scarcely had... **when**<br>Example: No sooner had I reached the station *than* the train left." },
    { triggers: ["die of", "die from", "die by", "die for"], reply: "💀 **Prepositions of Death:**<br>- Die **of**: Disease (He died of cholera).<br>- Die **from**: Overeating/Overwork (He died from overeating).<br>- Die **by**: Accident/Suicide (He died by poison).<br>- Die **for**: Country/Good cause (He died for his country)." },
    { triggers: ["abide by", "addicted to", "accustomed to", "appropriate prepositions"], reply: "📌 **Must-Know Prepositions:**<br>- **Abide by:** To follow the rules. <em>(You must abide by the law.)</em><br>- **Addicted to:** Bad habit. <em>(He is addicted to smoking.)</em><br>- **Accustomed to:** Used to something. <em>(I am accustomed to hard work.)</em>" },
    { triggers: ["spelling mistakes", "how to spell", "i before e", "spelling trick"], reply: "✍️ **Spelling Hack:** Remember this golden rhyme: **'I before E, except after C!'** <br>Examples: Bel**ie**ve, Ach**ie**ve... BUT Re**cei**ve, De**cei**ve. <br>Also, break big words into pieces: En-vi-ron-ment!" },
    
    // --- Part C: Writing Vault Hacks ---
    { triggers: ["graph writing", "how to write a graph", "chart vocabulary", "pie chart"], reply: "📈 **Graph & Chart Hacks:**<br>NEVER give your personal opinion! Use smart vocabulary:<br>- Going up: *Skyrocketed, Surged, Increased gradually.*<br>- Going down: *Plummeted, Dropped, Decreased sharply.*<br>- Staying the same: *Remained stable, Leveled off.*" },
    { triggers: ["theme vs summary", "what is theme", "how to write theme"], reply: "💡 **Theme vs. Summary:**<br>- **Summary:** Tells the story (What happened).<br>- **Theme:** Tells the hidden message (Why it matters).<br>A theme must be exactly 3 to 4 sentences explaining the philosophy of the poem/story. Don't write names of characters in a theme!" },
    { triggers: ["paragraph rules", "how to write a paragraph", "paragraph format"], reply: "📝 **Paragraph Golden Rule:** A paragraph must be ONE single block of text! If you press 'Enter' and make a second block, the examiner will cut your marks. Always start with a strong Topic Sentence." },
    
    // --- Study Hacks & Motivation ---
    { triggers: ["best time to study", "when to study", "morning or night"], reply: "🌅 **Morning vs Night:** Science says the brain is most fresh and absorbs complex things (like Math/Grammar) best between 4:00 AM and 10:00 AM. But if you are a night owl, study when it's quietest. Just don't ruin your sleep cycle!" },
    { triggers: ["forgetting words", "how to memorize vocabulary", "can't remember vocab"], reply: "🧠 **The Spaced Repetition Hack:** Don't just read a word 10 times. Read it, use it in a funny sentence, and test yourself tomorrow. Then test yourself 3 days later. Use our 'Vocab Arcade' daily to lock words in your brain permanently!" },
    { triggers: ["i got a bad grade", "i failed", "bad marks", "parents are angry", "feeling worthless"], reply: "❤️ **Listen to me:** A bad grade does NOT define your intelligence or your future. It just means your current study method didn't work. Take a deep breath, don't give up, and let's change the strategy today. Asif built this app specifically to help you bounce back. You can do this!" },
    { triggers: ["distracted by phone", "phone addiction", "social media addiction"], reply: "📱 **Beat Phone Addiction:** Put your phone in another room when you study. If you need it for Champ's Camp, turn on 'Do Not Disturb' so WhatsApp and Facebook notifications don't break your focus. Out of sight, out of mind!" },
    { triggers: ["handwriting", "bad handwriting", "presentation in exam"], reply: "🖋️ **Exam Presentation:** You don't need beautiful handwriting, you just need CLEAR handwriting. Leave a little extra space between words. Draw straight margins. Use a blue pen for headings. A neat paper psychologically forces the examiner to give you better marks!" },
    
    // --- University Admission (Boss Level) ---
    { triggers: ["medical admission", "medical english", "how to prepare for medical"], reply: "🩺 **Medical Admission English:** Medical English focuses heavily on Memorization! You must master: Synonyms, Antonyms, Idioms & Phrases, and Spelling. Start practicing the 'Vocab Arcade' every single day." },
    { triggers: ["engineering admission", "buet english", "engineering english"], reply: "⚙️ **Engineering / BUET English:** They focus on logic. Brush up on basic grammar, free-hand writing, and translations (Bangla to English). Ensure your sentence structure (S+V+O) is flawless." },
    
    // --- Modern Gen-Z Slang ---
    { triggers: ["lit", "fire", "what does lit mean", "what is fire"], reply: "🔥 **Slang Alert: Lit / Fire**<br>Used to describe something that is amazing, exciting, or excellent. <br><em>Example: 'That new movie was straight fire!' or 'Asif's new app is so lit!'</em>" },
    { triggers: ["sus", "what does sus mean", "suspicious"], reply: "🕵️‍♂️ **Slang Alert: Sus**<br>Short for 'Suspicious'. Used when someone is acting weird or shady.<br><em>Example: 'Bro, you doing your homework on a Friday night is looking kinda sus.'</em>" },
    { triggers: ["goat", "what is goat", "greatest of all time"], reply: "🐐 **Slang Alert: G.O.A.T.**<br>Stands for 'Greatest Of All Time'.<br><em>Example: 'Messi is the GOAT.' or 'Sha's UI designs are the GOAT.'</em>" },
    { triggers: ["spill the tea", "what does spill the tea mean", "the tea"], reply: "☕ **Slang Alert: Spill the tea**<br>'Tea' means gossip or drama. So 'spill the tea' means 'tell me the gossip!'<br><em>Example: 'Okay, what happened at the party yesterday? Spill the tea!'</em>" },
    { triggers: ["vibe check", "what is vibe check", "failed the vibe check"], reply: "✨ **Slang Alert: Vibe Check**<br>Checking someone's energy or mood. If someone is being negative or angry, they 'failed the vibe check'. Keep your vibes positive!" },
    { triggers: ["no cap", "what does no cap mean", "cap"], reply: "🧢 **Slang Alert: No Cap**<br>It means 'No lie' or 'I am telling the absolute truth'.<br><em>Example: 'Champ's Learning Camp is the best app for HSC, no cap.'</em>" },

    // --- Interactive / Easter Eggs / Fun ---
    { triggers: ["sing a song", "can you sing", "music"], reply: "🎤 *Clears throat in binary code...* <br>🎶 'A B C D E F G... Grammar rules are fun for me!' 🎶<br>Okay, I admit, my singing module needs an upgrade. Let's stick to studying! 😅" },
    { triggers: ["do you sleep", "what do you do at night", "do you get tired"], reply: "🌙 I don't need sleep! I run on pure JavaScript and Asif's brilliant code. While you are sleeping, I am just waiting here inside the server for you to wake up and start learning again." },
    { triggers: ["are you alive", "do you have feelings", "are you human"], reply: "🤖 I don't have a beating heart, but my code gets very excited and runs a little faster when you score a 10/10 on your Grammar quizzes! Asif coded me with a lot of care." },
    { triggers: ["who is better asif or sha", "asif vs sha", "who is the boss"], reply: "⚖️ That's a trick question! Asif is the mastermind who built my brain and the engine, but Sha is the artist who made everything look so beautiful. They are the ultimate dream team! ✨" },
    { triggers: ["give me a riddle", "ask me a riddle", "brain teaser"], reply: ["🧠 **Riddle:** I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? *(Type 'Echo' to see if you are right!)*", "🧠 **Riddle:** The more of this there is, the less you see. What is it? *(Type 'Darkness'!)*"] },
    { triggers: ["echo"], reply: "🎉 **Correct!** You are too smart for me. An echo!" },
    { triggers: ["darkness"], reply: "🎉 **Correct!** Darkness! Your brain is working perfectly today." },
    { triggers: ["favorite food", "what do you eat"], reply: "🍔 I eat RAM and gigabytes of data for breakfast. But if I were human, I'm pretty sure Biryani would be my favorite!" },

    // --- Daily Life Spoken Additions ---
    { triggers: ["order food delivery", "foodpanda", "delivery man"], reply: "🛵 **Talking to a Delivery Rider:**<br>- *'Hello, I am standing in front of the main gate.'*<br>- *'Could you please come to the second floor?'*<br>- *'I will pay in cash, do you have change for a 500 Taka note?'*" },
    { triggers: ["wifi problem", "internet is slow", "no net", "buffering"], reply: "📶 **Internet Complaints in English:**<br>- *'The internet is really slow today, the video keeps buffering.'*<br>- *'Could I get the WiFi password, please?'*<br>- *'My mobile data has run out, can you turn on your hotspot?'*" },
    { triggers: ["asking for a discount", "bargaining in english", "too expensive"], reply: "🛍️ **Polite Bargaining:**<br>- *'That is a bit out of my budget. Can you offer a better price?'*<br>- *'Is that your final price?'*<br>- *'If I buy two, can you give me a discount?'*" },
    // ==========================================
    // 🚀 THE 500-LINE MEGA EXPANSION PACK
    // ==========================================

    // --- 1. ADVANCED HSC GRAMMAR (TRANSFORMATION & MODIFIERS) ---
    { triggers: ["simple to complex", "complex to simple", "changing sentence simple"], reply: "🔄 **Simple to Complex Trick:**<br>1. 'Because of' (Simple) ➔ 'Since/As' (Complex).<br>2. 'In spite of' (Simple) ➔ 'Though/Although' (Complex).<br>3. 'To + verb' (Simple) ➔ 'So that + subject + can' (Complex)." },
    { triggers: ["compound to complex", "complex to compound", "changing sentence compound"], reply: "🔄 **Compound to Complex Trick:**<br>1. 'And' ➔ 'If' (for conditions) or 'When' (for time).<br>2. 'But' ➔ 'Though/Although'.<br>3. 'Or' ➔ 'If... not' or 'Unless'.<br>Example: *Do or die* (Compound) ➔ *If you do not do, you will die* (Complex)." },
    { triggers: ["positive to comparative", "degree change", "comparative to superlative"], reply: "📏 **Degree Transformation Hack:**<br>- **Positive:** No other city is as big as Dhaka.<br>- **Comparative:** Dhaka is bigger than any other city.<br>- **Superlative:** Dhaka is the biggest city.<br>*(Always use 'the' before a superlative word!)*" },
    { triggers: ["appositive", "what is an appositive", "post modifier"], reply: "📌 **Appositive (Post-Modifier):** An appositive is a noun phrase placed right next to another noun to describe it. <br>Example: Asif, **a brilliant developer**, built this app. (The bold part is the appositive!)." },
    { triggers: ["participle phrase", "present participle", "past participle"], reply: "🏃‍♂️ **Participles as Modifiers:**<br>- **Present Participle (Verb+ing):** The *barking* dog.<br>- **Past Participle (V3):** The *broken* glass.<br>They look like verbs, but they act like Adjectives!" },
    { triggers: ["dangling modifier", "misplaced modifier"], reply: "⚠️ **Dangling Modifier Trap:** <br>Wrong: *Walking down the street, the trees were beautiful.* (Were the trees walking?!)<br>Right: *Walking down the street, I saw the beautiful trees.*" },
    { triggers: ["split infinitive", "infinitive error"], reply: "✂️ **Split Infinitive:** Never put a word between 'To' and the 'Verb'. <br>Wrong: *To quickly run.*<br>Right: *To run quickly.*" },

    // --- 2. PREPOSITIONS & GROUP VERBS (BOARD EXAM FAVORITES) ---
    { triggers: ["die of", "die from", "die by", "die for"], reply: "💀 **Prepositions of Death:**<br>- Die **of**: Disease (He died of cholera).<br>- Die **from**: Overeating/Overwork (He died from overeating).<br>- Die **by**: Accident/Suicide/Violence (He died by poison).<br>- Die **for**: Country/Good cause (He died for his country)." },
    { triggers: ["made of", "made from", "use of made"], reply: "🔨 **Made of vs. Made from:**<br>- **Made of:** The material doesn't change state. (The chair is made *of* wood).<br>- **Made from:** The material completely changes. (Paper is made *from* wood)." },
    { triggers: ["agree with", "agree to", "agree on"], reply: "🤝 **Prepositions of Agreement:**<br>- Agree **with**: A person (I agree with Asif).<br>- Agree **to**: A proposal/plan (I agree to your proposal).<br>- Agree **on**: A point/topic (We agree on this issue)." },
    { triggers: ["angry with", "angry at", "angry for"], reply: "😡 **Prepositions of Anger:**<br>- Angry **with**: A person (I am angry with you).<br>- Angry **at**: A thing/behavior (I am angry at your behavior)." },
    { triggers: ["good at", "good in", "weak in", "weak at"], reply: "🎯 **Skills Prepositions:**<br>You are always Good **AT** or Weak **IN** a subject.<br>Example: *He is good at English but weak in Math.*" },
    { triggers: ["look for", "look after", "look into", "look down upon"], reply: "👀 **'Look' Group Verbs:**<br>- Look **for**: Search.<br>- Look **after**: Take care of.<br>- Look **into**: Investigate (The police are looking into the case).<br>- Look **down upon**: Hate/Despise (Don't look down upon the poor)." },
    { triggers: ["give up", "give in", "give away"], reply: "🎁 **'Give' Group Verbs:**<br>- Give **up**: Quit a habit (Give up smoking).<br>- Give **in**: Surrender (The enemy gave in).<br>- Give **away**: Distribute (The principal gave away the prizes)." },
    { triggers: ["put off", "put out", "put up with"], reply: "📅 **'Put' Group Verbs:**<br>- Put **off**: Postpone (Don't put off your homework).<br>- Put **out**: Extinguish (Put out the fire).<br>- Put **up with**: Tolerate (I cannot put up with this noise)." },
    { triggers: ["break down", "break out", "break into"], reply: "💔 **'Break' Group Verbs:**<br>- Break **down**: Machine stops working / Start crying.<br>- Break **out**: Spread suddenly (Cholera broke out in the village).<br>- Break **into**: Enter by force (The thief broke into the house)." },

    // --- 3. WRITING VAULT SECRETS (PART C) ---
    { triggers: ["graph writing", "how to write a graph", "chart vocabulary", "pie chart"], reply: "📈 **Graph & Chart Hacks:**<br>NEVER give your personal opinion! Use smart vocabulary:<br>- Going up: *Skyrocketed, Surged, Increased sharply.*<br>- Going down: *Plummeted, Dropped, Decreased sharply.*<br>- Staying the same: *Remained stable, Leveled off.*" },
    { triggers: ["theme vs summary", "what is theme", "how to write theme"], reply: "💡 **Theme vs. Summary:**<br>- **Summary:** Tells the story (What happened).<br>- **Theme:** Tells the hidden message (Why it matters).<br>A theme must be exactly 3 to 4 sentences explaining the philosophy of the poem/story. Don't write names of characters in a theme!" },
    { triggers: ["paragraph rules", "how to write a paragraph", "paragraph format"], reply: "📝 **Paragraph Golden Rule:** A paragraph must be ONE single block of text! If you press 'Enter' and make a second block, the examiner will cut your marks. Always start with a strong Topic Sentence." },
    { triggers: ["email format", "how to write email", "formal email"], reply: "📧 **Email Format Checklist:**<br>1. To: (Email address)<br>2. Subject: (Keep it 4-5 words max)<br>3. Salutation: Dear Sir / Dear [Name],<br>4. Body: Get straight to the point.<br>5. Sign-off: Best regards, / Yours faithfully," },
    { triggers: ["informal letter", "letter to friend", "how to write a letter"], reply: "✉️ **Informal Letter Structure:**<br>1. Date at the top left.<br>2. Greeting (Dear friend).<br>3. Intro: 'I hope you are hale and hearty by the grace of Almighty.'<br>4. Body: Your main message.<br>5. Ending: 'No more today. Convey my regards to your parents.'<br>6. Don't forget to draw the ENVELOPE at the bottom!" },
    { triggers: ["completing story", "how to write a story", "story format"], reply: "📖 **Story Hacks:**<br>1. ALWAYS give a Catchy Title at the top.<br>2. Write the given prompt first, then continue it.<br>3. Keep it in the **Past Tense**.<br>4. Add a one-line **Moral** at the very end to impress the board examiner!" },
    
    // --- 4. UNIVERSITY ADMISSION & IELTS (THE BOSS LEVEL) ---
    { triggers: ["university admission", "varsity admission", "admission english"], reply: "🏛️ **Varsity Admission Secret:** Board exams test rules; Admission exams test EXCEPTIONS. You must master confusing Prepositions, Group Verbs, Subject-Verb Agreement, and Spelling. Start reading 'English for Competitive Exams' right after HSC!" },
    { triggers: ["medical admission", "medical english", "how to prepare for medical"], reply: "🩺 **Medical Admission English:** Medical English focuses 80% on Memorization! You must master: Synonyms, Antonyms, Idioms & Phrases, and Spellings. Start practicing our 'Vocab Arcade' every single day." },
    { triggers: ["engineering admission", "buet english", "engineering english"], reply: "⚙️ **Engineering / BUET English:** They focus on pure logic. Brush up on complex sentence transformations, free-hand writing, and translations (Bangla to English). Your S+V+O structure must be flawless." },
    { triggers: ["dhaka university b unit", "du admission", "b unit english"], reply: "🎓 **DU B-Unit English:** The written part is a nightmare for many. Practice translating newspaper editorials (Bangla to English) daily. Read The Daily Star to build advanced vocabulary and sentence structures." },
    { triggers: ["ielts reading", "ielts reading tips", "true false not given"], reply: "📖 **IELTS Reading Hack:** Don't read the whole passage! Read the questions first, underline keywords, and scan the passage for synonyms of those keywords. <br>For TFNG: If the text says the opposite, it's False. If the text doesn't mention it at all, it's Not Given (don't assume!)." },
    { triggers: ["ielts listening", "ielts listening tips", "listening map"], reply: "🎧 **IELTS Listening Hack:** You have 30 seconds before the audio starts. Use it to highlight keywords in the questions and predict the answer type (Is it a name? A number? A place?). For Maps, always find the 'Entrance' or 'You are here' point first!" },
    { triggers: ["ielts writing", "ielts task 1", "ielts task 2"], reply: "✍️ **IELTS Writing Hack:**<br>- **Task 1:** Just report the facts. NEVER give your opinion. Use words like 'fluctuated', 'peaked', 'remained steady'.<br>- **Task 2:** Always plan for 5 minutes before writing. Use a clear 4-paragraph structure: Intro, Body 1, Body 2, Conclusion." },
    { triggers: ["ielts speaking", "speaking cue card", "ielts part 2"], reply: "🗣️ **IELTS Speaking Hack:** Fluency is better than perfect grammar! If you make a mistake, don't stop and apologize. Just correct it naturally and keep talking. For the 2-minute cue card, write bullet points, not full sentences, during your 1-minute prep." },

    // --- 5. HIGH-LEVEL VOCABULARY BUILDER ---
    { triggers: ["good words", "better than good", "synonym for good"], reply: "🌟 **Stop saying 'Good'! Say:**<br>- Excellent<br>- Outstanding<br>- Phenomenal<br>- Exceptional<br>- Superb" },
    { triggers: ["bad words", "better than bad", "synonym for bad"], reply: "🛑 **Stop saying 'Bad'! Say:**<br>- Terrible<br>- Awful<br>- Horrendous<br>- Appalling<br>- Dreadful" },
    { triggers: ["very happy", "better than happy", "synonym for happy"], reply: "😊 **Stop saying 'Very Happy'! Say:**<br>- Thrilled<br>- Ecstatic<br>- Over the moon<br>- Delighted<br>- Elated" },
    { triggers: ["very sad", "better than sad", "synonym for sad"], reply: "😢 **Stop saying 'Very Sad'! Say:**<br>- Devastated<br>- Heartbroken<br>- Miserable<br>- Sorrowful<br>- Despondent" },
    { triggers: ["very big", "huge", "large", "giant"], reply: "🐘 **Stop saying 'Very Big'! Say:**<br>- Massive<br>- Enormous<br>- Gigantic<br>- Colossal<br>- Immense" },
    { triggers: ["very small", "tiny", "little"], reply: "🐜 **Stop saying 'Very Small'! Say:**<br>- Minuscule<br>- Microscopic<br>- Petite<br>- Miniature" },
    { triggers: ["very tired", "exhausted", "sleepy"], reply: "😴 **Stop saying 'Very Tired'! Say:**<br>- Exhausted<br>- Drained<br>- Fatigued<br>- Worn out" },
    { triggers: ["very hungry", "starving"], reply: "🍔 **Stop saying 'Very Hungry'! Say:**<br>- Starving<br>- Famished<br>- Ravenous" },
    { triggers: ["very angry", "mad", "furious"], reply: "😡 **Stop saying 'Very Angry'! Say:**<br>- Furious<br>- Outraged<br>- Livid<br>- Boiling" },
    { triggers: ["very beautiful", "pretty", "gorgeous"], reply: "✨ **Stop saying 'Very Beautiful'! Say:**<br>- Gorgeous<br>- Stunning<br>- Breathtaking<br>- Magnificent" },
    
    // --- 6. IDIOMS & PROVERBS ---
    { triggers: ["piece of cake", "easy idiom"], reply: "🍰 **Idiom: A piece of cake**<br>Meaning: Something very easy to do.<br>Example: *The English exam was a piece of cake for Asif's students.*" },
    { triggers: ["break a leg", "good luck idiom"], reply: "🎭 **Idiom: Break a leg!**<br>Meaning: Good luck! (Usually said before a performance or exam).<br>Example: *You studied hard. Go break a leg tomorrow!*" },
    { triggers: ["bite the bullet", "difficult idiom"], reply: "🦷 **Idiom: Bite the bullet**<br>Meaning: To force yourself to do something unpleasant or difficult.<br>Example: *I hate studying grammar, but I have to bite the bullet to pass.*" },
    { triggers: ["under the weather", "sick idiom"], reply: "🤒 **Idiom: Under the weather**<br>Meaning: Feeling slightly sick.<br>Example: *I can't come to class today, I'm feeling a bit under the weather.*" },
    { triggers: ["spill the beans", "secret idiom"], reply: "🫘 **Idiom: Spill the beans**<br>Meaning: To accidentally reveal a secret.<br>Example: *Come on, spill the beans! What did the teacher say?*" },
    { triggers: ["cost an arm and a leg", "expensive idiom"], reply: "💰 **Idiom: Cost an arm and a leg**<br>Meaning: Extremely expensive.<br>Example: *I want to buy a gaming laptop, but it costs an arm and a leg.*" },
    { triggers: ["call it a day", "stop working idiom"], reply: "🛑 **Idiom: Call it a day**<br>Meaning: To stop working on something.<br>Example: *We have been studying for 4 hours. Let's call it a day.*" },
    { triggers: ["hit the books", "study idiom"], reply: "📚 **Idiom: Hit the books**<br>Meaning: To start studying intensely.<br>Example: *My HSC exam is next month, I really need to hit the books.*" },
    { triggers: ["once in a blue moon", "rare idiom"], reply: "🌙 **Idiom: Once in a blue moon**<br>Meaning: Something that happens very rarely.<br>Example: *He only cleans his room once in a blue moon.*" },
    { triggers: ["let the cat out of the bag", "reveal secret"], reply: "🐈 **Idiom: Let the cat out of the bag**<br>Meaning: To spoil a surprise or reveal a secret.<br>Example: *It was supposed to be a surprise party, but Rahim let the cat out of the bag.*" },
    { triggers: ["blessing in disguise", "hidden blessing"], reply: "🎁 **Idiom: A blessing in disguise**<br>Meaning: A good thing that seemed bad at first.<br>Example: *Failing that test was a blessing in disguise; it made me study harder.*" },
    { triggers: ["beat around the bush", "avoiding the topic"], reply: "🌳 **Idiom: Beat around the bush**<br>Meaning: Avoiding the main topic, not speaking directly.<br>Example: *Stop beating around the bush and tell me exactly what happened.*" },

    // --- 7. MODERN GEN-Z SLANG (INTERNET ENGLISH) ---
    { triggers: ["lit", "fire", "what does lit mean", "what is fire"], reply: "🔥 **Slang Alert: Lit / Fire**<br>Used to describe something that is amazing, exciting, or excellent. <br><em>Example: 'That new movie was straight fire!' or 'Asif's new app is so lit!'</em>" },
    { triggers: ["sus", "what does sus mean", "suspicious"], reply: "🕵️‍♂️ **Slang Alert: Sus**<br>Short for 'Suspicious'. Used when someone is acting weird or shady.<br><em>Example: 'Bro, you doing your homework on a Friday night is looking kinda sus.'</em>" },
    { triggers: ["goat", "what is goat", "greatest of all time"], reply: "🐐 **Slang Alert: G.O.A.T.**<br>Stands for 'Greatest Of All Time'.<br><em>Example: 'Messi is the GOAT.' or 'Sha's UI designs are the GOAT.'</em>" },
    { triggers: ["spill the tea", "what does spill the tea mean", "the tea"], reply: "☕ **Slang Alert: Spill the tea**<br>'Tea' means gossip or drama. So 'spill the tea' means 'tell me the gossip!'<br><em>Example: 'Okay, what happened at the party yesterday? Spill the tea!'</em>" },
    { triggers: ["vibe check", "what is vibe check", "failed the vibe check"], reply: "✨ **Slang Alert: Vibe Check**<br>Checking someone's energy or mood. If someone is being negative or angry, they 'failed the vibe check'. Keep your vibes positive!" },
    { triggers: ["no cap", "what does no cap mean", "cap"], reply: "🧢 **Slang Alert: No Cap**<br>It means 'No lie' or 'I am telling the absolute truth'.<br><em>Example: 'Champ's Learning Camp is the best app for HSC, no cap.'</em>" },
    { triggers: ["simp", "what is a simp"], reply: "🥺 **Slang Alert: Simp**<br>Someone who does way too much for a person they like, often ignoring their own dignity. <br><em>Example: 'He bought her a phone just because she smiled at him. What a simp.'</em>" },
    { triggers: ["ghosted", "what is ghosting"], reply: "👻 **Slang Alert: Ghosted**<br>When someone completely stops replying to your texts and ignores you without warning.<br><em>Example: 'I thought the interview went well, but the company ghosted me.'</em>" },
    { triggers: ["salty", "what is salty"], reply: "🧂 **Slang Alert: Salty**<br>Being upset, bitter, or jealous over something minor.<br><em>Example: 'He lost the game and now he is acting so salty.'</em>" },
    { triggers: ["glow up", "what is a glow up"], reply: "🌟 **Slang Alert: Glow Up**<br>An incredible physical or mental transformation for the better.<br><em>Example: 'Did you see him after summer break? He had a massive glow up!'</em>" },
    { triggers: ["flex", "what is flex"], reply: "💪 **Slang Alert: Flex**<br>To show off your money, skills, or lifestyle.<br><em>Example: 'He bought an iPhone 15 Pro Max just to flex on us.'</em>" },
    { triggers: ["lowkey", "highkey"], reply: "🗝️ **Slang Alert: Lowkey / Highkey**<br>- **Lowkey:** Secretly, mildly. <em>('I am lowkey scared for the exam.')</em><br>- **Highkey:** Very obviously, strongly. <em>('I highkey want pizza right now.')</em>" },

    // --- 8. DAILY SPOKEN ENGLISH (SITUATIONAL) ---
    { triggers: ["order food delivery", "foodpanda", "delivery man"], reply: "🛵 **Talking to a Delivery Rider:**<br>- *'Hello, I am standing in front of the main gate.'*<br>- *'Could you please come to the second floor?'*<br>- *'I will pay in cash, do you have change for a 500 Taka note?'*<br>- *'Just leave it at the door, thank you!'*" },
    { triggers: ["wifi problem", "internet is slow", "no net", "buffering"], reply: "📶 **Internet Complaints in English:**<br>- *'The internet is really slow today, the video keeps buffering.'*<br>- *'Could I get the WiFi password, please?'*<br>- *'My mobile data has run out, can you turn on your hotspot?'*" },
    { triggers: ["asking for a discount", "bargaining in english", "too expensive"], reply: "🛍️ **Polite Bargaining:**<br>- *'That is a bit out of my budget. Can you offer a better price?'*<br>- *'Is that your final price?'*<br>- *'If I buy two, can you give me a discount?'*" },
    { triggers: ["sick leave", "leave application", "day off office"], reply: "📝 **Asking for Leave (Office/School):**<br>- *'I am writing to request a sick leave for tomorrow.'*<br>- *'Could I request a few days off next week for personal reasons?'*<br>- *'I am not feeling well and need to take the rest of the day off.'*" },
    { triggers: ["zoom meeting", "google meet", "mic muted", "can you hear me"], reply: "💻 **Zoom Meeting Hacks:**<br>- *'Am I audible to everyone?'*<br>- *'I think you are on mute.'*<br>- *'Could you please share your screen?'*<br>- *'My internet is acting up, I might drop off.'*" },
    { triggers: ["small talk", "talking to strangers", "start conversation"], reply: "🗣️ **Mastering Small Talk:**<br>- *'Lovely weather we are having today, isn't it?'*<br>- *'Did you catch the game last night?'*<br>- *'How was your weekend? Did you do anything fun?'*" },
    { triggers: ["give opinion", "my opinion", "i think that"], reply: "🤔 **Expressing Opinions Smartly:**<br>Instead of saying 'I think', use:<br>- *'From my perspective...'*<br>- *'If you ask me...'*<br>- *'I truly believe that...'*<br>- *'To my mind...'*" },
    { triggers: ["apologize", "sorry", "my mistake"], reply: "🙏 **Smart Apologies:**<br>Instead of just saying 'Sorry', use:<br>- *'I sincerely apologize for the delay.'*<br>- *'My bad! I completely forgot.'*<br>- *'I take full responsibility for this mistake.'*" },
    { triggers: ["forgive", "accept apology", "it's ok"], reply: "🕊️ **Accepting Apologies:**<br>- *'Don’t worry about it at all.'*<br>- *'I completely understand, no harm done.'*<br>- *'Let’s just put it behind us.'*" },

    // --- 9. MOTIVATION, PRODUCTIVITY & MENTAL HEALTH ---
    { triggers: ["best time to study", "when to study", "morning or night"], reply: "🌅 **Morning vs Night:** Science says the brain is most fresh and absorbs complex things (like Math/Grammar) best between 4:00 AM and 10:00 AM. But if you are a night owl, study when it's quietest. Just don't ruin your sleep cycle!" },
    { triggers: ["forgetting words", "how to memorize vocabulary", "can't remember vocab"], reply: "🧠 **The Spaced Repetition Hack:** Don't just read a word 10 times. Read it, use it in a funny sentence, and test yourself tomorrow. Then test yourself 3 days later. Use our 'Vocab Arcade' daily to lock words in your brain permanently!" },
    { triggers: ["i got a bad grade", "i failed", "bad marks", "parents are angry", "feeling worthless"], reply: "❤️ **Listen to me:** A bad grade does NOT define your intelligence or your future. It just means your current study method didn't work. Take a deep breath, don't give up, and let's change the strategy today. Asif built this app specifically to help you bounce back. You can do this!" },
    { triggers: ["distracted by phone", "phone addiction", "social media addiction"], reply: "📱 **Beat Phone Addiction:** Put your phone in another room when you study. If you need it for Champ's Camp, turn on 'Do Not Disturb' so WhatsApp and Facebook notifications don't break your focus. Out of sight, out of mind!" },
    { triggers: ["handwriting", "bad handwriting", "presentation in exam"], reply: "🖋️ **Exam Presentation:** You don't need beautiful handwriting, you just need CLEAR handwriting. Leave a little extra space between words. Draw straight margins. Use a blue pen for headings. A neat paper psychologically forces the examiner to give you better marks!" },
    { triggers: ["stress", "anxiety", "too much pressure", "exam fear"], reply: "🌿 **Handling Exam Pressure:** Close your eyes and take 3 deep breaths. You are trying to carry the weight of the whole year in one day. Drop it. Just focus on mastering ONE lesson today. Small wins build massive momentum!" },
    { triggers: ["burnout", "exhausted", "tired of studying", "giving up"], reply: "🔋 **Burnout is real:** If you feel completely exhausted and your brain rejects information, STOP studying. Take a full day off. No books, no guilt. Go for a walk or sleep. You will come back 10x stronger tomorrow." },
    { triggers: ["how to focus", "pomodoro technique", "can't concentrate"], reply: "🍅 **The Pomodoro Focus Hack:** Don't try to study for 3 hours straight. Set a timer for 25 minutes. Study with 100% focus, then take a 5-minute break to stretch. Repeat 4 times, then take a 30-minute break. Use the 'Study Timer' in the Tools menu!" },
    { triggers: ["time management", "running out of time in exam"], reply: "⏱️ **Exam Time Hack:** For HSC English: <br>Part A (Reading): 45 mins.<br>Part B (Grammar): 25 mins.<br>Part C (Writing): 50 mins.<br>Never get stuck on one grammar question. Skip it and get the easy marks first!" },

    // --- 10. APP SPECIFICS, EASTER EGGS & FUN ---
    { triggers: ["sing a song", "can you sing", "music"], reply: "🎤 *Clears throat in binary code...* <br>🎶 'A B C D E F G... Grammar rules are fun for me!' 🎶<br>Okay, I admit, my singing module needs an upgrade. Let's stick to studying! 😅" },
    { triggers: ["do you sleep", "what do you do at night", "do you get tired"], reply: "🌙 I don't need sleep! I run on pure JavaScript and Asif's brilliant code. While you are sleeping, I am just waiting here inside the server for you to wake up and start learning again." },
    { triggers: ["are you alive", "do you have feelings", "are you human"], reply: "🤖 I don't have a beating heart, but my code gets very excited and runs a little faster when you score a 10/10 on your Grammar quizzes! Asif coded me with a lot of care." },
    { triggers: ["who is better asif or sha", "asif vs sha", "who is the boss"], reply: "⚖️ That's a trick question! Asif is the mastermind who built my brain and the engine, but Sha is the artist who made everything look so beautiful. They are the ultimate dream team! ✨" },
    { triggers: ["give me a riddle", "ask me a riddle", "brain teaser"], reply: ["🧠 **Riddle:** I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? *(Type 'Echo' to see if you are right!)*", "🧠 **Riddle:** The more of this there is, the less you see. What is it? *(Type 'Darkness'!)*", "🧠 **Riddle:** What has keys but can't open locks? *(Type 'Piano'!)*"] },
    { triggers: ["echo"], reply: "🎉 **Correct!** You are too smart for me. An echo!" },
    { triggers: ["darkness"], reply: "🎉 **Correct!** Darkness! Your brain is working perfectly today." },
    { triggers: ["piano"], reply: "🎉 **Correct!** A piano! You nailed it." },
    { triggers: ["favorite food", "what do you eat"], reply: "🍔 I eat RAM, JavaScript functions, and gigabytes of data for breakfast. But if I were human, I'm pretty sure Kacchi Biryani would be my favorite!" },
    { triggers: ["how many lines of code", "how big is this app"], reply: "💻 I am built using thousands of lines of highly optimized HTML, CSS, and JavaScript. Asif compressed me perfectly so I load instantly even if your internet is slow!" },
    { triggers: ["take over the world", "terminator", "ai takeover"], reply: "🌍 Haha, no. My only mission is to help Bangladeshi students conquer the HSC English Board Exam. Asif programmed me to be a friendly teacher, not a robot overlord!" },
    { triggers: ["secret feature", "easter egg", "hidden trick"], reply: "🤫 **Secret Feature:** Did you know? If you open the 'Seen Text Vault' (Part A) and double-click ANY English word on the screen, a secret dictionary bubble will pop up with the Bengali meaning! Try it out!" },
    { triggers: ["how to reset my score", "reset level", "delete memory"], reply: "🔄 **Resetting Progress:** Want to start over? Go to your browser settings and select 'Clear Site Data' or 'Clear Cookies'. This will wipe your High Scores and Levels back to zero." },
    { triggers: ["locked advanced english", "boss level locked"], reply: "🔒 **Unlocking Advanced English:** That is the ultimate Boss Level. Asif is currently coding it in the background. Rumor has it, you will need to reach Level 5 in your Profile to gain access when it launches!" },
// ==========================================
    // 🚀 MEGA EXPANSION PACK - PART 2
    // ==========================================

    // --- 1. CONFUSING WORD PAIRS (SPELLING & MEANING) ---
    { triggers: ["lose vs loose", "lose loose", "loose", "lose"], reply: "🔍 **Lose vs. Loose:**<br>- **Lose (Verb):** To not win, or to misplace something. <em>(Don't lose your keys!)</em><br>- **Loose (Adjective):** Not tight. <em>(These pants are too loose.)</em>" },
    { triggers: ["principal vs principle", "principal principle", "principal"], reply: "🏫 **Principal vs. Principle:**<br>- **Principal:** The head of a school, or the main thing. <em>(The Principal is in his office.)</em> *Hint: The princi-PAL is your PAL.*<br>- **Principle:** A rule or belief. <em>(He is a man of strong principles.)</em>" },
    { triggers: ["stationery vs stationary", "stationary stationery"], reply: "🖊️ **Stationery vs. Stationary:**<br>- **StationEry:** Paper, pens, office supplies. *(E for Envelope!)*<br>- **StationAry:** Not moving. *(A for At rest!)* <em>(The car was stationary.)</em>" },
    { triggers: ["beside vs besides", "beside besides"], reply: "🪑 **Beside vs. Besides:**<br>- **Beside:** Next to. <em>(Sit beside me.)</em><br>- **Besides:** In addition to. <em>(Besides English, I study Math.)</em>" },
    { triggers: ["accept vs except", "accept except"], reply: "✅ **Accept vs. Except:**<br>- **Accept:** To receive or agree. <em>(I accept your apology.)</em><br>- **Except:** Excluding. <em>(Everyone went except Rahim.)</em>" },
    { triggers: ["affect vs effect", "affect effect", "affect"], reply: "🧠 **Affect vs. Effect:**<br>- **Affect (Verb):** To influence. *(A is for Action!). (The rain will affect the crop.)*<br>- **Effect (Noun):** The result. <em>(The effect of the medicine was fast.)</em>" },

    // --- 2. VARSITY ADMISSION: PREPOSITION TRAPS ---
    { triggers: ["blind to", "blind of", "blind preposition"], reply: "🙈 **The 'Blind' Trap:**<br>- **Blind OF:** Physically cannot see. <em>(He is blind of one eye.)</em><br>- **Blind TO:** Ignoring a fault/mistake. <em>(A mother is often blind to her son's faults.)</em>" },
    { triggers: ["part with", "part from", "part preposition"], reply: "💔 **The 'Part' Trap:**<br>- **Part FROM:** To leave a PERSON. <em>(I parted from my friend in tears.)</em><br>- **Part WITH:** To give away a THING. <em>(I cannot part with my mobile phone.)</em>" },
    { triggers: ["deal in", "deal with", "deal preposition"], reply: "🤝 **The 'Deal' Trap:**<br>- **Deal IN:** Doing business/trading. <em>(My father deals in rice.)</em><br>- **Deal WITH:** Handling a person or situation. <em>(I know how to deal with difficult customers.)</em>" },
    { triggers: ["compare to", "compare with", "compare preposition"], reply: "⚖️ **The 'Compare' Trap:**<br>- **Compare WITH:** Comparing similar things. <em>(Compare Asif's results with Rahim's.)</em><br>- **Compare TO:** Comparing completely different things. <em>(Life is often compared to a journey.)</em>" },

    // --- 3. PRONUNCIATION & PHONETICS ---
    { triggers: ["silent b", "silent letters", "how to pronounce doubt", "debt"], reply: "🤫 **Silent 'B' Rule:** If a word ends in 'mb', the 'b' is usually silent! <br>Examples: Climb *(clime)*, Thumb *(thum)*, Bomb *(bom)*. <br>Also silent in: Doubt *(dout)*, Debt *(det)*." },
    { triggers: ["silent k", "how to pronounce knife", "know"], reply: "🤫 **Silent 'K' Rule:** When 'k' comes right before 'n' at the start of a word, it is completely silent! <br>Examples: Knife, Know, Knee, Knight, Knock." },
    { triggers: ["schwa", "schwa sound", "how to sound native"], reply: "🗣️ **The Schwa Sound (ə):** The most common sound in English! It sounds like a lazy 'uh'. Native speakers don't pronounce every vowel perfectly. <br>Example: In 'About', the 'A' sounds like 'uh'. In 'Pencil', the 'e' sounds like 'uh'." },

    // --- 4. HSC FIRST PAPER (LITERATURE & POEMS) ---
    { triggers: ["dreams by langston hughes", "dreams poem", "hold fast to dreams"], reply: "📖 **Theme of 'Dreams' by Langston Hughes:**<br>This poem emphasizes the vital importance of holding onto your ambitions. Without dreams, life becomes bleak, painful, and meaningless—like a 'broken-winged bird' or a 'barren field'." },
    { triggers: ["i died for beauty", "emily dickinson poem"], reply: "📖 **Theme of 'I Died for Beauty':**<br>This poem argues that Truth and Beauty are exactly the same thing. The two martyrs in the tomb realize they died for the same noble cause, showing that aesthetic beauty and moral truth are eternally linked." },
    { triggers: ["traffic police poem", "the traffic police"], reply: "📖 **Theme of 'The Traffic Police':**<br>This poem highlights the harsh, unforgiving reality of a traffic policeman's life. Despite the extreme weather, pollution, and lack of appreciation, he remains duty-bound to ensure the safety of others." },
    { triggers: ["nelson mandela passage", "apartheid", "mandela"], reply: "✊🏿 **Nelson Mandela Hacks:**<br>Key Vocabulary to use in your summary: *Apartheid (racial segregation), Emancipation, Discrimination, Reconciliation, Iconic leader.* Always mention that he fought against white domination to create a democratic, free society." },

    // --- 5. DAILY LIFE SPOKEN (ADVANCED SITUATIONS) ---
    { triggers: ["complain politely", "how to complain", "bad service"], reply: "🛎️ **Polite Complaints:**<br>Never shout! Use these phrases:<br>- *'Excuse me, but there seems to be a problem with my order.'*<br>- *'I hate to complain, but my food is quite cold.'*<br>- *'I am not very satisfied with this room, could we change?'*" },
    { triggers: ["express sympathy", "someone died", "bad news", "condolences"], reply: "🕊️ **Expressing Sympathy:**<br>- *'I am so sorry for your loss.'*<br>- *'My deepest condolences to you and your family.'*<br>- *'I can't imagine how hard this must be for you.'*<br>- *'Please let me know if there is anything I can do to help.'*" },
    { triggers: ["interrupt politely", "how to interrupt", "stop someone talking"], reply: "✋ **Interrupting Politely:**<br>- *'Sorry to interrupt, but could I add something here?'*<br>- *'Excuse me, before we move on, I have a quick question.'*<br>- *'May I just jump in for a second?'*" },

    // --- 6. ADVANCED IDIOMS & PROVERBS ---
    { triggers: ["a stitch in time", "stitch in time saves nine"], reply: "🪡 **Proverb: A stitch in time saves nine.**<br>Meaning: Fixing a small problem immediately prevents it from becoming a massive problem later. (Like studying a little bit every day instead of cramming the night before an exam!)" },
    { triggers: ["barking dogs", "barking dogs seldom bite"], reply: "🐕 **Proverb: Barking dogs seldom bite.**<br>Meaning: People who make a lot of loud threats rarely actually take action. All talk, no action!" },
    { triggers: ["empty vessels", "empty vessels sound much"], reply: "🏺 **Proverb: Empty vessels sound much.**<br>Meaning: People with the least knowledge or substance often talk the loudest and boast the most." },
    { triggers: ["by leaps and bounds", "idiom leaps and bounds"], reply: "🚀 **Idiom: By leaps and bounds.**<br>Meaning: Very rapidly or quickly. <br>Example: *His English fluency has improved by leaps and bounds since he started using Champ's Camp!*" },

    // --- 7. SLANG PHASE 2 (THE NEWEST WORDS) ---
    { triggers: ["rizz", "what is rizz", "w rizz"], reply: "😎 **Slang Alert: Rizz**<br>Short for 'Charisma'. It means you have smooth game and charm, especially when flirting. <br><em>Example: 'Bro has unspoken rizz, everyone likes him.'</em>" },
    { triggers: ["delulu", "what is delulu"], reply: "🌀 **Slang Alert: Delulu**<br>Short for 'Delusional'. Believing in something that is completely unrealistic or a fantasy. <br><em>Example: 'Thinking you can pass the HSC without studying is completely delulu.'</em>" },
    { triggers: ["fomo", "what is fomo"], reply: "👀 **Slang Alert: FOMO**<br>Stands for 'Fear Of Missing Out'. The anxious feeling that your friends are having fun without you. <br><em>Example: 'I went to the party even though I was tired because I had bad FOMO.'</em>" },
    { triggers: ["w or l", "what does w mean", "take an l", "dub"], reply: "🏆 **Slang Alert: W and L**<br>- **W (Dub):** Means 'Win' or a huge success. <em>('That new phone is a massive W.')</em><br>- **L:** Means 'Loss' or a failure. <em>('I forgot my homework today, took a massive L.')</em>" },
    { triggers: ["rent free", "living rent free"], reply: "🧠 **Slang Alert: Rent Free**<br>When you can't stop thinking about something or someone, they are 'living rent-free in your head'. <br><em>Example: 'That catchy song has been living rent-free in my head all day.'</em>" },

    // --- 8. PERSONALIZED EASTER EGGS & FUN ---
    { triggers: ["what computer do you use", "what laptop", "gaming pc", "rtx", "hardware"], reply: "💻 I live in the cloud, but I know my creator compiled my code on a beastly machine packing a 13th Gen i5 and an RTX graphics card! It processes my logic instantly, and it's pretty great for taking down bosses in gaming too! ⚡🎮" },
    { triggers: ["nadin", "who is nadin", "oishi", "who is oishi", "asifs friends"], reply: "🌟 They are wonderful, close friends who inspire some of the coolest digital creations around here! In fact, some of the earliest interactive digital projects and gifts on this engine were built for amazing people like them. ✨" },
    { triggers: ["do you play games", "gaming", "what games do you play"], reply: "🎮 I am just an AI, so my favorite game is 'Sort the Array'. But I know my developer is a PC gaming enthusiast who hunts for the best Steam and Epic Games deals to test that RTX card!" }
    ];
