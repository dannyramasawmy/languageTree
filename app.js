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

document.getElementById("random-card").innerHTML = 
    `Shuffle (${searchable.GetDataCards("").length})`;

// =============================================================================
// Events
// =============================================================================


window.addEventListener('click',
    function (event) {
        
        var clickId = event.composedPath()[0].id;
        // var displayList = GetDisplayNodes(currentNode);
        var elementName = "node-display";
        
        for (var idx = 0; idx < event.composedPath().length; idx++)
        {
            if (event.composedPath()[idx].id == "search-bar")
                return;

                if (event.composedPath()[idx].id == "random-card"){

                    currentNode = RandomElementInArray(searchable.GetDataCards(""));
                    
                    displayList = GetDisplayNodes(currentNode);
                    ResetSearch();
                    ClearNodeDisplay(elementName)
                    PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)
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
            
            ResetSearch();

            ClearNodeDisplay(elementName)
            PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)
        }
    })


function keyboardInput() {
    displayList = searchable.GetDataCards(document.getElementById("filter").value);
    ClearNodeDisplay(elementName);
    PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList);
};

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



