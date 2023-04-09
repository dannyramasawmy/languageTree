// =============================================================================
//  DISPLAY FUNCTIONS
// =============================================================================

class View {
    constructor(mainCardId, dataCardsId, buttonPanelId, isDarkTheme) {
        // TODO: add error checks

        this.mainCardId = mainCardId;
        this.dataCardsId = dataCardsId;
        this.buttonPanelId = buttonPanelId;

        if (isDarkTheme)
            this.SetDarkTheme();
        else
            this.SetLightTheme();
    }

    SetLightTheme() { document.getElementById("html").setAttribute("data-bs-theme", "light") }
    SetDarkTheme() { document.getElementById("html").setAttribute("data-bs-theme", "dark") }

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
            GLOBAL.PrimaryLanguageFirst
                ? Components.CreateParentCard(currentNode.English, currentNode.Romanian, currentNode.Data)
                : Components.CreateParentCard(currentNode.Romanian, currentNode.English, currentNode.Data));


        let colorIndex = "";
        let colorWheel = new RainbowColorWheel();

        // child cards
        for (var idx = 0; idx < displayList.length; idx++) {
            let cardId = `card-number-${idx}`;

            if (SETTINGS.HasRainbowHover)
                colorIndex = colorWheel.GetNextColorIndex();

            let dataCard = GLOBAL.PrimaryLanguageFirst
                ? Components.CreateChildCard(displayList[idx].English, displayList[idx].Romanian, cardId, colorIndex)
                : Components.CreateChildCard(displayList[idx].Romanian, displayList[idx].English, cardId, colorIndex);

            dataCard.style.visibility = "hidden";
            document.getElementById(this.dataCardsId).appendChild(dataCard);

            // make sliding in animation
            let settingAnimation = SETTINGS.ShowAnimations ? 1 : 0;
            let animationTime = 1 * settingAnimation * idx / displayList.length;
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
            button.addEventListener("click", () => {
                document.getElementById("SearchBar").focus();
                // document.getElementById("SearchBar");
                // console.log("Set focus")
            });
        }

        let buttonIcon = document.createElement("img");
        buttonIcon.className = "bi d-block mx-2 mb-1";
        buttonIcon.id = `${buttonId}-image`;
        buttonIcon.src = iconPath;
        buttonIcon.alt = description;
        buttonIcon.width = "40";
        buttonIcon.height = "40";

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

    static CreateChildCard(title, subtitle, id, colorIndex) {
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

        if (!SETTINGS.IsCompactView) {
            let cardSubtitle = document.createElement("h5");
            cardSubtitle.className = "card-subtitle subtle";
            cardSubtitle.innerHTML = subtitle;
            innerCard.appendChild(cardSubtitle);
        }

        return card;
    }

    static HorizontalRule() {
        return document.createElement("hr");
    }

    static CreateSettingsSubtitle(title) {
        let settingsTitle = document.createElement("h4");
        settingsTitle.className = "modal-subtitle";
        settingsTitle.innerHTML = title;
        return settingsTitle;
    }

    static CreateBooleanSetting(switchId, description, isChecked) {
        let booleanSwitch = document.createElement("div");
        booleanSwitch.className = "form-check";

        let switchInput = document.createElement("input");
        switchInput.id = switchId;
        switchInput.className = "form-check-input";
        switchInput.type = "checkbox";
        switchInput.role = "switch";
        switchInput.checked = isChecked;

        let switchLabel = document.createElement("label");
        switchLabel.className = "form-check-label";
        switchLabel.setAttribute("for", switchId);
        switchLabel.innerHTML = description;

        booleanSwitch.appendChild(switchInput);
        booleanSwitch.appendChild(switchLabel);

        return booleanSwitch;
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