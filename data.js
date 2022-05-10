// =============================================================================
// Root
// =============================================================================

var romanian = new DataCard(
    "Romanian", "Romanian",
    "Data data data");
    
// =============================================================================
// Verbs
// =============================================================================

var verbs = new DataCard(
    "Verbs", "Verbs",
    "Data")
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
    "prepositions", "prepositions",
    "Data")
    SetParentAndChild(romanian, prepositions);
    
// =============================================================================
// Adjectives
// =============================================================================

var adjectives = new DataCard(
    "adjectives", "adjectives",
    "Data")
SetParentAndChild(romanian, adjectives);
