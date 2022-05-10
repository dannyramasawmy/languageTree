var searchable = new SearchableDictionary();
GetSearchableWords(romanian, searchable);

// Set canvas H and W
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// drawing
var ctx = canvas.getContext('2d')

// ===============
// Event Listener 
// ===============

var mouse = {
    x: undefined,
    y: undefined,
    c: 0,
}

window.addEventListener('mousemove',
function (event) {
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener('resize', function (event) {
    //console.log(event)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    DisplayChild(romanian);
});

window.addEventListener('click',
    function (event) {
        mouse.c = mouse.c + 1;
        console.log(mouse.c);
    })

// ===============
// Code 
// ===============
function DisplayChild(dataCard) {

    // style
    xc = innerWidth/2;
    yc = innerHeight/2;
    radius = 180;
    color = '#D73E02';
    
    // parent
    var nodeCurrent = new DisplayNode(xc, yc, radius, color, dataCard)
    nodeCurrent.Draw()
    
    if (dataCard.Parent.length == 0)
    {
        var nodeParent = new DisplayNode(xc*1.8, yc*1.8, radius/2, color, rootNode)
        nodeParent.Draw()
    } else {
        var nodeParent = new DisplayNode(xc*1.8, yc*1.8, radius/2, color, dataCard.Parent)
        nodeParent.Draw()
    }

    var deltaAngle = 2*Math.PI / dataCard.Child.length; 

    var hypotenuse = innerHeight * 1/3;
    
    // kids
    for (let idx = 0; idx < dataCard.Child.length ; idx++) {

        xt = xc + hypotenuse * Math.cos(deltaAngle * idx);
        yt = yc + hypotenuse * Math.sin(deltaAngle * idx);

        var childNode = new DisplayNode(
            xt, yt, radius * 0.5, color, dataCard.Child[idx])
        childNode.Draw()
    }

}

// call a recursive like function to draw each frame
function animate() {
    requestAnimationFrame(animate)

    ctx.clearRect(0, 0, innerWidth, innerHeight);

    DisplayChild(currentNode)
}

var rootNode = romanian;
var currentNode = rootNode;
animate();