/**
 * Save a boolean to local storage
 * @param {string} key - the key to save to local storage
 * @returns {boolean} - the value saved to local storage
 */
export function saveBooleanSettingToLocal(key) 
{
  let element = document.getElementById(key)
  
  if (element instanceof HTMLInputElement && element.type === "checkbox")
    return saveBooleanToLocal(key, element.checked)
    
  throw new Error(`Supplied element: ${element} must be a HTMLInputElement with a checkbox`)
}

/**
 * Save a boolean to local storage
 * @param {string} key - the key to save to local storage
 * @param {boolean} state - the state to save
 * @returns {boolean} - the value saved to local storage
 */
export function saveBooleanToLocal(key, state) 
{
  window.localStorage.setItem(key, `${state}`);
  return state;
}

/**
 * Retrieve a boolean to local storage
 * @param {string} key - the key to find in local storage
 * @param {boolean} defaultValue - the default value to return
 * @returns {boolean} - the value in local storage or default value
 */
export function getBooleanFromLocal(key, defaultValue) 
{
  return window.localStorage.getItem(key) === null
    ? defaultValue
    : window.localStorage.getItem(key) == "true";
}

/**
 * Save an integer from local storage
 * @param {string} key - the key to save to local storage
 * @param {any} state - the state (that should be an integer) to save
 * @returns {number} - the value saved to local storage
 */
export function saveIntToLocal(key, state) 
{
    let asInt = parseInt(state)
    window.localStorage.setItem(key, `${asInt}`);
    return asInt
}

/**
 * Retrieve an integer from local storage
 * @param {string} key - the key to find in local storage
 * @param {number} defaultValue - the default value to return
 * @returns {number} - the value in local storage or default value
 */
export function getIntFromLocal(key, defaultValue) 
{
    let item = window.localStorage.getItem(key)
    return item === null 
      ? defaultValue
      : parseInt(item)
}
  
/**
 * Resets the local storage and returns settings to the default
 */
export function resetSettingsAndClearData()
{
    window.localStorage.clear()
}