import { getBooleanFromLocal } from "../state/localStorage.js";
import { saveBooleanSettingToLocal } from "../state/localStorage.js";
import { SettingsID } from "../identifiers.js"
import { createSettingsPanel } from "./view.js";

export class Settings {
    constructor ({isDarkTheme,
        hasRainbowHover,
        isCompactView,
        showAnimations,
        hasSmoothScrolling,
        showButtonLabels}) {

        this.IsDarkTheme = getBooleanFromLocal(SettingsID.COLOR_THEME, isDarkTheme);
        this.HasRainbowHover = getBooleanFromLocal(SettingsID.HOVER_COLOR, hasRainbowHover);
        this.IsCompactView = getBooleanFromLocal(SettingsID.COMPACT_CARDS, isCompactView);
        this.ShowAnimations = getBooleanFromLocal(SettingsID.ANIMATIONS, showAnimations);
        this.HasSmoothScrolling = getBooleanFromLocal(SettingsID.SMOOTH_SCROLLING, hasSmoothScrolling);
        this.ShowButtonLabels = getBooleanFromLocal(SettingsID.BUTTON_LABELS, showButtonLabels);    


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
        this.IsDarkTheme = saveBooleanSettingToLocal(SettingsID.COLOR_THEME),
        this.HasRainbowHover = saveBooleanSettingToLocal(SettingsID.HOVER_COLOR),
        this.IsCompactView = saveBooleanSettingToLocal(SettingsID.COMPACT_CARDS),
        this.ShowAnimations = saveBooleanSettingToLocal(SettingsID.ANIMATIONS),
        this.HasSmoothScrolling = saveBooleanSettingToLocal(SettingsID.SMOOTH_SCROLLING),
        this.ShowButtonLabels = saveBooleanSettingToLocal(SettingsID.BUTTON_LABELS)
    }
}