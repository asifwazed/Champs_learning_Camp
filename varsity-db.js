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
    { word: "Scrutinize", phonetic: "/ˈskru.t̬ən.aɪz/", def: "Examine or inspect closely and thoroughly.", ex: "The auditor will scrutinize every detail of the company's financial records." },
    { word: "Aberration", phonetic: "/ˌæb.əˈreɪ.ʃən/", def: "A departure from what is normal, usual, or expected, typically one that is unwelcome.", ex: "They described the outbreak of violence in the area as an aberration." },
    { word: "Benevolent", phonetic: "/bəˈnev.əl.ənt/", def: "Well meaning and kindly.", ex: "He was a benevolent boss who truly cared about his employees." },
    { word: "Candor", phonetic: "/ˈkæn.dɚ/", def: "The quality of being open and honest in expression; frankness.", ex: "I appreciate your candor, even if the feedback is hard to hear." },
    { word: "Deleterious", phonetic: "/ˌdel.ɪˈtɪr.i.əs/", def: "Causing harm or damage.", ex: "Divorce is assumed to have deleterious effects on children." },
    { word: "Ebullient", phonetic: "/ɪˈbʊl.i.ənt/", def: "Cheerful and full of energy.", ex: "She sounded ebullient and happy to be returning to work." },
    { word: "Facetious", phonetic: "/fəˈsiː.ʃəs/", def: "Treating serious issues with deliberately inappropriate humor; flippant.", ex: "He was just being facetious, but she took his comments seriously." },
    { word: "Gregarious", phonetic: "/ɡrɪˈɡer.i.əs/", def: "Fond of company; sociable.", ex: "He was a popular and gregarious man who loved hosting parties." },
    { word: "Hackneyed", phonetic: "/ˈhæk.nid/", def: "Lacking significance through having been overused; unoriginal and trite.", ex: "The plot of the film is just a hackneyed boy-meets-girl scenario." },
    { word: "Idiosyncrasy", phonetic: "/ˌɪd.i.əˈsɪŋ.krə.si/", def: "A mode of behavior or way of thought peculiar to an individual.", ex: "One of his little idiosyncrasies is always tying his left shoe first." },
    { word: "Juxtapose", phonetic: "/ˌdʒʌk.stəˈpoʊz/", def: "To place or deal with close together for contrasting effect.", ex: "The exhibition juxtaposes Picasso's early drawings with his later works." },
    { word: "Kinetic", phonetic: "/kɪˈnet̬.ɪk/", def: "Relating to or resulting from motion.", ex: "The novel's kinetic energy keeps the reader turning the pages." },
    { word: "Languid", phonetic: "/ˈlæŋ.ɡwɪd/", def: "Displaying or having a disinclination for physical exertion or effort; slow and relaxed.", ex: "They enjoyed a languid afternoon by the pool." },
    { word: "Magnanimous", phonetic: "/mæɡˈnæn.ə.məs/", def: "Generous or forgiving, especially toward a rival or less powerful person.", ex: "She was too magnanimous to resent all the success he had achieved." },
    { word: "Nefarious", phonetic: "/nəˈfer.i.əs/", def: "Wicked or criminal.", ex: "The company's nefarious practices were finally exposed by the journalist." },
    { word: "Obdurate", phonetic: "/ˈɑːb.dʊ.rət/", def: "Stubbornly refusing to change one's opinion or course of action.", ex: "The president remains obdurate on the issue of tax cuts." },
    { word: "Palliate", phonetic: "/ˈpæl.i.eɪt/", def: "Make (a disease or its symptoms) less severe or unpleasant without removing the cause.", ex: "Treatment works by palliating symptoms rather than offering a cure." },
    { word: "Quixotic", phonetic: "/kwɪkˈsɑː.t̬ɪk/", def: "Exceedingly idealistic; unrealistic and impractical.", ex: "This is a vast, exciting, and perhaps quixotic project." },
    { word: "Recalcitrant", phonetic: "/rɪˈkæl.sɪ.trənt/", def: "Having an obstinately uncooperative attitude toward authority or discipline.", ex: "A class of recalcitrant fifteen-year-olds can be difficult to teach." },
    { word: "Sagacious", phonetic: "/səˈɡeɪ.ʃəs/", def: "Having or showing keen mental discernment and good judgment; shrewd.", ex: "They were sagacious enough to avoid any outright confrontation." },
    { word: "Taciturn", phonetic: "/ˈtæs.ə.tɝːn/", def: "Reserved or uncommunicative in speech; saying little.", ex: "After such gatherings she would be taciturn and morose." },
    { word: "Unctuous", phonetic: "/ˈʌŋk.tʃu.əs/", def: "Excessively or ingratiatingly flattering; oily.", ex: "He seemed anxious to please but not in an unctuous way." },
    { word: "Vacillate", phonetic: "/ˈvæs.ə.leɪt/", def: "Alternate or waver between different opinions or actions; be indecisive.", ex: "I had for a time vacillated between teaching and journalism." },
    { word: "Wanton", phonetic: "/ˈwɑːn.tən/", def: "Of a cruel or violent action, deliberate and unprovoked.", ex: "The judge condemned the wanton destruction of public property." },
    { word: "Xenophobia", phonetic: "/ˌzen.əˈfoʊ.bi.ə/", def: "Dislike of or prejudice against people from other countries.", ex: "The resurgence of racism and xenophobia is a major concern." },
    { word: "Zealous", phonetic: "/ˈzel.əs/", def: "Having or showing zeal; deeply devoted and enthusiastic.", ex: "The council was extremely zealous in the application of the regulations." },
    { word: "Alacrity", phonetic: "/əˈlæk.rə.t̬i/", def: "Brisk and cheerful readiness.", ex: "She accepted the invitation to dinner with alacrity." },
    { word: "Cajole", phonetic: "/kəˈdʒoʊl/", def: "Persuade someone to do something by sustained coaxing or flattery.", ex: "He hoped to cajole her into selling the house." },
    { word: "Demagogue", phonetic: "/ˈdem.ə.ɡɑːɡ/", def: "A political leader who seeks support by appealing to the desires and prejudices of ordinary people rather than by using rational argument.", ex: "He was drawn into a circle of campus demagogues." },
    { word: "Enervate", phonetic: "/ˈen.ɚ.veɪt/", def: "Cause (someone) to feel drained of energy or vitality; weaken.", ex: "The hot sun enervated her to the point of collapse." },
    { word: "Fatuous", phonetic: "/ˈfætʃ.u.əs/", def: "Silly and pointless.", ex: "He was ignored for making fatuous comments during the meeting." }
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
