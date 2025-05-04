import { RainbowColorWheel } from "./colors/rainbowColorWheel.js";
import {
    createParentCard,
    createChildCard,
    prefixWithSVG
} from "./tree/view.js";
import { createParentStat, createNumberOfChildrenStat, createNumberOfRelaionsStat, createNumberOfViewsStat } from "./stats/view.js";
import { ButtonsID, ElementID, NodeStatsID } from "./identifiers.js";
import { Settings } from "./settings/settings.js";
import { GlobalState } from "./state/models.js";
import { createDelatSvg, createLinkSvg } from "./stats/svg.js";

export class View {
    /**
     * A class for controlling the view / display
     * @param {ElementID} mainCardId - The Element ID on the main html-body for the main card (currently selected node)
     * @param {ElementID} dataCardsId - The Element ID on the main html-body for the data cards
     * @param {ButtonsID} buttonPanelId - The Element ID's for the buttons panel
     * @param {Settings} settings - A Global Settings object
     * @param {GlobalState} global - A GlobalState object
     */
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

    /**
     * Set the colour scheme to light mode
     */
    SetLightTheme() { document.getElementById("html").setAttribute("data-bs-theme", "light") }

    /**
     * Set the colour scheme to dark mode
     */
    SetDarkTheme() { document.getElementById("html").setAttribute("data-bs-theme", "dark") }

    /**
     * Clear the visibile cards
     * @returns {View} - the View Object
     */
    ClearCards() {
        View.ClearComponents(this.mainCardId);
        View.ClearComponents(this.dataCardsId);
        View.ClearComponents(NodeStatsID.CONTAINER);
        return this;
    }

    /**
     * Clear the button at the given index
     * @param {number} index - index of the button
     * @returns {View} - the View Object
     */
    ClearButton(index) {
        var displayDiv = document.getElementById(this.buttonPanelId);
        displayDiv.removeChild(displayDiv.children[index]);
        return this;
    }

    /**
     * Set the button at the given index
     * @param {number} index - index of the button
     * @param {HTMLElement} buttonHTML - HTML for the button
     * @returns {View} - the View Object
     */
    SetButton(index, buttonHTML) {
        var displayDiv = document.getElementById(this.buttonPanelId);
        displayDiv.insertBefore(buttonHTML, displayDiv.children[index]);
        return this;
    }

    /**
     * Clear all the buttons
     * @returns {View} - the View Object
     */
    ClearButtons() {
        View.ClearComponents(this.buttonPanelId);
        return this;
    }

    /**
     * Update all the cards
     * @param {number} yScrollHeight - the scroll height to set the display
     * @returns {View} - the View Object
     */
    UpdateCards(yScrollHeight) {

        // main card
        let currentNode = this.GLOBAL.CurrentNode;
        let displayList = this.GLOBAL.DisplayCards;
        let relations = this.GLOBAL.CurrentNode.Relations;
        let parents = this.GLOBAL.CurrentNode.Parent;

        document.getElementById(this.mainCardId).appendChild(
            this.GLOBAL.PrimaryKeyFirst
                ? createParentCard(currentNode.PrimaryView(), currentNode.SecondaryView(), currentNode.DataView())
                : createParentCard(currentNode.SecondaryView(), currentNode.PrimaryView(), currentNode.DataView()));

        this.GLOBAL.CurrentNode.IncrementView()
        let nodeStats = document.getElementById(NodeStatsID.CONTAINER)
        nodeStats.appendChild(createParentStat(this.GLOBAL.CurrentNode.Parent.length))
        nodeStats.appendChild(createNumberOfRelaionsStat(relations.length))
        nodeStats.appendChild(createNumberOfChildrenStat(this.GLOBAL.DisplayCards.length))
        nodeStats.appendChild(createNumberOfViewsStat(this.GLOBAL.CurrentNode.Views))

        let colorIndex = 0;
        let colorWheel = RainbowColorWheel();

        // parent cards
        let start_idx = currentNode.IsRoot ? 1 : 0
        for (var idx = start_idx; idx < parents.length; idx++) {
            let cardId = `parent-card-number-${idx}`;

            if (this.SETTINGS.HasRainbowHover)
                colorIndex = colorWheel.GetNextColorIndex();

            let title = this.GLOBAL.PrimaryKeyFirst
                ? parents[idx].PrimaryView()
                : parents[idx].SecondaryView()

            let dataCard = createChildCard(
                true,
                prefixWithSVG(title, createDelatSvg()),
                document.createElement("h5"),
                cardId,
                colorIndex);

            document.getElementById(this.dataCardsId).appendChild(dataCard);
        }

        // relation cards
        for (var idx = 0; idx < relations.length; idx++) {
            let cardId = `relation-card-number-${idx}`;

            if (this.SETTINGS.HasRainbowHover)
                colorIndex = colorWheel.GetNextColorIndex();

            let title = this.GLOBAL.PrimaryKeyFirst
                ? relations[idx].PrimaryView()
                : relations[idx].SecondaryView()

            let dataCard = createChildCard(
                true,
                prefixWithSVG(title, createLinkSvg()),
                document.createElement("h5"),
                cardId,
                colorIndex);

            document.getElementById(this.dataCardsId).appendChild(dataCard);
        }

        // child cards
        for (var idx = 0; idx < displayList.length; idx++) {
            let cardId = `card-number-${idx}`;

            if (this.SETTINGS.HasRainbowHover)
                colorIndex = colorWheel.GetNextColorIndex();

            let dataCard = this.GLOBAL.PrimaryKeyFirst
                ? createChildCard(
                    this.SETTINGS.IsCompactView,
                    displayList[idx].PrimaryView(),
                    displayList[idx].SecondaryView(),
                    cardId,
                    colorIndex)
                : createChildCard(
                    this.SETTINGS.IsCompactView,
                    displayList[idx].SecondaryView(),
                    displayList[idx].PrimaryView(),
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

    /**
     * Update the buttons panel
     * @param {HTMLElement[]} buttons - buttons to populate button panel
     * @returns {View} - the View Object
     */
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

    /**
     * Clear all the child components on an HTML element referenced by the given id
     * @param {string} elementId - element id
     */
    static ClearComponents(elementId) {
        var displayDiv = document.getElementById(elementId);
        for (var idx = displayDiv.children.length; idx > 0; idx--)
            displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}

