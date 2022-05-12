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
// Verbs : https://cooljugator.com/ro/suna
// =============================================================================

var verbs = new DataCard("Verbs", "Verbe", "Common verbs are listed here.")
SetParentAndChild(romanian, verbs);

var have = new DataCard("Have", "Avea", 
    "To have <br> " 
    + VerbTemplate("am", "ai", "are", "avem", "aveți", "au", "avut", "avea"));
SetParentAndChild(verbs, have);
     
var be = new DataCard("Be", "Fi", 
    "To be <br> " 
    + VerbTemplate("sunt", "ești", "este", "suntem", "sunteți", "sunt", "fost", "fi"));
SetParentAndChild(verbs, be);  

var eat = new DataCard("Eat", "Mânca", 
    "To eat <br> " 
    + VerbTemplate("mănânc", "mănânci", "mănâncă", "mâncăm", "mâncați", "mănâncă", "mâncat", "mânca"));
SetParentAndChild(verbs, eat);  

var drink = new DataCard("Drink", "Bea", 
    "To drink <br> " 
    + VerbTemplate("beau", "bei", "bea", "bem", "beți", "beau", "băut", "bea"));
SetParentAndChild(verbs, drink);  

var say = new DataCard("Say", "Spune", 
    "To say <br> " 
    + VerbTemplate("spun", "spui", "spune", "spunem", "spuneți", "spun", "spus", "spune"));
SetParentAndChild(verbs, say);  

var say2 = new DataCard("Say (alt)", "Zice", 
    "To say <br> " 
    + VerbTemplate("zic", "zici", "zice", "zicem", "ziceți", "zic", "zis", "zice"));
SetParentAndChild(verbs, say2);  

var speak = new DataCard("Speak", "Vorbi", 
    "To speak <br> " 
    + VerbTemplate("vorbesc", "vorbești", "vorbește", "vorbim", "vorbiți", "vorbesc", "vorbit", "vorbi"));
SetParentAndChild(verbs, speak);  

var ring = new DataCard("Ring", "Suna", 
    "To ring <br> " 
    + VerbTemplate("sun", "suni", "sună", "sunăm", "sunați", "sună", "sunat", "suna"));
SetParentAndChild(verbs, ring);  

var walk = new DataCard("Walk", "Merge", 
    "To walk <br> " 
    + VerbTemplate("merg", "mergi", "merge", "mergem", "mergeți", "merg", "mers", "merge"));
SetParentAndChild(verbs, walk);  

var run = new DataCard("Run", "Alerga", 
    "To run <br> " 
    + VerbTemplate("alerg", "alergi", "aleargă", "alergăm", "alergați", "aleargă", "alergat", "alerga"));
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
        "\
        <h2>Present</h2>\
        Eu      <br>\
        Tu      <br>\
        Ea      <br>\
        Noi      <br>\
        Voi      <br>\
        Ele      <br>\
        <h2>Past</h2>\
        Eu am        <br>\
        Tu ai        <br>\
        Ea a         <br>\
        Noi am       <br>\
        Voi ați          <br>\
        Ele au       <br>\
        <h2>Future</h2>\
        Eu voi    <br>\
        Tu vei    <br>\
        Ea va     <br>\
        Noi vom   <br>\
        Voi veți  <br>\
        Ele voi   <br>\
        ")
SetParentAndChild(verbs, );

*/