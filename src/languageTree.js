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


