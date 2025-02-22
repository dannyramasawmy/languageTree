import { primarySort } from "./functions.js";
import { getIntFromLocal, saveIntToLocal } from "../state/localStorage.js";

class Node {
    constructor(primary, secondary, data, isRoot = false) {
        this.UID = crypto.randomUUID()
        
        this.Primary = primary;
        this.Secondary = secondary;
        this.Data = data;

        this.Parent = [];
        this.Child = [];

        this.IsRoot = isRoot;

        this.Generation = 0
        this.Views = '-'

        this.AddChild = (dataCard, sortFunction=primarySort) => {
            this.Child.push(dataCard);
            this.Child.sort(sortFunction);
        };

        this.SetParent = (dataCard) => {
            this.Parent = dataCard;
            this.Generation = this.IsRoot ? 0 : this.Parent.Generation + 1 
        };

        this.GetHashId = () => {
            return `ID-${this.Primary}-${this.Secondary}-${this.Generation}`            
        }

        this.IncrementView = () => {
            if (this.IsRoot) return
            
            let key = this.GetHashId()

            if (this.Views == '-') 
                this.Views = getIntFromLocal(key, 0)

            this.Views = this.IsRoot ? '-' : this.Views + 1
            saveIntToLocal(key, this.Views)
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
