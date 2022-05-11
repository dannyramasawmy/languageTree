// =============================================================================
// Root
// =============================================================================

var romanian = new DataCard(
    "Romanian", "Română",
    "Romanian language tree. <br>\
    Click here to change the langauge.");
    romanian.SetParent(romanian);
    
// =============================================================================
// Verbs
// =============================================================================

var verbs = new DataCard(
    "Verbs", "Verbe",
    "Common verbs are listed here.")
    SetParentAndChild(romanian, verbs);
    
var love = new DataCard(
    "love", "iube",
    ""
    )
    SetParentAndChild(verbs, love);
    
var run = new DataCard(
    "run", "sare",
    ""
    )
    SetParentAndChild(verbs, run);

// =============================================================================
// Prepositions
// =============================================================================

var prepositions = new DataCard(
    "Prepositions", "Prepoziţii",
    "")
    SetParentAndChild(romanian, prepositions);
    
// =============================================================================
// Adjectives
// =============================================================================

var adjectives = new DataCard(
    "Adjectives", "Adjectivele",
    "")
SetParentAndChild(romanian, adjectives);

// =============================================================================
// Nouns
// =============================================================================

var nouns = new DataCard(
    "Nouns", "Substantive",
    "")
SetParentAndChild(romanian, nouns);

// =============================================================================
// Adverbs
// =============================================================================

var adverbs = new DataCard(
    "Adverbs", "Adverbe",
    "")
SetParentAndChild(romanian, adverbs);

// =============================================================================
// Conjunctions
// =============================================================================

var conjunctions  = new DataCard(
    "Conjunctions", "Conjuncții",
    "")
SetParentAndChild(romanian, conjunctions);

/*

// =============================================================================
// 
// =============================================================================

var  = new DataCard(
    "", "",
    "Data")
SetParentAndChild(romanian, );


*/