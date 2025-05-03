import { TreeDepth } from "./enums.js";
import { AbstractNode } from "./models.js";

/** @typedef {import('./types.js').NodeComparator} NodeComparator */

/**
 * A basic function to sort DataCards
 * @param {AbstractNode} leftNode - An AbstractNode object
 * @param {AbstractNode} rightNode - An AbstractNode object
 * @returns  {1 | 0 | -1}
 */
export function primarySort(leftNode, rightNode) {
    let left = leftNode.Primary.toLowerCase().trim()
    let right = rightNode.Primary.toLowerCase().trim()

    if (left < right) return -1;
    if (left > right) return 1;
    return 0;
}

/**
 * Sort a collection of Nodes
 * @param {boolean} isSearchPrimary - Whether to sort by the primary of secondary key
 * @param {AbstractNode[]} dataCardArray - The collection of DataCards
 * @param {NodeComparator} primarySortFunction - A function to sort DataCards 
 * @param {NodeComparator} secondarySortFunction - A function to sort DataCards
 * @returns {AbstractNode[]} - A sorted collection of DataCards
 */
export function sortDataCardArray(
    isSearchPrimary,
    dataCardArray,
    primarySortFunction,
    secondarySortFunction) {

    if (isSearchPrimary)
        dataCardArray.sort(primarySortFunction);
    else
        dataCardArray.sort(secondarySortFunction);
    return dataCardArray;
}

/**
 * Get the level of a node in the tree
 * @param {AbstractNode} currentNode - an AbstractNode object
 * @returns {TreeDepth} - the level of a node in the tree
 */
export function getNodeType(currentNode) {
    if (currentNode.IsRoot) return TreeDepth.ROOT;
    if (currentNode.Child.length == 0) return TreeDepth.LEAF;
    return TreeDepth.BRANCH;
}

/**
 * Get the children of an AbstractNode object
 * @param {AbstractNode} node - An AbstractNode object 
 * @returns {AbstractNode[]} - A collection of AbstractNode objects
 */
export function getChildren(node) {
    var displayList = [];
    for (var idx = 0; idx < node.Child.length; idx++)
        displayList.push(node.Child[idx]);

    return displayList;
}

/**
 * Define a Parent-Child relationship between two AbstractNode objects
 * @param {AbstractNode} parentNode - An AbstractNode object
 * @param {AbstractNode} childNode - An AbstractNode object
 */
export function setParentAndChild(parentNode, childNode) {
    parentNode.AddChild(childNode);
    childNode.SetParent(parentNode);
}
