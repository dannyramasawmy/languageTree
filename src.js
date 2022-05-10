function DataCard(english, romanian, data) {
    this.English = english;
    this.Romanian = romanian;
    this.Data = data;
    
    this.Parent = [];
    this.Child = [];

    this.AddChild = function(dataCard) {
        this.Child.push(dataCard);
    }

    this.SetParent = function(dataCard) {
        this.Parent = dataCard;
    }
}


function SearchableDictionary() {
    this.Romanian = {};
    this.English = {};
}


function SetParentAndChild(parentDataCard, childDataCard) {
    parentDataCard.AddChild(childDataCard);
    childDataCard.SetParent(parentDataCard);
}


function GetSearchableWords(rootDataCard, searchableDictionary) {
    
    searchableDictionary.English[rootDataCard.English] = rootDataCard;
    searchableDictionary.Romanian[rootDataCard.Romanian] = rootDataCard;

    if (rootDataCard.Child.length == 0) {
        return;
    }

    for (let i = 0; i < rootDataCard.Child.length ; i++) {
        GetSearchableWords(rootDataCard.Child[i], searchableDictionary)
    }
    return;
}


function DisplayNode(x, y, radius, color, dataCard) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.text = dataCard.English;
 
    this.Draw = function() {
        var radiusMultiplier = 1;

        if ((Math.abs(mouse.x - this.x) < this.radius) && (Math.abs(mouse.y - this.y) < this.radius)) {
            radiusMultiplier = 1.2;

            if (mouse.c > 0)
            {
                currentNode = dataCard;
                mouse.c = 0;
            }
        } 

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * radiusMultiplier, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = '#0669BF'
        ctx.textAlign = "center";
        ctx.fillText(this.text, this.x, this.y);


    }
}