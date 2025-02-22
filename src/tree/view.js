import { NodeStatsID } from "../identifiers.js";

export function createParentCard(title, subtitle, data)
{
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

export function createChildCard(isCompactView, title, subtitle, id, colorIndex)
{
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

    if (!isCompactView)
    {
        let cardSubtitle = document.createElement("h5");
        cardSubtitle.className = "card-subtitle subtle";
        cardSubtitle.innerHTML = subtitle;
        innerCard.appendChild(cardSubtitle);
    }

    return card;
}

export function createNodeStats(id, stat, svgElement, description)
{
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
    statView.innerText = stat
    
    pillContent.appendChild(svgElement)
    pillContent.appendChild(statView)
    pillBody.appendChild(pillContent)
    pill.appendChild(pillBody)

    return pill
}

function createDelatSvg()
{
    let svgElement = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgElement.setAttribute("height", "1em");
    svgElement.setAttribute("stroke", "#e67e22");
    svgElement.setAttribute("fill", "currentColor");
    svgElement.setAttribute("class", "bi bi-caret-up my-2");
    svgElement.setAttribute("viewBox", "0 0 16 16");

    let pathElement = document.createElementNS("http://www.w3.org/2000/svg","path");
    pathElement.setAttribute("d", "M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659");

    svgElement.appendChild(pathElement);
    return svgElement
}

function createCardSvg()
{
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
    
    return svgElement       
}

function createEyeSvg()
{
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

    return svgEyeFill
}

export function createGenerationStat(generationNumber)
{
    const id = NodeStatsID.GENERATION
    const deltaSvg = createDelatSvg()
    const description = "The number of ancestors for this node."
    return createNodeStats(id, generationNumber, deltaSvg, description)
}

export function createNumberOfChildrenStat(numberOfChildren)
{
    const id = NodeStatsID.NUMBER_OF_CHILDREN
    const cardSvg = createCardSvg()
    const description = "The number of children for this node."
    return createNodeStats(id, numberOfChildren, cardSvg, description)
}

export function createNumberOfViewsStat(numberOfViews)
{
    const id = NodeStatsID.NUMBER_OF_VIEWS
    const eyeSvg = createEyeSvg()
    const description = "The number of views of this card."
    return createNodeStats(id, numberOfViews, eyeSvg, description)
}