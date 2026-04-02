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
    }, 
    {
        id: 11,
        title: "Used to vs. Be used to",
        description: "If it's just 'used to', use the base verb (V1). But if there is a 'be' verb (am/is/are/was) or 'get' before 'used to', you MUST use V(ing).",
        shortcut: "Subject + am/is/are + used to + V(ing)",
        tests: [
            { q: "He is used to ___ up early.", options: ["wake", "waking", "woke"], ans: 1 },
            { q: "I used to ___ cricket.", options: ["play", "playing", "played"], ans: 0 },
            { q: "They got used to ___ hard.", options: ["work", "working", "worked"], ans: 1 }
        ]
    },
    {
        id: 12,
        title: "First Conditional (Real Future)",
        description: "If the 'If' part is in Present Tense, the other part of the sentence MUST use 'will/can/may' + V1.",
        shortcut: "If + Present Tense -> Will + V1",
        tests: [
            { q: "If it rains, I ___ at home.", options: ["stay", "will stay", "stayed"], ans: 1 },
            { q: "If you study hard, you ___ pass.", options: ["can", "could", "would"], ans: 0 },
            { q: "If he comes, I ___ go.", options: ["would", "will", "did"], ans: 1 }
        ]
    },
    {
        id: 13,
        title: "Second Conditional (Unreal Present)",
        description: "If the 'If' part is in Past Tense (V2), the other part MUST use 'would/could/might' + V1.",
        shortcut: "If + Past Tense (V2) -> Would + V1",
        tests: [
            { q: "If I knew his number, I ___ him.", options: ["will call", "would call", "called"], ans: 1 },
            { q: "If she had money, she ___ buy it.", options: ["can", "will", "could"], ans: 2 },
            { q: "If I were a bird, I ___ fly.", options: ["would", "will", "fly"], ans: 0 }
        ]
    },
    {
        id: 14,
        title: "Third Conditional (Unreal Past)",
        description: "If the 'If' part has 'had + V3' (Past Perfect), the other part MUST use 'would have / could have' + V3.",
        shortcut: "If + Had + V3 -> Would have + V3",
        tests: [
            { q: "If I had seen him, I ___ told him.", options: ["would tell", "would have", "will have"], ans: 1 },
            { q: "If you had tried, you ___ won.", options: ["could have", "could", "can have"], ans: 0 },
            { q: "Had I been rich, I ___ helped.", options: ["would help", "will help", "would have"], ans: 2 }
        ]
    },
    {
        id: 15,
        title: "Had better / Would rather",
        description: "These phrases act exactly like Modal verbs. They are ALWAYS followed by the base form of the verb (V1). Never use 'to'.",
        shortcut: "Had better / Would rather + V1",
        tests: [
            { q: "You had better ___ home now.", options: ["to go", "go", "going"], ans: 1 },
            { q: "I would rather ___ than beg.", options: ["starving", "starved", "starve"], ans: 2 },
            { q: "He had better ___ a doctor.", options: ["seeing", "saw", "see"], ans: 2 }
        ]
    },
    {
        id: 16,
        title: "No sooner had ... than",
        description: "If a sentence starts with 'No sooner had', the first verb is V3, but the verb AFTER the word 'than' MUST be Past Tense (V2).",
        shortcut: "No sooner had + V3 ... than + V2",
        tests: [
            { q: "No sooner had I reached than the train ___.", options: ["leave", "left", "leaving"], ans: 1 },
            { q: "Scarcely had we arrived when it ___ raining.", options: ["start", "started", "starts"], ans: 1 },
            { q: "Hardly had she seen me when she ___.", options: ["ran", "run", "running"], ans: 0 }
        ]
    },
    {
        id: 17,
        title: "As if / As though",
        description: "If the first part is Present tense, the verb after 'as if' is Past Tense (V2). If using a 'be' verb, it is ALWAYS 'were', never 'was'.",
        shortcut: "Present tense + as if + Past Tense (were)",
        tests: [
            { q: "He talks as if he ___ everything.", options: ["knows", "knew", "knowing"], ans: 1 },
            { q: "She acts as though she ___ a queen.", options: ["is", "was", "were"], ans: 2 },
            { q: "He behaves as if he ___ mad.", options: ["are", "were", "was"], ans: 1 }
        ]
    },
    {
        id: 18,
        title: "Lest ... should",
        description: "If you see the word 'lest' (meaning 'fear that'), the next part of the sentence MUST have the word 'should' + V1.",
        shortcut: "Lest + Subject + should + V1",
        tests: [
            { q: "Walk fast lest you ___ miss the bus.", options: ["will", "should", "would"], ans: 1 },
            { q: "Study hard lest you ___ fail.", options: ["can", "should", "might"], ans: 1 },
            { q: "He ran fast lest he ___ be caught.", options: ["should", "will", "can"], ans: 0 }
        ]
    },
    {
        id: 19,
        title: "Mind / Worth / Cannot help",
        description: "If you see 'would you mind', 'worth', 'cannot help', or 'could not help', the next verb MUST have 'ing' attached.",
        shortcut: "Mind/Worth + V(ing)",
        tests: [
            { q: "Would you mind ___ the window?", options: ["open", "opening", "opened"], ans: 1 },
            { q: "This book is worth ___.", options: ["read", "reading", "to read"], ans: 1 },
            { q: "I could not help ___.", options: ["laugh", "to laugh", "laughing"], ans: 2 }
        ]
    },
    {
        id: 20,
        title: "By vs Without + Verb(ing)",
        description: "Both 'by' and 'without' are prepositions, so they take V(ing). Use 'By' for positive conditions, 'Without' for negative conditions.",
        shortcut: "By/Without + V(ing)",
        tests: [
            { q: "___ reading, you cannot pass.", options: ["By", "Without", "For"], ans: 1 },
            { q: "___ working hard, you will succeed.", options: ["Without", "In", "By"], ans: 2 },
            { q: "He survived by ___ water.", options: ["drink", "drinking", "drank"], ans: 1 }
        ]
    },
    {
        id: 21,
        title: "Since / For (Time Indicators)",
        description: "Use 'Since' for a specific starting point (Since Monday, Since 1990). Use 'For' for a duration/amount of time (For 3 days, For 5 years).",
        shortcut: "Since = Exact Time | For = Amount of Time",
        tests: [
            { q: "It has been raining ___ morning.", options: ["for", "since", "from"], ans: 1 },
            { q: "He has been sick ___ three days.", options: ["for", "since", "by"], ans: 0 },
            { q: "I have lived here ___ 2015.", options: ["in", "for", "since"], ans: 2 }
        ]
    },
    {
        id: 22,
        title: "The + Adjective (Plural Noun)",
        description: "When 'The' is placed before an adjective (like The rich, The poor), it represents a whole class of people. The verb MUST be plural.",
        shortcut: "The + Adjective = Plural Verb",
        tests: [
            { q: "The rich ___ not always happy.", options: ["is", "are", "am"], ans: 1 },
            { q: "The poor ___ suffering.", options: ["are", "is", "was"], ans: 0 },
            { q: "The brave ___ the fair.", options: ["deserves", "deserve", "deserving"], ans: 1 }
        ]
    },
    {
        id: 23,
        title: "Instead of / In lieu of",
        description: "Both mean 'in place of'. Since 'of' is a preposition, if a verb comes immediately after, it MUST be V(ing).",
        shortcut: "Instead of + V(ing) / Noun",
        tests: [
            { q: "He ate a burger instead of ___ rice.", options: ["eat", "ate", "eating"], ans: 2 },
            { q: "In lieu of ___, he decided to stay.", options: ["go", "going", "went"], ans: 1 },
            { q: "He bought a pen instead of a ___.", options: ["pencil", "writing", "write"], ans: 0 }
        ]
    },
    {
        id: 24,
        title: "So ... that (Negative Outcome)",
        description: "In the structure 'so [adjective] that', the next clause usually explains why something can't happen, using 'cannot' or 'could not'.",
        shortcut: "So + Adj + that + Sub + cannot + V1",
        tests: [
            { q: "He is so weak that he ___ walk.", options: ["can", "cannot", "will"], ans: 1 },
            { q: "It was so cold that we ___ go out.", options: ["cannot", "could not", "can"], ans: 1 },
            { q: "She is so smart that she ___ pass easily.", options: ["can", "cannot", "could"], ans: 0 }
        ]
    },
    {
        id: 25,
        title: "Too ... to (Negative Shortcut)",
        description: "This is the shortcut for 'so...that'. 'Too' means excessively, and 'to' is followed by the base verb (V1). It has a built-in negative meaning.",
        shortcut: "Too + Adj + to + V1",
        tests: [
            { q: "He is too weak ___ walk.", options: ["to", "that", "for"], ans: 0 },
            { q: "The box is too heavy to ___.", options: ["lifted", "lifting", "lift"], ans: 2 },
            { q: "She was too tired to ___.", options: ["speak", "speaking", "spoke"], ans: 0 }
        ]
    },
    {
        id: 26,
        title: "Relative Pronouns (Who vs Which)",
        description: "Use 'Who' right after a person. Use 'Which' or 'That' right after a thing/animal. The verb depends on the word right before the pronoun.",
        shortcut: "Person + Who | Thing + Which",
        tests: [
            { q: "The boy ___ came here is my brother.", options: ["which", "who", "whom"], ans: 1 },
            { q: "The pen ___ I bought is lost.", options: ["who", "which", "whom"], ans: 1 },
            { q: "It is I who ___ your friend.", options: ["is", "are", "am"], ans: 2 }
        ]
    },
    {
        id: 27,
        title: "Either...or / Neither...nor",
        description: "When two subjects are connected by these words, the verb follows the subject that is CLOSEST to the blank space.",
        shortcut: "Verb matches the closest subject",
        tests: [
            { q: "Neither he nor his friends ___ present.", options: ["was", "were", "is"], ans: 1 },
            { q: "Either you or he ___ done this.", options: ["has", "have", "had"], ans: 0 },
            { q: "Neither the players nor the coach ___ ready.", options: ["are", "is", "were"], ans: 1 }
        ]
    },
    {
        id: 28,
        title: "One of the + Plural Noun",
        description: "After 'one of the', the noun MUST be plural, but the verb MUST be singular (because you are talking about just 'one').",
        shortcut: "One of the + Plural Noun + Singular Verb",
        tests: [
            { q: "One of the boys ___ absent.", options: ["is", "are", "were"], ans: 0 },
            { q: "One of my friends ___ coming.", options: ["are", "is", "am"], ans: 1 },
            { q: "One of the ___ was broken.", options: ["chair", "chairs", "chair's"], ans: 1 }
        ]
    },
    {
        id: 29,
        title: "Passive Voice without 'By'",
        description: "If the subject is an object that cannot do an action (e.g., 'English', 'Jute'), the verb MUST be passive: Be Verb + V3.",
        shortcut: "Object Subject -> am/is/are/was/were + V3",
        tests: [
            { q: "English ___ all over the world.", options: ["speak", "spoke", "is spoken"], ans: 2 },
            { q: "Jute ___ in Bangladesh.", options: ["grow", "grows", "is grown"], ans: 2 },
            { q: "My watch ___ yesterday.", options: ["stolen", "was stolen", "steals"], ans: 1 }
        ]
    },
    {
        id: 30,
        title: "Make vs Get (Causative Part 2)",
        description: "We know 'Make + Person = V1'. But if you use 'Get + Person', you MUST use 'to + V1'. If it's 'Get/Have + Thing', use V3.",
        shortcut: "Get + Person + to V1 | Get + Thing + V3",
        tests: [
            { q: "I got him ___ the work.", options: ["do", "to do", "done"], ans: 1 },
            { q: "I had my car ___.", options: ["repair", "to repair", "repaired"], ans: 2 },
            { q: "She made him ___.", options: ["cry", "to cry", "crying"], ans: 0 }
        ]
    }, 
    {
        id: 31,
        title: "As well as / Along with",
        description: "When two subjects are connected by 'as well as', 'along with', or 'together with', the verb MUST follow the FIRST subject.",
        shortcut: "Subject 1 + as well as + Subject 2 -> Verb matches Subject 1",
        tests: [
            { q: "He as well as his friends ___ present.", options: ["was", "were", "are"], ans: 0 },
            { q: "The students along with the teacher ___ visiting.", options: ["is", "are", "was"], ans: 1 },
            { q: "I as well as he ___ going there.", options: ["am", "is", "are"], ans: 0 }
        ]
    },
    {
        id: 32,
        title: "Not only ... but also",
        description: "This is the opposite of 'as well as'. When using 'not only... but also', the verb MUST follow the SECOND (closest) subject.",
        shortcut: "Verb matches the closest subject",
        tests: [
            { q: "Not only the boy but also his brothers ___ guilty.", options: ["is", "are", "was"], ans: 1 },
            { q: "Not only you but also he ___ done it.", options: ["have", "has", "had"], ans: 1 },
            { q: "Not only he but also I ___ responsible.", options: ["am", "is", "are"], ans: 0 }
        ]
    },
    {
        id: 33,
        title: "A number of vs. The number of",
        description: "'A number of' means 'many' and takes a Plural verb. 'The number of' refers to a specific total count and takes a Singular verb.",
        shortcut: "A number of = Plural | The number of = Singular",
        tests: [
            { q: "A number of students ___ present today.", options: ["is", "are", "was"], ans: 1 },
            { q: "The number of missing cars ___ increasing.", options: ["is", "are", "were"], ans: 0 },
            { q: "A number of birds ___ flying.", options: ["was", "is", "were"], ans: 2 }
        ]
    },
    {
        id: 34,
        title: "Time, Money, and Distance",
        description: "Units of time, money, or distance are treated as a single block. Therefore, the verb MUST be Singular.",
        shortcut: "Time/Money/Distance = Singular Verb",
        tests: [
            { q: "Fifty miles ___ a long distance.", options: ["is", "are", "were"], ans: 0 },
            { q: "Ten thousand dollars ___ a lot of money.", options: ["are", "is", "have"], ans: 1 },
            { q: "Three hours ___ passed.", options: ["has", "have", "are"], ans: 0 }
        ]
    },
    {
        id: 35,
        title: "Wish / Fancy (Unreal Past)",
        description: "When a sentence starts with 'I wish' or 'I fancy', the next verb MUST be in the Past Tense (V2). If using a 'be' verb, it's always 'were'.",
        shortcut: "I wish / I fancy + V2 / were",
        tests: [
            { q: "I wish I ___ a king.", options: ["was", "were", "am"], ans: 1 },
            { q: "I fancy I ___ a bird.", options: ["fly", "flew", "flown"], ans: 1 },
            { q: "I wish I ___ a car.", options: ["have", "had", "has"], ans: 1 }
        ]
    },
    {
        id: 36,
        title: "Before Rule",
        description: "In past events, 'Before' takes the Past Perfect (had + V3) BEFORE it, and Past Indefinite (V2) AFTER it.",
        shortcut: "Had + V3 + Before + V2",
        tests: [
            { q: "The patient had died before the doctor ___.", options: ["come", "came", "coming"], ans: 1 },
            { q: "I ___ finished the work before he called.", options: ["has", "have", "had"], ans: 2 },
            { q: "He had slept before I ___.", options: ["arrive", "arrived", "arrives"], ans: 1 }
        ]
    },
    {
        id: 37,
        title: "After Rule",
        description: "This is the exact reverse of the 'Before' rule. 'After' takes Past Indefinite (V2) BEFORE it, and Past Perfect (had + V3) AFTER it.",
        shortcut: "V2 + After + Had + V3",
        tests: [
            { q: "The patient died after the doctor ___.", options: ["came", "had come", "comes"], ans: 1 },
            { q: "I went out after the rain ___ stopped.", options: ["has", "have", "had"], ans: 2 },
            { q: "He arrived after we ___ our dinner.", options: ["ate", "eat", "had eaten"], ans: 2 }
        ]
    },
    {
        id: 38,
        title: "Because vs. Because of",
        description: "'Because' is followed by a full sentence (Subject + Verb). 'Because of' is a prepositional phrase followed by a Noun or V(ing).",
        shortcut: "Because + Subj+Verb | Because of + Noun/V(ing)",
        tests: [
            { q: "He failed ___ his laziness.", options: ["because", "because of", "for"], ans: 1 },
            { q: "He was absent ___ he was ill.", options: ["because", "because of", "due to"], ans: 0 },
            { q: "I stayed home because of ___ heavily.", options: ["rain", "rained", "raining"], ans: 2 }
        ]
    },
    {
        id: 39,
        title: "Despite / In spite of",
        description: "Just like 'because of', these take a Noun or V(ing). Do not put a full Subject + Verb immediately after them.",
        shortcut: "Despite / In spite of + Noun / V(ing)",
        tests: [
            { q: "Despite ___ hard, he failed.", options: ["work", "worked", "working"], ans: 2 },
            { q: "In spite of his ___, he is happy.", options: ["poor", "poverty", "poorly"], ans: 1 },
            { q: "___ being tired, he kept running.", options: ["Although", "Despite", "Though"], ans: 1 }
        ]
    },
    {
        id: 40,
        title: "Although / Though",
        description: "These are conjunctions. Unlike 'despite', they MUST be followed by a complete sentence (Subject + Verb).",
        shortcut: "Though/Although + Subject + Verb",
        tests: [
            { q: "___ he is poor, he is honest.", options: ["Despite", "Though", "In spite of"], ans: 1 },
            { q: "Although he ___ hard, he failed.", options: ["working", "work", "worked"], ans: 2 },
            { q: "He went to school although he ___ sick.", options: ["is", "was", "were"], ans: 1 }
        ]
    },
    {
        id: 41,
        title: "Unless (Built-in Negative)",
        description: "'Unless' means 'if not'. You can NEVER use 'not' or 'never' in the exact same clause as 'unless'.",
        shortcut: "Unless + Positive Verb (V1/V2)",
        tests: [
            { q: "Unless you ___ hard, you will fail.", options: ["work", "do not work", "worked"], ans: 0 },
            { q: "Unless he ___ me, I will not go.", options: ["calls", "does not call", "calling"], ans: 0 },
            { q: "Unless you ___ the truth, you will be punished.", options: ["told", "tell", "telling"], ans: 1 }
        ]
    },
    {
        id: 42,
        title: "Do / Does / Did + V1",
        description: "Whenever you use 'do', 'does', or 'did' to ask a question or make a negative sentence, the main verb MUST revert to its basic V1 form.",
        shortcut: "Do/Does/Did + Base Verb (V1)",
        tests: [
            { q: "He did not ___ to school yesterday.", options: ["went", "go", "going"], ans: 1 },
            { q: "Does she ___ a song?", options: ["sings", "sing", "sang"], ans: 1 },
            { q: "Did you ___ the work?", options: ["finished", "finishing", "finish"], ans: 2 }
        ]
    },
    {
        id: 43,
        title: "Let alone (Negative Emphasis)",
        description: "Used to say that something is impossible because a much simpler thing is already impossible. Connects two similar parts of speech.",
        shortcut: "Negative statement + let alone + harder thing",
        tests: [
            { q: "He cannot walk a mile, ___ five miles.", options: ["leave alone", "let alone", "not alone"], ans: 1 },
            { q: "I cannot afford a bike, let alone a ___.", options: ["cycle", "walking", "car"], ans: 2 },
            { q: "She doesn't even know his name, ___ his address.", options: ["leave alone", "let alone", "alone"], ans: 1 }
        ]
    },
    {
        id: 44,
        title: "Provide / Provided that",
        description: "This acts exactly like 'If'. It introduces a condition. The clause following it is usually in Present Indefinite (V1).",
        shortcut: "Provided that + Subject + V1",
        tests: [
            { q: "I will go, provided that he ___.", options: ["comes", "came", "will come"], ans: 0 },
            { q: "You will pass, provided that you ___ hard.", options: ["studied", "study", "studying"], ans: 1 },
            { q: "We will play ___ the weather is good.", options: ["unless", "provided that", "though"], ans: 1 }
        ]
    },
    {
        id: 45,
        title: "Prefer ... to",
        description: "When using 'prefer', you compare two things using 'to' (not 'than'). If comparing verbs, BOTH verbs must have 'ing'.",
        shortcut: "Prefer + V(ing) + to + V(ing)",
        tests: [
            { q: "I prefer reading ___ writing.", options: ["than", "to", "over"], ans: 1 },
            { q: "He prefers tea ___ coffee.", options: ["than", "to", "more"], ans: 1 },
            { q: "I prefer walking to ___.", options: ["run", "ran", "running"], ans: 2 }
        ]
    },
    {
        id: 46,
        title: "Stop / Remember / Forget",
        description: "If the action happened in the PAST, use V(ing). If the action is to happen in the FUTURE, use 'to + V1'.",
        shortcut: "Past action = V(ing) | Future task = to + V1",
        tests: [
            { q: "I remember ___ him last year.", options: ["to see", "see", "seeing"], ans: 2 },
            { q: "Please remember ___ the door tomorrow.", options: ["locking", "to lock", "lock"], ans: 1 },
            { q: "Stop ___ right now!", options: ["talking", "to talk", "talk"], ans: 0 }
        ]
    },
    {
        id: 47,
        title: "Universal Truth / Habitual Fact",
        description: "If a sentence states a scientific fact, universal truth, or daily habit, the verb is ALWAYS in the Present Indefinite (V1 / V+s/es).",
        shortcut: "Universal Truth = V1 or V+s/es",
        tests: [
            { q: "The earth ___ round the sun.", options: ["move", "moves", "moved"], ans: 1 },
            { q: "Ice ___ on water.", options: ["float", "floats", "floating"], ans: 1 },
            { q: "He usually ___ up early.", options: ["gets", "get", "got"], ans: 0 }
        ]
    },
    {
        id: 48,
        title: "Each / Every / Anyone / Nobody",
        description: "Words like each, every, anyone, someone, nobody, everybody ALWAYS take a Singular verb, even if they refer to a group.",
        shortcut: "Each/Every/Nobody + Singular Verb",
        tests: [
            { q: "Everybody ___ to be happy.", options: ["want", "wants", "wanting"], ans: 1 },
            { q: "Each of the boys ___ given a pen.", options: ["were", "was", "are"], ans: 1 },
            { q: "Nobody ___ his real name.", options: ["know", "knows", "knowing"], ans: 1 }
        ]
    },
    {
        id: 49,
        title: "Sensory / Copular Verbs",
        description: "Verbs like feel, look, seem, smell, and taste are followed by an Adjective, NEVER an Adverb (no 'ly').",
        shortcut: "Feel/Look/Taste + Adjective",
        tests: [
            { q: "The food tastes ___.", options: ["delicious", "deliciously", "goodly"], ans: 0 },
            { q: "He looks ___ today.", options: ["sadly", "sad", "saddened"], ans: 1 },
            { q: "I feel ___ right now.", options: ["badly", "bad", "badness"], ans: 1 }
        ]
    },
    {
        id: 50,
        title: "As soon as",
        description: "If 'As soon as' starts a sentence, BOTH clauses are usually in the exact same tense (mostly Past Indefinite V2).",
        shortcut: "As soon as + V2, + Subject + V2",
        tests: [
            { q: "As soon as the teacher entered, the students ___ up.", options: ["stand", "stands", "stood"], ans: 2 },
            { q: "As soon as I saw him, I ___.", options: ["run", "ran", "running"], ans: 1 },
            { q: "As soon as the thief saw the police, he ___ away.", options: ["ran", "run", "running"], ans: 0 }
        ]
    }
];
];
