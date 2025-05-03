/** @typedef {import('../src/tree/types.js').NodeComparator} NodeComparator */
/** @typedef {import('../src/tree/types.js').StringCleaner} StringCleaner */

/** @type {StringCleaner} */
export function prepareEnglishString(inputString) { 
    return inputString.toLowerCase().trim(); 
}

/** @type {StringCleaner} */
export function prepareRomanianString(inputString) {
    return inputString.toLowerCase().trim()
    .replace(/[ăâ]/g, "a").replace(/î/g, "i").replace(/ș/g, "s").replace(/ț/g, "t");
}

/** @type {NodeComparator} */
export function sortRomanian(x, y) {
    if (prepareRomanianString(x.Secondary) < prepareRomanianString(y.Secondary)) return -1;
    if (prepareRomanianString(x.Secondary) > prepareRomanianString(y.Secondary)) return 1;
    return 0;
}

/** @type {NodeComparator} */
export function sortEnglish(x, y) {
    if (prepareEnglishString(x.Primary) < prepareEnglishString(y.Primary)) return -1;
    if (prepareEnglishString(x.Primary) > prepareEnglishString(y.Primary)) return 1;
    return 0;
}

