/**
 * Create the Main DataCard
 * @param {HTMLElement} title - the title of the data card
 * @param {HTMLElement} subtitle - the subitle of the data card
 * @param {HTMLElement} data - the data of the data card
 * @returns {HTMLDivElement} - The Div element for the main data card
 */
export function createParentCard(title, subtitle, data) {
    let card = document.createElement("div");
    card.className = "col-12 gap-2 pb-0";

    let innerCard = document.createElement("div");
    innerCard.className = "card mb-3 p-md-4 glass";

    let cardTitle = document.createElement("h1");
    cardTitle.className = "card-title fw-bold";
    cardTitle.appendChild(title);

    let cardSubtitle = document.createElement("h2");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.appendChild(subtitle);

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.appendChild(data);

    card.appendChild(innerCard);
    innerCard.appendChild(cardTitle);
    innerCard.appendChild(cardSubtitle);
    innerCard.appendChild(cardBody);
    cardBody.appendChild(cardText);

    return card;
}

/**
 * Create a child DataCard
 * @param {boolean} isCompactView - whether to show a compress view (that only shows the primary key title)
 * @param {HTMLElement} title - the title of the data card
 * @param {HTMLElement} subtitle - the subitle of the data card
 * @param {string} id - the id of the card
 * @param {number} colorIndex - a hex colour
 * @returns {HTMLDivElement} - The Div element for a child data card
 */
export function createChildCard(isCompactView, title, subtitle, id, colorIndex) {
    let card = document.createElement("div");
    card.className = "col-12 col-lg-3 col-md-4 gap-2";
    card.id = id;

    let innerCard = document.createElement("div");
    innerCard.className = `data-card card text-bg-auto p-3 p-md-4 rainbow-hover-${colorIndex} gls`;

    let cardTitle = document.createElement("h4");
    cardTitle.className = "card-title display-card-main-title fw-semibold";
    cardTitle.appendChild(title);

    card.appendChild(innerCard);
    innerCard.appendChild(cardTitle);

    if (!isCompactView) {
        let cardSubtitle = document.createElement("h5");
        cardSubtitle.className = "card-subtitle display-card-subtitle";
        cardSubtitle.appendChild(subtitle);
        innerCard.appendChild(cardSubtitle);
    }

    return card;
}

/**
 * Wrap title with an svg prefix
 * @param {HTMLElement} title - the card title as an html element
 * @param {SVGElement} svgElement 
 * @returns {HTMLElement}
 */
export function prefixWithSVG(title, svgElement) {
    let d = document.createElement('div')
    d.appendChild(svgElement)
    d.className = "d-inline-flex justify-content-center"
    title.className = "px-2 my-1"
    d.appendChild(title)
    return d
}

/**
 * Create a stat view pill-view
 * @param {string} id - The target Element ID 
 * @param {string | number} stat - The statistic to show
 * @param {SVGElement} svgElement - The icon as an svg
 * @param {string} description - Hover information about the statistic
 * @returns {HTMLDivElement} - The Div element for the stat pill-view
 */
export function createNodeStats(id, stat, svgElement, description) {
    let pill = document.createElement("div");
    pill.className = "col-3 gap-1 pb-0";

    let pillBody = document.createElement("div");
    pillBody.className = "card text-bg mb-3 pt-0 pb-0 rounded-pill";
    pillBody.setAttribute("data-bs-toggle", "tooltip");
    pillBody.setAttribute("data-bs-placement", "top");
    pillBody.setAttribute("title", description);

    let pillContent = document.createElement("div");
    pillContent.className = "d-inline-flex justify-content-center"

    let statView = document.createElement("p");
    statView.className = "px-1 my-1"
    statView.id = id
    statView.innerText = `${stat}`

    pillContent.appendChild(svgElement)
    pillContent.appendChild(statView)
    pillBody.appendChild(pillContent)
    pill.appendChild(pillBody)

    return pill
}

/**
 * Creates a separator between cards
 * @param {string} label - label for the separator
 * @returns {HTMLElement} - Separator element
 */
export function createCardSeparator(label) {
    let container = document.createElement("div");
    container.className = "d-flex align-items-center";

    let hr1 = document.createElement("hr");
    hr1.className = "flex-grow-1";

    let span = document.createElement("span");
    span.className = "px-3 text-muted";
    span.textContent = label;

    let hr2 = document.createElement("hr");
    hr2.className = "flex-grow-1";

    container.appendChild(hr1);
    container.appendChild(span);
    container.appendChild(hr2);

    return container;
}