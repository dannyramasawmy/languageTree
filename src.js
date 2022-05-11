// =============================================================================
// Containers
// =============================================================================

function DataCard(english, romanian, data) {
    this.English = english;
    this.Romanian = romanian;
    this.Data = data;
    
    this.Parent = [];
    this.Child = [];
    
    this.AddChild = function(dataCard) {
        this.Child.push(dataCard);
    }
    
    this.SetParent = function(dataCard) {
        this.Parent = dataCard;
    }
}

function SearchableDictionary() {
    this.Romanian = {};
    this.English = {};
}

// =============================================================================
// Data Functions
// =============================================================================

function SetParentAndChild(parentDataCard, childDataCard) {
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}

function GetSearchableWords(rootDataCard, searchableDictionary) {
    
    searchableDictionary.English[rootDataCard.English] = rootDataCard;
    searchableDictionary.Romanian[rootDataCard.Romanian] = rootDataCard;
    
    if (rootDataCard.Child.length == 0) {
        return;
    }
    
    for (let i = 0; i < rootDataCard.Child.length ; i++) {
        GetSearchableWords(rootDataCard.Child[i], searchableDictionary)
    }
    return;
}

// =============================================================================
// Display Functions
// =============================================================================

function GetDisplayNodes(node) {
    var displayList = [];
    
    displayList.push(node.Parent);
    
    for (var idx = 0; idx < node.Child.length; idx++) {
        displayList.push(node.Child[idx])
    }
    
    return displayList;
}

function ClearNodeDisplay(elementName) {
    var displayDiv = document.getElementById(elementName);
    for (var idx = displayDiv.children.length; idx > 0 ; idx--) {
        displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}

function PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList) {

    var headerDiv = document.getElementById(headerName);
    headerDiv.innerHTML = currentNode.English;

    var dataDiv = document.getElementById(dataName);
    dataDiv.innerHTML = currentNode.Data;

    var displayDiv = document.getElementById(elementName);

    for (var idx = 0; idx < displayList.length; idx++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = displayList[idx].English;
        newDiv.id = idx;
        newDiv.className = "data-card";

        // rainbow colors
        newDiv.style.backgroundColor = colorWheel.GetNextColor();
        newDiv.style.color = colorWheel.TextColor;
        if (idx === 0)
            newDiv.style.backgroundColor = colorWheel.ParentColor;
        
        displayDiv.appendChild(newDiv);
    }

}

function ColorWheel() {
    this.Index = 0;
    // https://htmlcolorcodes.com/
    // red -> purple -> blue -> green -> yellow -> orange
    this.ParentColor = "#1B2631";
    this.TextColor = "#F7F9F9";
    this.Colors = [
        "#641E16",
        "#78281F",
        "#512E5F",
        "#4A235A",
        "#154360",
        "#1B4F72",
        "#0E6251",
        "#0B5345",
        "#145A32",
        "#186A3B",
        "#7D6608",
        "#7E5109",
        "#784212",
        "#6E2C00"];

    this.GetNextColor = function() {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Colors[this.Index];
    }
}