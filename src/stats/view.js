import { formatNumber } from "../utils/string.js";
import { NodeStatsID } from "../identifiers.js";
import { createNodeStats } from "../tree/view.js";
import { createCardSvg, createDelatSvg, createEyeSvg } from "./svg.js";

/**
 * Create the generation number stat
 * @param {number} generationNumber - the generation number of the current DataCard
 * @returns {HTMLDivElement} The Div element for the stat pill-view
 */
export function createGenerationStat(generationNumber) {
    const id = NodeStatsID.GENERATION;
    const deltaSvg = createDelatSvg();
    const description = "The number of ancestors for this node.";
    return createNodeStats(id, generationNumber, deltaSvg, description);
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
    return createNodeStats(id, numberOfChildren, cardSvg, description);
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

