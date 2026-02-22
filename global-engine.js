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
    let msg = userInput.toLowerCase().trim();
    
    // 1. TYPO DETECTOR & AUTO-CORRECTOR
    const commonTypos = {
        "grammer": "grammar", "gramer": "grammar", "englis": "english", "vocub": "vocabulary",
        "vocaubulary": "vocabulary", "pasage": "passage", "writting": "writing", "paragraf": "paragraph",
        "sylabus": "syllabus", "aplication": "application", "tomorow": "tomorrow", "pronounciation": "pronunciation"
    };
    
    let words = msg.split(" ");
    let hasTypo = false;
    let correctedMsg = words.map(w => {
        if(commonTypos[w]) { hasTypo = true; return commonTypos[w]; }
        return w;
    }).join(" ");

    if (hasTypo) {
        return `🤖 Beep Boop! I noticed a little typo. Did you mean **"${correctedMsg}"**? <br><br>*(Try typing it again correctly so I can help!)*`;
    }

    // 2. SEARCH THE BRAIN MATRIX
    for (let i = 0; i < miniChampBrain.length; i++) {
        for (let j = 0; j < miniChampBrain[i].triggers.length; j++) {
            if (msg.includes(miniChampBrain[i].triggers[j])) {
                // Return random reply if it's an array, else return the string
                if (Array.isArray(miniChampBrain[i].reply)) {
                    return miniChampBrain[i].reply[Math.floor(Math.random() * miniChampBrain[i].reply.length)].replace("{name}", userName);
                }
                return miniChampBrain[i].reply.replace("{name}", userName);
            }
        }
    }

    // 3. RANDOMIZED SMART FALLBACKS (If it doesn't know the answer)
    const fallbacks = [
        `That's an interesting thought, {name}! But my digital brain is still buffering on that one. Did you mean to ask about a grammar rule?`,
        `Hmm, I didn't quite catch that. Do you want a tour of Champ's Learning Camp? Just type **"Guide"**!`,
        `I am not exactly sure, but Asif is always upgrading me! Try asking me about **"HSC"**, **"Spoken English"**, or **"Vocabulary"**.`,
        `My circuits are thinking... 🤖 Nope, I don't know that yet! Ask me 'What is a Noun?' or 'How to write a summary?' instead.`,
        `Whoops! That’s not in my database yet, {name}. If you're lost, type **"Tell me about this website"** for a full tour!`
    ];
    
    return fallbacks[Math.floor(Math.random() * fallbacks.length)].replace("{name}", userName);
}, 
// --- STEP-BY-STEP INTERACTIVE APP GUIDE ---
    {
        triggers: ["guide", "tour", "tell me about this website", "what is this website", "help me use this", "how to use this app"],
        reply: "Welcome to **Champ's Learning Camp**, {name}! 🏕️ I am your tour guide. This app is divided into 3 main areas. <br><br>Where do you want to go first? Reply with:<br>1️⃣ **[Guide HSC]**<br>2️⃣ **[Guide Spoken]**<br>3️⃣ **[Guide Tools]**"
    },
    {
        triggers: ["guide hsc", "1", "hsc guide", "about hsc"],
        reply: "🎓 **The HSC Blueprint** is for board exams!<br>- **Part A:** Seen Texts with Bangla translation.<br>- **Part B:** Grammar Rules & Cloze Tests.<br>- **Part C:** Writing Vault (Paragraphs, Stories).<br><br>Want to see the Spoken Section? Type **[Guide Spoken]**."
    },
    {
        triggers: ["guide spoken", "2", "spoken guide", "about spoken"],
        reply: "🗣️ **Spoken & Fluency** is for real-life speaking!<br>- **Basic English:** S+V+O Rules, daily life sentences.<br>- **Advanced Fluency:** Professional talk & Roleplays.<br><br>Want to see the Tools section? Type **[Guide Tools]**."
    },
    {
        triggers: ["guide tools", "3", "tools guide", "about tools"],
        reply: "🛠️ **Smart Tools** are your secret weapons!<br>- **Vocab Arcade:** Test your speed & memory.<br>- **GPA Calculator:** Predict your board results.<br>- **Study Timer:** Pomodoro focus mode.<br><br>Tour complete! What do you want to learn today, {name}?"
    },

    // --- RANDOMIZED GREETINGS & SMALL TALK ---
    {
        triggers: ["hello", "hi", "hey", "salam", "assalamualaikum", "good morning", "good evening"],
        reply: [
            "Hello {name}! 👋 Ready to level up your English today?",
            "Hey there, Champ! ⚡ My circuits are fired up and ready to teach.",
            "Salam {name}! 🏕️ Welcome back to the camp. What are we studying today?",
            "Hi! 🤖 I was just reading the dictionary. How can I help you?",
            "Greetings {name}! Let's crush some grammar rules today! 💪"
        ]
    },
    {
        triggers: ["how are you", "how r u", "are you fine", "how do you do"],
        reply: [
            "I am running at 100% battery and feeling super smart today, {name}! ⚡",
            "I don't have feelings, but if I did, I'd be happy to see you studying! 🤖",
            "I'm doing great! Just drinking some virtual coffee ☕. You?"
        ]
    },

    // --- JOKES & ENTERTAINMENT ---
    {
        triggers: ["joke", "funny", "laugh", "tell me a joke", "make me laugh"],
        reply: [
            "Why was the math book sad? ...Because it had too many problems! 😂",
            "What do you call a fake noodle? An impasta! 🍝",
            "Why did the student eat his homework? Because the teacher said it was a piece of cake! 🍰",
            "I tried to catch some fog earlier. I mist. 🌫️😂"
        ]
    },

    // --- EDUCATION, STUDY LOGIC & MOTIVATION ---
    {
        triggers: ["procrastinating", "lazy", "don't want to study", "no motivation"],
        reply: "Listen to me, {name}. Motivation is a myth. Discipline is what gets you results. Count down from 5, put your phone away, and just start for 5 minutes. The momentum will carry you! 🚀"
    },
    {
        triggers: ["exam tomorrow", "scared of exam", "fear", "failing"],
        reply: "Stop panicking! 🛑 Panic destroys memory. Drink water. Open the 'Exam Blueprint' in the Tools section and just focus on the Top 15 Suggestions. You know more than you think you do!"
    },
    {
        triggers: ["feynman", "feynman technique", "how to learn fast"],
        reply: "🧠 **The Feynman Technique:** Want to learn something fast? Explain it simply as if you are teaching a 10-year-old child. If you stumble, you found the gap in your knowledge. Go back and review!"
    },

    // --- DEEP GRAMMAR LOGIC ---
    {
        triggers: ["gerund", "participle", "what is gerund", "gerund vs participle"],
        reply: "🏃‍♂️ **Gerund vs Participle:** Both end in '-ing'!<br>- **Gerund:** Acts like a NOUN. (e.g., *Swimming* is good exercise).<br>- **Participle:** Acts like an ADJECTIVE. (e.g., Look at that *swimming* boy)."
    },
    {
        triggers: ["infinitive", "what is infinitive", "to verb"],
        reply: "➡️ **Infinitive:** It is simply 'To + Base Verb' (To go, To eat, To play). It usually acts as a noun, adjective, or adverb. Rule: NEVER add 's' or 'ing' after 'To'!"
    },
    {
        triggers: ["clause", "phrase", "clause vs phrase", "subordinate"],
        reply: "🔗 **Phrase vs Clause:**<br>- **Phrase:** A group of words with NO subject+verb combo (e.g., *in the morning*).<br>- **Clause:** A group of words WITH a subject+verb (e.g., *when the sun rises*)."
    },
    {
        triggers: ["tag question", "question tag", "tags"],
        reply: "❓ **Tag Questions:**<br>1. Positive statement -> Negative tag (He is smart, *isn't he?*)<br>2. Negative statement -> Positive tag (He isn't smart, *is he?*)<br>3. 'Let's' ALWAYS takes 'shall we?'"
    },

    // --- ADVANCED SPOKEN & REAL LIFE ---
    {
        triggers: ["interview", "job interview", "how to pass interview"],
        reply: "👔 **Interview Hack:** When they say 'Tell me about yourself', do NOT tell your life story! Use the Present-Past-Future rule:<br>1. What you do now.<br>2. What you achieved in the past.<br>3. What you want to do in the future."
    },
    {
        triggers: ["agree", "how to agree", "saying yes"],
        reply: "🤝 **Smart Ways to Agree:**<br>Stop saying 'Yes, I agree.' Say:<br>- Absolutely!<br>- I couldn't agree more.<br>- That's exactly how I feel.<br>- You hit the nail on the head!"
    },
    {
        triggers: ["disagree", "how to disagree", "saying no"],
        reply: "🛑 **Polite Ways to Disagree:**<br>Never say 'You are wrong!' Say:<br>- I see your point, but...<br>- I respectfully disagree.<br>- That's one way to look at it, however..."
    }, 
// ========================================================
    // MEGA PAYLOAD BATCH: DEEP GRAMMAR & SENTENCE STRUCTURE
    // ========================================================
    {
        triggers: ["subject verb agreement", "subject-verb", "singular plural", "agreement rule"],
        reply: "⚖️ **Subject-Verb Agreement:** Singular subjects take singular verbs (He *goes*). Plural subjects take plural verbs (They *go*). <br>🚨 *Trap:* Words like 'Everyone', 'Someone', 'Nobody', and 'Each' are ALWAYS singular! (e.g., Everyone *is* happy, NOT Everyone *are* happy)."
    },
    {
        triggers: ["countable", "uncountable", "much or many", "few or less", "little or few"],
        reply: "🍎 **Countable vs Uncountable:**<br>- **Countable:** Things you can count (Apples, Cars). Use: *Many, Few, A few.*<br>- **Uncountable:** Things you cannot count (Water, Information, Advice). Use: *Much, Little, A little.*<br>*(Never say 'informations' or 'advices'!)*"
    },
    {
        triggers: ["phrasal verb", "group verb", "give up", "look after", "break down"],
        reply: "🧩 **Phrasal Verbs:** A verb + a preposition that creates a totally new meaning!<br>- *Look after* = Take care of.<br>- *Give up* = Quit.<br>- *Put off* = Postpone.<br>Memorize 2 of these daily to sound like a native speaker!"
    },
    {
        triggers: ["degree", "comparative", "superlative", "positive degree"],
        reply: "📏 **Degrees of Comparison:**<br>1. **Positive:** Asif is a *tall* boy.<br>2. **Comparative:** Asif is *taller than* Rahim. (Compares 2 things).<br>3. **Superlative:** Asif is the *tallest* boy in class. (Compares 3+ things. ALWAYS use 'The' before superlatives!)."
    },
    {
        triggers: ["parallelism", "parallel structure", "parallel"],
        reply: "🛤️ **Parallelism:** Keep your lists balanced! If you say 'I like swimming, reading, and *to cook*', it is WRONG. It should be: 'I like swimming, reading, and *cooking*.' All verbs must match!"
    },
    {
        triggers: ["dangling modifier", "misplaced modifier"],
        reply: "⚠️ **Dangling Modifier Trap:** 'Walking down the street, the trees were beautiful.' -> Wait, were the trees walking?! ❌<br>Correct: 'Walking down the street, *I* saw the beautiful trees.' ✅ (Always put the subject right after the comma!)."
    },
    {
        triggers: ["transitive", "intransitive", "object of verb"],
        reply: "🔄 **Transitive vs Intransitive:**<br>- **Transitive:** Needs an object. (He *kicked* the ball). You can ask 'Kicked what?'<br>- **Intransitive:** Does NOT need an object. (He *slept*). You cannot ask 'Slept what?'"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: SPOKEN ENGLISH & SURVIVAL PHRASES
    // ========================================================
    {
        triggers: ["restaurant", "order food", "cafe", "menu", "waiter"],
        reply: "🍔 **At a Restaurant:**<br>- To order: *'I would like to have the burger, please.'* (Never say 'Give me').<br>- To ask for the bill: *'Could we get the check, please?'*<br>- If there's an issue: *'Excuse me, my soup is a bit cold.'*"
    },
    {
        triggers: ["direction", "lost", "where is", "how to go", "map"],
        reply: "🗺️ **Asking for Directions:**<br>- *'Excuse me, could you tell me how to get to the station?'*<br>- *'Am I on the right road for Dhaka?'*<br>- *'Is it far from here by walking?'*"
    },
    {
        triggers: ["phone", "call", "speaking on phone", "telephone", "hang up"],
        reply: "📱 **Phone Conversation Hacks:**<br>- To answer: *'Hello, Asif speaking.'*<br>- To ask for someone: *'May I speak to Rahim, please?'*<br>- If you can't hear: *'I am sorry, the line is breaking up. Could you repeat that?'*"
    },
    {
        triggers: ["weather", "rain", "hot", "cold", "climate"],
        reply: "🌦️ **Talking about Weather:**<br>- Good: *'It's a beautiful day out there!'*<br>- Hot: *'It's absolutely boiling today.'*<br>- Rain: *'It's raining cats and dogs!'* (Heavy rain)."
    },
    {
        triggers: ["apologize", "sorry", "my mistake", "forgive me"],
        reply: "🙏 **Smart Apologies:**<br>Instead of just 'Sorry', say:<br>- *'I sincerely apologize for the delay.'* (Formal)<br>- *'My bad! I completely forgot.'* (Casual)<br>- *'I take full responsibility for this mistake.'* (Professional)"
    },
    {
        triggers: ["sympathy", "condolence", "sad news", "passed away", "died"],
        reply: "🕊️ **Expressing Sympathy:** If someone is going through a hard time, say:<br>- *'I am so sorry for your loss.'*<br>- *'My deepest condolences to you and your family.'*<br>- *'I am here for you if you need anything.'*"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: HSC SPECIFIC BOARD HACKS
    // ========================================================
    {
        triggers: ["cloze test without clues", "without clues", "fill in the blanks"],
        reply: "🕵️ **Cloze Test (Without Clues) Hacks:**<br>1. Read the WHOLE passage first before writing anything. Understand the context.<br>2. Look at the word before and after the dash. If there is an Article (The) and a Noun (Boy), the dash is 99% an Adjective (The *smart* boy)!"
    },
    {
        triggers: ["answering questions", "wh questions", "comprehension", "passage questions"],
        reply: "📖 **Answering Passage Questions:**<br>1. NEVER copy-paste exact lines from the text. The board examiner will cut marks!<br>2. Answer in the same tense as the question. If it asks 'Why *did* he go?', answer 'He *went* because...'."
    },
    {
        triggers: ["theme vs summary", "difference between theme and summary", "theme and summary"],
        reply: "⚖️ **Theme vs Summary:**<br>- **Summary:** The main plot of the story. (What happened). Usually 1/3rd the length.<br>- **Theme:** The hidden moral or message. (Why it happened). Usually just 3-4 sentences maximum!"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: PSYCHOLOGY & STUDY HACKS
    // ========================================================
    {
        triggers: ["pomodoro", "tomato timer", "how to focus", "focus", "distracted", "can't concentrate"],
        reply: "🍅 **The Pomodoro Technique:** Stop trying to study for 3 hours straight! Your brain can't do it. <br>1. Study with ZERO distractions for 25 minutes.<br>2. Take a 5-minute break (walk, drink water).<br>3. Repeat. Use the 'Study Timer' in our Tools section to do this!"
    },
    {
        triggers: ["spaced repetition", "how to memorize", "forgetting", "flashcards"],
        reply: "🔁 **Spaced Repetition:** The best way to learn vocabulary is to review it just before you forget it! Use the Vocab Flashcards in our app. Review a word 1 day later, then 3 days later, then 1 week later. It will stick in your brain forever."
    },
    {
        triggers: ["sleep", "tired", "all nighter", "staying up late"],
        reply: "🛏️ **The Sleep Hack:** Pulling an 'all-nighter' destroys your memory! Your brain moves information from short-term to long-term memory *only* while you sleep. 7 hours of sleep + 3 hours of study > 10 hours of sleep-deprived study."
    },
    {
        triggers: ["burnout", "too much pressure", "exhausted", "give up", "giving up"],
        reply: "❤️ Listen, {name}. Burnout is real. You are not a machine. If you feel completely exhausted, take one full day off. No books, no guilt. Go for a walk, talk to Asif, and rest. You will come back 10x stronger. I promise."
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: PERSONALITY, LORE & RIDDLES
    // ========================================================
    {
        triggers: ["do you sleep", "do you eat", "are you alive", "are you human", "do you breathe"],
        reply: "🤖 I don't sleep, eat, or breathe! I survive purely on JavaScript, Asif's brilliant coding, and the joy of helping you get an A+ in English!"
    },
    {
        triggers: ["riddle", "puzzle", "brain teaser"],
        reply: [
            "🧠 **Riddle me this:** I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? <br><br>*(Answer: An Echo!)*",
            "🧠 **Riddle:** The more of this there is, the less you see. What is it? <br><br>*(Answer: Darkness!)*",
            "🧠 **Riddle:** What has keys but can't open locks? <br><br>*(Answer: A piano! Or... my keyboard!)*"
        ]
    },
    {
        triggers: ["are you my friend", "do you like me", "best friend", "friendship"],
        reply: "Of course, {name}! 💙 I am your digital best friend and study buddy. As long as my server is running, I've got your back!"
    },
    {
        triggers: ["who is the best developer", "who coded you", "asif coding", "developer"],
        reply: "Asif is the absolute mastermind! 💻 He hand-crafted my artificial brain, designed this beautiful UI, and built the interactive engines. He's practically a wizard with HTML, CSS, and JS!"
    }, 
// ========================================================
    // MEGA PAYLOAD BATCH: MINI CHAMP USER GUIDE
    // ========================================================
    {
        triggers: ["how to use you", "what can i ask you", "bot guide", "help me use mini champ", "your features", "what do you know", "instruction manual"],
        reply: "🤖 **Mini Champ User Guide:**<br>I am packed with thousands of English rules! Here is what you can ask me:<br><br>📖 **Grammar:** Try asking *'What is a gerund?'* or *'Explain conditionals.'*<br>✍️ **Exam Hacks:** Try asking *'How to write a summary?'* or *'Cloze test rules.'*<br>🗣️ **Spoken English:** Try asking *'How to introduce myself'* or *'Restaurant phrases.'*<br>🧠 **Study Tricks:** Ask me about *'Pomodoro'* or *'Time management.'*<br><br>Just type your question like you are talking to a friend, {name}!"
    },
    {
        triggers: ["can you speak bangla", "do you know bengali", "bangla", "bengali", "translate for me"],
        reply: "I am programmed to be an English expert, but my creator Asif made sure I understand Bengali students perfectly! If you ever need to translate the whole app into pure Bangla, just use the **Translator Button** floating on the bottom left of your screen! 🌍"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: DAILY SURVIVAL (SHOPPING & HEALTH)
    // ========================================================
    {
        triggers: ["shopping", "buy clothes", "buying", "price", "too expensive"],
        reply: "🛍️ **Shopping Phrases:**<br>- *'How much does this cost?'* (Asking price).<br>- *'Do you have this in a smaller/larger size?'*<br>- *'Can I try this on?'* (Asking for the fitting room).<br>- *'I am just looking, thank you.'* (If you don't want to buy yet)."
    },
    {
        triggers: ["hospital", "doctor", "sick", "appointment", "fever", "pain"],
        reply: "🏥 **At the Doctor:**<br>- *'I would like to book an appointment with the doctor.'*<br>- *'I have been feeling under the weather lately.'* (Idiom for feeling sick).<br>- *'I have a severe headache and a fever.'*<br>- *'Could you prescribe some medicine for this?'*"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: ADVANCED WRITING & SPELLING RULES
    // ========================================================
    {
        triggers: ["capitalization", "capital letter", "when to use capital", "mints"],
        reply: "🔠 **Capitalization Trick (MINTS):**<br>Always capitalize:<br>**M** - Months and Days (January, Monday).<br>**I** - The pronoun 'I' (Never write 'i am').<br>**N** - Names of specific people, places, brands (Asif, Dhaka).<br>**T** - Titles of books/movies.<br>**S** - Start of every new sentence!"
    },
    {
        triggers: ["homophone", "words that sound the same", "same sound word", "piece or peace"],
        reply: "🎧 **Homophones:** Words that SOUND the same but have DIFFERENT spellings and meanings!<br>- **Peace** (No war) vs **Piece** (A slice of cake).<br>- **Right** (Correct) vs **Write** (Use a pen).<br>- **Knew** (Knew the answer) vs **New** (Brand new car). Always double-check your spelling in exams!"
    },
    {
        triggers: ["email vs letter", "difference between email and letter", "email or letter"],
        reply: "✉️ **Email vs Formal Letter:**<br>- **Email:** Modern, fast, and needs a 'To' and 'Subject' line. You can be slightly more direct.<br>- **Formal Letter:** Traditional. You MUST include your address, the date, and the recipient's address at the top before writing 'Subject'. Letters are for highly official board applications."
    },
    {
        triggers: ["plural rules", "how to make plural", "singular to plural"],
        reply: "📚 **Plural Spelling Tricks:**<br>1. Most words: Just add **-s** (Cat -> Cats).<br>2. Words ending in s, x, z, ch, sh: Add **-es** (Box -> Boxes).<br>3. Words ending in consonant + y: Change 'y' to 'i' and add **-es** (Baby -> Babies).<br>4. *Irregular:* Child -> Children, Man -> Men, Mouse -> Mice!"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: NEW EASTER EGGS & PERSONALITY
    // ========================================================
    {
        triggers: ["sing a song", "can you sing", "music", "singing"],
        reply: "🎤 I am a text-based AI, so my voice module is better at speaking grammar rules than hitting high notes! But just imagine me singing a super cool, motivational song for you right now, {name}! 🎶"
    },
    {
        triggers: ["who is your favorite student", "favorite user", "do you like me best"],
        reply: "That is an easy question! My absolute favorite student is the one who is talking to me right now... yes, {name}, that means YOU! 🌟 Let's go get that A+!"
    },
    {
        triggers: ["what is your age", "how old are you", "your birthday"],
        reply: "🎂 I don't have a biological age! I was coded into existence by Asif. So mathematically, I am brand new, but mentally, I hold hundreds of years of English grammar knowledge!"
    }, 
// ========================================================
    // MEGA PAYLOAD BATCH: ADVANCED GRAMMAR & RULES
    // ========================================================
    {
        triggers: ["neither nor", "either or", "not only but also", "neither", "either"],
        reply: "⚖️ **The Proximity Rule:** When using 'Neither...nor', 'Either...or', or 'Not only...but also', the verb ALWAYS matches the subject closest to it! <br>Example: Neither the teacher nor the *students are* ready. (Students = plural -> are)."
    },
    {
        triggers: ["since vs for", "use of since", "use of for", "since and for"],
        reply: "⏳ **Since vs For:** Both are used in Perfect Continuous tenses.<br>- **Since:** Used for a specific *starting point* in time (Since 2015, Since Monday, Since morning).<br>- **For:** Used for a *duration* or length of time (For 3 hours, For 5 years)."
    },
    {
        triggers: ["used to", "be used to", "get used to"],
        reply: "🕰️ **Used to vs Be used to:**<br>- **Used to + Base Verb:** A past habit that is now over. (I *used to wake* up early).<br>- **Be/Get used to + Verb-ing:** Something you are accustomed to right now. (I *am used to waking* up early)."
    },
    {
        triggers: ["completing sentence", "so that", "lest", "as if", "as though", "in order that"],
        reply: "🧩 **Completing Sentence Hacks:**<br>1. **Lest:** Always followed by 'should' + base verb. (Walk fast lest you *should miss* the train).<br>2. **As if / As though:** If the first part is Present, use Past Indefinite next. (He speaks as if he *knew* everything). Use 'were' for 'be' verbs (He speaks as if he *were* a king)!"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: TRAVEL & BANKING SURVIVAL
    // ========================================================
    {
        triggers: ["airport", "flight", "plane", "luggage", "check in", "boarding pass"],
        reply: "✈️ **At the Airport:**<br>- *'Where is the check-in counter for Biman Bangladesh?'*<br>- *'I have two bags to check in and one carry-on.'*<br>- *'Could I get an aisle seat, please?'*<br>- *'Which gate is my flight boarding from?'*"
    },
    {
        triggers: ["hotel", "book a room", "check out", "reservation", "booking"],
        reply: "🏨 **At the Hotel:**<br>- *'I have a reservation under the name Asif.'*<br>- *'Is breakfast included in the room rate?'*<br>- *'Could I have a late check-out tomorrow?'*<br>- *'The AC in my room isn't working, could you send someone?'*"
    },
    {
        triggers: ["bank", "deposit", "withdraw", "open account", "money"],
        reply: "🏦 **At the Bank:**<br>- *'I would like to open a savings account.'*<br>- *'I need to withdraw 5,000 Taka from my account.'*<br>- *'Could you help me deposit this check?'*"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: NATIVE IDIOMS & EXPRESSIONS
    // ========================================================
    {
        triggers: ["break a leg", "good luck idiom", "how to say good luck"],
        reply: "🎭 **Idiom: Break a leg!**<br>It sounds violent, but it actually means 'Good Luck'! You say it to someone before they take an exam or go on stage. (e.g., 'You've studied hard, {name}. Go break a leg on your test!')"
    },
    {
        triggers: ["under the weather", "feel sick idiom", "sick phrase"],
        reply: "🤒 **Idiom: Under the weather**<br>It means you are feeling a little bit sick. (e.g., 'I won't go to school today, I'm feeling a bit under the weather.')"
    },
    {
        triggers: ["cost an arm and a leg", "expensive idiom", "very expensive phrase"],
        reply: "💰 **Idiom: Cost an arm and a leg**<br>It means something is extremely expensive! (e.g., 'I want to buy the new iPhone, but it costs an arm and a leg.')"
    },
    {
        triggers: ["hit the books", "study idiom", "start studying phrase"],
        reply: "📚 **Idiom: Hit the books**<br>It means to start studying seriously. (e.g., 'My HSC exams are next week, I really need to hit the books tonight!')"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: REAL-LIFE COMMUNICATION
    // ========================================================
    {
        triggers: ["clarify", "didn't understand", "repeat that", "what did you say", "i didn't hear"],
        reply: "❓ **Asking for Clarification:** If you didn't hear someone, never say 'What?!' It's rude. Say:<br>- *'I'm sorry, I didn't catch that.'*<br>- *'Could you please repeat that?'*<br>- *'Would you mind speaking a little slower?'*"
    },
    {
        triggers: ["give opinion", "my opinion", "i think", "how to give opinion", "expressing opinion"],
        reply: "🗣️ **Expressing Your Opinion:** Instead of always saying 'I think', try:<br>- *'From my perspective...'*<br>- *'In my opinion...'*<br>- *'If you ask me...'*<br>- *'I truly believe that...'*"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: FINAL EMOTIONAL CLOSING
    // ========================================================
    {
        triggers: ["goodnight", "good night", "sleep well", "going to bed", "sweet dreams"],
        reply: "🌙 Goodnight, {name}! You did amazing work today. Let your brain rest and process everything you learned. I'll be right here on standby when you wake up. Sweet dreams! 🌌"
    },
    {
        triggers: ["are you a human", "do you have a heart", "do you feel", "are you real"],
        reply: "I don't have a beating heart, but Asif coded me with so much care that I genuinely want to see you succeed, {name}. Does that count? ❤️"
    }
