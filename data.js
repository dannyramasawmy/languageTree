// =============================================================================
// Root
// =============================================================================

/*
a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z
*/

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

var have = new DataCard(
        "Have", "Avea",
        "Here the full form has been written out, notice the pattern,\
        this will be written in a reduced form for other verbs.\
        <h2>Present</h2>\
        Eu am<br>\
        Tu ai<br>\
        Ea are<br>\
        Noi avem<br>\
        Voi aveți<br>\
        Ele au<br>\
        <h2>Past</h2>\
        Eu am avut <br>\
        Tu ai avut <br>\
        Ea a avut <br>\
        Noi am avut <br>\
        Voi ați avut <br>\
        Ele au avut <br>\
        <h2>Future</h2>\
        Eu voi avea <br>\
        Tu vei avea <br>\
        Ea va avea <br>\
        Noi vom avea <br>\
        Voi veți avea <br>\
        Ele voi avea <br>\
        ")
SetParentAndChild(verbs, have);
     
    
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