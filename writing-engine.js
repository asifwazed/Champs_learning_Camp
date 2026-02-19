/* writing-engine.js - Interactive engine for Part C */

const WritingEngine = {
    init: function() {
        this.renderMenu();
    },

    renderMenu: function() {
        const html = `
        <div class="fade-in">
            
            <div onclick="WritingEngine.openList('stories')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#fff1f2; color:#f43f5e; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-book-open"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Stories</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">15 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>
            
            <div onclick="WritingEngine.openList('paragraphs')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#f5f3ff; color:#8b5cf6; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-align-left"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Paragraphs</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">15 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

            <div onclick="WritingEngine.openList('letters')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#ecfdf5; color:#10b981; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-envelope-open-text"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Letters & Emails</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">10 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

            <div onclick="WritingEngine.openList('dialogues')" style="background:white; padding:20px; border-radius:24px; margin-bottom:15px; box-shadow:0 10px 30px rgba(0,0,0,0.04); cursor:pointer; display:flex; align-items:center; gap:20px; transition:transform 0.2s;">
                <div style="width:60px; height:60px; background:#eff6ff; color:#3b82f6; border-radius:16px; display:flex; align-items:center; justify-content:center; font-size:24px;"><i class="fas fa-comments"></i></div>
                <div>
                    <h3 style="margin:0; font-family:'Outfit'; font-size:18px; color:#1e293b;">Dialogues</h3>
                    <p style="margin:5px 0 0; font-size:13px; color:#64748b; font-weight:600;">10 Marks • 15 Board Items</p>
                </div>
                <i class="fas fa-chevron-right" style="margin-left:auto; color:#cbd5e1;"></i>
            </div>

        </div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    openList: function(type) {
        const data = writingData[type];
        
        // Dynamic colors based on type
        let color = '#f43f5e';
        if(type === 'paragraphs') color = '#8b5cf6';
        if(type === 'letters') color = '#10b981';
        if(type === 'dialogues') color = '#3b82f6';

        let html = `
        <div class="fade-in">
            <button onclick="WritingEngine.renderMenu()" style="background:white; border:none; padding:10px 20px; border-radius:50px; font-weight:700; color:#64748b; margin-bottom:15px; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-arrow-left"></i> Back</button>
            
            <div style="background:white; border-radius:20px; padding:20px; margin-bottom:20px; border-left:4px solid ${color}; box-shadow:0 10px 30px rgba(0,0,0,0.04);">
                <h3 style="margin:0 0 10px 0; font-family:'Outfit'; color:#1e293b;"><i class="fas fa-gavel" style="color:#f59e0b;"></i> Golden Rules for ${data.title}</h3>
                <ul style="margin:0; padding-left:20px; font-size:13px; color:#475569; line-height:1.6;">
                    ${data.rules.map(rule => `<li style="margin-bottom:5px;">${rule}</li>`).join('')}
                </ul>
            </div>
        `;

        data.items.forEach((item, idx) => {
            html += `
            <div onclick="WritingEngine.openItem('${type}', ${idx})" style="background:white; padding:15px 20px; border-radius:16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.03); border:1px solid #f1f5f9;">
                <div style="font-weight:700; color:#334155;">${item.title}</div>
                <i class="fas fa-chevron-right" style="color:${color};"></i>
            </div>`;
        });

        html += `</div>`;
        document.getElementById('app-container').innerHTML = html;
    },

    openItem: function(type, index) {
        const item = writingData[type].items[index];
        
        let color = '#f43f5e';
        let bg = '#fff1f2';
        if(type === 'paragraphs') { color = '#8b5cf6'; bg = '#f5f3ff'; }
        if(type === 'letters') { color = '#10b981'; bg = '#ecfdf5'; }
        if(type === 'dialogues') { color = '#3b82f6'; bg = '#eff6ff'; }

        let html = `
        <div class="fade-in">
            <button onclick="WritingEngine.openList('${type}')" style="background:white; border:none; padding:10px 20px; border-radius:50px; font-weight:700; color:#64748b; margin-bottom:15px; cursor:pointer; box-shadow:0 5px 15px rgba(0,0,0,0.05);"><i class="fas fa-arrow-left"></i> Back to List</button>
            
            <div style="background:white; padding:25px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">
                <h2 style="margin:0 0 15px 0; font-family:'Outfit'; color:#1e293b; font-size:20px; text-align:center;">${item.title}</h2>
                <div style="font-size:15px; line-height:1.8; color:#334155; white-space: pre-wrap; margin-bottom:20px;">${item.content}</div>
        `;

        if (item.moral) {
            html += `
            <div style="background:${bg}; padding:15px; border-radius:12px; border-left:4px solid ${color};">
                <strong style="color:${color};">Moral:</strong> <span style="color:#1e293b;">${item.moral}</span>
            </div>`;
        }

        html += `</div></div>`;
        document.getElementById('app-container').innerHTML = html;
    }
};
