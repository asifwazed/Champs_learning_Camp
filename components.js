/* components.js - The Brain of Champ's Camp */

// 1. The Dynamic Header
function loadHeader(title, subtitle) {
    return `
    <div class="header">
        <div class="top-row">
            <div class="back-btn" onclick="goHome()"><i class="fas fa-arrow-left"></i></div>
            <div style="font-size:12px; font-weight:700; background:rgba(255,255,255,0.1); padding:5px 12px; border-radius:20px;">Champ's Camp</div>
        </div>
        <h1 class="unit-title">${title}</h1>
        <div class="unit-sub">${subtitle}</div>
    </div>`;
}

// 2. The Smart Navigation Bar
function loadNav(activeTab) {
    // Defines which icon gets the 'active' color
    const cHome = activeTab === 'home' ? 'active' : '';
    const cTools = activeTab === 'tools' ? 'active' : '';
    const cContact = activeTab === 'contact' ? 'active' : '';

    return `
    <div class="nav">
        <a href="index.html" class="nav-item ${cHome}"><i class="fas fa-home"></i>Home</a>
        <a href="tools.html" class="nav-item ${cTools}"><i class="fas fa-tools"></i>Tools</a>
        <a href="https://wa.me/8801721149369" class="nav-item ${cContact}"><i class="fab fa-whatsapp"></i>Contact</a>
    </div>`;
}

// 3. Helper Functions (Global)
function goHome() {
    window.location.href = 'index.html'; // Safer than history.back()
}

// 4. Auto-Run on Load (Optional)
console.log("Champ's Components Loaded 🚀");
