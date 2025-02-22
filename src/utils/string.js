export function formatNumber(num) {
    if (typeof num === "string") return num
    if (num < 1000) return num.toString();
    let units = ["", "K", "M", "B", "T"]; 
    let exponent = Math.floor(Math.log10(num) / 3);
    let shortNumber = num / Math.pow(1000, exponent);
    return shortNumber.toFixed(0) + units[exponent];
}

