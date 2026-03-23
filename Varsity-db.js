/* varsity-db.js - Hardcore Flashcard Engine */

const vocabList = [
    { word: "Obfuscate", phonetic: "/ˈɑb.fə.skeɪt/", def: "To make something less clear and harder to understand, especially intentionally.", ex: "Politicians often obfuscate the truth to avoid taking responsibility." },
    { word: "Ephemeral", phonetic: "/ɪˈfem.ər.əl/", def: "Lasting for only a very short time.", ex: "Fame in the modern internet era is often entirely ephemeral." },
    { word: "Sycophant", phonetic: "/ˈsɪk.ə.fænt/", def: "A person who acts obsequiously toward someone important in order to gain advantage.", ex: "The CEO was surrounded by sycophants who never challenged his bad ideas." },
    { word: "Fastidious", phonetic: "/fæsˈtɪd.i.əs/", def: "Very attentive to and concerned about accuracy and detail.", ex: "She is a fastidious editor, catching errors that others miss completely." },
    { word: "Cacophony", phonetic: "/kəˈkɑf.ə.ni/", def: "A harsh, discordant mixture of sounds.", ex: "The construction site created a constant cacophony that gave me a headache." },
    { word: "Esoteric", phonetic: "/ˌes.əˈter.ɪk/", def: "Intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.", ex: "He has an esoteric collection of vintage synthesizers." },
    { word: "Capricious", phonetic: "/kəˈprɪʃ.əs/", def: "Given to sudden and unaccountable changes of mood or behavior.", ex: "The capricious weather made it impossible to plan a picnic." },
    { word: "Ennui", phonetic: "/ɑnˈwi/", def: "A feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.", ex: "He succumbed to ennui and spent the entire weekend staring at the wall." },
    { word: "Mellifluous", phonetic: "/məˈlɪf.lu.əs/", def: "Sweet or musical; pleasant to hear.", ex: "The voice actor had a rich, mellifluous tone that captivated the audience." },
    { word: "Vapid", phonetic: "/ˈvæp.ɪd/", def: "Offering nothing that is stimulating or challenging; bland.", ex: "The movie was filled with vapid dialogue and predictable plot twists." },
    { word: "Pedantic", phonetic: "/pəˈdæn.tɪk/", def: "Excessively concerned with minor details and rules or with displaying academic learning.", ex: "His pedantic corrections of my grammar were incredibly annoying." },
    { word: "Pragmatic", phonetic: "/præɡˈmæt̬.ɪk/", def: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.", ex: "We need a pragmatic solution to this problem, not a philosophical debate." },
    { word: "Ubiquitous", phonetic: "/juˈbɪk.wə.t̬əs/", def: "Present, appearing, or found everywhere.", ex: "Smartphones have become completely ubiquitous in modern society." },
    { word: "Lethargic", phonetic: "/ləˈθɑr.dʒɪk/", def: "Affected by lethargy; sluggish and apathetic.", ex: "I felt lethargic all day after eating that massive lunch." },
    { word: "Alleviate", phonetic: "/əˈli.vi.eɪt/", def: "Make (suffering, deficiency, or a problem) less severe.", ex: "The doctor prescribed medication to alleviate the pain." },
    { word: "Diligent", phonetic: "/ˈdɪl.ə.dʒənt/", def: "Having or showing care and conscientiousness in one's work or duties.", ex: "She was a diligent student who always submitted her assignments early." },
    { word: "Inevitable", phonetic: "/ˌɪnˈev.ə.t̬ə.bəl/", def: "Certain to happen; unavoidable.", ex: "With the way they were spending money, bankruptcy was inevitable." },
    { word: "Lucid", phonetic: "/ˈlu.sɪd/", def: "Expressed clearly; easy to understand.", ex: "The teacher gave a very lucid explanation of the complex physics concept." },
    { word: "Plausible", phonetic: "/ˈplɑ.zə.bəl/", def: "Seeming reasonable or probable.", ex: "Her excuse for being late was plausible, but I still had my doubts." },
    { word: "Scrutinize", phonetic: "/ˈskru.t̬ən.aɪz/", def: "Examine or inspect closely and thoroughly.", ex: "The auditor will scrutinize every detail of the company's financial records." }
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
