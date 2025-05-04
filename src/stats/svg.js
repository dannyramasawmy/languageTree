/**
 * Create an SVGElement of a delta icon
 * @returns {SVGElement} an SVGElement of a delta icon
 */
export function createDelatSvg() {
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("height", "1em");
    svgElement.setAttribute("stroke", "#e67e22");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.setAttribute("class", "bi bi-caret-up my-2");
    svgElement.setAttribute("viewBox", "0 0 16 16");

    let pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathElement.setAttribute("d", "M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659");

    svgElement.appendChild(pathElement);
    return svgElement;
}

/**
 * Create an SVGElement of a card icon
 * @returns {SVGElement} an SVGElement of a card icon
 */
export function createCardSvg() {
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("height", "1em");
    svgElement.setAttribute("stroke", "#e67e22");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.setAttribute("class", "bi bi-card-text my-2");
    svgElement.setAttribute("viewBox", "0 0 16 16");

    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z");

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5");

    svgElement.appendChild(path1);
    svgElement.appendChild(path2);

    return svgElement;
}

/**
 * Create an SVGElement of a link icon
 * @returns {SVGElement} an SVGElement of a link icon
 */
export function createLinkSvg() {
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("height", "1em");
    svgElement.setAttribute("stroke", "#e67e22");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.setAttribute("class", "bi bi-card-text my-2");
    svgElement.setAttribute("viewBox", "0 0 16 16");

    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z");

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z");

    svgElement.appendChild(path1);
    svgElement.appendChild(path2);

    return svgElement;
}

/**
 * Create an SVGElement of an eye icon
 * @returns {SVGElement} an SVGElement of an eye icon
 */
export function createEyeSvg() {
    let svgEyeFill = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEyeFill.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgEyeFill.setAttribute("height", "1em");
    svgEyeFill.setAttribute("fill", "#e67e22");
    svgEyeFill.setAttribute("class", "bi bi-eye-fill my-2");
    svgEyeFill.setAttribute("viewBox", "0 0 16 16");

    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0");

    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7");

    svgEyeFill.appendChild(path1);
    svgEyeFill.appendChild(path2);

    return svgEyeFill;
}

