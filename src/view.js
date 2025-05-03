import { RainbowColorWheel } from "./colors/rainbowColorWheel.js";
import {
    createParentCard,
    createChildCard} from "./tree/view.js";
import { createGenerationStat, createNumberOfChildrenStat, createNumberOfViewsStat } from "./stats/view.js";
import { NodeStatsID } from "./identifiers.js";
import { formatNumber } from "./utils/string.js";

export class View {
    constructor(mainCardId, dataCardsId, buttonPanelId, settings, global) {
        // TODO: add error checks

        this.mainCardId = mainCardId;
        this.dataCardsId = dataCardsId;
        this.buttonPanelId = buttonPanelId;
        this.SETTINGS = settings;
        this.GLOBAL = global;

        if (this.SETTINGS.IsDarkTheme)
            this.SetDarkTheme();
        else
            this.SetLightTheme();
    }

    SetLightTheme() { document.getElementById("html").setAttribute("data-bs-theme", "light") }
    SetDarkTheme() { document.getElementById("html").setAttribute("data-bs-theme", "dark") }

    ClearCards() {
        View.ClearComponents(this.mainCardId);
        View.ClearComponents(this.dataCardsId);
        View.ClearComponents(NodeStatsID.CONTAINER);
        return this;
    }

    ClearButton(index) {
        var displayDiv = document.getElementById(this.buttonPanelId);
        displayDiv.removeChild(displayDiv.children[index]);
        return this;
    }

    SetButton(index, button) {
        var displayDiv = document.getElementById(this.buttonPanelId);
        displayDiv.insertBefore(button, displayDiv.children[index]);
        return this;
    }

    ClearButtons() {
        View.ClearComponents(this.buttonPanelId);
        return this;
    }

    UpdateCards(yScrollHeight) {

        // main card
        let currentNode = this.GLOBAL.CurrentNode;
        let displayList = this.GLOBAL.DisplayCards;

        document.getElementById(this.mainCardId).appendChild(
            this.GLOBAL.PrimaryLanguageFirst
                ? createParentCard(currentNode.Primary, currentNode.Secondary, currentNode.DataView())
                : createParentCard(currentNode.Secondary, currentNode.Primary, currentNode.DataView()));

        // stats
        this.GLOBAL.CurrentNode.IncrementView()
        let nodeStats = document.getElementById(NodeStatsID.CONTAINER)
        nodeStats.appendChild(createGenerationStat(this.GLOBAL.CurrentNode.Generation))
        nodeStats.appendChild(createNumberOfChildrenStat(this.GLOBAL.DisplayCards.length))
        nodeStats.appendChild(createNumberOfViewsStat(formatNumber(this.GLOBAL.CurrentNode.Views)))

        let colorIndex = "";
        let colorWheel = RainbowColorWheel();

        // child cards
        for (var idx = 0; idx < displayList.length; idx++) {
            let cardId = `card-number-${idx}`;

            if (this.SETTINGS.HasRainbowHover)
                colorIndex = colorWheel.GetNextColorIndex();

            let dataCard = this.GLOBAL.PrimaryLanguageFirst
                ? createChildCard(
                    this.SETTINGS.IsCompactView,
                    displayList[idx].Primary,
                    displayList[idx].Secondary,
                    cardId,
                    colorIndex)
                : createChildCard(
                    this.SETTINGS.IsCompactView,
                    displayList[idx].Secondary,
                    displayList[idx].Primary,
                    cardId,
                    colorIndex);

            dataCard.style.visibility = "hidden";
            document.getElementById(this.dataCardsId).appendChild(dataCard);

            // make sliding in animation
            let settingAnimation = this.SETTINGS.ShowAnimations ? 1 : 0;
            let animationTime = 1 * settingAnimation * idx / displayList.length;
            dataCard.style.animation = `${animationTime}s slide-in`;
            dataCard.style.visibility = "visible";
        }

        window.scrollTo(
            {
                left: 0,
                top: yScrollHeight,
                behavior: this.SETTINGS.HasSmoothScrolling
                    ? "smooth"
                    : "instant"
            });
        return this;
    }

    UpdateButtons(buttons) {
        if (!Array.isArray(buttons)) {
            console.error("Buttons to show are invalid");
            return this;
        }

        let buttonPanel = document.getElementById(this.buttonPanelId);
        for (var idx = 0; idx < buttons.length; idx++) {
            buttonPanel.appendChild(buttons[idx]);
        }
        return this;
    }

    static ClearComponents(elementId) {
        var displayDiv = document.getElementById(elementId);
        for (var idx = displayDiv.children.length; idx > 0; idx--)
            displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}

