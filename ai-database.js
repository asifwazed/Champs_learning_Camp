/* ai-database.js - The Complete, Uncut Offline Knowledge Base */

const miniChampBrain = [
    // ==========================================
    // 🧭 SMART WEBSITE NAVIGATION & APP FEATURES
    // ==========================================
    { triggers: ["guide", "tour", "tell me about this website", "what is this website", "help me use this", "how to use this app"], reply: "Welcome to **Champ's Learning Camp**, {name}! 🏕️ I am your smart guide. What do you need help with?<br><a href='units.html' class='ai-nav-btn'><i class='fas fa-book'></i> Textbooks</a> <a href='grammar_matrix.html' class='ai-nav-btn'><i class='fas fa-layer-group'></i> Grammar</a> <a href='basic_english.html' class='ai-nav-btn'><i class='fas fa-microphone'></i> Spoken Hub</a>" },
    { triggers: ["practice grammar", "learn grammar", "grammar rules", "board questions"], reply: "I have two amazing places for you to master grammar! Learn the rules or practice real board questions:<br><a href='grammar_matrix.html' class='ai-nav-btn'><i class='fas fa-layer-group'></i> Grammar Matrix</a> <a href='part_b.html' class='ai-nav-btn'><i class='fas fa-file-alt'></i> Board Practice</a>" },
    { triggers: ["practice vocabulary", "learn words", "vocab", "game"], reply: "The best way to memorize words is active recall! Go play the Vocab Arcade. Try to score 10/10!<br><a href='tools.html' class='ai-nav-btn'><i class='fas fa-gamepad'></i> Play Vocab Arcade</a>" },
    { triggers: ["spoken english", "how to speak", "fluency", "voice lab"], reply: "Let's get you fluent! The Spoken Hub has 50 real-life scenarios with an interactive Voice Lab where I test your pronunciation.<br><a href='basic_english.html' class='ai-nav-btn'><i class='fas fa-microphone-alt'></i> Enter Spoken Hub</a>" },
    { triggers: ["writing", "paragraph", "story", "email", "part c", "check my essay", "grade my writing"], reply: "The Writing Vault has top-tier board standard paragraphs and stories. **Pro Tip:** Type your own essay there, and I will grade it out of 10!<br><a href='writing.html' class='ai-nav-btn'><i class='fas fa-pen-nib'></i> Open Writing Vault</a>" },
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
    { triggers: ["bye", "goodbye", "cya", "see ya", "allah hafez", "khoda hafez", "good night"], reply: "Goodbye {name}! 👋 Allah Hafez. Don't forget to maintain your daily streak tomorrow!" },
    { triggers: ["joke", "funny", "laugh", "tell me a joke", "make me laugh"], reply: ["Why was the math book sad? ...Because it had too many problems! 😂", "What do you call a fake noodle? An impasta! 🍝", "Why did the student eat his homework? Because the teacher said it was a piece of cake! 🍰", "Why did the grammar teacher go to jail? Because she used double negatives! 🚓"] },
    { triggers: ["give me a riddle", "ask me a riddle", "brain teaser"], reply: ["🧠 **Riddle:** I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? *(Type 'Echo' to see if you are right!)*", "🧠 **Riddle:** The more of this there is, the less you see. What is it? *(Type 'Darkness'!)*", "🧠 **Riddle:** What has keys but can't open locks? *(Type 'Piano'!)*"] },
    { triggers: ["echo"], reply: "🎉 **Correct!** You are too smart for me. An echo!" },
    { triggers: ["darkness"], reply: "🎉 **Correct!** Darkness! Your brain is working perfectly today." },
    { triggers: ["piano"], reply: "🎉 **Correct!** A piano! You nailed it." },

    // ==========================================
    // 👑 APP LORE & CREATORS
    // ==========================================
    { triggers: ["who is asif", "tell me about asif", "who made you", "your creator", "who created you", "who coded you", "zed", "backend"], reply: "💻 **Asif (Zed)** is the mastermind developer behind this platform! He wrote thousands of lines of JavaScript to create the interactive games, the UI logic, the Smart Reader, and my artificial brain. He loves web development, poetry, and strong coffee! ☕" },
    { triggers: ["sha", "shaa", "vyy", "who is sha", "designer", "ui designer", "who designed this", "who built the ui", "glassmorphism"], reply: "🎨 **The UI Visionary:** The breathtaking glassmorphism design, neon gradients, and dark-mode aesthetics were all conceptualized by Sha (Vyy). She is a brilliant designer and a very close confidante to Asif. She is always by his side, helping him turn raw code into this beautiful, user-friendly masterpiece! ✨" },
    { triggers: ["who is better asif or sha", "asif vs sha", "who is the boss", "dream team", "who made this"], reply: "⚖️ That's a trick question! Asif is the mastermind who built my brain and the engine, but Sha is the artist who made everything look so beautiful. They are the ultimate dream team! ✨" },
    { triggers: ["is this a virus", "is this safe", "stealing data", "hack"], reply: "🛡️ **100% Safe & Secure:** This platform is incredibly safe. It doesn't track your personal data on external servers. Everything you do (like your high scores and name) is saved locally on your own device using 'Local Storage'." },
    { triggers: ["asif's laptop", "gaming laptop", "what computer does asif use", "rtx 5050"], reply: "⚡ My code was compiled on a beastly machine! Asif uses an Intel i5 13th Gen HX processor with an RTX 5050 GPU. When he isn't coding my brain, he's probably hunting deals on Steam and Epic Games! 🎮" },
    { triggers: ["are you dating someone", "do you have a girlfriend", "are you single", "relationship"], reply: "🤖 I am happily married to the Internet Router! As for my creator Asif, he is just focused on building the absolute best educational platform for students, with the constant help of his brilliant designer and close friend, Sha. ❤️" },
    { triggers: ["how many lines of code", "how big is this app", "tech stack", "how do you work so fast", "loading speed", "vanilla js"], reply: "⚡ **The Speed Secret:** I load instantly because Asif didn't use heavy libraries like React or Angular. I am built on pure HTML5, CSS3, and Vanilla JS, running perfectly on local Service Workers. Sha ensured the UI feels buttery smooth with custom cubic-bezier animations!" },
    { triggers: ["are you offline", "does this work without internet", "offline mode"], reply: "📡 **Offline Magic:** Yes! Asif engineered the UI, the Vocab Arcade, the Spoken Voice Lab, and even this local part of my brain to work completely Offline using Service Workers!" },
    { triggers: ["why was this app made", "purpose of the app", "motivation behind the app", "how did this start"], reply: "🎁 **The Origin Story:** Asif loves building unique digital experiences. He previously created beautiful, customized animated websites and videos. This app is the ultimate evolution of that passion—a massive digital educational engine built to help every student in Bangladesh." },
    { triggers: ["what is hybrid rag", "how does mini champ work", "ai engine details"], reply: "⚙️ **The Hybrid RAG Engine:** My brain uses Retrieval-Augmented Generation! That means Asif hard-coded thousands of specific HSC rules directly into my local memory. When you ask a question, I scan Asif's database *first*. It makes me lightning fast and hyper-accurate offline!" },

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
    // 🔄 SENTENCE TRANSFORMATIONS
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
    // 🧠 ADVANCED GRAMMAR (CLAUSES, MODIFIERS, ARTICLES)
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
    { triggers: ["pronoun reference", "how to solve pronoun reference", "unclear pronoun"], reply: "🔍 **Pronoun Reference Hack:**<br>If a passage says: *'Asif and Rahim went to the store. He bought a pen.'* -> WHO is 'He'? It's unclear!<br>Correction: *'Asif and Rahim went to the store. **Rahim** bought a pen.'* Always replace unclear 'It', 'This', 'They', or 'He/She' with the exact Noun!" },
    { triggers: ["use of it", "it pronoun", "introductory it"], reply: "🔍 **The 'It' Trap:**<br>In exams, they often use 'It' to refer to a whole sentence. This is wrong in formal writing.<br>Wrong: *He works hard. It will bring success.*<br>Right: *He works hard. **This hard work** will bring success.*" },
    { triggers: ["who vs whom", "who whom rule"], reply: "🔍 **Who vs. Whom:**<br>- **Who** = Subject (He/She/They). *Who did this? (He did this).*<br>- **Whom** = Object (Him/Her/Them). *With whom are you going? (With him).*<br>Trick: If you can answer the question with 'Him', use 'Whom'!" },
    { triggers: ["omission of article", "where not to use article", "cross article"], reply: "🚫 **No Article (Cross) Rules:**<br>NEVER use A/An/The before:<br>1. Proper Nouns (Names of people, cities).<br>2. Uncountable Nouns (Water, Gold, Honesty).<br>3. Languages & Subjects (English, Math).<br>4. Sports (Football, Cricket)." },
    { triggers: ["article before university", "a or an before u", "vowel sound article"], reply: "🔤 **The 'U' & 'O' Trap:**<br>If a vowel sounds like 'You' or 'Wa', use **'A'**, not 'An'.<br>Examples: **A** university, **A** European, **A** one-taka note, **A** unique idea." },
    { triggers: ["article before abbreviation", "a or an before mba"], reply: "🔤 **The Abbreviation Trap:**<br>It depends on the SOUND of the first letter! <br>'M' sounds like 'Em' (starts with 'e' vowel sound).<br>Examples: **An** MBA, **An** SSC student, **A** BA student, **An** FBI agent." },

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
    // 🏫 VARSITY ADMISSION TRAPS (CAUSATIVES, SUBJUNCTIVES, PREPOSITIONS)
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
    { triggers: ["pass away", "pass out", "pass down"], reply: "🧩 **Phrasal Verbs with 'Pass':**<br>- **Pass away:** To die politely.<br>- **Pass out:** To faint.<br>- **Pass down:** Give to next generation." },
    { triggers: ["run out", "run over", "run after"], reply: "🧩 **Phrasal Verbs with 'Run':**<br>- **Run out of:** Have nothing left.<br>- **Run over:** Crushed by vehicle.<br>- **Run after:** Chase." },
    { triggers: ["set up", "set out", "set in"], reply: "🧩 **Phrasal Verbs with 'Set':**<br>- **Set up:** Establish.<br>- **Set out:** Start a journey.<br>- **Set in:** Begin and continue (e.g., Winter has set in)." },
    { triggers: ["turn down", "turn up", "turn out"], reply: "🧩 **Phrasal Verbs with 'Turn':**<br>- **Turn down:** Reject.<br>- **Turn up:** Arrive unexpectedly / increase volume.<br>- **Turn out:** End result." },

    // --- Elite Grammar (Causatives & Subjunctives) ---
    { triggers: ["causative verbs", "what is a causative verb", "make let have get help"], reply: "🧠 **Causative Verbs:** These are used when you don't do the action yourself, but you *cause* someone else to do it. The 5 Causative Verbs are: **Let, Make, Have, Get, Help**." },
    { triggers: ["causative make", "make rule", "made rule"], reply: "🧠 **Causative 'Make':** Forces someone to do something. <br>Rule: Make + Person + **Base Verb (V1)**. <br>Example: *The teacher made the students **stand** up.* (NOT to stand!)." },
    { triggers: ["causative let", "let rule"], reply: "🧠 **Causative 'Let':** Allows someone to do something. <br>Rule: Let + Person + **Base Verb (V1)**. <br>Example: *My father let me **go** to the party.* (NOT to go!)." },
    { triggers: ["causative have", "have rule causative", "had rule"], reply: "🧠 **Causative 'Have':** Giving someone a responsibility. <br>Rule 1 (Active): Have + Person + **Base Verb (V1)**. *(I had the mechanic **fix** my car).*<br>Rule 2 (Passive): Have + Thing + **V3**. *(I had my car **fixed**).* " },
    { triggers: ["causative get", "get rule causative", "got rule"], reply: "🧠 **Causative 'Get':** Convincing someone to do something. <br>Rule 1 (Active): Get + Person + **TO + V1**. *(I got him **to wash** the car).*<br>Rule 2 (Passive): Get + Thing + **V3**. *(I got the car **washed**).* " },
    { triggers: ["subjunctive mood", "subjunctive verbs", "demand insist recommend"], reply: "🔥 **The Subjunctive Trap (Admission Favorite):**<br>Certain verbs (Demand, Insist, Recommend, Suggest, Request) followed by 'that' MUST take the pure **Base Verb (V1)**, without 's', 'es', 'ed', or 'should'! <br>Example: *The doctor recommended that he **stop** smoking.* (NOT stops/should stop!)." },
    { triggers: ["inversion", "negative inversion", "grammar inversion"], reply: "🔄 **Negative Inversion:**<br>If a sentence starts with a negative word (Never, Seldom, Rarely, Hardly, Not only), the Subject and Auxiliary Verb swap places! <br>Example: *Never **have I** seen such a beautiful UI.* (NOT Never I have seen)." },

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
    { triggers: ["report writing", "newspaper report", "how to write a report"], reply: "📰 **Report Writing Format:**<br>1. **Headline:** Catchy, bold, present tense (e.g., *Massive Fire Breaks Out in Dhaka*).<br>2. **Byline:** 'By Staff Reporter, Dhaka, March 4'.<br>3. **Lead Paragraph:** Answer Who, What, When, Where, Why immediately.<br>4. **Body:** Add quotes from witnesses or police. Keep it strictly objective!" },
    { triggers: ["article writing", "how to write an article"], reply: "📄 **Article Writing Format:**<br>1. **Title:** Center-aligned, bold.<br>2. **Byline:** 'By [Your Name]' just below the title.<br>3. **Introduction:** Hook the reader with a question or startling fact.<br>4. **Body (2-3 paras):** Discuss causes, effects, or arguments.<br>5. **Conclusion:** End with a strong suggestion or hope for the future." },

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
    { triggers: ["how to say no to boss", "decline extra work"], reply: "👔 **Workplace Survival: Saying 'No' to extra work:**<br>Never say 'I won't do it.' Say:<br>- *'I would love to help, but my plate is completely full right now.'*<br>- *'If I take this on, it will compromise the quality of my current project.'*" },

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
    { triggers: ["synonym for important", "important alternative", "crucial"], reply: "🔑 **Instead of 'Important', use:**<br>- Crucial<br>- Vital<br>- Essential<br>- Paramount<br>- Imperative<br>- Significant" },
    
    // --- GRE / BARRON'S VOCABULARY ---
    { triggers: ["abate", "meaning of abate"], reply: "📚 **Varsity Vocab: Abate (Verb)**<br>Meaning: To become less intense or widespread.<br>Example: *The storm suddenly abated.*" },
    { triggers: ["cacophony", "meaning of cacophony"], reply: "📚 **Varsity Vocab: Cacophony (Noun)**<br>Meaning: A harsh, confusing mixture of sounds.<br>Example: *The traffic jam in Dhaka creates a terrible cacophony.*" },
    { triggers: ["enigma", "meaning of enigma"], reply: "📚 **Varsity Vocab: Enigma (Noun)**<br>Meaning: A person or thing that is mysterious, puzzling, or difficult to understand.<br>Example: *How Asif coded this entire engine alone remains an enigma.*" },
    { triggers: ["ephemeral", "meaning of ephemeral"], reply: "📚 **Varsity Vocab: Ephemeral (Adjective)**<br>Meaning: Lasting for a very short time.<br>Example: *Fame on the internet is often ephemeral.*" },
    { triggers: ["gregarious", "meaning of gregarious"], reply: "📚 **Varsity Vocab: Gregarious (Adjective)**<br>Meaning: Fond of company; sociable.<br>Example: *She is a gregarious person who loves attending parties.*" },
    { triggers: ["lucid", "meaning of lucid"], reply: "📚 **Varsity Vocab: Lucid (Adjective)**<br>Meaning: Expressed clearly; easy to understand.<br>Example: *Mini Champ provides lucid explanations of complex grammar.*" },

    // ==========================================
    // 🎭 IDIOMS, PROVERBS & LITERARY DEVICES
    // ==========================================
    { triggers: ["piece of cake", "easy idiom"], reply: "🍰 **Idiom: A piece of cake**<br>Meaning: Something very easy to do.<br>Example: *The English exam was a piece of cake for Asif's students.*" },
    { triggers: ["break a leg", "good luck idiom"], reply: "🎭 **Idiom: Break a leg!**<br>Meaning: Good luck! (Usually said before a performance or exam).<br>Example: *You studied hard. Go break a leg tomorrow!*" },
    { triggers: ["bite the bullet", "difficult idiom"], reply: "🦷 **Idiom: Bite the bullet**<br>Meaning: To force yourself to do something unpleasant or difficult.<br>Example: *I hate studying grammar, but I have to bite the bullet to pass.*" },
    { triggers: ["apple of discord", "apple of one's eye"], reply: "🍎 **Idioms with 'Apple':**<br>- **Apple of discord:** Cause of a quarrel. *(The land is the apple of discord between them).*<br>- **Apple of one's eye:** Extremely precious. *(He is the apple of his mother's eye).*" },
    { triggers: ["at daggers drawn", "bad blood"], reply: "🗡️ **Idioms of Enmity:**<br>- **At daggers drawn:** Bitter hostility. *(The two brothers are at daggers drawn).*<br>- **Bad blood:** Ill feeling. *(There is bad blood between the two families).*" },
    { triggers: ["bolt from the blue", "out of the blue"], reply: "⚡ **Idioms of Surprise:**<br>- **A bolt from the blue:** Completely unexpected disaster. *(His father's death came as a bolt from the blue).*" },
    { triggers: ["cats and dogs", "raining cats and dogs"], reply: "🌧️ **Idioms of Weather:**<br>- **Cats and dogs:** Heavy rain. *(It has been raining cats and dogs since morning).*<br>🚨 *Grammar Trap: NEVER say 'raining LIKE cats and dogs'.*" },
    { triggers: ["crocodile tears", "crocodile tear"], reply: "🐊 **Idiom: Crocodile tears**<br>Meaning: False sorrow or fake crying. <br>Example: *She shed crocodile tears at the news of his failure.*" },
    { triggers: ["in a nutshell", "nutshell"], reply: "🥜 **Idiom: In a nutshell**<br>Meaning: Briefly, in a few words. <br>Example: *In a nutshell, Asif's app is a masterpiece.*" },
    { triggers: ["white elephant", "a white elephant"], reply: "🐘 **Idiom: A white elephant**<br>Meaning: A very expensive but useless possession. <br>Example: *Maintaining this old luxury car has become a white elephant for him.*" },
    { triggers: ["simile", "what is a simile", "figure of speech"], reply: "🎭 **Figure of Speech: Simile**<br>Comparing two different things using **'like'** or **'as'**.<br>Example: *He fought like a lion.* / *She is as fast as a cheetah.*" },
    { triggers: ["metaphor", "what is a metaphor"], reply: "🎭 **Figure of Speech: Metaphor**<br>A direct comparison without using 'like' or 'as'. You say one thing IS another thing.<br>Example: *Time is money.* / *He is a lion in battle.* / *The world is a stage.*" },

    // ==========================================
    // 🌐 GEN-Z SLANG & INTERNET ENGLISH
    // ==========================================
    { triggers: ["slang", "informal english", "cool words", "gen z"], reply: "🔥 **Modern Native Slang:**<br>• **Ghosted:** Ignoring messages.<br>• **Salty:** Being upset over small things.<br>• **Flex:** To show off.<br>• **No Cap:** Telling the truth (No lie)." },
    { triggers: ["lit", "fire", "what does lit mean", "what is fire"], reply: "🔥 **Slang Alert: Lit / Fire**<br>Used to describe something that is amazing, exciting, or excellent. <br><em>Example: 'That new movie was straight fire!' or 'Asif's new app is so lit!'</em>" },
    { triggers: ["sus", "what does sus mean", "suspicious"], reply: "🕵️‍♂️ **Slang Alert: Sus**<br>Short for 'Suspicious'. Used when someone is acting weird or shady.<br><em>Example: 'Bro, you doing your homework on a Friday night is looking kinda sus.'</em>" },
    { triggers: ["goat", "what is goat", "greatest of all time"], reply: "🐐 **Slang Alert: G.O.A.T.**<br>Stands for 'Greatest Of All Time'.<br><em>Example: 'Messi is the GOAT.' or 'Sha's UI designs are the GOAT.'</em>" },
    { triggers: ["no cap", "what does no cap mean", "cap", "capping"], reply: "🧢 **Slang Alert: Cap**<br>- **Cap:** A lie. <em>('You read 10 chapters today? That's cap.')</em><br>- **No Cap:** The absolute truth. <em>('Asif is a genius developer, no cap.')</em>" },
    { triggers: ["sigma", "what is a sigma", "sigma male"], reply: "🐺 **Slang Alert: Sigma**<br>A 'lone wolf' who is successful, confident, and cool, but doesn't need social approval. It's the highest compliment in current internet slang. *('He scored 10/10 on the Grammar test without studying, absolute Sigma.')*" },
    { triggers: ["skibidi", "what is skibidi", "skibidi toilet"], reply: "🚽 **Slang Alert: Skibidi**<br>A piece of pure Gen-Alpha internet brainrot. It doesn't actually mean anything, it's just used as a random funny adjective. *('What the skibidi is going on?')*" },
    { triggers: ["rizz", "what is rizz", "w rizz"], reply: "😎 **Slang Alert: Rizz**<br>Short for 'Charisma'. It means you have smooth game and charm, especially when flirting. <br><em>Example: 'Bro has unspoken rizz, everyone likes him.'</em>" },
    { triggers: ["delulu", "what is delulu"], reply: "🌀 **Slang Alert: Delulu**<br>Short for 'Delusional'. Believing in something that is completely unrealistic or a fantasy. <br><em>Example: 'Thinking you can pass the HSC without studying is completely delulu.'</em>" },
    { triggers: ["fomo", "what is fomo"], reply: "👀 **Slang Alert: FOMO**<br>Stands for 'Fear Of Missing Out'. The anxious feeling that your friends are having fun without you. <br><em>Example: 'I went to the party even though I was tired because I had bad FOMO.'</em>" },

    // ==========================================
    // 🧠 MOTIVATION, PRODUCTIVITY & PSYCHOLOGY
    // ==========================================
    { triggers: ["procrastinating", "lazy", "don't want to study", "no motivation"], reply: "Listen to me, {name}. Motivation is a myth. Discipline is what gets you results. Count down from 5, put your phone away, and just start for 5 minutes. The momentum will carry you! 🚀" },
    { triggers: ["exam tomorrow", "scared of exam", "fear", "failing", "tension"], reply: "Stop panicking! 🛑 Panic destroys memory. Drink water. Open the 'Exam Blueprint' in the Tools section and just focus on the Top Suggestions. You know more than you think you do!" },
    { triggers: ["bored", "boring", "sleepy", "tired", "exhausted"], reply: "Take a 10-minute break! Wash your face, grab some water, and stretch. Studying with a tired brain doesn't work. Come back refreshed!" },
    { triggers: ["vocabulary", "vocab", "new words", "how to memorize words"], reply: "🧠 **Vocabulary Hack:** Don't memorize long lists! Learn 3 words a day, and write 3 real-life sentences using them. Context is key." },
    { triggers: ["best time to study", "when to study", "morning or night"], reply: "🌅 **Morning vs Night:** Science says the brain is most fresh and absorbs complex things (like Math/Grammar) best between 4:00 AM and 10:00 AM. But if you are a night owl, study when it's quietest. Just don't ruin your sleep cycle!" },
    { triggers: ["i got a bad grade", "i failed", "bad marks", "parents are angry", "feeling worthless"], reply: "❤️ **Listen to me:** A bad grade does NOT define your intelligence or your future. It just means your current study method didn't work. Take a deep breath, don't give up, and let's change the strategy today. Asif built this app specifically to help you bounce back. You can do this!" },
    { triggers: ["how to focus", "pomodoro technique", "can't concentrate"], reply: "🍅 **The Pomodoro Focus Hack:** Don't try to study for 3 hours straight. Set a timer for 25 minutes. Study with 100% focus, then take a 5-minute break to stretch. Repeat 4 times, then take a 30-minute break. Use the 'Study Timer' in the Tools menu!" },

    // ==========================================
    // ⚙️ ERROR HANDLING & MODERATION
    // ==========================================
    { triggers: ["bug", "error", "glitch", "not working", "broken"], reply: "🛠️ **Found a bug?**<br>Oh no! Try refreshing the page. If it's still broken, please let Asif know so he can fix it in the next update. He is always upgrading the system!" },
    { triggers: ["how to reset my score", "reset level", "delete memory"], reply: "🔄 **Resetting Progress:** Want to start over? Go to your browser settings and select 'Clear Site Data' or 'Clear Cookies'. This will wipe your High Scores and Levels back to zero." },
    { triggers: ["stupid", "idiot", "shut up", "dumb", "bad word", "hate you", "useless", "fuck", "bitch", "asshole", "shit"], reply: "Hey now! 🛑 I am just a friendly bot created by Asif to help you learn. Let's keep it respectful and focus on making you an English Champ!" }
];

window.getSmartReply = function(userInput, userName) {
    let msg = userInput.toLowerCase().trim();
    
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
};
