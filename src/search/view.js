import { ElementID } from "../elementID.js";

export function resetSearchBar(numberOfCards) {
    let searchBar = document.getElementById(ElementID.SEARCH_BAR_ID);
    searchBar.value = "";
    searchBar.placeholder = `Search (${numberOfCards})`;
}
