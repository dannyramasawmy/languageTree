import { View } from "./view.js";
import { Button } from "./buttons/button.js";
import { ElementID, SettingsID, ButtonsID, NavbarId, ButtonIcons } from "./identifiers.js";
import * as search from "./search/index.js"
import * as tree from "./tree/index.js"
import { GlobalState } from "./state/models.js"
import { CONFIG } from "../configuration.js";
import { ScrollHandler } from "./history/scroll.js";
import { RandomElementInArray } from "./utils/random.js";
import { tryRegisterServiceWorker } from "./sw/register.js";
import { Settings } from "./settings/settings.js";
import { flattenTree, setParentAndChild } from "./tree/functions.js";
import { Stats } from "./stats/models.js";
import { displayNumberOfSearchMatches, showCustomSearchConfigurations } from "./search/view.js";
import { Practice } from "./practice/models.js";
import { DifficultyLevel } from "./tree/models.js";


// =============================================================================
// Global variables
// =============================================================================

const DEBUG = true;
const ROOT_NODE = CONFIG.DATA_TREE;
const SETTINGS = Settings.default()

// =============================================================================
// Add special cards
// =============================================================================

let treeAsArray = flattenTree(ROOT_NODE)

// special cards
setParentAndChild(ROOT_NODE, new Stats(CONFIG.STATISTICS_LABELS[0], CONFIG.STATISTICS_LABELS[1], ROOT_NODE))
setParentAndChild(ROOT_NODE, new Practice(treeAsArray, DifficultyLevel.Easy))

const sortDisplayList = (GLOBAL, displayCards) =>
  tree.functions.sortDataCardArray(
    GLOBAL.PrimaryKeyFirst,
    displayCards,
    CONFIG.PRIMARY_SORT_FUNCTION,
    CONFIG.SECONDARY_SORT_FUNCTION)
    
const GLOBAL = new GlobalState(true, ROOT_NODE, tree.functions.getChildren(ROOT_NODE))
GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

// =============================================================================
// Initialise
// =============================================================================

const VIEW = new View(
  ElementID.MAIN_CARD_ID,
  ElementID.DATA_CARDS_ID,
  ElementID.BUTTON_PANEL_ID,
  SETTINGS,
  GLOBAL);

const SCROLL = new ScrollHandler();

// define buttons
const B_SHUFFLE = new Button(SETTINGS, ButtonsID.SHUFFLE, "Shuffle", ButtonIcons.SHUFFLE, "shuffle-button");
const B_SORT = new Button(SETTINGS, ButtonsID.SORT, "Sort", ButtonIcons.SORT, "sort-button");
const B_SEARCH = new Button(SETTINGS, ButtonsID.SEARCH, "Search", ButtonIcons.SEARCH, "search-button").IsSearchButton();
const B_SWAP = new Button(SETTINGS, ButtonsID.SWAP, "Swap", ButtonIcons.SWAP, "swap-button");
const B_TRAVEL = new Button(SETTINGS, ButtonsID.TRAVEL, "Ascend", ButtonIcons.TRAVEL, "travel-button");

VIEW
  .ClearCards()
  .UpdateCards(0)
  .ClearButtons()
  .UpdateButtons([
    B_SHUFFLE.Current(),
    B_SORT.Current(),
    B_SEARCH.Current(),
    B_SWAP.Current(),
    B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))
  ]);

let resetSearch = () =>
{
  displayNumberOfSearchMatches('...')
  search.view.resetSearchBar(treeAsArray.length);
}

showCustomSearchConfigurations(CONFIG.SEARCH_FILTERS)

resetSearch()



// =============================================================================
// SETTINGS
// =============================================================================

function updateSettings() {
  SETTINGS.update()

  SETTINGS.IsDarkTheme ? VIEW.SetDarkTheme() : VIEW.SetLightTheme();
  VIEW
    .ClearCards()
    .UpdateCards(SCROLL.GetCurrentHeight())
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
function pushState(node) {
  history.pushState(node.GetHashId(), null, `?${node.GetHashId()}`);
}

// set next history state
window.addEventListener('popstate',
  function (event) {
    if (DEBUG) {
      console.log("Popstate");
    }

    console.log(event.state)
    GLOBAL.CurrentNode = event.state == null
      ? ROOT_NODE
      : search.functions.getDataCardFromUID(treeAsArray, event.state);

    GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
    VIEW
      .ClearCards()
      .UpdateCards(0)
      .ClearButtons()
      .UpdateButtons([
        B_SHUFFLE.Previous(),
        B_SORT.Current(),
        B_SEARCH.Current(),
        B_SWAP.Current(),
        B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);
  });

window.onkeyup = function (e) {
  if (e.key == "Enter" || e.keyCode == 13) {
    console.log("Search shortcut - close");
    resetSearch()
    const modalEl = document.getElementById('searchModal');
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
  }

  if (e.ctrlKey && e.keyCode === 81) {
    console.log("Search shortcut - open");
    let myModal = new bootstrap.Modal(document.getElementById('searchModal'), {});
    console.log(myModal)
    myModal.show();
    document.getElementById(ElementID.SEARCH_BAR_ID).focus();
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

      if (typeof currentClickPathId === 'string' && currentClickPathId.includes("parent-card-number-")) {
        let idNumber = currentClickPathId.slice(19);

        if (DEBUG) {
          console.log("Clicked");
          console.log(currentClickPathId);
          console.log(idNumber);
        }

        // when clicking on a card
        if (GLOBAL.CurrentNode.Parent[idNumber] !== undefined) {
          // state
          GLOBAL.CurrentNode = GLOBAL.CurrentNode.Parent[idNumber];
          GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
          pushState(GLOBAL.CurrentNode)
          SCROLL.AddHistory();

          // display
          resetSearch();
          GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

          VIEW
            .ClearCards()
            .UpdateCards(0)
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

      if (typeof currentClickPathId === 'string' && currentClickPathId.includes("relation-card-number-")) {
        let idNumber = currentClickPathId.slice(21);

        if (DEBUG) {
          console.log("Clicked");
          console.log(currentClickPathId);
          console.log(idNumber);
        }

        // when clicking on a card
        if (GLOBAL.CurrentNode.Relations[idNumber] !== undefined) {
          // state
          GLOBAL.CurrentNode = GLOBAL.CurrentNode.Relations[idNumber];
          GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
          pushState(GLOBAL.CurrentNode)
          SCROLL.AddHistory();

          // display
          resetSearch();
          GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

          VIEW
            .ClearCards()
            .UpdateCards(0)
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
          GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
          pushState(GLOBAL.CurrentNode)
          SCROLL.AddHistory();

          // display
          resetSearch();
          GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

          VIEW
            .ClearCards()
            .UpdateCards(0)
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
      if (event.composedPath()[idx].id == ButtonsID.SHUFFLE) {
        GLOBAL.CurrentNode = RandomElementInArray(treeAsArray);

        pushState(GLOBAL.CurrentNode);
        GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);

        resetSearch();
        VIEW
          .ClearCards()
          .UpdateCards(0)
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
      if (event.composedPath()[idx].id == ButtonsID.SORT) {
        GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

        VIEW
          .ClearCards()
          .UpdateCards(0)
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
      if (event.composedPath()[idx].id == ButtonsID.SWAP) {
        // state
        GLOBAL.PrimaryKeyFirst = GLOBAL.PrimaryKeyFirst ? false : true;

        let currentHeight = SCROLL.GetCurrentHeight();
        VIEW
          .ClearCards()
          .UpdateCards(currentHeight)
          .ClearButtons()
          .UpdateButtons([
            B_SHUFFLE.Current(),
            B_SORT.Current(),
            B_SEARCH.Current(),
            B_SWAP.Select(GLOBAL.PrimaryKeyFirst ? 0 : 1),
            B_TRAVEL.Select(tree.functions.getNodeType(GLOBAL.CurrentNode))]);

        return;
      }

      // go to parent / travel
      if (event.composedPath()[idx].id == ButtonsID.TRAVEL) {
        GLOBAL.CurrentNode = GLOBAL.CurrentNode.Parent[0];
        GLOBAL.DisplayCards = tree.functions.getChildren(GLOBAL.CurrentNode);
        pushState(GLOBAL.CurrentNode)

        // display
        var heightToSet = SCROLL.GetPreviousHeight();
        resetSearch();
        GLOBAL.DisplayCards = sortDisplayList(GLOBAL, GLOBAL.DisplayCards);

        VIEW
          .ClearCards()
          .UpdateCards(heightToSet)
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

// for bootstrap tooltip
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

function keyboardInput() {
  let searchString = document.getElementById(ElementID.SEARCH_BAR_ID).value;
  GLOBAL.CurrentNode = ROOT_NODE;
  GLOBAL.DisplayCards = search.functions.searchForMatchingNodes(
    treeAsArray, 
    GLOBAL.PrimaryKeyFirst, 
    searchString,
    CONFIG.SEARCH_FILTERS);

  displayNumberOfSearchMatches(GLOBAL.DisplayCards.length)

  console.log("Searching keyboard input");
  console.log(searchString);

  VIEW
    .ClearCards()
    .UpdateCards(0);
};
document.getElementById(ElementID.SEARCH_BAR_ID).addEventListener("input", keyboardInput)


// =============================================================================
// Animations
// =============================================================================

function animateShuffle(counter) {
  var frame = () => {
    counter = Math.abs(counter);
    VIEW.ClearButton(0).SetButton(0, B_SHUFFLE.Previous());

    counter--;
    if (counter <= 0) {

      clearInterval(id);
    }
  }

  const id = setInterval(frame, 50);
}



function animateButtons() {
  if (DEBUG) {
    console.log("Animate buttons")
  }

  // shuffle button
  let counter = B_SHUFFLE.state + B_SHUFFLE.numberOfStates - 1;
  counter = counter < 1 ? 7 : counter;
  animateShuffle(counter);
}
document.getElementById(NavbarId.BRAND_BUTTON).addEventListener("click", animateButtons)
document.getElementById(NavbarId.HOME_BRAND_BUTTON).addEventListener("click", animateButtons)

tryRegisterServiceWorker()
