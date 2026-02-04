/* components.js - The Brain of Champ's Camp */

// 1. DYNAMIC HEADER
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

// 2. SMART NAVIGATION
function loadNav(activeTab) {
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

// 3. HELPER FUNCTIONS
function goHome() {
    // If we are in a sub-page (like u1_exam), go back to unit. If in unit, go to menu.
    // For simplicity, we default to the previous page or index.
    if(document.referrer.includes('index.html')) {
         window.location.href = 'index.html';
    } else {
         history.back();
    }
}

// 4. TAB SWITCHER (Universal)
function switchTab(id, btn) {
    // Hide all sections
    const parent = btn.parentElement.parentElement.parentElement; // Finds the body or main container
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    // Show target
    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}

// 5. BANGLA TOGGLE (Universal)
function toggleTrans(btn) {
    const box = btn.nextElementSibling;
    if(box.style.display === "block") {
        box.style.display = "none";
        btn.innerHTML = '<i class="fas fa-language"></i> Show Bangla';
    } else {
        box.style.display = "block";
        btn.innerHTML = '<i class="fas fa-times"></i> Hide Bangla';
    }
}
