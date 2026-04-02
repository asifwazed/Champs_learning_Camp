const hscGrammarDB = [
    {
        id: 1,
        title: "The Preposition + (Verb+ing) Rule",
        description: "If there is a preposition (in, of, for, about, without) right before the blank space, the verb MUST have an 'ing' attached.",
        shortcut: "Preposition + Verb(ing)",
        tests: [
            { q: "He is capable of ___ it.", options: ["do", "doing", "done"], ans: 1 },
            { q: "They left without ___ goodbye.", options: ["say", "saying", "said"], ans: 1 },
            { q: "She is good at ___ English.", options: ["speak", "speaking", "spoke"], ans: 1 }
        ]
    },
    {
        id: 2,
        title: "The 'To' Exception (Base Verb)",
        description: "Unlike other prepositions, 'to' is almost always followed by the base form (V1) of the verb. Exceptions: 'look forward to', 'with a view to'.",
        shortcut: "To + V1 (Base Form)",
        tests: [
            { q: "I want to ___ home now.", options: ["going", "go", "went"], ans: 1 },
            { q: "He decided to ___ a new car.", options: ["buy", "buying", "bought"], ans: 0 },
            { q: "She came here to ___ me.", options: ["helped", "helping", "help"], ans: 2 }
        ]
    },
    {
        id: 3,
        title: "The Article Sandwich",
        description: "If you see an Article (a, an, the) before the blank, and a Noun after it, the blank MUST be an Adjective.",
        shortcut: "Article + [Adjective] + Noun",
        tests: [
            { q: "It was a ___ decision.", options: ["beauty", "beautiful", "beautifully"], ans: 1 },
            { q: "He is an ___ student.", options: ["intelligence", "intelligently", "intelligent"], ans: 2 },
            { q: "They faced the ___ storm.", options: ["danger", "dangerous", "dangerously"], ans: 1 }
        ]
    },
    {
        id: 4,
        title: "Modals always take V1",
        description: "Modal verbs (can, could, should, would, must, may, might) are ALWAYS followed by the base form of the verb. No 's', no 'ing', no 'ed'.",
        shortcut: "Modal + V1",
        tests: [
            { q: "You must ___ the rules.", options: ["follows", "following", "follow"], ans: 2 },
            { q: "He can ___ very fast.", options: ["run", "ran", "running"], ans: 0 },
            { q: "We should ___ them.", options: ["help", "helped", "helping"], ans: 0 }
        ]
    },
    {
        id: 5,
        title: "Have/Has/Had + V3",
        description: "If you see 'have', 'has', or 'had' before the blank (and no 'to' after them), the verb MUST be in the Past Participle (V3) form.",
        shortcut: "Have/Has/Had + V3",
        tests: [
            { q: "I have already ___ the work.", options: ["finish", "finished", "finishing"], ans: 1 },
            { q: "She has ___ a letter.", options: ["write", "wrote", "written"], ans: 2 },
            { q: "They had ___ before I came.", options: ["leave", "left", "leaving"], ans: 1 }
        ]
    },
    {
        id: 6,
        title: "Let/Make/Help + V1",
        description: "Causative verbs like 'let', 'make', and 'help' force the next verb to be in the base form (V1) without 'to'.",
        shortcut: "Let/Make + Object + V1",
        tests: [
            { q: "Let him ___ the job.", options: ["do", "doing", "to do"], ans: 0 },
            { q: "The teacher made us ___.", options: ["stand", "to stand", "stood"], ans: 0 },
            { q: "Help me ___ this box.", options: ["carry", "carried", "carrying"], ans: 0 }
        ]
    },
    {
        id: 7,
        title: "Look forward to / With a view to",
        description: "These are the main exceptions to the 'To + V1' rule. If you see these specific phrases, you MUST add 'ing' to the verb.",
        shortcut: "With a view to + V(ing)",
        tests: [
            { q: "I am looking forward to ___ you.", options: ["meet", "meeting", "met"], ans: 1 },
            { q: "He went there with a view to ___ a book.", options: ["buy", "buying", "bought"], ans: 1 },
            { q: "We look forward to ___ your reply.", options: ["receive", "receiving", "received"], ans: 1 }
        ]
    },
    {
        id: 8,
        title: "While + Verb(ing)",
        description: "If 'while' is immediately followed by a blank space (no subject like 'he' or 'she' in between), the verb takes 'ing'.",
        shortcut: "While + V(ing)",
        tests: [
            { q: "While ___ on the street, I saw him.", options: ["walk", "walked", "walking"], ans: 2 },
            { q: "Don't talk while ___.", options: ["eat", "eating", "ate"], ans: 1 },
            { q: "While ___ the road, look both ways.", options: ["cross", "crossing", "crossed"], ans: 1 }
        ]
    },
    {
        id: 9,
        title: "Passive Voice Indicator (By)",
        description: "If the action is done BY someone, the blank space verb before it is almost always Past Participle (V3).",
        shortcut: "Be Verb + V3 + by",
        tests: [
            { q: "The window was ___ by the boy.", options: ["break", "broke", "broken"], ans: 2 },
            { q: "The book is ___ by Asif.", options: ["write", "writing", "written"], ans: 2 },
            { q: "The picture was ___ by her.", options: ["draw", "drawn", "drawing"], ans: 1 }
        ]
    },
    {
        id: 10,
        title: "It is high time + V2",
        description: "If you see 'It is time' or 'It is high time' followed by a subject (like 'we' or 'you'), the verb MUST be in the Past Tense (V2).",
        shortcut: "It is high time + Subject + V2",
        tests: [
            { q: "It is high time we ___ our habits.", options: ["change", "changed", "changing"], ans: 1 },
            { q: "It is time you ___ the truth.", options: ["realize", "realized", "realizing"], ans: 1 },
            { q: "It is high time they ___ acting.", options: ["start", "started", "starting"], ans: 1 }
        ]
    }
];
