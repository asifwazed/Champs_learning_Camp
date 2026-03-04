/* grammar_matrix_engine.js - Full Page & Crash-Proof Exam */

const MatrixEngine = {
    init: function() {
        this.renderMatrix();
    },
    
    renderMatrix: function() {
        const container = document.getElementById('matrix-container');
        let html = '';
        
        // Perfect 10-Tier System
        const tiers = [
            { limit: 10, name: "Tier 1: Foundations", color: "#16a34a", bg: "#f0fdf4" },
            { limit: 20, name: "Tier 2: Sentence Mechanics", color: "#f97316", bg: "#fff7ed" },
            { limit: 30, name: "Tier 3: The Board Traps", color: "#2563eb", bg: "#eff6ff" },
            { limit: 40, name: "Tier 4: Voice & Narration", color: "#e11d48", bg: "#fef2f2" },
            { limit: 50, name: "Tier 5: Confusing Pairs", color: "#c026d3", bg: "#fdf4ff" },
            { limit: 60, name: "Tier 6: Varsity Modifiers", color: "#0ea5e9", bg: "#f0f9ff" },
            { limit: 70, name: "Tier 7: Plurals & Prepositions", color: "#f59e0b", bg: "#fffbeb" },
            { limit: 80, name: "Tier 8: Phrasal Verbs", color: "#8b5cf6", bg: "#f5f3ff" },
            { limit: 90, name: "Tier 9: Advanced Connectors", color: "#14b8a6", bg: "#f0fdfa" },
            { limit: 100, name: "Tier 10: Grandmaster Rules", color: "#ef4444", bg: "#fef2f2" }
        ];

        // Fun rotating icons to make all 100 look cool!
        const funIcons = ['fa-bolt', 'fa-fire', 'fa-crown', 'fa-star', 'fa-rocket', 'fa-gem', 'fa-brain', 'fa-lightbulb', 'fa-compass', 'fa-magic'];

        let currentTierIndex = -1;

        for(let i=1; i<=100; i++) {
            let modId = 'm' + i;
            let data = matrixDB[modId];
            
            let tierIndex = tiers.findIndex(t => i <= t.limit);
            if(tierIndex !== currentTierIndex) {
                currentTierIndex = tierIndex;
                let tierDef = tiers[tierIndex];
                html += `<div class="section-title"><i class="fas fa-layer-group" style="color:${tierDef.color};"></i> ${tierDef.name}</div>`;
            }

            let iconClass = funIcons[i % funIcons.length];

            if(data) {
                let isDone = localStorage.getItem('grammar_' + modId + '_done') === 'true';
                html += `
                <div class="lesson-card magnet-element ${isDone ? 'done' : ''}" onclick="MatrixEngine.openModule('${modId}')">
                    <div class="l-icon" style="background:${tiers[tierIndex].bg}; color:${tiers[tierIndex].color};">
                        <i class="fas ${isDone ? 'fa-check-double' : iconClass}"></i>
                    </div>
                    <div class="l-info">
                        <h3>${i}. ${data.title}</h3>
                        <p>${isDone ? 'Completed Masterfully' : 'Tap to read & take exam'}</p>
                    </div>
                    <i class="fas ${isDone ? 'fa-check-circle' : 'fa-chevron-right'} status-icon"></i>
                </div>`;
            } else {
                // Beautiful placeholder for missing data
                html += `
                <div class="lesson-card magnet-element" onclick="alert('Asif is currently writing the theory for this module. Check back soon!')" style="opacity:0.7;">
                    <div class="l-icon" style="background:#f1f5f9; color:#94a3b8;"><i class="fas ${iconClass}"></i></div>
                    <div class="l-info">
                        <h3 style="color:#64748b;">${i}. Module ${i}</h3>
                        <p>Theory Under Construction</p>
                    </div>
                    <i class="fas fa-lock status-icon" style="color:#cbd5e1; font-size:14px;"></i>
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
        document.getElementById('quiz-overlay').style.display = 'flex';
        this.loadQuizQuestions();
    },

    loadQuizQuestions: function() {
        const data = matrixDB[window.currentModId];
        let html = '';
        
        data.quiz.forEach((qData, qIndex) => {
            html += `<div style="background:white; padding:20px; border-radius:16px; margin-bottom:20px; border:1px solid #e2e8f0; box-shadow:0 4px 10px rgba(0,0,0,0.02);">
                <div style="font-size: 16px; font-weight: 800; color: #1e293b; margin-bottom: 15px; line-height: 1.4;">${qIndex + 1}. ${qData.q}</div>`;
            
            qData.options.forEach((opt, oIndex) => {
                // FIXED THE BUG: Passing indices only. No string text in HTML!
                html += `<button class="opt-btn-new" id="gm-opt-${qIndex}-${oIndex}" onclick="MatrixEngine.checkQuizAnswer(${qIndex}, ${oIndex})">${['a','b','c','d'][oIndex]}) ${opt}</button>`;
            });
            
            html += `<div id="gm-exp-${qIndex}" style="display:none; margin-top:15px; padding:15px; background:#f0f9ff; border-left:4px solid #3b82f6; border-radius:8px; font-size:14px; color:#1e40af; line-height:1.5;"></div>
            </div>`;
        });
        
        document.getElementById('quiz-questions-container').innerHTML = html;
        document.getElementById('quiz-questions-container').scrollTop = 0;
    },

    checkQuizAnswer: function(qIndex, selectedIndex) {
        const data = matrixDB[window.currentModId];
        const qData = data.quiz[qIndex];
        const correctIndex = qData.ans;
        
        // Lock options for this specific question
        for(let i=0; i < qData.options.length; i++) {
            let btn = document.getElementById(`gm-opt-${qIndex}-${i}`);
            if(btn) {
                btn.disabled = true;
                btn.style.pointerEvents = 'none';
            }
        }
        
        let selectedBtn = document.getElementById(`gm-opt-${qIndex}-${selectedIndex}`);
        let correctBtn = document.getElementById(`gm-opt-${qIndex}-${correctIndex}`);
        
        if(selectedIndex === correctIndex) {
            selectedBtn.classList.add('correct');
            selectedBtn.innerHTML += ' <i class="fas fa-check-circle" style="float:right;"></i>';
            if(navigator.vibrate) navigator.vibrate(50);
        } else {
            selectedBtn.classList.add('wrong');
            selectedBtn.innerHTML += ' <i class="fas fa-times-circle" style="float:right;"></i>';
            correctBtn.classList.add('correct');
            if(navigator.vibrate) navigator.vibrate([50, 50, 50]);
        }
        
        let expBox = document.getElementById(`gm-exp-${qIndex}`);
        expBox.innerHTML = `<b>Rule:</b> ${qData.exp}`;
        expBox.style.display = 'block';
    },

    finishExam: function() {
        localStorage.setItem(`grammar_${window.currentModId}_done`, 'true');
        this.closeOverlay('quiz-overlay');
        this.renderMatrix(); 
        setTimeout(() => alert("🎉 Module Completed! Great job."), 200);
    }
};

window.onload = () => MatrixEngine.init();
