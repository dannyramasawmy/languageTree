import { defineCrossLinkRelationship, setParentAndChild, setParentAndMultipleChildren } from "../src/tree/functions.js";
import { DataCard, DataRoot } from "../src/tree/models.js";
import { VerbReflexiveSe, VerbReflexiveSi, Verb, NounNeuter, NounMale, NounFemale, Adjective, Conjunction, VerbModal, WordClass } from "./romanian-language-models.js";

/*
a ă â b c d e f g h i î j k l m n o p q r s ș t ț u v w x y z
https://www.thoughtco.com/html-codes-romanian-characters-4062226

special characters

Șș ă â Îî ț

*/

export function BuildLanguageTree() // returns romanian
{
    let romanian = new DataRoot(
        "Romanian", "Română",
        "Romanian language tree. <br>");

    romanian.SetParent(romanian);

    let wordclass_adjectives = new WordClass("Adjectives", "Adjective")
    let wordclass_adverbs = new WordClass("Adverbs", "Adverbe")
    let wordclass_conjunctions = new WordClass("Conjunctions", "Conjuncții")
    let wordclass_nouns = new WordClass("Nouns", "Substantive")
    let wordclass_numbers = new WordClass("Numbers", "Numere")
    let wordclass_prepositions = new WordClass("Prepositions", "Prepoziţii")
    let wordclass_pronouns = new WordClass("Pronouns", "Pronume")
    let wordclass_verbs = new WordClass("Verbs", "Verbe")
    let wordclass_verbs_modal = new WordClass("Modal Verbs", "Verbe Modal")
    let wordclass_interjections = new WordClass("Interjections", "Interjecţii")
    let wordclass_determiners = new WordClass("Determiners", "Determinatori")
    
    setParentAndMultipleChildren(romanian, [
        wordclass_adjectives, 
        wordclass_adverbs, 
        wordclass_conjunctions, 
        wordclass_nouns, 
        wordclass_numbers, 
        wordclass_prepositions, 
        wordclass_pronouns, 
        wordclass_verbs, 
        wordclass_verbs_modal, 
        wordclass_interjections, 
        wordclass_determiners
    ])


    defineCrossLinkRelationship(wordclass_verbs, wordclass_verbs_modal)

    // =============================================================================
    // #Verbs :
    // Checked against 
    //  - https://cooljugator.com/ro/suna
    //  - https://www.verbix.com/webverbix/go.php?T1=s%C4%83rb%C4%83tori&D1=5&H1=105
    // =============================================================================

    let modal_could = new VerbModal("Could", "Putea", ["aș", "ai", "ar", "am", "ați", "ar"]) 
    let modal_must = new VerbModal("Must", "Trebuie", ["", "", "", "", "", ""])
    let modal_should = new VerbModal("Should", "Ar Trebui", ["ar", "ar", "ar", "ar", "ar", "ar"])
        
    setParentAndMultipleChildren(wordclass_verbs_modal, [
        modal_could, modal_must, modal_should
    ])

    let to_achieve = new Verb("Achieve", "Realiza","realizez", "realizezi", "realizează", "realizăm", "realizați", "realizează", "realizat");
    let to_add = new Verb("Add", "Adăuga","adaug", "adaugi", "adaugă", "adăugăm", "adăugați", "adaugă", "adăugat");
    let to_admit = new Verb("Admit", "Recunoaște","recunosc", "recunoști", "recunoaște", "recunoaștem", "recunoașteți", "recunosc", "recunoscut");
    let to_agree = new Verb("Agree", "Fi de acord","sunt de acord", "ești de acord", "este de acord", "suntem de acord", "sunteți de acord", "sunt de acord", "fost de acord");
    let to_allow = new Verb("Allow", "Permite","permit", "permiți", "permite", "permitem", "permiteți", "permit", "permis");
    let to_analyze = new Verb("Analyze", "Analiza","analizez", "analizezi", "analizează", "analizăm", "analizați", "analizează", "analizat");
    let to_apologize = new Verb("Apologize", "Cere scuze","cer scuze", "ceri scuze", "cere scuze", "cerem scuze", "cereți scuze", "cer scuze", "cerut scuze");
    let to_apply = new Verb("Apply", "Aplica","aplic", "aplici", "aplică", "aplicăm", "aplicați", "aplică", "aplicat");
    let to_approve = new Verb("Approve", "Aproba","aprob", "aprobi", "aprobă", "aprobăm", "aprobați", "aprobă", "aprobat");
    let to_argue = new VerbReflexiveSe("Argue", "Certa", "cert", "cerți", "certă", "certăm", "certați", "certă", "certat");
    let to_arrive = new Verb("Arrive", "Ajunge","ajung", "ajungi", "ajunge", "ajungem", "ajungeți", "ajung", "ajuns");
    let to_ask = new Verb("Ask", "Întreba","întreb", "întrebi", "întreabă", "întrebăm", "întrebați", "întreabă", "întrebat");
    let to_bake = new Verb("Bake", "Coace","coc", "coci", "coace", "coacem", "coaceți", "coc", "copt");
    let to_be = new Verb("Be", "Fi", "sunt", "ești", "este", "suntem", "sunteți", "sunt", "fost");
    let to_beAvailable = new Verb("Be Available", "Fi disponibil","sunt disponibil", "ești disponibil", "este disponibil", "suntem disponibili", "sunteți disponibili", "sunt disponibili", "fost disponibil");
    let to_become = new Verb("Become", "Deveni","devin", "devii", "devine", "devenim", "deveniți", "devin", "devenit");
    let to_beDivorced = new Verb("Be Divorced", "Fi divorțat","sunt divorțat", "ești divorțat", "este divorțat", "suntem divorțați", "sunteți divorțați", "sunt divorțați", "fost divorțat");
    let to_beEngaged = new Verb("Be Engaged", "Fi logodit","sunt logodit", "ești logodit", "este logodit", "suntem logodiți", "sunteți logodiți", "sunt logodiți", "fost logodit");
    let to_beHonest = new Verb("Be Honest", "Fi cinstit","sunt cinstit", "ești cinstit", "este cinstit", "suntem cinstiți", "sunteți cinstiți", "sunt cinstiți", "fost cinstit");
    let to_beSure = new Verb("Be Sure", "Fi sigur","sunt sigur", "ești sigur", "este sigur", "suntem siguri", "sunteți siguri", "sunt siguri", "fost sigur");
    let to_blush = new Verb("Blush", "Roși","roșesc", "roșești", "roșește", "roșim", "roșiți", "roșesc", "roșit");
    let to_boil = new Verb("Boil", "Fierbe","fierb", "fierbi", "fierbe", "fierbem", "fierbeți", "fierb", "fiert");
    let to_breakIn = new Verb("Break Into", "Sparge","sparg", "spargi", "sparge", "spargem", "spargeți", "sparg", "spart");
    let to_breakUp = new VerbReflexiveSe("Break Up", "Despărți", "despart", "desparți", "desparte", "despărțim", "despărțiți", "despart", "despărțit");
    let to_bring = new Verb("Bring", "Aduce","aduc", "aduci", "aduce", "aducem", "aduceți", "aduc", "adus");
    let to_buy = new Verb("Buy", "Cumpăra","cumpăr", "cumpări", "cumpără", "cumpărăm", "cumpărați", "cumpără", "cumpărat");
    let to_call = new Verb("Call (shout)", "Striga","strig", "strigi", "strigă", "strigăm", "strigați", "strigă", "strigat");
    let to_can = new Verb("Can", "Putea","pot", "poți", "poate", "putem", "puteți", "pot", "putut");
    let to_cancel = new Verb("Cancel", "Anula","anulez", "anulezi", "anulează", "anulăm", "anulați", "anulează", "anulat");
    let to_carry = new Verb("Carry", "Duce","duc", "duci", "duce", "ducem", "duceți", "duc", "dus");
    let to_catch = new Verb("Catch", "Prinde","prind", "prinzi", "prinde", "prindem", "prindeți", "prind", "prins");
    let to_cause = new Verb("Cause", "Provoca","provoc", "provoci", "provoacă", "provocăm", "provocați", "provoacă", "provocat");
    let to_celebrate = new Verb("Celebrate", "Sărbători","sărbătoresc", "sărbătorești", "sărbătorește", "sărbătorim", "sărbătoriți", "sărbătoresc", "sărbătorit");
    let to_change = new Verb("Change", "Schimba","schimb", "schimbi", "schimbă", "schimbăm", "schimbați", "schimbă", "schimbat");
    let to_cheat = new Verb("Cheat", "Trișa","trișez", "trișezi", "trișează", "trișăm", "trișați", "trișează", "trișat");
    let to_choose = new Verb("Choose", "Alege","aleg", "alegi", "alege", "alegem", "alegeți", "aleg", "ales");
    let to_chop = new Verb("Chop", "Toca","toc", "toci", "toacă", "tocăm", "tocați", "toacă", "tocat");
    let to_clean = new Verb("Clean", "Face curățenie","fac curățenie", "faci curățenie", "face curățenie", "facem curățenie", "faceți curățenie", "fac curățenie", "făcut curățenie");
    let to_climb = new Verb("Climb", "Urca","urc", "urci", "urcă", "urcăm", "urcați", "urcă", "urcat");
    let to_close = new Verb("Close", "Închide","închid", "închizi", "închide", "închidem", "închideți", "închid", "închis");
    let to_come = new Verb("Come", "Veni","vin", "vii", "vine", "venim", "veniți", "vin", "venit");
    let to_comeBack = new VerbReflexiveSe("Come Back", "Întoarce", "întorc", "întorci", "întoarce", "întoarcem", "întoarceți", "întorc", "întors");
    let to_commitSuicide = new VerbReflexiveSe("Commit Suicide", "sinucide", "sinucid", "sinucizi", "sinucide", "sinucidem", "sinucideți", "sinucid", "sinucis");
    let to_compare = new Verb("Compare", "Compara","compar", "compari", "compară", "comparăm", "comparați", "compară", "comparat");
    let to_confess = new Verb("Confess", "Mărturisi","mărturisesc", "mărturisești", "mărturisește", "mărturisim", "mărturisiți", "mărturisesc", "mărturisit");
    let to_continueVerb = new Verb("Continue", "Continua","continuu", "continui", "continuă", "continuăm", "continuați", "continuă", "continuat");
    let to_cook = new Verb("Cook (prepare)", "Găti","gătesc", "gătești", "gătește", "gătim", "gătiți", "gătesc", "gătit");
    let to_cross = new Verb("Cross", "Traversa","traversez", "traversezi", "traversează", "traversăm", "traversați", "traversează", "traversat");
    let to_cry = new Verb("Cry", "Plânge","plâng", "plângi", "plânge", "plângem", "plângeți", "plâng", "plâns");
    let to_cut = new Verb("Cut", "Tăia","tai", "tai", "taie", "tăiem", "tăiați", "taie", "tăiat");
    let to_damage = new Verb("Damage", "Aletia","aletiez", "aletiezi", "aletiază", "aletiem", "aletiați", "aletiază", "aletiat");
    let to_dance = new Verb("Dance", "Dansa","dansez", "dansezi", "dansează", "dansăm", "dansați", "dansează", "dansat");
    let to_dateVerb = new VerbReflexiveSe("Date", "Întâlni", "întâlnesc", "întâlnești", "întâlnește", "întâlnim", "întâlniți", "întâlnesc", "întâlnit");
    let to_decide = new Verb("Decide", "Decide","decid", "decizi", "decide", "decidem", "decideți", "decid", "decis");
    let to_deny = new Verb("Deny", "Nega","neg", "negi", "neagă", "negăm", "negați", "neagă", "negat");
    let to_deposit = new Verb("Deposit", "Depune","depun", "depui", "depune", "depunem", "depuneți", "depun", "depus");
    let to_describe = new Verb("Describe", "Descrie","descriu", "descrii", "descrie", "descriem", "descrieți", "descriu", "descris");
    let to_desire = new VerbReflexiveSi("Desire (wish)", "Dori", "doresc", "dorești", "dorește", "dorim", "doriți", "doresc", "dorit");
    let to_destroy = new Verb("Destroy", "Distruge","distrug", "distrugi", "distruge", "distrugem", "distrugeți", "distrug", "distrus");
    let to_die = new Verb("Die", "Muri","mor", "mori", "moare", "murim", "muriți", "mor", "murit");
    let to_discuss = new Verb("Discuss", "Discuta","discut", "discuți", "discută", "discutăm", "discutați", "discută", "discutat");
    let to_divorce = new Verb("Divorce", "Divorța","divorțez", "divorțezi", "divorțează", "divorțăm", "divorțați", "divorțează", "divorțat");
    let to_do = new Verb("Do", "Face","fac", "faci", "face", "facem", "faceți", "fac", "făcut");
    let to_doubt = new Verb("Doubt", "Îndoi","îndoiesc", "îndoiești", "îndoiește", "îndoim", "îndoiți", "îndoiesc", "îndoit");
    let to_dream = new Verb("Dream", "Visa","visez", "visezi", "visează", "visăm", "visați", "visează", "visat");
    let to_drink = new Verb("Drink", "Bea", "beau", "bei", "bea", "bem", "beți", "beau", "băut");
    let to_drive = new Verb("Drive", "Conduce","conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus");
    let to_eat = new Verb("Eat", "Mânca", "mănânc", "mănânci", "mănâncă", "mâncăm", "mâncați", "mănâncă", "mâncat");
    let to_enroll = new VerbReflexiveSe("Enroll", "Înscrie", "înscriu", "înscrii", "înscrie", "înscriem", "înscrieți", "înscriu", "înscris");
    let to_enter = new Verb("Enter", "Intra","intru", "intri", "intră", "intrăm", "intrați", "intră", "intrat");
    let to_escape = new Verb("Escape", "Scăpa","scap", "scapi", "scapă", "scăpăm", "scăpați", "scapă", "scăpat");
    let to_exchange = new Verb("Exchange", "Schimba","schimb", "schimbi", "schimbă", "schimbăm", "schimbați", "schimbă", "schimbat");
    let to_exercise = new Verb("Exercise", "Face exerciții","fac exerciții", "faci exerciții", "face exerciții", "facem exerciții", "faceți exerciții", "fac exerciții", "făcut exerciții");
    let to_explain = new Verb("Explain", "Explica","explic", "explici", "explică", "explicăm", "explicați", "explică", "explicat");
    let to_express = new Verb("Express", "Exprima","exprim", "exprimi", "exprimă", "exprimăm", "exprimați", "exprimă", "exprimat");
    let to_fail = new Verb("Fail", "Eșua","eșuez", "eșuezi", "eșuează", "eșuăm", "eșuați", "eșuează", "eșuat");
    let to_fall = new Verb("Fall", "Cădea","cad", "cazi", "cade", "cădem", "cădeți", "cad", "căzut");
    let to_fallAsleep = new Verb("Fall Asleep", "Adormi","adorm", "adormi", "adoarme", "adormim", "adormiți", "adorm", "adormit");
    let to_feel = new Verb("Feel", "Simți","simt", "simți", "simte", "simțim", "simțiți", "simt", "simțit");
    let to_fight = new Verb("Fight", "Lupta","lupt", "lupți", "luptă", "luptăm", "luptați", "luptă", "luptat");
    let to_find = new Verb("Find", "Găsi","găsesc", "găsești", "găsește", "găsim", "găsiți", "găsesc", "găsit");
    let to_fit = new VerbReflexiveSe("Fit", "Potrivi", "potrivesc", "potrivești", "potrivește", "potrivim", "potriviți", "potrivesc", "potrivit");
    let to_fly = new Verb("Fly", "Zbura","zbor", "zbori", "zboară", "zburăm", "zburați", "zboară", "zburat");
    let to_follow = new Verb("Follow", "Urma","urmez", "urmezi", "urmează", "urmăm", "urmați", "urmează", "urmat");
    let to_forecast = new Verb("Forecast", "Prognoza","prognozez", "prognozezi", "prognozează", "prognozăm", "prognozați", "prognozează", "prognozat");
    let to_forget = new Verb("Forget", "Uita","uit", "uiți", "uită", "uităm", "uitați", "uită", "uitat");
    let to_forgive = new Verb("Forgive", "Ierta","iert", "ierți", "iertă", "iertăm", "iertați", "iertă", "iertat");
    let to_gather = new Verb("Gather", "Aduna","adun", "aduni", "adună", "adunăm", "adunați", "adună", "adunat");
    let to_getHurt = new Verb("Get Hurt", "Fi rănit","sunt rănit", "ești rănit", "este rănit", "suntem răniți", "sunteți răniți", "sunt răniți", "fost rănit");
    let to_getUp = new VerbReflexiveSe("Get up", "Trezi", "trezesc", "trezești", "trezește", "trezim", "treziți", "trezesc", "trezit");
    let to_give = new Verb("Give", "Da","dau", "dai", "dă", "dăm", "dați", "dau", "dat");
    let to_grill = new Verb("Grill", "Frige la grătar","frig la grătar", "frigi la grătar", "frige la grătar", "frigem la grătar", "frigeți la grătar", "frig la grătar", "fript la grătar");
    let to_guess = new Verb("Guess", "Ghici","ghicesc", "ghicești", "ghicește", "ghicim", "ghiciți", "ghicesc", "ghicit");
    let to_guessBelieve = new Verb("Guess (believe)", "Crede","cred", "crezi", "crede", "credem", "credeți", "cred", "crezut");
    let to_hangOut = new Verb("Hang Out", "Petrece timpul","petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut");
    let to_have = new Verb("Have", "Avea", "am", "ai", "are", "avem", "aveți", "au", "a")
    let to_hear = new Verb("Hear", "Auzi","aud", "auzi", "aude", "auzim", "auziți", "aud", "auzit");
    let to_heat = new Verb("Heat", "Încălzi","încălzesc", "încălzești", "încălzește", "încălzim", "încălziți", "încălzesc", "încălzit");
    let to_hide = new Verb("Hide", "Ascunde","ascund", "ascunzi", "ascunde", "ascundem", "ascundeți", "ascund", "ascuns");
    let to_hit = new Verb("Hit (kick)", "Lovi","lovesc", "lovești", "lovește", "lovim", "loviți", "lovesc", "lovit");
    let to_hold = new Verb("Hold", "Ține","țin", "ții", "ține", "ținem", "țineți", "țin", "ținut");
    let to_hug = new Verb("Hug", "Îmbrățișa","îmbrățișez", "îmbrățișezi", "îmbrățișează", "îmbrățișăm", "îmbrățișați", "îmbrățișează", "îmbrățișat");
    let to_imagine = new VerbReflexiveSi("Imagine", "Imagina", "imaginez", "imaginezi", "imaginează", "imaginăm", "imaginați", "imaginează", "imaginat");
    let to_improve = new Verb("Improve", "Îmbunătăți","îmbunătățesc", "îmbunătățești", "îmbunătățește", "îmbunătățim", "îmbunătățiți", "îmbunătățesc", "îmbunătățit");
    let to_interrupt = new Verb("Interrupt", "Întrerupe","întrerup", "întrerupi", "întrerupe", "întrerupem", "întrerupeți", "întrerup", "întrerupt");
    let to_interview = new Verb("Interview", "Intervieva","intervievez", "intervievezi", "intervievează", "intervievăm", "intervievati", "intervievează", "intervievat");
    let to_invite = new Verb("Invite", "Invita","invit", "inviţi", "invită", "invităm", "invitați", "invită", "invitat");
    let to_join = new VerbReflexiveSe("Join", "Alătura", "alătur", "alături", "alătură", "alăturăm", "alăturați", "alătură", "alăturat");
    let to_joke = new Verb("Joke", "Glumi","glumesc", "glumești", "glumește", "glumim", "glumiți", "glumesc", "glumit");
    let to_jump = new Verb("Jump", "Sări","sar", "sări", "sare", "sărim", "săriți", "sar", "sărit");
    let to_keep = new Verb("Keep", "Ține","țin", "ții", "ține", "ținem", "țineți", "țin", "ținut");
    let to_kill = new Verb("Kill", "Ucide","ucid", "ucizi", "ucide", "ucidem", "ucideți", "ucid", "ucis");
    let to_kiss = new Verb("Kiss", "Săruta","sărut", "săruți", "sărută", "sărutăm", "sărutați", "sărută", "sărutat");
    let to_know = new Verb("Know", "Ști","știu", "știi", "știe", "știm", "știți", "știu", "știut");
    let to_know2 = new Verb("Know (alt)", "Cunoaște","cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut");
    let to_laugh = new Verb("Laugh", "Râde","râd", "râzi", "râde", "râdem", "râdeți", "râd", "râs");
    let to_lead = new Verb("Lead", "Conduce","conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus");
    let to_learn = new Verb("Learn", "Învăța","învăț", "înveți", "învață", "învățăm", "învățați", "învață", "învățat");
    let to_leave = new Verb("Leave", "Pleca","plec", "pleci", "pleacă", "plecăm", "plecați", "pleacă", "plecat");
    let to_lie = new Verb("Lie", "Minți","mint", "minți", "minte", "mințim", "mințiți", "mint", "mințit");
    let to_like = new VerbReflexiveSi("Like", "Plăcea", "place", "place", "place", "place", "place", "place", "plăcut");
    let to_listen = new Verb("Listen", "Asculta","ascult", "asculți", "ascultă", "ascultăm", "ascultați", "ascultă", "ascultat");
    let to_live = new Verb("Live", "Trăi","trăiesc", "trăiești", "trăiește", "trăim", "trăiți", "trăiesc", "trăit");
    let to_lose = new Verb("Lose", "Pierde","pierd", "pierzi", "pierde", "pierdem", "pierd", "pierd", "pierdut");
    let to_love = new Verb("Love", "Iubi","iubesc", "iubești", "iubește", "iubim", "iubiți", "iubesc", "iubit");
    let to_marry = new VerbReflexiveSe("Marry", "Căsători", "căsătoresc", "căsătorești", "căsătorește", "căsătorim", "căsătoriți", "căsătoresc", "căsătorit");
    let to_meet = new Verb("Meet", "Întâlni","întâlnesc", "întâlnești", "întâlnește", "întâlnim", "întâlniți", "întâlnesc", "întâlnit");
    let to_miss = new Verb("Miss", "Rata","ratez", "ratezi", "ratează", "ratăm", "ratați", "ratează", "ratat");
    let to_mix = new Verb("Mix", "Amesteca","amestec", "amesteci", "amestecă", "amestecăm", "amestecați", "amestecă", "amestecat");
    let to_move = new Verb("Move", "Muta","mut", "muți", "mută", "mutăm", "mutați", "mută", "mutat");
    let to_observe = new Verb("Observe (gase)", "Observa","observ", "observi", "observă", "observăm", "observați", "observă", "observat");
    let to_obtain = new Verb("Obtain", "Obține","obțin", "obții", "obține", "obținem", "obțineți", "obțin", "obținut");
    let to_occur = new Verb("Occur", "Apară","apăr", "aperi", "apără", "apărăm", "apăraţi", "apără", "apărat");
    let to_open = new Verb("Open", "Deschide","deschid", "deschizi", "deschide", "deschidem", "deschideți", "deschid", "deschis");
    let to_order = new Verb("Order", "Comanda","comand", "comanzi", "comandă", "comandăm", "comandați", "comandă", "comandat");
    let to_paint = new Verb("Paint", "Vopsi","vopsesc", "vopsești", "vopsește", "vopsim", "vopsiți", "vopsesc", "vopsit");
    let to_party = new Verb("Party", "Petrece","petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut");
    let to_pass = new Verb("Pass", "Trece","trec", "treci", "trece", "trecem", "treceți", "trec", "trecut");
    let to_pay = new Verb("Pay", "Plăti","plătesc", "plătești", "plătește", "plătim", "plătiți", "plătesc", "plătit");
    let to_peel = new Verb("Peel", "Decoji","decojesc", "decojești", "decojește", "decojim", "decojiți", "decojesc", "decojit");
    let to_plan = new Verb("Plan", "Planifica","planific", "planifici", "planifică", "planificăm", "planificați", "planifică", "planificat");
    let to_play = new VerbReflexiveSe("Play", "Juca", "joc", "joci", "joacă", "jucăm", "jucați", "joacă", "jucat");
    let to_practice = new Verb("Practice", "Exersa","exersez", "exersezi", "exersează", "exersăm", "exersați", "exersează", "exersat");
    let to_praise = new Verb("Praise", "Lăuda","laud", "lauzi", "laudă", "lăudăm", "lăudați", "laudă", "lăudat");
    let to_prefer = new Verb("Prefer", "Prefera","prefer", "preferi", "preferă", "preferăm", "preferați", "preferă", "preferat");
    let to_prepare = new Verb("Prepare", "Pregăti","pregătesc", "pregătești", "pregătește", "pregătim", "pregătiți", "pregătesc", "pregătit");
    let to_present = new Verb("Present", "Prezenta","prezint", "prezinți", "prezintă", "prezentăm", "prezentați", "prezintă", "prezentat");
    let to_propose = new Verb("Propose", "Cere în căsătorie","cer în căsătorie", "cere în căsătorie", "cere în căsătorie", "cerem în căsătorie", "cereți în căsătorie", "cer în căsătorie", "cerut în căsătorie");
    let to_prove = new Verb("Prove", "Dovedi","dovedesc", "dovedești", "dovedește", "dovedim", "dovediți", "dovedesc", "dovedit");
    let to_pull = new Verb("Pull", "Trage","trag", "tragi", "trage", "tragem", "trageți", "trag", "tras");
    let to_push = new Verb("Push", "Împinge","împing", "împingi", "împinge", "împingem", "împingeți", "împing", "împins");
    let to_put = new Verb("Put", "Pune","pun", "pui", "pune", "punem", "puneți", "pun", "pus");
    let to_quit = new Verb("Quit", "Demisiona","demisionez", "demisionezi", "demisionează", "demisionăm", "demisionați", "demisionează", "demisionat");
    let to_read = new Verb("Read", "Citi","citesc", "citești", "citește", "citim", "citiți", "citesc", "citit");
    let to_receive = new Verb("Receive", "Primi","primesc", "primești", "primește", "primim", "primiți", "primesc", "primit");
    let to_recommend = new Verb("Recommend", "Recomanda","recomand", "recomanzi", "recomandă", "recomandăm", "recomandați", "recomandă", "recomandat");
    let to_recover = new VerbReflexiveSe("Recuperate", "recupera", "recuperez", "recuperezi", "recuperează", "recuperăm", "recuperați", "recuperează", "recuperat");
    let to_register = new Verb("Register", "Înregistra","înregistrez", "înregistrezi", "înregistrează", "înregistrăm", "înregistrați", "înregistrează", "înregistrat");
    let to_renovate = new Verb("Renovate", "Renova","renovez", "renovezi", "renovează", "renovăm", "renovați", "renovează", "renovat");
    let to_rent = new Verb("Rent", "Închiria","închiriez", "închiriezi", "închiriază", "închiriem", "închiriați", "închiriază", "închiriat");
    let to_repair = new Verb("Repair", "Repara","repar", "repari", "repară", "reparăm", "reparați", "repară", "reparat");
    let to_repeat = new Verb("Repeat", "Repeta","repet", "repeți", "repetă", "repetăm", "repetați", "repetă", "repetat");
    let to_replace = new Verb("Replace", "Înlocui","înlocuiesc", "înlocuiești", "înlocuiește", "înlocuim", "înlocuiți", "înlocuiesc", "înlocuit");
    let to_reside = new Verb("Reside (live)", "Locui","locuiesc", "locuiești", "locuiește", "locuim", "locuiți", "locuiesc", "locuit");
    let to_resolve = new Verb("Resolve", "Rezolva","rezolv", "rezolvi", "rezolvă", "rezolvăm", "rezolvați", "rezolvă", "rezolvat");
    let to_rest = new VerbReflexiveSe("Rest", "Odihni", "odihnesc", "odihnești", "odihnește", "odihnim", "odihniți", "odihnesc", "odihnit");
    let to_review = new Verb("Review", "Revizui","revizuiesc", "revizuiești", "revizuiește", "revizuim", "revizuiți", "revizuiesc", "revizuit");
    let to_ring = new Verb("Ring", "Suna","sun", "suni", "sună", "sunăm", "sunați", "sună", "sunat");
    let to_rise = new Verb("Rise", "Crește","cresc", "crești", "crește", "creștem", "creșteți", "cresc", "crescut");
    let to_rob = new Verb("Rob", "Jefui","jefuiesc", "jefuiești", "jefuiește", "jefuim", "jefuiți", "jefuiesc", "jefuit");
    let to_ruin = new Verb("Ruin", "Ruina","ruinez", "ruinezi", "ruinează", "ruinăm", "ruinați", "ruinează", "ruinat");
    let to_run = new Verb("Run", "Alerga","alerg", "alergi", "aleargă", "alergăm", "alergați", "aleargă", "alergat");
    let to_runAway = new Verb("Run (flee)", "Fugi","fug", "fugi", "fuge", "fugim", "fugiți", "fug", "fugit");
    let to_say = new Verb("Say", "Spune","spun", "spui", "spune", "spunem", "spuneți", "spun", "spus");
    let to_say2 = new Verb("Say (alt)", "Zice","zic", "zici", "zice", "zicem", "ziceți", "zic", "zis");
    let to_search = new Verb("Search", "Căuta","caut", "cauți", "caută", "căutăm", "căutați", "caută", "căutat");
    let to_seat = new VerbReflexiveSe("Stay (sit)", "Așeza", "așez", "așezi", "așază", "așezăm", "așezați", "așază", "așezat");
    let to_see = new Verb("See", "Vedea","văd", "vezi", "vede", "vedem", "vedeți", "văd", "văzut");
    let to_seem = new VerbReflexiveSe("Seem", "Părea", "par", "pari", "pare", "părem", "păreți", "par", "părut");
    let to_send = new Verb("Send", "Trimite","trimit", "trimiți", "trimite", "trimitem", "trimiteți", "trimit", "trimis");
    let to_shower = new Verb("Shower", "Face duș","fac duș", "faci duș", "face duș", "facem duș", "faceți duș", "fac duș", "făcut duș");
    let to_sing = new Verb("Sing", "Cânta","cânt", "cânți", "cântă", "cântăm", "cântați", "cântă", "cântat");
    let to_sleep = new Verb("Sleep", "Dormi","dorm", "dormi", "doarme", "dormim", "dormiți", "dorm", "dormit");
    let to_sleepWith = new VerbReflexiveSe("Sleep (with)", "Culci", "culc", "culci", "culca", "culcam", "culcați", "culca", "culcat");
    let to_smell = new Verb("Smell", "Mirosi","miros", "miroși", "miroase", "mirosim", "mirosiți", "miros", "mirosit");
    let to_smile = new Verb("Smile", "Zămbi","zămbesc", "zămbesti", "zămbeste", "zămbim", "zămbiți", "zămbesc", "zămbit");    
    let to_speak = new Verb("Speak", "Vorbi","vorbesc", "vorbești", "vorbește", "vorbim", "vorbiți", "vorbesc", "vorbit");
    let to_stand = new VerbReflexiveSe("Stand", "Ridica", "ridic", "ridici", "ridică", "ridicăm", "ridicați", "ridică", "ridicat");
    let to_stay = new Verb("Stay", "Sta","stau", "stai", "stă", "stăm", "stați", "stau", "stat");
    let to_stirFry = new Verb("Stir Fry", "Căli","călesc", "călești", "călește", "călim", "căliți", "călesc", "călit");
    let to_stop = new Verb("Stop", "Opri","opresc", "oprești", "oprește", "oprim", "opriți", "opresc", "oprit");
    let to_suggest = new Verb("Suggest", "Sugera","sugerez", "sugerezi", "sugerează", "sugerăm", "sugerați", "sugerează", "sugerat");
    let to_suppose = new Verb("Suppose", "Presupune","presupun", "presupui", "presupune", "presupunem", "presupuneți", "presupun", "presupus");
    let to_sweat = new Verb("Sweat", "Transpira","transpir", "transpiri", "transpiră", "transpirăm", "transpirați", "transpiră", "transpirat");
    let to_take = new Verb("Take", "Lua","iau", "iei", "ia", "luăm", "luați", "iau", "luat");
    let to_takeOff = new VerbReflexiveSe("Take off", "Dezbrăca", "dezbrac", "dezbraci", "dezbracă", "dezbrăcăm", "dezbrăcați", "dezbracă", "dezbrăcat");
    let to_teach = new Verb("Teach", "Preda","predau", "predai", "predă", "predăm", "predați", "predau", "predat");
    let to_think = new VerbReflexiveSe("Think", "Gândi", "gândesc", "gândești", "gândește", "gândim", "gândiți", "gândesc", "gândit");
    let to_tie = new Verb("Tie", "Lega","leg", "legi", "leagă", "legăm", "legați", "leagă", "legat");
    let to_toMeet = new Verb("Meet", "Cunoaște","cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut");
    let to_toPlace = new Verb("Place", "Așeza","așez", "așezi", "așează", "așezăm", "așezați", "așează", "așezat");
    let to_toPresent = new Verb("Present", "Prezenta","prezint", "prezinți", "prezintă", "prezentăm", "prezentați", "prezintă", "prezentat");
    let to_treat = new Verb("Treat", "Trata","tratez", "tratezi", "tratează", "tratăm", "trataţi", "tratează", "tratat");
    let to_try = new Verb("Try", "Incerca","încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat");
    let to_tryOn = new Verb("Try On", "Proba","prob", "probi", "probă", "probăm", "probați", "probă", "probat");
    let to_tryVerb = new Verb("Try", "Încerca","încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat");
    let to_turn = new Verb("Turn", "Vira","virez", "virezi", "virează", "virăm", "virați", "virează", "virat");
    let to_turnOn = new Verb("Turn on", "Porni","pornesc", "pornești", "pornește", "pornim", "porniți", "pornesc", "pornit");
    let to_type = new Verb("Type", "Tasta","tastez", "tastezi", "tastează", "tastăm", "tastați", "tastează", "tastat");
    let to_understand = new Verb("Understand", "Înțelege","înțeleg", "înțelegi", "înțelege", "înțelegem", "înțelegeți", "înțeleg", "înțeles");
    let to_verify = new Verb("Verify", "Verifica","verific", "verifici", "verifică", "verificăm", "verificați", "verifică", "verificat");
    let to_visit = new Verb("Visit", "Vizita","vizitez", "vizitezi", "vizitează", "vizităm", "vizitați", "vizitează", "vizitat");
    let to_wait = new Verb("Wait", "Aștepta","aștept", "aștepți", "așteaptă", "așteptăm", "așteptați", "așteaptă", "așteptat");
    let to_walk = new Verb("Walk (go)", "Merge","merg", "mergi", "merge", "mergem", "mergeți", "merg", "mers");
    let to_want = new Verb("Want", "Vrea","vreau", "vrei", "vrea", "vrem", "vreți", "vor", "vrut");
    let to_wash = new VerbReflexiveSe("Wash", "Spăla", "spăl", "speli", "spală", "spălăm", "spălați", "spală", "spălat");
    let to_win = new Verb("Win", "Câștiga","câștig", "câștigi", "câștigă", "câștigăm", "câștigați", "câștigă", "câștigat");
    let to_wipeOut = new Verb("Wipe Out", "Nimici","nimicesc", "nimicești", "nimicește", "nimicim", "nimiciți", "nimicesc", "nimicit");
    let to_work = new Verb("Work", "Munci","muncesc", "muncești", "muncește", "muncim", "munciți", "muncesc", "muncit");
    let to_work2 = new Verb("Work (alt)", "Lucra","lucrez", "lucrezi", "lucrează", "lucrăm", "lucrați", "lucrează", "lucrat");
    let to_write = new Verb("Write", "Scrie","scriu", "scrii", "scrie", "scriem", "scrieți", "scriu", "scris");
    
    setParentAndMultipleChildren(wordclass_verbs, [
        to_achieve, to_add, to_admit, to_agree, to_allow, to_analyze, to_apologize, to_apply, to_approve, to_argue, to_arrive, to_ask, to_bake, to_be, to_beAvailable, 
        to_become, to_beDivorced, to_beEngaged, to_beHonest, to_beSure, to_blush, to_boil, to_breakIn, to_breakUp, to_bring, to_buy, to_call, to_can, to_cancel, to_carry, 
        to_catch, to_cause, to_celebrate, to_change, to_cheat, to_choose, to_chop, to_clean, to_climb, to_close, to_come, to_comeBack, to_commitSuicide, to_compare, to_confess, 
        to_continueVerb, to_cook, to_cross, to_cry, to_cut, to_damage, to_dance, to_dateVerb, to_decide, to_deny, to_deposit, to_describe, to_desire, to_destroy, to_die, to_discuss, 
        to_divorce, to_do, to_doubt, to_dream, to_drink, to_drive, to_eat, to_enroll, to_enter, to_escape, to_exchange, to_exercise, to_explain, to_express, to_fail, to_fall, 
        to_fallAsleep, to_feel, to_fight, to_find, to_fit, to_fly, to_follow, to_forecast, to_forget, to_forgive, to_gather, to_getHurt, to_getUp, to_give, to_grill, to_guess, 
        to_guessBelieve, to_hangOut, to_have, to_hear, to_heat, to_hide, to_hit, to_hold, to_hug, to_imagine, to_improve, to_interrupt, to_interview, to_invite, to_join, to_joke, 
        to_jump, to_keep, to_kill, to_kiss, to_know, to_know2, to_laugh, to_lead, to_learn, to_leave, to_lie, to_like, to_listen, to_live, to_lose, to_love, to_marry, to_meet, to_miss, 
        to_mix, to_move, to_observe, to_obtain, to_occur, to_open, to_order, to_paint, to_party, to_pass, to_pay, to_peel, to_plan, to_play, to_practice, to_praise, to_prefer, to_prepare, 
        to_present, to_propose, to_prove, to_pull, to_push, to_put,to_quit,to_read,to_receive,to_recommend,to_recover,to_register,to_renovate,to_rent,to_repair,to_repeat,to_replace,
        to_reside,to_resolve,to_rest,to_review,to_ring,to_rise,to_rob,to_ruin,to_run,to_runAway,to_say,to_say2,to_search,to_seat,to_see,to_seem,to_send,to_shower,to_sing,to_sleep,
        to_sleepWith,to_smell,to_smile,to_speak,to_stand,to_stay,to_stirFry,to_stop,to_suggest,to_suppose,to_sweat,to_take,to_takeOff,to_teach,to_think,to_tie,to_toMeet,to_toPlace,
        to_toPresent,to_treat,to_try,to_tryOn,to_tryVerb,to_turn,to_turnOn,to_type,to_understand,to_verify,to_visit,to_wait,to_walk,to_want,to_wash,to_win,to_wipeOut,to_work,
        to_work2,to_write])
    
    // =============================================================================
    // #Prepositions
    // =============================================================================
    
    let preposition_about = new DataCard("About", "Despre","")
    let preposition_above = new DataCard("Above", "De mai sus","")
    let preposition_abroad = new DataCard("Abroad", "În străinătate", "");  
    let preposition_after = new DataCard("After", "După","")
    let preposition_against = new DataCard("Against", "Împotriva","")
    let preposition_alongSide = new DataCard("Along side (next to)", "Pe langa","")
    let preposition_amid = new DataCard("Amid (in the middle of)", "În mijlocul","")
    let preposition_among = new DataCard("Among", "Printre","")
    let preposition_apartFrom = new DataCard("Apart from", "În afară de","")
    let preposition_at = new DataCard("At", "La","")
    let preposition_awayFrom = new DataCard("Away From", "Departe de", "");
    let preposition_behind = new DataCard("Behind", "In spate","")
    let preposition_beneath = new DataCard("Beneath", "Sub","")
    let preposition_beside = new DataCard("Beside (next to)", "Lângă","")
    let preposition_beyond = new DataCard("Beyond", "Dincolo","")
    let preposition_bottom = new DataCard("Bottom", "De Jos", "");
    let preposition_by = new DataCard("By", "De către", "");
    let preposition_closeTo = new DataCard("Close to", "Aproape de","")
    let preposition_from = new DataCard("From", "Din","")
    let preposition_high = new DataCard("High", "Sus", "");
    let preposition_in = new DataCard("In", "În (Înăuntru)","")
    let preposition_inBetween = new DataCard("In between", "Între","")
    let preposition_inFrontOf = new DataCard("In front of", "În fața","")
    let preposition_inside = new DataCard("Inside", "Interior","")
    let preposition_left = new DataCard("Left", "La Stânga", "");
    let preposition_low = new DataCard("Low", "Jos", "");
    let preposition_near = new DataCard("Near", "Apropape","")
    let preposition_of = new DataCard("Of", "De","")
    let preposition_on = new DataCard("On", "Pe","")
    let preposition_oppositeTo = new DataCard("Opposite To", "Peste drum de", "");
    let preposition_out = new DataCard("Out", "Afară", "");
    let preposition_outside = new DataCard("Outside", "In afara","")
    let preposition_over = new DataCard("Over", "Peste","")
    let preposition_right = new DataCard("Right", "La Dreapta", "");
    let preposition_since = new DataCard("Since", "De când","")
    let preposition_through = new DataCard("Through", "Prin","")
    let preposition_till = new DataCard("Until (till)", "Până (la)","")
    let preposition_together = new DataCard("Together", "Impreuna","")
    let preposition_top = new DataCard("Top", "De Sus", "");
    let preposition_towards = new DataCard("Towards", "Spre","")
    let preposition_until = new DataCard("Until", "Până când", "");
    let preposition_via = new DataCard("Via", "Prin", "");  
    let preposition_with = new DataCard("With", "Cu","")
    let preposition_without = new DataCard("Without", "Fără","")

    setParentAndMultipleChildren(wordclass_prepositions, [
        preposition_about, preposition_above, preposition_abroad, preposition_after, preposition_against, preposition_alongSide, preposition_amid, preposition_among, 
        preposition_apartFrom, preposition_at, preposition_awayFrom, preposition_behind, preposition_beneath, preposition_beside, preposition_beyond, preposition_bottom, 
        preposition_by, preposition_closeTo, preposition_from, preposition_high, preposition_in, preposition_inBetween, preposition_inFrontOf, preposition_inside, 
        preposition_left, preposition_low, preposition_near, preposition_of, preposition_on, preposition_oppositeTo, preposition_out, preposition_outside, 
        preposition_over, preposition_right, preposition_since, preposition_through, preposition_till, preposition_together, preposition_top, preposition_towards, 
        preposition_until, preposition_via, preposition_with, preposition_without])


    // =============================================================================
    // #Adjectives
    // =============================================================================

    let who = new DataCard("Who", "Cine","")
    setParentAndChild(wordclass_adjectives, who);

    let what = new DataCard(
        "What", "Ce",
        "")
    setParentAndChild(wordclass_adjectives, what);

    let which = new DataCard(
        "Which", "Care",
        "")
    setParentAndChild(wordclass_adjectives, which);

    // #quantities
    let quantities = new DataCard("Quantities", "Cantități", "");  
    setParentAndChild(wordclass_adjectives, quantities);  

    let every = new DataCard(
        "Every", "Fiecare",
        "")
    setParentAndChild(quantities, every);

    let all = new DataCard(
        "All", "Toate",
        "")
    setParentAndChild(quantities, all);

    let some = new DataCard(
        "Some (approximately)", "Vreo",
        "")
    setParentAndChild(quantities, some);

    let full = new DataCard("Full", "Sătul", "");  
    setParentAndChild(quantities, full);  
    
    let frequent = new DataCard("Frequent", "Frecvente", "");  
    setParentAndChild(quantities, frequent);
    
    let justRight = new DataCard("Just right", "Potrivit", "");  
    setParentAndChild(quantities, justRight);  

    let sufficient = new DataCard("Sufficient", "Suficient", "");  
    setParentAndChild(quantities, sufficient);  

    let Long = new DataCard("Long", "Lung", "");
    setParentAndChild(quantities, Long)

    let Short = new DataCard("Short", "Scurt", "");
    setParentAndChild(quantities, Short)

    let Empty = new DataCard("Empty", "Gol", "");
    setParentAndChild(quantities, Empty)

    let Full = new DataCard("Full", "Plin", "");
    setParentAndChild(quantities, Full)

    let Few = new DataCard("Few", "Puține", "Puțini");
    setParentAndChild(quantities, Few)

    let Many = new DataCard("Many", "Multe", "Mulți");
    setParentAndChild(quantities, Many)

    // #descriptiveadjectives
    let DescriptiveAdjective = new DataCard("Descriptive Adjective", "Adjective Descriptive", "");
    setParentAndChild(wordclass_adjectives, DescriptiveAdjective)

    const adj_alive = new Adjective("Alive", "viu", "vie", "vii", "vii");
    const adj_available = new Adjective("Available", "disponibil", "disponibilă", "disponibili", "disponibile");
    const adj_bad = new Adjective("Bad", "rău", "rea", "răi", "rele");
    const adj_big = new Adjective("Big", "mare", "mare", "mari", "mari");
    const adj_clean = new Adjective("Clean", "curat", "curată", "curați", "curate");
    const adj_close = new Adjective("Closed", "închis", "închisă", "închiși", "închise");
    const adj_cold = new Adjective("Cold", "rece", "rece", "reci", "reci");
    const adj_dead = new Adjective("Dead", "mort", "moartă", "morți", "moarte");
    const adj_difficult = new Adjective("Difficult", "dificil", "dificilă", "dificili", "dificile");
    const adj_dirty = new Adjective("Dirty", "murdar", "murdară", "muradari", "murdare");
    const adj_dry = new Adjective("Dry", "uscat", "uscată", "uscați", "uscate");
    const adj_easy = new Adjective("Easy", "ușor", "ușoară", "ușori", "ușoare");
    const adj_false_ = new Adjective("False", "fals", "falsă", "falși", "false");
    const adj_fast = new Adjective("Fast", "rapid", "rapidă", "rapizi", "rapide");
    const adj_fat = new Adjective("Fat", "gras", "grasă", "grași", "grase");
    const adj_first = new Adjective("First", "prim", "primă", "primi", "prime");
    const adj_good = new Adjective("Good", "bun", "bună", "buni", "bune");
    const adj_hard = new Adjective("Hard", "dur", "dură", "duri", "dure");
    const adj_hightemperature = new Adjective("High temperature", "ridicat", "ridicată", "ridicați", "ridicate");
    const adj_hot = new Adjective("Hot", "fierbinte", "fierbinte", "fierbinți", "fierbinți");
    const adj_loose = new Adjective("Loose", "larg", "largă", "largi", "largi");
    const adj_lowtemperature = new Adjective("Low temperature", "scăzut", "scăzută", "scăzuți", "scăzute");
    const adj_new = new Adjective("New", "nou", "nouă", "noi", "noi");
    const adj_old = new Adjective("Old", "vechi", "veche", "vechi", "vechi");
    const adj_open = new Adjective("Open", "deschis", "deschisă", "deschiși", "deschise");
    const adj_rough = new Adjective("Rough", "aspru", "aspră", "aspri", "aspre");
    const adj_slow = new Adjective("Slow", "încet", "încetă", "înceti", "încete");
    const adj_small = new Adjective("Small", "mic", "mică", "mici", "mici");
    const adj_smooth = new Adjective("Smooth", "neted", "netedă", "netezi", "netede");
    const adj_soft = new Adjective("Soft", "moale", "moale", "moale", "moale");
    const adj_sure = new Adjective("Sure", "sigur", "sigură", "siguri", "sigure");
    const adj_thin = new Adjective("Thin", "slab", "slabă", "slabi", "slabe");
    const adj_tight = new Adjective("Tight", "strâmt", "strâmtă", "strâmți", "strâmte");
    const adj_true_ = new Adjective("True", "adevărat", "adevărată", "adevărați", "adevărate");
    const adj_ultimate = new Adjective("Ultimate", "ultim", "ultimă", "ultimi", "ultime");
    const adj_wet = new Adjective("Wet", "umed", "umedă", "umezi", "umede");

    setParentAndMultipleChildren(DescriptiveAdjective, [
        adj_alive, adj_available, adj_bad, adj_big, adj_clean, adj_close, adj_cold, adj_dead, adj_difficult, adj_dirty, adj_dry, 
        adj_easy, adj_false_, adj_fast, adj_fat, adj_first, adj_good, adj_hard, adj_hightemperature, adj_hot, adj_loose, adj_lowtemperature, 
        adj_new, adj_old, adj_open, adj_rough, adj_slow, adj_small, adj_smooth, adj_soft, adj_sure, adj_thin, adj_tight, adj_true_, 
        adj_ultimate, adj_wet
    ])

    // #flavours ==================================================
    let flavours = new DataCard("Flavours", "Arome", "");  
    setParentAndChild(wordclass_adjectives, flavours);  

    let adj_sweet = new Adjective("Sweet", "Dulce", "Dulce", "Dulci", "Dulci");  
    let adj_sour = new Adjective("Sour", "acru", "acra", "acri", "acre");
    let adj_salty = new Adjective("Salty", "sărat", "sărată", "sărați", "sărate");
    let adj_spicy = new Adjective("Spicy", "picant", "picantă", "picanți", "picante");
    let adj_bitter = new Adjective("Bitter", "amar", "amară", "amari", "amare");
    let adj_delicious = new Adjective("Delicious", "delicios", "delicioasă", "delicioși", "delicioase");
    let adj_fragrant = new Adjective("Fragrant", "aromat", "aromată", "aromați", "aromate");

    setParentAndMultipleChildren(flavours, [
        adj_sweet, adj_sour, adj_salty, adj_spicy, adj_bitter, adj_delicious, adj_fragrant
    ])

    // #AboutPeople =======================================
    let aboutPeople = new DataCard("About People", "Despre oameni", "");  
    setParentAndChild(wordclass_adjectives, aboutPeople);  

    const adj_allergic = new Adjective("Allergic", "alergic", "alergică", "alergici", "alergice");
    const adj_alone = new Adjective("Alone", "singur", "singură", "singuri", "singure");
    const adj_amusing = new Adjective("Amusing", "amuzant", "amuzantă", "amuzanți", "amuzante");
    const adj_boring = new Adjective("Boring", "plictisitor", "plictisitoare", "plictisitori", "plictisitoare");
    const adj_busy = new Adjective("Busy", "ocupat", "ocupată", "ocupați", "ocupate");
    const adj_cool = new Adjective("Cool", "răcoros", "răcoroasă", "răcoroși", "răcoroase");
    const adj_crazy = new Adjective("Crazy", "nebun", "nebună", "nebuni", "nebune");
    const adj_curly = new Adjective("Curly", "creț", "creață", "creți", "crețe");
    const adj_dangerous = new Adjective("Dangerous", "periculos", "periculoasă", "periculoși", "periculoase");
    const adj_foreign = new Adjective("Foreign", "străin", "străină", "străini", "străine");
    const adj_handsome = new Adjective("Handsome", "chipeș", "chipeșă", "chipeși", "chipeșe");
    const adj_hungry = new Adjective("Hungry", "flămând", "flămândă", "flămânzi", "flămânde");
    const adj_interesting = new Adjective("Interesting", "interesant", "interesantă", "interesanți", "interesante");
    const adj_lucky = new Adjective("Lucky", "norocos", "norocoasă", "norocoși", "norocoase");
    const adj_missing = new Adjective("Missing", "dispărut", "dispărută", "dispăruți", "dispărute");
    const adj_muscular = new Adjective("Muscular", "musculos", "musculoasă", "musculoși", "musculoase");
    const adj_romantic = new Adjective("Romantic", "romantic", "romantică", "romantici", "romantice");
    const adj_sad = new Adjective("Sad", "trist", "tristă", "triști", "triste");
    const adj_shy = new Adjective("Shy", "rușinos", "rușinoasă", "rușinoși", "rușinoase");
    const adj_sick = new Adjective("Sick", "bolnav", "bolnavă", "bolnavi", "bolnave");
    const adj_smart = new Adjective("Smart", "inteligent", "inteligentă", "inteligenti", "inteligente");
    const adj_strange = new Adjective("Strange", "ciudat", "ciudată", "ciudați", "ciudate");
    const adj_strict = new Adjective("Strict", "strict", "strictă", "stricti", "strict");
    const adj_sunny = new Adjective("Sunny", "însorit", "însorită", "însoriți", "însorite");
    const adj_thirsty = new Adjective("Thirsty", "însetat", "însetată", "însetați", "însetate");

    setParentAndMultipleChildren(
        aboutPeople, [
            adj_allergic, adj_alone, adj_amusing, adj_boring, adj_busy, adj_cool, adj_crazy, adj_curly, adj_dangerous, adj_foreign, 
            adj_handsome, adj_hungry, adj_interesting, adj_lucky, adj_missing, adj_muscular, adj_romantic, adj_sad, adj_shy, adj_sick, 
            adj_smart, adj_strange, adj_strict, adj_sunny, adj_thirsty]
    )


    // #Colours =======================================
    let colours = new DataCard("Colours", "Culorile","")
    setParentAndChild(wordclass_adjectives, colours)
        
    const adj_black = new Adjective("Black", "negru", "neagră", "negri", "negre");
    const adj_blonde = new Adjective("Blonde", "blond", "blondă", "blonzi", "blonde");
    const adj_blue = new Adjective("Blue", "albastru", "albastră", "albaștri", "albastre");
    const adj_bright = new Adjective("Bright", "strălucitor", "strălucitoare", "strălucitori", "strălucitoare");
    const adj_brown = new Adjective("Brown", "maro", "maro", "maro", "maro"); // invariable
    const adj_dark = new Adjective("Dark", "închis", "închisă", "închiși", "închise");
    const adj_gold = new Adjective("Gold", "auriu", "aurie", "aurii", "aurii");
    const adj_green = new Adjective("Green", "verde", "verde", "verzi", "verzi");
    const adj_grey = new Adjective("Grey", "gri", "gri", "gri", "gri"); // invariable
    const adj_hazel = new Adjective("Hazel", "căprui", "căpruie", "căprui", "căprui"); // semi-invariable
    const adj_light = new Adjective("Light", "deschis", "deschisă", "deschiși", "deschise");
    const adj_orange = new Adjective("Orange", "portocaliu", "portocalie", "portocalii", "portocalii");
    const adj_purple = new Adjective("Purple", "mov", "mov", "mov", "mov"); // invariable
    const adj_red = new Adjective("Red", "roșu", "roșie", "roșii", "roșii");
    const adj_white = new Adjective("White", "alb", "albă", "albii", "albe");
    const adj_yellow = new Adjective("Yellow", "galben", "galbenă", "galbeni", "galbene");
    
    setParentAndMultipleChildren(
        colours, [
            adj_black, adj_blonde, adj_blue, adj_bright, adj_brown, adj_dark, adj_gold, adj_green, adj_grey, adj_hazel, 
            adj_light, adj_orange, adj_purple, adj_red, adj_white, adj_yellow]
    )


    // =============================================================================
    // #Nouns
    // =============================================================================

    //#thecircus
    let TheCircus = new DataCard("The Circus", "Circul", "");
    setParentAndChild(wordclass_nouns, TheCircus)

    const noun_acrobats = new NounMale("acrobats", "acrob", "acrobați", "acrobul", "acrobații", "acrobului", "acrobaților");
    const noun_band = new NounFemale("band", "formație", "formații", "formația", "formațiile", "formației", "formațiilor");
    const noun_bigWheel = new NounNeuter("big wheel", "roată panoramică", "roți panoramice", "roata panoramică", "roțile panoramice", "roții panoramice", "roților panoramice");
    const noun_bowTieClown = new NounMale("bow tie (clown)", "papion", "papioane", "papionul", "papioanele", "papionului", "papioanelor");
    const noun_candyFloss = new NounFemale("candy floss", "vată de zahăr", "vate de zahăr", "vata de zahăr", "vatele de zahăr", "vatei de zahăr", "vatelor de zahăr");
    const noun_carousel = new NounNeuter("carousel", "carusel", "carusele", "caruselul", "caruselele", "caruselului", "caruselelor");
    const noun_clown = new NounMale("clown", "clovn", "clovni", "clovnul", "clovnii", "clovnului", "clovnilor");
    const noun_dodgems = new NounNeuter("dodgems", "mașinuță tampon", "mașinuțe tampon", "mașinuța tampon", "mașinuțele tampon", "mașinuței tampon", "mașinuțelor tampon");
    const noun_ghostTrain = new NounMale("ghost train", "tren al groazei", "trenuri ale groazei", "trenul groazei", "trenurile groazei", "trenului groazei", "trenurilor groazei");
    const noun_helterSkelter = new NounNeuter("helter-skelter", "tobogan spirală", "tobogane spirală", "toboganul spirală", "toboganele spirală", "toboganului spirală", "toboganelor spirală");
    const noun_juggler = new NounMale("juggler", "jongler", "jongleri", "jonglerul", "jonglerii", "jonglerului", "jonglerilor");
    const noun_pole = new NounMale("pole", "stâlp", "stâlpi", "stâlpul", "stâlpii", "stâlpului", "stâlpilor");
    const noun_popcorn = new NounNeuter("popcorn", "popcorn", "popcornuri", "popcornul", "popcornurile", "popcornului", "popcornurilor");
    const noun_ringmaster = new NounMale("ringmaster", "director de circ", "directori de circ", "directorul de circ", "directorii de circ", "directorului de circ", "directorilor de circ");
    const noun_rollerCoaster = new NounFemale("roller coaster", "montagne russe", "montagne russe", "montagne russe", "montagne russe", "montagne russe", "montagne russe"); // invariable plural
    const noun_ropeLadder = new NounFemale("rope ladder", "scară de frânghie", "scări de frânghie", "scara de frânghie", "scările de frânghie", "scării de frânghie", "scărilor de frânghie");
    const noun_theFairground = new NounNeuter("the fairground", "târg", "târguri", "târgul", "târgurile", "târgului", "târgurilor");
    const noun_tightropeWalked = new NounMale("tightrope walker", "funambul", "funambuli", "funambulul", "funambului", "funambulului", "funambulilor");
    const noun_topHat = new NounFemale("top hat", "joben", "jobenuri", "jobenul", "jobenurile", "jobenului", "jobenurilor");
    const noun_trapeze = new NounNeuter("trapeze", "trapez", "trapeze", "trapezul", "trapezele", "trapezului", "trapezelor");
    const noun_unicyclist = new NounMale("unicyclist", "monociclist", "monocicliști", "monociclistul", "monocicliștii", "monociclistului", "monocicliștilor");

    setParentAndMultipleChildren(TheCircus, [
        noun_acrobats, noun_band, noun_bigWheel, noun_bowTieClown, noun_candyFloss, noun_carousel, noun_clown, noun_dodgems, noun_ghostTrain, 
        noun_helterSkelter, noun_juggler, noun_pole, noun_popcorn, noun_ringmaster, noun_rollerCoaster, noun_ropeLadder, noun_theFairground, 
        noun_tightropeWalked, noun_topHat, noun_trapeze, noun_unicyclist
    ])


    //#sports
    let Sports = new DataCard("Sports", "Sporturile", "");
    setParentAndChild(wordclass_nouns, Sports)

    const noun_americanFootball = new NounNeuter("American football", "fotbal american", "fotbaluri americane", "fotbalul american", "fotbalurile americane", "fotbalului american", "fotbalurilor americane");
    const noun_archery = new NounNeuter("archery", "tir cu arcul", "tiruri cu arcul", "tirul cu arcul", "tirurile cu arcul", "tirului cu arcul", "tirurilor cu arcul");
    const noun_badminton = new NounNeuter("badminton", "badminton", "badmintonuri", "badmintonul", "badmintonurile", "badmintonului", "badmintonurilor");
    const noun_bait = new NounFemale("bait", "momeală", "momeli", "momeala", "momelele", "momelii", "momelelor");
    const noun_ball = new NounFemale("ball", "minge", "mingi", "mingea", "mingile", "mingii", "mingilor");
    const noun_baseball = new NounNeuter("baseball", "baseball", "baseballuri", "baseballul", "baseballurile", "baseballului", "baseballurilor");
    const noun_baseballBat = new NounFemale("baseball bat", "bâtă de baseball", "bâte de baseball", "bâta de baseball", "bâtele de baseball", "bâtei de baseball", "bâtelor de baseball");
    const noun_basketball = new NounNeuter("basketball", "baschet", "baschete", "baschetul", "baschetele", "baschetului", "baschetelor");
    const noun_changingRoom = new NounNeuter("changing room", "vestiar", "vestiare", "vestiarul", "vestiarele", "vestiarului", "vestiarelor");
    const noun_climbing = new NounNeuter("climbing", "alpinism", "alpinisme", "alpinismul", "alpinismele", "alpinismului", "alpinismelor");
    const noun_cricket = new NounNeuter("cricket", "cricket", "cricketuri", "cricketul", "cricketurile", "cricketului", "cricketurilor");
    const noun_dance = new NounNeuter("dance", "dans", "dansuri", "dansul", "dansurile", "dansului", "dansurilor");
    const noun_diving = new NounNeuter("diving", "scufundare", "scufundări", "scufundarea", "scufundările", "scufundării", "scufundărilor");
    const noun_fishingRod = new NounFemale("fishing rod", "undită", "undițe", "undița", "undițele", "undiței", "undițelor");
    const noun_football = new NounNeuter("football", "fotbal", "fotbaluri", "fotbalul", "fotbalurile", "fotbalului", "fotbalurilor");
    const noun_gymnastics = new NounFemale("gymnastics", "gimnastică", "gimnastici", "gimnastica", "gimnasticile", "gimnasticii", "gimnasticilor");
    const noun_handGliding = new NounNeuter("hang gliding", "zbor cu deltaplanul", "zboruri cu deltaplanul", "zborul cu deltaplanul", "zborurile cu deltaplanul", "zborului cu deltaplanul", "zborurilor cu deltaplanul");
    const noun_helmet = new NounFemale("helmet", "cască", "căști", "casca", "căștile", "căștii", "căștilor");
    const noun_horseRiding = new NounNeuter("horse riding", "echitație", "echitații", "echitația", "echitațiile", "echitației", "echitațiilor");
    const noun_iceSkates = new NounFemale("ice skates", "patină", "patine", "patina", "patinele", "patinei", "patinelor");
    const noun_iceSkating = new NounNeuter("ice skating", "patinaj", "patinaje", "patinajul", "patinajele", "patinajului", "patinajelor");
    const noun_judo = new NounNeuter("judo", "judo", "judo", "judoul", "judourile", "judoului", "judourilor");
    const noun_karate = new NounNeuter("karate", "karate", "karate", "karateul", "karateurile", "karateului", "karateurilor");
    const noun_locker = new NounNeuter("locker", "dulap", "dulapuri", "dulapul", "dulapurile", "dulapului", "dulapurilor");
    const noun_race = new NounFemale("race", "cursă", "curse", "cursa", "cursele", "cursei", "curselor");
    const noun_rowing = new NounNeuter("rowing", "canotaj", "canotaje", "canotajul", "canotajele", "canotajului", "canotajelor");
    const noun_rugby = new NounNeuter("rugby", "rugby", "rugbyuri", "rugbyul", "rugbyurile", "rugbyului", "rugbyurilor");
    const noun_ski = new NounNeuter("ski", "schi", "schiuri", "schiul", "schiurile", "schiului", "schiurilor");
    const noun_skiing = new NounNeuter("skiing", "schiat", "schiaturi", "schiatul", "schiaturile", "schiatului", "schiaturilor");
    const noun_snowboarding = new NounNeuter("snowboarding", "snowboarding", "snowboardinguri", "snowboardingul", "snowboardingurile", "snowboardingului", "snowboardingurilor");
    const noun_sumoWrestling = new NounNeuter("sumo wrestling", "sumo", "sumo", "sumoul", "sumourile", "sumoului", "sumourilor");
    const noun_swimming = new NounNeuter("swimming", "înot", "înoturi", "înotul", "înoturile", "înotului", "înoturilor");
    const noun_swimmingPool = new NounFemale("swimming pool", "piscină", "piscine", "piscina", "piscinele", "piscinei", "piscinelor");
    const noun_tableTennis = new NounNeuter("table tennis", "tenis de masă", "tenisuri de masă", "tenisul de masă", "tenisurile de masă", "tenisului de masă", "tenisurilor de masă");
    const noun_target = new NounNeuter("target", "țintă", "ținte", "ținta", "țintele", "țintei", "țintelor");
    const noun_tennis = new NounNeuter("tennis", "tenis", "tenisuri", "tenisul", "tenisurile", "tenisului", "tenisurilor");

    setParentAndMultipleChildren(Sports, [
        noun_americanFootball, noun_archery, noun_badminton, noun_bait, noun_ball, noun_baseball, noun_baseballBat, noun_basketball, noun_changingRoom, 
        noun_climbing, noun_cricket, noun_dance, noun_diving, noun_fishingRod, noun_football, noun_gymnastics, noun_handGliding, noun_helmet, 
        noun_horseRiding, noun_iceSkates, noun_iceSkating, noun_judo, noun_karate, noun_locker, noun_race, noun_rowing, noun_rugby, noun_ski,
         noun_skiing, noun_snowboarding, noun_sumoWrestling, noun_swimming, noun_swimmingPool, noun_tableTennis, noun_target, noun_tennis
        ])

    //#Days #week #time
    let Time = new DataCard("Time", "Timp", "");
    setParentAndChild(wordclass_nouns, Time)

    // #relativeTime
    let RelativeTime = new DataCard("Relative Time", "Timp Relativ", "");
    setParentAndChild(Time, RelativeTime)

    let Next = new DataCard("Next", "Următorul", "");
    setParentAndChild(RelativeTime, Next)

    let Last = new DataCard("Last", "Trecut", "");
    setParentAndChild(RelativeTime, Last)

    let LastYear = new DataCard("Last Year", "Anul trecut", "");
    setParentAndChild(RelativeTime, LastYear)

    let NextYear = new DataCard("Next year", "Anul Urmator", "");
    setParentAndChild(RelativeTime, NextYear)

    let Tomorrow = new DataCard("Tomorrow", "Mâine", "");
    setParentAndChild(RelativeTime, Tomorrow)

    let DayAfterTomorrow = new DataCard("The day after tomorrow", "Poimâine", "");
    setParentAndChild(RelativeTime, DayAfterTomorrow)

    let Yesterday = new DataCard("Yesterday", "Ieri", "");
    setParentAndChild(RelativeTime, Yesterday)

    let DayBeforeYesterday = new DataCard("The day before yesterday", "Alaltaieri", "");
    setParentAndChild(RelativeTime, DayBeforeYesterday)

    let Later = new DataCard("Late (later)", "(Mai) Târziu", "");
    setParentAndChild(RelativeTime, Later)

    let lastYear = new DataCard("Last year", "Anul trecut", "");  
    setParentAndChild(RelativeTime, lastYear);  

    let last = new DataCard("Last", "Trecut / Trecută", "");  
    setParentAndChild(RelativeTime, last);  

    let afternoon = new DataCard("Afternoon", "După amiază", "");  
    setParentAndChild(RelativeTime, afternoon);  

    let inTheFuture = new DataCard("In the future", "În viitor", "");  
    setParentAndChild(RelativeTime, inTheFuture);  

    let quarterTo = new DataCard("Quarter to", "Fără un sfert", "");  
    setParentAndChild(RelativeTime, quarterTo);  


    // #seasons
    let TheMonths = new DataCard("The Months", "Lunii", "");  
    setParentAndChild(Time, TheMonths);  

    const noun_month = new NounMale("month", "lună", "luni", "luna", "lunile", "lunii", "lunilor");
    const noun_january = new NounMale("january", "ianuarie", "ianuarie", "ianuarie", "ianuarie", "ianuariei", "ianuariei");
    const noun_february = new NounMale("february", "februarie", "februarie", "februarie", "februarie", "februariei", "februariei");
    const noun_march = new NounMale("march", "martie", "martie", "martie", "martie", "martiei", "martiei");
    const noun_april = new NounMale("april", "aprilie", "aprilie", "aprilie", "aprilie", "apriliei", "apriliei");
    const noun_may = new NounMale("may", "mai", "mai", "mai", "mai", "maiului", "maiului");
    const noun_june = new NounMale("june", "iunie", "iunie", "iunie", "iunie", "iuniei", "iuniei");
    const noun_july = new NounMale("july", "iulie", "iulie", "iulie", "iulie", "iuliei", "iuliei");
    const noun_august = new NounMale("august", "august", "august", "august", "august", "augustului", "augustului");
    const noun_september = new NounMale("september", "septembrie", "septembrie", "septembrie", "septembrie", "septembriei", "septembriei");
    const noun_october = new NounMale("october", "octombrie", "octombrie", "octombrie", "octombrie", "octombriei", "octombriei");
    const noun_november = new NounMale("november", "noiembrie", "noiembrie", "noiembrie", "noiembrie", "noiembriei", "noiembriei");
    const noun_december = new NounMale("december", "decembrie", "decembrie", "decembrie", "decembrie", "decembriei", "decembriei");

    setParentAndMultipleChildren(TheMonths, [
        noun_month, noun_january, noun_february, noun_march, noun_april, noun_may, noun_june, noun_july, noun_august, noun_september, noun_october, noun_november, noun_december
    ])



    // #seasons
    let Seasons = new DataCard("Seasons", "Anotimpurile", "");
    setParentAndChild(Time, Seasons)

    const noun_spring = new NounFemale("spring", "primăvară", "primăveri", "primăvara", "primăverile", "primăverii", "primăverilor");
    const noun_autumn = new NounFemale("autumn", "toamnă", "toamne", "toamna", "toamnele", "toamnei", "toamnelor");
    const noun_summer = new NounFemale("summer", "vară", "veri", "vara", "verile", "verii", "verilor");
    const noun_winter = new NounFemale("winter", "iarnă", "ierni", "iarna", "iernele", "iernii", "iernelor");

    setParentAndMultipleChildren(Seasons, [
        noun_spring, noun_autumn, noun_summer, noun_winter
    ])


    // #weather
    let Weather = new DataCard("The Weather", "Vremea", "");
    setParentAndChild(Time, Weather)
    
    const noun_clouds = new NounFemale("cloud", "nor", "nori", "norul", "norii", "norului", "norilor");
    const noun_dew = new NounFemale("dew", "rouă", "roue", "roua", "rouele", "rouei", "rouelor");
    const noun_earthquake = new NounNeuter("earthquake", "cutremur", "cutremure", "cutremurul", "cutremurele", "cutremurului", "cutremurelor");
    const noun_flood = new NounFemale("flood", "inundație", "inundații", "inundația", "inundațiile", "inundației", "inundațiilor");
    const noun_fog = new NounFemale("fog", "ceață deasă", "cețuri dese", "ceața deasă", "cețurile dese", "ceaței dense", "cețurilor dense");
    const noun_forestFire = new NounFemale("forest fire", "incendiu de pădure", "incendii de pădure", "incendiul de pădure", "incendiile de pădure", "incendiului de pădure", "incendiilor de pădure");
    const noun_frost = new NounFemale("frost", "brumă", "brume", "bruma", "brumele", "brumei", "brumelor");
    const noun_hurricane = new NounNeuter("hurricane", "uragan", "uragane", "uraganul", "uraganele", "uraganului", "uraganelor");
    const noun_lighting = new NounFemale("lightning", "fulger", "fulgere", "fulgerul", "fulgerele", "fulgerului", "fulgerelor");
    const noun_mist = new NounFemale("mist", "ceață", "cețuri", "ceața", "cețurile", "ceaței", "cețurilor");
    const noun_mudSlide = new NounFemale("mudslide", "alunecare de teren", "alunecări de teren", "alunecarea de teren", "alunecările de teren", "alunecării de teren", "alunecărilor de teren");
    const noun_rain = new NounFemale("rain", "ploaie", "ploi", "ploaia", "ploile", "ploii", "ploilor");
    const noun_rainbow = new NounNeuter("rainbow", "curcubeu", "curcubee", "curcubeul", "curcubeele", "curcubeului", "curcubeelor");
    const noun_sky = new NounNeuter("sky", "cer", "ceruri", "cerul", "cerurile", "cerului", "cerurilor");
    const noun_snow = new NounFemale("snow", "zăpadă", "zapezi", "zăpada", "zăpezile", "zăpezii", "zăpezilor");
    const noun_snowFall = new NounFemale("snowfall", "ninsoare", "ninsori", "ninsoarea", "ninsoarile", "ninsoarei", "ninsoarilor");
    const noun_snowStorm = new NounFemale("snowstorm", "furtună de zăpadă", "furtuni de zăpadă", "furtuna de zăpadă", "furtunile de zăpadă", "furtunii de zăpadă", "furtunilor de zăpadă");
    const noun_typhoon = new NounNeuter("typhoon", "taifun", "taifunuri", "taifunul", "taifunurile", "taifunului", "taifunurilor");
    const noun_wind = new NounMale("wind", "vânt", "vânturi", "vântul", "vânturile", "vântului", "vânturilor");
    setParentAndMultipleChildren(Weather, [
        noun_clouds, noun_dew, noun_earthquake, noun_flood, noun_fog, noun_forestFire, noun_frost, noun_hurricane, noun_lighting, 
        noun_mist, noun_mudSlide, noun_rain, noun_rainbow, noun_sky, noun_snow, noun_snowFall, noun_snowStorm, noun_typhoon, noun_wind
    ])


    // #specialdays #holidays
    let SpecialDays = new DataCard("Special Days", "Zile de Sărbătoare", "");
    setParentAndChild(Time, SpecialDays)
 
    const noun_birthday = new NounNeuter("birthday", "zi de naștere", "zile de naștere", "ziua de naștere", "zilele de naștere", "zilei de naștere", "zilelor de naștere");
    const noun_angel = new NounMale("angel", "înger", "îngeri", "îngerul", "îngerii", "îngerului", "îngerilor");
    const noun_anniversary = new NounFemale("anniversary", "aniversare", "aniversări", "aniversarea", "aniversările", "aniversării", "aniversărilor");
    const noun_birthdayCard = new NounFemale("birthday card", "felicitare de zi de naștere", "felicitări de zi de naștere", "felicitarea de zi de naștere", "felicitările de zi de naștere", "felicitării de zi de naștere", "felicitărilor de zi de naștere");
    const noun_bouquet = new NounNeuter("bouquet", "buchet", "buchete", "buchetul", "buchetele", "buchetului", "buchetelor");
    const noun_bride = new NounFemale("bride", "mireasă", "mirese", "mireasa", "miresele", "miresei", "mireselor");
    const noun_bridegroom = new NounMale("bridegroom", "mire", "miri", "mirele", "mirii", "mirelui", "mirilor");
    const noun_bridesmaid = new NounFemale("bridesmaid", "domnișoară de onoare", "domnișoare de onoare", "domnișoara de onoare", "domnișoarele de onoare", "domnișoarei de onoare", "domnișoarelor de onoare");
    const noun_camera = new NounFemale("camera", "cameră foto", "camere foto", "camera foto", "camerele foto", "camerei foto", "camerelor foto");
    const noun_christmasDay = new NounNeuter("Christmas Day", "ziua de Crăciun", "zile de Crăciun", "ziua de Crăciun", "zilele de Crăciun", "zilei de Crăciun", "zilelor de Crăciun");
    const noun_christmasTree = new NounMale("Christmas tree", "brad de Crăciun", "brazi de Crăciun", "bradul de Crăciun", "brazii de Crăciun", "bradului de Crăciun", "brazilor de Crăciun");
    const noun_date = new NounFemale("date (romantic)", "întâlnire", "întâlniri", "întâlnirea", "întâlnirile", "întâlnirii", "întâlnirilor");
    const noun_fatherChristmas = new NounMale("Father Christmas", "Moș Crăciun", "Moși Crăciun", "Moșul Crăciun", "Moșii Crăciun", "Moșului Crăciun", "Moșilor Crăciun");
    const noun_guest = new NounMale("guest", "invitat", "invitați", "invitatul", "invitații", "invitatului", "invitaților");
    const noun_holiday = new NounFemale("holiday", "vacanță", "vacanțe", "vacanța", "vacanțele", "vacanței", "vacanțelor");
    const noun_reindeer = new NounMale("reindeer", "ren", "reni", "renul", "renii", "renului", "renilor");
    const noun_romanticDate = new NounFemale("romantic date", "întâlnire romantică", "întâlniri romantice", "întâlnirea romantică", "întâlnirile romantice", "întâlnirii romantice", "întâlnirilor romantice");
    const noun_sleigh = new NounNeuter("sleigh", "sanie", "sănii", "sania", "săniile", "săniei", "sănilor");
    const noun_valentinesDay = new NounNeuter("Valentine's Day", "Ziua Îndrăgostiților", "Zile ale Îndrăgostiților", "Ziua Îndrăgostiților", "Zilele Îndrăgostiților", "Zilei Îndrăgostiților", "Zilelor Îndrăgostiților");
    const noun_weddingCake = new NounNeuter("wedding cake", "tort de nuntă", "torturi de nuntă", "tortul de nuntă", "torturile de nuntă", "tortului de nuntă", "torturilor de nuntă");
    const noun_weddingDay = new NounFemale("wedding day", "zi de nuntă", "zile de nuntă", "ziua de nuntă", "zilele de nuntă", "zilei de nuntă", "zilelor de nuntă");
    const noun_weddingRing = new NounFemale("wedding ring", "verighetă", "verighete", "verigheta", "verighetele", "verighetei", "verighetelor");


    setParentAndMultipleChildren(SpecialDays, [
        noun_birthday, noun_angel, noun_anniversary, noun_birthdayCard, noun_bouquet, noun_bride, noun_bridegroom, noun_bridesmaid, noun_camera, 
        noun_christmasDay, noun_christmasTree, noun_date, noun_fatherChristmas, noun_guest, noun_holiday, noun_reindeer, 
        noun_romanticDate, noun_sleigh, noun_valentinesDay, noun_weddingCake, noun_weddingDay, noun_weddingRing
    ])

    //#days
    let DaysOfTheWeek = new DataCard("Days (Of The Week)", "Zilele (Săptămânii)", "");
    setParentAndChild(Time, DaysOfTheWeek)

    const noun_calendar = new NounMale("calendar", "calendar", "calendare", "calendarul", "calendarele", "calendarului", "calendarelor");
    const noun_evening = new NounFemale("evening", "seară", "seri", "seara", "serile", "serii", "serilor");
    const noun_friday = new NounMale("friday", "vineri", "vineri", "vinerea", "vinerile", "vinerii", "vinerilor");
    const noun_monday = new NounMale("monday", "luni", "luni", "lunea", "lunile", "lunii", "lunilor");
    const noun_morning = new NounFemale("morning", "dimineață", "dimineți", "dimineața", "diminețile", "dimineții", "dimineților");
    const noun_night = new NounFemale("night", "noapte", "nopți", "noaptea", "nopțile", "nopții", "nopților");
    const noun_saturday = new NounMale("saturday", "sâmbătă", "sâmbete", "sâmbăta", "sâmbetele", "sâmbetei", "sâmbetelor");
    const noun_sun = new NounNeuter("sun", "soare", "sori", "soarele", "sorii", "soarelui", "sorilor");
    const noun_sunday = new NounMale("sunday", "duminică", "duminici", "duminica", "duminicile", "duminicii", "duminicilor");
    const noun_thursday = new NounMale("thursday", "joi", "joi", "joia", "joile", "joii", "joilor");
    const noun_tuesday = new NounMale("tuesday", "marți", "marți", "marțea", "marțile", "marții", "marților");
    const noun_wednesday = new NounMale("wednesday", "miercuri", "miercuri", "miercurea", "miercurile", "miercurii", "miercurilor");

    setParentAndMultipleChildren(DaysOfTheWeek, [
        noun_calendar, noun_evening, noun_friday, noun_monday, noun_morning, noun_night, noun_saturday, noun_sun, 
        noun_sunday, noun_thursday, noun_tuesday, noun_wednesday
    ])
    

    // #Measurements
    let Measurements = new DataCard("Measurements", "Măsurători", ""); 
    setParentAndChild(wordclass_nouns, Measurements);
    
    const noun_celsius = new NounNeuter("celsius", "grad Celsius", "grade Celsius", "gradul Celsius", "gradele Celsius", "gradului Celsius", "gradelor Celsius");
    const noun_centimeter = new NounMale("centimeter", "centimetru", "centimetri", "centimetrul", "centimetrii", "centimetrului", "centimetrilor");
    const noun_diameter = new NounNeuter("diameter", "diametru", "diametre", "diametrul", "diametrele", "diametrului", "diametrelor");
    const noun_fahrenheit = new NounNeuter("fahrenheit", "grad Fahrenheit", "grade Fahrenheit", "gradul Fahrenheit", "gradele Fahrenheit", "gradului Fahrenheit", "gradelor Fahrenheit");
    const noun_gram = new NounMale("gram", "gram", "grame", "gramul", "gramele", "gramului", "gramelor");
    const noun_hour = new NounFemale("hour", "oră", "ore", "ora", "orele", "orei", "orelor");
    const noun_kilogram = new NounMale("kilogram", "kilogram", "kilograme", "kilogramul", "kilogramele", "kilogramului", "kilogramelor");
    const noun_kilometer = new NounMale("kilometer", "kilometru", "kilometri", "kilometrul", "kilometrii", "kilometrului", "kilometrilor");
    const noun_kilowatt = new NounMale("kilowatt", "kilowatt", "kilowați", "kilowattul", "kilowații", "kilowattului", "kilowaților");
    const noun_liter = new NounMale("liter", "litru", "litri", "litrul", "litrii", "litrului", "litrilor");
    const noun_meter = new NounMale("meter", "metru", "metri", "metrul", "metrii", "metrului", "metrilor");
    const noun_milliliter = new NounMale("milliliter", "mililitru", "mililitri", "mililitrul", "mililitrii", "mililitrului", "mililitrilor");
    const noun_minute = new NounMale("minute", "minut", "minute", "minutul", "minutele", "minutului", "minutelor");
    const noun_ounce = new NounFemale("ounce", "uncie", "uncii", "uncia", "unciile", "unciei", "uncilor");
    const noun_pound_weight = new NounFemale("pound", "livră", "livre", "livra", "livrele", "livrei", "livrelor");
    const noun_second = new NounFemale("second", "secundă", "secunde", "secunda", "secundele", "secundei", "secundelor");
    const noun_size = new NounFemale("size", "mărime", "mărimi", "mărimea", "mărimile", "mărimii", "mărimilor");
    const noun_watt = new NounMale("watt", "watt", "wați", "wattul", "wații", "wattului", "waților");

    setParentAndMultipleChildren(Measurements, [
        noun_celsius, noun_centimeter, noun_diameter, noun_fahrenheit, noun_gram, noun_hour, noun_kilogram, noun_kilometer, 
        noun_kilowatt, noun_liter, noun_meter, noun_milliliter, noun_minute, noun_ounce, noun_pound_weight, noun_second, noun_size, noun_watt, 
    ])

    // #misc nouns
    let miscellaneous = new DataCard("Miscellaneous", "Diverse", "");  
    setParentAndChild(wordclass_nouns, miscellaneous);  

    let opinion = new DataCard("Opinion", "Opinie", "");  
    setParentAndChild(miscellaneous, opinion);  

    let comedy = new DataCard("Comedy", "Comedie", "");  
    setParentAndChild(miscellaneous, comedy);  

    let song = new DataCard("Song (piece)", "Piesă", "");  
    setParentAndChild(miscellaneous, song);  

    let war = new DataCard("War", "Război", "");  
    setParentAndChild(miscellaneous, war);  

    let novel = new DataCard("Novel", "Roman", "");  
    setParentAndChild(miscellaneous, novel);  

    let affair = new DataCard("Affair", "Aventură amoroasă", "");  
    setParentAndChild(miscellaneous, affair);  

    let profile = new DataCard("Profile", "Profil", "");  
    setParentAndChild(miscellaneous, profile);  

    let promise = new DataCard("Promise", "Promisiune", "");  
    setParentAndChild(miscellaneous, promise);  

    let chance = new DataCard("Chance", "Șansă", "");  
    setParentAndChild(miscellaneous, chance);  

    let reason = new DataCard("Reason", "Motiv", "");  
    setParentAndChild(miscellaneous, reason);  

    let freezing = new DataCard("Freezing", "Ger", "");  
    setParentAndChild(miscellaneous, freezing);  

    let appearance = new DataCard("Appearance", "Aspect", "");  
    setParentAndChild(miscellaneous, appearance);  

    let hurry = new DataCard("Hurry", "Grabă", "");  
    setParentAndChild(miscellaneous, hurry);  

    let purpose = new DataCard("Purpose", "Scop", "");  
    setParentAndChild(miscellaneous, purpose);  

    let intention = new DataCard("Intention (purpose)", "Intenție", "");  
    setParentAndChild(miscellaneous, intention);  

    let theTruth = new DataCard("The truth", "Adevărul", "");  
    setParentAndChild(miscellaneous, theTruth); 

    // # space
    let Space = new DataCard("Space", "Spațiu", "");
    setParentAndChild(wordclass_nouns, Space)

    const noun_astronaut = new NounMale("astronaut", "astronaut", "astronauți", "astronautul", "astronauții", "astronautului", "astronauților");
    const noun_atmosphere = new NounFemale("atmosphere", "atmosferă", "atmosfere", "atmosfera", "atmosferele", "atmosferei", "atmosferelor");
    const noun_extraterrestrial = new NounMale("extraterrestrial", "extraterestru", "extratereștri", "extraterestrul", "extratereștrii", "extraterestrului", "extratereștrilor");
    const noun_fullMoon = new NounFemale("full moon", "lună plină", "luni pline", "luna plină", "lunile pline", "lunii pline", "lunilor pline");
    const noun_galaxy = new NounFemale("galaxy", "galaxie", "galaxii", "galaxia", "galaxiile", "galaxiei", "galaxiilor");
    const noun_lunarEclipse = new NounFemale("lunar eclipse", "eclipsă de lună", "eclipse de lună", "eclipsa de lună", "eclipsele de lună", "eclipsei de lună", "eclipselor de lună");
    const noun_meteor = new NounMale("meteor", "meteor", "meteori", "meteorul", "meteorii", "meteorului", "meteorilor");
    const noun_moon = new NounFemale("moon", "lună", "luni", "luna", "lunile", "lunii", "lunilor");
    const noun_orbit = new NounFemale("orbit", "orbită", "orbite", "orbita", "orbitele", "orbitei", "orbitelor");
    const noun_planet = new NounFemale("planet", "planetă", "planete", "planeta", "planetele", "planetei", "planetelor");
    const noun_rocket = new NounFemale("rocket", "rachetă", "rachete", "racheta", "rachetele", "rachetei", "rachetelor");
    const noun_satellite = new NounNeuter("satellite", "satelit", "sateliți", "satelitul", "sateliții", "satelitului", "sateliților");
    const noun_solarEclipse = new NounFemale("solar eclipse", "eclipsă solară", "eclipse solare", "eclipsa solară", "eclipsele solare", "eclipsei solare", "eclipselor solare");
    const noun_solarSystem = new NounNeuter("solar system", "sistem solar", "sisteme solare", "sistemul solar", "sistemele solare", "sistemului solar", "sistemelor solare");
    const noun_spaceship = new NounFemale("spaceship", "navă spațială", "nave spațiale", "nava spațială", "navele spațiale", "navei spațiale", "navelor spațiale");
    const noun_star = new NounFemale("star", "stea", "stele", "steaua", "stelele", "stelei", "stelelor");
    const noun_telescope = new NounNeuter("telescope", "telescop", "telescoape", "telescopul", "telescoapele", "telescopului", "telescoapelor");
    const noun_universe = new NounNeuter("universe", "univers", "universuri", "universul", "universurile", "universului", "universurilor");
    

    setParentAndMultipleChildren(Space, [
        noun_astronaut, noun_atmosphere, noun_extraterrestrial, noun_fullMoon, noun_galaxy, noun_lunarEclipse, noun_meteor, noun_moon, noun_orbit, noun_planet, 
        noun_rocket, noun_satellite, noun_solarEclipse, noun_solarSystem, noun_spaceship, noun_star, noun_telescope, noun_universe, 
    ])


    // #school #atschool
    let AtSchool = new DataCard("At School", "La Şcoală", "");
    setParentAndChild(wordclass_nouns, AtSchool)

    let Scissors = new DataCard("Scissors", "Foarfecă", "");
    setParentAndChild(AtSchool, Scissors)

    let Sums = new DataCard("Sums", "Calcule", "");
    setParentAndChild(AtSchool, Sums)

    let EraserRubber = new DataCard("Rubber Eraser", "Gumă", "");
    setParentAndChild(AtSchool, EraserRubber)

    let Ruler = new DataCard("Ruler", "Riglă (Linie)", "");
    setParentAndChild(AtSchool, Ruler)

    let Photographs = new DataCard("Photographs", "Fotografii", "");
    setParentAndChild(AtSchool, Photographs)

    let FeltTipPen = new DataCard("Felt Tip Pen", "Carioci", "");
    setParentAndChild(AtSchool, FeltTipPen)

    let Clay = new DataCard("Clay", "Lut", "");
    setParentAndChild(AtSchool, Clay)

    let Pencil = new DataCard("Pencil", "Creion", "");
    setParentAndChild(AtSchool, Pencil)

    let Desk = new DataCard("Desk", "Bancă (Catedră)", "");
    setParentAndChild(AtSchool, Desk)

    let Books = new DataCard("Books", "Cărți", "");
    setParentAndChild(AtSchool, Books)

    let Pen = new DataCard("Pen", "Stilou", "");
    setParentAndChild(AtSchool, Pen)

    let Glue = new DataCard("Glue", "Lipici", "");
    setParentAndChild(AtSchool, Glue)

    let Chalk = new DataCard("Chalk", "Cretă", "");
    setParentAndChild(AtSchool, Chalk)

    let Drawing = new DataCard("Drawing", "Desen", "");
    setParentAndChild(AtSchool, Drawing)

    let Board = new DataCard("Board", "Tablă", "");
    setParentAndChild(AtSchool, Board)

    let DoorHandle = new DataCard("Door Handle", "Clanță", "");
    setParentAndChild(AtSchool, DoorHandle)

    let Plant = new DataCard("Plant", "Plantă", "");
    setParentAndChild(AtSchool, Plant)

    let Globe = new DataCard("Globe", "Glob", "");
    setParentAndChild(AtSchool, Globe)

    let Crayons = new DataCard("Crayons", "Creioane (Cerate)", "");
    setParentAndChild(AtSchool, Crayons)

    let Easel = new DataCard("Easel", "Şevalet", "");
    setParentAndChild(AtSchool, Easel)

    let BlindCurtain = new DataCard("Blind (Curtain)", "Jaluzea (Stor)", "");
    setParentAndChild(AtSchool, BlindCurtain)

    let Paper = new DataCard("Paper", "Hârtie", "");
    setParentAndChild(AtSchool, Paper)

    let Alphabet = new DataCard("Alphabet", "Alfabet", "");
    setParentAndChild(AtSchool, Alphabet)

    let Notebook = new DataCard("Notebook", "Caiet", "");
    setParentAndChild(AtSchool, Notebook)

    let paintBrush = new DataCard("Paint Brush", "Pensulă", "");
    setParentAndChild(AtSchool, paintBrush)

    let Map_ = new DataCard("Map", "Hartă", "");
    setParentAndChild(AtSchool, Map_)

    let Box = new DataCard("Box", "Cutie", "");
    setParentAndChild(AtSchool, Box)

    let Aquarium = new DataCard("Aquarium", "Acletiu", "");
    setParentAndChild(AtSchool, Aquarium)

    let Badge = new DataCard("Badge", "Insignă", "");
    setParentAndChild(AtSchool, Badge)

    let WastePaperBin = new DataCard("Waste Paper Bin", "Coș de Hârtii", "");
    setParentAndChild(AtSchool, WastePaperBin)

    // #emergency services
    let TheEmergencyServices = new DataCard("The Emergency Services", "Serviciile de Urgență", ""); 
    setParentAndChild(wordclass_nouns, TheEmergencyServices)

    // #police #thepoliec
    let ThePolice = new DataCard("The Police", "Poliția", ""); 
    setParentAndChild(TheEmergencyServices, ThePolice);

    let Case = new DataCard("Case", "Caz", ""); 
    setParentAndChild(ThePolice, Case);

    let Suspect = new DataCard("Suspect", "Suspect", ""); 
    setParentAndChild(ThePolice, Suspect);

    let Innocent = new DataCard("Innocent", "Nevinovat", ""); 
    setParentAndChild(ThePolice, Innocent);

    let Witness = new DataCard("Witness", "Martor", ""); 
    setParentAndChild(ThePolice, Witness);

    let Victim = new DataCard("Victim", "Victimă", ""); 
    setParentAndChild(ThePolice, Victim);

    let Court = new DataCard("Court", "Instanță", ""); 
    setParentAndChild(ThePolice, Court);

    let Guilty = new DataCard("Guilty", "Vinovat", ""); 
    setParentAndChild(ThePolice, Guilty);

    let Defendant = new DataCard("Defendant", "Pârât", ""); 
    setParentAndChild(ThePolice, Defendant);

    let Stealing = new DataCard("Stealing", "Furtul", ""); 
    setParentAndChild(ThePolice, Stealing);

    let Crime = new DataCard("Crime", "Crimă", ""); 
    setParentAndChild(ThePolice, Crime);

    let Offense = new DataCard("Offense", "Infracțiunea", ""); 
    setParentAndChild(ThePolice, Offense);

    let Burglar = new DataCard("Burglar", "Hoț", ""); 
    setParentAndChild(ThePolice, Burglar);

    let Stolen = new DataCard("Stolen", "Furată", ""); 
    setParentAndChild(ThePolice, Stolen);

    let Motive = new DataCard("Motive", "Motiv", ""); 
    setParentAndChild(ThePolice, Motive);

    let Murder = new DataCard("Murder", "Crimă", ""); 
    setParentAndChild(ThePolice, Murder);

    // #hospital #thehospital / #doctor #thedoctor
    let TheHospitalAndTheDoctor = new DataCard("The Hospital and The Doctor", "Spitalul ș Doctorul", "");
    setParentAndChild(TheEmergencyServices, TheHospitalAndTheDoctor)

    let CottolWool = new DataCard("Cottol Wool", "Vată", "");
    setParentAndChild(TheHospitalAndTheDoctor, CottolWool)

    let Medecine = new DataCard("Medecine", "Medicament", "");
    setParentAndChild(TheHospitalAndTheDoctor, Medecine)

    let Lift = new DataCard("Lift", "Lift (Ascensor)", "");
    setParentAndChild(TheHospitalAndTheDoctor, Lift)

    let Crutches = new DataCard("Crutches", "Cârje", "");
    setParentAndChild(TheHospitalAndTheDoctor, Crutches)

    let Pills = new DataCard("Pills", "Pastille", "");
    setParentAndChild(TheHospitalAndTheDoctor, Pills)

    let Thermometer = new DataCard("Thermometer", "Termometru", "");
    setParentAndChild(TheHospitalAndTheDoctor, Thermometer)

    let Curtains = new DataCard("Curtains", "Perdea", "");
    setParentAndChild(TheHospitalAndTheDoctor, Curtains)

    let Cast = new DataCard("Cast (Plaster)", "Ghips", "");
    setParentAndChild(TheHospitalAndTheDoctor, Cast)

    let Bandage = new DataCard("Bandage", "Bandage (Pansament)", "");
    setParentAndChild(TheHospitalAndTheDoctor, Bandage)

    let Wheelchair = new DataCard("Wheelchair", "Scaun cu Rotile", "");
    setParentAndChild(TheHospitalAndTheDoctor, Wheelchair)

    let Syringe = new DataCard("Syringe", "Seringă", "");
    setParentAndChild(TheHospitalAndTheDoctor, Syringe)

    let Tissues = new DataCard("Tissues (Napkin)", "Batiste de Hârtie (Șerveţel)", "");
    setParentAndChild(TheHospitalAndTheDoctor, Tissues)

    let WaitingRoom = new DataCard("Waiting Room", "Sală de Așteptare", "");
    setParentAndChild(TheHospitalAndTheDoctor, WaitingRoom)

    let WalkingStick = new DataCard("Walking Stick", "Baston", "");
    setParentAndChild(TheHospitalAndTheDoctor, WalkingStick)

    let GreetingsCards = new DataCard("Cards (Greeting)", "Pliante", "");
    setParentAndChild(TheHospitalAndTheDoctor, GreetingsCards)

    let Plaster = new DataCard("Plaster", "Plasture", "");
    setParentAndChild(TheHospitalAndTheDoctor, Plaster)

    let Operation = new DataCard("Operation", "Operație", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Operation);

    let Treatment = new DataCard("Treatment", "Tratament", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Treatment);

    let Painkiller = new DataCard("Painkiller", "Analgezic", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Painkiller);

    let ShoulderPain = new DataCard("Shoulder Pain", "Durere de umăr", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, ShoulderPain);

    let Flu = new DataCard("Flu", "Gripă", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Flu);

    let InGoodShape = new DataCard("In Good Shape", "În formă bună", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, InGoodShape);

    let BodyTemperature = new DataCard("Body Temperature", "Temperatura corpului", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, BodyTemperature);

    let Diabetes = new DataCard("Diabetes", "Diabet", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Diabetes);

    let BackAche = new DataCard("Back Ache", "Durere de spate", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, BackAche);

    let MedicalAssistant = new DataCard("Medical Assistant (Nurse)", "Asistentă medicală", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, MedicalAssistant);

    let Medic = new DataCard("Medic", "Medic", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Medic);

    let Symptom = new DataCard("Symptom", "Simptom", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Symptom);

    let FoodPoisoning = new DataCard("Food Poisoning", "Intoxicație alimentară", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, FoodPoisoning);

    let Diarrhea = new DataCard("Diarrhea", "Diaree", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Diarrhea);

    let StomachAche = new DataCard("Stomach Ache", "Durere de stomac", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, StomachAche);

    let Patient = new DataCard("Patient", "Pacient", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Patient);

    let Fever = new DataCard("Fever", "Febră", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Fever);

    let Headache = new DataCard("Headache", "Durere de cap", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Headache);

    let Emergency = new DataCard("Emergency", "De Urgență", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Emergency);

    let Gums = new DataCard("Gums", "Gingie", ""); 
    setParentAndChild(TheHospitalAndTheDoctor, Gums);

    // #thebeach #beach #seaside
    let TheBeach = new DataCard("The Beach", "Plaja", "");
    setParentAndChild(wordclass_nouns, TheBeach)

    let SailingBoat = new DataCard("Sailing Boat", "Barcă cu Pânze", "");
    setParentAndChild(TheBeach, SailingBoat)

    let Sea = new DataCard("Sea", "Mare", "");
    setParentAndChild(TheBeach, Sea)

    let Lighthouse = new DataCard("Lighthouse", "Far", "");
    setParentAndChild(TheBeach, Lighthouse)

    let Spade = new DataCard("Spade", "Lopățică", "");
    setParentAndChild(TheBeach, Spade)

    let Bucket = new DataCard("Bucket", "Găletușă", "");
    setParentAndChild(TheBeach, Bucket)

    let Sandcastle = new DataCard("Sandcastle", "Castel de Nisip", "");
    setParentAndChild(TheBeach, Sandcastle)

    let Umbrella = new DataCard("Umbrella", "Umbrelă (de Soare)", "");
    setParentAndChild(TheBeach, Umbrella)

    let Flag = new DataCard("Flag", "Steag", "");
    setParentAndChild(TheBeach, Flag)

    let Island = new DataCard("Island", "Insulă", "");
    setParentAndChild(TheBeach, Island)

    let MotorBoat = new DataCard("Motor Boat", "Barcă cu Motor", "");
    setParentAndChild(TheBeach, MotorBoat)

    let Shell = new DataCard("Shell", "Scoică", "");
    setParentAndChild(TheBeach, Shell)

    let Beach = new DataCard("Beach", "Plajă", "");
    setParentAndChild(TheBeach, Beach)

    let RowingBoat = new DataCard("Rowing Boat", "Barcă", "");
    setParentAndChild(TheBeach, RowingBoat)

    let Deckchair = new DataCard("Deckchair", "Şezlong", "");
    setParentAndChild(TheBeach, Deckchair)

    let Suncream = new DataCard("Suncream", "Cremă de Protecție Solară", "");
    setParentAndChild(TheBeach, Suncream)

    let FishingBoat = new DataCard("Fishing Boat", "Barcă de Pescuit", "");
    setParentAndChild(TheBeach, FishingBoat)

    let Paddle = new DataCard("Paddle", "Pagaie", "");
    setParentAndChild(TheBeach, Paddle)

    let FishingNet = new DataCard("Fishing Net", "Plasă de Pescuit", "");
    setParentAndChild(TheBeach, FishingNet)

    let Seaweed = new DataCard("Seaweed", "Alge", "");
    setParentAndChild(TheBeach, Seaweed)

    let Pebbles = new DataCard("Pebbles", "Pietricele", "");
    setParentAndChild(TheBeach, Pebbles)

    let Rope = new DataCard("Rope", "Frânghie", "");
    setParentAndChild(TheBeach, Rope)

    let Canoe = new DataCard("Canoe", "Canoe", "");
    setParentAndChild(TheBeach, Canoe)

    let Ship = new DataCard("Ship", "Vapor (Vas)", "");
    setParentAndChild(TheBeach, Ship)

    let Cliff = new DataCard("Cliff", "Faleză", "");
    setParentAndChild(TheBeach, Cliff)

    let Waves = new DataCard("Waves", "Valuri", "");
    setParentAndChild(TheBeach, Waves)

    // #thefarm #farm
    let TheFarm = new DataCard("The Farm", "Ferma", "");
    setParentAndChild(wordclass_nouns, TheFarm)

    let Haystack = new DataCard("Haystack", "Căpiță de Fân", "");
    setParentAndChild(TheFarm, Haystack)

    let Pond = new DataCard("Pond", "Iaz (Heleșteu)", "");
    setParentAndChild(TheFarm, Pond)

    let Hayloft = new DataCard("Hayloft", "Şură (pod)", "");
    setParentAndChild(TheFarm, Hayloft)

    let Pigsty = new DataCard("Pigsty", "Cocină", "");
    setParentAndChild(TheFarm, Pigsty)

    let ChickenShed = new DataCard("Chicken Shed", "Coteț de Păsări", "");
    setParentAndChild(TheFarm, ChickenShed)

    let Tractor = new DataCard("Tractor", "Tractor", "");
    setParentAndChild(TheFarm, Tractor)

    let Barn = new DataCard("Barn", "Hangar (Şopron)", "");
    setParentAndChild(TheFarm, Barn)

    let Mud = new DataCard("Mud", "Nuroi", "");
    setParentAndChild(TheFarm, Mud)

    let Cart = new DataCard("Cart", "Căruț", "");
    setParentAndChild(TheFarm, Cart)

    let Hay = new DataCard("Hay", "Fân", "");
    setParentAndChild(TheFarm, Hay)

    let StrawBales = new DataCard("Straw Bales", "Baloți de Paie", "");
    setParentAndChild(TheFarm, StrawBales)

    let Farmhouse = new DataCard("Farmhouse", "Fermă", "");
    setParentAndChild(TheFarm, Farmhouse)

    let Scarecrow = new DataCard("Scarecrow", "Sperietoare (de Ciori)", "");
    setParentAndChild(TheFarm, Scarecrow)

    let Stable = new DataCard("Stable (Horses, Cows)", "Grajd de (Cai, Vite)", "");
    setParentAndChild(TheFarm, Stable)

    let Saddle = new DataCard("Saddle", "Şa", "");
    setParentAndChild(TheFarm, Saddle)

    let Field = new DataCard("Field", "Câmo", "");
    setParentAndChild(TheFarm, Field)

    let Orchard = new DataCard("Orchard", "Livadă", "");
    setParentAndChild(TheFarm, Orchard)

    let Plough = new DataCard("Plough", "Plug", "");
    setParentAndChild(TheFarm, Plough)


    //#thepark #park
    let ThePark = new DataCard("The Park", "Parcul", "");
    setParentAndChild(wordclass_nouns, ThePark)

    let Swings = new DataCard("Swings", "Leagăne", "");
    setParentAndChild(ThePark, Swings)

    let Sandpit = new DataCard("Sandpit", "Groapă de Nisip", "");
    setParentAndChild(ThePark, Sandpit)

    let Picnic = new DataCard("Picnic", "Picnic", "");
    setParentAndChild(ThePark, Picnic)

    let Kite = new DataCard("Kite", "Zmeu", "");
    setParentAndChild(ThePark, Kite)

    let Gate = new DataCard("Gate", "Poartă", "");
    setParentAndChild(ThePark, Gate)

    let Slide = new DataCard("Slide", "Tobogan", "");
    setParentAndChild(ThePark, Slide)

    let Bush = new DataCard("Bush", "Tufiș", "");
    setParentAndChild(ThePark, Bush)

    let FlowerBed = new DataCard("Flower Bed", "Rond de Flori", "");
    setParentAndChild(ThePark, FlowerBed)

    let Leash = new DataCard("Leash", "Leșă", "");
    setParentAndChild(ThePark, Leash)

    let SkippingRope = new DataCard("Skipping Rope", "Coardă de Sărit", "");
    setParentAndChild(ThePark, SkippingRope)

    let Puddle = new DataCard("Puddle", "Baltă (Băltoacă)", "");
    setParentAndChild(ThePark, Puddle)

    let String = new DataCard("String", "Sfoară", "");
    setParentAndChild(ThePark, String)

    let FenceRailings = new DataCard("Fence Railings", "Gard", "");
    setParentAndChild(ThePark, FenceRailings)

    let Seesaw = new DataCard("Seesaw", "Balansoar", "");
    setParentAndChild(ThePark, Seesaw)

    let Earth = new DataCard("Earth", "Pământ (Soil)", "");
    setParentAndChild(ThePark, Earth)

    //#thestreet #street
    let TheStreet = new DataCard("The Street", "Strada", "");
    setParentAndChild(wordclass_nouns, TheStreet)

    let Shop = new DataCard("Shop", "Magazin", "");
    setParentAndChild(TheStreet, Shop)
    
    let ShoeShop = new DataCard("Shoe shop", "Magazine de încălțăminte", "");
    setParentAndChild(TheStreet, ShoeShop)

    let Hole = new DataCard("Hole", "Gaură", "");
    setParentAndChild(TheStreet, Hole)

    let Cafe = new DataCard("Cafe", "Cafenea", "");
    setParentAndChild(TheStreet, Cafe)

    let Ambulance = new DataCard("Ambulance", "Ambulanță", "");
    setParentAndChild(TheStreet, Ambulance)

    let Pavement = new DataCard("Pavement", "Trotuar", "");
    setParentAndChild(TheStreet, Pavement)

    let Statue = new DataCard("Statue", "Statuie", "");
    setParentAndChild(TheStreet, Statue)

    let Roof = new DataCard("Roof", "Acoperiș", "");
    setParentAndChild(TheStreet, Roof)

    let Digger = new DataCard("Digger", "Excavator", "");
    setParentAndChild(TheStreet, Digger)

    let Hotel = new DataCard("Hotel", "Hotel", "");
    setParentAndChild(TheStreet, Hotel)

    let PoliceCar = new DataCard("Police Car", "Mașină de Poliție", "");
    setParentAndChild(TheStreet, PoliceCar)

    let Pipes = new DataCard("Pipes", "Țevi", "");
    setParentAndChild(TheStreet, Pipes)

    let JackHammer = new DataCard("Jack-hammer", "Picamăr", "");
    setParentAndChild(TheStreet, JackHammer)

    let Playground = new DataCard("Playground", "Curtea Şcoală", "");
    setParentAndChild(TheStreet, Playground)

    let ZebraCrossing = new DataCard("Zebra Crossing", "Trecere Pentru Pietoni (Zebră)", "");
    setParentAndChild(TheStreet, ZebraCrossing)

    let Factory = new DataCard("Factory", "Fabrică", "");
    setParentAndChild(TheStreet, Factory)

    let Lorry = new DataCard("Lorry", "Camion", "");
    setParentAndChild(TheStreet, Lorry)

    let Cinema = new DataCard("Cinema", "Cinematograf", "");
    setParentAndChild(TheStreet, Cinema)

    let Van = new DataCard("Van", "Camionetă", "");
    setParentAndChild(TheStreet, Van)

    let Trailer = new DataCard("Trailer", "Remorcă", "");
    setParentAndChild(TheStreet, Trailer)

    let House = new DataCard("House", "Casă", "");
    setParentAndChild(TheStreet, House)

    let Market = new DataCard("Market", "Piață", "");
    setParentAndChild(TheStreet, Market)

    let Steps = new DataCard("Steps", "Trepte (Scări)", "");
    setParentAndChild(TheStreet, Steps)

    let Flats = new DataCard("Flats", "Bloc (Imobil)", "");
    setParentAndChild(TheStreet, Flats)

    let LampPost = new DataCard("Lamp Post", "Stâlp de Iluminat", "");
    setParentAndChild(TheStreet, LampPost)

    let FireEngine = new DataCard("Fire Engine", "Mașină de Pompieri", "");
    setParentAndChild(TheStreet, FireEngine)

    //#travel
    let Travel = new DataCard("Travel", "Călătoria", "");
    setParentAndChild(wordclass_nouns, Travel)

    let phoneNumber = new DataCard("Telephone number", "Număr de telefon", "");  
    setParentAndChild(Travel, phoneNumber);  

    let homeTown = new DataCard("Home town", "Oraș natal", "");  
    setParentAndChild(Travel, homeTown); 
    
    let adventure = new DataCard("Adventure", "Aventură", "");  
    setParentAndChild(Travel, adventure);  

    let crowded = new DataCard("Crowded", "Algomerată", "");  
    setParentAndChild(Travel, crowded);  

    let news = new DataCard("News", "Știri", "");  
    setParentAndChild(Travel, news); 

    let guide = new DataCard("Guide", "Ghid", "");  
    setParentAndChild(Travel, guide);  

    let guest = new DataCard("Guest", "Oaspete", "");  
    setParentAndChild(Travel, guest);  
    
    let meetingPoint = new DataCard("Meeting point", "Loc de întâlnire", "");  
    setParentAndChild(Travel, meetingPoint);  

    let tour = new DataCard("Tour", "Tur", "");  
    setParentAndChild(Travel, tour);  

    let place = new DataCard("Place (location)", "Loc", "");  
    setParentAndChild(Travel, place);  

    let RollerBlades = new DataCard("Roller Blades", "Role", "");
    setParentAndChild(Travel, RollerBlades)

    let holiday = new DataCard("Holiday", "Sărbătoarea", "");  
    setParentAndChild(Travel, holiday);

    let Yacht = new DataCard("Yacht", "Bărcuță (Barcă)", "");
    setParentAndChild(Travel, Yacht)

    let Tricycle = new DataCard("Tricycle", "Tricicletă", "");
    setParentAndChild(Travel, Tricycle)

    let Skateboard = new DataCard("Skateboard", "Skateboard", "");
    setParentAndChild(Travel, Skateboard)

    let Bicycle = new DataCard("Bicycle", "Bicicletă", "");
    setParentAndChild(Travel, Bicycle)

    let Motorbike = new DataCard("Motorbike", "Motocicletă", "");
    setParentAndChild(Travel, Motorbike)

    let Car = new DataCard("Car", "Mașină", "");
    setParentAndChild(TheStreet, Car)

    let Taxi = new DataCard("Taxi", "Taxi", "");
    setParentAndChild(Travel, Taxi)

    let Bus = new DataCard("Bus", "Autobuz", "");
    setParentAndChild(Travel, Bus)

    let Train = new DataCard("Train", "Tren", "");
    setParentAndChild(Travel, Train)

    let Caravan = new DataCard("Caravan", "Rulotă", "");
    setParentAndChild(Travel, Caravan)

    let Barge = new DataCard("Barge", "Şalupă", "");
    setParentAndChild(Travel, Barge)

    let RailwayStation = new DataCard("Railway Station", "Gara", "");
    setParentAndChild(Travel, RailwayStation)

    let CarGarage = new DataCard("Car Garage", "Garajul", "");
    setParentAndChild(Travel, CarGarage)

    let Aeroport = new DataCard("Aeroport", "Aeroportul", "");
    setParentAndChild(Travel, Aeroport)

    let CarWash = new DataCard("CarWash", "Spălătorie Auto", "");
    setParentAndChild(Travel, CarWash)

    let RailwayTrack = new DataCard("RailwayTrack", "Cale Ferată", "");
    setParentAndChild(Travel, RailwayTrack)

    let TrainEngine = new DataCard("Train Engine", "Locomotivă", "");
    setParentAndChild(Travel, TrainEngine)

    let Platform = new DataCard("Platform", "Peron", "");
    setParentAndChild(Travel, Platform)

    let TicketMachine = new DataCard("Ticket Machine", "Automat de Bilete", "");
    setParentAndChild(Travel, TicketMachine)

    let TrafficLight = new DataCard("Traffic Light", "Semafor", "");
    setParentAndChild(Travel, TrafficLight)

    let Backpack = new DataCard("Backpack", "Rucsac", "");
    setParentAndChild(Travel, Backpack)

    let Headlights = new DataCard("Headlights", "Faruri", "");
    setParentAndChild(Travel, Headlights)

    let Engine = new DataCard("Engine", "Motor", "");
    setParentAndChild(Travel, Engine)

    let Wheel = new DataCard("Wheel", "Roată", "");
    setParentAndChild(Travel, Wheel)

    let Battery = new DataCard("Battery", "Baterie", "");
    setParentAndChild(Travel, Battery)

    let Suitcase = new DataCard("Suitcase", "Valiză", "");
    setParentAndChild(Travel, Suitcase)

    let Carriages = new DataCard("Carriages", "Vagoane", "");
    setParentAndChild(Travel, Carriages)

    let Aeroplane = new DataCard("Aeroplane", "Avion", "");
    setParentAndChild(Travel, Aeroplane)

    let Helicopter = new DataCard("Helicopter", "Elicopter", "");
    setParentAndChild(Travel, Helicopter)

    let Runway = new DataCard("Runway", "Pistă", "");
    setParentAndChild(Travel, Runway)

    let ControlTower = new DataCard("Control Tower", "Turn de Control", "");
    setParentAndChild(Travel, ControlTower)

    let CarBoot = new DataCard("Car Boot", "Portbagaj", "");
    setParentAndChild(Travel, CarBoot)

    let Petrol = new DataCard("Petrol", "Benzină", "");
    setParentAndChild(Travel, Petrol)

    let BreakdownLorry = new DataCard("Breakdown Lorry", "Mașină de Tractare", "");
    setParentAndChild(Travel, BreakdownLorry)

    let PetrolPump = new DataCard("Petrol Pump", "Pompă de Benzină", "");
    setParentAndChild(Travel, PetrolPump)

    let Oil = new DataCard("Oil", "Ulei", "");
    setParentAndChild(Travel, Oil)

    let Bonnet = new DataCard("Bonnet", "Capotă", "");
    setParentAndChild(Travel, Bonnet)

    let Tyre = new DataCard("Tyre", "Pneu (Cauciuc)", "");
    setParentAndChild(Travel, Tyre)

    let Spanner = new DataCard("Spanner", "Cheie Fixă", "");
    setParentAndChild(Travel, Spanner)

    let PetrolTanker = new DataCard("Petrol Tanker", "Camion-cisternă", "");
    setParentAndChild(Travel, PetrolTanker)

    let Escalator = new DataCard("Escalator", "Scară rulantă", "");
    setParentAndChild(Travel, Escalator);

    let ConveyorBelt = new DataCard("Conveyor Belt", "Bandă rulantă", "");
    setParentAndChild(Travel, ConveyorBelt);

    let Lobby = new DataCard("Lobby", "Holul", "");
    setParentAndChild(Travel, Lobby);

    let Coin = new DataCard("Coin", "Moneda", "");
    setParentAndChild(Travel, Coin);

    let Currency = new DataCard("Currency", "Curs valutar", "");
    setParentAndChild(Travel, Currency);

    let ExchangeRate = new DataCard("Exchange Rate", "Curs de schimb", "");
    setParentAndChild(Travel, ExchangeRate);

    let BankAccount = new DataCard("Bank Account", "Cont bancar", "");
    setParentAndChild(Travel, BankAccount);

    let Stamp = new DataCard("Stamp", "Timbru", "");
    setParentAndChild(Travel, Stamp);

    let Souvenir = new DataCard("Souvenir", "Suvenir", "");
    setParentAndChild(Travel, Souvenir);

    let Course = new DataCard("Course", "Curs", "");
    setParentAndChild(Travel, Course);

    let Trip = new DataCard("Trip (Excursion)", "Excursie", "");
    setParentAndChild(Travel, Trip);

    let Ferry = new DataCard("Ferry", "Feribot", "");
    setParentAndChild(Travel, Ferry);

    let Schedule = new DataCard("Schedule", "Un orar", "");
    setParentAndChild(Travel, Schedule);

    let Passenger = new DataCard("Passenger", "Un pasager", "");
    setParentAndChild(Travel, Passenger);

    let Tourist = new DataCard("Tourist", "Turist (turistă)", "");
    setParentAndChild(Travel, Tourist);

    //#country #thecountry
    let TheCountry = new DataCard("The Country", "La Țară", "");
    setParentAndChild(wordclass_nouns, TheCountry)

    let Stream = new DataCard("Stream", "Pârâu", "");
    setParentAndChild(TheCountry, Stream)

    let Windmill = new DataCard("Windmill", "Moară de Vânt", "");
    setParentAndChild(TheCountry, Windmill)

    let HotAirBalloon = new DataCard("Hot Air Balloon", "Balon (cu Aer Cald)", "");
    setParentAndChild(TheCountry, HotAirBalloon)

    let Stones = new DataCard("Stones", "Pietre", "");
    setParentAndChild(TheCountry, Stones)

    let Signpost = new DataCard("Signpost", "Stâlp Indicator", "");
    setParentAndChild(TheCountry, Signpost)

    let CanalLock = new DataCard("Lock (for Canal)", "Ecluză", "");
    setParentAndChild(TheCountry, CanalLock)

    let Forest = new DataCard("Forest", "Pădure", "");
    setParentAndChild(TheCountry, Forest)

    let River = new DataCard("River", "Râu", "");
    setParentAndChild(TheCountry, River)

    let Road = new DataCard("Road", "Drum (Şosea)", "");
    setParentAndChild(TheCountry, Road)

    let Rocks = new DataCard("Rocks", "Stânci", "");
    setParentAndChild(TheCountry, Rocks)

    let Hill = new DataCard("Hill", "Deal (Colină)", "");
    setParentAndChild(TheCountry, Hill)

    let Tunnel = new DataCard("Tunnel", "Tunel", "");
    setParentAndChild(TheCountry, Tunnel)

    let Waterfall = new DataCard("Waterfall", "Cascadă", "");
    setParentAndChild(TheCountry, Waterfall)

    let Bridge = new DataCard("Bridge", "Pod", "");
    setParentAndChild(TheCountry, Bridge)

    let Village = new DataCard("Village", "Sat", "");
    setParentAndChild(TheCountry, Village)

    let Logs = new DataCard("Logs", "Bușteni (Lemne)", "");
    setParentAndChild(TheCountry, Logs)

    let Canal = new DataCard("Canal", "Canal", "");
    setParentAndChild(TheCountry, Canal)

    let Tents = new DataCard("Tents", "Corturi", "");
    setParentAndChild(TheCountry, Tents)

    let Mountain = new DataCard("Mountain", "Munte", "");
    setParentAndChild(TheCountry, Mountain)

    let Volcano = new DataCard("Volcano", "Vulcan", ""); 
    setParentAndChild(TheCountry, Volcano);

    let Nature = new DataCard("Nature", "Natură", ""); 
    setParentAndChild(TheCountry, Nature);

    let Lake = new DataCard("Lake", "Lac", ""); 
    setParentAndChild(TheCountry, Lake);

    let Jungle = new DataCard("Jungle", "Junglă", ""); 
    setParentAndChild(TheCountry, Jungle);

    let Desert = new DataCard("Desert", "Deșert", ""); 
    setParentAndChild(TheCountry, Desert);

    let Ocean = new DataCard("Ocean", "Ocean", ""); 
    setParentAndChild(TheCountry, Ocean);

    //#animals
    let Animals = new DataCard("Animals", "Animalele", "");
    setParentAndChild(wordclass_nouns, Animals)

    let pet = new DataCard("Pet", "Animal de Companie", "");
    setParentAndChild(Animals, pet)

    let Pony = new DataCard("Pony", "Ponei", "");
    setParentAndChild(Sports, Pony)

    let Hamster = new DataCard("Hamster", "Hamster", "");
    setParentAndChild(Animals, Hamster)

    let GuineaPig = new DataCard("GuineaPig", "Porcușor de Guineea", "");
    setParentAndChild(Animals, GuineaPig)

    let Parrot = new DataCard("Parrot", "Papagal", "");
    setParentAndChild(Animals, Parrot)

    let Beak = new DataCard("Beak", "Cioc", "");
    setParentAndChild(Animals, Beak)

    let Mouse = new DataCard("Mouse", "Şoarece", "");
    setParentAndChild(Animals, Mouse)

    let Kitten = new DataCard("Kitten", "Pisoi", "");
    setParentAndChild(Animals, Kitten)

    let Kennel = new DataCard("Kennel", "Cușcă", "");
    setParentAndChild(Animals, Kennel)

    let Puppy = new DataCard("Puppy", "Cățeluș", "");
    setParentAndChild(Animals, Puppy)

    let PetFood = new DataCard("Pet Food", "Hrană", "");
    setParentAndChild(Animals, PetFood)

    let Budgeriagar = new DataCard("Budgeriagar", "Peruș", "");
    setParentAndChild(Animals, Budgeriagar)

    let Canary = new DataCard("Canary", "Canar", "");
    setParentAndChild(Animals, Canary)

    let Rabbit = new DataCard("Rabbit", "Iepure", "");
    setParentAndChild(Animals, Rabbit)

    let Cat = new DataCard("Cat", "Pisică", "");
    setParentAndChild(Animals, Cat)

    let Goldfish = new DataCard("Goldfish", "Peștișori Aurii", "");
    setParentAndChild(Animals, Goldfish)

    let Cage = new DataCard("Cage", "Colivie", "");
    setParentAndChild(Animals, Cage)

    let Crab = new DataCard("Crab", "Crab", "");
    setParentAndChild(Animals, Crab)

    let Seagull = new DataCard("Seagull", "Pescăruș", "");
    setParentAndChild(Animals, Seagull)

    let Fish = new DataCard("Fish", "Pește", "");
    setParentAndChild(Animals, Fish)

    let StarFish = new DataCard("StarFish", "Stea-de-mare", "");
    setParentAndChild(Animals, StarFish)

    let Lamb = new DataCard("Lamb", "Miel", "");
    setParentAndChild(Animals, Lamb)

    let Bull = new DataCard("Bull", "Taur", "");
    setParentAndChild(Animals, Bull)

    let Geese = new DataCard("Geese", "Gâște", "");
    setParentAndChild(Animals, Geese)

    let Sheep = new DataCard("Sheep", "Oaie", "");
    setParentAndChild(Animals, Sheep)

    let Horse = new DataCard("Horse", "Cal", "");
    setParentAndChild(Animals, Horse)

    let Pig = new DataCard("Pig", "Porc", "");
    setParentAndChild(Animals, Pig)

    let Piglets = new DataCard("Piglets", "Purcei", "");
    setParentAndChild(Animals, Piglets)

    let Cow = new DataCard("Cow", "Vacă", "");
    setParentAndChild(Animals, Cow)

    let CalfCow = new DataCard("Calf (Cow)", "Vițel", "");
    setParentAndChild(Animals, CalfCow)

    let Turkey = new DataCard("Turkey", "Curcan", "");
    setParentAndChild(Animals, Turkey)

    let Sheepdog = new DataCard("Sheepdog", "Câine Ciobânesc", "");
    setParentAndChild(Animals, Sheepdog)

    let Beehive = new DataCard("Beehive", "Stup", "");
    setParentAndChild(Animals, Beehive)

    let Snail = new DataCard("Snail", "Melc", "");
    setParentAndChild(Animals, Snail)

    let Ladybird = new DataCard("Ladybird", "Gărgăriță", "");
    setParentAndChild(Animals, Ladybird)

    let Caterpillar = new DataCard("Caterpillar", "omidă", "");
    setParentAndChild(Animals, Caterpillar)

    let Worm = new DataCard("Worm", "Râmă", "");
    setParentAndChild(Animals, Worm)

    let Wasp = new DataCard("Wasp", "Viespe", "");
    setParentAndChild(Animals, Wasp)

    let Bee = new DataCard("Bee", "Albină", "");
    setParentAndChild(Animals, Bee)

    let Birds = new DataCard("Birds", "Păsări", "");
    setParentAndChild(Animals, Birds)

    let Pigeon = new DataCard("Pigeon", "Porumbel", "");
    setParentAndChild(Animals, Pigeon)

    let Dog = new DataCard("Dog", "Câine", "");
    setParentAndChild(Animals, Dog)

    let Frog = new DataCard("Frog", "Broască", "");
    setParentAndChild(Animals, Frog)

    let Tadpoles = new DataCard("Tadpoles", "Mormoloci", "");
    setParentAndChild(Animals, Tadpoles)

    let Swans = new DataCard("Swans", "Lebede", "");
    setParentAndChild(Animals, Swans)

    let Duck = new DataCard("Duck", "Rață", "");
    setParentAndChild(Animals, Duck)

    let Ducklings = new DataCard("Ducklings", "Bobci de Rață", "");
    setParentAndChild(Animals, Ducklings)

    let Butterfly = new DataCard("Butterfly", "Fluture", "");
    setParentAndChild(Animals, Butterfly)

    let Lizard = new DataCard("Lizard", "Şopârlă", "");
    setParentAndChild(Animals, Lizard)

    let Fox = new DataCard("Fox", "Vulpe", "");
    setParentAndChild(Animals, Fox)

    let Hedgehog = new DataCard("Hedgehog", "Arici", "");
    setParentAndChild(Animals, Hedgehog)

    let Squirrel = new DataCard("Squirrel", "Veveriță", "");
    setParentAndChild(Animals, Squirrel)

    let Badger = new DataCard("Badger", "Bursuc", "");
    setParentAndChild(Animals, Badger)

    let Toad = new DataCard("Toad", "Broască Râioasă", "");
    setParentAndChild(Animals, Toad)

    let Mole = new DataCard("Mole", "Cârtiță", "");
    setParentAndChild(Animals, Mole)

    let Owl = new DataCard("Owl", "Bufniță", "");
    setParentAndChild(Animals, Owl)

    let FoxCubs = new DataCard("Fox Cubs", "Pui de Vulpe", "");
    setParentAndChild(Animals, FoxCubs)

    let Moth = new DataCard("Moth", "Fluture de Noapte (Molie)", "");
    setParentAndChild(Animals, Moth)

    let FlyInsect = new DataCard("Fly (Insect)", "Muscă", "");
    setParentAndChild(Animals, FlyInsect)

    let Spider = new DataCard("Spider", "Păianjen", "");
    setParentAndChild(Animals, Spider)

    let Cobweb = new DataCard("Cobweb", "Pânză de Păianjen", "");
    setParentAndChild(Animals, Cobweb)

    let Panda = new DataCard("Panda", "Panda (Urs)", "");
    setParentAndChild(Animals, Panda)

    let Eagle = new DataCard("Eagle", "Vultur", "");
    setParentAndChild(Animals, Eagle)

    let Wing = new DataCard("Wing", "Aripa", "");
    setParentAndChild(Animals, Wing)

    let Hippopotamus = new DataCard("Hippopotamus", "Hipopotam", "");
    setParentAndChild(Animals, Hippopotamus)

    let Bat = new DataCard("Bat", "Liliac", "");
    setParentAndChild(Animals, Bat)

    let Monkey = new DataCard("Monkey", "Maimuță", "");
    setParentAndChild(Animals, Monkey)

    let Gorilla = new DataCard("Gorilla", "Gorilla", "");
    setParentAndChild(Animals, Gorilla)

    let Paws = new DataCard("Paws", "Labe", "");
    setParentAndChild(Animals, Paws)

    let Kangaroo = new DataCard("Kangaroo", "Cangur", "");
    setParentAndChild(Animals, Kangaroo)

    let Wolf = new DataCard("Wolf", "Lup", "");
    setParentAndChild(Animals, Wolf)

    let Penguin = new DataCard("Penguin", "Pinguin", "");
    setParentAndChild(Animals, Penguin)

    let Pelican = new DataCard("Pelican", "Pelican", "");
    setParentAndChild(Animals, Pelican)

    let Feathers = new DataCard("Feathers", "Pene", "");
    setParentAndChild(Animals, Feathers)

    let Crocodile = new DataCard("Crocodile", "Crocodil", "");
    setParentAndChild(Animals, Crocodile)

    let Bear = new DataCard("Bear", "Urs", "");
    setParentAndChild(Animals, Bear)

    let Ostrich = new DataCard("Ostrich", "Struț", "");
    setParentAndChild(Animals, Ostrich)

    let Dolphin = new DataCard("Dolphin", "Delfin", "");
    setParentAndChild(Animals, Dolphin)

    let Lion = new DataCard("Lion", "Leu", "");
    setParentAndChild(Animals, Lion)

    let LionCubs = new DataCard("Lion Cubs", "Pui de Leu", "");
    setParentAndChild(Animals, LionCubs)

    let Giraffe = new DataCard("Giraffe", "Girafă", "");
    setParentAndChild(Animals, Giraffe)

    let Deer = new DataCard("Deer", "Cerb", "");
    setParentAndChild(Animals, Deer)

    let Camel = new DataCard("Camel", "Cămilă", "");
    setParentAndChild(Animals, Camel)

    let Seal = new DataCard("Seal", "Focă", "");
    setParentAndChild(Animals, Seal)

    let Tortise = new DataCard("Tortise", "Broască-Țestoasă", "");
    setParentAndChild(Animals, Tortise)

    let Elephant = new DataCard("Elephant", "Elefant", "");
    setParentAndChild(Animals, Elephant)

    let Trunk = new DataCard("Trunk (Elephant)", "Trompă", "");
    setParentAndChild(Animals, Trunk)

    let Rhinoceros = new DataCard("Rhinoceros", "Rinocer", "");
    setParentAndChild(Animals, Rhinoceros)

    let Bison = new DataCard("Bison", "Bizon", "");
    setParentAndChild(Animals, Bison)

    let Beaver = new DataCard("Beaver", "Castor", "");
    setParentAndChild(Animals, Beaver)

    let Zebra = new DataCard("Zebra", "Zebra", "");
    setParentAndChild(Animals, Zebra)

    let Snake = new DataCard("Snake", "Şarpe", "");
    setParentAndChild(Animals, Snake)

    let Goat = new DataCard("Goat", "Capră", "");
    setParentAndChild(Animals, Goat)

    let Shark = new DataCard("Shark", "Rechin", "");
    setParentAndChild(Animals, Shark)

    let Whale = new DataCard("Whale", "Balenă", "");
    setParentAndChild(Animals, Whale)

    let Tiger = new DataCard("Tiger", "Tigru", "");
    setParentAndChild(Animals, Tiger)

    let Leopard = new DataCard("Leopard", "Leopard", "");
    setParentAndChild(Animals, Leopard)


    // #shop
    let theShop = new DataCard("The Shop", "Magazinul", "");
    setParentAndChild(wordclass_nouns, theShop)

    let Checkout = new DataCard("Checkout", "Casă (de marcat)", "");
    setParentAndChild(theShop, Checkout)

    let Trolley = new DataCard("Trolley", "Cărucior (de Cumpărături)", "");
    setParentAndChild(theShop, Trolley)

    let Money = new DataCard("Money", "Bani", "");
    setParentAndChild(theShop, Money)

    let Handbag = new DataCard("Handbag", "Poșetă (Geantă)", "");
    setParentAndChild(theShop, Handbag)

    let Bottles = new DataCard("Bottles", "Sticle", "");
    setParentAndChild(theShop, Bottles)

    let Basket = new DataCard("Basket (Chimney)", "Coș", "");
    setParentAndChild(theShop, Basket)

    let Scales = new DataCard("Scales", "Cântar", "");
    setParentAndChild(theShop, Scales)

    let CarrierBag = new DataCard("Carrier Bag", "Sacoșă", "");
    setParentAndChild(theShop, CarrierBag)

    // #food
    let food = new DataCard("Food", "Mâncarea", "");
    setParentAndChild(wordclass_nouns, food)

    let Orange = new DataCard("Orange", "Portocală", "");
    setParentAndChild(food, Orange)
    
    let softDrink = new DataCard("Soft drink", "Băutură răcoritoare", "");  
    setParentAndChild(food, softDrink);  

    let snack = new DataCard("Snack", "Gustare", "");  
    setParentAndChild(food, snack);  

    let Pear = new DataCard("Pear", "Pară", "");
    setParentAndChild(food, Pear)

    let Chocolate = new DataCard("Chocolate", "Ciocolată", "");
    setParentAndChild(food, Chocolate)

    let Banana = new DataCard("Banana", "Banană", "");
    setParentAndChild(food, Banana)

    let Sweet = new DataCard("Sweet", "Bomboană", "");
    setParentAndChild(food, Sweet)

    let Cake = new DataCard("Cake", "Tort", "");
    setParentAndChild(food, Cake)

    let Straw = new DataCard("Straw", "Pai", "");
    setParentAndChild(food, Straw)

    let Sandwich = new DataCard("Sandwich", "Sendviș", "");
    setParentAndChild(food, Sandwich)

    let Butter = new DataCard("Butter", "Unt", "");
    setParentAndChild(food, Butter)

    let Biscuit = new DataCard("Biscuit", "Biscuit", "");
    setParentAndChild(food, Biscuit)

    let Cheese = new DataCard("Cheese", "Brânză", "");
    setParentAndChild(food, Cheese)

    let Bread = new DataCard("Bread", "Pâine", "");
    setParentAndChild(food, Bread)

    let Strawberry = new DataCard("Strawberry", "Căpșună", "");
    setParentAndChild(food, Strawberry)

    let Raspberry = new DataCard("Raspberry", "Zmeura", "");
    setParentAndChild(food, Raspberry)

    let IceCream = new DataCard("Icecream", "Înghețată", "");
    setParentAndChild(food, IceCream)

    let FruitJuice = new DataCard("Fruit Juice", "Suc de Fructe", "");
    setParentAndChild(food, FruitJuice)

    let Cherry = new DataCard("Cherry", "Cireașă", "");
    setParentAndChild(food, Cherry)

    let Crisps = new DataCard("Crisps", "Chipsuri", "");
    setParentAndChild(food, Crisps)

    let Sausage = new DataCard("Sausage", "Cârnat", "");
    setParentAndChild(food, Sausage)

    let Salami = new DataCard("Salami", "Salam", "");
    setParentAndChild(food, Salami)

    let Clementine = new DataCard("Clementine", "Clementină", "");
    setParentAndChild(food, Clementine)

    let Breakfast = new DataCard("Breakfast", "Mic Dejun", "");
    setParentAndChild(food, Breakfast)

    let Lunch = new DataCard("Dinner", "Prânz", "");
    setParentAndChild(food, Lunch)

    let Dinner = new DataCard("Dinner", "Cină (Masă de Seară)", "");
    setParentAndChild(food, Dinner)

    let BoiledEgg = new DataCard("Boiled Egg (soft)", "Ou Fiert (Moale)", "");
    setParentAndChild(food, BoiledEgg)

    let Coffee = new DataCard("Coffee", "Cafea", "");
    setParentAndChild(food, Coffee)

    let FriedEgg = new DataCard("Fried Egg", "Ou Ochi", "");
    setParentAndChild(food, FriedEgg)

    let Toast = new DataCard("Toast", "Pâine Prăjită", "");
    setParentAndChild(food, Toast)

    let Jam = new DataCard("Jam", "Dulceață", "");
    setParentAndChild(food, Jam)

    let Cream = new DataCard("Cream", "Smântână", "");
    setParentAndChild(food, Cream)

    let Milk = new DataCard("Milk", "Lapte", "");
    setParentAndChild(food, Milk)

    let Cereal = new DataCard("Cereal", "Cereale", "");
    setParentAndChild(food, Cereal)

    let HotChocolate = new DataCard("Hot Chocolate", "Ciocolată Caldă", "");
    setParentAndChild(food, HotChocolate)

    let Sugar = new DataCard("Sugar", "Zahăr", "");
    setParentAndChild(food, Sugar)

    let Tea = new DataCard("Tea", "Ceai", "");
    setParentAndChild(food, Tea)

    let Honey = new DataCard("Honey", "Miere", "");
    setParentAndChild(food, Honey)

    let Salt = new DataCard("Salt", "Sare", "");
    setParentAndChild(food, Salt)

    let Pepper = new DataCard("Pepper", "Piper", "");
    setParentAndChild(food, Pepper)

    let Teapot = new DataCard("Teapot", "Ceainic", "");
    setParentAndChild(food, Teapot)

    let Pancakes = new DataCard("Pancakes", "Clătite", "");
    setParentAndChild(food, Pancakes)

    let BreadRolls = new DataCard("Bread Rolls (Baps)", "Chifle", "");
    setParentAndChild(food, BreadRolls)

    let Ham = new DataCard("Ham", "Şuncă", "");
    setParentAndChild(food, Ham)

    let Soup = new DataCard("Soup", "Supă", "");
    setParentAndChild(food, Soup)

    let Omlette = new DataCard("Omlette", "Omletă", "");
    setParentAndChild(food, Omlette)

    let Chopsticks = new DataCard("Chopsticks", "Bețișoare", "");
    setParentAndChild(food, Chopsticks)

    let Salad = new DataCard("Salad", "Salată", "");
    setParentAndChild(food, Salad)

    let Hamburger = new DataCard("Hamburger", "Hamburger", "");
    setParentAndChild(food, Hamburger)

    let Chicken = new DataCard("Chicken", "Pui", "");
    setParentAndChild(food, Chicken)

    let Rice = new DataCard("Rice", "Orez", "");
    setParentAndChild(food, Rice)

    let Ketchup = new DataCard("Ketchup", "Ketchup", "");
    setParentAndChild(food, Ketchup)

    let Spaghetti = new DataCard("Spaghetti", "Spaghete", "");
    setParentAndChild(food, Spaghetti)

    let MashedPotatoes = new DataCard("Mashed Potatoes", "Piure de Cartofi", "");
    setParentAndChild(food, MashedPotatoes)

    let Pizza = new DataCard("Pizza", "Pizza", "");
    setParentAndChild(food, Pizza)

    let Chips = new DataCard("Chips", "Cartofi Prăjiți", "");
    setParentAndChild(food, Chips)

    let Pudding = new DataCard("Pudding", "Deserturi", "");
    setParentAndChild(food, Pudding)

    let Grapefruit = new DataCard("Grapefruit", "Grepfrut", "");
    setParentAndChild(food, Grapefruit)

    let Carrot = new DataCard("Carrot", "Morcov", "");
    setParentAndChild(food, Carrot)

    let Cauliflower = new DataCard("Cauliflower", "Conopidă", "");
    setParentAndChild(food, Cauliflower)

    let Leek = new DataCard("Leek", "Praz", "");
    setParentAndChild(food, Leek)

    let Mushroom = new DataCard("Mushroom", "Ciupercă", "");
    setParentAndChild(food, Mushroom)

    let Cucumber = new DataCard("Cucumber", "Castravete", "");
    setParentAndChild(food, Cucumber)

    let Lemon = new DataCard("Lemon", "Lămâie", "");
    setParentAndChild(food, Lemon)

    let Celery = new DataCard("Celery", "Țelină", "");
    setParentAndChild(food, Celery)

    let Apricot = new DataCard("Apricot", "Caisă", "");
    setParentAndChild(food, Apricot)

    let Melon = new DataCard("Melon (Honeydew, Water)", "Pepene (Galben, Roșu)", "");
    setParentAndChild(food, Melon)

    let Onion = new DataCard("Onion", "Ceapă", "");
    setParentAndChild(food, Onion)

    let Cabbage = new DataCard("Cabbage", "letză", "");
    setParentAndChild(food, Cabbage)

    let Pearch = new DataCard("Pearch", "Piersică", "");
    setParentAndChild(food, Pearch)

    let Lettuce = new DataCard("Lettuce", "Salată Verde", "");
    setParentAndChild(food, Lettuce)

    let Peas = new DataCard("Peas", "Mazăre", "");
    setParentAndChild(food, Peas)

    let Tomato = new DataCard("Tomato", "Roșie", "");
    setParentAndChild(food, Tomato)

    let Potatoes = new DataCard("Potatoes", "Cartofi", "");
    setParentAndChild(food, Potatoes)

    let Spinach = new DataCard("Spinach", "Spanac", "");
    setParentAndChild(food, Spinach)

    let Beans = new DataCard("Beans (Green)", "Fasole Verde", "");
    setParentAndChild(food, Beans)

    let Pumpkin = new DataCard("Pumpkin", "Dovleac", "");
    setParentAndChild(food, Pumpkin)

    let Tins = new DataCard("Tins", "Cutii de Conserve", "");
    setParentAndChild(food, Tins)

    let Yoghurt = new DataCard("Yoghurt", "Iaurt", "");
    setParentAndChild(food, Yoghurt)

    let Pineapple = new DataCard("Pineapple", "Ananas", "");
    setParentAndChild(food, Pineapple)

    let Meat = new DataCard("Meat", "Carne", "");
    setParentAndChild(food, Meat)

    let Flour = new DataCard("Flour", "Făină", "");
    setParentAndChild(food, Flour)

    let Plum = new DataCard("Plum", "Prună", "");
    setParentAndChild(food, Plum)

    let Eggs = new DataCard("Eggs", "Ouă", "");
    setParentAndChild(food, Eggs)

    // #atwork
    let AtWork = new DataCard("At Work", "La muncă", "");
    setParentAndChild(wordclass_nouns, AtWork);

    let Project = new DataCard("Project", "Proiect", "");
    setParentAndChild(AtWork, Project);

    let Meeting = new DataCard("Meeting", "Ședința", "");
    setParentAndChild(AtWork, Meeting);

    let workday = new DataCard("Workday (weekday)", "Zi de lucru", "");  
    setParentAndChild(AtWork, workday);  

    let Report = new DataCard("Report", "Raport", "");
    setParentAndChild(AtWork, Report);

    let Method = new DataCard("Method", "Metodă", "");
    setParentAndChild(AtWork, Method);

    let Employee = new DataCard("Employee", "Angajat", "");
    setParentAndChild(AtWork, Employee);

    let HumanResources = new DataCard("Human Resources", "Resurse Umane", "");
    setParentAndChild(AtWork, HumanResources);

    let Opportunity = new DataCard("Opportunity", "Oportunitate", "");
    setParentAndChild(AtWork, Opportunity);

    let Boss = new DataCard("Boss", "Șef", "");
    setParentAndChild(AtWork, Boss);

    let Objective = new DataCard("Objective", "Obiectiv", "");
    setParentAndChild(AtWork, Objective);

    let Job = new DataCard("Job", "Post", "");
    setParentAndChild(AtWork, Job);

    let Problem = new DataCard("Problem", "Problemă", "");
    setParentAndChild(AtWork, Problem);

    let Promotion = new DataCard("Promotion", "Promoletea", "");
    setParentAndChild(AtWork, Promotion);

    let Appointment = new DataCard("Meeting", "Întâlnire", "");
    setParentAndChild(AtWork, Appointment);

    let Result = new DataCard("Result", "Rezultat", "");
    setParentAndChild(AtWork, Result);

    let Salary = new DataCard("Salary", "Salariu", "");
    setParentAndChild(AtWork, Salary);

    let Experience = new DataCard("Experience", "Experiență", "");
    setParentAndChild(AtWork, Experience);

    let Skills = new DataCard("Skills", "Aptitudini", "");
    setParentAndChild(AtWork, Skills);

    let Details = new DataCard("Details", "Detalii", "");
    setParentAndChild(AtWork, Details);

    let Facility = new DataCard("Facility", "Facilitate", "");
    setParentAndChild(AtWork, Facility);

    // #home ===========================

    let atHome = new DataCard("At Home", "Acasă", "");
    setParentAndChild(wordclass_nouns, atHome)

    //#workshop
    let TheWorkshop = new DataCard("The Workshop", "Atelierul", "");
    setParentAndChild(atHome, TheWorkshop)

    let pliers = new DataCard("Pliers", "Patent", "");  
    setParentAndChild(TheWorkshop, pliers);

    let Vice = new DataCard("Vice", "Menghină", "");
    setParentAndChild(TheWorkshop, Vice)

    let Sandpaper = new DataCard("Sandpaper", "Şmirghel", "");
    setParentAndChild(TheWorkshop, Sandpaper)

    let Drill = new DataCard("Drill", "Bormașină", "");
    setParentAndChild(TheWorkshop, Drill)

    let Ladder = new DataCard("Ladder", "Scară", "");
    setParentAndChild(TheWorkshop, Ladder)

    let Saw = new DataCard("Saw", "Fierăstrău", "");
    setParentAndChild(TheWorkshop, Saw)

    let Sawdust = new DataCard("Sawdust", "Rumeguș", "");
    setParentAndChild(TheWorkshop, Sawdust)

    let Toolbox = new DataCard("Toolbox", "Cutie de Scule", "");
    setParentAndChild(TheWorkshop, Toolbox)

    let Screwdriver = new DataCard("Screwdriver", "Şurubelniță", "");
    setParentAndChild(TheWorkshop, Screwdriver)

    let Plank = new DataCard("Plank", "Scândură", "");
    setParentAndChild(TheWorkshop, Plank)

    let WoodShavings = new DataCard("Shavings (Wood)", "Talaș", "");
    setParentAndChild(TheWorkshop, WoodShavings)

    let Penknife = new DataCard("Penknife", "Briceag", "");
    setParentAndChild(TheWorkshop, Penknife)

    let Wood = new DataCard("Wood (Chopped)", "Lemne Tăiate", "");
    setParentAndChild(TheWorkshop, Wood)

    let Nails = new DataCard("Nails", "Cuie", "");
    setParentAndChild(TheWorkshop, Nails)

    let Workbench = new DataCard("Workbench", "Banc de lucru (masă)", "");
    setParentAndChild(TheWorkshop, Workbench)

    let Jars = new DataCard("Jars", "Borcane", "");
    setParentAndChild(TheWorkshop, Jars)

    let PaintPot = new DataCard("Paint Pot", "Găleată de vopsea", "");
    setParentAndChild(TheWorkshop, PaintPot)

    let File = new DataCard("File", "Pilă", "");
    setParentAndChild(TheWorkshop, File)

    let Hammer = new DataCard("Hammer", "Ciocan", "");
    setParentAndChild(TheWorkshop, Hammer)

    let TapeMeasure = new DataCard("Tape Measure", "Ruletă", "");
    setParentAndChild(TheWorkshop, TapeMeasure)

    let Axe = new DataCard("Axe", "Topor", "");
    setParentAndChild(TheWorkshop, Axe)

    let Barrel = new DataCard("Barrel", "Butol", "");
    setParentAndChild(TheWorkshop, Barrel)

    let Nuts = new DataCard("Nuts", "Piulițe", "");
    setParentAndChild(TheWorkshop, Nuts)

    let Bolts = new DataCard("Bolts", "Şuruburi", "");
    setParentAndChild(TheWorkshop, Bolts)

    let Screws = new DataCard("Screws", "Holțșuruburi", "");
    setParentAndChild(TheWorkshop, Screws)

    //#garden
    let theGarden = new DataCard("The Garden", "Grădina", "");
    setParentAndChild(atHome, theGarden)

    let Wheelbarrow = new DataCard("Wheelbarrow", "Roabă", "");
    setParentAndChild(theGarden, Wheelbarrow)

    let Bricks = new DataCard("Bricks", "Cărămizi", "");
    setParentAndChild(theGarden, Bricks)

    let DiggingSpade = new DataCard("Spade", "Cazma", "");
    setParentAndChild(theGarden, DiggingSpade)

    let WateringCan = new DataCard("Watering Can", "Stropitoare", "");
    setParentAndChild(theGarden, WateringCan)

    let Dustbin = new DataCard("Dustbin", "Pubelă", "");
    setParentAndChild(theGarden, Dustbin)

    let Seeds = new DataCard("Seeds", "Semințe", "");
    setParentAndChild(theGarden, Seeds)

    let Shed = new DataCard("Shed", "Magazie (Şproron", "");
    setParentAndChild(theGarden, Shed)

    let Flowers = new DataCard("Flowers", "Flori", "");
    setParentAndChild(theGarden, Flowers)

    let Sprinkler = new DataCard("Sprinkler", "Aspersor", "");
    setParentAndChild(theGarden, Sprinkler)

    let Hoe = new DataCard("Garden Hoe", "Sapă (Săpăligă)", "");
    setParentAndChild(theGarden, Hoe)

    let Trowel = new DataCard("Trowel", "Lopățică", "");
    setParentAndChild(theGarden, Trowel)

    let Bone = new DataCard("Bone", "Os", "");
    setParentAndChild(theGarden, Bone)

    let Hedge = new DataCard("Hedge", "Gard viu", "");
    setParentAndChild(theGarden, Hedge)

    let GardenFork = new DataCard("Garden Fork", "Furcă de Grădină", "");
    setParentAndChild(theGarden, GardenFork)

    let Lawnmower = new DataCard("Lawnmower", "Mașină de tuns iarba", "");
    setParentAndChild(theGarden, Lawnmower)

    let Path = new DataCard("Path", "Cărare (Potecă)", "");
    setParentAndChild(theGarden, Path)

    let Leaves = new DataCard("Leaves", "Frunze", "");
    setParentAndChild(theGarden, Leaves)

    let Tree = new DataCard("Tree", "Copac (Pom)", "");
    setParentAndChild(theGarden, Tree)

    let Smoke = new DataCard("Smoke", "Fum", "");
    setParentAndChild(theGarden, Smoke)

    let Rake = new DataCard("Rake", "Greblă", "");
    setParentAndChild(theGarden, Rake)

    let Nest = new DataCard("Nest", "Cuib", "");
    setParentAndChild(theGarden, Nest)

    let Sticks = new DataCard("Sticks", "Crenguțe", "");
    setParentAndChild(theGarden, Sticks)

    let Greenhouse = new DataCard("Greenhouse", "Seră", "");
    setParentAndChild(theGarden, Greenhouse)

    let Hosepipe = new DataCard("Hosepipe", "Furtun de Grădină", "");
    setParentAndChild(theGarden, Hosepipe)

    let Bonfire = new DataCard("Bonfire", "Foc (în aer liber)", "");
    setParentAndChild(theGarden, Bonfire)

    let Vegetables = new DataCard("Vegetables", "Legume", "");
    setParentAndChild(theGarden, Vegetables)

    let Pram = new DataCard("Pram", "Cărucior Pentru Copii", "");
    setParentAndChild(theGarden, Pram)

    let Grass = new DataCard("Grass", "Iarbă", "");
    setParentAndChild(theGarden, Grass)

    //#kitchen
    let theKitchen = new DataCard("The Kitchen", "Bucătăria", "");
    setParentAndChild(atHome, theKitchen)

    let storageRoom = new DataCard("Storage room (pantry)", "Magazie", "");  
    setParentAndChild(theKitchen, storageRoom);  

    let kettle = new DataCard("Kettle", "Fierbător", "");  
    setParentAndChild(theKitchen, kettle);  

    let fire = new DataCard("Fire", "Incendiu!", "");  
    setParentAndChild(theKitchen, fire);  

    let pan = new DataCard("Pan", "Tigaie", "");  
    setParentAndChild(theKitchen, pan);  

    let pot = new DataCard("Pot", "Oală", "");  
    setParentAndChild(theKitchen, pot);  

    let vitamin = new DataCard("Vitamin", "Vitamină", "");  
    setParentAndChild(theKitchen, vitamin);  

    let fridge = new DataCard("Fridge", "Frigider", "");
    setParentAndChild(theKitchen, fridge)

    let Tray = new DataCard("Tray", "Tava", "");
    setParentAndChild(theKitchen, Tray)

    let Clock = new DataCard("Clock", "Ceas de perete", "");
    setParentAndChild(theKitchen, Clock)

    let Stool = new DataCard("Stool", "Taburet", "");
    setParentAndChild(theKitchen, Stool)

    let TeaSpoons = new DataCard("Teaspoons", "Lingurițe", "");
    setParentAndChild(theKitchen, TeaSpoons)

    let lightSwitch = new DataCard("Light-switch", "Întrerupător", "");
    setParentAndChild(theKitchen, lightSwitch)

    let washingPowder = new DataCard("Washing Powder", "Detergent Pudră", "");
    setParentAndChild(theKitchen, washingPowder)

    let Key = new DataCard("Key", "Cheie", "");
    setParentAndChild(theKitchen, Key)

    let Door = new DataCard("Door", "Ușa", "");
    setParentAndChild(theKitchen, Door)

    let vacuumCleaner = new DataCard("Vacuum Cleaner", "Aspirator", "");
    setParentAndChild(theKitchen, vacuumCleaner)

    let Saucepans = new DataCard("Saucepans", "Oale (Cratițe)", "");
    setParentAndChild(theKitchen, Saucepans)

    let Forks = new DataCard("Forks", "Furculițe", "");
    setParentAndChild(theKitchen, Forks)

    let Apron = new DataCard("Apron", "Șorț (de bucătărie)", "");
    setParentAndChild(theKitchen, Apron)

    let IroningBoard = new DataCard("Ironing Board", "Masă de Călcat", "");
    setParentAndChild(theKitchen, IroningBoard)

    let Rubbish = new DataCard("Rubbish", "Gunoi", "");
    setParentAndChild(theKitchen, Rubbish)

    let Glasses = new DataCard("Glasses", "Pahare", "");
    setParentAndChild(theKitchen, Glasses)

    let kitchenSink = new DataCard("kitchen Sink", "Chiuvetă de Bucătărie", "");
    setParentAndChild(theKitchen, kitchenSink)

    let TeaPot = new DataCard("Tea Pot", "Ceainic", "");
    setParentAndChild(theKitchen, TeaPot)

    let Knives = new DataCard("Knives", "Cuțite", "");
    setParentAndChild(theKitchen, Knives)

    let Mop = new DataCard("Mop", "Mop", "");
    setParentAndChild(theKitchen, Mop)

    let Duster = new DataCard("Duster", "Cârpă (de Praf)", "");
    setParentAndChild(theKitchen, Duster)

    let Tiles = new DataCard("Tiles", "Faianță", "");
    setParentAndChild(theKitchen, Tiles)

    let Broom = new DataCard("Broom", "Mătură", "");
    setParentAndChild(theKitchen, Broom)

    let WashingMachine = new DataCard("Washing Machine", "Mașină de Spălat Rufe", "");
    setParentAndChild(theKitchen, WashingMachine)

    let Dustpan = new DataCard("Dustpan", "Făraș", "");
    setParentAndChild(theKitchen, Dustpan)

    let Drawer = new DataCard("Drawer", "Sertar", "");
    setParentAndChild(theKitchen, Drawer)

    let Saucers = new DataCard("Saucers", "Farfurioare (de Cafea)", "");
    setParentAndChild(theKitchen, Saucers)

    let FryingPan = new DataCard("Frying Pan", "Tigaie", "");
    setParentAndChild(theKitchen, FryingPan)

    let Cooker = new DataCard("Cooker", "Aragaz", "");
    setParentAndChild(theKitchen, Cooker)

    let Spoons = new DataCard("Spoons", "Linguri", "");
    setParentAndChild(theKitchen, Spoons)

    let Plates = new DataCard("Plates", "Farfurii", "");
    setParentAndChild(theKitchen, Plates)

    let ClothesIron = new DataCard("Clothes Iron", "Fier de călcat", "");
    setParentAndChild(theKitchen, ClothesIron)

    let broomCupboard = new DataCard("Broom Cupboard", "Dulap (de perete)", "");
    setParentAndChild(theKitchen, broomCupboard)

    let Bowls = new DataCard("Bowls", "Boluri", "");
    setParentAndChild(theKitchen, Bowls)

    let Brush = new DataCard("Brush", "Perie", "");
    setParentAndChild(theKitchen, Brush)

    let Matches = new DataCard("Matches", "Chibrituri", "");
    setParentAndChild(theKitchen, Matches)

    let Cups = new DataCard("Cups", "Cești", "");
    setParentAndChild(theKitchen, Cups)

    let TeaTowel = new DataCard("Tea Towel", "Prosop de bucătărie", "");
    setParentAndChild(theKitchen, TeaTowel)

    //#inhome
    let home = new DataCard("Home", "Casă", "");
    setParentAndChild(atHome, home)

    let Ceiling = new DataCard("Ceiling", "Plafon (Tavan)", "");
    setParentAndChild(home, Ceiling)

    let Floor = new DataCard("Floor", "Podea", "");
    setParentAndChild(home, Floor)

    let Wall = new DataCard("Wall", "Perete", "");
    setParentAndChild(home, Wall)

    let bath = new DataCard("Bath", "Baie", "baie")
    setParentAndChild(home, bath)

    let soap = new DataCard("Soap", "Săpun", "săpun")
    setParentAndChild(home, soap)

    let tap = new DataCard("Tap", "Robinet", "");
    setParentAndChild(home, tap)

    let toiletPaper = new DataCard("Toilet Paper", "Hârtie Igienică", "");
    setParentAndChild(home, toiletPaper)

    let Toothbrush = new DataCard("Toothbrush", "Periuță de dinți", "");
    setParentAndChild(home, Toothbrush)

    let Toilet = new DataCard("Toilet", "Toaletă", "");
    setParentAndChild(home, Toilet)

    let Sponge = new DataCard("Sponge", "Burete", "");
    setParentAndChild(home, Sponge)

    let SinkBasin = new DataCard("Sink Basin", "Chiuvetă", "");
    setParentAndChild(home, SinkBasin)

    let Shower = new DataCard("Shower", "Duș", "");
    setParentAndChild(home, Shower)

    let Towel = new DataCard("Towel", "Prosop", "");
    setParentAndChild(home, Towel)

    let toothpaste = new DataCard("Toothpaste", "Pasta de dinți", "");
    setParentAndChild(home, toothpaste)

    let Radio = new DataCard("Radio", "Radio", "");
    setParentAndChild(home, Radio)

    let cushion = new DataCard("Cushion", "Pernă", "");
    setParentAndChild(home, cushion)

    let dvd = new DataCard("DVD", "DVD", "");
    setParentAndChild(home, dvd)

    let Carpet = new DataCard("Carpet", "Mochetă", "");
    setParentAndChild(home, Carpet)

    let Rug = new DataCard("Rug", "Covor", "");
    setParentAndChild(home, Rug)

    let Mat = new DataCard("Mat", "Covoraș", "");
    setParentAndChild(home, Mat)

    let Water = new DataCard("Water", "Apă", "");
    setParentAndChild(home, Water)

    let Bed = new DataCard("Bed", "Pat", "");
    setParentAndChild(home, Bed)

    let Sofa = new DataCard("Sofa", "Canapea", "");
    setParentAndChild(home, Sofa)

    let Bathroom = new DataCard("Bathroom", "Baia", "");
    setParentAndChild(home, Bathroom)

    let LivingRoom = new DataCard("Living Room", "Sufrageria", "");
    setParentAndChild(home, LivingRoom)

    let Bedroom = new DataCard("Bedroom", "Dormitul", "");
    setParentAndChild(home, Bedroom)

    let Hall = new DataCard("Hall", "Holul", "");
    setParentAndChild(home, Hall)

    let Entrance = new DataCard("Entrance", "Intrarea", "");
    setParentAndChild(home, Entrance)

    let Chair = new DataCard("Chair", "Scaun", "");
    setParentAndChild(home, Chair)

    let Duvet = new DataCard("Duvet", "Pilotă", "");
    setParentAndChild(home, Duvet)

    let Comb = new DataCard("Comb", "Pieptene", "");
    setParentAndChild(home, Comb)

    let sheet = new DataCard("Sheet (bed)", "Cearșaf", "");
    setParentAndChild(home, sheet)

    let Wardrobe = new DataCard("Wardrobe", "Dulap", "");
    setParentAndChild(home, Wardrobe)

    let Laundry = new DataCard("Laundry", "Rufe", "");
    setParentAndChild(home, Laundry)

    let Television = new DataCard("Television", "Televizor", "");
    setParentAndChild(home, Television)

    let drawers = new DataCard("Drawers (chest of)", "Comodă", "");
    setParentAndChild(home, drawers)

    let Mirror = new DataCard("Mirror", "Oglindă", "");
    setParentAndChild(home, Mirror)

    let Hairbrush = new DataCard("Hairbrush", "Perie de păr", "");
    setParentAndChild(home, Hairbrush)

    let Lamp = new DataCard("Lamp", "Lampă (Veioză)", "");
    setParentAndChild(home, Lamp)

    let Pictures = new DataCard("Pictures", "Tablouri", "");
    setParentAndChild(home, Pictures)

    let Pegs = new DataCard("Pegs", "Cuier", "");
    setParentAndChild(home, Pegs)

    let Telephone = new DataCard("Telephone", "Telefon", "");
    setParentAndChild(home, Telephone)

    let stairs = new DataCard("Stairs", "Scară (trepte)", "");
    setParentAndChild(home, stairs)

    let Letters = new DataCard("Letters", "Scrisori", "");
    setParentAndChild(home, Letters)

    let Envelope = new DataCard("Envelope", "Plic", "");
    setParentAndChild(home, Envelope)

    let Table = new DataCard("Table", "Masă", "");
    setParentAndChild(home, Table)

    let Newspaper = new DataCard("Newspaper", "Ziar", "");
    setParentAndChild(home, Newspaper)

    let Radiator = new DataCard("Radiator", "Calorifer", "");
    setParentAndChild(home, Radiator)

    let Ballooon = new DataCard("Ballooon", "Balon", "");
    setParentAndChild(home, Ballooon)

    let EyeGlasses = new DataCard("Eye Glasses", "Ochelari", "");
    setParentAndChild(home, EyeGlasses)

    let Window = new DataCard("Window", "Fereastră", "");
    setParentAndChild(home, Window)

    let villa = new DataCard("Villa", "Vilă", "");  
    setParentAndChild(home, villa);  

    let bookshelf = new DataCard("Bookshelf", "Raft de cărți", "");  
    setParentAndChild(home, bookshelf);  

    let blanket = new DataCard("Blanket", "Pătură", "");  
    setParentAndChild(home, blanket);  

    let package_ = new DataCard("Package", "Colet", "");  
    setParentAndChild(home, package_);  

    let Fireworks = new DataCard("Fireworks", "Artificii", "");
    setParentAndChild(home, Fireworks)

    let Ribbon = new DataCard("Ribbon", "Fundă", "");
    setParentAndChild(home, Ribbon)

    let Candle = new DataCard("Candle", "Lumânare", "");
    setParentAndChild(home, Candle)

    let Paperchains = new DataCard("Paper Chains", "Ghirlandă", "");
    setParentAndChild(home, Paperchains)

    let TableCloth = new DataCard("Table Cloth", "Față de Masă", "");
    setParentAndChild(home, TableCloth)

    let Lightbulb = new DataCard("Lightbulb", "Bec", "");
    setParentAndChild(home, Lightbulb)

    let FancyDress = new DataCard("Fancy Dress", "Deghizări", "");
    setParentAndChild(home, FancyDress)

    let TeddyBear = new DataCard("Teddy Bear", "Ursuleț de Pluș", "");
    setParentAndChild(home, TeddyBear)

    let PresentGift = new DataCard("Present (Gift)", "Cadou", "");
    setParentAndChild(home, PresentGift)

    let Party = new DataCard("The Party", "Petrecerea", "");
    setParentAndChild(home, Party)

    let Pillow = new DataCard("Pillow", "Pernă", "");
    setParentAndChild(home, Pillow)

    let Computer = new DataCard("Computer", "Computer (Calculator)", "");
    setParentAndChild(home, Computer)

    //#toys
    let Toys = new DataCard("Toys", "Jucării", "");
    setParentAndChild(atHome, Toys)

    const noun_arrows = new NounFemale("arrows", "săgeată", "săgeți", "săgeata", "săgețile", "săgeții", "săgeților");
    const noun_beads = new NounFemale("beads", "mărgea", "mărgele", "mărgeaua", "mărgelele", "mărgelei", "mărgelelor");
    const noun_boat = new NounNeuter("boat", "barcă", "bărci", "barca", "bărcile", "bărcii", "bărcilor");
    const noun_bow = new NounNeuter("bow", "arc", "arcuri", "arcul", "arcurile", "arcului", "arcurilor");
    const noun_castle = new NounNeuter("castle", "castel", "castele", "castelul", "castelele", "castelului", "castelelor");
    const noun_crane = new NounFemale("crane", "macara", "macarale", "macaraua", "macaralele", "macaralei", "macaralelor");
    const noun_cubes = new NounNeuter("cubes", "cub", "cuburi", "cubul", "cuburile", "cubului", "cuburilor");
    const noun_dice = new NounNeuter("dice", "zar", "zaruri", "zarul", "zarurile", "zarului", "zarurilor");
    const noun_dolls = new NounFemale("dolls", "păpușă", "păpuși", "păpușa", "păpușile", "păpușei", "păpușilor");
    const noun_drums = new NounNeuter("drums", "tobă", "tobe", "toba", "tobele", "tobei", "tobelor");
    const noun_guitar = new NounFemale("guitar", "chitară", "chitare", "chitara", "chitarele", "chitarei", "chitarelor");
    const noun_harmonica = new NounFemale("harmonica", "muzicuță", "muzicuțe", "muzicuța", "muzicuțele", "muzicuței", "muzicuțelor");
    const noun_marbles = new NounFemale("marbles", "bilă", "bile", "bila", "bilele", "bilei", "bilelor");
    const noun_masks = new NounFemale("masks", "mască", "măști", "masca", "măștile", "măștii", "măștilor");
    const noun_necklace = new NounNeuter("necklace", "colier", "coliere", "colierul", "colierele", "colierului", "colierelor");
    const noun_paints = new NounNeuter("paints", "vopsea", "vopsele", "vopseaua", "vopselele", "vopselei", "vopselelor");
    const noun_parachute = new NounFemale("parachute", "parașută", "parașute", "parașuta", "parașutele", "parașutei", "parașutelor");
    const noun_piano = new NounNeuter("piano", "pian", "piane", "pianul", "pianele", "pianului", "pianelor");
    const noun_playingCards = new NounFemale("playing cards", "carte de joc", "cărți de joc", "cartea de joc", "cărțile de joc", "cărții de joc", "cărților de joc");
    const noun_puppets = new NounMale("puppets", "păpușar", "păpușari", "păpușarul", "păpușarii", "păpușarului", "păpușarilor");
    const noun_ring_jewelry = new NounNeuter("ring (jewelry)", "inel", "inele", "inelul", "inelele", "inelului", "inelelor");
    const noun_robot = new NounMale("robot", "robot", "roboți", "robotul", "roboții", "robotului", "roboților");
    const noun_soldiers = new NounMale("soldiers", "soldat", "soldați", "soldatul", "soldații", "soldatului", "soldaților");
    const noun_submarine = new NounNeuter("submarine", "submarin", "submarine", "submarinul", "submarinele", "submarinului", "submarinelor");
    const noun_trumpet = new NounFemale("trumpet", "trompetă", "trompete", "trompeta", "trompetele", "trompetei", "trompetelor");
    const noun_whistle = new NounNeuter("whistle", "fluier", "fluier", "fluierul", "fluierul", "fluierului", "fluierului");

    setParentAndMultipleChildren(Toys, [
        noun_arrows, noun_beads, noun_boat, noun_bow, noun_castle, noun_crane, noun_cubes, noun_dice, noun_dolls, 
        noun_drums, noun_guitar, noun_harmonica, noun_marbles, noun_masks, noun_necklace, noun_paints, noun_parachute, 
        noun_piano, noun_playingCards, noun_puppets, noun_ring_jewelry, noun_robot, noun_soldiers, noun_submarine, 
        noun_trumpet, noun_whistle, 
    ])
    


    // #people ================================
    let people = new DataCard("People", "Oamenii", "")
    setParentAndChild(wordclass_nouns, people)

    const noun_baby = new NounNeuter("baby", "bebeluș", "bebeluși", "bebelușul", "bebelușii", "bebelușului", "bebelușilor");
    const noun_boy = new NounMale("boy", "băiat", "băieți", "băiatul", "băieții", "băiatului", "băieților");
    const noun_child = new NounNeuter("child", "copil", "copii", "copilul", "copiii", "copilului", "copiilor");
    const noun_girl = new NounFemale("girl", "fată", "fete", "fata", "fetele", "fetei", "fetelor");
    const noun_man = new NounMale("man", "bărbat", "bărbați", "bărbatul", "bărbații", "bărbatului", "bărbaților");
    const noun_woman = new NounFemale("woman", "femeie", "femei", "femeia", "femeile", "femeii", "femeilor");

    setParentAndMultipleChildren(people, [
        noun_baby, noun_boy, noun_child, noun_girl, noun_man, noun_woman, 
    ])


    // #clothes
    let Clothes = new DataCard("Clothes", "Hainele", "");
    setParentAndChild(people, Clothes)

    const noun_baseballCap = new NounFemale("baseball cap", "șapcă", "șepci", "șapca", "șepcile", "șepcii", "șepcilor");
    const noun_belt = new NounFemale("belt", "curea", "curele", "cureaua", "curelele", "curelei", "curelelor");
    const noun_boots = new NounFemale("boots", "cizmă", "cizme", "cizma", "cizmele", "cizmei", "cizmelor");
    const noun_bracelet = new NounNeuter("bracelet", "brățară", "brățări", "brățara", "brățările", "brățării", "brățărilor");
    const noun_buckle = new NounFemale("buckle", "cataramă", "catarame", "catarama", "cataramele", "cataramei", "cataramelor");
    const noun_buttonHoles = new NounFemale("buttonholes", "butonieră", "butoniere", "butoniera", "butonierele", "butonierei", "butonierelor");
    const noun_buttons = new NounNeuter("buttons", "nasture", "nasturi", "nasturele", "nasturii", "nasturelui", "nasturilor");
    const noun_cardigan = new NounNeuter("cardigan", "cardigan", "cardigane", "cardiganul", "cardiganele", "cardiganului", "cardiganelor");
    const noun_clothesTag = new NounFemale("clothes tag", "etichetă", "etichete", "eticheta", "etichetele", "etichetei", "etichetelor");
    const noun_coat = new NounNeuter("coat", "palton", "paltoane", "paltonul", "paltoanele", "paltonului", "paltoanelor");
    const noun_dress = new NounFemale("dress", "rochie", "rochii", "rochia", "rochiile", "rochiei", "rochiilor");
    const noun_dressingGown = new NounNeuter("dressing gown", "halat", "halate", "halatul", "halatele", "halatului", "halatelor");
    const noun_flipFlops = new NounFemale("flip-flops", "șlap", "șlapi", "șlapul", "șlapii", "șlapului", "șlapilor");
    const noun_flippers = new NounFemale("flippers", "înotătoare", "înotătoare", "înotătoarea", "înotătoarele", "înotătoarei", "înotătoarelor");
    const noun_gem = new NounNeuter("gem", "piatră prețioasă", "pietre prețioase", "piatra prețioasă", "pietrele prețioase", "pietrei prețioase", "pietrelor prețioase");
    const noun_gloves = new NounFemale("gloves", "mănușă", "mănuși", "mănușa", "mănușile", "mănușii", "mănușilor");
    const noun_handkerchief = new NounNeuter("handkerchief", "batistă", "batiste", "batista", "batistele", "batistei", "batistelelor");
    const noun_hat = new NounFemale("hat", "pălărie", "pălării", "pălăria", "pălăriile", "pălăriei", "pălăriilor");
    const noun_highHeels = new NounFemale("high heels", "pantofi cu toc", "pantofi cu toc", "pantoful cu toc", "pantofii cu toc", "pantofului cu toc", "pantofilor cu toc");
    const noun_jacket = new NounNeuter("jacket", "jachetă", "jachete", "jacheta", "jachetele", "jachetei", "jachetelor");
    const noun_jeans = new NounMale("jeans", "blug", "blugi", "blugul", "blugii", "blugului", "blugilor");
    const noun_jumper = new NounNeuter("jumper", "pulover", "pulovere", "puloverul", "puloverele", "puloverului", "puloverelor");
    const noun_lace = new NounFemale("lace", "dantelă", "dantele", "dantela", "dantelele", "dantelei", "dantelor");
    const noun_leather = new NounFemale("leather", "piele", "pieli", "pielea", "pielile", "pielei", "pielilor");
    const noun_nappy = new NounNeuter("nappy", "scutec", "scutece", "scutecul", "scutecele", "scutecului", "scutecelor");
    const noun_nightdress = new NounFemale("nightdress", "cămașă de noapte", "cămași de noapte", "cămașa de noapte", "cămașile de noapte", "cămașii de noapte", "cămașilor de noapte");
    const noun_pair = new NounFemale("pair", "pereche", "perechi", "perechea", "perechile", "perechii", "perechilor");
    const noun_pants = new NounMale("pants", "pantalon", "pantaloni", "pantalonul", "pantalonii", "pantalonului", "pantalonilor");
    const noun_plasticBag = new NounFemale("plastic bag", "pungă de plastic", "pungi de plastic", "punga de plastic", "pungile de plastic", "pungii de plastic", "pungilor de plastic");
    const noun_pockets = new NounFemale("pockets", "buzunar", "buzunare", "buzunarul", "buzunarele", "buzunarului", "buzunarelor");
    const noun_pyjamas = new NounFemale("pyjamas", "pijamă", "pijamale", "pijamaua", "pijamalele", "pijamalei", "pijamalelor");
    const noun_raincoat = new NounNeuter("raincoat", "pelerină de ploaie", "pelerine de ploaie", "pelerina de ploaie", "pelerinele de ploaie", "pelerinei de ploaie", "pelerinelor de ploaie");
    const noun_rubber = new NounNeuter("rubber", "cauciuc", "cauciucuri", "cauciucul", "cauciucurile", "cauciucului", "cauciucurilor");
    const noun_sandals = new NounFemale("sandals", "sandale", "sandale", "sandaua", "sandalele", "sandalei", "sandalelor");
    const noun_scarf = new NounFemale("scarf", "eșarfă", "eșarfe", "eșarfa", "eșarfele", "eșarfei", "eșarfelor");
    const noun_shirt = new NounFemale("shirt", "cămașă", "cămași", "cămașa", "cămașile", "cămașii", "cămașilor");
    const noun_shoelace = new NounFemale("shoelace", "șiret", "șireturi", "șiretul", "șireturile", "șiretului", "șireturilor");
    const noun_shoes = new NounFemale("shoes", "pantof", "pantofi", "pantoful", "pantofii", "pantofului", "pantofilor");
    const noun_shorts = new NounMale("shorts", "pantalon scurt", "pantaloni scurți", "pantalonul scurt", "pantalonii scurți", "pantalonului scurt", "pantalonilor scurți");
    const noun_silk = new NounFemale("silk", "mătase", "mătase", "mătasea", "mătasele", "mătăsii", "mătăselor");
    const noun_skirt = new NounFemale("skirt", "fustă", "fuste", "fusta", "fustele", "fustei", "fustelor");
    const noun_slippers = new NounMale("slippers", "papuc", "papuci", "papucul", "papucii", "papucului", "papucilor");
    const noun_smallJacket = new NounNeuter("small jacket", "jachețică", "jachețele", "jachețica", "jachețelele", "jachețicii", "jachețelelor");
    const noun_socks = new NounFemale("socks", "șosetă", "șosete", "șoseta", "șosetele", "șosetei", "șosetelor");
    const noun_sole = new NounFemale("sole", "talpă", "tălpi", "talpa", "tălpile", "tălpii", "tălpilor");
    const noun_sunhat = new NounFemale("sunhat", "pălărie de soare", "pălării de soare", "pălăria de soare", "pălăriile de soare", "pălăriei de soare", "pălăriilor de soare");
    const noun_sweatshirt = new NounNeuter("sweatshirt", "hanorac", "hanorace", "hanoracul", "hanoracele", "hanoracului", "hanoracelor");
    const noun_swimmingCostume = new NounNeuter("swimming costume", "costum de baie", "costume de baie", "costumul de baie", "costumele de baie", "costumului de baie", "costumelor de baie");
    const noun_tie = new NounFemale("tie", "cravată", "cravate", "cravata", "cravatele", "cravatei", "cravatelor");
    const noun_tights = new NounFemale("tights", "dres", "dresuri", "dresul", "dresurile", "dresului", "dresurilor");
    const noun_trainers = new NounMale("trainers", "adidas", "adidași", "adidasul", "adidașii", "adidasului", "adidașilor");
    const noun_trousers = new NounMale("trousers", "pantalon", "pantaloni", "pantalonul", "pantalonii", "pantalonului", "pantalonilor");
    const noun_tShirt = new NounNeuter("t-shirt", "tricou", "tricouri", "tricoul", "tricourile", "tricoului", "tricourilor");
    const noun_vest = new NounFemale("vest", "vestă", "veste", "vesta", "vestele", "vestei", "vestelor");
    const noun_watch = new NounNeuter("watch", "ceas", "ceasuri", "ceasul", "ceasurile", "ceasului", "ceasurilor");
    const noun_zip = new NounFemale("zip", "fermoar", "fermoare", "fermoarul", "fermoarele", "fermoarului", "fermoarelor");

    setParentAndMultipleChildren(Clothes, [
        noun_baseballCap, noun_belt, noun_boots, noun_bracelet, noun_buckle, noun_buttonHoles, noun_buttons, noun_cardigan, noun_clothesTag, 
        noun_coat, noun_dress, noun_dressingGown, noun_flipFlops, noun_flippers, noun_gem, noun_gloves, noun_handkerchief, noun_hat, noun_highHeels, 
        noun_jacket, noun_jeans, noun_jumper, noun_lace, noun_leather, noun_nappy, noun_nightdress, noun_pair, noun_pants, noun_plasticBag, noun_pockets, 
        noun_pyjamas, noun_raincoat, noun_rubber, noun_sandals, noun_scarf, noun_shirt, noun_shoelace, noun_shoes, noun_shorts, noun_silk, noun_skirt, 
        noun_slippers, noun_smallJacket, noun_socks, noun_sole, noun_sunhat, noun_sweatshirt, noun_swimmingCostume, noun_tie, noun_tights, noun_trainers, 
        noun_trousers, noun_tShirt, noun_vest, noun_watch, noun_zip
    ])
    


    // #families
    let families = new DataCard(
        "Families", "Familiile",
        ""
    )
    setParentAndChild(people, families)

    const noun_aunt = new NounFemale("aunt", "mătușă", "mătuși", "mătușa", "mătușile", "mătușii", "mătușilor");
    const noun_brother = new NounMale("brother", "frate", "frați", "fratele", "frații", "fratelui", "fraților");
    const noun_cousinF = new NounFemale("cousin (female)", "verișoară", "verișoare", "verișoara", "verișoarele", "verișoarei", "verișoarelor");
    const noun_cousinM = new NounMale("cousin (male)", "verișor", "verișori", "verișorul", "verișorii", "verișorului", "verișorilor");
    const noun_daughter = new NounFemale("daughter", "fiică", "fiice", "fiica", "fiicele", "fiicei", "fiicelor");
    const noun_father = new NounMale("father", "tată", "tați", "tatăl", "tații", "tatălui", "taților");
    const noun_grandfather = new NounMale("grandfather", "bunic", "bunici", "bunicul", "bunicii", "bunicului", "bunicilor");
    const noun_grandmother = new NounFemale("grandmother", "bunică", "bunici", "bunica", "bunicile", "bunicii", "bunicilor");
    const noun_husband = new NounMale("husband", "soț", "soți", "soțul", "soții", "soțului", "soților");
    const noun_mother = new NounFemale("mother", "mamă", "mame", "mama", "mamele", "mamei", "mamelor");
    const noun_relative = new NounMale("relative", "rude", "rude", "ruda", "rudele", "rudei", "rudelor"); // Often plural or treated as collective noun
    const noun_sister = new NounFemale("sister", "soră", "surori", "sora", "surorile", "surorii", "surorilor");
    const noun_son = new NounMale("son", "fiu", "fii", "fiul", "fiii", "fiului", "fiilor");
    const noun_uncle = new NounMale("uncle", "unchi", "unchi", "unchiul", "unchii", "unchiului", "unchilor");
    const noun_widow = new NounFemale("widow", "văduvă", "văduve", "văduva", "văduvele", "văduvei", "văduvelor");
    const noun_wife = new NounFemale("wife", "soție", "soții", "soția", "soțiile", "soției", "soțiilor");

    setParentAndMultipleChildren(families, [
        noun_aunt, noun_brother, noun_cousinF, noun_cousinM, noun_daughter, noun_father, noun_grandfather, 
        noun_grandmother, noun_husband, noun_mother, noun_relative, noun_sister, noun_son, noun_uncle, 
        noun_widow, noun_wife
    ])

    // #jobs
    let workJob = new DataCard(
        "Work (job)", "Mancă",
        ""
    )
    setParentAndChild(people, workJob)

    const noun_actor = new NounMale("actor", "actor", "actori", "actorul", "actorii", "actorului", "actorilor");
    const noun_actress = new NounFemale("actress", "actriță", "actrițe", "actrița", "actrițele", "actriței", "actrițelor");
    const noun_apprenticeship = new NounNeuter("apprenticeship", "ucenicie", "ucenicii", "ucenicia", "uceniciile", "uceniciei", "uceniciilor");
    const noun_artist = new NounMale("artist", "artist", "artiști", "artistul", "artiștii", "artistului", "artiștilor");
    const noun_baker = new NounMale("baker", "brutar", "brutari", "brutarul", "brutarii", "brutarului", "brutarilor");
    const noun_businessMan = new NounMale("business man", "om de afaceri", "oameni de afaceri", "omul de afaceri", "oamenii de afaceri", "omului de afaceri", "oamenilor de afaceri");
    const noun_butcher = new NounMale("butcher", "măcelar", "măcelari", "măcelarul", "măcelarii", "măcelarului", "măcelarilor");
    const noun_cabinCrew = new NounFemale("cabin crew", "însoțitoare de bord", "însoțitoare de bord", "însoțitoarea de bord", "însoțitoarele de bord", "însoțitoarei de bord", "însoțitoarelor de bord");
    const noun_carpenter = new NounMale("carpenter", "tâmplar", "tâmplari", "tâmplarul", "tâmplarii", "tâmplarului", "tâmplarilor");
    const noun_chef = new NounMale("chef", "bucătar", "bucătari", "bucătarul", "bucătarii", "bucătarului", "bucătarilor");
    const noun_dancer = new NounMale("dancer", "dansator", "dansatori", "dansatorul", "dansatorii", "dansatorului", "dansatorilor");
    const noun_diver = new NounMale("diver", "scafandru", "scafandri", "scafandrul", "scafandrii", "scafandrului", "scafandrilor");
    const noun_doctor = new NounMale("doctor", "doctor", "doctori", "doctorul", "doctorii", "doctorului", "doctorilor");
    const noun_farmer = new NounMale("farmer", "fermier", "fermierii", "fermierul", "fermierii", "fermierului", "fermierilor");
    const noun_firefighter = new NounMale("firefighter", "pompier", "pompieri", "pompierul", "pompierii", "pompierului", "pompierilor");
    const noun_fisherman = new NounMale("fisherman", "pescator", "pescari", "pescatorul", "pescarii", "pescatorului", "pescatorilor");
    const noun_guy = new NounMale("guy", "tip", "tipi", "tipul", "tipii", "tipului", "tipilor");
    const noun_hairdresser = new NounMale("hairdresser", "frizer", "frizeri", "frizerul", "frizerii", "frizerului", "frizerilor");
    const noun_healthCareAssistant = new NounFemale("health care assistant", "infirmieră", "infirmiere", "infirmiera", "infirmierele", "infirmierei", "infirmierelor");
    const noun_judge = new NounMale("judge", "judecător", "judecători", "judecătorul", "judecătorii", "judecătorului", "judecătorilor");
    const noun_lorryDriver = new NounMale("lorry driver", "șofer de camion", "șoferi de camion", "șoferul de camion", "șoferii de camion", "șoferului de camion", "șoferilor de camion");
    const noun_mechanic = new NounMale("mechanic", "mecanic", "mecanici", "mecanicul", "mecanicii", "mecanicului", "mecanicilor");
    const noun_nurse = new NounFemale("nurse", "asistentă", "asistente", "asistenta", "asistentele", "asistentei", "asistentelor");
    const noun_officeWorker = new NounMale("office worker", "lucrător de birou", "lucrători de birou", "lucrătorul de birou", "lucrătorii de birou", "lucrătorului de birou", "lucrătorilor de birou");
    const noun_painter = new NounMale("painter", "pictor", "pictori", "pictorul", "pictorii", "pictorului", "pictorilor");
    const noun_pilot = new NounMale("pilot", "pilot", "piloți", "pilotul", "piloții", "pilotului", "piloților");
    const noun_policeman = new NounMale("policeman", "polițist", "polițiști", "polițistul", "polițiștii", "polițistului", "polițiștilor");
    const noun_policeOfficer = new NounMale("police officer", "ofițer de poliție", "ofițeri de poliție", "ofițerul de poliție", "ofițerii de poliție", "ofițerului de poliție", "ofițerilor de poliție");
    const noun_policewoman = new NounFemale("policewoman", "polițistă", "polițiste", "polițista", "polițistele", "polițistei", "polițistelor");
    const noun_postman = new NounMale("postman", "poștaș", "poștași", "poștașul", "poștașii", "poștașului", "poștașilor");
    const noun_roomMaid = new NounFemale("room maid", "cameristă", "cameriste", "camerista", "cameristele", "cameristei", "cameristelor");
    const noun_sailor = new NounMale("sailor", "marinar", "marinari", "marinarul", "marinarii", "marinarului", "marinarilor");
    const noun_singer = new NounMale("singer", "cântăreț", "cântăreți", "cântărețul", "cântăreții", "cântărețului", "cântăreților");
    const noun_teacher = new NounMale("teacher", "profesor", "profesori", "profesorul", "profesorii", "profesorului", "profesorilor");
    const noun_ticketInspector = new NounMale("ticket inspector", "controlor", "controlori", "controlorul", "controlorii", "controlorului", "controlorilor");
    const noun_trainDriver = new NounMale("train driver", "mecanic de locomotivă", "mecanici de locomotivă", "mecanicul de locomotivă", "mecanicii de locomotivă", "mecanicului de locomotivă", "mecanicilor de locomotivă");
    const noun_waiter = new NounMale("waiter", "ospătar", "ospătari", "ospătarul", "ospătarii", "ospătarului", "ospătarilor");
    const noun_waitress = new NounFemale("waitress", "ospătăriță", "ospătărițe", "ospătărița", "ospătărițele", "ospătăriței", "ospătărițelor");
    const noun_waterSkier = new NounMale("water skier", "schior nautic", "schiori nautici", "schiorul nautic", "schiorii nautici", "schiorului nautic", "schiorilor nautici");

    setParentAndMultipleChildren(
        workJob, [
            noun_actor, noun_actress, noun_apprenticeship, noun_artist, noun_astronaut, noun_baker, noun_businessMan, noun_butcher, noun_cabinCrew, 
            noun_carpenter, noun_chef, noun_dancer, noun_diver, noun_doctor, noun_farmer, noun_firefighter, noun_fisherman, noun_guy, noun_hairdresser, 
            noun_healthCareAssistant, noun_judge, noun_lorryDriver, noun_mechanic, noun_nurse, noun_officeWorker, noun_painter, noun_pilot, noun_policeman, 
            noun_policeOfficer, noun_policewoman, noun_postman, noun_roomMaid, noun_sailor, noun_singer, noun_teacher, noun_ticketInspector, noun_trainDriver, 
            noun_waiter, noun_waitress, noun_waterSkier
        ]
    )

    // #shapes =================================
    let shapes = new DataCard("Shapes", "Formele geometrice", "")
    setParentAndChild(wordclass_nouns, shapes)

    let diamond = new DataCard("Diamond", "Romb", "")
    setParentAndChild(shapes, diamond)

    let oval = new DataCard("Oval", "Oval", "")
    setParentAndChild(shapes, oval)

    let cone = new DataCard("Cone", "Con", "")
    setParentAndChild(shapes, cone)

    let line = new DataCard("Line", "Linie", "");  
    setParentAndChild(wordclass_nouns, line); 

    let rectangle = new DataCard("Rectangle", "Dreptunghi", "")
    setParentAndChild(shapes, rectangle)

    let triangle = new DataCard("Triangle", "Triunghi", "")
    setParentAndChild(shapes, triangle)

    let star = new DataCard("Star", "Stea", "")
    setParentAndChild(shapes, star)

    let square = new DataCard("Square", "Pătrat", "")
    setParentAndChild(shapes, square)

    let circle = new DataCard("Circle", "Cerc", "")
    setParentAndChild(shapes, circle)

    let cube = new DataCard("Cube", "Cub", "")
    setParentAndChild(shapes, cube)

    let crescent = new DataCard("Crescent", "Semilună", "")
    setParentAndChild(shapes, crescent)

    // #body =======================================
    let theBody = new DataCard("The body", "Corpul", "")
    setParentAndChild(wordclass_nouns, theBody)

    let head = new DataCard("Head", "Cap", "")
    setParentAndChild(theBody, head)

    let hair = new DataCard("Hair", "Păr", "")
    setParentAndChild(theBody, hair)

    let face = new DataCard("Face", "Față", "")
    setParentAndChild(theBody, face)

    let life = new DataCard("Life", "Viața", "");  
    setParentAndChild(theBody, life);  

    let smile = new DataCard("Smile", "Zâmbet", "");  
    setParentAndChild(theBody, smile);  

    let arm = new DataCard("Arm", "Braț", "")
    setParentAndChild(theBody, arm)

    let muscle = new DataCard("Muscle", "Mușchi", "");  
    setParentAndChild(muscle, muscle); 

    let elbow = new DataCard("Elbow", "Cot", "")
    setParentAndChild(theBody, elbow)

    let tummy = new DataCard("Tummy", "Burtică", "")
    setParentAndChild(theBody, tummy)

    let toes = new DataCard("Toes", "Degete de la picioare", "")
    setParentAndChild(theBody, toes)

    let foot = new DataCard("Foot", "Laba piciorului", "")
    setParentAndChild(theBody, foot)

    let leg = new DataCard("Leg", "Picior", "Gambă")
    setParentAndChild(theBody, leg)

    let knee = new DataCard("Knee", "Genunchi", "")
    setParentAndChild(theBody, knee)

    let eyebrow = new DataCard("Eyebrow", "Sprânceană", "")
    setParentAndChild(theBody, eyebrow)

    let eye = new DataCard("Eye", "Ochi", "")
    setParentAndChild(theBody, eye)

    let nose = new DataCard("Nose", "Nas", "")
    setParentAndChild(theBody, nose)

    let cheek = new DataCard("Cheek", "Obraz", "")
    setParentAndChild(theBody, cheek)

    let mouth = new DataCard("Mouth", "Gură", "")
    setParentAndChild(theBody, mouth)

    let lips = new DataCard("Lips", "Buze", "")
    setParentAndChild(theBody, lips)

    let teeth = new DataCard("Teeth", "Dinți", "")
    setParentAndChild(theBody, teeth)

    let tongue = new DataCard("Tongue", "Limbă", "")
    setParentAndChild(theBody, tongue)

    let chin = new DataCard("Chin", "Bărbie", "")
    setParentAndChild(theBody, chin)

    let ears = new DataCard("Ears", "Urechi", "")
    setParentAndChild(theBody, ears)

    let neck = new DataCard("Neck", "Gât", "")
    setParentAndChild(theBody, neck)

    let shoulders = new DataCard("Shoulders", "Umeri", "")
    setParentAndChild(theBody, shoulders)

    let chest = new DataCard("Chest", "Piept", "")
    setParentAndChild(theBody, chest)

    let back = new DataCard("Back", "Spate", "")
    setParentAndChild(theBody, back)

    let bottom = new DataCard("Bottom", "Fund", "")
    setParentAndChild(theBody, bottom)

    let hand = new DataCard("Hand", "Mână", "")
    setParentAndChild(theBody, hand)

    let thumb = new DataCard("Thumb", "Degetul mare", "")
    setParentAndChild(theBody, thumb)

    let fingers = new DataCard("Fingers", "Degete de la mână", "")
    setParentAndChild(theBody, fingers)


    // =============================================================================
    // #Adverbs
    // =============================================================================

    let when = new DataCard(
        "When", "Când",
        "")
    setParentAndChild(wordclass_adverbs, when);

    let either = new DataCard(
        "Either", "Fie",
        "")
    setParentAndChild(wordclass_adverbs, either);

    let neither = new DataCard(
        "Neither", "Nici",
        "")
    setParentAndChild(wordclass_adverbs, neither);

    let never = new DataCard(
        "Never", "Niciodată",
        "")
    setParentAndChild(wordclass_adverbs, never);

    let Only = new DataCard(
        "Only", "Numai",
        "")
    setParentAndChild(wordclass_adverbs, Only);

    let how = new DataCard(
        "How", "Cum",
        "")
    setParentAndChild(wordclass_adverbs, how);

    let where = new DataCard(
        "Where", "Unde",
        "")
    setParentAndChild(wordclass_adverbs, where);

    let Almost = new DataCard(
        "Almost", "Abia",
        "")
    setParentAndChild(wordclass_adverbs, Almost);

    let SoMuch = new DataCard("So Much", "Atât de mult", "");
    setParentAndChild(wordclass_adverbs, SoMuch);

    let Yet = new DataCard("Yet", "Încă", "");
    setParentAndChild(wordclass_adverbs, Yet);

    let Now = new DataCard("Now", "Fix", "");
    setParentAndChild(wordclass_adverbs, Now);

    let Usually = new DataCard("Usually", "De obicei", "");
    setParentAndChild(wordclass_adverbs, Usually);

    let Too = new DataCard("Too", "Prea", "");
    setParentAndChild(wordclass_adverbs, Too);

    let Already = new DataCard("Already", "Deja", "");
    setParentAndChild(wordclass_adverbs, Already);

    let Again = new DataCard("Again", "Din nou", "");
    setParentAndChild(wordclass_adverbs, Again);

    let Clearly = new DataCard("Clearly", "Clar", "");
    setParentAndChild(wordclass_adverbs, Clearly);

    let Finally = new DataCard("Finally", "În final", "");
    setParentAndChild(wordclass_adverbs, Finally);

    let Just = new DataCard("Just", "Tocmai", "");
    setParentAndChild(wordclass_adverbs, Just);

    let Early = new DataCard("Early", "Devreme", "");
    setParentAndChild(wordclass_adverbs, Early);

    let Rather = new DataCard("Rather", "Destul de", "");
    setParentAndChild(wordclass_adverbs, Rather);

    let Forever = new DataCard("Forever", "Pentru totdeauna", "");
    setParentAndChild(wordclass_adverbs, Forever);

    let Still = new DataCard("Still", "Totuși", "");
    setParentAndChild(wordclass_adverbs, Still);

    let Anyway = new DataCard("Anyway", "Oricum", "");
    setParentAndChild(wordclass_adverbs, Anyway);

    let NotAtAll = new DataCard("Not at all", "Deloc", "");
    setParentAndChild(wordclass_adverbs, NotAtAll);

    let InTheFuture = new DataCard("In the future", "În viitor", "");
    setParentAndChild(wordclass_adverbs, InTheFuture);

    let firstly = new DataCard("Firstly", "Mai întâi", "");  
    setParentAndChild(wordclass_adverbs, firstly);  

    let first = new DataCard("First", "În primul rând", "");  
    setParentAndChild(wordclass_adverbs, first);  

    let notAtAll = new DataCard("Not at all", "Deloc", "");  
    setParentAndChild(wordclass_adverbs, notAtAll);  


    // =============================================================================
    // #Conjunctions
    // =============================================================================

    let conj_although = new Conjunction("Although", "Deși", "");
    let conj_and = new Conjunction("And", "Şi","")
    let conj_and_alt = new Conjunction("And (alt)", "Iar","")
    let conj_aswell = new Conjunction("As Well", "De asemenea", "");
    let conj_because = new Conjunction("Because", "Pentru că","")
    let conj_because_alt = new Conjunction("Because", "Deoarece", "");
    let conj_before = new Conjunction("Before", "Inainte de","")
    let conj_but = new Conjunction("But", "Dar","")
    let conj_eventhough = new Conjunction("Even Though", "Chiar dacă", "");    
    let conj_for = new Conjunction("For", "Pentru","")
    let conj_if = new Conjunction("If", "Daca","")
    let conj_incase = new Conjunction("In case", "În caz că", "");
    let conj_isntit = new Conjunction("Isn't it", "Nu-i așa", "");  
    let conj_like = new Conjunction("Like (A is like B)", "Asemenea", "");
    let conj_okay = new Conjunction("Okay", "Atunci", "");  
    let conj_or = new Conjunction("Or", "Sau","")
    let conj_or_alt = new Conjunction("Or (alt)", "Ori","")
    let conj_so = new Conjunction("So", "Așa că", "");
    let conj_still = new Conjunction("Still", "Totuși", "");  
    let conj_therefore = new Conjunction("Therefore", "Deci", "");

    setParentAndMultipleChildren(wordclass_conjunctions, [
        conj_although, conj_and, conj_and_alt, conj_aswell, conj_because, conj_because_alt, conj_before, conj_but, 
        conj_eventhough, conj_for, conj_if, conj_incase, conj_isntit, conj_like, conj_okay, conj_or, conj_or_alt, 
        conj_so, conj_still, conj_therefore
    ])


    // =============================================================================
    // #Numbers
    // =============================================================================

    let one = new DataCard(
        "1 One", "1 Unu",
        "")
    setParentAndChild(wordclass_numbers, one);

    let two = new DataCard(
        "2 Two", "2 Doi",
        "")
    setParentAndChild(wordclass_numbers, two);

    let three = new DataCard(
        "3 Three", "3 Trei",
        "")
    setParentAndChild(wordclass_numbers, three);

    let four = new DataCard(
        "4 Four", "4 Patru",
        "")
    setParentAndChild(wordclass_numbers, four);

    let five = new DataCard(
        "5 Five", "5 Cinci",
        "")
    setParentAndChild(wordclass_numbers, five);

    let six = new DataCard(
        "6 Six", "6 Şase",
        "")
    setParentAndChild(wordclass_numbers, six);

    let seven = new DataCard(
        "7 Seven", "7 Şapte",
        "")
    setParentAndChild(wordclass_numbers, seven);

    let eight = new DataCard(
        "8 Eight", "8 Opt",
        "")
    setParentAndChild(wordclass_numbers, eight);

    let nine = new DataCard(
        "9 Nine", "9 Nouă",
        "")
    setParentAndChild(wordclass_numbers, nine);

    let ten = new DataCard(
        "10 Ten", "10 Zece",
        "")
    setParentAndChild(wordclass_numbers, ten);




    // =============================================================================
    // #Pronouns
    // =============================================================================

    let another = new DataCard(
        "Another", "Alt",
        "")
    setParentAndChild(wordclass_pronouns, another);

    let something = new DataCard(
        "Something", "Ceva",
        "")
    setParentAndChild(wordclass_pronouns, something);

    let Which = new DataCard("Which", "Pe care", "");
    setParentAndChild(wordclass_pronouns, Which);

    let Some = new DataCard("Some", "Niște", "");
    setParentAndChild(wordclass_pronouns, Some);

    let Whose = new DataCard("Whose", "Al cui", "");
    setParentAndChild(wordclass_pronouns, Whose);

    let AnyKindOf = new DataCard("Any Kind Of", "Niciun fel de", "");
    setParentAndChild(wordclass_pronouns, AnyKindOf);

    let everyone = new DataCard("Everyone", "Tuturor", "");  
    setParentAndChild(wordclass_pronouns, everyone);  

    let eachOther = new DataCard("Each other / with each other", "Unul pe/cu celălalte", "");  
    setParentAndChild(wordclass_pronouns, eachOther);  

    let someone = new DataCard("Someone", "Cineva", "");  
    setParentAndChild(wordclass_pronouns, someone);  

    let whatKindOf = new DataCard("What kind of", "Ce fel de", "");  
    setParentAndChild(wordclass_pronouns, whatKindOf);  


    // =============================================================================
    // #Emotions
    // =============================================================================

    let emotions = new DataCard("Emotions", "Emoții","")
    let Happy = new DataCard("Happy", "Fericit","")
    let Sad = new DataCard("Sad", "Trist","")
    let Bored = new DataCard("Bored", "Plictisit","")
    let Cheerful = new DataCard("Cheerful", "Vesel","")
    let Timid = new DataCard("Shy (Timid)", "Timid","")
    let Angry = new DataCard("Angry", "Nervos","")
    let Tired = new DataCard("Tired", "Obosit","")
    let Worried = new DataCard("Worried", "Îngrijorat","")
    let Upset = new DataCard("Upset", "Supărat","")
    let Excited = new DataCard("Excited", "Entuziasmat","")
    let Jealous = new DataCard("Jealous", "Gelos","")
    let Heartbroken = new DataCard("Heartbroken", "Fi cu inima frântă", "");
    let Horror = new DataCard("Horror", "Groază", "");
    let Unfortunate = new DataCard("Unfortunate", "Ghinion", "");
    let Crush = new DataCard("A crush (romantic)", "O pasiune", "");
    let Hope = new DataCard("Hope", "Sper", "");

    setParentAndChild(romanian, emotions);
    setParentAndMultipleChildren(emotions, [
        Happy, Sad, Bored, Cheerful, Timid, Angry, Tired, Worried, Upset, Excited, Jealous, Heartbroken, Horror, Unfortunate, Crush, Hope
    ])


    return romanian;
}




