// =============================================================================
// Containers
// =============================================================================

export function DataCard(primary, secondary, data, isRoot = false)
{
    this.Primary = primary;
    this.Secondary = secondary;
    this.Data = data;

    this.Parent = [];
    this.Child = [];

    this.IsRoot = isRoot;

    this.AddChild = (dataCard) =>
    {
        this.Child.push(dataCard);
        this.Child.sort(SortEnglish);
    }

    this.SetParent = (dataCard) =>
    {
        this.Parent = dataCard;
    }
}

export function SearchableDictionary()
{
    this.Secondary = {};
    this.Primary = {};

    this.GetDataCards = (GLOBAL, searchString) =>
    {
        // special search prefix
        let hasSearchPrefix = (searchString.length > 0 && searchString[0] === '!');
        let searchPrimary = GLOBAL.PrimaryLanguageFirst ^ hasSearchPrefix;

        if (hasSearchPrefix)
            searchString = searchString.slice(1);

        var words = searchPrimary
            ? Object.getOwnPropertyNames(this.Primary)
            : Object.getOwnPropertyNames(this.Secondary);

        // console.log(words)

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

// =============================================================================
// Data Functions
// =============================================================================

export function SetParentAndChild(parentDataCard, childDataCard)
{
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}

export function GetSearchableWords(rootDataCard, searchableDictionary)
{
    searchableDictionary.Primary[PrepareEnglishString(rootDataCard.Primary)] = rootDataCard;
    searchableDictionary.Secondary[PrepareRomanianString(rootDataCard.Secondary)] = rootDataCard;

    if (rootDataCard.Child.length == 0) return;

    for (let i = 0; i < rootDataCard.Child.length; i++)
        GetSearchableWords(rootDataCard.Child[i], searchableDictionary);

    return searchableDictionary;
}

export function PrepareEnglishString(inputString) { return inputString.toLowerCase().trim(); }
export function PrepareRomanianString(inputString) { return inputString.toLowerCase().trim()
    .replace(/[ăâ]/g, "a").replace(/î/g, "i").replace(/ș/g, "s").replace(/ț/g, "t"); }

export function SortDisplayList(GLOBAL, displayList)
{
    if (GLOBAL.PrimaryLanguageFirst)
        displayList.sort(SortEnglish);
    else
        displayList.sort(SortRomanian);
    return displayList;
}

export function SortRomanian(x, y)
{
    if (PrepareRomanianString(x.Secondary) < PrepareRomanianString(y.Secondary)) return -1;
    if (PrepareRomanianString(x.Secondary) > PrepareRomanianString(y.Secondary)) return 1;
    return 0;
}

export function SortEnglish(x, y)
{
    if (PrepareEnglishString(x.Primary) < PrepareEnglishString(y.Primary)) return -1;
    if (PrepareEnglishString(x.Primary) > PrepareEnglishString(y.Primary)) return 1;
    return 0;
}

export function ResetSearch(GLOBAL, G_searchable)
{
    // searchStringStack = [];

    let searchBar = document.getElementById("SearchBar")
    searchBar.value = "";
    searchBar.placeholder = `Search (${G_searchable.GetDataCards(GLOBAL, "").length})`;
}

// =============================================================================
// Display Functions
// =============================================================================

export function GetDisplayNodes(node)
{
    var displayList = [];
    for (var idx = 0; idx < node.Child.length; idx++)
        displayList.push(node.Child[idx])

    return displayList;
}

export function TreeDepth(currentNode)
{
    if (currentNode.IsRoot) return 0;
    if (currentNode.Child.length == 0) return 2;
    return 1;
}

export function ScrollHandler()
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

export function RainbowColorWheel()
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