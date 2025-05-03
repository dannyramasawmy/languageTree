
/**
 * A color wheel object
 */
export class ColorWheel {
    /**
     * A color wheel object
     * @param {number} startingIndex - the first index to start from
     * @param {string} parentColor - the colour for the parents
     * @param {string} textColor - the main text colour
     * @param {string[]} colorList - a collection of colours
     */
    constructor(startingIndex, parentColor, textColor, colorList) {
        // https://htmlcolorcodes.com/
        // red -> purple -> blue -> green -> yellow -> orange
        this.Index = startingIndex;
        this.ParentColor = parentColor;
        this.TextColor = textColor;
        this.Colors = colorList
    }

    /**
     * Get the next index
     * @returns {number} - returns the next index
     */
    GetNextColorIndex = () => {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Index;
    };

    /**
     * Get the next colour in the colour wheel
     * @returns {string} - gets the next colour as a hex string
     */
    GetNextColor = () => {
        this.GetNextColorIndex();
        return this.Colors[this.Index];
    };
}
