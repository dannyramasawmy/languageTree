// =============================================================================
// #Root
// =============================================================================

/*
a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z
https://www.thoughtco.com/html-codes-romanian-characters-4062226


var  = new DataCard(
        "", "",
        "")
SetParentAndChild(verbs, );


*/

var searchPlaceholder = new DataCard("Searching cards", "Căuta carti", "Type part or all of the word");

var romanian = new DataCard(
    "Romanian", "Română",
    "Romanian language tree. <br>\
    ",
    isRoot = true);
// var romanian = new DataCard(
//     "Romanian", "Română",
//     "Romanian language tree. <br>\
//     <div><img src=\"img/shuffle-icon-1.png\"      class=\"home-icon\"/> shuffle</div>\
//     <div><img src=\"img/sort-icon.png\"           class=\"home-icon\"/> sort</div>\
//     <div><img src=\"img/search-icon-1.png\"         class=\"home-icon\"/> search</div>\
//     <div><img src=\"img/swap-language-icon-1.png\"  class=\"home-icon\"/> swap language</div>\
//     <div><img src=\"img/parent-icon.png\"         class=\"home-icon\"/> go up</div>\
//     ",
//     isRoot = true);
romanian.SetParent(romanian);

// =============================================================================
// #Verbs : https://cooljugator.com/ro/suna
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

var walk = new DataCard("Walk (go)", "Merge",
    "To walk (go)<br> "
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

var sleepWith = new DataCard("Sleep (with)", "Culci",
    "To sleep (with)<br> "
    + ReflexiveVerbTemplateSe("culc", "culci", "culca", "culcam", "culcați", "culca", "culcat", "culci"));
SetParentAndChild(verbs, sleepWith);

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

var smile = new DataCard("Smile", "Zămbi",
    "To smile<br> "
    + VerbTemplate("zămbesc", "zămbesti", "zămbeste", "zămbim", "zămbiți", "zămbesc", "zămbit", "zămbi"));
SetParentAndChild(verbs, smile);

var forget = new DataCard("Forget", "Uita",
    "To forget<br> "
    + VerbTemplate("uit", "uiți", "uită", "uităm", "uitați", "uită", "uitat", "uita"));
SetParentAndChild(verbs, forget);

var want = new DataCard("Want", "Vrea",
    "To want<br> "
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

var understand = new DataCard("Understand", "Înțelege",
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

var live = new DataCard("Live", "Trăi",
    "To <br> "
    + VerbTemplate("trăiesc", "trăiești", "trăiește", "trăim", "trăiți", "trăiesc", "trăit", "trăi"));
SetParentAndChild(verbs, live);

var reside = new DataCard("Reside (live)", "Locui",
    "To reside (live)<br> "
    + VerbTemplate("locuiesc", "locuiești", "locuiește", "locuim", "locuiți", "locuiesc", "locuit", "locui"));
SetParentAndChild(verbs, reside);

var work = new DataCard("Work", "Munci",
    "To work<br> "
    + VerbTemplate("muncesc", "muncești", "muncește", "muncim", "munciți", "muncesc", "muncit", "munci"));
SetParentAndChild(verbs, work);

var work2 = new DataCard("Work (alt)", "Lucra",
    "To work<br> "
    + VerbTemplate("lucrez", "lucrezi", "lucrează", "lucrăm", "lucrați", "lucrează", "lucrat", "lucra"));
SetParentAndChild(verbs, work2);

var divorce = new DataCard("Divorce", "Divorța",
    "To divorce<br> "
    + VerbTemplate("divorțez", "divorțezi", "divorțează", "divorțăm", "divorțați", "divorțează", "divorțat", "divorța"));
SetParentAndChild(verbs, divorce);

var marry = new DataCard("Marry", "Căsători",
    "To marry<br> "
    + ReflexiveVerbTemplateSe("căsătoresc", "căsătorești", "căsătorește", "căsătorim", "căsătoriți", "căsătoresc", "căsătorit", "căsători"));
SetParentAndChild(verbs, marry);

var lie = new DataCard("Lie", "Minți",
    "To lie<br> "
    + VerbTemplate("mint", "minți", "minte", "mințim", "mințiți", "mint", "mințit", "minți"));
SetParentAndChild(verbs, lie);

var hit = new DataCard("Hit (kick)", "Lovi",
    "To hit<br> "
    + VerbTemplate("lovesc", "lovești", "lovește", "lovim", "loviți", "lovesc", "lovit", "lovi"));
SetParentAndChild(verbs, hit);

var desire = new DataCard("Desire (wish)", "Dori",
    "To desire<br> "
    + ReflexiveVerbTemplateSi("doresc", "dorești", "dorește", "dorim", "doriți", "doresc", "dorit", "dori"));
SetParentAndChild(verbs, desire);

var hide = new DataCard("Hide", "Ascunde",
    "To hide<br> "
    + VerbTemplate("ascund", "ascunzi", "ascunde", "ascundem", "ascundeți", "ascund", "ascuns", "ascunde"));
SetParentAndChild(verbs, hide);

var receive = new DataCard("Receive", "Primi",
    "To receive<br> "
    + VerbTemplate("primesc", "primești", "primește", "primim", "primiți", "primesc", "primit", "primi"));
SetParentAndChild(verbs, receive);

var wash = new DataCard("Wash", "Spăla",
    "To wash<br> "
    + ReflexiveVerbTemplateSe("spăl", "speli", "spală", "spălăm", "spălați", "spală", "spălat", "spăla"));
SetParentAndChild(verbs, wash);

var lose = new DataCard("Lose", "Pierde",
    "To lose<br> "
    + VerbTemplate("pierd", "pierzi", "pierde", "pierdem", "pierd", "pierd", "pierdut", "pierde"));
SetParentAndChild(verbs, lose);

var couldModal = new DataCard("Could (modal)", "Putea (modal)",
    `<h2>Modal</h2>
    Eu aș putea să [...]<br>
    Tu ai putea să [...]<br>
    El/Ea ar putea să [...]<br>
    Noi am putea să [...]<br>
    Voi ați putea să [...]<br>
    Ei/Ele ar putea să [...]<br>`)
SetParentAndChild(verbs, couldModal);

var should = new DataCard("Should", "Ar trebui",
    `<h2>Modal</h2>
    Eu ar trebui să [...]<br>
    Tu ar trebui să [...]<br>
    El/Ea ar trebui să [...]<br>
    Noi ar trebui să [...]<br>
    Voi ar trebui să [...]<br>
    Ei/Ele ar trebui să [...]<br>`)
SetParentAndChild(verbs, should);

var must = new DataCard("Must", "Trebuie",
    `<h2>Modal</h2>
    Eu trebuie să [...]<br>
    Tu trebuie să [...]<br>
    El/Ea trebuie să [...]<br>
    Noi trebuie să [...]<br>
    Voi trebuie să [...]<br>
    Ei/Ele trebuie să [...]<br>`)
SetParentAndChild(verbs, must);

var send = new DataCard("Send", "Trimite",
    "To send<br> "
    + VerbTemplate("trimit", "trimiți", "trimite", "trimitem", "trimiteți", "trimit", "trimis", "trimite"));
SetParentAndChild(verbs, send);

var cry = new DataCard("Cry", "Plânge",
    "To cry<br> "
    + VerbTemplate("plâng", "plângi", "plânge", "plângem", "plângeți", "plâng", "plâns", "plânge"));
SetParentAndChild(verbs, cry);

var cut = new DataCard("Cut", "Tăia",
    "To cut<br> "
    + VerbTemplate("tai", "tai", "taie", "tăiem", "tăiați", "taie", "tăiat", "tăia"));
SetParentAndChild(verbs, cut);

var wait = new DataCard("Wait", "Aștepta",
    "To wait<br> "
    + VerbTemplate("aștept", "aștepți", "așteaptă", "așteptăm", "așteptați", "așteaptă", "așteptat", "aștepta"));
SetParentAndChild(verbs, wait);

var dance = new DataCard("Dance", "Dansa",
    "To dance<br> "
    + VerbTemplate("dansez", "dansezi", "dansează", "dansăm", "dansați", "dansează", "dansat", "dansa"));
SetParentAndChild(verbs, dance);

var _catch = new DataCard("Catch", "Prinde",
    "To catch<br> "
    + VerbTemplate("prind", "prinzi", "prinde", "prindem", "prindeți", "prind", "prins", "prinde"));
SetParentAndChild(verbs, _catch);

var fight = new DataCard("Fight", "Lupta",
    "To fight<br> "
    + VerbTemplate("lupt", "lupți", "luptă", "luptăm", "luptați", "luptă", "luptat", "lupta"));
SetParentAndChild(verbs, fight);

var fall = new DataCard("Fall", "Cădea",
    "To fall<br> "
    + VerbTemplate("cad", "cazi", "cade", "cădem", "cădeți", "cad", "căzut", "cădea"));
SetParentAndChild(verbs, fall);

var pull = new DataCard("Pull", "Trage",
    "To pull<br> "
    + VerbTemplate("trag", "tragi", "trage", "tragem", "trageți", "trag", "tras", "trage"));
SetParentAndChild(verbs, pull);

var push = new DataCard("Push", "Împinge",
    "To push<br> "
    + VerbTemplate("împing", "împingi", "împinge", "împingem", "împingeți", "împing", "împins", "împinge"));
SetParentAndChild(verbs, push);

var climb = new DataCard("Climb", "Urca",
    "To climb<br> "
    + VerbTemplate("urc", "urci", "urcă", "urcăm", "urcați", "urcă", "urcat", "urca"));
SetParentAndChild(verbs, climb);





// =============================================================================
// #Prepositions
// =============================================================================

var prepositions = new DataCard(
    "Prepositions", "Prepoziţii",
    "")
SetParentAndChild(romanian, prepositions);

var after = new DataCard(
    "After", "După",
    "")
SetParentAndChild(prepositions, after);

var about = new DataCard(
    "About", "Despre",
    "")
SetParentAndChild(prepositions, about);

var at = new DataCard(
    "At", "La",
    "")
SetParentAndChild(prepositions, at);

var from = new DataCard(
    "From", "Din",
    "")
SetParentAndChild(prepositions, from);

var _in = new DataCard(
    "In", "În",
    "")
SetParentAndChild(prepositions, _in);

var on = new DataCard(
    "On", "Pe",
    "")
SetParentAndChild(prepositions, on);

var since = new DataCard(
    "Since", "De când",
    "")
SetParentAndChild(prepositions, since);

var until = new DataCard(
    "Until (till)", "Până (la)",
    "")
SetParentAndChild(prepositions, until);

var above = new DataCard(
    "Above", "De mai sus",
    "")
SetParentAndChild(prepositions, above);

var against = new DataCard(
    "Against", "Împotriva",
    "")
SetParentAndChild(prepositions, against);

var alongSide = new DataCard(
    "Along side (next to)", "Pe langa",
    "")
SetParentAndChild(prepositions, alongSide);

var amid = new DataCard(
    "Amid (in the middle of)", "În mijlocul",
    "")
SetParentAndChild(prepositions, amid);

var among = new DataCard(
    "Among", "Printre",
    "")
SetParentAndChild(prepositions, among);

var apartFrom = new DataCard(
    "Apart from", "În afară de",
    "")
SetParentAndChild(prepositions, apartFrom);

var at = new DataCard(
    "At", "La",
    "")
SetParentAndChild(prepositions, at);

var behind = new DataCard(
    "Behind", "In spate",
    "")
SetParentAndChild(prepositions, behind);

var beneath = new DataCard(
    "Beneath", "Sub",
    "")
SetParentAndChild(prepositions, beneath);

var by = new DataCard(
    "Of", "De",
    "")
SetParentAndChild(prepositions, by);

var beside = new DataCard(
    "Beside (next to)", "Lângă",
    "")
SetParentAndChild(prepositions, beside);

var beyond = new DataCard(
    "Beyond", "Dincolo",
    "")
SetParentAndChild(prepositions, beyond);

var closeTo = new DataCard(
    "Close to", "Aproape de",
    "")
SetParentAndChild(prepositions, closeTo);

var inBetween = new DataCard(
    "In between", "Între",
    "")
SetParentAndChild(prepositions, inBetween);

var inFrontOf = new DataCard(
    "In front of", "În fața",
    "")
SetParentAndChild(prepositions, inFrontOf);

var inside = new DataCard(
    "Inside", "Interior",
    "")
SetParentAndChild(prepositions, inside);

var near = new DataCard(
    "Near", "Apropape",
    "")
SetParentAndChild(prepositions, near);

var over = new DataCard(
    "Over", "Peste",
    "")
SetParentAndChild(prepositions, over);

var towards = new DataCard(
    "Towards", "Spre",
    "")
SetParentAndChild(prepositions, towards);

var without = new DataCard(
    "Without", "Fără",
    "")
SetParentAndChild(prepositions, without);

var through = new DataCard(
    "Through", "Prin",
    "")
SetParentAndChild(prepositions, through);

var together = new DataCard(
    "Together", "Impreuna",
    "")
SetParentAndChild(prepositions, together);

var outside = new DataCard(
    "Outside", "In afara",
    "")
SetParentAndChild(prepositions, outside);

var _with = new DataCard(
    "With", "Cu",
    "")
SetParentAndChild(prepositions, _with);



// =============================================================================
// #Adjectives
// =============================================================================

var adjectives = new DataCard(
    "Adjectives", "Adjective",
    "Todo")
SetParentAndChild(romanian, adjectives);

var every = new DataCard(
    "Every", "Fiecare",
    "")
SetParentAndChild(adjectives, every);

var all = new DataCard(
    "All", "Toate",
    "")
SetParentAndChild(adjectives, all);

var who = new DataCard(
    "Who", "Cine",
    "")
SetParentAndChild(adjectives, who);

var what = new DataCard(
    "What", "Ce",
    "")
SetParentAndChild(adjectives, what);

var which = new DataCard(
    "Which", "Care",
    "")
SetParentAndChild(adjectives, which);

var how = new DataCard(
    "How", "Cum",
    "")
SetParentAndChild(adjectives, how);

var some = new DataCard(
    "Some (approximately)", "Vreo",
    "")
SetParentAndChild(adjectives, some);

// #Colours =======================================
var colours = new DataCard(
    "Colours", "Culorile",
    "")
SetParentAndChild(adjectives, colours);

var brown = new DataCard("Brown", "Maro", "")
SetParentAndChild(colours, brown);

var white = new DataCard("White", "Alb", "")
SetParentAndChild(colours, white);

var blue = new DataCard("Blue", "Albastru", "")
SetParentAndChild(colours, blue);

var black = new DataCard("Black", "Negru", "")
SetParentAndChild(colours, black);

var orange = new DataCard("Orange", "Portocaliu", "")
SetParentAndChild(colours, orange);

var grey = new DataCard("Grey", "Gri", "")
SetParentAndChild(colours, grey);

var green = new DataCard("Green", "Verde", "")
SetParentAndChild(colours, green);

var red = new DataCard("Red", "Roșu", "")
SetParentAndChild(colours, red);

var purple = new DataCard("Purple", "Mov", "")
SetParentAndChild(colours, purple);

var yellow = new DataCard("Yellow", "Galben", "")
SetParentAndChild(colours, yellow);




// =============================================================================
// #Nouns
// =============================================================================

var nouns = new DataCard(
    "Nouns", "Substantive",
    "Todo")
SetParentAndChild(romanian, nouns);

// food

// The city
// - street
// - shop / toy shop#
// - park

// the country
// - the country
// - the farm
// - the season
// - animals
//

// #food
var food = new DataCard("Food", "Mâncarea", "");
SetParentAndChild(nouns, food)

var Chocolate = new DataCard("Chocolate", "Ciocolată", "");
SetParentAndChild(food, Chocolate)

var Sweet = new DataCard("Sweet", "Bomboană", "");
SetParentAndChild(food, Sweet)

var Cake = new DataCard("Cake", "Tort", "");
SetParentAndChild(food, Cake)

var Straw = new DataCard("Straw", "Pai", "");
SetParentAndChild(food, Straw)

var Sandwich = new DataCard("Sandwich", "Sendviș", "");
SetParentAndChild(food, Sandwich)

var Butter = new DataCard("Butter", "Unt", "");
SetParentAndChild(food, Butter)

var Biscuit = new DataCard("Biscuit", "Biscuit", "");
SetParentAndChild(food, Biscuit)

var Cheese = new DataCard("Cheese", "Brânză", "");
SetParentAndChild(food, Cheese)

var Bread = new DataCard("Bread", "Pâine", "");
SetParentAndChild(food, Bread)

var Strawberry = new DataCard("Strawberry", "Căpșună", "");
SetParentAndChild(food, Strawberry)

var Raspberry = new DataCard("Raspberry", "Zmeura", "");
SetParentAndChild(food, Raspberry)

var FruitJuice = new DataCard("Fruit Juice", "Suc de Fructe", "");
SetParentAndChild(food, FruitJuice)

var Cherry = new DataCard("Cherry", "Cireașă", "");
SetParentAndChild(food, Cherry)

var Crisps = new DataCard("Crisps", "Chipsuri", "");
SetParentAndChild(food, Crisps)

var Sausage = new DataCard("Sausage", "Cârnat", "");
SetParentAndChild(food, Sausage)

var Salami = new DataCard("Salami", "Salam", "");
SetParentAndChild(food, Salami)

var Clementine = new DataCard("Clementine", "Clementină", "");
SetParentAndChild(food, Clementine)

var Breakfast = new DataCard("Breakfast", "Mic Dejun", "");
SetParentAndChild(food, Breakfast)

var Lunch = new DataCard("Dinner", "Prânz", "");
SetParentAndChild(food, Lunch)

var Dinner = new DataCard("Dinner", "Cină (Masă de Seară)", "");
SetParentAndChild(food, Dinner)

var BoiledEgg = new DataCard("Boiled Egg (soft)", "Ou Fiert (Moale)", "");
SetParentAndChild(food, BoiledEgg)

var Coffee = new DataCard("Coffee", "Cafea", "");
SetParentAndChild(food, Coffee)

var FriedEgg = new DataCard("Fried Egg", "Ou Ochi", "");
SetParentAndChild(food, FriedEgg)

var Toast = new DataCard("Toast", "Pâine Prăjită", "");
SetParentAndChild(food, Toast)

var Jam = new DataCard("Jam", "Dulceață", "");
SetParentAndChild(food, Jam)

var Cream = new DataCard("Cream", "Smântână", "");
SetParentAndChild(food, Cream)

var Milk = new DataCard("Milk", "Lapte", "");
SetParentAndChild(food, Milk)

var Cereal = new DataCard("Cereal", "Cereale", "");
SetParentAndChild(food, Cereal)

var HotChocolate = new DataCard("Hot Chocolate", "Ciocolată Caldă", "");
SetParentAndChild(food, HotChocolate)

var Sugar = new DataCard("Sugar", "Zahăr", "");
SetParentAndChild(food, Sugar)

var Tea = new DataCard("Tea", "Ceai", "");
SetParentAndChild(food, Tea)

var Honey = new DataCard("Honey", "Miere", "");
SetParentAndChild(food, Honey)

var Salt = new DataCard("Salt", "Sare", "");
SetParentAndChild(food, Salt)

var Pepper = new DataCard("Pepper", "Piper", "");
SetParentAndChild(food, Pepper)

var Teapot = new DataCard("Teapot", "Ceainic", "");
SetParentAndChild(food, Teapot)

var Pancakes = new DataCard("Pancakes", "Clătite", "");
SetParentAndChild(food, Pancakes)

var BreadRolls = new DataCard("Bread Rolls (Baps)", "Chifle", "");
SetParentAndChild(food, BreadRolls)

var Ham = new DataCard("Ham", "Şuncă", "");
SetParentAndChild(food, Ham)

var Soup = new DataCard("Soup", "Supă", "");
SetParentAndChild(food, Soup)

var Omlette = new DataCard("Omlette", "Omletă", "");
SetParentAndChild(food, Omlette)

var Chopsticks = new DataCard("Chopsticks", "Bețișoare", "");
SetParentAndChild(food, Chopsticks)

var Salad = new DataCard("Salad", "Salată", "");
SetParentAndChild(food, Salad)

var Hamburger = new DataCard("Hamburger", "Hamburger", "");
SetParentAndChild(food, Hamburger)

var Chicken = new DataCard("Chicken", "Pui", "");
SetParentAndChild(food, Chicken)

var Rice = new DataCard("Rice", "Orez", "");
SetParentAndChild(food, Rice)

var Ketchup = new DataCard("Ketchup", "Ketchup", "");
SetParentAndChild(food, Ketchup)

var Spaghetti = new DataCard("Spaghetti", "Spaghete", "");
SetParentAndChild(food, Spaghetti)

var MashedPotatoes = new DataCard("Mashed Potatoes", "Piure de Cartofi", "");
SetParentAndChild(food, MashedPotatoes)

var Pizza = new DataCard("Pizza", "Pizza", "");
SetParentAndChild(food, Pizza)

var Chips = new DataCard("Chips", "Cartofi Prăjiți", "");
SetParentAndChild(food, Chips)

var Pudding = new DataCard("Pudding", "Deserturi", "");
SetParentAndChild(food, Pudding)

var Grapefruit = new DataCard("Grapefruit", "Grepfrut", "");
SetParentAndChild(food, Grapefruit)

var Carrot = new DataCard("Carrot", "Morcov", "");
SetParentAndChild(food, Carrot)

var Cauliflower = new DataCard("Cauliflower", "Conopidă", "");
SetParentAndChild(food, Cauliflower)

var Leek = new DataCard("Leek", "Praz", "");
SetParentAndChild(food, Leek)

var Mushroom = new DataCard("Mushroom", "Ciupercă", "");
SetParentAndChild(food, Mushroom)

var Cucumber = new DataCard("Cucumber", "Castravete", "");
SetParentAndChild(food, Cucumber)

var Lemon = new DataCard("Lemon", "Lămâie", "");
SetParentAndChild(food, Lemon)

var Celery = new DataCard("Celery", "Țelină", "");
SetParentAndChild(food, Celery)

var Apricot = new DataCard("Apricot", "Caisă", "");
SetParentAndChild(food, Apricot)

var Melon = new DataCard("Melon (Honeydew, Water)", "Pepene (Galben, Roșu)", "");
SetParentAndChild(food, Melon)

var Onion = new DataCard("Onion", "Ceapă", "");
SetParentAndChild(food, Onion)

var Cabbage = new DataCard("Cabbage", "Varză", "");
SetParentAndChild(food, Cabbage)

var Pearch = new DataCard("Pearch", "Piersică", "");
SetParentAndChild(food, Pearch)

var Lettuce = new DataCard("Lettuce", "Salată Verde", "");
SetParentAndChild(food, Lettuce)

var Peas = new DataCard("Peas", "Mazăre", "");
SetParentAndChild(food, Peas)

var Tomato = new DataCard("Tomato", "Roșie", "");
SetParentAndChild(food, Tomato)

var Potatoes = new DataCard("Potatoes", "Cartofi", "");
SetParentAndChild(food, Potatoes)

var Spinach = new DataCard("Spinach", "Spanac", "");
SetParentAndChild(food, Spinach)

var Beans = new DataCard("Beans (Green)", "Fasole Verde", "");
SetParentAndChild(food, Beans)

var Pumpkin = new DataCard("Pumpkin", "Dovleac", "");
SetParentAndChild(food, Pumpkin)

var Tins = new DataCard("Tins", "Cutii de Conserve", "");
SetParentAndChild(food, Tins)

var Yoghurt = new DataCard("Yoghurt", "Iaurt", "");
SetParentAndChild(food, Yoghurt)

var Pineapple = new DataCard("Pineapple", "Ananas", "");
SetParentAndChild(food, Pineapple)

var Meat = new DataCard("Meat", "Carne", "");
SetParentAndChild(food, Meat)   

var Flour = new DataCard("Flour", "Făină", "");
SetParentAndChild(food, Flour)

var Plum = new DataCard("Plum", "Prună", "");
SetParentAndChild(food, Plum)

var Eggs = new DataCard("Eggs", "Ouă", "");
SetParentAndChild(food, Eggs)




// #home ===========================

var atHome = new DataCard("At Home", "Acasă", "");
SetParentAndChild(nouns, atHome)

//#workshow


//#garden
var theGarden = new DataCard("theGarden", "Grădina", "");
SetParentAndChild(atHome, theGarden)

var Wheelbarrow = new DataCard("Wheelbarrow", "Roabă", "");
SetParentAndChild(theGarden, Wheelbarrow)

var Beehive = new DataCard("Beehive", "Stup", "");
SetParentAndChild(theGarden, Beehive)

var Snail = new DataCard("Snail", "Melc", "");
SetParentAndChild(theGarden, Snail)

var Bricks = new DataCard("Bricks", "Cărămizi", "");
SetParentAndChild(theGarden, Bricks)

var Pigeon = new DataCard("Pigeon", "Porumbel", "");
SetParentAndChild(theGarden, Pigeon)

var Spade = new DataCard("Spade", "Cazma", "");
SetParentAndChild(theGarden, Spade)

var WateringCan = new DataCard("Watering Can", "Stropitoare", "");
SetParentAndChild(theGarden, WateringCan)

var Ladybird = new DataCard("Ladybird", "Gărgăriță", "");
SetParentAndChild(theGarden, Ladybird)

var Dustbin = new DataCard("Dustbin", "Pubelă", "");
SetParentAndChild(theGarden, Dustbin)

var Seeds = new DataCard("Seeds", "Semințe", "");
SetParentAndChild(theGarden, Seeds)

var Shed = new DataCard("Shed", "Magazie (Şproron", "");
SetParentAndChild(theGarden, Shed)

var Worm = new DataCard("Worm", "Râmă", "");
SetParentAndChild(theGarden, Worm)

var Flowers = new DataCard("Flowers", "Flori", "");
SetParentAndChild(theGarden, Flowers)

var Sprinkler = new DataCard("Sprinkler", "Aspersor", "");
SetParentAndChild(theGarden, Sprinkler)

var Hoe = new DataCard("Garden Hoe", "Sapă (Săpăligă)", "");
SetParentAndChild(theGarden, Hoe)

var Wasp = new DataCard("Wasp", "Viespe", "");
SetParentAndChild(theGarden, Wasp)

var Bee = new DataCard("Bee", "Albină", "");
SetParentAndChild(theGarden, Bee)

var Trowel = new DataCard("Trowel", "Lopățică", "");
SetParentAndChild(theGarden, Trowel)

var Bone = new DataCard("Bone", "Os", "");
SetParentAndChild(theGarden, Bone)

var Hedge = new DataCard("Hedge", "Gard viu", "");
SetParentAndChild(theGarden, Hedge)

var GardenFork = new DataCard("Garden Fork", "Furcă de Grădină", "");
SetParentAndChild(theGarden, GardenFork)

var Lawnmower = new DataCard("Lawnmower", "Mașină de tuns iarba", "");
SetParentAndChild(theGarden, Lawnmower)

var Path = new DataCard("Path", "Cărare (Potecă)", "");
SetParentAndChild(theGarden, Path)

var Leaves = new DataCard("Leaves", "Frunze", "");
SetParentAndChild(theGarden, Leaves)

var Tree = new DataCard("Tree", "Copac (Pom)", "");
SetParentAndChild(theGarden, Tree)

var Smoke = new DataCard("Smoke", "Fum", "");
SetParentAndChild(theGarden, Smoke)

var Caterpillar = new DataCard("Caterpillar", "omidă", "");
SetParentAndChild(theGarden, Caterpillar)

var Rake = new DataCard("Rake", "Greblă", "");
SetParentAndChild(theGarden, Rake)

var Nest = new DataCard("Nest", "Cuib", "");
SetParentAndChild(theGarden, Nest)

var Sticks = new DataCard("Sticks", "Crenguțe", "");
SetParentAndChild(theGarden, Sticks)

var Greenhouse = new DataCard("Greenhouse", "Seră", "");
SetParentAndChild(theGarden, Greenhouse)

var Hosepipe = new DataCard("Hosepipe", "Furtun de Grădină", "");
SetParentAndChild(theGarden, Hosepipe)

var Bonfire = new DataCard("Bonfire", "Foc (în aer liber)", "");
SetParentAndChild(theGarden, Bonfire)

var Vegetables = new DataCard("Vegetables", "Legume", "");
SetParentAndChild(theGarden, Vegetables)

var Pram = new DataCard("Pram", "Cărucior Pentru Copii", "");
SetParentAndChild(theGarden, Pram)

var Grass = new DataCard("Grass", "Iarbă", "");
SetParentAndChild(theGarden, Grass)

//#kitchen
var theKitchen = new DataCard("The Kitchen", "Bucătăria", "");
SetParentAndChild(atHome, theKitchen)

var fridge = new DataCard("Fridge", "Frigider", "");
SetParentAndChild(theKithchen, fridge)

var Clock = new DataCard("Clock", "Ceas de perete", "");
SetParentAndChild(theKitchen, Clock)

var Stool = new DataCard("Stool", "Taburet", "");
SetParentAndChild(theKitchen, Stool)

var TeaSpoons = new DataCard("Teaspoons", "Lingurițe", "");
SetParentAndChild(theKitchen, TeaSpoons)

var lightSwitch = new DataCard("Light-switch", "Întrerupător", "");
SetParentAndChild(theKitchen, lightSwitch)

var washingPowder = new DataCard("Washing Powder", "Detergent Pudră", "");
SetParentAndChild(theKitchen, washingPowder)

var Key = new DataCard("Key", "Cheie", "");
SetParentAndChild(theKitchen, Key)

var Door = new DataCard("Door", "Ușa", "");
SetParentAndChild(theKitchen, Door)

var vacuumCleaner = new DataCard("Vacuum Cleaner", "Aspirator", "");
SetParentAndChild(theKitchen, vacuumCleaner)

var Saucepans = new DataCard("Saucepans", "Oale (Cratițe)", "");
SetParentAndChild(theKitchen, Saucepans)

var Forks = new DataCard("Forks", "Furculițe", "");
SetParentAndChild(theKitchen, Forks)

var Apron = new DataCard("Apron", "Sorț (de bucătărie)", "");
SetParentAndChild(theKitchen, Apron)

var IroningBoard = new DataCard("Ironing Board", "Masă de Călcat", "");
SetParentAndChild(theKitchen, IroningBoard)

var Rubbish = new DataCard("Rubbish", "Gunoi", "");
SetParentAndChild(theKitchen, Rubbish)

var Glasses = new DataCard("Glasses", "Pahare", "");
SetParentAndChild(theKitchen, Glasses)

var kitchenSink = new DataCard("kitchenSink", "Chiuvetă de bucătărie", "");
SetParentAndChild(theKitchen, kitchenSink)

var kettle = new DataCard("Kettle", "Ceainic", "");
SetParentAndChild(theKitchen, kettle)

var Knives = new DataCard("Knives", "Cuțite", "");
SetParentAndChild(theKitchen, Knives)

var Mop = new DataCard("Mop", "Mop", "");
SetParentAndChild(theKitchen, Mop)

var Duster = new DataCard("Duster", "Cârpă (de praf)", "");
SetParentAndChild(theKitchen, Duster)

var Tiles = new DataCard("Tiles", "Faianță", "");
SetParentAndChild(theKitchen, Tiles)

var Broom = new DataCard("Broom", "Mătură", "");
SetParentAndChild(theKitchen, Broom)

var WashingMachine = new DataCard("WashingMachine", "Mașină de spălat rufe", "");
SetParentAndChild(theKitchen, WashingMachine)

var Dustpan = new DataCard("Dustpan", "Făraș", "");
SetParentAndChild(theKitchen, Dustpan)

var Drawer = new DataCard("Drawer", "Sertar", "");
SetParentAndChild(theKitchen, Drawer)

var Saucers = new DataCard("Saucers", "Farfurioare (de cafea)", "");
SetParentAndChild(theKitchen, Saucers)

var FryingPan = new DataCard("Frying Pan", "Tigaie", "");
SetParentAndChild(theKitchen, FryingPan)

var Cooker = new DataCard("Cooker", "Aragaz", "");
SetParentAndChild(theKitchen, Cooker)   

var Spoons = new DataCard("Spoons", "Linguri", "");
SetParentAndChild(theKitchen, Spoons)

var Plates = new DataCard("Plates", "Farfurii", "");
SetParentAndChild(theKitchen, Plates)

var ClothesIron = new DataCard("Clothes Iron", "Fier de călcat", "");
SetParentAndChild(theKitchen, ClothesIron)

var broomCupboard = new DataCard("Broom Cupboard", "Dulap (de perete)", "");
SetParentAndChild(theKitchen, broomCupboard)

var Bowls = new DataCard("Bowls", "Boluri", "");
SetParentAndChild(theKitchen, Bowls)   

var Brush = new DataCard("Brush", "Perie", "");
SetParentAndChild(theKitchen, Brush)

var Matches = new DataCard("Matches", "Chibrituri", "");
SetParentAndChild(theKitchen, Matches)

var Cups = new DataCard("Cups", "Cești", "");
SetParentAndChild(theKitchen, Cups)

var TeaTowel = new DataCard("TeaTowel", "Prosop de bucătărie", "");
SetParentAndChild(theKitchen, TeaTowel)

//#inhome
var home = new DataCard("Home", "Casă", "");
SetParentAndChild(home, home)

var bath = new DataCard(
    "Bath", "Baie",
    NounTemplateFemale("baie", "bai", "baia", "băile")
)
SetParentAndChild(home, bath)

var soap = new DataCard(
    "Soap", "Săpun",
    NounTemplateNeuter("săpun", "săpunuri", "sapunul", "săpunurile")
)
SetParentAndChild(home, soap)

var tap = new DataCard("Tap", "Robinet", "");
SetParentAndChild(home, tap)

var toiletPaper = new DataCard("Toilet Paper", "Hârtie Igienică", "");
SetParentAndChild(home, toiletPaper)

var Toothbrush = new DataCard("Toothbrush", "Periuță de dinți", "");
SetParentAndChild(home, Toothbrush)

var Toilet = new DataCard("Toilet", "Toaletă", "");
SetParentAndChild(home, Toilet)

var Sponge = new DataCard("Sponge", "Burete", "");
SetParentAndChild(home, Sponge)

var SinkBasin = new DataCard("Sink Basin", "Chiuvetă", "");
SetParentAndChild(home, SinkBasin)

var Shower = new DataCard("Shower", "Duș", "");
SetParentAndChild(home, Shower)

var Towel = new DataCard("Towel", "Prosop", "");
SetParentAndChild(home, Towel)

var toothpaste = new DataCard("Toothpaste", "Pasta de dinți", "");
SetParentAndChild(home, toothpaste)

var Radio = new DataCard("Radio", "Radio", "");
SetParentAndChild(home, Radio)  

var cushion = new DataCard("Cushion", "Pernă", "");
SetParentAndChild(home, cushion)

var dvd = new DataCard("DVD", "DVD", "");
SetParentAndChild(home, dvd)

var Carpet = new DataCard("Carpet", "Mochetă", "");
SetParentAndChild(home, Carpet)

var Rug = new DataCard("Rug", "Covor", "Covoraș");
SetParentAndChild(home, Rug)

var Water = new DataCard("Water", "Apă", "");
SetParentAndChild(home, Water)

var Bed = new DataCard("Bed", "Pat", "");
SetParentAndChild(home, Bed)

var Sofa = new DataCard("Sofa", "Canapea", "");
SetParentAndChild(home, Sofa)

var Bathroom = new DataCard("Bathroom", "Baia", "");
SetParentAndChild(home, Bathroom)

var LivingRoom = new DataCard("LivingRoom", "Sufrageria", "");
SetParentAndChild(home, LivingRoom)

var Bedroom = new DataCard("Bedroom", "Dormitul", "");
SetParentAndChild(home, Bedroom)

var Hall = new DataCard("Hall", "Holul", "");
SetParentAndChild(home, Hall)

var Entrance = new DataCard("Entrance", "Intrarea", "");
SetParentAndChild(home, Entrance)

var Chair = new DataCard("Chair", "Scaun", "");
SetParentAndChild(home, Chair)

var Duvet = new DataCard("Duvet", "Pilotă", "");
SetParentAndChild(home, Duvet)

var Comb = new DataCard("Comb", "Pieptene", "");
SetParentAndChild(home, Comb)

var sheet = new DataCard("Sheet (bed)", "Cearșaf", "");
SetParentAndChild(home, sheet)

var Wardrobe = new DataCard("Wardrobe", "Dulap", "");
SetParentAndChild(home, Wardrobe)

var Television = new DataCard("Television", "Televizor", "");
SetParentAndChild(home, Television)

var drawers = new DataCard("Drawers (chest of)", "Comodă", "");
SetParentAndChild(home, drawers)

var Mirror = new DataCard("Mirror", "Oglindă", "");
SetParentAndChild(home, Mirror)

var Hairbrush = new DataCard("Hairbrush", "Perie de păr", "");
SetParentAndChild(home, Hairbrush)

var Lamp = new DataCard("Lamp", "Lampă (Veioză)", "");
SetParentAndChild(home, Lamp)

var Pictures = new DataCard("Pictures", "Tablouri", "");
SetParentAndChild(home, Pictures)

var Pegs = new DataCard("Pegs", "Cuier", "");
SetParentAndChild(home, Pegs)

var Telephone = new DataCard("Telephone", "Telefon", "");
SetParentAndChild(home, Telephone)

var stairs = new DataCard("Stairs", "Scară (trepte)", "");
SetParentAndChild(home, stairs)

var Letters = new DataCard("Letters", "Scrisori", "");
SetParentAndChild(home, Letters)

var Table = new DataCard("Table", "Masă", "");
SetParentAndChild(home, Table)

var Newspaper = new DataCard("Newspaper", "Ziar", "");
SetParentAndChild(home, Newspaper)

var Radiator = new DataCard("Radiator", "Calorifer", "");
SetParentAndChild(home, Radiator)

var Ballooon = new DataCard("Ballooon", "Balon", "");
SetParentAndChild(home, Ballooon)

var EyeGlasses = new DataCard("Eye Glasses", "Ochelari", "");
SetParentAndChild(home, EyeGlasses)

var Window = new DataCard("Window", "Fereastră", "");
SetParentAndChild(home, Window)

var Fireworks = new DataCard("Fireworks", "Artificii", "");
SetParentAndChild(home, Fireworks)

var Ribbon = new DataCard("Ribbon", "Fundă", "");
SetParentAndChild(home, Ribbon)

var Candle = new DataCard("Candle", "Lumânare", "");
SetParentAndChild(home, Candle)

var Paperchains = new DataCard("Paper Chains", "Ghirlandă", "");
SetParentAndChild(home, Paperchains)

var Toys = new DataCard("Toys", "Jucării", "");
SetParentAndChild(home, Toys)

var TableCloth = new DataCard("Table Cloth", "Față de Masă", "");
SetParentAndChild(home, TableCloth)

var Lightbulb = new DataCard("Lightbulb", "Bec", "");
SetParentAndChild(home, Lightbulb)

var FancyDress = new DataCard("Fancy Dress", "Deghizări", "");
SetParentAndChild(home, FancyDress)

var TeddyBear = new DataCard("Teddy Bear", "Ursuleț de Pluș", "");
SetParentAndChild(home, TeddyBear)

var Presents = new DataCard("Presents", "Cadouri", "");
SetParentAndChild(home, Presents)

var Party = new DataCard("The Party", "Petrecerea", "");
SetParentAndChild(home, Party)

// #people ================================
var people = new DataCard("People", "Oamenii", "")
SetParentAndChild(nouns, people)

var men = new DataCard(
    "Man", "Barbat",
    NounTemplateMale("bărbat", "bărbați", "bărbatul", "bărbații")
)
SetParentAndChild(people, men)

var woman = new DataCard(
    "Woman", "Femeie",
    NounTemplateFemale("femeie", "femei", "femeia", "femeile")
)
SetParentAndChild(people, woman)

// #families
var families = new DataCard(
    "Families", "Familiile",
    NounTemplateFemale("", "", "", "")
)
SetParentAndChild(people, families)

var son = new DataCard("Son", "Fiu", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, son)

var brother = new DataCard("Brother", "Frate", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, brother)

var daughter = new DataCard("Daughter", "Fiică", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, daughter)

var sister = new DataCard("Sister", "Soră", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, sister)

var mother = new DataCard("Mother", "Mamă", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, mother)

var wife = new DataCard("Wife", "Soție", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, wife)

var father = new DataCard("Father", "Tată", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, father)

var husband = new DataCard("Husband", "Soț", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, husband)

var aunt = new DataCard("Aunt", "Mătușă", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, aunt)

var uncle = new DataCard("Uncle", "Unchi", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, uncle)

var pet = new DataCard("Pet", "Animal de companie", "");
SetParentAndChild(families, pet)

var cousinM = new DataCard("Cousin (male)", "Văr", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, cousinM)

var cousinF = new DataCard("Cousin (female)", "Verișor", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, cousinF)

var grandfather = new DataCard("Grandfather", "Bunic", NounTemplateMale("", "", "", ""));
SetParentAndChild(families, grandfather)

var grandmother = new DataCard("Grandmother", "Bunică", NounTemplateFemale("", "", "", ""));
SetParentAndChild(families, grandmother)

// #jobs
var workJob = new DataCard(
    "Work (job)", "Mancă",
    NounTemplateFemale("", "", "", "")
)
SetParentAndChild(people, workJob)

var actor = new DataCard("Actor", "Actor", "");
SetParentAndChild(workJob, actor)

var actress = new DataCard("Actress", "Actriță", "");
SetParentAndChild(workJob, actress)

var butcher = new DataCard("Butcher", "Măcelar", "");
SetParentAndChild(workJob, butcher)

var policeman = new DataCard("Policeman", "Polițist", "");
SetParentAndChild(workJob, policeman)

var policewoman = new DataCard("Policewoman", "Polițistă", "");
SetParentAndChild(workJob, policewoman)

var artist = new DataCard("Artist", "artist", "");
SetParentAndChild(workJob, artist)

var chef = new DataCard("Chef", "Bucătar", "");
SetParentAndChild(workJob, chef)

var singers = new DataCard("Singers", "Cântăreți", "");
SetParentAndChild(workJob, singers)

var dancers = new DataCard("Dancers", "Dansatori", "");
SetParentAndChild(workJob, dancers)

var astronaut = new DataCard("Astronaut", "Astronaut", "");
SetParentAndChild(workJob, astronaut)

var Carpenter = new DataCard("Carpentar", "Tâmplar", "");
SetParentAndChild(workJob, Carpenter)

var Firefighter = new DataCard("Firefighter", "Pompier", "");
SetParentAndChild(workJob, Firefighter)

var Judge = new DataCard("Judge", "Judecător", "");
SetParentAndChild(workJob, Judge)

var Mechanics = new DataCard("Mechanics", "Mechanici", "");
SetParentAndChild(workJob, Mechanics)       

var Hairdresser = new DataCard("Hairdresser", "Frizer", "");
SetParentAndChild(workJob, Hairdresser)

var lorryDriver = new DataCard("Lorry driver", "Şofer de autobuz", "");
SetParentAndChild(workJob, lorryDriver)

var waiter = new DataCard("Waiter", "Chelner", "");
SetParentAndChild(workJob, waiter)

var Waitress = new DataCard("Waitress", "Chelnerița", "");
SetParentAndChild(workJob, Waitress)

var Postman = new DataCard("Postman", "Poștaș", "");
SetParentAndChild(workJob, Postman)

var painter = new DataCard("Painter (decorator)", "Zugrav", "");
SetParentAndChild(workJob, painter)

var diver = new DataCard("Diver", "Scanfandru", "");
SetParentAndChild(workJob, diver)

var baker = new DataCard("Baker", "Brutăriță", "");
SetParentAndChild(workJob, baker)

// #shapes =================================
var shapes = new DataCard("Shapes", "Formele geometrice", "")
SetParentAndChild(nouns, shapes)

var diamond = new DataCard("Diamond", "Romb", "")
SetParentAndChild(shapes, diamond)

var oval = new DataCard("Oval", "Oval", "")
SetParentAndChild(shapes, oval)

var cone = new DataCard("Cone", "Con", "")
SetParentAndChild(shapes, cone)

var rectangle = new DataCard("Rectangle", "Dreptunghi", "")
SetParentAndChild(shapes, rectangle)

var triangle = new DataCard("Triangle", "Triunghi", "")
SetParentAndChild(shapes, triangle)

var star = new DataCard("Star", "Stea", "")
SetParentAndChild(shapes, star)

var square = new DataCard("Square", "Pătrat", "")
SetParentAndChild(shapes, square)

var circle = new DataCard("Circle", "Cerc", "")
SetParentAndChild(shapes, circle)

var cube = new DataCard("Cube", "Cub", "")
SetParentAndChild(shapes, cube)

var crescent = new DataCard("Crescent", "Semilună", "")
SetParentAndChild(shapes, crescent)

// #body =======================================
var theBody = new DataCard("The body", "Corpul", "")
SetParentAndChild(nouns, theBody)

var head = new DataCard("Head", "Cap", "")
SetParentAndChild(theBody, head)

var hair = new DataCard("Hair", "Păr", "")
SetParentAndChild(theBody, hair)

var face = new DataCard("Face", "Față", "")
SetParentAndChild(theBody, face)

var arm = new DataCard("Arm", "Braț", "")
SetParentAndChild(theBody, arm)

var elbow = new DataCard("Elbow", "Cot", "")
SetParentAndChild(theBody, elbow)

var tummy = new DataCard("Tummy", "Burtică", "")
SetParentAndChild(theBody, tummy)

var toes = new DataCard("Toes", "Degete de la picioare", "")
SetParentAndChild(theBody, toes)

var foot = new DataCard("Foot", "Laba piciorului", "")
SetParentAndChild(theBody, foot)

var leg = new DataCard("Leg", "Picior", "Gambă")
SetParentAndChild(theBody, leg)

var knee = new DataCard("Knee", "Genunchi", "")
SetParentAndChild(theBody, knee)

var eyebrow = new DataCard("Eyebrow", "Sprânceană", "")
SetParentAndChild(theBody, eyebrow)

var eye = new DataCard("Eye", "Ochi", "")
SetParentAndChild(theBody, eye)

var nose = new DataCard("Nose", "Nas", "")
SetParentAndChild(theBody, nose)

var cheek = new DataCard("Cheek", "Obraz", "")
SetParentAndChild(theBody, cheek)

var mouth = new DataCard("Mouth", "Gură", "")
SetParentAndChild(theBody, mouth)

var lips = new DataCard("Lips", "Buze", "")
SetParentAndChild(theBody, lips)

var teeth = new DataCard("Teeth", "Dinți", "")
SetParentAndChild(theBody, teeth)

var tongue = new DataCard("Tongue", "Limbă", "")
SetParentAndChild(theBody, tongue)

var chin = new DataCard("Chin", "Bărbie", "")
SetParentAndChild(theBody, chin)

var ears = new DataCard("Ears", "Urechi", "")
SetParentAndChild(theBody, ears)

var neck = new DataCard("Neck", "Gât", "")
SetParentAndChild(theBody, neck)

var shoulders = new DataCard("Shoulders", "Umeri", "")
SetParentAndChild(theBody, shoulders)

var chest = new DataCard("Chest", "Piept", "")
SetParentAndChild(theBody, chest)

var back = new DataCard("Back", "Spate", "")
SetParentAndChild(theBody, back)

var bottom = new DataCard("Bottom", "Fund", "")
SetParentAndChild(theBody, bottom)

var hand = new DataCard("Hand", "Mână", "")
SetParentAndChild(theBody, hand)

var thumb = new DataCard("Thumb", "Degetul mare", "")
SetParentAndChild(theBody, thumb)

var fingers = new DataCard("Fingers", "Degete de la mână", "")
SetParentAndChild(theBody, fingers)


// =============================================================================
// #Adverbs
// =============================================================================

var adverbs = new DataCard(
    "Adverbs", "Adverbe",
    "Todo")
SetParentAndChild(romanian, adverbs);

var when = new DataCard(
    "When", "Când",
    "")
SetParentAndChild(adverbs, when);

var either = new DataCard(
    "Either", "Fie",
    "")
SetParentAndChild(adverbs, either);

var neither = new DataCard(
    "Neither", "Nici",
    "")
SetParentAndChild(adverbs, neither);

var never = new DataCard(
    "Never", "Niciodată",
    "")
SetParentAndChild(adverbs, never);


var how = new DataCard(
    "How", "Cum",
    "")
SetParentAndChild(adverbs, how);

var where = new DataCard(
    "Where", "Unde",
    "")
SetParentAndChild(adverbs, where);


// =============================================================================
// #Conjunctions
// =============================================================================

var conjunctions = new DataCard(
    "Conjunctions", "Conjuncții",
    "")
SetParentAndChild(romanian, conjunctions);

var _for = new DataCard(
    "For", "Pentru",
    "")
SetParentAndChild(conjunctions, _for);

var because = new DataCard(
    "Because", "Pentru că",
    "")
SetParentAndChild(conjunctions, because);

var and = new DataCard(
    "And", "Şi",
    "")
SetParentAndChild(conjunctions, and);

var and2 = new DataCard(
    "And (alt)", "Iar",
    "")
SetParentAndChild(conjunctions, and2);

var _if = new DataCard(
    "If", "Daca",
    "")
SetParentAndChild(conjunctions, _if);

var _or = new DataCard(
    "Or", "Sau",
    "")
SetParentAndChild(conjunctions, _or);

var _or2 = new DataCard(
    "Or (alt)", "Ori",
    "")
SetParentAndChild(conjunctions, _or2);

var but = new DataCard(
    "But", "Dar",
    "")
SetParentAndChild(conjunctions, but);


// =============================================================================
// #Numbers
// =============================================================================

var numbers = new DataCard(
    "Numbers", "Numere",
    "Todo")
SetParentAndChild(romanian, numbers);

var one = new DataCard(
    "1 One", "1 Unu",
    "")
SetParentAndChild(numbers, one);

var two = new DataCard(
    "2 Two", "2 Doi",
    "")
SetParentAndChild(numbers, two);

var three = new DataCard(
    "3 Three", "3 Trei",
    "")
SetParentAndChild(numbers, three);

var four = new DataCard(
    "4 Four", "4 Patru",
    "")
SetParentAndChild(numbers, four);

var five = new DataCard(
    "5 Five", "5 Cinci",
    "")
SetParentAndChild(numbers, five);

var six = new DataCard(
    "6 Six", "6 Şase",
    "")
SetParentAndChild(numbers, six);

var seven = new DataCard(
    "7 Seven", "7 Şapte",
    "")
SetParentAndChild(numbers, seven);

var eight = new DataCard(
    "8 Eight", "8 Opt",
    "")
SetParentAndChild(numbers, eight);

var nine = new DataCard(
    "9 Nine", "9 Nouă",
    "")
SetParentAndChild(numbers, nine);

var ten = new DataCard(
    "10 Ten", "10 Zece",
    "")
SetParentAndChild(numbers, ten);




// =============================================================================
// #Pronouns
// =============================================================================

var pronouns = new DataCard(
    "Pronouns", "Pronume",
    "")
SetParentAndChild(romanian, pronouns);

var another = new DataCard(
    "Another", "Alt",
    "")
SetParentAndChild(pronouns, another);



// =============================================================================
// #Emotions
// =============================================================================

var emotions = new DataCard(
    "Emotions", "Emoții",
    "Todo")
SetParentAndChild(romanian, emotions);

