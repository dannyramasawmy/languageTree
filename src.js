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

    this.GetDataCards = function(searchString) {
        var words = displayLanguageEnglish 
            ? Object.getOwnPropertyNames(this.English)
            : Object.getOwnPropertyNames(this.Romanian);
        
        var wordMask = words.map((x) => x.includes(searchString.toLowerCase()));
        var filteredWords = words.filter( (x, i) => wordMask[i]);    
        
        var filteredDataCards = filteredWords.map(
            x => displayLanguageEnglish
            ? this.English[x]
            : this.Romanian[x]); 
        
        return filteredDataCards
    }
}

function VerbTemplate(
    presentI, 
    presentYou, 
    presentHeShe, 
    presentWe,
    presentYouPlural, 
    presentThey,
    past, infinitive, relfexivePast="", reflexiveFuture="") {
    return (`
        <h2>Present</h2>
        Eu ${presentI} <br>
        Tu ${presentYou} <br>
        El/Ea ${presentHeShe} <br>
        Noi ${presentWe} <br>
        Voi ${presentYouPlural} <br>
        Ei/Ele ${presentThey} <br>
        <h2>Past</h2>
        Eu ${relfexivePast} am ${past} <br>
        Tu ${relfexivePast} ai ${past} <br>
        El/Ea ${relfexivePast} a ${past} <br>
        Noi ${relfexivePast} am ${past} <br>
        Voi ${relfexivePast} ați ${past} <br>
        Ei/Ele ${relfexivePast} au ${past} <br>
        <h2>Future</h2>
        Eu ${reflexiveFuture} voi ${infinitive} <br>
        Tu ${reflexiveFuture} vei ${infinitive} <br>
        El/Ea ${reflexiveFuture} va ${infinitive} <br>
        Noi ${reflexiveFuture} vom ${infinitive} <br>
        Voi ${reflexiveFuture} veți ${infinitive} <br>
        Ei/Ele ${reflexiveFuture} vor ${infinitive} <br>`);
}

function ReflexiveVerbTemplateSe(presentI, presentYou, presentHeShe, presentWe,
    presentYouPlural, presentThey, past, infinitive) {
    return VerbTemplate(
        "mă " + presentI, 
        "te " + presentYou, 
        "se " + presentHeShe, 
        "ne " + presentWe,
        "vă " + presentYouPlural, 
        "se " + presentThey,
        past, infinitive, "(-) ", "(-) ");
}

function ReflexiveVerbTemplateSi(presentI, presentYou, presentHeShe, presentWe,
    presentYouPlural, presentThey, past, infinitive) {
    return VerbTemplate(
        "îmi " + presentI, 
        "îți " + presentYou, 
        "își " + presentHeShe, 
        "ne " + presentWe,
        "vă " + presentYouPlural, 
        "își " + presentThey,
        past, infinitive, "(-) ", "(-) ");
}

// =============================================================================
// Data Functions
// =============================================================================

function SetParentAndChild(parentDataCard, childDataCard) {
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}

function GetSearchableWords(rootDataCard, searchableDictionary) {
    
    searchableDictionary.English[rootDataCard.English.toLowerCase()] = rootDataCard;
    searchableDictionary.Romanian[rootDataCard.Romanian.toLowerCase()] = rootDataCard;
    
    if (rootDataCard.Child.length == 0) {
        return;
    }
    
    for (let i = 0; i < rootDataCard.Child.length ; i++) {
        GetSearchableWords(rootDataCard.Child[i], searchableDictionary)
    }
    return;
}

function PrepareString(inputString) {
    // TODO: Replace needs regular expression
    return inputString.toLowerCase().trim();
}

function RandomRange(start, end) {
    // random number between start and end
    var value = (Math.random() * (end - start)) + start
    return value
}

function RandomIntRange(start, end) {
    // random int including start and end
    var value = Math.floor(RandomRange(start, end + 1))
    return value
}

function RandomElementInArray(arr) {
    // random element 
    return arr[RandomIntRange(0, arr.length - 1)]
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
        "#C0392B", // r
        "#E74C3C", // r
        "#9B59B6", // p
        "#8E44AD", // p
        "#2980B9", // b
        "#3498DB", // b
        "#1ABC9C", // t
        "#16A085", // t
        "#27AE60", // g
        "#2ECC71", // g
        "#F1C40F", // y
        "#F39C12", // y
        "#E67E22", // o
        "#D35400"]; //o

    this.ResetIndex = () => { this.Index = 5; };

    this.GetNextColor = () => {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Colors[this.Index];
    }
}

function ResetSearch() {
    // reset input field
    searchStringStack = [];
    document.getElementById("filter").value = "";
}