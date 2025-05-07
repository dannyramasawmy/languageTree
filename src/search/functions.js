import { AbstractNode } from "../tree/models.js";
import { SearchFilter } from "./models.js";

/**
 * Filter for matching nodes given a collection of nodes
 * @param {AbstractNode[]} nodes - a collection of nodes 
 * @param {boolean} isSearchPrimary - whether the primary field is shown
 * @param {string} rawSearchString - the raw search string
 * @param {SearchFilter[]} searchFilters - a collection of user defined custom filters
 * @returns {AbstractNode[]} - a collection of filtered nodes
 */
export function searchForMatchingNodes(nodes, isSearchPrimary, rawSearchString, searchFilters) {

    var preparedString = rawSearchString.toLowerCase().trim();
    let filterCharacters = new Set(searchFilters.map(x => x.key)) 

    /**
     * Default filter
     * @param {AbstractNode} node - an AbstractNode object
     * @param {string} str - A given search string
     * @returns {boolean} - Filter value
     */
    var filterPredicate = (node, str) => (isSearchPrimary 
        ? node.Primary.toLowerCase().trim() 
        : node.Secondary.toLowerCase().trim()).includes(str)

    let firstCharacter = rawSearchString[0]
    if (rawSearchString.length > 0 && filterCharacters.has(firstCharacter)){
        preparedString = preparedString.slice(1)
        filterPredicate = searchFilters.find(x => x.key == firstCharacter)?.Filter
    }
    
    let filteredWords = nodes.filter(x => filterPredicate(x, preparedString));
    return filteredWords
}

/**
 * Return the first matching node by UID
 * @param {AbstractNode[]} nodeCollection - given a collection of nodes return the first matching node
 * @param {string} UID - The UID to find
 * @returns AbstractNode - the first matching node
 */
export function getDataCardFromUID(nodeCollection, UID) {
    return nodeCollection.find((n) => n.GetHashId() == UID)
}