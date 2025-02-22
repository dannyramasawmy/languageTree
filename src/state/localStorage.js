export function saveBooleanToLocal(key, state) 
{
  let currentState = document.getElementById(key).checked;
  window.localStorage.setItem(key, state);
  return currentState;
}

export function saveBooleanSettingToLocal(key) 
{
  let currentState = document.getElementById(key).checked;
  return saveBooleanToLocal(key, currentState)
}

export function getBooleanFromLocal(key, defaultValue) 
{
  return window.localStorage.getItem(key) === null
    ? defaultValue
    : window.localStorage.getItem(key) == "true";
}

export function saveIntToLocal(key, state) 
{
    let asInt = parseInt(state)
    window.localStorage.setItem(key, asInt);
    return asInt
}

export function getIntFromLocal(key, defaultValue) 
{
    let item = window.localStorage.getItem(key)
    if (item === null)
        item = defaultValue
    return parseInt(item)
}
  
export function resetSettingsAndClearData()
{
    window.localStorage.clear()
}