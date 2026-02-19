/* grammar-db.js - Database for Part B (Cloze Tests) */

const grammarData = {
    
    // ==========================================
    // 1. CLOZE TEST WITH CLUES (0.5 x 10 = 5 Marks)
    // ==========================================
    with_clues: {
        tips: [
            "Always read the words in the box first. Identify their Parts of Speech.",
            "Read the whole passage once without filling any gaps to understand the context.",
            "You MUST change the word forms if needed (e.g., changing 'beauty' to 'beautiful').",
            "Check subject-verb agreement (singular/plural) carefully."
        ],
        exercises: [
            {
                title: "Dhaka Board 2023 - Environment Pollution",
                clues: ["an", "the", "to", "in", "of", "protect", "pollute", "serious", "we", "for", "safe", "aware"],
                text: "Environment pollution has become a [a] problem in our country. In cities, air is constantly being [b] by smoke of factories and vehicles. Even the water we drink is not [c]. We must be [d] of the danger. It is high time we took steps [e] our environment. If we fail to do so, [f] existence of human beings will be [g] danger. Everyone should come forward [h] save the environment. We should plant more trees [i] our own survival. Otherwise, we will face [j] untimely death.",
                answers: {
                    "a": { ans: "serious", exp: "Adjective needed before the noun 'problem'." },
                    "b": { ans: "polluted", exp: "Passive voice (is being + V3). So 'pollute' becomes 'polluted'." },
                    "c": { ans: "safe", exp: "Adjective needed to describe the condition of the water." },
                    "d": { ans: "aware", exp: "We must be 'aware of' (conscious of) the danger." },
                    "e": { ans: "to protect", exp: "Infinitive phrase: took steps 'to protect'." },
                    "f": { ans: "the", exp: "Specific noun phrase 'existence of human beings' takes 'the'." },
                    "g": { ans: "in", exp: "Appropriate preposition phrase: 'in danger'." },
                    "h": { ans: "to", exp: "Infinitive: come forward 'to' save." },
                    "i": { ans: "for", exp: "Preposition denoting purpose: 'for' our survival." },
                    "j": { ans: "an", exp: "Vowel sound in 'untimely' requires the article 'an'." }
                }
            },
            {
                title: "Cumilla Board 2019 - Traffic Jam",
                clues: ["cause", "occur", "a", "suffer", "the", "in", "rapid", "ignore", "to", "solve", "of", "by"],
                text: "Traffic jam is a common affair in big cities of our country. Increasing number of vehicles [a] traffic jam. Mainly it [b] in the congested areas. Overtaking tendency also causes traffic jam. Some drivers [c] the traffic rules and drive carelessly. It gives a lot of [d] to the people. Ambulances carrying dying patients cannot reach [e] hospital timely. Students and office-going people also suffer due [f] traffic jam. This problem should be [g] immediately. [h] this regard, strict laws should be imposed [i] the government. Besides, [j] action should be taken against the rule breakers.",
                answers: {
                    "a": { ans: "causes", exp: "Subject 'Increasing number' acts as singular here, so 'cause' becomes 'causes'." },
                    "b": { ans: "occurs", exp: "Third person singular subject 'it' requires 'occurs'." },
                    "c": { ans: "ignore", exp: "Present tense verb matching plural 'drivers'." },
                    "d": { ans: "sufferings", exp: "Noun form needed after 'a lot of'. 'Suffer' becomes 'sufferings'." },
                    "e": { ans: "the", exp: "Specific place 'the hospital'." },
                    "f": { ans: "to", exp: "Completes the phrase 'due to' (because of)." },
                    "g": { ans: "solved", exp: "Passive voice 'should be + V3'. So 'solve' becomes 'solved'." },
                    "h": { ans: "in", exp: "Phrase 'In this regard'." },
                    "i": { ans: "by", exp: "Passive sentence: imposed 'by' the government." },
                    "j": { ans: "rapid", exp: "Adjective describing 'action'." }
                }
            },
            {
                title: "Mymensingh Board 2023 - Value of Time",
                clues: ["a", "the", "in", "of", "to", "for", "idle", "suffer", "prosper", "call", "regret", "valuable"],
                text: "Time is very [a] to us. We should not waste time [b] vain. Those who idle away their time [c] a lot in the long run. Proper use [d] time is essential [e] success in life. If you put off your work [f] tomorrow, you may not get an opportunity [g] do it. Time once gone is gone forever. It never waits for anyone. It is [h] the most precious thing. So we must not pass our time [i]. If we do so, we will have to [j] later.",
                answers: {
                    "a": { ans: "valuable", exp: "Adjective describing time." },
                    "b": { ans: "in", exp: "Phrase 'in vain' means without success or a result." },
                    "c": { ans: "suffer", exp: "Plural subject 'Those' takes base verb 'suffer'." },
                    "d": { ans: "of", exp: "Preposition needed: use 'of' time." },
                    "e": { ans: "for", exp: "Essential 'for' a purpose." },
                    "f": { ans: "for", exp: "Put off 'for' tomorrow." },
                    "g": { ans: "to", exp: "Infinitive: opportunity 'to' do it." },
                    "h": { ans: "called", exp: "Passive: It is 'called'." },
                    "i": { ans: "idly", exp: "Adverb needed to describe how we pass time. 'Idle' becomes 'idly'." },
                    "j": { ans: "regret", exp: "Have to + base verb." }
                }
            },
            {
                title: "Rajshahi Board 2022 - Discipline",
                clues: ["in", "of", "to", "the", "a", "maintain", "success", "without", "important", "strict", "form", "at"],
                text: "Discipline is [a] most important thing in human life. A life [b] discipline is like a ship without a rudder. In every sphere [c] life, discipline is a must. We must [d] discipline from our early childhood. [e] student life is the best time [f] form the habit of discipline. We must [g] the rules and regulations of our institution. No one can achieve [h] in life if he does not follow [i] discipline. It is highly [j] for the progress of a nation.",
                answers: {
                    "a": { ans: "the", exp: "Superlative degree 'most important' takes 'the'." },
                    "b": { ans: "without", exp: "Contrasting preposition meaning 'lacking'." },
                    "c": { ans: "of", exp: "Every sphere 'of' life." },
                    "d": { ans: "form", exp: "Modal 'must' + base verb." },
                    "e": { ans: "a", exp: "Starting a sentence with article 'A student life' or 'student life' as general. Here 'A' fits the clue box." },
                    "f": { ans: "to", exp: "Infinitive: best time 'to' form." },
                    "g": { ans: "maintain", exp: "Modal 'must' + base verb 'maintain'." },
                    "h": { ans: "success", exp: "Noun needed as the object of achieve." },
                    "i": { ans: "strict", exp: "Adjective modifying discipline." },
                    "j": { ans: "important", exp: "Adjective describing it." }
                }
            },
            {
                title: "Dinajpur Board 2022 - Trees",
                clues: ["useful", "the", "into", "of", "to", "for", "prevent", "use", "create", "provide", "save", "cut"],
                text: "Trees are very [a] to man. They [b] us with oxygen which is essential [c] our life. They also give us food, fruits, and shade. They [d] natural disasters like floods and cyclones. We use wood [e] making furniture. But some greedy people are [f] down trees randomly. If we continue to do this, our country will turn [g] a desert. To [h] our environment, we must plant more trees. [i] government should take strict measures against deforestation. Awareness must be [j] among the common people.",
                answers: {
                    "a": { ans: "useful", exp: "Adjective describing trees." },
                    "b": { ans: "provide", exp: "Present tense verb matching plural 'They'." },
                    "c": { ans: "for", exp: "Essential 'for' our life." },
                    "d": { ans: "prevent", exp: "Action verb showing what trees do against disasters." },
                    "e": { ans: "for", exp: "Preposition followed by V+ing (making)." },
                    "f": { ans: "cutting", exp: "Present continuous tense: are + V-ing. 'Cut' becomes 'cutting'." },
                    "g": { ans: "into", exp: "Phrasal verb: turn 'into' (transform)." },
                    "h": { ans: "save", exp: "Infinitive: To 'save'." },
                    "i": { ans: "the", exp: "Specific noun: 'The' government." },
                    "j": { single: true, ans: "created", exp: "Passive voice: must be + V3. 'Create' becomes 'created'." }
                }
            }
        ]
    },

    // ==========================================
    // 2. CLOZE TEST WITHOUT CLUES (1 x 10 = 10 Marks)
    // ==========================================
    without_clues: {
        tips: [
            "Without clues tests your vocabulary, prepositions, and article rules.",
            "Look at the word BEFORE and AFTER the gap. If there is 'a/an/the' before the gap, you need a Noun.",
            "If the sentence is already complete, the gap might be an Adverb (e.g., completely, easily).",
            "There can be multiple correct answers for one gap. Just pick the most logical one."
        ],
        exercises: [
            {
                title: "Sylhet Board 2022 - Education & Women",
                text: "Education removes our ignorance and gives us the [a] of knowledge. In respect of imparting [b], there should be no discrimination [c] men and women. Education is one of the basic human [d]. If we deprive women of the right of education, almost half of our population will remain in [e]. No development can be brought about [f] the participation of women. So, government is doing everything [g] educate women. Stipends have been [h] to girls. Free education [i] been introduced up to HSC level. We must realize the [j] of female education.",
                answers: {
                    "a": { ans: "light", exp: "Phrase: 'light of knowledge'." },
                    "b": { ans: "education", exp: "Context of the passage is about imparting (giving) education." },
                    "c": { ans: "between", exp: "Used when comparing or relating two distinct groups (men and women)." },
                    "d": { ans: "rights", exp: "Phrase: 'basic human rights'. Must be plural." },
                    "e": { ans: "darkness", exp: "Opposite of the 'light of knowledge' mentioned earlier." },
                    "f": { ans: "without", exp: "Development cannot happen 'without' their participation." },
                    "g": { ans: "to", exp: "Infinitive: doing everything 'to' educate." },
                    "h": { ans: "given/provided", exp: "Passive voice present perfect: have been 'given' or 'provided'." },
                    "i": { ans: "has", exp: "Singular subject 'Free education' takes 'has'." },
                    "j": { ans: "importance/value", exp: "Noun needed after 'the'." }
                }
            },
            {
                title: "Dhaka Board 2022 - Global Warming",
                text: "Global warming is now a [a] issue. It is the gradual increase of the world's [b]. The main cause of global warming is the [c] of greenhouse gases into the atmosphere. Carbon dioxide is the most [d] of these gases. The destruction of forests is [e] responsible for this. As a result of global warming, the ice in the polar regions is [f]. This will raise the sea [g] and many coastal areas will go [h] water. We must take steps to [i] the emission of greenhouse gases to save our [j].",
                answers: {
                    "a": { ans: "global/burning/serious", exp: "Adjective describing the issue." },
                    "b": { ans: "temperature", exp: "Global warming is the rise in temperature." },
                    "c": { ans: "emission/release", exp: "Noun form of gases being let out." },
                    "d": { ans: "prominent/dangerous/important", exp: "Adjective indicating its rank among gases." },
                    "e": { ans: "largely/also", exp: "Adverb modifying the adjective 'responsible'." },
                    "f": { ans: "melting", exp: "Present continuous tense describing the ice." },
                    "g": { ans: "level", exp: "Phrase: 'sea level'." },
                    "h": { ans: "under", exp: "Preposition: 'go under water' means to submerge." },
                    "i": { ans: "reduce/control/stop", exp: "Infinitive showing action against emission." },
                    "j": { ans: "world/earth/planet", exp: "The object we are trying to save." }
                }
            },
            {
                title: "Cumilla Board 2019 - Traffic Police",
                text: "A traffic police is a familiar [a] in the cities. He is seen standing on a [b] at a road crossing. He performs his duties [c] heat and cold. His main duty is to [d] the movement of vehicles and pedestrians. He controls the traffic by [e] his hands or using a whistle. When he raises his hand, the vehicles [f]. He has to [g] hard from morning till night. Though his job is very [h], he gets a poor [i]. The government should take steps to improve his [j] of living.",
                answers: {
                    "a": { ans: "figure/face", exp: "Noun describing a known person." },
                    "b": { ans: "island/platform", exp: "The physical place a traffic police stands on." },
                    "c": { ans: "in/during", exp: "Preposition showing weather conditions." },
                    "d": { ans: "control/regulate", exp: "Infinitive showing his main job." },
                    "e": { ans: "raising/moving", exp: "Preposition 'by' is followed by a V-ing." },
                    "f": { ans: "stop/halt", exp: "Plural subject 'vehicles' takes base verb." },
                    "g": { ans: "work", exp: "Have to + base verb." },
                    "h": { ans: "hard/tiring/difficult", exp: "Adjective describing the job." },
                    "i": { ans: "salary/pay", exp: "Noun referring to his income." },
                    "j": { ans: "standard", exp: "Phrase: 'standard of living'." }
                }
            },
            {
                title: "Mymensingh Board 2022 - Newspaper",
                text: "Newspaper plays an important [a] in our daily life. It is the [b] of knowledge. We cannot think of our modern life [c] reading a newspaper. It gives us [d] about the current events of the world. By reading a newspaper, we can [e] our knowledge. It tells us what is [f] around us. There are many [g] of newspapers. But we should read a [h] and impartial newspaper. A biased newspaper can [i] the people. So, we must be [j] in selecting newspapers.",
                answers: {
                    "a": { ans: "role/part", exp: "Phrase: 'plays a role'." },
                    "b": { ans: "storehouse/source", exp: "Metaphor describing newspaper." },
                    "c": { ans: "without", exp: "Preposition showing lack or absence." },
                    "d": { ans: "news/information", exp: "Noun showing what it provides." },
                    "e": { ans: "enrich/increase", exp: "Modal 'can' + base verb." },
                    "f": { ans: "happening/occurring", exp: "Present continuous tense 'is happening'." },
                    "g": { ans: "kinds/types", exp: "Plural noun showing variety." },
                    "h": { ans: "neutral/good", exp: "Adjective linked with 'impartial'." },
                    "i": { ans: "mislead/confuse", exp: "Modal 'can' + negative base verb." },
                    "j": { ans: "careful/conscious", exp: "Adjective describing our awareness." }
                }
            },
            {
                title: "Chattogram Board 2023 - Reading Habit",
                text: "Reading is an excellent [a]. It helps us to [b] our knowledge. Books are the best [c] of a man. A man may have many friends but they may [d] him in his times of need. But a book will never [e] him. It will always stay by his [f]. By reading books, we can [g] about the history, culture, and lifestyle of other countries. It removes our [h] and broadens our outlook. So, we should [i] the habit of reading books from our [j] life.",
                answers: {
                    "a": { ans: "habit", exp: "Noun needed. The passage is about reading." },
                    "b": { ans: "increase/enrich/expand", exp: "Infinitive 'to' + base verb." },
                    "c": { ans: "friends/companions", exp: "Superlative 'best' + plural noun." },
                    "d": { ans: "leave/deceive", exp: "Modal 'may' + base verb describing fake friends." },
                    "e": { ans: "leave/betray", exp: "A book will never abandon you." },
                    "f": { ans: "side", exp: "Phrase: 'stay by his side'." },
                    "g": { ans: "learn/know", exp: "Modal 'can' + base verb." },
                    "h": { ans: "ignorance", exp: "Noun needed. Reading removes lack of knowledge." },
                    "i": { ans: "form/develop/build", exp: "You form or build a habit." },
                    "j": { ans: "early/student", exp: "Adjective describing which part of life." }
                }
            }
        ]
    }
};
