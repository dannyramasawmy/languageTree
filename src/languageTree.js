import { sortEnglish } from "../data/romanian-functions.js";
import { sortRomanian } from "../data/romanian-functions.js";

export function SortDisplayList(GLOBAL, displayList)
{
    if (GLOBAL.PrimaryLanguageFirst)
        displayList.sort(sortEnglish);
    else
        displayList.sort(sortRomanian);
    return displayList;
}


