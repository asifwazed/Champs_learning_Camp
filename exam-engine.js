/* basic-engine.js - The Logic for the Learn & Play Engine */

let currentModuleId = null;
let currentQIndex = 0;
let selectedWords = [];

// 1. Open the "Teach" Overlay
function openModule(id) {
    const mod = basicDB[id];
    if(!mod) return alert("This module is locked or coming soon!");
    
    currentModuleId = id;
    
    document.getElementById('theory-title').innerText = mod.title;
    document.getElementById('theory-content').innerHTML = mod.theory;
    
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}

// 2. Start the "Play" Game
function startPractice() {
    closeOverlay('theory-overlay');
    document.getElementById('game-overlay').style.display = 'flex';
    
    const mod = basicDB[currentModuleId];
    document.getElementById('game-title').innerText = "Practice: " + mod.title;
    
    currentQIndex = 0;
    loadQuestion();
}

// 3. Load the interactive Lego Blocks
function loadQuestion() {
    selectedWords = [];
    document.getElementById('success-area').style.display = 'none';
    document.getElementById('drop-zone').innerHTML = '';
    
    const q = basicDB[currentModuleId].practice[currentQIndex];
    document.getElementById('eng-bn-text').innerText = q.bn;
    document.getElementById('eng-explanation').innerText = q.exp;

    const wordBank = document.getElementById('word-bank');
    wordBank.innerHTML = '';
    
    q.words.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'word-btn';
        btn.innerText = word;
        btn.onclick = () => handleWordClick(word, btn);
        wordBank.appendChild(btn);
    });
}

// 4. Handle block clicks and answer checking
function handleWordClick(word, btnElement) {
    const q = basicDB[currentModuleId].practice[currentQIndex];
    const expectedWord = q.correct[selectedWords.length]; 

    if (word === expectedWord) {
        selectedWords.push(word);
        btnElement.classList.add('hidden'); 
        
        const slot = document.createElement('div');
        slot.className = 'word-slot';
        slot.innerText = word;
        document.getElementById('drop-zone').appendChild(slot);

        if (selectedWords.length === q.correct.length) {
            setTimeout(() => {
                document.getElementById('success-area').style.display = 'flex';
                document.getElementById('word-bank').innerHTML = ''; 
                
                // OPTIONAL: Auto-play the audio when they win!
                playSentenceAudio();
            }, 300);
        }
    } else {
        btnElement.classList.remove('shake');
        void btnElement.offsetWidth; 
        btnElement.classList.add('shake');
        if (navigator.vibrate) navigator.vibrate(200); 
    }
}

// 5. AUDIO PRONUNCIATION LOGIC
function playSentenceAudio() {
    const q = basicDB[currentModuleId].practice[currentQIndex];
    const sentence = q.correct.join(" "); // Joins the blocks into a real sentence!
    
    window.speechSynthesis.cancel(); 
    let utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.85; // Slower so beginners can hear it clearly
    utterance.pitch = 1.1;

    let voices = window.speechSynthesis.getVoices();
    let bestVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Female'));
    if(bestVoice) utterance.voice = bestVoice;

    window.speechSynthesis.speak(utterance);
}

// 6. Move to the next sentence
function nextQuestion() {
    currentQIndex++;
    if (currentQIndex < basicDB[currentModuleId].practice.length) {
        loadQuestion();
    } else {
        alert("🎉 Congratulations Champ! You have completed this lesson!");
        closeOverlay('game-overlay');
    }
}
