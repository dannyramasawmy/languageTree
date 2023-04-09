// =============================================================================
// Global variables
// =============================================================================

const DEBUG = false;

const ROOT_NODE = romanian;

// HTML COMPONENT ID's
const MAIN_CARD_ID = "main-card";
const DATA_CARDS_ID = "data-cards";
const BUTTON_PANEL_ID = "buttons-panel";
const SETTINGS_PANEL_ID = "settings-panel";

const GLOBAL = {
  "PrimaryLanguageFirst": true,
  "CurrentNode": ROOT_NODE,
  "DisplayCards": GetDisplayNodes(ROOT_NODE)
};

const SETTINGS_COLOR_THEME = "color-theme";
const SETTINGS_HOVER_COLOR = "hover-color-theme";
const SETTINGS_COMPACT_CARDS = "compact-data-cards";
const SETTINGS_ANIMATIONS = "animations-switch";


const SETTINGS = {
  "IsDarkTheme": getBooleanSetting(SETTINGS_COLOR_THEME, true),
  "HasRainbowHover": getBooleanSetting(SETTINGS_HOVER_COLOR, false),
  "IsCompactView": getBooleanSetting(SETTINGS_COMPACT_CARDS, false),
  "ShowAnimations": getBooleanSetting(SETTINGS_ANIMATIONS, true),
};

console.log(SETTINGS)
// =============================================================================
// Initialise
// =============================================================================

const VIEW = new View(MAIN_CARD_ID, DATA_CARDS_ID, BUTTON_PANEL_ID, SETTINGS.IsDarkTheme);
const SCROLL = new ScrollHandler();

// define buttons
const B_SHUFFLE = new Button(
  "shuffle-button",
  "Shuffle",
  ["img/shuffle-icon-1.svg", "img/shuffle-icon-2.svg", "img/shuffle-icon-3.svg", "img/shuffle-icon-4.svg",
    "img/shuffle-icon-5.svg", "img/shuffle-icon-6.svg", "img/shuffle-icon-7.svg", "img/shuffle-icon-8.svg"],
  "shuffle-button",
  false);
const B_SORT = new Button("sort-button", "Sort", ["img/sort-icon.svg"], "sort-button", false);
const B_SEARCH = new Button("search-button", "Search", ["img/search-icon.svg"], "search-button", true);
const B_SWAP = new Button("swap-button", "Swap", ["img/swap-language-icon-1.svg", "img/swap-language-icon-2.svg"], "swap-button", false);
const B_TRAVEL = new Button("travel-button", "Travel", ["img/root-icon.svg", "img/parent-icon.svg", "img/leaf-icon.svg"], "travel-button", false);

VIEW.ClearCards()
VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0);
VIEW.ClearButtons();
VIEW.UpdateButtons([
  B_SHUFFLE.Current(),
  B_SORT.Current(),
  B_SEARCH.Current(),
  B_SWAP.Current(),
  B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);

var G_searchable = new SearchableDictionary();
GetSearchableWords(ROOT_NODE, G_searchable);
ResetSearch();


// =============================================================================
// SETTINGS
// =============================================================================

settingsPanel = document.getElementById(SETTINGS_PANEL_ID);
settingsPanel.appendChild(Components.CreateSettingsSubtitle("Theme"));
settingsPanel.appendChild(Components.CreateBooleanSetting(SETTINGS_COLOR_THEME, "Enable dark mode", SETTINGS.IsDarkTheme));
settingsPanel.appendChild(Components.CreateBooleanSetting(SETTINGS_HOVER_COLOR, "Use rainbow hover colours", SETTINGS.HasRainbowHover));
settingsPanel.appendChild(Components.HorizontalRule());

settingsPanel.appendChild(Components.CreateSettingsSubtitle("Data cards"));
settingsPanel.appendChild(Components.CreateBooleanSetting(SETTINGS_COMPACT_CARDS, "Show data cards with a compact view", SETTINGS.IsCompactView));
settingsPanel.appendChild(Components.CreateBooleanSetting(SETTINGS_ANIMATIONS, "Show animations", SETTINGS.ShowAnimations));
settingsPanel.appendChild(Components.HorizontalRule());

function saveBooleanSetting(key) {
  let currentState = document.getElementById(key).checked;
  window.localStorage.setItem(key, currentState);
  return currentState
}

function getBooleanSetting(key, defaultValue) {
  return window.localStorage.getItem(key) === null
    ? defaultValue
    : window.localStorage.getItem(key) == "true";
}

function updateSettings() {
  SETTINGS.IsDarkTheme = saveBooleanSetting(SETTINGS_COLOR_THEME);
  SETTINGS.HasRainbowHover = saveBooleanSetting(SETTINGS_HOVER_COLOR);
  SETTINGS.IsCompactView = saveBooleanSetting(SETTINGS_COMPACT_CARDS);
  SETTINGS.ShowAnimations = saveBooleanSetting(SETTINGS_ANIMATIONS);

  _ = SETTINGS.IsDarkTheme ? VIEW.SetDarkTheme() : VIEW.SetLightTheme();
  VIEW.ClearCards()
  VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, SCROLL.GetCurrentHeight());
}

// =============================================================================
// Events
// =============================================================================

// add history
function pushState(node) {
  history.pushState(node.English.toLowerCase(), null, `?${node.English}`);
}

// set next history state
window.addEventListener('popstate',
  function (event) {
    if (DEBUG) {
      console.log("Popstate");
    }

    GLOBAL.CurrentNode = event.state == null
      ? ROOT_NODE
      : G_searchable.GetDataCardFromState(event.state);

    GLOBAL.DisplayCards = GetDisplayNodes(GLOBAL.CurrentNode);
    VIEW.ClearCards()
    VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0);

    VIEW.ClearButtons();
    VIEW.UpdateButtons([
      B_SHUFFLE.Previous(),
      B_SORT.Current(),
      B_SEARCH.Current(),
      B_SWAP.Current(),
      B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);
  });

window.onkeyup = function (e) {
  var pressed = "";
  if (e.ctrlKey && e.keyCode === 81) {
    console.log("Search shortcut");
    keyboardInput();
  }
}

// clicking
window.addEventListener('click',
  function (event) {
    if (DEBUG) {
      console.log(`click event '${event}'`);
      console.log(event.composedPath());
    }

    for (var idx = 0; idx < event.composedPath().length; idx++) {

      let currentClickPathId = event.composedPath()[idx].id;

      // data card
      if (typeof currentClickPathId === 'string' && currentClickPathId.includes("card-number-")) {
        let idNumber = currentClickPathId.slice(12);

        if (DEBUG) {
          console.log(currentClickPathId);
        }

        // when clicking on a card
        if (GLOBAL.DisplayCards[idNumber] !== undefined) {
          // state
          GLOBAL.CurrentNode = GLOBAL.DisplayCards[idNumber];
          GLOBAL.DisplayCards = GetDisplayNodes(GLOBAL.CurrentNode);
          pushState(GLOBAL.CurrentNode)
          SCROLL.AddHistory();

          // display
          ResetSearch();
          GLOBAL.DisplayCards = SortDisplayList(GLOBAL.DisplayCards);

          VIEW.ClearCards()
          VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
          VIEW.ClearButtons();
          VIEW.UpdateButtons([
            B_SHUFFLE.Current(),
            B_SORT.Current(),
            B_SEARCH.Current(),
            B_SWAP.Current(),
            B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);
        }

        return;
      }

      // shuffle current node
      if (event.composedPath()[idx].id == "shuffle-button") {
        GLOBAL.CurrentNode = RandomElementInArray(G_searchable.GetDataCards(""));
        pushState(GLOBAL.CurrentNode);
        GLOBAL.DisplayCards = GetDisplayNodes(GLOBAL.CurrentNode);

        ResetSearch();
        VIEW.ClearCards()
        VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
        VIEW.ClearButtons();
        VIEW.UpdateButtons([
          B_SHUFFLE.Next(),
          B_SORT.Current(),
          B_SEARCH.Current(),
          B_SWAP.Current(),
          B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);

        return;
      }

      // sort cards
      if (event.composedPath()[idx].id == "sort-button") {
        GLOBAL.DisplayCards = SortDisplayList(GLOBAL.DisplayCards);

        VIEW.ClearCards();
        VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0);
        VIEW.ClearButtons();
        VIEW.UpdateButtons([
          B_SHUFFLE.Current(),
          B_SORT.Current(),
          B_SEARCH.Current(),
          B_SWAP.Current(),
          B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);

        return;
      }

      // swap language shown
      if (event.composedPath()[idx].id == "swap-button") {
        // state
        GLOBAL.PrimaryLanguageFirst = GLOBAL.PrimaryLanguageFirst ? false : true;

        let currentHeight = SCROLL.GetCurrentHeight();
        VIEW.ClearCards();
        VIEW.UpdateCards(
          GLOBAL.CurrentNode,
          GLOBAL.DisplayCards,
          currentHeight);

        VIEW.ClearButtons();
        VIEW.UpdateButtons([
          B_SHUFFLE.Current(),
          B_SORT.Current(),
          B_SEARCH.Current(),
          B_SWAP.Select(GLOBAL.PrimaryLanguageFirst ? 0 : 1),
          B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);
        return;
      }

      // go to parent
      if (event.composedPath()[idx].id == "travel-button") {
        GLOBAL.CurrentNode = GLOBAL.CurrentNode.Parent;
        GLOBAL.DisplayCards = GetDisplayNodes(GLOBAL.CurrentNode);
        pushState(GLOBAL.CurrentNode)

        // display
        var heightToSet = SCROLL.GetPreviousHeight();
        ResetSearch();
        GLOBAL.DisplayCards = SortDisplayList(GLOBAL.DisplayCards);

        VIEW.ClearCards();
        VIEW.UpdateCards(GLOBAL.CurrentNode, GLOBAL.DisplayCards, heightToSet)
        VIEW.ClearButtons();
        VIEW.UpdateButtons([
          B_SHUFFLE.Current(),
          B_SORT.Current(),
          B_SEARCH.Current(),
          B_SWAP.Current(),
          B_TRAVEL.Select(TreeDepth(GLOBAL.CurrentNode))]);

        return;
      }
    }
  })


function keyboardInput() {
  let searchString = document.getElementById("SearchBar").value;
  GLOBAL.CurrentNode = ROOT_NODE;
  GLOBAL.DisplayCards = G_searchable.GetDataCards(searchString);

  console.log("Searching keyboard input");
  console.log(searchString);

  VIEW.ClearCards();
  VIEW.UpdateCards(searchPlaceholder, GLOBAL.DisplayCards, 0);
};

// =============================================================================
// Cache and service worker
// =============================================================================

// Register service worker to control making site work offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/languageTree/sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

// Code to handle install prompt on desktop
let deferredPrompt;
const addBtn = document.getElementById('install-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', () => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
  });
});
