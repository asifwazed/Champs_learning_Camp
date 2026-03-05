/* boss-db.js - Massive Varsity & Admission Grammar Database */

window.bossDB = [
    // --- INVERSIONS & ADVANCED STRUCTURES ---
    { q: "Scarcely had the teacher entered the classroom _____ the students stood up.", options: ["than", "when", "then", "before"], ans: 1, exp: "Correlative rule: Scarcely/Hardly is ALWAYS followed by 'when'." },
    { q: "No sooner had the thief seen the police _____ he ran away.", options: ["when", "than", "then", "but"], ans: 1, exp: "'No sooner' is a comparative phrase and MUST be followed by 'than'." },
    { q: "Not only _____ the exam, but he also secured the first position.", options: ["did he pass", "he passed", "he did pass", "passed he"], ans: 0, exp: "Negative adverbs (Not only, Never, Seldom) at the beginning of a sentence cause an Inversion (Auxiliary verb comes before the subject)." },

    // --- SUBJUNCTIVES (The Varsity Trap) ---
    { q: "The doctor suggested that she _____ taking the medicine immediately.", options: ["stops", "stopped", "stop", "should stop"], ans: 2, exp: "Subjunctive rule: After verbs like suggest, insist, recommend + 'that', the next verb must be in its BASE form (no -s, -ed, or should)." },
    { q: "It is imperative that Asif _____ present at the meeting.", options: ["is", "be", "are", "will be"], ans: 1, exp: "Subjunctive rule: After 'It is imperative that', the 'Be' verb must be strictly 'be'." },

    // --- CAUSATIVES ---
    { q: "The teacher made the students _____ the entire essay again.", options: ["to write", "writing", "write", "written"], ans: 2, exp: "Causative 'Make': Make + Person + Base Verb (V1). No 'to' is allowed!" },
    { q: "I had my car _____ yesterday.", options: ["repair", "to repair", "repairing", "repaired"], ans: 3, exp: "Causative 'Have/Get' with an Object (car): Have/Get + Object + V3 (Past Participle)." },
    { q: "I finally got Asif _____ the UI bugs.", options: ["fix", "to fix", "fixed", "fixing"], ans: 1, exp: "Causative 'Get' with a Person: Get + Person + To + V1." },

    // --- CONDITIONALS ---
    { q: "If I _____ a king, I would help the poor.", options: ["was", "am", "were", "had been"], ans: 2, exp: "In the 2nd Conditional (unreal past), the 'Be' verb is ALWAYS 'were' for all subjects." },
    { q: "Had I known you were waiting, I _____ you.", options: ["would help", "will help", "would have helped", "helped"], ans: 2, exp: "'Had I known' is an inverted 3rd Conditional (If I had known). It requires 'would have + V3'." },
    { q: "If water freezes, it _____ into ice.", options: ["will turn", "would turn", "turns", "turned"], ans: 2, exp: "Zero Conditional: Scientific facts use Present Simple in both clauses." },

    // --- PREPOSITIONS (Varsity Favorites) ---
    { q: "He insisted _____ leaving immediately.", options: ["in", "on", "for", "at"], ans: 1, exp: "The verb 'insist' is always followed by the preposition 'on'." },
    { q: "The man died _____ overeating.", options: ["of", "from", "by", "for"], ans: 1, exp: "Die 'of' disease, Die 'from' overeating/overwork, Die 'by' accident/suicide." },
    { q: "She parted _____ her parents in tears.", options: ["with", "from", "away", "of"], ans: 1, exp: "Part 'from' a person. Part 'with' a thing." },
    { q: "Are you angry _____ me?", options: ["at", "with", "for", "on"], ans: 1, exp: "Angry 'with' a person. Angry 'at' a thing or situation." },
    { q: "I look forward to _____ from you soon.", options: ["hear", "have heard", "hearing", "be hearing"], ans: 2, exp: "Phrases like 'look forward to' and 'with a view to' take a gerund (V+ing) after 'to'." },

    // --- VOCABULARY: SYNONYMS & ANTONYMS ---
    { q: "What is the synonym of 'CANDID'?", options: ["Deceptive", "Frank", "Secretive", "Rude"], ans: 1, exp: "Candid means honest, outspoken, or 'Frank'." },
    { q: "Choose the exact synonym for 'OBSOLETE'.", options: ["Modern", "Absolute", "Outdated", "Stubborn"], ans: 2, exp: "Obsolete refers to something no longer in use, hence 'Outdated'." },
    { q: "What is the antonym of 'DILIGENT'?", options: ["Hardworking", "Lazy", "Intelligent", "Careful"], ans: 1, exp: "Diligent means showing care and effort. The opposite is 'Lazy'." },
    { q: "Find the antonym of 'EPHEMERAL'.", options: ["Short-lived", "Permanent", "Toxic", "Magical"], ans: 1, exp: "Ephemeral means lasting for a very short time. The opposite is 'Permanent'." },
    { q: "Synonym of 'LUCID' is:", options: ["Confusing", "Clear", "Dark", "Heavy"], ans: 1, exp: "Lucid means expressed clearly, easy to understand." },

    // --- MISCELLANEOUS TRAPS ---
    { q: "Neither the principal nor the teachers _____ present.", options: ["was", "were", "is", "has been"], ans: 1, exp: "Rule of Proximity: When using 'Neither... nor', the verb agrees with the noun closest to it (teachers -> were)." },
    { q: "One of my best _____ moving to Canada.", options: ["friend is", "friends are", "friends is", "friend are"], ans: 2, exp: "'One of' is followed by a Plural Noun (friends) but a Singular Verb (is)." },
    { q: "The jury _____ divided in their opinions.", options: ["was", "were", "is", "has"], ans: 1, exp: "Collective nouns (jury, committee) take a plural verb when the members act individually (divided opinions)." },
    { q: "It is high time we _____ the matter.", options: ["discuss", "discussed", "will discuss", "had discussed"], ans: 1, exp: "Structure: 'It is high time' + Subject + V2 (Past Simple)." },
    { q: "I am used to _____ coffee in the morning.", options: ["drink", "drinking", "drank", "have drunk"], ans: 1, exp: "'Be verb + used to' is followed by V+ing. (I am used to drinking)." },
    { q: "He speaks as if he _____ everything.", options: ["knows", "knew", "had known", "has known"], ans: 1, exp: "'As if / As though' followed by V2 (Unreal past). If the first part is past tense, use 'had + V3'." },
    { q: "Fifty miles _____ a long distance.", options: ["are", "is", "were", "have been"], ans: 1, exp: "Distances, amounts, and times are considered single units. Hence, singular verb (is)." },
    { q: "The scenery of Switzerland _____ beautiful.", options: ["are", "is", "were", "have been"], ans: 1, exp: "'Scenery' is an uncountable noun and always takes a singular verb." },
    { q: "Would you mind _____ the window?", options: ["to open", "open", "opening", "opened"], ans: 2, exp: "'Would you mind' is always followed by a Gerund (V+ing)." },
    
    // --- ADVANCED WORD LOGIC ---
    { q: "Choose the correctly spelt word:", options: ["Accomodation", "Acommodation", "Accommodation", "Acomodation"], ans: 2, exp: "Accommodation has double 'c' and double 'm'." },
    { q: "Choose the correctly spelt word:", options: ["Lieuetenant", "Lieutenant", "Leutenant", "Lieutenent"], ans: 1, exp: "Trick to remember: Lie + u + ten + ant = Lieutenant." },
    { q: "Which of the following is a noun?", options: ["Accept", "Acceptable", "Acceptance", "Acceptably"], ans: 2, exp: "-ance is a noun suffix (Acceptance). Accept (Verb), Acceptable (Adj)." }
];
