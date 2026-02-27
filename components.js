/* components.js - The Brain of Champ's Camp */

// 1. DYNAMIC HEADER
function loadHeader(title, sub) {
    return `
    <div class="header" style="padding: 25px 20px 20px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); display: flex; align-items: center; gap: 15px; position: sticky; top: 0; z-index: 50; border-bottom: 1px solid rgba(255, 255, 255, 0.1); color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
        <a href="javascript:history.back()" style="color: white; text-decoration: none; font-size: 20px; background: rgba(255,255,255,0.1); width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.2); transition: 0.2s;">
            <i class="fas fa-arrow-left"></i>
        </a>
        <div>
            <h2 style="font-family: 'Outfit'; font-size: 22px; font-weight: 800; margin: 0;">${title}</h2>
            <div style="font-size: 12px; color: #94a3b8;">${sub}</div>
        </div>
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
