import { AbstractNode } from "../src/tree/models.js";
import { MakeCopyable } from "./romanian-language-models-legacy.js";


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
        let columnSettings = "col-lg-3 col-md-6 gap-2 verb";
        return (`
            <br>
            <div class="row gy-4">
                <div class="${columnSettings}">
                    <h4>Present</h4>
                    ${MakeCopyable(`Eu ${this.presentI}`)}
                    ${MakeCopyable(`Tu ${this.presentYou}`)}
                    ${MakeCopyable(`El/Ea ${this.presentHeShe}`)}
                    ${MakeCopyable(`Noi ${this.presentWe}`)}
                    ${MakeCopyable(`Voi ${this.presentYouPlural}`)}
                    ${MakeCopyable(`Ei/Ele ${this.presentThey}`)}
                    </div>
                <div class="${columnSettings}">
                    <h4>Past</h4>
                    ${MakeCopyable(`Eu ${this.relfexivePast} am ${this.past}`)}
                    ${MakeCopyable(`Tu ${this.relfexivePast} ai ${this.past}`)}
                    ${MakeCopyable(`El/Ea ${this.relfexivePast} a ${this.past}`)}
                    ${MakeCopyable(`Noi ${this.relfexivePast} am ${this.past}`)}
                    ${MakeCopyable(`Voi ${this.relfexivePast} ați ${this.past}`)}
                    ${MakeCopyable(`Ei/Ele ${this.relfexivePast} au ${this.past}`)}
                </div>
                <div class="${columnSettings}">
                    <h4>Future</h4>
                    ${MakeCopyable(`Eu ${this.reflexiveFuture} voi ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Tu ${this.reflexiveFuture} vei ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`El/Ea ${this.reflexiveFuture} va ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Noi ${this.reflexiveFuture} vom ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Voi ${this.reflexiveFuture} veți ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Ei/Ele ${this.reflexiveFuture} vor ${this.romanianInfinitive}`)}
                </div>
                <div class="${columnSettings}">
                    <h4>Conditional (you would)</h4>
                    ${MakeCopyable(`Eu aș ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Tu ai ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`El/Ea ar ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Noi am ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Voi ați ${this.romanianInfinitive}`)}
                    ${MakeCopyable(`Ei/Ele ar ${this.romanianInfinitive}`)}
                </div>
            </div>
            <br> <br>`)
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