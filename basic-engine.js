/* basic-engine.js - Spoken Hub Engine with Voice Lab */

const BasicEngine = {
    init: function() {
        this.renderHeader();
        this.renderTabs();
        this.renderModules('tier1');
    },

    renderHeader: function() {
        const html = `
            <div class="header" style="padding: 25px 20px 20px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; align-items: center; gap: 15px; position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(255, 255, 255, 0.1); color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <a href="index.html" style="color: white; text-decoration: none; font-size: 20px; background: rgba(255,255,255,0.1); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.2); transition: 0.2s;"><i class="fas fa-arrow-left"></i></a>
                <div>
                    <h2 style="font-family: 'Outfit'; font-size: 22px; font-weight: 800; margin: 0;">Spoken Hub</h2>
                    <div style="font-size: 12px; color: #94a3b8;">Basic to Intermediate</div>
                </div>
            </div>
        `;
        document.getElementById('header-slot').innerHTML = html;
    },

    renderTabs: function() {
        const tiers = [
            { id: 'tier1', name: 'Survival' },
            { id: 'tier2', name: 'Street Smart' },
            { id: 'tier3', name: 'Formal' }
        ];
        
        let html = '';
        tiers.forEach((t, index) => {
            html += `<button onclick="BasicEngine.renderModules('${t.id}')" class="tab-btn" id="btn-${t.id}" style="flex:1; padding:10px; border-radius:8px; border:none; font-weight:bold; font-family:'Outfit'; cursor:pointer; transition:0.3s; background:${index === 0 ? '#3b82f6' : 'transparent'}; color:${index === 0 ? 'white' : '#64748b'};">${t.name}</button>`;
        });
        document.getElementById('tab-container').innerHTML = html;
    },

    renderModules: function(tierId) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.style.background = 'transparent'; btn.style.color = '#64748b';
        });
        const activeBtn = document.getElementById('btn-' + tierId);
        if(activeBtn) { activeBtn.style.background = '#3b82f6'; activeBtn.style.color = 'white'; }

        let html = '<div style="display:flex; flex-direction:column; gap:15px; animation:fadeIn 0.3s;">';
        
        let tierKeys = [];
        if(tierId === 'tier1') tierKeys = ['s1', 's2', 's3'];
        else if(tierId === 'tier2') tierKeys = ['s11', 's12', 's13'];
        // FIXED: Added s23 and s24 so the new modules actually show up!
        else if(tierId === 'tier3') tierKeys = ['s20', 's21', 's22', 's23', 's24']; 

        tierKeys.forEach(key => {
            // FIXED: Using basicDB instead of spokenData to match your database file
            if(typeof basicDB !== 'undefined' && basicDB[key]) {
                let isDone = localStorage.getItem(key + '_done') === 'true';
                html += `
                    <div onclick="BasicEngine.openModule('${key}')" style="background:white; padding:20px; border-radius:16px; border:1px solid #e2e8f0; box-shadow:0 4px 10px rgba(0,0,0,0.03); display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                        <div>
                            <h3 style="margin:0 0 5px; font-family:'Outfit'; font-size:16px; color:#1e293b;">${basicDB[key].title}</h3>
                            <div style="font-size:12px; font-weight:bold; color:${isDone ? '#10b981' : '#94a3b8'};">
                                ${isDone ? '<i class="fas fa-check-circle"></i> Completed' : '<i class="fas fa-lock-open"></i> Tap to learn'}
                            </div>
                        </div>
                        <i class="fas fa-chevron-right" style="color:#cbd5e1;"></i>
                    </div>
                `;
            }
        });
        html += '</div>';
        document.getElementById('module-container').innerHTML = html;
    },

    openModule: function(modId) {
        if(typeof basicDB === 'undefined' || !basicDB[modId]) {
            alert("🛠️ Error: Database not loaded properly.");
            return;
        }
        
        const modData = basicDB[modId];
        window.currentModuleId = modId;
        
        let html = `
            <button onclick="BasicEngine.renderModules('tier1')" style="background:none; border:none; color:#3b82f6; font-weight:bold; font-size:14px; margin-bottom:15px; cursor:pointer;"><i class="fas fa-arrow-left"></i> Back to list</button>
            <h2 style="font-family:'Outfit'; margin-bottom:20px; color:#1e293b;">${modData.title}</h2>
        `;
        
        html += this.renderTheory(modData);
        html += this.renderVoiceLab(modData);
        html += this.renderPractice(modData, modId);
        
        document.getElementById('module-container').innerHTML = html;
        window.scrollTo(0, 0);
    },

    renderTheory: function(modData) {
        let safeText = modData.theoryHTML.replace(/<[^>]*>?/gm, ' ').replace(/'/g, "\\'").replace(/"/g, "&quot;").replace(/\n/g, " ");

        let html = `<div style="background:white; padding:20px; border-radius:16px; border:1px solid #e2e8f0; box-shadow:0 4px 15px rgba(0,0,0,0.05); margin-bottom:20px; position:relative;">`;
        
        html += `<button onclick="window.playTheoryAudio('${safeText}')" style="position:absolute; top:20px; right:20px; background:#eff6ff; border:1px solid #bfdbfe; color:#3b82f6; width:40px; height:40px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:0.2s;"><i class="fas fa-volume-up"></i></button>`;
        
        html += modData.theoryHTML;
        
        if(modData.aiPrompt) {
            html += `<button onclick="if(typeof startAIRoleplay === 'function') startAIRoleplay('${modData.aiPrompt.replace(/'/g, "\\'")}')" style="width:100%; background:linear-gradient(135deg, #10b981, #059669); color:white; border:none; padding:15px; border-radius:12px; font-weight:bold; font-size:15px; font-family:'Outfit'; margin-top:20px; cursor:pointer; box-shadow:0 5px 15px rgba(16,185,129,0.3);"><i class="fas fa-robot"></i> Practice with AI Bot</button>`;
        }
        html += `</div>`;
        return html;
    },

    renderVoiceLab: function(modData) {
        if(!modData.gameData || modData.gameData.length === 0) return '';
        
        let html = `<h3 style="font-family:'Outfit'; font-size:16px; margin-top:25px; margin-bottom:10px; color:#1e293b;"><i class="fas fa-microphone" style="color:#ef4444;"></i> Pronunciation Lab</h3>`;
        html += `<p style="font-size:12px; color:#64748b; margin-bottom:15px;">Tap the mic and speak the English sentence out loud.</p>`;
        
        modData.gameData.forEach((q, index) => {
            let safeEn = q.en.replace(/'/g, "\\'");
            html += `
            <div style="background:white; padding:15px; border-radius:16px; border:1px solid #e2e8f0; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 8px rgba(0,0,0,0.02);">
                <div>
                    <div style="font-size:12px; color:#64748b; margin-bottom:5px;">${q.bn}</div>
                    <div style="font-weight:800; color:#1e293b; font-size:15px;">${q.en}</div>
                </div>
                <button onclick="window.testPronunciation('${safeEn}', this)" style="background:#fff1f2; color:#e11d48; border:1px solid #fecdd3; width:45px; height:45px; border-radius:50%; font-size:18px; cursor:pointer; flex-shrink:0; display:flex; align-items:center; justify-content:center; transition:0.2s;"><i class="fas fa-microphone"></i></button>
            </div>`;
        });
        return html;
    },

    renderPractice: function(modData, modId) {
        if(!modData.gameData || modData.gameData.length === 0) return '';
        
        let html = `<h3 style="font-family:'Outfit'; font-size:16px; margin-top:25px; margin-bottom:15px; color:#475569;"><i class="fas fa-puzzle-piece" style="color:#3b82f6;"></i> Sentence Builders</h3>`;
        modData.gameData.forEach((q, index) => {
            let shuffled = [...q.words].sort(() => Math.random() - 0.5);
            html += `
                <div style="background:white; padding:20px; border-radius:16px; border:1px solid #e2e8f0; margin-bottom:15px; box-shadow:0 2px 8px rgba(0,0,0,0.02);">
                    <p style="font-weight:bold; font-size:14px; color:#3b82f6; margin-bottom:10px;">Translate: "${q.bn}"</p>
                    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:15px;">
                        ${shuffled.map(w => `<button class="word-btn" onclick="BasicEngine.checkAnswer(this, '${w === q.en}')" style="background:#f8fafc; border:1px solid #cbd5e1; padding:8px 15px; border-radius:8px; font-weight:bold; color:#1e293b; cursor:pointer;">${w}</button>`).join('')}
                    </div>
                </div>
            `;
        });
        
        html += `<button onclick="localStorage.setItem('${modId}_done', 'true'); alert('Module Marked as Complete! ✅'); BasicEngine.renderModules('tier1');" style="width:100%; background:#1e293b; color:white; border:none; padding:15px; border-radius:12px; font-weight:bold; font-size:15px; font-family:'Outfit'; cursor:pointer; margin-top:10px;"><i class="fas fa-check"></i> Complete Module</button>`;
        return html;
    },

    checkAnswer: function(btn, isCorrect) {
        if(isCorrect === 'false') {
            btn.style.background = '#ef4444'; btn.style.color = 'white'; btn.style.borderColor = '#ef4444';
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
            setTimeout(() => { btn.style.background = '#f8fafc'; btn.style.color = '#1e293b'; btn.style.borderColor = '#cbd5e1'; }, 1000);
        } else {
            btn.style.background = '#10b981'; btn.style.color = 'white'; btn.style.borderColor = '#10b981';
            if(navigator.vibrate) navigator.vibrate(50);
        }
    }
};

window.playTheoryAudio = function(text) {
    if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        let utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.85; 
        window.speechSynthesis.speak(utterance);
    }
};

window.testPronunciation = function(targetText, btnEl) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SpeechRecognition) {
        alert("Your browser does not support Voice Recognition.");
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    
    let originalHtml = btnEl.innerHTML;
    btnEl.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    btnEl.style.background = '#fef08a';
    btnEl.style.color = '#ca8a04';
    btnEl.style.borderColor = '#fef08a';

    recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.toLowerCase().replace(/[.,?!]/g, '').trim();
        const target = targetText.toLowerCase().replace(/[.,?!]/g, '').trim();
        
        if(spoken.includes(target) || target.includes(spoken) || spoken === target) {
            btnEl.innerHTML = '<i class="fas fa-check"></i>';
            btnEl.style.background = '#10b981';
            btnEl.style.color = 'white';
            btnEl.style.borderColor = '#10b981';
        } else {
            btnEl.innerHTML = '<i class="fas fa-times"></i>';
            btnEl.style.background = '#ef4444';
            btnEl.style.color = 'white';
            btnEl.style.borderColor = '#ef4444';
            alert("You said: '" + spoken + "'\\nTry again!");
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
};

window.onload = () => BasicEngine.init();
