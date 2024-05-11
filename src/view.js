import { RainbowColorWheel } from "./colors/rainbowColorWheel.js";
import { createParentCard, createChildCard } from "./tree/view.js";

export class View
{
    constructor(mainCardId, dataCardsId, buttonPanelId, isDarkTheme)
    {
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

    ClearCards()
    {
        View.ClearComponents(this.mainCardId);
        View.ClearComponents(this.dataCardsId);
        return this;
    }

    ClearButton(index)
    {
        var displayDiv = document.getElementById(this.buttonPanelId);
        displayDiv.removeChild(displayDiv.children[index]);
        return this;
    }

    SetButton(index, button)
    {
        var displayDiv = document.getElementById(this.buttonPanelId);
        displayDiv.insertBefore(button, displayDiv.children[index]);
        return this;
    }

    ClearButtons()
    {
        View.ClearComponents(this.buttonPanelId);
        return this;
    }

    UpdateCards(GLOBAL, SETTINGS, currentNode, displayList, yScrollHeight)
    {

        // main card
        document.getElementById(this.mainCardId).appendChild(
            GLOBAL.PrimaryLanguageFirst
                ? createParentCard(currentNode.Primary, currentNode.Secondary, currentNode.Data)
                : createParentCard(currentNode.Secondary, currentNode.Primary, currentNode.Data));


        let colorIndex = "";
        let colorWheel = RainbowColorWheel();

        // child cards
        for (var idx = 0; idx < displayList.length; idx++)
        {
            let cardId = `card-number-${idx}`;

            if (SETTINGS.HasRainbowHover)
                colorIndex = colorWheel.GetNextColorIndex();

            let dataCard = GLOBAL.PrimaryLanguageFirst
                ? createChildCard(SETTINGS.IsCompactView, displayList[idx].Primary, displayList[idx].Secondary, cardId, colorIndex)
                : createChildCard(SETTINGS.IsCompactView, displayList[idx].Secondary, displayList[idx].Primary, cardId, colorIndex);

            dataCard.style.visibility = "hidden";
            document.getElementById(this.dataCardsId).appendChild(dataCard);

            // make sliding in animation
            let settingAnimation = SETTINGS.ShowAnimations ? 1 : 0;
            let animationTime = 1 * settingAnimation * idx / displayList.length;
            dataCard.style.animation = `${animationTime}s slide-in`;
            dataCard.style.visibility = "visible";
        }

        window.scrollTo(0, yScrollHeight);
        return this;
    }

    UpdateButtons(buttons)
    {
        if (!Array.isArray(buttons))
        {
            console.error("Buttons to show are invalid");
            return this;
        }

        let buttonPanel = document.getElementById(this.buttonPanelId);
        for (var idx = 0; idx < buttons.length; idx++)
        {
            buttonPanel.appendChild(buttons[idx]);
        }
        return this;
    }

    static ClearComponents(elementId)
    {
        var displayDiv = document.getElementById(elementId);
        for (var idx = displayDiv.children.length; idx > 0; idx--)
            displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}
