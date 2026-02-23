/* basic-engine.js - Stable Learn & Speak Engine */

let currentModuleId = null;
let currentQIndex = 0;
let selectedWords = [];

function openModule(id) {
    const mod = basicDB[id];
    if(!mod) return alert("This module is locked or coming soon!");
    currentModuleId = id;
    document.getElementById('theory-title').innerText = mod.title;
    document.getElementById('theory-content').innerHTML = mod.theory;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(overlayId) { document.getElementById(overlayId).style.display = 'none'; }

function startPractice() {
    closeOverlay('theory-overlay');
    document.getElementById('game-overlay').style.display = 'flex';
    document.getElementById('game-title').innerText = "Practice: " + basicDB[currentModuleId].title;
    currentQIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    selectedWords = [];
    document.getElementById('success-area').style.display = 'none';
    document.getElementById('drop-zone').innerHTML = '';
    const micArea = document.getElementById('mic-area');
    if(micArea) micArea.style.display = 'none';

    const q = basicDB[currentModuleId].practice[currentQIndex];
    document.getElementById('eng-bn-text').innerText = q.bn;
    document.getElementById('eng-explanation').innerText = q.exp;

    const wordBank = document.getElementById('word-bank');
    wordBank.innerHTML = '';
    wordBank.style.display = 'flex'; // Ensure it's visible
    
    // Scramble the words array so it's not in order
    let scrambled = [...q.words].sort(() => Math.random() - 0.5);
    
    scrambled.forEach(word => {
        const btn = document.createElement('button');
        btn.className = 'word-btn';
        btn.innerText = word;
        btn.onclick = () => handleWordClick(word, btn);
        wordBank.appendChild(btn);
    });
}

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
                document.getElementById('word-bank').style.display = 'none'; 
                injectSpeechEngine(q.correct.join(" ")); 
            }, 300);
        }
    } else {
        btnElement.classList.remove('shake');
        void btnElement.offsetWidth; 
        btnElement.classList.add('shake');
        btnElement.style.background = "#fee2e2";
        btnElement.style.color = "#ef4444";
        setTimeout(() => { btnElement.style.background = "white"; btnElement.style.color = "#0f172a"; }, 400);
        if (navigator.vibrate) navigator.vibrate(200); 
    }
}

function injectSpeechEngine(correctSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) { document.getElementById('success-area').style.display = 'flex'; return; }

    let wordBank = document.getElementById('word-bank');
    wordBank.style.display = 'block';
    wordBank.innerHTML = `
        <div id="mic-area" style="text-align:center; padding:20px; background:#1e293b; border-radius:20px; border:2px dashed #3b82f6; width:100%; animation: popIn 0.3s ease-out;">
            <div style="font-size:12px; font-weight:800; color:#38bdf8; margin-bottom:15px; letter-spacing:1px;">NOW READ IT OUT LOUD!</div>
            <button id="mic-btn" onclick="startListening('${correctSentence.replace(/'/g, "\\'")}')" style="width:70px; height:70px; border-radius:50%; background:linear-gradient(135deg, #3b82f6, #6366f1); color:white; border:none; font-size:25px; box-shadow:0 10px 25px rgba(59, 130, 246, 0.4); cursor:pointer; transition:0.2s;">
                <i class="fas fa-microphone"></i>
            </button>
            <div id="mic-feedback" style="margin-top:15px; font-weight:700; color:#f8fafc; font-size:15px; min-height:22px;">Tap mic to speak...</div>
            <button onclick="document.getElementById('word-bank').style.display='none'; document.getElementById('success-area').style.display='flex';" style="margin-top:15px; background:none; border:none; color:#94a3b8; font-weight:600; font-size:12px; cursor:pointer; text-decoration:underline;">Skip speaking</button>
        </div>
    `;
}

window.startListening = function(targetSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; recognition.interimResults = false;
    
    const btn = document.getElementById('mic-btn');
    const feedback = document.getElementById('mic-feedback');
    
    btn.style.transform = 'scale(1.1)'; btn.style.background = '#ef4444'; 
    btn.innerHTML = '<i class="fas fa-ear-listen" class="flash"></i>';
    feedback.innerText = "Listening..."; feedback.style.color = "#ef4444";

    recognition.start();

    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript.toLowerCase();
        let cleanTarget = targetSentence.toLowerCase().replace(/[.,?!]/g, "");
        let cleanTranscript = transcript.replace(/[.,?!]/g, "");
        
        btn.style.transform = 'scale(1)'; btn.style.background = '#10b981'; btn.innerHTML = '<i class="fas fa-microphone"></i>';

        if(cleanTranscript.includes(cleanTarget) || cleanTarget.includes(cleanTranscript)) {
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-check-circle"></i> Perfect Pronunciation!</span>`;
            setTimeout(() => {
                document.getElementById('word-bank').style.display = 'none';
                document.getElementById('success-area').style.display = 'flex';
            }, 1500);
        } else {
            feedback.innerHTML = `<span style="color:#ef4444;">I heard: "${transcript}". Try again!</span>`;
            btn.style.background = '#3b82f6'; 
        }
    };
    recognition.onerror = () => {
        btn.style.transform = 'scale(1)'; btn.style.background = '#3b82f6'; btn.innerHTML = '<i class="fas fa-microphone"></i>';
        feedback.innerHTML = `<span style="color:#f59e0b;"><i class="fas fa-exclamation-triangle"></i> Couldn't hear clearly.</span>`;
    };
}

function nextQuestion() {
    currentQIndex++;
    if (currentQIndex < basicDB[currentModuleId].practice.length) {
        loadQuestion();
    } else {
        localStorage.setItem(currentModuleId + '_done', 'true'); 
        alert("🎉 Congratulations Champ! Lesson Complete!");
        closeOverlay('game-overlay');
        location.reload(); 
    }
}
