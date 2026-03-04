/* basic-engine.js - Unlocked Modules & Flawless Audio Engine */

let currentModuleId = null;
let currentSentenceIdx = 0;
let selectedWords = [];

window.onload = function() {
    const container = document.getElementById('modules-container');
    let html = '';
    
    // Grouping all 50 modules into beautiful Tiers
    const tiers = [
        { limit: 10, name: "Tier 1: Greetings & Survival", color: "#3b82f6", bg: "#eff6ff" },
        { limit: 20, name: "Tier 2: Travel & Direction", color: "#f59e0b", bg: "#fffbeb" },
        { limit: 30, name: "Tier 3: Shopping & Food", color: "#10b981", bg: "#ecfdf5" },
        { limit: 40, name: "Tier 4: Office & Professional", color: "#8b5cf6", bg: "#f5f3ff" },
        { limit: 50, name: "Tier 5: Advanced Debate", color: "#ef4444", bg: "#fef2f2" }
    ];

    let currentTierIndex = -1;

    for(let i=1; i<=50; i++) {
        let modId = 's' + i;
        
        // 🔥 FIX: Always provide a fallback data object so NOTHING is locked!
        let data = (typeof spokenData !== 'undefined' && spokenData[modId]) ? spokenData[modId] : {
            title: `Scenario ${i}`,
            theoryHTML: `<div style="text-align:center; padding:50px 20px; color:#64748b;"><i class="fas fa-tools" style="font-size:40px; margin-bottom:15px; color:#cbd5e1;"></i><br><b style="font-size:18px; color:#1e293b;">Under Construction</b><br><br>Asif is currently writing the lessons for this specific scenario. Please check back soon!</div>`,
            gameData: []
        };
        
        let tierIndex = tiers.findIndex(t => i <= t.limit);
        if(tierIndex !== currentTierIndex) {
            currentTierIndex = tierIndex;
            let tierDef = tiers[tierIndex];
            html += `<div style="clear:both;"></div><div class="section-title"><i class="fas fa-comments" style="color:${tierDef.color};"></i> ${tierDef.name}</div><div class="grid">`;
        }

        let isDone = localStorage.getItem(modId + '_done') === 'true';
        
        html += `
        <div class="module-card magnet-element ${isDone ? 'done' : ''}" onclick="openModule('${modId}')" style="cursor:pointer; opacity:1;">
            <div class="mc-icon" style="background:${tiers[tierIndex].bg}; color:${tiers[tierIndex].color};">
                <i class="fas ${isDone ? 'fa-check-double' : 'fa-microphone'}"></i>
            </div>
            <h3 class="mc-title">${data.title}</h3>
            <div class="mc-sub">${isDone ? 'Mastered' : 'Tap to Start'}</div>
        </div>`;

        if(i === tiers[currentTierIndex].limit || i === 50) html += `</div>`; 
    }
    container.innerHTML = html;
};

// Opens Full Page Theory + Stop/Play Button Logic
function openModule(id) {
    currentModuleId = id;
    
    let data = (typeof spokenData !== 'undefined' && spokenData[id]) ? spokenData[id] : {
        title: `Scenario`,
        theoryHTML: `<div style="text-align:center; padding:50px 20px; color:#64748b;"><i class="fas fa-tools" style="font-size:40px; margin-bottom:15px; color:#cbd5e1;"></i><br><b style="font-size:18px; color:#1e293b;">Under Construction</b><br><br>Asif is currently writing the lessons for this specific scenario. Please check back soon!</div>`,
        gameData: []
    };
    
    // 🔥 FIX: Audio buttons no longer pass massive HTML strings. 
    document.getElementById('theory-title').innerHTML = `
        <span style="font-size:18px;">${data.title}</span> 
        <button id="spk-play" onclick="playSpokenAudio()" class="magnet-element" style="background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); color:#3b82f6; width:35px; height:35px; border-radius:50%; font-size:14px; cursor:pointer; margin-left:10px; display:inline-flex; align-items:center; justify-content:center; vertical-align:middle; transition:0.2s;"><i class="fas fa-play"></i></button>
        <button id="spk-stop" onclick="stopSpokenAudio()" class="magnet-element" style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); color:#ef4444; width:35px; height:35px; border-radius:50%; font-size:14px; cursor:pointer; margin-left:10px; display:none; align-items:center; justify-content:center; vertical-align:middle; transition:0.2s;"><i class="fas fa-stop"></i></button>
    `;
    
    document.getElementById('theory-content').innerHTML = data.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
    stopSpokenAudio(); // Ensure it stops talking when you close the page!
}

// --- AUDIO ENGINE FIXES ---
function playSpokenAudio() {
    if(window.speechSynthesis) {
        window.speechSynthesis.cancel(); // Stop anything currently playing
        
        // Grab the plain text cleanly directly from the screen
        let textToRead = document.getElementById('theory-content').innerText;
        
        if(!textToRead || textToRead.trim() === "") {
            alert("Nothing to read here yet!");
            return;
        }

        let utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'en-US';
        utterance.rate = 0.90; // Slightly slower for clear English learning
        
        // When audio naturally finishes, bring the play button back
        utterance.onend = function() {
            const playBtn = document.getElementById('spk-play');
            const stopBtn = document.getElementById('spk-stop');
            if(playBtn) playBtn.style.display = 'inline-flex';
            if(stopBtn) stopBtn.style.display = 'none';
        };

        // Hide Play, Show Stop
        document.getElementById('spk-play').style.display = 'none';
        document.getElementById('spk-stop').style.display = 'inline-flex';
        
        window.speechSynthesis.speak(utterance);
    } else {
        alert("Text-to-Speech is not supported in your browser.");
    }
}

function stopSpokenAudio() {
    if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        
        // Hide Stop, Show Play
        let playBtn = document.getElementById('spk-play');
        let stopBtn = document.getElementById('spk-stop');
        if(playBtn) playBtn.style.display = 'inline-flex';
        if(stopBtn) stopBtn.style.display = 'none';
    }
}

function triggerAIRoleplay() {
    stopSpokenAudio();
    const module = (typeof spokenData !== 'undefined' && spokenData[currentModuleId]) ? spokenData[currentModuleId] : null;
    if(module && module.aiPrompt) {
        document.getElementById('theory-overlay').style.display = 'none';
        if (typeof window.startAIRoleplay === "function") {
            window.startAIRoleplay(module.aiPrompt);
        } else {
            alert("Error: Mini Champ AI is offline.");
        }
    } else {
        alert("Roleplay is not available for this scenario yet.");
    }
}

function startPractice() {
    stopSpokenAudio();
    const module = (typeof spokenData !== 'undefined' && spokenData[currentModuleId]) ? spokenData[currentModuleId] : null;
    if(!module || !module.gameData || module.gameData.length === 0) {
        alert("Voice Lab exercises are being built for this module. Check back later!");
        return;
    }
    
    document.getElementById('theory-overlay').style.display = 'none';
    document.getElementById('game-overlay').style.display = 'flex';
    currentSentenceIdx = 0;
    loadSentence();
}

function loadSentence() {
    const data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    let safeEn = data.en.replace(/'/g, "\\'");
    
    document.getElementById('eng-bn-text').innerHTML = `
        <div style="font-size:24px; margin-bottom:15px;">${data.bn}</div>
        <button class="magnet-element" onclick="testPronunciation('${safeEn}', this)" style="background:linear-gradient(135deg, #e11d48, #be123c); color:white; border:none; padding:15px 25px; border-radius:50px; font-weight:800; font-family:'Outfit'; font-size:16px; cursor:pointer; box-shadow:0 8px 20px rgba(225, 29, 72, 0.4);"><i class="fas fa-microphone"></i> Test Pronunciation</button>
    `;
    
    document.getElementById('success-area').style.display = 'none';
    selectedWords = [];
    
    const dropZone = document.getElementById('drop-zone');
    const wordBank = document.getElementById('word-bank');
    dropZone.innerHTML = ''; wordBank.innerHTML = '';

    let shuffled = [...data.words].sort(() => Math.random() - 0.5);

    shuffled.forEach((word, index) => {
        let btn = document.createElement('button');
        btn.className = 'word-btn magnet-element';
        btn.innerText = word;
        btn.id = 'wb-' + index;
        btn.onclick = () => selectWord(word, index);
        wordBank.appendChild(btn);
    });
    
    renderSlots();
}

function renderSlots() {
    const data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    const dropZone = document.getElementById('drop-zone');
    dropZone.innerHTML = '';
    
    for(let i=0; i<data.words.length; i++) {
        let slot = document.createElement('div');
        if(selectedWords[i]) {
            slot.className = 'word-slot magnet-element';
            slot.innerText = selectedWords[i].word;
            slot.onclick = () => deselectWord(i);
        } else {
            slot.style.width = '70px'; slot.style.height = '40px';
            slot.style.borderBottom = '3px solid #cbd5e1';
            slot.style.margin = '0 5px'; slot.style.borderRadius = '4px';
        }
        dropZone.appendChild(slot);
    }
}

function selectWord(word, bankIndex) {
    document.getElementById('wb-' + bankIndex).classList.add('hidden');
    selectedWords.push({word: word, bankIndex: bankIndex});
    renderSlots();
    checkWin();
}

function deselectWord(slotIndex) {
    let item = selectedWords[slotIndex];
    document.getElementById('wb-' + item.bankIndex).classList.remove('hidden');
    selectedWords.splice(slotIndex, 1);
    renderSlots();
}

function checkWin() {
    const data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    
    if(selectedWords.length === data.words.length) {
        let formed = selectedWords.map(s => s.word).join(' ');
        
        if(formed === data.en) {
            document.getElementById('success-area').style.display = 'flex';
            document.getElementById('eng-explanation').innerText = "Flawless Sentence Structure!";
            
            if (currentSentenceIdx === spokenData[currentModuleId].gameData.length - 1) {
                localStorage.setItem(currentModuleId + '_done', 'true');
                document.querySelector('#success-area button').innerHTML = "Finish Training <i class='fas fa-flag-checkered'></i>";
            } else {
                document.querySelector('#success-area button').innerHTML = "Next Challenge <i class='fas fa-arrow-right'></i>";
            }
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
            setTimeout(() => {
                while(selectedWords.length > 0) deselectWord(0);
            }, 500);
        }
    }
}

function nextQuestion() {
    const data = spokenData[currentModuleId].gameData;
    if (currentSentenceIdx < data.length - 1) {
        currentSentenceIdx++;
        loadSentence();
    } else {
        closeOverlay('game-overlay');
        alert("🎉 Training Complete! You are mastering English.");
        window.location.reload(); 
    }
}

function testPronunciation(targetText, btnEl) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) { alert("Please use Google Chrome for Voice Tests."); return; }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    let originalHtml = btnEl.innerHTML;
    let originalBg = btnEl.style.background;
    
    btnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Listening...';
    btnEl.style.background = '#f59e0b'; 

    recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.toLowerCase().replace(/[.,?!]/g, '').trim();
        const target = targetText.toLowerCase().replace(/[.,?!]/g, '').trim();
        
        if(spoken.includes(target) || target.includes(spoken) || spoken === target) {
            btnEl.innerHTML = '<i class="fas fa-check-circle"></i> Perfect Accent!';
            btnEl.style.background = '#10b981';
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            btnEl.innerHTML = '<i class="fas fa-times-circle"></i> Try Again';
            btnEl.style.background = '#ef4444';
            alert("You said: '" + spoken + "'\nTarget: '" + target + "'");
            setTimeout(() => { btnEl.innerHTML = originalHtml; btnEl.style.background = originalBg; }, 2500);
        }
    };
    
    recognition.onerror = () => { 
        btnEl.innerHTML = originalHtml; 
        btnEl.style.background = originalBg; 
    };
    recognition.start();
}
