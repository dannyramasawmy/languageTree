import { RandomElementInArray } from "../utils/random.js";
import { AbstractNode, DifficultyLevel } from "../tree/models.js";
import { getDataCardFromUID } from "../search/functions.js";
import { createDelatSvg, createEyeSvg, createFastForwardSvg, createMortarBoardSvg, SVGParameters } from "../stats/svg.js";


/**
 * A collapsible practice element
 * @param {AbstractNode[]} data - data to practice
 * @returns {HTMLElement} - HTML element to display
 */
export function collapsiblePractice(data) {
    // Create a container to hold both button and collapsible content
        const container = document.createElement("div");

        // Create the button
        const toggleBtn = document.createElement("button");
        let pressMe = "btn me-2 btn-lg glbut"
        toggleBtn.className = pressMe;
        // toggleBtn.textContent = "Toggle Content";
        toggleBtn.innerHTML = createMortarBoardSvg(SVGParameters.OrangeButton()).outerHTML
        var isCollapsed = true

        // Create the collapsible content
        const collapseDiv = document.createElement("div");
        collapseDiv.className = "collapse mt-2";

        // Bootstrap card inside collapse
        const card = document.createElement("div");
        card.className = "card card-body";

        let explorer = createQAExplorer(data)
        // card.textContent = "This is the collapsible content!";
        card.appendChild(explorer)
        collapseDiv.appendChild(card);

        // Append elements to the container
        container.appendChild(toggleBtn);
        container.appendChild(collapseDiv);

        // Add event listener for toggling
        toggleBtn.addEventListener("click", () => {
            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseDiv);
            bsCollapse.toggle();
            isCollapsed = !isCollapsed

            toggleBtn.innerHTML = (isCollapsed 
                ? createMortarBoardSvg(SVGParameters.OrangeButton())
                : createDelatSvg(SVGParameters.Default()))
                .outerHTML
        });

        return container;
}


/**
 * A practice mode
 * @param {AbstractNode[]} data - data to practice
 * @returns {HTMLElement} - HTML element to display
 */
export function createQAExplorer(data) {

    let qaArray = []
    for (const node of data)
        qaArray.push(...node.Practice().filter(r => r.answer != "")) // ignore empty answers


    var difficultFilter = DifficultyLevel.Easy

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
    qHeader.className = "d-flex justify-content-between"

    let t = document.createElement('span')
    t.textContent = "Question"
    qHeader.appendChild(t)

    let easy = document.createElement('span')
    easy.className = 'text-success-emphasis difficulty'
    easy.textContent = `${difficultFilter}`

    const nextDifficultyLevel = () => {

        switch (difficultFilter) {
            case DifficultyLevel.Easy:
                difficultFilter = DifficultyLevel.Medium
                easy.className = 'text-warning-emphasis difficulty'
                easy.textContent = `${difficultFilter} `
                break;
                
                case DifficultyLevel.Medium:
                difficultFilter = DifficultyLevel.Hard
                easy.className = 'text-danger-emphasis difficulty'
                easy.textContent = `${difficultFilter}`
                break;

            case DifficultyLevel.Hard:
                difficultFilter = DifficultyLevel.Easy
                easy.className = 'text-success-emphasis difficulty'
                easy.textContent = `${difficultFilter}`
                break;
        }
    }

    easy.addEventListener('click', nextDifficultyLevel)

    qHeader.appendChild(easy)


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

    const eyeSvg = createEyeSvg(SVGParameters.OrangeButton()).outerHTML
    const fastForward = createFastForwardSvg(SVGParameters.OrangeButton()).outerHTML

    // button panel
    const buttonDiv = document.createElement("div");

    const revealBtn = document.createElement("button");
    revealBtn.innerHTML = eyeSvg
    revealBtn.className = pressMe;

    var buttonStateReveal = true
    revealBtn.addEventListener("click", () => {
        if (buttonStateReveal) {
            aCell.className = ""
            buttonStateReveal = false
            revealBtn.innerHTML = fastForward;
            return
        }

        if (!buttonStateReveal) {
            loadQuestionAndAnswer()
        }
    });

    function loadQuestionAndAnswer() {
        
        var filteredData = qaArray.filter(x => x.diffculty == difficultFilter)
        if (filteredData.length == 0)
        {
            filteredData = qaArray
        }

        const random = RandomElementInArray(filteredData)

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
