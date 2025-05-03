import { AbstractNode } from "../src/tree/models.js";

export const MakeCopyable = (text) => 
    `
    <copy class="copyable" onclick="navigator.clipboard.writeText('${text}')">
        ○ ${text} <br>
    </copy>`;
    
export function NounTemplateFemale(singluar, plural, definiteArticle, definitePlural) {
    return (`
        o ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `);
}

export function NounTemplateMale(singluar, plural, definiteArticle, definitePlural) {
    return (`
        Un ${singluar} <br>
        doi ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `);
}

export class NounDataCard extends AbstractNode {
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

export function NounTemplateNeuter(singluar, plural, definiteArticle, definitePlural) {
    return (`
        un ${singluar} <br>
        două ${plural} <br>
        ${definiteArticle} <br>
        ${definitePlural} <br>
    `);
}

