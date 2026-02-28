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
    { triggers: ["asking for a discount", "bargaining in english", "too expensive"], reply: "🛍️ **Polite Bargaining:**<br>- *'That is a bit out of my budget. Can you offer a better price?'*<br>- *'Is that your final price?'*<br>- *'If I buy two, can you give me a discount?'*" }
