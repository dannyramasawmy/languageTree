import { RandomElementInArray } from "../utils/random.js";
import { AbstractNode, Question } from "../tree/models.js";
import { getDataCardFromUID } from "../search/functions.js";

/**
 * 
 * @param {AbstractNode[]} data
 * @returns 
 */
export function createQAExplorer(data) {

    let qaArray = []
    for (const node of data)
        qaArray.push(...node.Practice())
    
    const container = document.createElement("div");
    
    // question panel
    const questionDiv = document.createElement("div");

    const table = document.createElement("table");
    table.className = "table table-light table-hover table-striped table-bordered";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.className = "table-builder"

    const qHeader = document.createElement("th");
    qHeader.textContent = "Question";
    qHeader.style.width = "50%";
    const aHeader = document.createElement("th");
    aHeader.textContent = "Answer";
    aHeader.style.width = "50%";

    headerRow.appendChild(qHeader);
    headerRow.appendChild(aHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const row = document.createElement("tr");
    row.className = "table-builder"

    const qCell = document.createElement("td");
    const aCell = document.createElement("td");
    
    row.appendChild(qCell);
    row.appendChild(aCell);
    tbody.appendChild(row);
    table.appendChild(tbody);
    questionDiv.appendChild(table)

    let pressMe = "btn btn-warning me-2"
    let ignoreMe = "btn btn-outline-warning me-2"
    
    // button panel
    const buttonDiv = document.createElement("div");

    const revealBtn = document.createElement("button");
    revealBtn.textContent = "Reveal";
    revealBtn.className = pressMe;

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.className = ignoreMe;

    revealBtn.addEventListener("click", () => {
        revealBtn.className = ignoreMe
        nextBtn.className = pressMe

        aCell.className = ""
    });

    function loadQuestionAndAnswer() {
        const random = RandomElementInArray(qaArray)
        
        // load q and a
        qCell.textContent = random.question;
        aCell.textContent = random.answer;
        aCell.className = "blurred-text"
        
        // swap colours
        revealBtn.className = pressMe
        nextBtn.className = ignoreMe
        
        // increment card as its been seen
        const card = getDataCardFromUID(data, random.uid)
        card.IncrementView()
    }

    nextBtn.addEventListener("click", loadQuestionAndAnswer);

    // Append to container
    // container.appendChild(table);
    buttonDiv.appendChild(revealBtn);
    buttonDiv.appendChild(nextBtn);

    container.append(table)
    container.appendChild(buttonDiv)

    // Load first item
    loadQuestionAndAnswer();

    return container
}
