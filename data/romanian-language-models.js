import { AbstractNode } from "../src/tree/models.js";
import { NounFemaleView, NounMaleView, NounNeuterView, VerbDataView } from "./romanian-views.js";


export class VerbDataCard extends AbstractNode {
    constructor(englishInfinitive, romanianInfinitive, presentI, presentYou, presentHeShe, presentWe, presentYouPlural, presentThey, past, relfexivePast, reflexiveFuture) {
        super(englishInfinitive, romanianInfinitive, false)

        this.englishInfinitive = englishInfinitive
        this.romanianInfinitive = romanianInfinitive

        this.presentI = presentI
        this.presentYou = presentYou
        this.presentHeShe = presentHeShe
        this.presentWe = presentWe
        this.presentYouPlural = presentYouPlural
        this.presentThey = presentThey
        this.past = past
        this.relfexivePast = relfexivePast
        this.reflexiveFuture = reflexiveFuture
    }

    DataView = () => VerbDataView(this)
    PrimaryView = () => `To ${this.englishInfinitive}`
    SecondaryView = () => `A ${this.romanianInfinitive}`
}

export class Verb extends VerbDataCard {
    constructor(englishInfinitive, romanianInfinitive, presentI, presentYou, presentHeShe, presentWe, presentYouPlural, presentThey, past) {
        super(englishInfinitive, romanianInfinitive, presentI, presentYou, presentHeShe, presentWe, presentYouPlural, presentThey, past, "", "")
    }
}

export class VerbReflexiveSe extends VerbDataCard {
    constructor(englishInfinitive, romanianInfinitive, presentI, presentYou, presentHeShe, presentWe, presentYouPlural, presentThey, past, relfexivePast, reflexiveFuture) {
        super(englishInfinitive, romanianInfinitive, "mă " + presentI, "te " + presentYou, "se " + presentHeShe, "ne " + presentWe, "vă " + presentYouPlural, "se " + presentThey, past, relfexivePast, reflexiveFuture)

    }
}

export class VerbReflexiveSi extends VerbDataCard {
    constructor(englishInfinitive, romanianInfinitive, presentI, presentYou, presentHeShe, presentWe, presentYouPlural, presentThey, past, relfexivePast, reflexiveFuture) {
        super(englishInfinitive, romanianInfinitive, "îmi " + presentI, "îți " + presentYou, "își " + presentHeShe, "ne " + presentWe, "vă " + presentYouPlural, "își " + presentThey, past, relfexivePast, reflexiveFuture)
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
