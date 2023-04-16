// =============================================================================
// Containers
// =============================================================================

function DataCard(primary, secondary, data, isRoot = false)
{
    this.Primary = primary;
    this.Secondary = secondary;
    this.Data = data;

    this.Parent = [];
    this.Child = [];

    this.IsRoot = isRoot;
}

DataCard.prototype.AddChild = function (dataCard)
{
    this.Child.push(dataCard);
    this.Child.sort(SortEnglish);
}

DataCard.prototype.SetParent = function (dataCard)
{
    this.Parent = dataCard;
}

function SearchableDictionary()
{
    this.Secondary = {};
    this.Primary = {};

    this.GetDataCards = function (searchString)
    {
        // special search prefix
        let hasSearchPrefix = (searchString.length > 0 && searchString[0] === '!');
        let searchPrimary = GLOBAL.PrimaryLanguageFirst ^ hasSearchPrefix;

        if (hasSearchPrefix)
            searchString = searchString.slice(1);

        var words = searchPrimary
            ? Object.getOwnPropertyNames(this.Primary)
            : Object.getOwnPropertyNames(this.Secondary);

        var wordMask = words.map((x) => x.includes(searchString.toLowerCase()));
        var filteredWords = words.filter((x, i) => wordMask[i]);

        var filteredDataCards = filteredWords.map(
            x => searchPrimary
                ? this.Primary[x]
                : this.Secondary[x]);

        return filteredDataCards
    }

    this.GetDataCardFromState = function (state)
    {
        return this.Primary[state];
    };
}

function CopyText(text)
{
    navigator.clipboard.writeText(text);
    console.log(text + " copied!");
}

MakeCopyable = (text) => `
    <copy class="copyable" onclick="CopyText('${text}')">
        ○ ${text} <br>
    </copy>`

function VerbTemplate(
    presentI,
    presentYou,
    presentHeShe,
    presentWe,
    presentYouPlural,
    presentThey,
    past,
    infinitive,
    relfexivePast = "",
    reflexiveFuture = "")
{
    let columnSettings = "col-lg-3 col-md-6 gap-2 verb";

    return (`
    <br>
    <div class="row gy-4">
        <div class="${columnSettings}">
            <h4>Present</h4>
            ${MakeCopyable(`Eu ${presentI}`)}
            ${MakeCopyable(`Tu ${presentYou}`)}
            ${MakeCopyable(`El/Ea ${presentHeShe}`)}
            ${MakeCopyable(`Noi ${presentWe}`)}
            ${MakeCopyable(`Voi ${presentYouPlural}`)}
            ${MakeCopyable(`Ei/Ele ${presentThey}`)}
            </div>
        <div class="${columnSettings}">
            <h4>Past</h4>
            ${MakeCopyable(`Eu ${relfexivePast} am ${past}`)}
            ${MakeCopyable(`Tu ${relfexivePast} ai ${past}`)}
            ${MakeCopyable(`El/Ea ${relfexivePast} a ${past}`)}
            ${MakeCopyable(`Noi ${relfexivePast} am ${past}`)}
            ${MakeCopyable(`Voi ${relfexivePast} ați ${past}`)}
            ${MakeCopyable(`Ei/Ele ${relfexivePast} au ${past}`)}
        </div>
        <div class="${columnSettings}">
            <h4>Future</h4>
            ${MakeCopyable(`Eu ${reflexiveFuture} voi ${infinitive}`)}
            ${MakeCopyable(`Tu ${reflexiveFuture} vei ${infinitive}`)}
            ${MakeCopyable(`El/Ea ${reflexiveFuture} va ${infinitive}`)}
            ${MakeCopyable(`Noi ${reflexiveFuture} vom ${infinitive}`)}
            ${MakeCopyable(`Voi ${reflexiveFuture} veți ${infinitive}`)}
            ${MakeCopyable(`Ei/Ele ${reflexiveFuture} vor ${infinitive}`)}
        </div>
        <div class="${columnSettings}">
            <h4>Conditional (you would)</h4>
            ${MakeCopyable(`Eu aș ${infinitive}`)}
            ${MakeCopyable(`Tu ai ${infinitive}`)}
            ${MakeCopyable(`El/Ea ar ${infinitive}`)}
            ${MakeCopyable(`Noi am ${infinitive}`)}
            ${MakeCopyable(`Voi ați ${infinitive}`)}
            ${MakeCopyable(`Ei/Ele ar ${infinitive}`)}
        </div>
    </div>
        <br> <br>`);
}

function ReflexiveVerbTemplateSe(presentI, presentYou, presentHeShe, presentWe,
    presentYouPlural, presentThey, past, infinitive)
{
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
    presentYouPlural, presentThey, past, infinitive)
{
    return VerbTemplate(
        "îmi " + presentI,
        "îți " + presentYou,
        "își " + presentHeShe,
        "ne " + presentWe,
        "vă " + presentYouPlural,
        "își " + presentThey,
        past, infinitive, "(-) ", "(-) ");
}

function NounTemplateFemale(singluar, plural, definiteArticle, definitePlural)
{
    return (`
        o ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `)
};

function NounTemplateMale(singluar, plural, definiteArticle, definitePlural)
{
    return (`
        Un ${singluar} <br>
        doi ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `)
};

function NounTemplateNeuter(singluar, plural, definiteArticle, definitePlural)
{
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

function SetParentAndChild(parentDataCard, childDataCard)
{
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}

function GetSearchableWords(rootDataCard, searchableDictionary)
{
    searchableDictionary.Primary[PrepareEnglishString(rootDataCard.Primary)] = rootDataCard;
    searchableDictionary.Secondary[PrepareRomanianString(rootDataCard.Secondary)] = rootDataCard;

    if (rootDataCard.Child.length == 0) return;

    for (let i = 0; i < rootDataCard.Child.length; i++)
        GetSearchableWords(rootDataCard.Child[i], searchableDictionary);

    return;
}

PrepareEnglishString = (inputString) => inputString.toLowerCase().trim();
PrepareRomanianString = (inputString) => inputString.toLowerCase().trim()
    .replace(/[ăâ]/g, "a").replace(/î/g, "i").replace(/ș/g, "s").replace(/ț/g, "t");

function SortDisplayList(displayList)
{
    if (GLOBAL.PrimaryLanguageFirst)
        displayList.sort(SortEnglish);
    else
        displayList.sort(SortRomanian);
    return displayList;
}

function SortRomanian(x, y)
{
    if (PrepareRomanianString(x.Secondary) < PrepareRomanianString(y.Secondary)) return -1;
    if (PrepareRomanianString(x.Secondary) > PrepareRomanianString(y.Secondary)) return 1;
    return 0;
}

function SortEnglish(x, y)
{
    if (PrepareEnglishString(x.Primary) < PrepareEnglishString(y.Primary)) return -1;
    if (PrepareEnglishString(x.Primary) > PrepareEnglishString(y.Primary)) return 1;
    return 0;
}

function ResetSearch()
{
    searchStringStack = [];

    let searchBar = document.getElementById("SearchBar")
    searchBar.value = "";
    searchBar.placeholder = `Search (${G_searchable.GetDataCards("").length})`;
}

RandomRange = (start, end) => (Math.random() * (end - start)) + start;
RandomIntRange = (start, end) => Math.floor(RandomRange(start, end + 1));
RandomElementInArray = (arr) => arr[RandomIntRange(0, arr.length - 1)];

// =============================================================================
// Display Functions
// =============================================================================

function GetDisplayNodes(node)
{
    var displayList = [];
    for (var idx = 0; idx < node.Child.length; idx++)
        displayList.push(node.Child[idx])

    return displayList;
}

function TreeDepth(currentNode)
{
    if (currentNode.IsRoot) return 0;
    if (currentNode.Child.length == 0) return 2;
    return 1;
}

function ScrollHandler()
{
    // https://javascript.info/size-and-scroll-window
    this.ScrollHistory = [];

    this.GetCurrentHeight = () => window.pageYOffset;

    this.AddHistory = () =>
    {
        this.ScrollHistory.push(window.pageYOffset);
    }

    this.GetPreviousHeight = () =>
    {
        if (this.ScrollHistory.length > 0) return this.ScrollHistory.pop();
        return 0;
    }

    this.MaxScrollHeight = () =>
    {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        return scrollHeight;
    }

    this.PercentageScroll = () => this.GetCurrentHeight() / this.MaxScrollHeight();
}

// =============================================================================
// COLORS
// =============================================================================

function RainbowColorWheel()
{
    // https://htmlcolorcodes.com/
    // red -> purple -> blue -> green -> yellow -> orange
    this.Index = 0;
    this.ParentColor = "#ECF0F1";
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

    this.ResetIndex = () => this.Index = 5;

    this.GetNextColorIndex = () =>
    {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Index;
    }

    this.GetNextColor = () =>
    {
        this.GetNextColorIndex();
        return this.Colors[this.Index];
    }
}