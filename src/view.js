// =============================================================================
//  DISPLAY FUNCTIONS
// =============================================================================

class View {
    constructor(mainCardId, dataCardsId, buttonPanelId) {
        // TODO: add error checks

        this.mainCardId = mainCardId;
        this.dataCardsId = dataCardsId;
        this.buttonPanelId = buttonPanelId;
    }

    ClearCards() {
        View.ClearComponents(this.mainCardId);
        View.ClearComponents(this.dataCardsId);
    }

    ClearButtons() {
        View.ClearComponents(this.buttonPanelId);
    }

    UpdateCards(currentNode, displayList, yScrollHeight) {

        // main card
        document.getElementById(this.mainCardId).appendChild(
            G_displayLanguageIsEnglish
                ? Components.CreateParentCard(currentNode.English, currentNode.Romanian, currentNode.Data)
                : Components.CreateParentCard(currentNode.Romanian, currentNode.English, currentNode.Data));


        // child cards
        for (var idx = 0; idx < displayList.length; idx++) {
            let cardId = `card-number-${idx}`;

            let dataCard = G_displayLanguageIsEnglish
                ? Components.CreateChildCard(displayList[idx].English, displayList[idx].Romanian, cardId)
                : Components.CreateChildCard(displayList[idx].Romanian, displayList[idx].English, cardId);

            dataCard.style.visibility = "hidden";
            document.getElementById(this.dataCardsId).appendChild(dataCard);

            // make sliding in animation
            let animationTime = 1 * G_settings_showAnimation * idx / displayList.length;
            dataCard.style.animation = `${animationTime}s slide-in`;
            dataCard.style.visibility = "visible";
        }

        window.scrollTo(0, yScrollHeight);
    }

    UpdateButtons(buttons) {
        if (!Array.isArray(buttons)) {
            console.error("Buttons to show are invalid");
            return;
        }

        let buttonPanel = document.getElementById(this.buttonPanelId);
        for (var idx = 0; idx < buttons.length; idx++) {
            buttonPanel.appendChild(buttons[idx]);
        }
    }

    static ClearComponents(elementId) {
        var displayDiv = document.getElementById(elementId);
        for (var idx = displayDiv.children.length; idx > 0; idx--)
            displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}

// =============================================================================
//  COMPONENT CREATION
// =============================================================================

class Components {
    static CreateButton(buttonId, buttonName, iconPath, description, isSearch) {
        let button = document.createElement("li");

        let buttonLink = document.createElement("a");
        buttonLink.className = "nav-link text-secondary px-2";
        buttonLink.id = buttonId;
        if (isSearch) {
            buttonLink.setAttribute("data-bs-toggle", "modal");
            buttonLink.setAttribute("data-bs-target", "#searchModal");
        }

        let buttonIcon = document.createElement("img");
        buttonIcon.className = "bi d-block mx-2 mb-1";
        buttonIcon.src = iconPath;
        buttonIcon.alt = description;
        buttonIcon.width = "30";
        buttonIcon.height = "30";

        let buttonLabel = document.createElement("h6")
        buttonLabel.className = "subtle";
        buttonLabel.innerHTML = buttonName;

        button.appendChild(buttonLink);
        buttonLink.appendChild(buttonIcon);
        buttonLink.appendChild(buttonLabel);

        return button;
    }

    static CreateParentCard(title, subtitle, data) {
        let card = document.createElement("div");
        card.className = "col-12 gap-2";

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

    static CreateChildCard(title, subtitle, id) {
        let card = document.createElement("div");
        card.className = "col-12 col-lg-3 col-md-4 gap-2";
        card.id = id;

        let innerCard = document.createElement("div");
        innerCard.className = "data-card card text-bg-dark p-3 p-md-4";

        let cardTitle = document.createElement("h4");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = title;

        let cardSubtitle = document.createElement("h5");
        cardSubtitle.className = "card-subtitle subtle";
        cardSubtitle.innerHTML = subtitle;

        card.appendChild(innerCard);
        innerCard.appendChild(cardTitle);
        innerCard.appendChild(cardSubtitle);

        return card;
    }
}

class Button {
    constructor(buttonId, buttonName, iconStates, description, isSearch) {
        this.buttonId = buttonId;
        this.buttonName = buttonName;
        this.description = description;
        this.isSearch = isSearch;

        this.iconStates = iconStates; // array
        this.state = 0;
        this.numberOfStates = iconStates.length;
    }

    Current() {
        return Components.CreateButton(this.buttonId, this.buttonName, this.iconStates[this.state], this.description, this.isSearch);
    }

    Next() {
        this.state = (this.state + 1) % this.numberOfStates;
        return this.Current();
    }

    Previous() {
        this.state = this.state == 0
            ? this.numberOfStates - 1
            : (this.state - 1) % this.numberOfStates;

        return this.Current();
    }

    Select(value) {
        if (value >= 0 && value < this.numberOfStates)
            this.state = value;

        return this.Current();
    }
}