// =============================================================================
// Containers
// =============================================================================

function DataCard(english, romanian, data, isRoot = false) {
    this.English = english;
    this.Romanian = romanian;
    this.Data = data;

    this.Parent = [];
    this.Child = [];

    this.IsRoot = isRoot;

    this.AddChild = function (dataCard) {
        this.Child.push(dataCard);
        this.Child.sort(
            (x, y) => x.English[0] < y.English[0] ? -1 : 1);
    }

    this.SetParent = function (dataCard) {
        this.Parent = dataCard;
    }
}

function SearchableDictionary() {
    this.Romanian = {};
    this.English = {};

    this.GetDataCards = function (searchString) {
        var words = displayLanguageIsEnglish
            ? Object.getOwnPropertyNames(this.English)
            : Object.getOwnPropertyNames(this.Romanian);

        var wordMask = words.map((x) => x.includes(searchString.toLowerCase()));
        var filteredWords = words.filter((x, i) => wordMask[i]);

        var filteredDataCards = filteredWords.map(
            x => displayLanguageIsEnglish
                ? this.English[x]
                : this.Romanian[x]);

        return filteredDataCards
    }

    this.GetDataCardFromState = function (state) {
        return this.English[state];
    };
}

function VerbTemplate(
    presentI,
    presentYou,
    presentHeShe,
    presentWe,
    presentYouPlural,
    presentThey,
    past, infinitive, relfexivePast = "", reflexiveFuture = "") {
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
        Ei/Ele ${reflexiveFuture} vor ${infinitive} <br>
        <h2>Conditional mood (you would)</h2>
        Eu aș ${infinitive} <br>
        Tu ai ${infinitive} <br>
        El/Ea ar ${infinitive} <br>
        Noi am ${infinitive} <br>
        Voi ați ${infinitive} <br>
        Ei/Ele ar ${infinitive} <br>
        <br> <br>`);
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

function NounTemplateFemale(singluar, plural, definiteArticle, definitePlural) {
    return (`
        o ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `)
};

function NounTemplateMale(singluar, plural, definiteArticle, definitePlural) {
    return (`
        Un ${singluar} <br>
        doi ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `)
};

function NounTemplateNeuter(singluar, plural, definiteArticle, definitePlural) {
    return (`
        un ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `)
};

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

    for (let i = 0; i < rootDataCard.Child.length; i++) {
        GetSearchableWords(rootDataCard.Child[i], searchableDictionary);
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

    for (var idx = 0; idx < node.Child.length; idx++) {
        displayList.push(node.Child[idx])
    }

    return displayList;
}

function ClearNodeDisplay(elementName) {
    var displayDiv = document.getElementById(elementName);
    for (var idx = displayDiv.children.length; idx > 0; idx--) {
        displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}

function PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList) {

    // set root or parent icon
    if (currentNode.IsRoot)
        SwapImageOnButton("parent-card", "languageTree/img/root-icon.png");
    else
        SwapImageOnButton("parent-card", "languageTree/img/parent-icon.png");

    colorWheel.ResetIndex();
    window.scrollTo(0, 0);

    var headerDiv = document.getElementById(headerName);
    headerDiv.innerHTML = displayLanguageIsEnglish
        ? `<orange>${currentNode.English}</orange> <blue>${currentNode.Romanian}</blue>`
        : `<blue>${currentNode.Romanian}</blue> <orange>${currentNode.English}</orange>`;

    var dataDiv = document.getElementById(dataName);
    dataDiv.innerHTML = currentNode.Data;

    var displayDiv = document.getElementById(elementName);

    for (var idx = 0; idx < displayList.length; idx++) {
        var newDiv = document.createElement("div");

        newDiv.innerHTML = displayLanguageIsEnglish
            ? displayList[idx].English
            : newDiv.innerHTML = displayList[idx].Romanian;

        newDiv.id = idx;
        newDiv.className = "data-card";

        // rainbow colors
        newDiv.style.backgroundColor = colorWheel.GetNextColor();
        newDiv.style.color = colorWheel.TextColor;

        displayDiv.appendChild(newDiv);
    }
}

function SortDisplayList(displayList) {
    if (displayLanguageIsEnglish) {
        displayList.sort(
            (x, y) => x.English[0] < y.English[0] ? -1 : 1
        );
    }
    else {
        displayList.sort(
            (x, y) => x.Romanian[0] < y.Romanian[0] ? -1 : 1
        );
    }

    return displayList;
}

function ColorWheel() {
    // https://htmlcolorcodes.com/
    // red -> purple -> blue -> green -> yellow -> orange
    this.Index = 0;
    this.ParentColor = "#1B2631";
    this.TextColor = "#ECF0F1";
    this.Colors = [
        "#C0392BDF", // r
        "#E74C3CDF", // r
        "#9B59B6DF", // p
        "#8E44ADDF", // p
        "#2980B9DF", // b
        "#3498DBDF", // b
        "#1ABC9CDF", // t
        "#16A085DF", // t
        "#27AE60DF", // g
        "#2ECC71DF", // g
        "#F1C40FDF", // y
        "#F39C12DF", // y
        "#E67E22DF", // o
        "#D35400DF"]; //o

    this.ResetIndex = () => { this.Index = 5; };

    this.GetNextColor = () => {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Colors[this.Index];
    }
}

function ResetSearch() {
    // reset input field
    HideSearchButtons();
    searchStringStack = [];
    document.getElementById("filter").value = "";
    SwapImageOnButton("search-button", "img/search-icon-1.png");
}

// =============================================================================
// Buttons
// =============================================================================

function RotateImageOnButton(elementName, angle) {
    var displayDiv = document.getElementById(elementName);
    displayDiv.style.transform = `rotate(${angle}deg)`;
    console.log(`rotate(${angle}deg)`)
}

function GetShuffleIconPath(increment) {
    randomSelectionIcons = (randomSelectionIcons + increment) % 4
    return `"img/shuffle-icon-${randomSelectionIcons + 1}.png"`;
}
GetNextShuffleIconPath = () => GetShuffleIconPath(1);
GetPreviousShuffleIconPath = () => GetShuffleIconPath(3);

function SwapImageOnButton(elementName, urlToImage) {
    var displayDiv = document.getElementById(elementName);
    displayDiv.style.backgroundImage = `url(${urlToImage})`;
}

function ShowSearchButtons() {
    let searchBar = document.querySelector('.search-bar');
    searchBar.style.display = 'flex';

    searchModeIsActive = true;

    document.getElementById("filter").focus();
}

function HideSearchButtons() {
    let searchBar = document.querySelector('.search-bar');
    searchBar.style.display = 'none';

    searchModeIsActive = false;
}