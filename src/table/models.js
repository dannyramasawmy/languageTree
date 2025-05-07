export class TableBuilder
{
    /**
     * 
     * @param {string[]} headers 
     */
    constructor(headers)
    {
        this.Headers = headers

        /** @type {number} */
        this.NumberOfHeaders = this.Headers.length
        
        /** @type {string[][]} */
        this.Rows = []
    }

    /**
     * 
     * @param {string[]} row 
     * @returns {TableBuilder} - returns a reference to itself
     */
    WithRow = (row) => {
        if (row.length == this.NumberOfHeaders)
        {
            this.Rows.push(row)
            return this
        }

        console.error(`Row '${row}' is length ${row.length} and should be ${this.NumberOfHeaders}`)
        return this
    }

    /**
     * 
     * @param {string} id 
     * @returns {HTMLElement} - returns a reference to itself
     */
    BuildHTML = (id="") => {
        const table = document.createElement("table");
        if (id?.length > 0)
            table.id = id

        table.className = "table table-light table-hover table-striped table-bordered";

        // Create the table header
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        this.Headers.forEach(h => {
            const th = document.createElement("th");
            th.textContent = h;
            th.className = "table-builder"
            headerRow.appendChild(th);
            }
        )

        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create the table body
        const tbody = document.createElement("tbody");

        this.Rows.forEach(r => {
            const row = document.createElement("tr");

            r.forEach( value => {
                const rowValue = document.createElement("td");
                rowValue.textContent = value    
                rowValue.className = "table-builder"
                row.appendChild(rowValue);
            })

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        return table;   
    }
}