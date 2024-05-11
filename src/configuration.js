import { 
    BuildLanguageTree, 
    searchPlaceholder 
} from "../data/romanian-tree.js";

import { 
    sortEnglish, 
    sortRomanian, 
    prepareEnglishString, 
    prepareRomanianString 
} from "../data/romanian-functions.js";

export const CONFIG = {

    DATA_TREE: BuildLanguageTree(),
    
    SEARCH_PLACEHOLDER: searchPlaceholder,
    
    PRIMARY_SORT_FUNCTION: sortEnglish,

    PRIMARY_STRING_CLEAN_FUNCTION: prepareEnglishString,
    
    SECONDARY_SORT_FUNCTION: sortRomanian, 
    
    SECONDARY_STRING_CLEAN_FUNCTION: prepareRomanianString

}