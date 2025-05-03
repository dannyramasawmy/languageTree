/**
 * Create the Main DataCard
 * @param {string} title - the title of the data card
 * @param {string} subtitle - the subitle of the data card
 * @param {string} data - the data of the data card (in the form of a string that can be parsed as html)
 * @returns {HTMLDivElement} - The Div element for the main data card
 */
export function createParentCard(title, subtitle, data) {
    let card = document.createElement("div");
    card.className = "col-12 gap-2 pb-0";

    let innerCard = document.createElement("div");
    innerCard.className = "card text-bg-secondary mb-3 p-md-4";

    let cardTitle = document.createElement("h1");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = title;

    let cardSubtitle = document.createElement("h2");
    cardSubtitle.className = "card-subtitle";
    cardSubtitle.innerHTML = subtitle;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = data;

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
 * @param {string} title - the title of the data card
 * @param {string} subtitle - the subitle of the data card
 * @param {string} id - the id of the card
 * @param {number} colorIndex - a hex colour
 * @returns {HTMLDivElement} - The Div element for a child data card
 */
export function createChildCard(isCompactView, title, subtitle, id, colorIndex) {
    let card = document.createElement("div");
    card.className = "col-12 col-lg-3 col-md-4 gap-2";
    card.id = id;

    let innerCard = document.createElement("div");
    innerCard.className = `data-card card text-bg-auto p-3 p-md-4 rainbow-hover-${colorIndex}`;

    let cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = title;

    card.appendChild(innerCard);
    innerCard.appendChild(cardTitle);

    if (!isCompactView) {
        let cardSubtitle = document.createElement("h5");
        cardSubtitle.className = "card-subtitle subtle";
        cardSubtitle.innerHTML = subtitle;
        innerCard.appendChild(cardSubtitle);
    }

    return card;
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
    pill.className = "col-4 gap-2 pb-0";

    let pillBody = document.createElement("div");
    pillBody.className = "card text-bg mb-3 pt-0 pb-0 rounded-pill";
    pillBody.setAttribute("data-bs-toggle", "tooltip");
    pillBody.setAttribute("data-bs-placement", "top");
    pillBody.setAttribute("title", description);

    let pillContent = document.createElement("div");
    pillContent.className = "d-inline-flex justify-content-center"

    let statView = document.createElement("p");
    statView.className = "px-2 my-1"
    statView.id = id
    statView.innerText = `${stat}`

    pillContent.appendChild(svgElement)
    pillContent.appendChild(statView)
    pillBody.appendChild(pillContent)
    pill.appendChild(pillBody)

    return pill
}