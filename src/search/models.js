import { AbstractNode } from "../tree/models.js"

/**
 * Element ID's for the navigation bar
 * @readonly
 * @enum {string}
 */
export const FilterCharacterKey = {
    AT: "@",
    ASTERIX: "*",
    // DEFALUT: "",
    EXCLAMATION: "!",
    HASHTAG: "#",
}

/**
 * A filter class
 */
export class SearchFilter {
    /**
     * 
     * @param {FilterCharacterKey} key 
     * @param {string} description 
     * @param {(x: AbstractNode, y: string) => boolean} filter 
     */
    constructor(key, description, filter) {
        this.key = key
        this.description = description
        this.Filter = filter
    }
}