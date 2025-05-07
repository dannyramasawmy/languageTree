import { AbstractNode } from "../tree/models.js";
import { TableRow } from "./models.js";

/**
 * Transform data structure from AbstractNode -> TableRow
 * @param {AbstractNode} node - a node to convert into a table row
 * @returns {TableRow} - a row element for the table
 */
export function abstractNodeToTableRow(node)
{
    return new TableRow(
        node.Primary, 
        node.Secondary, 
        node.GetViews()
    )
}