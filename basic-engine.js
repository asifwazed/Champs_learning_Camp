// =====================================================================
// PREMIUM SPOKEN HUB ENGINE 
// =====================================================================

let currentModuleId = null;
let currentSentenceIdx = 0;
let selectedWords = [];

// 1. OPEN THE THEORY OVERLAY 
function openModule(id) {
    if(typeof spokenData === 'undefined' || !spokenData[id]) {
        alert("🛠️ Module in progress! Asif is currently engineering this.");
        return;
    }
    
    currentModuleId = id;
    const module = spokenData[id];
    
    // Read-Aloud Speaker Button (Premium Styling)
    let safeText = module.theoryHTML.replace(/<[^>]*>?/gm, ' ').replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, " ");
    document.getElementById('theory-title').innerHTML = `${module.title} <button class="magnet-element" onclick="playTheoryAudio('${safeText}')" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#38bdf8; width:35px; height:35px; border-radius:50%; font-size:15px; cursor:pointer; margin-left:15px; display:inline-flex; align-items:center; justify-content:center; vertical-align: middle;"><i class="fas fa-volume-up"></i></button>`;
    
    document.getElementById('theory-content').innerHTML = module.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}

// 2. AI ROLEPLAY HOOK
function triggerAIRoleplay() {
    const prompt = spokenData[currentModuleId].aiPrompt;
    if(prompt) {
        document.getElementById('theory-overlay').style.display = 'none';
        if (typeof window.startAIRoleplay === "function") {
            window.startAIRoleplay(prompt);
        } else if (typeof startAIRoleplay === "function") {
            startAIRoleplay(prompt);
        } else {
            alert("Error: Mini Champ AI is not loaded. Check internet connection!");
        }
    } else {
        alert("Roleplay is currently being built for this module!");
    }
}

// 3. START THE VOICE LAB (Premium Drag/Tap Game)
function startPractice() {
    const module = spokenData[currentModuleId];
    if(!module.gameData || module.gameData.length === 0) {
        alert("Voice Lab exercises are currently being built for this module!");
        return;
    }
    
    document.getElementById('theory-overlay').style.display = 'none';
    document.getElementById('game-overlay').style.display = 'flex';
    currentSentenceIdx = 0;
    loadSentence();
}

function loadSentence() {
    const data = spokenData[currentModuleId].gameData[currentSentenceIdx];
    
    // Live Microphone Button with glowing premium effect
    let safeEn = data.en.replace(/'/g, "\\'");
    document.getElementById('eng-bn-text').innerHTML = `${data.bn} <br><button class="magnet-element" onclick="testPronunciation('${safeEn}', this)" style="background:linear-gradient(135deg, #e11d48, #be123c); color:white; border:none; padding:12px 20px; border-radius:50px; font-weight:700; font-family:'Outfit'; font-size:14px; margin-top:20px; cursor:pointer; display:inline-flex; align-items:center; gap:8px; box-shadow:0 8px 20px rgba(225, 29, 72, 0.4);"><i class="fas fa-microphone"></i> Speak to Test</button>`;
    
    document.getElementById('success-area').style.display = 'none';
    
    selectedWords = [];
    const dropZone = document.getElementById('drop-zone');
    const wordBank = document.getElementById('word-bank');
    
    dropZone.innerHTML = '';
    wordBank.innerHTML = '';

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
            slot.style.width = '70px';
            slot.style.height = '40px';
            slot.style.borderBottom = '3px solid rgba(255,255,255,0.2)';
            slot.style.margin = '0 5px';
            slot.style.borderRadius = '4px';
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
                document.querySelector('#success-area button').innerHTML = "Finish Training <i class='fas fa-flag-checkered' style='margin-left:5px;'></i>";
            } else {
                document.querySelector('#success-area button').innerHTML = "Next Challenge <i class='fas fa-arrow-right' style='margin-left:5px;'></i>";
            }
        } else {
            const dropZone = document.getElementById('drop-zone');
            dropZone.classList.add('shake');
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
            setTimeout(() => dropZone.classList.remove('shake'), 400);
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
        alert("🎉 Training Complete! You mastered this scenario!");
        window.location.reload(); 
    }
}

// =====================================================================
// AUDIO & PRONUNCIATION LAB ENGINES
// =====================================================================

function playTheoryAudio(safeText) {
    if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(safeText);
        utterance.lang = 'en-US';
        utterance.rate = 0.90; 
        window.speechSynthesis.speak(utterance);
    }
}

function testPronunciation(targetText, btnEl) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) {
        alert("Your browser does not support Voice Recognition. Please use Google Chrome.");
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    let originalHtml = btnEl.innerHTML;
    let originalBg = btnEl.style.background;
    
    btnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Listening...';
    btnEl.style.background = '#f59e0b'; // Orange waiting color
    btnEl.style.boxShadow = '0 8px 20px rgba(245, 158, 11, 0.4)';

    recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.toLowerCase().replace(/[.,?!]/g, '').trim();
        const target = targetText.toLowerCase().replace(/[.,?!]/g, '').trim();
        
        if(spoken.includes(target) || target.includes(spoken) || spoken === target) {
            btnEl.innerHTML = '<i class="fas fa-check-circle"></i> Perfect Accent!';
            btnEl.style.background = '#10b981';
            btnEl.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            btnEl.innerHTML = '<i class="fas fa-times-circle"></i> Try Again';
            btnEl.style.background = '#ef4444';
            btnEl.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.4)';
            alert("You said: '" + spoken + "'\nTarget: '" + target + "'\nKeep practicing!");
            setTimeout(() => { 
                btnEl.innerHTML = originalHtml; 
                btnEl.style.background = originalBg; 
                btnEl.style.boxShadow = '0 8px 20px rgba(225, 29, 72, 0.4)';
            }, 2500);
        }
    };
    
    recognition.onerror = () => {
        btnEl.innerHTML = originalHtml;
        btnEl.style.background = originalBg; 
        btnEl.style.boxShadow = '0 8px 20px rgba(225, 29, 72, 0.4)';
    };
    
    recognition.start();
}
