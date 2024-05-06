
export function ScrollHandler() {
    // https://javascript.info/size-and-scroll-window
    this.ScrollHistory = [];

    this.GetCurrentHeight = () => 
        window.scrollY;

    this.AddHistory = () => {
        this.ScrollHistory.push(window.scrollY);
    };

    this.GetPreviousHeight = () => {
        if (this.ScrollHistory.length > 0) return this.ScrollHistory.pop();
        return 0;
    };

    this.MaxScrollHeight = () => {
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        return scrollHeight;
    };

    this.PercentageScroll = () => 
        this.GetCurrentHeight() 
        / this.MaxScrollHeight();
}
