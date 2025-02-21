import { getBooleanSetting, saveBooleanSetting } from "./functions.js"
import { SettingsID } from "../identifiers.js"
import { createSettingsPanel } from "./view.js";

export class Settings {
    constructor ({isDarkTheme,
        hasRainbowHover,
        isCompactView,
        showAnimations,
        hasSmoothScrolling,
        showButtonLabels}) {

        this.IsDarkTheme = getBooleanSetting(SettingsID.COLOR_THEME, isDarkTheme);
        this.HasRainbowHover = getBooleanSetting(SettingsID.HOVER_COLOR, hasRainbowHover);
        this.IsCompactView = getBooleanSetting(SettingsID.COMPACT_CARDS, isCompactView);
        this.ShowAnimations = getBooleanSetting(SettingsID.ANIMATIONS, showAnimations);
        this.HasSmoothScrolling = getBooleanSetting(SettingsID.SMOOTH_SCROLLING, hasSmoothScrolling);
        this.ShowButtonLabels = getBooleanSetting(SettingsID.BUTTON_LABELS, showButtonLabels);    


        createSettingsPanel(this)
    }

    static default = () =>
        new Settings({
            isDarkTheme : true, 
            hasRainbowHover : false, 
            isCompactView : false, 
            showAnimations : true, 
            hasSmoothScrolling : true, 
            showButtonLabels : true
        })

    update = () => {
        this.IsDarkTheme = saveBooleanSetting(SettingsID.COLOR_THEME),
        this.HasRainbowHover = saveBooleanSetting(SettingsID.HOVER_COLOR),
        this.IsCompactView = saveBooleanSetting(SettingsID.COMPACT_CARDS),
        this.ShowAnimations = saveBooleanSetting(SettingsID.ANIMATIONS),
        this.HasSmoothScrolling = saveBooleanSetting(SettingsID.SMOOTH_SCROLLING),
        this.ShowButtonLabels = saveBooleanSetting(SettingsID.BUTTON_LABELS)
    }
}