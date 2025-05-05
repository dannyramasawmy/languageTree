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

/** @typedef {import('./src/tree/types.js').NodeComparator} NodeComparator */
/** @typedef {import('./src/tree/types.js').StringCleaner} StringCleaner */

/**
 * @typedef {Object} AppConfig
 * @property {AbstractNode} DATA_TREE - The tree data structure
 * @property {NodeComparator} PRIMARY_SORT_FUNCTION - Comparator function
 * @property {StringCleaner} PRIMARY_STRING_CLEAN_FUNCTION - Cleans a string
 * @property {NodeComparator} SECONDARY_SORT_FUNCTION
 * @property {StringCleaner} SECONDARY_STRING_CLEAN_FUNCTION
 */

/** @type {AppConfig} */
const CONFIG_ROMANIAN = {

    DATA_TREE: BuildLanguageTree(),

    PRIMARY_SORT_FUNCTION: sortEnglish,

    PRIMARY_STRING_CLEAN_FUNCTION: prepareEnglishString,

    SECONDARY_SORT_FUNCTION: sortRomanian,

    SECONDARY_STRING_CLEAN_FUNCTION: prepareRomanianString

}

/** @type {AppConfig} - MusicTree */
const CONFIG_MUSIC = {

    DATA_TREE: BuildMusicTree(),

    PRIMARY_SORT_FUNCTION: primarySort,

    PRIMARY_STRING_CLEAN_FUNCTION: prepareString,

    SECONDARY_SORT_FUNCTION: primarySort,

    SECONDARY_STRING_CLEAN_FUNCTION: prepareString

}

export const CONFIG = CONFIG_ROMANIAN