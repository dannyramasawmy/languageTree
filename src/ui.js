// =============================================================================
// Global variables
// =============================================================================

// consts in screaming snake case
// gobal vars with G_ prefix
// normal variables with camelCase

const ROOT_NODE = romanian;

// HTML COMPONENT ID's
const MAIN_CARD_ID = "main-card";
const DATA_CARDS_ID = "data-cards";
const BUTTON_PANEL_ID = "buttons";

const SETTINGS = {
  "PrimaryLanguageFirst": true,
};

// var SETTINGS.PrimaryLanguageFirst = true;
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

const VIEW = new View(MAIN_CARD_ID, DATA_CARDS_ID, BUTTON_PANEL_ID);
const SCROLL = new ScrollHandler();

// define buttons
const B_SHUFFLE = new Button(
  "shuffle-button",
  "Shuffle",
  ["img/shuffle-icon-1.png", "img/shuffle-icon-2.png", "img/shuffle-icon-3.png", "img/shuffle-icon-4.png"],
  "shuffle-button",
  false);
const B_SORT = new Button("sort-button", "Sort", ["img/sort-icon.png"], "sort-button", false);
const B_SEARCH = new Button("search-button", "Search", ["img/search-icon-2.png", "img/search-icon-1.png"], "search-button", true);
const B_SWAP = new Button("swap-button", "Swap", ["img/swap-language-icon-1.png", "img/swap-language-icon-2.png"], "swap-button", false);
const B_TRAVEL = new Button("travel-button", "Travel", ["img/parent-icon.png"], "travel-button", false);

VIEW.ClearCards()
VIEW.UpdateCards(G_currentNode, G_displayList, 0);
VIEW.ClearButtons();
VIEW.UpdateButtons([B_SHUFFLE.Current(), B_SORT.Current(), B_SEARCH.Current(), B_SWAP.Current(), B_TRAVEL.Current()]);

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

    G_displayList = GetDisplayNodes(G_currentNode);
    VIEW.ClearCards()
    VIEW.UpdateCards(G_currentNode, G_displayList, 0);

    VIEW.ClearButtons();
    VIEW.UpdateButtons([B_SHUFFLE.Previous(), B_SORT.Current(), B_SEARCH.Current(), B_SWAP.Current(), B_TRAVEL.Current()]);
  });

// clicking
window.addEventListener('click',
  function (event) {

    var clickId = event.composedPath()[0].id;

    console.log(`click event '${event}'`);
    console.log(event.composedPath());

    for (var idx = 0; idx < event.composedPath().length; idx++) {

      let currentClickPathId = event.composedPath()[idx].id;

      // data card
      if (typeof currentClickPathId === 'string' && currentClickPathId.includes("card-number-")) {
        let idNumber = currentClickPathId.slice(12);
        console.log(currentClickPathId);

        // when clicking on a card
        if (G_displayList[idNumber] !== undefined) {

          console.log("Card clicked");

          // don't allow clicking on a card if in settings
          if (G_settingsModeIsActive)
            return;

          // state
          G_currentNode = G_displayList[idNumber];
          G_displayList = GetDisplayNodes(G_currentNode);
          pushState(G_currentNode)
          SCROLL.AddHistory();

          // display
          ResetSearch();
          G_displayList = SortDisplayList(G_displayList);

          VIEW.ClearCards()
          VIEW.UpdateCards(G_currentNode, G_displayList, 0)
        }

        return;
      }

      // do nothing for search
      if (event.composedPath()[idx].id == "search-bar")
        return;

      // shuffle current node
      if (event.composedPath()[idx].id == "shuffle-button") {
        // state
        G_currentNode = RandomElementInArray(G_searchable.GetDataCards(""));
        pushState(G_currentNode);
        G_displayList = GetDisplayNodes(G_currentNode);

        ResetSearch();
        VIEW.ClearCards()
        VIEW.UpdateCards(G_currentNode, G_displayList, 0)
        VIEW.ClearButtons();
        VIEW.UpdateButtons([B_SHUFFLE.Next(), B_SORT.Current(), B_SEARCH.Current(), B_SWAP.Current(), B_TRAVEL.Current()]);
        return;
      }

      // sort cards
      if (event.composedPath()[idx].id == "sort-button") {
        let nodeToShow = G_searchModeIsActive ? searchPlaceholder : G_currentNode;
        G_displayList = SortDisplayList(G_displayList);

        VIEW.ClearCards();
        VIEW.UpdateCards(nodeToShow, G_displayList, 0)
        return;
      }

      // swap language shown
      if (event.composedPath()[idx].id == "swap-button") {
        // state
        SETTINGS.PrimaryLanguageFirst = SETTINGS.PrimaryLanguageFirst ? false : true;

        let heightToSet = SCROLL.GetCurrentHeight();

        let nodeToShow = G_currentNode;
        if (G_searchModeIsActive) {
          nodeToShow = searchPlaceholder;
          G_displayList = G_searchable.GetDataCards(document.getElementById("filter").value);
        }

        VIEW.ClearCards();
        VIEW.UpdateCards(nodeToShow, G_displayList, heightToSet);
        VIEW.ClearButtons();
        VIEW.UpdateButtons([
          B_SHUFFLE.Current(),
          B_SORT.Current(),
          B_SEARCH.Current(),
          B_SWAP.Select(SETTINGS.PrimaryLanguageFirst ? 0 : 1),
          B_TRAVEL.Current()]);

        return;
      }

      // go to parent
      if (event.composedPath()[idx].id == "travel-button") {
        G_currentNode = G_currentNode.Parent;
        G_displayList = GetDisplayNodes(G_currentNode);
        pushState(G_currentNode)

        // display
        var heightToSet = SCROLL.GetPreviousHeight();
        ResetSearch();
        G_displayList = SortDisplayList(G_displayList);

        VIEW.ClearCards();
        VIEW.UpdateCards(G_currentNode, G_displayList, heightToSet)

        return;
      }
    }
  })


function keyboardInput() {
  let searchString = document.getElementById("SearchBar").value;
  G_displayList = G_searchable.GetDataCards(searchString);

  console.log("Searching keyboard input");
  console.log(searchString);

  VIEW.ClearCards();
  VIEW.UpdateCards(searchPlaceholder, G_displayList, 0);
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
