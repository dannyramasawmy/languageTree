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
 * The html string view for a noun data card
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
 * The html string view for a verb data card
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
                ${MakeCopyable(`Eu am ${verbDataCard.past}`)}
                ${MakeCopyable(`Tu ai ${verbDataCard.past}`)}
                ${MakeCopyable(`El/Ea a ${verbDataCard.past}`)}
                ${MakeCopyable(`Noi am ${verbDataCard.past}`)}
                ${MakeCopyable(`Voi ați ${verbDataCard.past}`)}
                ${MakeCopyable(`Ei/Ele au ${verbDataCard.past}`)}
            </div>
            <div class="${columnSettings}">
                <h4>Future</h4>
                ${MakeCopyable(`Eu voi ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Tu vei ${verbDataCard.romanian}`)}
                ${MakeCopyable(`El/Ea va ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Noi vom ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Voi veți ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Ei/Ele vor ${verbDataCard.romanian}`)}
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

/**
 * The html string view for a verb data card
 * @param {VerbDataCard} verbDataCard - a verb data object
 * @returns {string} string that can be parsed as HTML 
 */
export function VerbReflexiveSeDataView(verbDataCard)
{
    let columnSettings = "col-lg-3 col-md-6 gap-2 verb";
    return (`
        <br>
        <div class="row gy-4">
            <div class="${columnSettings}">
                <h4>Present</h4>
                ${MakeCopyable(`Eu mă ${verbDataCard.I}`)}
                ${MakeCopyable(`Tu te ${verbDataCard.You}`)}
                ${MakeCopyable(`El/Ea se ${verbDataCard.HeShe}`)}
                ${MakeCopyable(`Noi ne ${verbDataCard.We}`)}
                ${MakeCopyable(`Voi vă ${verbDataCard.YouPlural}`)}
                ${MakeCopyable(`Ei/Ele se ${verbDataCard.They}`)}
                </div>
            <div class="${columnSettings}">
                <h4>Past</h4>
                ${MakeCopyable(`Eu m-am ${verbDataCard.past}`)}
                ${MakeCopyable(`Tu t-ai ${verbDataCard.past}`)}
                ${MakeCopyable(`El/Ea s-a ${verbDataCard.past}`)}
                ${MakeCopyable(`Noi ne-am ${verbDataCard.past}`)}
                ${MakeCopyable(`Voi v-ăți ${verbDataCard.past}`)}
                ${MakeCopyable(`Ei/Ele s-au ${verbDataCard.past}`)}
            </div>
            <div class="${columnSettings}">
                <h4>Future</h4>
                ${MakeCopyable(`Eu mă voi ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Tu te vei ${verbDataCard.romanian}`)}
                ${MakeCopyable(`El/Ea se va ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Noi ne vom ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Voi vă veți ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Ei/Ele se vor ${verbDataCard.romanian}`)}
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

/**
 * The html string view for a verb data card
 * @param {VerbDataCard} verbDataCard - a verb data object
 * @returns {string} string that can be parsed as HTML 
 */
export function VerbReflexiveSiDataView(verbDataCard)
{
    let columnSettings = "col-lg-3 col-md-6 gap-2 verb";
    return (`
        <br>
        <div class="row gy-4">
            <div class="${columnSettings}">
                <h4>Present</h4>
                ${MakeCopyable(`Eu îmi ${verbDataCard.I}`)}
                ${MakeCopyable(`Tu îți ${verbDataCard.You}`)}
                ${MakeCopyable(`El/Ea își ${verbDataCard.HeShe}`)}
                ${MakeCopyable(`Noi ne ${verbDataCard.We}`)}
                ${MakeCopyable(`Voi vă ${verbDataCard.YouPlural}`)}
                ${MakeCopyable(`Ei/Ele își ${verbDataCard.They}`)}
                </div>
            <div class="${columnSettings}">
                <h4>Past</h4>
                ${MakeCopyable(`Eu mi-am ${verbDataCard.past}`)}
                ${MakeCopyable(`Tu ți-ai ${verbDataCard.past}`)}
                ${MakeCopyable(`El/Ea și-a ${verbDataCard.past}`)}
                ${MakeCopyable(`Noi ne-am ${verbDataCard.past}`)}
                ${MakeCopyable(`Voi v-ați ${verbDataCard.past}`)}
                ${MakeCopyable(`Ei/Ele și-au ${verbDataCard.past}`)}
            </div>
            <div class="${columnSettings}">
                <h4>Future</h4>
                ${MakeCopyable(`Eu îmi voi ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Tu îți vei ${verbDataCard.romanian}`)}
                ${MakeCopyable(`El/Ea își va ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Noi ne vom ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Voi vă veți ${verbDataCard.romanian}`)}
                ${MakeCopyable(`Ei/Ele își vor ${verbDataCard.romanian}`)}
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