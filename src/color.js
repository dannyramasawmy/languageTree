export function RainbowColorWheel() {
    // https://htmlcolorcodes.com/
    // red -> purple -> blue -> green -> yellow -> orange
    this.Index = 0;
    this.ParentColor = "#ECF0F1";
    this.TextColor = "#ECF0F1";
    this.Colors = [
        "#C0392BDF", // r
        "#E74C3CDF", // r
        "#9B59B6DF", // p
        "#8E44ADDF", // p
        "#2980B9DF", // b
        "#3498DBDF", // b
        "#1ABC9CDF", // t
        "#16A085DF", // t
        "#27AE60DF", // g
        "#2ECC71DF", // g
        "#F1C40FDF", // y
        "#F39C12DF", // y
        "#E67E22DF", // o
        "#D35400DF"
    ]; //o

    this.ResetIndex = () => this.Index = 5;

    this.GetNextColorIndex = () => {
        this.Index = (this.Index + 1) % this.Colors.length;
        return this.Index;
    };

    this.GetNextColor = () => {
        this.GetNextColorIndex();
        return this.Colors[this.Index];
    };
}
