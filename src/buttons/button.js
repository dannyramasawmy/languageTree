import { buttonView } from "./view.js";

export class Button {
    constructor(SETTINGS, buttonId, buttonName, iconStates, description) {
        this.SETTINGS = SETTINGS;
        this.buttonId = buttonId;
        this.buttonName = buttonName;
        this.description = description;

        this.iconStates = iconStates; // array
        this.state = 0;
        this.numberOfStates = iconStates.length;
    }

    Current() {
        return buttonView(
            this.buttonId,
            this.buttonName,
            this.iconStates[this.state],
            this.description,
            false,
            this.SETTINGS.ShowButtonLabels);
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

export class SearchButton {
    constructor(SETTINGS, buttonId, buttonName, iconStates, description) {
        this.SETTINGS = SETTINGS;
        this.buttonId = buttonId;
        this.buttonName = buttonName;
        this.description = description;

        this.iconStates = iconStates; // array
        this.state = 0;
        this.numberOfStates = iconStates.length;
    }

    Current() {
        return buttonView(
            this.buttonId,
            this.buttonName,
            this.iconStates[this.state],
            this.description,
            true,
            this.SETTINGS.ShowButtonLabels);
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

