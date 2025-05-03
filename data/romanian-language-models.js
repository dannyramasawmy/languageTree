import { AbstractNode } from "../src/tree/models.js";
import { MakeCopyable, VerbDataView } from "./romanian-views.js";


export class VerbDataCard extends AbstractNode {
    constructor(
        englishInfinitive,
        romanianInfinitive,
        presentI,
        presentYou,
        presentHeShe,
        presentWe,
        presentYouPlural,
        presentThey,
        past
    ) {
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
        this.relfexivePast = ""
        this.reflexiveFuture = ""
    }

    DataView = () => {
        return VerbDataView(this)
    }

    PrimaryView = () => `To ${this.englishInfinitive}`
    SecondaryView = () => `A ${this.romanianInfinitive}`
}

export class ReflexiveSeVerbDataCard extends VerbDataCard {
    constructor(
        englishInfinitive,
        romanianInfinitive,
        presentI,
        presentYou,
        presentHeShe,
        presentWe,
        presentYouPlural,
        presentThey,
        past,
        relfexivePast,
        reflexiveFuture,
    ) {
        super(
            englishInfinitive,
            romanianInfinitive,
            "mă " + presentI,
            "te " + presentYou,
            "se " + presentHeShe,
            "ne " + presentWe,
            "vă " + presentYouPlural,
            "se " + presentThey,
            past,
        )

        this.relfexivePast = relfexivePast;
        this.reflexiveFuture = reflexiveFuture;
    }
}

export class ReflexiveSiVerbDataCard extends VerbDataCard {
    constructor(
        englishInfinitive,
        romanianInfinitive,
        presentI,
        presentYou,
        presentHeShe,
        presentWe,
        presentYouPlural,
        presentThey,
        past,
        relfexivePast,
        reflexiveFuture,
    ) {
        super(
            englishInfinitive,
            romanianInfinitive,
            "îmi " + presentI,
            "îți " + presentYou,
            "își " + presentHeShe,
            "ne " + presentWe,
            "vă " + presentYouPlural,
            "își " + presentThey,
            past,
        )
        this.relfexivePast = relfexivePast;
        this.reflexiveFuture = reflexiveFuture;
    }
}