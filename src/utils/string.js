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

/**
 * Converts plain text to an HTML Element
 * @param {string} text - input to text to convert
 * @returns {HTMLElement} - An HTML Element
 */
export function stringToHTMLElement(text) {
    const div = document.createElement("div");
    div.innerHTML = text
    return div
}

/**
 * TODO: Revisit and make less janky
 * Creates a scrollable div that shows max 10 characters horizontally.
 * @param {string} text - The full text content to display.
 * @returns {HTMLElement}
 */
export function createScrollableTextDiv(text) {
    
    let numberOfCharacters = 15;
    
    if (text.length < numberOfCharacters)
        return stringToHTMLElement(text)

    let scroll_text = `${text} `

    const div = document.createElement("div");
    div.textContent = scroll_text;
  
    // Minimal necessary layout for overflow scrolling
    div.style.whiteSpace = "nowrap";
    div.style.overflow = "hidden"; // Hide scrollbars
    div.style.maxWidth = `${numberOfCharacters}ch`;
    div.style.margin = "0 auto";   // Center within parent
    div.style.display = "block";  // Ensure it's treated like a block-level element
  
    // Wrap content in inner scrolling span
    const span = document.createElement("span");
    span.textContent = scroll_text;
    span.style.display = "inline-block";
    span.style.paddingRight = "10ch"; // ensure space before reset (optional)
    div.appendChild(span);
    
    let scrollSpeed = 0.5;
  
    function scrollLoop() {
      div.scrollLeft += scrollSpeed;
  
      if (div.scrollLeft >= span.offsetWidth) {
        div.scrollLeft = 0;
      }
  
      requestAnimationFrame(scrollLoop);
    }
  
    requestAnimationFrame(scrollLoop);
  
    return div;
  }
  
/**
 * Lower case and whitespace removed 
 * @param {string} inputString - raw string
 * @returns {string} - clean string
 */
export function prepareString(inputString) { 
    return inputString.toLowerCase().trim(); 
}