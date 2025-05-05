/**
 * The Element ID on the main html-body 
 * @readonly
 * @enum {string}
 */
export const ElementID = {
    SEARCH_BAR_ID: "SearchBar",
    MAIN_CARD_ID: "main-card",
    DATA_CARDS_ID: "data-cards",
    BUTTON_PANEL_ID: "buttons-panel"
};

/**
 * Element ID's for the navigation bar
 * @readonly
 * @enum {string}
 */
export const NavbarId = {
    BRAND_BUTTON: "navbar-brand-button",
    HOME_BRAND_BUTTON: "navbar-active-home-button"
}

/**
 * Element ID's for the settings panel
 * @readonly
 * @enum {string}
 */
export const SettingsID = {
    PANEL_ID: "settings-panel",
    COLOR_THEME: "color-theme",
    HOVER_COLOR: "hover-color-theme",
    COMPACT_CARDS: "compact-data-cards",
    SEPARATE_CARDS: "separate-data-card",
    ANIMATIONS: "animations-switch",
    SMOOTH_SCROLLING: "animations-smooth-scrolling",
    BUTTON_LABELS: "button-labels",
    UPDATE_SETTINGS: "update-settings-button"
    };

/**
 * Element ID's for the buttons panel
 * @readonly
 * @enum {string}
 */
export const ButtonsID = {
    SHUFFLE: "shuffle-button",
    SORT: "sort-button",
    SEARCH: "search-button",
    SWAP: "swap-button",
    TRAVEL: "travel-button"
}

/**
 * SVG paths for the button icons
 * @readonly
 * @enum {string[]}
 */
export const ButtonIcons = {
    SHUFFLE: [
        "img/shuffle-icon-1.svg", 
        "img/shuffle-icon-2.svg", 
        "img/shuffle-icon-3.svg", 
        "img/shuffle-icon-4.svg",
        "img/shuffle-icon-5.svg", 
        "img/shuffle-icon-6.svg", 
        "img/shuffle-icon-7.svg", 
        "img/shuffle-icon-8.svg"
    ],
    SORT: [
        "img/sort-icon.svg"
    ],
    SEARCH: [
        "img/search-icon.svg"
    ],
    SWAP: [
        "img/swap-language-icon-1.svg", 
        "img/swap-language-icon-2.svg"
    ],
    TRAVEL: [
        "img/root-icon.svg", 
        "img/parent-icon.svg", 
        "img/leaf-icon.svg"]
}
    
/**
 * Element ID's for the statistics views
 * @readonly
 * @enum {string}
 */
export const NodeStatsID = {
    CONTAINER : "node-stat",
    NUMBER_OF_PARENTS: "number-of-parents",
    NUMBER_OF_CHILDREN: "number-of-children",
    NUMBER_OF_RELATIONS: "number-of-relations",
    NUMBER_OF_VIEWS: "number-of-views",
}
