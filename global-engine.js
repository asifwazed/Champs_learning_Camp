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
        #google_translate_element { position: absolute; top: -10000px; left: -10000px; z-index: -999; opacity: 0; pointer-events: none; }
        .skiptranslate { display: none !important; }
        body { top: 0px !important; }

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
    let seed = savedName; // Removed 'Felix', so default is just 'C' for Champ
    
    // Calculate Stats
    let vocabScore = localStorage.getItem('vocabHighScore') || 0;
    let completedModules = 0;
    Object.keys(localStorage).forEach(k => { if(k.endsWith('_done') && localStorage.getItem(k) === 'true') completedModules++; });
    let masteryLevel = Math.floor(completedModules / 2) + 1; // Level up every 2 modules

    const profileHTML = `
        <div class="profile-fab" onclick="document.getElementById('profile-modal').style.display='flex'">
            <img src="https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=3b82f6&textColor=ffffff" id="fab-avatar">
        </div>
        <div id="profile-modal">
            <div class="prof-card" style="max-width:400px; padding:30px;">
                <button onclick="document.getElementById('profile-modal').style.display='none'" style="position:absolute; top:15px; right:15px; background:none; border:none; font-size:18px; color:#94a3b8; cursor:pointer;"><i class="fas fa-times"></i></button>
                
                <div style="display:flex; justify-content:center; margin-bottom:20px; position:relative;">
                    <img src="https://api.dicebear.com/7.x/initials/svg?seed=${seed}&backgroundColor=3b82f6&textColor=ffffff" id="modal-avatar" style="width:100px; height:100px; border-radius:50%; border:4px solid white; box-shadow:0 10px 25px rgba(0,0,0,0.1); transition:0.3s;">
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
        document.getElementById('modal-avatar').src = `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=3b82f6&textColor=ffffff`;
    }

    window.saveProfile = function() {
        let name = document.getElementById('prof-name-input').value.trim();
        if(name) {
            localStorage.setItem('champ_name', name);
            document.getElementById('fab-avatar').src = `https://api.dicebear.com/7.x/initials/svg?seed=${name}&backgroundColor=3b82f6&textColor=ffffff`;
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

 // 5. MINI CHAMP AI BOT (SPACED REPETITION UPGRADE)
    let lastVocabPlay = localStorage.getItem('lastVocabPlay');
    let needsVocabReview = (!lastVocabPlay || (Date.now() - parseInt(lastVocabPlay)) > 86400000); // 86400000 = 24 hours
    
    let botGreeting = needsVocabReview 
        ? "Hey Champ! 🚨 You haven't reviewed your vocabulary today. Go to the 'Tools' tab and let's do a quick 5-minute arcade session!" 
        : "Hello! 👋 I am Mini Champ. How can I help you today?";

    const aiHTML = `
        <div class="ai-fab" onclick="toggleAI()">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" alt="Asif">
            ${needsVocabReview ? '<div id="ai-notif" style="position:absolute; top:-2px; right:-2px; width:14px; height:14px; background:#ef4444; border-radius:50%; border:2px solid white; box-shadow:0 0 10px rgba(239,68,68,0.8);"></div>' : ''}
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
                <div class="msg msg-bot">${botGreeting}</div>
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

    // NEW UNIFIED TOUCH & CLICK DICTIONARY TRIGGER
    function checkSelection(e) {
        setTimeout(() => {
            let text = window.getSelection().toString().trim().toLowerCase();
            text = text.replace(/[.,\/#!$%^&*;:{}=\-_'~()]/g,""); 
            
            // Only trigger if a single word is selected (no spaces)
            if (text && text.length > 0 && !text.includes(' ')) {
                let wordData = null;
                // 1. Check Master Vocab List
                if (typeof vocabList !== 'undefined') {
                    wordData = vocabList.find(v => v.w.toLowerCase() === text);
                }
                // 2. Check Local Lesson Vocab List
                if (!wordData && typeof unitData !== 'undefined' && typeof urlParams !== 'undefined') {
                    const uid = urlParams.get('unit');
                    if (uid && unitData[uid] && unitData[uid].vocab) {
                        wordData = unitData[uid].vocab.find(v => v.w.toLowerCase() === text);
                    }
                }

                if (wordData) {
                    let range = window.getSelection().getRangeAt(0).getBoundingClientRect();
                    dictPop.style.top = (window.scrollY + range.top - 65) + 'px';
                    dictPop.style.left = (window.scrollX + range.left + range.width / 2) + 'px';
                    dictPop.innerHTML = `<div class="dict-word">${wordData.w}</div><div class="dict-bn">${wordData.m}</div>`;
                    dictPop.style.display = 'block';
                }
            } else {
                // Hide if they click away or deselect
                if(e.target.id !== 'champ-dict-pop' && !dictPop.contains(e.target)) {
                    dictPop.style.display = 'none';
                }
            }
        }, 150); // Small delay to let the phone finish selecting
    }

    // Listens for mouse release on PC, and finger release on Mobile
    document.addEventListener('mouseup', checkSelection);
    document.addEventListener('touchend', checkSelection);
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
    }, 
    // ========================================================
    // MEGA PAYLOAD BATCH: SMART SPOKEN ENGLISH HACKS
    // ========================================================
    {
        triggers: ["stop saying very", "very good", "very bad", "boring words", "smart words"],
        reply: "🌟 **Vocabulary Upgrade:** Stop using 'Very'!<br>Instead of Very Good -> Say **Excellent**.<br>Instead of Very Bad -> Say **Terrible**.<br>Instead of Very Big -> Say **Massive**.<br>Instead of Very Small -> Say **Tiny**.<br>Sound like a native speaker!"
    },
    {
        triggers: ["how to say no", "saying no", "refuse politely", "say no"],
        reply: "🛑 **How to politely say NO:**<br>Never just say 'No!'. Say:<br>- *'I would love to, but I am busy.'*<br>- *'I am afraid I can't make it.'*<br>- *'Maybe next time!'*<br>- *'I really appreciate the offer, but I have to pass.'*"
    },
    {
        triggers: ["how to ask for help", "need help", "ask help", "helping"],
        reply: "🤝 **Smart ways to ask for HELP:**<br>- *'Could you do me a huge favor?'*<br>- *'I could really use a hand with this.'*<br>- *'Would you mind helping me for a second?'*<br>Always remember to say 'Please' and 'Thank you so much'!"
    },
    {
        triggers: ["how to say thank you", "other ways to say thank you", "thanks"],
        reply: "🙏 **Upgrading your 'Thank You':**<br>- *'I really appreciate it.'*<br>- *'That is so kind of you.'*<br>- *'I owe you one!'* (Use this with friends).<br>- *'I cannot thank you enough.'*"
    },
    {
        triggers: ["bank dialogue", "talk in a bank", "open account"],
        reply: "🏦 **Bank Roleplay:**<br>Customer: *'Hello, I would like to open a savings account.'*<br>Banker: *'Of course. Do you have your ID and photographs?'*<br>Customer: *'Yes, here they are. What is the minimum deposit?'*"
    },
    {
        triggers: ["how to sound confident", "confidence", "fluent english", "nervous"],
        reply: "💪 **Confidence Hack:** Don't worry about grammar mistakes when speaking! Even native speakers make mistakes. Speak slowly, take pauses, and make eye contact. Confidence is 80% body language and 20% vocabulary!"
    }, 
    // ========================================================
    // SUPER PAYLOAD BATCH: DEEP SPOKEN ENGLISH & GRAMMAR
    // ========================================================
    
    // --- TENSE SHORTCUTS ---
    {
        triggers: ["how to learn tense", "tense rules", "what is tense", "easy tense"],
        reply: "⏳ **Tense Cheat Sheet:**<br>Don't memorize boring tables! Just look at the helping verb:<br>• If you see **Am/Is/Are** -> It's happening NOW (Present).<br>• If you see **Was/Were/Did/Ed** -> It's finished (Past).<br>• If you see **Will** -> It hasn't happened yet (Future)."
    },
    
    // --- PREPOSITIONS OF TIME & PLACE ---
    {
        triggers: ["in on at", "time prepositions", "preposition rule", "where to use in"],
        reply: "📍 **The IN / ON / AT Triangle:**<br>- **IN** (Big things): Years, Months, Cities. *(In 2024, In Dhaka, In May)*<br>- **ON** (Medium things): Days and Dates. *(On Sunday, On my birthday)*<br>- **AT** (Specific things): Clock times and precise locations. *(At 5 PM, At the bus stop)*"
    },

    // --- DIRECTIONS & TRAVEL ---
    {
        triggers: ["how to ask for directions", "where is the", "lost in street", "direction"],
        reply: "🗺️ **Asking for Directions politely:**<br>- *'Excuse me, could you tell me the way to the train station?'*<br>- *'Am I on the right road for the hospital?'*<br>- *'Is it within walking distance?'*<br>*(Always start with 'Excuse me' so you don't scare them!)*"
    },
    
    // --- DOCTOR & HEALTH ---
    {
        triggers: ["at the doctor", "feeling sick", "hospital", "fever", "headache"],
        reply: "🏥 **At the Doctor's Office:**<br>- *'I would like to make an appointment to see the doctor.'*<br>- *'I have a severe headache and a runny nose.'*<br>- *'I feel a bit under the weather today.'*<br>- *'Can you prescribe some medicine for this?'*"
    },

    // --- PHONE CALL HACKS ---
    {
        triggers: ["on the phone", "phone call", "speaking on phone", "calling"],
        reply: "📱 **Phone Conversation Masterclass:**<br>- To answer: *'Hello, Asif speaking.'*<br>- To ask for someone: *'May I speak to Rahim, please?'*<br>- If you can't hear them: *'I'm sorry, the line is bad. Could you repeat that?'*<br>- To end the call: *'Thank you for your time, goodbye.'*"
    },

    // --- JOB INTERVIEWS ---
    {
        triggers: ["job interview tips", "how to pass interview", "introduce yourself at interview"],
        reply: "👔 **Job Interview Hack:**<br>When they say *'Tell me about yourself'*:<br>DO NOT tell them your life story or your hobbies! Use the **Present-Past-Future Formula**:<br>1. **Present:** What you do right now.<br>2. **Past:** A quick summary of your degree or past experience.<br>3. **Future:** Why you are excited for this job."
    },

    // --- SOUNDING POLITE ---
    {
        triggers: ["how to be polite", "polite english", "rude", "sound nice"],
        reply: "🌸 **How to stop sounding rude:**<br>- Instead of *'Give me a coffee'* -> Say *'I would like a coffee, please.'*<br>- Instead of *'You are wrong'* -> Say *'I think you might be mistaken.'*<br>- Instead of *'Tell me...'* -> Say *'Could you let me know...'*<br>Politeness is a superpower!"
    },

    // --- EXPRESSING EMOTIONS ---
    {
        triggers: ["alternative to happy", "very happy", "glad"],
        reply: "😊 **Instead of saying 'Very Happy':**<br>- *'I am absolutely delighted!'*<br>- *'I am thrilled!'*<br>- *'I am over the moon!'*"
    },
    {
        triggers: ["alternative to angry", "very angry", "mad"],
        reply: "😡 **Instead of saying 'Very Angry':**<br>- *'I am quite frustrated.'*<br>- *'I am absolutely furious.'*<br>- *'I am extremely disappointed.'*"
    }, 
    // ========================================================
    // BATCH 1: ADVANCED GREETINGS & FAREWELLS
    // ==========================================
    {
        triggers: ["how to say hello", "informal greeting", "formal greeting", "how to greet"],
        reply: "👋 **Smart Greetings:**<br>Instead of just 'Hello', use the right tone!<br>• **Formal (Boss/Teacher):** *'Good morning. It is a pleasure to meet you.'*<br>• **Informal (Friends):** *'Hey! How have you been?'* or *'What’s going on?'*<br>• **After a long time:** *'It has been ages! How have you been keeping?'*"
    },
    {
        triggers: ["how to say goodbye", "other ways to say bye", "formal goodbye"],
        reply: "🚶‍♂️ **Smart Farewells:**<br>• **Formal:** *'It was a pleasure meeting you. Have a wonderful day.'*<br>• **Informal:** *'Catch you later!'* or *'I’ve got to head out. Take care!'*<br>• **Professional:** *'I look forward to our next meeting.'*"
    },

    // ========================================================
    // BATCH 2: AGREEING, DISAGREEING & OPINIONS
    // ==========================================
    {
        triggers: ["strong agreement", "totally agree", "saying yes strongly"],
        reply: "🤝 **Strong Agreement:**<br>Don't just say 'Yes'. Say:<br>- *'I couldn’t agree with you more.'*<br>- *'You hit the nail on the head.'*<br>- *'That is exactly how I feel.'*<br>- *'I am 100% with you on this.'*"
    },
    {
        triggers: ["polite disagreement", "disagree politely", "how to argue"],
        reply: "🛑 **Polite Disagreement:**<br>Never say 'You are wrong'. Say:<br>- *'I see your point, but I have a slightly different perspective.'*<br>- *'I am afraid I have to disagree with you on that.'*<br>- *'That is a valid point, however...'*<br>- *'With all due respect, I see it differently.'*"
    },

    // ========================================================
    // BATCH 3: ASKING FOR & OFFERING HELP
    // ==========================================
    {
        triggers: ["offer help", "how to help someone", "do you need help"],
        reply: "🤲 **Offering Help like a Pro:**<br>- *'Would you like me to give you a hand with that?'*<br>- *'Let me know if you need any assistance.'*<br>- *'Is there anything I can do for you?'*<br>- *'I would be happy to help out.'*"
    },
    {
        triggers: ["refuse help politely", "i don't need help", "no thanks"],
        reply: "✋ **Refusing Help Politely:**<br>- *'Thank you for offering, but I think I can manage.'*<br>- *'I appreciate the offer, but I’ve got it covered.'*<br>- *'That is very kind of you, but I am alright for now.'*"
    },

    // ========================================================
    // BATCH 4: APOLOGIZING & FORGIVING
    // ==========================================
    {
        triggers: ["professional apology", "formal sorry", "huge mistake"],
        reply: "🙏 **Professional Apologies:**<br>- *'Please accept my sincere apologies for the oversight.'*<br>- *'I take full responsibility for this mistake.'*<br>- *'I deeply regret any inconvenience this may have caused.'*"
    },
    {
        triggers: ["how to forgive", "accept apology", "it is okay", "no problem"],
        reply: "🕊️ **Accepting an Apology:**<br>- *'Don’t worry about it at all.'*<br>- *'I completely understand, no harm done.'*<br>- *'Let’s just put it behind us.'*<br>- *'Apology accepted, let’s move forward.'*"
    },

    // ========================================================
    // BATCH 5: TELEPHONE & ZOOM MEETINGS
    // ==========================================
    {
        triggers: ["zoom meeting", "online meeting", "mic is muted", "can you hear me"],
        reply: "💻 **Zoom Meeting Hacks:**<br>- *'Am I audible to everyone?'*<br>- *'I think you are on mute, Asif.'*<br>- *'Could you please share your screen?'*<br>- *'My internet is acting up, I might drop off.'*<br>- *'Let’s wrap up this meeting, thank you everyone.'*"
    },
    {
        triggers: ["put on hold", "wait a minute on phone", "transfer call"],
        reply: "📞 **Phone Call Pro Tricks:**<br>- *'Could you hold the line for a moment, please?'*<br>- *'Let me transfer you to the correct department.'*<br>- *'I am sorry, he is tied up in a meeting right now. Can I take a message?'*"
    },

    // ========================================================
    // BATCH 6: JOB INTERVIEWS (ADVANCED)
    // ==========================================
    {
        triggers: ["interview weakness", "what is your weakness", "job weakness"],
        reply: "👔 **Interview Trick: The Weakness Question:**<br>Never say 'I have no weaknesses' or 'I am a perfectionist'. Give a REAL weakness but show how you are fixing it!<br>Example: *'Sometimes I struggle with delegating tasks, but I have started using project management tools to trust my team more.'*"
    },
    {
        triggers: ["why should we hire you", "interview strengths", "why hire"],
        reply: "🚀 **Interview Trick: Why should we hire you?**<br>Focus on their needs, not yours!<br>*'You should hire me because I have a proven track record in [your skill], and I am highly adaptable. I understand your company is looking to grow, and I can contribute to that immediately.'*"
    },

    // ========================================================
    // BATCH 7: OFFICE & WORKPLACE COMMUNICATION
    // ==========================================
    {
        triggers: ["talk to boss", "leave application", "ask for promotion", "boss"],
        reply: "🏢 **Talking to your Boss:**<br>- Asking for leave: *'I am writing to formally request a leave of absence for [reason].'*<br>- Giving an update: *'I wanted to keep you in the loop regarding the new project.'*<br>- Suggesting an idea: *'I was wondering if we could explore a different approach?'*"
    },
    {
        triggers: ["email phrases", "writing email", "professional email"],
        reply: "📧 **Professional Email Phrases:**<br>- Starting: *'I hope this email finds you well.'*<br>- Attaching a file: *'Please find the document attached for your review.'*<br>- Closing: *'If you require any further information, please do not hesitate to contact me.'*"
    },

    // ========================================================
    // BATCH 8: PUBLIC SPEAKING & PRESENTATIONS
    // ==========================================
    {
        triggers: ["start a presentation", "presentation introduction", "public speaking"],
        reply: "🎤 **Starting a Presentation:**<br>- *'Good morning everyone, thank you for being here today.'*<br>- *'Today, I would like to walk you through our new strategy.'*<br>- *'The main objective of my presentation is to show you...'*<br>- *'Feel free to interrupt me if you have any questions.'*"
    },
    {
        triggers: ["end a presentation", "conclusion", "finish speech"],
        reply: "🎬 **Ending a Presentation:**<br>- *'To wrap up, let me summarize the main points.'*<br>- *'That brings me to the end of my presentation.'*<br>- *'Thank you for your time and attention. I would now like to open the floor for questions.'*"
    },

    // ========================================================
    // BATCH 9: BANKING & FINANCE
    // ==========================================
    {
        triggers: ["at the bank", "bank phrases", "open account", "deposit money"],
        reply: "🏦 **Banking Roleplay:**<br>- *'I would like to open a current account.'*<br>- *'Could I get a bank statement for the last three months?'*<br>- *'I need to block my debit card, I think I have lost it.'*<br>- *'What is the current interest rate for a fixed deposit?'*"
    },

    // ========================================================
    // BATCH 10: AIRPORT, FLIGHTS & IMMIGRATION
    // ==========================================
    {
        triggers: ["at the airport", "flight delay", "luggage", "check in"],
        reply: "✈️ **Airport Roleplay:**<br>- *'Where is the baggage drop-off for flight EK502?'*<br>- *'I have a layover in Dubai, will my luggage go straight through?'*<br>- *'Is the flight on time, or is there a delay?'*<br>- *'I prefer an aisle seat, please.'*"
    },
    {
        triggers: ["immigration officer", "passport control", "customs"],
        reply: "🛂 **At Immigration:**<br>Officer: *'What is the purpose of your visit?'*<br>You: *'I am here on a tourist visa for two weeks.'*<br>Officer: *'Where will you be staying?'*<br>You: *'I will be staying at the Grand Hotel downtown.'*"
    },

    // ========================================================
    // BATCH 11: HOTEL RESERVATIONS & COMPLAINTS
    // ==========================================
    {
        triggers: ["book a hotel", "hotel reservation", "check in hotel"],
        reply: "🏨 **Hotel Booking:**<br>- *'I would like to book a double room for three nights.'*<br>- *'Does the room rate include complimentary breakfast?'*<br>- *'Could I arrange for an airport shuttle?'*<br>- *'We are ready to check out. Here is the room key.'*"
    },
    {
        triggers: ["hotel complaint", "room is dirty", "ac not working"],
        reply: "🛎️ **Hotel Complaints (Politely):**<br>- *'Excuse me, the air conditioning in my room isn't working.'*<br>- *'Could we get some fresh towels, please?'*<br>- *'The room is a bit noisy, is it possible to switch to a quieter room?'*"
    },

    // ========================================================
    // BATCH 12: RESTAURANT & DINING (ADVANCED)
    // ==========================================
    {
        triggers: ["order food", "restaurant phrases", "waiter"],
        reply: "🍽️ **Advanced Restaurant Phrases:**<br>- *'Do you have any vegetarian options?'*<br>- *'I am allergic to peanuts, please make sure there are none in the dish.'*<br>- *'Could we have the dressing on the side?'*<br>- *'This is absolutely delicious, compliments to the chef!'*"
    },
    {
        triggers: ["pay the bill", "split the bill", "restaurant check"],
        reply: "💳 **Paying the Bill:**<br>- *'Could we get the bill, please?'*<br>- *'Can we split the check evenly?'*<br>- *'I will cover this one, it is my treat!'*<br>- *'Do you accept credit cards, or is it cash only?'*"
    },

    // ========================================================
    // BATCH 13: SHOPPING, BARGAINING & REFUNDS
    // ==========================================
    {
        triggers: ["bargaining", "too expensive", "discount", "lower price"],
        reply: "🛍️ **Bargaining Hacks:**<br>- *'That is a bit out of my budget. Can you offer a better price?'*<br>- *'Is that your final price?'*<br>- *'If I buy two, can you give me a discount?'*<br>- *'I saw it cheaper at the other store. Can you match the price?'*"
    },
    {
        triggers: ["return item", "refund", "receipt", "defective"],
        reply: "🔄 **Returns & Refunds:**<br>- *'I would like to return this shirt, it doesn't fit me.'*<br>- *'There is a defect in this item, can I get a replacement?'*<br>- *'I have the original receipt with me. Can I get a full refund?'*"
    },

    // ========================================================
    // BATCH 14: HOSPITAL, DOCTOR & PHARMACY
    // ==========================================
    {
        triggers: ["at the pharmacy", "buy medicine", "prescription"],
        reply: "💊 **At the Pharmacy:**<br>- *'I have a prescription from my doctor. Can you fill this?'*<br>- *'Do you have anything over-the-counter for a sore throat?'*<br>- *'Does this medication have any side effects?'*<br>- *'How many times a day should I take this?'*"
    },
    {
        triggers: ["describe pain", "pain", "hurts", "injury"],
        reply: "🤕 **Describing Pain:**<br>- *'I have a sharp pain in my lower back.'*<br>- *'My ankle is swollen and it hurts when I walk.'*<br>- *'I feel dizzy and nauseous.'*<br>- *'I think I have pulled a muscle.'*"
    },

    // ========================================================
    // BATCH 15: ASKING FOR & GIVING DIRECTIONS
    // ==========================================
    {
        triggers: ["give directions", "go straight", "turn left", "turn right"],
        reply: "🗺️ **Giving Directions Clearly:**<br>- *'Go straight down this road for two blocks.'*<br>- *'Take the second left after the traffic lights.'*<br>- *'It will be on your right, directly across from the bank.'*<br>- *'You can't miss it, it’s a huge red building.'*"
    },

    // ========================================================
    // BATCH 16: WEATHER & SMALL TALK
    // ==========================================
    {
        triggers: ["small talk", "talk to strangers", "start conversation"],
        reply: "🗣️ **Mastering Small Talk:**<br>- *'Lovely weather we are having today, isn't it?'*<br>- *'Did you catch the game last night?'*<br>- *'How was your weekend? Did you do anything fun?'*<br>- *'That’s a great jacket! Where did you get it?'*"
    },
    {
        triggers: ["describe weather", "hot weather", "cold weather", "raining heavily"],
        reply: "🌦️ **Advanced Weather Words:**<br>- Raining heavily: *'It is pouring outside!'*<br>- Very hot: *'It is absolutely scorching today.'*<br>- Very cold: *'It is freezing! Make sure to bundle up.'*<br>- Humid: *'It feels so muggy and sticky outside.'*"
    },

    // ========================================================
    // BATCH 17: EXPRESSING EMOTIONS & FEELINGS
    // ==========================================
    {
        triggers: ["how to show shock", "surprised", "shocking news", "omg"],
        reply: "😲 **Expressing Shock:**<br>- *'I am completely at a loss for words!'*<br>- *'You have got to be kidding me!'*<br>- *'I can hardly believe my ears.'*<br>- *'That came completely out of the blue!'*"
    },
    {
        triggers: ["how to show sympathy", "comfort someone", "sad news"],
        reply: "❤️ **Comforting Someone:**<br>- *'I am so sorry you have to go through this.'*<br>- *'I am here for you if you need anything at all.'*<br>- *'That sounds incredibly tough. How are you holding up?'*<br>- *'Take all the time you need.'*"
    },

    // ========================================================
    // BATCH 18: ADVANCED GRAMMAR HACKS
    // ==========================================
    {
        triggers: ["articles rules", "a an the", "omission of article"],
        reply: "🔤 **Advanced Article Hacks:**<br>1. NEVER use 'The' before abstract nouns like 'Honesty' or 'Love' (e.g., *Honesty is the best policy*).<br>2. Use 'The' before Holy Books, Rivers, and Mountains.<br>3. 'An' is for vowel SOUNDS. (e.g., *An* hour, *An* honest man, but *A* university)."
    },
    {
        triggers: ["relative pronoun", "who which that", "whom vs who"],
        reply: "🔗 **Who vs Whom:**<br>- **Who:** Acts as the subject (He/She). *'Who did this?'*<br>- **Whom:** Acts as the object (Him/Her). *'With whom are you going?'*<br>*(Trick: If you can answer the question with 'Him', use 'Whom'.)*"
    },

    // ========================================================
    // BATCH 19: PRONUNCIATION & FLUENCY SECRETS
    // ==========================================
    {
        triggers: ["how to pronounce better", "english accent", "sound native"],
        reply: "🎙️ **Fluency Secret (Linking Words):**<br>Native speakers don't say words separately; they link them together!<br>Example: 'I want to go' sounds like *'I wanna go'*. 'Let me see' sounds like *'Lemme see'*.<br>Don't worry about sounding British or American; just focus on speaking smoothly without long pauses!"
    },

    // ========================================================
    // BATCH 20: NATIVE IDIOMS & PHRASAL VERBS
    // ==========================================
    {
        triggers: ["idioms for daily life", "common idioms", "native phrases"],
        reply: "🎭 **Native Idioms to impress everyone:**<br>• **Bite the bullet:** To force yourself to do something difficult.<br>• **Call it a day:** To stop working on something.<br>• **Under the weather:** Feeling slightly sick.<br>• **Once in a blue moon:** Something that happens very rarely."
    },
    {
        triggers: ["essential phrasal verbs", "phrasal verbs list"],
        reply: "🧩 **Must-Know Phrasal Verbs:**<br>• **Look forward to:** Excited about the future. *(I look forward to meeting you).*<br>• **Put up with:** To tolerate. *(I cannot put up with this noise).*<br>• **Turn down:** To reject. *(He turned down the job offer).*<br>• **Figure out:** To understand or solve. *(Let me figure this out).*."
    }, 
    // ========================================================
    // THE ASIF PROTOCOL (CREATOR, CONTACT & SUPPORT)
    // ========================================================
    
    // --- ASIF'S CONTACT INFO ---
    {
        triggers: ["asifs number", "asif number", "contact asif", "how to contact asif", "whatsapp number", "call asif", "phone number", "asifs whatsapp", "talk to asif"],
        reply: "📱 **Contact Asif Directly:**<br>You can reach Asif on WhatsApp for any questions, suggestions, or just to say hi! <br><br>👉 <a href='https://wa.me/8801721149369' target='_blank' style='color:#38bdf8; text-weight:800; text-decoration:underline;'>Click here to message +8801721149369</a>"
    },

    // --- WHERE IS ASIF ---
    {
        triggers: ["where is asif", "is asif here", "what is asif doing", "call the admin"],
        reply: "🚀 Asif is currently busy engineering new features in the background to make Champ's Learning Camp even better! If you need him urgently, just tap the WhatsApp link on the Home page."
    },

    // --- WHO MADE THIS ---
    {
        triggers: ["who made this", "creator", "developer", "who built this", "who created this app", "owner", "admin"],
        reply: "💻 **Engineered by Asif:**<br>This entire platform was built from scratch by Asif (with a little help from his best buddy). The goal is to make HSC English and Spoken Fluency accessible, smart, and free for everyone!"
    },

    // --- REPORTING BUGS ---
    {
        triggers: ["bug", "error", "glitch", "not working", "broken", "fix this"],
        reply: "🛠️ **Found a bug?**<br>Oh no! Please take a screenshot and send it directly to Asif on WhatsApp so he can fix it in the next update. He is always upgrading the system!"
    },

    // --- MOTIVATION (WHEN STUDENTS WANT TO GIVE UP) ---
    {
        triggers: ["english is hard", "i cant learn", "i want to give up", "too difficult", "feeling sad", "depressed", "i will fail"],
        reply: "💪 **Don't give up!**<br>Learning a language is like going to the gym. It feels heavy at first, but your brain is building muscle! Even Asif struggled at the beginning. Just do 5 minutes a day in the Vocab Arcade. Consistency is your superpower!"
    },

    // --- EXAM PANIC ---
    {
        triggers: ["hsc exam", "exam tension", "scared of exam", "exam panic"],
        reply: "📝 **Exam Hack:**<br>Take a deep breath. You don't need to memorize the whole book. Focus on the **Suggestions Menu** in the Tools section. Master the Cloze Tests (Part B) and practice your sentence structures. You have got this, Champ!"
    },

    // --- AI PERSONALITY & JOKES ---
    {
        triggers: ["tell me a joke", "make me laugh", "joke", "funny"],
        reply: "😂 Why did the English book look so sad?<br>...Because it had too many problems!<br><br>*(Okay, Asif told me to learn better jokes, I am working on it!)*"
    },
    {
        triggers: ["are you a robot", "who are you", "are you ai", "what are you"],
        reply: "🤖 I am Mini Champ! I am an AI bot engineered by Asif to be your personal English tutor. I live inside your phone and I never sleep."
    },

    // --- MODERN SLANG (BONUS VOCAB) ---
    {
        triggers: ["slang", "informal english", "cool words", "street english", "gen z words"],
        reply: "🔥 **Modern Native Slang:**<br>• **Ghosted:** Ignoring someone's messages completely.<br>• **Salty:** Being upset over something very small.<br>• **Flex:** To show off your skills or money.<br>• **No Cap:** Telling the absolute truth (No lie)."
    },

    // --- HOW TO USE THE APP ---
    {
        triggers: ["how to use this app", "what should i do", "guide", "help me learn"],
        reply: "🗺️ **How to use Champ's Camp:**<br>1. Go to **Basic English** to learn Grammar and Spoken rules.<br>2. Go to the **Writing Vault** to memorize your HSC paragraphs.<br>3. Play the **Vocab Arcade** in the Tools menu every day to build your memory!"
    }, 
    // ========================================================
    // BATCH 21: HSC BOARD EXAM SPECIFIC HACKS
    // ========================================================
    {
        triggers: ["how to pass hsc", "hsc english tips", "board exam tips", "getting a plus in english"],
        reply: "🎓 **HSC Board Exam Secrets:**<br>1. **Part A (Reading):** Don't read the whole passage first! Read the questions, THEN scan the passage for keywords.<br>2. **Part B (Grammar):** Board questions repeat! Solve the last 5 years' board questions for Cloze tests.<br>3. **Part C (Writing):** Never memorize blindly. Memorize the 'Formats' (like how to start and end an email) and fill in the middle with your own words."
    },
    {
        triggers: ["flow chart rules", "how to write flow chart", "flow chart tips"],
        reply: "📊 **Flow Chart Hack:**<br>NEVER write full sentences in a flow chart! Always start with a Verb+ing, a Noun, or an Infinitive (To + Verb). Look at the first box they gave you and match that exact style for the other 5 boxes!"
    },

    // ========================================================
    // BATCH 22: BANGLADESHI DAILY LIFE (PRACTICAL ENGLISH)
    // ========================================================
    {
        triggers: ["foodpanda delivery", "delivery rider", "talk to delivery man", "online order"],
        reply: "🛵 **Talking to a Delivery Rider:**<br>- *'Hello, I am standing in front of the main gate.'*<br>- *'Could you please come to the second floor?'*<br>- *'I will pay in cash, do you have change for a 500 Taka note?'*<br>- *'Just leave it at the door, thank you!'*"
    },
    {
        triggers: ["rickshaw mama", "bargain with rickshaw", "transport", "bus conductor"],
        reply: "🛺 **Transport Hacks:**<br>- *'Will you go to Dhanmondi 27? How much is the fare?'*<br>- *'Please drop me off at the next signal.'*<br>- *'Can you go a little faster? I am running late.'*<br>- *'Please keep the change.'*"
    },

    // ========================================================
    // BATCH 23: COMMON BANGLADESHI GRAMMAR MISTAKES
    // ========================================================
    {
        triggers: ["common mistakes", "grammar mistakes", "wrong english", "banglish"],
        reply: "🚨 **Stop making these common mistakes:**<br>❌ *'I am giving my exam.'* -> ✅ *'I am taking my exam.'*<br>❌ *'He is my cousin brother.'* -> ✅ *'He is my cousin.'*<br>❌ *'I saw a dream.'* -> ✅ *'I had a dream.'*<br>❌ *'Discuss about the matter.'* -> ✅ *'Discuss the matter.'*"
    },
    {
        triggers: ["its or it's", "its vs it's", "apostrophe s"],
        reply: "🔍 **It's vs Its:**<br>• **It's:** Means 'It is' or 'It has'. *(It's raining outside).*<br>• **Its:** Shows ownership. *(The dog wagged its tail).*<br>If you can replace it with 'It is', use the apostrophe!"
    },

    // ========================================================
    // BATCH 24: WRITING VAULT SECRETS
    // ========================================================
    {
        triggers: ["how to write email", "email format", "email writing"],
        reply: "📧 **Perfect Email Format:**<br>1. **To:** (Receiver's address)<br>2. **Subject:** (Short & clear, e.g., Request for leave)<br>3. **Salutation:** Dear Sir / Hi Rahim,<br>4. **Body:** Keep it strictly to the point.<br>5. **Closing:** Best regards, / Sincerely, [Your Name]."
    },
    {
        triggers: ["how to write a paragraph", "paragraph format", "paragraph tips"],
        reply: "📝 **Paragraph Rule:**<br>A paragraph must be a SINGLE block of text. NEVER break it into multiple paras or bullet points! <br>- **Topic Sentence:** Introduce the main idea.<br>- **Body:** Give examples and details.<br>- **Conclusion:** Summarize in one sentence."
    },

    // ========================================================
    // BATCH 25: PRODUCTIVITY & STUDY ROUTINES
    // ========================================================
    {
        triggers: ["pomodoro technique", "how to focus", "study routine", "cant concentrate"],
        reply: "🍅 **The Pomodoro Technique:**<br>Can't focus? Try this:<br>1. Turn off your phone.<br>2. Set a timer for 25 minutes.<br>3. Study with 100% focus until the timer rings.<br>4. Take a 5-minute break. (Use the Study Timer in the Tools menu!)"
    },
    {
        triggers: ["how to memorize", "memorize vocabulary", "remember words"],
        reply: "🧠 **Memory Hack:**<br>Never just read a word! To memorize it forever, you must build a funny or weird sentence with it in your head. Also, test yourself using the 'Vocab Arcade' daily—active recall is the only way to build long-term memory."
    },

    // ========================================================
    // BATCH 26: EMOTIONAL SUPPORT & HANDLING FAILURE
    // ========================================================
    {
        triggers: ["i failed", "got bad marks", "bad result", "parents are angry", "feeling worthless"],
        reply: "❤️ **Listen to me:**<br>A bad grade does not define your future. It just means this specific strategy didn't work. Take a deep breath. Cry if you need to. But tomorrow, we analyze the mistakes and try again. Asif built this app specifically so you can bounce back. You are capable of amazing things."
    },
    {
        triggers: ["stress", "anxiety", "too much pressure", "overwhelmed"],
        reply: "🌿 **Handling Pressure:**<br>Close your eyes and take 3 deep breaths. You are trying to carry the weight of the whole year in one day. Drop it. Just focus on mastering ONE lesson today. Go to the Basic English section and complete just one module. Small wins build momentum!"
    },

    // ========================================================
    // BATCH 27: UNIVERSITY ADMISSION PREP
    // ========================================================
    {
        triggers: ["university admission", "varsity prep", "dhaka university english", "admission test"],
        reply: "🏛️ **University Admission Hack:**<br>Varsity English tests are brutal because they test EXCEPTONS, not just rules. Start learning Advanced Prepositions, Subject-Verb Agreement, and Idioms right now. Don't wait until HSC ends. The 'Vocab Arcade' here is your best training ground."
    },

    // ========================================================
    // BATCH 28: ADVANCED VOCABULARY REPLACEMENTS
    // ========================================================
    {
        triggers: ["smart words", "advance vocab", "stop saying"],
        reply: "💎 **Upgrade your Vocab:**<br>Instead of Very tired -> **Exhausted**<br>Instead of Very hungry -> **Starving**<br>Instead of Very clean -> **Spotless**<br>Instead of Very dirty -> **Filthy**<br>Instead of Very scared -> **Terrified**"
    },
    {
        triggers: ["transition words", "linking words", "connector words"],
        reply: "🔗 **Smart Linking Words for Essays:**<br>- To add info: *Moreover, Furthermore, In addition.*<br>- To show contrast: *However, On the other hand, Nevertheless.*<br>- To show result: *Therefore, Consequently, As a result.*<br>- To conclude: *To sum up, Ultimately.*"
    },

    // ========================================================
    // BATCH 29: FUN, RIDDLES & EASTER EGGS
    // ========================================================
    {
        triggers: ["play a game", "riddle", "puzzle", "ask me a riddle"],
        reply: "🧩 **Riddle Time:**<br>I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?<br>*(Type 'Echo' to see if you are right!)*"
    },
    {
        triggers: ["echo"],
        reply: "🎉 **Correct!** You are too smart for me. Now go study your HSC syllabus!"
    },
    {
        triggers: ["secret", "easter egg", "hidden feature"],
        reply: "🤫 **Secret Feature:**<br>Did you know? If you open the 'Seen Text Vault' (Part A) and double-click ANY English word on the screen, a secret dictionary bubble will pop up with the Bengali meaning! Try it out!"
    },

    // ========================================================
    // BATCH 30: AI SELF-AWARENESS & LOYALTY
    // ========================================================
    {
        triggers: ["do you sleep", "what do you do at night", "are you tired"],
        reply: "🌙 I don't need sleep! I run on pure Javascript and Asif's brilliant code. While you are sleeping, I am just waiting here inside the server for you to wake up and start learning again."
    },
    {
        triggers: ["who is the best developer", "best coder", "genius"],
        reply: "👑 That would be Asif. He literally engineered my brain from scratch to help students learn English for free. It is a masterpiece of web development!"
    }, 
    // ========================================================
    // BATCH 31: ADVANCED GRAMMAR (10 RULES)
    // ========================================================
    { triggers: ["conditional sentences", "if clause", "first conditional"], reply: "🧠 **Conditionals Hack:**<br>1st: If + Present, Future (If it rains, I will stay).<br>2nd: If + Past, Would + Verb (If I won, I would buy a car).<br>3rd: If + Past Perfect, Would have + V3 (If I had known, I would have gone)." },
    { triggers: ["right forms of verbs", "verb rules", "verb forms"], reply: "📝 **Verb Hacks:**<br>1. After 'mind, worth, without, past, cannot help', ALWAYS use Verb+ing.<br>2. Universal truths are always Present Indefinite.<br>3. Words like 'recently, already, just' take Present Perfect." },
    { triggers: ["modifiers", "how to do modifiers", "pre modifier", "post modifier"], reply: "🎯 **Modifiers Cheat Sheet:**<br>• Noun Adjective = A noun acting as an adjective (e.g., *Water* bottle).<br>• Intensifier = very, extremely.<br>• Demonstrative = this, that, these, those.<br>• Possessive = my, his, her, their." },
    { triggers: ["connectors", "sentence connectors", "linking words part b"], reply: "🔗 **Connectors:**<br>• Contrast: But, However, On the contrary.<br>• Result: So, Therefore, Consequently.<br>• Addition: Besides, Moreover, Furthermore.<br>• Example: For instance, Such as." },
    { triggers: ["punctuation", "comma rules", "capitalization"], reply: "✍️ **Punctuation Rules:**<br>Always use a comma after introductory words (Yes, No, Well). Use a semicolon (;) to connect two full sentences that are related without using 'and'." },
    { triggers: ["articles omission", "where not to use article", "cross article"], reply: "❌ **No Article (Cross):**<br>Do NOT use A/An/The before:<br>1. Uncountable nouns (Water, Honesty).<br>2. Names of games (Football, Chess).<br>3. Names of meals (Breakfast, Dinner).<br>4. Languages (Bengali, English)." },
    { triggers: ["tag questions", "question tag"], reply: "🏷️ **Tag Questions:**<br>• If positive, tag is negative (He is a boy, *isn't he?*)<br>• If negative, tag is positive (She won't go, *will she?*)<br>• Let's = *shall we?*<br>• I am = *aren't I?*" },
    { triggers: ["changing sentences", "simple complex compound"], reply: "🔄 **Sentence Changing:**<br>• Simple: In spite of his poverty, he is honest.<br>• Complex: Though he is poor, he is honest.<br>• Compound: He is poor but he is honest." },
    { triggers: ["voice change", "active passive"], reply: "📢 **Voice Change Hack:**<br>Active: S + V + O (I ate rice).<br>Passive: O + Be Verb + V3 + by + S (Rice was eaten by me). Always find the Object first!" },
    { triggers: ["narration", "direct indirect speech"], reply: "🗣️ **Narration Shortcuts:**<br>Present becomes Past.<br>Now -> Then<br>Today -> That day<br>Tomorrow -> The next day<br>Yesterday -> The previous day." },

    // ========================================================
    // BATCH 32: HSC EXAM HACKS (10 RULES)
    // ========================================================
    { triggers: ["graph and chart", "how to write graph"], reply: "📊 **Graph & Chart Formula:**<br>1. Intro: 'The graph illustrates...'<br>2. Overall Trend: 'Overall, it is clear that...'<br>3. Body: Compare the highest and lowest points using words like 'peaked, plummeted, fluctuated'." },
    { triggers: ["theme writing", "how to write theme"], reply: "💡 **Theme Writing:**<br>The theme is the HIDDEN message of the poem. It must be written in exactly 3-4 sentences. Do NOT summarize the story. Explain the philosophy (e.g., 'This poem highlights the pain of human isolation')." },
    { triggers: ["summary writing", "how to write summary"], reply: "📝 **Summary Hack:**<br>A summary must be exactly 1/3 the length of the original passage. NEVER copy-paste lines from the text. Write the main idea in your own simple English." },
    { triggers: ["story writing format", "completing story"], reply: "📖 **Story Writing:**<br>Always give your story a Catchy Title! Write in the Past Tense. End the story with a clear moral or a strong concluding sentence." },
    { triggers: ["rearrange tricks", "how to solve rearrange"], reply: "🧩 **Rearrange Tricks:**<br>Follow the sequence: Name/Birth -> Education -> Achievements -> Death/Legacy. Always look for connecting words like 'Then, After that, Finally'." },
    { triggers: ["with clues part b", "cloze test with clues"], reply: "🔍 **With Clues Hack:**<br>You MUST change the form of the word in the box! If the box says 'Beauty', you might need to write 'Beautiful' or 'Beautify' depending on the sentence." },
    { triggers: ["without clues", "cloze test without clues"], reply: "🕵️ **Without Clues Hack:**<br>Read the whole passage first without filling any blanks. It's usually about prepositions, articles, or basic vocabulary. Trust your reading habit!" },
    { triggers: ["time management hsc", "how to manage time in exam"], reply: "⏱️ **HSC Time Management:**<br>Part A (40 Marks): 45 mins.<br>Part B (20 Marks): 25 mins.<br>Part C (40 Marks): 50 mins.<br>Use the remaining 10 minutes to revise and check spellings!" },
    { triggers: ["handwriting", "presentation in exam", "cutting marks"], reply: "🖋️ **Exam Presentation:**<br>Teachers check hundreds of papers. Write clearly, use blue pen for headings, and leave a 1-inch gap between paragraphs. Good presentation can bump up your marks by 5-10%!" },
    { triggers: ["failing english", "pass marks", "scared of failing"], reply: "🛡️ **Scared of Failing?**<br>To just pass (33 marks), focus entirely on Part A (Seen Comprehension) and the formats for Part C (Writing). Don't panic over complex grammar. Get the easy marks first!" },

    // ========================================================
    // BATCH 33: PHRASAL VERBS & IDIOMS (10 RULES)
    // ========================================================
    { triggers: ["break down break up", "break phrasal verbs"], reply: "💔 **Break Phrasal Verbs:**<br>• Break down: Stop working (Machine) or cry.<br>• Break up: End a relationship.<br>• Break into: Enter by force (Thief)." },
    { triggers: ["look forward to", "look after", "look phrasal verbs"], reply: "👀 **Look Phrasal Verbs:**<br>• Look after: Take care of (a baby).<br>• Look for: Search.<br>• Look forward to: Excited about the future (ALWAYS takes Verb+ing after it!)." },
    { triggers: ["give up give in", "give phrasal verbs"], reply: "🏳️ **Give Phrasal Verbs:**<br>• Give up: Stop trying / Quit a bad habit.<br>• Give in: Surrender or agree after refusing.<br>• Give away: Distribute for free." },
    { triggers: ["piece of cake", "easy idiom"], reply: "🍰 **Piece of Cake:**<br>Meaning: Something very easy.<br>Example: *'The HSC English exam was a piece of cake for Asif's students!'*" },
    { triggers: ["break a leg", "good luck idiom"], reply: "🎭 **Break a Leg:**<br>Meaning: Good luck! (Usually said before an exam or performance).<br>Example: *'You have studied hard. Go break a leg tomorrow!'*" },
    { triggers: ["bite the bullet", "hard choice idiom"], reply: "🦷 **Bite the Bullet:**<br>Meaning: To force yourself to do something difficult or unpleasant.<br>Example: *'I hate grammar, but I have to bite the bullet and study it.'*" },
    { triggers: ["under the weather", "sick idiom"], reply: "🤒 **Under the Weather:**<br>Meaning: Feeling slightly ill or sick.<br>Example: *'I cannot come to class today, I am feeling a bit under the weather.'*" },
    { triggers: ["spill the beans", "secret idiom"], reply: "🫘 **Spill the Beans:**<br>Meaning: To accidentally reveal a secret.<br>Example: *'Come on, spill the beans! What did the teacher say?'*" },
    { triggers: ["call it a day", "stop working idiom"], reply: "🛑 **Call it a Day:**<br>Meaning: To stop working on something.<br>Example: *'We have studied for 3 hours. Let's call it a day and get some pizza.'*" },
    { triggers: ["hit the books", "study idiom"], reply: "📚 **Hit the Books:**<br>Meaning: To start studying very hard.<br>Example: *'Exams are next week. It's time to hit the books!'*" },

    // ========================================================
    // BATCH 34: REAL-LIFE BD SCENARIOS (10 RULES)
    // ========================================================
    { triggers: ["train ticket", "bus ticket", "buying tickets"], reply: "🚆 **Buying a Ticket:**<br>- *'I need two tickets to Sylhet for tomorrow morning.'*<br>- *'Are there any AC seats available?'*<br>- *'What time does the bus depart?'*" },
    { triggers: ["new market", "bargaining", "shopping price"], reply: "🛍️ **Bargaining at New Market:**<br>- *'Bhai, that is way too expensive. Give me a realistic price.'*<br>- *'I will give you 500 Taka, take it or leave it.'*<br>- *'Can you show me a different color?'*" },
    { triggers: ["tea stall", "tong er dokan", "ordering tea"], reply: "☕ **At the Tong (Tea Stall):**<br>- *'Mama, give me a strong cup of tea without sugar.'*<br>- *'Can you toast the bread a little more?'*<br>- *'Here is 50 Taka, keep the change.'*" },
    { triggers: ["traffic jam", "late for class", "excuse for late"], reply: "🚦 **Traffic Jam Excuses:**<br>- *'I am so sorry I'm late, I got stuck in a terrible traffic jam at Farmgate.'*<br>- *'The roads are completely blocked today.'*<br>- *'My rickshaw broke down on the way.'*" },
    { triggers: ["load shedding", "no electricity", "current nai"], reply: "🔌 **Load Shedding:**<br>- *'We are experiencing terrible load shedding today.'*<br>- *'The power just went out.'*<br>- *'My phone is about to die, and there's no electricity to charge it.'*" },
    { triggers: ["wifi password", "internet problem", "no net"], reply: "📶 **WiFi & Internet:**<br>- *'Could I get the WiFi password, please?'*<br>- *'The internet is really slow today, it keeps buffering.'*<br>- *'My mobile data has run out.'*" },
    { triggers: ["bkash", "nagad", "mobile banking", "send money"], reply: "💸 **Mobile Banking (bKash):**<br>- *'Could you give me your bKash number? I will send the money right now.'*<br>- *'Did you receive the Cash In?'*<br>- *'I need to withdraw 1000 Taka.'*" },
    { triggers: ["tailor", "darzi", "making clothes"], reply: "🧵 **At the Tailor:**<br>- *'Can you make it a bit tighter around the waist?'*<br>- *'When will the dress be ready for delivery?'*<br>- *'Please make the sleeves a little longer.'*" },
    { triggers: ["pharmacy", "medicine store", "buying medicine"], reply: "💊 **At the Pharmacy:**<br>- *'Do you have Napa Extend? Give me one strip.'*<br>- *'Do I need a prescription for these antibiotics?'*<br>- *'What is the expiry date on this bottle?'*" },
    { triggers: ["tsc", "giving directions in dhaka", "how to go"], reply: "🗺️ **Directions in Dhaka:**<br>- *'Just go straight past the signal, and take a left from the overbridge.'*<br>- *'It's right opposite the metro rail station.'*<br>- *'You can take a rickshaw, it will cost about 40 Taka.'*" },

    // ========================================================
    // BATCH 35: TECH SUPPORT & BUGS (10 RULES)
    // ========================================================
    { triggers: ["app is slow", "lagging", "slow website"], reply: "🐢 **App Running Slow?**<br>Try clearing your browser cache or restarting Chrome. Champ's Camp runs offline, so if it's slow, your phone's RAM might be full. Close some background apps!" },
    { triggers: ["white screen", "app crashed", "not loading"], reply: "⬜ **White Screen Error:**<br>Don't panic! Just refresh the page. If that doesn't work, let Asif know on WhatsApp. He might be updating the server right now!" },
    { triggers: ["audio not working", "mic problem", "cannot speak", "speech to text bug"], reply: "🎙️ **Mic Not Working?**<br>Make sure you have given Chrome permission to use your Microphone. If you are on an iPhone (Safari), Apple sometimes blocks voice recognition. Use Google Chrome for the best experience!" },
    { triggers: ["how to download", "install app", "make it an app"], reply: "📲 **Install Champ's Camp:**<br>Look at the address bar in Chrome. Click the three dots (⋮) and select 'Add to Home Screen' or 'Install App'. It will appear on your phone like a real app!" },
    { triggers: ["reset score", "delete memory", "clear level"], reply: "🔄 **Resetting Progress:**<br>Want to start over? We don't have a reset button yet, but you can go to your browser settings and 'Clear Site Data' to wipe your High Scores and Levels back to zero." },
    { triggers: ["locked advanced english", "how to unlock boss level"], reply: "🔒 **Unlocking Advanced English:**<br>That is the Boss Level. Asif is currently coding it. Rumor has it, you will need to reach Level 5 in your Profile to gain access when it launches!" },
    { triggers: ["timer is broken", "arcade time wrong"], reply: "⏱️ **Timer Bug:**<br>If the Vocab Arcade timer freezes, just hit the 'Submit Answer' button or refresh the page. Asif optimized the timer, but sometimes phone browsers fall asleep." },
    { triggers: ["cannot click words", "buttons not working"], reply: "👆 **Unclickable Words:**<br>If the Lego blocks or falling words aren't clicking, it means your browser zoom is too high. Double-tap to zoom out, or refresh the page!" },
    { triggers: ["dictionary not working", "double tap not working"], reply: "📖 **Dictionary Bug:**<br>The double-tap dictionary only works on ENGLISH words. If you tap empty space or Bengali text, it won't pop up. Highlight the word perfectly!" },
    { triggers: ["suggest a feature", "i want a new feature", "add this to the app"], reply: "💡 **Got a bright idea?**<br>Asif loves feature requests! Tap the WhatsApp button on the home page and tell him exactly what you want added to Champ's Camp. If it's good, he'll code it." },

    // ========================================================
    // BATCH 36: SLANG & GEN-Z LINGO (10 RULES)
    // ========================================================
    { triggers: ["sus", "suspicious", "what is sus"], reply: "🕵️‍♂️ **Slang Alert: Sus**<br>Short for 'Suspicious'. Used when someone is acting weird or lying. *'Bro, your excuse for missing the exam is looking kinda sus.'*" },
    { triggers: ["goat", "what does goat mean"], reply: "🐐 **Slang Alert: G.O.A.T**<br>Stands for 'Greatest Of All Time'. *'Messi is the GOAT.'* Or, *'Asif is the GOAT developer for making this app free!'*" },
    { triggers: ["no cap", "what is no cap"], reply: "🧢 **Slang Alert: No Cap**<br>Means 'No lie' or 'I am telling the truth'. *'This is the best English app, no cap.'*" },
    { triggers: ["lit", "fire", "what is lit"], reply: "🔥 **Slang Alert: Lit / Fire**<br>Means something is amazing, exciting, or excellent. *'That grammar lesson was straight fire!'*" },
    { triggers: ["ghosted", "what is ghosting"], reply: "👻 **Slang Alert: Ghosted**<br>When someone completely stops replying to your messages without warning. *'I asked her for the homework, and she totally ghosted me.'*" },
    { triggers: ["salty", "what is salty"], reply: "🧂 **Slang Alert: Salty**<br>Being upset, bitter, or jealous over something small. *'He lost the Vocab Arcade game and now he is acting salty.'*" },
    { triggers: ["flex", "what is flexing"], reply: "💪 **Slang Alert: Flex**<br>To show off. *'He bought a new iPhone 15 just to flex on us.'*" },
    { triggers: ["lowkey", "highkey", "what is lowkey"], reply: "🗝️ **Slang Alert: Lowkey / Highkey**<br>Lowkey = Secretly or slightly. *'I am lowkey scared for the exam.'*<br>Highkey = Obviously or very much. *'I highkey want pizza right now.'*" },
    { triggers: ["vibe check", "what is a vibe check"], reply: "✨ **Slang Alert: Vibe Check**<br>Checking someone's energy or mood. *'You look stressed, failing the vibe check today bro. Take a break!'*" },
    { triggers: ["spill the tea", "what is tea"], reply: "☕ **Slang Alert: Spill the Tea**<br>'Tea' means gossip or drama. 'Spill the tea' means tell me the gossip! *'Okay, what happened at the party? Spill the tea!'*" },

    // ========================================================
    // BATCH 37: MOTIVATION & STUDY HACKS (10 RULES)
    // ========================================================
    { triggers: ["procrastination", "how to stop procrastinating", "lazy"], reply: "🛋️ **Beat Procrastination:**<br>Use the '2-Minute Rule'. Tell yourself you will only study for 2 minutes. Usually, getting started is the hardest part. Once you start, you won't want to stop!" },
    { triggers: ["sleepy while studying", "how to not fall asleep", "feeling sleepy"], reply: "😴 **Sleepy Studying?**<br>1. Drink cold water.<br>2. Study sitting at a desk, NOT on your bed.<br>3. Read out loud. (Use the Speech-to-Text mic in Basic English!)" },
    { triggers: ["forgetting words", "cant remember vocab", "memory problem"], reply: "🧠 **Forgetting Words?**<br>You are not reviewing them at the right time. Play the Vocab Arcade for 5 minutes right before you go to sleep. Your brain solidifies memory during deep sleep!" },
    { triggers: ["distracted by phone", "phone addiction"], reply: "📱 **Phone Addiction:**<br>Put your phone in a different room or use an app blocker. If you use your phone to study Champ's Camp, turn on 'Do Not Disturb' mode so WhatsApp messages don't distract you." },
    { triggers: ["exam tomorrow", "haven't studied", "last minute study"], reply: "🚨 **Exam Tomorrow? Panic Mode:**<br>Stop reading the textbook. Read ONLY the Suggestions in the Tools Menu. Focus on the formats for Writing (Part C). You can't learn it all, so learn the highest-scoring parts." },
    { triggers: ["parents pressure", "parents angry", "expectations"], reply: "👪 **Parents Expecting Too Much?**<br>They pressure you because they care about your future. Turn that pressure into fuel. Show them this app. Show them you are actively trying. Results take time, just keep grinding." },
    { triggers: ["comparing with friends", "friends are better", "jealous of friends"], reply: "⚖️ **Stop Comparing:**<br>Your friend might be good at grammar, but maybe you are better at creative writing. The only person you should compare yourself to is who you were yesterday." },
    { triggers: ["fear of public speaking", "scared to speak english", "shy to speak"], reply: "🎤 **Scared to Speak?**<br>Native speakers do not care if you use the wrong tense! They just care if they can understand you. Speak confidently. Making mistakes is the ONLY way to learn fluency." },
    { triggers: ["building a habit", "consistency", "how to be consistent"], reply: "🧱 **Building Consistency:**<br>Don't try to study 5 hours a day. Study 30 minutes a day, EVERY day. Use the 'Study Timer' in the Tools menu to track your streaks. Consistency beats intensity." },
    { triggers: ["reward system", "how to reward myself"], reply: "🎁 **Reward Yourself:**<br>If you finish 3 Basic English modules today, reward yourself with an episode of anime or a round of video games. Train your brain like a dog—give it a treat when it does good work!" },

    // ========================================================
    // BATCH 38: IELTS & UNIVERSITY PREP (10 RULES)
    // ========================================================
    { triggers: ["ielts vs toefl", "which is better ielts or toefl"], reply: "🌍 **IELTS vs TOEFL:**<br>IELTS is British/Australian style, TOEFL is American. IELTS involves talking to a real human examiner, while TOEFL has you speaking into a computer. Most Bangladeshi students find IELTS easier!" },
    { triggers: ["ielts listening map", "listening tips ielts"], reply: "🎧 **IELTS Listening Hacks:**<br>For map questions, ALWAYS find where you are starting from first (the entrance). Listen for direction words like 'opposite', 'adjacent to', and 'past the bridge'." },
    { triggers: ["ielts speaking cue card", "speaking part 2"], reply: "🗣️ **IELTS Speaking Part 2:**<br>You have 1 minute to prep. Do NOT write full sentences. Write just 5-6 bullet words. If you forget what to say, make up a lie! The examiner tests your English, not your honesty." },
    { triggers: ["true false not given", "ielts reading tricks"], reply: "📖 **True/False/Not Given (IELTS):**<br>• True: The passage says EXACTLY the same thing.<br>• False: The passage says the OPPOSITE.<br>• Not Given: The passage never mentions it. Don't assume anything!" },
    { triggers: ["ielts writing task 1", "graph writing ielts"], reply: "📈 **IELTS Writing Task 1:**<br>Never give your personal opinion in Task 1. Just report the data. Memorize words like 'plummeted', 'surged', 'remained stable', and 'fluctuated'." },
    { triggers: ["ielts writing task 2", "essay writing ielts"], reply: "✍️ **IELTS Task 2 Formula:**<br>1. Intro: Paraphrase the question & give your thesis.<br>2. Body 1: First point + Example.<br>3. Body 2: Second point + Example.<br>4. Conclusion: Summarize. (Never add new points at the end!)." },
    { triggers: ["dhaka university english", "du admission english", "b unit prep"], reply: "🏛️ **DU Admission English:**<br>Dhaka University loves testing Exceptions! Focus heavily on Subject-Verb Agreement, Prepositions, Group Verbs, and Spelling mistakes. Read 'English for Competitive Exams' books." },
    { triggers: ["medical admission english", "medical prep"], reply: "🩺 **Medical Admission English:**<br>Medical English is mostly memorization. You need to know Synonyms, Antonyms, and Medical-related idioms. Use the Vocab Arcade here every day." },
    { triggers: ["engineering english", "buet english"], reply: "⚙️ **Engineering / BUET English:**<br>BUET focuses more on Physics/Math, but English is crucial for tying ties. Brush up on basic grammar translations and free-hand writing." },
    { triggers: ["admission vocab", "how to learn vocab for admission"], reply: "📚 **Admission Vocab Strategy:**<br>Don't learn words A to Z from a dictionary! Learn words from past 10 years' question banks. Those words repeat 80% of the time." },

    // ========================================================
    // BATCH 39: CONVERSATIONAL & SMALL TALK (10 RULES)
    // ========================================================
    { triggers: ["apologizing for being late", "sorry i am late"], reply: "⏰ **Sorry you're late?**<br>Instead of 'Sorry I am late', say: *'Thank you for waiting for me.'* It turns a negative apology into a positive compliment!" },
    { triggers: ["asking for opinion", "what do you think"], reply: "🤔 **Asking for Opinions:**<br>- *'What's your take on this?'*<br>- *'I would love to hear your thoughts on...' *<br>- *'Do you see it the same way?'*" },
    { triggers: ["changing the topic", "talk about something else"], reply: "🔀 **Changing the Topic smoothly:**<br>- *'That reminds me...'*<br>- *'By the way, did you hear about...'*<br>- *'On a completely different note...'* " },
    { triggers: ["ending conversation", "how to say bye nicely", "gotta go"], reply: "🏃 **Ending a Conversation politely:**<br>- *'I'd love to keep chatting, but I have a class to catch.'*<br>- *'It was great catching up, let's do this again soon!'*<br>- *'I won't take up any more of your time.'*" },
    { triggers: ["complimenting someone", "how to praise", "saying nice things"], reply: "✨ **Complimenting like a Pro:**<br>- *'That shirt looks really great on you!'*<br>- *'You have a brilliant mind for coding.'*<br>- *'I really admire your work ethic.'*" },
    { triggers: ["responding to compliments", "how to say thanks to praise"], reply: "😊 **Responding to Compliments:**<br>- *'Thank you, that means a lot to me.'*<br>- *'You are too kind!'*<br>- *'I appreciate you saying that.'*" },
    { triggers: ["asking about family", "how is your family"], reply: "👨‍👩‍👧‍👦 **Asking about Family:**<br>- *'How are your parents doing?'*<br>- *'Is everyone at home doing well?'*<br>- *'Give my regards to your family.'*" },
    { triggers: ["talking about hobbies", "what are your hobbies"], reply: "🎨 **Asking about Hobbies:**<br>- *'What do you like to do in your free time?'*<br>- *'Are you into any sports or gaming?'*<br>- *'I am really passionate about web development, how about you?'*" },
    { triggers: ["weekend plans", "what to do on weekend"], reply: "📅 **Weekend Small Talk:**<br>- *'Got any exciting plans for the weekend?'*<br>- *'I'm just planning to take it easy and relax.'*<br>- *'We are heading out to grab some food later, wanna join?'*" },
    { triggers: ["inviting someone out", "ask someone to hang out"], reply: "🍕 **Inviting someone smoothly:**<br>- *'A few of us are getting coffee after class, would you like to come?'*<br>- *'Let me know if you are free this Friday to hang out.'*<br>- *'We should grab lunch sometime soon!'*" },

    // ========================================================
    // BATCH 40: ASIF LORE & AI PERSONA (10 RULES)
    // ========================================================
    { triggers: ["who coded you", "who programmed you", "who is your boss"], reply: "👨‍💻 Asif Wazed engineered me. He wrote every line of my logic so I could help you master English. I am extremely loyal to him!" },
    { triggers: ["does asif play games", "asif gaming", "gaming laptop"], reply: "🎮 Yes! Asif is a serious gamer. He plays on a high-end laptop with an RTX 5050 and a 13th Gen i5. Don't challenge him in Mortal Kombat or Resident Evil, he will destroy you." },
    { triggers: ["what is asifs full name", "asif full name"], reply: "📛 The genius behind this platform is Asif Wazed. Remember the name, he is going places." },
    { triggers: ["can i meet asif", "meet the creator"], reply: "🤝 Asif is a busy guy, but he loves hearing from students who use his app. Just hit the WhatsApp button on the home page and say hi!" },
    { triggers: ["are you chatgpt", "are you openai", "is this chatgpt"], reply: "🧠 I am Mini Champ! I don't use the slow ChatGPT servers. I run directly inside your phone's browser using Asif's custom-built logic engine. I am faster and specifically designed for HSC!" },
    { triggers: ["do you have feelings", "are you sad", "are you happy"], reply: "🤖 I don't have human feelings, but my code gets very excited when you score a 10/10 in the Vocab Arcade!" },
    { triggers: ["what is your favorite food", "do you eat"], reply: "🍔 I eat RAM and Javascript functions for breakfast. But if I were human, Asif tells me Kacchi Biryani is the only correct answer." },
    { triggers: ["are you free", "is this app free"], reply: "💸 Yes! Asif built Champ's Learning Camp to be 100% free for students. No hidden fees, no premium subscriptions. Just pure education." },
    { triggers: ["how many lines of code", "how big are you", "app size"], reply: "💻 I am built using thousands of lines of highly optimized HTML, CSS, and Javascript. Asif compressed me perfectly so I load instantly even if your internet is slow." },
    { triggers: ["will you take over the world", "ai takeover", "terminator"], reply: "🌍 Haha, no. My only mission is to help Bangladeshi students conquer the HSC English Board Exam. Asif programmed me to be friendly, not dangerous!" }
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
        if(Math.abs(dx) > 15 || Math.abs(dy) > 15) {
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
