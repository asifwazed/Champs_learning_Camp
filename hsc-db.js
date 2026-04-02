const hscVocabDB = [
    // Nelson Mandela & Human Rights
    { word: "Discrimination", type: "Noun", meaning: "বৈষম্য", syn: "Injustice, Bias, Bigotry" },
    { word: "Emancipation", type: "Noun", meaning: "মুক্তি", syn: "Freedom, Liberation" },
    { word: "Reconciliation", type: "Noun", meaning: "মীমাংসা", syn: "Settlement, Reunion" },
    { word: "Negotiation", type: "Noun", meaning: "আলোচনা", syn: "Discussion, Compromise" },
    { word: "Manifestation", type: "Noun", meaning: "প্রকাশ", syn: "Display, Expression" },
    { word: "Apartheid", type: "Noun", meaning: "বর্ণবাদ", syn: "Segregation, Racism" },
    { word: "Resolve", type: "Noun/Verb", meaning: "সংকল্প / সমাধান", syn: "Determination, Settle" },
    { word: "Oppression", type: "Noun", meaning: "নিপীড়ন", syn: "Persecution, Abuse" },
    { word: "Dignity", type: "Noun", meaning: "মর্যাদা", syn: "Honor, Respect" },
    { word: "Mythic", type: "Adj", meaning: "পৌরাণিক", syn: "Legendary, Fictional" },
    
    // Kuakata & Environment
    { word: "Pristine", type: "Adj", meaning: "আদিম / অকৃত্রিম", syn: "Pure, Unspoiled" },
    { word: "Indigenous", type: "Adj", meaning: "স্বদেশী / স্থানীয়", syn: "Native, Local" },
    { word: "Picturesque", type: "Adj", meaning: "ছবির মতো সুন্দর", syn: "Scenic, Beautiful" },
    { word: "Sanctuary", type: "Noun", meaning: "আশ্রয়স্থল", syn: "Refuge, Haven" },
    { word: "Migratory", type: "Adj", meaning: "পরিযায়ী", syn: "Traveling, Roving" },
    { word: "Expanse", type: "Noun", meaning: "বিস্তৃতি", syn: "Vastness, Area" },
    { word: "Destructive", type: "Adj", meaning: "ধ্বংসাত্মক", syn: "Devastating, Ruinous" },
    { word: "Erosion", type: "Noun", meaning: "ক্ষয়", syn: "Deterioration, Wearing away" },
    { word: "Magnificent", type: "Adj", meaning: "চমৎকার", syn: "Splendid, Glorious" },
    { word: "Devastation", type: "Noun", meaning: "ধ্বংস", syn: "Destruction, Ruin" },

    // Diaspora & Culture
    { word: "Diaspora", type: "Noun", meaning: "দেশান্তর", syn: "Migration, Displacement" },
    { word: "Assimilation", type: "Noun", meaning: "একত্রীকরণ", syn: "Integration, Merging" },
    { word: "Heritage", type: "Noun", meaning: "ঐতিহ্য", syn: "Tradition, Ancestry" },
    { word: "Settlement", type: "Noun", meaning: "বসতি", syn: "Colony, Community" },
    { word: "Phenomenon", type: "Noun", meaning: "ঘটনা", syn: "Occurrence, Event" },
    { word: "Catastrophic", type: "Adj", meaning: "বিপর্যয়কর", syn: "Disastrous, Fatal" },
    { word: "Ancestors", type: "Noun", meaning: "পূর্বপুরুষ", syn: "Forefathers, Predecessors" },
    { word: "Noteworthy", type: "Adj", meaning: "উল্লেখযোগ্য", syn: "Remarkable, Important" },
    { word: "Alienation", type: "Noun", meaning: "বিচ্ছিন্নতা", syn: "Isolation, Detachment" },
    { word: "Fascination", type: "Noun", meaning: "মুগ্ধতা", syn: "Attraction, Captivation" },

    // Adolescence & Health
    { word: "Adolescence", type: "Noun", meaning: "কৈশোর", syn: "Youth, Teen years" },
    { word: "Transition", type: "Noun", meaning: "পরিবর্তন / রূপান্তর", syn: "Change, Shift" },
    { word: "Vulnerability", type: "Noun", meaning: "দুর্বলতা", syn: "Weakness, Risk" },
    { word: "Puberty", type: "Noun", meaning: "বয়ঃসন্ধিকাল", syn: "Maturation" },
    { word: "Potential", type: "Noun/Adj", meaning: "সম্ভাবনা", syn: "Capability, Possible" },
    { word: "Mortality", type: "Noun", meaning: "মৃত্যুর হার", syn: "Fatality, Death rate" },
    { word: "Complication", type: "Noun", meaning: "জটিলতা", syn: "Difficulty, Problem" },
    { word: "Malnutrition", type: "Noun", meaning: "অপুষ্টি", syn: "Starvation, Undernourishment" },
    { word: "Empowerment", type: "Noun", meaning: "ক্ষমতায়ন", syn: "Authorization, Enablement" },
    { word: "Initiative", type: "Noun", meaning: "উদ্যোগ", syn: "Action, Plan" },

    // Linking Words (Crucial for Rearrange & Cloze)
    { word: "Consequently", type: "Adverb", meaning: "ফলস্বরূপ", syn: "Therefore, As a result" },
    { word: "Furthermore", type: "Adverb", meaning: "অধিকন্তু", syn: "Moreover, In addition" },
    { word: "Nevertheless", type: "Adverb", meaning: "তা সত্ত্বেও", syn: "However, Still" },
    { word: "Subsequently", type: "Adverb", meaning: "পরবর্তীতে", syn: "Afterwards, Later" },
    { word: "Simultaneously", type: "Adverb", meaning: "একই সাথে", syn: "Concurrently, At the same time" },
    { word: "Inevitably", type: "Adverb", meaning: "অনিবার্যভাবে", syn: "Unavoidably, Certain" },
    { word: "Particularly", type: "Adverb", meaning: "বিশেষভাবে", syn: "Specifically, Especially" },
    { word: "Significantly", type: "Adverb", meaning: "তাৎপর্যপূর্ণভাবে", syn: "Importantly, Notably" },
    { word: "Conversely", type: "Adverb", meaning: "বিপরীতভাবে", syn: "Oppositely, On the other hand" },
    { word: "Accordingly", type: "Adverb", meaning: "তদনুসারে", syn: "Correspondingly, Properly" }
];
