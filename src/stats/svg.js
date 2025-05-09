
export class SVGParameters {
    /**
     * 
     * @param {string} color - colour
     * @param {number} height height in em units
     */
    constructor(color, height) {
        this.color = color
        this.height = `${height}em`
    }

    static Default = () => {
        return new SVGParameters("#e67e22", 1)
    }
}

/**
 * 
 * @param {string[]} svgPaths - A collection of paths for the svg
 * @param {SVGParameters} parameters - parameters to control the height and colour of the svg
 * @returns {SVGElement} an SVGElement
 */
function svgFromPath(svgPaths, parameters, isFill = true, isStroke = true) {
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("height", parameters.height);

    if (isStroke) {
        svgElement.setAttribute("stroke", parameters.color);
    }

    if (isFill) {
        svgElement.setAttribute("fill", parameters.color);
    }

    svgElement.setAttribute("class", "my-2");
    svgElement.setAttribute("viewBox", "0 0 16 16");

    for (const svgPath of svgPaths) {
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", svgPath);
        svgElement.appendChild(path);
    }

    return svgElement;
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createCardSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z",
        "M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
    ], parameters, true, true)
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createDelatSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659"
    ], parameters, true, true)
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createEyeSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0",
        "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    ], parameters, true, false)
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createFastForwardSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z",
        "M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z"
    ], parameters, true, false)
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createLinkSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z",
        "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"
    ], parameters, true, true)
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createMortarBoardSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z",
        "M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"
    ], parameters, true, false)
}

/**
 * Create an SVG icon (from Bootstrap icons)
 * @param {SVGParameters} parameters - style parameters for the svg
 * @returns {SVGElement} an SVGElement
 */
export function createStatsSvg(parameters = SVGParameters.Default()) {
    return svgFromPath([
        "M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5z",
        "M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
    ], parameters, true, false)
}

