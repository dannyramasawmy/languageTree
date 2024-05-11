import { SettingsID } from "../identifiers.js"

function horizontalRule()
{
    return document.createElement("hr");
}

function settingSubtitle(title)
{
    let settingsTitle = document.createElement("h4");
    settingsTitle.className = "modal-subtitle";
    settingsTitle.innerHTML = title;
    return settingsTitle;
}

function booleanSetting(switchId, description, isChecked)
{
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

export function createSettingsPanel(settings) {
    var settingsPanel = document.getElementById(SettingsID.PANEL_ID);
    settingsPanel.appendChild(settingSubtitle("Theme"));
    settingsPanel.appendChild(booleanSetting(SettingsID.COLOR_THEME, "Enable dark mode", settings.IsDarkTheme));
    settingsPanel.appendChild(booleanSetting(SettingsID.HOVER_COLOR, "Use rainbow hover colours", settings.HasRainbowHover));
    settingsPanel.appendChild(horizontalRule());

    settingsPanel.appendChild(settingSubtitle("Data cards"));
    settingsPanel.appendChild(booleanSetting(SettingsID.COMPACT_CARDS, "Show data cards with a compact view", settings.IsCompactView));
    settingsPanel.appendChild(booleanSetting(SettingsID.ANIMATIONS, "Show animations", settings.ShowAnimations));
    settingsPanel.appendChild(horizontalRule());

    settingsPanel.appendChild(settingSubtitle("Navigation"));
    settingsPanel.appendChild(booleanSetting(SettingsID.BUTTON_LABELS, "Show button labels", settings.ShowButtonLabels));
    settingsPanel.appendChild(horizontalRule());
}