/**
 * A Scroll Handler class
 */
export class ScrollHandler {
    constructor() {
        /** @type {number[]} - A collection of scroll heights */
        this.ScrollHistory = [];
        this.ScrollHistoryLimit = 100;
    }

    /**
     * Get the current scroll height
     * @returns {number} - The current y-scroll value
     */
    GetCurrentHeight = () =>
        window.scrollY;

    /**
     * Add the current scroll height to the history
     */
    AddHistory = () => {
        this.ScrollHistory.push(this.GetCurrentHeight());
        this.ScrollHistory = this.ScrollHistory.slice(-this.ScrollHistoryLimit)
    };

    /**
     * Get the last scroll height
     * @returns {number} - The last recorded scroll height or 0
     */
    GetPreviousHeight = () => {
        if (this.ScrollHistory.length > 0) return this.ScrollHistory.pop();
        return 0;
    };

    /**
     * Calculate the maximum scroll height
     * @returns {number} - the maximum scroll height
     */
    MaxScrollHeight = () => {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        return scrollHeight;
    };

    /**
     * Get the percentage scroll
     * @returns {number} - the percentage scroll between [0, 1]
     */
    PercentageScroll = () =>
        this.GetCurrentHeight() / this.MaxScrollHeight();
}
