/* varsity-db.js - Hardcore Flashcard Engine */

const vocabList = [
    { word: "Obfuscate", phonetic: "/ˈɑb.fə.skeɪt/", def: "To make something less clear and harder to understand, especially intentionally.", ex: "Politicians often obfuscate the truth to avoid taking responsibility." },
    { word: "Ephemeral", phonetic: "/ɪˈfem.ər.əl/", def: "Lasting for only a very short time.", ex: "Fame in the modern internet era is often entirely ephemeral." },
    { word: "Sycophant", phonetic: "/ˈsɪk.ə.fænt/", def: "A person who acts obsequiously toward someone important in order to gain advantage.", ex: "The CEO was surrounded by sycophants who never challenged his bad ideas." },
    { word: "Fastidious", phonetic: "/fæsˈtɪd.i.əs/", def: "Very attentive to and concerned about accuracy and detail.", ex: "She is a fastidious editor, catching errors that others miss completely." },
    { word: "Cacophony", phonetic: "/kəˈkɑf.ə.ni/", def: "A harsh, discordant mixture of sounds.", ex: "The construction site created a constant cacophony that gave me a headache." }
];

const flashcard = document.getElementById('flashcard');
const frontWord = document.getElementById('frontWord');
const frontPhonetic = document.getElementById('frontPhonetic');
const backDef = document.getElementById('backDef');
const backEx = document.getElementById('backEx');
const progressBar = document.getElementById('progressBar');
const controls = document.getElementById('controls');
const endScreen = document.getElementById('endScreen');
const finalScore = document.getElementById('finalScore');

let currentIndex = 0;
let masteredCount = 0;

function loadCard(index) {
    if (index >= vocabList.length) {
        showEndScreen();
        return;
    }

    const item = vocabList[index];
    frontWord.innerText = item.word;
    frontPhonetic.innerText = item.phonetic;
    backDef.innerText = item.def;
    backEx.innerText = `"${item.ex}"`;

    // Reset card state
    flashcard.classList.remove('flipped', 'swipe-left', 'swipe-right');
    flashcard.style.transition = 'none'; // Snap back to center instantly
    
    // Force reflow to ensure transition is applied for the next swipe
    void flashcard.offsetWidth; 
    flashcard.style.transition = 'transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1)';
    
    updateProgress();
}

function updateProgress() {
    const percent = (currentIndex / vocabList.length) * 100;
    progressBar.style.width = `${percent}%`;
}

function showEndScreen() {
    flashcard.style.display = 'none';
    controls.style.display = 'none';
    progressBar.style.width = '100%';
    endScreen.style.display = 'flex';
    finalScore.innerText = `${masteredCount}/${vocabList.length}`;
}

function processAction(isMastered) {
    if (isMastered) {
        masteredCount++;
        flashcard.classList.add('swipe-right');
    } else {
        flashcard.classList.add('swipe-left');
    }

    // Wait for swipe animation to finish before loading next
    setTimeout(() => {
        currentIndex++;
        loadCard(currentIndex);
    }, 400); // matches CSS transition time roughly
}

// Event Listeners
flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
});

document.getElementById('passBtn').addEventListener('click', () => {
    processAction(true);
});

document.getElementById('failBtn').addEventListener('click', () => {
    processAction(false);
});

// Init
loadCard(0);
