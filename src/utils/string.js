/**
 * Takes a number and formats it to a string with a maximum of 4 digits
 * @param {number} num - the number to format
 * @returns {string} - A string representing the number e.g. '10K', '1M', ...
 */
export function formatNumber(num) {
    if (typeof num === "string") return num
    if (Number.isNaN(num)) return '-'
    if (num < 1000) return num.toString();
    let units = ["", "K", "M", "B", "T"]; 
    let exponent = Math.floor(Math.log10(num) / 3);
    let shortNumber = num / Math.pow(1000, exponent);
    let formattedNumber = shortNumber.toFixed(0) + units[exponent];
    return formattedNumber
}

