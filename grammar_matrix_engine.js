// =====================================================================
// THE GRAMMAR MATRIX ENGINE
// =====================================================================

// The exact sequence of modules (IDs from HTML)
const sequence = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8', 'm10', 'm12', 'm13', 'm14', 'm15', 'm16', 'm18', 'm19', 'm20', 'm21', 'm22', 'm23', 'm24', 'm25', 'm26', 'm27', 'm28', 'm29', 'm30', 'm31', 'm32', 'm33', 'm34', 'm35', 'm36', 'm37', 'm38', 'm39', 'm40', 'm41', 'm42', 'm43', 'm44', 'm45', 'm46', 'm47', 'm48', 'm49', 'm50', 'm51', 'm52', 'm53', 'm54', 'm55', 'm56', 'm57', 'm58', 'm59', 'm60', 'm61', 'm62', 'm63', 'm64', 'm65', 'm66', 'm67', 'm68', 'm69', 'm70', 'm71', 'm72', 'm73', 'm74', 'm75', 'm76', 'm77', 'm78', 'm79', 'm80', 'm81', 'm82', 'm83', 'm84', 'm85', 'm86', 'm87', 'm88', 'm89', 'm90', 'm91', 'm92', 'm93', 'm94', 'm95', 'm96', 'm97', 'm98', 'm99', 'm100'];

let currentModule = null;
let quizScore = 0;
let currentQuestionIndex = 0;
let isAnswered = false;

// 1. Initialize the Matrix Map (ALL UNLOCKED)
window.onload = function() {
    for (let i = 0; i < sequence.length; i++) {
        let mod = sequence[i];
        let card = document.getElementById('card-' + mod);
        
        if (!card) continue;

        // Force remove the locked class from every card
        card.classList.remove('locked');
        
        // Change the icon to an open lock
        let icon = card.querySelector('.status-icon');
        if (icon) {
            let isDone = localStorage.getItem('grammar_' + mod + '_done') === 'true';
            if (isDone) {
                icon.className = 'fas fa-check-circle status-icon';
                icon.style.color = '#10b981'; // Green check for finished ones
            } else {
                icon.className = 'fas fa-lock-open status-icon';
                icon.style.color = '#3b82f6'; // Blue open lock for unfinished ones
            }
        }
    }
};

// 2. Open Theory Overlay
function openGrammarModule(id) {
    let card = document.getElementById('card-' + id);
    
    // THE LOCK CHECK HAS BEEN REMOVED HERE so you can click anything!

    if (typeof matrixDB === 'undefined' || !matrixDB[id]) {
        alert("🛠️ Module is under construction by Asif! Check back soon.");
        return;
    }

    currentModule = id;
    const data = matrixDB[id];
    
    document.getElementById('theory-title').innerText = data.title;
    document.getElementById('theory-content').innerHTML = data.theoryHTML;
    document.getElementById('theory-overlay').style.display = 'flex';
}

function closeOverlay(id) {
    document.getElementById(id).style.display = 'none';
}

// 3. Start Rapid-Fire Quiz
function startRapidFire() {
    document.getElementById('theory-overlay').style.display = 'none';
    document.getElementById('quiz-overlay').style.display = 'flex';
    
    quizScore = 0;
    currentQuestionIndex = 0;
    loadQuizQuestion();
}

function loadQuizQuestion() {
    isAnswered = false;
    const qData = matrixDB[currentModule].quiz[currentQuestionIndex];
    
    document.getElementById('quiz-progress').innerText = `Challenge ${currentQuestionIndex + 1} / 5`;
    document.getElementById('quiz-question').innerText = qData.q;
    document.getElementById('quiz-explanation').style.display = 'none';
    document.getElementById('next-q-btn').style.display = 'none';
    
    const optsContainer = document.getElementById('options-container');
    optsContainer.innerHTML = '';
    
    qData.options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => selectQuizAnswer(index, btn);
        optsContainer.appendChild(btn);
    });
}

function selectQuizAnswer(selectedIndex, btnElement) {
    if (isAnswered) return;
    isAnswered = true;
    
    const qData = matrixDB[currentModule].quiz[currentQuestionIndex];
    const allBtns = document.querySelectorAll('.opt-btn');
    
    if (selectedIndex === qData.ans) {
        btnElement.classList.add('correct');
        quizScore++;
    } else {
        btnElement.classList.add('wrong');
        allBtns[qData.ans].classList.add('correct'); // Highlight the right one
    }
    
    const expBox = document.getElementById('quiz-explanation');
    expBox.innerText = qData.exp;
    expBox.style.display = 'block';
    
    document.getElementById('next-q-btn').style.display = 'block';
    
    // Change button text if it's the last question
    if (currentQuestionIndex === 4) {
        document.getElementById('next-q-btn').innerHTML = 'See Results <i class="fas fa-flag-checkered"></i>';
    }
}

function nextQuizQuestion() {
    if (currentQuestionIndex < 4) {
        currentQuestionIndex++;
        loadQuizQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    closeOverlay('quiz-overlay');
    
    if (quizScore === 5) {
        alert("🎉 5 out of 5! PERFECT SCORE!\n\nAccess Granted. The next module has been unlocked on your map.");
        localStorage.setItem('grammar_' + currentModule + '_done', 'true');
        window.location.reload(); // Reload to update the map locks
    } else {
        alert(`❌ You scored ${quizScore} out of 5.\n\nAccess Denied. You must score a perfect 5/5 to unlock the next level. Review the formula and try again!`);
    }
}
