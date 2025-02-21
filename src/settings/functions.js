import { SettingsID } from "../identifiers.js"
import { Settings } from "./settings.js"

export function saveBooleanSetting(key)
{
  let currentState = document.getElementById(key).checked;
  window.localStorage.setItem(key, currentState);
  return currentState
}

export function getBooleanSetting(key, defaultValue)
{
  return window.localStorage.getItem(key) === null
    ? defaultValue
    : window.localStorage.getItem(key) == "true";
}

export function updateSettingsState()  {
    return new Settings(
        saveBooleanSetting(SettingsID.COLOR_THEME),
        saveBooleanSetting(SettingsID.HOVER_COLOR),
        saveBooleanSetting(SettingsID.COMPACT_CARDS),
        saveBooleanSetting(SettingsID.ANIMATIONS),
        saveBooleanSetting(SettingsID.SMOOTH_SCROLLING),
        saveBooleanSetting(SettingsID.BUTTON_LABELS)
    )
}