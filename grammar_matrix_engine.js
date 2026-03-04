/* grammar_matrix_engine.js - ALL MODULES UNLOCKED */

window.onload = function() {
    // Force UNLOCK everything on load so you can study!
    document.querySelectorAll('.lesson-card').forEach(card => {
        card.classList.remove('locked');
        card.style.opacity = '1';
        card.style.filter = 'none';
        card.style.pointerEvents = 'auto'; // Fixes the unclickable bug
        card.style.cursor = 'pointer';
        
        let icon = card.querySelector('.status-icon');
        if(icon && icon.classList.contains('fa-lock')) {
            icon.classList.remove('fa-lock');
            icon.classList.add('fa-unlock');
            icon.style.color = '#94a3b8';
        }
    });

    // Add Green Checkmark if done
    Object.keys(localStorage).forEach(key => {
        if(key.startsWith('grammar_m') && key.endsWith('_done') && localStorage.getItem(key) === 'true') {
            let modId = key.replace('grammar_', '').replace('_done', '');
            let card = document.getElementById('card-' + modId);
            if (card) {
                let icon = card.querySelector('.status-icon');
                if(icon) {
                    icon.className = 'fas fa-check-circle status-icon';
                    icon.style.color = '#10b981'; 
                }
            }
        }
    });
};

function openGrammarModule(modId) {
    if(!matrixDB[modId]) {
        alert("This module is currently under construction. Check back later!");
        return;
    }
    window.currentModId = modId;
    document.getElementById('theory-title').innerText = matrixDB[modId].title;
    document.getElementById('theory-content').innerHTML = matrixDB[modId].theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}

window.currentQuizIndex = 0;
function startRapidFire() {
    document.getElementById('theory-overlay').style.display = 'none';
    window.currentQuizIndex = 0;
    document.getElementById('quiz-overlay').style.display = 'flex';
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const data = matrixDB[window.currentModId];
    const qData = data.quiz[window.currentQuizIndex];
    document.getElementById('quiz-progress').innerText = `Question ${window.currentQuizIndex + 1} of ${data.quiz.length}`;
    document.getElementById('quiz-question').innerHTML = qData.q;
    
    let optsHtml = '';
    qData.opts.forEach((opt, idx) => {
        optsHtml += `<button class="opt-btn-new" onclick="checkQuizAnswer(${idx})">${opt}</button>`;
    });
    document.getElementById('options-container').innerHTML = optsHtml;
    document.getElementById('quiz-explanation').style.display = 'none';
    document.getElementById('next-q-btn').style.display = 'none';
}

function checkQuizAnswer(selectedIndex) {
    const data = matrixDB[window.currentModId];
    const qData = data.quiz[window.currentQuizIndex];
    const btns = document.querySelectorAll('.opt-btn-new');
    
    btns.forEach(btn => btn.disabled = true);
    
    if(selectedIndex === qData.ans) {
        btns[selectedIndex].classList.add('correct');
        btns[selectedIndex].innerHTML += ' <i class="fas fa-check-circle" style="float:right;"></i>';
    } else {
        btns[selectedIndex].classList.add('wrong');
        btns[selectedIndex].innerHTML += ' <i class="fas fa-times-circle" style="float:right;"></i>';
        btns[qData.ans].classList.add('correct');
    }
    
    document.getElementById('quiz-explanation').innerHTML = `<b>Rule:</b> ${qData.exp}`;
    document.getElementById('quiz-explanation').style.display = 'block';
    document.getElementById('next-q-btn').style.display = 'block';
}

function nextQuizQuestion() {
    const data = matrixDB[window.currentModId];
    window.currentQuizIndex++;
    if(window.currentQuizIndex < data.quiz.length) {
        loadQuizQuestion();
    } else {
        localStorage.setItem(`grammar_${window.currentModId}_done`, 'true');
        closeOverlay('quiz-overlay');
        location.reload(); 
    }
}
