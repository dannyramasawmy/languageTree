import { primarySort } from "./functions.js";
import { getIntFromLocal, saveIntToLocal } from "../state/localStorage.js";

/** @typedef {import('./functions.js').NodeComparator} NodeComparator */

/**
 * @abstract
 * Abstract base class for nodes on the tree.
 */
export class AbstractNode {
    /**
   * @param {string} primary - The primary key or main title.
   * @param {string} secondary - The secondary key or subtitle.
   * @param {boolean} isRoot - Whether the node is intended as the root note of the tree.
   */
    constructor(primary, secondary, isRoot = false) {
        /** @type {string} */
        this.UID = crypto.randomUUID()

        /** @type {string} */
        this.Primary = primary;

        /** @type {string} */
        this.Secondary = secondary;

        /** @type {AbstractNode[]} */
        this.Parent = [];

        /** @type {AbstractNode[]} */
        this.Child = [];

        /** @type {boolean} */
        this.IsRoot = isRoot;

        /** @type {number} */
        this.Generation = 0

        /** @type {number | "-"} */
        this.Views = '-'
    }

    /**
   * A method that produces the inner-html to render
   * @abstract
   * @returns {string} A string that parses to HTML to render as the main content view 
   */
    DataView = () => {
        throw new Error("Abstract method 'DataView' must be implemented")
    }

    /**
     * Add a child to the node
     * @param {AbstractNode} node - An Abstract Node object
     * @param {NodeComparator} sortFunction - A supplied function that sorts the node objects
     */
    AddChild = (node, sortFunction = primarySort) => {
        this.Child.push(node);
        this.Child.sort(sortFunction);
    }

    /**
     * Set the parent to the node
     * @param {AbstractNode} node - An Abstract Node object
     */
    SetParent = (node) => {
        // TODO: allow multiple parents in future
        this.Parent.push(node);
        this.Generation = this.IsRoot ? 0 : this.Parent[0].Generation + 1
    }

    /**
     * A method that returns a unique hash-id for the current node
     * @returns {string} - a unique hash-id for the current node
     */
    GetHashId = () => {
        return `ID-${this.Primary}-${this.Secondary}-${this.Generation}`
    }

    /**
     * A method that increments the view number for the given node 
     * This method saves and loads data from local storage
     * @returns {void}
     */
    IncrementView = () => {
        if (this.IsRoot) return

        let key = this.GetHashId()

        if (this.Views == '-')
            this.Views = getIntFromLocal(key, 0)

        this.Views = this.IsRoot ? '-' : this.Views + 1
        saveIntToLocal(key, this.Views)
    }
}

export class DataRoot extends AbstractNode {
    /**
    * @param {string} primary - The primary key or main title.
    * @param {string} secondary - The secondary key or subtitle.
    * @param {string} data - The data in the node.
    */
    constructor(primary, secondary, data) {
        super(primary, secondary, true);

        this.Data = data
    }

    /**
    * A method that produces the inner-html to render
    * @override
    * @returns {string}  A string that parses to HTML to render as the main content view 
    */
    DataView = () => {
        return this.Data
    }
}


export class DataCard extends AbstractNode {
    /**
    * @param {string} primary - The primary key or main title.
    * @param {string} secondary - The secondary key or subtitle.
    * @param {string} data - The data in the node.
    */
    constructor(primary, secondary, data) {
        super(primary, secondary, false);

        this.Data = data
    }

    /**
    * A method that produces the inner-html to render
    * @override
    * @returns {string}  A string that parses to HTML to render as the main content view 
    */
    DataView = () => {
        return this.Data
    }
}
