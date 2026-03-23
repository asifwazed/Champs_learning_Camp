const prompts = [
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120, // 2 minutes
        title: "Describe a successful business you know about. You should say:",
        bullets: [
            "What business it is",
            "How you know about it",
            "Who runs it",
            "And explain why you think it is successful."
        ]
    },
    {
        type: "TOEFL Speaking Task 1",
        timeLimit: 45, // 45 seconds
        title: "Some people prefer to take a job that does not pay well but provides a lot of time off. Others prefer to take a job that pays well but requires long hours. Which do you prefer and why?",
        bullets: [
            "State your preference clearly.",
            "Provide at least two specific reasons.",
            "Include personal examples if applicable."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe an important choice you had to make in your life. You should say:",
        bullets: [
            "When you had to make this choice",
            "What the choice was about",
            "How you made the choice",
            "And explain how you felt about it."
        ]
    },
    {
        type: "TOEFL Speaking Task 2",
        timeLimit: 60, // 60 seconds
        title: "Do you agree or disagree with the following statement? Children should be required to help with household chores as soon as they are old enough to do so. Use specific reasons and examples to support your answer.",
        bullets: [
            "Take a clear stance.",
            "Explain the benefits or drawbacks.",
            "Use clear, logical structure."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a piece of technology you own that you feel is difficult to use. You should say:",
        bullets: [
            "What it is",
            "What you use it for",
            "Why it is difficult to use",
            "And explain whether you think it could be improved."
        ]
    }, 
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a book that had a major influence on you. You should say:",
        bullets: [
            "What the book is and who wrote it",
            "How you found out about it",
            "What the book is about",
            "And explain how it influenced you."
        ]
    },
    {
        type: "TOEFL Speaking Task 1",
        timeLimit: 45,
        title: "Some universities require students to take classes in many different subjects. Other universities require students to specialize in one subject. Which do you think is better? Explain why.",
        bullets: [
            "State your opinion clearly.",
            "Provide reasons for your choice.",
            "Compare the benefits of both approaches."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a beautiful city you have visited. You should say:",
        bullets: [
            "Where the city is",
            "When you went there",
            "What you did there",
            "And explain why you think it is beautiful."
        ]
    },
    {
        type: "TOEFL Speaking Task 2",
        timeLimit: 60,
        title: "Do you agree or disagree with the following statement? Social media has made people more isolated from each other in real life. Use specific reasons and examples to support your answer.",
        bullets: [
            "Take a firm position.",
            "Provide examples of real-life interactions.",
            "Discuss the psychological impact of social media."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a practical skill you learned recently. You should say:",
        bullets: [
            "What the skill is",
            "How you learned it",
            "Who taught you or how you taught yourself",
            "And explain why this skill is useful to you."
        ]
    }, 
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a time when you were surprised to meet a friend. You should say:",
        bullets: [
            "Where it happened",
            "When it happened",
            "Who you met",
            "And explain why you were surprised to meet them."
        ]
    },
    {
        type: "TOEFL Speaking Task 1",
        timeLimit: 45,
        title: "Some people prefer to learn through traditional classroom environments. Others prefer online learning. Which do you prefer and why?",
        bullets: [
            "State your preference.",
            "Give specific reasons.",
            "Use examples to support your point."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a traditional product in your country. You should say:",
        bullets: [
            "What it is",
            "How it is made",
            "When people use it",
            "And explain why it is important to your culture."
        ]
    },
    {
        type: "TOEFL Speaking Task 2",
        timeLimit: 60,
        title: "Do you agree or disagree with the following statement? Subjects like art and music should be mandatory for all high school students. Use specific reasons to support your answer.",
        bullets: [
            "State your stance clearly.",
            "Discuss the value of creative subjects.",
            "Address potential counterarguments."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe a rule that you don't like. You should say:",
        bullets: [
            "What the rule is",
            "Why you don't like it",
            "How others feel about the rule",
            "And explain what would happen if the rule were changed."
        ]
    },
    {
        type: "TOEFL Speaking Task 1",
        timeLimit: 45,
        title: "If you were given a large amount of money to spend in one day, what would you spend it on and why?",
        bullets: [
            "Identify the specific items or experiences.",
            "Explain the reasoning behind your choices."
        ]
    },
    {
        type: "IELTS Speaking Part 2",
        timeLimit: 120,
        title: "Describe an environmental problem in your city or country. You should say:",
        bullets: [
            "What the problem is",
            "What causes it",
            "How it affects people",
            "And explain how it can be solved."
        ]
    },
    {
        type: "TOEFL Speaking Task 2",
        timeLimit: 60,
        title: "Some people believe that failure is a necessary part of success. Do you agree or disagree? Use specific examples to support your position.",
        bullets: [
            "Take a clear position.",
            "Explain the psychological impact of failure.",
            "Provide an example of learning from mistakes."
        ]
    }
];

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const cueCard = document.getElementById('cueCard');

let currentPromptIndex = 0;
let timeLeft = 0;
let timerInterval;
let isRunning = false;

function loadPrompt(index) {
    const prompt = prompts[index];
    timeLeft = prompt.timeLimit;
    updateTimerDisplay();
    
    // Build Bullets
    let bulletsHTML = '';
    prompt.bullets.forEach(b => {
        bulletsHTML += `<li>${b}</li>`;
    });

    cueCard.innerHTML = `
        <span class="tag">${prompt.type}</span>
        <h3 class="prompt-title">${prompt.title}</h3>
        <ul class="prompt-bullets">
            ${bulletsHTML}
        </ul>
    `;
    
    resetTimer();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 10 && timeLeft > 0) {
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    startBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    startBtn.style.background = '#f59e0b'; // warning color

    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            startBtn.innerHTML = '<i class="fas fa-redo"></i> Time Up';
            startBtn.style.background = '#ef4444'; // danger color
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startBtn.innerHTML = '<i class="fas fa-play"></i> Start Timer';
    startBtn.style.background = 'var(--accent)';
    timerDisplay.classList.remove('warning');
}

startBtn.addEventListener('click', () => {
    if (isRunning) {
        resetTimer();
    } else if (timeLeft > 0) {
        startTimer();
    } else {
        // If time is up, reset to full time
        timeLeft = prompts[currentPromptIndex].timeLimit;
        updateTimerDisplay();
        startTimer();
    }
});

nextBtn.addEventListener('click', () => {
    currentPromptIndex = (currentPromptIndex + 1) % prompts.length;
    loadPrompt(currentPromptIndex);
});

// Init
loadPrompt(0);
