import { ButtonIcons, ButtonsID } from "../identifiers.js";
import { Settings } from "../settings/settings.js";
import { buttonView } from "./view.js";

/**
 * A Button object
 */
export class Button {
    /**
     * Create an instance of a Button object
     * @param {Settings} SETTINGS - the global settings
     * @param {ButtonsID} buttonId - the Element ID for the button
     * @param {string} buttonName - the name of the button
     * @param {ButtonIcons} iconStates - the states the button can occupy
     * @param {string} description - a description of the button
     */
    constructor(SETTINGS, buttonId, buttonName, iconStates, description) {
        this.SETTINGS = SETTINGS;
        this.buttonId = buttonId;
        this.buttonName = buttonName;
        this.description = description;

        this.iconStates = iconStates; // array
        this.state = 0;
        this.numberOfStates = iconStates.length;
        this.isSearchButton = false
    }

    /**
     * Indicate the current button brings up the search modal pop-up
     * @returns {Button} - returns the current object
     */
    IsSearchButton() {
        this.isSearchButton = true
        return this
    }

    /**
     * Gets the HTML of the current button state
     * @returns {HTMLElement} - HTML describing the button
     */
    Current() {
        return buttonView(
            this.buttonId,
            this.buttonName,
            this.iconStates[this.state],
            this.description,
            this.isSearchButton,
            this.SETTINGS.ShowButtonLabels);
    }

    /**
     * Get the next button state
     * @returns {HTMLElement} - HTML describing the button
     */
    Next() {
        this.state = (this.state + 1) % this.numberOfStates;
        return this.Current();
    }

    /**
     * Get the next previous state
     * @returns {HTMLElement} - HTML describing the button
     */
    Previous() {
        this.state = this.state == 0
            ? this.numberOfStates - 1
            : (this.state - 1) % this.numberOfStates;

        return this.Current();
    }

    /**
     * Get the a specific button state
     * @returns {HTMLElement} - HTML describing the button
     */
    Select(value) {
        if (value >= 0 && value < this.numberOfStates)
            this.state = value;

        return this.Current();
    }
}