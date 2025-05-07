import { stringToHTMLElement } from "../utils/string.js";
import { ElementID } from "../identifiers.js";
import { SearchFilter } from "./models.js";

/**
 * Reset the search bar
 * @param {number} numberOfCards - the number of available cards
 */
export function resetSearchBar(numberOfCards) {
  let searchBar = document.getElementById(ElementID.SEARCH_BAR_ID);
  if (searchBar instanceof HTMLInputElement) {
    searchBar.value = "";
    searchBar.placeholder = `Search (${numberOfCards})`;
  }
}

/**
 * Show custom search filters
 * @param {SearchFilter[]} searchFilters - a collection of search filters
 */
export function showCustomSearchConfigurations(searchFilters) {
  let sdel = document.getElementById(ElementID.SEARCH_CUSTOM_DESCRIPTION_ID)
  for (const sf of searchFilters) {
    let ashtml = stringToHTMLElement(`
        <p>
          <span class="DocSearch-Button-Keys">
            <kbd class="DocSearch-Button-Key">${sf.key}</kbd>
          </span>: ${sf.description}
        </p>
      `
    )
    sdel.appendChild(ashtml)
  }
}

/**
 * Update the live search display
 * @param {number | string} numberOrString
 */
export function displayNumberOfSearchMatches(numberOrString) {
  document.getElementById(ElementID.SEARCH_LIVE_ID).innerHTML =
    `<p>Matching results: ${numberOrString}</p>`;
}
