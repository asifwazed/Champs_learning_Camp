// =====================================================================
// SPOKEN HUB ENGINE (Basic to Intermediate)
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
    
    // Read-Aloud Speaker Button
    let safeText = module.theoryHTML.replace(/<[^>]*>?/gm, ' ').replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, " ");
    document.getElementById('theory-title').innerHTML = `${module.title} <button onclick="playTheoryAudio('${safeText}')" style="background:#eff6ff; border:1px solid #bfdbfe; color:#3b82f6; width:30px; height:30px; border-radius:50%; font-size:14px; cursor:pointer; margin-left:10px; vertical-align: middle;"><i class="fas fa-volume-up"></i></button>`;
    
    document.getElementById('theory-content').innerHTML = module.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}

// 2. AI ROLEPLAY 
function triggerAIRoleplay() {
    const prompt = spokenData[currentModuleId].aiPrompt;
    if(prompt) {
        document.getElementById('theory-overlay').style.display = 'none';
        if (typeof startAIRoleplay === "function") {
            startAIRoleplay(prompt);
        } else {
            alert("Error: Mini Champ AI is not loaded properly.");
        }
    } else {
        alert("Roleplay is currently being built for this module!");
    }
}

// 3. START THE VOICE LAB (Drag/Tap Game)
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
    
    // Live Microphone Button
    let safeEn = data.en.replace(/'/g, "\\'");
    document.getElementById('eng-bn-text').innerHTML = `${data.bn} <br><button onclick="testPronunciation('${safeEn}', this)" style="background:#fff1f2; color:#e11d48; border:1px solid #fecdd3; padding:8px 15px; border-radius:50px; font-size:12px; margin-top:10px; cursor:pointer; display:inline-flex; align-items:center; gap:5px;"><i class="fas fa-microphone"></i> Test Pronunciation</button>`;
    
    document.getElementById('success-area').style.display = 'none';
    
    selectedWords = [];
    const dropZone = document.getElementById('drop-zone');
    const wordBank = document.getElementById('word-bank');
    
    dropZone.innerHTML = '';
    wordBank.innerHTML = '';

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
            slot.style.width = '60px';
            slot.style.borderBottom = '2px solid rgba(255,255,255,0.3)';
            slot.style.margin = '0 5px';
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
            document.getElementById('eng-explanation').innerText = "Perfect! Your sentence structure is flawless.";
            
            if (currentSentenceIdx === spokenData[currentModuleId].gameData.length - 1) {
                localStorage.setItem(currentModuleId + '_done', 'true');
                document.querySelector('.next-btn').innerText = "Finish Training";
            } else {
                document.querySelector('.next-btn').innerText = "Next Sentence";
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
        alert("🎉 Training Complete! You just leveled up your Spoken English!");
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
        utterance.rate = 0.85; 
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
    btnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Listening...';
    btnEl.style.background = '#fef08a';
    btnEl.style.color = '#ca8a04';
    btnEl.style.borderColor = '#fef08a';

    recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.toLowerCase().replace(/[.,?!]/g, '').trim();
        const target = targetText.toLowerCase().replace(/[.,?!]/g, '').trim();
        
        if(spoken.includes(target) || target.includes(spoken) || spoken === target) {
            btnEl.innerHTML = '<i class="fas fa-check"></i> Perfect!';
            btnEl.style.background = '#10b981';
            btnEl.style.color = 'white';
            btnEl.style.borderColor = '#10b981';
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            btnEl.innerHTML = '<i class="fas fa-times"></i> Failed';
            btnEl.style.background = '#ef4444';
            btnEl.style.color = 'white';
            btnEl.style.borderColor = '#ef4444';
            alert("You said: '" + spoken + "'\nTarget: '" + target + "'\nTry again!");
            setTimeout(() => { 
                btnEl.innerHTML = originalHtml; 
                btnEl.style.background = '#fff1f2'; 
                btnEl.style.color = '#e11d48'; 
                btnEl.style.borderColor = '#fecdd3';
            }, 2000);
        }
    };
    
    recognition.onerror = () => {
        btnEl.innerHTML = originalHtml;
        btnEl.style.background = '#fff1f2'; 
        btnEl.style.color = '#e11d48';
        btnEl.style.borderColor = '#fecdd3';
    };
    
    recognition.start();
}
