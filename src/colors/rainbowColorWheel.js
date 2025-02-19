import { ColorWheel } from "./colorWheel.js";

export function RainbowColorWheel() {
    return new ColorWheel(
        5, 
        "#ECF0F1", 
        "#ECF0F1",
        [
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
        ]); 
    }
