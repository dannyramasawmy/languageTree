import { AbstractNode } from "../tree/models.js";

/**
 * 
 * @param {AbstractNode[]} dataCardMapping 
 * @param {boolean} isSearchPrimary 
 * @param {string} searchString 
 * @returns {AbstractNode[]}
 */
export function searchForMatchingCards(dataCardMapping, isSearchPrimary, searchString) {

    let preparedString = searchString.toLowerCase().trim();
    
    // let filteredWords = dataCardMapping.filter(x => 
    //     x.Primary.toLowerCase().trim().includes(preparedString));
    
    // let filteredWords = dataCardMapping.filter(x => 
    //     x.Secondary.toLowerCase().trim().includes(preparedString));

    let filteredWords = dataCardMapping.filter(x => 
        x.SearchableTerms().filter(y =>
            y.toLowerCase().trim().includes(preparedString))
            .length > 0);

    return filteredWords
}

/**
 * 
 * @param {AbstractNode[]} nodeCollection 
 * @param {string} state 
 * @returns AbstractNode
 */
export function getDataCardFromUID(nodeCollection, state) {
    return nodeCollection.find((n) => n.GetHashId() == state)
}