import { NounDataCard, VerbDataCard } from "./romanian-language-models.js";

export const MakeCopyable = (text) => `
    <copy class="copyable" onclick="navigator.clipboard.writeText('${text}')">
        ○ ${text} <br>
    </copy>`;

/**
 * 
 * @param {NounDataCard} nounDataCard - a noun data object
 * @returns {string} string that can be parsed as HTML 
 */
export function NounMaleView(nounDataCard)
{
    return (`
        Un ${nounDataCard.singluar} <br>
        doi ${nounDataCard.plural} <br>
        ${nounDataCard.definiteArticle} <br>
        ${nounDataCard.definitePlural} <br>
    `);
}

/**
 * 
 * @param {NounDataCard} nounDataCard - a noun data object
 * @returns {string} string that can be parsed as HTML 
 */
export function NounFemaleView(nounDataCard)
{
    return (`
        o ${nounDataCard.singluar} <br>
        două ${nounDataCard.plural} <br>
        ${nounDataCard.definiteArticle} <br>
        ${nounDataCard.definitePlural} <br>
    `);
}

/**
 * 
 * @param {NounDataCard} nounDataCard - a noun data object
 * @returns {string} string that can be parsed as HTML 
 */
export function NounNeuterView(nounDataCard)
{
    return (`
        un ${nounDataCard.singluar} <br>
        două ${nounDataCard.plural} <br>
        ${nounDataCard.definiteArticle} <br>
        ${nounDataCard.definitePlural} <br>
    `);
}

/**
 * 
 * @param {VerbDataCard} verbDataCard - a verb data object
 * @returns {string} string that can be parsed as HTML 
 */
export function VerbDataView(verbDataCard)
{
    let columnSettings = "col-lg-3 col-md-6 gap-2 verb";
    return (`
        <br>
        <div class="row gy-4">
            <div class="${columnSettings}">
                <h4>Present</h4>
                ${MakeCopyable(`Eu ${verbDataCard.presentI}`)}
                ${MakeCopyable(`Tu ${verbDataCard.presentYou}`)}
                ${MakeCopyable(`El/Ea ${verbDataCard.presentHeShe}`)}
                ${MakeCopyable(`Noi ${verbDataCard.presentWe}`)}
                ${MakeCopyable(`Voi ${verbDataCard.presentYouPlural}`)}
                ${MakeCopyable(`Ei/Ele ${verbDataCard.presentThey}`)}
                </div>
            <div class="${columnSettings}">
                <h4>Past</h4>
                ${MakeCopyable(`Eu ${verbDataCard.relfexivePast} am ${verbDataCard.past}`)}
                ${MakeCopyable(`Tu ${verbDataCard.relfexivePast} ai ${verbDataCard.past}`)}
                ${MakeCopyable(`El/Ea ${verbDataCard.relfexivePast} a ${verbDataCard.past}`)}
                ${MakeCopyable(`Noi ${verbDataCard.relfexivePast} am ${verbDataCard.past}`)}
                ${MakeCopyable(`Voi ${verbDataCard.relfexivePast} ați ${verbDataCard.past}`)}
                ${MakeCopyable(`Ei/Ele ${verbDataCard.relfexivePast} au ${verbDataCard.past}`)}
            </div>
            <div class="${columnSettings}">
                <h4>Future</h4>
                ${MakeCopyable(`Eu ${verbDataCard.reflexiveFuture} voi ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Tu ${verbDataCard.reflexiveFuture} vei ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`El/Ea ${verbDataCard.reflexiveFuture} va ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Noi ${verbDataCard.reflexiveFuture} vom ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Voi ${verbDataCard.reflexiveFuture} veți ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Ei/Ele ${verbDataCard.reflexiveFuture} vor ${verbDataCard.romanianInfinitive}`)}
            </div>
            <div class="${columnSettings}">
                <h4>Conditional (you would)</h4>
                ${MakeCopyable(`Eu aș ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Tu ai ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`El/Ea ar ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Noi am ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Voi ați ${verbDataCard.romanianInfinitive}`)}
                ${MakeCopyable(`Ei/Ele ar ${verbDataCard.romanianInfinitive}`)}
            </div>
        </div>
        <br> <br>`)
}