import { prefixWithSVG } from "../tree/view.js";
import { AbstractNode } from "../tree/models.js";
import { stringToHTMLElement } from "../utils/string.js";
import { createQAExplorer } from "./functions.js";
import { createLightBulbSvg } from "../stats/svg.js";

export class Practice extends AbstractNode {
    /**
     * A practice node
     * @param {AbstractNode[]} data - a collection of node objects
     */
    constructor(data) {
        super("0Your Practice", "0Practica Ta");
        this.data = data;
    }

    PrimaryView = () => stringToHTMLElement(this.Primary.slice(1));
    SecondaryView = () => stringToHTMLElement(this.Secondary.slice(1));
    DataView = () => createQAExplorer(this.data)
}
