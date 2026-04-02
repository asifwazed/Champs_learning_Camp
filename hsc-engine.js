const HSCVocabEngine = {
    init: function() {
        this.renderVocab();
    },

    renderVocab: function() {
        const container = document.getElementById('vocab-container');
        if(!container) return;

        // Smart Error Checker
        if (typeof hscVocabDB === 'undefined') {
            container.innerHTML = `<div style="color: #ef4444; padding: 20px; text-align: center; font-weight: 800; border: 1px solid #ef4444; border-radius: 15px;">
                <i class="fas fa-exclamation-triangle"></i><br>ERROR: 'hsc-db.js' is missing or has a comma error!
            </div>`;
            document.querySelector('.fa-database').parentElement.style.display = 'none';
            return;
        }

        let html = '';
        hscVocabDB.forEach(item => {
            html += `
            <div class="v-item animate-up">
                <div class="v-left">
                    <div class="v-word">${item.word} <span class="v-type">${item.type}</span></div>
                    <div style="font-size: 12px; color: var(--text-sub); margin-top: 2px;">${item.syn}</div>
                </div>
                <div class="v-right">
                    <div class="v-meaning">${item.meaning}</div>
                </div>
            </div>`;
        });
        
        document.querySelector('.fa-database').parentElement.style.display = 'none';
        container.innerHTML = html;
    }
};

window.addEventListener('load', () => {
    if(document.getElementById('vocab-container')) {
        HSCVocabEngine.init();
    }
});
