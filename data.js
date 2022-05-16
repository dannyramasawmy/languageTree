// =============================================================================
// Root
// =============================================================================

/*
a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z
https://www.thoughtco.com/html-codes-romanian-characters-4062226
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

var search = new DataCard("Search", "Căuta", 
    "To search<br> " 
    + VerbTemplate("caut", "cauți", "caută", "căutăm", "căutați", "caută", "căutat", "căuta"));
SetParentAndChild(verbs, search);

var find = new DataCard("Find", "Găsi", 
    "To find<br> " 
    + VerbTemplate("găsesc", "găsești", "găsește", "găsim", "găsiți", "găsesc", "găsit", "găsi"));
SetParentAndChild(verbs, find);

var cook = new DataCard("Cook (prepare)", "Găti", 
    "To cook<br> " 
    + VerbTemplate("gătesc", "gătești", "gătește", "gătim", "gătiți", "gătesc", "gătit", "găti"));
SetParentAndChild(verbs, cook);

var joke = new DataCard("Joke", "Glumi", 
    "To joke<br> " 
    + VerbTemplate("glumesc", "glumești", "glumește", "glumim", "glumiți", "glumesc", "glumit", "glumi"));
SetParentAndChild(verbs, joke);

var read = new DataCard("Read", "Citi", 
    "To read<br> " 
    + VerbTemplate("citesc", "citești", "citește", "citim", "citiți", "citesc", "citit", "citi"));
SetParentAndChild(verbs, read);

var write = new DataCard("Write", "Scrie", 
    "To write<br> " 
    + VerbTemplate("scriu", "scrii", "scrie", "scriem", "scrieți", "scriu", "scris", "scrie"));
SetParentAndChild(verbs, write);

var buy = new DataCard("Buy", "Cumpăra", 
    "To buy<br> " 
    + VerbTemplate("cumpăr", "cumpări", "cumpără", "cumpărăm", "cumpărați", "cumpără", "cumpărat", "cumpăra"));
SetParentAndChild(verbs, buy);

var _do = new DataCard("Do", "Face", 
    "To do<br> " 
    + VerbTemplate("fac", "faci", "face", "facem", "faceți", "fac", "făcut", "face"));
SetParentAndChild(verbs, _do);

var listen = new DataCard("Listen", "Asculta", 
    "To listen<br> " 
    + VerbTemplate("ascult", "asculți", "ascultă", "ascultăm", "ascultați", "ascultă", "ascultat", "asculta"));
SetParentAndChild(verbs, listen);

var hear = new DataCard("Hear", "Auzi", 
    "To hear<br> " 
    + VerbTemplate("aud", "auzi", "aude", "auzim", "auziți", "aud", "auzit", "auzi"));
SetParentAndChild(verbs, hear);

var kiss = new DataCard("Kiss", "Săruta", 
    "To kiss<br> " 
    + VerbTemplate("sărut", "săruți", "sărută", "sărutăm", "sărutați", "sărută", "sărutat", "săruta"));
SetParentAndChild(verbs, kiss);

var ask = new DataCard("Ask", "Întreba", 
    "To ask<br> " 
    + VerbTemplate("întreb", "întrebi", "întreabă", "întrebăm", "întrebați", "întreabă", "întrebat", "întreba"));
SetParentAndChild(verbs, ask);

var learn = new DataCard("Learn", "Învăța", 
    "To learn<br> " 
    + VerbTemplate("învăț", "înveți", "învață", "învățăm", "învățați", "învață", "învățat", "învăța"));
SetParentAndChild(verbs, learn);

var _try = new DataCard("Try", "Incerca", 
    "To try<br> " 
    + VerbTemplate("încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat", "încerca"));
SetParentAndChild(verbs, _try);

var see = new DataCard("See", "Vedea", 
    "To see<br> " 
    + VerbTemplate("văd", "vezi", "vede", "vedem", "vedeți", "văd", "văzut", "vedea"));
SetParentAndChild(verbs, see);

var forget = new DataCard("Forget", "Uita", 
    "To forget<br> " 
    + VerbTemplate("uit", "uiți", "uită", "uităm", "uitați", "uită", "uitat", "uita"));
SetParentAndChild(verbs, forget);

var want = new DataCard("Want (go)", "Vrea", 
    "To want (go)<br> " 
    + VerbTemplate("vreau", "vrei", "vrea", "vrem", "vreți", "vor", "vrut", "vrea"));
SetParentAndChild(verbs, want);

var put = new DataCard("Put", "Pune", 
    "To put<br> " 
    + VerbTemplate("pun", "pui", "pune", "punem", "puneți", "pun", "pus", "pune"));
SetParentAndChild(verbs, put);

var can = new DataCard("Can", "Putea", 
    "To can<br> " 
    + VerbTemplate("pot", "poți", "poate", "putem", "puteți", "pot", "putut", "putea"));
SetParentAndChild(verbs, can);

var understand = new DataCard("Need", "Înțelege", 
    "To understand<br> " 
    + VerbTemplate("înțeleg", "înțelegi", "înțelege", "înțelegem", "înțelegeți", "înțeleg", "înțeles", "înțelege"));
SetParentAndChild(verbs, understand);

var know = new DataCard("Know", "Ști", 
    "To know<br> " 
    + VerbTemplate("știu", "știi", "știe", "știm", "știți", "știu", "știut", "ști"));
SetParentAndChild(verbs, know);

var know2 = new DataCard("Know (alt)", "Cunoaște", 
    "To know<br> " 
    + VerbTemplate("cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut", "cunoaște"));
SetParentAndChild(verbs, know2);

var drive = new DataCard("Drive", "Conduce", 
    "To drive<br> " 
    + VerbTemplate("conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus", "conduce"));
SetParentAndChild(verbs, drive);

var pay = new DataCard("Pay", "Plăti", 
    "To pay<br> " 
    + VerbTemplate("plătesc", "plătești", "plătește", "plătim", "plătiți", "plătesc", "plătit", "plăti"));
SetParentAndChild(verbs, pay);

var fly = new DataCard("Fly", "Zbura", 
    "To fly<br> " 
    + VerbTemplate("zbor", "zbori", "zboară", "zburăm", "zburați", "zboară", "zburat", "zbura"));
SetParentAndChild(verbs, fly);

var arrive = new DataCard("Arrive", "Ajunge", 
    "To arrive<br> " 
    + VerbTemplate("ajung", "ajungi", "ajunge", "ajungem", "ajungeți", "ajung", "ajuns", "ajunge"));
SetParentAndChild(verbs, arrive);

var carry = new DataCard("Carry", "Duce", 
    "To carry<br> " 
    + VerbTemplate("duc", "duci", "duce", "ducem", "duceți", "duc", "dus", "duce"));
SetParentAndChild(verbs, carry);

var party = new DataCard("Party", "Petrece", 
    "To party<br> " 
    + VerbTemplate("petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut", "petrece"));
SetParentAndChild(verbs, party);

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
    "Todo")
SetParentAndChild(romanian, adjectives);

// =============================================================================
// Nouns
// =============================================================================

var nouns = new DataCard(
    "Nouns", "Substantive",
    "Todo")
SetParentAndChild(romanian, nouns);

// =============================================================================
// Adverbs
// =============================================================================

var adverbs = new DataCard(
    "Adverbs", "Adverbe",
    "Todo")
SetParentAndChild(romanian, adverbs);

// =============================================================================
// Conjunctions
// =============================================================================

var conjunctions  = new DataCard(
    "Conjunctions", "Conjuncții",
    "")
SetParentAndChild(romanian, conjunctions);

var _for  = new DataCard(
    "For", "Pentru",
    "")
SetParentAndChild(conjunctions, _for);

var because  = new DataCard(
    "Because", "Pentru că",
    "")
SetParentAndChild(conjunctions, _for);

var and  = new DataCard(
    "And", "Şi",
    "")
SetParentAndChild(conjunctions, and);

var and2  = new DataCard(
    "And (alt)", "Iar",
    "")
SetParentAndChild(conjunctions, and2);

var _if  = new DataCard(
    "If", "Daca",
    "")
SetParentAndChild(conjunctions, _if);

var _or  = new DataCard(
    "Or", "Sau",
    "")
SetParentAndChild(conjunctions, _or);

var _or2  = new DataCard(
    "Or (alt)", "Ori",
    "")
SetParentAndChild(conjunctions, _or);

var but  = new DataCard(
    "But", "Dar",
    "")
SetParentAndChild(conjunctions, but);

var when  = new DataCard(
    "When", "Cand",
    "")
SetParentAndChild(conjunctions, when);

var either  = new DataCard(
    "Either", "",
    "")
SetParentAndChild(conjunctions, either);

var how  = new DataCard(
    "How", "",
    "")
SetParentAndChild(conjunctions, how);

var every  = new DataCard(
    "Every", "",
    "")
SetParentAndChild(conjunctions, every);

var after  = new DataCard(
    "After", "",
    "")
SetParentAndChild(conjunctions, after);

var before  = new DataCard(
    "Before", "",
    "")
SetParentAndChild(conjunctions, before);

var both  = new DataCard(
    "Both", "",
    "")
SetParentAndChild(conjunctions, both);




// =============================================================================
// Numbers
// =============================================================================

var numbers  = new DataCard(
    "Numbers", "Numere",
    "Todo")
SetParentAndChild(romanian, numbers);

// =============================================================================
// Pronouns
// =============================================================================

var pronouns  = new DataCard(
    "Pronouns", "Pronume",
    "Todo")
SetParentAndChild(romanian, pronouns);

// =============================================================================
// Emotions
// =============================================================================

var emotions  = new DataCard(
    "Emotions", "Emoții",
    "Todo")
SetParentAndChild(romanian, emotions);

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