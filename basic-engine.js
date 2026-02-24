// =====================================================================
// SPOKEN HUB ENGINE (Basic to Intermediate)
// =====================================================================

let currentModuleId = null;
let currentSentenceIdx = 0;
let selectedWords = [];

// 1. OPEN THE THEORY OVERLAY (Cheat Sheet)
function openModule(id) {
    // Check if the data exists in our new spoken-db.js
    if(typeof spokenData === 'undefined' || !spokenData[id]) {
        alert("🛠️ Module in progress! Asif is currently engineering this.");
        return;
    }
    
    currentModuleId = id;
    const module = spokenData[id];
    
    document.getElementById('theory-title').innerText = module.title;
    document.getElementById('theory-content').innerHTML = module.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}

// 2. AI ROLEPLAY INTEGRATION HOOK
function triggerAIRoleplay() {
    const prompt = spokenData[currentModuleId].aiPrompt;
    if(prompt) {
        // For now, it alerts the prompt. Later, we will inject this directly into your Chat UI!
        alert("🤖 SYSTEM PROMPT READY FOR MINI CHAMP:\n\n" + prompt + "\n\n(We will connect this to the Global AI Chat UI next!)");
    } else {
        alert("Roleplay is being built for this module!");
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
    document.getElementById('eng-bn-text').innerText = data.bn;
    document.getElementById('success-area').style.display = 'none';
    
    selectedWords = [];
    const dropZone = document.getElementById('drop-zone');
    const wordBank = document.getElementById('word-bank');
    
    dropZone.innerHTML = '';
    wordBank.innerHTML = '';

    // Shuffle words randomly
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
    
    // Only check if they filled all slots
    if(selectedWords.length === data.words.length) {
        let formed = selectedWords.map(s => s.word).join(' ');
        
        if(formed === data.en) {
            // SUCCESS!
            document.getElementById('success-area').style.display = 'flex';
            document.getElementById('eng-explanation').innerText = "Perfect! Your sentence structure is flawless.";
            
            // If it's the last sentence in the module
            if (currentSentenceIdx === spokenData[currentModuleId].gameData.length - 1) {
                localStorage.setItem(currentModuleId + '_done', 'true');
                document.querySelector('.next-btn').innerText = "Finish Training";
            } else {
                document.querySelector('.next-btn').innerText = "Next Sentence";
            }
        } else {
            // WRONG! Shake animation
            const dropZone = document.getElementById('drop-zone');
            dropZone.classList.add('shake');
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
        window.location.reload(); // Reload to update the Home Page progress bar
    }
}
