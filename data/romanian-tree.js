import { defineCrossLinkRelationship, setParentAndChild, setParentAndMultipleChildren } from "../src/tree/functions.js";
import { DataCard, DataRoot } from "../src/tree/models.js";
import { VerbReflexiveSe, VerbReflexiveSi, Verb, NounNeuter, NounMale, NounFemale } from "./romanian-language-models.js";

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

    // -Word Classes    
    // --Multiclass
    // ---Adjective + Adverb
    // ---Adjective + Noun
    // ---Adverb + Interjection

    // let a = new DataCard('A', 'A', '')
    // setParentAndChild(romanian, a)

    // let b = new DataCard('B', 'B', '')
    // setParentAndChild(a, b)

    // let c = new DataCard('C', 'C', '')
    // setParentAndChild(b, c)

    // setParentAndChild(c, a)

    // return romanian

    


    let wordclass_adjectives = new DataCard("Adjectives", "Adjective","")
    let wordclass_adverbs = new DataCard("Adverbs", "Adverbe","")
    let wordclass_conjunctions = new DataCard("Conjunctions", "Conjuncții","")
    let wordclass_nouns = new DataCard("Nouns", "Substantive","")
    let wordclass_numbers = new DataCard("Numbers", "Numere","Todo")
    let wordclass_prepositions = new DataCard("Prepositions", "Prepoziţii","")
    let wordclass_pronouns = new DataCard("Pronouns", "Pronume","")
    let wordclass_verbs = new DataCard("Verbs", "Verbe", "")
    let wordclass_verbs_modal = new DataCard("Modal Verbs", "Verbe Modal", "")
    // let wordclass_interjections = new DataCard("Interjections", "Interjecţii", "")
    // let wordclass_determiners = new DataCard("Determiners", "Determinatori", "")
    
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
        // wordclass_interjections, 
        // wordclass_determiners
    ])


    defineCrossLinkRelationship(wordclass_verbs, wordclass_verbs_modal)

    // =============================================================================
    // #Verbs :
    // Checked against 
    //  - https://cooljugator.com/ro/suna
    //  - https://www.verbix.com/webverbix/go.php?T1=s%C4%83rb%C4%83tori&D1=5&H1=105
    // =============================================================================

    let modal_could = new DataCard("Could", "Putea",
        `<h2>Modal</h2>
        Eu aș putea să [...]<br>
        Tu ai putea să [...]<br>
        El/Ea ar putea să [...]<br>
        Noi am putea să [...]<br>
        Voi ați putea să [...]<br>
        Ei/Ele ar putea să [...]<br>`)
    
    let modal_must = new DataCard("Must", "Trebuie",
        `<h2>Modal</h2>
        Eu trebuie să [...]<br>
        Tu trebuie să [...]<br>
        El/Ea trebuie să [...]<br>
        Noi trebuie să [...]<br>
        Voi trebuie să [...]<br>
        Ei/Ele trebuie să [...]<br>`)

    let modal_should = new DataCard("Should", "Ar Trebui",
        `<h2>Modal</h2>
        Eu ar trebui să [...]<br>
        Tu ar trebui să [...]<br>
        El/Ea ar trebui să [...]<br>
        Noi ar trebui să [...]<br>
        Voi ar trebui să [...]<br>
        Ei/Ele ar trebui să [...]<br>`)
    
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



    let who = new DataCard(
        "Who", "Cine",
        "")
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

    let Good = new DataCard("Good", "Bine", "");
    setParentAndChild(DescriptiveAdjective, Good)

    let Bad = new DataCard("Bad", "Rău", "");
    setParentAndChild(DescriptiveAdjective, Bad)

    let Fat = new DataCard("Fat", "Gras", "");
    setParentAndChild(DescriptiveAdjective, Fat)

    let Thin = new DataCard("Thin", "Slab", "");
    setParentAndChild(DescriptiveAdjective, Thin)

    let Cold = new DataCard("Cold", "Rece", "");
    setParentAndChild(DescriptiveAdjective, Cold)

    let Hot = new DataCard("Hot", "Cald (Fierbinte)", "");
    setParentAndChild(DescriptiveAdjective, Hot)

    let HighTemperature = new DataCard("High (temperature)", "Ridicat", "");
    setParentAndChild(DescriptiveAdjective, HighTemperature);

    let LowTemperature = new DataCard("Low (temperature)", "Scăzut", "");
    setParentAndChild(DescriptiveAdjective, LowTemperature);

    let Dirty = new DataCard("Dirty", "Murdar", "");
    setParentAndChild(DescriptiveAdjective, Dirty)
    
    let Available = new DataCard("Available", "Disponibil", "");
    setParentAndChild(DescriptiveAdjective, Available);

    let Clean = new DataCard("Clean", "Curat", "");
    setParentAndChild(DescriptiveAdjective, Clean)

    let Open = new DataCard("Open", "Deschis", "");
    setParentAndChild(DescriptiveAdjective, Open)

    let Close = new DataCard("Close", "Închis", "");
    setParentAndChild(DescriptiveAdjective, Close)

    let First = new DataCard("First", "Primul", "");
    setParentAndChild(DescriptiveAdjective, First)

    let Ultimate = new DataCard("Ultimate (Last)", "Ultimul", "");
    setParentAndChild(DescriptiveAdjective, Ultimate)

    let Wet = new DataCard("Wet", "Ud (Humed)", "");
    setParentAndChild(DescriptiveAdjective, Wet)

    let Dry = new DataCard("Dry", "Uscat", "");
    setParentAndChild(DescriptiveAdjective, Dry)

    let Small = new DataCard("Small", "Mic", "");
    setParentAndChild(DescriptiveAdjective, Small)

    let Big = new DataCard("Big", "Mare", "");
    setParentAndChild(DescriptiveAdjective, Big)

    let New = new DataCard("New", "Nou", "");
    setParentAndChild(DescriptiveAdjective, New)

    let Old = new DataCard("Old", "Vechi", "");
    setParentAndChild(DescriptiveAdjective, Old)

    let Easy = new DataCard("Easy", "Ușor", "");
    setParentAndChild(DescriptiveAdjective, Easy)

    let Difficult = new DataCard("Difficult", "Greu", "");
    setParentAndChild(DescriptiveAdjective, Difficult)

    let Soft = new DataCard("Soft", "Moale", "");
    setParentAndChild(DescriptiveAdjective, Soft)

    let Hard = new DataCard("Hard", "Tare", "");
    setParentAndChild(DescriptiveAdjective, Hard)

    let Slow = new DataCard("Slow", "Încet", "");
    setParentAndChild(DescriptiveAdjective, Slow)

    let Fast = new DataCard("Fast", "Repede", "");
    setParentAndChild(DescriptiveAdjective, Fast)

    let Dead = new DataCard("Dead (Wilted)", "Ofilit (Uscat)", "");
    setParentAndChild(DescriptiveAdjective, Dead)

    let Alive = new DataCard("Alive", "Viu", "");
    setParentAndChild(DescriptiveAdjective, Alive)

    let True_ = new DataCard("True", "Adevărat", "");
    setParentAndChild(DescriptiveAdjective, True_)

    let False_ = new DataCard("False", "Fals", "");
    setParentAndChild(DescriptiveAdjective, False_)

    let Smooth = new DataCard("Smooth", "Neted", "");
    setParentAndChild(DescriptiveAdjective, Smooth);

    let Rough = new DataCard("Rough", "Brut", "");
    setParentAndChild(DescriptiveAdjective, Rough);

    let sure = new DataCard(
        "Sure", "Sigur",
        "")
    setParentAndChild(DescriptiveAdjective, sure);

    let Loose = new DataCard("Loose", "Larg", "");
    setParentAndChild(DescriptiveAdjective, Loose);

    let Tight = new DataCard("Tight", "Strâmt", "");
    setParentAndChild(DescriptiveAdjective, Tight);

    // #flavours
    let flavours = new DataCard("Flavours", "Arome", "");  
    setParentAndChild(wordclass_adjectives, flavours);  

    let sweet = new DataCard("Sweet", "Dulce", "");  
    setParentAndChild(flavours, sweet);  
    
    let sour = new DataCard("Sour", "Acru", "");  
    setParentAndChild(flavours, sour);  
    
    let salty = new DataCard("Salty", "Sărat", "");  
    setParentAndChild(flavours, salty);  
    
    let spicy = new DataCard("Spicy", "Picant", "");  
    setParentAndChild(flavours, spicy);  
    
    let bitter = new DataCard("Bitter", "Amar", "");  
    setParentAndChild(flavours, bitter);  
    
    let delicious = new DataCard("Delicious", "Delicios", "");  
    setParentAndChild(flavours, delicious);  
     
    let Fragrant = new DataCard("Fragrant", "Aromat", "");
    setParentAndChild(flavours, Fragrant);

    // #AboutPeople =======================================
    let aboutPeople = new DataCard("About People", "Despre oameni", "");  
    setParentAndChild(wordclass_adjectives, aboutPeople);  
    
    let hungry = new DataCard("Hungry", "Înfometat", "");  
    setParentAndChild(aboutPeople, hungry);  

    let allergic = new DataCard("Allergic", "Alergic", "");  
    setParentAndChild(aboutPeople, allergic);  

    let strict = new DataCard("Strict", "Strict", "");  
    setParentAndChild(aboutPeople, strict);  

    let sad = new DataCard("Sad", "Trist", "");  
    setParentAndChild(aboutPeople, sad);  

    let amusing = new DataCard("Amusing (funny)", "Amuzant", "");  
    setParentAndChild(aboutPeople, amusing);  

    let boring = new DataCard("Boring", "Plictisitor", "");  
    setParentAndChild(aboutPeople, boring);  

    let interesting = new DataCard("Interesting", "Interesant", "");  
    setParentAndChild(aboutPeople, interesting);  

    let romantic = new DataCard("Romantic", "Romantic", "");  
    setParentAndChild(aboutPeople, romantic);  

    let dangerous = new DataCard("Dangerous", "Periculos", "");  
    setParentAndChild(aboutPeople, dangerous);  
    
    let strange = new DataCard("Strange", "Ciudat", "");  
    setParentAndChild(aboutPeople, strange);  

    let muscular = new DataCard("Muscular", "Musculos", "");  
    setParentAndChild(aboutPeople, muscular);  

    let crazy = new DataCard("Crazy", "Nebun", "");  
    setParentAndChild(aboutPeople, crazy);  

    let busy = new DataCard("Busy (occupied)", "Ocupat", "");  
    setParentAndChild(aboutPeople, busy);  

    let cool = new DataCard("Cool (today is cool)", "Răcore", "");  
    setParentAndChild(aboutPeople, cool);  

    let missing = new DataCard("Missing", "Dispărut", "");  
    setParentAndChild(aboutPeople, missing);  

    let alone = new DataCard("Alone", "Singur", "");  
    setParentAndChild(aboutPeople, alone);  

    let Shy = new DataCard("Shy", "Rușinos", "");
    setParentAndChild(aboutPeople, Shy);

    let Lucky = new DataCard("Lucky", "Norocos", "");
    setParentAndChild(aboutPeople, Lucky);

    let Handsome = new DataCard("Handsome", "Chipeș", "");
    setParentAndChild(aboutPeople, Handsome);

    let Thirsty = new DataCard("Thirsty", "Însetat", "");
    setParentAndChild(aboutPeople, Thirsty);

    let Sick = new DataCard("Sick", "Bolnav", "");
    setParentAndChild(aboutPeople, Sick);

    let Sunny = new DataCard("Sunny", "Însorit", "");
    setParentAndChild(aboutPeople, Sunny);

    let Smart = new DataCard("Smart", "Inteligent", "");
    setParentAndChild(aboutPeople, Smart);

    let Muscular = new DataCard("Muscular", "Musculos", "");
    setParentAndChild(aboutPeople, Muscular);

    let Curly = new DataCard("Curly", "Creț", "");
    setParentAndChild(aboutPeople, Curly);

    let Foreign = new DataCard("Foreign", "Străine", "");
    setParentAndChild(aboutPeople, Foreign);


    // #Colours =======================================
    let colours = new DataCard("Colours", "Culorile","")
        
    let black = new DataCard("Black", "Negru", "")
    let blonde = new DataCard("Blonde", "Blond", "");  
    let blue = new DataCard("Blue", "Albastru", "")
    let bright = new DataCard("Bright", "Strălucitor", "");  
    let brown = new DataCard("Brown", "Maro", "")
    let dark = new DataCard("Dark", "Întunecos", "");
    let gold = new DataCard("Gold", "Aur", "");  
    let green = new DataCard("Green", "Verde", "")
    let grey = new DataCard("Grey", "Gri", "")
    let hazel = new DataCard("Hazel", "Căprui", "");
    let light = new DataCard("Light", "Luminos", "");
    let orange = new DataCard("Orange", "Portocaliu", "")
    let purple = new DataCard("Purple", "Mov", "")
    let red = new DataCard("Red", "Roșu", "")
    let white = new DataCard("White", "Alb", "")
    let yellow = new DataCard("Yellow", "Galben", "")

    setParentAndMultipleChildren(
        colours, [
            black, blonde, blue, bright, brown, dark, gold, green, grey, 
            hazel, light, orange, purple, red, white, yellow, 
        ]
    )


    // =============================================================================
    // #Nouns
    // =============================================================================

    //#thecircus
    let TheCircus = new DataCard("The Circus", "Circul", "");
    setParentAndChild(wordclass_nouns, TheCircus)

    let Unicyclist = new DataCard("Unicyclist", "Acrobat pe Bicicletă", "");
    setParentAndChild(TheCircus, Unicyclist)

    let Trapeze = new DataCard("Trapeze", "Trapez", "");
    setParentAndChild(TheCircus, Trapeze)

    let TightropeWalked = new DataCard("Tightrope Walked", "Echilibrist", "");
    setParentAndChild(TheCircus, TightropeWalked)

    let Pole = new DataCard("Pole", "Prăjină", "");
    setParentAndChild(TheCircus, Pole)

    let RopeLadder = new DataCard("Rope Ladder", "Scară de Frânghie", "");
    setParentAndChild(TheCircus, RopeLadder)

    let Acrobats = new DataCard("Acrobats", "Acrobați", "");
    setParentAndChild(TheCircus, Acrobats)

    let Juggler = new DataCard("Juggler", "Jongler", "");
    setParentAndChild(TheCircus, Juggler)

    let Ringmaster = new DataCard("Ringmaster", "Maestru de Manej", "");
    setParentAndChild(TheCircus, Ringmaster)

    let TopHat = new DataCard("TopHat", "Joben", "");
    setParentAndChild(TheCircus, TopHat)

    let BowTieClown = new DataCard("Bowtie (Clown)", "Papion de Clovn", "");
    setParentAndChild(TheCircus, BowTieClown)

    let Clown = new DataCard("Clown", "Clovn", "");
    setParentAndChild(TheCircus, Clown)

    let Band = new DataCard("Band", "Orchestră", "");
    setParentAndChild(TheCircus, Band)

    let TheFairground = new DataCard("The Fairground", "Parcul de Distractții", "");
    setParentAndChild(TheCircus, TheFairground)

    let BigWheel = new DataCard("Big Wheel", "Roată Panoramică", "");
    setParentAndChild(TheCircus, BigWheel)

    let Carousel = new DataCard("Carousel", "Carusel", "");
    setParentAndChild(TheCircus, Carousel)

    let CandyFloss = new DataCard("Candy Floss", "Vată pe Băț", "");
    setParentAndChild(TheCircus, CandyFloss)

    let Popcorn = new DataCard("Popcorn", "Pop-corn (Floricele de Porumb)", "");
    setParentAndChild(TheCircus, Popcorn)

    let RollerCoaster = new DataCard("Roller Coaster", "Montagnes Russes", "");
    setParentAndChild(TheCircus, RollerCoaster)

    let GhostTrain = new DataCard("Ghost Train", "Tren Fantomă", "");
    setParentAndChild(TheCircus, GhostTrain)

    let HelterSkelter = new DataCard("Helter Skelter", "Tobogan Uriaș (Spirală)", "");
    setParentAndChild(TheCircus, HelterSkelter)

    let Dodgems = new DataCard("Dodgems (Bumper Cars)", "Mașinuțe Bușitoare", "");
    setParentAndChild(TheCircus, Dodgems)


    //#sports
    let Sports = new DataCard("Sports", "Sporturile", "");
    setParentAndChild(wordclass_nouns, Sports)

    let Ball = new DataCard("Ball", "Minge", "");
    setParentAndChild(Sports, Ball)

    let Basketball = new DataCard("Basketball", "Baschet", "");
    setParentAndChild(Sports, Basketball)

    let Rowing = new DataCard("Rowing", "Canotaj", "");
    setParentAndChild(Sports, Rowing)

    let Sail = new DataCard("Sail", "Velă", "");
    setParentAndChild(Sports, Sail)

    let Snowboarding = new DataCard("Snowboarding", "Snowboarding", "");
    setParentAndChild(Sports, Snowboarding)

    let Sailing = new DataCard("Sailing", "Navigație de Agrement", "");
    setParentAndChild(Sports, Sailing)

    let Windsurfing = new DataCard("Windsurfing", "Windsurfing", "");
    setParentAndChild(Sports, Windsurfing)

    let Tennis = new DataCard("Tennis", "Tenis", "");
    setParentAndChild(Sports, Tennis)

    let FishingRod = new DataCard("Fishing Rod", "Undiță de Pescuit", "");
    setParentAndChild(Sports, FishingRod)

    let Fishing = new DataCard("Fishing", "Pescuit", "");
    setParentAndChild(Sports, Fishing)

    let AmericanFootball = new DataCard("American Football", "Fotbal American", "");
    setParentAndChild(Sports, AmericanFootball)

    let Gymnastics = new DataCard("Gymnastics", "Gimnastică", "");
    setParentAndChild(Sports, Gymnastics)

    let Cricket = new DataCard("Cricket", "Crichet", "");
    setParentAndChild(Sports, Cricket)

    let Karate = new DataCard("Karate", "Karate", "");
    setParentAndChild(Sports, Karate)

    let BaseballBat = new DataCard("Baseball Bat", "Bâtă de Baseball", "");
    setParentAndChild(Sports, BaseballBat)

    let Dance = new DataCard("Dance", "Dans", "");
    setParentAndChild(Sports, Dance)

    let Baseball = new DataCard("Baseball", "Baseball", "");
    setParentAndChild(Sports, Baseball)

    let Bait = new DataCard("Bait", "Momeală", "");
    setParentAndChild(Sports, Bait)

    let Diving = new DataCard("Diving", "Săritură în apă", "");
    setParentAndChild(Sports, Diving)

    let SwimmingPool = new DataCard("Swimming Pool", "Piscină", "");
    setParentAndChild(Sports, SwimmingPool)

    let Rugby = new DataCard("Rugby", "Rugby", "");
    setParentAndChild(Sports, Rugby)

    let Swimming = new DataCard("Swimming", "Înot (Natație)", "");
    setParentAndChild(Sports, Swimming)

    let Race = new DataCard("Race", "Cursă (Întrecere)", "");
    setParentAndChild(Sports, Race)

    let Archery = new DataCard("Archery", "Tir cu Arcul", "");
    setParentAndChild(Sports, Archery)

    let Target = new DataCard("Target", "Țintă", "");
    setParentAndChild(Sports, Target)

    let HandGliding = new DataCard("Hand Gliding", "Zbor cu Deltaplanul", "");
    setParentAndChild(Sports, HandGliding)

    let Helmet = new DataCard("Helmet", "Cască", "");
    setParentAndChild(Sports, Helmet)

    let Jogging = new DataCard("Jogging", "Jogging (Alergare)", "");
    setParentAndChild(Sports, Jogging)

    let Judo = new DataCard("Judo", "Judo", "");
    setParentAndChild(Sports, Judo)

    let Football = new DataCard("Football", "Fotbal", "");
    setParentAndChild(Sports, Football)

    let Badminton = new DataCard("Badminton", "Badminton", "");
    setParentAndChild(Sports, Badminton)

    let TableTennis = new DataCard("Table Tennis", "Tenis de Masă (Ping Pong)", "");
    setParentAndChild(Sports, TableTennis)

    let HorseRiding = new DataCard("Horse Riding", "Echitație", "");
    setParentAndChild(Sports, HorseRiding)

    let Climbing = new DataCard("Climbing", "Escaladare Cățărare", "");
    setParentAndChild(Sports, Climbing)

    let Locker = new DataCard("Locker", "Casetă (de dulap)", "");
    setParentAndChild(Sports, Locker)

    let ChangingRoom = new DataCard("Changing Room", "Vestiar", "");
    setParentAndChild(Sports, ChangingRoom)

    let IceSkates = new DataCard("Ice Skates", "Patine", "");
    setParentAndChild(Sports, IceSkates)

    let IceSkating = new DataCard("Ice Skating", "Patinaj", "");
    setParentAndChild(Sports, IceSkating)

    let SumoWrestling = new DataCard("Sumo Wrestling", "Sumo", "");
    setParentAndChild(Sports, SumoWrestling)

    let Ski = new DataCard("Ski", "Schiuri", "");
    setParentAndChild(Sports, Ski)

    let Skiing = new DataCard("Skiing", "Schi", "");
    setParentAndChild(Sports, Skiing)

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

    let Month = new DataCard("Month", "Lună", "");
    setParentAndChild(Time, Month)

    let january = new DataCard("January", "Ianuarie", "");  
    setParentAndChild(TheMonths, january);  

    let february = new DataCard("February", "Februarie", "");  
    setParentAndChild(TheMonths, february);  

    let march = new DataCard("March", "Martie", "");  
    setParentAndChild(TheMonths, march);  

    let april = new DataCard("April", "Aprilie", "");  
    setParentAndChild(TheMonths, april);  

    let may = new DataCard("May", "Mai", "");  
    setParentAndChild(TheMonths, may);  

    let june = new DataCard("June", "Iunie", "");  
    setParentAndChild(TheMonths, june);  

    let july = new DataCard("July", "Iulie", "");  
    setParentAndChild(TheMonths, july);  

    let august = new DataCard("August", "August", "");  
    setParentAndChild(TheMonths, august);  

    let september = new DataCard("September", "Septembrie", "");  
    setParentAndChild(TheMonths, september);  

    let october = new DataCard("October", "Octombrie", "");  
    setParentAndChild(TheMonths, october);  

    let november = new DataCard("November", "Noiembrie", "");  
    setParentAndChild(TheMonths, november);  

    let december = new DataCard("December", "Decembrie", "");  
    setParentAndChild(TheMonths, december);  


    // #seasons
    let Seasons = new DataCard("Seasons", "Anotimpurile", "");
    setParentAndChild(Time, Seasons)

    let Spring = new DataCard("Spring", "Primăletă", "");
    setParentAndChild(Seasons, Spring)

    let Autumn = new DataCard("Autumn", "Toamnă", "");
    setParentAndChild(Seasons, Autumn)

    let Summer = new DataCard("Summer", "letă", "");
    setParentAndChild(Seasons, Summer)

    let Winter = new DataCard("Winter", "Iarnă", "");
    setParentAndChild(Seasons, Winter)

    // #weather
    let Weather = new DataCard("The Weather", "Vremea", "");
    setParentAndChild(Time, Weather)

    let Rain = new DataCard("Rain", "Ploaie", "");
    setParentAndChild(Weather, Rain)

    let Wind = new DataCard("Wind", "Vânt", "");
    setParentAndChild(Weather, Wind)

    let Lighting = new DataCard("Lighting", "Fulger", "");
    setParentAndChild(Weather, Lighting)

    let Mist = new DataCard("Mist", "Pâclă", "");
    setParentAndChild(Weather, Mist)

    let Fog = new DataCard("Fog", "Ceață", "");
    setParentAndChild(Weather, Fog)

    let Snow = new DataCard("Snow", "Zăpadă", "");
    setParentAndChild(Weather, Snow)

    let Frost = new DataCard("Frost", "Chiciură (Ger)", "");
    setParentAndChild(Weather, Frost)

    let Clouds = new DataCard("Clouds", "Nori", "");
    setParentAndChild(Weather, Clouds)

    let Sky = new DataCard("Sky", "Cer", "");
    setParentAndChild(Weather, Sky)

    let Dew = new DataCard("Dew", "Rouă", "");
    setParentAndChild(Weather, Dew)

    let Rainbow = new DataCard("Rainbow", "Curcubeu", "");
    setParentAndChild(Weather, Rainbow)

    let Flood = new DataCard("Flood", "Inundație", ""); 
    setParentAndChild(Weather, Flood);

    let Hurricane = new DataCard("Hurricane", "Uragan", ""); 
    setParentAndChild(Weather, Hurricane);

    let MudSlide = new DataCard("Mud Slide", "Alunecare de teren", ""); 
    setParentAndChild(Weather, MudSlide);

    let Earthquake = new DataCard("Earthquake", "Cutremur", ""); 
    setParentAndChild(Weather, Earthquake);

    let SnowFall = new DataCard("Snowfall", "Ninsoarea", ""); 
    setParentAndChild(Weather, SnowFall);

    let SnowStorm = new DataCard("Snow Storm", "Viscol", ""); 
    setParentAndChild(Weather, SnowStorm);

    let Typhoon = new DataCard("Typhoon", "Taifun", ""); 
    setParentAndChild(Weather, Typhoon);

    let ForestFire = new DataCard("Forest Fire", "Incendiu de pădure", ""); 
    setParentAndChild(Weather, ForestFire);

    // #specialdays #holidays
    let SpecialDays = new DataCard("Special Days", "Zile de Sărbătoare", "");
    setParentAndChild(Time, SpecialDays)
 
    let Birthday = new DataCard("Birthday", "Zi de Naștere", "");
    setParentAndChild(SpecialDays, Birthday)

    let BirthdayCard = new DataCard("Birthday Card", "Felicitare", "");
    setParentAndChild(SpecialDays, BirthdayCard)
    
    let romanticDate = new DataCard("Date (romantic date)", "Întâlnire", "");  
    setParentAndChild(SpecialDays, romanticDate);  

    let valentinesDay = new DataCard("Valentine's Day", "Ziua Îndrăgostiților", "");  
    setParentAndChild(SpecialDays, valentinesDay);  

    let weddingRing = new DataCard("Wedding ring", "Verighetă", "");  
    setParentAndChild(SpecialDays, weddingRing);  

    let weddingCake = new DataCard("Wedding cake", "Tort de nuntă", "");  
    setParentAndChild(SpecialDays, weddingCake);  

    let anniversary = new DataCard("Anniversary", "Aniversare", "");  
    setParentAndChild(SpecialDays, anniversary);  

    let birthday = new DataCard("Birthday", "Zi de naștere", "");  
    setParentAndChild(SpecialDays, birthday);  

    let date = new DataCard("Date", "Data", "");  
    setParentAndChild(SpecialDays, date);  

    let angel = new DataCard("Angel", "Înger", "");  
    setParentAndChild(SpecialDays, angel);  

    let bouquetOfFlowers = new DataCard("Bouquet of flowers", "Buchet de flori", "");  
    setParentAndChild(SpecialDays, bouquetOfFlowers);  

    let Holiday = new DataCard("Holiday", "Vacanță", "");
    setParentAndChild(SpecialDays, Holiday)

    let WeddingDay = new DataCard("Wedding Day", "Ziua Nunții", "");
    setParentAndChild(SpecialDays, WeddingDay)

    let Guests = new DataCard("Guests", "Invitați", "");
    setParentAndChild(WeddingDay, Guests)

    let Bridesmaid = new DataCard("Bridesmaid", "Domnișoară de Onoare", "");
    setParentAndChild(WeddingDay, Bridesmaid)

    let Bride = new DataCard("Bride", "Mireasă", "");
    setParentAndChild(WeddingDay, Bride)

    let Bridegroom = new DataCard("Bridegroom (Groom)", "Mire", "");
    setParentAndChild(WeddingDay, Bridegroom)

    let ChristmasDay = new DataCard("Christmas Day", "Ziua de Crăciun", "");
    setParentAndChild(SpecialDays, ChristmasDay)

    let FatherChristmas = new DataCard("Father Christmas", "Moș Crăciun", "");
    setParentAndChild(ChristmasDay, FatherChristmas)

    let Sleigh = new DataCard("Sleigh", "Sanie", "");
    setParentAndChild(ChristmasDay, Sleigh)

    let ChristmasTree = new DataCard("Christmas Tree", "Brad de Crăciun", "");
    setParentAndChild(ChristmasDay, ChristmasTree)

    let Reindeer = new DataCard("Reindeer", "Ren", "");
    setParentAndChild(ChristmasDay, Reindeer)

    let Camera = new DataCard("Camera", "Aparat de Fotografiat", "");
    setParentAndChild(SpecialDays, Camera)

    //#days
    let DaysOfTheWeek = new DataCard("Days (Of The Week)", "Zilele (Săptămânii)", "");
    setParentAndChild(Time, DaysOfTheWeek)

    let Morning = new DataCard("Morning", "Dimineață", "");
    setParentAndChild(DaysOfTheWeek, Morning)

    let Sun = new DataCard("Sun", "Soare", "");
    setParentAndChild(DaysOfTheWeek, Sun)

    let Evening = new DataCard("Evening", "Seară", "");
    setParentAndChild(DaysOfTheWeek, Evening)

    let Night = new DataCard("Night", "Noapte", "");
    setParentAndChild(DaysOfTheWeek, Night)

    let Monday = new DataCard("Monday", "Luni", "");
    setParentAndChild(DaysOfTheWeek, Monday)

    let Tuesday = new DataCard("Tuesday", "Marți", "");
    setParentAndChild(DaysOfTheWeek, Tuesday)

    let Wednesday = new DataCard("Wednesday", "Miercuri", "");
    setParentAndChild(DaysOfTheWeek, Wednesday)

    let Thursday = new DataCard("Thursday", "Joi", "");
    setParentAndChild(DaysOfTheWeek, Thursday)

    let Friday = new DataCard("Friday", "Vineri", "");
    setParentAndChild(DaysOfTheWeek, Friday)

    let Saturday = new DataCard("Saturday", "Sâmbătă", "");
    setParentAndChild(DaysOfTheWeek, Saturday)

    let Sunday = new DataCard("Sunday", "Duminică", "");
    setParentAndChild(DaysOfTheWeek, Sunday)

    let Calendar = new DataCard("Calendar", "Calendar", "");
    setParentAndChild(DaysOfTheWeek, Calendar)

    // #Measurements
    let Measurements = new DataCard("Measurements", "Măsurători", ""); 
    setParentAndChild(wordclass_nouns, Measurements);
    
    let Size = new DataCard("Size", "Mărime", ""); 
    setParentAndChild(Measurements, Size);

    let Meter = new DataCard("Meter", "Metru", ""); 
    setParentAndChild(Measurements, Meter);

    let diameter = new DataCard("Diameter", "Diametru", "");  
    setParentAndChild(Measurements, diameter);  

    let Centimeter = new DataCard("Centimeter", "Centimetru", ""); 
    setParentAndChild(Measurements, Centimeter);

    let Kilometer = new DataCard("Kilometer", "Kilometru", ""); 
    setParentAndChild(Measurements, Kilometer);

    let Gram = new DataCard("Gram", "Gram", ""); 
    setParentAndChild(Measurements, Gram);

    let size = new DataCard("Size", "Mărime", "");  
    setParentAndChild(Measurements, size); 

    let Kilogram = new DataCard("Kilogram", "Kilogram", ""); 
    setParentAndChild(Measurements, Kilogram);

    let Liter = new DataCard("Liter", "Litrul", ""); 
    setParentAndChild(Measurements, Liter);

    let Milliliter = new DataCard("Milliliter", "Mililitru", ""); 
    setParentAndChild(Measurements, Milliliter);

    let Celsius = new DataCard("Celsius", "Celsius", ""); 
    setParentAndChild(Measurements, Celsius);

    let Fahrenheit = new DataCard("Fahrenheit", "Fahrenheit", ""); 
    setParentAndChild(Measurements, Fahrenheit);

    let Second = new DataCard("Second", "Secundă", ""); 
    setParentAndChild(Measurements, Second);

    let Minute = new DataCard("Minute", "Minut", ""); 
    setParentAndChild(Measurements, Minute);

    let Hour = new DataCard("Hour", "Oră", ""); 
    setParentAndChild(Measurements, Hour);

    let Kilowatt = new DataCard("Kilowatt", "Kilowatt", ""); 
    setParentAndChild(Measurements, Kilowatt);

    let Watt = new DataCard("Watt", "Watt", ""); 
    setParentAndChild(Measurements, Watt);

    let Pound = new DataCard("Pound", "Libră", ""); 
    setParentAndChild(Measurements, Pound);

    let Ounce = new DataCard("Ounce", "Uncie", ""); 
    setParentAndChild(Measurements, Ounce);

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

    let Planet = new DataCard("Planet", "Planetă", "");
    setParentAndChild(Space, Planet)

    let Star = new DataCard("Star", "Stea", "");
    setParentAndChild(Space, Star)

    let Telescope = new DataCard("Telescope", "Telescop", "");
    setParentAndChild(Space, Telescope)

    let Orbit = new DataCard("Orbit", "Orbită", ""); 
    setParentAndChild(Space, Orbit);

    let Galaxy = new DataCard("Galaxy", "Galaxie", ""); 
    setParentAndChild(Space, Galaxy);

    let Universe = new DataCard("Universe", "Univers", ""); 
    setParentAndChild(Space, Universe);

    let Satellite = new DataCard("Satellite", "Satelit", ""); 
    setParentAndChild(Space, Satellite);

    let Spaceship = new DataCard("Spaceship", "Navă spațială", ""); 
    setParentAndChild(Space, Spaceship);

    let SolarSystem = new DataCard("Solar System", "Sistem solar", ""); 
    setParentAndChild(Space, SolarSystem);

    let SolarEclipse = new DataCard("Solar Eclipse", "Eclipsă de soare", ""); 
    setParentAndChild(Space, SolarEclipse);

    let FullMoon = new DataCard("Full Moon", "Lună plină", ""); 
    setParentAndChild(Space, FullMoon);

    let Atmosphere = new DataCard("Atmosphere", "Atmosferă", ""); 
    setParentAndChild(Space, Atmosphere);

    let LunarEclipse = new DataCard("Lunar Eclipse", "Eclipsă de lună", ""); 
    setParentAndChild(Space, LunarEclipse);

    let Astronaut = new DataCard("Astronaut", "Astronaut", ""); 
    setParentAndChild(Space, Astronaut);

    let Rocket = new DataCard("Rocket", "Rachetă", ""); 
    setParentAndChild(Space, Rocket);

    let Meteor = new DataCard("Meteor", "Meteor", ""); 
    setParentAndChild(Space, Meteor);

    let Moon = new DataCard("Moon", "Lună", ""); 
    setParentAndChild(Space, Moon);

    let Extraterrestrial = new DataCard("Extraterrestrial", "Extraterestru", ""); 
    setParentAndChild(Space, Extraterrestrial);


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

    let bath = new NounFemale("Bath", "Baie", "baie", "bai", "baia", "băile")
    setParentAndChild(home, bath)

    let soap = new NounNeuter("Soap", "Săpun", "săpun", "săpunuri", "sapunul", "săpunurile")
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

    let doll = new DataCard("Doll", "Păpușă", "");  
    setParentAndChild(atHome, doll); 
    
    let story = new DataCard("Story", "Poveste", "");  
    setParentAndChild(atHome, story);  

    let Comic = new DataCard("Comic", "Revistă de Benzi Desenate", "");
    setParentAndChild(Toys, Comic)

    let Jigsaw = new DataCard("Jigsaw Puzzle", "Puzzle", "");
    setParentAndChild(Toys, Jigsaw)

    let TrainSet = new DataCard("Train Set", "Trenuleț Electric", "");
    setParentAndChild(Toys, TrainSet)

    let Dice = new DataCard("Dice", "Zaruri", "");
    setParentAndChild(Toys, Dice)

    let Robot = new DataCard("Robot", "Robot", "");
    setParentAndChild(Toys, Robot)

    let Necklace = new DataCard("Necklace", "Colier (Mărgele)", "");
    setParentAndChild(Toys, Necklace)

    let Beads = new DataCard("Beads", "Mărgele, (Perle)", "");
    setParentAndChild(Toys, Beads)

    let Dolls = new DataCard("Dolls", "Păpuși", "");
    setParentAndChild(Toys, Dolls)

    let Guitar = new DataCard("Guitar", "Chitară", "");
    setParentAndChild(Toys, Guitar)

    let RingAcc = new DataCard("Ring (Accessory)", "Inel", "");
    setParentAndChild(Toys, RingAcc)

    let Whistel = new DataCard("Whistel", "Fluier", "");
    setParentAndChild(Toys, Whistel)

    let Cubes = new DataCard("Cubes", "Cuburi", "");
    setParentAndChild(Toys, Cubes)

    let Castle = new DataCard("Castle", "Castel (Cetate)", "");
    setParentAndChild(Toys, Castle)

    let Submarine = new DataCard("Submarine", "Submarin", "");
    setParentAndChild(Toys, Submarine)

    let Trumpet = new DataCard("Trumpet", "Trompetă", "");
    setParentAndChild(Toys, Trumpet)

    let Arrows = new DataCard("Arrows", "Săgeți", "");
    setParentAndChild(Toys, Arrows)

    let Harmonica = new DataCard("Harmonica", "Muzicuță", "");
    setParentAndChild(Toys, Harmonica)

    let Crane = new DataCard("Crane", "macara", "");
    setParentAndChild(Toys, Crane)

    let PlayingCards = new DataCard("Playing Cards", "Cărți de joc", "");
    setParentAndChild(Toys, PlayingCards)

    let Drums = new DataCard("Drums", "Tobe", "");
    setParentAndChild(Toys, Drums)

    let Soldiers = new DataCard("Soldiers", "Soldăței de plumb", "");
    setParentAndChild(Toys, Soldiers)

    let Paints = new DataCard("Paints", "Acuarele", "");
    setParentAndChild(Toys, Paints)

    let Puppets = new DataCard("Puppets", "Marionete", "");
    setParentAndChild(Toys, Puppets)

    let Marbles = new DataCard("Marbles", "Bile", "");
    setParentAndChild(Toys, Marbles)

    let Masks = new DataCard("Masks", "Măști", "");
    setParentAndChild(Toys, Masks)

    let Piano = new DataCard("Piano", "Pian", "");
    setParentAndChild(Toys, Piano)

    let Boat = new DataCard("Boat", "Barcă", "");
    setParentAndChild(Toys, Boat)

    let Parachute = new DataCard("Parachute", "Parașută", "");
    setParentAndChild(Toys, Parachute)

    let Bow = new DataCard("Bow (arrow)", "Arc", "");
    setParentAndChild(Toys, Bow)

    // #people ================================
    let people = new DataCard("People", "Oamenii", "")
    setParentAndChild(wordclass_nouns, people)

    let men = new NounMale("Man", "Barbat", "bărbat", "bărbați", "bărbatul", "bărbații")
    setParentAndChild(people, men)

    let woman = new NounFemale("Woman", "Femeie", "femeie", "femei", "femeia", "femeile")
    setParentAndChild(people, woman)

    let Child = new NounMale("Child", "Copil", "copil", "copi", "copilul", "copii");
    setParentAndChild(people, Child)

    let Baby = new DataCard("Baby", "Bebeluș", "");
    setParentAndChild(people, Baby)

    let Boy = new DataCard("Boy", "Băiat", "");
    setParentAndChild(people, Boy)

    let Girl = new DataCard("Girl", "Fată", "");
    setParentAndChild(people, Girl)

    // #clothes
    let Clothes = new DataCard("Clothes", "Hainele", "");
    setParentAndChild(people, Clothes)

    let DressingGown = new DataCard("Dressing Gown", "Halat", "");
    setParentAndChild(Clothes, DressingGown)

    let Watch = new DataCard("Watch", "Ceas de Mână", "");
    setParentAndChild(Clothes, Watch)

    let Nightdress = new DataCard("Nightdress", "Cămșă de Noapte", "");
    setParentAndChild(Clothes, Nightdress)

    let Pyjamas = new DataCard("Pyjamas", "Pijama", "");
    setParentAndChild(Clothes, Pyjamas)

    let Nappy = new DataCard("Nappy", "Pampers", "");
    setParentAndChild(Clothes, Nappy)

    let Slippers = new DataCard("Slippers", "Papuci", "");
    setParentAndChild(Clothes, Slippers)

    let SwimmingCostume = new DataCard("Swimming Costume", "Costum de Baie", "");
    setParentAndChild(Clothes, SwimmingCostume)

    let Sunhat = new DataCard("Sunhat", "Pălărie de Soare", "");
    setParentAndChild(Clothes, Sunhat)

    let Flippers = new DataCard("Flippers", "Labe de Scafandru", "");
    setParentAndChild(Clothes, Flippers)

    let Socks = new DataCard("Socks", "Şosete", "");
    setParentAndChild(Clothes, Socks)

    let Pants = new DataCard("Pants", "Chiloți", "");
    setParentAndChild(Clothes, Pants)

    let Vest = new DataCard("Vest", "Maiou", "");
    setParentAndChild(Clothes, Vest)

    let Trousers = new DataCard("Trousers", "Pantaloni", "");
    setParentAndChild(Clothes, Trousers)

    let Jeans = new DataCard("Jeans", "Blugi", "");
    setParentAndChild(Clothes, Jeans)

    let tShirt = new DataCard("T-Shirt", "Tricou (T-shirt)", "");
    setParentAndChild(Clothes, tShirt)

    let Skirt = new DataCard("Skirt", "Fustă", "");
    setParentAndChild(Clothes, Skirt)

    let Shirt = new DataCard("Shirt", "Cămașă", "");
    setParentAndChild(Clothes, Shirt)

    let Tie = new DataCard("Tie", "Cravată", "");
    setParentAndChild(Clothes, Tie)

    let Shorts = new DataCard("Shorts", "Pantaloni Scurți (șort)", "");
    setParentAndChild(Clothes, Shorts)

    let Tights = new DataCard("Tights", "Dres", "");
    setParentAndChild(Clothes, Tights)

    let Dress = new DataCard("Dress", "Rochie", "");
    setParentAndChild(Clothes, Dress)

    let Jumper = new DataCard("Jumper", "Pulover", "");
    setParentAndChild(Clothes, Jumper)

    let Sweatshirt = new DataCard("Sweatshirt", "Tricou de Sport", "Bluză Sport cu mânecă lungă");
    setParentAndChild(Clothes, Sweatshirt)

    let Cardigan = new DataCard("Cardigan", "Jachetă (Pulover cu nasturi)", "");
    setParentAndChild(Clothes, Cardigan)

    let Scarf = new DataCard("Scarf", "Fular", "");
    setParentAndChild(Clothes, Scarf)

    let Handkerchief = new DataCard("Handkerchief", "Batistă", "");
    setParentAndChild(Clothes, Handkerchief)

    let Trainers = new DataCard("Trainers", "Pantofi sport (Adidași)", "");
    setParentAndChild(Clothes, Trainers)

    let Sandals = new DataCard("Sandals", "Sandale", "");
    setParentAndChild(Clothes, Sandals)

    let Boots = new DataCard("Boots", "Cizme", "");
    setParentAndChild(Clothes, Boots)

    let Gloves = new DataCard("Gloves", "Mănuși", "");
    setParentAndChild(Clothes, Gloves)

    let Belt = new DataCard("Belt", "Curea", "");
    setParentAndChild(Clothes, Belt)

    let Buckle = new DataCard("Buckle", "Cataramă", "");
    setParentAndChild(Clothes, Buckle)

    let Zip = new DataCard("Zip", "Fermoar", "");
    setParentAndChild(Clothes, Zip)

    let Shoelace = new DataCard("Shoelace", "Şiret", "");
    setParentAndChild(Clothes, Shoelace)

    let Buttons = new DataCard("Buttons", "Nasturi", "");
    setParentAndChild(Clothes, Buttons)

    let ButtonHoles = new DataCard("Button Holes", "Butoniere", "");
    setParentAndChild(Clothes, ButtonHoles)

    let Pockets = new DataCard("Pockets", "Buzunare", "");
    setParentAndChild(Clothes, Pockets)

    let Coat = new DataCard("Coat", "Palton (Haină)", "");
    setParentAndChild(Clothes, Coat)

    let Jacket = new DataCard("Jacket", "Jachetă", "");
    setParentAndChild(Clothes, Jacket)

    let BaseballCap = new DataCard("Cap (Baseball)", "Şapcă", "");
    setParentAndChild(Clothes, BaseballCap)

    let Hat = new DataCard("Hat", "Pălărie", "");
    setParentAndChild(Clothes, Hat)

    let PlasticBag = new DataCard("Plastic bag", "Punga", "");
    setParentAndChild(Clothes, PlasticBag)

    let Lace = new DataCard("Lace", "Șiret", ""); 
    setParentAndChild(Clothes, Lace);

    let Sole = new DataCard("Sole", "Talpă", ""); 
    setParentAndChild(Clothes, Sole);

    let Rubber = new DataCard("Rubber", "Cauciuc", ""); 
    setParentAndChild(Clothes, Rubber);

    let HighHeels = new DataCard("High Heels", "Tocuri Înalte", ""); 
    setParentAndChild(Clothes, HighHeels);

    let Shoes = new DataCard("Shoes", "Încălțăminte", ""); 
    setParentAndChild(Clothes, Shoes);

    let Pair = new DataCard("Pair/Pairs", "Pereche/Perechi", ""); 
    setParentAndChild(Clothes, Pair);

    let FlipFlops = new DataCard("Flip Flops", "Șlapi", ""); 
    setParentAndChild(Clothes, FlipFlops);

    let Leather = new DataCard("Leather", "Piele", ""); 
    setParentAndChild(Clothes, Leather);

    let Silk = new DataCard("Silk", "Mătase", ""); 
    setParentAndChild(Clothes, Silk);

    let Gem = new DataCard("Gem", "Piatră Prețioasă", ""); 
    setParentAndChild(Clothes, Gem);

    let Raincoat = new DataCard("Raincoat", "Pelerină de Ploaie", ""); 
    setParentAndChild(Clothes, Raincoat);

    let SmallJacket = new DataCard("Small Jacket", "Sacou", ""); 
    setParentAndChild(Clothes, SmallJacket);

    let Bracelet = new DataCard("Bracelet", "Brățară", ""); 
    setParentAndChild(Clothes, Bracelet);

    let Tag = new DataCard("Tag", "A Eticheta", ""); 
    setParentAndChild(Clothes, Tag);

    // #families
    let families = new DataCard(
        "Families", "Familiile",
        ""
    )
    setParentAndChild(people, families)

    let son = new DataCard("Son", "Fiu", "");
    setParentAndChild(families, son)

    let brother = new DataCard("Brother", "Frate", "");
    setParentAndChild(families, brother)

    let daughter = new DataCard("Daughter", "Fiică", "");
    setParentAndChild(families, daughter)

    let sister = new DataCard("Sister", "Soră", "");
    setParentAndChild(families, sister)

    let relatives = new DataCard("Relatives", "Rude", "");  
    setParentAndChild(families, relatives);  

    let mother = new DataCard("Mother", "Mamă", "");
    setParentAndChild(families, mother)

    let wife = new DataCard("Wife", "Soție", "");
    setParentAndChild(families, wife)

    let widow = new DataCard("Widow", "Văduvă", "");  
    setParentAndChild(families, widow);  

    let father = new DataCard("Father", "Tată", "");
    setParentAndChild(families, father)

    let husband = new DataCard("Husband", "Soț", "");
    setParentAndChild(families, husband)

    let aunt = new DataCard("Aunt", "Mătușă", "");
    setParentAndChild(families, aunt)

    let uncle = new DataCard("Uncle", "Unchi", "");
    setParentAndChild(families, uncle)

    let cousinM = new DataCard("Cousin (male)", "Văr", "");
    setParentAndChild(families, cousinM)

    let cousinF = new DataCard("Cousin (female)", "Verișor", "");
    setParentAndChild(families, cousinF)

    let grandfather = new DataCard("Grandfather", "Bunic", "");
    setParentAndChild(families, grandfather)

    let grandmother = new DataCard("Grandmother", "Bunică", "");
    setParentAndChild(families, grandmother)

    // #jobs
    let workJob = new DataCard(
        "Work (job)", "Mancă",
        ""
    )
    setParentAndChild(people, workJob)

    let guy = new DataCard("Guy", "Tip", "");  
    setParentAndChild(wordclass_nouns, guy);  

    let Teacher = new DataCard("Teacher", "Învătăoare (Profesoară)", "");
    setParentAndChild(workJob, Teacher)

    let Nurse = new DataCard("Nurse", "Infirmier", "");
    setParentAndChild(workJob, Nurse)

    let HealthCareAssistant = new DataCard("Health Care Assistant", "Asistent Medical", "");
    setParentAndChild(workJob, HealthCareAssistant)

    let Doctor = new DataCard("Doctor", "Doctor", "");
    setParentAndChild(workJob, Doctor)

    let WaterSkier = new DataCard("Water Skier", "Schior Nautic", "");
    setParentAndChild(workJob, WaterSkier)

    let Sailor = new DataCard("Sailor", "Marinar", "");
    setParentAndChild(workJob, Sailor)

    let Farmer = new DataCard("Farmer", "Fermier", "");
    setParentAndChild(workJob, Farmer)

    let policeOfficer = new DataCard("Police officer", "Ofițer de poliție", "");  
    setParentAndChild(workJob, policeOfficer);

    let TrainDriver = new DataCard("Train Driver", "Mecanic de Locomotivă", "");
    setParentAndChild(workJob, TrainDriver)

    let TicketInspector = new DataCard("Ticket Inspector", "Conductoare", "Controloare de bilete");
    setParentAndChild(workJob, TicketInspector)

    let Pilot = new DataCard("Pilot", "Pilot", "");
    setParentAndChild(workJob, Pilot)

    let CabinCrew = new DataCard("Cabin Crew", "Echipaj", "");
    setParentAndChild(workJob, CabinCrew)

    let Fisherman = new DataCard("Fisherman", "Pescar", "");
    setParentAndChild(workJob, Fisherman)

    let actor = new DataCard("Actor", "Actor", "");
    setParentAndChild(workJob, actor)

    let actress = new DataCard("Actress", "Actriță", "");
    setParentAndChild(workJob, actress)

    let butcher = new DataCard("Butcher", "Măcelar", "");
    setParentAndChild(workJob, butcher)

    let policeman = new DataCard("Policeman", "Polițist", "");
    setParentAndChild(workJob, policeman)

    let policewoman = new DataCard("Policewoman", "Polițistă", "");
    setParentAndChild(workJob, policewoman)

    let artist = new DataCard("Artist", "artist", "");
    setParentAndChild(workJob, artist)

    let chef = new DataCard("Chef", "Bucătar", "");
    setParentAndChild(workJob, chef)

    let singers = new DataCard("Singers", "Cântăreți", "");
    setParentAndChild(workJob, singers)

    let dancers = new DataCard("Dancers", "Dansatori", "");
    setParentAndChild(workJob, dancers)

    let astronaut = new DataCard("Astronaut", "Astronaut", "");
    setParentAndChild(workJob, astronaut)

    let Carpenter = new DataCard("Carpentar", "Tâmplar", "");
    setParentAndChild(workJob, Carpenter)

    let Firefighter = new DataCard("Firefighter", "Pompier", "");
    setParentAndChild(workJob, Firefighter)

    let Judge = new DataCard("Judge", "Judecător", "");
    setParentAndChild(workJob, Judge)

    let Mechanics = new DataCard("Mechanics", "Mechanici", "");
    setParentAndChild(workJob, Mechanics)

    let Hairdresser = new DataCard("Hairdresser", "Frizer", "");
    setParentAndChild(workJob, Hairdresser)

    let lorryDriver = new DataCard("Lorry driver", "Şofer de autobuz", "");
    setParentAndChild(workJob, lorryDriver)

    let waiter = new DataCard("Waiter", "Chelner", "");
    setParentAndChild(workJob, waiter)

    let Waitress = new DataCard("Waitress", "Chelnerița", "");
    setParentAndChild(workJob, Waitress)

    let Postman = new DataCard("Postman", "Poștaș", "");
    setParentAndChild(workJob, Postman)

    let painter = new DataCard("Painter (decorator)", "Zugrav", "");
    setParentAndChild(workJob, painter)

    let diver = new DataCard("Diver", "Scanfandru", "");
    setParentAndChild(workJob, diver)

    let baker = new DataCard("Baker", "Brutăriță", "");
    setParentAndChild(workJob, baker)

    let Singer = new DataCard("Singer", "Cântăreț", "");
    setParentAndChild(workJob, Singer);

    let RoomMaid = new DataCard("Room Maid", "Cameristă", "");
    setParentAndChild(workJob, RoomMaid);

    let Apprenticeship = new DataCard("Apprenticeship", "Ucenicie", "");
    setParentAndChild(workJob, Apprenticeship);

    let OfficeWorker = new DataCard("Office Worker", "Funcționar", "");
    setParentAndChild(workJob, OfficeWorker);

    let BusinessMan = new DataCard("Business Man", "Om de afaceri", "");
    setParentAndChild(workJob, BusinessMan);


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

    let _for = new DataCard(
        "For", "Pentru",
        "")
    setParentAndChild(wordclass_conjunctions, _for);

    let because = new DataCard(
        "Because", "Pentru că",
        "")
    setParentAndChild(wordclass_conjunctions, because);

    let and = new DataCard(
        "And", "Şi",
        "")
    setParentAndChild(wordclass_conjunctions, and);

    let and2 = new DataCard(
        "And (alt)", "Iar",
        "")
    setParentAndChild(wordclass_conjunctions, and2);

    let _if = new DataCard(
        "If", "Daca",
        "")
    setParentAndChild(wordclass_conjunctions, _if);

    let _or = new DataCard(
        "Or", "Sau",
        "")
    setParentAndChild(wordclass_conjunctions, _or);

    let _or2 = new DataCard(
        "Or (alt)", "Ori",
        "")
    setParentAndChild(wordclass_conjunctions, _or2);

    let but = new DataCard(
        "But", "Dar",
        "")
    setParentAndChild(wordclass_conjunctions, but);

    let before = new DataCard(
        "Before", "Inainte de",
        "")
    setParentAndChild(wordclass_conjunctions, before);

    let Because = new DataCard("Because", "Deoarece", "");
    setParentAndChild(wordclass_conjunctions, Because);

    let Although = new DataCard("Although", "Deși", "");
    setParentAndChild(wordclass_conjunctions, Although);
    
    let Therefore = new DataCard("Therefore", "Deci", "");
    setParentAndChild(wordclass_conjunctions, Therefore);
    
    let EvenThough = new DataCard("Even Though", "Chiar dacă", "");
    setParentAndChild(wordclass_conjunctions, EvenThough);
    
    let So = new DataCard("So", "Așa că", "");
    setParentAndChild(wordclass_conjunctions, So);
    
    let AsWell = new DataCard("As Well", "De asemenea", "");
    setParentAndChild(wordclass_conjunctions, AsWell);
    
    let Like = new DataCard("Like (A is like B)", "Asemenea", "");
    setParentAndChild(wordclass_conjunctions, Like);

    let InCase = new DataCard("In case", "În caz că", "");
    setParentAndChild(wordclass_conjunctions, InCase);

    let still = new DataCard("Still", "Totuși", "");  
    setParentAndChild(wordclass_conjunctions, still);  

    let isntIt = new DataCard("Isn't it", "Nu-i așa", "");  
    setParentAndChild(wordclass_conjunctions, isntIt);  

    let okay = new DataCard("Okay", "Atunci", "");  
    setParentAndChild(wordclass_conjunctions, okay);  



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

    let emotions = new DataCard(
        "Emotions", "Emoții",
        "")
    setParentAndChild(romanian, emotions);

    let Happy = new DataCard(
        "Happy", "Fericit",
        "")
    setParentAndChild(emotions, Happy);

    let Sad = new DataCard(
        "Sad", "Trist",
        "")
    setParentAndChild(emotions, Sad);

    let Bored = new DataCard(
        "Bored", "Plictisit",
        "")
    setParentAndChild(emotions, Bored);

    let Cheerful = new DataCard(
        "Cheerful", "Vesel",
        "")
    setParentAndChild(emotions, Cheerful);

    let Timid = new DataCard(
        "Shy (Timid)", "Timid",
        "")
    setParentAndChild(emotions, Timid);

    let Angry = new DataCard(
        "Angry", "Nervos",
        "")
    setParentAndChild(emotions, Angry);

    let Tired = new DataCard(
        "Tired", "Obosit",
        "")
    setParentAndChild(emotions, Tired);

    let Worried = new DataCard(
        "Worried", "Îngrijorat",
        "")
    setParentAndChild(emotions, Worried);

    let Upset = new DataCard(
        "Upset", "Supărat",
        "")
    setParentAndChild(emotions, Upset);

    let Excited = new DataCard(
        "Excited", "Entuziasmat",
        "")
    setParentAndChild(emotions, Excited);

    let Jealous = new DataCard(
        "Jealous", "Gelos",
        "")
    setParentAndChild(emotions, Jealous);
    
    let Heartbroken = new DataCard("Heartbroken", "Fi cu inima frântă", "");
    setParentAndChild(emotions, Heartbroken);

    let Horror = new DataCard("Horror", "Groază", "");
    setParentAndChild(emotions, Horror);

    let Unfortunate = new DataCard("Unfortunate", "Ghinion", "");
    setParentAndChild(emotions, Unfortunate);

    let Crush = new DataCard("A crush (romantic)", "O pasiune", "");
    setParentAndChild(emotions, Crush);

    let Hope = new DataCard("Hope", "Sper", "");
    setParentAndChild(emotions, Hope);


    return romanian;
}




