import { stringToHTMLElement } from "../src/utils/string.js";
import { AbstractNode, Question } from "../src/tree/models.js";
import { NounFemaleView, NounMaleView, NounNeuterView, VerbDataView, VerbReflexiveSeDataView, VerbReflexiveSiDataView } from "./romanian-views.js";

export class VerbDataCard extends AbstractNode {
    /**
     * Generic verb data card
     * @param {string} english - English infinitive
     * @param {string} romanian - Romanian infinitive
     * @param {string} I - present I form
     * @param {string} You - present You form
     * @param {string} HeShe - present He/She form
     * @param {string} We - present We form
     * @param {string} YouPlural - present YouPlural form
     * @param {string} They - present They form
     * @param {string} past - past form
     */
    constructor(english, romanian, I, You, HeShe, We, YouPlural, They, past) {
        super(english, romanian, false)

        this.english = english.toLowerCase()
        this.romanian = romanian.toLowerCase()

        this.I = I
        this.You = You
        this.HeShe = HeShe
        this.We = We
        this.YouPlural = YouPlural
        this.They = They
        this.past = past
    }

    PrimaryView = () => stringToHTMLElement(`To ${this.Primary}`)
    SecondaryView = () => stringToHTMLElement(`A ${this.Secondary}`)
    SearchableTerms = () => [this.english, this.romanian, this.I, this.You, this.HeShe, this.We, this.YouPlural, this.They, this.past]

    Practice = () => {
        return [
            new Question(`Translate "To ${this.Primary}" to Romanian`, `A ${this.Secondary}`, this.GetHashId()),
            new Question(`Translate "A ${this.Secondary}" to English`, `To ${this.Primary}`, this.GetHashId()),
            new Question(`What is the 'I' form of "A ${this.Secondary}" (To ${this.Primary})`, `Eu ${this.I}`, this.GetHashId()),   
            new Question(`What is the 'You' form of "A ${this.Secondary}" (To ${this.Primary})`, `Tu ${this.You}`, this.GetHashId()),   
            new Question(`What is the 'He/She' form of "A ${this.Secondary}" (To ${this.Primary})`, `El/Ea ${this.HeShe}`, this.GetHashId()),   
            new Question(`What is the 'We' form of "A ${this.Secondary}" (To ${this.Primary})`, `Noi ${this.We}`, this.GetHashId()),   
            new Question(`What is the 'You (pl)' form of "A ${this.Secondary}" (To ${this.Primary})`, `Voi ${this.YouPlural}`, this.GetHashId()),   
            new Question(`What is the 'They' form of "A ${this.Secondary}" (To ${this.Primary})`, `Ei/Ele ${this.They}`, this.GetHashId()),   
            new Question(`What is the 'Past' form of "A ${this.Secondary}" (To ${this.Primary})`, `Eu am ${this.past}`, this.GetHashId()),   
        ]
    }
}

/**
 * A common verb DataCard
 */
export class Verb extends VerbDataCard {
    DataView = () => VerbDataView(this)
}

/**
 * A Reflexive 'Se' form DataCard
 */
export class VerbReflexiveSe extends VerbDataCard {
    DataView = () => VerbReflexiveSeDataView(this)
    SecondaryView = () => stringToHTMLElement(`A Se ${this.Secondary}`)
}

/**
 * A Reflexive 'Si' form DataCard
 */
export class VerbReflexiveSi extends VerbDataCard {
    DataView = () => VerbReflexiveSiDataView(this)
    SecondaryView = () => stringToHTMLElement(`A Si ${this.Secondary}`)
}

export class NounDataCard extends AbstractNode {
    /**
     * A generic Noun data card
     * @param {string} english - English 
     * @param {string} romanian - Romanian 
     * @param {string} singluar - Singluar form (a ...)
     * @param {string} plural - Plural form (many ...)
     * @param {string} definiteArticle - The definite article (The ...)
     * @param {string} definitePlural - The definite article in plural (The many ...)
     */
    constructor(english, romanian, singluar, plural, definiteArticle, definitePlural) {
        super(english, romanian, false)
        this.english = english
        this.romanian = romanian
        this.singluar = singluar
        this.plural = plural
        this.definiteArticle = definiteArticle
        this.definitePlural = definitePlural
    }

    PrimaryView = () => stringToHTMLElement(`${this.english}`)
    SecondaryView = () => stringToHTMLElement(`${this.romanian}`)
    SearchableTerms = () => [
        this.english, this.romanian, this.singluar, this.plural, this.definiteArticle, this.definitePlural,
    ]
}

export class NounNeuter extends NounDataCard {
    DataView = () => NounNeuterView(this)
}

export class NounMale extends NounDataCard {
    DataView = () => NounMaleView(this)
}

export class NounFemale extends NounDataCard {
    DataView = () => NounFemaleView(this)
}
