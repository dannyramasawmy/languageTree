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