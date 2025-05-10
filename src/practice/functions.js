import { RandomElementInArray } from "../utils/random.js";
import { AbstractNode, DifficultyLevel } from "../tree/models.js";
import { getDataCardFromUID } from "../search/functions.js";
import { createEyeSvg, createFastForwardSvg, SVGParameters } from "../stats/svg.js";

/**
 * 
 * @param {AbstractNode[]} data
 * @param {DifficultyLevel} diffculty - the difficulty level
 * @returns 
 */
export function createQAExplorer(data, diffculty) {

    let qaArray = []
    for (const node of data)
        qaArray.push(...node.Practice().filter(n => n.diffculty == diffculty))
    
    const container = document.createElement("div");
    
    // question panel
    const questionDiv = document.createElement("div");

    const table = document.createElement("table");
    table.className = "table table-hover table-striped table-bordered";

    // Question row
    const qhead = document.createElement("thead");
    const qheaderRow = document.createElement("tr");
    qheaderRow.className = "table-builder"
    
    const qHeader = document.createElement("th");
    qHeader.textContent = "Question";
    // qHeader.className = "text-light"
    
    qheaderRow.appendChild(qHeader);
    qhead.append(qheaderRow)
    table.appendChild(qhead)

    // Question text
    const qtbody = document.createElement("tbody");
    const qrow = document.createElement("tr");
    qrow.className = "table-builder"

    const qtd = document.createElement("td");
    const qCell = document.createElement("h3");
    qtd.append(qCell)
    qrow.appendChild(qtd);
    
    qtbody.appendChild(qrow);
    table.appendChild(qtbody);
    questionDiv.appendChild(table)

    // Answer row
    const ahead = document.createElement("thead");
    const aheaderRow = document.createElement("tr");
    aheaderRow.className = "table-builder"
    
    const aHeader = document.createElement("th");
    aHeader.textContent = "Answer";
    // aHeader.className = "text-light";
    
    aheaderRow.appendChild(aHeader);
    ahead.append(aheaderRow)
    table.appendChild(ahead)

    // Answer Text
    const atbody = document.createElement("tbody");
    const arow = document.createElement("tr");
    arow.className = "table-builder"

    const atd = document.createElement("td");
    const aCell = document.createElement("h3");
    atd.append(aCell)
    arow.appendChild(atd);
    
    atbody.appendChild(arow);
    table.appendChild(atbody);

    // add tavle to div
    questionDiv.appendChild(table)

    let pressMe = "btn me-2 btn-lg glbut"

    const eyeSvg = createEyeSvg(new SVGParameters("#e67e22", 1.5)).outerHTML
    const fastForward = createFastForwardSvg(new SVGParameters("#e67e22", 1.5)).outerHTML
    
    // button panel
    const buttonDiv = document.createElement("div");

    const revealBtn = document.createElement("button");
    revealBtn.innerHTML = eyeSvg
    revealBtn.className = pressMe;

    var buttonStateReveal = true 
    revealBtn.addEventListener("click", () => {
        if (buttonStateReveal)
        {
            aCell.className = ""
            buttonStateReveal = false
            revealBtn.innerHTML =  fastForward;
            return
        }

        if (!buttonStateReveal)
        {
            loadQuestionAndAnswer()
        }
    });

    function loadQuestionAndAnswer() {
        const random = RandomElementInArray(qaArray)
        
        // load q and a
        qCell.textContent = random.question;
        aCell.textContent = random.answer;
        aCell.className = "blurred-text"
        
        // swap colours
        revealBtn.className = pressMe
        
        // increment card as its been seen
        const card = getDataCardFromUID(data, random.uid)
        card.IncrementView()
        revealBtn.innerHTML = eyeSvg
        buttonStateReveal = true
    }

    buttonDiv.appendChild(revealBtn);
    container.append(table)
    container.appendChild(buttonDiv)

    // Load first item
    loadQuestionAndAnswer();

    return container
}
