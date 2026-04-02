const HSCVocabEngine = {
    init: function() {
        this.renderVocab();
    },

    renderVocab: function() {
        const container = document.getElementById('vocab-container');
        if(!container) return;

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
        
        container.innerHTML = html;
    }
};

window.addEventListener('load', () => {
    if(document.getElementById('vocab-container')) {
        HSCVocabEngine.init();
    }
});
