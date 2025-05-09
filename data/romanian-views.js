import { buildColumnDiv, buildLinesDiv } from "./romanian-functions.js";
import { AdjectiveDataCard, NounDataCard, VerbDataCard } from "./romanian-language-models.js";

/**
 * 
 * @param {NounDataCard} nounDataCard - a noun data object
 * @returns {HTMLDivElement} - HTML data
 */
export const NounMaleView = (nounDataCard) =>
    buildLinesDiv([`Un ${nounDataCard.singluar}`, `doi ${nounDataCard.plural}`, nounDataCard.definiteArticle, nounDataCard.definitePlural])

/**
 * 
 * @param {NounDataCard} nounDataCard - a noun data object
 * @returns {HTMLDivElement} - HTML data
 */
export const NounFemaleView = (nounDataCard) =>
    buildLinesDiv([`O ${nounDataCard.singluar}`, `Doua ${nounDataCard.plural}`, nounDataCard.definiteArticle, nounDataCard.definitePlural])


/**
 * The html string view for a noun data card
 * @param {NounDataCard} nounDataCard - a noun data object
 * @returns {HTMLDivElement} - HTML data
 */
export const NounNeuterView = (nounDataCard) =>
    buildLinesDiv([`Un ${nounDataCard.singluar}`, `Doua ${nounDataCard.plural}`, nounDataCard.definiteArticle, nounDataCard.definitePlural])

/**
 * The html string view for an adjective data card
 * @param {AdjectiveDataCard} adjectiveDataCard - an adjective data object
 * @returns {HTMLDivElement} - HTML data
 */
export const AdjectiveView = (adjectiveDataCard) =>
    buildLinesDiv([
        `(m) ${adjectiveDataCard.masculineSingular}`, 
        `(f) ${adjectiveDataCard.femenineSingular}`, 
        `(m-pl) ${adjectiveDataCard.masculinePlural}`, 
        `(f-pl) ${adjectiveDataCard.femeninePlural}`
    ])

/**
 * The html string view for a verb data card
 * @param {VerbDataCard} verbDataCard - a verb data object
 * @returns {HTMLElement} - HTML data
 */
export function VerbDataView(verbDataCard) {
    let div = document.createElement("div");
    div.appendChild(document.createElement('br'))

    let row = document.createElement("div")
    row.classList.add("row", "gy-4")

    row.appendChild(buildColumnDiv("Present", [
        `Eu ${verbDataCard.I}`,
        `Tu ${verbDataCard.You}`,
        `El/Ea ${verbDataCard.HeShe}`,
        `Noi ${verbDataCard.We}`,
        `Voi ${verbDataCard.YouPlural}`,
        `Ei/Ele ${verbDataCard.They}`,
    ]))

    row.appendChild(buildColumnDiv("Past", [
        `Eu am ${verbDataCard.past}`,
        `Tu ai ${verbDataCard.past}`,
        `El/Ea a ${verbDataCard.past}`,
        `Noi am ${verbDataCard.past}`,
        `Voi ați ${verbDataCard.past}`,
        `Ei/Ele au ${verbDataCard.past}`,
    ]))

    row.appendChild(buildColumnDiv("Future", [
        `Eu voi ${verbDataCard.romanian}`,
        `Tu vei ${verbDataCard.romanian}`,
        `El/Ea va ${verbDataCard.romanian}`,
        `Noi vom ${verbDataCard.romanian}`,
        `Voi veți ${verbDataCard.romanian}`,
        `Ei/Ele vor ${verbDataCard.romanian}`,
    ]))

    row.appendChild(buildColumnDiv("Conditional (would)", [
        `Eu aș ${verbDataCard.romanian}`,
        `Tu ai ${verbDataCard.romanian}`,
        `El/Ea ar ${verbDataCard.romanian}`,
        `Noi am ${verbDataCard.romanian}`,
        `Voi ați ${verbDataCard.romanian}`,
        `Ei/Ele ar ${verbDataCard.romanian}`,
    ]))

    div.appendChild(row)
    return div
}

/**
 * The html string view for a verb data card
 * @param {VerbDataCard} verbDataCard - a verb data object
 * @returns {HTMLElement} - HTML data
 */
export function VerbReflexiveSeDataView(verbDataCard) {
    let div = document.createElement("div");
    div.appendChild(document.createElement('br'))

    let row = document.createElement("div")
    row.classList.add("row", "gy-4")

    row.appendChild(buildColumnDiv("Present", [
        `Eu mă ${verbDataCard.I}`,
        `Tu te ${verbDataCard.You}`,
        `El/Ea se ${verbDataCard.HeShe}`,
        `Noi ne ${verbDataCard.We}`,
        `Voi vă ${verbDataCard.YouPlural}`,
        `Ei/Ele se ${verbDataCard.They}`,
    ]))

    row.appendChild(buildColumnDiv("Past", [
        `Eu m-am ${verbDataCard.past}`,
        `Tu t-ai ${verbDataCard.past}`,
        `El/Ea s-a ${verbDataCard.past}`,
        `Noi ne-am ${verbDataCard.past}`,
        `Voi v-ăți ${verbDataCard.past}`,
        `Ei/Ele s-au ${verbDataCard.past}`,
    ]))

    row.appendChild(buildColumnDiv("Future", [
        `Eu mă voi ${verbDataCard.romanian}`,
        `Tu te vei ${verbDataCard.romanian}`,
        `El/Ea se va ${verbDataCard.romanian}`,
        `Noi ne vom ${verbDataCard.romanian}`,
        `Voi vă veți ${verbDataCard.romanian}`,
        `Ei/Ele se vor ${verbDataCard.romanian}`,
    ]))

    row.appendChild(buildColumnDiv("Conditional (would)", [
        `Eu aș ${verbDataCard.romanian}`,
        `Tu ai ${verbDataCard.romanian}`,
        `El/Ea ar ${verbDataCard.romanian}`,
        `Noi am ${verbDataCard.romanian}`,
        `Voi ați ${verbDataCard.romanian}`,
        `Ei/Ele ar ${verbDataCard.romanian}`,
    ]))

    div.appendChild(row)
    return div
}

/**
 * The html string view for a verb data card
 * @param {VerbDataCard} verbDataCard - a verb data object
 * @returns {HTMLElement} - HTML data
 */
export function VerbReflexiveSiDataView(verbDataCard) {
    let div = document.createElement("div");
    div.appendChild(document.createElement('br'))

    let row = document.createElement("div")
    row.classList.add("row", "gy-4")

    row.appendChild(buildColumnDiv("Present", [
        `Eu îmi ${verbDataCard.I}`,
        `Tu îți ${verbDataCard.You}`,
        `El/Ea își ${verbDataCard.HeShe}`,
        `Noi ne ${verbDataCard.We}`,
        `Voi vă ${verbDataCard.YouPlural}`,
        `Ei/Ele își ${verbDataCard.They}`,
    ]))

    row.appendChild(buildColumnDiv("Past", [
        `Eu mi-am ${verbDataCard.past}`,
        `Tu ți-ai ${verbDataCard.past}`,
        `El/Ea și-a ${verbDataCard.past}`,
        `Noi ne-am ${verbDataCard.past}`,
        `Voi v-ați ${verbDataCard.past}`,
        `Ei/Ele și-au ${verbDataCard.past}`,
    ]))

    row.appendChild(buildColumnDiv("Future", [
        `Eu îmi voi ${verbDataCard.romanian}`,
        `Tu îți vei ${verbDataCard.romanian}`,
        `El/Ea își va ${verbDataCard.romanian}`,
        `Noi ne vom ${verbDataCard.romanian}`,
        `Voi vă veți ${verbDataCard.romanian}`,
        `Ei/Ele își vor ${verbDataCard.romanian}`,
    ]))

    row.appendChild(buildColumnDiv("Conditional (would)", [
        `Eu aș ${verbDataCard.romanian}`,
        `Tu ai ${verbDataCard.romanian}`,
        `El/Ea ar ${verbDataCard.romanian}`,
        `Noi am ${verbDataCard.romanian}`,
        `Voi ați ${verbDataCard.romanian}`,
        `Ei/Ele ar ${verbDataCard.romanian}`,
    ]))

    div.appendChild(row)
    return div
}