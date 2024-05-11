import { TreeDepth } from "./enums.js";

export function primarySort (x, y) {
    let left = x.Primary.toLowerCase().trim()
    let right = y.Primary.toLowerCase().trim()

    if (left < right) return -1;
    if (left > right) return 1;
    return 0; 
}

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

export function getNodeType(currentNode) {
    if (currentNode.IsRoot) return TreeDepth.ROOT;
    if (currentNode.Child.length == 0) return TreeDepth.LEAF;
    return TreeDepth.BRANCH;
}

export function getChildren(node) {
    var displayList = [];
    for (var idx = 0; idx < node.Child.length; idx++)
        displayList.push(node.Child[idx]);

    return displayList;
}

export function setParentAndChild(parentDataCard, childDataCard) {
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}
