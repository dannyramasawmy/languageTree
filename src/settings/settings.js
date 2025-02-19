import { getBooleanSetting, saveBooleanSetting } from "./functions.js"
import { SettingsID } from "../identifiers.js"
import { createSettingsPanel } from "./view.js";

export class Settings {
    constructor (isDarkTheme,
        hasRainbowHover,
        isCompactView,
        showAnimations,
        showButtonLabels) {

        this.IsDarkTheme = getBooleanSetting(SettingsID.COLOR_THEME, isDarkTheme);
        this.HasRainbowHover = getBooleanSetting(SettingsID.HOVER_COLOR, hasRainbowHover);
        this.IsCompactView = getBooleanSetting(SettingsID.COMPACT_CARDS, isCompactView);
        this.ShowAnimations = getBooleanSetting(SettingsID.ANIMATIONS, showAnimations);
        this.ShowButtonLabels = getBooleanSetting(SettingsID.BUTTON_LABELS, showButtonLabels);    


        createSettingsPanel(this)
    }

    static default = () =>
        new Settings(true, false, false, true, true)

    update = () => {
        this.IsDarkTheme = saveBooleanSetting(SettingsID.COLOR_THEME),
        this.HasRainbowHover = saveBooleanSetting(SettingsID.HOVER_COLOR),
        this.IsCompactView = saveBooleanSetting(SettingsID.COMPACT_CARDS),
        this.ShowAnimations = saveBooleanSetting(SettingsID.ANIMATIONS),
        this.ShowButtonLabels = saveBooleanSetting(SettingsID.BUTTON_LABELS)
    }
}