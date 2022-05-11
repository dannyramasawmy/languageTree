var searchable = new SearchableDictionary();
GetSearchableWords(romanian, searchable);



window.addEventListener('click',
    function (event) {
        var clickId = event.path[0].id;
        var displayList = GetDisplayNodes(currentNode);
        console.log(displayList)

        if (displayList[clickId] !== undefined) {
            currentNode = displayList[clickId];
            var displayList = GetDisplayNodes(currentNode);
            var elementName = "node-display";
            ClearNodeDisplay(elementName)
            PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)
        }
    })


const rootNode = romanian;
const elementName = "node-display";
const headerName = "current-node";
const dataName = "current-node-data";
var currentNode = rootNode;

var displayList = GetDisplayNodes(currentNode);
ClearNodeDisplay(elementName)
PopulateNodeDisplay(elementName, headerName, dataName, currentNode, displayList)