import { AbstractNode } from "../tree/models.js";

export class GlobalState {
    /**
     * 
     * @param {boolean} primaryKeyFirst - whether the primary
     * @param {AbstractNode} currentNode - whether the primary
     * @param {AbstractNode[]} displayCards - the collection of cards to show
     */
    constructor(primaryKeyFirst, currentNode, displayCards) {
        this.PrimaryKeyFirst = primaryKeyFirst
        this.CurrentNode = currentNode
        this.DisplayCards = displayCards
    }
}