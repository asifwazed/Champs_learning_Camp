/* global-engine.js - Master Engine for Global Components & Upgrades */

function injectGlobalComponents() {
    // ==========================================
    // 1. GLOBAL STYLES (Translator + AI)
    // ==========================================
    const globalStyle = document.createElement('style');
    globalStyle.innerHTML = `
        /* Upgraded Translator Styles */
        #translate-wrapper { 
            position: fixed; bottom: 30px; left: 20px; z-index: 200; 
            background: white; padding: 10px 15px; border-radius: 16px; 
            box-shadow: 0 10px 25px rgba(0,0,0,0.15); border: 2px solid #e2e8f0;
            display: flex; flex-direction: column; align-items: center; gap: 8px;
            animation: slideUp 0.4s ease-out;
        }
        .translate-label {
            font-size: 12px; font-weight: 800; color: #3b82f6; 
            font-family: 'Plus Jakarta Sans', sans-serif;
            display: flex; align-items: center; gap: 6px; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .goog-te-gadget-simple { 
            background-color: #f8fafc !important; border-radius: 8px !important; 
            padding: 6px 12px !important; border: 1px solid #cbd5e1 !important; 
            font-family: 'Plus Jakarta Sans', sans-serif !important; 
            font-size: 12px !important; font-weight: 700 !important; 
        }
        .goog-te-gadget-icon { display: none; }
        .goog-te-menu-value span { color: #0f172a !important; }
        .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
        body { top: 0 !important; } 
        .skiptranslate iframe { display: none !important; } 

        /* Mini Champ Chatbot Styles */
        .ai-fab { position: fixed; bottom: 30px; right: 20px; width: 55px; height: 55px; background: linear-gradient(135deg, #10b981, #059669); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(16, 185, 129, 0.4); cursor: pointer; z-index: 999; transition: transform 0.2s; border: 2px solid white; }
        .ai-fab:active { transform: scale(0.9); }
        .ai-fab img { width: 40px; border-radius: 50%; }
        .ai-fab .badge { position: absolute; top: 0; right: 0; background: #ef4444; color: white; font-size: 10px; font-weight: bold; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; }

        /* Chat Window Styles */
        .ai-window { position: fixed; bottom: 100px; right: 20px; width: 340px; height: 480px; background: white; border-radius: 24px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); z-index: 998; display: none; flex-direction: column; overflow: hidden; border: 1px solid #e2e8f0; animation: slideUp 0.3s ease-out; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .ai-header { background: linear-gradient(135deg, #1e293b, #334155); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .ai-header-info { display: flex; align-items: center; gap: 10px; }
        .ai-header-info img { width: 35px; border-radius: 50%; background: white; }
        .ai-header-info h3 { margin: 0; font-family: 'Outfit'; font-size: 16px; }
        .ai-header-info p { margin: 0; font-size: 11px; color: #cbd5e1; }
        .ai-close { background: none; border: none; color: white; font-size: 20px; cursor: pointer; }
        
        .ai-body { flex-grow: 1; padding: 15px; overflow-y: auto; background: #f8fafc; display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth; }
        .msg { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 13px; line-height: 1.5; word-wrap: break-word; }
        .msg-bot { background: white; color: #1e293b; border-bottom-left-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.02); align-self: flex-start; border: 1px solid #e2e8f0; }
        .msg-user { background: #3b82f6; color: white; border-bottom-right-radius: 4px; align-self: flex-end; }
        
        .ai-quick-replies { display: flex; gap: 8px; padding: 10px 15px; background: white; overflow-x: auto; white-space: nowrap; border-top: 1px solid #f1f5f9; }
        .ai-quick-replies::-webkit-scrollbar { display: none; }
        .qr-btn { background: #eff6ff; color: #3b82f6; border: 1px solid #bfdbfe; padding: 6px 12px; border-radius: 50px; font-size: 11px; font-weight: 700; cursor: pointer; flex-shrink: 0; transition: 0.2s; }
        .qr-btn:active { transform: scale(0.95); }
        
        .ai-footer { padding: 10px 15px; background: white; border-top: 1px solid #f1f5f9; display: flex; gap: 10px; }
        .ai-input { flex-grow: 1; border: 1px solid #e2e8f0; border-radius: 50px; padding: 10px 15px; outline: none; font-size: 13px; font-family: inherit; }
        .ai-send { background: #10b981; color: white; border: none; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s; }
        .ai-send:active { transform: scale(0.9); }
    `;
    document.head.appendChild(globalStyle);

    // ==========================================
    // 2. INJECT GOOGLE TRANSLATOR 
    // ==========================================
    const translateContainer = document.createElement('div');
    translateContainer.id = "translate-wrapper";
    translateContainer.innerHTML = `
        <div class="translate-label">
            <i class="fas fa-language" style="font-size:16px;"></i> ভাষা • Bahasa
        </div>
        <div id="google_translate_element"></div>
    `;
    document.body.appendChild(translateContainer);

    const script1 = document.createElement('script');
    script1.type = "text/javascript";
    script1.innerHTML = `
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en', 
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = "text/javascript";
    script2.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script2);

    // ==========================================
    // 3. INJECT "MINI CHAMP" AI COMPANION
    // ==========================================
    const aiHTML = `
        <div class="ai-fab" onclick="toggleAI()">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" alt="Asif">
            <div class="badge">1</div>
        </div>

        <div class="ai-window" id="ai-window">
            <div class="ai-header">
                <div class="ai-header-info">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif&backgroundColor=b6e3f4" alt="Asif">
                    <div>
                        <h3>Mini Champ</h3>
                        <p>🟢 Online • Asif's Bot</p>
                    </div>
                </div>
                <button class="ai-close" onclick="toggleAI()"><i class="fas fa-times"></i></button>
            </div>
            
            <div class="ai-body" id="ai-body">
                <div class="msg msg-bot">Hello Champ! 👋 I am Mini Champ, Asif's personal bot. Ask me about Grammar, HSC tips, or App Navigation!</div>
            </div>

            <div class="ai-quick-replies">
                <button class="qr-btn" onclick="sendQuickReply('How to write a summary?')">📝 Summary Rules</button>
                <button class="qr-btn" onclick="sendQuickReply('What is a noun?')">🧠 Grammar Help</button>
                <button class="qr-btn" onclick="sendQuickReply('Give me a study tip')">💡 Study Tip</button>
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
}

// AI UI Logic
window.toggleAI = function() {
    const win = document.getElementById('ai-window');
    const badge = document.querySelector('.ai-fab .badge');
    if (win.style.display === 'flex') {
        win.style.display = 'none';
    } else {
        win.style.display = 'flex';
        if(badge) badge.style.display = 'none'; 
        document.getElementById('ai-input').focus();
    }
}

window.handleEnter = function(e) {
    if(e.key === 'Enter') {
        window.sendUserMessage();
    }
}

window.sendQuickReply = function(text) {
    document.getElementById('ai-input').value = text;
    window.sendUserMessage();
}

window.sendUserMessage = function() {
    const input = document.getElementById('ai-input');
    const text = input.value.trim();
    if(!text) return;

    const body = document.getElementById('ai-body');
    body.innerHTML += `<div class="msg msg-user">${text}</div>`;
    input.value = '';
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
        const reply = getSmartReply(text);
        body.innerHTML += `<div class="msg msg-bot">${reply}</div>`;
        body.scrollTop = body.scrollHeight;
    }, 500);
}

// ==========================================
// 4. THE SUPERCHARGED KNOWLEDGE BASE (BRAIN)
// ==========================================
const miniChampBrain = [
    // --- GREETINGS & IDENTITY ---
    {
        triggers: ["hello", "hi", "hey", "salam", "assalamualaikum"],
        reply: "Hello Champ! 👋 I am Mini Champ. Are you ready to level up your English today?"
    },
    {
        triggers: ["who are you", "your name", "what are you", "mini champ", "bot", "ai", "chatgpt"],
        reply: "I am **Mini Champ**! 🤖 I am NOT ChatGPT. I am a custom bot engineered exclusively by Asif to be your 24/7 HSC English guide!"
    },
    {
        triggers: ["asif", "where is asif", "who is asif", "creator", "maker", "developer"],
        reply: "Asif is my creator and your main mentor! I am just his digital assistant. If you need to submit homework or talk to him, use the WhatsApp button on the home page! 🚀"
    },
    {
        triggers: ["how are you", "how r u", "are you fine"],
        reply: "I am running at 100% battery and feeling super smart today! ⚡ How are your studies going?"
    },

    // --- APP NAVIGATION ---
    {
        triggers: ["where is writing", "paragraph", "story", "email", "letter", "part c"],
        reply: "You can find all Paragraphs, Stories, Emails, and Dialogues in the **Part C: Writing Vault** on the Home Page! Everything is perfectly formatted for board exams."
    },
    {
        triggers: ["where is grammar", "cloze test", "with clues", "without clues", "part b"],
        reply: "Go to the Home Page and click on **Part B: Grammar**. You will find interactive Cloze Tests from past board exams with auto-grading! 💯"
    },
    {
        triggers: ["seen text", "first paper", "textbook", "part a", "passage"],
        reply: "Click on **Part A: Seen Text** on the Home Page. I have loaded all 15 Units from the official HSC textbook with Bangla translations and interactive 40-mark exams! 📖"
    },
    {
        triggers: ["basic english", "spoken", "beginner", "start from zero"],
        reply: "If you want to start from zero, click the purple **Basic & Spoken** card on the Home Page! We will teach you the Magic Rules of sentence building. 🧱"
    },

    // --- HSC BOARD EXAM SECRETS ---
    {
        triggers: ["summary", "summarize", "how to write summary"],
        reply: "📝 **Asif's Summary Rules:**<br>1. Make it ONE single paragraph.<br>2. Keep it 1/3rd the length of the passage.<br>3. Use your own words.<br>4. NEVER copy exact lines or add your personal opinion!"
    },
    {
        triggers: ["flow chart", "flowchart", "boxes"],
        reply: "📊 **Flow Chart Master Rule:** NEVER write full sentences! Start your boxes with a Gerund (Verb+ing), an Infinitive (To+Verb), or a Noun phrase. Example: *Going to school* ✅, *He is going to school* ❌."
    },
    {
        triggers: ["cloze test", "fill in the blanks", "gap filling"],
        reply: "🔍 **Cloze Test Trick:** Read the WHOLE passage once *without* trying to fill in the gaps. Understand the context first! Then look at the words before and after the gap to guess the Parts of Speech needed."
    },
    {
        triggers: ["tip", "advice", "study tip", "secret"],
        reply: "💡 **Pro Tip:** Don't memorize blindly. To master English, learn 5 new vocabulary words every day and try to use them in a real sentence. Vocabulary is your ultimate weapon!"
    },

    // --- DEEP GRAMMAR DICTIONARY ---
    {
        triggers: ["what is noun", "define noun", "noun"],
        reply: "A **Noun** is a naming word. It names a Person (Asif), Place (Dhaka), Thing (Laptop), or Idea (Happiness). If you can put 'The' or 'A' in front of it, it's probably a noun! 🏷️"
    },
    {
        triggers: ["what is pronoun", "define pronoun", "pronoun"],
        reply: "A **Pronoun** replaces a noun so we don't sound repetitive. Instead of saying 'Asif loves coding because Asif is smart', we use pronouns: 'Asif loves coding because **HE** is smart'. (He, She, It, They, We)."
    },
    {
        triggers: ["what is verb", "define verb", "verb"],
        reply: "A **Verb** is the engine of the sentence! It shows Action (run, eat, play) or State of Being (is, am, are). A sentence cannot exist without a verb! 🏃‍♂️"
    },
    {
        triggers: ["what is adjective", "define adjective", "adjective"],
        reply: "An **Adjective** is a describing word. It gives more info about a Noun. Example: The **smart** boy, the **fast** car, the **beautiful** weather. ✨"
    },
    {
        triggers: ["what is adverb", "define adverb", "adverb"],
        reply: "An **Adverb** describes a Verb, an Adjective, or another Adverb. It answers *How, When, or Where*. Example: He runs **quickly**. She speaks **softly**. (Many end in -ly!) ⏩"
    },
    {
        triggers: ["what is preposition", "define preposition", "preposition"],
        reply: "A **Preposition** shows the relationship of a noun to another word. It often shows location or time. Examples: The book is **ON** the table. I will meet you **AT** 5 PM. 📍"
    },
    {
        triggers: ["tense", "present tense", "past tense", "future tense"],
        reply: "⏳ **Tenses** tell us *when* something happens:<br>- **Present:** I eat apples. (Happens now/regularly)<br>- **Past:** I ate apples. (Already finished)<br>- **Future:** I will eat apples. (Hasn't happened yet)."
    },
    {
        triggers: ["subject verb agreement", "right form of verb", "singular plural"],
        reply: "⚖️ **Subject-Verb Agreement Rule:** If the subject is singular (He/She/It), the verb must take an 's' or 'es' in present tense (He eat**s**). If the subject is plural (They/We), the verb stays basic (They eat)."
    },

    // --- MOTIVATION & EMOTIONS ---
    {
        triggers: ["confused", "hard", "difficult", "tough", "i can't"],
        reply: "Take a deep breath, Champ. Learning English isn't a race, it's a marathon. You don't have to be perfect today, just be 1% better than yesterday. You got this! 💪"
    },
    {
        triggers: ["depressed", "sad", "failing", "marks", "anxious"],
        reply: "Hey, grades do not define your worth. Exam pressure is tough, but Asif built this app to make it easier for you. Don't stress, just study one lesson at a time. We are with you! ❤️"
    },
    {
        triggers: ["love you", "awesome", "great app", "thank you", "thanks"],
        reply: "Thank you so much! Comments like this are exactly why Asif and his partner worked so hard to build this. Keep pushing forward! 🚀🔥"
    },
    {
        triggers: ["joke", "funny", "laugh"],
        reply: "Why was the math book sad? ...Because it had too many problems! 😂 (Okay, I'll stick to teaching English!)"
    }
];

function getSmartReply(userInput) {
    let msg = userInput.toLowerCase();

    // 1. Loop through the supercharged brain array
    for (let i = 0; i < miniChampBrain.length; i++) {
        let brainNode = miniChampBrain[i];
        for (let j = 0; j < brainNode.triggers.length; j++) {
            if (msg.includes(brainNode.triggers[j])) {
                return brainNode.reply; 
            }
        }
    }

    // 2. THE ULTIMATE FALLBACK
    return `That is a fantastic question! 🧠 My brain is very big, but I don't have the answer to that specific query yet. I will let Asif know so he can teach it to me!<br><br>For now, ask the real Asif:<br><a href="https://wa.me/8801721149369" target="_blank" style="display:inline-block; margin-top:8px; background:#25D366; color:white; padding:8px 12px; border-radius:8px; text-decoration:none; font-weight:bold;"><i class="fab fa-whatsapp"></i> Ask Real Asif</a>`;
}

// Run the engine when page loads
window.addEventListener('DOMContentLoaded', injectGlobalComponents);
