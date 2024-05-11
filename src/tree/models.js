import { primarySort } from "./functions.js";

class Node {
    constructor(primary, secondary, data, isRoot = false) {
        this.Primary = primary;
        this.Secondary = secondary;
        this.Data = data;

        this.Parent = [];
        this.Child = [];

        this.IsRoot = isRoot;

        this.AddChild = (dataCard, sortFunction=primarySort) => {
            this.Child.push(dataCard);
            this.Child.sort(sortFunction);
        };

        this.SetParent = (dataCard) => {
            this.Parent = dataCard;
        };
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
