// =============================================================================
// Global variables
// =============================================================================

// consts in screaming snake case
// gobal vars with G_ prefix
// normal variables with camelCase

const ROOT_NODE = romanian;
const ELEMENT_NAME = "node-display";
const HEADER_NAME = "current-node";
const DATA_NAME = "current-node-data";
const COLOR_WHEEL = new ColorWheel();
const SCROLL = new ScrollHandler();

// icon paths
const ROOT_ICON = "img/root-icon.png";
const PARENT_ICON = "img/parent-icon.png";
const LEAF_ICON = "img/leaf-icon.png";
const SEARCH_NOT_ACTIVE_ICON = "img/search-icon-1.png";
const SEARCH_ACTIVE_ICON = "img/search-icon-2.png";
const PRIMARY_LANGUAGE_ICON = "img/swap-language-icon-1.png";
const SECONDARY_LANGUAGE_ICON = "img/swap-language-icon-2.png";

var G_displayLanguageIsEnglish = true;
var G_randomSelectionIcons = 0;
var G_searchModeIsActive = false;

var G_settings_showAnimation = window.localStorage.getItem(`G_settings_showAnimation`) ?? 0;

// =============================================================================
// Initialise
// =============================================================================

var G_currentNode = ROOT_NODE;
var G_displayList = GetDisplayNodes(G_currentNode);

ClearNodeDisplay(ELEMENT_NAME)
PopulateNodeDisplay(ELEMENT_NAME, HEADER_NAME, DATA_NAME, G_currentNode, G_displayList, 0)

var G_searchable = new SearchableDictionary();
GetSearchableWords(romanian, G_searchable);

document.getElementById("filter").placeholder =
  `Search (${G_searchable.GetDataCards("").length})`;

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

    G_currentNode = event.state == null
      ? ROOT_NODE
      : G_searchable.GetDataCardFromState(event.state);

    SwapImageOnButton("random-card", GetPreviousShuffleIconPath())

    ClearNodeDisplay(ELEMENT_NAME);
    G_displayList = GetDisplayNodes(G_currentNode);
    PopulateNodeDisplay(ELEMENT_NAME, HEADER_NAME, DATA_NAME, G_currentNode, G_displayList, 0)
  });

// clicking
window.addEventListener('click',
  function (event) {

    var clickId = event.composedPath()[0].id;
    var elementName = "node-display";

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
        ClearNodeDisplay(elementName)
        PopulateNodeDisplay(elementName, HEADER_NAME, DATA_NAME, G_currentNode, G_displayList, 0)
        return;
      }

      // sort cards
      if (event.composedPath()[idx].id == "sort-cards") {
        let nodeToShow = G_searchModeIsActive ? searchPlaceholder : G_currentNode;

        // display
        G_displayList = SortDisplayList(G_displayList);
        ClearNodeDisplay(elementName)
        PopulateNodeDisplay(elementName, HEADER_NAME, DATA_NAME, nodeToShow, G_displayList, 0, true)
        return;
      }

      // search for card
      if (event.composedPath()[idx].id == "search-button") {
        if (G_searchModeIsActive) {
          ResetSearch();
          HideSearchButtons();
          SwapImageOnButton("search-button", SEARCH_NOT_ACTIVE_ICON);
        }
        else {
          ShowSearchButtons();
          SwapImageOnButton("search-button", SEARCH_ACTIVE_ICON);
        }

        return;
      }

      // swap language shown
      if (event.composedPath()[idx].id == "swap-language") {
        // state
        G_displayLanguageIsEnglish = G_displayLanguageIsEnglish ? false : true;
        
        // display
        let iconToShow = G_displayLanguageIsEnglish ? PRIMARY_LANGUAGE_ICON : SECONDARY_LANGUAGE_ICON;
        let heightToSet = SCROLL.GetCurrentHeight();
        
        let nodeToShow = G_currentNode;
        if (G_searchModeIsActive)
        {
          nodeToShow = searchPlaceholder ;
          G_displayList = G_searchable.GetDataCards(document.getElementById("filter").value);
        }
        
        SwapImageOnButton("swap-language", iconToShow);
        ClearNodeDisplay(elementName);
        PopulateNodeDisplay(elementName, HEADER_NAME, DATA_NAME, nodeToShow, G_displayList, heightToSet);
        return;
      }

      // go to parent
      if (event.composedPath()[idx].id == "parent-card") {
        G_currentNode = G_currentNode.Parent;
        G_displayList = GetDisplayNodes(G_currentNode);
        pushState(G_currentNode)

        // display
        var heightToSet = SCROLL.GetPreviousHeight();
        ResetSearch();
        ClearNodeDisplay(elementName)
        G_displayList = SortDisplayList(G_displayList);
        PopulateNodeDisplay(elementName, HEADER_NAME, DATA_NAME, G_currentNode, G_displayList, heightToSet)
        return;
      }
    }

    // when clicking on a card
    if (G_displayList[clickId] !== undefined) {
      // state
      G_currentNode = G_displayList[clickId];
      G_displayList = GetDisplayNodes(G_currentNode);
      pushState(G_currentNode)
      SCROLL.AddHistory();

      // display
      ResetSearch();
      ClearNodeDisplay(elementName)
      G_displayList = SortDisplayList(G_displayList);
      PopulateNodeDisplay(elementName, HEADER_NAME, DATA_NAME, G_currentNode, G_displayList, 0)
    }
  })


function keyboardInput() {
  G_displayList = G_searchable.GetDataCards(document.getElementById("filter").value);
  ClearNodeDisplay(ELEMENT_NAME);
  PopulateNodeDisplay(ELEMENT_NAME, HEADER_NAME, DATA_NAME, searchPlaceholder, G_displayList, 0);
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
