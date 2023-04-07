// =============================================================================
// Global variables
// =============================================================================
// import * as view from './src/view.js';

// consts in screaming snake case
// gobal vars with G_ prefix
// normal variables with camelCase

const ROOT_NODE = romanian;
const MAIN_CARD_ID = "main-card";
const DATA_CARDS_ID = "data-cards";

const DATA_NAME = "current-node-data";
const SCROLL = new ScrollHandler();
const BUTTONS = "buttons";

// icon paths
const ROOT_ICON = "img/root-icon.png";
const PARENT_ICON = "img/parent-icon.png";
const LEAF_ICON = "img/leaf-icon.png";
const SETTINGS_ICON = "img/settings-icon.png";
const SEARCH_NOT_ACTIVE_ICON = "img/search-icon-1.png";
const SEARCH_ACTIVE_ICON = "img/search-icon-2.png";
const PRIMARY_LANGUAGE_ICON = "img/swap-language-icon-1.png";
const SECONDARY_LANGUAGE_ICON = "img/swap-language-icon-2.png";

var G_displayLanguageIsEnglish = true;
var G_randomSelectionIcons = 0;
var G_searchModeIsActive = false;
var G_settingsModeIsActive = false;

var G_settings_showAnimation = window.localStorage.getItem(`G_settings_showAnimation`) ?? 1;
var G_isRainbowColor = window.localStorage.getItem(`G_settings_colorScheme`) ?? 1;
var G_settings_colorScheme = G_isRainbowColor == 1 ? new RainbowColorWheel() : new BoringColorWheel();

console.log(G_isRainbowColor)
console.log(G_settings_colorScheme)
// =============================================================================
// Initialise
// =============================================================================

var G_currentNode = ROOT_NODE;
var G_displayList = GetDisplayNodes(G_currentNode);

View.ClearComponents(MAIN_CARD_ID);
View.ClearComponents(DATA_CARDS_ID);
View.ClearComponents(BUTTONS);
View.UpdateButtons(BUTTONS, [
  Components.CreateButton("shuffle-button", "Shuffle", "img/shuffle-icon-1.png"),
  Components.CreateButton("sort-button", "Sort", "img/sort-icon.png"),
  Components.CreateSearchButton("search-button", "Search", "img/search-icon-2.png"),
  Components.CreateButton("swap-button", "Swap", "img/swap-language-icon-1.png"),
  Components.CreateButton("travel-button", "Travel", "img/parent-icon.png"),
]);
View.UpdateCards(MAIN_CARD_ID, DATA_CARDS_ID, G_currentNode, G_displayList, 0);

var G_searchable = new SearchableDictionary();
GetSearchableWords(romanian, G_searchable);

document.getElementById("SearchBar").placeholder =
  `Search (${G_searchable.GetDataCards("").length})`;

// =============================================================================
// Events
// =============================================================================

// search focus
document.getElementById("search-button").addEventListener("click", () => {
  document.getElementById("SearchBar").focus();
  document.getElementById("SearchBar");
  console.log("Set focus")
});

// add history
function pushState(node) {
  history.pushState(node.English.toLowerCase(), null, `?${node.English}`);
}

// set next history state
window.addEventListener('popstate',
  function (event) {

    G_currentNode = event.state == null
      ? ROOT_NODE
      : G_searchable.GetDataCardFromState(event.state);

    SwapImageOnButton("random-card", GetPreviousShuffleIconPath())

    View.ClearComponents(DATA_CARDS_ID);
    G_displayList = GetDisplayNodes(G_currentNode);
    View.UpdateCards(DATA_CARDS_ID, MAIN_CARD_ID, DATA_NAME, G_currentNode, G_displayList, 0)
  });

// clicking
window.addEventListener('click',
  function (event) {

    var clickId = event.composedPath()[0].id;

    for (var idx = 0; idx < event.composedPath().length; idx++) {

      // do nothing for search
      if (event.composedPath()[idx].id == "search-bar")
        return;

      // shuffle current node
      if (event.composedPath()[idx].id == "random-card") {
        // state
        G_currentNode = RandomElementInArray(G_searchable.GetDataCards(""));
        pushState(G_currentNode);
        G_displayList = GetDisplayNodes(G_currentNode);

        // display
        SwapImageOnButton("random-card", GetNextShuffleIconPath())
        ResetSearch();
        View.ClearComponents(DATA_CARDS_ID)
        View.UpdateCards(MAIN_CARD_ID, DATA_CARDS_ID, G_currentNode, G_displayList, 0)
        return;
      }

      // sort cards
      if (event.composedPath()[idx].id == "sort-cards") {
        let nodeToShow = G_searchModeIsActive ? searchPlaceholder : G_currentNode;

        // display
        G_displayList = SortDisplayList(G_displayList);
        View.ClearComponents(DATA_CARDS_ID);
        View.ClearComponents(MAIN_CARD_ID);
        View.UpdateCards(MAIN_CARD_ID, DATA_CARDS_ID, nodeToShow, G_displayList, 0)
        return;
      }

      // // search for card
      // if (event.composedPath()[idx].id == "search-button") {
      //   // HideSettings();

      //   if (G_searchModeIsActive) {
      //     ResetSearch();
      //     HideSearchButtons();
      //     // SwapImageOnButton("search-button", SEARCH_NOT_ACTIVE_ICON);
      //   }
      //   else {
      //     ShowSearchButtons();
      //     // SwapImageOnButton("search-button", SEARCH_ACTIVE_ICON);
      //   }

      //   return;
      // }

      // swap language shown
      if (event.composedPath()[idx].id == "swap-button") {
        // state
        G_displayLanguageIsEnglish = G_displayLanguageIsEnglish ? false : true;

        // display
        // let iconToShow = G_displayLanguageIsEnglish ? PRIMARY_LANGUAGE_ICON : SECONDARY_LANGUAGE_ICON;
        let heightToSet = SCROLL.GetCurrentHeight();

        let nodeToShow = G_currentNode;
        if (G_searchModeIsActive) {
          nodeToShow = searchPlaceholder;
          G_displayList = G_searchable.GetDataCards(document.getElementById("filter").value);
        }

        // SwapImageOnButton("swap-language", iconToShow);
        View.ClearComponents(MAIN_CARD_ID);
        View.ClearComponents(DATA_CARDS_ID);
        View.UpdateCards(MAIN_CARD_ID, DATA_CARDS_ID, nodeToShow, G_displayList, heightToSet);
        return;
      }

      // go to parent
      if (event.composedPath()[idx].id == "parent-card") {
        let previousNode = G_currentNode;
        let currentSettingsMode = G_settingsModeIsActive;

        G_currentNode = G_currentNode.Parent;
        G_displayList = GetDisplayNodes(G_currentNode);
        pushState(G_currentNode)

        // display
        var heightToSet = SCROLL.GetPreviousHeight();
        ResetSearch();
        View.ClearComponents(DATA_CARDS_ID)
        G_displayList = SortDisplayList(G_displayList);
        View.UpdateCards(elementName, MAIN_CARD_ID, G_currentNode, G_displayList, heightToSet)

        if (previousNode == G_currentNode
          && G_currentNode == ROOT_NODE
          && !G_searchModeIsActive) {
          if (currentSettingsMode)
            HideSettings();
          else
            ShowSettings();
        }

        return;
      }
    }

    // when clicking on a card
    if (G_displayList[clickId] !== undefined) {

      // don't allow clicking on a card if in settings
      if (G_settingsModeIsActive)
        return;

      // state
      G_currentNode = G_displayList[clickId];
      G_displayList = GetDisplayNodes(G_currentNode);
      pushState(G_currentNode)
      SCROLL.AddHistory();

      // display
      ResetSearch();
      View.ClearComponents(DATA_CARDS_ID)
      G_displayList = SortDisplayList(G_displayList);
      View.UpdateCards(DATA_CARDS_ID, MAIN_CARD_ID, G_currentNode, G_displayList, 0)
    }
  })


function keyboardInput() {
  let searchString = document.getElementById("SearchBar").value;
  G_displayList = G_searchable.GetDataCards(searchString);

  console.log("Searching keyboard input");
  console.log(searchString);

  View.ClearComponents(DATA_CARDS_ID);
  View.ClearComponents(MAIN_CARD_ID);


  View.UpdateCards(MAIN_CARD_ID, DATA_CARDS_ID, searchPlaceholder, G_displayList, 0);
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
const addBtn = document.querySelector('.add-button');
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
