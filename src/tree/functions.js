export function primarySort (x, y) {
    let left = x.Primary.toLowerCase().trim()
    let right = y.Primary.toLowerCase().trim()

    if (left < right) return -1;
    if (left > right) return 1;
    return 0; 
}

export function GetTreeDepth(currentNode) {
    if (currentNode.IsRoot) return 0;
    if (currentNode.Child.length == 0) return 2;
    return 1;
}

export function GetChildren(node) {
    var displayList = [];
    for (var idx = 0; idx < node.Child.length; idx++)
        displayList.push(node.Child[idx]);

    return displayList;
}

export function SetParentAndChild(parentDataCard, childDataCard) {
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}

