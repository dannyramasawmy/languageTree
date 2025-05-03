import { BuildLanguageTree } from "./data/romanian-tree.js";

import {
    sortEnglish,
    sortRomanian,
    prepareEnglishString,
    prepareRomanianString
} from "./data/romanian-functions.js";
import { AbstractNode } from "./src/tree/models.js";

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
export const CONFIG = {

    DATA_TREE: BuildLanguageTree(),

    PRIMARY_SORT_FUNCTION: sortEnglish,

    PRIMARY_STRING_CLEAN_FUNCTION: prepareEnglishString,

    SECONDARY_SORT_FUNCTION: sortRomanian,

    SECONDARY_STRING_CLEAN_FUNCTION: prepareRomanianString

}