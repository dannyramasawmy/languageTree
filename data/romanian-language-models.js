import { AbstractNode } from "../src/tree/models.js";
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

    PrimaryView = () => `To ${this.Primary}`
    SecondaryView = () => `A ${this.Secondary}`
    SearchableTerms = () => [this.english, this.romanian, this.I, this.You, this.HeShe, this.We, this.YouPlural, this.They, this.past]
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
    SecondaryView = () => `A Se ${this.Secondary}`
}

/**
 * A Reflexive 'Si' form DataCard
 */
export class VerbReflexiveSi extends VerbDataCard {
    DataView = () => VerbReflexiveSiDataView(this)
    SecondaryView = () => `A Si ${this.Secondary}`
}

export class NounDataCard extends AbstractNode{
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

    PrimaryView = () => `${this.english}`
    SecondaryView = () => `${this.romanian}`
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
