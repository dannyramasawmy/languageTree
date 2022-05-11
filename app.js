var searchable = new SearchableDictionary();
GetSearchableWords(romanian, searchable);


function GetDisplayNodes(node) {
    var displayList = [];

    displayList.push(rootNode);
    
    if (node.Parent.length == 1) {
        displayList.pop();
        displayList.push(node.Parent[0]);
    } 

    for (var idx = 0; idx < node.Child.length; idx++) {
        displayList.push(node.Child[idx])
    }

    return displayList;
}

function CreateDisplayNode(dataCard) {
    var divString = "";

    return divString
}

function ClearNodeDisplay(elementName) {
    var displayDiv = document.getElementById(elementName);
    for (var idx = displayDiv.children.length; idx > 0 ; idx--) {
        displayDiv.removeChild(displayDiv.children[idx - 1]);
    }
}

function PopulateNodeDisplay(elementName, displayList) {
    var displayDiv = document.getElementById(elementName);

    for (var idx = 0; idx < displayList.length; idx++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = displayList[idx].English;
        newDiv.id = idx;
        newDiv.className = "data-card";
        // newDiv.addEventListener("click", ClearNodeDisplay(elementName));
        displayDiv.appendChild(newDiv);
    }

}

function changeCurrent(idx) {
    console.log(idx);
}

var rootNode = romanian;
var elementName = "node-display";
var currentNode = rootNode;

var displayList = GetDisplayNodes(currentNode);
ClearNodeDisplay(elementName)
PopulateNodeDisplay(elementName, displayList)

// // Set canvas H and W
// var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// // drawing
// var ctx = canvas.getContext('2d')

// // ===============
// // Event Listener 
// // ===============

// var mouse = {
//     x: undefined,
//     y: undefined,
//     c: 0,
// }

// window.addEventListener('mousemove',
// function (event) {
//     mouse.x = event.x
//     mouse.y = event.y
// })

// window.addEventListener('resize', function (event) {
//     //console.log(event)
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     DisplayChild(romanian);
// });

// window.addEventListener('click',
//     function (event) {
//         mouse.c = mouse.c + 1;
//         console.log(mouse.c);
//     })

// // ===============
// // Code 
// // ===============
// function DisplayChild(dataCard) {

//     // style
//     xc = innerWidth/2;
//     yc = innerHeight/2;
//     radius = 180;
//     color = '#D73E02';
    
//     // parent
//     var nodeCurrent = new DisplayNode(xc, yc, radius, color, dataCard)
//     nodeCurrent.Draw()
    
//     if (dataCard.Parent.length == 0)
//     {
//         var nodeParent = new DisplayNode(xc*1.8, yc*1.8, radius/2, color, rootNode)
//         nodeParent.Draw()
//     } else {
//         var nodeParent = new DisplayNode(xc*1.8, yc*1.8, radius/2, color, dataCard.Parent)
//         nodeParent.Draw()
//     }

//     var deltaAngle = 2*Math.PI / dataCard.Child.length; 

//     var hypotenuse = innerHeight * 1/3;
    
//     // kids
//     for (let idx = 0; idx < dataCard.Child.length ; idx++) {

//         xt = xc + hypotenuse * Math.cos(deltaAngle * idx);
//         yt = yc + hypotenuse * Math.sin(deltaAngle * idx);

//         var childNode = new DisplayNode(
//             xt, yt, radius * 0.5, color, dataCard.Child[idx])
//         childNode.Draw()
//     }

// }

// // call a recursive like function to draw each frame
// function animate() {
//     requestAnimationFrame(animate)

//     ctx.clearRect(0, 0, innerWidth, innerHeight);

//     DisplayChild(currentNode)
// }

// var rootNode = romanian;
// var currentNode = rootNode;
// animate();