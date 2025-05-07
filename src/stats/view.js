import { formatNumber } from "../utils/string.js";
import { NodeStatsID } from "../identifiers.js";
import { createNodeStats } from "../tree/view.js";
import { createCardSvg, createDelatSvg, createEyeSvg, createLinkSvg } from "./svg.js";
import { StatsTableRow } from "./models.js";
import { TableBuilder } from "../table/models.js";

/**
 * Create the parent number stat
 * @param {number} numberOfParents - the number of parents for the current DataCard
 * @returns {HTMLDivElement} The Div element for the stat pill-view
 */
export function createParentStat(numberOfParents) {
    const id = NodeStatsID.NUMBER_OF_PARENTS;
    const deltaSvg = createDelatSvg();
    const description = "The number of parents for this node.";
    return createNodeStats(id, numberOfParents, deltaSvg, description);
}

/**
 * Create the number of children stat
 * @param {number} numberOfChildren - the number of children of the current DataCard
 * @returns {HTMLDivElement} The Div element for the stat pill-view
 */
export function createNumberOfChildrenStat(numberOfChildren) {
    const id = NodeStatsID.NUMBER_OF_CHILDREN;
    const cardSvg = createCardSvg();
    const description = "The number of children for this node.";
    return createNodeStats(id, formatNumber(numberOfChildren), cardSvg, description);
}

/**
 * Create the number of relations stat
 * @param {number} numberOfRelations - the number of relations of the current DataCard
 * @returns {HTMLDivElement} The Div element for the stat pill-view
 */
export function createNumberOfRelaionsStat(numberOfRelations) {
    const id = NodeStatsID.NUMBER_OF_RELATIONS;
    const cardSvg = createLinkSvg();
    const description = "The number of relations (cross-links) for this node.";
    return createNodeStats(id, numberOfRelations, cardSvg, description);
}

/**
 * Create the number of card views stat
 * @param {number} numberOfViews - the number of views of the current DataCard
 * @returns {HTMLDivElement} The Div element for the stat pill-view
 */
export function createNumberOfViewsStat(numberOfViews) {
    const id = NodeStatsID.NUMBER_OF_VIEWS;
    const eyeSvg = createEyeSvg();
    const description = "The number of views of this card.";
    return createNodeStats(id, formatNumber(numberOfViews), eyeSvg, description);
}

/**
 * Convert a colelction of TableRow objects into an HTML table
 * @param {StatsTableRow[]} tableRows - rows to display
 * @returns {HTMLElement} - table as html
 */
export function statisticsTableView(tableRows)
{
    let table = new TableBuilder(["Primary", "Secondary", "Views"])
    for (const r of tableRows)
        table.WithRow([r.FirstColumn, r.SecondColumn, `${r.Views}`])

    return table.BuildHTML()
}


