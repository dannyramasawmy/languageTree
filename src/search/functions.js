
export function getAllCards(dataCardMapping, isSearchPrimary) {
    return searchForMatchingCards(dataCardMapping, isSearchPrimary, "")
}

export function searchForMatchingCards(dataCardMapping, isSearchPrimary, searchString) {

    let words = isSearchPrimary
        ? Object.getOwnPropertyNames(dataCardMapping.Primary)
        : Object.getOwnPropertyNames(dataCardMapping.Secondary);

    let filteredWords = words.filter(x => x.includes(searchString));

    let filteredDataCards = filteredWords.map(
        x => isSearchPrimary
            ? dataCardMapping.Primary[x]
            : dataCardMapping.Secondary[x]);

    return filteredDataCards;
}

export function getNumberOfCards(dataCardMapping) {
    return Object.getOwnPropertyNames(dataCardMapping.Primary).length
}

export function getDataCardFromState(dataCardMapping, state) {
    return dataCardMapping.Primary[state]
}

export function buildDataCardMappingRecursive(
    dataCard, 
    dataCardMapping, 
    primaryCleanStringFunc, 
    secondaryCleanStringFunc) {

    let mapping = { ...dataCardMapping };
    mapping.Primary[primaryCleanStringFunc(dataCard.Primary)] = dataCard;
    mapping.Secondary[secondaryCleanStringFunc(dataCard.Secondary)] = dataCard;

    if (dataCard.Child.length == 0) return mapping;

    for (let i = 0; i < dataCard.Child.length; i++) {
        mapping = buildDataCardMappingRecursive(dataCard.Child[i], mapping, primaryCleanStringFunc, secondaryCleanStringFunc);
    }

    return mapping;
}

