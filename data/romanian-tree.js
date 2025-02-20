// =============================================================================
// #Root
// =============================================================================

import { setParentAndChild } from "../src/tree/functions.js";
import { DataCard, DataRoot } from "../src/tree/models.js";

import { NounTemplateNeuter,
    NounTemplateMale,
    NounTemplateFemale,
    ReflexiveVerbTemplateSi,
    ReflexiveVerbTemplateSe,
    VerbTemplate
} from "./romanian-language-models.js";

/*
a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z
https://www.thoughtco.com/html-codes-romanian-characters-4062226

special characters

Șș ă â Îî ț

var  = new DataCard(
        "", "",
        "")
SetParentAndChild(verbs, );
*/

export const searchPlaceholder = new DataCard("Search", "Căuta", "");

export function BuildLanguageTree() // returns romanian
{
    var romanian = new DataRoot(
        "Romanian", "Română",
        "Romanian language tree. <br>");

    romanian.SetParent(romanian);

    // =============================================================================
    // #Verbs :
    // Checked against 
    //  - https://cooljugator.com/ro/suna
    //  - https://www.verbix.com/webverbix/go.php?T1=s%C4%83rb%C4%83tori&D1=5&H1=105
    // =============================================================================

    var verbs = new DataCard("Verbs", "Verbe", "Common verbs are listed here.")
    setParentAndChild(romanian, verbs);

    var have = new DataCard("Have", "Avea",
        "To have <br> "
        + VerbTemplate("am", "ai", "are", "avem", "aveți", "au", "avut", "avea"));
    setParentAndChild(verbs, have);

    var be = new DataCard("Be", "Fi",
        "To be <br> "
        + VerbTemplate("sunt", "ești", "este", "suntem", "sunteți", "sunt", "fost", "fi"));
    setParentAndChild(verbs, be);

    var eat = new DataCard("Eat", "Mânca",
        "To eat <br> "
        + VerbTemplate("mănânc", "mănânci", "mănâncă", "mâncăm", "mâncați", "mănâncă", "mâncat", "mânca"));
    setParentAndChild(verbs, eat);

    var drink = new DataCard("Drink", "Bea",
        "To drink <br> "
        + VerbTemplate("beau", "bei", "bea", "bem", "beți", "beau", "băut", "bea"));
    setParentAndChild(verbs, drink);

    var smell = new DataCard("Smell", "Mirosi",
        "To smell <br> "
        + VerbTemplate("miros", "miroși", "miroase", "mirosim", "mirosiți", "miros", "mirosit", "mirosi"));
    setParentAndChild(verbs, smell);

    var say = new DataCard("Say", "Spune",
        "To say <br> "
        + VerbTemplate("spun", "spui", "spune", "spunem", "spuneți", "spun", "spus", "spune"));
    setParentAndChild(verbs, say);

    var say2 = new DataCard("Say (alt)", "Zice",
        "To say <br> "
        + VerbTemplate("zic", "zici", "zice", "zicem", "ziceți", "zic", "zis", "zice"));
    setParentAndChild(verbs, say2);

    var speak = new DataCard("Speak", "Vorbi",
        "To speak <br> "
        + VerbTemplate("vorbesc", "vorbești", "vorbește", "vorbim", "vorbiți", "vorbesc", "vorbit", "vorbi"));
    setParentAndChild(verbs, speak);

    var ring = new DataCard("Ring", "Suna",
        "To ring <br> "
        + VerbTemplate("sun", "suni", "sună", "sunăm", "sunați", "sună", "sunat", "suna"));
    setParentAndChild(verbs, ring);

    var walk = new DataCard("Walk (go)", "Merge",
        "To walk (go)<br> "
        + VerbTemplate("merg", "mergi", "merge", "mergem", "mergeți", "merg", "mers", "merge"));
    setParentAndChild(verbs, walk);

    var run = new DataCard("Run", "Alerga",
        "To run <br> "
        + VerbTemplate("alerg", "alergi", "aleargă", "alergăm", "alergați", "aleargă", "alergat", "alerga"));
    setParentAndChild(verbs, run);

    var choose = new DataCard("Choose", "Alege",
        "To choose <br> "
        + VerbTemplate("aleg", "alegi", "alege", "alegem", "alegeți", "aleg", "ales", "alege"));
    setParentAndChild(verbs, choose);

    var runAway = new DataCard("Run (flee)", "Fugi",
        "To run (away, flee)<br> "
        + VerbTemplate("fug", "fugi", "fuge", "fugim", "fugiți", "fug", "fugit", "fugi"));
    setParentAndChild(verbs, runAway);

    var jump = new DataCard("Jump", "Sări",
        "To jump<br> "
        + VerbTemplate("sar", "sări", "sare", "sărim", "săriți", "sar", "sărit", "sări"));
    setParentAndChild(verbs, jump);

    var call = new DataCard("Call (shout)", "Striga",
        "To call (shout)<br> "
        + VerbTemplate("strig", "strigi", "strigă", "strigăm", "strigați", "strigă", "strigat", "striga"));
    setParentAndChild(verbs, call);

    var give = new DataCard("Give", "Da",
        "To give<br> "
        + VerbTemplate("dau", "dai", "dă", "dăm", "dați", "dau", "dat", "da"));
    setParentAndChild(verbs, give);

    var take = new DataCard("Take", "Lua",
        "To take<br> "
        + VerbTemplate("iau", "iei", "ia", "luăm", "luați", "iau", "luat", "lua"));
    setParentAndChild(verbs, take);

    var _open = new DataCard("Open", "Deschide",
        "To open<br> "
        + VerbTemplate("deschid", "deschizi", "deschide", "deschidem", "deschideți", "deschid", "deschis", "deschide"));
    setParentAndChild(verbs, _open);

    var _close = new DataCard("Close", "Închide",
        "To close<br> "
        + VerbTemplate("închid", "închizi", "închide", "închidem", "închideți", "închid", "închis", "închide"));
    setParentAndChild(verbs, _close);

    var play = new DataCard("Play", "Juca",
        "To play<br> "
        + ReflexiveVerbTemplateSe("joc", "joci", "joacă", "jucăm", "jucați", "joacă", "jucat", "juca"));
    setParentAndChild(verbs, play);

    var sing = new DataCard("Sing", "Cânta",
        "To sing<br> "
        + VerbTemplate("cânt", "cânți", "cântă", "cântăm", "cântați", "cântă", "cântat", "cânta"));
    setParentAndChild(verbs, sing);

    var seat = new DataCard("Stay (sit)", "Așeza",
        "To stay (sit)<br> "
        + ReflexiveVerbTemplateSe("așez", "așezi", "așază", "așezăm", "așezați", "așază", "așezat", "așeza"));
    setParentAndChild(verbs, seat);

    var stand = new DataCard("Stand", "Ridica",
        "To stand<br> "
        + ReflexiveVerbTemplateSe("ridic", "ridici", "ridică", "ridicăm", "ridicați", "ridică", "ridicat", "ridica"));
    setParentAndChild(verbs, stand);

    var stay = new DataCard("Stay", "Sta",
        "To stay<br> "
        + VerbTemplate("stau", "stai", "stă", "stăm", "stați", "stau", "stat", "sta"));
    setParentAndChild(verbs, stay);

    var leave = new DataCard("Leave", "Pleca",
        "To leave<br> "
        + VerbTemplate("plec", "pleci", "pleacă", "plecăm", "plecați", "pleacă", "plecat", "pleca"));
    setParentAndChild(verbs, leave);

    var visit = new DataCard("Visit", "Vizita",
        "To visit<br> "
        + VerbTemplate("vizitez", "vizitezi", "vizitează", "vizităm", "vizitați", "vizitează", "vizitat", "vizita"));
    setParentAndChild(verbs, visit);

    var come = new DataCard("Come", "Veni",
        "To come<br> "
        + VerbTemplate("vin", "vii", "vine", "venim", "veniți", "vin", "venit", "veni"));
    setParentAndChild(verbs, come);

    var sleep = new DataCard("Sleep", "Dormi",
        "To sleep<br> "
        + VerbTemplate("dorm", "dormi", "doarme", "dormim", "dormiți", "dorm", "dormit", "dormi"));
    setParentAndChild(verbs, sleep);

    var sleepWith = new DataCard("Sleep (with)", "Culci",
        "To sleep (with)<br> "
        + ReflexiveVerbTemplateSe("culc", "culci", "culca", "culcam", "culcați", "culca", "culcat", "culci"));
    setParentAndChild(verbs, sleepWith);

    var fallAsleep = new DataCard("Fall Asleep", "Adormi",
        "To fall asleep<br> "
        + VerbTemplate("adorm", "adormi", "adoarme", "adormim", "adormiți", "adorm", "adormit", "adormi"));
    setParentAndChild(verbs, fallAsleep);

    var getUp = new DataCard("Get up", "Trezi",
        "To get up<br> "
        + ReflexiveVerbTemplateSe("trezesc", "trezești", "trezește", "trezim", "treziți", "trezesc", "trezit", "trezi"));
    setParentAndChild(verbs, getUp);

    var guess = new DataCard("Guess (believe)", "Crede",
        "To guess (believe)<br> "
        + VerbTemplate("cred", "crezi", "crede", "credem", "credeți", "cred", "crezut", "crede"));
    setParentAndChild(verbs, guess);

    var bring = new DataCard("Bring", "Aduce",
        "To bring<br> "
        + VerbTemplate("aduc", "aduci", "aduce", "aducem", "aduceți", "aduc", "adus", "aduce"));
    setParentAndChild(verbs, bring);

    var think = new DataCard("Think", "Gândi",
        "To think<br> "
        + ReflexiveVerbTemplateSe("gândesc", "gândești", "gândește", "gândim", "gândiți", "gândesc", "gândit", "gândi"));
    setParentAndChild(verbs, think);

    var love = new DataCard("Love", "Iubi",
        "To love<br> "
        + VerbTemplate("iubesc", "iubești", "iubește", "iubim", "iubiți", "iubesc", "iubit", "iubi"));
    setParentAndChild(verbs, love);

    var laugh = new DataCard("Laugh", "Râde",
        "To laugh<br> "
        + VerbTemplate("râd", "râzi", "râde", "râdem", "râdeți", "râd", "râs", "râde"));
    setParentAndChild(verbs, laugh);

    var search = new DataCard("Search", "Căuta",
        "To search<br> "
        + VerbTemplate("caut", "cauți", "caută", "căutăm", "căutați", "caută", "căutat", "căuta"));
    setParentAndChild(verbs, search);

    var find = new DataCard("Find", "Găsi",
        "To find<br> "
        + VerbTemplate("găsesc", "găsești", "găsește", "găsim", "găsiți", "găsesc", "găsit", "găsi"));
    setParentAndChild(verbs, find);

    var cook = new DataCard("Cook (prepare)", "Găti",
        "To cook<br> "
        + VerbTemplate("gătesc", "gătești", "gătește", "gătim", "gătiți", "gătesc", "gătit", "găti"));
    setParentAndChild(verbs, cook);

    var joke = new DataCard("Joke", "Glumi",
        "To joke<br> "
        + VerbTemplate("glumesc", "glumești", "glumește", "glumim", "glumiți", "glumesc", "glumit", "glumi"));
    setParentAndChild(verbs, joke);

    var read = new DataCard("Read", "Citi",
        "To read<br> "
        + VerbTemplate("citesc", "citești", "citește", "citim", "citiți", "citesc", "citit", "citi"));
    setParentAndChild(verbs, read);

    var write = new DataCard("Write", "Scrie",
        "To write<br> "
        + VerbTemplate("scriu", "scrii", "scrie", "scriem", "scrieți", "scriu", "scris", "scrie"));
    setParentAndChild(verbs, write);

    var buy = new DataCard("Buy", "Cumpăra",
        "To buy<br> "
        + VerbTemplate("cumpăr", "cumpări", "cumpără", "cumpărăm", "cumpărați", "cumpără", "cumpărat", "cumpăra"));
    setParentAndChild(verbs, buy);

    var _do = new DataCard("Do", "Face",
        "To do<br> "
        + VerbTemplate("fac", "faci", "face", "facem", "faceți", "fac", "făcut", "face"));
    setParentAndChild(verbs, _do);

    var listen = new DataCard("Listen", "Asculta",
        "To listen<br> "
        + VerbTemplate("ascult", "asculți", "ascultă", "ascultăm", "ascultați", "ascultă", "ascultat", "asculta"));
    setParentAndChild(verbs, listen);

    var hear = new DataCard("Hear", "Auzi",
        "To hear<br> "
        + VerbTemplate("aud", "auzi", "aude", "auzim", "auziți", "aud", "auzit", "auzi"));
    setParentAndChild(verbs, hear);

    var kiss = new DataCard("Kiss", "Săruta",
        "To kiss<br> "
        + VerbTemplate("sărut", "săruți", "sărută", "sărutăm", "sărutați", "sărută", "sărutat", "săruta"));
    setParentAndChild(verbs, kiss);

    var ask = new DataCard("Ask", "Întreba",
        "To ask<br> "
        + VerbTemplate("întreb", "întrebi", "întreabă", "întrebăm", "întrebați", "întreabă", "întrebat", "întreba"));
    setParentAndChild(verbs, ask);

    var learn = new DataCard("Learn", "Învăța",
        "To learn<br> "
        + VerbTemplate("învăț", "înveți", "învață", "învățăm", "învățați", "învață", "învățat", "învăța"));
    setParentAndChild(verbs, learn);

    var _try = new DataCard("Try", "Incerca",
        "To try<br> "
        + VerbTemplate("încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat", "încerca"));
    setParentAndChild(verbs, _try);

    var see = new DataCard("See", "Vedea",
        "To see<br> "
        + VerbTemplate("văd", "vezi", "vede", "vedem", "vedeți", "văd", "văzut", "vedea"));
    setParentAndChild(verbs, see);

    var smile = new DataCard("Smile", "Zămbi",
        "To smile<br> "
        + VerbTemplate("zămbesc", "zămbesti", "zămbeste", "zămbim", "zămbiți", "zămbesc", "zămbit", "zămbi"));
    setParentAndChild(verbs, smile);

    var forget = new DataCard("Forget", "Uita",
        "To forget<br> "
        + VerbTemplate("uit", "uiți", "uită", "uităm", "uitați", "uită", "uitat", "uita"));
    setParentAndChild(verbs, forget);

    var want = new DataCard("Want", "Vrea",
        "To want<br> "
        + VerbTemplate("vreau", "vrei", "vrea", "vrem", "vreți", "vor", "vrut", "vrea"));
    setParentAndChild(verbs, want);

    var put = new DataCard("Put", "Pune",
        "To put<br> "
        + VerbTemplate("pun", "pui", "pune", "punem", "puneți", "pun", "pus", "pune"));
    setParentAndChild(verbs, put);

    var can = new DataCard("Can", "Putea",
        "To can<br> "
        + VerbTemplate("pot", "poți", "poate", "putem", "puteți", "pot", "putut", "putea"));
    setParentAndChild(verbs, can);

    var understand = new DataCard("Understand", "Înțelege",
        "To understand<br> "
        + VerbTemplate("înțeleg", "înțelegi", "înțelege", "înțelegem", "înțelegeți", "înțeleg", "înțeles", "înțelege"));
    setParentAndChild(verbs, understand);

    var know = new DataCard("Know", "Ști",
        "To know<br> "
        + VerbTemplate("știu", "știi", "știe", "știm", "știți", "știu", "știut", "ști"));
    setParentAndChild(verbs, know);

    var know2 = new DataCard("Know (alt)", "Cunoaște",
        "To know<br> "
        + VerbTemplate("cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut", "cunoaște"));
    setParentAndChild(verbs, know2);

    var drive = new DataCard("Drive", "Conduce",
        "To drive<br> "
        + VerbTemplate("conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus", "conduce"));
    setParentAndChild(verbs, drive);

    var pay = new DataCard("Pay", "Plăti",
        "To pay<br> "
        + VerbTemplate("plătesc", "plătești", "plătește", "plătim", "plătiți", "plătesc", "plătit", "plăti"));
    setParentAndChild(verbs, pay);

    var fly = new DataCard("Fly", "Zbura",
        "To fly<br> "
        + VerbTemplate("zbor", "zbori", "zboară", "zburăm", "zburați", "zboară", "zburat", "zbura"));
    setParentAndChild(verbs, fly);

    var arrive = new DataCard("Arrive", "Ajunge",
        "To arrive<br> "
        + VerbTemplate("ajung", "ajungi", "ajunge", "ajungem", "ajungeți", "ajung", "ajuns", "ajunge"));
    setParentAndChild(verbs, arrive);

    var carry = new DataCard("Carry", "Duce",
        "To carry<br> "
        + VerbTemplate("duc", "duci", "duce", "ducem", "duceți", "duc", "dus", "duce"));
    setParentAndChild(verbs, carry);

    var party = new DataCard("Party", "Petrece",
        "To party<br> "
        + VerbTemplate("petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut", "petrece"));
    setParentAndChild(verbs, party);

    var live = new DataCard("Live", "Trăi",
        "To <br> "
        + VerbTemplate("trăiesc", "trăiești", "trăiește", "trăim", "trăiți", "trăiesc", "trăit", "trăi"));
    setParentAndChild(verbs, live);

    var reside = new DataCard("Reside (live)", "Locui",
        "To reside (live)<br> "
        + VerbTemplate("locuiesc", "locuiești", "locuiește", "locuim", "locuiți", "locuiesc", "locuit", "locui"));
    setParentAndChild(verbs, reside);

    var work = new DataCard("Work", "Munci",
        "To work<br> "
        + VerbTemplate("muncesc", "muncești", "muncește", "muncim", "munciți", "muncesc", "muncit", "munci"));
    setParentAndChild(verbs, work);

    var work2 = new DataCard("Work (alt)", "Lucra",
        "To work<br> "
        + VerbTemplate("lucrez", "lucrezi", "lucrează", "lucrăm", "lucrați", "lucrează", "lucrat", "lucra"));
    setParentAndChild(verbs, work2);

    var divorce = new DataCard("Divorce", "Divorța",
        "To divorce<br> "
        + VerbTemplate("divorțez", "divorțezi", "divorțează", "divorțăm", "divorțați", "divorțează", "divorțat", "divorța"));
    setParentAndChild(verbs, divorce);

    var marry = new DataCard("Marry", "Căsători",
        "To marry<br> "
        + ReflexiveVerbTemplateSe("căsătoresc", "căsătorești", "căsătorește", "căsătorim", "căsătoriți", "căsătoresc", "căsătorit", "căsători"));
    setParentAndChild(verbs, marry);

    var lie = new DataCard("Lie", "Minți",
        "To lie<br> "
        + VerbTemplate("mint", "minți", "minte", "mințim", "mințiți", "mint", "mințit", "minți"));
    setParentAndChild(verbs, lie);

    var hit = new DataCard("Hit (kick)", "Lovi",
        "To hit<br> "
        + VerbTemplate("lovesc", "lovești", "lovește", "lovim", "loviți", "lovesc", "lovit", "lovi"));
    setParentAndChild(verbs, hit);

    var desire = new DataCard("Desire (wish)", "Dori",
        "To desire<br> "
        + ReflexiveVerbTemplateSi("doresc", "dorești", "dorește", "dorim", "doriți", "doresc", "dorit", "dori"));
    setParentAndChild(verbs, desire);

    var hide = new DataCard("Hide", "Ascunde",
        "To hide<br> "
        + VerbTemplate("ascund", "ascunzi", "ascunde", "ascundem", "ascundeți", "ascund", "ascuns", "ascunde"));
    setParentAndChild(verbs, hide);

    var receive = new DataCard("Receive", "Primi",
        "To receive<br> "
        + VerbTemplate("primesc", "primești", "primește", "primim", "primiți", "primesc", "primit", "primi"));
    setParentAndChild(verbs, receive);

    var wash = new DataCard("Wash", "Spăla",
        "To wash<br> "
        + ReflexiveVerbTemplateSe("spăl", "speli", "spală", "spălăm", "spălați", "spală", "spălat", "spăla"));
    setParentAndChild(verbs, wash);

    var lose = new DataCard("Lose", "Pierde",
        "To lose<br> "
        + VerbTemplate("pierd", "pierzi", "pierde", "pierdem", "pierd", "pierd", "pierdut", "pierde"));
    setParentAndChild(verbs, lose);

    var couldModal = new DataCard("Could (modal)", "Putea (modal)",
        `<h2>Modal</h2>
    Eu aș putea să [...]<br>
    Tu ai putea să [...]<br>
    El/Ea ar putea să [...]<br>
    Noi am putea să [...]<br>
    Voi ați putea să [...]<br>
    Ei/Ele ar putea să [...]<br>`)
    setParentAndChild(verbs, couldModal);

    var should = new DataCard("Should", "Ar trebui",
        `<h2>Modal</h2>
    Eu ar trebui să [...]<br>
    Tu ar trebui să [...]<br>
    El/Ea ar trebui să [...]<br>
    Noi ar trebui să [...]<br>
    Voi ar trebui să [...]<br>
    Ei/Ele ar trebui să [...]<br>`)
    setParentAndChild(verbs, should);

    var must = new DataCard("Must", "Trebuie",
        `<h2>Modal</h2>
    Eu trebuie să [...]<br>
    Tu trebuie să [...]<br>
    El/Ea trebuie să [...]<br>
    Noi trebuie să [...]<br>
    Voi trebuie să [...]<br>
    Ei/Ele trebuie să [...]<br>`)
    setParentAndChild(verbs, must);

    var send = new DataCard("Send", "Trimite",
        "To send<br> "
        + VerbTemplate("trimit", "trimiți", "trimite", "trimitem", "trimiteți", "trimit", "trimis", "trimite"));
    setParentAndChild(verbs, send);

    var cry = new DataCard("Cry", "Plânge",
        "To cry<br> "
        + VerbTemplate("plâng", "plângi", "plânge", "plângem", "plângeți", "plâng", "plâns", "plânge"));
    setParentAndChild(verbs, cry);

    var cut = new DataCard("Cut", "Tăia",
        "To cut<br> "
        + VerbTemplate("tai", "tai", "taie", "tăiem", "tăiați", "taie", "tăiat", "tăia"));
    setParentAndChild(verbs, cut);

    var wait = new DataCard("Wait", "Aștepta",
        "To wait<br> "
        + VerbTemplate("aștept", "aștepți", "așteaptă", "așteptăm", "așteptați", "așteaptă", "așteptat", "aștepta"));
    setParentAndChild(verbs, wait);

    var dance = new DataCard("Dance", "Dansa",
        "To dance<br> "
        + VerbTemplate("dansez", "dansezi", "dansează", "dansăm", "dansați", "dansează", "dansat", "dansa"));
    setParentAndChild(verbs, dance);

    var _catch = new DataCard("Catch", "Prinde",
        "To catch<br> "
        + VerbTemplate("prind", "prinzi", "prinde", "prindem", "prindeți", "prind", "prins", "prinde"));
    setParentAndChild(verbs, _catch);

    var fight = new DataCard("Fight", "Lupta",
        "To fight<br> "
        + VerbTemplate("lupt", "lupți", "luptă", "luptăm", "luptați", "luptă", "luptat", "lupta"));
    setParentAndChild(verbs, fight);

    var fall = new DataCard("Fall", "Cădea",
        "To fall<br> "
        + VerbTemplate("cad", "cazi", "cade", "cădem", "cădeți", "cad", "căzut", "cădea"));
    setParentAndChild(verbs, fall);

    var pull = new DataCard("Pull", "Trage",
        "To pull<br> "
        + VerbTemplate("trag", "tragi", "trage", "tragem", "trageți", "trag", "tras", "trage"));
    setParentAndChild(verbs, pull);

    var push = new DataCard("Push", "Împinge",
        "To push<br> "
        + VerbTemplate("împing", "împingi", "împinge", "împingem", "împingeți", "împing", "împins", "împinge"));
    setParentAndChild(verbs, push);

    var climb = new DataCard("Climb", "Urca",
        "To climb<br> "
        + VerbTemplate("urc", "urci", "urcă", "urcăm", "urcați", "urcă", "urcat", "urca"));
    setParentAndChild(verbs, climb);

    var forgive = new DataCard("Forgive", "Ierta",
        "To forgive <br> "
        + VerbTemplate("iert", "ierți", "iertă", "iertăm", "iertați", "iertă", "iertat", "ierta"));
    setParentAndChild(verbs, forgive);
    
    var toParty = new DataCard("Party", "Petrece",
        "To party <br> "
        + VerbTemplate("petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut", "petrece"));
    setParentAndChild(verbs, toParty);

    var win = new DataCard("Win", "Câștiga",
        "To win <br> "
        + VerbTemplate("câștig", "câștigi", "câștigă", "câștigăm", "câștigați", "câștigă", "câștigat", "câștiga"));
    setParentAndChild(verbs, win);
    
    var remember = new DataCard("Remember", "A-și aduce aminte",
        "To remember <br> "
        + ReflexiveVerbTemplateSi("aduc aminte", "aduci aminte", "aduce aminte", "aducem aminte", "aduceți aminte", "aduc aminte", "adus aminte", "aduce aminte", "am adus aminte", "voi aduce aminte"));
    setParentAndChild(verbs, remember);
    
    var change = new DataCard("Change", "Schimba",
        "To change <br> "
        + VerbTemplate("schimb", "schimbi", "schimbă", "schimbăm", "schimbați", "schimbă", "schimbat", "schimba"));
    setParentAndChild(verbs, change);
        
    var become = new DataCard("Become", "Deveni",
        "To become <br> "
        + VerbTemplate("devin", "devii", "devine", "devenim", "deveniți", "devin", "devenit", "deveni"));
    setParentAndChild(verbs, become);
    
    var improve = new DataCard("Improve", "Îmbunătăți",
        "To improve <br> "
        + VerbTemplate("îmbunătățesc", "îmbunătățești", "îmbunătățește", "îmbunătățim", "îmbunătățiți", "îmbunătățesc", "îmbunătățit", "îmbunătăți"));
    setParentAndChild(verbs, improve);
    
    var pass = new DataCard("Pass", "Trece",
        "To pass <br> "
        + VerbTemplate("trec", "treci", "trece", "trecem", "treceți", "trec", "trecut", "trece"));
    setParentAndChild(verbs, pass);
    
    var fail = new DataCard("Fail", "Eșua",
        "To fail <br> "
        + VerbTemplate("eșuez", "eșuezi", "eșuează", "eșuăm", "eșuați", "eșuează", "eșuat", "eșua"));
    setParentAndChild(verbs, fail);
    
    var celebrate = new DataCard("Celebrate", "Sărbători",
        "To celebrate <br> "
        + VerbTemplate("sărbătoresc", "sărbătorești", "sărbătorește", "sărbătorim", "sărbătoriți", "sărbătoresc", "sărbătorit", "sărbători"));
    setParentAndChild(verbs, celebrate);
    
    var shower = new DataCard("Shower", "Face duș",
        "To shower <br> "
        + VerbTemplate("fac duș", "faci duș", "face duș", "facem duș", "faceți duș", "fac duș", "făcut duș", "face duș"));
    setParentAndChild(verbs, shower);
    
    var recover = new DataCard("Recuperate", "Se recupera",
        "To recuperate <br> "
        + ReflexiveVerbTemplateSe("recuperez", "recuperezi", "recuperează", "recuperăm", "recuperați", "recuperează", "recuperat", "recupera"));
    setParentAndChild(verbs, recover);
    
    var brushTeeth = new DataCard("Brush Teeth", "Se spăla pe dinți",
        "To brush teeth <br> "
        + ReflexiveVerbTemplateSe("spăl pe dinți", "speli pe dinți", "spală pe dinți", "spălăm pe dinți", "spălați pe dinți", "spală pe dinți", "spălat pe dinți", "spăla pe dinți"));
    setParentAndChild(verbs, brushTeeth);
    
    var exercise = new DataCard("Exercise", "Face exerciții",
        "To exercise <br> "
        + VerbTemplate("fac exerciții", "faci exerciții", "face exerciții", "facem exerciții", "faceți exerciții", "fac exerciții", "făcut exerciții", "face exerciții"));
    setParentAndChild(verbs, exercise);
    
    var prove = new DataCard("Prove", "Dovedi",
        "To prove <br> "
        + VerbTemplate("dovedesc", "dovedești", "dovedește", "dovedim", "dovediți", "dovedesc", "dovedit", "dovedi"));
    setParentAndChild(verbs, prove);
    
    var admit = new DataCard("Admit", "Recunoaște",
        "To admit <br> "
        + VerbTemplate("recunosc", "recunoști", "recunoaște", "recunoaștem", "recunoașteți", "recunosc", "recunoscut", "recunoaște"));
    setParentAndChild(verbs, admit);
    
    var confess = new DataCard("Confess", "Mărturisi",
        "To confess <br> "
        + VerbTemplate("mărturisesc", "mărturisești", "mărturisește", "mărturisim", "mărturisiți", "mărturisesc", "mărturisit", "mărturisi"));
    setParentAndChild(verbs, confess);
    
    var deny = new DataCard("Deny", "Nega",
        "To deny <br> "
        + VerbTemplate("neg", "negi", "neagă", "negăm", "negați", "neagă", "negat", "nega"));
    setParentAndChild(verbs, deny);
    
    var commitSuicide = new DataCard("Commit Suicide", "Se sinucide",
        "To commit suicide <br> "
        + ReflexiveVerbTemplateSe("sinucid", "sinucizi", "sinucide", "sinucidem", "sinucideți", "sinucid", "sinucis", "sinucide"));
    setParentAndChild(verbs, commitSuicide);
    
    var apologize = new DataCard("Apologize", "Cere scuze",
        "To apologize <br> "
        + VerbTemplate("cer scuze", "ceri scuze", "cere scuze", "cerem scuze", "cereți scuze", "cer scuze", "cerut scuze", "cere scuze"));
    setParentAndChild(verbs, apologize);
    
    var rob = new DataCard("Rob", "Jefui",
        "To rob <br> "
        + VerbTemplate("jefuiesc", "jefuiești", "jefuiește", "jefuim", "jefuiți", "jefuiesc", "jefuit", "jefui"));
    setParentAndChild(verbs, rob);
    
    var cheat = new DataCard("Cheat", "Trișa",
        "To cheat <br> "
        + VerbTemplate("trișez", "trișezi", "trișează", "trișăm", "trișați", "trișează", "trișat", "trișa"));
    setParentAndChild(verbs, cheat);
    
    var breakIn = new DataCard("Break Into", "Sparge",
        "To break into <br> "
        + VerbTemplate("sparg", "spargi", "sparge", "spargem", "spargeți", "sparg", "spart", "sparge"));
    setParentAndChild(verbs, breakIn);
    
    var escape = new DataCard("Escape", "Scăpa",
        "To escape <br> "
        + VerbTemplate("scap", "scapi", "scapă", "scăpăm", "scăpați", "scapă", "scăpat", "scăpa"));
    setParentAndChild(verbs, escape);
    
    var replace = new DataCard("Replace", "Înlocui",
        "To replace <br> "
        + VerbTemplate("înlocuiesc", "înlocuiești", "înlocuiește", "înlocuim", "înlocuiți", "înlocuiesc", "înlocuit", "înlocui"));
    setParentAndChild(verbs, replace);
    
    var renovate = new DataCard("Renovate", "Renova",
        "To renovate <br> "
        + VerbTemplate("renovez", "renovezi", "renovează", "renovăm", "renovați", "renovează", "renovat", "renova"));
    setParentAndChild(verbs, renovate);
    
    var paint = new DataCard("Paint", "Vopsi",
        "To paint <br> "
        + VerbTemplate("vopsesc", "vopsești", "vopsește", "vopsim", "vopsiți", "vopsesc", "vopsit", "vopsi"));
    setParentAndChild(verbs, paint);
    
    var keep = new DataCard("Keep", "Ține",
        "To keep <br> "
        + VerbTemplate("țin", "ții", "ține", "ținem", "țineți", "țin", "ținut", "ține"));
    setParentAndChild(verbs, keep);
    
    var suppose = new DataCard("Suppose", "Presupune",
        "To suppose <br> "
        + VerbTemplate("presupun", "presupui", "presupune", "presupunem", "presupuneți", "presupun", "presupus", "presupune"));
    setParentAndChild(verbs, suppose);
    
    var imagine = new DataCard("Imagine", "Își imagina",
        "To imagine <br> "
        + ReflexiveVerbTemplateSi("imaginez", "imaginezi", "imaginează", "imaginăm", "imaginați", "imaginează", "imaginat", "imagina"));
    setParentAndChild(verbs, imagine);
    
    var doubt = new DataCard("Doubt", "Îndoi",
        "To doubt <br> "
        + VerbTemplate("îndoiesc", "îndoiești", "îndoiește", "îndoim", "îndoiți", "îndoiesc", "îndoit", "îndoi"));
    setParentAndChild(verbs, doubt);
    
    var observe = new DataCard("Observe (gase)", "Observa",
        "To observe (gaze) <br> "
        + VerbTemplate("observ", "observi", "observă", "observăm", "observați", "observă", "observat", "observa"));
    setParentAndChild(verbs, observe);
    
    var die = new DataCard("Die", "Muri",
        "To die <br> "
        + VerbTemplate("mor", "mori", "moare", "murim", "muriți", "mor", "murit", "muri"));
    setParentAndChild(verbs, die);
    
    var ruin = new DataCard("Ruin", "Ruina",
        "To ruin <br> "
        + VerbTemplate("ruinez", "ruinezi", "ruinează", "ruinăm", "ruinați", "ruinează", "ruinat", "ruina"));
    setParentAndChild(verbs, ruin);
    
    var cause = new DataCard("Cause", "Provoca",
        "To cause <br> "
        + VerbTemplate("provoc", "provoci", "provoacă", "provocăm", "provocați", "provoacă", "provocat", "provoca"));
    setParentAndChild(verbs, cause);
    
    var damage = new DataCard("Damage", "Avaria",
        "To damage <br> "
        + VerbTemplate("avariez", "avariezi", "avariază", "avariem", "avariați", "avariază", "avariat", "avaria"));
    setParentAndChild(verbs, damage);
    
    var wipeOut = new DataCard("Wipe Out", "Nimici",
        "To wipe out <br> "
        + VerbTemplate("nimicesc", "nimicești", "nimicește", "nimicim", "nimiciți", "nimicesc", "nimicit", "nimici"));
    setParentAndChild(verbs, wipeOut);
    
    var destroy = new DataCard("Destroy", "Distruge",
        "To destroy <br> "
        + VerbTemplate("distrug", "distrugi", "distruge", "distrugem", "distrugeți", "distrug", "distrus", "distruge"));
    setParentAndChild(verbs, destroy);
    
    var occur = new DataCard("Occur", "Apară",
        "To occur <br> "
        + VerbTemplate("apăr", "aperi", "apără", "apărăm", "apăraţi", "apără", "apărat", "apără"));
    setParentAndChild(verbs, occur);
    
    var quit = new DataCard("Quit", "Demisiona",
        "To quit <br> "
        + VerbTemplate("demisionez", "demisionezi", "demisionează", "demisionăm", "demisionați", "demisionează", "demisionat", "demisiona"));
    setParentAndChild(verbs, quit);
    
    var praise = new DataCard("Praise", "Lăuda",
        "To praise <br> "
        + VerbTemplate("laud", "lauzi", "laudă", "lăudăm", "lăudați", "laudă", "lăudat", "lăuda"));
    setParentAndChild(verbs, praise);
    
    var prefer = new DataCard("Prefer", "Prefera",
        "To prefer <br> "
        + VerbTemplate("prefer", "preferi", "preferă", "preferăm", "preferați", "preferă", "preferat", "prefera"));
    setParentAndChild(verbs, prefer);
    
    var gather = new DataCard("Gather", "Aduna",
        "To gather <br> "
        + VerbTemplate("adun", "aduni", "adună", "adunăm", "adunați", "adună", "adunat", "aduna"));
    setParentAndChild(verbs, gather);
    
    var lead = new DataCard("Lead", "Conduce",
        "To lead <br> "
        + VerbTemplate("conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus", "conduce"));
    setParentAndChild(verbs, lead);
    
    var apply = new DataCard("Apply", "Aplica",
        "To apply <br> "
        + VerbTemplate("aplic", "aplici", "aplică", "aplicăm", "aplicați", "aplică", "aplicat", "aplica"));
    setParentAndChild(verbs, apply);
    
    var obtain = new DataCard("Obtain", "Obține",
        "To obtain <br> "
        + VerbTemplate("obțin", "obții", "obține", "obținem", "obțineți", "obțin", "obținut", "obține"));
    setParentAndChild(verbs, obtain);
    
    var interview = new DataCard("Interview", "Intervieva",
        "To interview <br> "
        + VerbTemplate("intervievez", "intervievezi", "intervievează", "intervievăm", "intervievati", "intervievează", "intervievat", "intervieva"));
    setParentAndChild(verbs, interview);
    
    var approve = new DataCard("Approve", "Aproba",
        "To approve <br> "
        + VerbTemplate("aprob", "aprobi", "aprobă", "aprobăm", "aprobați", "aprobă", "aprobat", "aproba"));
    setParentAndChild(verbs, approve);
    
    var verify = new DataCard("Verify", "Verifica",
        "To verify <br> "
        + VerbTemplate("verific", "verifici", "verifică", "verificăm", "verificați", "verifică", "verificat", "verifica"));
    setParentAndChild(verbs, verify);
    
    var analyze = new DataCard("Analyze", "Analiza",
        "To analyze <br> "
        + VerbTemplate("analizez", "analizezi", "analizează", "analizăm", "analizați", "analizează", "analizat", "analiza"));
    setParentAndChild(verbs, analyze);
    
    var present = new DataCard("Present", "Prezenta",
        "To present <br> "
        + VerbTemplate("prezint", "prezinți", "prezintă", "prezentăm", "prezentați", "prezintă", "prezentat", "prezenta"));
    setParentAndChild(verbs, present);
    
    var discuss = new DataCard("Discuss", "Discuta",
        "To discuss <br> "
        + VerbTemplate("discut", "discuți", "discută", "discutăm", "discutați", "discută", "discutat", "discuta"));
    setParentAndChild(verbs, discuss);
    
    var agree = new DataCard("Agree", "Fi de acord",
        "To agree <br> "
        + VerbTemplate("sunt de acord", "ești de acord", "este de acord", "suntem de acord", "sunteți de acord", "sunt de acord", "fost de acord", "fi de acord"));
    setParentAndChild(verbs, agree);
    
    var achieve = new DataCard("Achieve", "Realiza",
        "To achieve <br> "
        + VerbTemplate("realizez", "realizezi", "realizează", "realizăm", "realizați", "realizează", "realizat", "realiza"));
    setParentAndChild(verbs, achieve);
    
    var resolve = new DataCard("Resolve", "Rezolva",
        "To resolve <br> "
        + VerbTemplate("rezolv", "rezolvi", "rezolvă", "rezolvăm", "rezolvați", "rezolvă", "rezolvat", "rezolva"));
    setParentAndChild(verbs, resolve);
    
    var review = new DataCard("Review", "Revizui",
        "To review <br> "
        + VerbTemplate("revizuiesc", "revizuiești", "revizuiește", "revizuim", "revizuiți", "revizuiesc", "revizuit", "revizui"));
    setParentAndChild(verbs, review);
    
    var continueVerb = new DataCard("Continue", "Continua",
        "To continue <br> "
        + VerbTemplate("continuu", "continui", "continuă", "continuăm", "continuați", "continuă", "continuat", "continua"));
    setParentAndChild(verbs, continueVerb);
    
    var repeat = new DataCard("Repeat", "Repeta",
        "To repeat <br> "
        + VerbTemplate("repet", "repeți", "repetă", "repetăm", "repetați", "repetă", "repetat", "repeta"));
    setParentAndChild(verbs, repeat);
    
    var suggest = new DataCard("Suggest", "Sugera",
        "To suggest <br> "
        + VerbTemplate("sugerez", "sugerezi", "sugerează", "sugerăm", "sugerați", "sugerează", "sugerat", "sugera"));
    setParentAndChild(verbs, suggest);
    
    var explain = new DataCard("Explain", "Explica",
        "To explain <br> "
        + VerbTemplate("explic", "explici", "explică", "explicăm", "explicați", "explică", "explicat", "explica"));
    setParentAndChild(verbs, explain);
    
    var express = new DataCard("Express", "Exprima",
        "To express <br> "
        + VerbTemplate("exprim", "exprimi", "exprimă", "exprimăm", "exprimați", "exprimă", "exprimat", "exprima"));
    setParentAndChild(verbs, express);
    
    var seem = new DataCard("Seem", "Se părea",
        "To seem <br> "
        + ReflexiveVerbTemplateSe("par", "pari", "pare", "părem", "păreți", "par", "părut", "părea"));
    setParentAndChild(verbs, seem);
    
    var kill = new DataCard("Kill", "Ucide",
        "To kill <br> "
        + VerbTemplate("ucid", "ucizi", "ucide", "ucidem", "ucideți", "ucid", "ucis", "ucide"));
    setParentAndChild(verbs, kill);
    
    var heat = new DataCard("Heat", "Încălzi",
        "To heat <br> "
        + VerbTemplate("încălzesc", "încălzești", "încălzește", "încălzim", "încălziți", "încălzesc", "încălzit", "încălzi"));
    setParentAndChild(verbs, heat);
    
    var boil = new DataCard("Boil", "Fierbe",
        "To boil <br> "
        + VerbTemplate("fierb", "fierbi", "fierbe", "fierbem", "fierbeți", "fierb", "fiert", "fierbe"));
    setParentAndChild(verbs, boil);
    
    var bake = new DataCard("Bake", "Coace",
        "To bake <br> "
        + VerbTemplate("coc", "coci", "coace", "coacem", "coaceți", "coc", "copt", "coace"));
    setParentAndChild(verbs, bake);
    
    var grill = new DataCard("Grill", "Frige la grătar",
        "To grill <br> "
        + VerbTemplate("frig la grătar", "frigi la grătar", "frige la grătar", "frigem la grătar", "frigeți la grătar", "frig la grătar", "fript la grătar", "frige la grătar"));
    setParentAndChild(verbs, grill);
    
    var chop = new DataCard("Chop", "Toca",
        "To chop <br> "
        + VerbTemplate("toc", "toci", "toacă", "tocăm", "tocați", "toacă", "tocat", "toca"));
    setParentAndChild(verbs, chop);
    
    var stirFry = new DataCard("Stir Fry", "Căli",
        "To stir fry <br> "
        + VerbTemplate("călesc", "călești", "călește", "călim", "căliți", "călesc", "călit", "căli"));
    setParentAndChild(verbs, stirFry);
    
    var mix = new DataCard("Mix", "Amesteca",
        "To mix <br> "
        + VerbTemplate("amestec", "amesteci", "amestecă", "amestecăm", "amestecați", "amestecă", "amestecat", "amesteca"));
    setParentAndChild(verbs, mix);
    
    var peel = new DataCard("Peel", "Decoji",
        "To peel <br> "
        + VerbTemplate("decojesc", "decojești", "decojește", "decojim", "decojiți", "decojesc", "decojit", "decoji"));
    setParentAndChild(verbs, peel);
    
    var hug = new DataCard("Hug", "Îmbrățișa",
        "To hug <br> "
        + VerbTemplate("îmbrățișez", "îmbrățișezi", "îmbrățișează", "îmbrățișăm", "îmbrățișați", "îmbrățișează", "îmbrățișat", "îmbrățișa"));
    setParentAndChild(verbs, hug);
    
    var hold = new DataCard("Hold", "Ține",
        "To hold <br> "
        + VerbTemplate("țin", "ții", "ține", "ținem", "țineți", "țin", "ținut", "ține"));
    setParentAndChild(verbs, hold);
    
    var interrupt = new DataCard("Interrupt", "Întrerupe",
        "To interrupt <br> "
        + VerbTemplate("întrerup", "întrerupi", "întrerupe", "întrerupem", "întrerupeți", "întrerup", "întrerupt", "întrerupe"));
    setParentAndChild(verbs, interrupt);
    
    var type = new DataCard("Type", "Tasta",
        "To type <br> "
        + VerbTemplate("tastez", "tastezi", "tastează", "tastăm", "tastați", "tastează", "tastat", "tasta"));
    setParentAndChild(verbs, type);
    
    var like = new DataCard("Like", "Plăcea",
        "To like <br> "
        + ReflexiveVerbTemplateSi("place", "place", "place", "place", "place", "place", "plăcut", "plăcea"));
    setParentAndChild(verbs, like);
    
    var dream = new DataCard("Dream", "Visa",
        "To dream <br> "
        + VerbTemplate("visez", "visezi", "visează", "visăm", "visați", "visează", "visat", "visa"));
    setParentAndChild(verbs, dream);
    
    var beHonest = new DataCard("Be Honest", "Fi cinstit",
        "To be honest <br> "
        + VerbTemplate("sunt cinstit", "ești cinstit", "este cinstit", "suntem cinstiți", "sunteți cinstiți", "sunt cinstiți", "fost cinstit", "fi cinstit"));
    setParentAndChild(verbs, beHonest);
    
    var beSure = new DataCard("Be Sure", "Fi sigur",
        "To be sure <br> "
        + VerbTemplate("sunt sigur", "ești sigur", "este sigur", "suntem siguri", "sunteți siguri", "sunt siguri", "fost sigur", "fi sigur"));
    setParentAndChild(verbs, beSure);
    
    var treat = new DataCard("Treat", "Trata",
        "To treat <br> "
        + VerbTemplate("tratez", "tratezi", "tratează", "tratăm", "trataţi", "tratează", "tratat", "trata"));
    setParentAndChild(verbs, treat);
    
    var blush = new DataCard("Blush", "Roși",
        "To blush <br> "
        + VerbTemplate("roșesc", "roșești", "roșește", "roșim", "roșiți", "roșesc", "roșit", "roși"));
    setParentAndChild(verbs, blush);
    
    var smile = new DataCard("Smile", "Zâmbi",
        "To smile <br> "
        + VerbTemplate("zâmbesc", "zâmbești", "zâmbește", "zâmbim", "zâmbiți", "zâmbesc", "zâmbit", "zâmbi"));
    setParentAndChild(verbs, smile);
    
    var beAvailable = new DataCard("Be Available", "Fi disponibil",
        "To be available <br> "
        + VerbTemplate("sunt disponibil", "ești disponibil", "este disponibil", "suntem disponibili", "sunteți disponibili", "sunt disponibili", "fost disponibil", "fi disponibil"));
    setParentAndChild(verbs, beAvailable);
    
    var rise = new DataCard("Rise", "Crește",
        "To rise <br> "
        + VerbTemplate("cresc", "crești", "crește", "creștem", "creșteți", "cresc", "crescut", "crește"));
    setParentAndChild(verbs, rise);
    
    var tryVerb = new DataCard("Try", "Încerca",
        "To try <br> "
        + VerbTemplate("încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat", "încerca"));
    setParentAndChild(verbs, tryVerb);
    
    var invite = new DataCard("Invite", "Invita",
        "To invite <br> "
        + VerbTemplate("invit", "inviţi", "invită", "invităm", "invitați", "invită", "invitat", "invita"));
    setParentAndChild(verbs, invite);
    
    var join = new DataCard("Join", "Se alătura",
        "To join <br> "
        + ReflexiveVerbTemplateSe("alătur", "alături", "alătură", "alăturăm", "alăturați", "alătură", "alăturat", "alătura"));
    setParentAndChild(verbs, join);
    
    var cancel = new DataCard("Cancel", "Anula",
        "To cancel <br> "
        + VerbTemplate("anulez", "anulezi", "anulează", "anulăm", "anulați", "anulează", "anulat", "anula"));
    setParentAndChild(verbs, cancel);
    
    var sweat = new DataCard("Sweat", "Transpira",
        "To sweat <br> "
        + VerbTemplate("transpir", "transpiri", "transpiră", "transpirăm", "transpirați", "transpiră", "transpirat", "transpira"));
    setParentAndChild(verbs, sweat);
    
    var forecast = new DataCard("Forecast", "Prognoza",
        "To forecast <br> "
        + VerbTemplate("prognozez", "prognozezi", "prognozează", "prognozăm", "prognozați", "prognozează", "prognozat", "prognoza"));
    setParentAndChild(verbs, forecast);
    
    var describe = new DataCard("Describe", "Descrie",
        "To describe <br> "
        + VerbTemplate("descriu", "descrii", "descrie", "descriem", "descrieți", "descriu", "descris", "descrie"));
    setParentAndChild(verbs, describe);
    
    var compare = new DataCard("Compare", "Compara",
        "To compare <br> "
        + VerbTemplate("compar", "compari", "compară", "comparăm", "comparați", "compară", "comparat", "compara"));
    setParentAndChild(verbs, compare);
    
    var getHurt = new DataCard("Get Hurt", "Fi rănit",
        "To get hurt <br> "
        + VerbTemplate("sunt rănit", "ești rănit", "este rănit", "suntem răniți", "sunteți răniți", "sunt răniți", "fost rănit", "fi rănit"));
    setParentAndChild(verbs, getHurt);
    
    var comeBack = new DataCard("Come Back", "Se întoarce",
        "To come back <br> "
        + ReflexiveVerbTemplateSe("întorc", "întorci", "întoarce", "întoarcem", "întoarceți", "întorc", "întors", "întoarce"));
    setParentAndChild(verbs, comeBack);
    
    var move = new DataCard("Move", "Muta",
        "To move <br> "
        + VerbTemplate("mut", "muți", "mută", "mutăm", "mutați", "mută", "mutat", "muta"));
    setParentAndChild(verbs, move);
    
    var follow = new DataCard("Follow", "Urma",
        "To follow <br> "
        + VerbTemplate("urmez", "urmezi", "urmează", "urmăm", "urmați", "urmează", "urmat", "urma"));
    setParentAndChild(verbs, follow);
    
    var dateVerb = new DataCard("Date", "Se întâlni",
        "To date <br> "
        + ReflexiveVerbTemplateSe("întâlnesc", "întâlnești", "întâlnește", "întâlnim", "întâlniți", "întâlnesc", "întâlnit", "întâlni"));
    setParentAndChild(verbs, dateVerb);
    
    var place = new DataCard("Place", "Așeza",
        "To place / to lay <br> "
        + VerbTemplate("așez", "așezi", "așează", "așezăm", "așezați", "așează", "așezat", "așeza"));
    setParentAndChild(verbs, place);
    
    var present = new DataCard("Present", "Prezenta",
        "To present / to show <br> "
        + VerbTemplate("prezint", "prezinți", "prezintă", "prezentăm", "prezentați", "prezintă", "prezentat", "prezenta"));
    setParentAndChild(verbs, present);
    
    var meet = new DataCard("Meet", "Cunoaște",
        "To meet <br> "
        + VerbTemplate("cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut", "cunoaște"));
    setParentAndChild(verbs, meet);
    
    var argue = new DataCard("Argue", "Se certa",
        "To argue <br> "
        + ReflexiveVerbTemplateSe("cert", "cerți", "certă", "certăm", "certați", "certă", "certat", "certa"));
    setParentAndChild(verbs, argue);
    
    var cry = new DataCard("Cry", "Plânge",
        "To cry <br> "
        + VerbTemplate("plâng", "plângi", "plânge", "plângem", "plângeți", "plâng", "plâns", "plânge"));
    setParentAndChild(verbs, cry);
    
    var propose = new DataCard("Propose", "Cere în căsătorie",
        "To propose <br> "
        + VerbTemplate("cer în căsătorie", "cere în căsătorie", "cere în căsătorie", "cerem în căsătorie", "cereți în căsătorie", "cer în căsătorie", "cerut în căsătorie", "cere în căsătorie"));
    setParentAndChild(verbs, propose);
    
    var beDivorced = new DataCard("Be Divorced", "Fi divorțat",
        "To be divorced <br> "
        + VerbTemplate("sunt divorțat", "ești divorțat", "este divorțat", "suntem divorțați", "sunteți divorțați", "sunt divorțați", "fost divorțat", "fi divorțat"));
    setParentAndChild(verbs, beDivorced);
    
    var breakUp = new DataCard("Break Up", "Se despărți",
        "To break up <br> "
        + ReflexiveVerbTemplateSe("despart", "desparți", "desparte", "despărțim", "despărțiți", "despart", "despărțit", "despărți"));
    setParentAndChild(verbs, breakUp);
    
    var beEngaged = new DataCard("Be Engaged", "Fi logodit",
        "To be engaged <br> "
        + VerbTemplate("sunt logodit", "ești logodit", "este logodit", "suntem logodiți", "sunteți logodiți", "sunt logodiți", "fost logodit", "fi logodit"));
    setParentAndChild(verbs, beEngaged);
    
    var clean = new DataCard("Clean", "Face curățenie",
        "To clean <br> "
        + VerbTemplate("fac curățenie", "faci curățenie", "face curățenie", "facem curățenie", "faceți curățenie", "fac curățenie", "făcut curățenie", "face curățenie"));
    setParentAndChild(verbs, clean);
    
    var rest = new DataCard("Rest", "Se odihni",
        "To rest <br> "
        + ReflexiveVerbTemplateSe("odihnesc", "odihnești", "odihnește", "odihnim", "odihniți", "odihnesc", "odihnit", "odihni"));
    setParentAndChild(verbs, rest);
    
    var allow = new DataCard("Allow", "Permite",
        "To permit / to allow <br> "
        + VerbTemplate("permit", "permiți", "permite", "permitem", "permiteți", "permit", "permis", "permite"));
    setParentAndChild(verbs, allow);
    
    var decide = new DataCard("Decide", "Decide",
        "To decide <br> "
        + VerbTemplate("decid", "decizi", "decide", "decidem", "decideți", "decid", "decis", "decide"));
    setParentAndChild(verbs, decide);
    
    var miss = new DataCard("Miss", "Rata",
        "To miss (e.g. a taxi) <br> "
        + VerbTemplate("ratez", "ratezi", "ratează", "ratăm", "ratați", "ratează", "ratat", "rata"));
    setParentAndChild(verbs, miss);
    
    var rent = new DataCard("Rent", "Închiria",
        "To rent <br> "
        + VerbTemplate("închiriez", "închiriezi", "închiriază", "închiriem", "închiriați", "închiriază", "închiriat", "închiria"));
    setParentAndChild(verbs, rent);
    
    var plan = new DataCard("Plan", "Planifica",
        "To plan <br> "
        + VerbTemplate("planific", "planifici", "planifică", "planificăm", "planificați", "planifică", "planificat", "planifica"));
    setParentAndChild(verbs, plan);
    
    var exchange = new DataCard("Exchange", "Schimba",
        "To exchange <br> "
        + VerbTemplate("schimb", "schimbi", "schimbă", "schimbăm", "schimbați", "schimbă", "schimbat", "schimba"));
    setParentAndChild(verbs, exchange);
    
    var deposit = new DataCard("Deposit", "Depune",
        "To deposit <br> "
        + VerbTemplate("depun", "depui", "depune", "depunem", "depuneți", "depun", "depus", "depune"));
    setParentAndChild(verbs, deposit);
    
    var register = new DataCard("Register", "Înregistra",
        "To register <br> "
        + VerbTemplate("înregistrez", "înregistrezi", "înregistrează", "înregistrăm", "înregistrați", "înregistrează", "înregistrat", "înregistra"));
    setParentAndChild(verbs, register);
    
    var guess = new DataCard("Guess", "Ghici",
        "To guess <br> "
        + VerbTemplate("ghicesc", "ghicești", "ghicește", "ghicim", "ghiciți", "ghicesc", "ghicit", "ghici"));
    setParentAndChild(verbs, guess);
    
    var practice = new DataCard("Practice", "Exersa",
        "To practice <br> "
        + VerbTemplate("exersez", "exersezi", "exersează", "exersăm", "exersați", "exersează", "exersat", "exersa"));
    setParentAndChild(verbs, practice);
    
    var enroll = new DataCard("Enroll", "Se înscrie",
        "To enroll <br> "
        + ReflexiveVerbTemplateSe("înscriu", "înscrii", "înscrie", "înscriem", "înscrieți", "înscriu", "înscris", "înscrie"));
    setParentAndChild(verbs, enroll);
    
    var forget = new DataCard("Forget", "Uita",
        "To forget <br> "
        + VerbTemplate("uit", "uiți", "uită", "uităm", "uitați", "uită", "uitat", "uita"));
    setParentAndChild(verbs, forget);
    
    var hangOut = new DataCard("Hang Out", "Petrece timpul",
        "To hang out <br> "
        + VerbTemplate("petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut", "petrece"));
    setParentAndChild(verbs, hangOut);
    
    var tie = new DataCard("Tie", "Lega",
        "To tie <br> "
        + VerbTemplate("leg", "legi", "leagă", "legăm", "legați", "leagă", "legat", "lega"));
    setParentAndChild(verbs, tie);
    
    var repair = new DataCard("Repair", "Repara",
        "To repair <br> "
        + VerbTemplate("repar", "repari", "repară", "reparăm", "reparați", "repară", "reparat", "repara"));
    setParentAndChild(verbs, repair);
    
    var prepare = new DataCard("Prepare", "Pregăti",
        "To prepare <br> "
        + VerbTemplate("pregătesc", "pregătești", "pregătește", "pregătim", "pregătiți", "pregătesc", "pregătit", "pregăti"));
    setParentAndChild(verbs, prepare);
    
    var fit = new DataCard("Fit", "Se potrivi",
        "To fit <br> "
        + ReflexiveVerbTemplateSe("potrivesc", "potrivești", "potrivește", "potrivim", "potriviți", "potrivesc", "potrivit", "potrivi"));
    setParentAndChild(verbs, fit);
    
    var tryOn = new DataCard("Try On", "Proba",
        "To try on <br> "
        + VerbTemplate("prob", "probi", "probă", "probăm", "probați", "probă", "probat", "proba"));
    setParentAndChild(verbs, tryOn);
    
    var feel = new DataCard("Feel", "Simți",
        "To feel <br> "
        + VerbTemplate("simt", "simți", "simte", "simțim", "simțiți", "simt", "simțit", "simți"));
    setParentAndChild(verbs, feel);
    
    var teach = new DataCard("Teach", "Preda",
        "To teach <br> "
        + VerbTemplate("predau", "predai", "predă", "predăm", "predați", "predau", "predat", "preda"));
    setParentAndChild(verbs, teach);
    
    var meet = new DataCard("Meet", "Întâlni",
        "To meet <br> "
        + VerbTemplate("întâlnesc", "întâlnești", "întâlnește", "întâlnim", "întâlniți", "întâlnesc", "întâlnit", "întâlni"));
    setParentAndChild(verbs, meet);
    
    var turn = new DataCard("Turn", "Vira",
        "To turn <br> "
        + VerbTemplate("virez", "virezi", "virează", "virăm", "virați", "virează", "virat", "vira"));
    setParentAndChild(verbs, turn);
    
    var stop = new DataCard("Stop", "Opri",
        "To stop <br> "
        + VerbTemplate("opresc", "oprești", "oprește", "oprim", "opriți", "opresc", "oprit", "opri"));
    setParentAndChild(verbs, stop);
    
    var pay = new DataCard("Pay", "Plăti",
        "To pay <br> "
        + VerbTemplate("plătesc", "plătești", "plătește", "plătim", "plătiți", "plătesc", "plătit", "plăti"));
    setParentAndChild(verbs, pay);
        
    var order = new DataCard("Order", "Comanda",
        "To order <br> "
        + VerbTemplate("comand", "comanzi", "comandă", "comandăm", "comandați", "comandă", "comandat", "comanda"));
    setParentAndChild(verbs, order);
    
    var enter = new DataCard("Enter", "Intra",
        "To enter / to come in <br> "
        + VerbTemplate("intru", "intri", "intră", "intrăm", "intrați", "intră", "intrat", "intra"));
    setParentAndChild(verbs, enter);

    var cross = new DataCard("Cross", "Traversa",
        "To cross <br> "
        + VerbTemplate("traversez", "traversezi", "traversează", "traversăm", "traversați", "traversează", "traversat", "traversa"));
    setParentAndChild(verbs, cross);
    
    var add = new DataCard("Add", "Adăuga",
        "To add <br> "
        + VerbTemplate("adaug", "adaugi", "adaugă", "adăugăm", "adăugați", "adaugă", "adăugat", "adăuga"));
    setParentAndChild(verbs, add);
    
    var recommend = new DataCard("Recommend", "Recomanda",
        "To recommend <br> "
        + VerbTemplate("recomand", "recomanzi", "recomandă", "recomandăm", "recomandați", "recomandă", "recomandat", "recomanda"));
    setParentAndChild(verbs, recommend);
    
    var turnOn = new DataCard("Turn on", "Porni",
        "To turn on <br> "
        + VerbTemplate("pornesc", "pornești", "pornește", "pornim", "porniți", "pornesc", "pornit", "porni"));
    setParentAndChild(verbs, turnOn);
    
    var takeOff = new DataCard("Take off", "Dezbrăca",
        "To take off <br> "
        + ReflexiveVerbTemplateSe("dezbrac", "dezbraci", "dezbracă", "dezbrăcăm", "dezbrăcați", "dezbracă", "dezbrăcat", "dezbrăca"));
    setParentAndChild(verbs, takeOff);
    

    // =============================================================================
    // #Prepositions
    // =============================================================================

    var prepositions = new DataCard(
        "Prepositions", "Prepoziţii",
        "")
    setParentAndChild(romanian, prepositions);

    var after = new DataCard(
        "After", "După",
        "")
    setParentAndChild(prepositions, after);

    var about = new DataCard(
        "About", "Despre",
        "")
    setParentAndChild(prepositions, about);

    var at = new DataCard(
        "At", "La",
        "")
    setParentAndChild(prepositions, at);

    var from = new DataCard(
        "From", "Din",
        "")
    setParentAndChild(prepositions, from);

    var _in = new DataCard(
        "In", "În (Înăuntru)",
        "")
    setParentAndChild(prepositions, _in);

    var _out = new DataCard("Out", "Afară", "");
    setParentAndChild(prepositions, _out)

    var on = new DataCard(
        "On", "Pe",
        "")
    setParentAndChild(prepositions, on);

    var since = new DataCard(
        "Since", "De când",
        "")
    setParentAndChild(prepositions, since);

    var until = new DataCard(
        "Until (till)", "Până (la)",
        "")
    setParentAndChild(prepositions, until);

    var above = new DataCard(
        "Above", "De mai sus",
        "")
    setParentAndChild(prepositions, above);

    var against = new DataCard(
        "Against", "Împotriva",
        "")
    setParentAndChild(prepositions, against);

    var alongSide = new DataCard(
        "Along side (next to)", "Pe langa",
        "")
    setParentAndChild(prepositions, alongSide);

    var amid = new DataCard(
        "Amid (in the middle of)", "În mijlocul",
        "")
    setParentAndChild(prepositions, amid);

    var among = new DataCard(
        "Among", "Printre",
        "")
    setParentAndChild(prepositions, among);

    var apartFrom = new DataCard(
        "Apart from", "În afară de",
        "")
    setParentAndChild(prepositions, apartFrom);

    var at = new DataCard(
        "At", "La",
        "")
    setParentAndChild(prepositions, at);

    var behind = new DataCard(
        "Behind", "In spate",
        "")
    setParentAndChild(prepositions, behind);

    var beneath = new DataCard(
        "Beneath", "Sub",
        "")
    setParentAndChild(prepositions, beneath);

    var by = new DataCard(
        "Of", "De",
        "")
    setParentAndChild(prepositions, by);

    var beside = new DataCard(
        "Beside (next to)", "Lângă",
        "")
    setParentAndChild(prepositions, beside);

    var beyond = new DataCard(
        "Beyond", "Dincolo",
        "")
    setParentAndChild(prepositions, beyond);

    var closeTo = new DataCard(
        "Close to", "Aproape de",
        "")
    setParentAndChild(prepositions, closeTo);

    var inBetween = new DataCard(
        "In between", "Între",
        "")
    setParentAndChild(prepositions, inBetween);

    var inFrontOf = new DataCard(
        "In front of", "În fața",
        "")
    setParentAndChild(prepositions, inFrontOf);

    var inside = new DataCard(
        "Inside", "Interior",
        "")
    setParentAndChild(prepositions, inside);

    var near = new DataCard(
        "Near", "Apropape",
        "")
    setParentAndChild(prepositions, near);

    var over = new DataCard(
        "Over", "Peste",
        "")
    setParentAndChild(prepositions, over);

    var towards = new DataCard(
        "Towards", "Spre",
        "")
    setParentAndChild(prepositions, towards);

    var without = new DataCard(
        "Without", "Fără",
        "")
    setParentAndChild(prepositions, without);

    var through = new DataCard(
        "Through", "Prin",
        "")
    setParentAndChild(prepositions, through);

    var together = new DataCard(
        "Together", "Impreuna",
        "")
    setParentAndChild(prepositions, together);

    var outside = new DataCard(
        "Outside", "In afara",
        "")
    setParentAndChild(prepositions, outside);

    var _with = new DataCard(
        "With", "Cu",
        "")
    setParentAndChild(prepositions, _with);

    var Top = new DataCard("Top", "De Sus", "");
    setParentAndChild(prepositions, Top)

    var Bottom = new DataCard("Bottom", "De Jos", "");
    setParentAndChild(prepositions, Bottom)

    var Left = new DataCard("Left", "La Stânga", "");
    setParentAndChild(prepositions, Left)

    var Right = new DataCard("Right", "La Dreapta", "");
    setParentAndChild(prepositions, Right)

    var High = new DataCard("High", "Sus", "");
    setParentAndChild(prepositions, High)

    var Low = new DataCard("Low", "Jos", "");
    setParentAndChild(prepositions, Low)

    var AwayFrom = new DataCard("Away From", "Departe de", "");
    setParentAndChild(prepositions, AwayFrom);

    var OppositeTo = new DataCard("Opposite To", "Peste drum de", "");
    setParentAndChild(prepositions, OppositeTo);

    var By = new DataCard("By", "De către", "");
    setParentAndChild(prepositions, By);

    var Until = new DataCard("Until", "Până când", "");
    setParentAndChild(prepositions, Until);

    var via = new DataCard("Via", "Prin", "");  
    setParentAndChild(prepositions, via);  

    var abroad = new DataCard("Abroad", "În străinătate", "");  
    setParentAndChild(prepositions, abroad);  



    // =============================================================================
    // #Adjectives
    // =============================================================================

    var adjectives = new DataCard(
        "Adjectives", "Adjective",
        "")
    setParentAndChild(romanian, adjectives);

    var who = new DataCard(
        "Who", "Cine",
        "")
    setParentAndChild(adjectives, who);

    var what = new DataCard(
        "What", "Ce",
        "")
    setParentAndChild(adjectives, what);

    var which = new DataCard(
        "Which", "Care",
        "")
    setParentAndChild(adjectives, which);

    var how = new DataCard(
        "How", "Cum",
        "")
    setParentAndChild(adjectives, how);

    // #quantities
    var quantities = new DataCard("Quantities", "Cantități", "");  
    setParentAndChild(adjectives, quantities);  

    var every = new DataCard(
        "Every", "Fiecare",
        "")
    setParentAndChild(quantities, every);

    var all = new DataCard(
        "All", "Toate",
        "")
    setParentAndChild(quantities, all);

    var some = new DataCard(
        "Some (approximately)", "Vreo",
        "")
    setParentAndChild(quantities, some);

    var full = new DataCard("Full", "Sătul", "");  
    setParentAndChild(quantities, full);  
    
    var frequent = new DataCard("Frequent", "Frecvente", "");  
    setParentAndChild(quantities, frequent);
    
    var justRight = new DataCard("Just right", "Potrivit", "");  
    setParentAndChild(quantities, justRight);  

    var sufficient = new DataCard("Sufficient", "Suficient", "");  
    setParentAndChild(quantities, sufficient);  

    var Long = new DataCard("Long", "Lung", "");
    setParentAndChild(quantities, Long)

    var Short = new DataCard("Short", "Scurt", "");
    setParentAndChild(quantities, Short)

    var Empty = new DataCard("Empty", "Gol", "");
    setParentAndChild(quantities, Empty)

    var Full = new DataCard("Full", "Plin", "");
    setParentAndChild(quantities, Full)

    var Few = new DataCard("Few", "Puține", "Puțini");
    setParentAndChild(quantities, Few)

    var Many = new DataCard("Many", "Multe", "Mulți");
    setParentAndChild(quantities, Many)

    // #descriptiveadjectives
    var DescriptiveAdjective = new DataCard("Descriptive Adjective", "Adjective Descriptive", "");
    setParentAndChild(adjectives, DescriptiveAdjective)

    var Good = new DataCard("Good", "Bine", "");
    setParentAndChild(DescriptiveAdjective, Good)

    var Bad = new DataCard("Bad", "Rău", "");
    setParentAndChild(DescriptiveAdjective, Bad)

    var Fat = new DataCard("Fat", "Gras", "");
    setParentAndChild(DescriptiveAdjective, Fat)

    var Thin = new DataCard("Thin", "Slab", "");
    setParentAndChild(DescriptiveAdjective, Thin)

    var Cold = new DataCard("Cold", "Rece", "");
    setParentAndChild(DescriptiveAdjective, Cold)

    var Hot = new DataCard("Hot", "Cald (Fierbinte)", "");
    setParentAndChild(DescriptiveAdjective, Hot)

    var HighTemperature = new DataCard("High (temperature)", "Ridicat", "");
    setParentAndChild(DescriptiveAdjective, HighTemperature);

    var LowTemperature = new DataCard("Low (temperature)", "Scăzut", "");
    setParentAndChild(DescriptiveAdjective, LowTemperature);

    var Dirty = new DataCard("Dirty", "Murdar", "");
    setParentAndChild(DescriptiveAdjective, Dirty)
    
    var Available = new DataCard("Available", "Disponibil", "");
    setParentAndChild(DescriptiveAdjective, Available);

    var Clean = new DataCard("Clean", "Curat", "");
    setParentAndChild(DescriptiveAdjective, Clean)

    var Open = new DataCard("Open", "Deschis", "");
    setParentAndChild(DescriptiveAdjective, Open)

    var Close = new DataCard("Close", "Închis", "");
    setParentAndChild(DescriptiveAdjective, Close)

    var First = new DataCard("First", "Primul", "");
    setParentAndChild(DescriptiveAdjective, First)

    var Ultimate = new DataCard("Ultimate (Last)", "Ultimul", "");
    setParentAndChild(DescriptiveAdjective, Ultimate)

    var Wet = new DataCard("Wet", "Ud (Humed)", "");
    setParentAndChild(DescriptiveAdjective, Wet)

    var Dry = new DataCard("Dry", "Uscat", "");
    setParentAndChild(DescriptiveAdjective, Dry)

    var Small = new DataCard("Small", "Mic", "");
    setParentAndChild(DescriptiveAdjective, Small)

    var Big = new DataCard("Big", "Mare", "");
    setParentAndChild(DescriptiveAdjective, Big)

    var New = new DataCard("New", "Nou", "");
    setParentAndChild(DescriptiveAdjective, New)

    var Old = new DataCard("Old", "Vechi", "");
    setParentAndChild(DescriptiveAdjective, Old)

    var Easy = new DataCard("Easy", "Ușor", "");
    setParentAndChild(DescriptiveAdjective, Easy)

    var Difficult = new DataCard("Difficult", "Greu", "");
    setParentAndChild(DescriptiveAdjective, Difficult)

    var Soft = new DataCard("Soft", "Moale", "");
    setParentAndChild(DescriptiveAdjective, Soft)

    var Hard = new DataCard("Hard", "Tare", "");
    setParentAndChild(DescriptiveAdjective, Hard)

    var Slow = new DataCard("Slow", "Încet", "");
    setParentAndChild(DescriptiveAdjective, Slow)

    var Fast = new DataCard("Fast", "Repede", "");
    setParentAndChild(DescriptiveAdjective, Fast)

    var Dead = new DataCard("Dead (Wilted)", "Ofilit (Uscat)", "");
    setParentAndChild(DescriptiveAdjective, Dead)

    var Alive = new DataCard("Alive", "Viu", "");
    setParentAndChild(DescriptiveAdjective, Alive)

    var True_ = new DataCard("True", "Adevărat", "");
    setParentAndChild(DescriptiveAdjective, True_)

    var False_ = new DataCard("False", "Fals", "");
    setParentAndChild(DescriptiveAdjective, False_)

    var Smooth = new DataCard("Smooth", "Neted", "");
    setParentAndChild(DescriptiveAdjective, Smooth);

    var Rough = new DataCard("Rough", "Brut", "");
    setParentAndChild(DescriptiveAdjective, Rough);

    var sure = new DataCard(
        "Sure", "Sigur",
        "")
    setParentAndChild(DescriptiveAdjective, sure);

    var Loose = new DataCard("Loose", "Larg", "");
    setParentAndChild(DescriptiveAdjective, Loose);

    var Tight = new DataCard("Tight", "Strâmt", "");
    setParentAndChild(DescriptiveAdjective, Tight);

    // #flavours
    var flavours = new DataCard("Flavours", "Arome", "");  
    setParentAndChild(adjectives, flavours);  

    var sweet = new DataCard("Sweet", "Dulce", "");  
    setParentAndChild(flavours, sweet);  
    
    var sour = new DataCard("Sour", "Acru", "");  
    setParentAndChild(flavours, sour);  
    
    var salty = new DataCard("Salty", "Sărat", "");  
    setParentAndChild(flavours, salty);  
    
    var spicy = new DataCard("Spicy", "Picant", "");  
    setParentAndChild(flavours, spicy);  
    
    var bitter = new DataCard("Bitter", "Amar", "");  
    setParentAndChild(flavours, bitter);  
    
    var delicious = new DataCard("Delicious", "Delicios", "");  
    setParentAndChild(flavours, delicious);  
     
    var Fragrant = new DataCard("Fragrant", "Aromat", "");
    setParentAndChild(flavours, Fragrant);

    // #AboutPeople =======================================
    var aboutPeople = new DataCard("About People", "Despre oameni", "");  
    setParentAndChild(adjectives, aboutPeople);  
    
    var hungry = new DataCard("Hungry", "Înfometat", "");  
    setParentAndChild(aboutPeople, hungry);  

    var allergic = new DataCard("Allergic", "Alergic", "");  
    setParentAndChild(aboutPeople, allergic);  

    var strict = new DataCard("Strict", "Strict", "");  
    setParentAndChild(aboutPeople, strict);  

    var sad = new DataCard("Sad", "Trist", "");  
    setParentAndChild(aboutPeople, sad);  

    var amusing = new DataCard("Amusing (funny)", "Amuzant", "");  
    setParentAndChild(aboutPeople, amusing);  

    var boring = new DataCard("Boring", "Plictisitor", "");  
    setParentAndChild(aboutPeople, boring);  

    var interesting = new DataCard("Interesting", "Interesant", "");  
    setParentAndChild(aboutPeople, interesting);  

    var romantic = new DataCard("Romantic", "Romantic", "");  
    setParentAndChild(aboutPeople, romantic);  

    var dangerous = new DataCard("Dangerous", "Periculos", "");  
    setParentAndChild(aboutPeople, dangerous);  
    
    var strange = new DataCard("Strange", "Ciudat", "");  
    setParentAndChild(aboutPeople, strange);  

    var muscular = new DataCard("Muscular", "Musculos", "");  
    setParentAndChild(aboutPeople, muscular);  

    var crazy = new DataCard("Crazy", "Nebun", "");  
    setParentAndChild(aboutPeople, crazy);  

    var busy = new DataCard("Busy (occupied)", "Ocupat", "");  
    setParentAndChild(aboutPeople, busy);  

    var cool = new DataCard("Cool (today is cool)", "Răcore", "");  
    setParentAndChild(aboutPeople, cool);  

    var missing = new DataCard("Missing", "Dispărut", "");  
    setParentAndChild(aboutPeople, missing);  

    var alone = new DataCard("Alone", "Singur", "");  
    setParentAndChild(aboutPeople, alone);  

    var Shy = new DataCard("Shy", "Rușinos", "");
    setParentAndChild(aboutPeople, Shy);

    var Lucky = new DataCard("Lucky", "Norocos", "");
    setParentAndChild(aboutPeople, Lucky);

    var Handsome = new DataCard("Handsome", "Chipeș", "");
    setParentAndChild(aboutPeople, Handsome);

    var Bored = new DataCard("Bored", "Plictisit", "");
    setParentAndChild(aboutPeople, Bored);

    var Thirsty = new DataCard("Thirsty", "Însetat", "");
    setParentAndChild(aboutPeople, Thirsty);

    var Sick = new DataCard("Sick", "Bolnav", "");
    setParentAndChild(aboutPeople, Sick);

    var Sunny = new DataCard("Sunny", "Însorit", "");
    setParentAndChild(aboutPeople, Sunny);

    var Cheerful = new DataCard("Cheerful", "Vesel", "");
    setParentAndChild(aboutPeople, Cheerful);

    var Smart = new DataCard("Smart", "Inteligent", "");
    setParentAndChild(aboutPeople, Smart);

    var Muscular = new DataCard("Muscular", "Musculos", "");
    setParentAndChild(aboutPeople, Muscular);

    var Curly = new DataCard("Curly", "Creț", "");
    setParentAndChild(aboutPeople, Curly);

    var Foreign = new DataCard("Foreign", "Străine", "");
    setParentAndChild(aboutPeople, Foreign);


    // #Colours =======================================
    var colours = new DataCard(
        "Colours", "Culorile",
        "")
    setParentAndChild(adjectives, colours);

    var brown = new DataCard("Brown", "Maro", "")
    setParentAndChild(colours, brown);

    var white = new DataCard("White", "Alb", "")
    setParentAndChild(colours, white);

    var Brown = new DataCard("Brown", "Căprui", "");
    setParentAndChild(colours, Brown);

    var blue = new DataCard("Blue", "Albastru", "")
    setParentAndChild(colours, blue);

    var black = new DataCard("Black", "Negru", "")
    setParentAndChild(colours, black);

    var orange = new DataCard("Orange", "Portocaliu", "")
    setParentAndChild(colours, orange);

    var grey = new DataCard("Grey", "Gri", "")
    setParentAndChild(colours, grey);

    var green = new DataCard("Green", "Verde", "")
    setParentAndChild(colours, green);

    var red = new DataCard("Red", "Roșu", "")
    setParentAndChild(colours, red);

    var purple = new DataCard("Purple", "Mov", "")
    setParentAndChild(colours, purple);

    var yellow = new DataCard("Yellow", "Galben", "")
    setParentAndChild(colours, yellow);
    
    var bright = new DataCard("Bright", "Strălucitor", "");  
    setParentAndChild(colours, bright);

    var blonde = new DataCard("Blonde", "Blond", "");  
    setParentAndChild(colours, blonde);  

    var Dark = new DataCard("Dark", "Întunecos", "");
    setParentAndChild(colours, Dark)

    var Light = new DataCard("Light", "Luminos", "");
    setParentAndChild(colours, Light)

    var gold = new DataCard("Gold", "Aur", "");  
    setParentAndChild(colours, gold);  


    // =============================================================================
    // #Nouns
    // =============================================================================

    var nouns = new DataCard(
        "Nouns", "Substantive",
        "Todo")
    setParentAndChild(romanian, nouns);

    //#thecircus
    var TheCircus = new DataCard("The Circus", "Circul", "");
    setParentAndChild(nouns, TheCircus)

    var Unicyclist = new DataCard("Unicyclist", "Acrobat pe Bicicletă", "");
    setParentAndChild(TheCircus, Unicyclist)

    var Trapeze = new DataCard("Trapeze", "Trapez", "");
    setParentAndChild(TheCircus, Trapeze)

    var TightropeWalked = new DataCard("Tightrope Walked", "Echilibrist", "");
    setParentAndChild(TheCircus, TightropeWalked)

    var Pole = new DataCard("Pole", "Prăjină", "");
    setParentAndChild(TheCircus, Pole)

    var RopeLadder = new DataCard("Rope Ladder", "Scară de Frânghie", "");
    setParentAndChild(TheCircus, RopeLadder)

    var Acrobats = new DataCard("Acrobats", "Acrobați", "");
    setParentAndChild(TheCircus, Acrobats)

    var Juggler = new DataCard("Juggler", "Jongler", "");
    setParentAndChild(TheCircus, Juggler)

    var Ringmaster = new DataCard("Ringmaster", "Maestru de Manej", "");
    setParentAndChild(TheCircus, Ringmaster)

    var TopHat = new DataCard("TopHat", "Joben", "");
    setParentAndChild(TheCircus, TopHat)

    var BowTieClown = new DataCard("Bowtie (Clown)", "Papion de Clovn", "");
    setParentAndChild(TheCircus, BowTieClown)

    var Clown = new DataCard("Clown", "Clovn", "");
    setParentAndChild(TheCircus, Clown)

    var Band = new DataCard("Band", "Orchestră", "");
    setParentAndChild(TheCircus, Band)

    var TheFairground = new DataCard("The Fairground", "Parcul de Distractții", "");
    setParentAndChild(TheCircus, TheFairground)

    var BigWheel = new DataCard("Big Wheel", "Roată Panoramică", "");
    setParentAndChild(TheCircus, BigWheel)

    var Carousel = new DataCard("Carousel", "Carusel", "");
    setParentAndChild(TheCircus, Carousel)

    var CandyFloss = new DataCard("Candy Floss", "Vată pe Băț", "");
    setParentAndChild(TheCircus, CandyFloss)

    var Popcorn = new DataCard("Popcorn", "Pop-corn (Floricele de Porumb)", "");
    setParentAndChild(TheCircus, Popcorn)

    var RollerCoaster = new DataCard("Roller Coaster", "Montagnes Russes", "");
    setParentAndChild(TheCircus, RollerCoaster)

    var GhostTrain = new DataCard("Ghost Train", "Tren Fantomă", "");
    setParentAndChild(TheCircus, GhostTrain)

    var HelterSkelter = new DataCard("Helter Skelter", "Tobogan Uriaș (Spirală)", "");
    setParentAndChild(TheCircus, HelterSkelter)

    var Dodgems = new DataCard("Dodgems (Bumper Cars)", "Mașinuțe Bușitoare", "");
    setParentAndChild(TheCircus, Dodgems)


    //#sports
    var Sports = new DataCard("Sports", "Sporturile", "");
    setParentAndChild(nouns, Sports)

    var Ball = new DataCard("Ball", "Minge", "");
    setParentAndChild(Sports, Ball)

    var Basketball = new DataCard("Basketball", "Baschet", "");
    setParentAndChild(Sports, Basketball)

    var Rowing = new DataCard("Rowing", "Canotaj", "");
    setParentAndChild(Sports, Rowing)

    var Sail = new DataCard("Sail", "Velă", "");
    setParentAndChild(Sports, Sail)

    var Snowboarding = new DataCard("Snowboarding", "Snowboarding", "");
    setParentAndChild(Sports, Snowboarding)

    var Sailing = new DataCard("Sailing", "Navigație de Agrement", "");
    setParentAndChild(Sports, Sailing)

    var Windsurfing = new DataCard("Windsurfing", "Windsurfing", "");
    setParentAndChild(Sports, Windsurfing)

    var Tennis = new DataCard("Tennis", "Tenis", "");
    setParentAndChild(Sports, Tennis)

    var FishingRod = new DataCard("Fishing Rod", "Undiță de Pescuit", "");
    setParentAndChild(Sports, FishingRod)

    var Fishing = new DataCard("Fishing", "Pescuit", "");
    setParentAndChild(Sports, Fishing)

    var AmericanFootball = new DataCard("American Football", "Fotbal American", "");
    setParentAndChild(Sports, AmericanFootball)

    var Gymnastics = new DataCard("Gymnastics", "Gimnastică", "");
    setParentAndChild(Sports, Gymnastics)

    var Cricket = new DataCard("Cricket", "Crichet", "");
    setParentAndChild(Sports, Cricket)

    var Karate = new DataCard("Karate", "Karate", "");
    setParentAndChild(Sports, Karate)

    var BaseballBat = new DataCard("Baseball Bat", "Bâtă de Baseball", "");
    setParentAndChild(Sports, BaseballBat)

    var Dance = new DataCard("Dance", "Dans", "");
    setParentAndChild(Sports, Dance)

    var Baseball = new DataCard("Baseball", "Baseball", "");
    setParentAndChild(Sports, Baseball)

    var Bait = new DataCard("Bait", "Momeală", "");
    setParentAndChild(Sports, Bait)

    var Diving = new DataCard("Diving", "Săritură în apă", "");
    setParentAndChild(Sports, Diving)

    var SwimmingPool = new DataCard("Swimming Pool", "Piscină", "");
    setParentAndChild(Sports, SwimmingPool)

    var Rugby = new DataCard("Rugby", "Rugby", "");
    setParentAndChild(Sports, Rugby)

    var Swimming = new DataCard("Swimming", "Înot (Natație)", "");
    setParentAndChild(Sports, Swimming)

    var Race = new DataCard("Race", "Cursă (Întrecere)", "");
    setParentAndChild(Sports, Race)

    var Archery = new DataCard("Archery", "Tir cu Arcul", "");
    setParentAndChild(Sports, Archery)

    var Target = new DataCard("Target", "Țintă", "");
    setParentAndChild(Sports, Target)

    var HandGliding = new DataCard("Hand Gliding", "Zbor cu Deltaplanul", "");
    setParentAndChild(Sports, HandGliding)

    var Helmet = new DataCard("Helmet", "Cască", "");
    setParentAndChild(Sports, Helmet)

    var Jogging = new DataCard("Jogging", "Jogging (Alergare)", "");
    setParentAndChild(Sports, Jogging)

    var Judo = new DataCard("Judo", "Judo", "");
    setParentAndChild(Sports, Judo)

    var Football = new DataCard("Football", "Fotbal", "");
    setParentAndChild(Sports, Football)

    var Badminton = new DataCard("Badminton", "Badminton", "");
    setParentAndChild(Sports, Badminton)

    var TableTennis = new DataCard("Table Tennis", "Tenis de Masă (Ping Pong)", "");
    setParentAndChild(Sports, TableTennis)

    var HorseRiding = new DataCard("Horse Riding", "Echitație", "");
    setParentAndChild(Sports, HorseRiding)

    var Climbing = new DataCard("Climbing", "Escaladare Cățărare", "");
    setParentAndChild(Sports, Climbing)

    var Locker = new DataCard("Locker", "Casetă (de dulap)", "");
    setParentAndChild(Sports, Locker)

    var ChangingRoom = new DataCard("Changing Room", "Vestiar", "");
    setParentAndChild(Sports, ChangingRoom)

    var IceSkates = new DataCard("Ice Skates", "Patine", "");
    setParentAndChild(Sports, IceSkates)

    var IceSkating = new DataCard("Ice Skating", "Patinaj", "");
    setParentAndChild(Sports, IceSkating)

    var SumoWrestling = new DataCard("Sumo Wrestling", "Sumo", "");
    setParentAndChild(Sports, SumoWrestling)

    var Ski = new DataCard("Ski", "Schiuri", "");
    setParentAndChild(Sports, Ski)

    var Skiing = new DataCard("Skiing", "Schi", "");
    setParentAndChild(Sports, Skiing)

    //#Days #week #time
    var Time = new DataCard("Time", "Timp", "");
    setParentAndChild(nouns, Time)

    // #relativeTime
    var RelativeTime = new DataCard("Relative Time", "Timp Relativ", "");
    setParentAndChild(Time, RelativeTime)

    var Next = new DataCard("Next", "Următorul", "");
    setParentAndChild(RelativeTime, Next)

    var Last = new DataCard("Last", "Trecut", "");
    setParentAndChild(RelativeTime, Last)

    var LastYear = new DataCard("Last Year", "Anul trecut", "");
    setParentAndChild(RelativeTime, LastYear)

    var NextYear = new DataCard("Next year", "Anul Urmator", "");
    setParentAndChild(RelativeTime, NextYear)

    var Tomorrow = new DataCard("Tomorrow", "Mâine", "");
    setParentAndChild(RelativeTime, Tomorrow)

    var DayAfterTomorrow = new DataCard("The day after tomorrow", "Poimâine", "");
    setParentAndChild(RelativeTime, DayAfterTomorrow)

    var Yesterday = new DataCard("Yesterday", "Ieri", "");
    setParentAndChild(RelativeTime, Yesterday)

    var DayBeforeYesterday = new DataCard("The day before yesterday", "Alaltaieri", "");
    setParentAndChild(RelativeTime, DayBeforeYesterday)

    var Later = new DataCard("Late (later)", "(Mai) Târziu", "");
    setParentAndChild(RelativeTime, Later)

    var lastYear = new DataCard("Last year", "Anul trecut", "");  
    setParentAndChild(RelativeTime, lastYear);  

    var last = new DataCard("Last", "Trecut / Trecută", "");  
    setParentAndChild(RelativeTime, last);  

    var afternoon = new DataCard("Afternoon", "După amiază", "");  
    setParentAndChild(RelativeTime, afternoon);  

    var inTheFuture = new DataCard("In the future", "În viitor", "");  
    setParentAndChild(RelativeTime, inTheFuture);  

    var quarterTo = new DataCard("Quarter to", "Fără un sfert", "");  
    setParentAndChild(RelativeTime, quarterTo);  


    // #seasons
    var TheMonths = new DataCard("The Months", "Lunii", "");  
    setParentAndChild(Time, TheMonths);  

    var january = new DataCard("January", "Ianuarie", "");  
    setParentAndChild(TheMonths, january);  

    var february = new DataCard("February", "Februarie", "");  
    setParentAndChild(TheMonths, february);  

    var march = new DataCard("March", "Martie", "");  
    setParentAndChild(TheMonths, march);  

    var april = new DataCard("April", "Aprilie", "");  
    setParentAndChild(TheMonths, april);  

    var may = new DataCard("May", "Mai", "");  
    setParentAndChild(TheMonths, may);  

    var june = new DataCard("June", "Iunie", "");  
    setParentAndChild(TheMonths, june);  

    var july = new DataCard("July", "Iulie", "");  
    setParentAndChild(TheMonths, july);  

    var august = new DataCard("August", "August", "");  
    setParentAndChild(TheMonths, august);  

    var september = new DataCard("September", "Septembrie", "");  
    setParentAndChild(TheMonths, september);  

    var october = new DataCard("October", "Octombrie", "");  
    setParentAndChild(TheMonths, october);  

    var november = new DataCard("November", "Noiembrie", "");  
    setParentAndChild(TheMonths, november);  

    var december = new DataCard("December", "Decembrie", "");  
    setParentAndChild(TheMonths, december);  


    // #seasons
    var Seasons = new DataCard("Seasons", "Anotimpurile", "");
    setParentAndChild(Time, Seasons)

    var Spring = new DataCard("Spring", "Primăvară", "");
    setParentAndChild(Seasons, Spring)

    var Autumn = new DataCard("Autumn", "Toamnă", "");
    setParentAndChild(Seasons, Autumn)

    var Summer = new DataCard("Summer", "Vară", "");
    setParentAndChild(Seasons, Summer)

    var Winter = new DataCard("Winter", "Iarnă", "");
    setParentAndChild(Seasons, Winter)

    // #weather
    var Weather = new DataCard("The Weather", "Vremea", "");
    setParentAndChild(Time, Weather)

    var Rain = new DataCard("Rain", "Ploaie", "");
    setParentAndChild(Weather, Rain)

    var Wind = new DataCard("Wind", "Vânt", "");
    setParentAndChild(Weather, Wind)

    var Lighting = new DataCard("Lighting", "Fulger", "");
    setParentAndChild(Weather, Lighting)

    var Mist = new DataCard("Mist", "Pâclă", "");
    setParentAndChild(Weather, Mist)

    var Fog = new DataCard("Fog", "Ceață", "");
    setParentAndChild(Weather, Fog)

    var Snow = new DataCard("Snow", "Zăpadă", "");
    setParentAndChild(Weather, Snow)

    var Frost = new DataCard("Frost", "Chiciură (Ger)", "");
    setParentAndChild(Weather, Frost)

    var Clouds = new DataCard("Clouds", "Nori", "");
    setParentAndChild(Weather, Clouds)

    var Sky = new DataCard("Sky", "Cer", "");
    setParentAndChild(Weather, Sky)

    var Dew = new DataCard("Dew", "Rouă", "");
    setParentAndChild(Weather, Dew)

    var Rainbow = new DataCard("Rainbow", "Curcubeu", "");
    setParentAndChild(Weather, Rainbow)

    var Flood = new DataCard("Flood", "Inundație", ""); 
    setParentAndChild(Weather, Flood);

    var Hurricane = new DataCard("Hurricane", "Uragan", ""); 
    setParentAndChild(Weather, Hurricane);

    var MudSlide = new DataCard("Mud Slide", "Alunecare de teren", ""); 
    setParentAndChild(Weather, MudSlide);

    var Earthquake = new DataCard("Earthquake", "Cutremur", ""); 
    setParentAndChild(Weather, Earthquake);

    var Snow = new DataCard("Snow", "Ninsoarea", ""); 
    setParentAndChild(Weather, Snow);

    var SnowStorm = new DataCard("Snow Storm", "Viscol", ""); 
    setParentAndChild(Weather, SnowStorm);

    var Typhoon = new DataCard("Typhoon", "Taifun", ""); 
    setParentAndChild(Weather, Typhoon);

    var ForestFire = new DataCard("Forest Fire", "Incendiu de pădure", ""); 
    setParentAndChild(Weather, ForestFire);

    // #specialdays #holidays
    var SpecialDays = new DataCard("Special Days", "Zile de Sărbătoare", "");
    setParentAndChild(Time, SpecialDays)
 
    var Birthday = new DataCard("Birthday", "Zi de Naștere", "");
    setParentAndChild(SpecialDays, Birthday)

    var BirthdayCard = new DataCard("Birthday Card", "Felicitare", "");
    setParentAndChild(SpecialDays, BirthdayCard)
    
    var romanticDate = new DataCard("Date (romantic date)", "Întâlnire", "");  
    setParentAndChild(SpecialDays, romanticDate);  

    var valentinesDay = new DataCard("Valentine's Day", "Ziua Îndrăgostiților", "");  
    setParentAndChild(SpecialDays, valentinesDay);  

    var weddingRing = new DataCard("Wedding ring", "Verighetă", "");  
    setParentAndChild(SpecialDays, weddingRing);  

    var weddingCake = new DataCard("Wedding cake", "Tort de nuntă", "");  
    setParentAndChild(SpecialDays, weddingCake);  

    var anniversary = new DataCard("Anniversary", "Aniversare", "");  
    setParentAndChild(SpecialDays, anniversary);  

    var birthday = new DataCard("Birthday", "Zi de naștere", "");  
    setParentAndChild(SpecialDays, birthday);  

    var date = new DataCard("Date", "Data", "");  
    setParentAndChild(SpecialDays, date);  

    var angel = new DataCard("Angel", "Înger", "");  
    setParentAndChild(SpecialDays, angel);  

    var bouquetOfFlowers = new DataCard("Bouquet of flowers", "Buchet de flori", "");  
    setParentAndChild(SpecialDays, bouquetOfFlowers);  

    var Holiday = new DataCard("Holiday", "Vacanță", "");
    setParentAndChild(SpecialDays, Holiday)

    var WeddingDay = new DataCard("Wedding Day", "Ziua Nunții", "");
    setParentAndChild(SpecialDays, WeddingDay)

    var Guests = new DataCard("Guests", "Invitați", "");
    setParentAndChild(WeddingDay, Guests)

    var Bridesmaid = new DataCard("Bridesmaid", "Domnișoară de Onoare", "");
    setParentAndChild(WeddingDay, Bridesmaid)

    var Bride = new DataCard("Bride", "Mireasă", "");
    setParentAndChild(WeddingDay, Bride)

    var Bridegroom = new DataCard("Bridegroom (Groom)", "Mire", "");
    setParentAndChild(WeddingDay, Bridegroom)

    var ChristmasDay = new DataCard("Christmas Day", "Ziua de Crăciun", "");
    setParentAndChild(SpecialDays, ChristmasDay)

    var FatherChristmas = new DataCard("Father Christmas", "Moș Crăciun", "");
    setParentAndChild(ChristmasDay, FatherChristmas)

    var Sleigh = new DataCard("Sleigh", "Sanie", "");
    setParentAndChild(ChristmasDay, Sleigh)

    var ChristmasTree = new DataCard("Christmas Tree", "Brad de Crăciun", "");
    setParentAndChild(ChristmasDay, ChristmasTree)

    var Reindeer = new DataCard("Reindeer", "Ren", "");
    setParentAndChild(ChristmasDay, Reindeer)

    var Camera = new DataCard("Camera", "Aparat de Fotografiat", "");
    setParentAndChild(SpecialDays, Camera)

    //#days
    var DaysOfTheWeek = new DataCard("Days (Of The Week)", "Zilele (Săptămânii)", "");
    setParentAndChild(Time, DaysOfTheWeek)

    var Morning = new DataCard("Morning", "Dimineață", "");
    setParentAndChild(DaysOfTheWeek, Morning)

    var Sun = new DataCard("Sun", "Soare", "");
    setParentAndChild(DaysOfTheWeek, Sun)

    var Evening = new DataCard("Evening", "Seară", "");
    setParentAndChild(DaysOfTheWeek, Evening)

    var Night = new DataCard("Night", "Noapte", "");
    setParentAndChild(DaysOfTheWeek, Night)

    var Monday = new DataCard("Monday", "Luni", "");
    setParentAndChild(DaysOfTheWeek, Monday)

    var Tuesday = new DataCard("Tuesday", "Marți", "");
    setParentAndChild(DaysOfTheWeek, Tuesday)

    var Wednesday = new DataCard("Wednesday", "Miercuri", "");
    setParentAndChild(DaysOfTheWeek, Wednesday)

    var Thursday = new DataCard("Thursday", "Joi", "");
    setParentAndChild(DaysOfTheWeek, Thursday)

    var Friday = new DataCard("Friday", "Vineri", "");
    setParentAndChild(DaysOfTheWeek, Friday)

    var Saturday = new DataCard("Saturday", "Sâmbătă", "");
    setParentAndChild(DaysOfTheWeek, Saturday)

    var Sunday = new DataCard("Sunday", "Duminică", "");
    setParentAndChild(DaysOfTheWeek, Sunday)

    var Calendar = new DataCard("Calendar", "Calendar", "");
    setParentAndChild(DaysOfTheWeek, Calendar)

    // #Measurements
    var Measurements = new DataCard("Measurements", "Măsurători", ""); 
    setParentAndChild(nouns, Measurements);
    
    var Size = new DataCard("Size", "Mărime", ""); 
    setParentAndChild(Measurements, Size);

    var Meter = new DataCard("Meter", "Metru", ""); 
    setParentAndChild(Measurements, Meter);

    var diameter = new DataCard("Diameter", "Diametru", "");  
    setParentAndChild(Measurements, diameter);  

    var Centimeter = new DataCard("Centimeter", "Centimetru", ""); 
    setParentAndChild(Measurements, Centimeter);

    var Kilometer = new DataCard("Kilometer", "Kilometru", ""); 
    setParentAndChild(Measurements, Kilometer);

    var Gram = new DataCard("Gram", "Gram", ""); 
    setParentAndChild(Measurements, Gram);

    var size = new DataCard("Size", "Mărime", "");  
    setParentAndChild(Measurements, size); 

    var Kilogram = new DataCard("Kilogram", "Kilogram", ""); 
    setParentAndChild(Measurements, Kilogram);

    var Liter = new DataCard("Liter", "Litrul", ""); 
    setParentAndChild(Measurements, Liter);

    var Milliliter = new DataCard("Milliliter", "Mililitru", ""); 
    setParentAndChild(Measurements, Milliliter);

    var Celsius = new DataCard("Celsius", "Celsius", ""); 
    setParentAndChild(Measurements, Celsius);

    var Fahrenheit = new DataCard("Fahrenheit", "Fahrenheit", ""); 
    setParentAndChild(Measurements, Fahrenheit);

    var Second = new DataCard("Second", "Secundă", ""); 
    setParentAndChild(Measurements, Second);

    var Minute = new DataCard("Minute", "Minut", ""); 
    setParentAndChild(Measurements, Minute);

    var Hour = new DataCard("Hour", "Oră", ""); 
    setParentAndChild(Measurements, Hour);

    var Kilowatt = new DataCard("Kilowatt", "Kilowatt", ""); 
    setParentAndChild(Measurements, Kilowatt);

    var Watt = new DataCard("Watt", "Watt", ""); 
    setParentAndChild(Measurements, Watt);

    var Pound = new DataCard("Pound", "Libră", ""); 
    setParentAndChild(Measurements, Pound);

    var Ounce = new DataCard("Ounce", "Uncie", ""); 
    setParentAndChild(Measurements, Ounce);

    // #misc nouns
    var miscellaneous = new DataCard("Miscellaneous", "Diverse", "");  
    setParentAndChild(nouns, miscellaneous);  

    var opinion = new DataCard("Opinion", "Opinie", "");  
    setParentAndChild(miscellaneous, opinion);  

    var comedy = new DataCard("Comedy", "Comedie", "");  
    setParentAndChild(miscellaneous, comedy);  

    var song = new DataCard("Song (piece)", "Piesă", "");  
    setParentAndChild(miscellaneous, song);  

    var war = new DataCard("War", "Război", "");  
    setParentAndChild(miscellaneous, war);  

    var novel = new DataCard("Novel", "Roman", "");  
    setParentAndChild(miscellaneous, novel);  

    var affair = new DataCard("Affair", "Aventură amoroasă", "");  
    setParentAndChild(miscellaneous, affair);  

    var profile = new DataCard("Profile", "Profil", "");  
    setParentAndChild(miscellaneous, profile);  

    var promise = new DataCard("Promise", "Promisiune", "");  
    setParentAndChild(miscellaneous, promise);  

    var chance = new DataCard("Chance", "Șansă", "");  
    setParentAndChild(miscellaneous, chance);  

    var reason = new DataCard("Reason", "Motiv", "");  
    setParentAndChild(miscellaneous, reason);  

    var freezing = new DataCard("Freezing", "Ger", "");  
    setParentAndChild(miscellaneous, freezing);  

    var appearance = new DataCard("Appearance", "Aspect", "");  
    setParentAndChild(miscellaneous, appearance);  

    var hurry = new DataCard("Hurry", "Grabă", "");  
    setParentAndChild(miscellaneous, hurry);  

    var purpose = new DataCard("Purpose", "Scop", "");  
    setParentAndChild(miscellaneous, purpose);  

    var intention = new DataCard("Intention (purpose)", "Intenție", "");  
    setParentAndChild(miscellaneous, intention);  

    var theTruth = new DataCard("The truth", "Adevărul", "");  
    setParentAndChild(miscellaneous, theTruth); 

    // # space
    var Space = new DataCard("Space", "Spațiu", "");
    setParentAndChild(nouns, Space)

    var Planet = new DataCard("Planet", "Planetă", "");
    setParentAndChild(Space, Planet)

    var Moon = new DataCard("Month (Moon)", "Lună", "");
    setParentAndChild(Space, Moon)

    var Star = new DataCard("Star", "Stea", "");
    setParentAndChild(Space, Star)

    var Telescope = new DataCard("Telescope", "Telescop", "");
    setParentAndChild(Space, Telescope)

    var Orbit = new DataCard("Orbit", "Orbită", ""); 
    setParentAndChild(Space, Orbit);

    var Galaxy = new DataCard("Galaxy", "Galaxie", ""); 
    setParentAndChild(Space, Galaxy);

    var Universe = new DataCard("Universe", "Univers", ""); 
    setParentAndChild(Space, Universe);

    var Satellite = new DataCard("Satellite", "Satelit", ""); 
    setParentAndChild(Space, Satellite);

    var Spaceship = new DataCard("Spaceship", "Navă spațială", ""); 
    setParentAndChild(Space, Spaceship);

    var SolarSystem = new DataCard("Solar System", "Sistem solar", ""); 
    setParentAndChild(Space, SolarSystem);

    var SolarEclipse = new DataCard("Solar Eclipse", "Eclipsă de soare", ""); 
    setParentAndChild(Space, SolarEclipse);

    var FullMoon = new DataCard("Full Moon", "Lună plină", ""); 
    setParentAndChild(Space, FullMoon);

    var Atmosphere = new DataCard("Atmosphere", "Atmosferă", ""); 
    setParentAndChild(Space, Atmosphere);

    var LunarEclipse = new DataCard("Lunar Eclipse", "Eclipsă de lună", ""); 
    setParentAndChild(Space, LunarEclipse);

    var Astronaut = new DataCard("Astronaut", "Astronaut", ""); 
    setParentAndChild(Space, Astronaut);

    var Rocket = new DataCard("Rocket", "Rachetă", ""); 
    setParentAndChild(Space, Rocket);

    var Meteor = new DataCard("Meteor", "Meteor", ""); 
    setParentAndChild(Space, Meteor);

    var Moon = new DataCard("Moon", "Lună", ""); 
    setParentAndChild(Space, Moon);

    var Extraterrestrial = new DataCard("Extraterrestrial", "Extraterestru", ""); 
    setParentAndChild(Space, Extraterrestrial);


    // #school #atschool
    var AtSchool = new DataCard("At School", "La Şcoală", "");
    setParentAndChild(nouns, AtSchool)

    var Scissors = new DataCard("Scissors", "Foarfecă", "");
    setParentAndChild(AtSchool, Scissors)

    var Sums = new DataCard("Sums", "Calcule", "");
    setParentAndChild(AtSchool, Sums)

    var Rubber = new DataCard("Rubber", "Gumă", "");
    setParentAndChild(AtSchool, Rubber)

    var Ruler = new DataCard("Ruler", "Riglă (Linie)", "");
    setParentAndChild(AtSchool, Ruler)

    var Photographs = new DataCard("Photographs", "Fotografii", "");
    setParentAndChild(AtSchool, Photographs)

    var FeltTipPen = new DataCard("Felt Tip Pen", "Carioci", "");
    setParentAndChild(AtSchool, FeltTipPen)

    var Clay = new DataCard("Clay", "Lut", "");
    setParentAndChild(AtSchool, Clay)

    var Pencil = new DataCard("Pencil", "Creion", "");
    setParentAndChild(AtSchool, Pencil)

    var Desk = new DataCard("Desk", "Bancă (Catedră)", "");
    setParentAndChild(AtSchool, Desk)

    var Books = new DataCard("Books", "Cărți", "");
    setParentAndChild(AtSchool, Books)

    var Pen = new DataCard("Pen", "Stilou", "");
    setParentAndChild(AtSchool, Pen)

    var Glue = new DataCard("Glue", "Lipici", "");
    setParentAndChild(AtSchool, Glue)

    var Chalk = new DataCard("Chalk", "Cretă", "");
    setParentAndChild(AtSchool, Chalk)

    var Drawing = new DataCard("Drawing", "Desen", "");
    setParentAndChild(AtSchool, Drawing)

    var Board = new DataCard("Board", "Tablă", "");
    setParentAndChild(AtSchool, Board)

    var DoorHandle = new DataCard("Door Handle", "Clanță", "");
    setParentAndChild(AtSchool, DoorHandle)

    var Plant = new DataCard("Plant", "Plantă", "");
    setParentAndChild(AtSchool, Plant)

    var Globe = new DataCard("Globe", "Glob", "");
    setParentAndChild(AtSchool, Globe)

    var Crayons = new DataCard("Crayons", "Creioane (Cerate)", "");
    setParentAndChild(AtSchool, Crayons)

    var Easel = new DataCard("Easel", "Şevalet", "");
    setParentAndChild(AtSchool, Easel)

    var BlindCurtain = new DataCard("Blind (Curtain)", "Jaluzea (Stor)", "");
    setParentAndChild(AtSchool, BlindCurtain)

    var Paper = new DataCard("Paper", "Hârtie", "");
    setParentAndChild(AtSchool, Paper)

    var Alphabet = new DataCard("Alphabet", "Alfabet", "");
    setParentAndChild(AtSchool, Alphabet)

    var Notebook = new DataCard("Notebook", "Caiet", "");
    setParentAndChild(AtSchool, Notebook)

    var paintBrush = new DataCard("Paint Brush", "Pensulă", "");
    setParentAndChild(AtSchool, paintBrush)

    var Map_ = new DataCard("Map", "Hartă", "");
    setParentAndChild(AtSchool, Map_)

    var Box = new DataCard("Box", "Cutie", "");
    setParentAndChild(AtSchool, Box)

    var Aquarium = new DataCard("Aquarium", "Acvariu", "");
    setParentAndChild(AtSchool, Aquarium)

    var Badge = new DataCard("Badge", "Insignă", "");
    setParentAndChild(AtSchool, Badge)

    var WastePaperBin = new DataCard("Waste Paper Bin", "Coș de Hârtii", "");
    setParentAndChild(AtSchool, WastePaperBin)

    // #emergency services
    var TheEmergencyServices = new DataCard("The Emergency Services", "Serviciile de Urgență", ""); 
    setParentAndChild(nouns, TheEmergencyServices)

    // #police #thepoliec
    var ThePolice = new DataCard("The Police", "Poliția", ""); 
    setParentAndChild(TheEmergencyServices, ThePolice);

    var Case = new DataCard("Case", "Caz", ""); 
    setParentAndChild(ThePolice, Case);

    var Suspect = new DataCard("Suspect", "Suspect", ""); 
    setParentAndChild(ThePolice, Suspect);

    var Innocent = new DataCard("Innocent", "Nevinovat", ""); 
    setParentAndChild(ThePolice, Innocent);

    var Witness = new DataCard("Witness", "Martor", ""); 
    setParentAndChild(ThePolice, Witness);

    var Victim = new DataCard("Victim", "Victimă", ""); 
    setParentAndChild(ThePolice, Victim);

    var Court = new DataCard("Court", "Instanță", ""); 
    setParentAndChild(ThePolice, Court);

    var Guilty = new DataCard("Guilty", "Vinovat", ""); 
    setParentAndChild(ThePolice, Guilty);

    var Defendant = new DataCard("Defendant", "Pârât", ""); 
    setParentAndChild(ThePolice, Defendant);

    var Stealing = new DataCard("Stealing", "Furtul", ""); 
    setParentAndChild(ThePolice, Stealing);

    var Crime = new DataCard("Crime", "Crimă", ""); 
    setParentAndChild(ThePolice, Crime);

    var Offense = new DataCard("Offense", "Infracțiunea", ""); 
    setParentAndChild(ThePolice, Offense);

    var Burglar = new DataCard("Burglar", "Hoț", ""); 
    setParentAndChild(ThePolice, Burglar);

    var Stolen = new DataCard("Stolen", "Furată", ""); 
    setParentAndChild(ThePolice, Stolen);

    var Motive = new DataCard("Motive", "Motiv", ""); 
    setParentAndChild(ThePolice, Motive);

    var Murder = new DataCard("Murder", "Crimă", ""); 
    setParentAndChild(ThePolice, Murder);

    // #hospital #thehospital / #doctor #thedoctor
    var TheHospitalAndTheDoctor = new DataCard("The Hospital and The Doctor", "Spitalul ș Doctorul", "");
    setParentAndChild(TheEmergencyServices, TheHospitalAndTheDoctor)

    var CottolWool = new DataCard("Cottol Wool", "Vată", "");
    setParentAndChild(TheHospitalAndTheDoctor, CottolWool)

    var Medecine = new DataCard("Medecine", "Medicament", "");
    setParentAndChild(TheHospitalAndTheDoctor, Medecine)

    var Lift = new DataCard("Lift", "Lift (Ascensor)", "");
    setParentAndChild(TheHospitalAndTheDoctor, Lift)

    var Crutches = new DataCard("Crutches", "Cârje", "");
    setParentAndChild(TheHospitalAndTheDoctor, Crutches)

    var Pills = new DataCard("Pills", "Pastille", "");
    setParentAndChild(TheHospitalAndTheDoctor, Pills)

    var Tray = new DataCard("Tray", "Tavă", "");
    setParentAndChild(TheHospitalAndTheDoctor, Tray)

    var Thermometer = new DataCard("Thermometer", "Termometru", "");
    setParentAndChild(TheHospitalAndTheDoctor, Thermometer)

    var Curtains = new DataCard("Curtains", "Perdea", "");
    setParentAndChild(TheHospitalAndTheDoctor, Curtains)

    var Cast = new DataCard("Cast (Plaster)", "Ghips", "");
    setParentAndChild(TheHospitalAndTheDoctor, Cast)

    var Bandage = new DataCard("Bandage", "Bandage (Pansament)", "");
    setParentAndChild(TheHospitalAndTheDoctor, Bandage)

    var Wheelchair = new DataCard("Wheelchair", "Scaun cu Rotile", "");
    setParentAndChild(TheHospitalAndTheDoctor, Wheelchair)

    var Syringe = new DataCard("Syringe", "Seringă", "");
    setParentAndChild(TheHospitalAndTheDoctor, Syringe)

    var Tissues = new DataCard("Tissues (Napkin)", "Batiste de Hârtie (Șerveţel)", "");
    setParentAndChild(TheHospitalAndTheDoctor, Tissues)

    var Handkerchief = new DataCard("Handkerchief", "Batiste", "");
    setParentAndChild(TheHospitalAndTheDoctor, Handkerchief)

    var WaitingRoom = new DataCard("Waiting Room", "Sală de Așteptare", "");
    setParentAndChild(TheHospitalAndTheDoctor, WaitingRoom)

    var WalkingStick = new DataCard("Walking Stick", "Baston", "");
    setParentAndChild(TheHospitalAndTheDoctor, WalkingStick)

    var GreetingsCards = new DataCard("Cards (Greeting)", "Pliante", "");
    setParentAndChild(TheHospitalAndTheDoctor, GreetingsCards)

    var Plaster = new DataCard("Plaster", "Plasture", "");
    setParentAndChild(TheHospitalAndTheDoctor, Plaster)

    var Operation = new DataCard("Operation", "Operație", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Operation);

    var Treatment = new DataCard("Treatment", "Tratament", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Treatment);

    var Painkiller = new DataCard("Painkiller", "Analgezic", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Painkiller);

    var ShoulderPain = new DataCard("Shoulder Pain", "Durere de umăr", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, ShoulderPain);

    var Flu = new DataCard("Flu", "Gripă", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Flu);

    var InGoodShape = new DataCard("In Good Shape", "În formă bună", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, InGoodShape);

    var BodyTemperature = new DataCard("Body Temperature", "Temperatura corpului", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, BodyTemperature);

    var Diabetes = new DataCard("Diabetes", "Diabet", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Diabetes);

    var BackAche = new DataCard("Back Ache", "Durere de spate", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, BackAche);

    var Nurse = new DataCard("Nurse", "Asistentă medicală", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Nurse);

    var Medic = new DataCard("Medic", "Medic", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Medic);

    var Symptom = new DataCard("Symptom", "Simptom", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Symptom);

    var FoodPoisoning = new DataCard("Food Poisoning", "Intoxicație alimentară", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, FoodPoisoning);

    var Diarrhea = new DataCard("Diarrhea", "Diaree", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Diarrhea);

    var StomachAche = new DataCard("Stomach Ache", "Durere de stomac", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, StomachAche);

    var Patient = new DataCard("Patient", "Pacient", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Patient);

    var Fever = new DataCard("Fever", "Febră", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Fever);

    var Headache = new DataCard("Headache", "Durere de cap", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Headache);

    var Emergency = new DataCard("Emergency", "De Urgență", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Emergency);

    var Gums = new DataCard("Gums", "Gingie", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Gums);

    // #thebeach #beach #seaside
    var TheBeach = new DataCard("The Beach", "Plaja", "");
    setParentAndChild(nouns, TheBeach)

    var SailingBoat = new DataCard("Sailing Boat", "Barcă cu Pânze", "");
    setParentAndChild(TheBeach, SailingBoat)

    var Sea = new DataCard("Sea", "Mare", "");
    setParentAndChild(TheBeach, Sea)

    var Lighthouse = new DataCard("Lighthouse", "Far", "");
    setParentAndChild(TheBeach, Lighthouse)

    var Spade = new DataCard("Spade", "Lopățică", "");
    setParentAndChild(TheBeach, Spade)

    var Bucket = new DataCard("Bucket", "Găletușă", "");
    setParentAndChild(TheBeach, Bucket)

    var Sandcastle = new DataCard("Sandcastle", "Castel de Nisip", "");
    setParentAndChild(TheBeach, Sandcastle)

    var Umbrella = new DataCard("Umbrella", "Umbrelă (de Soare)", "");
    setParentAndChild(TheBeach, Umbrella)

    var Flag = new DataCard("Flag", "Steag", "");
    setParentAndChild(TheBeach, Flag)

    var Island = new DataCard("Island", "Insulă", "");
    setParentAndChild(TheBeach, Island)

    var MotorBoat = new DataCard("Motor Boat", "Barcă cu Motor", "");
    setParentAndChild(TheBeach, MotorBoat)

    var Shell = new DataCard("Shell", "Scoică", "");
    setParentAndChild(TheBeach, Shell)

    var Beach = new DataCard("Beach", "Plajă", "");
    setParentAndChild(TheBeach, Beach)

    var RowingBoat = new DataCard("Rowing Boat", "Barcă", "");
    setParentAndChild(TheBeach, RowingBoat)

    var Deckchair = new DataCard("Deckchair", "Şezlong", "");
    setParentAndChild(TheBeach, Deckchair)

    var Suncream = new DataCard("Suncream", "Cremă de Protecție Solară", "");
    setParentAndChild(TheBeach, Suncream)

    var FishingBoat = new DataCard("Fishing Boat", "Barcă de Pescuit", "");
    setParentAndChild(TheBeach, FishingBoat)

    var Paddle = new DataCard("Paddle", "Pagaie", "");
    setParentAndChild(TheBeach, Paddle)

    var FishingNet = new DataCard("Fishing Net", "Plasă de Pescuit", "");
    setParentAndChild(TheBeach, FishingNet)

    var Seaweed = new DataCard("Seaweed", "Alge", "");
    setParentAndChild(TheBeach, Seaweed)

    var Pebbles = new DataCard("Pebbles", "Pietricele", "");
    setParentAndChild(TheBeach, Pebbles)

    var Rope = new DataCard("Rope", "Frânghie", "");
    setParentAndChild(TheBeach, Rope)

    var Canoe = new DataCard("Canoe", "Canoe", "");
    setParentAndChild(TheBeach, Canoe)

    var Ship = new DataCard("Ship", "Vapor (Vas)", "");
    setParentAndChild(TheBeach, Ship)

    var Cliff = new DataCard("Cliff", "Faleză", "");
    setParentAndChild(TheBeach, Cliff)

    var Waves = new DataCard("Waves", "Valuri", "");
    setParentAndChild(TheBeach, Waves)

    // #thefarm #farm
    var TheFarm = new DataCard("The Farm", "Ferma", "");
    setParentAndChild(nouns, TheFarm)

    var Haystack = new DataCard("Haystack", "Căpiță de Fân", "");
    setParentAndChild(TheFarm, Haystack)

    var Pond = new DataCard("Pond", "Iaz (Heleșteu)", "");
    setParentAndChild(TheFarm, Pond)

    var Hayloft = new DataCard("Hayloft", "Şură (pod)", "");
    setParentAndChild(TheFarm, Hayloft)

    var Pigsty = new DataCard("Pigsty", "Cocină", "");
    setParentAndChild(TheFarm, Pigsty)

    var ChickenShed = new DataCard("Chicken Shed", "Coteț de Păsări", "");
    setParentAndChild(TheFarm, ChickenShed)

    var Tractor = new DataCard("Tractor", "Tractor", "");
    setParentAndChild(TheFarm, Tractor)

    var Barn = new DataCard("Barn", "Hangar (Şopron)", "");
    setParentAndChild(TheFarm, Barn)

    var Mud = new DataCard("Mud", "Nuroi", "");
    setParentAndChild(TheFarm, Mud)

    var Cart = new DataCard("Cart", "Căruț", "");
    setParentAndChild(TheFarm, Cart)

    var Hay = new DataCard("Hay", "Fân", "");
    setParentAndChild(TheFarm, Hay)

    var StrawBales = new DataCard("Straw Bales", "Baloți de Paie", "");
    setParentAndChild(TheFarm, StrawBales)

    var Farmhouse = new DataCard("Farmhouse", "Fermă", "");
    setParentAndChild(TheFarm, Farmhouse)

    var Scarecrow = new DataCard("Scarecrow", "Sperietoare (de Ciori)", "");
    setParentAndChild(TheFarm, Scarecrow)

    var Stable = new DataCard("Stable (Horses, Cows)", "Grajd de (Cai, Vite)", "");
    setParentAndChild(TheFarm, Stable)

    var Saddle = new DataCard("Saddle", "Şa", "");
    setParentAndChild(TheFarm, Saddle)

    var Field = new DataCard("Field", "Câmo", "");
    setParentAndChild(TheFarm, Field)

    var Orchard = new DataCard("Orchard", "Livadă", "");
    setParentAndChild(TheFarm, Orchard)

    var Plough = new DataCard("Plough", "Plug", "");
    setParentAndChild(TheFarm, Plough)


    //#thepark #park
    var ThePark = new DataCard("The Park", "Parcul", "");
    setParentAndChild(nouns, ThePark)

    var Swings = new DataCard("Swings", "Leagăne", "");
    setParentAndChild(ThePark, Swings)

    var Sandpit = new DataCard("Sandpit", "Groapă de Nisip", "");
    setParentAndChild(ThePark, Sandpit)

    var Picnic = new DataCard("Picnic", "Picnic", "");
    setParentAndChild(ThePark, Picnic)

    var Kite = new DataCard("Kite", "Zmeu", "");
    setParentAndChild(ThePark, Kite)

    var Gate = new DataCard("Gate", "Poartă", "");
    setParentAndChild(ThePark, Gate)

    var Slide = new DataCard("Slide", "Tobogan", "");
    setParentAndChild(ThePark, Slide)

    var Lake = new DataCard("Lake", "Lac", "");
    setParentAndChild(ThePark, Lake)

    var Bush = new DataCard("Bush", "Tufiș", "");
    setParentAndChild(ThePark, Bush)

    var FlowerBed = new DataCard("Flower Bed", "Rond de Flori", "");
    setParentAndChild(ThePark, FlowerBed)

    var Leash = new DataCard("Leash", "Leșă", "");
    setParentAndChild(ThePark, Leash)

    var SkippingRope = new DataCard("Skipping Rope", "Coardă de Sărit", "");
    setParentAndChild(ThePark, SkippingRope)

    var Puddle = new DataCard("Puddle", "Baltă (Băltoacă)", "");
    setParentAndChild(ThePark, Puddle)

    var String = new DataCard("String", "Sfoară", "");
    setParentAndChild(ThePark, String)

    var FenceRailings = new DataCard("Fence Railings", "Gard", "");
    setParentAndChild(ThePark, FenceRailings)

    var Seesaw = new DataCard("Seesaw", "Balansoar", "");
    setParentAndChild(ThePark, Seesaw)

    var Earth = new DataCard("Earth", "Pământ (Soil)", "");
    setParentAndChild(ThePark, Earth)

    //#thestreet #street
    var TheStreet = new DataCard("The Street", "Strada", "");
    setParentAndChild(nouns, TheStreet)

    var Shop = new DataCard("Shop", "Magazin", "");
    setParentAndChild(TheStreet, Shop)
    
    var ShoeShop = new DataCard("Shoe shop", "Magazine de încălțăminte", "");
    setParentAndChild(TheStreet, ShoeShop)

    var Hole = new DataCard("Hole", "Gaură", "");
    setParentAndChild(TheStreet, Hole)

    var Cafe = new DataCard("Cafe", "Cafenea", "");
    setParentAndChild(TheStreet, Cafe)

    var Ambulance = new DataCard("Ambulance", "Ambulanță", "");
    setParentAndChild(TheStreet, Ambulance)

    var Pavement = new DataCard("Pavement", "Trotuar", "");
    setParentAndChild(TheStreet, Pavement)

    var Statue = new DataCard("Statue", "Statuie", "");
    setParentAndChild(TheStreet, Statue)

    var Roof = new DataCard("Roof", "Acoperiș", "");
    setParentAndChild(TheStreet, Roof)

    var Digger = new DataCard("Digger", "Excavator", "");
    setParentAndChild(TheStreet, Digger)

    var Hotel = new DataCard("Hotel", "Hotel", "");
    setParentAndChild(TheStreet, Hotel)

    var PoliceCar = new DataCard("Police Car", "Mașină de Poliție", "");
    setParentAndChild(TheStreet, PoliceCar)

    var Pipes = new DataCard("Pipes", "Țevi", "");
    setParentAndChild(TheStreet, Pipes)

    var JackHammer = new DataCard("Jack-hammer", "Picamăr", "");
    setParentAndChild(TheStreet, JackHammer)

    var Playground = new DataCard("Playground", "Curtea Şcoală", "");
    setParentAndChild(TheStreet, Playground)

    var ZebraCrossing = new DataCard("Zebra Crossing", "Trecere Pentru Pietoni (Zebră)", "");
    setParentAndChild(TheStreet, ZebraCrossing)

    var Factory = new DataCard("Factory", "Fabrică", "");
    setParentAndChild(TheStreet, Factory)

    var Lorry = new DataCard("Lorry", "Camion", "");
    setParentAndChild(TheStreet, Lorry)

    var Cinema = new DataCard("Cinema", "Cinematograf", "");
    setParentAndChild(TheStreet, Cinema)

    var Van = new DataCard("Van", "Camionetă", "");
    setParentAndChild(TheStreet, Van)

    var Trailer = new DataCard("Trailer", "Remorcă", "");
    setParentAndChild(TheStreet, Trailer)

    var House = new DataCard("House", "Casă", "");
    setParentAndChild(TheStreet, House)

    var Market = new DataCard("Market", "Piață", "");
    setParentAndChild(TheStreet, Market)

    var Steps = new DataCard("Steps", "Trepte (Scări)", "");
    setParentAndChild(TheStreet, Steps)

    var Flats = new DataCard("Flats", "Bloc (Imobil)", "");
    setParentAndChild(TheStreet, Flats)

    var LampPost = new DataCard("Lamp Post", "Stâlp de Iluminat", "");
    setParentAndChild(TheStreet, LampPost)

    var FireEngine = new DataCard("Fire Engine", "Mașină de Pompieri", "");
    setParentAndChild(TheStreet, FireEngine)

    //#travel
    var Travel = new DataCard("Travel", "Călătoria", "");
    setParentAndChild(nouns, Travel)

    var phoneNumber = new DataCard("Telephone number", "Număr de telefon", "");  
    setParentAndChild(Travel, phoneNumber);  

    var homeTown = new DataCard("Home town", "Oraș natal", "");  
    setParentAndChild(Travel, homeTown); 
    
    var adventure = new DataCard("Adventure", "Aventură", "");  
    setParentAndChild(Travel, adventure);  

    var crowded = new DataCard("Crowded", "Algomerată", "");  
    setParentAndChild(Travel, crowded);  

    var news = new DataCard("News", "Știri", "");  
    setParentAndChild(Travel, news); 

    var guide = new DataCard("Guide", "Ghid", "");  
    setParentAndChild(Travel, guide);  

    var guest = new DataCard("Guest", "Oaspete", "");  
    setParentAndChild(Travel, guest);  
    
    var meetingPoint = new DataCard("Meeting point", "Loc de întâlnire", "");  
    setParentAndChild(Travel, meetingPoint);  

    var tour = new DataCard("Tour", "Tur", "");  
    setParentAndChild(Travel, tour);  

    var place = new DataCard("Place (location)", "Loc", "");  
    setParentAndChild(Travel, place);  

    var RollerBlades = new DataCard("Roller Blades", "Role", "");
    setParentAndChild(Travel, RollerBlades)

    var holiday = new DataCard("Holiday", "Sărbătoarea", "");  
    setParentAndChild(Travel, holiday);

    var Yacht = new DataCard("Yacht", "Bărcuță (Barcă)", "");
    setParentAndChild(Travel, Yacht)

    var Tricycle = new DataCard("Tricycle", "Tricicletă", "");
    setParentAndChild(Travel, Tricycle)

    var Skateboard = new DataCard("Skateboard", "Skateboard", "");
    setParentAndChild(Travel, Skateboard)

    var Bicycle = new DataCard("Bicycle", "Bicicletă", "");
    setParentAndChild(Travel, Bicycle)

    var Motorbike = new DataCard("Motorbike", "Motocicletă", "");
    setParentAndChild(Travel, Motorbike)

    var Car = new DataCard("Car", "Mașină", "");
    setParentAndChild(TheStreet, Car)

    var Taxi = new DataCard("Taxi", "Taxi", "");
    setParentAndChild(Travel, Taxi)

    var Bus = new DataCard("Bus", "Autobuz", "");
    setParentAndChild(Travel, Bus)

    var Train = new DataCard("Train", "Tren", "");
    setParentAndChild(Travel, Train)

    var Caravan = new DataCard("Caravan", "Rulotă", "");
    setParentAndChild(Travel, Caravan)

    var Barge = new DataCard("Barge", "Şalupă", "");
    setParentAndChild(Travel, Barge)

    var RailwayStation = new DataCard("Railway Station", "Gara", "");
    setParentAndChild(Travel, RailwayStation)

    var CarGarage = new DataCard("Car Garage", "Garajul", "");
    setParentAndChild(Travel, CarGarage)

    var Aeroport = new DataCard("Aeroport", "Aeroportul", "");
    setParentAndChild(Travel, Aeroport)

    var CarWash = new DataCard("CarWash", "Spălătorie Auto", "");
    setParentAndChild(Travel, CarWash)

    var RailwayTrack = new DataCard("RailwayTrack", "Cale Ferată", "");
    setParentAndChild(Travel, RailwayTrack)

    var TrainEngine = new DataCard("Train Engine", "Locomotivă", "");
    setParentAndChild(Travel, TrainEngine)

    var Platform = new DataCard("Platform", "Peron", "");
    setParentAndChild(Travel, Platform)

    var TicketMachine = new DataCard("Ticket Machine", "Automat de Bilete", "");
    setParentAndChild(Travel, TicketMachine)

    var TrafficLight = new DataCard("Traffic Light", "Semafor", "");
    setParentAndChild(Travel, TrafficLight)

    var Backpack = new DataCard("Backpack", "Rucsac", "");
    setParentAndChild(Travel, Backpack)

    var Headlights = new DataCard("Headlights", "Faruri", "");
    setParentAndChild(Travel, Headlights)

    var Engine = new DataCard("Engine", "Motor", "");
    setParentAndChild(Travel, Engine)

    var Wheel = new DataCard("Wheel", "Roată", "");
    setParentAndChild(Travel, Wheel)

    var Battery = new DataCard("Battery", "Baterie", "");
    setParentAndChild(Travel, Battery)

    var Suitcase = new DataCard("Suitcase", "Valiză", "");
    setParentAndChild(Travel, Suitcase)

    var Carriages = new DataCard("Carriages", "Vagoane", "");
    setParentAndChild(Travel, Carriages)

    var Aeroplane = new DataCard("Aeroplane", "Avion", "");
    setParentAndChild(Travel, Aeroplane)

    var Helicopter = new DataCard("Helicopter", "Elicopter", "");
    setParentAndChild(Travel, Helicopter)

    var Runway = new DataCard("Runway", "Pistă", "");
    setParentAndChild(Travel, Runway)

    var ControlTower = new DataCard("Control Tower", "Turn de Control", "");
    setParentAndChild(Travel, ControlTower)

    var CarBoot = new DataCard("Car Boot", "Portbagaj", "");
    setParentAndChild(Travel, CarBoot)

    var Petrol = new DataCard("Petrol", "Benzină", "");
    setParentAndChild(Travel, Petrol)

    var BreakdownLorry = new DataCard("Breakdown Lorry", "Mașină de Tractare", "");
    setParentAndChild(Travel, BreakdownLorry)

    var PetrolPump = new DataCard("Petrol Pump", "Pompă de Benzină", "");
    setParentAndChild(Travel, PetrolPump)

    var Oil = new DataCard("Oil", "Ulei", "");
    setParentAndChild(Travel, Oil)

    var Bonnet = new DataCard("Bonnet", "Capotă", "");
    setParentAndChild(Travel, Bonnet)

    var Tyre = new DataCard("Tyre", "Pneu (Cauciuc)", "");
    setParentAndChild(Travel, Tyre)

    var Spanner = new DataCard("Spanner", "Cheie Fixă", "");
    setParentAndChild(Travel, Spanner)

    var PetrolTanker = new DataCard("Petrol Tanker", "Camion-cisternă", "");
    setParentAndChild(Travel, PetrolTanker)

    var Escalator = new DataCard("Escalator", "Scară rulantă", "");
    setParentAndChild(Travel, Escalator);

    var ConveyorBelt = new DataCard("Conveyor Belt", "Bandă rulantă", "");
    setParentAndChild(Travel, ConveyorBelt);

    var Lobby = new DataCard("Lobby", "Holul", "");
    setParentAndChild(Travel, Lobby);

    var Coin = new DataCard("Coin", "Moneda", "");
    setParentAndChild(Travel, Coin);

    var Currency = new DataCard("Currency", "Curs valutar", "");
    setParentAndChild(Travel, Currency);

    var ExchangeRate = new DataCard("Exchange Rate", "Curs de schimb", "");
    setParentAndChild(Travel, ExchangeRate);

    var BankAccount = new DataCard("Bank Account", "Cont bancar", "");
    setParentAndChild(Travel, BankAccount);

    var Stamp = new DataCard("Stamp", "Timbru", "");
    setParentAndChild(Travel, Stamp);

    var Souvenir = new DataCard("Souvenir", "Suvenir", "");
    setParentAndChild(Travel, Souvenir);

    var Course = new DataCard("Course", "Curs", "");
    setParentAndChild(Travel, Course);

    var Trip = new DataCard("Trip (Excursion)", "Excursie", "");
    setParentAndChild(Travel, Trip);

    var Ferry = new DataCard("Ferry", "Feribot", "");
    setParentAndChild(Travel, Ferry);

    var Schedule = new DataCard("Schedule", "Un orar", "");
    setParentAndChild(Travel, Schedule);

    var Passenger = new DataCard("Passenger", "Un pasager", "");
    setParentAndChild(Travel, Passenger);

    var Tourist = new DataCard("Tourist", "Turist (turistă)", "");
    setParentAndChild(Travel, Tourist);

    //#country #thecountry
    var TheCountry = new DataCard("The Country", "La Țară", "");
    setParentAndChild(nouns, TheCountry)

    var Stream = new DataCard("Stream", "Pârâu", "");
    setParentAndChild(TheCountry, Stream)

    var Windmill = new DataCard("Windmill", "Moară de Vânt", "");
    setParentAndChild(TheCountry, Windmill)

    var HotAirBalloon = new DataCard("Hot Air Balloon", "Balon (cu Aer Cald)", "");
    setParentAndChild(TheCountry, HotAirBalloon)

    var Stones = new DataCard("Stones", "Pietre", "");
    setParentAndChild(TheCountry, Stones)

    var Signpost = new DataCard("Signpost", "Stâlp Indicator", "");
    setParentAndChild(TheCountry, Signpost)

    var CanalLock = new DataCard("Lock (for Canal)", "Ecluză", "");
    setParentAndChild(TheCountry, CanalLock)

    var Forest = new DataCard("Forest", "Pădure", "");
    setParentAndChild(TheCountry, Forest)

    var River = new DataCard("River", "Râu", "");
    setParentAndChild(TheCountry, River)

    var Road = new DataCard("Road", "Drum (Şosea)", "");
    setParentAndChild(TheCountry, Road)

    var Rocks = new DataCard("Rocks", "Stânci", "");
    setParentAndChild(TheCountry, Rocks)

    var Hill = new DataCard("Hill", "Deal (Colină)", "");
    setParentAndChild(TheCountry, Hill)

    var Tunnel = new DataCard("Tunnel", "Tunel", "");
    setParentAndChild(TheCountry, Tunnel)

    var Waterfall = new DataCard("Waterfall", "Cascadă", "");
    setParentAndChild(TheCountry, Waterfall)

    var Bridge = new DataCard("Bridge", "Pod", "");
    setParentAndChild(TheCountry, Bridge)

    var Village = new DataCard("Village", "Sat", "");
    setParentAndChild(TheCountry, Village)

    var Logs = new DataCard("Logs", "Bușteni (Lemne)", "");
    setParentAndChild(TheCountry, Logs)

    var Canal = new DataCard("Canal", "Canal", "");
    setParentAndChild(TheCountry, Canal)

    var Tents = new DataCard("Tents", "Corturi", "");
    setParentAndChild(TheCountry, Tents)

    var Mountain = new DataCard("Mountain", "Munte", "");
    setParentAndChild(TheCountry, Mountain)

    var Volcano = new DataCard("Volcano", "Vulcan", ""); 
    setParentAndChild(TheCountry, Volcano);

    var Nature = new DataCard("Nature", "Natură", ""); 
    setParentAndChild(TheCountry, Nature);

    var Lake = new DataCard("Lake", "Lac", ""); 
    setParentAndChild(TheCountry, Lake);

    var Jungle = new DataCard("Jungle", "Junglă", ""); 
    setParentAndChild(TheCountry, Jungle);

    var Island = new DataCard("Island", "Insulă", ""); 
    setParentAndChild(TheCountry, Island);

    var Desert = new DataCard("Desert", "Deșert", ""); 
    setParentAndChild(TheCountry, Desert);

    var River = new DataCard("River", "Râu", ""); 
    setParentAndChild(TheCountry, River);

    var Ocean = new DataCard("Ocean", "Ocean", ""); 
    setParentAndChild(TheCountry, Ocean);

    //#animals
    var Animals = new DataCard("Animals", "Animalele", "");
    setParentAndChild(nouns, Animals)

    var pet = new DataCard("Pet", "Animal de Companie", "");
    setParentAndChild(Animals, pet)

    var Pony = new DataCard("Pony", "Ponei", "");
    setParentAndChild(Sports, Pony)

    var Hamster = new DataCard("Hamster", "Hamster", "");
    setParentAndChild(Animals, Hamster)

    var GuineaPig = new DataCard("GuineaPig", "Porcușor de Guineea", "");
    setParentAndChild(Animals, GuineaPig)

    var Parrot = new DataCard("Parrot", "Papagal", "");
    setParentAndChild(Animals, Parrot)

    var Beak = new DataCard("Beak", "Cioc", "");
    setParentAndChild(Animals, Beak)

    var Mouse = new DataCard("Mouse", "Şoarece", "");
    setParentAndChild(Animals, Mouse)

    var Kitten = new DataCard("Kitten", "Pisoi", "");
    setParentAndChild(Animals, Kitten)

    var Kennel = new DataCard("Kennel", "Cușcă", "");
    setParentAndChild(Animals, Kennel)

    var Puppy = new DataCard("Puppy", "Cățeluș", "");
    setParentAndChild(Animals, Puppy)

    var PetFood = new DataCard("Pet Food", "Hrană", "");
    setParentAndChild(Animals, PetFood)

    var Budgeriagar = new DataCard("Budgeriagar", "Peruș", "");
    setParentAndChild(Animals, Budgeriagar)

    var Canary = new DataCard("Canary", "Canar", "");
    setParentAndChild(Animals, Canary)

    var Rabbit = new DataCard("Rabbit", "Iepure", "");
    setParentAndChild(Animals, Rabbit)

    var Cat = new DataCard("Cat", "Pisică", "");
    setParentAndChild(Animals, Cat)

    var Goldfish = new DataCard("Goldfish", "Peștișori Aurii", "");
    setParentAndChild(Animals, Goldfish)

    var Cage = new DataCard("Cage", "Colivie", "");
    setParentAndChild(Animals, Cage)

    var Crab = new DataCard("Crab", "Crab", "");
    setParentAndChild(Animals, Crab)

    var Seagull = new DataCard("Seagull", "Pescăruș", "");
    setParentAndChild(Animals, Seagull)

    var Fish = new DataCard("Fish", "Pește", "");
    setParentAndChild(Animals, Fish)

    var StarFish = new DataCard("StarFish", "Stea-de-mare", "");
    setParentAndChild(Animals, StarFish)

    var Lamb = new DataCard("Lamb", "Miel", "");
    setParentAndChild(Animals, Lamb)

    var Bull = new DataCard("Bull", "Taur", "");
    setParentAndChild(Animals, Bull)

    var Geese = new DataCard("Geese", "Gâște", "");
    setParentAndChild(Animals, Geese)

    var Sheep = new DataCard("Sheep", "Oaie", "");
    setParentAndChild(Animals, Sheep)

    var Horse = new DataCard("Horse", "Cal", "");
    setParentAndChild(Animals, Horse)

    var Pig = new DataCard("Pig", "Porc", "");
    setParentAndChild(Animals, Pig)

    var Piglets = new DataCard("Piglets", "Purcei", "");
    setParentAndChild(Animals, Piglets)

    var Cow = new DataCard("Cow", "Vacă", "");
    setParentAndChild(Animals, Cow)

    var CalfCow = new DataCard("Calf (Cow)", "Vițel", "");
    setParentAndChild(Animals, CalfCow)

    var Turkey = new DataCard("Turkey", "Curcan", "");
    setParentAndChild(Animals, Turkey)

    var Sheepdog = new DataCard("Sheepdog", "Câine Ciobânesc", "");
    setParentAndChild(Animals, Sheepdog)

    var Beehive = new DataCard("Beehive", "Stup", "");
    setParentAndChild(Animals, Beehive)

    var Snail = new DataCard("Snail", "Melc", "");
    setParentAndChild(Animals, Snail)

    var Ladybird = new DataCard("Ladybird", "Gărgăriță", "");
    setParentAndChild(Animals, Ladybird)

    var Caterpillar = new DataCard("Caterpillar", "omidă", "");
    setParentAndChild(Animals, Caterpillar)

    var Worm = new DataCard("Worm", "Râmă", "");
    setParentAndChild(Animals, Worm)

    var Wasp = new DataCard("Wasp", "Viespe", "");
    setParentAndChild(Animals, Wasp)

    var Bee = new DataCard("Bee", "Albină", "");
    setParentAndChild(Animals, Bee)

    var Birds = new DataCard("Birds", "Păsări", "");
    setParentAndChild(Animals, Birds)

    var Pigeon = new DataCard("Pigeon", "Porumbel", "");
    setParentAndChild(Animals, Pigeon)

    var Dog = new DataCard("Dog", "Câine", "");
    setParentAndChild(Animals, Dog)

    var Frog = new DataCard("Frog", "Broască", "");
    setParentAndChild(Animals, Frog)

    var Tadpoles = new DataCard("Tadpoles", "Mormoloci", "");
    setParentAndChild(Animals, Tadpoles)

    var Swans = new DataCard("Swans", "Lebede", "");
    setParentAndChild(Animals, Swans)

    var Duck = new DataCard("Duck", "Rață", "");
    setParentAndChild(Animals, Duck)

    var Ducklings = new DataCard("Ducklings", "Bobci de Rață", "");
    setParentAndChild(Animals, Ducklings)

    var Butterfly = new DataCard("Butterfly", "Fluture", "");
    setParentAndChild(Animals, Butterfly)

    var Lizard = new DataCard("Lizard", "Şopârlă", "");
    setParentAndChild(Animals, Lizard)

    var Fox = new DataCard("Fox", "Vulpe", "");
    setParentAndChild(Animals, Fox)

    var Hedgehog = new DataCard("Hedgehog", "Arici", "");
    setParentAndChild(Animals, Hedgehog)

    var Squirrel = new DataCard("Squirrel", "Veveriță", "");
    setParentAndChild(Animals, Squirrel)

    var Badger = new DataCard("Badger", "Bursuc", "");
    setParentAndChild(Animals, Badger)

    var Toad = new DataCard("Toad", "Broască Râioasă", "");
    setParentAndChild(Animals, Toad)

    var Mole = new DataCard("Mole", "Cârtiță", "");
    setParentAndChild(Animals, Mole)

    var Owl = new DataCard("Owl", "Bufniță", "");
    setParentAndChild(Animals, Owl)

    var FoxCubs = new DataCard("Fox Cubs", "Pui de Vulpe", "");
    setParentAndChild(Animals, FoxCubs)

    var Moth = new DataCard("Moth", "Fluture de Noapte (Molie)", "");
    setParentAndChild(Animals, Moth)

    var FlyInsect = new DataCard("Fly (Insect)", "Muscă", "");
    setParentAndChild(Animals, FlyInsect)

    var Spider = new DataCard("Spider", "Păianjen", "");
    setParentAndChild(Animals, Spider)

    var Cobweb = new DataCard("Cobweb", "Pânză de Păianjen", "");
    setParentAndChild(Animals, Cobweb)

    var Panda = new DataCard("Panda", "Panda (Urs)", "");
    setParentAndChild(Animals, Panda)

    var Eagle = new DataCard("Eagle", "Vultur", "");
    setParentAndChild(Animals, Eagle)

    var Wing = new DataCard("Wing", "Aripa", "");
    setParentAndChild(Animals, Wing)

    var Hippopotamus = new DataCard("Hippopotamus", "Hipopotam", "");
    setParentAndChild(Animals, Hippopotamus)

    var Bat = new DataCard("Bat", "Liliac", "");
    setParentAndChild(Animals, Bat)

    var Monkey = new DataCard("Monkey", "Maimuță", "");
    setParentAndChild(Animals, Monkey)

    var Gorilla = new DataCard("Gorilla", "Gorilla", "");
    setParentAndChild(Animals, Gorilla)

    var Paws = new DataCard("Paws", "Labe", "");
    setParentAndChild(Animals, Paws)

    var Kangaroo = new DataCard("Kangaroo", "Cangur", "");
    setParentAndChild(Animals, Kangaroo)

    var Wolf = new DataCard("Wolf", "Lup", "");
    setParentAndChild(Animals, Wolf)

    var Penguin = new DataCard("Penguin", "Pinguin", "");
    setParentAndChild(Animals, Penguin)

    var Pelican = new DataCard("Pelican", "Pelican", "");
    setParentAndChild(Animals, Pelican)

    var Feathers = new DataCard("Feathers", "Pene", "");
    setParentAndChild(Animals, Feathers)

    var Crocodile = new DataCard("Crocodile", "Crocodil", "");
    setParentAndChild(Animals, Crocodile)

    var Bear = new DataCard("Bear", "Urs", "");
    setParentAndChild(Animals, Bear)

    var Ostrich = new DataCard("Ostrich", "Struț", "");
    setParentAndChild(Animals, Ostrich)

    var Dolphin = new DataCard("Dolphin", "Delfin", "");
    setParentAndChild(Animals, Dolphin)

    var Lion = new DataCard("Lion", "Leu", "");
    setParentAndChild(Animals, Lion)

    var LionCubs = new DataCard("Lion Cubs", "Pui de Leu", "");
    setParentAndChild(Animals, LionCubs)

    var Giraffe = new DataCard("Giraffe", "Girafă", "");
    setParentAndChild(Animals, Giraffe)

    var Deer = new DataCard("Deer", "Cerb", "");
    setParentAndChild(Animals, Deer)

    var Camel = new DataCard("Camel", "Cămilă", "");
    setParentAndChild(Animals, Camel)

    var Seal = new DataCard("Seal", "Focă", "");
    setParentAndChild(Animals, Seal)

    var Tortise = new DataCard("Tortise", "Broască-Țestoasă", "");
    setParentAndChild(Animals, Tortise)

    var Elephant = new DataCard("Elephant", "Elefant", "");
    setParentAndChild(Animals, Elephant)

    var Trunk = new DataCard("Trunk (Elephant)", "Trompă", "");
    setParentAndChild(Animals, Trunk)

    var Rhinoceros = new DataCard("Rhinoceros", "Rinocer", "");
    setParentAndChild(Animals, Rhinoceros)

    var Bison = new DataCard("Bison", "Bizon", "");
    setParentAndChild(Animals, Bison)

    var Beaver = new DataCard("Beaver", "Castor", "");
    setParentAndChild(Animals, Beaver)

    var Zebra = new DataCard("Zebra", "Zebra", "");
    setParentAndChild(Animals, Zebra)

    var Snake = new DataCard("Snake", "Şarpe", "");
    setParentAndChild(Animals, Snake)

    var Goat = new DataCard("Goat", "Capră", "");
    setParentAndChild(Animals, Goat)

    var Shark = new DataCard("Shark", "Rechin", "");
    setParentAndChild(Animals, Shark)

    var Whale = new DataCard("Whale", "Balenă", "");
    setParentAndChild(Animals, Whale)

    var Tiger = new DataCard("Tiger", "Tigru", "");
    setParentAndChild(Animals, Tiger)

    var Leopard = new DataCard("Leopard", "Leopard", "");
    setParentAndChild(Animals, Leopard)


    // #shop
    var theShop = new DataCard("The Shop", "Magazinul", "");
    setParentAndChild(nouns, theShop)

    var Checkout = new DataCard("Checkout", "Casă (de marcat)", "");
    setParentAndChild(theShop, Checkout)

    var Trolley = new DataCard("Trolley", "Cărucior (de Cumpărături)", "");
    setParentAndChild(theShop, Trolley)

    var Money = new DataCard("Money", "Bani", "");
    setParentAndChild(theShop, Money)

    var Handbag = new DataCard("Handbag", "Poșetă (Geantă)", "");
    setParentAndChild(theShop, Handbag)

    var Bottles = new DataCard("Bottles", "Sticle", "");
    setParentAndChild(theShop, Bottles)

    var Basket = new DataCard("Basket (Chimney)", "Coș", "");
    setParentAndChild(theShop, Basket)

    var Scales = new DataCard("Scales", "Cântar", "");
    setParentAndChild(theShop, Scales)

    var CarrierBag = new DataCard("Carrier Bag", "Sacoșă", "");
    setParentAndChild(theShop, CarrierBag)

    // #food
    var food = new DataCard("Food", "Mâncarea", "");
    setParentAndChild(nouns, food)

    var Orange = new DataCard("Orange", "Portocală", "");
    setParentAndChild(food, Orange)
    
    var softDrink = new DataCard("Soft drink", "Băutură răcoritoare", "");  
    setParentAndChild(food, softDrink);  

    var snack = new DataCard("Snack", "Gustare", "");  
    setParentAndChild(food, snack);  

    var Pear = new DataCard("Pear", "Pară", "");
    setParentAndChild(food, Pear)

    var Chocolate = new DataCard("Chocolate", "Ciocolată", "");
    setParentAndChild(food, Chocolate)

    var Banana = new DataCard("Banana", "Banană", "");
    setParentAndChild(food, Banana)

    var Sweet = new DataCard("Sweet", "Bomboană", "");
    setParentAndChild(food, Sweet)

    var Cake = new DataCard("Cake", "Tort", "");
    setParentAndChild(food, Cake)

    var Straw = new DataCard("Straw", "Pai", "");
    setParentAndChild(food, Straw)

    var Sandwich = new DataCard("Sandwich", "Sendviș", "");
    setParentAndChild(food, Sandwich)

    var Butter = new DataCard("Butter", "Unt", "");
    setParentAndChild(food, Butter)

    var Biscuit = new DataCard("Biscuit", "Biscuit", "");
    setParentAndChild(food, Biscuit)

    var Cheese = new DataCard("Cheese", "Brânză", "");
    setParentAndChild(food, Cheese)

    var Bread = new DataCard("Bread", "Pâine", "");
    setParentAndChild(food, Bread)

    var Strawberry = new DataCard("Strawberry", "Căpșună", "");
    setParentAndChild(food, Strawberry)

    var Raspberry = new DataCard("Raspberry", "Zmeura", "");
    setParentAndChild(food, Raspberry)

    var IceCream = new DataCard("Icecream", "Înghețată", "");
    setParentAndChild(food, IceCream)

    var FruitJuice = new DataCard("Fruit Juice", "Suc de Fructe", "");
    setParentAndChild(food, FruitJuice)

    var Cherry = new DataCard("Cherry", "Cireașă", "");
    setParentAndChild(food, Cherry)

    var Crisps = new DataCard("Crisps", "Chipsuri", "");
    setParentAndChild(food, Crisps)

    var Sausage = new DataCard("Sausage", "Cârnat", "");
    setParentAndChild(food, Sausage)

    var Salami = new DataCard("Salami", "Salam", "");
    setParentAndChild(food, Salami)

    var Clementine = new DataCard("Clementine", "Clementină", "");
    setParentAndChild(food, Clementine)

    var Breakfast = new DataCard("Breakfast", "Mic Dejun", "");
    setParentAndChild(food, Breakfast)

    var Lunch = new DataCard("Dinner", "Prânz", "");
    setParentAndChild(food, Lunch)

    var Dinner = new DataCard("Dinner", "Cină (Masă de Seară)", "");
    setParentAndChild(food, Dinner)

    var BoiledEgg = new DataCard("Boiled Egg (soft)", "Ou Fiert (Moale)", "");
    setParentAndChild(food, BoiledEgg)

    var Coffee = new DataCard("Coffee", "Cafea", "");
    setParentAndChild(food, Coffee)

    var FriedEgg = new DataCard("Fried Egg", "Ou Ochi", "");
    setParentAndChild(food, FriedEgg)

    var Toast = new DataCard("Toast", "Pâine Prăjită", "");
    setParentAndChild(food, Toast)

    var Jam = new DataCard("Jam", "Dulceață", "");
    setParentAndChild(food, Jam)

    var Cream = new DataCard("Cream", "Smântână", "");
    setParentAndChild(food, Cream)

    var Milk = new DataCard("Milk", "Lapte", "");
    setParentAndChild(food, Milk)

    var Cereal = new DataCard("Cereal", "Cereale", "");
    setParentAndChild(food, Cereal)

    var HotChocolate = new DataCard("Hot Chocolate", "Ciocolată Caldă", "");
    setParentAndChild(food, HotChocolate)

    var Sugar = new DataCard("Sugar", "Zahăr", "");
    setParentAndChild(food, Sugar)

    var Tea = new DataCard("Tea", "Ceai", "");
    setParentAndChild(food, Tea)

    var Honey = new DataCard("Honey", "Miere", "");
    setParentAndChild(food, Honey)

    var Salt = new DataCard("Salt", "Sare", "");
    setParentAndChild(food, Salt)

    var Pepper = new DataCard("Pepper", "Piper", "");
    setParentAndChild(food, Pepper)

    var Teapot = new DataCard("Teapot", "Ceainic", "");
    setParentAndChild(food, Teapot)

    var Pancakes = new DataCard("Pancakes", "Clătite", "");
    setParentAndChild(food, Pancakes)

    var BreadRolls = new DataCard("Bread Rolls (Baps)", "Chifle", "");
    setParentAndChild(food, BreadRolls)

    var Ham = new DataCard("Ham", "Şuncă", "");
    setParentAndChild(food, Ham)

    var Soup = new DataCard("Soup", "Supă", "");
    setParentAndChild(food, Soup)

    var Omlette = new DataCard("Omlette", "Omletă", "");
    setParentAndChild(food, Omlette)

    var Chopsticks = new DataCard("Chopsticks", "Bețișoare", "");
    setParentAndChild(food, Chopsticks)

    var Salad = new DataCard("Salad", "Salată", "");
    setParentAndChild(food, Salad)

    var Hamburger = new DataCard("Hamburger", "Hamburger", "");
    setParentAndChild(food, Hamburger)

    var Chicken = new DataCard("Chicken", "Pui", "");
    setParentAndChild(food, Chicken)

    var Rice = new DataCard("Rice", "Orez", "");
    setParentAndChild(food, Rice)

    var Ketchup = new DataCard("Ketchup", "Ketchup", "");
    setParentAndChild(food, Ketchup)

    var Spaghetti = new DataCard("Spaghetti", "Spaghete", "");
    setParentAndChild(food, Spaghetti)

    var MashedPotatoes = new DataCard("Mashed Potatoes", "Piure de Cartofi", "");
    setParentAndChild(food, MashedPotatoes)

    var Pizza = new DataCard("Pizza", "Pizza", "");
    setParentAndChild(food, Pizza)

    var Chips = new DataCard("Chips", "Cartofi Prăjiți", "");
    setParentAndChild(food, Chips)

    var Pudding = new DataCard("Pudding", "Deserturi", "");
    setParentAndChild(food, Pudding)

    var Grapefruit = new DataCard("Grapefruit", "Grepfrut", "");
    setParentAndChild(food, Grapefruit)

    var Carrot = new DataCard("Carrot", "Morcov", "");
    setParentAndChild(food, Carrot)

    var Cauliflower = new DataCard("Cauliflower", "Conopidă", "");
    setParentAndChild(food, Cauliflower)

    var Leek = new DataCard("Leek", "Praz", "");
    setParentAndChild(food, Leek)

    var Mushroom = new DataCard("Mushroom", "Ciupercă", "");
    setParentAndChild(food, Mushroom)

    var Cucumber = new DataCard("Cucumber", "Castravete", "");
    setParentAndChild(food, Cucumber)

    var Lemon = new DataCard("Lemon", "Lămâie", "");
    setParentAndChild(food, Lemon)

    var Celery = new DataCard("Celery", "Țelină", "");
    setParentAndChild(food, Celery)

    var Apricot = new DataCard("Apricot", "Caisă", "");
    setParentAndChild(food, Apricot)

    var Melon = new DataCard("Melon (Honeydew, Water)", "Pepene (Galben, Roșu)", "");
    setParentAndChild(food, Melon)

    var Onion = new DataCard("Onion", "Ceapă", "");
    setParentAndChild(food, Onion)

    var Cabbage = new DataCard("Cabbage", "Varză", "");
    setParentAndChild(food, Cabbage)

    var Pearch = new DataCard("Pearch", "Piersică", "");
    setParentAndChild(food, Pearch)

    var Lettuce = new DataCard("Lettuce", "Salată Verde", "");
    setParentAndChild(food, Lettuce)

    var Peas = new DataCard("Peas", "Mazăre", "");
    setParentAndChild(food, Peas)

    var Tomato = new DataCard("Tomato", "Roșie", "");
    setParentAndChild(food, Tomato)

    var Potatoes = new DataCard("Potatoes", "Cartofi", "");
    setParentAndChild(food, Potatoes)

    var Spinach = new DataCard("Spinach", "Spanac", "");
    setParentAndChild(food, Spinach)

    var Beans = new DataCard("Beans (Green)", "Fasole Verde", "");
    setParentAndChild(food, Beans)

    var Pumpkin = new DataCard("Pumpkin", "Dovleac", "");
    setParentAndChild(food, Pumpkin)

    var Tins = new DataCard("Tins", "Cutii de Conserve", "");
    setParentAndChild(food, Tins)

    var Yoghurt = new DataCard("Yoghurt", "Iaurt", "");
    setParentAndChild(food, Yoghurt)

    var Pineapple = new DataCard("Pineapple", "Ananas", "");
    setParentAndChild(food, Pineapple)

    var Meat = new DataCard("Meat", "Carne", "");
    setParentAndChild(food, Meat)

    var Flour = new DataCard("Flour", "Făină", "");
    setParentAndChild(food, Flour)

    var Plum = new DataCard("Plum", "Prună", "");
    setParentAndChild(food, Plum)

    var Eggs = new DataCard("Eggs", "Ouă", "");
    setParentAndChild(food, Eggs)

    // #atwork
    var AtWork = new DataCard("At Work", "La muncă", "");
    setParentAndChild(nouns, AtWork);

    var Project = new DataCard("Project", "Proiect", "");
    setParentAndChild(AtWork, Project);

    var Meeting = new DataCard("Meeting", "Ședința", "");
    setParentAndChild(AtWork, Meeting);

    var workday = new DataCard("Workday (weekday)", "Zi de lucru", "");  
    setParentAndChild(AtWork, workday);  

    var Report = new DataCard("Report", "Raport", "");
    setParentAndChild(AtWork, Report);

    var Method = new DataCard("Method", "Metodă", "");
    setParentAndChild(AtWork, Method);

    var Employee = new DataCard("Employee", "Angajat", "");
    setParentAndChild(AtWork, Employee);

    var HumanResources = new DataCard("Human Resources", "Resurse Umane", "");
    setParentAndChild(AtWork, HumanResources);

    var Opportunity = new DataCard("Opportunity", "Oportunitate", "");
    setParentAndChild(AtWork, Opportunity);

    var Boss = new DataCard("Boss", "Șef", "");
    setParentAndChild(AtWork, Boss);

    var Target = new DataCard("Target", "Obiectiv", "");
    setParentAndChild(AtWork, Target);

    var Job = new DataCard("Job", "Post", "");
    setParentAndChild(AtWork, Job);

    var Problem = new DataCard("Problem", "Problemă", "");
    setParentAndChild(AtWork, Problem);

    var Promotion = new DataCard("Promotion", "Promovarea", "");
    setParentAndChild(AtWork, Promotion);

    var Appointment = new DataCard("Meeting", "Întâlnire", "");
    setParentAndChild(AtWork, Appointment);

    var Result = new DataCard("Result", "Rezultat", "");
    setParentAndChild(AtWork, Result);

    var Salary = new DataCard("Salary", "Salariu", "");
    setParentAndChild(AtWork, Salary);

    var Experience = new DataCard("Experience", "Experiență", "");
    setParentAndChild(AtWork, Experience);

    var Skills = new DataCard("Skills", "Aptitudini", "");
    setParentAndChild(AtWork, Skills);

    var Details = new DataCard("Details", "Detalii", "");
    setParentAndChild(AtWork, Details);

    var Facility = new DataCard("Facility", "Facilitate", "");
    setParentAndChild(AtWork, Facility);

    // #home ===========================

    var atHome = new DataCard("At Home", "Acasă", "");
    setParentAndChild(nouns, atHome)

    //#workshop
    var TheWorkshop = new DataCard("The Workshop", "Atelierul", "");
    setParentAndChild(atHome, TheWorkshop)

    var pliers = new DataCard("Pliers", "Patent", "");  
    setParentAndChild(TheWorkshop, pliers);

    var Vice = new DataCard("Vice", "Menghină", "");
    setParentAndChild(TheWorkshop, Vice)

    var Sandpaper = new DataCard("Sandpaper", "Şmirghel", "");
    setParentAndChild(TheWorkshop, Sandpaper)

    var Drill = new DataCard("Drill", "Bormașină", "");
    setParentAndChild(TheWorkshop, Drill)

    var Ladder = new DataCard("Ladder", "Scară", "");
    setParentAndChild(TheWorkshop, Ladder)

    var Saw = new DataCard("Saw", "Fierăstrău", "");
    setParentAndChild(TheWorkshop, Saw)

    var Sawdust = new DataCard("Sawdust", "Rumeguș", "");
    setParentAndChild(TheWorkshop, Sawdust)

    var Calendar = new DataCard("Calendar", "Calendar", "");
    setParentAndChild(TheWorkshop, Calendar)

    var Toolbox = new DataCard("Toolbox", "Cutie de Scule", "");
    setParentAndChild(TheWorkshop, Toolbox)

    var Screwdriver = new DataCard("Screwdriver", "Şurubelniță", "");
    setParentAndChild(TheWorkshop, Screwdriver)

    var Plank = new DataCard("Plank", "Scândură", "");
    setParentAndChild(TheWorkshop, Plank)

    var WoodShavings = new DataCard("Shavings (Wood)", "Talaș", "");
    setParentAndChild(TheWorkshop, WoodShavings)

    var Penknife = new DataCard("Penknife", "Briceag", "");
    setParentAndChild(TheWorkshop, Penknife)

    var Wood = new DataCard("Wood (Chopped)", "Lemne Tăiate", "");
    setParentAndChild(TheWorkshop, Wood)

    var Nails = new DataCard("Nails", "Cuie", "");
    setParentAndChild(TheWorkshop, Nails)

    var Workbench = new DataCard("Workbench", "Banc de lucru (masă)", "");
    setParentAndChild(TheWorkshop, Workbench)

    var Jars = new DataCard("Jars", "Borcane", "");
    setParentAndChild(TheWorkshop, Jars)

    var PaintPot = new DataCard("Paint Pot", "Găleată de vopsea", "");
    setParentAndChild(TheWorkshop, PaintPot)

    var File = new DataCard("File", "Pilă", "");
    setParentAndChild(TheWorkshop, File)

    var Hammer = new DataCard("Hammer", "Ciocan", "");
    setParentAndChild(TheWorkshop, Hammer)

    var TapeMeasure = new DataCard("Tape Measure", "Ruletă", "");
    setParentAndChild(TheWorkshop, TapeMeasure)

    var Axe = new DataCard("Axe", "Topor", "");
    setParentAndChild(TheWorkshop, Axe)

    var Barrel = new DataCard("Barrel", "Butol", "");
    setParentAndChild(TheWorkshop, Barrel)

    var Nuts = new DataCard("Nuts", "Piulițe", "");
    setParentAndChild(TheWorkshop, Nuts)

    var Bolts = new DataCard("Bolts", "Şuruburi", "");
    setParentAndChild(TheWorkshop, Bolts)

    var Screws = new DataCard("Screws", "Holțșuruburi", "");
    setParentAndChild(TheWorkshop, Screws)

    //#garden
    var theGarden = new DataCard("The Garden", "Grădina", "");
    setParentAndChild(atHome, theGarden)

    var Wheelbarrow = new DataCard("Wheelbarrow", "Roabă", "");
    setParentAndChild(theGarden, Wheelbarrow)

    var Bricks = new DataCard("Bricks", "Cărămizi", "");
    setParentAndChild(theGarden, Bricks)

    var Spade = new DataCard("Spade", "Cazma", "");
    setParentAndChild(theGarden, Spade)

    var WateringCan = new DataCard("Watering Can", "Stropitoare", "");
    setParentAndChild(theGarden, WateringCan)

    var Dustbin = new DataCard("Dustbin", "Pubelă", "");
    setParentAndChild(theGarden, Dustbin)

    var Seeds = new DataCard("Seeds", "Semințe", "");
    setParentAndChild(theGarden, Seeds)

    var Shed = new DataCard("Shed", "Magazie (Şproron", "");
    setParentAndChild(theGarden, Shed)

    var Flowers = new DataCard("Flowers", "Flori", "");
    setParentAndChild(theGarden, Flowers)

    var Sprinkler = new DataCard("Sprinkler", "Aspersor", "");
    setParentAndChild(theGarden, Sprinkler)

    var Hoe = new DataCard("Garden Hoe", "Sapă (Săpăligă)", "");
    setParentAndChild(theGarden, Hoe)

    var Trowel = new DataCard("Trowel", "Lopățică", "");
    setParentAndChild(theGarden, Trowel)

    var Bone = new DataCard("Bone", "Os", "");
    setParentAndChild(theGarden, Bone)

    var Hedge = new DataCard("Hedge", "Gard viu", "");
    setParentAndChild(theGarden, Hedge)

    var GardenFork = new DataCard("Garden Fork", "Furcă de Grădină", "");
    setParentAndChild(theGarden, GardenFork)

    var Lawnmower = new DataCard("Lawnmower", "Mașină de tuns iarba", "");
    setParentAndChild(theGarden, Lawnmower)

    var Path = new DataCard("Path", "Cărare (Potecă)", "");
    setParentAndChild(theGarden, Path)

    var Leaves = new DataCard("Leaves", "Frunze", "");
    setParentAndChild(theGarden, Leaves)

    var Tree = new DataCard("Tree", "Copac (Pom)", "");
    setParentAndChild(theGarden, Tree)

    var Smoke = new DataCard("Smoke", "Fum", "");
    setParentAndChild(theGarden, Smoke)

    var Rake = new DataCard("Rake", "Greblă", "");
    setParentAndChild(theGarden, Rake)

    var Nest = new DataCard("Nest", "Cuib", "");
    setParentAndChild(theGarden, Nest)

    var Sticks = new DataCard("Sticks", "Crenguțe", "");
    setParentAndChild(theGarden, Sticks)

    var Greenhouse = new DataCard("Greenhouse", "Seră", "");
    setParentAndChild(theGarden, Greenhouse)

    var Hosepipe = new DataCard("Hosepipe", "Furtun de Grădină", "");
    setParentAndChild(theGarden, Hosepipe)

    var Bonfire = new DataCard("Bonfire", "Foc (în aer liber)", "");
    setParentAndChild(theGarden, Bonfire)

    var Vegetables = new DataCard("Vegetables", "Legume", "");
    setParentAndChild(theGarden, Vegetables)

    var Pram = new DataCard("Pram", "Cărucior Pentru Copii", "");
    setParentAndChild(theGarden, Pram)

    var Grass = new DataCard("Grass", "Iarbă", "");
    setParentAndChild(theGarden, Grass)

    //#kitchen
    var theKitchen = new DataCard("The Kitchen", "Bucătăria", "");
    setParentAndChild(atHome, theKitchen)

    var storageRoom = new DataCard("Storage room (pantry)", "Magazie", "");  
    setParentAndChild(theKitchen, storageRoom);  

    var kettle = new DataCard("Kettle", "Fierbător", "");  
    setParentAndChild(theKitchen, kettle);  

    var fire = new DataCard("Fire", "Incendiu!", "");  
    setParentAndChild(theKitchen, fire);  

    var pan = new DataCard("Pan", "Tigaie", "");  
    setParentAndChild(theKitchen, pan);  

    var pot = new DataCard("Pot", "Oală", "");  
    setParentAndChild(theKitchen, pot);  

    var vitamin = new DataCard("Vitamin", "Vitamină", "");  
    setParentAndChild(theKitchen, vitamin);  

    var fridge = new DataCard("Fridge", "Frigider", "");
    setParentAndChild(theKitchen, fridge)

    var Tray = new DataCard("Tray", "Tava", "");
    setParentAndChild(theKitchen, Tray)

    var Clock = new DataCard("Clock", "Ceas de perete", "");
    setParentAndChild(theKitchen, Clock)

    var Stool = new DataCard("Stool", "Taburet", "");
    setParentAndChild(theKitchen, Stool)

    var TeaSpoons = new DataCard("Teaspoons", "Lingurițe", "");
    setParentAndChild(theKitchen, TeaSpoons)

    var lightSwitch = new DataCard("Light-switch", "Întrerupător", "");
    setParentAndChild(theKitchen, lightSwitch)

    var washingPowder = new DataCard("Washing Powder", "Detergent Pudră", "");
    setParentAndChild(theKitchen, washingPowder)

    var Key = new DataCard("Key", "Cheie", "");
    setParentAndChild(theKitchen, Key)

    var Door = new DataCard("Door", "Ușa", "");
    setParentAndChild(theKitchen, Door)

    var vacuumCleaner = new DataCard("Vacuum Cleaner", "Aspirator", "");
    setParentAndChild(theKitchen, vacuumCleaner)

    var Saucepans = new DataCard("Saucepans", "Oale (Cratițe)", "");
    setParentAndChild(theKitchen, Saucepans)

    var Forks = new DataCard("Forks", "Furculițe", "");
    setParentAndChild(theKitchen, Forks)

    var Apron = new DataCard("Apron", "Șorț (de bucătărie)", "");
    setParentAndChild(theKitchen, Apron)

    var IroningBoard = new DataCard("Ironing Board", "Masă de Călcat", "");
    setParentAndChild(theKitchen, IroningBoard)

    var Rubbish = new DataCard("Rubbish", "Gunoi", "");
    setParentAndChild(theKitchen, Rubbish)

    var Glasses = new DataCard("Glasses", "Pahare", "");
    setParentAndChild(theKitchen, Glasses)

    var kitchenSink = new DataCard("kitchen Sink", "Chiuvetă de Bucătărie", "");
    setParentAndChild(theKitchen, kitchenSink)

    var kettle = new DataCard("Kettle", "Ceainic", "");
    setParentAndChild(theKitchen, kettle)

    var Knives = new DataCard("Knives", "Cuțite", "");
    setParentAndChild(theKitchen, Knives)

    var Mop = new DataCard("Mop", "Mop", "");
    setParentAndChild(theKitchen, Mop)

    var Duster = new DataCard("Duster", "Cârpă (de Praf)", "");
    setParentAndChild(theKitchen, Duster)

    var Tiles = new DataCard("Tiles", "Faianță", "");
    setParentAndChild(theKitchen, Tiles)

    var Broom = new DataCard("Broom", "Mătură", "");
    setParentAndChild(theKitchen, Broom)

    var WashingMachine = new DataCard("Washing Machine", "Mașină de Spălat Rufe", "");
    setParentAndChild(theKitchen, WashingMachine)

    var Dustpan = new DataCard("Dustpan", "Făraș", "");
    setParentAndChild(theKitchen, Dustpan)

    var Drawer = new DataCard("Drawer", "Sertar", "");
    setParentAndChild(theKitchen, Drawer)

    var Saucers = new DataCard("Saucers", "Farfurioare (de Cafea)", "");
    setParentAndChild(theKitchen, Saucers)

    var FryingPan = new DataCard("Frying Pan", "Tigaie", "");
    setParentAndChild(theKitchen, FryingPan)

    var Cooker = new DataCard("Cooker", "Aragaz", "");
    setParentAndChild(theKitchen, Cooker)

    var Spoons = new DataCard("Spoons", "Linguri", "");
    setParentAndChild(theKitchen, Spoons)

    var Plates = new DataCard("Plates", "Farfurii", "");
    setParentAndChild(theKitchen, Plates)

    var ClothesIron = new DataCard("Clothes Iron", "Fier de călcat", "");
    setParentAndChild(theKitchen, ClothesIron)

    var broomCupboard = new DataCard("Broom Cupboard", "Dulap (de perete)", "");
    setParentAndChild(theKitchen, broomCupboard)

    var Bowls = new DataCard("Bowls", "Boluri", "");
    setParentAndChild(theKitchen, Bowls)

    var Brush = new DataCard("Brush", "Perie", "");
    setParentAndChild(theKitchen, Brush)

    var Matches = new DataCard("Matches", "Chibrituri", "");
    setParentAndChild(theKitchen, Matches)

    var Cups = new DataCard("Cups", "Cești", "");
    setParentAndChild(theKitchen, Cups)

    var TeaTowel = new DataCard("Tea Towel", "Prosop de bucătărie", "");
    setParentAndChild(theKitchen, TeaTowel)

    //#inhome
    var home = new DataCard("Home", "Casă", "");
    setParentAndChild(atHome, home)

    var Ceiling = new DataCard("Ceiling", "Plafon (Tavan)", "");
    setParentAndChild(home, Ceiling)

    var Floor = new DataCard("Floor", "Podea", "");
    setParentAndChild(home, Floor)

    var Wall = new DataCard("Wall", "Perete", "");
    setParentAndChild(home, Wall)

    var bath = new DataCard(
        "Bath", "Baie",
        NounTemplateFemale("baie", "bai", "baia", "băile")
    )
    setParentAndChild(home, bath)

    var soap = new DataCard(
        "Soap", "Săpun",
        NounTemplateNeuter("săpun", "săpunuri", "sapunul", "săpunurile")
    )
    setParentAndChild(home, soap)

    var tap = new DataCard("Tap", "Robinet", "");
    setParentAndChild(home, tap)

    var toiletPaper = new DataCard("Toilet Paper", "Hârtie Igienică", "");
    setParentAndChild(home, toiletPaper)

    var Toothbrush = new DataCard("Toothbrush", "Periuță de dinți", "");
    setParentAndChild(home, Toothbrush)

    var Toilet = new DataCard("Toilet", "Toaletă", "");
    setParentAndChild(home, Toilet)

    var Sponge = new DataCard("Sponge", "Burete", "");
    setParentAndChild(home, Sponge)

    var SinkBasin = new DataCard("Sink Basin", "Chiuvetă", "");
    setParentAndChild(home, SinkBasin)

    var Shower = new DataCard("Shower", "Duș", "");
    setParentAndChild(home, Shower)

    var Towel = new DataCard("Towel", "Prosop", "");
    setParentAndChild(home, Towel)

    var toothpaste = new DataCard("Toothpaste", "Pasta de dinți", "");
    setParentAndChild(home, toothpaste)

    var Radio = new DataCard("Radio", "Radio", "");
    setParentAndChild(home, Radio)

    var cushion = new DataCard("Cushion", "Pernă", "");
    setParentAndChild(home, cushion)

    var dvd = new DataCard("DVD", "DVD", "");
    setParentAndChild(home, dvd)

    var Carpet = new DataCard("Carpet", "Mochetă", "");
    setParentAndChild(home, Carpet)

    var Rug = new DataCard("Rug", "Covor", "");
    setParentAndChild(home, Rug)

    var Mat = new DataCard("Mat", "Covoraș", "");
    setParentAndChild(home, Mat)

    var Water = new DataCard("Water", "Apă", "");
    setParentAndChild(home, Water)

    var Bed = new DataCard("Bed", "Pat", "");
    setParentAndChild(home, Bed)

    var Sofa = new DataCard("Sofa", "Canapea", "");
    setParentAndChild(home, Sofa)

    var Bathroom = new DataCard("Bathroom", "Baia", "");
    setParentAndChild(home, Bathroom)

    var LivingRoom = new DataCard("Living Room", "Sufrageria", "");
    setParentAndChild(home, LivingRoom)

    var Bedroom = new DataCard("Bedroom", "Dormitul", "");
    setParentAndChild(home, Bedroom)

    var Hall = new DataCard("Hall", "Holul", "");
    setParentAndChild(home, Hall)

    var Entrance = new DataCard("Entrance", "Intrarea", "");
    setParentAndChild(home, Entrance)

    var Chair = new DataCard("Chair", "Scaun", "");
    setParentAndChild(home, Chair)

    var Duvet = new DataCard("Duvet", "Pilotă", "");
    setParentAndChild(home, Duvet)

    var Comb = new DataCard("Comb", "Pieptene", "");
    setParentAndChild(home, Comb)

    var sheet = new DataCard("Sheet (bed)", "Cearșaf", "");
    setParentAndChild(home, sheet)

    var Wardrobe = new DataCard("Wardrobe", "Dulap", "");
    setParentAndChild(home, Wardrobe)

    var Laundry = new DataCard("Laundry", "Rufe", "");
    setParentAndChild(home, Laundry)

    var Television = new DataCard("Television", "Televizor", "");
    setParentAndChild(home, Television)

    var drawers = new DataCard("Drawers (chest of)", "Comodă", "");
    setParentAndChild(home, drawers)

    var Mirror = new DataCard("Mirror", "Oglindă", "");
    setParentAndChild(home, Mirror)

    var Hairbrush = new DataCard("Hairbrush", "Perie de păr", "");
    setParentAndChild(home, Hairbrush)

    var Lamp = new DataCard("Lamp", "Lampă (Veioză)", "");
    setParentAndChild(home, Lamp)

    var Pictures = new DataCard("Pictures", "Tablouri", "");
    setParentAndChild(home, Pictures)

    var Pegs = new DataCard("Pegs", "Cuier", "");
    setParentAndChild(home, Pegs)

    var Telephone = new DataCard("Telephone", "Telefon", "");
    setParentAndChild(home, Telephone)

    var stairs = new DataCard("Stairs", "Scară (trepte)", "");
    setParentAndChild(home, stairs)

    var Letters = new DataCard("Letters", "Scrisori", "");
    setParentAndChild(home, Letters)

    var Envelope = new DataCard("Envelope", "Plic", "");
    setParentAndChild(home, Envelope)

    var Table = new DataCard("Table", "Masă", "");
    setParentAndChild(home, Table)

    var Newspaper = new DataCard("Newspaper", "Ziar", "");
    setParentAndChild(home, Newspaper)

    var Radiator = new DataCard("Radiator", "Calorifer", "");
    setParentAndChild(home, Radiator)

    var Ballooon = new DataCard("Ballooon", "Balon", "");
    setParentAndChild(home, Ballooon)

    var EyeGlasses = new DataCard("Eye Glasses", "Ochelari", "");
    setParentAndChild(home, EyeGlasses)

    var Window = new DataCard("Window", "Fereastră", "");
    setParentAndChild(home, Window)

    var villa = new DataCard("Villa", "Vilă", "");  
    setParentAndChild(home, villa);  

    var bookshelf = new DataCard("Bookshelf", "Raft de cărți", "");  
    setParentAndChild(home, bookshelf);  

    var blanket = new DataCard("Blanket", "Pătură", "");  
    setParentAndChild(home, blanket);  

    var package_ = new DataCard("Package", "Colet", "");  
    setParentAndChild(home, package_);  

    var Fireworks = new DataCard("Fireworks", "Artificii", "");
    setParentAndChild(home, Fireworks)

    var Ribbon = new DataCard("Ribbon", "Fundă", "");
    setParentAndChild(home, Ribbon)

    var Candle = new DataCard("Candle", "Lumânare", "");
    setParentAndChild(home, Candle)

    var Paperchains = new DataCard("Paper Chains", "Ghirlandă", "");
    setParentAndChild(home, Paperchains)

    var TableCloth = new DataCard("Table Cloth", "Față de Masă", "");
    setParentAndChild(home, TableCloth)

    var Lightbulb = new DataCard("Lightbulb", "Bec", "");
    setParentAndChild(home, Lightbulb)

    var FancyDress = new DataCard("Fancy Dress", "Deghizări", "");
    setParentAndChild(home, FancyDress)

    var TeddyBear = new DataCard("Teddy Bear", "Ursuleț de Pluș", "");
    setParentAndChild(home, TeddyBear)

    var Present = new DataCard("Present", "Cadou", "");
    setParentAndChild(home, Present)

    var Party = new DataCard("The Party", "Petrecerea", "");
    setParentAndChild(home, Party)

    var Pillow = new DataCard("Pillow", "Pernă", "");
    setParentAndChild(home, Pillow)

    var Computer = new DataCard("Computer", "Computer (Calculator)", "");
    setParentAndChild(home, Computer)

    //#toys
    var Toys = new DataCard("Toys", "Jucării", "");
    setParentAndChild(atHome, Toys)

    var doll = new DataCard("Doll", "Păpușă", "");  
    setParentAndChild(atHome, doll); 
    
    var story = new DataCard("Story", "Poveste", "");  
    setParentAndChild(atHome, story);  

    var Comic = new DataCard("Comic", "Revistă de Benzi Desenate", "");
    setParentAndChild(Toys, Comic)

    var Jigsaw = new DataCard("Jigsaw Puzzle", "Puzzle", "");
    setParentAndChild(Toys, Jigsaw)

    var TrainSet = new DataCard("Train Set", "Trenuleț Electric", "");
    setParentAndChild(Toys, TrainSet)

    var Dice = new DataCard("Dice", "Zaruri", "");
    setParentAndChild(Toys, Dice)

    var Robot = new DataCard("Robot", "Robot", "");
    setParentAndChild(Toys, Robot)

    var Necklace = new DataCard("Necklace", "Colier (Mărgele)", "");
    setParentAndChild(Toys, Necklace)

    var Beads = new DataCard("Beads", "Mărgele, (Perle)", "");
    setParentAndChild(Toys, Beads)

    var Dolls = new DataCard("Dolls", "Păpuși", "");
    setParentAndChild(Toys, Dolls)

    var Guitar = new DataCard("Guitar", "Chitară", "");
    setParentAndChild(Toys, Guitar)

    var RingAcc = new DataCard("Ring (Accessory)", "Inel", "");
    setParentAndChild(Toys, RingAcc)

    var Whistel = new DataCard("Whistel", "Fluier", "");
    setParentAndChild(Toys, Whistel)

    var Cubes = new DataCard("Cubes", "Cuburi", "");
    setParentAndChild(Toys, Cubes)

    var Castle = new DataCard("Castle", "Castel (Cetate)", "");
    setParentAndChild(Toys, Castle)

    var Submarine = new DataCard("Submarine", "Submarin", "");
    setParentAndChild(Toys, Submarine)

    var Trumpet = new DataCard("Trumpet", "Trompetă", "");
    setParentAndChild(Toys, Trumpet)

    var Arrows = new DataCard("Arrows", "Săgeți", "");
    setParentAndChild(Toys, Arrows)

    var Harmonica = new DataCard("Harmonica", "Muzicuță", "");
    setParentAndChild(Toys, Harmonica)

    var Crane = new DataCard("Crane", "macara", "");
    setParentAndChild(Toys, Crane)

    var PlayingCards = new DataCard("Playing Cards", "Cărți de joc", "");
    setParentAndChild(Toys, PlayingCards)

    var Drums = new DataCard("Drums", "Tobe", "");
    setParentAndChild(Toys, Drums)

    var Soldiers = new DataCard("Soldiers", "Soldăței de plumb", "");
    setParentAndChild(Toys, Soldiers)

    var Paints = new DataCard("Paints", "Acuarele", "");
    setParentAndChild(Toys, Paints)

    var Rocket = new DataCard("Rocket", "Rachetă", "");
    setParentAndChild(Toys, Rocket)

    var Puppets = new DataCard("Puppets", "Marionete", "");
    setParentAndChild(Toys, Puppets)

    var Marbles = new DataCard("Marbles", "Bile", "");
    setParentAndChild(Toys, Marbles)

    var Masks = new DataCard("Masks", "Măști", "");
    setParentAndChild(Toys, Masks)

    var Piano = new DataCard("Piano", "Pian", "");
    setParentAndChild(Toys, Piano)

    var Boat = new DataCard("Boat", "Barcă", "");
    setParentAndChild(Toys, Boat)

    var Parachute = new DataCard("Parachute", "Parașută", "");
    setParentAndChild(Toys, Parachute)

    var Bow = new DataCard("Bow (arrow)", "Arc", "");
    setParentAndChild(Toys, Bow)

    // #people ================================
    var people = new DataCard("People", "Oamenii", "")
    setParentAndChild(nouns, people)

    var men = new DataCard(
        "Man", "Barbat",
        NounTemplateMale("bărbat", "bărbați", "bărbatul", "bărbații")
    )
    setParentAndChild(people, men)

    var woman = new DataCard(
        "Woman", "Femeie",
        NounTemplateFemale("femeie", "femei", "femeia", "femeile")
    )
    setParentAndChild(people, woman)

    var Child = new DataCard("Child", "Copil", NounTemplateMale("copil", "copi", "copilul", "copii"));
    setParentAndChild(people, Child)

    var Baby = new DataCard("Baby", "Bebeluș", "");
    setParentAndChild(people, Baby)

    var Boy = new DataCard("Boy", "Băiat", "");
    setParentAndChild(people, Boy)

    var Girl = new DataCard("Girl", "Fată", "");
    setParentAndChild(people, Girl)

    // #clothes
    var Clothes = new DataCard("Clothes", "Hainele", "");
    setParentAndChild(people, Clothes)

    var DressingGown = new DataCard("Dressing Gown", "Halat", "");
    setParentAndChild(Clothes, DressingGown)

    var Watch = new DataCard("Watch", "Ceas de Mână", "");
    setParentAndChild(Clothes, Watch)

    var Nightdress = new DataCard("Nightdress", "Cămșă de Noapte", "");
    setParentAndChild(Clothes, Nightdress)

    var Pyjamas = new DataCard("Pyjamas", "Pijama", "");
    setParentAndChild(Clothes, Pyjamas)

    var Nappy = new DataCard("Nappy", "Pampers", "");
    setParentAndChild(Clothes, Nappy)

    var Slippers = new DataCard("Slippers", "Papuci", "");
    setParentAndChild(Clothes, Slippers)

    var SwimmingCostume = new DataCard("Swimming Costume", "Costum de Baie", "");
    setParentAndChild(Clothes, SwimmingCostume)

    var Sunhat = new DataCard("Sunhat", "Pălărie de Soare", "");
    setParentAndChild(Clothes, Sunhat)

    var Flippers = new DataCard("Flippers", "Labe de Scafandru", "");
    setParentAndChild(Clothes, Flippers)

    var Socks = new DataCard("Socks", "Şosete", "");
    setParentAndChild(Clothes, Socks)

    var Pants = new DataCard("Pants", "Chiloți", "");
    setParentAndChild(Clothes, Pants)

    var Vest = new DataCard("Vest", "Maiou", "");
    setParentAndChild(Clothes, Vest)

    var Trousers = new DataCard("Trousers", "Pantaloni", "");
    setParentAndChild(Clothes, Trousers)

    var Jeans = new DataCard("Jeans", "Blugi", "");
    setParentAndChild(Clothes, Jeans)

    var tShirt = new DataCard("T-Shirt", "Tricou (T-shirt)", "");
    setParentAndChild(Clothes, tShirt)

    var Skirt = new DataCard("Skirt", "Fustă", "");
    setParentAndChild(Clothes, Skirt)

    var Shirt = new DataCard("Shirt", "Cămașă", "");
    setParentAndChild(Clothes, Shirt)

    var Tie = new DataCard("Tie", "Cravată", "");
    setParentAndChild(Clothes, Tie)

    var Shorts = new DataCard("Shorts", "Pantaloni Scurți (șort)", "");
    setParentAndChild(Clothes, Shorts)

    var Tights = new DataCard("Tights", "Dres", "");
    setParentAndChild(Clothes, Tights)

    var Dress = new DataCard("Dress", "Rochie", "");
    setParentAndChild(Clothes, Dress)

    var Jumper = new DataCard("Jumper", "Pulover", "");
    setParentAndChild(Clothes, Jumper)

    var Sweatshirt = new DataCard("Sweatshirt", "Tricou de Sport", "Bluză Sport cu mânecă lungă");
    setParentAndChild(Clothes, Sweatshirt)

    var Cardigan = new DataCard("Cardigan", "Jachetă (Pulover cu nasturi)", "");
    setParentAndChild(Clothes, Cardigan)

    var Scarf = new DataCard("Scarf", "Fular", "");
    setParentAndChild(Clothes, Scarf)

    var Handkerchief = new DataCard("Handkerchief", "Batistă", "");
    setParentAndChild(Clothes, Handkerchief)

    var Trainers = new DataCard("Trainers", "Pantofi sport (Adidași)", "");
    setParentAndChild(Clothes, Trainers)

    var Sandals = new DataCard("Sandals", "Sandale", "");
    setParentAndChild(Clothes, Sandals)

    var Boots = new DataCard("Boots", "Cizme", "");
    setParentAndChild(Clothes, Boots)

    var Gloves = new DataCard("Gloves", "Mănuși", "");
    setParentAndChild(Clothes, Gloves)

    var Belt = new DataCard("Belt", "Curea", "");
    setParentAndChild(Clothes, Belt)

    var Buckle = new DataCard("Buckle", "Cataramă", "");
    setParentAndChild(Clothes, Buckle)

    var Zip = new DataCard("Zip", "Fermoar", "");
    setParentAndChild(Clothes, Zip)

    var Shoelace = new DataCard("Shoelace", "Şiret", "");
    setParentAndChild(Clothes, Shoelace)

    var Buttons = new DataCard("Buttons", "Nasturi", "");
    setParentAndChild(Clothes, Buttons)

    var ButtonHoles = new DataCard("Button Holes", "Butoniere", "");
    setParentAndChild(Clothes, ButtonHoles)

    var Pockets = new DataCard("Pockets", "Buzunare", "");
    setParentAndChild(Clothes, Pockets)

    var Coat = new DataCard("Coat", "Palton (Haină)", "");
    setParentAndChild(Clothes, Coat)

    var Jacket = new DataCard("Jacket", "Jachetă", "");
    setParentAndChild(Clothes, Jacket)

    var BaseballCap = new DataCard("Cap (Baseball)", "Şapcă", "");
    setParentAndChild(Clothes, BaseballCap)

    var Hat = new DataCard("Hat", "Pălărie", "");
    setParentAndChild(Clothes, Hat)

    var Bag = new DataCard("Bag", "Punga", "");
    setParentAndChild(Clothes, Bag)

    var Lace = new DataCard("Lace", "Șiret", ""); 
    setParentAndChild(Clothes, Lace);

    var Sole = new DataCard("Sole", "Talpă", ""); 
    setParentAndChild(Clothes, Sole);

    var Rubber = new DataCard("Rubber", "Cauciuc", ""); 
    setParentAndChild(Clothes, Rubber);

    var Bag = new DataCard("Bag", "Geanta", ""); 
    setParentAndChild(Clothes, Bag);

    var HighHeels = new DataCard("High Heels", "Tocuri Înalte", ""); 
    setParentAndChild(Clothes, HighHeels);

    var Shoes = new DataCard("Shoes", "Încălțăminte", ""); 
    setParentAndChild(Clothes, Shoes);

    var Pair = new DataCard("Pair/Pairs", "Pereche/Perechi", ""); 
    setParentAndChild(Clothes, Pair);

    var FlipFlops = new DataCard("Flip Flops", "Șlapi", ""); 
    setParentAndChild(Clothes, FlipFlops);

    var Leather = new DataCard("Leather", "Piele", ""); 
    setParentAndChild(Clothes, Leather);

    var Silk = new DataCard("Silk", "Mătase", ""); 
    setParentAndChild(Clothes, Silk);

    var Gem = new DataCard("Gem", "Piatră Prețioasă", ""); 
    setParentAndChild(Clothes, Gem);

    var Raincoat = new DataCard("Raincoat", "Pelerină de Ploaie", ""); 
    setParentAndChild(Clothes, Raincoat);

    var SmallJacket = new DataCard("Small Jacket", "Sacou", ""); 
    setParentAndChild(Clothes, SmallJacket);

    var Bracelet = new DataCard("Bracelet", "Brățară", ""); 
    setParentAndChild(Clothes, Bracelet);

    var Tag = new DataCard("Tag", "A Eticheta", ""); 
    setParentAndChild(Clothes, Tag);

    var Necklace = new DataCard("Necklace", "Colier", ""); 
    setParentAndChild(Clothes, Necklace);

    // #families
    var families = new DataCard(
        "Families", "Familiile",
        NounTemplateFemale("", "", "", "")
    )
    setParentAndChild(people, families)

    var son = new DataCard("Son", "Fiu", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, son)

    var brother = new DataCard("Brother", "Frate", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, brother)

    var daughter = new DataCard("Daughter", "Fiică", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, daughter)

    var sister = new DataCard("Sister", "Soră", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, sister)

    var relatives = new DataCard("Relatives", "Rude", "");  
    setParentAndChild(families, relatives);  

    var mother = new DataCard("Mother", "Mamă", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, mother)

    var wife = new DataCard("Wife", "Soție", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, wife)

    var widow = new DataCard("Widow", "Văduvă", "");  
    setParentAndChild(families, widow);  

    var father = new DataCard("Father", "Tată", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, father)

    var husband = new DataCard("Husband", "Soț", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, husband)

    var aunt = new DataCard("Aunt", "Mătușă", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, aunt)

    var uncle = new DataCard("Uncle", "Unchi", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, uncle)

    var cousinM = new DataCard("Cousin (male)", "Văr", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, cousinM)

    var cousinF = new DataCard("Cousin (female)", "Verișor", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, cousinF)

    var grandfather = new DataCard("Grandfather", "Bunic", NounTemplateMale("", "", "", ""));
    setParentAndChild(families, grandfather)

    var grandmother = new DataCard("Grandmother", "Bunică", NounTemplateFemale("", "", "", ""));
    setParentAndChild(families, grandmother)

    // #jobs
    var workJob = new DataCard(
        "Work (job)", "Mancă",
        NounTemplateFemale("", "", "", "")
    )
    setParentAndChild(people, workJob)

    var guy = new DataCard("Guy", "Tip", "");  
    setParentAndChild(nouns, guy);  

    var Teacher = new DataCard("Teacher", "Învătăoare (Profesoară)", "");
    setParentAndChild(workJob, Teacher)

    var Nurse = new DataCard("Nurse", "Infirmier", "");
    setParentAndChild(workJob, Nurse)

    var HealthCareAssistant = new DataCard("Health Care Assistant", "Asistent Medical", "");
    setParentAndChild(workJob, HealthCareAssistant)

    var Doctor = new DataCard("Doctor", "Doctor", "");
    setParentAndChild(workJob, Doctor)

    var WaterSkier = new DataCard("Water Skier", "Schior Nautic", "");
    setParentAndChild(workJob, WaterSkier)

    var Sailor = new DataCard("Sailor", "Marinar", "");
    setParentAndChild(workJob, Sailor)

    var Farmer = new DataCard("Farmer", "Fermier", "");
    setParentAndChild(workJob, Farmer)

    var policeOfficer = new DataCard("Police officer", "Ofițer de poliție", "");  
    setParentAndChild(workJob, policeOfficer);

    var TrainDriver = new DataCard("Train Driver", "Mecanic de Locomotivă", "");
    setParentAndChild(workJob, TrainDriver)

    var TicketInspector = new DataCard("Ticket Inspector", "Conductoare", "Controloare de bilete");
    setParentAndChild(workJob, TicketInspector)

    var Pilot = new DataCard("Pilot", "Pilot", "");
    setParentAndChild(workJob, Pilot)

    var CabinCrew = new DataCard("Cabin Crew", "Echipaj", "");
    setParentAndChild(workJob, CabinCrew)

    var Fisherman = new DataCard("Fisherman", "Pescar", "");
    setParentAndChild(workJob, Fisherman)

    var actor = new DataCard("Actor", "Actor", "");
    setParentAndChild(workJob, actor)

    var actress = new DataCard("Actress", "Actriță", "");
    setParentAndChild(workJob, actress)

    var butcher = new DataCard("Butcher", "Măcelar", "");
    setParentAndChild(workJob, butcher)

    var policeman = new DataCard("Policeman", "Polițist", "");
    setParentAndChild(workJob, policeman)

    var policewoman = new DataCard("Policewoman", "Polițistă", "");
    setParentAndChild(workJob, policewoman)

    var artist = new DataCard("Artist", "artist", "");
    setParentAndChild(workJob, artist)

    var chef = new DataCard("Chef", "Bucătar", "");
    setParentAndChild(workJob, chef)

    var singers = new DataCard("Singers", "Cântăreți", "");
    setParentAndChild(workJob, singers)

    var dancers = new DataCard("Dancers", "Dansatori", "");
    setParentAndChild(workJob, dancers)

    var astronaut = new DataCard("Astronaut", "Astronaut", "");
    setParentAndChild(workJob, astronaut)

    var Carpenter = new DataCard("Carpentar", "Tâmplar", "");
    setParentAndChild(workJob, Carpenter)

    var Firefighter = new DataCard("Firefighter", "Pompier", "");
    setParentAndChild(workJob, Firefighter)

    var Judge = new DataCard("Judge", "Judecător", "");
    setParentAndChild(workJob, Judge)

    var Mechanics = new DataCard("Mechanics", "Mechanici", "");
    setParentAndChild(workJob, Mechanics)

    var Hairdresser = new DataCard("Hairdresser", "Frizer", "");
    setParentAndChild(workJob, Hairdresser)

    var lorryDriver = new DataCard("Lorry driver", "Şofer de autobuz", "");
    setParentAndChild(workJob, lorryDriver)

    var waiter = new DataCard("Waiter", "Chelner", "");
    setParentAndChild(workJob, waiter)

    var Waitress = new DataCard("Waitress", "Chelnerița", "");
    setParentAndChild(workJob, Waitress)

    var Postman = new DataCard("Postman", "Poștaș", "");
    setParentAndChild(workJob, Postman)

    var painter = new DataCard("Painter (decorator)", "Zugrav", "");
    setParentAndChild(workJob, painter)

    var diver = new DataCard("Diver", "Scanfandru", "");
    setParentAndChild(workJob, diver)

    var baker = new DataCard("Baker", "Brutăriță", "");
    setParentAndChild(workJob, baker)

    var Singer = new DataCard("Singer", "Cântăreț", "");
    setParentAndChild(workJob, Singer);

    var RoomMaid = new DataCard("Room Maid", "Cameristă", "");
    setParentAndChild(workJob, RoomMaid);

    var Apprenticeship = new DataCard("Apprenticeship", "Ucenicie", "");
    setParentAndChild(workJob, Apprenticeship);

    var OfficeWorker = new DataCard("Office Worker", "Funcționar", "");
    setParentAndChild(workJob, OfficeWorker);

    var BusinessMan = new DataCard("Business Man", "Om de afaceri", "");
    setParentAndChild(workJob, BusinessMan);


    // #shapes =================================
    var shapes = new DataCard("Shapes", "Formele geometrice", "")
    setParentAndChild(nouns, shapes)

    var diamond = new DataCard("Diamond", "Romb", "")
    setParentAndChild(shapes, diamond)

    var oval = new DataCard("Oval", "Oval", "")
    setParentAndChild(shapes, oval)

    var cone = new DataCard("Cone", "Con", "")
    setParentAndChild(shapes, cone)

    var line = new DataCard("Line", "Linie", "");  
    setParentAndChild(nouns, line); 

    var rectangle = new DataCard("Rectangle", "Dreptunghi", "")
    setParentAndChild(shapes, rectangle)

    var triangle = new DataCard("Triangle", "Triunghi", "")
    setParentAndChild(shapes, triangle)

    var star = new DataCard("Star", "Stea", "")
    setParentAndChild(shapes, star)

    var square = new DataCard("Square", "Pătrat", "")
    setParentAndChild(shapes, square)

    var circle = new DataCard("Circle", "Cerc", "")
    setParentAndChild(shapes, circle)

    var cube = new DataCard("Cube", "Cub", "")
    setParentAndChild(shapes, cube)

    var crescent = new DataCard("Crescent", "Semilună", "")
    setParentAndChild(shapes, crescent)

    // #body =======================================
    var theBody = new DataCard("The body", "Corpul", "")
    setParentAndChild(nouns, theBody)

    var head = new DataCard("Head", "Cap", "")
    setParentAndChild(theBody, head)

    var hair = new DataCard("Hair", "Păr", "")
    setParentAndChild(theBody, hair)

    var face = new DataCard("Face", "Față", "")
    setParentAndChild(theBody, face)

    var life = new DataCard("Life", "Viața", "");  
    setParentAndChild(theBody, life);  

    var smile = new DataCard("Smile", "Zâmbet", "");  
    setParentAndChild(theBody, smile);  

    var arm = new DataCard("Arm", "Braț", "")
    setParentAndChild(theBody, arm)

    var muscle = new DataCard("Muscle", "Mușchi", "");  
    setParentAndChild(muscle, muscle); 

    var elbow = new DataCard("Elbow", "Cot", "")
    setParentAndChild(theBody, elbow)

    var tummy = new DataCard("Tummy", "Burtică", "")
    setParentAndChild(theBody, tummy)

    var toes = new DataCard("Toes", "Degete de la picioare", "")
    setParentAndChild(theBody, toes)

    var foot = new DataCard("Foot", "Laba piciorului", "")
    setParentAndChild(theBody, foot)

    var leg = new DataCard("Leg", "Picior", "Gambă")
    setParentAndChild(theBody, leg)

    var knee = new DataCard("Knee", "Genunchi", "")
    setParentAndChild(theBody, knee)

    var eyebrow = new DataCard("Eyebrow", "Sprânceană", "")
    setParentAndChild(theBody, eyebrow)

    var eye = new DataCard("Eye", "Ochi", "")
    setParentAndChild(theBody, eye)

    var nose = new DataCard("Nose", "Nas", "")
    setParentAndChild(theBody, nose)

    var cheek = new DataCard("Cheek", "Obraz", "")
    setParentAndChild(theBody, cheek)

    var mouth = new DataCard("Mouth", "Gură", "")
    setParentAndChild(theBody, mouth)

    var lips = new DataCard("Lips", "Buze", "")
    setParentAndChild(theBody, lips)

    var teeth = new DataCard("Teeth", "Dinți", "")
    setParentAndChild(theBody, teeth)

    var tongue = new DataCard("Tongue", "Limbă", "")
    setParentAndChild(theBody, tongue)

    var chin = new DataCard("Chin", "Bărbie", "")
    setParentAndChild(theBody, chin)

    var ears = new DataCard("Ears", "Urechi", "")
    setParentAndChild(theBody, ears)

    var neck = new DataCard("Neck", "Gât", "")
    setParentAndChild(theBody, neck)

    var shoulders = new DataCard("Shoulders", "Umeri", "")
    setParentAndChild(theBody, shoulders)

    var chest = new DataCard("Chest", "Piept", "")
    setParentAndChild(theBody, chest)

    var back = new DataCard("Back", "Spate", "")
    setParentAndChild(theBody, back)

    var bottom = new DataCard("Bottom", "Fund", "")
    setParentAndChild(theBody, bottom)

    var hand = new DataCard("Hand", "Mână", "")
    setParentAndChild(theBody, hand)

    var thumb = new DataCard("Thumb", "Degetul mare", "")
    setParentAndChild(theBody, thumb)

    var fingers = new DataCard("Fingers", "Degete de la mână", "")
    setParentAndChild(theBody, fingers)


    // =============================================================================
    // #Adverbs
    // =============================================================================

    var adverbs = new DataCard(
        "Adverbs", "Adverbe",
        "")
    setParentAndChild(romanian, adverbs);

    var when = new DataCard(
        "When", "Când",
        "")
    setParentAndChild(adverbs, when);

    var either = new DataCard(
        "Either", "Fie",
        "")
    setParentAndChild(adverbs, either);

    var neither = new DataCard(
        "Neither", "Nici",
        "")
    setParentAndChild(adverbs, neither);

    var never = new DataCard(
        "Never", "Niciodată",
        "")
    setParentAndChild(adverbs, never);

    var Only = new DataCard(
        "Only", "Numai",
        "")
    setParentAndChild(adverbs, Only);

    var how = new DataCard(
        "How", "Cum",
        "")
    setParentAndChild(adverbs, how);

    var where = new DataCard(
        "Where", "Unde",
        "")
    setParentAndChild(adverbs, where);

    var Almost = new DataCard(
        "Almost", "Abia",
        "")
    setParentAndChild(adverbs, Almost);

    var SoMuch = new DataCard("So Much", "Atât de mult", "");
    setParentAndChild(adverbs, SoMuch);

    var Yet = new DataCard("Yet", "Încă", "");
    setParentAndChild(adverbs, Yet);

    var Now = new DataCard("Now", "Fix", "");
    setParentAndChild(adverbs, Now);

    var Usually = new DataCard("Usually", "De obicei", "");
    setParentAndChild(adverbs, Usually);

    var Too = new DataCard("Too", "Prea", "");
    setParentAndChild(adverbs, Too);

    var Already = new DataCard("Already", "Deja", "");
    setParentAndChild(adverbs, Already);

    var Again = new DataCard("Again", "Din nou", "");
    setParentAndChild(adverbs, Again);

    var Clearly = new DataCard("Clearly", "Clar", "");
    setParentAndChild(adverbs, Clearly);

    var Finally = new DataCard("Finally", "În final", "");
    setParentAndChild(adverbs, Finally);

    var Just = new DataCard("Just", "Tocmai", "");
    setParentAndChild(adverbs, Just);

    var Early = new DataCard("Early", "Devreme", "");
    setParentAndChild(adverbs, Early);

    var Rather = new DataCard("Rather", "Destul de", "");
    setParentAndChild(adverbs, Rather);

    var Forever = new DataCard("Forever", "Pentru totdeauna", "");
    setParentAndChild(adverbs, Forever);

    var Still = new DataCard("Still", "Totuși", "");
    setParentAndChild(adverbs, Still);

    var Anyway = new DataCard("Anyway", "Oricum", "");
    setParentAndChild(adverbs, Anyway);

    var Already = new DataCard("Already", "Deja", "");
    setParentAndChild(adverbs, Already);

    var NotAtAll = new DataCard("Not at all", "Deloc", "");
    setParentAndChild(adverbs, NotAtAll);

    var InTheFuture = new DataCard("In the future", "În viitor", "");
    setParentAndChild(adverbs, InTheFuture);

    var firstly = new DataCard("Firstly", "Mai întâi", "");  
    setParentAndChild(adverbs, firstly);  

    var already = new DataCard("Already", "Deja", "");  
    setParentAndChild(adverbs, already);  

    var first = new DataCard("First", "În primul rând", "");  
    setParentAndChild(adverbs, first);  

    var notAtAll = new DataCard("Not at all", "Deloc", "");  
    setParentAndChild(adverbs, notAtAll);  


    // =============================================================================
    // #Conjunctions
    // =============================================================================

    var conjunctions = new DataCard(
        "Conjunctions", "Conjuncții",
        "")
    setParentAndChild(romanian, conjunctions);

    var _for = new DataCard(
        "For", "Pentru",
        "")
    setParentAndChild(conjunctions, _for);

    var because = new DataCard(
        "Because", "Pentru că",
        "")
    setParentAndChild(conjunctions, because);

    var and = new DataCard(
        "And", "Şi",
        "")
    setParentAndChild(conjunctions, and);

    var and2 = new DataCard(
        "And (alt)", "Iar",
        "")
    setParentAndChild(conjunctions, and2);

    var _if = new DataCard(
        "If", "Daca",
        "")
    setParentAndChild(conjunctions, _if);

    var _or = new DataCard(
        "Or", "Sau",
        "")
    setParentAndChild(conjunctions, _or);

    var _or2 = new DataCard(
        "Or (alt)", "Ori",
        "")
    setParentAndChild(conjunctions, _or2);

    var but = new DataCard(
        "But", "Dar",
        "")
    setParentAndChild(conjunctions, but);

    var before = new DataCard(
        "Before", "Inainte de",
        "")
    setParentAndChild(conjunctions, before);

    var Because = new DataCard("Because", "Deoarece", "");
    setParentAndChild(conjunctions, Because);

    var Although = new DataCard("Although", "Deși", "");
    setParentAndChild(conjunctions, Although);
    
    var Therefore = new DataCard("Therefore", "Deci", "");
    setParentAndChild(conjunctions, Therefore);
    
    var EvenThough = new DataCard("Even Though", "Chiar dacă", "");
    setParentAndChild(conjunctions, EvenThough);
    
    var So = new DataCard("So", "Așa că", "");
    setParentAndChild(conjunctions, So);
    
    var AsWell = new DataCard("As Well", "De asemenea", "");
    setParentAndChild(conjunctions, AsWell);
    
    var Like = new DataCard("Like (A is like B)", "Asemenea", "");
    setParentAndChild(conjunctions, Like);

    var InCase = new DataCard("In case", "În caz că", "");
    setParentAndChild(conjunctions, InCase);

    var still = new DataCard("Still", "Totuși", "");  
    setParentAndChild(conjunctions, still);  

    var isntIt = new DataCard("Isn't it", "Nu-i așa", "");  
    setParentAndChild(conjunctions, isntIt);  

    var okay = new DataCard("Okay", "Atunci", "");  
    setParentAndChild(conjunctions, okay);  



    // =============================================================================
    // #Numbers
    // =============================================================================

    var numbers = new DataCard(
        "Numbers", "Numere",
        "Todo")
    setParentAndChild(romanian, numbers);

    var one = new DataCard(
        "1 One", "1 Unu",
        "")
    setParentAndChild(numbers, one);

    var two = new DataCard(
        "2 Two", "2 Doi",
        "")
    setParentAndChild(numbers, two);

    var three = new DataCard(
        "3 Three", "3 Trei",
        "")
    setParentAndChild(numbers, three);

    var four = new DataCard(
        "4 Four", "4 Patru",
        "")
    setParentAndChild(numbers, four);

    var five = new DataCard(
        "5 Five", "5 Cinci",
        "")
    setParentAndChild(numbers, five);

    var six = new DataCard(
        "6 Six", "6 Şase",
        "")
    setParentAndChild(numbers, six);

    var seven = new DataCard(
        "7 Seven", "7 Şapte",
        "")
    setParentAndChild(numbers, seven);

    var eight = new DataCard(
        "8 Eight", "8 Opt",
        "")
    setParentAndChild(numbers, eight);

    var nine = new DataCard(
        "9 Nine", "9 Nouă",
        "")
    setParentAndChild(numbers, nine);

    var ten = new DataCard(
        "10 Ten", "10 Zece",
        "")
    setParentAndChild(numbers, ten);




    // =============================================================================
    // #Pronouns
    // =============================================================================

    var pronouns = new DataCard(
        "Pronouns", "Pronume",
        "")
    setParentAndChild(romanian, pronouns);

    var another = new DataCard(
        "Another", "Alt",
        "")
    setParentAndChild(pronouns, another);

    var something = new DataCard(
        "Something", "Ceva",
        "")
    setParentAndChild(pronouns, something);

    var Which = new DataCard("Which", "Pe care", "");
    setParentAndChild(pronouns, Which);

    var Some = new DataCard("Some", "Niște", "");
    setParentAndChild(pronouns, Some);

    var Whose = new DataCard("Whose", "Al cui", "");
    setParentAndChild(pronouns, Whose);

    var AnyKindOf = new DataCard("Any Kind Of", "Niciun fel de", "");
    setParentAndChild(pronouns, AnyKindOf);

    var everyone = new DataCard("Everyone", "Tuturor", "");  
    setParentAndChild(pronouns, everyone);  

    var eachOther = new DataCard("Each other / with each other", "Unul pe/cu celălalte", "");  
    setParentAndChild(pronouns, eachOther);  

    var someone = new DataCard("Someone", "Cineva", "");  
    setParentAndChild(pronouns, someone);  

    var whatKindOf = new DataCard("What kind of", "Ce fel de", "");  
    setParentAndChild(pronouns, whatKindOf);  


    // =============================================================================
    // #Emotions
    // =============================================================================

    var emotions = new DataCard(
        "Emotions", "Emoții",
        "")
    setParentAndChild(romanian, emotions);

    var Happy = new DataCard(
        "Happy", "Fericit",
        "")
    setParentAndChild(emotions, Happy);

    var Sad = new DataCard(
        "Sad", "Trist",
        "")
    setParentAndChild(emotions, Sad);

    var Bored = new DataCard(
        "Bored", "Plictisit",
        "")
    setParentAndChild(emotions, Bored);

    var Cheerful = new DataCard(
        "Cheerful", "Vesel",
        "")
    setParentAndChild(emotions, Cheerful);

    var Shy = new DataCard(
        "Shy (Timid)", "Timid",
        "")
    setParentAndChild(emotions, Shy);

    var Angry = new DataCard(
        "Angry", "Nervos",
        "")
    setParentAndChild(emotions, Angry);

    var Tired = new DataCard(
        "Tired", "Obosit",
        "")
    setParentAndChild(emotions, Tired);

    var Worried = new DataCard(
        "Worried", "Îngrijorat",
        "")
    setParentAndChild(emotions, Worried);

    var Upset = new DataCard(
        "Upset", "Supărat",
        "")
    setParentAndChild(emotions, Upset);

    var Excited = new DataCard(
        "Excited", "Entuziasmat",
        "")
    setParentAndChild(emotions, Excited);

    var Jealous = new DataCard(
        "Jealous", "Gelos",
        "")
    setParentAndChild(emotions, Jealous);
    
    var Heartbroken = new DataCard("Heartbroken", "Fi cu inima frântă", "");
    setParentAndChild(emotions, Heartbroken);

    var Horror = new DataCard("Horror", "Groază", "");
    setParentAndChild(emotions, Horror);

    var Unfortunate = new DataCard("Unfortunate", "Ghinion", "");
    setParentAndChild(emotions, Unfortunate);

    var Crush = new DataCard("A crush (romantic)", "O pasiune", "");
    setParentAndChild(emotions, Crush);

    var Hope = new DataCard("Hope", "Sper", "");
    setParentAndChild(emotions, Hope);


    return romanian;
}




