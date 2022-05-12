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
        this.Child.sort(
            (x, y) => x.English[0] < y.English[0] ? -1 : 1);
    }
    
    this.SetParent = function(dataCard) {
        this.Parent = dataCard;
    }
}

function SearchableDictionary() {
    this.Romanian = {};
    this.English = {};
}

function VerbTemplate(
    presentI, 
    presentYou, 
    presentHeShe, 
    presentWe,
    presentYouPlural, 
    presentThey,
    past, infinitive) {
    return (`
        <h2>Present</h2>
        Eu ${presentI} <br>
        Tu ${presentYou} <br>
        El/Ea ${presentHeShe} <br>
        Noi ${presentWe} <br>
        Voi ${presentYouPlural} <br>
        Ei/Ele ${presentThey} <br>
        <h2>Past</h2>
        Eu am ${past} <br>
        Tu ai ${past} <br>
        El/Ea a ${past} <br>
        Noi am ${past} <br>
        Voi ați ${past} <br>
        Ei/Ele au ${past} <br>
        <h2>Future</h2>
        Eu voi ${infinitive} <br>
        Tu vei ${infinitive} <br>
        El/Ea va ${infinitive} <br>
        Noi vom ${infinitive} <br>
        Voi veți ${infinitive} <br>
        Ei/Ele vor ${infinitive} <br>`);
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

    colorWheel.ResetIndex()

    var headerDiv = document.getElementById(headerName);
    headerDiv.innerHTML = displayLanguageEnglish
        ? currentNode.English + " " + "<blue>" + currentNode.Romanian + "</blue>"
        : currentNode.Romanian + " " + "<blue>" + currentNode.English  + "</blue>";

    var dataDiv = document.getElementById(dataName);
    dataDiv.innerHTML = currentNode.Data;

    var displayDiv = document.getElementById(elementName);

    for (var idx = 0; idx < displayList.length; idx++){
        var newDiv = document.createElement("div");

        newDiv.innerHTML = displayLanguageEnglish
            ? displayList[idx].English
            : newDiv.innerHTML = displayList[idx].Romanian;

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
    // https://htmlcolorcodes.com/
    // red -> purple -> blue -> green -> yellow -> orange
    this.Index = 0;
    this.ParentColor = "#1B2631";
    this.TextColor = "#ECF0F1";
    this.Colors = [
        "#C0392B",
        "#E74C3C",
        "#9B59B6",
        "#8E44AD",
        "#2980B9",
        "#3498DB",
        "#1ABC9C",
        "#16A085",
        "#27AE60",
        "#2ECC71",
        "#F1C40F",
        "#F39C12",
        "#E67E22",
        "#D35400"];

    this.ResetIndex = () => { this.Index = 5; };

    this.GetNextColor = () => {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Colors[this.Index];
    }
}