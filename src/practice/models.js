import { AbstractNode, Question } from "../tree/models.js";
import { stringToHTMLElement } from "../utils/string.js";
import { createQAExplorer } from "./functions.js";

export class Practice extends AbstractNode {
    /**
     * A practice node
     * @param {AbstractNode[]} data - a collection of node objects
     */
    constructor(data) {
        super("Practice", "Practice");        
        this.data = data;
    }

    PrimaryView = () => stringToHTMLElement(this.Primary);
    SecondaryView = () => stringToHTMLElement(this.Secondary);
    DataView = () => {
        return createQAExplorer(this.data);
    };
}
