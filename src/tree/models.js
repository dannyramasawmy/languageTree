import { primarySort } from "./functions.js";
import { getIntFromLocal, saveIntToLocal } from "../state/localStorage.js";
import { stringToHTMLElement } from "../utils/string.js";

/** @typedef {import('./types.js').NodeComparator} NodeComparator */


export class Question {
    /**
     * 
     * @param {string} question 
     * @param {string} answer 
     * @param {string} nodeUid 
     */
    constructor(question, answer, nodeUid) {
        this.question = question
        this.answer = answer
        this.uid = nodeUid
    }
}


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

        /** @type {AbstractNode[]} */
        this.Relations = []

        /** @type {boolean} */
        this.IsRoot = isRoot;

        /** @type {number} */
        this._views = NaN
    }

    /**
   * A method that produces the html to render for the card content
   * @abstract
   * @returns {HTMLElement} An HTML to render as the main content view 
   */
    DataView = () => {
        throw new Error("Abstract method 'DataView' must be implemented")
    }
    /**
   * A method that produces the html to render for the Primary title / key
   * @abstract
   * @returns {HTMLElement} HTML to render as the Primary title view 
   */
    PrimaryView = () => {
        throw new Error("Abstract method 'PrimaryView' must be implemented")
    }
    /**
   * A method that produces the html to render for the Secondary sub-title / key
   * @abstract
   * @returns {HTMLElement} HTML to render as the Secondary sub-title view 
   */
    SecondaryView = () => {
        throw new Error("Abstract method 'SecondaryView' must be implemented")
    }

    /**
   * A method that produces a collection of searchable terms that are not the primary or secondary key
   * @abstract
   * @returns {string[]} - A collection of searchable terms that are not the primary or secondary key
   */
    SearchableTerms = () => {
        throw new Error("Abstract method 'SearchableTerms' must be implemented")
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
     * Add a child to the node
     * @param {AbstractNode} node - An Abstract Node object
     * @param {NodeComparator} sortFunction - A supplied function that sorts the node objects
     */
    AddCrossLinkRelation = (node, sortFunction = primarySort) => {
        this.Relations.push(node);
        this.Relations.sort(sortFunction);
    }

    /**
     * Set the parent to the node
     * @param {AbstractNode} node - An Abstract Node object
     */
    SetParent = (node) => {
        this.Parent.push(node);
    }

    /**
     * A method that returns a unique hash-id for the current node
     * @returns {string} - a unique hash-id for the current node
     */
    GetHashId = () => {
        return `ID-${this.Primary}-${this.Secondary}`
    }

    GetViews = () => {
        if (this.IsRoot) return 0

        if (Number.isNaN(this._views))
            this._views = getIntFromLocal(this.GetHashId(), 0)

        return this._views
    }

    /**
     * A method that increments the view number for the given node 
     * This method saves and loads data from local storage
     * @returns {void}
     */
    IncrementView = () => {
        if (this.IsRoot) return

        let currentViews = this.GetViews()

        this._views = this.IsRoot ? NaN : currentViews + 1
        saveIntToLocal(this.GetHashId(), this._views)
    }

    /**
     * TODO: This feature is experimental and under development
     * @virtual
     * @returns {Question[]}
     */
    Practice = () => {
        return [
            new Question(`Translate "${this.Primary}" to Romanian`, this.Secondary, this.GetHashId()),
            new Question(`Translate "${this.Secondary}" to English`, this.Primary, this.GetHashId()),
        ]
    }
}

/**
 * A concrete DataCard Root
 */
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
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main content view 
    */
    DataView = () => {
        return stringToHTMLElement(this.Data)
    }

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main title view 
    */
    PrimaryView = () => {
        return stringToHTMLElement(this.Primary)
    }

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the sub-title view 
    */
    SecondaryView = () => {
        return stringToHTMLElement(this.Secondary)
    }


    /**
    * A method that presents the searchable terms
    * @override
    * @returns {string[]}  A collection of search terms that can map this object
    */
    SearchableTerms = () => [this.Primary, this.Secondary]
}

/**
 * A concrete DataCard
 */
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
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main content view 
    */
    DataView = () => {
        return stringToHTMLElement(this.Data)
    }

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the main title view 
    */
    PrimaryView = () => {
        return stringToHTMLElement(this.Primary)
    }

    /**
    * A method that produces the html to render
    * @override
    * @returns {HTMLElement}  HTML to render as the sub-title view 
    */
    SecondaryView = () => {
        return stringToHTMLElement(this.Secondary)
    }

    /**
    * A method that presents the searchable terms
    * @override
    * @returns {string[]}  A collection of search terms that can map this object
    */
    SearchableTerms = () => [this.Primary, this.Secondary]
}

