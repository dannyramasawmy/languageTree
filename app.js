// =============================================================================
// Global variables
// =============================================================================

const rootNode = romanian;
const elementName = "node-display";
const headerName = "current-node";
const dataName = "current-node-data";
const colorWheel = new ColorWheel();

// =============================================================================
// Initialise
// =============================================================================

var currentNode = rootNode;
var displayList = GetDisplayNodes(currentNode);
ClearNodeDisplay(elementName)
PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)

var searchable = new SearchableDictionary();
GetSearchableWords(romanian, searchable);

// =============================================================================
// Events
// =============================================================================

window.addEventListener('click',
    function (event) {

        var clickId = event.composedPath()[0].id;
        var displayList = GetDisplayNodes(currentNode);

        // update display
        if (displayList[clickId] !== undefined) {
            currentNode = displayList[clickId];
            var displayList = GetDisplayNodes(currentNode);
            var elementName = "node-display";
            
            ClearNodeDisplay(elementName)
            PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)
        }
    })