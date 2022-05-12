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
        El/Ea are<br>\
        Noi avem<br>\
        Voi aveți<br>\
        Ei/Ele au<br>\
        <h2>Past</h2>\
        Eu am avut <br>\
        Tu ai avut <br>\
        El/Ea a avut <br>\
        Noi am avut <br>\
        Voi ați avut <br>\
        Ei/Ele au avut <br>\
        <h2>Future</h2>\
        Eu voi avea <br>\
        Tu vei avea <br>\
        El/Ea va avea <br>\
        Noi vom avea <br>\
        Voi veți avea <br>\
        Ei/Ele vor avea <br>\
        ")
SetParentAndChild(verbs, have);
     
var be = new DataCard(
    "Be", "Fi",
    "To be\
    <h2>Present</h2>\
    Eu sunt     <br>\
    Tu ești     <br>\
    El/Ea este     <br>\
    Noi suntem  <br>\
    Voi sunteți <br>\
    Ei/Ele sunt <br>\
    <h2>Past</h2>\
    Eu am   fost <br>\
    Tu ai   fost <br>\
    El/Ea a    fost <br>\
    Noi am  fost <br>\
    Voi ați fost <br>\
    Ei/Ele au  fost <br>\
    <h2>Future</h2>\
    Eu voi   fi <br>\
    Tu vei   fi <br>\
    El/Ea va    fi <br>\
    Noi vom  fi <br>\
    Voi veți fi <br>\
    Ei/Ele voir fi <br>\
    ")
SetParentAndChild(verbs, be);  

var love = new DataCard(
    "Love", "Iubi",
    "ToDo"
    )
SetParentAndChild(verbs, love);
    
var run = new DataCard(
    "Run", "Sări",
    "ToDo"
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