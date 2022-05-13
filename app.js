// =============================================================================
// Global variables
// =============================================================================

const rootNode = romanian;
const elementName = "node-display";
const headerName = "current-node";
const dataName = "current-node-data";
const colorWheel = new ColorWheel();
var displayLanguageEnglish = true;

// =============================================================================
// Initialise
// =============================================================================


var currentNode = rootNode;
var displayList = GetDisplayNodes(currentNode);
ClearNodeDisplay(elementName)
PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)

var searchable = new SearchableDictionary();
GetSearchableWords(romanian, searchable);

// displayList = searchable.GetDataCards('a');
// ClearNodeDisplay(elementName)
// PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)

// =============================================================================
// Events
// =============================================================================
var debugvar;
window.addEventListener('click',
    function (event) {

        var clickId = event.composedPath()[0].id;
        // var displayList = GetDisplayNodes(currentNode);
        var elementName = "node-display";
        debugvar = event;
        console.log(event);

        for (var idx = 0; idx < event.composedPath().length; idx++)
        {
            if (event.composedPath()[idx].id == "search-bar")
            {
                console.log("in search bar");
                return;
            }

            if (event.composedPath()[idx].id == "current-node" 
            || event.composedPath()[idx].id == "current-node-data")
            {
                var headerDiv = document.getElementById(headerName);
                        
                displayLanguageEnglish = displayLanguageEnglish? false : true;
                ClearNodeDisplay(elementName)
                PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)    
                return;
            }
        }

        // update display
        if (displayList[clickId] !== undefined) {
            currentNode = displayList[clickId];
            displayList = GetDisplayNodes(currentNode);
            
            ClearNodeDisplay(elementName)
            PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)
        }
    })
