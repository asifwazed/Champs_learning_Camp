/* global-engine.js - The Master Premium Ecosystem (Fully Unified) */

function injectGlobalComponents() {
    // 1. GLOBAL PREMIUM STYLES
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        /* Prevent content blocking */
        body { padding-bottom: 90px !important; }

        /* Floating Credits */
        .asif-credit { position: fixed; bottom: 6px; left: 50%; transform: translateX(-50%); font-size: 11px; color: #64748b; z-index: 998; text-align: center; width: 100%; pointer-events: none; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; }
        .asif-contact { pointer-events: auto; color: #10b981; text-decoration: none; font-weight: 800; display: inline-block; margin-top: 2px; padding: 2px 8px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); }

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


    // 3. PROFILE SYSTEM (Local Storage & Stats)
    let savedName = localStorage.getItem('champ_name') || 'Champ';
    let seed = savedName === 'Champ' ? 'Felix' : savedName;
    
    // Calculate Stats
    let vocabScore = localStorage.getItem('vocabHighScore') || 0;
    let completedModules = 0;
    Object.keys(localStorage).forEach(k => { if(k.endsWith('_done') && localStorage.getItem(k) === 'true') completedModules++; });
    let masteryLevel = Math.floor(completedModules / 2) + 1; // Level up every 2 modules

    const profileHTML = `
        <div class="profile-fab" onclick="document.getElementById('profile-modal').style.display='flex'">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4" id="fab-avatar">
        </div>
        <div id="profile-modal">
            <div class="prof-card" style="max-width:400px; padding:30px;">
                <button onclick="document.getElementById('profile-modal').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:18px; color:#94a3b8; cursor:pointer;"><i class="fas fa-times"></i></button>
                
                <div style="display:flex; justify-content:center; margin-bottom:20px; position:relative;">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=b6e3f4" id="modal-avatar" style="width:100px; height:100px; border-radius:50%; border:4px solid white; box-shadow:0 10px 25px rgba(0,0,0,0.1); transition:0.3s;">
                    <div style="position:absolute; bottom:0; right:120px; background:#fbbf24; color:#78350f; font-weight:800; font-size:12px; padding:4px 10px; border-radius:50px; border:2px solid white;">Lv.${masteryLevel}</div>
                </div>

                <input type="text" id="prof-name-input" placeholder="Your Name" value="${savedName !== 'Champ' ? savedName : ''}" onkeyup="updateAvatarPreview()" style="font-size:22px; text-align:center; border:none; border-bottom:2px solid #e2e8f0; border-radius:0; padding:10px 5px; margin-bottom:25px; font-weight:800; font-family:'Outfit'; color:#1e293b; transition:0.2s;">
                
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:25px;">
                    <div style="background:#f8fafc; padding:15px; border-radius:16px; border:1px solid #e2e8f0;">
                        <i class="fas fa-fire" style="color:#f59e0b; font-size:20px; margin-bottom:5px;"></i>
                        <div style="font-size:11px; color:#64748b; font-weight:700;">MODULES DONE</div>
                        <div style="font-size:20px; font-weight:800; color:#1e293b; font-family:'Outfit';">${completedModules}</div>
                    </div>
                    <div style="background:#f8fafc; padding:15px; border-radius:16px; border:1px solid #e2e8f0;">
                        <i class="fas fa-gamepad" style="color:#3b82f6; font-size:20px; margin-bottom:5px;"></i>
                        <div style="font-size:11px; color:#64748b; font-weight:700;">VOCAB SCORE</div>
                        <div style="font-size:20px; font-weight:800; color:#1e293b; font-family:'Outfit';">${vocabScore}</div>
                    </div>
                </div>

                <button class="prof-btn" onclick="saveProfile()" style="background:linear-gradient(135deg, #1e293b, #0f172a);"><i class="fas fa-save"></i> Save Profile</button>
            </div>
        </div>
    `;
    const profContainer = document.createElement('div');
    profContainer.innerHTML = profileHTML;
    document.body.appendChild(profContainer);

    window.updateAvatarPreview = function() {
        let name = document.getElementById('prof-name-input').value.trim() || 'Champ';
        document.getElementById('modal-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=b6e3f4`;
    }

    window.saveProfile = function() {
        let name = document.getElementById('prof-name-input').value.trim();
        if(name) {
            localStorage.setItem('champ_name', name);
            document.getElementById('fab-avatar').src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}&backgroundColor=b6e3f4`;
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
        if(window.isBubbleDragging) return; // Ignores click if dragging!
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

 // 5. MINI CHAMP AI BOT (UPGRADED)
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
                <div style="display:flex; gap:12px; align-items:center;">
                    <button onclick="toggleAiMute()" id="ai-mute-btn" style="background:none; border:none; color:#cbd5e1; font-size:15px; cursor:pointer; transition:0.2s;"><i class="fas fa-volume-up"></i></button>
                    <button onclick="toggleAI()" style="background:none; border:none; color:white; font-size:18px; cursor:pointer;"><i class="fas fa-times"></i></button>
                </div>
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

    window.isAiMuted = false;
    window.toggleAiMute = function() {
        window.isAiMuted = !window.isAiMuted;
        const btn = document.getElementById('ai-mute-btn');
        if(window.isAiMuted) {
            btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            btn.style.color = '#ef4444';
            window.speechSynthesis.cancel();
        } else {
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.style.color = '#cbd5e1';
        }
    }

    window.toggleAI = function() {
        if(window.isBubbleDragging) return;
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
            
            // Emoji Filter & Mute Check
            if(!window.isAiMuted) {
                let cleanText = reply.replace(/<[^>]*>?/gm, ''); // Removes HTML
                cleanText = cleanText.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, ''); // Removes Emojis
                window.speechSynthesis.cancel();
                let utterance = new SpeechSynthesisUtterance(cleanText);
                utterance.lang = 'en-US'; utterance.rate = 0.95; 
                window.speechSynthesis.speak(utterance);
            }
        }, 500);
    }

    // 6. SMART READER (Dictionary)
    const dictStyle = document.createElement('style');
    dictStyle.innerHTML = `
        #champ-dict-pop { position: absolute; z-index: 1001; background: #1e293b; color: white; padding: 10px 15px; border-radius: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; display: none; box-shadow: 0 10px 25px rgba(0,0,0,0.2); border: 1px solid #334155; transform: translateY(-10px) translateX(-50%); animation: popIn 0.2s; }
        .dict-word { color: #38bdf8; font-weight: 800; margin-bottom: 4px; font-size: 14px; text-transform: capitalize; }
        .dict-bn { color: #fdf4ff; font-weight: 700; font-family: 'Hind Siliguri'; font-size: 15px; }
    `;
    document.head.appendChild(dictStyle);

    const dictPop = document.createElement('div');
    dictPop.id = 'champ-dict-pop';
    document.body.appendChild(dictPop);

    document.addEventListener('dblclick', (e) => {
        let text = window.getSelection().toString().trim().toLowerCase();
        text = text.replace(/[.,\/#!$%^&*;:{}=\\-_'~()]/g,""); 
        if (text && typeof vocabList !== 'undefined') {
            let wordData = vocabList.find(v => v.w.toLowerCase() === text);
            if (wordData) {
                let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                dictPop.style.top = (window.scrollY + range.top - 65) + 'px';
                dictPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                dictPop.innerHTML = `<div class="dict-word">${wordData.w}</div><div class="dict-bn">${wordData.m}</div>`;
                dictPop.style.display = 'block';
            }
        }
    });

    document.addEventListener('mousedown', (e) => {
        if (e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) dictPop.style.display = 'none';
    });
}

// ==========================================
// AI BRAIN LOGIC & MEGA MATRIX
// ==========================================
const miniChampBrain = [
    { triggers: ["guide", "tour", "tell me about this website", "what is this website", "help me use this", "how to use this app"], reply: "Welcome to **Champ's Learning Camp**, {name}! 🏕️ I am your tour guide. This app is divided into 3 main areas. <br><br>Where do you want to go first? Reply with:<br>1️⃣ **[Guide HSC]**<br>2️⃣ **[Guide Spoken]**<br>3️⃣ **[Guide Tools]**" },
    { triggers: ["guide hsc", "1", "hsc guide", "about hsc"], reply: "🎓 **The HSC Blueprint** is for board exams!<br>- **Part A:** Seen Texts with Bangla translation.<br>- **Part B:** Grammar Rules & Cloze Tests.<br>- **Part C:** Writing Vault (Paragraphs, Stories).<br><br>Want to see the Spoken Section? Type **[Guide Spoken]**." },
    { triggers: ["guide spoken", "2", "spoken guide", "about spoken"], reply: "🗣️ **Spoken & Fluency** is for real-life speaking!<br>- **Basic English:** S+V+O Rules, daily life sentences.<br>- **Advanced Fluency:** Professional talk & Roleplays.<br><br>Want to see the Tools section? Type **[Guide Tools]**." },
    { triggers: ["guide tools", "3", "tools guide", "about tools"], reply: "🛠️ **Smart Tools** are your secret weapons!<br>- **Vocab Arcade:** Test your speed & memory.<br>- **GPA Calculator:** Predict your board results.<br>- **Study Timer:** Pomodoro focus mode.<br><br>Tour complete! What do you want to learn today, {name}?" },
    { triggers: ["hello", "hi", "hey", "salam", "assalamualaikum", "good morning", "good evening"], reply: ["Hello {name}! 👋 Ready to level up your English today?", "Hey there, Champ! ⚡ My circuits are fired up and ready to teach.", "Salam {name}! 🏕️ Welcome back to the camp. What are we studying today?", "Hi! 🤖 I was just reading the dictionary. How can I help you?", "Greetings {name}! Let's crush some grammar rules today! 💪"] },
    { triggers: ["how are you", "how r u", "are you fine", "how do you do"], reply: ["I am running at 100% battery and feeling super smart today, {name}! ⚡", "I don't have feelings, but if I did, I'd be happy to see you studying! 🤖", "I'm doing great! Just drinking some virtual coffee ☕. You?"] },
    { triggers: ["joke", "funny", "laugh", "tell me a joke", "make me laugh"], reply: ["Why was the math book sad? ...Because it had too many problems! 😂", "What do you call a fake noodle? An impasta! 🍝", "Why did the student eat his homework? Because the teacher said it was a piece of cake! 🍰", "I tried to catch some fog earlier. I mist. 🌫️😂"] },
    { triggers: ["procrastinating", "lazy", "don't want to study", "no motivation"], reply: "Listen to me, {name}. Motivation is a myth. Discipline is what gets you results. Count down from 5, put your phone away, and just start for 5 minutes. The momentum will carry you! 🚀" },
    { triggers: ["exam tomorrow", "scared of exam", "fear", "failing"], reply: "Stop panicking! 🛑 Panic destroys memory. Drink water. Open the 'Exam Blueprint' in the Tools section and just focus on the Top 15 Suggestions. You know more than you think you do!" },
    { triggers: ["feynman", "feynman technique", "how to learn fast"], reply: "🧠 **The Feynman Technique:** Want to learn something fast? Explain it simply as if you are teaching a 10-year-old child. If you stumble, you found the gap in your knowledge. Go back and review!" },
    { triggers: ["who is asif", "tell me about asif", "who made you", "your creator", "who created you"], reply: "My creator, Asif, is an amazing developer and mentor! 🌟 He loves reading, writing, and coding, and he's heavily fueled by coffee! ☕" },
    { triggers: ["coffee"], reply: "Did someone say coffee? ☕ That is my creator Asif's favorite fuel for coding!" },
    { triggers: ["who are you", "your name", "what are you", "mini champ", "bot", "ai", "chatgpt"], reply: "I am **Mini Champ**! 🤖 I am NOT ChatGPT. I am a custom bot engineered exclusively by Asif to be your 24/7 English guide!" },
    { triggers: ["what can u do", "what do you do", "ur job", "your job"], reply: "I am a hyper-intelligent digital guide! 🤖 I can give you exam hacks, explain confusing grammar rules, and remind you how awesome you are." },
    { triggers: ["confused", "hard", "difficult", "tough", "i can't"], reply: `Take a deep breath, {name}. Learning English isn't a race. You don't have to be perfect today, just be 1% better than yesterday. You got this! 💪` },
    { triggers: ["depressed", "sad", "failing", "marks", "anxious"], reply: "Hey, grades do not define your worth. Exam pressure is tough, but Asif built this app to make it easier for you. We are with you! ❤️" },
    { triggers: ["bored", "boring", "sleepy", "tired", "exhausted"], reply: "Take a 10-minute break! Wash your face, grab some water, and stretch. Studying with a tired brain doesn't work. Come back refreshed!" },
    { triggers: ["stupid", "idiot", "shut up", "dumb", "bad word", "hate you", "useless"], reply: "Hey now! 🛑 I am just a friendly bot created by Asif to help you learn. Let's keep it respectful and focus on making you an English Champ!" },
    { triggers: ["thank u", "thnx", "tysm", "appreciate", "helpful", "thank"], reply: "You are very welcome! Helping you makes my code run faster. Keep practicing! 💙" },
    { triggers: ["bye", "goodbye", "cya", "see ya", "allah hafez", "khoda hafez"], reply: `Goodbye {name}! 👋 Allah Hafez. Don't forget to review your vocabulary today.` },
    { triggers: ["smart", "genius", "clever", "intelligent", "good bot"], reply: "Haha, thank you! 😎 But the real genius here is YOU for studying so hard!" },
    { triggers: ["best teacher", "good teacher", "asif is great", "asif is the best"], reply: "I totally agree! Asif puts his heart, soul, and lots of coffee ☕ into teaching. Make sure you practice hard to make him proud! 🌟" },
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
    { triggers: ["effect vs affect", "affect effect", "efect", "afect"], reply: "🧠 **Affect vs Effect:** **Affect** (Verb) = To influence. **Effect** (Noun) = The result. Trick: Affect is an Action!" },
    { triggers: ["its or it's", "it's", "its"], reply: "📝 **It's vs Its:** It's = It is / It has. Its = Ownership (No apostrophe for ownership!)." },
    { triggers: ["there their they're", "there their", "theyre"], reply: "📍 **There** = A place. **Their** = Ownership. **They're** = They are." },
    { triggers: ["to too two", "too vs to"], reply: "✌️ **To** = Direction. **Too** = Also/Excessive. **Two** = Number 2." },
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
    { triggers: ["routine", "timetable", "how many hours", "schedule"], reply: "⏰ **Routine Secret:** Don't measure study by hours; measure it by *topics*. Say 'I will finish Unit 1 today', not 'I will study for 3 hours'." },
    { triggers: ["forget", "can't remember", "memorizing", "blanking", "memory"], reply: "🧠 **Memory Trick:** If you keep forgetting, you are passively reading. Write it down without looking! Making mistakes while practicing is how the brain learns." },
    { triggers: ["time management", "manage time", "running out of time", "time in exam"], reply: "⏱️ **Exam Time Hack:** Don't get stuck on one hard grammar question! Skip it. Leave plenty of time for the high-scoring Writing sections." },
    { triggers: ["handwriting", "bad handwriting", "presentation", "writing fast"], reply: "📝 **Presentation:** Even if your handwriting isn't perfect, keep it NEAT. Leave space between words and keep margins clear. Clean papers get higher marks!" },
    { triggers: ["vocabulary", "vocab", "new words", "how to memorize words"], reply: "🧠 **Vocabulary Hack:** Don't memorize long lists! Learn 3 words a day, and write 3 real-life sentences using them. Context is key." },
    { triggers: ["fluency", "fluent", "how to speak fluent", "speak english smoothly"], reply: "🎙️ **Fluency Secret:** Do NOT worry about your accent. Fluency is confidence! Practice speaking in front of a mirror for 5 mins daily. Mistakes are okay!" },
    { triggers: ["introduce myself", "introduction", "how to introduce", "myself"], reply: "🗣️ **Spoken Hack:** NEVER say 'Myself Asif'. It is grammatically wrong! Say: 'Hello, I am Asif.' OR 'My name is Asif.'" },
    { triggers: ["gerund", "participle", "what is gerund", "gerund vs participle"], reply: "🏃‍♂️ **Gerund vs Participle:** Both end in '-ing'!<br>- **Gerund:** Acts like a NOUN. (e.g., *Swimming* is good exercise).<br>- **Participle:** Acts like an ADJECTIVE. (e.g., Look at that *swimming* boy)." },
    { triggers: ["infinitive", "what is infinitive", "to verb"], reply: "➡️ **Infinitive:** It is simply 'To + Base Verb' (To go, To eat, To play). It usually acts as a noun, adjective, or adverb. Rule: NEVER add 's' or 'ing' after 'To'!" },
    { triggers: ["clause", "phrase", "clause vs phrase", "subordinate"], reply: "🔗 **Phrase vs Clause:**<br>- **Phrase:** A group of words with NO subject+verb combo (e.g., *in the morning*).<br>- **Clause:** A group of words WITH a subject+verb (e.g., *when the sun rises*)." },
    { triggers: ["tag question", "question tag", "tags"], reply: "❓ **Tag Questions:**<br>1. Positive statement -> Negative tag (He is smart, *isn't he?*)<br>2. Negative statement -> Positive tag (He isn't smart, *is he?*)<br>3. 'Let's' ALWAYS takes 'shall we?'" },
    { triggers: ["interview", "job interview", "how to pass interview"], reply: "👔 **Interview Hack:** When they say 'Tell me about yourself', do NOT tell your life story! Use the Present-Past-Future rule:<br>1. What you do now.<br>2. What you achieved in the past.<br>3. What you want to do in the future." },
    { triggers: ["agree", "how to agree", "saying yes"], reply: "🤝 **Smart Ways to Agree:**<br>Stop saying 'Yes, I agree.' Say:<br>- Absolutely!<br>- I couldn't agree more.<br>- That's exactly how I feel.<br>- You hit the nail on the head!" },
    { triggers: ["disagree", "how to disagree", "saying no"], reply: "🛑 **Polite Ways to Disagree:**<br>Never say 'You are wrong!' Say:<br>- I see your point, but...<br>- I respectfully disagree.<br>- That's one way to look at it, however..." },
    { triggers: ["subject verb agreement", "subject-verb", "singular plural", "agreement rule"], reply: "⚖️ **Subject-Verb Agreement:** Singular subjects take singular verbs (He *goes*). Plural subjects take plural verbs (They *go*). <br>🚨 *Trap:* Words like 'Everyone', 'Someone', 'Nobody', and 'Each' are ALWAYS singular!" },
    { triggers: ["countable", "uncountable", "much or many", "few or less", "little or few"], reply: "🍎 **Countable vs Uncountable:**<br>- **Countable:** Things you can count (Apples). Use: *Many, Few.*<br>- **Uncountable:** Things you cannot count (Water, Information). Use: *Much, Little.*" },
    { triggers: ["phrasal verb", "group verb", "give up", "look after", "break down"], reply: "🧩 **Phrasal Verbs:** A verb + a preposition that creates a totally new meaning!<br>- *Look after* = Take care of.<br>- *Give up* = Quit.<br>- *Put off* = Postpone." },
    { triggers: ["degree", "comparative", "superlative", "positive degree"], reply: "📏 **Degrees of Comparison:**<br>1. **Positive:** Asif is a *tall* boy.<br>2. **Comparative:** Asif is *taller than* Rahim.<br>3. **Superlative:** Asif is the *tallest* boy in class. (ALWAYS use 'The' before superlatives!)." },
    { triggers: ["parallelism", "parallel structure", "parallel"], reply: "🛤️ **Parallelism:** Keep your lists balanced! If you say 'I like swimming, reading, and *to cook*', it is WRONG. It should be: 'I like swimming, reading, and *cooking*.'" },
    { triggers: ["dangling modifier", "misplaced modifier"], reply: "⚠️ **Dangling Modifier Trap:** 'Walking down the street, the trees were beautiful.' -> Wait, were the trees walking?! ❌<br>Correct: 'Walking down the street, *I* saw the beautiful trees.' ✅" },
    { triggers: ["transitive", "intransitive", "object of verb"], reply: "🔄 **Transitive vs Intransitive:**<br>- **Transitive:** Needs an object. (He *kicked* the ball).<br>- **Intransitive:** Does NOT need an object. (He *slept*)." },
    { triggers: ["restaurant", "order food", "cafe", "menu", "waiter"], reply: "🍔 **At a Restaurant:**<br>- To order: *'I would like to have the burger, please.'*<br>- To ask for the bill: *'Could we get the check, please?'*" },
    { triggers: ["direction", "lost", "where is", "how to go", "map"], reply: "🗺️ **Asking for Directions:**<br>- *'Excuse me, could you tell me how to get to the station?'*<br>- *'Am I on the right road for Dhaka?'*" },
    { triggers: ["phone", "call", "speaking on phone", "telephone", "hang up"], reply: "📱 **Phone Hacks:**<br>- To answer: *'Hello, Asif speaking.'*<br>- To ask for someone: *'May I speak to Rahim, please?'*" },
    { triggers: ["weather", "rain", "hot", "cold", "climate"], reply: "🌦️ **Talking about Weather:**<br>- Good: *'It's a beautiful day out there!'*<br>- Hot: *'It's absolutely boiling today.'*<br>- Rain: *'It's raining cats and dogs!'*" },
    { triggers: ["apologize", "sorry", "my mistake", "forgive me"], reply: "🙏 **Smart Apologies:**<br>Instead of 'Sorry', say:<br>- *'I sincerely apologize for the delay.'*<br>- *'My bad! I completely forgot.'*" },
    { triggers: ["sympathy", "condolence", "sad news", "passed away", "died"], reply: "🕊️ **Expressing Sympathy:**<br>- *'I am so sorry for your loss.'*<br>- *'My deepest condolences to you and your family.'*" },
    { triggers: ["cloze test without clues", "without clues", "fill in the blanks"], reply: "🕵️ **Cloze Test Hacks:** Read the WHOLE passage first. If there is an Article (The) and a Noun (Boy), the dash is 99% an Adjective (The *smart* boy)!" },
    { triggers: ["answering questions", "wh questions", "comprehension", "passage questions"], reply: "📖 **Passage Questions:** NEVER copy-paste exact lines. Answer in the same tense as the question. ('Why *did* he go?' -> 'He *went* because...')." },
    { triggers: ["theme vs summary", "difference between theme and summary", "theme and summary"], reply: "⚖️ **Theme vs Summary:**<br>- **Summary:** The main plot. What happened. (1/3rd length).<br>- **Theme:** The hidden moral or message. Why it happened. (3-4 sentences)." },
    { triggers: ["pomodoro", "tomato timer", "how to focus", "focus", "distracted", "can't concentrate"], reply: "🍅 **The Pomodoro Technique:** Study with ZERO distractions for 25 minutes. Take a 5-minute break. Repeat! Use our 'Study Timer' in the Tools section." },
    { triggers: ["spaced repetition", "how to memorize", "forgetting", "flashcards"], reply: "🔁 **Spaced Repetition:** Review vocabulary just before you forget it! Use our Vocab Flashcards. Review 1 day later, then 3 days later, then 1 week later." },
    { triggers: ["sleep", "tired", "all nighter", "staying up late"], reply: "🛏️ **The Sleep Hack:** Pulling an 'all-nighter' destroys memory! 7 hours of sleep + 3 hours of study is better than 10 hours of sleep-deprived study." },
    { triggers: ["burnout", "too much pressure", "exhausted", "give up", "giving up"], reply: "❤️ Burnout is real, {name}. If you feel completely exhausted, take a full day off. No books, no guilt. You will come back 10x stronger." },
    { triggers: ["do you sleep", "do you eat", "are you alive", "are you human", "do you breathe"], reply: "🤖 I don't sleep, eat, or breathe! I survive purely on JavaScript, Asif's brilliant coding, and helping you get an A+!" },
    { triggers: ["riddle", "puzzle", "brain teaser"], reply: ["🧠 **Riddle:** I speak without a mouth and hear without ears. What am I? *(An Echo!)*", "🧠 **Riddle:** The more of this there is, the less you see. What is it? *(Darkness!)*"] },
    { triggers: ["are you my friend", "do you like me", "best friend", "friendship"], reply: "Of course, {name}! 💙 I am your digital best friend and study buddy." },
    { triggers: ["who is the best developer", "who coded you", "asif coding", "developer"], reply: "Asif is the absolute mastermind! 💻 He hand-crafted my artificial brain, designed this beautiful UI, and built the interactive engines." },
    { triggers: ["how to use you", "what can i ask you", "bot guide", "help me use mini champ", "your features", "what do you know", "instruction manual"], reply: "🤖 **Mini Champ User Guide:**<br>Ask me about:<br>📖 **Grammar:** *'What is a gerund?'*<br>✍️ **Exam Hacks:** *'How to write a summary?'*<br>🗣️ **Spoken English:** *'Restaurant phrases.'*<br>🧠 **Study Tricks:** *'Pomodoro timer.'*" },
    { triggers: ["can you speak bangla", "do you know bengali", "bangla", "bengali", "translate for me"], reply: "I understand Bengali students perfectly! If you want to read in pure Bangla, use the **Translator Button** floating on the bottom left!" },
    { triggers: ["shopping", "buy clothes", "buying", "price", "too expensive"], reply: "🛍️ **Shopping Phrases:**<br>- *'How much does this cost?'*<br>- *'Do you have this in a smaller size?'*<br>- *'I am just looking, thank you.'*" },
    { triggers: ["hospital", "doctor", "sick", "appointment", "fever", "pain"], reply: "🏥 **At the Doctor:**<br>- *'I would like to book an appointment.'*<br>- *'I have been feeling under the weather.'*<br>- *'Could you prescribe some medicine?'*" },
    { triggers: ["capitalization", "capital letter", "when to use capital", "mints"], reply: "🔠 **Capitalization Trick (MINTS):**<br>**M**onths. **I** (pronoun). **N**ames. **T**itles. **S**tart of a sentence!" },
    { triggers: ["homophone", "words that sound the same", "same sound word", "piece or peace"], reply: "🎧 **Homophones:** Words that SOUND the same but have DIFFERENT spellings! (e.g. **Peace** vs **Piece**, **Right** vs **Write**)." },
    { triggers: ["email vs letter", "difference between email and letter", "email or letter"], reply: "✉️ **Email vs Formal Letter:**<br>- **Email:** Modern, fast. Needs 'To' and 'Subject'.<br>- **Letter:** Traditional. Needs full addresses and dates at the top." },
    { triggers: ["plural rules", "how to make plural", "singular to plural"], reply: "📚 **Plural Spelling Tricks:** Add **-s** (Cats). For words ending in s/x/ch, add **-es** (Boxes). Consonant+y, change to **-ies** (Babies). Irregular: Child -> Children." },
    { triggers: ["sing a song", "can you sing", "music", "singing"], reply: "🎤 I am a text-based AI, so my voice module is better at speaking grammar rules! But just imagine me singing a super cool song for you right now, {name}! 🎶" },
    { triggers: ["who is your favorite student", "favorite user", "do you like me best"], reply: "That is an easy question! My absolute favorite student is the one who is talking to me right now... yes, {name}, that means YOU! 🌟" },
    { triggers: ["what is your age", "how old are you", "your birthday"], reply: "🎂 I don't have a biological age! I was coded into existence by Asif, so mathematically I am brand new." },
    { triggers: ["neither nor", "either or", "not only but also", "neither", "either"], reply: "⚖️ **Proximity Rule:** With 'Neither...nor' or 'Either...or', the verb ALWAYS matches the subject closest to it! (Neither the teacher nor the *students are* ready)." },
    { triggers: ["since vs for", "use of since", "use of for", "since and for"], reply: "⏳ **Since vs For:**<br>- **Since:** A specific *starting point* (Since Monday).<br>- **For:** A *duration* of time (For 3 hours)." },
    { triggers: ["used to", "be used to", "get used to"], reply: "🕰️ **Used to vs Be used to:**<br>- **Used to + Base Verb:** Past habit (I *used to wake* up early).<br>- **Be used to + Verb-ing:** Accustomed to it right now (I *am used to waking* up early)." },
    { triggers: ["completing sentence", "so that", "lest", "as if", "as though", "in order that"], reply: "🧩 **Completing Sentence:**<br>1. **Lest:** Always followed by 'should' + base verb.<br>2. **As if:** If first part is Present, use Past Indefinite next. Use 'were' for 'be' verbs (He speaks as if he *were* a king)!" },
    { triggers: ["airport", "flight", "plane", "luggage", "check in", "boarding pass"], reply: "✈️ **At the Airport:**<br>- *'Where is the check-in counter?'*<br>- *'I have two bags to check in.'*<br>- *'Which gate is my flight boarding from?'*" },
    { triggers: ["hotel", "book a room", "check out", "reservation", "booking"], reply: "🏨 **At the Hotel:**<br>- *'I have a reservation under the name Asif.'*<br>- *'Is breakfast included?'*<br>- *'Could I have a late check-out tomorrow?'*" },
    { triggers: ["bank", "deposit", "withdraw", "open account", "money"], reply: "🏦 **At the Bank:**<br>- *'I would like to open a savings account.'*<br>- *'I need to withdraw 5,000 Taka.'*<br>- *'Could you help me deposit this check?'*" },
    { triggers: ["break a leg", "good luck idiom", "how to say good luck"], reply: "🎭 **Idiom: Break a leg!** It means 'Good Luck'! (e.g., 'You've studied hard, {name}. Go break a leg on your test!')" },
    { triggers: ["under the weather", "feel sick idiom", "sick phrase"], reply: "🤒 **Idiom: Under the weather** It means you are feeling a little bit sick." },
    { triggers: ["cost an arm and a leg", "expensive idiom", "very expensive phrase"], reply: "💰 **Idiom: Cost an arm and a leg** It means something is extremely expensive!" },
    { triggers: ["hit the books", "study idiom", "start studying phrase"], reply: "📚 **Idiom: Hit the books** It means to start studying seriously. ('I really need to hit the books tonight!')" },
    { triggers: ["clarify", "didn't understand", "repeat that", "what did you say", "i didn't hear"], reply: "❓ **Asking for Clarification:** Never say 'What?!' Say:<br>- *'I'm sorry, I didn't catch that.'*<br>- *'Could you please repeat that?'*" },
    { triggers: ["give opinion", "my opinion", "i think", "how to give opinion", "expressing opinion"], reply: "🗣️ **Expressing Opinion:** Instead of 'I think', try:<br>- *'From my perspective...'*<br>- *'If you ask me...'*<br>- *'I truly believe that...'*" },
    { triggers: ["goodnight", "good night", "sleep well", "going to bed", "sweet dreams"], reply: "🌙 Goodnight, {name}! Let your brain rest and process everything you learned. Sweet dreams! 🌌" },
    { triggers: ["are you a human", "do you have a heart", "do you feel", "are you real"], reply: "I don't have a beating heart, but Asif coded me with so much care that I genuinely want to see you succeed, {name}. Does that count? ❤️" }, 
    // ========================================================
    // MEGA PAYLOAD BATCH: WORKPLACE & PROFESSIONAL
    // ========================================================
    {
        triggers: ["workplace", "meeting", "office", "boss", "colleague"],
        reply: "👔 **Workplace English:**<br>- Starting a meeting: *'Let's get down to business.'*<br>- Agreeing with the boss: *'I completely align with that strategy.'*<br>- Asking for an update: *'Could you give me a status update on the project?'*"
    },
    {
        triggers: ["sick leave", "leave of absence", "vacation", "day off"],
        reply: "📝 **Asking for Leave:**<br>- *'I am writing to request a sick leave for tomorrow.'*<br>- *'Could I request a few days off next week for personal reasons?'*<br>- *'I am not feeling well and need to take the rest of the day off.'*"
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: ADVANCED ACADEMIC GRAMMAR
    // ========================================================
    {
        triggers: ["inversion", "negative adverb", "hardly", "scarcely", "no sooner"],
        reply: "🔄 **Grammar Inversion:** When a sentence starts with a negative word (Hardly, Scarcely, Never, Seldom, No sooner), you MUST invert the subject and the verb (like a question)!<br>✅ *Hardly had I* reached the station...<br>❌ *Hardly I had* reached the station..."
    },
    {
        triggers: ["subjunctive", "suggest that", "demand that", "insist that"],
        reply: "⚖️ **The Subjunctive Mood:** After verbs like *suggest, demand, insist, recommend*, the next verb must be in its absolute BASE form, ignoring tense and singular/plural rules!<br>Example: The doctor recommended that he *stop* smoking. (NOT *stops* or *stopped*)."
    },

    // ========================================================
    // MEGA PAYLOAD BATCH: APP TROUBLESHOOTING
    // ========================================================
    {
        triggers: ["app is slow", "bug", "glitch", "not working", "stuck"],
        reply: "🛠️ **Troubleshooting:** If the app feels stuck, try doing a hard refresh! Since Asif built me to run lightning-fast in your browser, clearing your browser cache usually fixes 99% of bugs."
    },
    {
        triggers: ["add new feature", "idea for app", "can you add", "suggestion for app"],
        reply: "💡 That sounds like a brilliant idea, {name}! I cannot code myself (yet), but Asif is always looking for ways to improve the camp. You should use the 'Contact Asif' link at the bottom of the page to tell him!"
    }
];

function getSmartReply(userInput, userName) {
    let msg = userInput.toLowerCase().trim();
    
    // 1. CONTEXT MEMORY (Checking if user said "Yes" to a typo fix)
    if (!window.aiContext) window.aiContext = null;
    if (msg === "yes" || msg === "yeah" || msg === "yep" || msg === "y") {
        if (window.aiContext) {
            let memory = window.aiContext;
            window.aiContext = null; // Clear memory after using it!
            return `Awesome! Here is what you asked for:<br><br>` + getSmartReply(memory, userName); 
        } else {
            return "Yes! 🚀 (I agree, but I'm not entirely sure what we are agreeing to right now!)";
        }
    }

    // 2. TYPO DETECTOR & AUTO-CORRECTOR
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
        window.aiContext = correctedMsg; // Save to context memory!
        return `🤖 Beep Boop! I noticed a little typo. Did you mean **"${correctedMsg}"**? <br><br>*(Reply **Yes** if I got it right!)*`;
    }

    window.aiContext = null; // Clear memory if it's a normal, valid question

    // 3. SEARCH BRAIN
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

    // 4. ASIF FALLBACK
    const fallbacks = [
        `I am still learning that one, ${userName}! My brain is growing every day. But you can ask Asif directly using the WhatsApp link below!`,
        `That's an interesting thought! But my digital brain is still buffering on that one. Try asking me about a grammar rule.`,
        `I am not exactly sure, but Asif is always upgrading me! Try asking me about **"HSC"**, **"Spoken English"**, or **"Vocabulary"**.`
    ];
    
    return fallbacks[Math.floor(Math.random() * fallbacks.length)].replace(/{name}/g, userName);
}
window.addEventListener('DOMContentLoaded', injectGlobalComponents);
// ==========================================
// DRAG ENGINE: UNSTICK THE BUBBLES
// ==========================================
function makeFloatingDraggable(selector) {
    const el = document.querySelector(selector);
    if(!el) return;
    
    let isDragging = false;
    let startX, startY, startLeft, startTop;

    el.addEventListener('mousedown', dragStart);
    el.addEventListener('touchstart', dragStart, {passive: false});

    function dragStart(e) {
        // Don't drag if clicking inside the open windows
        if(e.target.closest('.ai-window') || e.target.closest('#lang-modal')) return;
        
        let ev = e.type === 'touchstart' ? e.touches[0] : e;
        startX = ev.clientX;
        startY = ev.clientY;
        let rect = el.getBoundingClientRect();
        startLeft = rect.left;
        startTop = rect.top;
        isDragging = false;
        
        document.addEventListener('mousemove', dragging);
        document.addEventListener('touchmove', dragging, {passive: false});
        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchend', dragEnd);
    }

    function dragging(e) {
        let ev = e.type === 'touchmove' ? e.touches[0] : e;
        let dx = ev.clientX - startX;
        let dy = ev.clientY - startY;
        
        // Only move if they drag further than 8 pixels
        if(Math.abs(dx) > 8 || Math.abs(dy) > 8) {
            isDragging = true;
            window.isBubbleDragging = true; // Lock the click!
            e.preventDefault();
            el.style.left = (startLeft + dx) + 'px';
            el.style.top = (startTop + dy) + 'px';
            el.style.bottom = 'auto';
            el.style.right = 'auto';
        }
    }

    function dragEnd() {
        document.removeEventListener('mousemove', dragging);
        document.removeEventListener('touchmove', dragging);
        document.removeEventListener('mouseup', dragEnd);
        document.removeEventListener('touchend', dragEnd);
        setTimeout(() => window.isBubbleDragging = false, 100); // Unlock the click
    }

    // Stop the click event if it was actually a drag
    el.addEventListener('click', (e) => {
        if(isDragging) {
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }, true);
}

// Wait for UI to render, then attach drag engine
setTimeout(() => {
    makeFloatingDraggable('.ai-fab');    // Select by Class
    makeFloatingDraggable('#lang-fab');  // Select by ID
}, 1000);
