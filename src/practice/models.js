import { AbstractNode, DifficultyLevel } from "../tree/models.js";
import { autoCapitlizeFirst, stringToHTMLElement } from "../utils/string.js";
import { createQAExplorer } from "./functions.js";

export class Practice extends AbstractNode {
    /**
     * A practice node
     * @param {AbstractNode[]} data - a collection of node objects
     */
    constructor(primary, secondary, data) {
        super(`0${autoCapitlizeFirst(primary)}`, `0${autoCapitlizeFirst(secondary)}`);
        this.data = data // for testing .filter(x => x instanceof ...);
    }

    PrimaryView = () => stringToHTMLElement(this.Primary.slice(1));
    SecondaryView = () => stringToHTMLElement(this.Secondary.slice(1));
    DataView = () => createQAExplorer(this.data)
}
