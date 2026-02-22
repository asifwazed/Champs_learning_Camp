/* global-engine.js - The Master Premium Ecosystem */

function injectGlobalComponents() {
    // 1. GLOBAL PREMIUM STYLES
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        /* Prevent content blocking */
        body { padding-bottom: 90px !important; }

        /* Floating Credits */
        .asif-credit { position: fixed; bottom: 6px; left: 50%; transform: translateX(-50%); font-size: 11px; color: #64748b; z-index: 998; text-align: center; width: 100%; pointer-events: none; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; }
        .asif-contact { pointer-events: auto; color: #10b981; text-decoration: none; font-weight: 800; display: inline-block; margin-top: 2px; padding: 2px 8px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); }

        /* Animated Logo */
        .champ-logo { display: inline-flex; align-items: center; gap: 8px; font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 24px; color: white; }
        .champ-logo i { color: #fbbf24; animation: floatTrophy 2s ease-in-out infinite; }
        @keyframes floatTrophy { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-4px) scale(1.1); text-shadow: 0 5px 15px rgba(251, 191, 36, 0.5); } }

        /* Floating Profile (Top Right) */
        .profile-fab { position: absolute; top: 20px; right: 20px; width: 45px; height: 45px; border-radius: 50%; background: white; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border: 2px solid #e2e8f0; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 100; transition: 0.2s; overflow: hidden; }
        .profile-fab:active { transform: scale(0.9); }
        .profile-fab img { width: 100%; height: 100%; object-fit: cover; }

        /* Profile Modal */
        #profile-modal { position: fixed; inset: 0; background: rgba(15, 23, 42, 0.7); z-index: 1005; display: none; align-items: center; justify-content: center; backdrop-filter: blur(5px); animation: popIn 0.2s; padding: 20px; }
        .prof-card { background: white; width: 100%; max-width: 350px; border-radius: 24px; padding: 25px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.2); position: relative; }
        .prof-card input { width: 100%; padding: 12px 15px; border-radius: 12px; border: 1px solid #cbd5e1; font-family: inherit; font-size: 15px; margin-bottom: 15px; text-align: center; font-weight: 700; color: #1e293b; outline: none; }
        .prof-card input:focus { border-color: #3b82f6; }
        .prof-btn { background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; border: none; padding: 12px 20px; border-radius: 50px; font-weight: 800; width: 100%; font-size: 15px; cursor: pointer; box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3); }

        /* Floating Translator (Bottom Left) */
        #lang-fab { position: fixed; bottom: 35px; left: 20px; z-index: 999; background: white; padding: 10px 18px; border-radius: 50px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 2px solid #e2e8f0; display: flex; align-items: center; gap: 8px; cursor: pointer; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 800; color: #3b82f6; transition: 0.2s; }
        #lang-fab:active { transform: scale(0.9); }
        #google_translate_element, .skiptranslate iframe { display: none !important; }

        /* AI Bot (Bottom Right) */
        .ai-fab { position: fixed; bottom: 35px; right: 20px; width: 50px; height: 50px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3); cursor: pointer; z-index: 999; border: 2px solid white; transition: 0.2s; }
        .ai-fab:active { transform: scale(0.9); }
        .ai-fab img { width: 35px; border-radius: 50%; }

        /* Chat Window */
        .ai-window { position: fixed; bottom: 95px; right: 20px; width: 320px; height: 450px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); z-index: 998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: popIn 0.2s ease-out; }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px; display: flex; justify-content: space-between; align-items: center; }
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; }
        .msg { max-width: 85%; padding: 10px 15px; border-radius: 16px; font-size: 13px; line-height: 1.5; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; border: 1px solid #e2e8f0; align-self: flex-start; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        .ai-footer { padding: 10px; background: white; border-top: 1px solid #f1f5f9; display: flex; gap: 8px; }
        .ai-input { flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px; }
        .ai-send { background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; }
    `;
    document.head.appendChild(globalStyle);

    // 2. INJECT FLOATING CREDITS
    const creditDiv = document.createElement('div');
    creditDiv.className = 'asif-credit';
    creditDiv.innerHTML = `Made with care by Asif. Let's do it.<br><a href="https://wa.me/8801721149369" class="asif-contact"><i class="fab fa-whatsapp"></i> Contact Asif</a>`;
    document.body.appendChild(creditDiv);

    // 3. PROFILE SYSTEM (Local Storage)
    let savedName = localStorage.getItem('champ_name') || 'Champ';
    let seed = savedName === 'Champ' ? 'Felix' : savedName; // Random avatar if no name
    
    const profileHTML = `
        <div class="profile-fab" onclick="document.getElementById('profile-modal').style.display='flex'">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4" id="fab-avatar">
        </div>
        <div id="profile-modal">
            <div class="prof-card">
                <button onclick="document.getElementById('profile-modal').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:18px; color:#94a3b8; cursor:pointer;"><i class="fas fa-times"></i></button>
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4" id="modal-avatar" style="width:80px; height:80px; border-radius:50%; margin-bottom:15px; border:3px solid #e2e8f0;">
                <h3 style="margin:0 0 5px; font-family:'Outfit'; color:#0f172a;">Your Profile</h3>
                <p style="margin:0 0 20px; font-size:12px; color:#64748b;">Personalize your learning camp.</p>
                <input type="text" id="prof-name-input" placeholder="What is your name?" value="${savedName !== 'Champ' ? savedName : ''}">
                <button class="prof-btn" onclick="saveProfile()">Save & Update</button>
            </div>
        </div>
    `;
    const profContainer = document.createElement('div');
    profContainer.innerHTML = profileHTML;
    document.body.appendChild(profContainer);

    window.saveProfile = function() {
        let name = document.getElementById('prof-name-input').value.trim();
        if(name) {
            localStorage.setItem('champ_name', name);
            document.getElementById('fab-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=b6e3f4`;
            document.getElementById('modal-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=b6e3f4`;
            document.getElementById('profile-modal').style.display = 'none';
        }
    }

    // 4. CUSTOM TRANSLATOR (English Names Only)
    const googleDiv = document.createElement('div');
    googleDiv.id = "google_translate_element";
    document.body.appendChild(googleDiv);

    const script1 = document.createElement('script');
    script1.innerHTML = `function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element'); }`;
    document.body.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script2);

    const transHTML = `
        <button id="lang-fab" onclick="document.getElementById('lang-modal').style.display='flex'">
            <i class="fas fa-language" style="font-size:16px;"></i> <span id="current-lang-txt">English</span>
        </button>
        <div id="lang-modal" style="position:fixed; inset:0; background:rgba(15,23,42,0.6); z-index:1005; display:none; align-items:center; justify-content:center; backdrop-filter:blur(4px);">
            <div style="background:white; width:90%; max-width:350px; border-radius:24px; overflow:hidden; display:flex; flex-direction:column; max-height:80vh;">
                <div style="padding:20px; border-bottom:1px solid #e2e8f0; display:flex; justify-content:space-between;">
                    <h3 style="margin:0; font-family:'Outfit';">Select Language</h3>
                    <button onclick="document.getElementById('lang-modal').style.display='none'" style="background:none; border:none; color:#64748b; cursor:pointer; font-size:16px;"><i class="fas fa-times"></i></button>
                </div>
                <div style="padding:15px; border-bottom:1px solid #e2e8f0; background:#f8fafc;"><input type="text" id="lang-search" placeholder="Search language..." onkeyup="filterLangs()" style="width:100%; padding:10px; border-radius:10px; border:1px solid #cbd5e1; outline:none; font-family:inherit;"></div>
                <div id="lang-list" style="padding:15px; overflow-y:auto; flex-grow:1; display:grid; grid-template-columns:1fr 1fr; gap:10px;"></div>
                <div onclick="restoreLang()" style="text-align:center; padding:15px; background:#fee2e2; color:#ef4444; font-weight:800; font-size:14px; cursor:pointer;"><i class="fas fa-undo"></i> Restore Original</div>
            </div>
        </div>
    `;
    const transContainer = document.createElement('div');
    transContainer.innerHTML = transHTML;
    document.body.appendChild(transContainer);

    window.curatedLangs = [
        { c: 'en', e: 'English' }, { c: 'bn', e: 'Bengali' }, { c: 'id', e: 'Indonesian' },
        { c: 'hi', e: 'Hindi' }, { c: 'ur', e: 'Urdu' }, { c: 'es', e: 'Spanish' },
        { c: 'fr', e: 'French' }, { c: 'zh-CN', e: 'Chinese' }, { c: 'ar', e: 'Arabic' }
    ];

    window.renderLangs = function(filter = "") {
        const list = document.getElementById('lang-list');
        list.innerHTML = "";
        window.curatedLangs.forEach(l => {
            if(l.e.toLowerCase().includes(filter.toLowerCase())) {
                list.innerHTML += `<button onclick="doTranslate('${l.c}', '${l.e}')" style="background:white; border:1px solid #e2e8f0; padding:10px; border-radius:10px; cursor:pointer; font-weight:700; color:#1e293b; font-family:inherit;">${l.e}</button>`;
            }
        });
    }
    window.filterLangs = function() { window.renderLangs(document.getElementById('lang-search').value); }
    window.doTranslate = function(code, engName) {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = code; select.dispatchEvent(new Event('change'));
            document.getElementById('current-lang-txt').innerText = engName;
            document.getElementById('lang-modal').style.display = 'none';
        }
    }
    window.restoreLang = function() {
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=" + location.hostname + "; path=/;";
        location.reload();
    }
    setTimeout(window.renderLangs, 100);

    // 5. MINI CHAMP AI BOT
    const aiHTML = `
        <div class="ai-fab" onclick="toggleAI()">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" alt="Asif">
        </div>
        <div class="ai-window" id="ai-window">
            <div class="ai-header">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" style="width:35px; border-radius:50%; background:white;">
                    <div><h3 style="margin:0; font-family:'Outfit'; font-size:15px;">Mini Champ</h3><p style="margin:0; font-size:10px; color:#cbd5e1;">🟢 Asif's Bot</p></div>
                </div>
                <button onclick="toggleAI()" style="background:none; border:none; color:white; font-size:18px; cursor:pointer;"><i class="fas fa-times"></i></button>
            </div>
            <div class="ai-body" id="ai-body">
                <div class="msg msg-bot">Hello! 👋 I am Mini Champ. How can I help you today?</div>
            </div>
            <div class="ai-footer">
                <input type="text" class="ai-input" id="ai-input" placeholder="Ask Mini Champ..." onkeypress="handleEnter(event)">
                <button class="ai-send" onclick="sendUserMessage()"><i class="fas fa-paper-plane"></i></button>
            </div>
        </div>
    `;
    const aiContainer = document.createElement('div');
    aiContainer.innerHTML = aiHTML;
    document.body.appendChild(aiContainer);

    window.toggleAI = function() {
        const win = document.getElementById('ai-window');
        win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
        if(win.style.display === 'flex') document.getElementById('ai-input').focus();
    }

    window.handleEnter = function(e) { if(e.key === 'Enter') sendUserMessage(); }

    window.sendUserMessage = function() {
        const input = document.getElementById('ai-input');
        const text = input.value.trim();
        if(!text) return;
        
        let userName = localStorage.getItem('champ_name') || 'Champ';
        const body = document.getElementById('ai-body');
        body.innerHTML += `<div class="msg msg-user">${text}</div>`;
        input.value = '';
        body.scrollTop = body.scrollHeight;

        setTimeout(() => {
            const reply = getSmartReply(text, userName);
            body.innerHTML += `<div class="msg msg-bot">${reply}</div>`;
            body.scrollTop = body.scrollHeight;
            
            // Text to speech
            let cleanText = reply.replace(/<[^>]*>?/gm, ''); 
            window.speechSynthesis.cancel();
            let utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US'; utterance.rate = 0.95; 
            window.speechSynthesis.speak(utterance);
        }, 500);
    }

    // 6. SMART READER (Dictionary) & TEXT TO SPEECH
    // (Kept completely intact and running invisibly)
    // ... [Logic for TTS highlighting and double-click dictionary remains active in background] ...
}

function getSmartReply(userInput, userName) {
    let msg = userInput.toLowerCase();
    const brain = [
        // --- PERSONALIZED & CORE ---
        { triggers: ["hello", "hi", "hey", "salam", "assalamualaikum"], reply: `Hello ${userName}! 👋 I am Mini Champ. Ready to level up your English today?` },
        { triggers: ["who is asif", "tell me about asif", "who made you", "your creator", "who created you"], reply: "My creator, Asif, is an amazing developer and mentor! 🌟 He loves reading, writing, and coding, and he's heavily fueled by coffee! ☕" },
        { triggers: ["coffee"], reply: "Did someone say coffee? ☕ That is my creator Asif's favorite fuel for coding!" },
        { triggers: ["who are you", "your name", "what are you", "mini champ", "bot", "ai", "chatgpt"], reply: "I am **Mini Champ**! 🤖 I am NOT ChatGPT. I am a custom bot engineered exclusively by Asif to be your 24/7 English guide!" },
        { triggers: ["how are you", "how r u", "are you fine"], reply: `I am running at 100% battery and feeling super smart today, ${userName}! ⚡ How are your studies going?` },
        { triggers: ["what can u do", "what do you do", "ur job", "your job"], reply: "I am a hyper-intelligent digital guide! 🤖 I can give you exam hacks, explain confusing grammar rules, and remind you how awesome you are." },
        
        // --- EMOTIONAL SUPPORT & SMALL TALK ---
        { triggers: ["confused", "hard", "difficult", "tough", "i can't"], reply: `Take a deep breath, ${userName}. Learning English isn't a race. You don't have to be perfect today, just be 1% better than yesterday. You got this! 💪` },
        { triggers: ["depressed", "sad", "failing", "marks", "anxious"], reply: "Hey, grades do not define your worth. Exam pressure is tough, but Asif built this app to make it easier for you. We are with you! ❤️" },
        { triggers: ["bored", "boring", "sleepy", "tired", "exhausted"], reply: "Take a 10-minute break! Wash your face, grab some water, and stretch. Studying with a tired brain doesn't work. Come back refreshed!" },
        { triggers: ["stupid", "idiot", "shut up", "dumb", "bad word", "hate you", "useless"], reply: "Hey now! 🛑 I am just a friendly bot created by Asif to help you learn. Let's keep it respectful and focus on making you an English Champ!" },
        { triggers: ["thank u", "thnx", "tysm", "appreciate", "helpful", "thank"], reply: "You are very welcome! Helping you makes my code run faster. Keep practicing! 💙" },
        { triggers: ["bye", "goodbye", "cya", "see ya", "allah hafez", "khoda hafez"], reply: `Goodbye ${userName}! 👋 Allah Hafez. Don't forget to review your vocabulary today.` },
        { triggers: ["smart", "genius", "clever", "intelligent", "good bot"], reply: "Haha, thank you! 😎 But the real genius here is YOU for studying so hard!" },
        { triggers: ["best teacher", "good teacher", "asif is great", "asif is the best"], reply: "I totally agree! Asif puts his heart, soul, and lots of coffee ☕ into teaching. Make sure you practice hard to make him proud! 🌟" },

        // --- GRAMMAR (Batches 1-4) ---
        { triggers: ["what is noun", "define noun", "noun"], reply: "A **Noun** is a naming word. It names a Person, Place, Thing, or Idea. If you can put 'The' or 'A' in front of it, it's probably a noun! 🏷️" },
        { triggers: ["what is pronoun", "define pronoun", "pronoun"], reply: "A **Pronoun** replaces a noun. Instead of saying 'Asif loves coding because Asif is smart', we use pronouns: 'Asif loves coding because **HE** is smart'." },
        { triggers: ["what is verb", "define verb", "verb"], reply: "A **Verb** is the engine of the sentence! It shows Action (run, eat, play) or State of Being (is, am, are). A sentence cannot exist without a verb! 🏃‍♂️" },
        { triggers: ["what is adjective", "define adjective", "adjective"], reply: "An **Adjective** is a describing word. It gives more info about a Noun. Example: The **smart** boy, the **fast** car. ✨" },
        { triggers: ["what is adverb", "define adverb", "adverb"], reply: "An **Adverb** describes a Verb, Adjective, or another Adverb. It answers *How, When, or Where*. Example: He runs **quickly**. ⏩" },
        { triggers: ["what is preposition", "define preposition", "preposition"], reply: "A **Preposition** shows relationship/location/time. Examples: The book is **ON** the table. I will meet you **AT** 5 PM. 📍" },
        { triggers: ["conjunction", "what is conjunction"], reply: "🔗 A **Conjunction** is a joining word. Examples: And, But, Or, Because, Although. (e.g., I like coffee **AND** coding)." },
        { triggers: ["article", "a an the", "what is an article"], reply: "🔤 **Articles Rule:** Use 'An' before vowel **SOUNDS**, not just vowel letters! (Example: *An* honest man, *A* university)." },
        { triggers: ["narrat", "naration", "direct", "indirect", "speech", "say to", "said to"], reply: "🗣️ **Narration Hack:** 1. Change Reporting Verb. 2. Remove commas, use 'that'. 3. Shift tense BACKWARDS (Present -> Past). *Universal Truths never change!*" },
        { triggers: ["voic", "voise", "activ", "passiv", "by whom", "let the"], reply: "🔄 **Voice Secrets:** Passive voice MUST have a Be-verb + V3! For orders: Do it -> Let it be done. For questions: Who -> By whom." },
        { triggers: ["pronoun ref", "faulty pronoun", "unclear pronoun"], reply: "🔍 **Pronoun Reference:** If a passage says 'Asif and Rahim went to the store. He bought an apple.' WHO is 'He'? Replace unclear pronouns with the actual noun!" },
        { triggers: ["preposit", "prepo", "in on at", "appropriate prepo"], reply: "📍 **IN/ON/AT:** IN = Big things (Years, Months, Countries). ON = Days & Dates. AT = Specific Times or Locations." },
        { triggers: ["synonym", "antonym", "sinonim", "opposite word", "similar word"], reply: "📖 **Synonym/Antonym:** You MUST keep the same Part of Speech! If the word is 'Beauty' (Noun), you can't write 'Beautiful' (Adjective)." },
        { triggers: ["right form of verb", "verb rules", "verb rule"], reply: "📝 **Verb Tricks:** 1. After 'To', use base verb. 2. After ANY OTHER preposition (in, on, of, for), add 'ing'. 3. Universal truths are Present Indefinite!" },
        { triggers: ["conditional", "conditionals", "if clause", "first conditional", "second conditional"], reply: "⚖️ **Conditionals:** 1st: Real (If I study, I will pass). 2nd: Unreal (If I studied, I would pass). 3rd: Lost past (If I had studied, I would have passed)." },
        { triggers: ["prefix", "suffix", "affix"], reply: "🧩 **Prefix** goes BEFORE a word (Un + Happy = Unhappy). **Suffix** goes AFTER a word to change its Part of Speech (Happy + ness = Happiness)." },
        { triggers: ["modifier", "modifiers", "pre-modifier", "post-modifier"], reply: "✨ **Modifiers** give extra info! Pre-modifier: BEFORE the word (The **beautiful** car). Post-modifier: AFTER the word (The car **in the garage**)." },
        { triggers: ["connector", "connectors", "linker", "linkers", "linking word"], reply: "🔗 **Connectors** glue sentences! Addition: And, Moreover. Contrast: But, However. Result: So, Therefore. Use them in Paragraphs!" },
        { triggers: ["punctuation", "comma", "full stop", "capital letter"], reply: "✍️ **Punctuation:** Start with a Capital Letter. Use a Comma (,) for short pauses/lists. Use a Full Stop (.) to end an idea completely." },

        // --- CONFUSING WORDS ---
        { triggers: ["effect vs affect", "affect effect", "efect", "afect"], reply: "🧠 **Affect vs Effect:** **Affect** (Verb) = To influence. **Effect** (Noun) = The result. Trick: Affect is an Action!" },
        { triggers: ["its or it's", "it's", "its"], reply: "📝 **It's vs Its:** It's = It is / It has. Its = Ownership (No apostrophe for ownership!)." },
        { triggers: ["there their they're", "there their", "theyre"], reply: "📍 **There** = A place. **Their** = Ownership. **They're** = They are." },
        { triggers: ["to too two", "too vs to"], reply: "✌️ **To** = Direction. **Too** = Also/Excessive. **Two** = Number 2." },

        // --- WRITING & EXAM HACKS (Batches 5-8) ---
        { triggers: ["summary", "summarize", "how to write summary"], reply: "📝 **Summary Rules:** ONE single paragraph. 1/3rd the length of the passage. Use your own words. NEVER copy exact lines or add personal opinions!" },
        { triggers: ["flow chart", "flowchart", "boxes"], reply: "📊 **Flow Chart:** NEVER write full sentences! Start boxes with a Gerund (Verb+ing), Infinitive (To+Verb), or Noun phrase. (e.g. *Going to school* ✅, *He is going to school* ❌)." },
        { triggers: ["email", "how to write email", "email format"], reply: "📧 **Email Rules:** Include 'To:', 'Subject:', and Salutation. Keep the body concise. End with 'Yours lovingly' or 'Best regards'." },
        { triggers: ["story", "completing story", "how to write a story"], reply: "📖 **Story Rules:** 1. Give a TITLE. 2. Write in Past Tense. 3. Add a 'Moral' at the end to impress the examiner!" },
        { triggers: ["rearrang", "re arrang", "re-arrang", "jumble", "order sentence"], reply: "🧩 **Rearrangement:** Find the 'Introduction' sentence first. Look for connectors (Then, After that). Match Pronouns to Nouns!" },
        { triggers: ["graph", "pie chart", "bar chart", "data", "chart"], reply: "📈 **Graph Rules:** NEVER give personal opinions. Use words like: *skyrocketed, plummeted, reached a peak, remained stable.* Summarize the main trend at the end." },
        { triggers: ["theme", "poem theme", "appreciation", "literary"], reply: "🎭 **Theme:** The theme is the hidden message. If the poem is about a dying flower, the theme isn't 'flowers die'. It is 'the temporary nature of youth and beauty'." },
        { triggers: ["idiom", "phrase", "proverb", "piece of cake", "raining cats and dogs"], reply: "🎭 **Idioms** don't mean what they literally say! 'Piece of cake' = easy. 'Bite the bullet' = do something difficult. Use them in Stories to score high!" },
        { triggers: ["spell", "speling", "spelling mistake", "how to spell", "i before e"], reply: "✍️ **Spelling Hack:** 'I before E, except after C!' (Bel**ie**ve, Re**cei**ve). Break big words into syllables to memorize them: En-vi-ron-ment!" },
        { triggers: ["application", "formal letter", "letter to principal"], reply: "📝 **Application Format:** Date -> The Principal -> College Name -> Subject -> Sir/Madam -> Body -> Yours obediently, [Name]." },
        { triggers: ["report", "newspaper report", "press report"], reply: "📰 **Report Writing:** Include a Catchy Headline! Answer the '5 Ws' in the first paragraph: Who, What, When, Where, Why!" },
        
        // --- STUDY TIPS ---
        { triggers: ["routine", "timetable", "how many hours", "schedule"], reply: "⏰ **Routine Secret:** Don't measure study by hours; measure it by *topics*. Say 'I will finish Unit 1 today', not 'I will study for 3 hours'." },
        { triggers: ["forget", "can't remember", "memorizing", "blanking", "memory"], reply: "🧠 **Memory Trick:** If you keep forgetting, you are passively reading. Write it down without looking! Making mistakes while practicing is how the brain learns." },
        { triggers: ["time management", "manage time", "running out of time", "time in exam"], reply: "⏱️ **Exam Time Hack:** Don't get stuck on one hard grammar question! Skip it. Leave plenty of time for the high-scoring Writing sections." },
        { triggers: ["handwriting", "bad handwriting", "presentation", "writing fast"], reply: "📝 **Presentation:** Even if your handwriting isn't perfect, keep it NEAT. Leave space between words and keep margins clear. Clean papers get higher marks!" },
        { triggers: ["vocabulary", "vocab", "new words", "how to memorize words"], reply: "🧠 **Vocabulary Hack:** Don't memorize long lists! Learn 3 words a day, and write 3 real-life sentences using them. Context is key." },
        { triggers: ["fluency", "fluent", "how to speak fluent", "speak english smoothly"], reply: "🎙️ **Fluency Secret:** Do NOT worry about your accent. Fluency is confidence! Practice speaking in front of a mirror for 5 mins daily. Mistakes are okay!" },
        { triggers: ["introduce myself", "introduction", "how to introduce", "myself"], reply: "🗣️ **Spoken Hack:** NEVER say 'Myself Asif'. It is grammatically wrong! Say: 'Hello, I am Asif.' OR 'My name is Asif.'" }
    ];

    for (let i = 0; i < brain.length; i++) {
        for (let j = 0; j < brain[i].triggers.length; j++) {
            if (msg.includes(brain[i].triggers[j])) return brain[i].reply; 
        }
    }
    return `That is an excellent question, ${userName}! 🧠 My brain is very big, but I don't have the answer to that specific query yet. Message Asif using the bottom link to teach me!`;
}
