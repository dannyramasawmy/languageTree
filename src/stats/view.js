import { NodeStatsID } from "../identifiers.js";
import { createNodeStats } from "../tree/view.js";
import { createCardSvg, createDelatSvg, createEyeSvg } from "./svg.js";


export function createGenerationStat(generationNumber) {
    const id = NodeStatsID.GENERATION;
    const deltaSvg = createDelatSvg();
    const description = "The number of ancestors for this node.";
    return createNodeStats(id, generationNumber, deltaSvg, description);
}

export function createNumberOfChildrenStat(numberOfChildren) {
    const id = NodeStatsID.NUMBER_OF_CHILDREN;
    const cardSvg = createCardSvg();
    const description = "The number of children for this node.";
    return createNodeStats(id, numberOfChildren, cardSvg, description);
}

export function createNumberOfViewsStat(numberOfViews) {
    const id = NodeStatsID.NUMBER_OF_VIEWS;
    const eyeSvg = createEyeSvg();
    const description = "The number of views of this card.";
    return createNodeStats(id, numberOfViews, eyeSvg, description);
}

