import { prefixWithSVG } from "../tree/view.js";
import { Practice } from "../practice/models.js";
import { flattenTree } from "../tree/functions.js";
import { AbstractNode } from "../tree/models.js";
import { stringToHTMLElement } from "../utils/string.js";
import { abstractNodeToTableRow } from "./functions.js";
import { statisticsTableView } from "./view.js";
import { createStatsSvg } from "../stats/svg.js";

export class StatsTableRow {
    /**
     * Representation of data for one row of the table
     * @param {string} firstColumn - data to show in the first column
     * @param {string} secondColumn - data to show in the second column
     * @param {number} views - the number of views of the node
     */
    constructor(firstColumn, secondColumn, views) {
        this.FirstColumn = firstColumn;
        this.SecondColumn = secondColumn;
        this.Views = views;
    }
}

export class Stats extends AbstractNode {
    /**
     * A statistics node, this node stores a reference to the root
     * At the time the card is viewed the statistics are computed
     * @param {string} primary - the primary label
     * @param {string} secondary - the secondary label
     * @param {AbstractNode} rootNode - the root of the tree
     */
    constructor(primary, secondary, rootNode) {
        super(`0${primary}`, `0${secondary}`);
        this.rootNodeRef = rootNode;

        /**
         * @type {AbstractNode[]} - only compute and store the first time someone views the card
         */
        this._flatTree = []
    }

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main content view 
    */
    PrimaryView = () => stringToHTMLElement(this.Primary.slice(1));

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main content view 
    */
    SecondaryView = () => stringToHTMLElement(this.Secondary.slice(1));

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main content view 
    */
    DataView = () => {
        if (this._flatTree.length == 0)
            this._flatTree = flattenTree(this.rootNodeRef)

        var viewRows = this._flatTree
            .filter(x => !(x instanceof Stats || x instanceof Practice))
            .map(abstractNodeToTableRow)
            .filter(x => !isNaN(x.Views));

        viewRows.sort((a, b) => b.Views - a.Views);

        return statisticsTableView(viewRows)
    };
}

