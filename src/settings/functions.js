import { SettingsID } from "../identifiers.js"
import { saveBooleanSettingToLocal } from "../state/localStorage.js";
import { Settings } from "./settings.js"

export function updateSettingsState()  {
    return new Settings(
        saveBooleanSettingToLocal(SettingsID.COLOR_THEME),
        saveBooleanSettingToLocal(SettingsID.HOVER_COLOR),
        saveBooleanSettingToLocal(SettingsID.COMPACT_CARDS),
        saveBooleanSettingToLocal(SettingsID.ANIMATIONS),
        saveBooleanSettingToLocal(SettingsID.SMOOTH_SCROLLING),
        saveBooleanSettingToLocal(SettingsID.BUTTON_LABELS)
    )
}