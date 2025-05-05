import { SettingsID } from "../identifiers.js"
import { Settings } from "./settings.js";

/**
 * Create a horizontal rule element
 * @returns {HTMLElement} - A horizontal rule
 */
function horizontalRule() {
    return document.createElement("hr");
}

/**
 * Create a settings group
 * @param {string} title - the title for the group of settings
 * @returns {HTMLElement} - the title element
 */
function settingSubtitle(title) {
    let settingsTitle = document.createElement("h4");
    settingsTitle.className = "modal-subtitle";
    settingsTitle.innerHTML = title;
    return settingsTitle;
}

/**
 * Create a boolean setting element
 * @param {string} switchId - the element id for the boolean setting
 * @param {string} description - the description of the setting
 * @param {boolean} isChecked - whether the setting is checked or not
 * @returns {HTMLElement} - a boolean setting element
 */
function booleanSetting(switchId, description, isChecked) {
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

/**
 * Create the settings view
 * @param {Settings} settings - the settings to display
 */
export function createSettingsPanel(settings) {
    var settingsPanel = document.getElementById(SettingsID.PANEL_ID);
    settingsPanel.appendChild(settingSubtitle("Theme"));
    settingsPanel.appendChild(booleanSetting(SettingsID.COLOR_THEME, "Enable dark mode", settings.IsDarkTheme));
    settingsPanel.appendChild(booleanSetting(SettingsID.HOVER_COLOR, "Use rainbow hover colours", settings.HasRainbowHover));
    settingsPanel.appendChild(horizontalRule());

    settingsPanel.appendChild(settingSubtitle("Data cards"));
    settingsPanel.appendChild(booleanSetting(SettingsID.COMPACT_CARDS, "Show data cards with a compact view", settings.IsCompactView));
    settingsPanel.appendChild(booleanSetting(SettingsID.SEPARATE_CARDS, "Physicaly separate data cards by relationships", settings.DoSeparateCards));
    settingsPanel.appendChild(horizontalRule());

    settingsPanel.appendChild(settingSubtitle("Animations"));
    settingsPanel.appendChild(booleanSetting(SettingsID.ANIMATIONS, "Enable card fade in", settings.ShowAnimations));
    settingsPanel.appendChild(booleanSetting(SettingsID.SMOOTH_SCROLLING, "Enable smooth scrolling", settings.HasSmoothScrolling));
    settingsPanel.appendChild(horizontalRule());

    settingsPanel.appendChild(settingSubtitle("Navigation"));
    settingsPanel.appendChild(booleanSetting(SettingsID.BUTTON_LABELS, "Show button labels", settings.ShowButtonLabels));
    settingsPanel.appendChild(horizontalRule());
}