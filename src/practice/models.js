import { AbstractNode, DifficultyLevel } from "../tree/models.js";
import { stringToHTMLElement } from "../utils/string.js";
import { createQAExplorer } from "./functions.js";

export class Practice extends AbstractNode {
    /**
     * A practice node
     * @param {AbstractNode[]} data - a collection of node objects
     * @param {DifficultyLevel} diffculty - the difficulty level
     */
    constructor(data, diffculty) {
        super("0Your Practice", "0Practica Ta");
        this.data = data // for testing .filter(x => x instanceof ...);
        this.diffculty = diffculty // for testing .filter(x => x instanceof ...);
    }

    PrimaryView = () => stringToHTMLElement(this.Primary.slice(1));
    SecondaryView = () => stringToHTMLElement(this.Secondary.slice(1));
    DataView = () => createQAExplorer(this.data)
}
