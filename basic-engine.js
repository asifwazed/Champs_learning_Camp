/* basic-engine.js - Categories & Stop Audio Button */

let currentModuleId = null;
let currentSentenceIdx = 0;
let selectedWords = [];

// Organizes modules into beautiful Tiers in the HTML
window.onload = function() {
    const container = document.getElementById('modules-container');
    let html = '';
    
    // Grouping your existing modules (s1 to s50)
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
        let data = typeof spokenData !== 'undefined' ? spokenData[modId] : null;
        
        let tierIndex = tiers.findIndex(t => i <= t.limit);
        if(tierIndex !== currentTierIndex) {
            currentTierIndex = tierIndex;
            let tierDef = tiers[tierIndex];
            html += `<div style="clear:both;"></div><div class="section-title"><i class="fas fa-comments" style="color:${tierDef.color};"></i> ${tierDef.name}</div><div class="grid">`;
        }

        if(data) {
            let isDone = localStorage.getItem(modId + '_done') === 'true';
            html += `
            <div class="module-card ${isDone ? 'done' : ''}" onclick="openModule('${modId}')">
                <div class="mc-icon" style="background:${tiers[tierIndex].bg}; color:${tiers[tierIndex].color};">
                    <i class="fas ${isDone ? 'fa-check-double' : 'fa-microphone'}"></i>
                </div>
                <h3 class="mc-title">${data.title}</h3>
                <div class="mc-sub">${isDone ? 'Mastered' : 'Tap to start'}</div>
            </div>`;
        } else {
            html += `
            <div class="module-card" style="opacity:0.5; cursor:not-allowed;">
                <div class="mc-icon" style="background:#f1f5f9; color:#94a3b8;"><i class="fas fa-tools"></i></div>
                <h3 class="mc-title" style="color:#94a3b8;">Scenario ${i}</h3>
                <div class="mc-sub">Coming Soon</div>
            </div>`;
        }

        if(i === tiers[currentTierIndex].limit || i === 50) html += `</div>`; // Close grid
    }
    container.innerHTML = html;
};

// Opens Full Page Theory + Stop/Play Button Logic
function openModule(id) {
    currentModuleId = id;
    const module = spokenData[id];
    
    let safeText = module.theoryHTML.replace(/<[^>]*>?/gm, ' ').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    // BEAUTIFUL FIX: Play and Stop buttons next to the title
    document.getElementById('theory-title').innerHTML = `
        ${module.title} 
        <button id="spk-play" onclick="toggleTheoryAudio('${safeText}')" style="background:rgba(59,130,246,0.1); border:1px solid rgba(59,130,246,0.3); color:#3b82f6; width:35px; height:35px; border-radius:50%; font-size:14px; cursor:pointer; margin-left:10px; display:inline-flex; align-items:center; justify-content:center;"><i class="fas fa-play"></i></button>
        <button id="spk-stop" onclick="stopTheoryAudio()" style="background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3); color:#ef4444; width:35px; height:35px; border-radius:50%; font-size:14px; cursor:pointer; margin-left:5px; display:none; align-items:center; justify-content:center;"><i class="fas fa-stop"></i></button>
    `;
    
    document.getElementById('theory-content').innerHTML = module.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
    stopTheoryAudio(); // Stop talking if you close the page!
}

// Audio Engine Fixes
function toggleTheoryAudio(safeText) {
    if(window.speechSynthesis) {
        window.speechSynthesis.cancel(); // Reset
        let utterance = new SpeechSynthesisUtterance(safeText);
        utterance.lang = 'en-US';
        utterance.rate = 0.90; 
        
        utterance.onend = function() {
            document.getElementById('spk-play').style.display = 'inline-flex';
            document.getElementById('spk-stop').style.display = 'none';
        };

        document.getElementById('spk-play').style.display = 'none';
        document.getElementById('spk-stop').style.display = 'inline-flex';
        
        window.speechSynthesis.speak(utterance);
    }
}

function stopTheoryAudio() {
    if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        let playBtn = document.getElementById('spk-play');
        let stopBtn = document.getElementById('spk-stop');
        if(playBtn) playBtn.style.display = 'inline-flex';
        if(stopBtn) stopBtn.style.display = 'none';
    }
}

function triggerAIRoleplay() {
    stopTheoryAudio();
    const prompt = spokenData[currentModuleId].aiPrompt;
    if(prompt) {
        document.getElementById('theory-overlay').style.display = 'none';
        if (typeof window.startAIRoleplay === "function") {
            window.startAIRoleplay(prompt);
        } else {
            alert("Error: Mini Champ AI is offline.");
        }
    }
}

function startPractice() {
    stopTheoryAudio();
    const module = spokenData[currentModuleId];
    if(!module.gameData || module.gameData.length === 0) {
        alert("Voice Lab exercises are being built for this module!");
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
        <button onclick="testPronunciation('${safeEn}', this)" style="background:linear-gradient(135deg, #e11d48, #be123c); color:white; border:none; padding:15px 25px; border-radius:50px; font-weight:800; font-family:'Outfit'; font-size:16px; cursor:pointer; box-shadow:0 8px 20px rgba(225, 29, 72, 0.4);"><i class="fas fa-microphone"></i> Test Pronunciation</button>
    `;
    
    document.getElementById('success-area').style.display = 'none';
    selectedWords = [];
    
    const dropZone = document.getElementById('drop-zone');
    const wordBank = document.getElementById('word-bank');
    dropZone.innerHTML = ''; wordBank.innerHTML = '';

    let shuffled = [...data.words].sort(() => Math.random() - 0.5);

    shuffled.forEach((word, index) => {
        let btn = document.createElement('button');
        btn.className = 'word-btn';
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
            slot.className = 'word-slot';
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
        } else {
            const dropZone = document.getElementById('drop-zone');
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
            setTimeout(() => {
                // Auto reset if wrong
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
        alert("🎉 Training Complete!");
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
    
    recognition.onerror = () => { btnEl.innerHTML = originalHtml; btnEl.style.background = originalBg; };
    recognition.start();
}
