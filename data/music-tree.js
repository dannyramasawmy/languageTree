import { stringToHTMLElement } from "../src/utils/string.js"
import { AbstractNode, DataRoot } from "../src/tree/models.js"
import { setParentAndMultipleChildren } from "../src/tree/functions.js";

/**
 * Creates a div that toggles one random letter as "_" on each click.
 * @param {string} word - The word to display and partially mask.
 * @returns {HTMLDivElement}
 */
function createSingleUnderscoreWordDiv(word) {
    const div = document.createElement("div");
    div.style.fontSize = "24px";
    div.style.cursor = "pointer";
    div.style.fontFamily = "monospace";
  
    const original = word.split('');
    const current = [...original];
    let hiddenIndex = null;
  
    function updateDisplay() {
      div.textContent = current.join('');
    }
  
    div.addEventListener("click", () => {
      // Restore previously hidden letter
      if (hiddenIndex !== null) {
        current[hiddenIndex] = original[hiddenIndex];
      }
  
      // Choose a new index to hide
      const candidates = original.map((_, i) => i).filter(i => i !== hiddenIndex);
      hiddenIndex = candidates[Math.floor(Math.random() * candidates.length)];
  
      current[hiddenIndex] = "_";
      updateDisplay();
    });
  
    updateDisplay();
    return div;
  }
  

class FancyCard extends AbstractNode{
    constructor(a,b)
    {
        super(a, b)
    }

    PrimaryView =() => 
    {
        return stringToHTMLElement(this.Primary)
    }

    SecondaryView =() => 
    {
        return createSingleUnderscoreWordDiv(this.Secondary)
    }

    DataView = () => {
        return stringToHTMLElement('')
    }
}
    
export function BuildMusicTree() // returns romanian
{
    let music = new DataRoot("Music", "Music", "")
    let c = new FancyCard('C Maj', 'CEG')
    let g = new FancyCard('G Maj', 'GBD')

    setParentAndMultipleChildren(music, [
        c, g
    ]);
    
    return music
}