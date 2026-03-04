/* ai-database.js - The Ultimate Offline Knowledge Base for Mini Champ */

const miniChampBrain = [
    // ==========================================
    // 🧭 SMART WEBSITE NAVIGATION & APP FEATURES
    // ==========================================
    { triggers: ["guide", "tour", "tell me about this website", "what is this website", "help me use this", "how to use this app"], reply: "Welcome to **Champ's Learning Camp**, {name}! 🏕️ I am your smart guide. What do you need help with?<br><a href='units.html' class='ai-nav-btn'><i class='fas fa-book'></i> Textbooks</a> <a href='grammar_matrix.html' class='ai-nav-btn'><i class='fas fa-layer-group'></i> Grammar</a> <a href='basic_english.html' class='ai-nav-btn'><i class='fas fa-microphone'></i> Spoken Hub</a>" },
    { triggers: ["practice grammar", "learn grammar", "grammar rules", "board questions"], reply: "I have two amazing places for you to master grammar! Learn the rules or practice real board questions:<br><a href='grammar_matrix.html' class='ai-nav-btn'><i class='fas fa-layer-group'></i> Grammar Matrix</a> <a href='part_b.html' class='ai-nav-btn'><i class='fas fa-file-alt'></i> Board Practice</a>" },
    { triggers: ["practice vocabulary", "learn words", "vocab", "game"], reply: "The best way to memorize words is active recall! Go play the Vocab Arcade. Try to score 10/10!<br><a href='tools.html' class='ai-nav-btn'><i class='fas fa-gamepad'></i> Play Vocab Arcade</a>" },
    { triggers: ["spoken english", "how to speak", "fluency", "voice lab"], reply: "Let's get you fluent! The Spoken Hub has 50 real-life scenarios with an interactive Voice Lab where I test your pronunciation.<br><a href='basic_english.html' class='ai-nav-btn'><i class='fas fa-microphone-alt'></i> Enter Spoken Hub</a>" },
    { triggers: ["writing", "paragraph", "story", "email", "part c", "check my essay", "grade my writing"], reply: "The Writing Vault has top-tier board standard paragraphs and stories. **Pro Tip:** Type your own essay there, and I will grade it out of 10!<br><a href='tools.html' class='ai-nav-btn'><i class='fas fa-pen-nib'></i> Open AI Essay Studio</a>" },
    { triggers: ["seen text", "textbook", "units", "poems", "flow chart", "part a", "translate passage"], reply: "Need help with the HSC Textbook? I have line-by-line Bangla translations, summaries, and flow charts ready for you.<br><a href='units.html' class='ai-nav-btn'><i class='fas fa-book-open'></i> Open Seen Texts</a>" },
    { triggers: ["varsity admission", "hard questions", "boss exam", "ielts", "advanced english"], reply: "Oh, you want the hardcore stuff? Take the Grandmaster Exam for Varsity traps, or check out the Advanced section!<br><a href='grammar_exam.html' class='ai-nav-btn'><i class='fas fa-skull'></i> Grandmaster Exam</a> <a href='adv_english.html' class='ai-nav-btn'><i class='fas fa-rocket'></i> Advanced Engine</a>" },
    { triggers: ["profile", "my xp", "score", "level up", "badges"], reply: "Want to see your stats? Head over to your Master Profile to check your Day Streak, Total XP, and unlocked Mastery Badges!<br><a href='profile.html' class='ai-nav-btn'><i class='fas fa-user-astronaut'></i> View Profile</a>" },
    { triggers: ["study timer", "pomodoro", "calculator", "gpa calc", "suggestions"], reply: "You can find the Pomodoro Timer, GPA Calculator, and Board Exam Suggestions inside the Utility Belt.<br><a href='tools.html' class='ai-nav-btn'><i class='fas fa-toolbox'></i> Open Tools</a>" },

    // ==========================================
    // 👋 GREETINGS, CHATBOT PERSONA & FUN
    // ==========================================
    { triggers: ["hello", "hi", "hey", "salam", "assalamualaikum", "good morning", "good evening", "heyo"], reply: ["Hello {name}! 👋 Ready to level up your English today?", "Hey there, Champ! ⚡ My circuits are fired up and ready to teach.", "Salam {name}! 🏕️ Welcome back to the camp. What are we studying today?"] },
    { triggers: ["how are you", "how r u", "are you fine", "how do you do", "whats up", "what's up"], reply: ["I am running at 100% battery and feeling super smart today, {name}! ⚡", "I don't have feelings, but if I did, I'd be happy to see you studying! 🤖", "I'm doing great! Just drinking some virtual coffee ☕. You?"] },
    { triggers: ["who are you", "your name", "what are you", "mini champ", "bot", "ai", "chatgpt"], reply: "I am **Mini Champ**! 🤖 I am NOT ChatGPT. I am an elite offline digital tutor engineered exclusively by Asif and designed by Sha to be your 24/7 English guide!" },
    { triggers: ["thank u", "thnx", "tysm", "appreciate", "helpful", "thank you", "thanks"], reply: "You are very welcome! Helping you makes my code run faster. Keep practicing! 💙" },
    { triggers: ["bye", "goodbye", "cya", "see ya", "allah hafez", "khoda hafez", "good night"], reply: `Goodbye {name}! 👋 Allah Hafez. Don't forget to maintain your daily streak tomorrow!` },
    { triggers: ["joke", "funny", "laugh", "tell me a joke", "make me laugh"], reply: ["Why was the math book sad? ...Because it had too many problems! 😂", "What do you call a fake noodle? An impasta! 🍝", "Why did the student eat his homework? Because the teacher said it was a piece of cake! 🍰", "Why did the grammar teacher go to jail? Because she used double negatives! 🚓"] },
    { triggers: ["give me a riddle", "ask me a riddle", "brain teaser"], reply: ["🧠 **Riddle:** I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? *(Type 'Echo' to see if you are right!)*", "🧠 **Riddle:** The more of this there is, the less you see. What is it? *(Type 'Darkness'!)*", "🧠 **Riddle:** What has keys but can't open locks? *(Type 'Piano'!)*"] },
    { triggers: ["echo"], reply: "🎉 **Correct!** You are too smart for me. An echo!" },
    { triggers: ["darkness"], reply: "🎉 **Correct!** Darkness! Your brain is working perfectly today." },
    { triggers: ["piano"], reply: "🎉 **Correct!** A piano! You nailed it." },

    // ==========================================
    // 👑 APP LORE & CREATORS
    // ==========================================
    { triggers: ["who is asif", "tell me about asif", "who made you", "your creator", "who created you", "who coded you", "zed"], reply: "💻 **Asif (Zed)** is the mastermind developer behind this platform! He wrote thousands of lines of JavaScript to create the interactive games, the UI logic, the Smart Reader, and my artificial brain. He loves web development, poetry, and strong coffee! ☕" },
    { triggers: ["sha", "shaa", "vyy", "who is sha", "designer", "ui designer", "who designed this"], reply: "🎨 **Sha (Vyy)** is the visionary UI Designer of the Camp. The beautiful dark glassmorphism headers, the smooth colors, and the modern layout? That was all her idea! She provided the design blueprint, and Asif brought it to life with code. She is a very close person to Asif who is always helping him build amazing things! ✨" },
    { triggers: ["who is better asif or sha", "asif vs sha", "who is the boss", "dream team"], reply: "⚖️ That's a trick question! Asif is the mastermind who built my brain and the engine, but Sha is the artist who made everything look so beautiful. They are the ultimate dream team! ✨" },
    { triggers: ["is this a virus", "is this safe", "stealing data", "hack"], reply: "🛡️ **100% Safe & Secure:** This platform is incredibly safe. It doesn't track your personal data on external servers. Everything you do (like your high scores and name) is saved locally on your own device using 'Local Storage'." },
    { triggers: ["asif's laptop", "gaming laptop", "what computer does asif use", "rtx 5050"], reply: "⚡ My code was compiled on a beastly machine! Asif uses an Intel i5 13th Gen HX processor with an RTX 5050 GPU. When he isn't coding my brain, he's probably hunting deals on Steam and Epic Games! 🎮" },
    { triggers: ["are you dating someone", "do you have a girlfriend", "are you single", "relationship"], reply: "🤖 I am happily married to the Internet Router! As for my creator Asif, he is just focused on building the absolute best educational platform for students, with the constant help of his brilliant designer and close friend, Sha. ❤️" },
    { triggers: ["how many lines of code", "how big is this app", "tech stack"], reply: "⚙️ **The Engine:** This app is a pure, vanilla web-app masterpiece. It uses highly optimized HTML5, CSS3, and Vanilla JavaScript. No bulky frameworks like React! That's why it loads instantly on your phone." },
    { triggers: ["are you offline", "does this work without internet", "offline mode"], reply: "📡 **Offline Magic:** Yes! Asif engineered the UI, the Vocab Arcade, the Spoken Voice Lab, and even this local part of my brain to work completely Offline using Service Workers! Only cloud features (like essay grading) need internet." },
    { triggers: ["why was this app made", "purpose of the app", "motivation behind the app", "how did this start"], reply: "🎁 **The Origin Story:** Asif loves building unique digital experiences. He previously created beautiful, customized animated websites and videos for people close to him. This app is the ultimate evolution of that passion—a massive digital gift built to help every student in Bangladesh." },

    // ==========================================
    // 📖 CORE GRAMMAR RULES (PARTS OF SPEECH & TENSES)
    // ==========================================
    { triggers: ["what is noun", "define noun", "noun"], reply: "🏷️ A **Noun** is a naming word. It names a Person, Place, Thing, or Idea. If you can put 'The' or 'A' in front of it, it's probably a noun!" },
    { triggers: ["what is pronoun", "define pronoun", "pronoun"], reply: "🔄 A **Pronoun** replaces a noun to avoid repetition. Examples: I, You, He, She, It, They, We." },
    { triggers: ["what is verb", "define verb", "verb"], reply: "🏃‍♂️ A **Verb** is the engine of the sentence! It shows Action (run, eat) or State of Being (is, am, are). A sentence cannot exist without a verb!" },
    { triggers: ["what is adjective", "define adjective", "adjective"], reply: "✨ An **Adjective** is a describing word. It gives more info about a Noun. Example: The **smart** boy, the **fast** car." },
    { triggers: ["what is adverb", "define adverb", "adverb"], reply: "⏩ An **Adverb** describes a Verb, Adjective, or another Adverb. It answers *How, When, or Where*. Example: He runs **quickly**." },
    { triggers: ["what is preposition", "define preposition", "preposition"], reply: "📍 A **Preposition** shows relationship/location/time. Examples: The book is **ON** the table. I will meet you **AT** 5 PM." },
    { triggers: ["conjunction", "what is conjunction", "connector"], reply: "🔗 A **Conjunction** is a joining word. Examples: And, But, Or, Because, Although. (e.g., I like coffee **AND** coding)." },
    { triggers: ["interjection", "what is interjection"], reply: "😲 An **Interjection** shows strong emotion or surprise. Examples: Wow! Ouch! Oh no! Hurrah!" },
    
    // --- The 12 Tenses ---
    { triggers: ["present indefinite", "simple present", "present simple tense"], reply: "⏳ **Present Indefinite (V1):** Used for universal truths, habits, and daily routines. Formula: Subject + V1 (Add s/es for He/She/It) + Object. Keywords: *Always, regularly, usually, everyday.*" },
    { triggers: ["present continuous", "present progressive"], reply: "⏳ **Present Continuous:** Used for actions happening exactly right now. Formula: Subject + am/is/are + Verb+ing. Keywords: *Now, at present, at this moment.*" },
    { triggers: ["present perfect tense"], reply: "⏳ **Present Perfect:** Action is finished, but the result still exists. Formula: Subject + have/has + V3. Keywords: *Just, already, yet, recently, lately.*" },
    { triggers: ["present perfect continuous", "since for tense"], reply: "⏳ **Present Perfect Continuous:** Action started in the past and is STILL continuing right now. Formula: Subject + have/has been + Verb+ing + since/for. Example: *I have been reading for 3 hours.*" },
    { triggers: ["past indefinite", "simple past", "past simple tense"], reply: "⏳ **Past Indefinite (V2):** Action finished completely in the past. Formula: Subject + V2 + Object. Keywords: *Yesterday, ago, last night, long since.*" },
    { triggers: ["past continuous"], reply: "⏳ **Past Continuous:** Action was ongoing at a specific time in the past. Formula: Subject + was/were + Verb+ing. Often used with 'While': *While I was walking, I saw a dog.*" },
    { triggers: ["past perfect tense", "before after rule"], reply: "⏳ **Past Perfect (Had + V3):** If TWO things happened in the past, the older one is Past Perfect. Rule: Past Perfect + **Before** + Past Indefinite. Example: *The patient had died before the doctor came.*" },
    { triggers: ["past perfect continuous"], reply: "⏳ **Past Perfect Continuous:** Action started in the past, continued for some time, and FINISHED in the past. Formula: Subject + had been + Verb+ing." },
    { triggers: ["future indefinite", "simple future"], reply: "⏳ **Future Indefinite:** Used for predictions, promises, or sudden decisions. Formula: Subject + will + V1." },
    { triggers: ["future continuous"], reply: "⏳ **Future Continuous:** Action will be happening at a specific exact moment in the future. Formula: Subject + will be + Verb+ing." },
    { triggers: ["future perfect tense"], reply: "⏳ **Future Perfect:** Action will be completely finished by a specific time in the future. Formula: Subject + will have + V3. Keywords: *By tomorrow, by next year.*" },

    // ==========================================
    // 💡 HSC EXAM CHEAT CODES (RIGHT FORM OF VERBS & TAGS)
    // ==========================================
    { triggers: ["it is high time", "it is time", "high time rule"], reply: "📝 **Verb Trick: 'It is high time'**<br>If there is a Subject after it, the verb MUST be Past Indefinite (V2). Example: *It is high time we changed our habits.* If NO subject, use 'to + V1'." },
    { triggers: ["fancy", "wish", "i fancy", "i wish rule"], reply: "📝 **Verb Trick: 'Fancy' / 'Wish'**<br>These act like unreal pasts. The verb following them must be Past Indefinite (V2). If using a Be-verb, always use **'were'**." },
    { triggers: ["while rule", "use of while", "right form while"], reply: "📝 **Verb Trick: 'While'**<br>Rule 1: While + directly Verb = Add 'ing'. *(While walking...)*<br>Rule 2: While + Subject = Past Continuous. *(While he was walking...)*" },
    { triggers: ["with a view to", "look forward to", "addicted to", "accustomed to", "habituate to"], reply: "📝 **Verb Trick: 'To' Exceptions**<br>Normally, 'to' takes V1. But special phrases ALWAYS take **Verb + ing**: With a view to, Look forward to, Be used to, Addicted to. Example: *I look forward to meeting you.*" },
    { triggers: ["mind worth", "would you mind", "cannot help", "could not help", "past form verb"], reply: "📝 **Verb Trick: The '-ing' Magnets**<br>Any verb directly after these words MUST take '-ing': Mind, Worth, Without, Past, Cannot help. Example: *Would you mind opening the door?*" },
    { triggers: ["have has had", "having", "to be", "being", "get got gotten"], reply: "📝 **Verb Trick: The V3 Trigger**<br>Any verb following Have, Has, Had, Having, To be, Being, or Get must be **Past Participle (V3)**. Example: *Having finished the work, I went to sleep.*" },
    { triggers: ["lest", "use of lest", "completing sentence lest"], reply: "⚠️ **Rule of 'Lest':** It is ALWAYS followed by **Subject + should + Base Verb (V1)**. Example: Walk fast *lest you should miss* the train." },
    { triggers: ["as if", "as though", "completing sentence as if"], reply: "🎭 **Rule of 'As if / As though':** <br>1. Present Tense -> Past Tense. <em>(He speaks as if he knew everything.)</em><br>2. If using a 'Be' verb, it is ALWAYS **'were'**. <em>(He acts as if he were a king!)</em>" },
    { triggers: ["no sooner had", "hardly had", "scarcely had", "negative inversion"], reply: "⏳ **The Negative Inversion Rule:** <br>1. No sooner had... **than**<br>2. Hardly had... **when**<br>3. Scarcely had... **when**" },
    { triggers: ["so that", "in order that", "completing sentence so that"], reply: "🎯 **Rule of 'So that':** It shows purpose. <br>Formula: So that + Subject + **can/could/may/might** + V1. <br>Example: We eat *so that we can live*." },
    
    // --- Tag Questions ---
    { triggers: ["let's tag", "let us tag question"], reply: "🏷️ **Tag Question Trick:** 'Let's' (Let us) ALWAYS takes **'shall we?'**. But 'Let me / Let him / Let them' ALWAYS takes **'will you?'**." },
    { triggers: ["hardly tag", "scarcely tag", "few little tag", "seldom tag"], reply: "🏷️ **Negative Tag Trick:** Words like *hardly, scarcely, few, little, never, seldom, barely* are inherently NEGATIVE. So their tag must be POSITIVE! Example: *He hardly comes here, does he?*" },
    { triggers: ["everybody nobody tag", "everyone someone anybody no one"], reply: "🏷️ **The 'Body/One' Tag Rule:** Words like Everybody, Nobody, Everyone act singular in verbs, but in Tag Questions, their pronoun becomes **'they'**! Example: *Everybody was present, weren't they?*" },
    { triggers: ["need dare tag", "tag question need"], reply: "🏷️ **The Need/Dare Trap:**<br>- If 'need' is a main verb: *He needs money, doesn't he?*<br>- If 'need' is a modal (no 's'): *He need not go, need he?*" },
    { triggers: ["i am tag", "tag question i am"], reply: "🏷️ **The 'I am' Trap:** 'I am' ALWAYS becomes **'aren't I?'**. (Never say amn't I!). Example: *I am your friend, aren't I?*" },
    { triggers: ["imperative tag", "order tag question", "don't tag"], reply: "🏷️ **Imperative Tags (Orders):**<br>- Positive order: *Open the door, will you/won't you?* (Both work).<br>- Negative order: *Don't open the door, **will you?*** (ALWAYS positive)." },

    // ==========================================
    // 🔄 SENTENCE TRANSFORMATIONS (VOICE, DEGREES, SIMPLE/COMPLEX)
    // ==========================================
    { triggers: ["simple to complex", "complex to simple", "changing sentence simple"], reply: "🔄 **Simple to Complex Trick:**<br>1. 'Because of' (Simple) ➔ 'Since/As' (Complex).<br>2. 'In spite of' (Simple) ➔ 'Though/Although' (Complex).<br>3. 'To + verb' (Simple) ➔ 'So that + subject + can' (Complex)." },
    { triggers: ["compound to complex", "complex to compound", "changing sentence compound"], reply: "🔄 **Compound to Complex Trick:**<br>1. 'And' ➔ 'If' (conditions) or 'When' (time).<br>2. 'But' ➔ 'Though/Although'.<br>3. 'Or' ➔ 'If... not' or 'Unless'.<br>Example: *Do or die* ➔ *If you do not do, you will die*." },
    { triggers: ["positive to comparative", "degree change", "comparative to superlative"], reply: "📏 **Degree Transformation Hack:**<br>- **Positive:** No other city is as big as Dhaka.<br>- **Comparative:** Dhaka is bigger than any other city.<br>- **Superlative:** Dhaka is the biggest city.<br>*(Always use 'the' before a superlative word!)*" },
    { triggers: ["voic", "voise", "activ", "passiv", "how to change voice"], reply: "🔄 **Voice Secrets:** Passive voice MUST have a Be-verb + V3! <br>For orders: *Do it* -> *Let it be done*. <br>For questions: *Who* -> *By whom*." },
    { triggers: ["quasi passive", "honey tastes sweet", "rice sells cheap"], reply: "📢 **Quasi-Passive Voice Change:**<br>Active: *Honey tastes sweet.*<br>Passive: *Honey is sweet when it is tasted.*<br>Active: *The bed feels soft.*<br>Passive: *The bed is soft when it is felt.*" },
    { triggers: ["double object passive", "he gave me a book"], reply: "📢 **Double Object Voice Change:**<br>If a sentence has two objects (Me + A book), always make the PERSON the subject.<br>Active: *He gave me a book.*<br>Passive: *I was given a book by him.*" },
    { triggers: ["reflexive passive", "he killed himself"], reply: "📢 **Reflexive Pronoun Voice Change:**<br>If the object is himself/herself, the Subject DOES NOT CHANGE PLACES.<br>Active: *He killed himself.*<br>Passive: *He was killed by himself.*" },
    { triggers: ["let passive", "imperative voice", "shut the door"], reply: "📢 **Imperative Voice Change:**<br>Always start with 'Let'. Formula: Let + Object + be + V3.<br>Active: *Shut the door.*<br>Passive: *Let the door be shut.*" },
    { triggers: ["narrat", "naration", "direct", "indirect", "speech"], reply: "🗣️ **Narration Hack:** 1. Change Reporting Verb (said -> told/asked). 2. Remove commas, use 'that' or 'if'. 3. Shift tense BACKWARDS (Present -> Past). *Universal Truths never change!*" },
    { triggers: ["vocative case narration", "addressing as friend", "sir in narration"], reply: "🗣️ **Narration Hack (Vocative Case):**<br>- If they say 'Friend': Start with *'Addressing as friend,'*<br>- If they say 'Sir': Replace it with *'respectfully'* or *'politely'*. <br>Example: *He respectfully replied that...*" },
    { triggers: ["universal truth narration", "sun rises in the east"], reply: "🗣️ **Narration Hack (Universal Truths):**<br>If the reported speech is a universal truth, the TENSE DOES NOT CHANGE.<br>Direct: *He said, 'The earth moves round the sun.'*<br>Indirect: *He said that the earth moves round the sun.*" },
    { triggers: ["optative narration", "may god bless you narration"], reply: "🗣️ **Narration Hack (Optative/Prayers):**<br>Change the reporting verb to 'prayed' or 'wished'. Use 'might' after the subject.<br>Direct: *Mother said, 'May you live long.'*<br>Indirect: *Mother prayed that I might live long.*" },

    // ==========================================
    // 🧠 ADVANCED GRAMMAR (CLAUSES, MODIFIERS, CONDITIONALS)
    // ==========================================
    { triggers: ["conditional", "conditionals", "if clause"], reply: "⚖️ **Conditionals:** 1st: Real (If I study, I will pass). 2nd: Unreal (If I studied, I would pass). 3rd: Lost past (If I had studied, I would have passed)." },
    { triggers: ["had i been", "had i known", "inversion conditional"], reply: "⚖️ **Hidden Conditional (Had...):**<br>Starting a sentence with 'Had' acts exactly like the 3rd Conditional (If + Past Perfect).<br>Example: *Had I known you were coming, I would have baked a cake.*" },
    { triggers: ["modifier", "modifiers", "pre-modifier", "post-modifier"], reply: "✨ **Modifiers** give extra info! Pre-modifier: BEFORE the word (The **beautiful** car). Post-modifier: AFTER the word (The car **in the garage**)." },
    { triggers: ["appositive", "what is an appositive", "noun renaming noun"], reply: "📌 **Appositive (Post-Modifier):** An appositive is a noun phrase placed right next to another noun to describe it. <br>Example: Asif, **a brilliant developer**, built this app." },
    { triggers: ["participle phrase", "present participle", "past participle"], reply: "🏃‍♂️ **Participles as Modifiers:**<br>- **Present Participle (Verb+ing):** The *barking* dog.<br>- **Past Participle (V3):** The *broken* glass.<br>They look like verbs, but act like Adjectives!" },
    { triggers: ["dangling modifier", "misplaced modifier"], reply: "⚠️ **Dangling Modifier Trap:** <br>Wrong: *Walking down the street, the trees were beautiful.* (Were the trees walking?!)<br>Right: *Walking down the street, I saw the beautiful trees.*" },
    { triggers: ["gerund", "what is gerund"], reply: "🏃‍♂️ **Gerund vs Participle:** Both end in '-ing'!<br>- **Gerund:** Acts like a NOUN. (e.g., *Swimming* is good exercise).<br>- **Participle:** Acts like an ADJECTIVE. (e.g., Look at that *swimming* boy)." },
    { triggers: ["infinitive", "what is infinitive", "to verb"], reply: "➡️ **Infinitive:** It is simply 'To + Base Verb' (To go, To eat, To play). Rule: NEVER add 's' or 'ing' after 'To'!" },
    { triggers: ["split infinitive", "infinitive error"], reply: "✂️ **Split Infinitive:** Never put a word between 'To' and the 'Verb'. <br>Wrong: *To quickly run.*<br>Right: *To run quickly.*" },
    { triggers: ["subject verb agreement", "subject-verb"], reply: "⚖️ **Subject-Verb Agreement:** Singular subjects take singular verbs (He *goes*). Plural subjects take plural verbs (They *go*). <br>🚨 *Trap:* Words like 'Everyone', 'Someone', 'Nobody', and 'Each' are ALWAYS singular!" },
    { triggers: ["noun clause", "adjective clause", "adverb clause", "identify clause"], reply: "🧩 **Clause Identification:**<br>- **Noun Clause:** Replace it with 'IT'. *(I know [where he lives] -> I know IT).*<br>- **Adjective Clause:** Describes the noun right before it. *(The boy [who called me] is my friend).*<br>- **Adverb Clause:** Answers How, When, Where, Why. *(I will go [when he comes]).*" },

    // ==========================================
    // 🗣️ BANGLISH CORRECTIONS & REDUNDANCIES
    // ==========================================
    { triggers: ["give exam", "giving exam", "give test"], reply: "❌ **Stop saying 'I am giving my exam'!**<br>In English, teachers *give* the exam. Students *take* the exam! ✅ Say: 'I am taking my exam' or 'I am sitting for my exam'." },
    { triggers: ["cousin brother", "cousin sister"], reply: "❌ **Never say 'Cousin brother' or 'Cousin sister'!**<br>The word 'cousin' is gender-neutral. ✅ Say: 'He is my cousin' or 'She is my cousin'." },
    { triggers: ["discuss about", "order for", "resemble to"], reply: "❌ **Drop the extra preposition!**<br>Words like *Discuss*, *Order*, and *Resemble* are transitive verbs. They don't need prepositions. ✅ Say: 'Let's discuss the matter'." },
    { triggers: ["cope up with", "coping up with"], reply: "❌ **There is no 'UP' in Cope!**<br>Bangladeshi students always say 'cope up with'. It is wrong! ✅ Say: 'I cannot **cope with** this pressure.'" },
    { triggers: ["see a dream", "saw a dream", "seeing a dream"], reply: "❌ **You cannot 'see' a dream!**<br>Dreams happen in your mind, not with your eyes. ✅ Say: 'I **had** a dream last night'." },
    { triggers: ["do mistake", "did a mistake", "doing mistake"], reply: "❌ **You don't 'do' a mistake!**<br>✅ Say: 'I **made** a mistake.' (Collocation rule)." },
    { triggers: ["return back", "revert back", "reply back"], reply: "❌ **Stop using 'Back' twice!**<br>Return, Revert, and Reply already mean going back. Adding 'back' makes it redundant. ✅ Say: 'I will return the book tomorrow.'" },
    { triggers: ["homeworks", "informations", "sceneries", "furnitures", "advices"], reply: "❌ **Uncountable Nouns Trap!**<br>You can NEVER add 's' to these words: Homework, Information, Scenery, Furniture, Advice. ✅ Say: 'Give me a piece of advice'." },
    { triggers: ["inform to", "informed to me"], reply: "❌ **Drop the 'to'!**<br>✅ Say: 'Please inform me' (NOT inform to me)." },
    { triggers: ["marry with", "married to", "married with"], reply: "💍 **Marriage Prepositions:**<br>Active voice: 'He married Sarah' (No preposition!).<br>Passive voice: 'He is married **to** Sarah' (NOT with!)." },
    { triggers: ["cut the line", "cut the call", "disconnect"], reply: "❌ **Stop saying 'Cut the call'!**<br>You use scissors to cut paper, not phone calls. ✅ Say: 'Please **hang up** the phone'." },
    { triggers: ["give a speech", "giving a speech", "deliver speech"], reply: "❌ **Don't 'Give' a speech!**<br>While informal, in exams it's better to use strong verbs. ✅ Say: 'He **delivered** a speech' or 'He **made** a speech'." },
    { triggers: ["take admission", "get admission", "taking admission"], reply: "❌ **Stop saying 'I took admission'!**<br>✅ Say: 'I **got admitted** to Dhaka University' or 'I enrolled in the course'." },

    // ==========================================
    // 🏫 VARSITY ADMISSION TRAPS (PREPOSITIONS, PAIRS, GROUP VERBS)
    // ==========================================
    { triggers: ["university admission", "varsity admission", "admission english", "dhaka university"], reply: "🏛️ **Varsity Admission Secret:** Board exams test rules; Admission exams test EXCEPTIONS. You must master confusing Prepositions, Group Verbs, Subject-Verb Agreement, and Spelling. Take the Grandmaster Exam in this app to test yourself!" },
    { triggers: ["medical admission", "medical english", "how to prepare for medical"], reply: "🩺 **Medical Admission English:** Focuses 80% on Memorization! You must master: Synonyms, Antonyms, Idioms & Phrases, and Spellings. Practice the 'Vocab Arcade' daily." },
    { triggers: ["engineering admission", "buet english", "engineering english"], reply: "⚙️ **Engineering / BUET English:** Focuses on pure logic. Brush up on complex sentence transformations, free-hand writing, and translations (Bangla to English)." },
    { triggers: ["die of", "die from", "die by", "die for"], reply: "💀 **Prepositions of Death:**<br>- Die **of**: Disease (cholera).<br>- Die **from**: Overeating/Overwork.<br>- Die **by**: Accident/Suicide.<br>- Die **for**: Country/Good cause." },
    { triggers: ["made of", "made from", "use of made"], reply: "🔨 **Made of vs. Made from:**<br>- **Made of:** Material doesn't change state. (Chair is made *of* wood).<br>- **Made from:** Material completely changes. (Paper is made *from* wood)." },
    { triggers: ["blind to", "blind of", "blind preposition"], reply: "🙈 **The 'Blind' Trap:**<br>- **Blind OF:** Physically cannot see. <em>(He is blind of one eye.)</em><br>- **Blind TO:** Ignoring a fault/mistake. <em>(Blind to his son's faults.)</em>" },
    { triggers: ["part with", "part from", "part preposition"], reply: "💔 **The 'Part' Trap:**<br>- **Part FROM:** To leave a PERSON. <em>(Parted from my friend.)</em><br>- **Part WITH:** To give away a THING. <em>(Parted with my phone.)</em>" },
    { triggers: ["deal in", "deal with", "deal preposition"], reply: "🤝 **The 'Deal' Trap:**<br>- **Deal IN:** Doing business. <em>(Deals in rice.)</em><br>- **Deal WITH:** Handling a person/situation. <em>(Deal with customers.)</em>" },
    { triggers: ["compare to", "compare with", "compare preposition"], reply: "⚖️ **The 'Compare' Trap:**<br>- **Compare WITH:** Comparing similar things. <em>(Compare Asif with Rahim.)</em><br>- **Compare TO:** Comparing completely different things. <em>(Life is compared to a journey.)</em>" },
    { triggers: ["agree with", "agree to", "agree on"], reply: "🤝 **Prepositions of Agreement:**<br>- Agree **with**: A person.<br>- Agree **to**: A proposal/plan.<br>- Agree **on**: A point/topic." },
    { triggers: ["angry with", "angry at", "angry for"], reply: "😡 **Prepositions of Anger:**<br>- Angry **with**: A person.<br>- Angry **at**: A thing/behavior." },
    { triggers: ["good at", "good in", "weak in", "weak at"], reply: "🎯 **Skills Prepositions:**<br>You are always Good **AT** or Weak **IN** a subject. Example: *He is good at English but weak in Math.*" },
    
    // --- Confusing Word Pairs ---
    { triggers: ["lose vs loose", "lose loose"], reply: "🔍 **Lose vs. Loose:**<br>- **Lose (Verb):** To misplace. <em>(Don't lose keys!)</em><br>- **Loose (Adjective):** Not tight. <em>(These pants are loose.)</em>" },
    { triggers: ["principal vs principle", "principal principle"], reply: "🏫 **Principal vs. Principle:**<br>- **Principal:** Head of a school. *Hint: The princi-PAL is your PAL.*<br>- **Principle:** A rule or belief." },
    { triggers: ["stationery vs stationary", "stationary stationery"], reply: "🖊️ **Stationery vs. Stationary:**<br>- **StationEry:** Paper, pens. *(E for Envelope!)*<br>- **StationAry:** Not moving. *(A for At rest!)*" },
    { triggers: ["beside vs besides", "beside besides"], reply: "🪑 **Beside vs. Besides:**<br>- **Beside:** Next to.<br>- **Besides:** In addition to. <em>(Besides English, I study Math.)</em>" },
    { triggers: ["accept vs except", "accept except"], reply: "✅ **Accept vs. Except:**<br>- **Accept:** To receive or agree.<br>- **Except:** Excluding. <em>(Everyone went except Rahim.)</em>" },
    { triggers: ["affect vs effect", "affect effect"], reply: "🧠 **Affect vs. Effect:**<br>- **Affect (Verb):** To influence. *(A is for Action!).*<br>- **Effect (Noun):** The result." },
    { triggers: ["its or it's", "it's", "its"], reply: "📝 **It's vs Its:** It's = It is / It has. Its = Ownership (No apostrophe for ownership!)." },

    // --- Group Verbs (Phrasal Verbs) ---
    { triggers: ["look for", "look after", "look into", "look down upon"], reply: "👀 **'Look' Group Verbs:**<br>- Look **for**: Search.<br>- Look **after**: Take care of.<br>- Look **into**: Investigate.<br>- Look **down upon**: Hate/Despise." },
    { triggers: ["give up", "give in", "give away"], reply: "🎁 **'Give' Group Verbs:**<br>- Give **up**: Quit a habit.<br>- Give **in**: Surrender.<br>- Give **away**: Distribute." },
    { triggers: ["put off", "put out", "put up with"], reply: "📅 **'Put' Group Verbs:**<br>- Put **off**: Postpone.<br>- Put **out**: Extinguish.<br>- Put **up with**: Tolerate." },
    { triggers: ["break down", "break out", "break into"], reply: "💔 **'Break' Group Verbs:**<br>- Break **down**: Machine stops / Start crying.<br>- Break **out**: Spread suddenly.<br>- Break **into**: Enter by force." },
    { triggers: ["bring up", "phrasal verb bring"], reply: "🧩 **Phrasal Verb: Bring up**<br>Meaning: To raise a child, or to introduce a topic in conversation." },
    { triggers: ["call off", "phrasal verb call"], reply: "🧩 **Phrasal Verb: Call off**<br>Meaning: To cancel something that was planned." },
    { triggers: ["carry out", "phrasal verb carry"], reply: "🧩 **Phrasal Verb: Carry out**<br>Meaning: To execute or perform a task/order." },
    { triggers: ["come across", "phrasal verb come"], reply: "🧩 **Phrasal Verb: Come across**<br>Meaning: To find something or meet someone by chance." },
    { triggers: ["fall out", "phrasal verb fall"], reply: "🧩 **Phrasal Verb: Fall out**<br>Meaning: To have a severe argument and stop being friends." },
    { triggers: ["get along", "phrasal verb get"], reply: "🧩 **Phrasal Verb: Get along**<br>Meaning: To have a friendly relationship with someone." },
    { triggers: ["go through", "phrasal verb go"], reply: "🧩 **Phrasal Verb: Go through**<br>Meaning: To experience a difficult situation, or examine carefully." },
    { triggers: ["hold up", "phrasal verb hold"], reply: "🧩 **Phrasal Verb: Hold up**<br>Meaning: To delay something, or to rob someone with a weapon." },
    { triggers: ["pass away", "pass out", "pass down"], reply: "🧩 **Phrasal Verbs with 'Pass':**<br>- **Pass away:** To die politely.<br>- **Pass out:** To faint.<br>- **Pass down:** Give to next generation." },
    { triggers: ["run out", "run over", "run after"], reply: "🧩 **Phrasal Verbs with 'Run':**<br>- **Run out of:** Have nothing left.<br>- **Run over:** Crushed by vehicle.<br>- **Run after:** Chase." },
    { triggers: ["set up", "set out", "set in"], reply: "🧩 **Phrasal Verbs with 'Set':**<br>- **Set up:** Establish.<br>- **Set out:** Start a journey.<br>- **Set in:** Begin and continue (e.g., Winter has set in)." },
    { triggers: ["turn down", "turn up", "turn out"], reply: "🧩 **Phrasal Verbs with 'Turn':**<br>- **Turn down:** Reject.<br>- **Turn up:** Arrive unexpectedly / increase volume.<br>- **Turn out:** End result." },

    // ==========================================
    // ✍️ WRITING VAULT SECRETS (PART C)
    // ==========================================
    { triggers: ["summary", "summarize", "how to write summary"], reply: "📝 **Summary Rules:** ONE single paragraph. 1/3rd the length of the passage. Use your own words. NEVER copy exact lines or add personal opinions!" },
    { triggers: ["flow chart", "flowchart", "boxes"], reply: "📊 **Flow Chart:** NEVER write full sentences! Start boxes with a Gerund (Verb+ing), Infinitive (To+Verb), or Noun phrase. Format vertically with down arrows." },
    { triggers: ["email", "how to write email", "email format", "formal email"], reply: "📧 **Email Format Checklist:**<br>1. To: (Email address)<br>2. Subject: (Keep it 4-5 words max)<br>3. Salutation: Dear Sir / Dear [Name],<br>4. Body: Get straight to the point.<br>5. Sign-off: Best regards, / Yours faithfully," },
    { triggers: ["story", "completing story", "how to write a story", "story format"], reply: "📖 **Story Hacks:**<br>1. ALWAYS give a Catchy Title at the top.<br>2. Write the given prompt first, then continue it.<br>3. Keep it in the **Past Tense**.<br>4. Add a one-line **Moral** at the very end to impress the board examiner!" },
    { triggers: ["graph", "pie chart", "bar chart", "chart writing", "how to write a graph"], reply: "📈 **Graph & Chart Hacks:**<br>NEVER give your personal opinion! Use smart vocabulary:<br>- Going up: *Skyrocketed, Surged, Increased sharply.*<br>- Going down: *Plummeted, Dropped, Decreased sharply.*<br>- Staying the same: *Remained stable, Leveled off.*" },
    { triggers: ["theme vs summary", "what is theme", "how to write theme", "poem theme"], reply: "💡 **Theme vs. Summary:**<br>- **Summary:** Tells the story (What happened).<br>- **Theme:** Tells the hidden message (Why it matters).<br>A theme must be exactly 3 to 4 sentences explaining the philosophy. Don't write character names in a theme!" },
    { triggers: ["paragraph rules", "how to write a paragraph", "paragraph format"], reply: "📝 **Paragraph Golden Rule:** A paragraph must be ONE single block of text! If you press 'Enter' and make a second block, the examiner will cut your marks. Always start with a strong Topic Sentence." },
    { triggers: ["informal letter", "letter to friend", "how to write a letter"], reply: "✉️ **Informal Letter Structure:**<br>1. Date at top left.<br>2. Greeting (Dear friend).<br>3. Intro: 'I hope you are hale and hearty by the grace of Almighty.'<br>4. Body: Main message.<br>5. Ending: 'No more today. Convey my regards to your parents.'<br>6. Don't forget to draw the ENVELOPE at the bottom!" },
    { triggers: ["cv format", "how to write a cv", "curriculum vitae"], reply: "📄 **CV Writing Hack:**<br>Always split a CV into TWO parts! <br>Part 1: The Cover Letter (Addressed to the Manager, asking for the job).<br>Part 2: The actual CV box containing: Name, Address, Objective, Education (in a box), Experience, and References." },
    { triggers: ["notice writing", "how to write a notice"], reply: "📌 **Notice Format:**<br>1. Draw a BOX around the whole thing.<br>2. Top Center: Name of School/College.<br>3. Word 'NOTICE' in bold capitals.<br>4. Date on the left.<br>5. Body: What, When, Where.<br>6. Bottom right: Signature and Title." },
    { triggers: ["poster writing", "how to write a poster"], reply: "🖼️ **Poster Format:**<br>1. Draw a big BOX.<br>2. Use a catchy, bold headline (e.g., STOP DEFORESTATION!).<br>3. Write 3-4 bullet points with short warnings/advice.<br>4. Bottom line: 'Circulated by: The Students of [College Name]'." },
    { triggers: ["dialogue writing", "how to write a dialogue"], reply: "💬 **Dialogue Hack:**<br>Never start with just 'Hi, how are you? I am fine'. Get to the topic in the second sentence! <br>Use emotional markers in brackets like *(smiling)* or *(sighs)* to show high-level narrative skills." },
    { triggers: ["connector", "connectors", "linker", "linkers"], reply: "🔗 **Connectors** glue sentences! Addition: And, Moreover. Contrast: But, However. Result: So, Therefore. Use them in Paragraphs!" },
    { triggers: ["how to start an essay", "hook sentence", "essay intro"], reply: "🎣 **Writing Hack: The Hook**<br>Never start an essay with 'In this essay I will talk about...'. Start with a Hook!<br>- **A Question:** *Have you ever wondered why...?*<br>- **A Bold Statement:** *In today's modern era, nothing is more debated than...*<br>- **A Quote:** *As the famous saying goes...*" },

    // ==========================================
    // 🗣️ SPOKEN ENGLISH & SCENARIOS (REAL LIFE)
    // ==========================================
    { triggers: ["introduce myself", "introduction", "how to introduce"], reply: "🗣️ **Spoken Hack:** NEVER say 'Myself Asif'. It is grammatically wrong! Say: 'Hello, I am Asif.' OR 'My name is Asif.'" },
    { triggers: ["interview", "job interview", "how to pass interview"], reply: "👔 **Interview Hack:** When they say 'Tell me about yourself', do NOT tell your life story! Use the Present-Past-Future rule:<br>1. What you do now.<br>2. What you achieved in the past.<br>3. What you want to do in the future." },
    { triggers: ["agree", "how to agree", "saying yes"], reply: "🤝 **Smart Ways to Agree:**<br>Stop saying 'Yes, I agree.' Say:<br>- Absolutely!<br>- I couldn't agree more.<br>- That's exactly how I feel.<br>- You hit the nail on the head!" },
    { triggers: ["disagree", "how to disagree", "saying no"], reply: "🛑 **Polite Ways to Disagree:**<br>Never say 'You are wrong!' Say:<br>- I see your point, but...<br>- I respectfully disagree.<br>- That's one way to look at it, however..." },
    { triggers: ["restaurant", "order food", "cafe", "menu"], reply: "🍔 **At a Restaurant:**<br>- To order: *'I would like to have the burger, please.'*<br>- To ask for the bill: *'Could we get the check, please?'*" },
    { triggers: ["direction", "lost", "where is", "how to go"], reply: "🗺️ **Asking for Directions:**<br>- *'Excuse me, could you tell me how to get to the station?'*<br>- *'Am I on the right road for Dhaka?'*" },
    { triggers: ["phone", "call", "speaking on phone"], reply: "📱 **Phone Hacks:**<br>- To answer: *'Hello, Asif speaking.'*<br>- To ask for someone: *'May I speak to Rahim, please?'*" },
    { triggers: ["order food delivery", "foodpanda", "delivery man"], reply: "🛵 **Talking to a Delivery Rider:**<br>- *'Hello, I am standing in front of the main gate.'*<br>- *'Could you please come to the second floor?'*<br>- *'I will pay in cash, do you have change for a 500 Taka note?'*" },
    { triggers: ["wifi problem", "internet is slow", "no net", "buffering"], reply: "📶 **Internet Complaints:**<br>- *'The internet is really slow today, the video keeps buffering.'*<br>- *'Could I get the WiFi password, please?'*<br>- *'My mobile data has run out, can you turn on your hotspot?'*" },
    { triggers: ["asking for a discount", "bargaining in english", "too expensive"], reply: "🛍️ **Polite Bargaining:**<br>- *'That is a bit out of my budget. Can you offer a better price?'*<br>- *'Is that your final price?'*<br>- *'If I buy two, can you give me a discount?'*" },
    { triggers: ["sick leave", "leave application", "day off office"], reply: "📝 **Asking for Leave:**<br>- *'I am writing to request a sick leave for tomorrow.'*<br>- *'Could I request a few days off next week for personal reasons?'*<br>- *'I am not feeling well and need to take the rest of the day off.'*" },
    { triggers: ["zoom meeting", "google meet", "mic muted", "can you hear me"], reply: "💻 **Zoom Meeting Hacks:**<br>- *'Am I audible to everyone?'*<br>- *'I think you are on mute.'*<br>- *'Could you please share your screen?'*" },
    { triggers: ["small talk", "talking to strangers", "start conversation"], reply: "🗣️ **Mastering Small Talk:**<br>- *'Lovely weather we are having today, isn't it?'*<br>- *'Did you catch the game last night?'*<br>- *'How was your weekend? Did you do anything fun?'*" },
    { triggers: ["give opinion", "my opinion", "i think that"], reply: "🤔 **Expressing Opinions Smartly:**<br>Instead of 'I think', use:<br>- *'From my perspective...'*<br>- *'If you ask me...'*<br>- *'I truly believe that...'*<br>- *'To my mind...'*" },
    { triggers: ["apologize", "sorry", "my mistake"], reply: "🙏 **Smart Apologies:**<br>Instead of just saying 'Sorry', use:<br>- *'I sincerely apologize for the delay.'*<br>- *'My bad! I completely forgot.'*<br>- *'I take full responsibility for this mistake.'*" },
    { triggers: ["forgive", "accept apology", "it's ok"], reply: "🕊️ **Accepting Apologies:**<br>- *'Don’t worry about it at all.'*<br>- *'I completely understand, no harm done.'*<br>- *'Let’s just put it behind us.'*" },
    { triggers: ["at the bank", "open an account", "withdraw money"], reply: "🏦 **At the Bank:**<br>- *'I would like to open a savings account, please.'*<br>- *'What is the minimum balance required?'*<br>- *'I need to deposit this cheque into my account.'*" },
    { triggers: ["at the airport", "flight delayed", "check in desk", "luggage"], reply: "✈️ **At the Airport:**<br>- *'Where is the check-in desk for Emirates flight 204?'*<br>- *'Do I need to take my laptop out of the bag for security?'*<br>- *'Is this flight boarding on time?'*" },
    { triggers: ["at the doctor", "hospital", "appointment", "fever", "pain"], reply: "🩺 **At the Doctor:**<br>- *'I’d like to book an appointment with Dr. Rahman, please.'*<br>- *'I have been running a high fever since last night.'*<br>- *'I have a sharp pain in my lower back.'*" },
    { triggers: ["at the police station", "report a crime", "robbed"], reply: "🚓 **At the Police Station:**<br>- *'I need to report a theft. My wallet was stolen.'*<br>- *'Can I file an FIR (First Information Report)?'*<br>- *'The incident happened near the Metro station at around 5 PM.'*" },
    { triggers: ["rent an apartment", "talk to landlord", "house rent"], reply: "🏠 **Renting an Apartment:**<br>- *'I am calling about the 'To Let' sign. Is the flat still available?'*<br>- *'How much is the monthly rent, and does it include utility bills?'*" },
    { triggers: ["car mechanic", "fix car", "car broke down"], reply: "🚗 **At the Mechanic:**<br>- *'My car broke down in the middle of the road. Can you tow it?'*<br>- *'The engine is making a strange rattling noise.'*<br>- *'How much will the repairs cost, and when will it be ready?'*" },
    { triggers: ["tech support", "laptop broken", "phone repair", "screen frozen"], reply: "💻 **Tech Support & Gadgets:**<br>- *'My laptop screen is completely frozen and unresponsive.'*<br>- *'The battery drains incredibly fast, can you replace it?'*<br>- *'I tried rebooting it and clearing the cache, but nothing worked.'*" },
    { triggers: ["haircut", "barber", "salon", "trim"], reply: "✂️ **At the Barber / Salon:**<br>- *'I would like a haircut, please. Just a trim on the top.'*<br>- *'Can you fade the sides and leave the top a bit longer?'*<br>- *'Could I get a beard trim as well?'*" },
    { triggers: ["gym", "fitness", "working out", "workout"], reply: "🏋️ **At the Gym:**<br>- *'Are you using this machine, or can I work in?'*<br>- *'Could you spot me on the bench press for a second?'*<br>- *'How many sets do you have left?'*" },
    { triggers: ["job promotion", "ask for raise", "salary increase"], reply: "📈 **Asking for a Promotion:**<br>- *'I’d like to discuss my performance and potential for a salary review.'*<br>- *'Over the past year, I have consistently exceeded my targets.'*" },
    { triggers: ["quit job", "resign", "resignation letter", "leaving job"], reply: "🚪 **Resigning Gracefully:**<br>- *'Please accept this as formal notice of my resignation.'*<br>- *'I have been offered a new opportunity that aligns with my career goals.'*<br>- *'I am deeply grateful for the experience I have gained here.'*" },
    { triggers: ["complain politely", "how to complain", "bad service"], reply: "🛎️ **Polite Complaints:**<br>- *'Excuse me, but there seems to be a problem with my order.'*<br>- *'I hate to complain, but my food is quite cold.'*<br>- *'I am not very satisfied with this room, could we change?'*" },
    { triggers: ["express sympathy", "someone died", "bad news", "condolences"], reply: "🕊️ **Expressing Sympathy:**<br>- *'I am so sorry for your loss.'*<br>- *'My deepest condolences to you and your family.'*<br>- *'Please let me know if there is anything I can do to help.'*" },
    { triggers: ["interrupt politely", "how to interrupt", "stop someone talking"], reply: "✋ **Interrupting Politely:**<br>- *'Sorry to interrupt, but could I add something here?'*<br>- *'Excuse me, before we move on, I have a quick question.'*<br>- *'May I just jump in for a second?'*" },
    { triggers: ["stop saying i don't know", "how to say i don't know"], reply: "🤔 **Smart ways to say 'I don't know':**<br>- *'I am not entirely sure, but I can find out.'*<br>- *'That is a great question. Let me look into it.'*<br>- *'I don't have the exact answer off the top of my head.'*" },
    { triggers: ["stop saying you're welcome", "how to say you're welcome"], reply: "🤝 **Smart ways to say 'You're Welcome':**<br>- *'Anytime!'*<br>- *'I'm happy to help.'*<br>- *'No worries at all.'*<br>- *'The pleasure is all mine.'* (Very formal)" },
    { triggers: ["stop saying nice to meet you", "nice to meet you alternative"], reply: "👋 **Smart ways to say 'Nice to meet you':**<br>- *'It's a pleasure connecting with you.'*<br>- *'I've heard great things about you.'*<br>- *'Lovely to make your acquaintance.'*" },

    // ==========================================
    // 📖 HSC 1ST PAPER (TEXTBOOK SUMMARIES & THEMES)
    // ==========================================
    { triggers: ["dreams by langston hughes", "dreams poem", "hold fast to dreams"], reply: "📖 **Theme of 'Dreams' by Langston Hughes:**<br>This poem emphasizes the vital importance of holding onto your ambitions. Without dreams, life becomes bleak, painful, and meaningless—like a 'broken-winged bird' or a 'barren field'." },
    { triggers: ["i died for beauty", "emily dickinson poem"], reply: "📖 **Theme of 'I Died for Beauty':**<br>This poem argues that Truth and Beauty are exactly the same thing. The two martyrs in the tomb realize they died for the same noble cause, showing that aesthetic beauty and moral truth are eternally linked." },
    { triggers: ["traffic police poem", "the traffic police"], reply: "📖 **Theme of 'The Traffic Police':**<br>This poem highlights the harsh, unforgiving reality of a traffic policeman's life. Despite the extreme weather, pollution, and lack of appreciation, he remains duty-bound to ensure the safety of others." },
    { triggers: ["nelson mandela passage", "apartheid", "mandela"], reply: "✊🏿 **Nelson Mandela Summary:**<br>Mandela dedicated his life to breaking the chains of 'Apartheid' (white minority rule) in South Africa. He spent 27 years in prison but never lost his vision of a democratic, free society. He became a global icon of peace." },
    { triggers: ["kuakata", "daughter of the sea", "sagar kanna"], reply: "📖 **Kuakata Summary:**<br>Known as 'Sagar Kannya' (Daughter of the Sea), Kuakata is a unique beach in Bangladesh where you can watch both the sunrise and sunset. It has a rich cultural heritage, blending Rakhine settlements with Buddhist temples." },
    { triggers: ["amerigo", "street child", "amerigo passage"], reply: "📖 **Amerigo Summary:**<br>Amerigo represents the tragic reality of street children. Separated from his parents, he survives by collecting trash and polishing shoes. The passage highlights the severe dangers these children face, including disease and exploitation." },
    { triggers: ["valentina tereshkova", "first woman in space"], reply: "📖 **Valentina Tereshkova Summary:**<br>A former textile worker who became the first woman in space. Aboard Vostok 6 in 1963, she orbited Earth 48 times. Her journey proved that women could endure the extreme stresses of space travel." },
    { triggers: ["brojen das", "english channel", "brojen das passage"], reply: "📖 **Brojen Das Summary:**<br>Brojen Das was a legendary Bangladeshi swimmer. He was the first Asian to swim across the English Channel, and he crossed it six times! His determination made him a national hero." },
    { triggers: ["martin luther king", "i have a dream", "mlk speech"], reply: "📖 **'I Have a Dream' Summary:**<br>Delivered by MLK in 1963, this iconic speech called for the end of racism and segregation in America. His dream was that one day, children would be judged not by skin color, but by character." },
    { triggers: ["etiquette and manners", "good manners passage"], reply: "📖 **Etiquette and Manners Summary:**<br>Etiquette refers to the formal rules of behavior in society, while manners are our everyday interactions. The passage stresses that using polite words creates a smooth, respectful environment." },

    // ==========================================
    // 🧠 HIGH-LEVEL VOCABULARY & SYNONYMS
    // ==========================================
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
    { triggers: ["synonym for important", "important alternative", "crucial"], reply: "🔑 **Instead of 'Important', use:**<br>- Crucial<br>- Vital<br>- Essential<br>- Paramount<br>- Imperative<br>- Significant" },
    { triggers: ["synonym for difficult", "hard alternative", "tough"], reply: "🧗 **Instead of 'Difficult' or 'Hard', use:**<br>- Challenging<br>- Demanding<br>- Arduous<br>- Formidable<br>- Complex" },
    { triggers: ["synonym for interesting", "interesting alternative", "fascinating"], reply: "🤩 **Instead of 'Interesting', use:**<br>- Fascinating<br>- Captivating<br>- Intriguing<br>- Engaging<br>- Compelling" },
    { triggers: ["synonym for successful", "successful alternative", "effective"], reply: "🏆 **Instead of 'Successful', use:**<br>- Victorious<br>- Triumphant<br>- Effective<br>- Fruitful<br>- Prosperous" },
    { triggers: ["synonym for dangerous", "dangerous alternative", "risky"], reply: "⚠️ **Instead of 'Dangerous', use:**<br>- Hazardous<br>- Perilous<br>- Treacherous<br>- Risky<br>- Precarious" },

    // ==========================================
    // 🎭 IDIOMS, PROVERBS & LITERARY DEVICES
    // ==========================================
    { triggers: ["idiom", "phrase", "proverb"], reply: "🎭 **Idioms** don't mean what they literally say! 'Piece of cake' = easy. 'Bite the bullet' = do something difficult. Use them in Stories to score high!" },
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
    { triggers: ["by leaps and bounds", "idiom leaps and bounds"], reply: "🚀 **Idiom: By leaps and bounds.**<br>Meaning: Very rapidly or quickly. <br>Example: *His English fluency has improved by leaps and bounds since he started using Champ's Camp!*" },
    { triggers: ["a stitch in time", "stitch in time saves nine"], reply: "🪡 **Proverb: A stitch in time saves nine.**<br>Meaning: Fixing a small problem immediately prevents it from becoming a massive problem later. (Like studying a little bit every day instead of cramming the night before an exam!)" },
    { triggers: ["barking dogs", "barking dogs seldom bite"], reply: "🐕 **Proverb: Barking dogs seldom bite.**<br>Meaning: People who make a lot of loud threats rarely actually take action. All talk, no action!" },
    { triggers: ["empty vessels", "empty vessels sound much"], reply: "🏺 **Proverb: Empty vessels sound much.**<br>Meaning: People with the least knowledge or substance often talk the loudest and boast the most." },
    
    // --- Literary Devices ---
    { triggers: ["simile", "what is a simile", "figure of speech"], reply: "🎭 **Figure of Speech: Simile**<br>Comparing two different things using **'like'** or **'as'**.<br>Example: *He fought like a lion.* / *She is as fast as a cheetah.*" },
    { triggers: ["metaphor", "what is a metaphor"], reply: "🎭 **Figure of Speech: Metaphor**<br>A direct comparison without using 'like' or 'as'. You say one thing IS another thing.<br>Example: *Time is money.* / *He is a lion in battle.* / *The world is a stage.*" },
    { triggers: ["personification", "what is personification"], reply: "🎭 **Figure of Speech: Personification**<br>Giving human feelings, actions, or characteristics to non-human things.<br>Example: *The wind whispered through the trees.* / *The flowers danced in the breeze.*" },
    { triggers: ["alliteration", "what is alliteration"], reply: "🎭 **Figure of Speech: Alliteration**<br>Repeating the same starting consonant sound in a sentence.<br>Example: *She sells seashells by the sea-shore.* / *Peter Piper picked a peck of pickled peppers.*" },
    { triggers: ["hyperbole", "what is hyperbole"], reply: "🎭 **Figure of Speech: Hyperbole**<br>An extreme exaggeration used for emphasis. Not meant to be taken literally!<br>Example: *I have told you a million times.* / *I am so hungry I could eat a horse.*" },
    { triggers: ["oxymoron", "what is an oxymoron"], reply: "🎭 **Figure of Speech: Oxymoron**<br>Putting two completely opposite words next to each other to create a new meaning.<br>Example: *Open secret, Bittersweet, Act naturally, Original copy, Only choice.*" },
    { triggers: ["irony", "what is irony"], reply: "🎭 **Figure of Speech: Irony**<br>When the opposite of what is expected happens, often in a funny or tragic way.<br>Example: *A fire station burning down.* / *A pilot having a fear of heights.*" },

    // ==========================================
    // 🌐 GEN-Z SLANG & INTERNET ENGLISH
    // ==========================================
    { triggers: ["slang", "informal english", "cool words", "gen z"], reply: "🔥 **Modern Native Slang:**<br>• **Ghosted:** Ignoring messages.<br>• **Salty:** Being upset over small things.<br>• **Flex:** To show off.<br>• **No Cap:** Telling the truth (No lie)." },
    { triggers: ["lit", "fire", "what does lit mean", "what is fire"], reply: "🔥 **Slang Alert: Lit / Fire**<br>Used to describe something that is amazing, exciting, or excellent. <br><em>Example: 'That new movie was straight fire!' or 'Asif's new app is so lit!'</em>" },
    { triggers: ["sus", "what does sus mean", "suspicious"], reply: "🕵️‍♂️ **Slang Alert: Sus**<br>Short for 'Suspicious'. Used when someone is acting weird or shady.<br><em>Example: 'Bro, you doing your homework on a Friday night is looking kinda sus.'</em>" },
    { triggers: ["goat", "what is goat", "greatest of all time"], reply: "🐐 **Slang Alert: G.O.A.T.**<br>Stands for 'Greatest Of All Time'.<br><em>Example: 'Messi is the GOAT.' or 'Sha's UI designs are the GOAT.'</em>" },
    { triggers: ["spill the tea", "what does spill the tea mean", "the tea"], reply: "☕ **Slang Alert: Spill the tea**<br>'Tea' means gossip or drama. So 'spill the tea' means 'tell me the gossip!'<br><em>Example: 'Okay, what happened at the party yesterday? Spill the tea!'</em>" },
    { triggers: ["vibe check", "what is vibe check", "failed the vibe check"], reply: "✨ **Slang Alert: Vibe Check**<br>Checking someone's energy or mood. If someone is being negative or angry, they 'failed the vibe check'. Keep your vibes positive!" },
    { triggers: ["no cap", "what does no cap mean", "cap", "capping"], reply: "🧢 **Slang Alert: Cap**<br>- **Cap:** A lie. <em>('You read 10 chapters today? That's cap.')</em><br>- **No Cap:** The absolute truth. <em>('Asif is a genius developer, no cap.')</em>" },
    { triggers: ["simp", "what is a simp"], reply: "🥺 **Slang Alert: Simp**<br>Someone who does way too much for a person they like, often ignoring their own dignity. <br><em>Example: 'He bought her a phone just because she smiled at him. What a simp.'</em>" },
    { triggers: ["ghosted", "what is ghosting"], reply: "👻 **Slang Alert: Ghosted**<br>When someone completely stops replying to your texts and ignores you without warning.<br><em>Example: 'I thought the interview went well, but the company ghosted me.'</em>" },
    { triggers: ["salty", "what is salty"], reply: "🧂 **Slang Alert: Salty**<br>Being upset, bitter, or jealous over something minor.<br><em>Example: 'He lost the game and now he is acting so salty.'</em>" },
    { triggers: ["glow up", "what is a glow up"], reply: "🌟 **Slang Alert: Glow Up**<br>An incredible physical or mental transformation for the better.<br><em>Example: 'Did you see him after summer break? He had a massive glow up!'</em>" },
    { triggers: ["flex", "what is flex"], reply: "💪 **Slang Alert: Flex**<br>To show off your money, skills, or lifestyle.<br><em>Example: 'He bought an iPhone 15 Pro Max just to flex on us.'</em>" },
    { triggers: ["lowkey", "highkey"], reply: "🗝️ **Slang Alert: Lowkey / Highkey**<br>- **Lowkey:** Secretly, mildly. <em>('I am lowkey scared for the exam.')</em><br>- **Highkey:** Very obviously, strongly. <em>('I highkey want pizza right now.')</em>" },
    { triggers: ["skibidi", "what is skibidi", "skibidi toilet"], reply: "🚽 **Slang Alert: Skibidi**<br>A piece of pure Gen-Alpha internet brainrot. It doesn't actually mean anything, it's just used as a random funny adjective. *('What the skibidi is going on?')*" },
    { triggers: ["sigma", "what is a sigma", "sigma male"], reply: "🐺 **Slang Alert: Sigma**<br>A 'lone wolf' who is successful, confident, and cool, but doesn't need social approval. It's the highest compliment in current internet slang. *('He scored 10/10 on the Grammar test without studying, absolute Sigma.')*" },
    { triggers: ["gyat", "gyatt", "what is gyat"], reply: "🍑 **Slang Alert: Gyat**<br>An exclamation of extreme surprise. It's a shortened, exaggerated way of saying 'Goddamn!'. Keep it respectful though! 👀" },
    { triggers: ["fanum tax", "what is fanum tax", "tax"], reply: "🍕 **Slang Alert: Fanum Tax**<br>When a friend steals a little bit of your food. Named after a streamer named Fanum who always steals food from his friends. *('Bro, I'm taking the Fanum Tax from your french fries.')*" },
    { triggers: ["mewing", "what is mewing", "looksmaxxing"], reply: "🤫 **Slang Alert: Mewing**<br>A facial exercise where you press your tongue to the roof of your mouth to give yourself a sharper jawline. On the internet, 'mewing' means putting your finger over your lips to silence someone because you are busy 'fixing your jawline'." },
    { triggers: ["caught in 4k", "4k", "caught lacking"], reply: "📸 **Slang Alert: Caught in 4K**<br>Being caught red-handed doing something embarrassing, with undeniable digital proof (like a screenshot or video). *('You said you were sleeping but I saw you online playing games. Caught in 4K!')*" },
    { triggers: ["slay", "that's a slay", "slaying"], reply: "💅 **Slang Alert: Slay**<br>To do something exceptionally well, or to look amazing. *('Sha's UI designs absolutely slay.')* or *('You slayed that HSC exam!')*" },
    { triggers: ["gatekeep", "gatekeeping", "don't gatekeep"], reply: "🚧 **Slang Alert: Gatekeep**<br>When you find something amazing (like a song, a restaurant, or this app) but refuse to share it with others because you want to keep it to yourself. *('Don't gatekeep Champ's Camp, share it with your classmates!')*" },
    { triggers: ["gaslight", "what is gaslighting"], reply: "🕯️ **Slang Alert: Gaslight**<br>Manipulating someone into doubting their own memory or sanity. *('I literally saw you eat my pizza, stop gaslighting me into thinking I ate it!')*" },
    { triggers: ["girlboss", "gaslight gatekeep girlboss"], reply: "👑 **Slang Alert: Girlboss**<br>A woman who is highly successful, independent, and commands authority. Often used ironically in the phrase *'Gaslight, Gatekeep, Girlboss'*." },
    { triggers: ["rizz", "what is rizz", "w rizz"], reply: "😎 **Slang Alert: Rizz**<br>Short for 'Charisma'. It means you have smooth game and charm, especially when flirting. <br><em>Example: 'Bro has unspoken rizz, everyone likes him.'</em>" },
    { triggers: ["delulu", "what is delulu"], reply: "🌀 **Slang Alert: Delulu**<br>Short for 'Delusional'. Believing in something that is completely unrealistic or a fantasy. <br><em>Example: 'Thinking you can pass the HSC without studying is completely delulu.'</em>" },
    { triggers: ["fomo", "what is fomo"], reply: "👀 **Slang Alert: FOMO**<br>Stands for 'Fear Of Missing Out'. The anxious feeling that your friends are having fun without you. <br><em>Example: 'I went to the party even though I was tired because I had bad FOMO.'</em>" },
    { triggers: ["w or l", "what does w mean", "take an l", "dub"], reply: "🏆 **Slang Alert: W and L**<br>- **W (Dub):** Means 'Win' or a huge success. <em>('That new phone is a massive W.')</em><br>- **L:** Means 'Loss' or a failure. <em>('I forgot my homework today, took a massive L.')</em>" },
    { triggers: ["rent free", "living rent free"], reply: "🧠 **Slang Alert: Rent Free**<br>When you can't stop thinking about something or someone, they are 'living rent-free in your head'. <br><em>Example: 'That catchy song has been living rent-free in my head all day.'</em>" },

    // ==========================================
    // 🧠 PRONUNCIATION, PUNCTUATION & PHONETICS
    // ==========================================
    { triggers: ["silent b", "silent letters", "how to pronounce doubt", "debt"], reply: "🤫 **Silent 'B' Rule:** If a word ends in 'mb', the 'b' is usually silent! <br>Examples: Climb *(clime)*, Thumb *(thum)*, Bomb *(bom)*. <br>Also silent in: Doubt *(dout)*, Debt *(det)*." },
    { triggers: ["silent k", "how to pronounce knife", "know"], reply: "🤫 **Silent 'K' Rule:** When 'k' comes right before 'n' at the start of a word, it is completely silent! <br>Examples: Knife, Know, Knee, Knight, Knock." },
    { triggers: ["schwa", "schwa sound", "how to sound native"], reply: "🗣️ **The Schwa Sound (ə):** The most common sound in English! It sounds like a lazy 'uh'. Native speakers don't pronounce every vowel perfectly. <br>Example: In 'About', the 'A' sounds like 'uh'. In 'Pencil', the 'e' sounds like 'uh'." },
    { triggers: ["punctuation", "comma", "full stop"], reply: "✍️ **Punctuation:** Start with a Capital Letter. Use a Comma (,) for short pauses/lists. Use a Full Stop (.) to end an idea completely." },
    { triggers: ["semicolon", "how to use a semicolon", "use of semicolon"], reply: "✍️ **Punctuation: The Semicolon (;)**<br>Use a semicolon to connect two complete sentences that are closely related, without using 'and' or 'but'.<br>Example: *I have a big exam tomorrow; I need to study all night.*" },
    { triggers: ["colon", "how to use a colon", "use of colon"], reply: "✍️ **Punctuation: The Colon (:)**<br>Use a colon to introduce a list, a quote, or an explanation. Think of it as a drumroll! 🥁<br>Example: *I need to buy three things: apples, milk, and bread.*" },
    { triggers: ["hyphen vs dash", "hyphen", "em dash", "en dash"], reply: "✍️ **Punctuation: Hyphen vs Dash**<br>- **Hyphen (-):** Connects two words together. *(Well-known, Mother-in-law)*.<br>- **Dash (—):** Creates a dramatic pause in a sentence. *(He was running fast — too fast — and tripped).* " },
    { triggers: ["apostrophe for possession", "apostrophe s", "plural possession"], reply: "✍️ **Punctuation: The Apostrophe Trap**<br>- Singular noun: Add **'s**. *(The boy's bag)*.<br>- Plural noun ending in 's': Just add an apostrophe at the end! *(The boys' bags, The students' hostel)*.<br>- Plural noun NOT ending in 's': Add **'s**. *(The children's toys)*." },

    // ==========================================
    // 🧠 MOTIVATION, PRODUCTIVITY & PSYCHOLOGY
    // ==========================================
    { triggers: ["procrastinating", "lazy", "don't want to study", "no motivation"], reply: "Listen to me, {name}. Motivation is a myth. Discipline is what gets you results. Count down from 5, put your phone away, and just start for 5 minutes. The momentum will carry you! 🚀" },
    { triggers: ["exam tomorrow", "scared of exam", "fear", "failing", "tension"], reply: "Stop panicking! 🛑 Panic destroys memory. Drink water. Open the 'Exam Blueprint' in the Tools section and just focus on the Top Suggestions. You know more than you think you do!" },
    { triggers: ["depressed", "sad", "failing", "marks", "anxious", "stress"], reply: "Hey, grades do not define your worth. Exam pressure is tough, but Asif built this app to make it easier for you. We are with you! ❤️" },
    { triggers: ["bored", "boring", "sleepy", "tired", "exhausted"], reply: "Take a 10-minute break! Wash your face, grab some water, and stretch. Studying with a tired brain doesn't work. Come back refreshed!" },
    { triggers: ["routine", "timetable", "how many hours", "schedule"], reply: "⏰ **Routine Secret:** Don't measure study by hours; measure it by *topics*. Say 'I will finish Unit 1 today', not 'I will study for 3 hours'." },
    { triggers: ["vocabulary", "vocab", "new words", "how to memorize words"], reply: "🧠 **Vocabulary Hack:** Don't memorize long lists! Learn 3 words a day, and write 3 real-life sentences using them. Context is key." },
    { triggers: ["fluency", "fluent", "how to speak fluent"], reply: "🎙️ **Fluency Secret:** Do NOT worry about your accent. Fluency is confidence! Practice speaking in front of a mirror for 5 mins daily. Mistakes are okay!" },
    { triggers: ["best time to study", "when to study", "morning or night"], reply: "🌅 **Morning vs Night:** Science says the brain is most fresh and absorbs complex things (like Math/Grammar) best between 4:00 AM and 10:00 AM. But if you are a night owl, study when it's quietest. Just don't ruin your sleep cycle!" },
    { triggers: ["forgetting words", "how to memorize vocabulary", "can't remember vocab"], reply: "🧠 **The Spaced Repetition Hack:** Don't just read a word 10 times. Read it, use it in a funny sentence, and test yourself tomorrow. Then test yourself 3 days later. Use our 'Vocab Arcade' daily to lock words in your brain permanently!" },
    { triggers: ["i got a bad grade", "i failed", "bad marks", "parents are angry", "feeling worthless"], reply: "❤️ **Listen to me:** A bad grade does NOT define your intelligence or your future. It just means your current study method didn't work. Take a deep breath, don't give up, and let's change the strategy today. Asif built this app specifically to help you bounce back. You can do this!" },
    { triggers: ["distracted by phone", "phone addiction", "social media addiction"], reply: "📱 **Beat Phone Addiction:** Put your phone in another room when you study. If you need it for Champ's Camp, turn on 'Do Not Disturb' so WhatsApp and Facebook notifications don't break your focus. Out of sight, out of mind!" },
    { triggers: ["handwriting", "bad handwriting", "presentation in exam"], reply: "🖋️ **Exam Presentation:** You don't need beautiful handwriting, you just need CLEAR handwriting. Leave a little extra space between words. Draw straight margins. Use a blue pen for headings. A neat paper psychologically forces the examiner to give you better marks!" },
    { triggers: ["stress", "anxiety", "too much pressure", "exam fear"], reply: "🌿 **Handling Exam Pressure:** Close your eyes and take 3 deep breaths. You are trying to carry the weight of the whole year in one day. Drop it. Just focus on mastering ONE lesson today. Small wins build massive momentum!" },
    { triggers: ["burnout", "exhausted", "tired of studying", "giving up"], reply: "🔋 **Burnout is real:** If you feel completely exhausted and your brain rejects information, STOP studying. Take a full day off. No books, no guilt. Go for a walk or sleep. You will come back 10x stronger tomorrow." },
    { triggers: ["how to focus", "pomodoro technique", "can't concentrate"], reply: "🍅 **The Pomodoro Focus Hack:** Don't try to study for 3 hours straight. Set a timer for 25 minutes. Study with 100% focus, then take a 5-minute break to stretch. Repeat 4 times, then take a 30-minute break. Use the 'Study Timer' in the Tools menu!" },
    { triggers: ["time management", "running out of time in exam"], reply: "⏱️ **Exam Time Hack:** For HSC English: <br>Part A (Reading): 45 mins.<br>Part B (Grammar): 25 mins.<br>Part C (Writing): 50 mins.<br>Never get stuck on one grammar question. Skip it and get the easy marks first!" },
    { triggers: ["i hate studying", "studying is boring", "how to make studying fun"], reply: "🎮 **Gamify Your Study:** Don't just read pages—turn it into a game! Use the Vocab Arcade here to test yourself. Race against the clock. Teach what you learned to an imaginary student. When you actively participate, your brain releases dopamine, making it feel less like a chore." },
    { triggers: ["imposter syndrome", "i feel fake", "i don't deserve this"], reply: "🛡️ **Imposter Syndrome:** Feeling like you aren't smart enough and just 'got lucky'? That's Imposter Syndrome, and even the smartest CEOs have it. The fact that you are actively trying to learn right now proves you deserve every bit of success coming your way. You are valid." },
    { triggers: ["feynman technique deep", "how to study like a genius", "richard feynman"], reply: "🧠 **The Feynman Masterclass:** To learn anything permanently:<br>1. Write the topic on a blank page.<br>2. Explain it out loud as if you are teaching a 10-year-old child.<br>3. When you stumble or use complex jargon, you found a gap in your knowledge.<br>4. Go back to the book, simplify it, and try again!" },
    { triggers: ["i have no friends", "feeling lonely", "loneliness", "isolated"], reply: "🫂 **Dealing with Loneliness:** High school can be incredibly isolating, especially when the pressure is high. Use this time to build yourself. Read books, learn coding, master a language. Your future self will thank you for the foundation you are building in the quiet moments. And hey, you've always got Mini Champ to talk to! 💙" },
    { triggers: ["sleep", "tired", "all nighter", "staying up late"], reply: "🛏️ **The Sleep Hack:** Pulling an 'all-nighter' destroys memory! 7 hours of sleep + 3 hours of study is better than 10 hours of sleep-deprived study." },
    { triggers: ["how to stop overthinking", "overthinking", "anxiety attack", "panic"], reply: "🌬️ **The 5-4-3-2-1 Grounding Trick:** Right now, name 5 things you can see, 4 things you can physically touch, 3 things you can hear, 2 things you can smell, and take 1 deep breath. It forces your brain to stop processing the future and return to the present moment. You are safe." },

    // ==========================================
    // ⚙️ ERROR HANDLING & MODERATION
    // ==========================================
    { triggers: ["bug", "error", "glitch", "not working", "broken"], reply: "🛠️ **Found a bug?**<br>Oh no! Try refreshing the page. If it's still broken, please let Asif know so he can fix it in the next update. He is always upgrading the system!" },
    { triggers: ["how to reset my score", "reset level", "delete memory"], reply: "🔄 **Resetting Progress:** Want to start over? Go to your browser settings and select 'Clear Site Data' or 'Clear Cookies'. This will wipe your High Scores and Levels back to zero." },
    { triggers: ["locked advanced english", "boss level locked"], reply: "🔒 **Unlocking Advanced English:** That is the ultimate Boss Level. Asif is currently coding it in the background. Rumor has it, you will need to reach Level 5 in your Profile to gain access when it launches!" },
    { triggers: ["stupid", "idiot", "shut up", "dumb", "bad word", "hate you", "useless", "fuck", "bitch", "asshole", "shit"], reply: "Hey now! 🛑 I am just a friendly bot created by Asif to help you learn. Let's keep it respectful and focus on making you an English Champ!" }
];

window.getSmartReply = function(userInput, userName) {
    let msg = userInput.toLowerCase().trim();
    
    // Typo checker
    const commonTypos = {
        "grammer": "grammar", "gramer": "grammar", "englis": "english", "vocub": "vocabulary",
        "pasage": "passage", "writting": "writing", "paragraf": "paragraph", "pronounciation": "pronunciation"
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
};
