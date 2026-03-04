/* grammar_matrix_engine.js - Perfect Generation & Exam Fix */

const MatrixEngine = {
    init: function() {
        this.renderMatrix();
    },
    
    renderMatrix: function() {
        const container = document.getElementById('matrix-container');
        let html = '';
        
        // Define the Tiers
        const tiers = [
            { limit: 4, name: "Tier 1: Foundations", icon: "fa-layer-group", color: "#16a34a", bg: "#f0fdf4" },
            { limit: 8, name: "Tier 2: The Toolkit", icon: "fa-toolbox", color: "#f97316", bg: "#fff7ed" },
            { limit: 13, name: "Tier 3: Time Machine", icon: "fa-clock", color: "#2563eb", bg: "#eff6ff" },
            { limit: 17, name: "Tier 4: HSC Core", icon: "fa-link", color: "#e11d48", bg: "#fef2f2" },
            { limit: 20, name: "Tier 5: Shape-Shifters", icon: "fa-random", color: "#c026d3", bg: "#fdf4ff" },
            { limit: 23, name: "Tier 6: Advanced Details", icon: "fa-search-plus", color: "#0ea5e9", bg: "#f0f9ff" },
            { limit: 26, name: "Tier 7: Exceptions", icon: "fa-exclamation-triangle", color: "#f59e0b", bg: "#fffbeb" },
            { limit: 100, name: "Tier 8: Final Traps & Expansion", icon: "fa-skull", color: "#ef4444", bg: "#fef2f2" }
        ];

        let currentTierIndex = -1;

        // Automatically build all 100 modules directly from the database!
        for(let i=1; i<=100; i++) {
            let modId = 'm' + i;
            let data = matrixDB[modId];
            
            // Figure out which Tier heading to draw
            let tierIndex = tiers.findIndex(t => i <= t.limit);
            if(tierIndex !== currentTierIndex) {
                currentTierIndex = tierIndex;
                let tierDef = tiers[tierIndex];
                html += `<div class="section-title"><i class="fas ${tierDef.icon}" style="color:${tierDef.color};"></i> ${tierDef.name}</div>`;
            }

            if(data) {
                // If module exists, render it beautifully
                let isDone = localStorage.getItem('grammar_' + modId + '_done') === 'true';
                html += `
                <div class="lesson-card magnet-element ${isDone ? 'done' : ''}" onclick="MatrixEngine.openModule('${modId}')">
                    <div class="l-icon" style="background:${tiers[tierIndex].bg}; color:${tiers[tierIndex].color};">
                        <i class="fas ${isDone ? 'fa-check-double' : 'fa-book-open'}"></i>
                    </div>
                    <div class="l-info">
                        <h3>${i}. ${data.title}</h3>
                        <p>${isDone ? 'Completed Masterfully' : 'Tap to study and take exam'}</p>
                    </div>
                    <i class="fas ${isDone ? 'fa-check-circle' : 'fa-chevron-right'} status-icon"></i>
                </div>`;
            } else {
                // If it doesn't exist yet, show under construction (but don't break the page)
                html += `
                <div class="lesson-card" style="opacity:0.5; cursor:not-allowed;">
                    <div class="l-icon" style="background:#f1f5f9; color:#94a3b8;"><i class="fas fa-tools"></i></div>
                    <div class="l-info">
                        <h3 style="color:#94a3b8;">${i}. Module ${i}</h3>
                        <p>Under Construction.</p>
                    </div>
                    <i class="fas fa-lock status-icon" style="color:#cbd5e1;"></i>
                </div>`;
            }
        }
        container.innerHTML = html;
    },

    openModule: function(modId) {
        window.currentModId = modId;
        const data = matrixDB[modId];
        document.getElementById('theory-title').innerText = data.title;
        document.getElementById('theory-content').innerHTML = data.theoryHTML;
        document.getElementById('theory-overlay').style.display = 'flex';
        document.getElementById('theory-content').scrollTop = 0;
    },

    closeOverlay: function(id) {
        document.getElementById(id).style.display = 'none';
    },

    startRapidFire: function() {
        this.closeOverlay('theory-overlay');
        window.currentQuizIndex = 0;
        document.getElementById('quiz-overlay').style.display = 'flex';
        this.loadQuizQuestion();
    },

    loadQuizQuestion: function() {
        const data = matrixDB[window.currentModId];
        const qData = data.quiz[window.currentQuizIndex];
        
        document.getElementById('quiz-progress').innerText = `Question ${window.currentQuizIndex + 1} of ${data.quiz.length}`;
        document.getElementById('quiz-question').innerHTML = qData.q;
        
        let optsHtml = '';
        // THIS WAS THE BUG CAUSING CRASHES! Changed 'opts' to 'options' to match DB.
        qData.options.forEach((opt, idx) => {
            optsHtml += `<button class="opt-btn-new" onclick="MatrixEngine.checkQuizAnswer(${idx})">${opt}</button>`;
        });
        document.getElementById('options-container').innerHTML = optsHtml;
        document.getElementById('quiz-explanation').style.display = 'none';
        document.getElementById('next-q-btn').style.display = 'none';
    },

    checkQuizAnswer: function(selectedIndex) {
        const data = matrixDB[window.currentModId];
        const qData = data.quiz[window.currentQuizIndex];
        const btns = document.querySelectorAll('.opt-btn-new');
        
        btns.forEach(btn => {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        });
        
        if(selectedIndex === qData.ans) {
            btns[selectedIndex].classList.add('correct');
            btns[selectedIndex].innerHTML += ' <i class="fas fa-check-circle" style="float:right;"></i>';
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            btns[selectedIndex].classList.add('wrong');
            btns[selectedIndex].innerHTML += ' <i class="fas fa-times-circle" style="float:right;"></i>';
            btns[qData.ans].classList.add('correct');
            if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
        }
        
        document.getElementById('quiz-explanation').innerHTML = `<b>Rule:</b> ${qData.exp}`;
        document.getElementById('quiz-explanation').style.display = 'block';
        
        const nextBtn = document.getElementById('next-q-btn');
        if (window.currentQuizIndex + 1 >= data.quiz.length) {
            nextBtn.innerHTML = 'Finish Module <i class="fas fa-trophy" style="margin-left:5px;"></i>';
            nextBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        } else {
            nextBtn.innerHTML = 'Next Question <i class="fas fa-arrow-right" style="margin-left:5px;"></i>';
            nextBtn.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
        }
        nextBtn.style.display = 'block';
    },

    nextQuizQuestion: function() {
        const data = matrixDB[window.currentModId];
        window.currentQuizIndex++;
        
        if(window.currentQuizIndex < data.quiz.length) {
            this.loadQuizQuestion();
        } else {
            // Save progress and update UI instantly
            localStorage.setItem(`grammar_${window.currentModId}_done`, 'true');
            this.closeOverlay('quiz-overlay');
            this.renderMatrix(); // Re-draws the list with the new green checkmark
            
            setTimeout(() => alert("🎉 Module Completed Masterfully!"), 200);
        }
    }
};

// Initialize instantly when page loads
window.onload = () => MatrixEngine.init();
