export class ColorWheel {
    constructor(startingIndex, parentColor, textColor, colorList) {
        // https://htmlcolorcodes.com/
        // red -> purple -> blue -> green -> yellow -> orange
        this.Index = startingIndex;
        this.ParentColor = parentColor;
        this.TextColor = textColor;
        this.Colors = colorList
        
        this.GetNextColorIndex = () => {
            this.Index = (this.Index + 1) % this.Colors.length;
            return this.Index;
        };
        
        this.GetNextColor = () => {
            this.GetNextColorIndex();
            return this.Colors[this.Index];
        };
    }
}
