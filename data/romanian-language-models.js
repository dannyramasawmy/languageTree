import { AbstractNode } from "../src/tree/models.js";
import { NounFemaleView, NounMaleView, NounNeuterView, VerbDataView } from "./romanian-views.js";


export class VerbDataCard extends AbstractNode {
    constructor(english, romanian, I, You, HeShe, We, YouPlural, They, past, relfexivePast, reflexiveFuture) {
        super(english, romanian, false)

        this.english = english
        this.romanian = romanian

        this.I = I
        this.You = You
        this.HeShe = HeShe
        this.We = We
        this.YouPlural = YouPlural
        this.They = They
        this.past = past
        this.relfexivePast = relfexivePast
        this.reflexiveFuture = reflexiveFuture
    }

    DataView = () => VerbDataView(this)
    PrimaryView = () => `To ${this.english}`
    SecondaryView = () => `A ${this.romanian}`
    SearchableTerms = () => [
        this.english, this.romanian, this.I, this.You, this.HeShe, this.We, this.YouPlural, this.They, this.past, this.relfexivePast, this.reflexiveFuture,
    ]
}

export class Verb extends VerbDataCard {
    constructor(english, romanian, I, You, HeShe, We, YouPlural, They, past) {
        super(english, romanian, I, You, HeShe, We, YouPlural, They, past, "", "")
    }
}

export class VerbReflexiveSe extends VerbDataCard {
    constructor(eng, rom, I, You, HeShe, We, YouPlural, They, past, relfexivePast, reflexiveFuture) {
        super(eng, rom, `mă ${I}`, `te ${You}`, `se ${HeShe}`, `ne ${We}`, `vă ${YouPlural}`, `se ${They}`, past, relfexivePast, reflexiveFuture)

    }
}

export class VerbReflexiveSi extends VerbDataCard {
    constructor(eng, rom, I, You, HeShe, We, YouPlural, They, past, relfexivePast, reflexiveFuture) {
        super(eng, rom, `îmi ${I}`, `îți ${You}`, `își ${HeShe}`, `ne ${We}`, `vă  ${YouPlural}`, `își ${They}`, past, relfexivePast, reflexiveFuture)
    }
}

export class NounDataCard extends AbstractNode{
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
