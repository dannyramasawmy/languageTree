import { primarySort } from "./functions.js";

class Node {
    constructor(primary, secondary, data, isRoot = false) {
        this.ID = crypto.randomUUID()

        this.Primary = primary;
        this.Secondary = secondary;
        this.Data = data;

        this.Parent = [];
        this.Child = [];

        this.IsRoot = isRoot;

        this.Generation = 0
        this.Views = this.IsRoot ? '-' : 0

        this.AddChild = (dataCard, sortFunction=primarySort) => {
            this.Child.push(dataCard);
            this.Child.sort(sortFunction);
        };

        this.SetParent = (dataCard) => {
            this.Parent = dataCard;
            this.Generation = this.IsRoot ? 0 : this.Parent.Generation + 1 
        };

        this.IncrementView = () => {
            this.Views = this.IsRoot ? '-' : this.Views + 1
        }
    } 
}

export class DataRoot extends Node {
    constructor(primary, secondary, data) {
        super(primary, secondary, data, true);
      }
}


export class DataCard extends Node {
    constructor(primary, secondary, data) {
        super(primary, secondary, data, false);    
    }
}
