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
                    "j": { ans: "created", exp: "Passive voice: must be + V3. 'Create' becomes 'created'." }
                }
            },
            {
                title: "Jashore Board 2019 - Food Adulteration",
                clues: ["a", "the", "of", "in", "from", "adulterate", "eat", "greedy", "profit", "know", "fatal", "commit"],
                text: "Food adulteration is one of [a] greatest problems in our country. Different food and food products, vegetables and fruits are [b] adulterated. The [c] businessmen adulterate them to make a huge [d]. But they do not [e] that by doing this they are [f] a serious crime. The people [g] this adulterated food suffer [h] various diseases. Sometimes they suffer from [i] diseases and die. So, [j] strict law should be passed to stop it.",
                answers: {
                    "a": { ans: "the", exp: "Superlative degree 'greatest' must be preceded by 'the'." },
                    "b": { ans: "being", exp: "Present continuous passive: are 'being' adulterated." },
                    "c": { ans: "greedy", exp: "Adjective describing the businessmen." },
                    "d": { ans: "profit", exp: "Noun: make a huge 'profit'." },
                    "e": { ans: "know", exp: "Do not + base verb." },
                    "f": { ans: "committing", exp: "Present continuous: are 'committing' a crime." },
                    "g": { ans: "eating", exp: "Present participle describing the people: people 'eating' this food." },
                    "h": { ans: "from", exp: "Appropriate preposition: suffer 'from'." },
                    "i": { ans: "fatal", exp: "Adjective meaning deadly." },
                    "j": { ans: "a", exp: "Singular countable noun phrase 'strict law' takes 'a'." }
                }
            },
            {
                title: "Chattogram Board 2019 - Information Technology",
                clues: ["a", "the", "to", "in", "of", "base", "make", "know", "rapid", "for", "connect", "miracle"],
                text: "We live in an age of [a] science and technology. With the [b] development of science, the world has [c] closer. We can [d] with anyone in the world within seconds. It is [e] on the Internet. Information technology has [f] our life easy and comfortable. We cannot think [g] a single day without it. It has brought a [h] change in every sector. To keep pace with [i] modern world, we must have [j] about IT.",
                answers: {
                    "a": { ans: "modern", exp: "Refers to the modern era of science." },
                    "b": { ans: "rapid", exp: "Adjective describing development." },
                    "c": { ans: "come", exp: "Has + V3. The world has 'come' closer." },
                    "d": { ans: "connect", exp: "Modal 'can' + base verb." },
                    "e": { ans: "based", exp: "Passive: It is 'based' on." },
                    "f": { ans: "made", exp: "Has + V3. Has 'made' our life easy." },
                    "g": { ans: "of", exp: "Appropriate preposition: think 'of'." },
                    "h": { ans: "miraculous", exp: "Adjective form of miracle." },
                    "i": { ans: "the", exp: "Specific noun: 'the' modern world." },
                    "j": { ans: "knowledge", exp: "Noun form of 'know'." }
                }
            },
            {
                title: "Barishal Board 2019 - Book Fair",
                clues: ["a", "the", "in", "of", "to", "buy", "visit", "organize", "different", "gather", "huge", "mind"],
                text: "A book fair is an exhibition [a] books. It is usually [b] in the winter season. [c] lot of people gather there. People of [d] ages and classes come to the fair. The main purpose of [e] the fair is not to buy books but to [f] knowledge. However, book lovers [g] books from the fair. A book fair broadens our [h]. It removes the darkness of [i] mind. It is [j] great source of knowledge.",
                answers: {
                    "a": { ans: "of", exp: "Exhibition 'of' books." },
                    "b": { ans: "organized", exp: "Passive voice: is usually 'organized'." },
                    "c": { ans: "A", exp: "Phrase: 'A lot of'." },
                    "d": { ans: "different", exp: "Adjective describing ages." },
                    "e": { ans: "visiting", exp: "Preposition 'of' + V-ing." },
                    "f": { ans: "gather", exp: "Infinitive: to 'gather' knowledge." },
                    "g": { ans: "buy", exp: "Plural subject 'lovers' takes base verb." },
                    "h": { ans: "mind", exp: "Broadens our 'mind'." },
                    "i": { ans: "the", exp: "Darkness of 'the' mind." },
                    "j": { ans: "a", exp: "Singular countable phrase 'great source' takes 'a'." }
                }
            },
            {
                title: "Sylhet Board 2019 - Email",
                clues: ["a", "the", "to", "through", "of", "send", "receive", "within", "cheap", "popular", "day", "system"],
                text: "Email has brought about [a] revolution in modern communication. Messages can be transmitted [b] one country to another within seconds. It is far [c] than telephone calls. Trade and commerce has become greatly dependent on [d] speedy mode of communication. It has not [e] the privacy of communication. Email [f] is very easy. A message can be [g] to many persons at a time. It takes only [h] few seconds. It has become very [i] day by [j].",
                answers: {
                    "a": { ans: "a", exp: "Singular noun 'revolution' takes 'a'." },
                    "b": { ans: "from", exp: "Phrase: 'from one country to another'." },
                    "c": { ans: "cheaper", exp: "Comparative degree because of 'than'." },
                    "d": { ans: "this", exp: "Demonstrative adjective. (Assume 'this' is in clues or use 'the')." },
                    "e": { ans: "broken", exp: "Present perfect: has not 'broken' or 'destroyed'." },
                    "f": { ans: "system", exp: "Noun phrase: Email 'system'." },
                    "g": { ans: "sent", exp: "Passive: can be 'sent'." },
                    "h": { ans: "a", exp: "Phrase: 'a few seconds'." },
                    "i": { ans: "popular", exp: "Adjective describing the state of Email." },
                    "j": { ans: "day", exp: "Phrase: 'day by day'." }
                }
            },
            {
                title: "Dinajpur Board 2023 - Internet",
                clues: ["a", "the", "in", "of", "to", "invent", "change", "bless", "communicate", "entire", "without", "get"],
                text: "Internet is the latest [a] of science. It has brought a great [b] in the field of communication. It is a [c] to human beings. Through internet, we can [d] with anyone in the world. We can [e] any information within a second. It has made the [f] world a global village. [g] the present world, we cannot think [h] a single day [i] internet. It has reduced the distance [j] the people of the world.",
                answers: {
                    "a": { ans: "invention", exp: "Noun form needed after 'latest'." },
                    "b": { ans: "change", exp: "Noun: brought a great 'change'." },
                    "c": { ans: "blessing", exp: "Noun form needed after article 'a'." },
                    "d": { ans: "communicate", exp: "Modal 'can' + base verb." },
                    "e": { ans: "get", exp: "Modal 'can' + base verb." },
                    "f": { ans: "entire", exp: "Adjective describing the world." },
                    "g": { ans: "In", exp: "Preposition: 'In the present world'." },
                    "h": { ans: "of", exp: "Preposition: think 'of'." },
                    "i": { ans: "without", exp: "Preposition meaning absence." },
                    "j": { ans: "among/between", exp: "Preposition describing relationship between groups." }
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
            },
            {
                title: "Rajshahi Board 2019 - Patriotism",
                text: "Patriotism is a noble [a]. It inspires a man to [b] the last drop of blood for the [c] of his country. A man without patriotism is no better than a [d]. A true patriot is [e] by all. He thinks for the [f] of his country. On the other hand, the unpatriotic men think only for their own [g]. Those who die for the country are true [h]. They are remembered even after their [i]. That is why, the freedom fighters who sacrificed their lives in 1971 are remembered with [j].",
                answers: {
                    "a": { ans: "virtue/quality", exp: "Noun describing what kind of trait patriotism is." },
                    "b": { ans: "shed/sacrifice", exp: "Infinitive 'to' + base verb." },
                    "c": { ans: "freedom/independence/sake", exp: "Noun indicating what they fight for." },
                    "d": { ans: "beast/animal", exp: "Common metaphor comparing an unpatriotic man to an animal." },
                    "e": { ans: "honored/respected/loved", exp: "Passive voice (is + V3)." },
                    "f": { ans: "welfare/good/development", exp: "Noun indicating positive outcome for the country." },
                    "g": { ans: "interest/benefit", exp: "Selfish motives." },
                    "h": { ans: "patriots/heroes", exp: "Plural noun." },
                    "i": { ans: "death", exp: "Noun form needed after possessive 'their'." },
                    "j": { ans: "respect/honor/love", exp: "Noun describing how we feel about them." }
                }
            },
            {
                title: "Jashore Board 2019 - Rivers of Bangladesh",
                text: "Bangladesh is a [a] of rivers. The rivers are the [b] of our country. They are the main [c] of our water. We get [d] fishes from the rivers. Our agriculture mostly depends [e] the rivers. Rivers make our soil [f]. During the dry season, we irrigate our lands with river [g]. Besides, rivers are used for [h] goods from one place to another. But unfortunately, many of our rivers are [i] up. We must save our rivers for our own [j].",
                answers: {
                    "a": { ans: "land/country", exp: "Phrase: 'land of rivers'." },
                    "b": { ans: "lifeline/beauty", exp: "Metaphor describing the importance of rivers." },
                    "c": { ans: "source", exp: "Noun describing where water comes from." },
                    "d": { ans: "plenty of/abundant/many", exp: "Adjective/phrase describing amount of fishes." },
                    "e": { ans: "on/upon", exp: "Appropriate preposition: depends 'on'." },
                    "f": { ans: "fertile/productive", exp: "Adjective describing the quality of the soil." },
                    "g": { ans: "water", exp: "Noun: what do we irrigate with?" },
                    "h": { ans: "carrying/transporting", exp: "Preposition 'for' + V-ing." },
                    "i": { ans: "drying", exp: "Present continuous: are drying up." },
                    "j": { ans: "survival/sake/existence", exp: "Noun indicating our own benefit." }
                }
            },
            {
                title: "Barishal Board 2019 - Computer",
                text: "Computer is one of the greatest [a] of modern science. It has brought about a great [b] in the modern world. It is used in almost every [c] of life. Students use it for their [d]. Doctors use it to [e] diseases. Engineers use it to [f] buildings and bridges. In fact, it has [g] our life easy and comfortable. But it has some [h] effects too. Staring at the computer screen for a long time affects our [i]. Therefore, we should use it [j].",
                answers: {
                    "a": { ans: "inventions/wonders", exp: "Phrase 'one of the' must be followed by a plural noun." },
                    "b": { ans: "change/revolution", exp: "Noun describing a massive shift." },
                    "c": { ans: "sphere/sector/field", exp: "Phrase: 'every sphere of life'." },
                    "d": { ans: "studies/education", exp: "Noun indicating what students do." },
                    "e": { ans: "diagnose/identify", exp: "Infinitive 'to' + base verb for medical context." },
                    "f": { ans: "design/build", exp: "Infinitive 'to' + base verb for engineering context." },
                    "g": { ans: "made", exp: "Present perfect tense: has + V3." },
                    "h": { ans: "bad/negative/adverse", exp: "Adjective contrasting the positive points." },
                    "i": { ans: "eyesight/eyes", exp: "Noun indicating what gets damaged by screens." },
                    "j": { ans: "carefully/properly/wisely", exp: "Adverb describing how we should use it." }
                }
            },
            {
                title: "Sylhet Board 2019 - Destruction of Forests",
                text: "Trees are very useful to us. But people are cutting down trees [a]. If this [b] goes on, the country will turn into a desert. The [c] of trees causes ecological imbalance. Due to the [d] of trees, the temperature of the earth is [e] day by day. It is called global [f]. To save the environment, we should [g] more trees. [h] program should be extended throughout the country. We should [i] the common people about the importance of trees. Otherwise, our existence will be at [j].",
                answers: {
                    "a": { ans: "randomly/indiscriminately/carelessly", exp: "Adverb describing how trees are cut." },
                    "b": { ans: "process/destruction/tendency", exp: "Noun referring to the cutting down of trees." },
                    "c": { ans: "cutting/destruction/lack", exp: "Noun describing the loss of trees." },
                    "d": { ans: "lack/shortage", exp: "Noun phrase: 'due to the lack of'." },
                    "e": { ans: "increasing/rising", exp: "Present continuous tense describing temperature." },
                    "f": { ans: "warming", exp: "Noun phrase: 'global warming'." },
                    "g": { ans: "plant", exp: "Modal 'should' + base verb." },
                    "h": { ans: "Tree plantation", exp: "Noun phrase acting as the subject." },
                    "i": { ans: "educate/warn/inform", exp: "Modal 'should' + base verb." },
                    "j": { ans: "stake/risk", exp: "Phrase: 'at stake' meaning at risk." }
                }
            },
            {
                title: "Dinajpur Board 2023 - Student Life",
                text: "Student life is the [a] time of preparation for future life. It is called the [b] season of life. If a student [c] his time properly, he can shine in life. But if he [d] his time, he will suffer in the future. A student must [e] some good habits. He should be [f] and punctual. He should [g] the rules of health and hygiene. Besides his studies, he should take part in [h] activities. By doing so, he can [i] his body and mind. Thus, he can prepare himself [j] the future.",
                answers: {
                    "a": { ans: "best/ideal", exp: "Adjective describing the time." },
                    "b": { ans: "seed/spring", exp: "Metaphor: 'seed season' (planting for the future)." },
                    "c": { ans: "uses/utilizes", exp: "First conditional: Present tense verb (subject is 'student')." },
                    "d": { ans: "wastes/kills", exp: "First conditional: Present tense negative action." },
                    "e": { ans: "form/build/develop", exp: "Modal 'must' + base verb." },
                    "f": { ans: "disciplined/regular/attentive", exp: "Adjective linked with 'punctual'." },
                    "g": { ans: "follow/maintain/obey", exp: "Modal 'should' + base verb." },
                    "h": { ans: "co-curricular/extra-curricular", exp: "Adjective describing outside study activities." },
                    "i": { ans: "develop/refresh", exp: "Modal 'can' + base verb." },
                    "j": { ans: "for", exp: "Preposition: prepare 'for' something." }
                }
            }
        ]
    }
};
