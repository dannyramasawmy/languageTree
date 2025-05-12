import { defineCrossLinkRelationship, setParentAndChild, setParentAndMultipleChildren } from "../src/tree/functions.js";
import { DataCard, DataRoot } from "../src/tree/models.js";
import { VerbReflexiveSe, VerbReflexiveSi, Verb, NounNeuter, NounMale, NounFemale, Adjective, Conjunction, VerbModal, WordClass, Theme } from "./romanian-language-models.js";

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

    let to_achieve = new Verb("Achieve", "Realiza", "realizez", "realizezi", "realizează", "realizăm", "realizați", "realizează", "realizat"); 
    let to_add = new Verb("Add", "Adăuga", "adaug", "adaugi", "adaugă", "adăugăm", "adăugați", "adaugă", "adăugat"); 
    let to_admit = new Verb("Admit", "Recunoaște", "recunosc", "recunoști", "recunoaște", "recunoaștem", "recunoașteți", "recunosc", "recunoscut"); 
    let to_agree = new Verb("Agree", "Fi de acord", "sunt de acord", "ești de acord", "este de acord", "suntem de acord", "sunteți de acord", "sunt de acord", "fost de acord"); 
    let to_allow = new Verb("Allow", "Permite", "permit", "permiți", "permite", "permitem", "permiteți", "permit", "permis"); 
    let to_analyze = new Verb("Analyze", "Analiza", "analizez", "analizezi", "analizează", "analizăm", "analizați", "analizează", "analizat"); 
    let to_apologize = new Verb("Apologize", "Cere scuze", "cer scuze", "ceri scuze", "cere scuze", "cerem scuze", "cereți scuze", "cer scuze", "cerut scuze"); 
    let to_apply = new Verb("Apply", "Aplica", "aplic", "aplici", "aplică", "aplicăm", "aplicați", "aplică", "aplicat"); 
    let to_approve = new Verb("Approve", "Aproba", "aprob", "aprobi", "aprobă", "aprobăm", "aprobați", "aprobă", "aprobat"); 
    let to_argue = new VerbReflexiveSe("Argue", "Certa", "cert", "cerți", "certă", "certăm", "certați", "certă", "certat"); 
    let to_arrive = new Verb("Arrive", "Ajunge", "ajung", "ajungi", "ajunge", "ajungem", "ajungeți", "ajung", "ajuns"); 
    let to_ask = new Verb("Ask", "Întreba", "întreb", "întrebi", "întreabă", "întrebăm", "întrebați", "întreabă", "întrebat"); 
    let to_bake = new Verb("Bake", "Coace", "coc", "coci", "coace", "coacem", "coaceți", "coc", "copt"); 
    let to_be = new Verb("Be", "Fi", "sunt", "ești", "este", "suntem", "sunteți", "sunt", "fost"); 
    let to_beAvailable = new Verb("Be Available", "Fi disponibil", "sunt disponibil", "ești disponibil", "este disponibil", "suntem disponibili", "sunteți disponibili", "sunt disponibili", "fost disponibil"); 
    let to_become = new Verb("Become", "Deveni", "devin", "devii", "devine", "devenim", "deveniți", "devin", "devenit"); 
    let to_beDivorced = new Verb("Be Divorced", "Fi divorțat", "sunt divorțat", "ești divorțat", "este divorțat", "suntem divorțați", "sunteți divorțați", "sunt divorțați", "fost divorțat"); 
    let to_beEngaged = new Verb("Be Engaged", "Fi logodit", "sunt logodit", "ești logodit", "este logodit", "suntem logodiți", "sunteți logodiți", "sunt logodiți", "fost logodit"); 
    let to_beHonest = new Verb("Be Honest", "Fi cinstit", "sunt cinstit", "ești cinstit", "este cinstit", "suntem cinstiți", "sunteți cinstiți", "sunt cinstiți", "fost cinstit"); 
    let to_beSure = new Verb("Be Sure", "Fi sigur", "sunt sigur", "ești sigur", "este sigur", "suntem siguri", "sunteți siguri", "sunt siguri", "fost sigur"); 
    let to_blush = new Verb("Blush", "Roși", "roșesc", "roșești", "roșește", "roșim", "roșiți", "roșesc", "roșit"); 
    let to_boil = new Verb("Boil", "Fierbe", "fierb", "fierbi", "fierbe", "fierbem", "fierbeți", "fierb", "fiert"); 
    let to_breakIn = new Verb("Break Into", "Sparge", "sparg", "spargi", "sparge", "spargem", "spargeți", "sparg", "spart"); 
    let to_breakUp = new VerbReflexiveSe("Break Up", "Despărți", "despart", "desparți", "desparte", "despărțim", "despărțiți", "despart", "despărțit"); 
    let to_bring = new Verb("Bring", "Aduce", "aduc", "aduci", "aduce", "aducem", "aduceți", "aduc", "adus"); 
    let to_buy = new Verb("Buy", "Cumpăra", "cumpăr", "cumpări", "cumpără", "cumpărăm", "cumpărați", "cumpără", "cumpărat"); 
    let to_call = new Verb("Call (shout)", "Striga", "strig", "strigi", "strigă", "strigăm", "strigați", "strigă", "strigat"); 
    let to_can = new Verb("Can", "Putea", "pot", "poți", "poate", "putem", "puteți", "pot", "putut"); 
    let to_cancel = new Verb("Cancel", "Anula", "anulez", "anulezi", "anulează", "anulăm", "anulați", "anulează", "anulat"); 
    let to_carry = new Verb("Carry", "Duce", "duc", "duci", "duce", "ducem", "duceți", "duc", "dus"); 
    let to_catch = new Verb("Catch", "Prinde", "prind", "prinzi", "prinde", "prindem", "prindeți", "prind", "prins"); 
    let to_cause = new Verb("Cause", "Provoca", "provoc", "provoci", "provoacă", "provocăm", "provocați", "provoacă", "provocat"); 
    let to_celebrate = new Verb("Celebrate", "Sărbători", "sărbătoresc", "sărbătorești", "sărbătorește", "sărbătorim", "sărbătoriți", "sărbătoresc", "sărbătorit"); 
    let to_change = new Verb("Change", "Schimba", "schimb", "schimbi", "schimbă", "schimbăm", "schimbați", "schimbă", "schimbat"); 
    let to_cheat = new Verb("Cheat", "Trișa", "trișez", "trișezi", "trișează", "trișăm", "trișați", "trișează", "trișat"); 
    let to_choose = new Verb("Choose", "Alege", "aleg", "alegi", "alege", "alegem", "alegeți", "aleg", "ales"); 
    let to_chop = new Verb("Chop", "Toca", "toc", "toci", "toacă", "tocăm", "tocați", "toacă", "tocat"); 
    let to_clean = new Verb("Clean", "Face curățenie", "fac curățenie", "faci curățenie", "face curățenie", "facem curățenie", "faceți curățenie", "fac curățenie", "făcut curățenie"); 
    let to_climb = new Verb("Climb", "Urca", "urc", "urci", "urcă", "urcăm", "urcați", "urcă", "urcat"); 
    let to_close = new Verb("Close", "Închide", "închid", "închizi", "închide", "închidem", "închideți", "închid", "închis"); 
    let to_come = new Verb("Come", "Veni", "vin", "vii", "vine", "venim", "veniți", "vin", "venit"); 
    let to_comeBack = new VerbReflexiveSe("Come Back", "Întoarce", "întorc", "întorci", "întoarce", "întoarcem", "întoarceți", "întorc", "întors"); 
    let to_commitSuicide = new VerbReflexiveSe("Commit Suicide", "sinucide", "sinucid", "sinucizi", "sinucide", "sinucidem", "sinucideți", "sinucid", "sinucis"); 
    let to_compare = new Verb("Compare", "Compara", "compar", "compari", "compară", "comparăm", "comparați", "compară", "comparat"); 
    let to_confess = new Verb("Confess", "Mărturisi", "mărturisesc", "mărturisești", "mărturisește", "mărturisim", "mărturisiți", "mărturisesc", "mărturisit"); 
    let to_continueVerb = new Verb("Continue", "Continua", "continuu", "continui", "continuă", "continuăm", "continuați", "continuă", "continuat"); 
    let to_cook = new Verb("Cook (prepare)", "Găti", "gătesc", "gătești", "gătește", "gătim", "gătiți", "gătesc", "gătit"); 
    let to_cross = new Verb("Cross", "Traversa", "traversez", "traversezi", "traversează", "traversăm", "traversați", "traversează", "traversat"); 
    let to_cry = new Verb("Cry", "Plânge", "plâng", "plângi", "plânge", "plângem", "plângeți", "plâng", "plâns"); 
    let to_cut = new Verb("Cut", "Tăia", "tai", "tai", "taie", "tăiem", "tăiați", "taie", "tăiat"); 
    let to_dance = new Verb("Dance", "Dansa", "dansez", "dansezi", "dansează", "dansăm", "dansați", "dansează", "dansat"); 
    let to_dateVerb = new VerbReflexiveSe("Date", "Întâlni", "întâlnesc", "întâlnești", "întâlnește", "întâlnim", "întâlniți", "întâlnesc", "întâlnit"); 
    let to_decide = new Verb("Decide", "Decide", "decid", "decizi", "decide", "decidem", "decideți", "decid", "decis"); 
    let to_deny = new Verb("Deny", "Nega", "neg", "negi", "neagă", "negăm", "negați", "neagă", "negat"); 
    let to_deposit = new Verb("Deposit", "Depune", "depun", "depui", "depune", "depunem", "depuneți", "depun", "depus"); 
    let to_describe = new Verb("Describe", "Descrie", "descriu", "descrii", "descrie", "descriem", "descrieți", "descriu", "descris"); 
    let to_desire = new VerbReflexiveSi("Desire (wish)", "Dori", "doresc", "dorești", "dorește", "dorim", "doriți", "doresc", "dorit"); 
    let to_destroy = new Verb("Destroy", "Distruge", "distrug", "distrugi", "distruge", "distrugem", "distrugeți", "distrug", "distrus"); 
    let to_die = new Verb("Die", "Muri", "mor", "mori", "moare", "murim", "muriți", "mor", "murit"); 
    let to_discuss = new Verb("Discuss", "Discuta", "discut", "discuți", "discută", "discutăm", "discutați", "discută", "discutat"); 
    let to_divorce = new Verb("Divorce", "Divorța", "divorțez", "divorțezi", "divorțează", "divorțăm", "divorțați", "divorțează", "divorțat"); 
    let to_do = new Verb("Do", "Face", "fac", "faci", "face", "facem", "faceți", "fac", "făcut"); 
    let to_doubt = new Verb("Doubt", "Îndoi", "îndoiesc", "îndoiești", "îndoiește", "îndoim", "îndoiți", "îndoiesc", "îndoit"); 
    let to_dream = new Verb("Dream", "Visa", "visez", "visezi", "visează", "visăm", "visați", "visează", "visat"); 
    let to_drink = new Verb("Drink", "Bea", "beau", "bei", "bea", "bem", "beți", "beau", "băut"); 
    let to_drive = new Verb("Drive", "Conduce", "conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus"); 
    let to_eat = new Verb("Eat", "Mânca", "mănânc", "mănânci", "mănâncă", "mâncăm", "mâncați", "mănâncă", "mâncat"); 
    let to_enroll = new VerbReflexiveSe("Enroll", "Înscrie", "înscriu", "înscrii", "înscrie", "înscriem", "înscrieți", "înscriu", "înscris"); 
    let to_enter = new Verb("Enter", "Intra", "intru", "intri", "intră", "intrăm", "intrați", "intră", "intrat"); 
    let to_escape = new Verb("Escape", "Scăpa", "scap", "scapi", "scapă", "scăpăm", "scăpați", "scapă", "scăpat"); 
    let to_exchange = new Verb("Exchange", "Schimba", "schimb", "schimbi", "schimbă", "schimbăm", "schimbați", "schimbă", "schimbat"); 
    let to_exercise = new Verb("Exercise", "Face exerciții", "fac exerciții", "faci exerciții", "face exerciții", "facem exerciții", "faceți exerciții", "fac exerciții", "făcut exerciții");
    let to_explain = new Verb("Explain", "Explica", "explic", "explici", "explică", "explicăm", "explicați", "explică", "explicat"); 
    let to_express = new Verb("Express", "Exprima", "exprim", "exprimi", "exprimă", "exprimăm", "exprimați", "exprimă", "exprimat"); 
    let to_fail = new Verb("Fail", "Eșua", "eșuez", "eșuezi", "eșuează", "eșuăm", "eșuați", "eșuează", "eșuat"); 
    let to_fall = new Verb("Fall", "Cădea", "cad", "cazi", "cade", "cădem", "cădeți", "cad", "căzut"); 
    let to_fallAsleep = new Verb("Fall Asleep", "Adormi", "adorm", "adormi", "adoarme", "adormim", "adormiți", "adorm", "adormit"); 
    let to_feel = new Verb("Feel", "Simți", "simt", "simți", "simte", "simțim", "simțiți", "simt", "simțit"); 
    let to_fight = new Verb("Fight", "Lupta", "lupt", "lupți", "luptă", "luptăm", "luptați", "luptă", "luptat"); 
    let to_find = new Verb("Find", "Găsi", "găsesc", "găsești", "găsește", "găsim", "găsiți", "găsesc", "găsit"); 
    let to_fit = new VerbReflexiveSe("Fit", "Potrivi", "potrivesc", "potrivești", "potrivește", "potrivim", "potriviți", "potrivesc", "potrivit"); 
    let to_fly = new Verb("Fly", "Zbura", "zbor", "zbori", "zboară", "zburăm", "zburați", "zboară", "zburat"); 
    let to_follow = new Verb("Follow", "Urma", "urmez", "urmezi", "urmează", "urmăm", "urmați", "urmează", "urmat"); 
    let to_forecast = new Verb("Forecast", "Prognoza", "prognozez", "prognozezi", "prognozează", "prognozăm", "prognozați", "prognozează", "prognozat"); 
    let to_forget = new Verb("Forget", "Uita", "uit", "uiți", "uită", "uităm", "uitați", "uită", "uitat"); 
    let to_forgive = new Verb("Forgive", "Ierta", "iert", "ierți", "iertă", "iertăm", "iertați", "iertă", "iertat"); 
    let to_gather = new Verb("Gather", "Aduna", "adun", "aduni", "adună", "adunăm", "adunați", "adună", "adunat"); 
    let to_getHurt = new Verb("Get Hurt", "Fi rănit", "sunt rănit", "ești rănit", "este rănit", "suntem răniți", "sunteți răniți", "sunt răniți", "fost rănit"); 
    let to_getUp = new VerbReflexiveSe("Get up", "Trezi", "trezesc", "trezești", "trezește", "trezim", "treziți", "trezesc", "trezit"); 
    let to_give = new Verb("Give", "Da", "dau", "dai", "dă", "dăm", "dați", "dau", "dat"); 
    let to_grill = new Verb("Grill", "Frige la grătar", "frig la grătar", "frigi la grătar", "frige la grătar", "frigem la grătar", "frigeți la grătar", "frig la grătar", "fript la grătar"); 
    let to_guess = new Verb("Guess", "Ghici", "ghicesc", "ghicești", "ghicește", "ghicim", "ghiciți", "ghicesc", "ghicit"); 
    let to_guessBelieve = new Verb("Guess (believe)", "Crede", "cred", "crezi", "crede", "credem", "credeți", "cred", "crezut"); 
    let to_hangOut = new Verb("Hang Out", "Petrece", "petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut"); 
    let to_have = new Verb("Have", "Avea", "am", "ai", "are", "avem", "aveți", "au", "a") 
    let to_hear = new Verb("Hear", "Auzi", "aud", "auzi", "aude", "auzim", "auziți", "aud", "auzit"); 
    let to_heat = new Verb("Heat", "Încălzi", "încălzesc", "încălzești", "încălzește", "încălzim", "încălziți", "încălzesc", "încălzit"); 
    let to_hide = new Verb("Hide", "Ascunde", "ascund", "ascunzi", "ascunde", "ascundem", "ascundeți", "ascund", "ascuns"); 
    let to_hit = new Verb("Hit (kick)", "Lovi", "lovesc", "lovești", "lovește", "lovim", "loviți", "lovesc", "lovit"); 
    let to_hold = new Verb("Hold", "Ține", "țin", "ții", "ține", "ținem", "țineți", "țin", "ținut"); 
    let to_hug = new Verb("Hug", "Îmbrățișa", "îmbrățișez", "îmbrățișezi", "îmbrățișează", "îmbrățișăm", "îmbrățișați", "îmbrățișează", "îmbrățișat"); 
    let to_imagine = new VerbReflexiveSi("Imagine", "Imagina", "imaginez", "imaginezi", "imaginează", "imaginăm", "imaginați", "imaginează", "imaginat"); 
    let to_improve = new Verb("Improve", "Îmbunătăți", "îmbunătățesc", "îmbunătățești", "îmbunătățește", "îmbunătățim", "îmbunătățiți", "îmbunătățesc", "îmbunătățit"); 
    let to_interrupt = new Verb("Interrupt", "Întrerupe", "întrerup", "întrerupi", "întrerupe", "întrerupem", "întrerupeți", "întrerup", "întrerupt"); 
    let to_interview = new Verb("Interview", "Intervieva", "intervievez", "intervievezi", "intervievează", "intervievăm", "intervievati", "intervievează", "intervievat"); 
    let to_invite = new Verb("Invite", "Invita", "invit", "inviţi", "invită", "invităm", "invitați", "invită", "invitat"); 
    let to_join = new VerbReflexiveSe("Join", "Alătura", "alătur", "alături", "alătură", "alăturăm", "alăturați", "alătură", "alăturat"); 
    let to_joke = new Verb("Joke", "Glumi", "glumesc", "glumești", "glumește", "glumim", "glumiți", "glumesc", "glumit"); 
    let to_jump = new Verb("Jump", "Sări", "sar", "sări", "sare", "sărim", "săriți", "sar", "sărit"); 
    let to_keep = new Verb("Keep", "Ține", "țin", "ții", "ține", "ținem", "țineți", "țin", "ținut"); 
    let to_kill = new Verb("Kill", "Ucide", "ucid", "ucizi", "ucide", "ucidem", "ucideți", "ucid", "ucis"); 
    let to_kiss = new Verb("Kiss", "Săruta", "sărut", "săruți", "sărută", "sărutăm", "sărutați", "sărută", "sărutat"); 
    let to_know = new Verb("Know", "Ști", "știu", "știi", "știe", "știm", "știți", "știu", "știut"); 
    let to_know2 = new Verb("Know (alt)", "Cunoaște", "cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut"); 
    let to_laugh = new Verb("Laugh", "Râde", "râd", "râzi", "râde", "râdem", "râdeți", "râd", "râs"); 
    let to_lead = new Verb("Lead", "Conduce", "conduc", "conduci", "conduce", "conducem", "conduceți", "conduc", "condus"); 
    let to_learn = new Verb("Learn", "Învăța", "învăț", "înveți", "învață", "învățăm", "învățați", "învață", "învățat"); 
    let to_leave = new Verb("Leave", "Pleca", "plec", "pleci", "pleacă", "plecăm", "plecați", "pleacă", "plecat"); 
    let to_lie = new Verb("Lie", "Minți", "mint", "minți", "minte", "mințim", "mințiți", "mint", "mințit"); 
    let to_like = new VerbReflexiveSi("Like", "Plăcea", "place", "place", "place", "place", "place", "place", "plăcut"); 
    let to_listen = new Verb("Listen", "Asculta", "ascult", "asculți", "ascultă", "ascultăm", "ascultați", "ascultă", "ascultat"); 
    let to_live = new Verb("Live", "Trăi", "trăiesc", "trăiești", "trăiește", "trăim", "trăiți", "trăiesc", "trăit"); 
    let to_lose = new Verb("Lose", "Pierde", "pierd", "pierzi", "pierde", "pierdem", "pierd", "pierd", "pierdut"); 
    let to_love = new Verb("Love", "Iubi", "iubesc", "iubești", "iubește", "iubim", "iubiți", "iubesc", "iubit"); 
    let to_marry = new VerbReflexiveSe("Marry", "Căsători", "căsătoresc", "căsătorești", "căsătorește", "căsătorim", "căsătoriți", "căsătoresc", "căsătorit"); 
    let to_meet = new Verb("Meet", "Întâlni", "întâlnesc", "întâlnești", "întâlnește", "întâlnim", "întâlniți", "întâlnesc", "întâlnit"); 
    let to_miss = new Verb("Miss", "Rata", "ratez", "ratezi", "ratează", "ratăm", "ratați", "ratează", "ratat"); 
    let to_mix = new Verb("Mix", "Amesteca", "amestec", "amesteci", "amestecă", "amestecăm", "amestecați", "amestecă", "amestecat"); 
    let to_move = new Verb("Move", "Muta", "mut", "muți", "mută", "mutăm", "mutați", "mută", "mutat"); 
    let to_observe = new Verb("Observe (gase)", "Observa", "observ", "observi", "observă", "observăm", "observați", "observă", "observat"); 
    let to_obtain = new Verb("Obtain", "Obține", "obțin", "obții", "obține", "obținem", "obțineți", "obțin", "obținut"); 
    let to_occur = new Verb("Occur", "Apareă", "apăr", "aperi", "apăre", "apărem", "apăreţi", "apăr", "apărut"); 
    let to_open = new Verb("Open", "Deschide", "deschid", "deschizi", "deschide", "deschidem", "deschideți", "deschid", "deschis"); 
    let to_order = new Verb("Order", "Comanda", "comand", "comanzi", "comandă", "comandăm", "comandați", "comandă", "comandat"); 
    let to_paint = new Verb("Paint", "Vopsi", "vopsesc", "vopsești", "vopsește", "vopsim", "vopsiți", "vopsesc", "vopsit"); 
    let to_party = new Verb("Party", "Petrece", "petrec", "petreci", "petrece", "petrecem", "petreceți", "petrec", "petrecut"); 
    let to_pass = new Verb("Pass", "Trece", "trec", "treci", "trece", "trecem", "treceți", "trec", "trecut"); 
    let to_pay = new Verb("Pay", "Plăti", "plătesc", "plătești", "plătește", "plătim", "plătiți", "plătesc", "plătit"); 
    let to_peel = new Verb("Peel", "Coji", "Cojesc", "Cojești", "Cojește", "Cojim", "Cojiți", "Cojesc", "Cojit"); 
    let to_plan = new Verb("Plan", "Planifica", "planific", "planifici", "planifică", "planificăm", "planificați", "planifică", "planificat"); 
    let to_play = new VerbReflexiveSe("Play", "Juca", "joc", "joci", "joacă", "jucăm", "jucați", "joacă", "jucat"); 
    let to_practice = new Verb("Practice", "Exersa", "exersez", "exersezi", "exersează", "exersăm", "exersați", "exersează", "exersat"); 
    let to_praise = new Verb("Praise", "Lăuda", "laud", "lauzi", "laudă", "lăudăm", "lăudați", "laudă", "lăudat"); 
    let to_prefer = new Verb("Prefer", "Prefera", "prefer", "preferi", "preferă", "preferăm", "preferați", "preferă", "preferat"); 
    let to_prepare = new Verb("Prepare", "Pregăti", "pregătesc", "pregătești", "pregătește", "pregătim", "pregătiți", "pregătesc", "pregătit"); 
    let to_present = new Verb("Present", "Prezenta", "prezint", "prezinți", "prezintă", "prezentăm", "prezentați", "prezintă", "prezentat"); 
    let to_propose = new Verb("Propose", "Cere în căsătorie", "cer în căsătorie", "cere în căsătorie", "cere în căsătorie", "cerem în căsătorie", "cereți în căsătorie", "cer în căsătorie", "cerut în căsătorie"); 
    let to_prove = new Verb("Prove", "Dovedi", "dovedesc", "dovedești", "dovedește", "dovedim", "dovediți", "dovedesc", "dovedit"); 
    let to_pull = new Verb("Pull", "Trage", "trag", "tragi", "trage", "tragem", "trageți", "trag", "tras"); 
    let to_push = new Verb("Push", "Împinge", "împing", "împingi", "împinge", "împingem", "împingeți", "împing", "împins"); 
    let to_put = new Verb("Put", "Pune", "pun", "pui", "pune", "punem", "puneți", "pun", "pus"); 
    let to_quit = new Verb("Quit", "Demisiona", "demisionez", "demisionezi", "demisionează", "demisionăm", "demisionați", "demisionează", "demisionat"); 
    let to_read = new Verb("Read", "Citi", "citesc", "citești", "citește", "citim", "citiți", "citesc", "citit"); 
    let to_receive = new Verb("Receive", "Primi", "primesc", "primești", "primește", "primim", "primiți", "primesc", "primit"); 
    let to_recommend = new Verb("Recommend", "Recomanda", "recomand", "recomanzi", "recomandă", "recomandăm", "recomandați", "recomandă", "recomandat"); 
    let to_recover = new VerbReflexiveSe("Recuperate", "recupera", "recuperez", "recuperezi", "recuperează", "recuperăm", "recuperați", "recuperează", "recuperat"); 
    let to_register = new Verb("Register", "Înregistra", "înregistrez", "înregistrezi", "înregistrează", "înregistrăm", "înregistrați", "înregistrează", "înregistrat"); 
    let to_renovate = new Verb("Renovate", "Renova", "renovez", "renovezi", "renovează", "renovăm", "renovați", "renovează", "renovat"); 
    let to_rent = new Verb("Rent", "Închiria", "închiriez", "închiriezi", "închiriază", "închiriem", "închiriați", "închiriază", "închiriat"); 
    let to_repair = new Verb("Repair", "Repara", "repar", "repari", "repară", "reparăm", "reparați", "repară", "reparat"); 
    let to_repeat = new Verb("Repeat", "Repeta", "repet", "repeți", "repetă", "repetăm", "repetați", "repetă", "repetat"); 
    let to_replace = new Verb("Replace", "Înlocui", "înlocuiesc", "înlocuiești", "înlocuiește", "înlocuim", "înlocuiți", "înlocuiesc", "înlocuit"); 
    let to_reside = new Verb("Reside (live)", "Locui", "locuiesc", "locuiești", "locuiește", "locuim", "locuiți", "locuiesc", "locuit"); 
    let to_resolve = new Verb("Resolve", "Rezolva", "rezolv", "rezolvi", "rezolvă", "rezolvăm", "rezolvați", "rezolvă", "rezolvat"); 
    let to_rest = new VerbReflexiveSe("Rest", "Odihni", "odihnesc", "odihnești", "odihnește", "odihnim", "odihniți", "odihnesc", "odihnit"); 
    let to_review = new Verb("Review", "Revizui", "revizuiesc", "revizuiești", "revizuiește", "revizuim", "revizuiți", "revizuiesc", "revizuit"); 
    let to_ring = new Verb("Ring", "Suna", "sun", "suni", "sună", "sunăm", "sunați", "sună", "sunat"); 
    let to_rise = new Verb("Rise", "Crește", "cresc", "crești", "crește", "creștem", "creșteți", "cresc", "crescut"); 
    let to_rob = new Verb("Rob", "Jefui", "jefuiesc", "jefuiești", "jefuiește", "jefuim", "jefuiți", "jefuiesc", "jefuit"); 
    let to_ruin = new Verb("Ruin", "Ruina", "ruinez", "ruinezi", "ruinează", "ruinăm", "ruinați", "ruinează", "ruinat"); 
    let to_run = new Verb("Run", "Alerga", "alerg", "alergi", "aleargă", "alergăm", "alergați", "aleargă", "alergat"); 
    let to_runAway = new Verb("Run (flee)", "Fugi", "fug", "fugi", "fuge", "fugim", "fugiți", "fug", "fugit"); 
    let to_say = new Verb("Say", "Spune", "spun", "spui", "spune", "spunem", "spuneți", "spun", "spus"); 
    let to_say2 = new Verb("Say (alt)", "Zice", "zic", "zici", "zice", "zicem", "ziceți", "zic", "zis"); 
    let to_search = new Verb("Search", "Căuta", "caut", "cauți", "caută", "căutăm", "căutați", "caută", "căutat"); 
    let to_seat = new VerbReflexiveSe("Stay (sit)", "Așeza", "așez", "așezi", "așază", "așezăm", "așezați", "așază", "așezat"); 
    let to_see = new Verb("See", "Vedea", "văd", "vezi", "vede", "vedem", "vedeți", "văd", "văzut"); 
    let to_seem = new VerbReflexiveSe("Seem", "Părea", "par", "pari", "pare", "părem", "păreți", "par", "părut"); 
    let to_send = new Verb("Send", "Trimite", "trimit", "trimiți", "trimite", "trimitem", "trimiteți", "trimit", "trimis"); 
    let to_shower = new Verb("Shower", "Face duș", "fac duș", "faci duș", "face duș", "facem duș", "faceți duș", "fac duș", "făcut duș"); 
    let to_sing = new Verb("Sing", "Cânta", "cânt", "cânți", "cântă", "cântăm", "cântați", "cântă", "cântat"); 
    let to_sleep = new Verb("Sleep", "Dormi", "dorm", "dormi", "doarme", "dormim", "dormiți", "dorm", "dormit"); 
    let to_sleepWith = new VerbReflexiveSe("Sleep (with)", "Culci", "culc", "culci", "culca", "culcam", "culcați", "culca", "culcat"); 
    let to_smell = new Verb("Smell", "Mirosi", "miros", "miroși", "miroase", "mirosim", "mirosiți", "miros", "mirosit"); 
    let to_smile = new Verb("Smile", "Zămbi", "zămbesc", "zămbesti", "zămbeste", "zămbim", "zămbiți", "zămbesc", "zămbit"); 
    let to_speak = new Verb("Speak", "Vorbi", "vorbesc", "vorbești", "vorbește", "vorbim", "vorbiți", "vorbesc", "vorbit"); 
    let to_stand = new VerbReflexiveSe("Stand", "Ridica", "ridic", "ridici", "ridică", "ridicăm", "ridicați", "ridică", "ridicat"); 
    let to_stay = new Verb("Stay", "Sta", "stau", "stai", "stă", "stăm", "stați", "stau", "stat"); 
    let to_stirFry = new Verb("Stir Fry", "Căli", "călesc", "călești", "călește", "călim", "căliți", "călesc", "călit"); 
    let to_stop = new Verb("Stop", "Opri", "opresc", "oprești", "oprește", "oprim", "opriți", "opresc", "oprit"); 
    let to_suggest = new Verb("Suggest", "Sugera", "sugerez", "sugerezi", "sugerează", "sugerăm", "sugerați", "sugerează", "sugerat"); 
    let to_suppose = new Verb("Suppose", "Presupune", "presupun", "presupui", "presupune", "presupunem", "presupuneți", "presupun", "presupus"); 
    let to_sweat = new Verb("Sweat", "Transpira", "transpir", "transpiri", "transpiră", "transpirăm", "transpirați", "transpiră", "transpirat"); 
    let to_take = new Verb("Take", "Lua", "iau", "iei", "ia", "luăm", "luați", "iau", "luat"); 
    let to_takeOff = new VerbReflexiveSe("Take off", "Dezbrăca", "dezbrac", "dezbraci", "dezbracă", "dezbrăcăm", "dezbrăcați", "dezbracă", "dezbrăcat"); 
    let to_teach = new Verb("Teach", "Preda", "predau", "predai", "predă", "predăm", "predați", "predau", "predat"); 
    let to_think = new VerbReflexiveSe("Think", "Gândi", "gândesc", "gândești", "gândește", "gândim", "gândiți", "gândesc", "gândit"); 
    let to_tie = new Verb("Tie", "Lega", "leg", "legi", "leagă", "legăm", "legați", "leagă", "legat"); 
    let to_toMeet = new Verb("Meet", "Cunoaște", "cunosc", "cunoști", "cunoaște", "cunoaștem", "cunoașteți", "cunosc", "cunoscut"); 
    let to_toPlace = new Verb("Place", "Așeza", "așez", "așezi", "așează", "așezăm", "așezați", "așează", "așezat"); 
    let to_toPresent = new Verb("Present", "Prezenta", "prezint", "prezinți", "prezintă", "prezentăm", "prezentați", "prezintă", "prezentat"); 
    let to_treat = new Verb("Treat", "Trata", "tratez", "tratezi", "tratează", "tratăm", "trataţi", "tratează", "tratat"); 
    let to_try = new Verb("Try", "Incerca", "încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat"); 
    let to_tryOn = new Verb("Try On", "Proba", "probez", "probezi", "probează", "probăm", "probați", "probează", "probat"); 
    let to_tryVerb = new Verb("Try", "Încerca", "încerc", "încerci", "încearcă", "încercăm", "încercați", "încearcă", "încercat"); 
    let to_turn = new Verb("Turn", "Vira", "virez", "virezi", "virează", "virăm", "virați", "virează", "virat"); 
    let to_turnOn = new Verb("Turn on", "Porni", "pornesc", "pornești", "pornește", "pornim", "porniți", "pornesc", "pornit"); 
    let to_type = new Verb("Type", "Tasta", "tastez", "tastezi", "tastează", "tastăm", "tastați", "tastează", "tastat"); 
    let to_understand = new Verb("Understand", "Înțelege", "înțeleg", "înțelegi", "înțelege", "înțelegem", "înțelegeți", "înțeleg", "înțeles"); 
    let to_verify = new Verb("Verify", "Verifica", "verific", "verifici", "verifică", "verificăm", "verificați", "verifică", "verificat"); 
    let to_visit = new Verb("Visit", "Vizita", "vizitez", "vizitezi", "vizitează", "vizităm", "vizitați", "vizitează", "vizitat"); 
    let to_wait = new Verb("Wait", "Aștepta", "aștept", "aștepți", "așteaptă", "așteptăm", "așteptați", "așteaptă", "așteptat"); 
    let to_walk = new Verb("Walk (go)", "Merge", "merg", "mergi", "merge", "mergem", "mergeți", "merg", "mers"); 
    let to_want = new Verb("Want", "Vrea", "vreau", "vrei", "vrea", "vrem", "vreți", "vor", "vrut"); 
    let to_wash = new VerbReflexiveSe("Wash", "Spăla", "spăl", "speli", "spală", "spălăm", "spălați", "spală", "spălat"); 
    let to_win = new Verb("Win", "Câștiga", "câștig", "câștigi", "câștigă", "câștigăm", "câștigați", "câștigă", "câștigat"); 
    let to_wipeOut = new Verb("Wipe Out", "Nimici", "nimicesc", "nimicești", "nimicește", "nimicim", "nimiciți", "nimicesc", "nimicit"); 
    let to_work = new Verb("Work", "Munci", "muncesc", "muncești", "muncește", "muncim", "munciți", "muncesc", "muncit"); 
    let to_work2 = new Verb("Work (alt)", "Lucra", "lucrez", "lucrezi", "lucrează", "lucrăm", "lucrați", "lucrează", "lucrat"); 
    let to_write = new Verb("Write", "Scrie", "scriu", "scrii", "scrie", "scriem", "scrieți", "scriu", "scris"); 

    setParentAndMultipleChildren(wordclass_verbs, [
        to_achieve, to_add, to_admit, to_agree, to_allow, to_analyze, to_apologize, to_apply, to_approve, to_argue, to_arrive, to_ask, to_bake, to_be, to_beAvailable,
        to_become, to_beDivorced, to_beEngaged, to_beHonest, to_beSure, to_blush, to_boil, to_breakIn, to_breakUp, to_bring, to_buy, to_call, to_can, to_cancel, to_carry,
        to_catch, to_cause, to_celebrate, to_change, to_cheat, to_choose, to_chop, to_clean, to_climb, to_close, to_come, to_comeBack, to_commitSuicide, to_compare, to_confess,
        to_continueVerb, to_cook, to_cross, to_cry, to_cut, to_dance, to_dateVerb, to_decide, to_deny, to_deposit, to_describe, to_desire, to_destroy, to_die, to_discuss,
        to_divorce, to_do, to_doubt, to_dream, to_drink, to_drive, to_eat, to_enroll, to_enter, to_escape, to_exchange, to_exercise, to_explain, to_express, to_fail, to_fall,
        to_fallAsleep, to_feel, to_fight, to_find, to_fit, to_fly, to_follow, to_forecast, to_forget, to_forgive, to_gather, to_getHurt, to_getUp, to_give, to_grill, to_guess,
        to_guessBelieve, to_hangOut, to_have, to_hear, to_heat, to_hide, to_hit, to_hold, to_hug, to_imagine, to_improve, to_interrupt, to_interview, to_invite, to_join, to_joke,
        to_jump, to_keep, to_kill, to_kiss, to_know, to_know2, to_laugh, to_lead, to_learn, to_leave, to_lie, to_like, to_listen, to_live, to_lose, to_love, to_marry, to_meet, to_miss,
        to_mix, to_move, to_observe, to_obtain, to_occur, to_open, to_order, to_paint, to_party, to_pass, to_pay, to_peel, to_plan, to_play, to_practice, to_praise, to_prefer, to_prepare,
        to_present, to_propose, to_prove, to_pull, to_push, to_put, to_quit, to_read, to_receive, to_recommend, to_recover, to_register, to_renovate, to_rent, to_repair, to_repeat, to_replace,
        to_reside, to_resolve, to_rest, to_review, to_ring, to_rise, to_rob, to_ruin, to_run, to_runAway, to_say, to_say2, to_search, to_seat, to_see, to_seem, to_send, to_shower, to_sing, to_sleep,
        to_sleepWith, to_smell, to_smile, to_speak, to_stand, to_stay, to_stirFry, to_stop, to_suggest, to_suppose, to_sweat, to_take, to_takeOff, to_teach, to_think, to_tie, to_toMeet, to_toPlace,
        to_toPresent, to_treat, to_try, to_tryOn, to_tryVerb, to_turn, to_turnOn, to_type, to_understand, to_verify, to_visit, to_wait, to_walk, to_want, to_wash, to_win, to_wipeOut, to_work,
        to_work2, to_write])

    // =============================================================================
    // #Prepositions
    // =============================================================================

    let preposition_about = new DataCard("About", "Despre", "") 
    let preposition_above = new DataCard("Above", "De mai sus", "") 
    let preposition_abroad = new DataCard("Abroad", "În străinătate", ""); 
    let preposition_after = new DataCard("After", "După", "") 
    let preposition_against = new DataCard("Against", "Împotriva", "") 
    let preposition_alongSide = new DataCard("Along side (next to)", "Pe langa", "") 
    let preposition_amid = new DataCard("Amid (in the middle of)", "În mijlocul", "") 
    let preposition_among = new DataCard("Among", "Printre", "") 
    let preposition_apartFrom = new DataCard("Apart from", "În afară de", "") 
    let preposition_at = new DataCard("At", "La", "") 
    let preposition_awayFrom = new DataCard("Away From", "Departe de", ""); 
    let preposition_behind = new DataCard("Behind", "In spate", "") 
    let preposition_beneath = new DataCard("Beneath", "Sub", "") 
    let preposition_beside = new DataCard("Beside (next to)", "Lângă", "") 
    let preposition_beyond = new DataCard("Beyond", "Dincolo", "") 
    let preposition_bottom = new DataCard("Bottom", "De Jos", ""); 
    let preposition_by = new DataCard("By", "De către", ""); 
    let preposition_closeTo = new DataCard("Close to", "Aproape de", "") 
    let preposition_from = new DataCard("From", "Din", "") 
    let preposition_high = new DataCard("High", "Sus", ""); 
    let preposition_in = new DataCard("In", "În (Înăuntru)", "") 
    let preposition_inBetween = new DataCard("In between", "Între", "") 
    let preposition_inFrontOf = new DataCard("In front of", "În fața", "") 
    let preposition_inside = new DataCard("Inside", "Interior", "") 
    let preposition_left = new DataCard("Left", "La Stânga", ""); 
    let preposition_low = new DataCard("Low", "Jos", ""); 
    let preposition_near = new DataCard("Near", "Apropape", "") 
    let preposition_of = new DataCard("Of", "De", "") 
    let preposition_on = new DataCard("On", "Pe", "") 
    let preposition_oppositeTo = new DataCard("Opposite To", "Peste drum de", ""); 
    let preposition_out = new DataCard("Out", "Afară", ""); 
    let preposition_outside = new DataCard("Outside", "In afara", "") 
    let preposition_over = new DataCard("Over", "Peste", "") 
    let preposition_right = new DataCard("Right", "La Dreapta", ""); 
    let preposition_since = new DataCard("Since", "De când", "") 
    let preposition_through = new DataCard("Through", "Prin", "") 
    let preposition_till = new DataCard("Until (till)", "Până (la)", "") 
    let preposition_together = new DataCard("Together", "Impreuna", "") 
    let preposition_top = new DataCard("Top", "De Sus", ""); 
    let preposition_towards = new DataCard("Towards", "Spre", "") 
    let preposition_until = new DataCard("Until", "Până când", ""); 
    let preposition_via = new DataCard("Via", "Prin", ""); 
    let preposition_with = new DataCard("With", "Cu", "") 
    let preposition_without = new DataCard("Without", "Fără", "") 

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

    let who = new DataCard("Who", "Cine", "") 
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
    let DescriptiveAdjective = new Theme("Descriptive Adjective", "Adjective Descriptive"); 
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
    const adj_soft = new Adjective("Soft", "moale", "moale", "moi", "moi"); 
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
    let flavours = new Theme("Flavours", "Arome"); 
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
    let aboutPeople = new Theme("About People", "Despre oameni"); 
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
    const adj_strict = new Adjective("Strict", "strict", "strictă", "stricti", "stricte"); 
    const adj_sunny = new Adjective("Sunny", "însorit", "însorită", "însoriți", "însorite"); 
    const adj_thirsty = new Adjective("Thirsty", "însetat", "însetată", "însetați", "însetate"); 

    setParentAndMultipleChildren(
        aboutPeople, [
        adj_allergic, adj_alone, adj_amusing, adj_boring, adj_busy, adj_cool, adj_crazy, adj_curly, adj_dangerous, adj_foreign,
        adj_handsome, adj_hungry, adj_interesting, adj_lucky, adj_missing, adj_muscular, adj_romantic, adj_sad, adj_shy, adj_sick,
        adj_smart, adj_strange, adj_strict, adj_sunny, adj_thirsty]
    )


    // #Colours =======================================
    let colours = new Theme("Colours", "Culorile") 
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
    let TheCircus = new Theme("The Circus", "Circul"); 
    setParentAndChild(wordclass_nouns, TheCircus)

    const noun_acrobat = new NounMale("acrobat", "acrobat", "acrobați", "acrobatul", "acrobații", "acrobului", "acrobaților"); 
    const noun_band = new NounFemale("band", "formație", "formații", "formația", "formațiile", "formației", "formațiilor"); 
    const noun_bigWheel = new NounFemale("big wheel", "roată panoramică", "roți panoramice", "roata panoramică", "roțile panoramice", "roții panoramice", "roților panoramice"); 
    const noun_bowTieClown = new NounNeuter("bow tie (clown)", "papion", "papioane", "papionul", "papioanele", "papionului", "papioanelor"); 
    const noun_candyFloss = new NounFemale("candy floss", "vată de zahăr", "vate de zahăr", "vata de zahăr", "vatele de zahăr", "vatei de zahăr", ""); 
    const noun_carousel = new NounNeuter("carousel", "carusel", "carusele", "caruselul", "caruselele", "caruselului", "caruselelor"); 
    const noun_clown = new NounMale("clown", "clovn", "clovni", "clovnul", "clovnii", "clovnului", "clovnilor"); 
    const noun_dodgems = new NounFemale("dodgems", "mașinuță tampon", "mașinuțe tampon", "mașinuța tampon", "mașinuțele tampon", "mașinuței tampon", "mașinuțelor tampon"); 
    const noun_ghostTrain = new NounNeuter("ghost train", "tren al groazei", "trenuri ale groazei", "trenul groazei", "trenurile groazei", "trenului groazei", "trenurilor groazei"); 
    const noun_helterSkelter = new NounNeuter("helter-skelter", "tobogan spirală", "tobogane spirală", "toboganul spirală", "toboganele spirală", "toboganului spirală", "toboganelor spirală"); 
    const noun_juggler = new NounMale("juggler", "jongler", "jongleri", "jonglerul", "jonglerii", "jonglerului", "jonglerilor"); 
    const noun_pole = new NounMale("pole", "stâlp", "stâlpi", "stâlpul", "stâlpii", "stâlpului", "stâlpilor"); 
    const noun_popcorn = new NounNeuter("popcorn", "popcorn", "popcorn", "popcornul", "popcornul", "popcornului", ""); 
    const noun_ringmaster = new NounMale("ringmaster", "director de circ", "directori de circ", "directorul de circ", "directorii de circ", "directorului de circ", "directorilor de circ"); 
    const noun_rollerCoaster = new NounNeuter("roller coaster", "montagne russes", "montagne russes-uri", "montagne russes-ul", "montagne russes-urile", "montagne russes-ului", "montagne russes-urilor"); // invariable plural 
    const noun_ropeLadder = new NounFemale("rope ladder", "scară de frânghie", "scări de frânghie", "scara de frânghie", "scările de frânghie", "scării de frânghie", "scărilor de frânghie"); 
    const noun_theFairground = new NounNeuter("the fairground", "târg", "târguri", "târgul", "târgurile", "târgului", "târgurilor"); 
    const noun_tightropeWalked = new NounMale("tightrope walker", "funambul", "funambuli", "funambulul", "funambuluii", "funambulului", "funambulilor"); 
    const noun_topHat = new NounNeuter("top hat", "joben", "jobene", "jobenul", "jobenele", "jobenului", "jobenurilor"); 
    const noun_trapeze = new NounNeuter("trapeze", "trapez", "trapeze", "trapezul", "trapezele", "trapezului", "trapezelor"); 
    const noun_unicyclist = new NounMale("unicyclist", "monociclist", "monocicliști", "monociclistul", "monocicliștii", "monociclistului", "monocicliștilor"); 

    setParentAndMultipleChildren(TheCircus, [
        noun_acrobat, noun_band, noun_bigWheel, noun_bowTieClown, noun_candyFloss, noun_carousel, noun_clown, noun_dodgems, noun_ghostTrain,
        noun_helterSkelter, noun_juggler, noun_pole, noun_popcorn, noun_ringmaster, noun_rollerCoaster, noun_ropeLadder, noun_theFairground,
        noun_tightropeWalked, noun_topHat, noun_trapeze, noun_unicyclist
    ])


    //#sports
    let Sports = new Theme("Sports", "Sporturile");
    setParentAndChild(wordclass_nouns, Sports)

    const noun_americanFootball = new NounNeuter("American football", "fotbal american", "", "fotbalul american", "", "fotbalului american", ""); 
    const noun_archery = new NounNeuter("archery", "tir cu arcul", "tiruri cu arcul", "tirul cu arcul", "tirurile cu arcul", "tirului cu arcul", "tirurilor cu arcul"); 
    const noun_badminton = new NounNeuter("badminton", "badminton", "", "badmintonul", "", "badmintonului", ""); 
    const noun_bait = new NounFemale("bait", "momeală", "momeli", "momeala", "momelele", "momelii", "momelelor"); 
    const noun_ball = new NounFemale("ball", "minge", "mingi", "mingea", "mingile", "mingii", "mingilor"); 
    const noun_baseball = new NounNeuter("baseball", "baseball", "", "baseballul", "", "baseballului", ""); 
    const noun_baseballBat = new NounFemale("baseball bat", "bâtă de baseball", "bâte de baseball", "bâta de baseball", "bâtele de baseball", "bâtei de baseball", "bâtelor de baseball"); 
    const noun_basketball = new NounNeuter("basketball", "baschet", "", "baschetul", "", "baschetului", ""); 
    const noun_changingRoom = new NounNeuter("changing room", "vestiar", "vestiare", "vestiarul", "vestiarele", "vestiarului", "vestiarelor"); 
    const noun_climbing = new NounNeuter("climbing", "alpinism", "alpinisme", "alpinismul", "alpinismele", "alpinismului", "alpinismelor"); 
    const noun_cricket = new NounNeuter("cricket", "crichet", "", "crichetul", "", "crichetului", ""); 
    const noun_dance = new NounNeuter("dance", "dans", "dansuri", "dansul", "dansurile", "dansului", "dansurilor"); 
    const noun_diving = new NounFemale("diving", "scufundare", "scufundări", "scufundarea", "scufundările", "scufundării", "scufundărilor"); 
    const noun_fishingRod = new NounNeuter("fishing rod", "undit", "", "unditul", "", "unditului", ""); 
    const noun_football = new NounNeuter("football", "fotbal", "", "fotbalul", "", "fotbalului", ""); 
    const noun_gymnastics = new NounFemale("gymnastics", "gimnastică", "", "gimnastica", "", "gimnasticii", ""); 
    const noun_handGliding = new NounNeuter("hang gliding", "zbor cu deltaplanul", "zboruri cu deltaplanul", "zborul cu deltaplanul", "zborurile cu deltaplanul", "zborului cu deltaplanul", "zborurilor cu deltaplanul"); 
    const noun_helmet = new NounFemale("helmet", "cască", "căști", "casca", "căștile", "căștii", "căștilor"); 
    const noun_horseRiding = new NounFemale("horse riding", "echitație", "", "echitația", "", "echitației", ""); 
    const noun_iceSkate = new NounFemale("ice skate", "patină", "patine", "patina", "patinele", "patinei", "patinelor"); 
    const noun_iceSkating = new NounNeuter("ice skating", "patinaj", "patinaje", "patinajul", "patinajele", "patinajului", "patinajelor"); 
    const noun_judo = new NounNeuter("judo", "judo", "", "judoul", "", "judoului", ""); 
    const noun_karate = new NounNeuter("karate", "karate", "", "karateul", "", "karateului", ""); 
    const noun_locker = new NounNeuter("locker", "dulap", "dulapuri", "dulapul", "dulapurile", "dulapului", "dulapurilor"); 
    const noun_race = new NounFemale("race", "cursă", "curse", "cursa", "cursele", "cursei", "curselor"); 
    const noun_rowing = new NounNeuter("rowing", "canotaj", "", "canotajul", "", "canotajului", ""); 
    const noun_rugby = new NounNeuter("rugby", "rugbi", "", "rugbiul", "", "rugbiului", ""); 
    const noun_ski = new NounNeuter("ski", "schi", "schiuri", "schiul", "schiurile", "schiului", "schiurilor"); 
    const noun_snowboarding = new NounNeuter("snowboarding", "snowboarding", "", "snowboardingul", "", "snowboardingului", ""); 
    const noun_sumoWrestling = new NounNeuter("sumo wrestling", "sumo", "", "sumoul", "", "sumoului", ""); 
    const noun_swimming = new NounNeuter("swimming", "înot", "", "înotul", "", "înotului", ""); 
    const noun_swimmingPool = new NounFemale("swimming pool", "piscină", "piscine", "piscina", "piscinele", "piscinei", "piscinelor"); 
    const noun_tableTennis = new NounNeuter("table tennis", "tenis de masă", "", "tenisul de masă", "", "tenisului de masă", ""); 
    const noun_target = new NounFemale("target", "țintă", "ținte", "ținta", "țintele", "țintei", "țintelor"); 
    const noun_tennis = new NounNeuter("tennis", "tenis", "", "tenisul", "", "tenisului", ""); 

    setParentAndMultipleChildren(Sports, [
        noun_americanFootball, noun_archery, noun_badminton, noun_bait, noun_ball, noun_baseball, noun_baseballBat, noun_basketball, noun_changingRoom,
        noun_climbing, noun_cricket, noun_dance, noun_diving, noun_fishingRod, noun_football, noun_gymnastics, noun_handGliding, noun_helmet,
        noun_horseRiding, noun_iceSkate, noun_iceSkating, noun_judo, noun_karate, noun_locker, noun_race, noun_rowing, noun_rugby, noun_ski,
        noun_snowboarding, noun_sumoWrestling, noun_swimming, noun_swimmingPool, noun_tableTennis, noun_target, noun_tennis
    ])

    //#Days #week #time
    let Time = new DataCard("Time", "Timp", "")
    setParentAndChild(wordclass_nouns, Time)

    // #relativeTime
    let RelativeTime = new Theme("Relative Time", "Timp Relativ"); 
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
    let TheMonths = new Theme("The Months", "Lunii"); 
    setParentAndChild(Time, TheMonths);

    const noun_month = new NounMale("month", "lună", "luni", "luna", "lunile", "lunii", "lunilor");
    const noun_january = new NounMale("january", "ianuarie", "", "", "", "", "");
    const noun_february = new NounMale("february", "februarie", "", "", "", "", "");
    const noun_march = new NounMale("march", "martie", "", "", "", "", "");
    const noun_april = new NounMale("april", "aprilie", "", "", "", "", "");
    const noun_may = new NounMale("may", "mai", "", "", "", "", "");
    const noun_june = new NounMale("june", "iunie", "", "", "", "", "");
    const noun_july = new NounMale("july", "iulie", "", "", "", "", "");
    const noun_august = new NounMale("august", "august", "", "", "", "", "");
    const noun_september = new NounMale("september", "septembrie", "", "", "", "", "");
    const noun_october = new NounMale("october", "octombrie", "", "", "", "", "");
    const noun_november = new NounMale("november", "noiembrie", "", "", "", "", "");
    const noun_december = new NounMale("december", "decembrie", "", "", "", "", "");

    setParentAndMultipleChildren(TheMonths, [
        noun_month, noun_january, noun_february, noun_march, noun_april, noun_may, noun_june, noun_july, noun_august, noun_september, noun_october, noun_november, noun_december
    ])



    // #seasons
    let Seasons = new Theme("Seasons", "Anotimpurile");
    setParentAndChild(Time, Seasons)

    const noun_spring = new NounFemale("spring", "primăvară", "primăveri", "primăvara", "primăverile", "primăverii", "primăverilor");
    const noun_autumn = new NounFemale("autumn", "toamnă", "toamne", "toamna", "toamnele", "toamnei", "toamnelor");
    const noun_summer = new NounFemale("summer", "vară", "veri", "vara", "verile", "verii", "verilor");
    const noun_winter = new NounFemale("winter", "iarnă", "ierni", "iarna", "iernele", "iernii", "iernelor");

    setParentAndMultipleChildren(Seasons, [
        noun_spring, noun_autumn, noun_summer, noun_winter
    ])


    // #weather
    let Weather = new Theme("The Weather", "Vremea");
    setParentAndChild(Time, Weather)

    const noun_clouds = new NounMale("cloud", "nor", "nori", "norul", "norii", "norului", "norilor");
    const noun_dew = new NounFemale("dew", "rouă", "", "roua", "", "rouei", "");
    const noun_earthquake = new NounNeuter("earthquake", "cutremur", "cutremure", "cutremurul", "cutremurele", "cutremurului", "cutremurelor");
    const noun_flood = new NounFemale("flood", "inundație", "inundații", "inundația", "inundațiile", "inundației", "inundațiilor");
    const noun_fog = new NounFemale("fog", "ceață", "cețuri", "ceața", "cețurile", "ceații", "cețurilor");
    const noun_forestFire = new NounNeuter("forest fire", "incendiu de pădure", "incendii de pădure", "incendiul de pădure", "incendiile de pădure", "incendiului de pădure", "incendiilor de pădure"); 
    const noun_frost = new NounFemale("frost", "brumă", "brume", "bruma", "brumele", "brumei", "brumelor"); 
    const noun_hurricane = new NounNeuter("hurricane", "uragan", "uragane", "uraganul", "uraganele", "uraganului", "uraganelor"); 
    const noun_lighting = new NounNeuter("lightning", "fulger", "fulgere", "fulgerul", "fulgerele", "fulgerului", "fulgerelor"); 
    const noun_mist = new NounFemale("mist", "ceață", "cețuri", "ceața", "cețurile", "ceații", "cețurilor"); 
    const noun_mudSlide = new NounFemale("mudslide", "alunecare de teren", "alunecări de teren", "alunecarea de teren", "alunecările de teren", "alunecării de teren", "alunecărilor de teren"); 
    const noun_rain = new NounFemale("rain", "ploaie", "ploi", "ploaia", "ploile", "ploii", "ploilor"); 
    const noun_rainbow = new NounNeuter("rainbow", "curcubeu", "curcubeie", "curcubeul", "curcubeiele", "curcubeului", "curcubeielor"); 
    const noun_sky = new NounNeuter("sky", "cer", "ceruri", "cerul", "cerurile", "cerului", "cerurilor"); 
    const noun_snow = new NounFemale("snow", "zăpadă", "zapezi", "zăpada", "zăpezile", "zăpezii", "zăpezilor"); 
    const noun_snowFall = new NounFemale("snowfall", "ninsoare", "ninsori", "ninsoarea", "ninsoarile", "ninsoarii", "ninsoarilor"); 
    const noun_snowStorm = new NounFemale("snowstorm", "furtună de zăpadă", "furtuni de zăpadă", "furtuna de zăpadă", "furtunile de zăpadă", "furtunii de zăpadă", "furtunilor de zăpadă"); 
    const noun_storm = new NounFemale("storm", "furtună", "furtuni", "furtuna", "furtunile", "furtunii", "furtunilor"); 
    const noun_typhoon = new NounNeuter("typhoon", "taifun", "taifunuri", "taifunul", "taifunurile", "taifunului", "taifunurilor"); 
    const noun_wind = new NounMale("wind", "vânt", "vânturi", "vântul", "vânturile", "vântului", "vânturilor"); 
    setParentAndMultipleChildren(Weather, [
        noun_clouds, noun_dew, noun_earthquake, noun_flood, noun_fog, noun_forestFire, noun_frost, noun_hurricane, noun_lighting,
        noun_mist, noun_mudSlide, noun_rain, noun_rainbow, noun_sky, noun_snow, noun_snowFall, noun_snowStorm, noun_storm, noun_typhoon, noun_wind
    ])


    // #specialdays #holidays
    let SpecialDays = new Theme("Special Days", "Zile de Sărbătoare");
    setParentAndChild(Time, SpecialDays)

    const noun_birthday = new NounFemale("birthday", "zi de naștere", "zile de naștere", "ziua de naștere", "zilele de naștere", "zilei de naștere", "zilelor de naștere"); 
    const noun_angel = new NounMale("angel", "înger", "îngeri", "îngerul", "îngerii", "îngerului", "îngerilor"); 
    const noun_anniversary = new NounMale("anniversary", "aniversare", "aniversări", "aniversarea", "aniversările", "aniversării", "aniversărilor"); 
    const noun_birthdayCard = new NounFemale("birthday card", "felicitare de zi de naștere", "felicitări de zi de naștere", "felicitarea de zi de naștere", "felicitările de zi de naștere", "felicitării de zi de naștere", "felicitărilor de zi de naștere"); 
    const noun_bouquet = new NounNeuter("bouquet", "buchet", "buchete", "buchetul", "buchetele", "buchetului", "buchetelor"); 
    const noun_bride = new NounFemale("bride", "mireasă", "mirese", "mireasa", "miresele", "miresei", "mireselor"); 
    const noun_bridegroom = new NounMale("bridegroom", "mire", "miri", "mirele", "mirii", "mirelui", "mirilor"); 
    const noun_bridesmaid = new NounFemale("bridesmaid", "domnișoară de onoare", "domnișoare de onoare", "domnișoara de onoare", "domnișoarele de onoare", "domnișoarei de onoare", "domnișoarelor de onoare"); 
    const noun_camera = new NounFemale("camera", "cameră foto", "camere foto", "camera foto", "camerele foto", "camerei foto", "camerelor foto"); 
    const noun_christmasDay = new NounFemale("Christmas Day", "ziua de Crăciun", "zile de Crăciun", "ziua de Crăciun", "zilele de Crăciun", "zilei de Crăciun", "zilelor de Crăciun"); 
    const noun_christmasTree = new NounMale("Christmas tree", "brad de Crăciun", "brazi de Crăciun", "bradul de Crăciun", "brazii de Crăciun", "bradului de Crăciun", "brazilor de Crăciun"); 
    const noun_date = new NounFemale("date (romantic)", "întâlnire", "întâlniri", "întâlnirea", "întâlnirile", "întâlnirii", "întâlnirilor"); 
    const noun_fatherChristmas = new NounMale("Father Christmas", "Moș Crăciun", "Moși Crăciun", "Moșul Crăciun", "Moșii Crăciun", "Moșului Crăciun", "Moșilor Crăciun"); 
    const noun_guest = new NounMale("guest", "invitat", "invitați", "invitatul", "invitații", "invitatului", "invitaților"); 
    const noun_holiday = new NounFemale("holiday", "vacanță", "vacanțe", "vacanța", "vacanțele", "vacanței", "vacanțelor"); 
    const noun_reindeer = new NounMale("reindeer", "ren", "reni", "renul", "renii", "renului", "renilor"); 
    const noun_sleigh = new NounNeuter("sleigh", "sanie", "sănii", "sania", "săniile", "săniei", "sănilor"); 
    const noun_valentinesDay = new NounFemale("Valentine's Day", "Ziua Îndrăgostiților", "Zile ale Îndrăgostiților", "Ziua Îndrăgostiților", "Zilele Îndrăgostiților", "Zilei Îndrăgostiților", "Zilelor Îndrăgostiților"); 
    const noun_weddingCake = new NounNeuter("wedding cake", "tort de nuntă", "torturi de nuntă", "tortul de nuntă", "torturile de nuntă", "tortului de nuntă", "torturilor de nuntă"); 
    const noun_weddingDay = new NounFemale("wedding day", "zi de nuntă", "zile de nuntă", "ziua de nuntă", "zilele de nuntă", "zilei de nuntă", "zilelor de nuntă"); 
    const noun_weddingRing = new NounFemale("wedding ring", "verighetă", "verighete", "verigheta", "verighetele", "verighetei", "verighetelor"); 


    setParentAndMultipleChildren(SpecialDays, [
        noun_birthday, noun_angel, noun_anniversary, noun_birthdayCard, noun_bouquet, noun_bride, noun_bridegroom, noun_bridesmaid, noun_camera,
        noun_christmasDay, noun_christmasTree, noun_date, noun_fatherChristmas, noun_guest, noun_holiday, noun_reindeer,
        noun_sleigh, noun_valentinesDay, noun_weddingCake, noun_weddingDay, noun_weddingRing
    ])

    //#days
    let DaysOfTheWeek = new Theme("Days (Of The Week)", "Zilele (Săptămânii)");
    setParentAndChild(Time, DaysOfTheWeek)

    const noun_calendar = new NounNeuter("calendar", "calendar", "calendare", "calendarul", "calendarele", "calendarului", "calendarelor");
    const noun_evening = new NounFemale("evening", "seară", "seri", "seara", "serile", "serii", "serilor");
    const noun_friday = new NounFemale("friday", "vineri", "vineri", "vinerea", "vinerile", "vinerii", "vinerilor");
    const noun_monday = new NounFemale("monday", "luni", "luni", "lunea", "lunile", "lunii", "lunilor");
    const noun_morning = new NounFemale("morning", "dimineață", "dimineți", "dimineața", "diminețile", "dimineții", "dimineților");
    const noun_night = new NounFemale("night", "noapte", "nopți", "noaptea", "nopțile", "nopții", "nopților");
    const noun_saturday = new NounFemale("saturday", "sâmbătă", "sâmbete", "sâmbăta", "sâmbetele", "sâmbetei", "sâmbetelor");
    const noun_sun = new NounMale("sun", "soare", "sori", "soarele", "sorii", "soarelui", "sorilor");
    const noun_sunday = new NounFemale("sunday", "duminică", "duminici", "duminica", "duminicile", "duminicii", "duminicilor");
    const noun_thursday = new NounFemale("thursday", "joi", "joi", "joia", "joile", "joii", "joilor");
    const noun_tuesday = new NounFemale("tuesday", "marți", "marți", "marțea", "marțile", "marții", "marților");
    const noun_wednesday = new NounFemale("wednesday", "miercuri", "miercuri", "miercurea", "miercurile", "miercurii", "miercurilor");

    setParentAndMultipleChildren(DaysOfTheWeek, [
        noun_calendar, noun_evening, noun_friday, noun_monday, noun_morning, noun_night, noun_saturday, noun_sun,
        noun_sunday, noun_thursday, noun_tuesday, noun_wednesday
    ])


    // #Measurements
    let Measurements = new Theme("Measurements", "Măsurători");
    setParentAndChild(wordclass_nouns, Measurements);

    const noun_celsius = new NounNeuter("celsius", "grad Celsius", "grade Celsius", "gradul Celsius", "gradele Celsius", "gradului Celsius", "gradelor Celsius");
    const noun_centimeter = new NounMale("centimeter", "centimetru", "centimetri", "centimetrul", "centimetrii", "centimetrului", "centimetrilor");
    const noun_diameter = new NounNeuter("diameter", "diametru", "diametre", "diametrul", "diametrele", "diametrului", "diametrelor");
    const noun_fahrenheit = new NounNeuter("fahrenheit", "grad Fahrenheit", "grade Fahrenheit", "gradul Fahrenheit", "gradele Fahrenheit", "gradului Fahrenheit", "gradelor Fahrenheit");
    const noun_gram = new NounNeuter("gram", "gram", "grame", "gramul", "gramele", "gramului", "gramelor");
    const noun_hour = new NounFemale("hour", "oră", "ore", "ora", "orele", "orei", "orelor");
    const noun_kilogram = new NounNeuter("kilogram", "kilogram", "kilograme", "kilogramul", "kilogramele", "kilogramului", "kilogramelor");
    const noun_kilometer = new NounMale("kilometer", "kilometru", "kilometri", "kilometrul", "kilometrii", "kilometrului", "kilometrilor");
    const noun_kilowatt = new NounMale("kilowatt", "kilowatt", "kilowați", "kilowattul", "kilowații", "kilowattului", "kilowaților");
    const noun_liter = new NounMale("liter", "litru", "litri", "litrul", "litrii", "litrului", "litrilor");
    const noun_meter = new NounMale("meter", "metru", "metri", "metrul", "metrii", "metrului", "metrilor");
    const noun_milliliter = new NounMale("milliliter", "mililitru", "mililitri", "mililitrul", "mililitrii", "mililitrului", "mililitrilor");
    const noun_minute = new NounNeuter("minute", "minut", "minute", "minutul", "minutele", "minutului", "minutelor");
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
    let miscellaneous = new Theme("Miscellaneous", "Diverse"); 
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
    let Space = new Theme("Space", "Spațiu"); 
    setParentAndChild(wordclass_nouns, Space)

    const noun_astronaut = new NounMale("astronaut", "astronaut", "astronauți", "astronautul", "astronauții", "astronautului", "astronauților"); 
    const noun_atmosphere = new NounFemale("atmosphere", "atmosferă", "atmosfere", "atmosfera", "atmosferele", "atmosferei", "atmosferelor"); 
    const noun_extraterrestrial_m = new NounMale("extraterrestrial (male)", "extraterestru", "extratereștri", "extraterestrul", "extratereștrii", "extraterestrului", "extratereștrilor"); 
    const noun_extraterrestrial_f = new NounFemale("extraterrestrial (female)", "extraterestră", "extraterestre", "extraterestra", "extraterestrele", "extraterestrei", "extraterestrelor"); 
    const noun_fullMoon = new NounFemale("full moon", "lună plină", "luni pline", "luna plină", "lunile pline", "lunii pline", "lunilor pline"); 
    const noun_galaxy = new NounFemale("galaxy", "galaxie", "galaxii", "galaxia", "galaxiile", "galaxiei", "galaxiilor"); 
    const noun_lunarEclipse = new NounFemale("lunar eclipse", "eclipsă de lună", "eclipse de lună", "eclipsa de lună", "eclipsele de lună", "eclipsei de lună", "eclipselor de lună"); 
    const noun_meteor = new NounMale("meteor", "meteor", "meteori", "meteorul", "meteorii", "meteorului", "meteorilor"); 
    const noun_moon = new NounFemale("moon", "lună", "luni", "luna", "lunile", "lunii", "lunilor"); 
    const noun_orbit = new NounFemale("orbit", "orbită", "orbite", "orbita", "orbitele", "orbitei", "orbitelor"); 
    const noun_planet = new NounFemale("planet", "planetă", "planete", "planeta", "planetele", "planetei", "planetelor"); 
    const noun_rocket = new NounFemale("rocket", "rachetă", "rachete", "racheta", "rachetele", "rachetei", "rachetelor"); 
    const noun_satellite = new NounMale("satellite", "satelit", "sateliți", "satelitul", "sateliții", "satelitului", "sateliților"); 
    const noun_solarEclipse = new NounFemale("solar eclipse", "eclipsă solară", "eclipse solare", "eclipsa solară", "eclipsele solare", "eclipsei solare", "eclipselor solare"); 
    const noun_solarSystem = new NounNeuter("solar system", "sistem solar", "sisteme solare", "sistemul solar", "sistemele solare", "sistemului solar", "sistemelor solare"); 
    const noun_spaceship = new NounFemale("spaceship", "navă spațială", "nave spațiale", "nava spațială", "navele spațiale", "navei spațiale", "navelor spațiale"); 
    const noun_star = new NounFemale("star", "stea", "stele", "steaua", "stelele", "stelei", "stelelor"); 
    const noun_telescope = new NounNeuter("telescope", "telescop", "telescoape", "telescopul", "telescoapele", "telescopului", "telescoapelor"); 
    const noun_universe = new NounNeuter("universe", "univers", "universuri", "universul", "universurile", "universului", "universurilor"); 


    setParentAndMultipleChildren(Space, [
        noun_astronaut, noun_atmosphere, noun_extraterrestrial_m, noun_extraterrestrial_f, noun_fullMoon, noun_galaxy, noun_lunarEclipse, noun_meteor, noun_moon, noun_orbit, noun_planet,
        noun_rocket, noun_satellite, noun_solarEclipse, noun_solarSystem, noun_spaceship, noun_star, noun_telescope, noun_universe,
    ])


    // #school #atschool
    let AtSchool = new Theme("At School", "La Şcoală");
    setParentAndChild(wordclass_nouns, AtSchool)

    const noun_alphabet = new NounNeuter("alphabet", "alfabet", "alfabete", "alfabetul", "alfabetele", "alfabetului", "alfabetelor"); 
    const noun_aquarium = new NounNeuter("aquarium", "acvariu", "acvarii", "acvariul", "acvariile", "acvariului", "acvariilor"); 
    const noun_badge = new NounNeuter("badge", "insignă", "insigne", "insigna", "insignele", "insignei", "insignelor"); 
    const noun_blindCurtain = new NounFemale("blind/curtain", "perdea", "perdele", "perdeaua", "perdelele", "perdelei", "perdelelor"); 
    const noun_board = new NounFemale("board", "tablă", "table", "tabla", "tablele", "tablei", "tablelor"); 
    const noun_book = new NounFemale("book", "carte", "cărți", "cartea", "cărțile", "cărții", "cărților"); 
    const noun_box = new NounFemale("box", "cutie", "cutii", "cutia", "cutiile", "cutiei", "cutiilor"); 
    const noun_calculation = new NounFemale("calculation", "calculație", "calculații", "calculația", "calculațiile", "calculației", "calculațiilor"); 
    const noun_chalk = new NounFemale("chalk", "cretă", "crete", "creta", "cretele", "cretei", "cretelor"); 
    const noun_clay = new NounFemale("clay", "lut", "luturi", "lutul", "luturile", "lutului", "luturilor"); 
    const noun_crayon = new NounNeuter("crayon", "creion colorat", "creioane colorate", "creionul colorat", "creioanele colorate", "creionului colorat", "creioanelor colorate"); 
    const noun_desk = new NounNeuter("desk", "birou", "birouri", "biroul", "birourile", "biroului", "birourilor"); 
    const noun_doorHandle = new NounFemale("door handle", "clanță", "clanțe", "clanța", "clanțele", "clanței", "clanțelor"); 
    const noun_drawing = new NounNeuter("drawing", "desen", "desene", "desenul", "desenele", "desenului", "desenelor"); 
    const noun_easel = new NounNeuter("easel", "șevalet", "șevalete", "șevaletul", "șevaletele", "șevaletului", "șevaletelor"); 
    const noun_eraserRubber = new NounFemale("eraser", "gumă", "gume", "guma", "gumele", "gumei", "gumelor"); 
    const noun_feltTipPen = new NounNeuter("felt-tip pen", "marker", "markere", "markerul", "markerele", "markerului", "markerelor"); 
    const noun_globe = new NounNeuter("globe", "glob pământesc", "globuri pământești", "globul pământesc", "globurile pământești", "globului pământesc", "globurilor pământești"); 
    const noun_glue = new NounNeuter("glue", "lipici", "lipiciuri", "lipiciul", "lipiciurile", "lipiciului", "lipiciurilor"); 
    const noun_map_ = new NounFemale("map", "hartă", "hărți", "harta", "hărțile", "hărții", "hărților"); 
    const noun_notebook = new NounNeuter("notebook", "caiet", "caiete", "caietul", "caietele", "caietului", "caietelor"); 
    const noun_paintBrush = new NounFemale("paint brush", "pensulă", "pensule", "pensula", "pensulele", "pensulei", "pensulelor"); 
    const noun_paper = new NounFemale("paper", "hârtie", "hârtii", "hârtia", "hârtiile", "hârtiei", "hârtiilor"); 
    const noun_pen = new NounNeuter("pen", "stilou", "stilouri", "stiloul", "stilourile", "stiloului", "stilourilor"); 
    const noun_pencil = new NounNeuter("pencil", "creion", "creioane", "creionul", "creioanele", "creionului", "creioanelor"); 
    const noun_photograph = new NounFemale("photograph", "fotografie", "fotografii", "fotografia", "fotografiile", "fotografiei", "fotografiilor"); 
    const noun_plant = new NounFemale("plant", "plantă", "plante", "planta", "plantele", "plantei", "plantelor"); 
    const noun_ruler = new NounFemale("ruler", "riglă", "rigle", "rigla", "riglele", "riglei", "riglelor"); 
    const noun_scissors = new NounFemale("scissors", "foarfecă", "foarfeci", "foarfeca", "foarfecile", "foarfecii", "foarfecelor"); 
    const noun_wastePaperBin = new NounNeuter("waste paper bin", "coș de gunoi", "coșuri de gunoi", "coșul de gunoi", "coșurile de gunoi", "coșului de gunoi", "coșurilor de gunoi"); 

    setParentAndMultipleChildren(AtSchool, [
        noun_alphabet, noun_aquarium, noun_badge, noun_blindCurtain, noun_board, noun_book, noun_box, noun_calculation, noun_chalk, noun_clay, noun_crayon, noun_desk,
        noun_doorHandle, noun_drawing, noun_easel, noun_eraserRubber, noun_feltTipPen, noun_globe, noun_glue, noun_map_, noun_notebook, noun_paintBrush, noun_paper,
        noun_pen, noun_pencil, noun_photograph, noun_plant, noun_ruler, noun_scissors, noun_wastePaperBin,
    ])


    // #emergency services
    let TheEmergencyServices = new DataCard("The Emergency Services", "Serviciile de Urgență", ""); 
    setParentAndChild(wordclass_nouns, TheEmergencyServices)

    // #police #thepoliec
    let ThePolice = new Theme("The Police", "Poliția");
    setParentAndChild(TheEmergencyServices, ThePolice);

    const noun_case = new NounNeuter("case", "caz", "cazuri", "cazul", "cazurile", "cazului", "cazurilor"); 
    const noun_burglar = new NounMale("burglar", "spărgător", "spărgători", "spărgătorul", "spărgătorii", "spărgătorului", "spărgătorilor"); 
    const noun_court = new NounFemale("court", "instanță", "instanțe", "instanța", "instanțele", "instanței", "instanțelor"); 
    const noun_crime = new NounFemale("crime", "crimă", "crime", "crima", "crimele", "crimei", "crimelor"); 
    const noun_defendant = new NounMale("defendant", "inculpat", "inculpați", "inculpatul", "inculpații", "inculpatului", "inculpaților"); 
    const noun_motive = new NounNeuter("motive", "motiv", "motive", "motivul", "motivele", "motivului", "motivelor"); 
    const noun_murder = new NounNeuter("murder", "omor", "omoruri", "omorul", "omorurile", "omorului", "omorurilor"); 
    const noun_offense = new NounFemale("offense", "infracțiune", "infracțiuni", "infracțiunea", "infracțiunile", "infracțiunii", "infracțiunilor"); 
    const noun_suspect_m = new NounMale("suspect (male)", "suspect", "suspecți", "suspectul", "suspecții", "suspectului", "suspecților"); 
    const noun_suspect_f = new NounFemale("suspect (female)", "suspectă", "suspecte", "suspecta", "suspectele", "suspectei", "suspectelor"); 
    const noun_victim = new NounFemale("victim", "victimă", "victime", "victima", "victimele", "victimei", "victimelor"); 
    const noun_witness = new NounMale("witness", "martor", "martori", "martorul", "martorii", "martorului", "martorilor"); 

    setParentAndMultipleChildren(ThePolice, [
        noun_case, noun_burglar, noun_court, noun_crime, noun_defendant, noun_motive, noun_murder, noun_offense, noun_suspect_m, noun_suspect_f, noun_victim, noun_witness,
    ])


    // #hospital #thehospital / #doctor #thedoctor
    let TheHospitalAndTheDoctor = new Theme("The Hospital and The Doctor", "Spitalul ș Doctorul");
    setParentAndChild(TheEmergencyServices, TheHospitalAndTheDoctor)

    const noun_backAche = new NounFemale("backache", "durere de spate", "dureri de spate", "durerea de spate", "durerile de spate", "durerii de spate", "durerilor de spate"); 
    const noun_bandage = new NounNeuter("bandage", "bandaj", "bandaje", "bandajul", "bandajele", "bandajului", "bandajelor"); 
    const noun_bodyTemperature = new NounFemale("body temperature", "temperatură corporală", "temperaturi corporale", "temperatura corporală", "temperaturile corporale", "temperaturii corporale", "temperaturilor corporale"); 
    const noun_cast = new NounNeuter("cast", "gips", "gipsuri", "gipsul", "gipsurile", "gipsului", "gipsurilor"); 
    const noun_cottonWool = new NounFemale("cotton wool", "vată", "", "vata", "", "vătii", ""); 
    const noun_crutch = new NounFemale("crutch", "cârjă", "cârje", "cârja", "cârjele", "cârjei", "cârjelor"); 
    const noun_curtain = new NounFemale("curtain", "perdea", "perdele", "perdeaua", "perdelele", "perdelei", "perdelelor"); 
    const noun_diabetes = new NounNeuter("diabetes", "diabet", "diabeturi", "diabetul", "diabeturile", "diabetului", "diabetelor"); 
    const noun_diarrhea = new NounFemale("diarrhea", "diaree", "diarei", "diareea", "diareile", "diareii", "diareilor"); 
    const noun_emergency = new NounFemale("emergency", "urgență", "urgențe", "urgența", "urgențele", "urgenței", "urgențelor"); 
    const noun_fever = new NounFemale("fever", "febra", "", "febra", "", "febrei", ""); 
    const noun_flu = new NounFemale("flu", "gripă", "gripe", "gripa", "gripele", "gripei", "gripelor"); 
    const noun_foodPoisoning = new NounFemale("food poisoning", "toxiinfecție alimentară", "toxiinfecții alimentare", "toxiinfecția alimentară", "toxiinfecțiile alimentare", "toxiinfecției alimentare", "toxiinfecțiilor alimentare"); 
    const noun_greetingsCard = new NounFemale("greetings card", "felicitare", "felicitări", "felicitarea", "felicitările", "felicitării", "felicitărilor"); 
    const noun_gumMouth = new NounFemale("gum (mouth)", "gingie", "gingii", "gingia", "gingiile", "gingiei", "gingiilor"); 
    const noun_headache = new NounFemale("headache", "durere de cap", "dureri de cap", "durerea de cap", "durerile de cap", "durerii de cap", "durerilor de cap"); 
    const noun_lift = new NounNeuter("lift", "lift", "lifturi", "liftul", "lifturile", "liftului", "lifturilor"); 
    const noun_medic = new NounMale("medic", "medic", "medici", "medicul", "medicii", "medicului", "medicilor"); 
    const noun_medicalAssistant = new NounMale("medical assistant", "asistent medical", "asistenți medicali", "asistentul medical", "asistenții medicali", "asistentului medical", "asistenților medicali"); 
    const noun_medicine = new NounFemale("medicine", "medicină", "medicini", "medicina", "medicinile", "medicinii", "medicinilor"); 
    const noun_operation = new NounFemale("operation", "operație", "operații", "operația", "operațiile", "operației", "operațiilor"); 
    const noun_painkiller = new NounNeuter("painkiller", "analgezic", "analgezice", "analgezicul", "analgezicele", "analgezicului", "analgezicelor"); 
    const noun_patient = new NounMale("patient", "pacient", "pacienți", "pacientul", "pacienții", "pacientului", "pacienților"); 
    const noun_pill = new NounFemale("pill", "pastilă", "pastile", "pastila", "pastilele", "pastilei", "pastilelor"); 
    const noun_plaster = new NounNeuter("plaster", "plasture", "plasturi", "plasturele", "plasturii", "plasturelui", "plasturilor"); 
    const noun_stomachAche = new NounFemale("stomach ache", "durere de stomac", "dureri de stomac", "durerea de stomac", "durerile de stomac", "durerii de stomac", "durerilor de stomac"); 
    const noun_symptom = new NounNeuter("symptom", "simptom", "simptome", "simptomul", "simptomele", "simptomului", "simptomelor"); 
    const noun_syringe = new NounFemale("syringe", "seringă", "seringi", "seringa", "seringile", "seringii", "seringilor"); 
    const noun_thermometer = new NounNeuter("thermometer", "termometru", "termometre", "termometrul", "termometrele", "termometrului", "termometrelor"); 
    const noun_tissue = new NounNeuter("tissue", "șervețel", "șervețele", "șervețelul", "șervețelele", "șervețelului", "șervețelelor"); 
    const noun_treatment = new NounNeuter("treatment", "tratament", "tratamente", "tratamentul", "tratamentele", "tratamentului", "tratamentelor"); 
    const noun_waitingRoom = new NounFemale("waiting room", "sală de așteptare", "săli de așteptare", "sala de așteptare", "sălile de așteptare", "sălii de așteptare", "sălilor de așteptare"); 
    const noun_walkingStick = new NounNeuter("walking stick", "baston", "bastoane", "bastonul", "bastoanele", "bastonului", "bastoanelor"); 
    const noun_wheelchair = new NounNeuter("wheelchair", "scaun cu rotile", "scaune cu rotile", "scaunul cu rotile", "scaunele cu rotile", "scaunului cu rotile", "scaunelor cu rotile"); 


    setParentAndMultipleChildren(TheHospitalAndTheDoctor, [
        noun_backAche, noun_bandage, noun_bodyTemperature, noun_cast, noun_cottonWool, noun_crutch, noun_curtain, noun_diabetes, noun_diarrhea,
        noun_emergency, noun_fever, noun_flu, noun_foodPoisoning, noun_greetingsCard, noun_gumMouth, noun_headache, noun_lift, noun_medic,
        noun_medicalAssistant, noun_medicine, noun_operation, noun_painkiller, noun_patient, noun_pill, noun_plaster, noun_stomachAche, noun_symptom,
        noun_syringe, noun_thermometer, noun_tissue, noun_treatment, noun_waitingRoom, noun_walkingStick, noun_wheelchair,
    ])


    // #thebeach #beach #seaside
    let TheBeach = new Theme("The Beach", "Plaja");
    setParentAndChild(wordclass_nouns, TheBeach)

    const noun_beach = new NounFemale("beach", "plajă", "plaje", "plaja", "plajele", "plajei", "plajelor"); 
    const noun_bucket = new NounFemale("bucket", "găleată", "găleți", "găleata", "gălețile", "găleții", "găleților"); 
    const noun_canoe = new NounFemale("canoe", "canoe", "canoe", "canoea", "canoele", "canoei", "canoelor"); 
    const noun_cliff = new NounFemale("cliff", "stâncă", "stânci", "stânca", "stâncile", "stâncii", "stâncilor"); 
    const noun_deckchair = new NounNeuter("deckchair", "șezlong", "șezlonguri", "șezlongul", "șezlongurile", "șezlongului", "șezlongurilor"); 
    const noun_fishingBoat = new NounFemale("fishing boat", "barcă de pescuit", "bărci de pescuit", "barca de pescuit", "bărcile de pescuit", "bărcii de pescuit", "bărcilor de pescuit"); 
    const noun_fishingNet = new NounFemale("fishing net", "plasă de pescuit", "plase de pescuit", "plasa de pescuit", "plasele de pescuit", "plasei de pescuit", "plaselor de pescuit"); 
    const noun_flag = new NounNeuter("flag", "steag", "steaguri", "steagul", "steagurile", "steagului", "steagurilor"); 
    const noun_island = new NounFemale("island", "insulă", "insule", "insula", "insulele", "insulei", "insulelor"); 
    const noun_lighthouse = new NounNeuter("lighthouse", "far", "faruri", "farul", "farurile", "farului", "farurilor"); 
    const noun_motorBoat = new NounFemale("motor boat", "barcă cu motor", "bărci cu motor", "barca cu motor", "bărcile cu motor", "bărcii cu motor", "bărcilor cu motor"); 
    const noun_paddle = new NounFemale("paddle", "pagaie", "pagaie", "pagaia", "pagaiele", "pagaiei", "pagaielor"); 
    const noun_pebble = new NounFemale("pebble", "pietricică", "pietricele", "pietricica", "pietricelele", "pietricelei", "pietricelelor"); 
    const noun_rope = new NounFemale("rope", "frânghie", "frânghii", "frânghia", "frânghiile", "frânghiei", "frânghiilor"); 
    const noun_rowingBoat = new NounFemale("rowing boat", "barcă cu vâsle", "bărci cu vâsle", "barca cu vâsle", "bărcile cu vâsle", "bărcii cu vâsle", "bărcilor cu vâsle"); 
    const noun_sailingBoat = new NounNeuter("sailing boat", "velier", "veliere", "velierul", "velierele", "velierului", "velierelor"); 
    const noun_sandcastle = new NounNeuter("sandcastle", "castel de nisip", "castele de nisip", "castelul de nisip", "castelele de nisip", "castelului de nisip", "castelelor de nisip"); 
    const noun_sea = new NounFemale("sea", "mare", "mări", "marea", "mările", "mării", "mărilor"); 
    const noun_seaweed = new NounFemale("seaweed", "alge marine", "alge marine", "alga marină", "algele marine", "algei marine", "algelor marine"); 
    const noun_shell = new NounFemale("shell", "scoică", "scoici", "scoica", "scoicile", "scoicii", "scoicilor"); 
    const noun_ship = new NounFemale("ship", "navă", "nave", "nava", "navele", "navei", "navelor"); 
    const noun_spade = new NounFemale("spade", "lopată", "lopeți", "lopata", "lopetile", "lopății", "lopetelor"); 
    const noun_suncream = new NounFemale("suncream", "cremă de protecție solară", "creme de protecție solară", "crema de protecție solară", "cremele de protecție solară", "cremei de protecție solară", "cremelor de protecție solară"); 
    const noun_umbrella = new NounFemale("umbrella", "umbrelă", "umbrele", "umbrela", "umbrelele", "umbrei", "umbrelelor"); 
    const noun_wave = new NounNeuter("wave", "val", "valuri", "valul", "valurile", "valului", "valurilor"); 

    setParentAndMultipleChildren(TheBeach, [
        noun_beach, noun_bucket, noun_canoe, noun_cliff, noun_deckchair, noun_fishingBoat, noun_fishingNet, noun_flag, noun_island, noun_lighthouse,
        noun_motorBoat, noun_paddle, noun_pebble, noun_rope, noun_rowingBoat, noun_sailingBoat, noun_sandcastle, noun_sea, noun_seaweed, noun_shell,
        noun_ship, noun_spade, noun_suncream, noun_umbrella, noun_wave,
    ])

    // #thefarm #farm
    let TheFarm = new Theme("The Farm", "Ferma");
    setParentAndChild(wordclass_nouns, TheFarm)

    const noun_haystack = new NounFemale("haystack", "căpiță", "căpițe", "căpița", "căpițele", "căpiței", "căpițelor"); 
    const noun_barn = new NounNeuter("barn", "grânar", "grânare", "grânarul", "grânarele", "grânarului", "grânarelor"); 
    const noun_cart = new NounNeuter("cart", "car", "care", "carul", "carele", "carului", "carelor"); 
    const noun_chickenShed = new NounNeuter("chicken shed", "coteț de găini", "cotețe de găini", "cotețul de găini", "cotețele de găini", "cotețului de găini", "cotețelor de găini"); 
    const noun_farmhouse = new NounFemale("farmhouse", "casă de fermă", "case de fermă", "casa de fermă", "casele de fermă", "casei de fermă", "caselor de fermă"); 
    const noun_field = new NounNeuter("field", "câmp", "câmpuri", "câmpul", "câmpurile", "câmpului", "câmpurilor"); 
    const noun_hay = new NounNeuter("hay", "fân", "fânuri", "fânul", "fânurile", "fânului", "fânurilor"); 
    const noun_hayloft = new NounNeuter("hayloft", "pod de fân", "poduri de fân", "podul de fân", "podurile de fân", "podului de fân", "podurilor de fân"); 
    const noun_mud = new NounNeuter("mud", "noroi", "noroaie", "noroiul", "noroaiele", "noroiului", "noroaielor"); 
    const noun_orchard = new NounNeuter("orchard", "livadă", "livezi", "livada", "livezile", "livezii", "livezilor"); 
    const noun_pigsty = new NounNeuter("pigsty", "cocină", "cocini", "cocina", "cocinele", "cocinei", "cocinelor"); 
    const noun_plough = new NounNeuter("plough", "plug", "pluguri", "plugul", "plugurile", "plugului", "plugurilor"); 
    const noun_pond = new NounNeuter("pond", "iaz", "iazuri", "iazul", "iazurile", "iazului", "iazurilor"); 
    const noun_saddle = new NounFemale("saddle", "șa", "șei", "șaua", "șeile", "șelii", "șelilor"); 
    const noun_scarecrow = new NounFemale("scarecrow", " sperietoare de ciori", "sperietori de ciori", "sperietoarea de ciori", "sperietorile de ciori", "sperietorii de ciori", "sperietorilor de ciori"); 
    const noun_stable = new NounNeuter("stable", "grajd", "grajduri", "grajdul", "grajdurile", "grajdului", "grajdurilor"); 
    const noun_strawBale = new NounMale("straw bale", "balot de paie", "baloți de paie", "balotul de paie", "baloții de paie", "balotului de paie", "baloților de paie"); 
    const noun_tractor = new NounNeuter("tractor", "tractor", "tractoare", "tractorul", "tractoarele", "tractorului", "tractoarelor"); 

    setParentAndMultipleChildren(TheFarm, [
        noun_haystack, noun_barn, noun_cart, noun_chickenShed, noun_farmhouse, noun_field, noun_hay, noun_hayloft, noun_mud, noun_orchard, 
        noun_pigsty, noun_plough, noun_pond, noun_saddle, noun_scarecrow, noun_stable, noun_strawBale, noun_tractor, 
    ])

    //#thepark #park
    let ThePark = new Theme("The Park", "Parcul");
    setParentAndChild(wordclass_nouns, ThePark)

    const noun_bush = new NounNeuter("bush", "tufiș", "tufișuri", "tufișul", "tufișurile", "tufișului", "tufișurilor"); 
    const noun_earth = new NounNeuter("earth", "pământ", "pământuri", "pământul", "pământurile", "pământului", "pământurilor"); 
    const noun_fenceRailing = new NounFemale("fence railing", "balustradă", "balustrade", "balustrada", "balustradele", "balustradei", "balustradelor"); 
    const noun_flowerBed = new NounNeuter("flower bed", "rond de flori", "ronduri de flori", "rondul de flori", "rondurile de flori", "rondului de flori", "rondurilor de flori"); 
    const noun_gate = new NounFemale("gate", "poartă", "porți", "poarta", "porțile", "porții", "porților"); 
    const noun_kite = new NounNeuter("kite", "zmeu", "zmeie", "zmeul", "zmeiele", "zmeului", "zmeielor"); 
    const noun_leash = new NounFemale("leash", "lesă", "lese", "lesa", "lesele", "lesei", "leselor"); 
    const noun_parkSwing = new NounFemale("park swing", "leagăn", "leagăne", "leagănul", "leagănele", "leagănului", "leagănelor"); 
    const noun_picnic = new NounNeuter("picnic", "picnic", "picnicuri", "picnicul", "picnicurile", "picnicului", "picnicurilor"); 
    const noun_puddle = new NounFemale("puddle", "baltă", "balți", "balta", "balțile", "balții", "balților"); 
    const noun_sandpit = new NounFemale("sandpit", "groapă de nisip", "gropi de nisip", "groapa de nisip", "gropile de nisip", "gropii de nisip", "gropilor de nisip"); 
    const noun_seesaw = new NounNeuter("seesaw", "balansoar", "balansoare", "balansoarul", "balansoarele", "balansoarului", "balansoarelor"); 
    const noun_skippingRope = new NounFemale("skipping rope", "coardă de sărit", "coarde de sărit", "coarda de sărit", "coardele de sărit", "coardei de sărit", "coardelor de sărit"); 
    const noun_slide = new NounFemale("slide", "tobogan", "tobogane", "toboganul", "toboganele", "toboganului", "toboganelor"); 
    const noun_string = new NounFemale("string", "sfoară", "sfori", "sfoara", "sforile", "sforii", "sforilor"); 

    setParentAndMultipleChildren(ThePark, [
        noun_bush, noun_earth, noun_fenceRailing, noun_flowerBed, noun_gate, noun_kite, noun_leash, noun_parkSwing, noun_picnic, noun_puddle, noun_sandpit, 
        noun_seesaw, noun_skippingRope, noun_slide, noun_string, 
    ])
    
    //#thestreet #street
    let TheStreet = new Theme("The Street", "Strada"); 
    setParentAndChild(wordclass_nouns, TheStreet)

    const noun_ambulance = new NounFemale("ambulance", "ambulanță", "ambulanțe", "ambulanța", "ambulanțele", "ambulanței", "ambulanțelor"); 
    const noun_cafe = new NounFemale("cafe", "cafenea", "cafenele", "cafeneaua", "cafenelele", "cafenelei", "cafenelelor"); 
    const noun_cinema = new NounNeuter("cinema", "cinematograf", "cinematografe", "cinematograful", "cinematografele", "cinematografului", "cinematografelor"); 
    const noun_digger = new NounNeuter("digger", "excavator", "excavatoare", "excavatorul", "excavatoarele", "excavatorului", "excavatoarelor"); 
    const noun_factory = new NounFemale("factory", "fabrică", "fabrici", "fabrica", "fabricile", "fabricii", "fabricilor"); 
    const noun_fireEngine = new NounFemale("fire engine", "mașină de pompieri", "mașini de pompieri", "mașina de pompieri", "mașinile de pompieri", "mașinii de pompieri", "mașinilor de pompieri"); 
    const noun_flatBlock = new NounNeuter("flat block", "bloc de locuințe", "blocuri de locuințe", "blocul de locuințe", "blocurile de locuințe", "blocului de locuințe", "blocurilor de locuințe"); 
    const noun_hole = new NounNeuter("hole", "groapă", "gropi", "groapa", "gropile", "gropii", "gropilor"); 
    const noun_hotel = new NounNeuter("hotel", "hotel", "hoteluri", "hotelul", "hotelurile", "hotelului", "hotelurilor"); 
    const noun_house = new NounFemale("house", "casă", "case", "casa", "casele", "casei", "caselor"); 
    const noun_jackHammer = new NounNeuter("jackhammer", "pichamăr", "pichamere", "pichamărul", "pichamerele", "pichamărului", "pichamerelor"); 
    const noun_lampPost = new NounMale("lamp post", "stâlp de iluminat", "stâlpi de iluminat", "stâlpul de iluminat", "stâlpii de iluminat", "stâlpului de iluminat", "stâlpilor de iluminat"); 
    const noun_lorry = new NounNeuter("lorry", "camion", "camioane", "camionul", "camioanele", "camionului", "camioanelor"); 
    const noun_market = new NounFemale("market", "piață", "piețe", "piața", "piețele", "pieței", "piețelor"); 
    const noun_pavement = new NounNeuter("pavement", "trotuar", "trotuare", "trotuarul", "trotuarele", "trotuarului", "trotuarelor"); 
    const noun_pipe = new NounFemale("pipe", "țeavă", "țevi", "țeava", "țevile", "țevii", "țevilor"); 
    const noun_playground = new NounNeuter("playground", "loc de joacă", "locuri de joacă", "locul de joacă", "locurile de joacă", "locului de joacă", "locurilor de joacă"); 
    const noun_policeCar = new NounFemale("police car", "mașină de poliție", "mașini de poliție", "mașina de poliție", "mașinile de poliție", "mașinii de poliție", "mașinilor de poliție"); 
    const noun_roof = new NounNeuter("roof", "acoperiș", "acoperișuri", "acoperișul", "acoperișurile", "acoperișului", "acoperișurilor"); 
    const noun_shoeShop = new NounNeuter("shoe shop", "magazin de pantofi", "magazine de pantofi", "magazinul de pantofi", "magazinele de pantofi", "magazinului de pantofi", "magazinelor de pantofi"); 
    const noun_shop = new NounNeuter("shop", "magazin", "magazine", "magazinul", "magazinele", "magazinului", "magazinelor"); 
    const noun_statue = new NounFemale("statue", "statuie", "statui", "statuia", "statuile", "statuiei", "statuielor"); 
    const noun_step = new NounFemale("step", "treaptă", "trepte", "treapta", "treptele", "treptei", "treptelor"); 
    const noun_trailer = new NounFemale("trailer", "remorcă", "remorci", "remorca", "remorcile", "remorcii", "remorcilor"); 
    const noun_van = new NounFemale("van", "dubă", "dube", "duba", "dubele", "dubei", "dubelor"); 
    const noun_zebraCrossing = new NounFemale("zebra crossing", "trecere de pietoni", "treceri de pietoni", "trecerea de pietoni", "trecerile de pietoni", "trecerii de pietoni", "trecerilor de pietoni"); 

  
    setParentAndMultipleChildren(TheStreet, [
        noun_ambulance, noun_cafe, noun_cinema, noun_digger, noun_factory, noun_fireEngine, noun_flatBlock, noun_hole, noun_hotel, 
        noun_house, noun_jackHammer, noun_lampPost, noun_lorry, noun_market, noun_pavement, noun_pipe, noun_playground, noun_policeCar, 
        noun_roof, noun_shoeShop, noun_shop, noun_statue, noun_step, noun_trailer, noun_van, noun_zebraCrossing, 
    ])
    

    //#travel
    let Travel = new Theme("Travel", "Călătoria"); 
    setParentAndChild(wordclass_nouns, Travel)

    const noun_adventure = new NounFemale("adventure", "aventură", "aventuri", "aventura", "aventurile", "aventurii", "aventurilor"); 
    const noun_aeroplane = new NounNeuter("aeroplane", "avion", "avioane", "avionul", "avioanele", "avionului", "avioanelor"); 
    const noun_airport = new NounNeuter("airport", "aeroport", "aeroporturi", "aeroportul", "aeroporturile", "aeroportului", "aeroporturilor"); 
    const noun_backpack = new NounNeuter("backpack", "rucsac", "rucsacuri", "rucsacul", "rucsacurile", "rucsacului", "rucsacurilor"); 
    const noun_bankAccount = new NounNeuter("bank account", "cont bancar", "conturi bancare", "contul bancar", "conturile bancare", "contului bancar", "conturilor bancare"); 
    const noun_barge = new NounFemale("barge", "barjă", "barje", "barja", "barjele", "barjei", "barjelor"); 
    const noun_battery = new NounFemale("battery", "baterie", "baterii", "bateria", "bateriile", "bateriei", "bateriilor"); 
    const noun_bicycle = new NounFemale("bicycle", "bicicletă", "biciclete", "bicicleta", "bicicletele", "bicicletei", "bicicletelor"); 
    const noun_bonnet = new NounFemale("bonnet", "capotă", "capote", "capota", "capotele", "capotei", "capotelor"); 
    const noun_breakdownLorry = new NounFemale("breakdown lorry", "mașină de tractare", "mașini de tractare", "mașina de tractare", "mașinile de tractare", "mașinii de tractare", "mașinilor de tractare"); 
    const noun_bus = new NounNeuter("bus", "autobuz", "autobuze", "autobuzul", "autobuzele", "autobuzului", "autobuzelor"); 
    const noun_car = new NounFemale("car", "mașină", "mașini", "mașina", "mașinile", "mașinii", "mașinilor"); 
    const noun_caravan = new NounFemale("caravan", "rulotă", "rulote", "rulota", "rulotele", "rulotei", "rulotelor"); 
    const noun_carBoot = new NounNeuter("car boot", "portbagaj", "portbagaje", "portbagajul", "portbagajele", "portbagajului", "portbagajelor"); 
    const noun_carGarage = new NounNeuter("car garage", "service auto", "service-uri auto", "service-ul auto", "service-urile auto", "service-ului auto", "service-urilor auto"); 
    const noun_carriage = new NounNeuter("carriage", "vagon", "vagoane", "vagonul", "vagoanele", "vagonului", "vagoanelor"); 
    const noun_carWash = new NounFemale("car wash", "spălătorie auto", "spălătorii auto", "spălătoria auto", "spălătoriile auto", "spălătoriei auto", "spălătoriilor auto"); 
    const noun_coin = new NounFemale("coin", "monedă", "monede", "moneda", "monedele", "monedei", "monedelor"); 
    const noun_controlTower = new NounNeuter("control tower", "turn de control", "turnuri de control", "turnul de control", "turnurile de control", "turnului de control", "turnurilor de control"); 
    const noun_conveyorBelt = new NounFemale("conveyor belt", "bandă transportoare", "benzi transportoare", "banda transportoare", "benzile transportoare", "benzii transportoare", "benzilor transportoare"); 
    const noun_course = new NounNeuter("course", "curs", "cursuri", "cursul", "cursurile", "cursului", "cursurilor"); 
    const noun_currency = new NounFemale("currency", "valută", "valute", "valuta", "valutele", "valutei", "valutelor"); 
    const noun_engine = new NounNeuter("engine", "motor", "motoare", "motorul", "motoarele", "motorului", "motoarelor"); 
    const noun_escalator = new NounFemale("escalator", "scară rulantă", "scări rulante", "scara rulantă", "scările rulante", "scării rulante", "scărilor rulante"); 
    const noun_exchangeRate = new NounNeuter("exchange rate", "curs valutar", "cursuri valutare", "cursul valutar", "cursurile valutare", "cursului valutar", "cursurilor valutare"); 
    const noun_ferry = new NounNeuter("ferry", "feribot", "feriboturi", "feribotul", "feriboturile", "feribotului", "feriboturilor"); 
    const noun_guide = new NounMale("guide", "ghid", "ghizi", "ghidul", "ghizii", "ghidului", "ghizilor"); 
    const noun_headlight = new NounNeuter("headlight", "far", "faruri", "farul", "farurile", "farului", "farurilor"); 
    const noun_helicopter = new NounNeuter("helicopter", "elicopter", "elicoptere", "elicopterul", "elicopterele", "elicopterului", "elicopterelor"); 
    const noun_homeTown = new NounNeuter("home town", "oraș natal", "orașe natale", "orașul natal", "orașele natale", "orașului natal", "orașelor natale"); 
    const noun_lobby = new NounNeuter("lobby", "hol", "holuri", "holul", "holurile", "holului", "holurilor"); 
    const noun_meetingPoint = new NounNeuter("meeting point", "punct de întâlnire", "puncte de întâlnire", "punctul de întâlnire", "punctele de întâlnire", "punctului de întâlnire", "punctelor de întâlnire"); 
    const noun_motorbike = new NounFemale("motorbike", "motocicletă", "motociclete", "motocicleta", "motocicletele", "motocicletei", "motocicletelor"); 
    const noun_news = new NounFemale("news", "știre", "știri", "știrea", "știrile", "știrii", "știrilor"); 
    const noun_oil = new NounNeuter("oil", "ulei", "uleiuri", "uleiul", "uleiurile", "uleiului", "uleiurilor"); 
    const noun_passenger = new NounMale("passenger", "pasager", "pasageri", "pasagerul", "pasagerii", "pasagerului", "pasagerilor"); 
    const noun_petrol = new NounFemale("petrol", "benzină", "benzine", "benzina", "benzinele", "benzinei", "benzinelor"); 
    const noun_petrolPump = new NounFemale("petrol pump", "pompă de benzină", "pompe de benzină", "pompa de benzină", "pompele de benzină", "pompei de benzină", "pompelor de benzină"); 
    const noun_petrolTanker = new NounFemale("petrol tanker", "cisternă de combustibil", "cisterne de combustibil", "cisterna de combustibil", "cisternele de combustibil", "cisternei de combustibil", "cisternelor de combustibil"); 
    const noun_phoneNumber = new NounNeuter("phone number", "număr de telefon", "numere de telefon", "numărul de telefon", "numerele de telefon", "numărului de telefon", "numerelor de telefon"); 
    const noun_place = new NounNeuter("place", "loc", "locuri", "locul", "locurile", "locului", "locurilor"); 
    const noun_platform = new NounFemale("platform", "peron", "peroane", "peronul", "peroanele", "peronului", "peroanelor"); 
    const noun_railwayStation = new NounFemale("railway station", "gară", "gări", "gara", "gările", "gării", "gărilor"); 
    const noun_railwayTrack = new NounFemale("railway track", "linie ferată", "linii ferate", "linia ferată", "liniile ferate", "liniei ferate", "liniilor ferate"); 
    const noun_rollerBlade = new NounFemale("rollerblade", "rolă", "role", "rola", "rolele", "rolei", "rolelor"); 
    const noun_runway = new NounFemale("runway", "pistă", "piste", "pista", "pistele", "pistei", "pistelor"); 
    const noun_schedule = new NounNeuter("schedule", "orar", "orare", "orarul", "orarele", "orarului", "orarelor"); 
    const noun_skateboard = new NounFemale("skateboard", "placă de skateboard", "plăci de skateboard", "placa de skateboard", "plăcile de skateboard", "plăcii de skateboard", "plăcilor de skateboard"); 
    const noun_souvenir = new NounNeuter("souvenir", "suvenir", "suveniruri", "suvenirul", "suvenirurile", "suvenirului", "suvenirurilor"); 
    const noun_spanner = new NounNeuter("spanner", "cheie fixă", "chei fixe", "cheia fixă", "cheile fixe", "cheii fixe", "cheilor fixe"); 
    const noun_stamp = new NounNeuter("stamp", "timbre", "timbre", "timbrele", "timbrele", "timbrelui", "timbrelor"); 
    const noun_suitcase = new NounFemale("suitcase", "valiză", "valize", "valiza", "valizele", "valizei", "valizelor"); 
    const noun_taxi = new NounNeuter("taxi", "taxi", "taxiuri", "taxiul", "taxiurile", "taxiului", "taxiurilor"); 
    const noun_ticketMachine = new NounNeuter("ticket machine", "automat de bilete", "automate de bilete", "automatul de bilete", "automatele de bilete", "automatului de bilete", "automatelor de bilete"); 
    const noun_tour = new NounNeuter("tour", "tur", "tururi", "turul", "tururile", "turului", "tururilor"); 
    const noun_tourist = new NounMale("tourist", "turist", "turiști", "turistul", "turiștii", "turistului", "turiștilor"); 
    const noun_trafficLight = new NounNeuter("traffic light", "semafor", "semfoare", "semaforul", "semfoarele", "semaforului", "semfoarelor"); 
    const noun_train = new NounNeuter("train", "tren", "trenuri", "trenul", "trenurile", "trenului", "trenurilor"); 
    const noun_trainEngine = new NounFemale("train engine", "locomotivă", "locomotive", "locomotiva", "locomotivele", "locomotivei", "locomotivelor"); 
    const noun_tricycle = new NounFemale("tricycle", "tricicletă", "triciclete", "tricicleta", "tricicletele", "tricicletei", "tricicletelor"); 
    const noun_trip = new NounFemale("trip", "excursie", "excursii", "excursia", "excursiile", "excursiei", "excursiilor"); 
    const noun_wheel = new NounFemale("wheel", "roată", "roți", "roata", "roțile", "roții", "roților"); 
    const noun_yacht = new NounNeuter("yacht", "iaht", "iahturi", "iahtul", "iahturile", "iahtului", "iahturilor"); 

    setParentAndMultipleChildren(Travel, [
        noun_adventure, noun_aeroplane, noun_airport, noun_backpack, noun_bankAccount, noun_barge, noun_battery, noun_bicycle, noun_bonnet, noun_breakdownLorry, 
        noun_bus, noun_car, noun_caravan, noun_carBoot, noun_carGarage, noun_carriage, noun_carWash, noun_coin, noun_controlTower, noun_conveyorBelt, noun_course, 
        noun_currency, noun_engine, noun_escalator, noun_exchangeRate, noun_ferry, noun_guest, noun_guide, noun_headlight, noun_helicopter, noun_holiday, 
        noun_homeTown, noun_lobby, noun_meetingPoint, noun_motorbike, noun_news, noun_oil, noun_passenger, noun_petrol, noun_petrolPump, noun_petrolTanker, 
         noun_phoneNumber, noun_place, noun_platform, noun_railwayStation, noun_railwayTrack, noun_rollerBlade, noun_runway, noun_schedule, noun_skateboard,
          noun_souvenir, noun_spanner, noun_stamp, noun_suitcase, noun_taxi, noun_ticketMachine, noun_tour, noun_tourist, noun_trafficLight, noun_train, noun_trainEngine, 
          noun_tricycle, noun_trip, noun_wheel, noun_yacht, 
    ])


    //#country #thecountry
    let TheCountry = new Theme("The Country", "La Țară"); 
    setParentAndChild(wordclass_nouns, TheCountry)

    const noun_bridge = new NounNeuter("bridge", "pod", "poduri", "podul", "podurile", "podului", "podurilor"); 
    const noun_campingTent = new NounNeuter("camping tent", "cort", "corturi", "cortul", "corturile", "cortului", "corturilor"); 
    const noun_canal = new NounNeuter("canal", "canal", "canale", "canalul", "canalele", "canalului", "canalelor"); 
    const noun_canalLock = new NounFemale("canal lock", "ecluză", "ecluze", "ecluza", "ecluzele", "ecluzei", "ecluzelor"); 
    const noun_desert = new NounNeuter("desert", "deșert", "deșerturi", "deșertul", "deșerturile", "deșertului", "deșerturilor"); 
    const noun_forest = new NounFemale("forest", "pădure", "păduri", "pădurea", "pădurile", "pădurii", "pădurilor"); 
    const noun_hill = new NounNeuter("hill", "deal", "dealuri", "dealul", "dealurile", "dealului", "dealurilor"); 
    const noun_hotAirBalloon = new NounNeuter("hot air balloon", "balon cu aer cald", "baloane cu aer cald", "balonul cu aer cald", "baloanele cu aer cald", "balonului cu aer cald", "baloanelor cu aer cald"); 
    const noun_jungle = new NounFemale("jungle", "junglă", "jungle", "jungla", "junglele", "junglei", "junglelor"); 
    const noun_lake = new NounNeuter("lake", "lac", "lacuri", "lacul", "lacurile", "lacului", "lacurilor"); 
    const noun_mountain = new NounMale("mountain", "munte", "munți", "muntele", "munții", "muntelui", "munților"); 
    const noun_nature = new NounFemale("nature", "natură", "naturi", "natura", "naturile", "naturii", "naturilor"); 
    const noun_ocean = new NounNeuter("ocean", "ocean", "oceane", "oceanul", "oceanele", "oceanului", "oceanelor"); 
    const noun_river = new NounNeuter("river", "râu", "râuri", "râul", "râurile", "râului", "râurilor"); 
    const noun_road = new NounFemale("road", "șosea", "șosele", "șoseaua", "șoselele", "șoselei", "șoselelor"); 
    const noun_rock = new NounFemale("rock", "stâncă", "stânci", "stânca", "stâncile", "stâncii", "stâncilor"); 
    const noun_signpost = new NounNeuter("signpost", "indicator", "indicatoare", "indicatorul", "indicatoarele", "indicatorului", "indicatoarelor"); 
    const noun_stone = new NounFemale("stone", "piatră", "pietre", "piatra", "pietrele", "pietrei", "pietrelor"); 
    const noun_stream = new NounNeuter("stream", "pârâu", "pâraie", "pârâul", "pâraiele", "pârâului", "pâraielor"); 
    const noun_tunnel = new NounNeuter("tunnel", "tunel", "tuneluri", "tunelul", "tunelurile", "tunelului", "tunelurilor"); 
    const noun_village = new NounNeuter("village", "sat", "sate", "satul", "satele", "satului", "satelor"); 
    const noun_volcano = new NounMale("volcano", "vulcan", "vulcani", "vulcanul", "vulcanii", "vulcanului", "vulcanilor"); 
    const noun_waterfall = new NounFemale("waterfall", "cascadă", "cascade", "cascada", "cascadele", "cascadei", "cascadelor"); 
    const noun_windmill = new NounFemale("windmill", "moară de vânt", "morile de vânt", "moara de vânt", "morile de vânt", "morii de vânt", "morilor de vânt"); 
    const noun_woodenLog = new NounFemale("wooden log", "buturugă", "buturugi", "buturuga", "buturugile", "buturugii", "buturugilor"); 


    setParentAndMultipleChildren(TheCountry, [
            noun_bridge, noun_campingTent, noun_canal, noun_canalLock, noun_desert, noun_forest, noun_hill, noun_hotAirBalloon, 
            noun_jungle, noun_lake, noun_mountain, noun_nature, noun_ocean, noun_river, noun_road, noun_rock, noun_signpost, noun_stone, 
            noun_stream, noun_tunnel, noun_village, noun_volcano, noun_waterfall, noun_windmill, noun_woodenLog, 
    ])


    //#animals
    let Animals = new Theme("Animals", "Animalele"); 
    setParentAndChild(wordclass_nouns, Animals)

    const noun_badger = new NounMale("badger", "bursuc", "bursuci", "bursucul", "bursucii", "bursucului", "bursucilor"); 
    const noun_bat = new NounMale("bat", "liliac", "lilieci", "liliacul", "liliecii", "liliacului", "liliecilor"); 
    const noun_beak = new NounNeuter("beak", "cioc", "ciocuri", "ciocul", "ciocurile", "ciocului", "ciocurilor"); 
    const noun_bear = new NounMale("bear", "urs", "urși", "ursul", "urșii", "ursului", "urșilor"); 
    const noun_beaver = new NounMale("beaver", "castor", "castori", "castorul", "castorii", "castorului", "castorilor"); 
    const noun_bee = new NounFemale("bee", "albină", "albine", "albina", "albinele", "albinei", "albinelor"); 
    const noun_beehive = new NounMale("beehive", "stup", "stupi", "stupul", "stupii", "stupului", "stupilor"); 
    const noun_bird = new NounFemale("bird", "pasăre", "păsări", "pasărea", "păsările", "păsării", "păsărilor"); 
    const noun_bison = new NounMale("bison", "bizon", "bizoni", "bizonul", "bizonii", "bizonului", "bizonilor"); 
    const noun_budgerigar = new NounMale("budgerigar", "peruș", "peruși", "perușul", "perușii", "perușului", "perușilor"); 
    const noun_bull = new NounMale("bull", "taur", "tauri", "taurul", "taurii", "taurului", "taurilor"); 
    const noun_butterfly = new NounMale("butterfly", "fluture", "fluturi", "fluturele", "fluturii", "fluturelui", "fluturilor"); 
    const noun_cage = new NounFemale("cage", "cușcă", "cuști", "cușca", "cuștile", "cuștii", "cuștilor"); 
    const noun_calfCow = new NounMale("calf", "vițel", "viței", "vițelul", "vițeii", "vițelului", "vițeilor"); 
    const noun_camel = new NounFemale("camel", "cămilă", "cămile", "cămila", "cămilele", "cămilei", "cămilelor"); 
    const noun_canary = new NounMale("canary", "canar", "canari", "canarul", "canarii", "canarului", "canarilor"); 
    const noun_cat = new NounFemale("cat", "pisică", "pisici", "pisica", "pisicile", "pisicii", "pisicilor"); 
    const noun_caterpillar = new NounFemale("caterpillar", "omida", "omizi", "omida", "omizile", "omidei", "omizilor"); 
    const noun_cobweb = new NounFemale("cobweb", "pânză de păianjen", "pânze de păianjen", "pânza de păianjen", "pânzele de păianjen", "pânzei de păianjen", "pânzelor de păianjen"); 
    const noun_cow = new NounFemale("cow", "vacă", "vaci", "vaca", "vaciile", "vacii", "vacilor"); 
    const noun_crab = new NounMale("crab", "crab", "crabi", "crabul", "crabii", "crabului", "crabilor"); 
    const noun_crocodile = new NounMale("crocodile", "crocodil", "crocodili", "crocodilul", "crocodilii", "crocodilului", "crocodililor"); 
    const noun_deer = new NounMale("deer", "cerb", "cerbi", "cerbul", "cerbii", "cerbului", "cerbilor"); 
    const noun_dog = new NounMale("dog", "câine", "câini", "câinele", "câinii", "câinelui", "câinilor"); 
    const noun_dolphin = new NounMale("dolphin", "delfin", "delfini", "delfinul", "delfinii", "delfinului", "delfinilor"); 
    const noun_duck = new NounFemale("duck", "rață", "rațe", "rața", "rațele", "raței", "rațelor"); 
    const noun_duckling = new NounMale("duckling", "boboc de rață", "boboci de rață", "bobocul de rață", "bobocii de rață", "bobocului de rață", "bobocilor de rață"); 
    const noun_eagle = new NounMale("eagle", "vultur", "vulturi", "vulturul", "vulturii", "vulturului", "vulturilor"); 
    const noun_elephant = new NounMale("elephant", "elefant", "elefanți", "elefantul", "elefanții", "elefantului", "elefanților"); 
    const noun_feathers = new NounFemale("feather", "pană", "pene", "pana", "penele", "penei", "penelor"); 
    const noun_fish = new NounMale("fish", "pește", "pești", "peștele", "peștii", "peștelui", "peștilor"); 
    const noun_flyInsect = new NounFemale("fly", "muscă", "muște", "musca", "muștele", "muștii", "muștelor"); 
    const noun_fox = new NounFemale("fox", "vulpe", "vulpi", "vulpea", "vulpile", "vulpii", "vulpilor"); 
    const noun_foxCubs = new NounMale("fox cub", "pui de vulpe", "pui de vulpe", "puiul de vulpe", "puii de vulpe", "puiului de vulpe", "puilor de vulpe"); 
    const noun_frog = new NounFemale("frog", "broască", "broaște", "broasca", "broaștele", "broaștei", "broaștelor"); 
    const noun_geese = new NounFemale("geese", "gâscă", "gâște", "gâsca", "gâștele", "gâștii", "gâștelor"); 
    const noun_giraffe = new NounFemale("giraffe", "girafă", "girafe", "girafa", "girafele", "girafei", "girafelor"); 
    const noun_goat = new NounFemale("goat", "capră", "capre", "capra", "caprele", "caprei", "caprelor"); 
    const noun_goldfish = new NounMale("goldfish", "pește auriu", "pești aurii", "peștele auriu", "peștii aurii", "peștelui auriu", "peștilor aurii"); 
    const noun_gorilla = new NounFemale("gorilla", "gorilă", "gorile", "gorila", "gorilele", "gorilei", "gorilelor"); 
    const noun_guineaPig = new NounMale("guinea pig", "porcușor de Guineea", "porcușori de Guineea", "porcușorul de Guineea", "porcușorii de Guineea", "porcușorului de Guineea", "porcușorilor de Guineea"); 
    const noun_hamster = new NounMale("hamster", "hamster", "hamsteri", "hamsterul", "hamsterii", "hamsterului", "hamsterilor"); 
    const noun_hedgehog = new NounMale("hedgehog", "arici", "arici", "ariciul", "aricii", "ariciului", "aricilor"); 
    const noun_hippopotamus = new NounMale("hippopotamus", "hipopotam", "hipopotami", "hipopotamul", "hipopotamii", "hipopotamului", "hipopotamilor"); 
    const noun_horse = new NounMale("horse", "cal", "cai", "calul", "caii", "calului", "cailor"); 
    const noun_kangaroo = new NounMale("kangaroo", "cangur", "canguri", "cangurul", "cangurii", "cangurului", "cangurilor"); 
    const noun_kennel = new NounFemale("kennel", "cușcă", "cuști", "cușca", "cuștile", "cuștii", "cuștilor"); 
    const noun_kitten = new NounMale("kitten", "pisoi", "pisoi", "pisoiul", "pisoii", "pisoiului", "pisoiilor"); 
    const noun_ladybird = new NounFemale("ladybird", "buburuză", "buburuze", "buburuza", "buburuzele", "buburuzei", "buburuzelor"); 
    const noun_lamb = new NounMale("lamb", "miel", "miei", "mielul", "mieii", "mielului", "mielilor"); 
    const noun_leopard = new NounMale("leopard", "leopard", "leoparzi", "leopardul", "leoparzii", "leopardului", "leopardilor"); 
    const noun_lion = new NounMale("lion", "leu", "lei", "leul", "leii", "leului", "leilor"); 
    const noun_lionCub = new NounMale("lion cub", "pui de leu", "pui de leu", "puiul de leu", "puii de leu", "puiului de leu", "puilor de leu"); 
    const noun_lizard = new NounFemale("lizard", "șopârlă", "șopârle", "șopârla", "șopârlele", "șopârlei", "șopârlelor"); 
    const noun_mole = new NounFemale("mole", "cârtiță", "cârtițe", "cârtița", "cârtițele", "cârtiței", "cârtițelor"); 
    const noun_monkey = new NounFemale("monkey", "maimuță", "maimuțe", "maimuța", "maimuțele", "maimuței", "maimuțelor"); 
    const noun_moth = new NounFemale("moth", "molie", "molii", "molia", "moliile", "moliei", "moliilor"); 
    const noun_mouse = new NounMale("mouse", "șoarece", "șoareci", "șoarecele", "șoarecii", "șoarecelui", "șoarecilor"); 
    const noun_ostrich = new NounMale("ostrich", "struț", "struți", "struțul", "struții", "struțului", "struților"); 
    const noun_owl = new NounFemale("owl", "bufniță", "bufnițe", "bufnița", "bufnițele", "bufniței", "bufnițelor"); 
    const noun_panda = new NounMale("panda", "panda", "panda", "pandaul", "", "pandaului", ""); 
    const noun_parrot = new NounMale("parrot", "papagal", "papagali", "papagalul", "papagalii", "papagalului", "papagalilor"); 
    const noun_paw = new NounFemale("paw", "labă", "labe", "laba", "labele", "labei", "labelor"); 
    const noun_pelican = new NounMale("pelican", "pelican", "pelicani", "pelicanul", "pelicanii", "pelicanului", "pelicanilor"); 
    const noun_penguin = new NounMale("penguin", "pinguin", "pinguini", "pinguinul", "pinguinii", "pinguinului", "pinguinilor"); 
    const noun_pet = new NounNeuter("pet", "animal de companie", "animale de companie", "animalul de companie", "animalele de companie", "animalului de companie", "animalelor de companie"); 
    const noun_petFood = new NounFemale("pet food", "hrană pentru animale", "hrane pentru animale", "hrana pentru animale", "hranele pentru animale", "hranei pentru animale", "hranelor pentru animale"); 
    const noun_pig = new NounMale("pig", "porc", "porci", "porcul", "porcii", "porcului", "porcilor"); 
    const noun_pigeon = new NounMale("pigeon", "porumbel", "porumbei", "porumbelul", "porumbeii", "porumbelului", "porumbeilor"); 
    const noun_piglet = new NounMale("piglet", "purcel", "purcei", "purcelul", "purceii", "purcelului", "purceilor"); 
    const noun_pony = new NounMale("pony", "ponei", "ponei", "poneiul", "poneii", "poneiului", "poneilor"); 
    const noun_puppy = new NounMale("puppy", "căţeluş", "căţeluşi", "căţeluşul", "căţeluşii", "căţeluşului", "căţeluşilor"); 
    const noun_rabbit = new NounMale("rabbit", "iepure", "iepuri", "iepurele", "iepurii", "iepurelui", "iepurilor"); 
    const noun_rhinoceros = new NounMale("rhinoceros", "rinocer", "rinoceri", "rinocerul", "rinocerii", "rinocerului", "rinocerilor"); 
    const noun_seagull = new NounMale("seagull", "pescăruș", "pescăruși", "pescărușul", "pescărușii", "pescărușului", "pescărușilor"); 
    const noun_seal = new NounFemale("seal", "focă", "foci", "foca", "focile", "focii", "focilor"); 
    const noun_shark = new NounMale("shark", "rechin", "rechini", "rechinul", "rechinii", "rechinului", "rechinilor"); 
    const noun_sheep = new NounFemale("sheep", "oaie", "oi", "oaia", "oile", "oaiei", "oilor"); 
    const noun_sheepdog = new NounMale("sheepdog", "câine ciobănesc", "câini ciobănești", "câinele ciobănesc", "câinii ciobănești", "câinelui ciobănesc", "câinilor ciobănești"); 
    const noun_snail = new NounMale("snail", "melc", "melci", "melcul", "melcii", "melcului", "melcilor"); 
    const noun_snake = new NounMale("snake", "șarpe", "șerpi", "șarpele", "șerpii", "șarpelui", "șerpilor"); 
    const noun_spider = new NounMale("spider", "păianjen", "păianjeni", "păianjenul", "păianjenii", "păianjenului", "păianjenilor"); 
    const noun_squirrel = new NounFemale("squirrel", "veveriță", "veverițe", "veverița", "veverițele", "veveriței", "veverițelor"); 
    const noun_starFish = new NounFemale("starfish", "stea de mare", "stele de mare", "steaua de mare", "stelele de mare", "stelei de mare", "stelelor de mare"); 
    const noun_swan = new NounMale("swan", "lebădă", "lebede", "lebăda", "lebedele", "lebedei", "lebedelor"); 
    const noun_tadpole = new NounNeuter("tadpole", "mormoloc", "mormoloci", "mormolocul", "mormolocii", "mormolocului", "mormolocilor"); 
    const noun_tiger = new NounMale("tiger", "tigru", "tigri", "tigrul", "tigrii", "tigrului", "tigrilor"); 
    const noun_toad = new NounFemale("toad", "broască râioasă", "broaște râioase", "broasca râioasă", "broaștele râioase", "broaștii râioase", "broaștelor râioase"); 
    const noun_tortoise = new NounFemale("tortoise", "broască țestoasă", "broaște țestoase", "broasca țestoasă", "broaștele țestoase", "broaștii țestoase", "broaștelor țestoase"); 
    const noun_trunk = new NounFemale("trunk", "trompă", "trompe", "trompa", "trompele", "trompei", "trompelor"); 
    const noun_turkey = new NounFemale("turkey", "curcă", "curci", "curca", "curcile", "curcii", "curcilor"); 
    const noun_wasp = new NounFemale("wasp", "viespe", "viespi", "viespea", "viespile", "viespii", "viespilor"); 
    const noun_whale = new NounFemale("whale", "balenă", "balene", "balena", "balenele", "balenei", "balenelor"); 
    const noun_wing = new NounFemale("wing", "aripă", "aripi", "aripa", "aripile", "aripii", "aripilor"); 
    const noun_wolf = new NounMale("wolf", "lup", "lupi", "lupul", "lupii", "lupului", "lupilor"); 
    const noun_worm = new NounMale("worm", "vierme", "viermi", "viermele", "viermii", "viermelui", "viermilor"); 
    const noun_zebra = new NounFemale("zebra", "zebră", "zebre", "zebra", "zebrele", "zebrei", "zebrelor"); 
    


    setParentAndMultipleChildren(Animals, [
        noun_badger, noun_bat, noun_beak, noun_bear, noun_beaver, noun_bee, noun_beehive, noun_bird, noun_bison, noun_budgerigar, noun_bull, noun_butterfly, 
        noun_cage, noun_calfCow, noun_camel, noun_canary, noun_cat, noun_caterpillar, noun_cobweb, noun_cow, noun_crab, noun_crocodile, noun_deer, noun_dog, 
        noun_dolphin, noun_duck, noun_duckling, noun_eagle, noun_elephant, noun_feathers, noun_fish, noun_flyInsect, noun_fox, noun_foxCubs, noun_frog, noun_geese, 
        noun_giraffe, noun_goat, noun_goldfish, noun_gorilla, noun_guineaPig, noun_hamster, noun_hedgehog, noun_hippopotamus, noun_horse, noun_kangaroo, noun_kennel, 
        noun_kitten, noun_ladybird, noun_lamb, noun_leopard, noun_lion, noun_lionCub, noun_lizard, noun_mole, noun_monkey, noun_moth, noun_mouse, noun_ostrich, noun_owl, 
        noun_panda, noun_parrot, noun_paw, noun_pelican, noun_penguin, noun_pet, noun_petFood, noun_pig, noun_pigeon, noun_piglet, noun_pony, noun_puppy, noun_rabbit, 
        noun_rhinoceros, noun_seagull, noun_seal, noun_shark, noun_sheep, noun_sheepdog, noun_snail, noun_snake, noun_spider, noun_squirrel, noun_starFish, noun_swan, 
        noun_tadpole, noun_tiger, noun_toad, noun_tortoise, noun_trunk, noun_turkey, noun_wasp, noun_whale, noun_wing, noun_wolf, noun_worm, noun_zebra, 
    ])

    // #shop
    let theShop = new Theme("The Shop", "Magazinul"); 
    setParentAndChild(wordclass_nouns, theShop)

    const noun_basket = new NounNeuter("basket", "coș", "coșuri", "coșul", "coșurile", "coșului", "coșurilor"); 
    const noun_bottles = new NounFemale("bottle", "sticlă", "sticle", "sticla", "sticlele", "sticlei", "sticlelor"); 
    const noun_carrierBag = new NounFemale("carrier bag", "pungă", "pungi", "punga", "pungile", "pungii", "pungilor"); 
    const noun_checkout = new NounFemale("checkout", "casă de marcat", "case de marcat", "casa de marcat", "casele de marcat", "casei de marcat", "caselor de marcat"); 
    const noun_handbag = new NounFemale("handbag", "geantă", "genți", "geanta", "gențile", "genții", "gentilor"); 
    const noun_money = new NounNeuter("money", "bani", "bani", "banii", "banii", "banilor", "banilor"); // plural-only noun 
    const noun_scales = new NounNeuter("scales", "cântar", "cântare", "cântarul", "cântarele", "cântarului", "cântarelor"); 
    const noun_trolley = new NounNeuter("trolley", "carucior", "carucioare", "caruciorul", "carucioarele", "caruciorului", "carucioarelor"); 

    setParentAndMultipleChildren(theShop, [
        noun_basket, noun_bottles, noun_carrierBag, noun_checkout, noun_handbag, noun_money, noun_scales, noun_trolley, 
    ])


    // #food
    let food = new Theme("Food", "Mâncarea");
    setParentAndChild(wordclass_nouns, food)
    
    const noun_apricot = new NounFemale("apricot", "caisă", "caise", "caisa", "caisele", "caisiei", "caiselor"); 
    const noun_banana = new NounFemale("banana", "banană", "banane", "banana", "bananele", "bananei", "bananelor"); 
    const noun_beans = new NounFemale("beans", "fasole", "fasole", "fasolea", "fasolea", "fasolei", "fasolei"); 
    const noun_boiledEgg = new NounNeuter("boiled egg", "ou fiert", "ouă fierte", "oul fiert", "ouăle fierte", "oului fiert", "ouălor fierte"); 
    const noun_bread = new NounFemale("bread", "pâine", "pâini", "pâinea", "pâinile", "pâinii", "pâinilor"); 
    const noun_breadRolls = new NounFemale("bread rolls", "chiflă", "chifle", "chifla", "chiflele", "chiflei", "chiflelor"); 
    const noun_breakfast = new NounNeuter("breakfast", "mic dejun", "mic dejunuri", "micul dejun", "mic dejunurile", "micului dejun", "mic dejunurilor"); 
    const noun_butter = new NounNeuter("butter", "unt", "unturi", "untul", "unturile", "untului", "unturilor"); 
    const noun_cabbage = new NounFemale("cabbage", "varză", "verze", "varza", "verzele", "verzei", "verzelor"); 
    const noun_carrot = new NounMale("carrot", "morcov", "morcovi", "morcovul", "morcovii", "morcovului", "morcovilor"); 
    const noun_cauliflower = new NounFemale("cauliflower", "conopidă", "conopide", "conopida", "conopidele", "conopidei", "conopidelor"); 
    const noun_celery = new NounFemale("celery", "țelină", "țeline", "țelina", "țelinele", "țelinei", "țelinelor"); 
    const noun_cereal = new NounFemale("cereal", "cereală", "cereale", "cereala", "cerealele", "cerealei", "cerealelor"); 
    const noun_cheese = new NounFemale("cheese", "brânză", "brânzeturi", "brânza", "brânzeturile", "brânzei", "brânzeturilor"); 
    const noun_cherry = new NounFemale("cherry", "cireașă", "cireșe", "cireașa", "cireșele", "cireșei", "cireșelor"); 
    const noun_chicken = new NounMale("chicken", "pui", "pui", "puiul", "puii", "puiului", "puilor"); 
    const noun_chips = new NounMale("chips", "cartofi prăjiți", "cartofi prăjiți", "cartofii prăjiți", "cartofii prăjiți", "cartofilor prăjiți", "cartofilor prăjiți"); 
    const noun_chopsticks = new NounNeuter("chopsticks", "bețișor", "bețișoare", "bețișorul", "bețișoarele", "bețișorului", "bețișoarelor"); 
    const noun_clementine = new NounFemale("clementine", "clementină", "clementine", "clementina", "clementinele", "clementinei", "clementinelor"); 
    const noun_coffee = new NounFemale("coffee", "cafea", "cafele", "cafeaua", "cafelele", "cafelei", "cafelor"); 
    const noun_cream = new NounFemale("cream", "smântână", "", "smântâna", "", "smântânii", ""); 
    const noun_cucumber = new NounMale("cucumber", "castravete", "castraveți", "castravetele", "castraveții", "castravetelui", "castraveților"); 
    const noun_dinner = new NounFemale("dinner", "cină", "cine", "cina", "cinele", "cinei", "cinelor"); 
    const noun_eggs = new NounNeuter("eggs", "ou", "ouă", "oul", "ouăle", "oului", "ouălor"); 
    const noun_flour = new NounFemale("flour", "făină", "făinuri", "făina", "făinurile", "făinii", "făinurilor"); 
    const noun_friedEgg = new NounNeuter("fried egg", "ou prăjit", "ouă prăjite", "oul prăjit", "ouăle prăjite", "oului prăjit", "ouălor prăjite"); 
    const noun_fruitJuice = new NounNeuter("fruit juice", "suc de fructe", "sucuri de fructe", "sucul de fructe", "sucurile de fructe", "sucului de fructe", "sucurilor de fructe"); 
    const noun_grapefruit = new NounNeuter("grapefruit", "grepfrut", "grepfruturi", "grepfrutul", "grepfruturile", "grepfrutului", "grepfruturilor"); 
    const noun_ham = new NounFemale("ham", "șuncă", "șunci", "șunca", "șuncile", "șuncii", "șuncilor"); 
    const noun_hamburger = new NounMale("hamburger", "hamburger", "hamburgeri", "hamburgerul", "hamburgerii", "hamburgerului", "hamburgerilor"); 
    const noun_honey = new NounFemale("honey", "miere", "", "mierea", "", "mierii", ""); 
    const noun_hotChocolate = new NounFemale("hot chocolate", "ciocolată caldă", "ciocolate calde", "ciocolata caldă", "ciocolatele calde", "ciocolatei calde", "ciocolatelor calde"); 
    const noun_iceCream = new NounFemale("ice cream", "înghețată", "înghețate", "înghețata", "înghețatele", "înghețatei", "înghețatelor"); 
    const noun_jam = new NounNeuter("jam", "gem", "gemuri", "gemul", "gemurile", "gemului", "gemurilor"); 
    const noun_ketchup = new NounNeuter("ketchup", "ketchup", "", "ketchupul", "", "ketchupului", ""); 
    const noun_leek = new NounMale("leek", "praz", "prazi", "prazul", "prazii", "prazului", "prazilor"); 
    const noun_lemon = new NounFemale("lemon", "lămâie", "lămâi", "lămâia", "lămâile", "lămâii", "lămâilor"); 
    const noun_lettuce = new NounFemale("lettuce", "salată", "salate", "salata", "salatele", "salatei", "salatelor"); 
    const noun_lunch = new NounNeuter("lunch", "prânz", "prânzuri", "prânzul", "prânzurile", "prânzului", "prânzurilor"); 
    const noun_mashedPotatoes = new NounNeuter("mashed potatoes", "piure de cartofi", "piureuri de cartofi", "piureul de cartofi", "piureurile de cartofi", "piureului de cartofi", "piureurilor de cartofi"); 
    const noun_meat = new NounFemale("meat", "carne", "cărnuri", "carnea", "cărnurile", "cărnii", "cărnurilor"); 
    const noun_melon = new NounMale("melon", "pepene", "pepeni", "pepenele", "pepenii", "pepenelui", "pepenilor"); 
    const noun_milk = new NounNeuter("milk", "lapte", "lăpturi", "laptele", "lăpturile", "laptelui", "lăpturilor"); 
    const noun_mushroom = new NounFemale("mushroom", "ciupercă", "ciuperci", "ciuperca", "ciupercile", "ciupercii", "ciupercilor"); 
    const noun_omlette = new NounFemale("omelette", "omletă", "omlete", "omleta", "omletele", "omletei", "omletelor"); 
    const noun_onion = new NounFemale("onion", "ceapă", "cepe", "ceapa", "cepele", "cepei", "cepelor"); 
    const noun_orange = new NounFemale("orange", "portocală", "portocale", "portocala", "portocalele", "portocalei", "portocalelor"); 
    const noun_pancakes = new NounFemale("pancakes", "clătită", "clătite", "clătita", "clătitele", "clătitei", "clătitelor"); 
    const noun_peach = new NounFemale("peach", "piersică", "piersici", "piersica", "piersicile", "piersicii", "piersicilor"); 
    const noun_pear = new NounFemale("pear", "pară", "pere", "para", "perele", "perei", "perelor"); 
    const noun_peas = new NounFemale("peas", "mazăre", "", "mazărea", "", "mazărei", ""); 
    const noun_pepper = new NounMale("pepper", "piper", "piperuri", "piperul", "piperurile", "piperului", "piperurilor"); 
    const noun_pineapple = new NounMale("pineapple", "ananas", "ananasuri", "ananasul", "ananasurile", "ananasului", "ananasurilor"); 
    const noun_pizza = new NounFemale("pizza", "pizza", "pizza", "pizza", "pizza", "pizzei", "pizzelor"); 
    const noun_plum = new NounFemale("plum", "prună", "prune", "pruna", "prunele", "prunei", "prunelor"); 
    const noun_potato = new NounMale("potato", "cartof", "cartofi", "cartoful", "cartofii", "cartofului", "cartofilor"); 
    const noun_pudding = new NounFemale("pudding", "budincă", "budinci", "budinca", "budincile", "budincii", "budincilor"); 
    const noun_pumpkin = new NounMale("pumpkin", "dovleac", "dovleci", "dovleacul", "dovlecii", "dovleacului", "dovlecilor"); 
    const noun_raspberry = new NounFemale("raspberry", "zmeură", "zmeure", "zmeura", "zmeurele", "zmeurei", "zmeurelor"); 
    const noun_rice = new NounNeuter("rice", "orez", "orezuri", "orezul", "orezurile", "orezului", "orezurilor"); 
    const noun_salad = new NounFemale("salad", "salată", "salate", "salata", "salatele", "salatei", "salatelor"); 
    const noun_salt = new NounFemale("salt", "sare", "săruri", "sarea", "sările", "sării", "sărilor"); 
    const noun_softDrink = new NounFemale("soft drink", "băutură răcoritoare", "băuturi răcoritoare", "băutura răcoritoare", "băuturile răcoritoare", "băuturii răcoritoare", "băuturilor răcoritoare"); 
    const noun_soup = new NounFemale("soup", "supă", "supe", "supa", "supele", "supei", "supelor"); 
    const noun_spaghetti = new NounFemale("spaghetti", "spaghete", "spaghete", "", "spaghetele", "", "spaghetelor"); 
    const noun_spinach = new NounNeuter("spinach", "spanac", "spanaci", "spanacul", "spanacii", "spanacului", "spanacilor"); 
    const noun_strawberry = new NounFemale("strawberry", "căpșună", "căpșuni", "căpșuna", "căpșunile", "căpșunei", "căpșunilor"); 
    const noun_sugar = new NounNeuter("sugar", "zahăr", "", "zahărul", "", "zahărului", ""); 
    const noun_tea = new NounNeuter("tea", "ceai", "ceaiuri", "ceaiul", "ceaiurile", "ceaiului", "ceaiurilor"); 
    const noun_teapot = new NounNeuter("teapot", "ceainic", "ceainice", "ceainicul", "ceainicele", "ceainicului", "ceainicelor"); 
    const noun_tins = new NounFemale("tins", "conservă", "conserve", "conserva", "conservele", "conservei", "conservelor"); 
    const noun_toast = new NounNeuter("toast", "pâine prăjită", "pâini prăjite", "pâinea prăjită", "pâinile prăjite", "pâinii prăjite", "pâinilor prăjite"); 
    const noun_tomato = new NounFemale("tomato", "roșie", "roșii", "roșia", "roșiile", "roșiei", "roșiilor"); 
    const noun_yoghurt = new NounNeuter("yoghurt", "iaurt", "iaurturi", "iaurtul", "iaurturile", "iaurtului", "iaurturilor"); 


    setParentAndMultipleChildren(food, [
        noun_apricot, noun_banana, noun_beans, noun_boiledEgg, noun_bread, noun_breadRolls, noun_breakfast, noun_butter, noun_cabbage, noun_carrot, 
        noun_cauliflower, noun_celery, noun_cereal, noun_cheese, noun_cherry, noun_chicken, noun_chips, noun_chopsticks, noun_clementine, noun_coffee, 
        noun_cream, noun_cucumber, noun_dinner, noun_eggs, noun_flour, noun_friedEgg, noun_fruitJuice, noun_grapefruit, noun_ham, noun_hamburger, 
        noun_honey, noun_hotChocolate, noun_iceCream, noun_jam, noun_ketchup, noun_leek, noun_lemon, noun_lettuce, noun_lunch, noun_mashedPotatoes, 
        noun_meat, noun_melon, noun_milk, noun_mushroom, noun_omlette, noun_onion, noun_orange, noun_pancakes, noun_peach, noun_pear, noun_peas, 
        noun_pepper, noun_pineapple, noun_pizza, noun_plum, noun_potato, noun_pudding, noun_pumpkin, noun_raspberry, noun_rice, noun_salad, noun_salt, 
        noun_softDrink, noun_soup, noun_spaghetti, noun_spinach, noun_strawberry, noun_sugar, noun_tea, noun_teapot, noun_tins, noun_toast, noun_tomato, 
        noun_yoghurt, 
    ])
  

    // #atwork
    let AtWork = new Theme("At Work", "La muncă"); 
    setParentAndChild(wordclass_nouns, AtWork);

    const noun_project = new NounNeuter("project", "proiect", "proiecte", "proiectul", "proiectele", "proiectului", "proiectelor"); 
    const noun_appointment = new NounFemale("appointment", "programare", "programări", "programarea", "programările", "programării", "programărilor"); 
    const noun_boss = new NounMale("boss", "șef", "șefi", "șeful", "șefii", "șefului", "șefilor"); 
    const noun_detail = new NounNeuter("detail", "detaliu", "detalii", "detaliul", "detaliile", "detaliului", "detaliilor"); 
    const noun_employee = new NounMale("employee", "angajat", "angajați", "angajatul", "angajații", "angajatului", "angajaților"); 
    const noun_experience = new NounFemale("experience", "experiență", "experiențe", "experiența", "experiențele", "experienței", "experiențelor"); 
    const noun_facility = new NounFemale("facility", "facilitate", "facilități", "facilitatea", "facilitățile", "facilității", "facilităților"); 
    const noun_humanResources = new NounFemale("human resources", "resurse umane", "", "", "", "", ""); 
    const noun_job = new NounNeuter("Place of work (job)", "loc de muncă", "locuri de muncă", "locul de muncă", "locurile de muncă", "locului de muncă", "locurilor de muncă"); 
    const noun_meeting = new NounFemale("meeting", "ședință", "ședințe", "ședința", "ședințele", "ședinței", "ședințelor"); 
    const noun_method = new NounFemale("method", "metodă", "metode", "metoda", "metodele", "metodei", "metodelor"); 
    const noun_objective = new NounNeuter("objective", "obiectiv", "obiective", "obiectivul", "obiectivele", "obiectivului", "obiectivelor"); 
    const noun_opportunity = new NounFemale("opportunity", "oportunitate", "oportunități", "oportunitatea", "oportunitățile", "oportunității", "oportunităților"); 
    const noun_problem = new NounFemale("problem", "problemă", "probleme", "problema", "problemele", "problemei", "problemelor"); 
    const noun_promotion = new NounFemale("promotion", "promovare", "promovări", "promovarea", "promovările", "promovării", "promovărilor"); 
    const noun_report = new NounNeuter("report", "raport", "rapoarte", "raportul", "rapoartele", "raportului", "rapoartelor"); 
    const noun_result = new NounNeuter("result", "rezultat", "rezultate", "rezultatul", "rezultatele", "rezultatului", "rezultatelor"); 
    const noun_salary = new NounNeuter("salary", "salariu", "salarii", "salariul", "salariile", "salariului", "salariilor"); 
    const noun_skill = new NounFemale("skill", "abilitate", "abilități", "abilitatea", "abilitățile", "abilității", "abilităților"); 
    const noun_workday = new NounFemale("workday", "zi de muncă", "zile de muncă", "ziua de muncă", "zilele de muncă", "zilei de muncă", "zilelor de muncă"); 


    setParentAndMultipleChildren(AtWork, [
        noun_project, noun_appointment, noun_boss, noun_detail, noun_employee, noun_experience, noun_facility, noun_humanResources, 
        noun_job, noun_meeting, noun_method, noun_objective, noun_opportunity, noun_problem, noun_promotion, noun_report, noun_result, 
        noun_salary, noun_skill, noun_workday, 
    ])

    // #home ===========================

    let atHome = new DataCard("At Home", "Acasă", ""); 
    setParentAndChild(wordclass_nouns, atHome)

    //#workshop
    let TheWorkshop = new Theme("The Workshop", "Atelierul"); 
    setParentAndChild(atHome, TheWorkshop)

    const noun_axe = new NounFemale("axe", "secure", "securi", "securea", "securile", "securii", "securilor"); 
    const noun_barrel = new NounNeuter("barrel", "butoi", "butoaie", "butoiul", "butoaiele", "butoiului", "butoaielor"); 
    const noun_bolt = new NounNeuter("bolt", "șurub", "șuruburi", "șurubul", "șuruburile", "șurubului", "șuruburilor"); 
    const noun_drill = new NounFemale("drill", "bormașină", "bormașini", "bormașina", "bormașinile", "bormașinii", "bormașinilor"); 
    const noun_file = new NounFemale("file", "pilă", "pile", "pila", "pilele", "pilei", "pilelor"); 
    const noun_hammer = new NounMale("hammer", "ciocan", "ciocane", "ciocanul", "ciocanele", "ciocanului", "ciocanelor"); 
    const noun_jar = new NounNeuter("jar", "borcan", "borcane", "borcanul", "borcanele", "borcanului", "borcanelor"); 
    const noun_ladder = new NounFemale("ladder", "scară", "scări", "scara", "scările", "scării", "scărilor"); 
    const noun_nail = new NounNeuter("nail", "cui", "cuie", "cuiul", "cuiele", "cuiului", "cuielor"); 
    const noun_nut = new NounFemale("nuts", "piuliță", "piulițe", "piulița", "piulițele", "piuliței", "piulițelor"); 
    const noun_paintPot = new NounFemale("paint pot", "cutie de vopsea", "cutii de vopsea", "cutia de vopsea", "cutiile de vopsea", "cutiei de vopsea", "cutiilor de vopsea"); 
    const noun_penknife = new NounNeuter("penknife", "briceag", "bricege", "briceagul", "bricegele", "briceagului", "bricegelor"); 
    const noun_plank = new NounFemale("plank", "scândură", "scânduri", "scândura", "scândurile", "scândurii", "scândurilor"); 
    const noun_plier = new NounMale("pliers", "clește", "clești", "cleștele", "cleștii", "cleștelui", "cleștilor"); 
    const noun_sandpaper = new NounNeuter("sandpaper", "șmirghel", "șmirghele", "șmirghelul", "șmirghelele", "șmirghelului", "șmirghelelor"); 
    const noun_saw = new NounNeuter("saw", "ferăstrău", "ferăstraie", "ferăstrăul", "ferăstraiele", "ferăstrăului", "ferăstraielor"); 
    const noun_sawdust = new NounNeuter("sawdust", "rumeguș", "", "rumegușul", "", "rumegușului", ""); 
    const noun_screwdriver = new NounFemale("screwdriver", "șurubelniță", "șurubelnițe", "șurubelnița", "șurubelnițele", "șurubelniței", "șurubelnițelor"); 
    const noun_screw = new NounNeuter("screw", "șurub", "șuruburi", "șurubul", "șuruburile", "șurubului", "șuruburilor"); 
    const noun_tapeMeasure = new NounFemale("tape measure", "ruletă", "rulete", "ruleta", "ruletele", "ruletei", "ruletelor"); 
    const noun_toolbox = new NounFemale("toolbox", "trusă de scule", "truse de scule", "trusa de scule", "trusele de scule", "trusei de scule", "truselor de scule"); 
    const noun_vice = new NounFemale("vice", "menghină", "menghine", "menghina", "menghinele", "menghinei", "menghinelor"); 
    const noun_wood = new NounNeuter("wood", "lemn", "lemne", "lemnul", "lemnele", "lemnului", "lemnelor"); 
    const noun_woodShaving = new NounFemale("wood shaving", "așchie de lemn", "așchii de lemn", "așchia de lemn", "așchiile de lemn", "așchiei de lemn", "așchiilor de lemn"); 
    const noun_workbench = new NounFemale("workbench", "banc de lucru", "bănci de lucru", "banca de lucru", "băncile de lucru", "băncii de lucru", "băncilor de lucru"); 
    

    setParentAndMultipleChildren(TheWorkshop, [
        noun_axe, noun_barrel, noun_bolt, noun_drill, noun_file, noun_hammer, noun_jar, noun_ladder, noun_nail, noun_nut, noun_paintPot, 
        noun_penknife, noun_plank, noun_plier, noun_sandpaper, noun_saw, noun_sawdust, noun_screwdriver, noun_screw, noun_tapeMeasure, 
        noun_toolbox, noun_vice, noun_wood, noun_woodShaving, noun_workbench, 
    ])

    //#garden
    let theGarden = new Theme("The Garden", "Grădina"); 
    setParentAndChild(atHome, theGarden)

    const noun_bone = new NounNeuter("bone", "os", "oase", "osul", "oasele", "osului", "oaselor"); 
    const noun_bonfire = new NounNeuter("bonfire", "foc de tabără", "focuri de tabără", "focul de tabără", "focurile de tabără", "focului de tabără", "focurilor de tabără"); 
    const noun_brick = new NounFemale("brick", "cărămidă", "cărămizi", "cărămida", "cărămizile", "cărămizii", "cărămizilor"); 
    const noun_diggingSpade = new NounFemale("digging spade", "lopată de săpat", "lopeți de săpat", "lopata de săpat", "lopetele de săpat", "lopății de săpat", "lopetelor de săpat"); 
    const noun_dustbin = new NounFemale("dustbin", "pubelă", "pubele", "pubela", "pubelele", "pubelei", "pubelelor"); 
    const noun_flowers = new NounFemale("flower", "floare", "flori", "floarea", "florile", "florii", "florilor"); 
    const noun_gardenFork = new NounFemale("garden fork", "furcă de grădină", "furci de grădină", "furca de grădină", "furcile de grădină", "furcii de grădină", "furcilor de grădină"); 
    const noun_grass = new NounFemale("grass", "iarbă", "ierburi", "iarba", "ierburile", "ierbii", "ierburilor"); 
    const noun_greenhouse = new NounFemale("greenhouse", "seră", "sere", "sera", "serele", "serei", "serelor"); 
    const noun_hedge = new NounNeuter("hedge", "gard viu", "gărzi vii", "gardul viu", "gărzile vii", "gardului viu", "gardurilor vii"); 
    const noun_hoe = new NounFemale("hoe", "sapa", "sape", "sapa", "sapele", "sapei", "sapelor"); 
    const noun_hosepipe = new NounNeuter("hosepipe", "furtun", "furtunuri", "furtunul", "furtunurile", "furtunului", "furtunurilor"); 
    const noun_lawnmower = new NounFemale("lawnmower", "mașină de tuns iarba", "mașini de tuns iarba", "mașina de tuns iarba", "mașinile de tuns iarba", "mașinii de tuns iarba", "mașinilor de tuns iarba"); 
    const noun_leaf = new NounFemale("leaf", "frunză", "frunze", "frunza", "frunzele", "frunzei", "frunzelor"); 
    const noun_nest = new NounNeuter("nest", "cuib", "cuiburi", "cuibul", "cuiburile", "cuibului", "cuiburilor"); 
    const noun_path = new NounFemale("path", "potecă", "poteci", "poteca", "potecile", "potecii", "potecilor"); 
    const noun_pram = new NounNeuter("pram", "cărucior", "cărucioare", "căruciorul", "cărucioarele", "căruciorului", "cărucioarelor"); 
    const noun_rake = new NounFemale("rake", "greblă", "greble", "grebla", "greblele", "greblei", "greblelor"); 
    const noun_seed = new NounFemale("seed", "sămânță", "semințe", "sămânța", "semințele", "seminței", "semințelor"); 
    const noun_shed = new NounNeuter("shed", "șopron", "șoproane", "șopronul", "șoproanele", "șopronului", "șopronelor"); 
    const noun_smoke = new NounNeuter("smoke", "fum", "fumuri", "fumul", "fumurile", "fumului", "fumurilor"); 
    const noun_sprinkler = new NounNeuter("sprinkler", "aspersor", "aspersoare", "aspersorul", "aspersoarele", "aspersorului", "aspersoarelor"); 
    const noun_stick = new NounNeuter("stick", "băț", "bețe", "bățul", "bețele", "bățului", "bețelor"); 
    const noun_tree = new NounMale("tree", "copac", "copaci", "copacul", "copacii", "copacului", "copacilor"); 
    const noun_vegetable = new NounFemale("vegetable", "legumă", "legume", "leguma", "legumele", "legumei", "legumelor"); 
    const noun_wateringCan = new NounFemale("watering can", "stropitoare", "stropitori", "stropitoarea", "stropitorile", "stropitorii", "stropitorilor"); 
    const noun_wheelbarrow = new NounFemale("wheelbarrow", "roabă", "roabe", "roaba", "roabele", "roabei", "roabelor"); 


    setParentAndMultipleChildren(theGarden, [
        noun_bone, noun_bonfire, noun_brick, noun_diggingSpade, noun_dustbin, noun_flowers, noun_gardenFork, noun_grass, noun_greenhouse, noun_hedge, 
        noun_hoe, noun_hosepipe, noun_lawnmower, noun_leaf, noun_nest, noun_path, noun_pram, noun_rake, noun_seed, noun_shed, noun_smoke, noun_sprinkler, 
        noun_stick, noun_tree, noun_vegetable, noun_wateringCan, noun_wheelbarrow, 
    ])

  
    //#kitchen
    let theKitchen = new Theme("The Kitchen", "Bucătăria"); 
    setParentAndChild(atHome, theKitchen)

    const noun_storageRoom = new NounFemale("storage room", "debara", "debare", "debaraua", "debarele", "debaralei", "debarelelor"); 
    const noun_apron = new NounNeuter("apron", "șorț", "șorțuri", "șorțul", "șorțurile", "șorțului", "șorțurilor"); 
    const noun_bowl = new NounNeuter("bowl", "bol", "boluri", "bolul", "bolurile", "bolului", "bolurilor"); 
    const noun_broom = new NounFemale("broom", "mătură", "mături", "mătura", "măturile", "măturii", "măturilor"); 
    const noun_broomCupboard = new NounNeuter("broom cupboard", "dulap pentru mături", "dulapuri pentru mături", "dulapul pentru mături", "dulapurile pentru mături", "dulapului pentru mături", "dulapurilor pentru mături"); 
    const noun_brush = new NounFemale("brush", "perie", "perii", "peria", "periile", "periei", "periilor"); 
    const noun_clock = new NounNeuter("clock", "ceas", "ceasuri", "ceasul", "ceasurile", "ceasului", "ceasurilor"); 
    const noun_clothesIron = new NounNeuter("clothes iron", "fier de călcat", "fiare de călcat", "fierul de călcat", "fiarele de călcat", "fierului de călcat", "fiarelor de călcat"); 
    const noun_cooker = new NounNeuter("cooker", "aragaz", "aragazuri", "aragazul", "aragazurile", "aragazului", "aragazurilor"); 
    const noun_cup = new NounFemale("cup", "cană", "căni", "cana", "cănile", "cănii", "cănilor"); 
    const noun_door = new NounFemale("door", "ușă", "uși", "ușa", "ușile", "ușii", "ușilor"); 
    const noun_drawer = new NounNeuter("drawer", "sertar", "sertare", "sertarul", "sertarele", "sertarului", "sertarelor"); 
    const noun_drinkingGlass = new NounNeuter("drinking glass", "pahar", "pahare", "paharul", "paharele", "paharului", "paharelor"); 
    const noun_duster = new NounFemale("duster", "pânză de praf", "pânze de praf", "pânza de praf", "pânzele de praf", "pânzei de praf", "pânzelor de praf"); 
    const noun_dustpan = new NounNeuter("dustpan", "făraș", "fărașe", "fărașul", "fărașele", "fărașului", "fărașelor"); 
    const noun_fire = new NounNeuter("fire", "foc", "focuri", "focul", "focurile", "focului", "focurilor"); 
    const noun_fork = new NounFemale("fork", "furculiță", "furculițe", "furculița", "furculițele", "furculiței", "furculițelor"); 
    const noun_fridge = new NounNeuter("fridge", "frigider", "frigidere", "frigiderul", "frigiderele", "frigiderului", "frigiderelor"); 
    const noun_fryingPan = new NounFemale("frying pan", "tigaie", "tigăi", "tigaia", "tigăile", "tigăii", "tigăilor"); 
    const noun_ironingBoard = new NounFemale("ironing board", "masă de călcat", "mese de călcat", "masa de călcat", "mesele de călcat", "masei de călcat", "meselor de călcat"); 
    const noun_kettle = new NounNeuter("kettle", "fierbător", "fierbătoare", "fierbătorul", "fierbătoarele", "fierbătorului", "fierbătoarelor"); 
    const noun_key = new NounFemale("key", "cheie", "chei", "cheia", "cheile", "cheii", "cheilor"); 
    const noun_kitchenSink = new NounFemale("kitchen sink", "chiuvetă", "chiuvete", "chiuveta", "chiuvetele", "chiuvetei", "chiuvetelor"); 
    const noun_knife = new NounNeuter("knife", "cuțit", "cuțite", "cuțitul", "cuțitele", "cuțitului", "cuțitelor"); 
    const noun_lightSwitch = new NounNeuter("light switch", "întrerupător", "întrerupătoare", "întrerupătorul", "întrerupătoarele", "întrerupătorului", "întrerupătoarelor"); 
    const noun_matchFire = new NounNeuter("match", "chibrit", "chibrituri", "chibritul", "chibriturile", "chibritului", "chibriturilor"); 
    const noun_mop = new NounNeuter("mop", "mop", "mopuri", "mopul", "mopurile", "mopului", "mopurilor"); 
    const noun_pan = new NounFemale("pan", "tigaie", "tigăi", "tigaia", "tigăile", "tigăii", "tigăilor"); 
    const noun_plates = new NounFemale("plate", "farfurie", "farfurii", "farfuria", "farfuriile", "farfuriei", "farfuriilor"); 
    const noun_pot = new NounFemale("pot", "oală", "oale", "oala", "oalele", "oalei", "oalelor"); 
    const noun_rubbish = new NounNeuter("rubbish", "gunoi", "gunoaie", "gunoiul", "gunoaiele", "gunoiului", "gunoaielor"); 
    const noun_saucepan = new NounFemale("saucepan", "cratiță", "cratițe", "cratița", "cratițele", "cratiței", "cratițelor"); 
    const noun_saucer = new NounFemale("saucer", "farfurioară", "farfurioare", "farfurioara", "farfurioarele", "farfurioarei", "farfurioarelor"); 
    const noun_spoon = new NounFemale("spoon", "lingură", "linguri", "lingura", "lingurile", "lingurii", "lingurilor"); 
    const noun_stool = new NounNeuter("stool", "taburet", "taburete", "taburetul", "taburetele", "taburetului", "taburetelor"); 
    const noun_teaPot = new NounNeuter("teapot", "ceainic", "ceainice", "ceainicul", "ceainicele", "ceainicului", "ceainicelor"); 
    const noun_teaSpoon = new NounFemale("teaspoon", "linguriță", "lingurițe", "lingurița", "lingurițele", "linguriței", "lingurițelor"); 
    const noun_teaTowel = new NounNeuter("tea towel", "prosop de bucătărie", "prosoape de bucătărie", "prosopul de bucătărie", "prosoapele de bucătărie", "prosopului de bucătărie", "prosoapelor de bucătărie"); 
    const noun_tile = new NounFemale("tile", "gresie", "gresii", "gresia", "gresiile", "gresiei", "gresiilor"); 
    const noun_tray = new NounFemale("tray", "tavă", "tăvi", "tava", "tăvile", "tăvii", "tăvilor"); 
    const noun_vacuumCleaner = new NounNeuter("vacuum cleaner", "aspirator", "aspiratoare", "aspiratorul", "aspiratoarele", "aspiratorului", "aspiratoarelor"); 
    const noun_vitamin = new NounFemale("vitamin", "vitamină", "vitamine", "vitamina", "vitaminele", "vitaminei", "vitaminelor"); 
    const noun_washingMachine = new NounFemale("washing machine", "mașină de spălat", "mașini de spălat", "mașina de spălat", "mașinile de spălat", "mașinii de spălat", "mașinilor de spălat"); 
    const noun_washingPowder = new NounMale("washing powder", "detergent pudră", "detergenți pudră", "detergentul pudră", "detergenții pudră", "detergentului pudră", "detergenților pudră"); 


    setParentAndMultipleChildren(theKitchen, [
        noun_storageRoom, noun_apron, noun_bowl, noun_broom, noun_broomCupboard, noun_brush, noun_clock, noun_clothesIron, noun_cooker, noun_cup, 
        noun_door, noun_drawer, noun_drinkingGlass, noun_duster, noun_dustpan, noun_fire, noun_fork, noun_fridge, noun_fryingPan, noun_ironingBoard, 
        noun_kettle, noun_key, noun_kitchenSink, noun_knife, noun_lightSwitch, noun_matchFire, noun_mop, noun_pan, noun_plates, noun_pot, noun_rubbish, 
        noun_saucepan, noun_saucer, noun_spoon, noun_stool, noun_teaPot, noun_teaSpoon, noun_teaTowel, noun_tile, noun_tray, noun_vacuumCleaner, noun_vitamin, 
        noun_washingMachine, noun_washingPowder, 
    ])
  

    //#inhome
    let home = new Theme("Home", "Casă"); 
    setParentAndChild(atHome, home)

    const noun_ceiling = new NounNeuter("ceiling", "tavan", "tavane", "tavanul", "tavanele", "tavanului", "tavanelor"); 
    const noun_ballgown = new NounFemale("ball gown", "rochie de gală", "rochii de gală", "rochia de gală", "rochiile de gală", "rochiei de gală", "rochiilor de gală"); 
    const noun_balloon = new NounNeuter("balloon", "balon", "baloane", "balonul", "baloanele", "balonului", "baloanelor"); 
    const noun_bath = new NounFemale("bath", "cadă", "căzi", "cada", "cazile", "căzii", "cazilor"); 
    const noun_bathroom = new NounFemale("bathroom", "baie", "băi", "baia", "băile", "băii", "băilor"); 
    const noun_bed = new NounNeuter("bed", "pat", "paturi", "patul", "paturile", "patului", "paturilor"); 
    const noun_bedroom = new NounNeuter("bedroom", "dormitor", "dormitoare", "dormitorul", "dormitoarele", "dormitorului", "dormitoarelor"); 
    const noun_blanket = new NounFemale("blanket", "pătură", "pături", "pătura", "păturile", "păturii", "păturilor"); 
    const noun_bookshelf = new NounNeuter("bookshelf", "raft de cărți", "rafturi de cărți", "raftul de cărți", "rafturile de cărți", "raftului de cărți", "rafturilor de cărți"); 
    const noun_candle = new NounFemale("candle", "lumânare", "lumânări", "lumânarea", "lumânările", "lumânării", "lumânărilor"); 
    const noun_carpet = new NounNeuter("carpet", "covor", "covoare", "covorul", "covoarele", "covorului", "covoarelor"); 
    const noun_chair = new NounNeuter("chair", "scaun", "scaune", "scaunul", "scaunele", "scaunului", "scaunelor"); 
    const noun_chestOfdrawers = new NounFemale("chest of drawers", "comodă", "comode", "comoda", "comodele", "comodei", "comodelor"); 
    const noun_clothesPeg = new NounNeuter("clothes peg", "cârlig de rufe", "cârlige de rufe", "cârligul de rufe", "cârligele de rufe", "cârligului de rufe", "cârligelor de rufe"); 
    const noun_comb = new NounMale("comb", "pieptene", "piepteni", "pieptenele", "pieptenii", "pieptenelui", "pieptenilor"); 
    const noun_computer = new NounNeuter("computer", "calculator", "calculatoare", "calculatorul", "calculatoarele", "calculatorului", "calculatoarelor"); 
    const noun_cushion = new NounFemale("cushion", "pernă decorativă", "perne decorative", "perna decorativă", "pernele decorative", "pernei decorative", "pernelor decorative"); 
    const noun_duvet = new NounFemale("duvet", "pilotă", "pilote", "pilota", "pilotele", "pilotei", "pilotelor"); 
    const noun_dvd = new NounNeuter("DVD", "DVD", "DVD-uri", "DVD-ul", "DVD-urile", "DVD-ului", "DVD-urilor"); 
    const noun_entrance = new NounFemale("entrance", "intrare", "intrări", "intrarea", "intrările", "intrării", "intrărilor"); 
    const noun_envelope = new NounNeuter("envelope", "plic", "plicuri", "plicul", "plicurile", "plicului", "plicurilor"); 
    const noun_eyeGlasses = new NounFemale("eyeglasses", "ochelari", "ochelari", "", "ochelarii", "", "ochelarilor"); 
    const noun_firework = new NounNeuter("firework", "foc de artificii", "focuri de artificii", "focul de artificii", "focurile de artificii", "focului de artificii", "focurilor de artificii"); 
    const noun_floor = new NounFemale("floor", "podea", "podele", "podeaua", "podelele", "podelei", "podelelor"); 
    const noun_hairbrush = new NounFemale("hairbrush", "perie de păr", "perii de păr", "peria de păr", "periile de păr", "periei de păr", "periilor de păr"); 
    const noun_hall = new NounNeuter("hall", "hol", "holuri", "holul", "holurile", "holului", "holurilor"); 
    const noun_lamp = new NounFemale("lamp", "lampă", "lămpi", "lampa", "lămpile", "lămpii", "lămpilor"); 
    const noun_laundry = new NounFemale("laundry", "rufe", "rufe", "rufele", "rufele", "rufelor", "rufelor"); 
    const noun_letter = new NounFemale("letter", "scrisoare", "scrisori", "scrisoarea", "scrisorile", "scrisorii", "scrisorilor"); 
    const noun_lightbulb = new NounNeuter("lightbulb", "bec", "becuri", "becul", "becurile", "becului", "becurilor"); 
    const noun_livingRoom = new NounFemale("living room", "sufragerie", "sufragerii", "sufrageria", "sufrageriile", "sufrageriei", "sufrageriilor"); 
    const noun_mat = new NounNeuter("mat", "preș", "preșuri", "preșul", "preșurile", "preșului", "preșurilor"); 
    const noun_mirror = new NounFemale("mirror", "oglindă", "oglinzi", "oglinda", "oglinzile", "oglinzii", "oglinzilor"); 
    const noun_newspaper = new NounNeuter("newspaper", "ziar", "ziare", "ziarul", "ziarele", "ziarului", "ziarelor"); 
    const noun_package = new NounNeuter("package", "pachet", "pachete", "pachetul", "pachetele", "pachetului", "pachetelor"); 
    const noun_paperchain = new NounFemale("paper chain", "ghirlandă", "ghirlande", "ghirlanda", "ghirlandele", "ghirlandei", "ghirlandelor"); 
    const noun_party = new NounFemale("party", "petrecere", "petreceri", "petrecerea", "petrecerile", "petrecerii", "petrecerilor"); 
    const noun_picture = new NounNeuter("picture", "tablou", "tablouri", "tabloul", "tablourile", "tabloului", "tablourilor"); 
    const noun_pillow = new NounFemale("pillow", "pernă", "perne", "perna", "pernele", "pernei", "pernelor"); 
    const noun_presentGift = new NounNeuter("present", "cadou", "cadouri", "cadoul", "cadourile", "cadoului", "cadourilor"); 
    const noun_radiator = new NounNeuter("radiator", "calorifer", "calorifere", "caloriferul", "caloriferele", "caloriferului", "caloriferelor"); 
    const noun_radio = new NounNeuter("radio", "radio", "radiouri", "radioul", "radiourile", "radioului", "radiourilor"); 
    const noun_ribbon = new NounFemale("ribbon", "panglică", "panglici", "panglica", "panglicile", "panglicii", "panglicilor"); 
    const noun_rug = new NounNeuter("rug", "covoraș", "covorașe", "covorașul", "covorașele", "covorașului", "covorașelor"); 
    const noun_sheet = new NounNeuter("sheet", "cearșaf", "cearșafuri", "cearșaful", "cearșafurile", "cearșafului", "cearșafurilor"); 
    const noun_shower = new NounFemale("shower", "duș", "dușuri", "dușul", "dușurile", "dușului", "dușurilor"); 
    const noun_sinkBasin = new NounFemale("sink basin", "chiuvetă", "chiuvete", "chiuveta", "chiuvetele", "chiuvetei", "chiuvetelor"); 
    const noun_soap = new NounNeuter("soap", "săpun", "săpunuri", "săpunul", "săpunurile", "săpunului", "săpunurilor"); 
    const noun_sofa = new NounFemale("sofa", "canapea", "canapele", "canapeaua", "canapelele", "canapelei", "canapelelor"); 
    const noun_sponge = new NounMale("sponge", "burete", "bureți", "buretele", "bureții", "buretelui", "bureților"); 
    const noun_stairs = new NounFemale("stairs", "scară", "scări", "scara", "scările", "scării", "scărilor"); 
    const noun_table = new NounFemale("table", "masă", "mese", "masa", "mesele", "mesei", "meselor"); 
    const noun_tableCloth = new NounFemale("table cloth", "față de masă", "fețe de masă", "fața de masă", "fețele de masă", "feței de masă", "fețelor de masă"); 
    const noun_tap = new NounNeuter("tap", "robinet", "robinete", "robinetul", "robinetele", "robinetului", "robinetelor"); 
    const noun_teddyBear = new NounMale("teddy bear", "ursuleț de pluș", "ursuleți de pluș", "ursulețul de pluș", "ursuleții de pluș", "ursulețului de pluș", "ursuleților de pluș"); 
    const noun_telephone = new NounNeuter("telephone", "telefon", "telefoane", "telefonul", "telefoanele", "telefonului", "telefoanelor"); 
    const noun_television = new NounNeuter("television", "televizor", "televizoare", "televizorul", "televizoarele", "televizorului", "televizoarelor"); 
    const noun_toilet = new NounFemale("toilet", "toaletă", "toalete", "toaleta", "toaletele", "toaletei", "toaletelor"); 
    const noun_toiletPaper = new NounFemale("toilet paper", "hârtie igienică", "hârtii igienice", "hârtia igienică", "hârtiile igienice", "hârtiei igienice", "hârtiilor igienice"); 
    const noun_toothbrush = new NounFemale("toothbrush", "periuță de dinți", "periuțe de dinți", "periuța de dinți", "periuțele de dinți", "periuței de dinți", "periuțelor de dinți"); 
    const noun_toothpaste = new NounFemale("toothpaste", "pastă de dinți", "paste de dinți", "pasta de dinți", "pasele de dinți", "pastei de dinți", "pastelor de dinți"); 
    const noun_towel = new NounNeuter("towel", "prosop", "prosoape", "prosopul", "prosoapele", "prosopului", "prosoapelor"); 
    const noun_villa = new NounFemale("villa", "vilă", "vile", "vila", "vilele", "vilei", "vilelor"); 
    const noun_wall = new NounMale("wall", "perete", "pereți", "peretele", "pereții", "peretelui", "pereților"); 
    const noun_wardrobe = new NounMale("wardrobe", "dulap", "dulapuri", "dulapul", "dulapurile", "dulapului", "dulapurilor"); 
    const noun_water = new NounFemale("water", "apă", "ape", "apa", "apele", "apei", "apelor"); 
    const noun_window = new NounFemale("window", "fereastră", "ferestre", "fereastra", "ferestrele", "ferestrei", "ferestrelor"); 

    setParentAndMultipleChildren(home, [
        noun_ceiling, noun_ballgown, noun_balloon, noun_bath, noun_bathroom, noun_bed, noun_bedroom, noun_blanket, noun_bookshelf, noun_candle, noun_carpet,
        noun_chair, noun_chestOfdrawers, noun_clothesPeg, noun_comb, noun_computer, noun_cushion, noun_duvet, noun_dvd, noun_entrance, noun_envelope, 
        noun_eyeGlasses, noun_firework, noun_floor, noun_hairbrush, noun_hall, noun_lamp, noun_laundry, noun_letter, noun_lightbulb, noun_livingRoom, noun_mat, 
        noun_mirror, noun_newspaper, noun_package, noun_paperchain, noun_party, noun_picture, noun_pillow, noun_presentGift, noun_radiator, noun_radio, noun_ribbon,  
        noun_rug, noun_sheet, noun_shower, noun_sinkBasin, noun_soap, noun_sofa, noun_sponge, noun_stairs, noun_table, noun_tableCloth, noun_tap, noun_teddyBear, 
        noun_telephone, noun_television, noun_toilet, noun_toiletPaper, noun_toothbrush, noun_toothpaste, noun_towel, noun_villa, noun_wall, noun_wardrobe, noun_water, noun_window, 
    ])


    //#toys
    let Toys = new Theme("Toys", "Jucării"); 
    setParentAndChild(atHome, Toys)

    const noun_arrow = new NounFemale("arrow", "săgeată", "săgeți", "săgeata", "săgețile", "săgeții", "săgeților"); 
    const noun_beads = new NounFemale("bead", "mărgea", "mărgele", "mărgeaua", "mărgelele", "mărgelei", "mărgelelor"); 
    const noun_boat = new NounFemale("boat", "barcă", "bărci", "barca", "bărcile", "bărcii", "bărcilor"); 
    const noun_bow = new NounNeuter("bow", "arc", "arcuri", "arcul", "arcurile", "arcului", "arcurilor"); 
    const noun_castle = new NounNeuter("castle", "castel", "castele", "castelul", "castelele", "castelului", "castelelor"); 
    const noun_crane = new NounFemale("crane", "macara", "macarale", "macaraua", "macaralele", "macaralei", "macaralelor"); 
    const noun_cubes = new NounNeuter("cubes", "cub", "cuburi", "cubul", "cuburile", "cubului", "cuburilor"); 
    const noun_dice = new NounNeuter("dice", "zar", "zaruri", "zarul", "zarurile", "zarului", "zarurilor"); 
    const noun_dolls = new NounFemale("doll", "păpușă", "păpuși", "păpușa", "păpușile", "păpușei", "păpușilor"); 
    const noun_drums = new NounFemale("drum", "tobă", "tobe", "toba", "tobele", "tobei", "tobelor"); 
    const noun_guitar = new NounFemale("guitar", "chitară", "chitare", "chitara", "chitarele", "chitarei", "chitarelor"); 
    const noun_harmonica = new NounFemale("harmonica", "muzicuță", "muzicuțe", "muzicuța", "muzicuțele", "muzicuței", "muzicuțelor"); 
    const noun_marbles = new NounFemale("marble", "bilă", "bile", "bila", "bilele", "bilei", "bilelor"); 
    const noun_masks = new NounFemale("mask", "mască", "măști", "masca", "măștile", "măștii", "măștilor"); 
    const noun_necklace = new NounNeuter("necklace", "colier", "coliere", "colierul", "colierele", "colierului", "colierelor"); 
    const noun_paints = new NounFemale("paint", "vopsea", "vopsele", "vopseaua", "vopselele", "vopselei", "vopselelor"); 
    const noun_parachute = new NounFemale("parachute", "parașută", "parașute", "parașuta", "parașutele", "parașutei", "parașutelor"); 
    const noun_piano = new NounNeuter("piano", "pian", "piane", "pianul", "pianele", "pianului", "pianelor"); 
    const noun_playingCards = new NounFemale("playing card", "carte de joc", "cărți de joc", "cartea de joc", "cărțile de joc", "cărții de joc", "cărților de joc"); 
    const noun_puppets = new NounMale("puppet", "păpușar", "păpușari", "păpușarul", "păpușarii", "păpușarului", "păpușarilor"); 
    const noun_ring_jewelry = new NounNeuter("ring (jewelry)", "inel", "inele", "inelul", "inelele", "inelului", "inelelor"); 
    const noun_robot = new NounMale("robot", "robot", "roboți", "robotul", "roboții", "robotului", "roboților"); 
    const noun_soldiers = new NounMale("soldier", "soldat", "soldați", "soldatul", "soldații", "soldatului", "soldaților"); 
    const noun_submarine = new NounNeuter("submarine", "submarin", "submarine", "submarinul", "submarinele", "submarinului", "submarinelor"); 
    const noun_trumpet = new NounFemale("trumpet", "trompetă", "trompete", "trompeta", "trompetele", "trompetei", "trompetelor"); 
    const noun_whistle = new NounNeuter("whistle", "fluier", "fluier", "fluierul", "fluierul", "fluierului", "fluierului"); 

    setParentAndMultipleChildren(Toys, [
        noun_arrow, noun_beads, noun_boat, noun_bow, noun_castle, noun_crane, noun_cubes, noun_dice, noun_dolls,
        noun_drums, noun_guitar, noun_harmonica, noun_marbles, noun_masks, noun_necklace, noun_paints, noun_parachute,
        noun_piano, noun_playingCards, noun_puppets, noun_ring_jewelry, noun_robot, noun_soldiers, noun_submarine,
        noun_trumpet, noun_whistle,
    ])

    // #people ================================
    let people = new Theme("People", "Oamenii") 
    setParentAndChild(wordclass_nouns, people)

    const noun_baby = new NounMale("baby", "bebeluș", "bebeluși", "bebelușul", "bebelușii", "bebelușului", "bebelușilor"); 
    const noun_boy = new NounMale("boy", "băiat", "băieți", "băiatul", "băieții", "băiatului", "băieților"); 
    const noun_child = new NounNeuter("child", "copil", "copii", "copilul", "copiii", "copilului", "copiilor"); 
    const noun_girl = new NounFemale("girl", "fată", "fete", "fata", "fetele", "fetei", "fetelor"); 
    const noun_man = new NounMale("man", "bărbat", "bărbați", "bărbatul", "bărbații", "bărbatului", "bărbaților"); 
    const noun_woman = new NounFemale("woman", "femeie", "femei", "femeia", "femeile", "femeii", "femeilor"); 

    setParentAndMultipleChildren(people, [
        noun_baby, noun_boy, noun_child, noun_girl, noun_man, noun_woman,
    ])


    // #clothes
    let Clothes = new Theme("Clothes", "Hainele"); 
    setParentAndChild(people, Clothes)

    const noun_baseballCap = new NounFemale("baseball cap", "șapcă", "șepci", "șapca", "șepcile", "șepcii", "șepcilor");
    const noun_belt = new NounFemale("belt", "curea", "curele", "cureaua", "curelele", "curelei", "curelelor"); 
    const noun_boots = new NounFemale("boots", "cizmă", "cizme", "cizma", "cizmele", "cizmei", "cizmelor"); 
    const noun_bracelet = new NounFemale("bracelet", "brățară", "brățări", "brățara", "brățările", "brățării", "brățărilor"); 
    const noun_buckle = new NounFemale("buckle", "cataramă", "catarame", "catarama", "cataramele", "cataramei", "cataramelor"); 
    const noun_buttonHole = new NounFemale("buttonhole", "butonieră", "butoniere", "butoniera", "butonierele", "butonierei", "butonierelor"); 
    const noun_buttons = new NounMale("buttons", "nasture", "nasturi", "nasturele", "nasturii", "nasturelui", "nasturilor"); 
    const noun_cardigan = new NounNeuter("cardigan", "cardigan", "cardigane", "cardiganul", "cardiganele", "cardiganului", "cardiganelor"); 
    const noun_clothesTag = new NounFemale("clothes tag", "etichetă", "etichete", "eticheta", "etichetele", "etichetei", "etichetelor"); 
    const noun_coat = new NounNeuter("coat", "palton", "paltoane", "paltonul", "paltoanele", "paltonului", "paltoanelor"); 
    const noun_dress = new NounFemale("dress", "rochie", "rochii", "rochia", "rochiile", "rochiei", "rochiilor"); 
    const noun_dressingGown = new NounNeuter("dressing gown", "halat", "halate", "halatul", "halatele", "halatului", "halatelor"); 
    const noun_flipFlops = new NounMale("flip-flops", "șlap", "șlapi", "șlapul", "șlapii", "șlapului", "șlapilor"); 
    const noun_flipper = new NounFemale("flipper", "înotătoare", "înotătoare", "înotătoarea", "înotătoarele", "înotătoarei", "înotătoarelor"); 
    const noun_gem = new NounFemale("gem", "piatră prețioasă", "pietre prețioase", "piatra prețioasă", "pietrele prețioase", "pietrei prețioase", "pietrelor prețioase"); 
    const noun_gloves = new NounFemale("gloves", "mănușă", "mănuși", "mănușa", "mănușile", "mănușii", "mănușilor"); 
    const noun_handkerchief = new NounFemale("handkerchief", "batistă", "batiste", "batista", "batistele", "batistei", "batistelelor"); 
    const noun_hat = new NounFemale("hat", "pălărie", "pălării", "pălăria", "pălăriile", "pălăriei", "pălăriilor"); 
    const noun_highHeels = new NounMale("high heel", "pantofi cu toc", "pantofi cu toc", "pantoful cu toc", "pantofii cu toc", "pantofului cu toc", "pantofilor cu toc"); 
    const noun_jacket = new NounFemale("jacket", "jachetă", "jachete", "jacheta", "jachetele", "jachetei", "jachetelor"); 
    const noun_jeans = new NounMale("jeans", "blugi", "blugi", "", "blugii", "", "blugilor"); 
    const noun_jumper = new NounNeuter("jumper", "pulover", "pulovere", "puloverul", "puloverele", "puloverului", "puloverelor"); 
    const noun_lace = new NounFemale("lace", "dantelă", "dantele", "dantela", "dantelele", "dantelei", "dantelor"); 
    const noun_leather = new NounFemale("leather", "piele", "pieli", "pielea", "pielile", "pielei", "pielilor"); 
    const noun_nappy = new NounNeuter("nappy", "scutec", "scutece", "scutecul", "scutecele", "scutecului", "scutecelor"); 
    const noun_nightdress = new NounFemale("nightdress", "cămașă de noapte", "cămași de noapte", "cămașa de noapte", "cămașile de noapte", "cămașii de noapte", "cămașilor de noapte"); 
    const noun_pair = new NounFemale("pair", "pereche", "perechi", "perechea", "perechile", "perechii", "perechilor"); 
    const noun_pants = new NounMale("pants", "pantalon", "pantaloni", "pantalonul", "pantalonii", "pantalonului", "pantalonilor"); 
    const noun_plasticBag = new NounFemale("plastic bag", "pungă de plastic", "pungi de plastic", "punga de plastic", "pungile de plastic", "pungii de plastic", "pungilor de plastic"); 
    const noun_pockets = new NounNeuter("pockets", "buzunar", "buzunare", "buzunarul", "buzunarele", "buzunarului", "buzunarelor"); 
    const noun_pyjama = new NounFemale("pyjama", "pijamă", "pijamale", "pijamaua", "pijamalele", "pijamalei", "pijamalelor"); 
    const noun_raincoat = new NounFemale("raincoat", "pelerină de ploaie", "pelerine de ploaie", "pelerina de ploaie", "pelerinele de ploaie", "pelerinei de ploaie", "pelerinelor de ploaie"); 
    const noun_rubber = new NounNeuter("rubber", "cauciuc", "cauciucuri", "cauciucul", "cauciucurile", "cauciucului", "cauciucurilor"); 
    const noun_sandal = new NounFemale("sandal", "sandal", "sandale", "sandaua", "sandalele", "sandalei", "sandalelor"); 
    const noun_scarf = new NounFemale("scarf", "eșarfă", "eșarfe", "eșarfa", "eșarfele", "eșarfei", "eșarfelor"); 
    const noun_shirt = new NounFemale("shirt", "cămașă", "cămași", "cămașa", "cămașile", "cămașii", "cămașilor"); 
    const noun_shoelace = new NounNeuter("shoelace", "șiret", "șireturi", "șiretul", "șireturile", "șiretului", "șireturilor"); 
    const noun_shoes = new NounMale("shoes", "pantof", "pantofi", "pantoful", "pantofii", "pantofului", "pantofilor"); 
    const noun_shorts = new NounMale("shorts", "pantalon scurt", "pantaloni scurți", "pantalonul scurt", "pantalonii scurți", "pantalonului scurt", "pantalonilor scurți"); 
    const noun_silk = new NounFemale("silk", "mătase", "mătase", "mătasea", "mătasele", "mătăsii", "mătăselor"); 
    const noun_skirt = new NounFemale("skirt", "fustă", "fuste", "fusta", "fustele", "fustei", "fustelor"); 
    const noun_slippers = new NounMale("slippers", "papuc", "papuci", "papucul", "papucii", "papucului", "papucilor"); 
    const noun_smallJacket = new NounFemale("small jacket", "jachețică", "jachețele", "jachețica", "jachețelele", "jachețicii", "jachețelelor"); 
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
    const noun_zip = new NounNeuter("zip", "fermoar", "fermoare", "fermoarul", "fermoarele", "fermoarului", "fermoarelor"); 

    setParentAndMultipleChildren(Clothes, [
        noun_baseballCap, noun_belt, noun_boots, noun_bracelet, noun_buckle, noun_buttonHole, noun_buttons, noun_cardigan, noun_clothesTag,
        noun_coat, noun_dress, noun_dressingGown, noun_flipFlops, noun_flipper, noun_gem, noun_gloves, noun_handkerchief, noun_hat, noun_highHeels,
        noun_jacket, noun_jeans, noun_jumper, noun_lace, noun_leather, noun_nappy, noun_nightdress, noun_pair, noun_pants, noun_plasticBag, noun_pockets,
        noun_pyjama, noun_raincoat, noun_rubber, noun_sandal, noun_scarf, noun_shirt, noun_shoelace, noun_shoes, noun_shorts, noun_silk, noun_skirt,
        noun_slippers, noun_smallJacket, noun_socks, noun_sole, noun_sunhat, noun_sweatshirt, noun_swimmingCostume, noun_tie, noun_tights, noun_trainers,
        noun_trousers, noun_tShirt, noun_vest, noun_watch, noun_zip
    ])



    // #families
    let families = new Theme("Families", "Familiile") 
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
    const noun_relative = new NounFemale("relative", "rudă", "rude", "ruda", "rudele", "rudei", "rudelor");
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
    let workJob = new Theme("Work (job)", "Mancă")
    setParentAndChild(people, workJob)

    const noun_actor = new NounMale("actor", "actor", "actori", "actorul", "actorii", "actorului", "actorilor"); 
    const noun_actress = new NounFemale("actress", "actriță", "actrițe", "actrița", "actrițele", "actriței", "actrițelor"); 
    const noun_apprenticeship = new NounFemale("apprenticeship", "ucenicie", "ucenicii", "ucenicia", "uceniciile", "uceniciei", "uceniciilor"); 
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
    const noun_fisherman = new NounMale("fisherman", "pescar", "pescari", "pescatorul", "pescarii", "pescatorului", "pescatorilor"); 
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
    ])

    // #shapes =================================
    let shapes = new Theme("Shapes", "Formele geometrice") 
    setParentAndChild(wordclass_nouns, shapes)

    const noun_circle = new NounNeuter("circle", "cerc", "cercuri", "cercul", "cercurile", "cercului", "cercurilor"); 
    const noun_cone = new NounNeuter("cone", "con", "conoide", "conul", "conoidele", "conului", "conoidelor"); 
    const noun_crescent = new NounFemale("crescent", "semilună", "semiluni", "semiluna", "semilunile", "semilunei", "semilunilor"); 
    const noun_cube = new NounNeuter("cube", "cub", "cuburi", "cubul", "cuburile", "cubului", "cuburilor"); 
    const noun_diamond = new NounNeuter("rhombus (diamond)", "romb", "romburi", "rombul", "romburile", "rombului", "romburilor"); 
    const noun_line = new NounFemale("line", "linie", "linii", "linia", "liniile", "liniei", "liniilor"); 
    const noun_oval = new NounNeuter("oval", "oval", "ovaloide", "ovalul", "ovaloidele", "ovalului", "ovaloidelor"); 
    const noun_rectangle = new NounNeuter("rectangle", "dreptunghi", "dreptunghiuri", "dreptunghiul", "dreptunghiurile", "dreptunghiului", "dreptunghiurilor"); 
    const noun_square = new NounNeuter("square", "pătrat", "pătrate", "pătratul", "pătratele", "pătratului", "pătratelor"); 
    const noun_triangle = new NounNeuter("triangle", "triunghi", "triunghiuri", "triunghiul", "triunghiurile", "triunghiului", "triunghiurilor"); 
    
    setParentAndMultipleChildren(shapes, [
        noun_circle, noun_cone, noun_crescent, noun_cube, noun_diamond, noun_line, noun_oval, noun_rectangle, noun_square, noun_triangle, 
    ])


    // #body =======================================
    let theBody = new Theme("The body", "Corpul") 
    setParentAndChild(wordclass_nouns, theBody)

    const noun_arm = new NounNeuter("arm", "braț", "brațe", "brațul", "brațele", "brațului", "brațelor"); 
    const noun_back = new NounNeuter("back", "spate", "spate", "spatele", "spatele", "spatelui", "spatelor"); 
    const noun_bottom = new NounNeuter("bottom", "fund", "funduri", "fundul", "fundurile", "fundului", "fundurilor"); 
    const noun_cheek = new NounMale("cheek", "obraz", "obraji", "obrazul", "obrajii", "obrazului", "obrajilor"); 
    const noun_chest = new NounNeuter("chest", "piept", "piepturi", "pieptul", "piepturile", "pieptului", "piepturilor"); 
    const noun_chin = new NounFemale("chin", "bărbie", "bărbii", "bărbia", "bărbiile", "bărbiei", "bărbiilor"); 
    const noun_ear = new NounFemale("ear", "ureche", "urechi", "urechea", "urechile", "urechii", "urechilor"); 
    const noun_elbow = new NounNeuter("elbow", "cot", "coate", "cotul", "coatele", "cotului", "coatelor"); 
    const noun_eye = new NounMale("eye", "ochi", "ochi", "ochiul", "ochii", "ochiului", "ochilor"); 
    const noun_eyebrow = new NounFemale("eyebrow", "sprânceană", "sprâncene", "sprânceana", "sprâncenele", "sprâncenei", "sprâncenelor"); 
    const noun_face = new NounFemale("face", "față", "fețe", "fața", "fețele", "feței", "fețelor"); 
    const noun_finger = new NounNeuter("finger", "deget", "degete", "degetul", "degetele", "degetului", "degetelor"); 
    const noun_foot = new NounNeuter("foot (leg)", "picior", "picioare", "piciorul", "picioarele", "piciorului", "picioarelor"); 
    const noun_hair = new NounMale("hair", "păr", "păr", "părul", "părul", "părului", "părului"); // uncountable 
    const noun_hand = new NounFemale("hand", "mână", "mâini", "mâna", "mâinile", "mâinii", "mâinilor"); 
    const noun_head = new NounMale("head", "cap", "capete", "capul", "capetele", "capului", "capetelor"); 
    const noun_knee = new NounMale("knee", "genunchi", "genunchi", "genunchiul", "genunchii", "genunchiului", "genunchilor"); 
    const noun_ankle = new NounFemale("leg", "gleznă", "glezne", "glezna", "gleznele", "gleznei", "gleznelor"); 
    const noun_life = new NounFemale("life", "viață", "vieți", "viața", "viețile", "vieții", "vieților"); 
    const noun_lips = new NounFemale("lips", "buză", "buze", "buza", "buzele", "buzei", "buzelor"); 
    const noun_mouth = new NounFemale("mouth", "gură", "guri", "gura", "gurile", "gurii", "gurilor"); 
    const noun_muscle = new NounMale("muscle", "mușchi", "mușchi", "mușchiul", "mușchii", "mușchiului", "mușchilor"); 
    const noun_neck = new NounNeuter("neck", "gât", "gâturi", "gâtul", "gâturile", "gâtului", "gâturilor"); 
    const noun_nose = new NounNeuter("nose", "nas", "nasuri", "nasul", "nasurile", "nasului", "nasurilor"); 
    const noun_shoulder = new NounMale("shoulder", "umăr", "umeri", "umărul", "umerii", "umărului", "umerilor"); 
    const noun_smile = new NounNeuter("smile", "zâmbet", "zâmbete", "zâmbetul", "zâmbetele", "zâmbetului", "zâmbetelor"); 
    const noun_teeth = new NounMale("teeth", "dinte", "dinți", "dintele", "dinții", "dintelui", "dinților"); 
    const noun_thumb = new NounNeuter("thumb", "deget mare", "degete mari", "degetul mare", "degetele mari", "degetului mare", "degetelor mari"); 
    const noun_toe = new NounNeuter("toe", "deget de la picior", "degete de la picioare", "degetul de la picior", "degetele de la picioare", "degetului de la picior", "degetelor de la picioare"); 
    const noun_tongue = new NounFemale("tongue", "limbă", "limbi", "limba", "limbile", "limbii", "limbilor"); 
    const noun_tummy = new NounFemale("tummy", "burtă", "burți", "burta", "burțile", "burții", "burților"); 

    setParentAndMultipleChildren(theBody, [
        noun_arm, noun_back, noun_bottom, noun_cheek, noun_chest, noun_chin, noun_ear, noun_elbow, noun_eye, noun_eyebrow, noun_face, noun_finger, 
        noun_foot, noun_hair, noun_hand, noun_head, noun_knee, noun_ankle, noun_life, noun_lips, noun_mouth, noun_muscle, noun_neck, noun_nose, noun_shoulder, 
        noun_smile, noun_teeth, noun_thumb, noun_toe, noun_tongue, noun_tummy, 
    ])


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
    let conj_and = new Conjunction("And", "Şi", "") 
    let conj_and_alt = new Conjunction("And (alt)", "Iar", "") 
    let conj_aswell = new Conjunction("As Well", "De asemenea", ""); 
    let conj_because = new Conjunction("Because", "Pentru că", "") 
    let conj_because_alt = new Conjunction("Because", "Deoarece", ""); 
    let conj_before = new Conjunction("Before", "Inainte de", "") 
    let conj_but = new Conjunction("But", "Dar", "") 
    let conj_eventhough = new Conjunction("Even Though", "Chiar dacă", ""); 
    let conj_for = new Conjunction("For", "Pentru", "") 
    let conj_if = new Conjunction("If", "Daca", "") 
    let conj_incase = new Conjunction("In case", "În caz că", ""); 
    let conj_isntit = new Conjunction("Isn't it", "Nu-i așa", ""); 
    let conj_like = new Conjunction("Like (A is like B)", "Asemenea", ""); 
    let conj_okay = new Conjunction("Okay", "Atunci", ""); 
    let conj_or = new Conjunction("Or", "Sau", "") 
    let conj_or_alt = new Conjunction("Or (alt)", "Ori", "") 
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

    const noun_one = new NounNeuter("one (1)", "un (1)", "un", "unul", "unii", "unului", "unilor"); 
    const noun_one_f = new NounNeuter("one (1)", "o (1)", "o", "una", "unele", "unei", "unelor"); 
    const noun_two = new NounNeuter("two (2)", "doi (2)", "doi", "doi", "doi", "doi", "doi"); 
    const noun_two_f = new NounNeuter("two (2)", "două (2)", "două", "două", "două", "două", "două"); 
    const noun_three = new NounNeuter("three (3)", "trei (3)", "trei", "treiul", "treii", "treiului", "treilor"); 
    const noun_four = new NounNeuter("four (4)", "patru (4)", "patru", "patrulea", "patru", "patrului", "patrulor"); 
    const noun_five = new NounNeuter("five (5)", "cinci (5)", "cinci", "cincilea", "cincile", "cincelui", "cincilor"); 
    const noun_six = new NounNeuter("six (6)", "șase (6)", "șase", "șaselea", "șasele", "șaselui", "șaselor"); 
    const noun_seven = new NounNeuter("seven (7)", "șapte (7)", "șapte", "șaptelea", "șaptele", "șaptelui", "șaptelor"); 
    const noun_eight = new NounNeuter("eight (8)", "opt (8)", "opt", "optulea", "opturile", "optului", "opturilor"); 
    const noun_nine = new NounNeuter("nine (9)", "nouă (9)", "nouă", "nouălea", "nouăle", "nouălui", "nouălor"); 
    const noun_ten = new NounNeuter("ten (10)", "zece (10)", "zece", "zecelea", "zecelele", "zecelui", "zecelor"); 
    const noun_hundred = new NounFemale("hundred (100)", "sută (100)", "sute", "suta", "sutele", "sutei", "sutelor"); 
    const noun_thousand = new NounFemale("thousand (1000)", "mie (1000)", "mii", "mia", "miile", "miei", "miilor"); 
    const noun_million = new NounNeuter("million (1000000)", "milion (1000000)", "milioane", "milionul", "milioanele", "milionului", "milioanelor"); 
    const noun_billion = new NounNeuter("billion", "miliard", "miliarde", "miliardul", "miliardele", "miliardului", "miliardelor"); 
    const noun_quarter = new NounNeuter("quarter", "sfert", "sferturi", "sfertul", "sferturile", "sfertului", "sferturilor"); 
    const noun_half = new NounFemale("half", "jumătate", "jumătăți", "jumătatea", "jumătățile", "jumătății", "jumătăților"); 
    
    setParentAndMultipleChildren(
        wordclass_numbers, [
            noun_one, noun_one_f, noun_two, noun_two_f, noun_three, noun_four, noun_five, noun_six, noun_seven, noun_eight, 
            noun_nine, noun_ten, noun_hundred, noun_thousand, noun_million, noun_billion, noun_quarter, noun_half, 
        ]
    )
    
    setParentAndChild(
        wordclass_determiners, wordclass_numbers
    )


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

    let emotions = new Theme("Emotions", "Emoții") 
    let Happy = new DataCard("Happy", "Fericit", "") 
    let Sad = new DataCard("Sad", "Trist", "") 
    let Bored = new DataCard("Bored", "Plictisit", "") 
    let Cheerful = new DataCard("Cheerful", "Vesel", "") 
    let Timid = new DataCard("Shy (Timid)", "Timid", "") 
    let Angry = new DataCard("Angry", "Nervos", "") 
    let Tired = new DataCard("Tired", "Obosit", "") 
    let Worried = new DataCard("Worried", "Îngrijorat", "") 
    let Upset = new DataCard("Upset", "Supărat", "") 
    let Excited = new DataCard("Excited", "Entuziasmat", "") 
    let Jealous = new DataCard("Jealous", "Gelos", "") 
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




