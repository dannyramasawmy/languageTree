// =============================================================================
// Root
// =============================================================================

/*
a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z
*/

var romanian = new DataCard(
    "Romanian", "Română",
    "Romanian language tree. <br>\
    Click here to change the langauge.  <br> \
    Search currently not working on mobile");
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

var runAway = new DataCard("Run (flee)", "Fugi", 
    "To run (away, flee)<br> " 
    + VerbTemplate("fug", "fugi", "fuge", "fugim", "fugiți", "fug", "fugit", "fugi"));
SetParentAndChild(verbs, runAway);  

var jump = new DataCard("Jump", "Sări", 
    "To jump<br> " 
    + VerbTemplate("sar", "sări", "sare", "sărim", "săriți", "sar", "sărit", "sări"));
SetParentAndChild(verbs, jump);  

var call = new DataCard("Call (shout)", "Striga", 
    "To call (shout)<br> " 
    + VerbTemplate("strig", "strigi", "strigă", "strigăm", "strigați", "strigă", "strigat", "striga"));
SetParentAndChild(verbs, call);  

var give = new DataCard("Give", "Da", 
    "To give<br> " 
    + VerbTemplate("dau", "dai", "dă", "dăm", "dați", "dau", "dat", "da"));
SetParentAndChild(verbs, give);  

var take = new DataCard("Take", "Lua", 
    "To take<br> " 
    + VerbTemplate("iau", "iei", "ia", "luăm", "luați", "iau", "luat", "lua"));
SetParentAndChild(verbs, take);  

var _open = new DataCard("Open", "Deschide", 
    "To open<br> " 
    + VerbTemplate("deschid", "deschizi", "deschide", "deschidem", "deschideți", "deschid", "deschis", "deschide"));
SetParentAndChild(verbs, _open);  

var _close = new DataCard("Close", "Închide", 
    "To close<br> " 
    + VerbTemplate("închid", "închizi", "închide", "închidem", "închideți", "închid", "închis", "închide"));
SetParentAndChild(verbs, _close);  

var play = new DataCard("Play", "Juca", 
    "To play<br> " 
    + ReflexiveVerbTemplateSe("joc", "joci", "joacă", "jucăm", "jucați", "joacă", "jucat", "juca"));
SetParentAndChild(verbs, play);  

var sing = new DataCard("Sing", "Cânta", 
    "To sing<br> " 
    + VerbTemplate("cânt", "cânți", "cântă", "cântăm", "cântați", "cântă", "cântat", "cânta"));
SetParentAndChild(verbs, sing);  

var seat = new DataCard("Stay (sit)", "Așeza", 
    "To stay (sit)<br> " 
    + ReflexiveVerbTemplateSe("așez", "așezi", "așază", "așezăm", "așezați", "așază", "așezat", "așeza"));
SetParentAndChild(verbs, seat);  

var stand = new DataCard("Stand", "Ridica", 
    "To stand<br> " 
    + ReflexiveVerbTemplateSe("ridic", "ridici", "ridică", "ridicăm", "ridicați", "ridică", "ridicat", "ridica"));
SetParentAndChild(verbs, stand);  

var stay = new DataCard("Stay", "Sta", 
    "To stay<br> " 
    + VerbTemplate("stau", "stai", "stă", "stăm", "stați", "stau", "stat", "sta"));
SetParentAndChild(verbs, stay);  

var leave = new DataCard("Leave", "Pleca", 
    "To leave<br> " 
    + VerbTemplate("plec", "pleci", "pleacă", "plecăm", "plecați", "pleacă", "plecat", "pleca"));
SetParentAndChild(verbs, leave);  

var visit = new DataCard("Visit", "Vizita", 
    "To visit<br> " 
    + VerbTemplate("vizitez", "vizitezi", "vizitează", "vizităm", "vizitați", "vizitează", "vizitat", "vizita"));
SetParentAndChild(verbs, visit);  

var come = new DataCard("Come", "Veni", 
    "To come<br> " 
    + VerbTemplate("vin", "vii", "vine", "venim", "veniți", "vin", "venit", "veni"));
SetParentAndChild(verbs, come);  

var sleep = new DataCard("Sleep", "Dormi", 
    "To sleep<br> " 
    + VerbTemplate("dorm", "dormi", "doarme", "dormim", "dormiți", "dorm", "dormit", "dormi"));
SetParentAndChild(verbs, sleep);  

var fallAsleep = new DataCard("Fall Asleep", "Adormi", 
    "To fall asleep<br> " 
    + VerbTemplate("adorm", "adormi", "adoarme", "adormim", "adormiți", "adorm", "adormit", "adormi"));
SetParentAndChild(verbs, fallAsleep);  

var getUp = new DataCard("Get up", "Trezi", 
    "To get up<br> " 
    + ReflexiveVerbTemplateSe("trezesc", "trezești", "trezește", "trezim", "treziți", "trezesc", "trezit", "trezi"));
SetParentAndChild(verbs, getUp);  

var guess = new DataCard("Guess (believe)", "Crede", 
    "To guess (believe)<br> " 
    + VerbTemplate("cred", "crezi", "crede", "credem", "credeți", "cred", "crezut", "crede"));
SetParentAndChild(verbs, guess);  

var think = new DataCard("Think", "Gândi", 
    "To think<br> " 
    + ReflexiveVerbTemplateSe("gândesc", "gândești", "gândește", "gândim", "gândiți", "gândesc", "gândit", "gândi"));
SetParentAndChild(verbs, think);  

var love = new DataCard("Love", "Iubi", 
    "To love<br> " 
    + VerbTemplate("iubesc", "iubești", "iubește", "iubim", "iubiți", "iubesc", "iubit", "iubi"));
SetParentAndChild(verbs, love);

var laugh = new DataCard("Laugh", "Râde", 
    "To laugh<br> " 
    + VerbTemplate("râd", "râzi", "râde", "râdem", "râdeți", "râd", "râs", "râde"));
SetParentAndChild(verbs, laugh);


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