/* basic-engine.js - Premium Spoken Hub Logic (Bug-Free & Fun Edition) */

let currentModuleId = null;
let currentSentenceIdx = 0;
let selectedWords = [];

window.onload = function() {
    const container = document.getElementById('modules-container');
    let html = '';
    
    // Core Tiers keeping your original theme and structure
    const tiers = [
        { limit: 10, name: "Tier 1: Greetings & Survival", color: "#3b82f6", bg: "rgba(59, 130, 246, 0.1)" },
        { limit: 20, name: "Tier 2: Street Smart (BD)", color: "#f59e0b", bg: "rgba(245, 158, 11, 0.1)" },
        { limit: 30, name: "Tier 3: Formal & Professional", color: "#10b981", bg: "rgba(16, 185, 129, 0.1)" },
        { limit: 40, name: "Tier 4: Social Intelligence", color: "#8b5cf6", bg: "rgba(139, 92, 246, 0.1)" },
        { limit: 50, name: "Tier 5: Native Polish", color: "#ef4444", bg: "rgba(239, 68, 68, 0.1)" }
    ];

    let availableModules = [];
    if(typeof spokenData !== 'undefined') {
        availableModules = Object.keys(spokenData).map(k => ({
            id: k,
            num: parseInt(k.replace('s', '')),
            data: spokenData[k]
        })).sort((a, b) => a.num - b.num);
    }

    let currentTierIndex = -1;

    if(availableModules.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-sub);">Database is missing. Please add data to basic-db.js.</div>`;
        return;
    }

    availableModules.forEach((mod) => {
        let tierIndex = tiers.findIndex(t => mod.num <= t.limit);
        if(tierIndex === -1) tierIndex = tiers.length - 1;

        if(tierIndex !== currentTierIndex) {
            if(currentTierIndex !== -1) html += `</div>`; 
            currentTierIndex = tierIndex;
            let tierDef = tiers[tierIndex];
            html += `<div class="section-title"><i class="fas fa-comments" style="color:${tierDef.color};"></i> ${tierDef.name}</div><div class="grid">`;
        }

        let isDone = localStorage.getItem(mod.id + '_done') === 'true';
        
        html += `
        <div class="magnet-card magnet-element ${isDone ? 'done' : ''}" onclick="openModule('${mod.id}')">
            <div class="card-icon" style="background:${tiers[tierIndex].bg}; color:${tiers[tierIndex].color};">
                <i class="fas ${isDone ? 'fa-check-double' : 'fa-microphone'}"></i>
            </div>
            <h3 class="card-title">${mod.data.title}</h3>
            <div class="card-desc" style="color: ${isDone ? '#10b981' : 'var(--text-sub)'}">${isDone ? 'Mastered' : 'Tap to Start'}</div>
        </div>`;
    });
    
    if(currentTierIndex !== -1) html += `</div>`; 
    container.innerHTML = html;
};

function openModule(id) {
    currentModuleId = id;
    let data = spokenData[id];
    
    document.getElementById('mod-title').innerText = data.title;
    document.getElementById('mod-content').innerHTML = data.theoryHTML;
    document.getElementById('module-screen').style.display = 'flex';
}

function closeSpokenOverlay(id) {
    document.getElementById(id).style.display = 'none';
    if('speechSynthesis' in window) window.speechSynthesis.cancel();
}

function triggerAiRoleplay() {
    let data = spokenData[currentModuleId];
    if(data.aiPrompt && typeof window.toggleAI === 'function') {
        const aiWin = document.getElementById('ai-window');
        if (aiWin && aiWin.style.display !== 'flex') window.toggleAI();
        
        const aiInput = document.getElementById('ai-input');
        if(aiInput) {
            aiInput.value = data.aiPrompt;
            window.sendUserMessage();
        }
    } else {
        alert("The AI Roleplay engine is offline.");
    }
}

function startTranslationGame() {
    let data = spokenData[currentModuleId];
    if(!data.gameData || data.gameData.length === 0) {
        alert("Asif is adding Game Phrases for this module soon!"); return;
    }
    currentSentenceIdx = 0;
    document.getElementById('module-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    loadGameSentence();
}

function loadGameSentence() {
    let data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    selectedWords = [];
    
    let progHtml = '';
    for(let i=0; i<spokenData[currentModuleId].gameData.length; i++) {
        progHtml += `<div class="prog-dot ${i <= currentSentenceIdx ? 'active' : ''}"></div>`;
    }
    document.getElementById('game-progress').innerHTML = progHtml;
    
    document.getElementById('game-bn').innerText = data.bn;
    
    let shuffled = [...data.words].sort(() => Math.random() - 0.5);
    let wordHtml = '';
    
    shuffled.forEach((w, i) => {
        // 🔥 THE BUG FIX: Escaping the single quote so words like "Let's" don't break the code
        let safeWord = w.replace(/'/g, "\\'"); 
        
        wordHtml += `<button class="word-btn magnet-element" id="wbtn-${i}" onclick="selectWord('${safeWord}', ${i})">${w}</button>`;
    });
    
    document.getElementById('word-bank').innerHTML = wordHtml;
    document.getElementById('ans-slot').innerHTML = '';
    document.getElementById('ans-slot').style.borderColor = 'var(--cyan)';
    document.getElementById('ans-slot').style.background = 'rgba(6, 182, 212, 0.05)';
    
    // Reset the button to its default state
    let checkBtn = document.getElementById('check-btn');
    checkBtn.innerHTML = '<i class="fas fa-check-circle"></i> Check Answer';
    checkBtn.style.background = 'linear-gradient(135deg, var(--pink), var(--cyan))';
    checkBtn.onclick = checkSpokenAnswer;
}

function selectWord(word, index) {
    if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(10);
    document.getElementById(`wbtn-${index}`).style.visibility = 'hidden';
    
    // Store the raw word (unescaped) for logic checking
    selectedWords.push({word: word, idx: index});
    renderAnswerSlot();
}

function deselectWord(arrIndex) {
    if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(10);
    let item = selectedWords[arrIndex];
    document.getElementById(`wbtn-${item.idx}`).style.visibility = 'visible';
    selectedWords.splice(arrIndex, 1);
    renderAnswerSlot();
}

function renderAnswerSlot() {
    let html = '';
    selectedWords.forEach((item, i) => {
        html += `<button class="word-btn magnet-element" onclick="deselectWord(${i})" style="background:var(--cyan); color:white; border:none; box-shadow: 0 4px 10px rgba(6,182,212,0.3);">${item.word}</button>`;
    });
    document.getElementById('ans-slot').innerHTML = html;
}

function checkSpokenAnswer() {
    let data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    let userSentence = selectedWords.map(o => o.word).join(" ");
    let btn = document.getElementById('check-btn');
    
    if(userSentence === data.en) {
        if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate(50);
        document.getElementById('ans-slot').style.borderColor = '#10b981';
        document.getElementById('ans-slot').style.background = 'rgba(16, 185, 129, 0.1)';
        
        // 🔥 NEW FUN FEATURE: Randomized Success Messages
        const successMsgs = ["Nailed it! 🔥", "Perfect! 🎯", "Smooth! 👑", "Awesome! ✨", "Varsity Level! 🎓"];
        let randomMsg = successMsgs[Math.floor(Math.random() * successMsgs.length)];
        
        btn.innerHTML = `${randomMsg} Next <i class="fas fa-arrow-right"></i>`;
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        btn.onclick = nextSpokenSentence;
        
    } else {
        if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate([50, 50, 50]);
        document.getElementById('ans-slot').style.borderColor = '#ef4444';
        document.getElementById('ans-slot').style.background = 'rgba(239, 68, 68, 0.1)';
        
        // 🔥 NEW FUN FEATURE: Randomized Fail Messages
        const failMsgs = ["Not quite! 🛑", "Oops! Try again 🔄", "Almost! Rearrange it 💀", "Focus, Champ! ⚡"];
        let randomFailMsg = failMsgs[Math.floor(Math.random() * failMsgs.length)];
        
        btn.innerHTML = randomFailMsg;
        btn.style.background = 'linear-gradient(135deg, #ef4444, #b91c1c)';

        // Auto reset after 1.2 seconds so they have time to read the message
        setTimeout(() => {
            document.getElementById('ans-slot').style.borderColor = 'var(--cyan)';
            document.getElementById('ans-slot').style.background = 'rgba(6, 182, 212, 0.05)';
            selectedWords.forEach(item => { document.getElementById(`wbtn-${item.idx}`).style.visibility = 'visible'; });
            selectedWords = [];
            renderAnswerSlot();
            
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Check Answer';
            btn.style.background = 'linear-gradient(135deg, var(--pink), var(--cyan))';
        }, 1200);
    }
}

function nextSpokenSentence() {
    currentSentenceIdx++;
    if(currentSentenceIdx < spokenData[currentModuleId].gameData.length) {
        loadGameSentence();
    } else {
        localStorage.setItem(currentModuleId + '_done', 'true');
        closeSpokenOverlay('game-screen');
        if(navigator.vibrate && localStorage.getItem('champSounds') !== 'false') navigator.vibrate([100, 50, 100, 50, 200]);
        alert("🎉 Module Mastered! You are getting better.");
        location.reload(); 
    }
}

function playSpokenAudio() {
    let data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        let u = new SpeechSynthesisUtterance(data.en);
        u.lang = 'en-US'; u.rate = 0.9;
        window.speechSynthesis.speak(u);
    }
}
