export const MakeCopyable = (text) => 
    `
    <copy class="copyable" onclick="navigator.clipboard.writeText('${text}')">
        ○ ${text} <br>
    </copy>`;
    
export function VerbTemplate(
    presentI,
    presentYou,
    presentHeShe,
    presentWe,
    presentYouPlural,
    presentThey,
    past,
    infinitive,
    relfexivePast = "",
    reflexiveFuture = "") {
    let columnSettings = "col-lg-3 col-md-6 gap-2 verb";

    return (`
    <br>
    <div class="row gy-4">
        <div class="${columnSettings}">
            <h4>Present</h4>
            ${MakeCopyable(`Eu ${presentI}`)}
            ${MakeCopyable(`Tu ${presentYou}`)}
            ${MakeCopyable(`El/Ea ${presentHeShe}`)}
            ${MakeCopyable(`Noi ${presentWe}`)}
            ${MakeCopyable(`Voi ${presentYouPlural}`)}
            ${MakeCopyable(`Ei/Ele ${presentThey}`)}
            </div>
        <div class="${columnSettings}">
            <h4>Past</h4>
            ${MakeCopyable(`Eu ${relfexivePast} am ${past}`)}
            ${MakeCopyable(`Tu ${relfexivePast} ai ${past}`)}
            ${MakeCopyable(`El/Ea ${relfexivePast} a ${past}`)}
            ${MakeCopyable(`Noi ${relfexivePast} am ${past}`)}
            ${MakeCopyable(`Voi ${relfexivePast} ați ${past}`)}
            ${MakeCopyable(`Ei/Ele ${relfexivePast} au ${past}`)}
        </div>
        <div class="${columnSettings}">
            <h4>Future</h4>
            ${MakeCopyable(`Eu ${reflexiveFuture} voi ${infinitive}`)}
            ${MakeCopyable(`Tu ${reflexiveFuture} vei ${infinitive}`)}
            ${MakeCopyable(`El/Ea ${reflexiveFuture} va ${infinitive}`)}
            ${MakeCopyable(`Noi ${reflexiveFuture} vom ${infinitive}`)}
            ${MakeCopyable(`Voi ${reflexiveFuture} veți ${infinitive}`)}
            ${MakeCopyable(`Ei/Ele ${reflexiveFuture} vor ${infinitive}`)}
        </div>
        <div class="${columnSettings}">
            <h4>Conditional (you would)</h4>
            ${MakeCopyable(`Eu aș ${infinitive}`)}
            ${MakeCopyable(`Tu ai ${infinitive}`)}
            ${MakeCopyable(`El/Ea ar ${infinitive}`)}
            ${MakeCopyable(`Noi am ${infinitive}`)}
            ${MakeCopyable(`Voi ați ${infinitive}`)}
            ${MakeCopyable(`Ei/Ele ar ${infinitive}`)}
        </div>
    </div>
        <br> <br>`);
}

export function ReflexiveVerbTemplateSe(presentI, presentYou, presentHeShe, presentWe,
    presentYouPlural, presentThey, past, infinitive) {
    return VerbTemplate(
        "mă " + presentI,
        "te " + presentYou,
        "se " + presentHeShe,
        "ne " + presentWe,
        "vă " + presentYouPlural,
        "se " + presentThey,
        past, infinitive, "(-) ", "(-) ");
}

export function ReflexiveVerbTemplateSi(presentI, presentYou, presentHeShe, presentWe,
    presentYouPlural, presentThey, past, infinitive) {
    return VerbTemplate(
        "îmi " + presentI,
        "îți " + presentYou,
        "își " + presentHeShe,
        "ne " + presentWe,
        "vă " + presentYouPlural,
        "își " + presentThey,
        past, infinitive, "(-) ", "(-) ");
}

export function NounTemplateFemale(singluar, plural, definiteArticle, definitePlural) {
    return (`
        o ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `);
}

export function NounTemplateMale(singluar, plural, definiteArticle, definitePlural) {
    return (`
        Un ${singluar} <br>
        doi ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `);
}

export function NounTemplateNeuter(singluar, plural, definiteArticle, definitePlural) {
    return (`
        un ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `);
}

