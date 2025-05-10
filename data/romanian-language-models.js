import { autoCapitlizeFirst, stringToHTMLElement } from "../src/utils/string.js";
import { AbstractNode, DataCard, Question } from "../src/tree/models.js";
import { AdjectiveView, ModalVerbView, NounFemaleView, NounMaleView, NounNeuterView, VerbDataView, VerbReflexiveSeDataView, VerbReflexiveSiDataView } from "./romanian-views.js";

/**
 * Models to encapsulate different word classes
 * 
 * Word Classes:
 * - adjectives
 * - adverbs
 * - conjunctions
 * - determiners
 * - interjections
 * - nouns
 * - numbers
 * - prepositions
 * - pronouns
 * - verbs
 * - verbs_modal
 * 
 * Multiclass:
 * - Adjective + Adverb
 * - Adjective + Noun
 * - Adverb + Interjection
 * 
 */

export class WordClass extends AbstractNode {
    constructor(english, romanian) {
        super(english, romanian)
    }

    PrimaryView = () => stringToHTMLElement(this.Primary)
    SecondaryView = () => stringToHTMLElement(this.Secondary)
    DataView = () => stringToHTMLElement('<div></div>')
    SearchableTerms = () => [
        this.Primary, this.Secondary
    ]
}

export class Adjective extends AbstractNode {
    /**
     * Adjectives - describe a noun
     * @param {string} english 
     * @param {string} masculineSingular 
     * @param {string} femenineSingular 
     * @param {string} masculinePlural 
     * @param {string} femeninePlural 
     */
    constructor(english, masculineSingular, femenineSingular, masculinePlural, femeninePlural) {
        super(english, masculineSingular)
        this.english = autoCapitlizeFirst(english)
        this.masculineSingular = autoCapitlizeFirst(masculineSingular)
        this.femenineSingular = autoCapitlizeFirst(femenineSingular)
        this.masculinePlural = autoCapitlizeFirst(masculinePlural)
        this.femeninePlural = autoCapitlizeFirst(femeninePlural)
    }

    PrimaryView = () => stringToHTMLElement(this.english)
    SecondaryView = () => stringToHTMLElement(this.masculineSingular)
    DataView = () => AdjectiveView(this)
    SearchableTerms = () => [
        this.english, this.masculineSingular, this.femenineSingular, this.masculinePlural, this.femeninePlural
    ]
}


export class Adverb extends AbstractNode {}


export class Conjunction extends DataCard {}


export class Determiner extends DataCard {}


export class Interjection extends DataCard {}


export class NounDataCard extends AbstractNode {
    /**
     * A generic Noun data card
     * @param {string} english - English 
     * @param {string} romanianSingluar - Romanian 
     * @param {string} romanianPlural - Singluar form (a ...)
     * @param {string} romanianDefiniteArticle - The definite article (The ...)
     * @param {string} romanianDefinitePlural - The definite article in plural (The many ...)
     * @param {string} romanianGenitiveSingular - The definite article in plural (To the <singular> ...)
     * @param {string} romanianGenitivePlural - The definite article in plural (For the <plural> ...)
     */
    constructor(english, romanianSingluar, romanianPlural, romanianDefiniteArticle, romanianDefinitePlural, romanianGenitiveSingular, romanianGenitivePlural) {
        super(english, romanianSingluar)
        this.english = autoCapitlizeFirst(english)
        this.romanian = autoCapitlizeFirst(romanianSingluar)
        this.singluar = autoCapitlizeFirst(romanianSingluar)
        this.plural = autoCapitlizeFirst(romanianPlural)
        this.definiteArticle = autoCapitlizeFirst(romanianDefiniteArticle)
        this.definitePlural = autoCapitlizeFirst(romanianDefinitePlural)
        this.genativeDativeSingular = autoCapitlizeFirst(romanianGenitiveSingular)
        this.genativeDativePlural = autoCapitlizeFirst(romanianGenitivePlural)
    }

    PrimaryView = () => stringToHTMLElement(`${this.english}`)
    SecondaryView = () => stringToHTMLElement(`${this.romanian}`)
    SearchableTerms = () => [
        this.english, this.romanian, this.singluar, this.plural, this.definiteArticle, this.definitePlural, this.definitePlural, this.definitePlural]
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


export class Number extends DataCard {}


export class Preposition extends DataCard {}


export class Pronoun extends DataCard {}


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
            new Question(`What is the 'I' form of "A ${this.Secondary}" (To ${this.Primary})?`, `Eu ${this.I}`, this.GetHashId()),   
            new Question(`What is the 'You' form of "A ${this.Secondary}" (To ${this.Primary})?`, `Tu ${this.You}`, this.GetHashId()),   
            new Question(`What is the 'He/She' form of "A ${this.Secondary}" (To ${this.Primary})?`, `El/Ea ${this.HeShe}`, this.GetHashId()),   
            new Question(`What is the 'We' form of "A ${this.Secondary}" (To ${this.Primary})?`, `Noi ${this.We}`, this.GetHashId()),   
            new Question(`What is the 'You (pl)' form of "A ${this.Secondary}" (To ${this.Primary})?`, `Voi ${this.YouPlural}`, this.GetHashId()),   
            new Question(`What is the 'They' form of "A ${this.Secondary}" (To ${this.Primary})?`, `Ei/Ele ${this.They}`, this.GetHashId()),   
            new Question(`What is the 'Past' form of "A ${this.Secondary}" (To ${this.Primary})?`, `Eu am ${this.past}`, this.GetHashId()),   
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

export class VerbModal extends AbstractNode {
    constructor(english, romanian, data) {
        super(autoCapitlizeFirst(english), autoCapitlizeFirst(romanian))
        this.data = data
    }

    PrimaryView = () => stringToHTMLElement(this.Primary)
    SecondaryView = () => stringToHTMLElement(this.Secondary)
    SearchableTerms = () => [this.Primary, this.Secondary]
    DataView = () => ModalVerbView(this)
}





