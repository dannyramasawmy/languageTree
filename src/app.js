import { View } from "./view.js";
import { Button, SearchButton } from "./buttons/button.js";
import { ElementID, SettingsID } from "./identifiers.js";
import * as search from "./search/index.js"
import * as tree from "./tree/index.js"
import { CONFIG } from "./configuration.js";
import { ScrollHandler } from "./history/scroll.js";
import { RandomElementInArray } from "./utils/random.js";
import { tryRegisterServiceWorker } from "./sw/register.js";
import { Settings } from "./settings/settings.js";

// =============================================================================
// Global variables
// =============================================================================

const DEBUG = true;

const ROOT_NODE = CONFIG.DATA_TREE;

// HTML COMPONENT ID's
const MAIN_CARD_ID = "main-card";
const DATA_CARDS_ID = "data-cards";
const BUTTON_PANEL_ID = "buttons-panel";

const GLOBAL = {
  "PrimaryLanguageFirst": true,
  "CurrentNode": ROOT_NODE,
  "DisplayCards": tree.functions.getChildren(ROOT_NODE)
};

const NAVAR_BRAND_BUTTON = "navbar-brand-button"
const NAVAR_HOME_BRAND_BUTTON = "navbar-active-home-button"

const SETTINGS = Settings.default()
console.log(SETTINGS)
// =============================================================================
// Initialise
// =============================================================================

const VIEW = new View(MAIN_CARD_ID, DATA_CARDS_ID, BUTTON_PANEL_ID, SETTINGS.IsDarkTheme);
const SCROLL = new ScrollHandler();

// define buttons
const B_SHUFFLE = new Button(SETTINGS,
  "shuffle-button",
  "Shuffle",
  ["img/shuffle-icon-1.svg", "img/shuffle-icon-2.svg", "img/shuffle-icon-3.svg", "img/shuffle-icon-4.svg",
    "img/shuffle-icon-5.svg", "img/shuffle-icon-6.svg", "img/shuffle-icon-7.svg", "img/shuffle-icon-8.svg"],
  "shuffle-button",
  false);
const B_SORT = new Button(SETTINGS, "sort-button", "Sort", ["../img/sort-icon.svg"], "sort-button");
const B_SEARCH = new SearchButton(SETTINGS, "search-button", "Search", ["img/search-icon.svg"], "search-button");
const B_SWAP = new Button(SETTINGS, "swap-button", "Swap", ["img/swap-language-icon-1.svg", "img/swap-language-icon-2.svg"], "swap-button");
const B_TRAVEL = new Button(SETTINGS, "travel-button", "Travel", ["img/root-icon.svg", "img/parent-icon.svg", "img/leaf-icon.svg"], "travel-button");

VIEW
  .ClearCards()
  .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
  .ClearButtons()
  .UpdateButtons([
    B_SHUFFLE.Current(),
    B_SORT.Current(),
    B_SEARCH.Current(),
    B_SWAP.Current(),
    B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))
  ]);

const G_searchable = search.functions.buildDataCardMappingRecursive(
  ROOT_NODE, 
  new search.models.DataCardMapping(),
  CONFIG.PRIMARY_STRING_CLEAN_FUNCTION, 
  CONFIG.SECONDARY_STRING_CLEAN_FUNCTION);

let resetSearch = () => 
  search.view.resetSearchBar(search.functions.getNumberOfCards(G_searchable));

resetSearch()

const sortDisplayList = (GLOBAL, displayCards) => 
  tree.functions.sortDataCardArray(
    GLOBAL.PrimaryLanguageFirst, 
    displayCards, 
    CONFIG.PRIMARY_SORT_FUNCTION, 
    CONFIG.SECONDARY_SORT_FUNCTION)  

// =============================================================================
// SETTINGS
// =============================================================================

function updateSettings()
{
  SETTINGS.update()

  SETTINGS.IsDarkTheme ? VIEW.SetDarkTheme() : VIEW.SetLightTheme();
  VIEW
    .ClearCards()
    .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, SCROLL.GetCurrentHeight())
    .ClearButtons()
    .UpdateButtons([
      B_SHUFFLE.Current(),
      B_SORT.Current(),
      B_SEARCH.Current(),
      B_SWAP.Current(),
      B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);
}
document.getElementById(SettingsID.UPDATE_SETTINGS).addEventListener("click", updateSettings)

// =============================================================================
// Events
// =============================================================================

// add history
function pushState(node)
{
  history.pushState(node.Primary.toLowerCase(), null, `?${node.Primary}`);
}

// set next history state
window.addEventListener('popstate',
  function (event)
  {
    if (DEBUG)
    {
      console.log("Popstate");
    }

    GLOBAL.CurrentNode = event.state == null
      ? ROOT_NODE
      : search.functions.getDataCardFromState(G_searchable, event.state);

    GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
    VIEW
      .ClearCards()
      .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
      .ClearButtons()
      .UpdateButtons([
        B_SHUFFLE.Previous(),
        B_SORT.Current(),
        B_SEARCH.Current(),
        B_SWAP.Current(),
        B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);
  });

window.onkeyup = function (e)
{
  if (e.ctrlKey && e.keyCode === 81)
  {
    console.log("Search shortcut");

    let myModal = new bootstrap.Modal(document.getElementById('searchModal'), {});
    myModal.show();
    document.getElementById(ElementID.SEARCH_BAR_ID).focus();
  }
}

// clicking
window.addEventListener('click',
  function (event)
  {
    if (DEBUG)
    {
      console.log(`click event '${event}'`);
      console.log(event.composedPath());
    }

    for (var idx = 0; idx < event.composedPath().length; idx++)
    {

      let currentClickPathId = event.composedPath()[idx].id;

      // data card
      if (typeof currentClickPathId === 'string' && currentClickPathId.includes("card-number-"))
      {
        let idNumber = currentClickPathId.slice(12);

        if (DEBUG)
        {
          console.log(currentClickPathId);
        }

        // when clicking on a card
        if (GLOBAL.DisplayCards[idNumber] !== undefined)
        {
          // state
          GLOBAL.CurrentNode = GLOBAL.DisplayCards[idNumber];
          GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
          pushState(GLOBAL.CurrentNode)
          SCROLL.AddHistory();

          // display
          resetSearch();
          GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

          VIEW
            .ClearCards()
            .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
            .ClearButtons()
            .UpdateButtons([
              B_SHUFFLE.Current(),
              B_SORT.Current(),
              B_SEARCH.Current(),
              B_SWAP.Current(),
              B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);
        }

        return;
      }

      // shuffle current node
      if (event.composedPath()[idx].id == "shuffle-button")
      {
        GLOBAL.CurrentNode = RandomElementInArray(search.functions.getAllCards(G_searchable, GLOBAL.PrimaryLanguageFirst));
      
        pushState(GLOBAL.CurrentNode);
        GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);

        resetSearch();
        VIEW
          .ClearCards()
          .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
          .ClearButtons()
          .UpdateButtons([
            B_SHUFFLE.Next(),
            B_SORT.Current(),
            B_SEARCH.Current(),
            B_SWAP.Current(),
            B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);

        return;
      }

      // sort cards
      if (event.composedPath()[idx].id == "sort-button")
      {
        GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

        VIEW
          .ClearCards()
          .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, 0)
          .ClearButtons()
          .UpdateButtons([
            B_SHUFFLE.Current(),
            B_SORT.Current(),
            B_SEARCH.Current(),
            B_SWAP.Current(),
            B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);

        return;
      }

      // swap language shown
      if (event.composedPath()[idx].id == "swap-button")
      {
        // state
        GLOBAL.PrimaryLanguageFirst = GLOBAL.PrimaryLanguageFirst ? false : true;

        let currentHeight = SCROLL.GetCurrentHeight();
        VIEW
          .ClearCards()
          .UpdateCards(GLOBAL, SETTINGS, 
            GLOBAL.CurrentNode,
            GLOBAL.DisplayCards,
            currentHeight)
          .ClearButtons()
          .UpdateButtons([
            B_SHUFFLE.Current(),
            B_SORT.Current(),
            B_SEARCH.Current(),
            B_SWAP.Select(GLOBAL.PrimaryLanguageFirst ? 0 : 1),
            B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);

        return;
      }

      // go to parent
      if (event.composedPath()[idx].id == "travel-button")
      {
        GLOBAL.CurrentNode = GLOBAL.CurrentNode.Parent;
        GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
        pushState(GLOBAL.CurrentNode)

        // display
        var heightToSet = SCROLL.GetPreviousHeight();
        resetSearch();
        GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

        VIEW
          .ClearCards()
          .UpdateCards(GLOBAL, SETTINGS, GLOBAL.CurrentNode, GLOBAL.DisplayCards, heightToSet)
          .ClearButtons()
          .UpdateButtons([
            B_SHUFFLE.Current(),
            B_SORT.Current(),
            B_SEARCH.Current(),
            B_SWAP.Current(),
            B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);

        return;
      }
    }
  })


function keyboardInput()
{
  let searchString = document.getElementById(ElementID.SEARCH_BAR_ID).value;
  GLOBAL.CurrentNode = ROOT_NODE;
  GLOBAL.DisplayCards = search.functions.searchForMatchingCards(G_searchable, GLOBAL.PrimaryLanguageFirst, searchString);

  console.log("Searching keyboard input");
  console.log(searchString);

  VIEW
    .ClearCards()
    .UpdateCards(GLOBAL, SETTINGS, CONFIG.SEARCH_PLACEHOLDER, GLOBAL.DisplayCards, 0);
};
document.getElementById(ElementID.SEARCH_BAR_ID).addEventListener("input", keyboardInput)


// =============================================================================
// Animations
// =============================================================================

function animateShuffle(counter)
{
  var frame = () =>
  {
    console.log(`Animate shuffle: ${counter}`);
    counter = Math.abs(counter);
    VIEW.ClearButton(0).SetButton(0, B_SHUFFLE.Previous());

    counter--;
    if (counter <= 0)
    {

      clearInterval(id);
    }
  }

  const id = setInterval(frame, 50);
}



function animateButtons()
{
  if (DEBUG)
  {
    console.log("Animate buttons")
  }
  
  // shuffle button
  let counter = B_SHUFFLE.state + B_SHUFFLE.numberOfStates - 1;
  counter = counter < 1 ? 7 : counter;
  animateShuffle(counter);
}
document.getElementById(NAVAR_BRAND_BUTTON).addEventListener("click", animateButtons)
document.getElementById(NAVAR_HOME_BRAND_BUTTON).addEventListener("click", animateButtons)


tryRegisterServiceWorker()
