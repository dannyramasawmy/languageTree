import { BuildLanguageTree } from "./data/romanian-tree.js";

import {
    sortEnglish,
    sortRomanian,
    prepareEnglishString,
    prepareRomanianString
} from "./data/romanian-functions.js";
import { AbstractNode } from "./src/tree/models.js";
import { primarySort } from "./src/tree/functions.js";
import { prepareString } from "./src/utils/string.js";
import { BuildMusicTree } from "./data/music-tree.js";
import { FilterCharacterKey, SearchFilter } from "./src/search/models.js";
import { VerbDataCard } from "./data/romanian-language-models.js";

/** @typedef {import('./src/tree/types.js').NodeComparator} NodeComparator */
/** @typedef {import('./src/tree/types.js').StringCleaner} StringCleaner */

/**
 * @typedef {Object} AppConfig
 * @property {AbstractNode} DATA_TREE - The tree data structure
 * @property {NodeComparator} PRIMARY_SORT_FUNCTION - Comparator function
 * @property {NodeComparator} SECONDARY_SORT_FUNCTION - Comparator function
 * @property {[string, string]} STATISTICS_LABELS - Primary and Secondary labels
 * @property {SearchFilter[]} SEARCH_FILTERS - Custom search filters
*/

/** @type {AppConfig} */
const CONFIG_ROMANIAN = {

    DATA_TREE: BuildLanguageTree(),
    PRIMARY_SORT_FUNCTION: sortEnglish,
    SECONDARY_SORT_FUNCTION: sortRomanian,
    STATISTICS_LABELS: ["Your Statistics", "Statistici Tale"],
    SEARCH_FILTERS: [
        new SearchFilter(
            FilterCharacterKey.AT, 
            "Search primary language", 
            (x, y) => prepareEnglishString(x.Primary).includes(y)),
        new SearchFilter(
            FilterCharacterKey.EXCLAMATION, 
            "Search secondary language", 
            (x, y) => prepareRomanianString(x.Secondary).includes(y)),
        new SearchFilter(
            FilterCharacterKey.HASHTAG, 
            "Search only verbs", 
            (x, y) => {
                return (x instanceof VerbDataCard) 
                && (prepareEnglishString(x.Primary).includes(y)
                || prepareRomanianString(x.Secondary).includes(y))
        }),
        new SearchFilter(
            FilterCharacterKey.ASTERIX, 
            "Search all available terms", 
            (x, y) => prepareEnglishString(prepareRomanianString(x.SearchableTerms().join(''))).includes(y))           
    ]
}

/** @type {AppConfig} - MusicTree */
const CONFIG_MUSIC = {

    DATA_TREE: BuildMusicTree(),

    PRIMARY_SORT_FUNCTION: primarySort,
    SECONDARY_SORT_FUNCTION: primarySort,
    SEARCH_FILTERS : [],
    STATISTICS_LABELS: ["Stats", "Views"]
}

export const CONFIG = CONFIG_ROMANIAN