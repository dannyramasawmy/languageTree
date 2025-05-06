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

/**
 * Define a Parent-Child relationship between one parent and multiple children
 * @param {AbstractNode} parentNode - An AbstractNode object
 * @param {AbstractNode[]} children - A collection of AbstractNode objects
 */
export function setParentAndMultipleChildren(parentNode, children) {
    for (let node of children)
    {
        parentNode.AddChild(node);
        node.SetParent(parentNode);
    }
}

/**
 * Define a Parent-Child relationship between two AbstractNode objects
 * @param {AbstractNode} leftNode - An AbstractNode object
 * @param {AbstractNode} rightNode - An AbstractNode object
 */
export function defineCrossLinkRelationship(leftNode, rightNode) {
    leftNode.AddCrossLinkRelation(rightNode);
    rightNode.AddCrossLinkRelation(leftNode);
}

/**
 * Traverse the tree/network and apply a given function, loops should not matter
 * @template T - element of the return type
 * @param {AbstractNode} node - the node to start from
 * @param {Set<string>} visitedNodes - nodes visited in the traversal
 * @param {(x: AbstractNode) => T} fun - a function to apply to every node
 * @returns {T[]} - A collection of T objects
 */
export function traverseTree(node, visitedNodes, fun)
{
    let toReturn = [fun(node)]
    visitedNodes.add(node.UID)

    let nodesToApply = [...node.Child, ...node.Relations]
    for (const descendant of nodesToApply)
    {
        if (!visitedNodes.has(descendant.UID))
        {
            let values = traverseTree(descendant, visitedNodes, fun)
            toReturn.push(...values)
        }
    }

    return toReturn
}

/**
 * Flattens a tree's descendants into an array (e.g. to use for searching)
 * @param {AbstractNode} node - The starting node
 * @returns {AbstractNode[]} node - The flattened data structure
 */
export function flattenTree(node)
{
    let flatTree = traverseTree(node, new Set(), (x) => x)
    return flatTree
}