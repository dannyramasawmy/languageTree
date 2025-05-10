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
/**
 * Builds a <div> containing text lines, each followed by a <br>.
 * @param {string[]} lines - Array of lines to display
 * @returns {HTMLDivElement}
 */
export function buildLinesDiv(lines) {
    const div = document.createElement("div");

    lines.forEach(line => {
        const divLine = document.createElement("div");
        divLine.appendChild(document.createTextNode(line));
        divLine.appendChild(document.createElement("br"));
        divLine.onclick = () => copyToClipboard(line);
        div.appendChild(divLine);
    });

    return div;
}
/**
 * Builds a <div> containing text lines, each followed by a <br>.
 * @param {string} title - A colum
 * @param {string[]} lines - Array of lines to display
 * @returns {HTMLDivElement}
 */
export function buildColumnDiv(title, lines) {
    let divColumn = document.createElement("div");
    divColumn.classList.add("col-lg-3", "col-md-6", "gap-2");

    let titleElement = document.createElement('h4');
    titleElement.innerText = title;
    divColumn.appendChild(titleElement);
    
    let linesElement = buildLinesDiv(lines);
    divColumn.appendChild(linesElement);

    return divColumn;
}

/**
 * Copies text to clipboard
 * @param {string} line - the text to copy
 */
export const copyToClipboard = (line) => {
    navigator.clipboard.writeText(line);

    const romanian = "ro-RO"
    let romInstalled =  window.speechSynthesis
        .getVoices()
        .filter(x => x.lang == romanian)
        .length > 0

    if (romInstalled)
    {
        let openBracket = line.indexOf('(')
        let closeBracket = line.indexOf(')')
        let hasValidBracket = openBracket > -1 && closeBracket > -1 && closeBracket > openBracket
        
        var lineToSpeak = hasValidBracket
            ? line.replace(line.slice(openBracket, closeBracket + 1), "")
            : line

        const utterance = new SpeechSynthesisUtterance(lineToSpeak);
        utterance.lang = "ro-Ro"; // Set language (e.g. Romanian)
        speechSynthesis.speak(utterance);
    }
};

