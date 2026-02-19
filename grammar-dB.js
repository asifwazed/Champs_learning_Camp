/* grammar-db.js - Database for Part B (Cloze Tests) */

const grammarData = {
    // --- CLOZE TEST WITH CLUES (0.5 x 10 = 5 Marks) ---
    with_clues: {
        tips: [
            "Always read the words in the box first. Identify their Parts of Speech (Noun, Verb, Adjective).",
            "Read the whole passage once without filling any gaps to understand the context.",
            "You MUST change the word forms if needed (e.g., changing 'beauty' to 'beautiful', or 'play' to 'playing').",
            "Check subject-verb agreement (singular/plural)."
        ],
        exercises: [
            {
                title: "Dhaka Board 2023 - Environment",
                clues: ["an", "the", "to", "in", "of", "protect", "pollute", "serious", "we", "for", "safe", "aware"],
                text: "Environment pollution has become a [a] problem in our country. In cities, air is constantly being [b] by smoke of factories and vehicles. Even the water we drink is not [c]. We must be [d] of the danger. It is high time we took steps [e] our environment. If we fail to do so, [f] existence of human beings will be [g] danger. Everyone should come forward [h] save the environment. We should plant more trees [i] our own survival. Otherwise, we will face [j] untimely death.",
                answers: {
                    "a": { ans: "serious", exp: "Adjective needed before the noun 'problem'." },
                    "b": { ans: "polluted", exp: "Passive voice (is being + V3). So 'pollute' becomes 'polluted'." },
                    "c": { ans: "safe", exp: "Adjective needed to describe the water." },
                    "d": { ans: "aware", exp: "We must be 'aware of' (conscious of) the danger." },
                    "e": { ans: "to protect", exp: "Infinitive verb phrase needed: steps 'to protect'." },
                    "f": { ans: "the", exp: "Specific noun 'existence of human beings' takes 'the'." },
                    "g": { ans: "in", exp: "Phrase: 'in danger'." },
                    "h": { ans: "to", exp: "Come forward 'to' do something." },
                    "i": { ans: "for", exp: "Preposition denoting purpose: 'for' our survival." },
                    "j": { ans: "an", exp: "Vowel sound 'untimely' takes article 'an'." }
                }
            }
            // You can add Exercise 2, 3, 4 here later...
        ]
    },

    // --- CLOZE TEST WITHOUT CLUES (1 x 10 = 10 Marks) ---
    without_clues: {
        tips: [
            "Without clues tests your vocabulary, prepositions, and article rules.",
            "Look at the word BEFORE and AFTER the gap. If there is 'a/an/the' before the gap, you need a Noun.",
            "If the sentence is already complete, the gap might be an Adverb (e.g., completely, easily).",
            "There can be multiple correct answers for one gap. Just pick the most logical one."
        ],
        exercises: [
            {
                title: "Sylhet Board 2022 - Education",
                text: "Education removes our ignorance and gives us the [a] of knowledge. In respect of imparting [b], there should be no discrimination [c] men and women. Education is one of the basic human [d]. If we deprive women of the right of education, almost half of our population will remain in [e]. No development can be brought about [f] the participation of women. So, government is doing everything [g] educate women. Stipends have been [h] to girls. Free education [i] been introduced up to HSC level. We must realize the [j] of female education.",
                answers: {
                    "a": { ans: "light", exp: "Phrase: 'light of knowledge'." },
                    "b": { ans: "education", exp: "Context of the passage is about imparting (giving) education." },
                    "c": { ans: "between", exp: "Used when comparing or relating two distinct groups (men and women)." },
                    "d": { ans: "rights", exp: "Phrase: 'basic human rights'. Must be plural." },
                    "e": { ans: "darkness", exp: "Opposite of the 'light of knowledge' mentioned earlier." },
                    "f": { ans: "without", exp: "Development cannot happen 'without' their participation." },
                    "g": { ans: "to", exp: "Infinitive: doing everything 'to' educate." },
                    "h": { ans: "given", exp: "Passive voice present perfect: have been 'given' / 'provided'." },
                    "i": { ans: "has", exp: "Singular subject 'Free education' takes 'has'." },
                    "j": { ans: "importance", exp: "Noun needed after 'the'. 'Importance' or 'value' fits perfectly." }
                }
            }
        ]
    }
};
