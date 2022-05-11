// =============================================================================
// Root
// =============================================================================

var romanian = new DataCard(
    "Romanian", "Romanian",
    "Data data data");
    romanian.SetParent(romanian);
    
// =============================================================================
// Verbs
// =============================================================================

var verbs = new DataCard(
    "Verbs", "Verbs",
    "<h> Verbs </h>")
    SetParentAndChild(romanian, verbs);
    
var love = new DataCard(
    "love", "iube",
    "To Love blah blah"
    )
    SetParentAndChild(verbs, love);
    
var run = new DataCard(
    "run", "sare",
    "To run blah blah"
    )
    SetParentAndChild(verbs, run);

// =============================================================================
// Prepositions
// =============================================================================

var prepositions = new DataCard(
    "Prepositions", "Prepositions",
    "Data")
    SetParentAndChild(romanian, prepositions);
    
// =============================================================================
// Adjectives
// =============================================================================

var adjectives = new DataCard(
    "Adjectives", "Adjectives",
    "Data")
SetParentAndChild(romanian, adjectives);

// =============================================================================
// Nouns
// =============================================================================

var nouns = new DataCard(
    "Nouns", "nouns",
    "Data")
SetParentAndChild(romanian, nouns);

// =============================================================================
// Adverbs
// =============================================================================

var adverbs = new DataCard(
    "Adverbs", "Adverbs",
    "Data")
SetParentAndChild(romanian, adverbs);

/*

// =============================================================================
// 
// =============================================================================

var  = new DataCard(
    "", "",
    "Data")
SetParentAndChild(romanian, );


*/