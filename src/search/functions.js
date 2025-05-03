
export function getAllCards(dataCardMapping, isSearchPrimary) {
    return searchForMatchingCards(dataCardMapping, isSearchPrimary, "")
}

export function searchForMatchingCards(dataCardMapping, isSearchPrimary, searchString) {

    // special characters
    let searchString_ = searchString.toLowerCase().trim();
    var words = [];
    let stringToSearch = "";
    let mapping;

    switch (searchString[0]) {
        case '!':
            // Search in secondary language
            words.push(...
                (isSearchPrimary 
                    ? Object.getOwnPropertyNames(dataCardMapping.Secondary)
                    : Object.getOwnPropertyNames(dataCardMapping.Primary)));
                    
            stringToSearch = searchString_.slice(1);

            mapping = x => isSearchPrimary
                ? dataCardMapping.Secondary[x]
                : dataCardMapping.Primary[x];
            break;
        
        case '*':
            // Search in both languages
            words.push(
                ...Object.getOwnPropertyNames(dataCardMapping.Primary), 
                ...Object.getOwnPropertyNames(dataCardMapping.Secondary));
            
            stringToSearch = searchString_.slice(1);
            
            mapping = x => x in dataCardMapping.Primary
                    ? dataCardMapping.Primary[x]
                    : dataCardMapping.Secondary[x]
            break;
  
        default:
            // Search in primary languages
            words.push(...
                (isSearchPrimary 
                ? Object.getOwnPropertyNames(dataCardMapping.Primary)
                : Object.getOwnPropertyNames(dataCardMapping.Secondary)));
            
            stringToSearch = searchString_;

            mapping = x => isSearchPrimary
                ? dataCardMapping.Primary[x]
                : dataCardMapping.Secondary[x];
     
            break;

      }

    console.log(words.length)
    let filteredWords = words.filter(x => x.includes(stringToSearch));

    let filteredDataCards = filteredWords.map(mapping);

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

