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
                ${MakeCopyable(`Eu ${verbDataCard.I}`)}
                ${MakeCopyable(`Tu ${verbDataCard.You}`)}
                ${MakeCopyable(`El/Ea ${verbDataCard.HeShe}`)}
                ${MakeCopyable(`Noi ${verbDataCard.We}`)}
                ${MakeCopyable(`Voi ${verbDataCard.YouPlural}`)}
                ${MakeCopyable(`Ei/Ele ${verbDataCard.They}`)}
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
                ${MakeCopyable(`Eu ${verbDataCard.reflexiveFuture} voi ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Tu ${verbDataCard.reflexiveFuture} vei ${verbDataCard.romanian}`)}
                ${MakeCopyable(`El/Ea ${verbDataCard.reflexiveFuture} va ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Noi ${verbDataCard.reflexiveFuture} vom ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Voi ${verbDataCard.reflexiveFuture} veți ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Ei/Ele ${verbDataCard.reflexiveFuture} vor ${verbDataCard.romanian}`)}
            </div>
            <div class="${columnSettings}">
                <h4>Conditional (you would)</h4>
                ${MakeCopyable(`Eu aș ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Tu ai ${verbDataCard.romanian}`)}
                ${MakeCopyable(`El/Ea ar ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Noi am ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Voi ați ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Ei/Ele ar ${verbDataCard.romanian}`)}
            </div>
        </div>
        <br> <br>`)
}