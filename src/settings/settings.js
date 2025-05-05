import { getBooleanFromLocal } from "../state/localStorage.js";
import { saveBooleanSettingToLocal } from "../state/localStorage.js";
import { SettingsID } from "../identifiers.js"
import { createSettingsPanel } from "./view.js";

/**
 * @typedef {Object} UserSettings - The user settings
 * @property {boolean} isDarkTheme - Whether to use the dark scheme or the light
 * @property {boolean} hasRainbowHover - Whether to use a default colour or rainbow colour options
 * @property {boolean} isCompactView - Whether to show cards with a compact view
 * @property {boolean} doSeparateCards - Whether to separate cards by relationships
 * @property {boolean} showAnimations - Whether to show annimations
 * @property {boolean} hasSmoothScrolling - Whether to use smooth scrolling or disable it
 * @property {boolean} showButtonLabels - Whether to show the button labels or not
 */

/**
 * A Global Settings object
 */
export class Settings {
    /**
     * A class to control the state of the user settings
     * @param {UserSettings} UserOptions - The user settings
     */
    constructor({
        isDarkTheme,
        hasRainbowHover,
        isCompactView,
        doSeparateCards,
        showAnimations,
        hasSmoothScrolling,
        showButtonLabels }) {

        this.IsDarkTheme = getBooleanFromLocal(SettingsID.COLOR_THEME, isDarkTheme);
        this.HasRainbowHover = getBooleanFromLocal(SettingsID.HOVER_COLOR, hasRainbowHover);
        this.IsCompactView = getBooleanFromLocal(SettingsID.COMPACT_CARDS, isCompactView);
        this.DoSeparateCards = getBooleanFromLocal(SettingsID.SEPARATE_CARDS, doSeparateCards);
        this.ShowAnimations = getBooleanFromLocal(SettingsID.ANIMATIONS, showAnimations);
        this.HasSmoothScrolling = getBooleanFromLocal(SettingsID.SMOOTH_SCROLLING, hasSmoothScrolling);
        this.ShowButtonLabels = getBooleanFromLocal(SettingsID.BUTTON_LABELS, showButtonLabels);

        createSettingsPanel(this)
    }

    /**
     * The default app settings
     * @returns {Settings} - A settings object
     */
    static default = () =>
        new Settings({
            isDarkTheme: true,
            hasRainbowHover: false,
            isCompactView: false,
            doSeparateCards: true,
            showAnimations: true,
            hasSmoothScrolling: true,
            showButtonLabels: true
        })

    /**
     * Update the user settings
     */
    update = () => {
        this.IsDarkTheme = saveBooleanSettingToLocal(SettingsID.COLOR_THEME),
            this.HasRainbowHover = saveBooleanSettingToLocal(SettingsID.HOVER_COLOR),
            this.IsCompactView = saveBooleanSettingToLocal(SettingsID.COMPACT_CARDS),
            this.DoSeparateCards = saveBooleanSettingToLocal(SettingsID.SEPARATE_CARDS),
            this.ShowAnimations = saveBooleanSettingToLocal(SettingsID.ANIMATIONS),
            this.HasSmoothScrolling = saveBooleanSettingToLocal(SettingsID.SMOOTH_SCROLLING),
            this.ShowButtonLabels = saveBooleanSettingToLocal(SettingsID.BUTTON_LABELS)
    }
}