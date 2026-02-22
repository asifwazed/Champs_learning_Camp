/* basic-engine.js - The Logic for the Learn, Play & Speak Engine */

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

// 3. Load the interactive Lego Blocks (UPGRADED TO FALLING MINIGAME)
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
    
    // Transform the container into a Dark Arcade Window
    wordBank.style.display = 'block';
    wordBank.style.position = 'relative';
    wordBank.style.height = '280px';
    wordBank.style.overflow = 'hidden';
    wordBank.style.background = 'linear-gradient(180deg, #1e293b, #0f172a)';
    wordBank.style.border = '2px solid #334155';
    wordBank.style.borderRadius = '24px';
    wordBank.style.boxShadow = 'inset 0 10px 30px rgba(0,0,0,0.5)';

    // Inject CSS for the falling animation
    if(!document.getElementById('falling-css')) {
        const style = document.createElement('style');
        style.id = 'falling-css';
        style.innerHTML = `
            @keyframes fallDown { 0% { top: -50px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
            .falling-word { position: absolute; background: linear-gradient(135deg, #3b82f6, #6366f1); color: white; padding: 12px 25px; border-radius: 50px; font-weight: 800; cursor: pointer; box-shadow: 0 10px 20px rgba(0,0,0,0.3); border: 2px solid rgba(255,255,255,0.2); font-size: 16px; white-space: nowrap; transition: transform 0.1s, background 0.3s; z-index: 10; }
            .falling-word:active { transform: scale(0.9); }
        `;
        document.head.appendChild(style);
    }
    
    wordBank.innerHTML = '<div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); color:#334155; font-weight:900; font-size:24px; opacity:0.4; letter-spacing:2px; pointer-events:none; text-align:center;">CATCH THE WORDS<br><i class="fas fa-meteor" style="font-size:30px; margin-top:10px;"></i></div>';

    // Spawn the falling words
    q.words.forEach((word) => {
        const btn = document.createElement('button');
        btn.className = 'falling-word';
        btn.innerText = word;
        
        // Random horizontal position (5% to 65% to stay on screen)
        btn.style.left = Math.floor(Math.random() * 60) + 5 + '%'; 
        
        // Random fall speed (4s to 6.5s) and random start delay (0s to 1.5s)
        let duration = (Math.random() * 2.5) + 4; 
        let delay = Math.random() * 1.5; 
        btn.style.animation = `fallDown ${duration}s linear ${delay}s infinite`;
        
        btn.onclick = () => handleWordClick(word, btn);
        wordBank.appendChild(btn);
    });
}

// 4. Handle block clicks and answer checking
function handleWordClick(word, btnElement) {
    const q = basicDB[currentModuleId].practice[currentQIndex];
    const expectedWord = q.correct[selectedWords.length]; 

    if (word === expectedWord) {
        // Correct catch!
        selectedWords.push(word);
        btnElement.style.display = 'none'; 
        
        const slot = document.createElement('div');
        slot.className = 'word-slot';
        slot.innerText = word;
        slot.style.animation = 'popIn 0.3s ease-out';
        document.getElementById('drop-zone').appendChild(slot);

        // If sentence is finished
        if (selectedWords.length === q.correct.length) {
            setTimeout(() => {
                document.getElementById('word-bank').style.display = 'none'; // Hide arcade window
                injectSpeechEngine(q.correct.join(" ")); // Launch the Mic!
            }, 300);
        }
    } else {
        // Wrong catch! Flash red but keep falling
        btnElement.style.background = '#ef4444';
        btnElement.style.borderColor = '#b91c1c';
        setTimeout(() => {
            btnElement.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)';
            btnElement.style.borderColor = 'rgba(255,255,255,0.2)';
        }, 500);
        if (navigator.vibrate) navigator.vibrate(200); 
    }
}

// 5. THE NEW SPEECH-TO-TEXT ENGINE 🎙️
function injectSpeechEngine(correctSentence) {
    // Check if browser supports speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if(!SpeechRecognition) {
        // Fallback for unsupported browsers (just show next button)
        document.getElementById('success-area').style.display = 'flex';
        return;
    }

    let wordBank = document.getElementById('word-bank');
    
    // Create the Mic UI
    wordBank.innerHTML = `
        <div id="mic-area" style="text-align:center; padding:20px; background:#eff6ff; border-radius:20px; border:2px dashed #3b82f6; width:100%; margin-top:20px; animation: popIn 0.3s ease-out;">
            <div style="font-size:12px; font-weight:800; color:#3b82f6; margin-bottom:15px; letter-spacing:1px;">NOW READ IT OUT LOUD!</div>
            
            <button id="mic-btn" onclick="startListening('${correctSentence}')" style="width:70px; height:70px; border-radius:50%; background:linear-gradient(135deg, #3b82f6, #6366f1); color:white; border:none; font-size:25px; box-shadow:0 10px 25px rgba(59, 130, 246, 0.4); cursor:pointer; transition:0.2s;">
                <i class="fas fa-microphone"></i>
            </button>
            
            <div id="mic-feedback" style="margin-top:15px; font-weight:700; color:#1e293b; font-size:15px; min-height:22px;">Tap mic to speak...</div>
            
            <button id="skip-mic-btn" onclick="document.getElementById('success-area').style.display='flex'; this.style.display='none';" style="margin-top:15px; background:none; border:none; color:#94a3b8; font-weight:600; font-size:12px; cursor:pointer;">Skip speaking</button>
        </div>
    `;
}

// Trigger the Listening Hardware
window.startListening = function(targetSentence) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    const btn = document.getElementById('mic-btn');
    const feedback = document.getElementById('mic-feedback');
    
    // Visual feedback that it's listening
    btn.style.transform = 'scale(1.1)';
    btn.style.background = '#ef4444'; // Turns red while listening
    btn.innerHTML = '<i class="fas fa-ear-listen" class="flash"></i>';
    feedback.innerText = "Listening...";
    feedback.style.color = "#ef4444";

    recognition.start();

    recognition.onresult = (event) => {
        let transcript = event.results[0][0].transcript.toLowerCase();
        let cleanTarget = targetSentence.toLowerCase().replace(/[.,?!]/g, "");
        let cleanTranscript = transcript.replace(/[.,?!]/g, "");
        
        btn.style.transform = 'scale(1)';
        btn.style.background = 'linear-gradient(135deg, #10b981, #059669)'; // Turns green on processing
        btn.innerHTML = '<i class="fas fa-microphone"></i>';

        // Check if what they said matches the sentence
        if(cleanTranscript.includes(cleanTarget) || cleanTarget.includes(cleanTranscript)) {
            feedback.innerHTML = `<span style="color:#10b981;"><i class="fas fa-check-circle"></i> Perfect Pronunciation!</span>`;
            if(navigator.vibrate) navigator.vibrate([100, 100]);
            
            // Show the "Next" button automatically
            setTimeout(() => {
                document.getElementById('mic-area').style.display = 'none';
                document.getElementById('success-area').style.display = 'flex';
            }, 1500);

        } else {
            feedback.innerHTML = `<span style="color:#ef4444;">I heard: "${transcript}". Try again!</span>`;
            btn.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)'; // Reset to blue
            if(navigator.vibrate) navigator.vibrate(200);
        }
    };

    recognition.onerror = (event) => {
        btn.style.transform = 'scale(1)';
        btn.style.background = 'linear-gradient(135deg, #3b82f6, #6366f1)';
        btn.innerHTML = '<i class="fas fa-microphone"></i>';
        feedback.innerHTML = `<span style="color:#f59e0b;"><i class="fas fa-exclamation-triangle"></i> Couldn't hear you clearly.</span>`;
    };
}

// 6. Move to the next sentence or finish
function nextQuestion() {
    currentQIndex++;
    if (currentQIndex < basicDB[currentModuleId].practice.length) {
        loadQuestion();
    } else {
        localStorage.setItem(currentModuleId + '_done', 'true'); // Save Progress to Profile!
        alert("🎉 Congratulations Champ! You have completed this lesson!");
        closeOverlay('game-overlay');
        location.reload(); // Reload to update Profile Level
    }
}
