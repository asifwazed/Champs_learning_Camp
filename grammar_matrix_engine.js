// =====================================================================
// THE PREMIUM GRAMMAR MATRIX ENGINE (Practice Mode)
// =====================================================================

// The exact sequence of all 100 modules
const sequence = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm10', 'm12', 'm13', 'm14', 'm15', 'm16', 'm18', 'm19', 'm20', 'm21', 'm22', 'm23', 'm24', 'm25', 'm26', 'm27', 'm28', 'm29', 'm30', 'm31', 'm32', 'm33', 'm34', 'm35', 'm36', 'm37', 'm38', 'm39', 'm40', 'm41', 'm42', 'm43', 'm44', 'm45', 'm46', 'm47', 'm48', 'm49', 'm50', 'm51', 'm52', 'm53', 'm54', 'm55', 'm56', 'm57', 'm58', 'm59', 'm60', 'm61', 'm62', 'm63', 'm64', 'm65', 'm66', 'm67', 'm68', 'm69', 'm70', 'm71', 'm72', 'm73', 'm74', 'm75', 'm76', 'm77', 'm78', 'm79', 'm80', 'm81', 'm82', 'm83', 'm84', 'm85', 'm86', 'm87', 'm88', 'm89', 'm90', 'm91', 'm92', 'm93', 'm94', 'm95', 'm96', 'm97', 'm98', 'm99', 'm100'];

let currentModule = null;
let quizScore = 0;
let currentQuestionIndex = 0;
let isAnswered = false;
let activeQuizData = []; 

// 1. Initialize UI (Unlock all & Show Checkmarks)
window.onload = function() {
    for (let i = 0; i < sequence.length; i++) {
        let mod = sequence[i];
        let card = document.getElementById('card-' + mod);
        
        if (!card) continue;
        card.classList.remove('locked'); 
        
        let icon = card.querySelector('.status-icon');
        if (icon) {
            let isDone = localStorage.getItem('grammar_' + mod + '_done') === 'true';
            if (isDone) {
                icon.className = 'fas fa-check-circle status-icon';
                icon.style.color = '#10b981'; 
            } else {
                icon.className = 'fas fa-book status-icon';
                icon.style.color = '#3b82f6'; 
            }
        }
    }
};

// 2. Open Premium Theory Overlay
window.openGrammarModule = function(id) {
    if (typeof matrixDB === 'undefined' || !matrixDB[id]) {
        alert("🛠️ Module is under construction! Check back soon.");
        return;
    }
    currentModule = id;
    const data = matrixDB[id];
    
    document.getElementById('theory-title').innerText = data.title;
    document.getElementById('theory-content').innerHTML = data.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

window.closeOverlay = function(id) {
    document.getElementById(id).style.display = 'none';
}

// 3. Start Rapid-Fire Quiz
window.startRapidFire = function() {
    activeQuizData = matrixDB[currentModule].quiz; 
    
    if (!activeQuizData || activeQuizData.length === 0) {
        alert("No quiz available for this module yet!");
        return;
    }

    document.getElementById('theory-overlay').style.display = 'none';
    document.getElementById('quiz-overlay').style.display = 'flex';
    
    quizScore = 0;
    currentQuestionIndex = 0;
    loadQuizQuestion();
}

// 4. Safe Question Loader
function loadQuizQuestion() {
    isAnswered = false;
    const qData = activeQuizData[currentQuestionIndex];
    const totalQ = activeQuizData.length;
    
    document.getElementById('quiz-progress').innerText = `Challenge ${currentQuestionIndex + 1} / ${totalQ}`;
    document.getElementById('quiz-question').innerText = qData.q;
    document.getElementById('quiz-explanation').style.display = 'none';
    document.getElementById('next-q-btn').style.display = 'none';
    
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    qData.options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.className = 'opt-btn-new'; // Using new premium class
        btn.innerText = opt;
        btn.onclick = () => selectQuizAnswer(index, btn);
        optsContainer.appendChild(btn);
    });
}

// 5. Bulletproof Answer Logic
function selectQuizAnswer(selectedIndex, btnElement) {
    if (isAnswered) return;
    isAnswered = true;
    
    const qData = activeQuizData[currentQuestionIndex];
    const optsContainer = document.getElementById('options-container');
    const allBtns = optsContainer.querySelectorAll('.opt-btn-new');
    
    // Safety check in case the database answer index is wrong
    let safeAnsIndex = qData.ans;
    if (safeAnsIndex >= allBtns.length) safeAnsIndex = allBtns.length - 1; 

    if (selectedIndex === safeAnsIndex) {
        btnElement.classList.add('correct');
        quizScore++;
    } else {
        btnElement.classList.add('wrong');
        // Show the actual correct answer
        if(allBtns[safeAnsIndex]) {
            allBtns[safeAnsIndex].classList.add('correct'); 
        }
    }
    
    const expBox = document.getElementById('quiz-explanation');
    expBox.innerHTML = `<strong>💡 Rule:</strong> ${qData.exp}`;
    expBox.style.display = 'block';
    
    const nextBtn = document.getElementById('next-q-btn');
    nextBtn.style.display = 'block';
    
    if (currentQuestionIndex === activeQuizData.length - 1) {
        nextBtn.innerHTML = 'See Results <i class="fas fa-flag-checkered" style="margin-left:5px;"></i>';
    } else {
        nextBtn.innerHTML = 'Next Question <i class="fas fa-arrow-right" style="margin-left:5px;"></i>';
    }
}

// 6. Navigation
window.nextQuizQuestion = function() {
    if (currentQuestionIndex < activeQuizData.length - 1) {
        currentQuestionIndex++;
        loadQuizQuestion();
    } else {
        finishQuiz();
    }
}

// 7. Finish & Save Progress
function finishQuiz() {
    closeOverlay('quiz-overlay');
    
    if (quizScore === activeQuizData.length) {
        // Passed Module!
        localStorage.setItem('grammar_' + currentModule + '_done', 'true');
        
        // Show success and reload UI
        alert("🎉 PERFECT SCORE!\n\nModule Mastered. You cracked the Matrix!");
        
        let card = document.getElementById('card-' + currentModule);
        if(card) {
            let icon = card.querySelector('.status-icon');
            if(icon) {
                icon.className = 'fas fa-check-circle status-icon';
                icon.style.color = '#10b981';
            }
        }
    } else {
        // Failed Module
        alert(`❌ You scored ${quizScore} out of ${activeQuizData.length}.\n\nYou must score perfectly to master a module. Review the rules and try again!`);
    }
}
