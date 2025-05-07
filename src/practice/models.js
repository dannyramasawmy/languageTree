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
        super("Your Practice", "Practica Ta");
        this.data = data;
    }

    PrimaryView = () => prefixWithSVG(stringToHTMLElement(this.Primary), createLightBulbSvg());
    SecondaryView = () => stringToHTMLElement(this.Secondary);
    DataView = () => createQAExplorer(this.data)
}
