import { AbstractNode } from "../tree/models.js";
import { StatsTableRow } from "./models.js";

/**
 * Transform data structure from AbstractNode -> TableRow
 * @param {AbstractNode} node - a node to convert into a table row
 * @returns {StatsTableRow} - a row element for the table
 */
export function abstractNodeToTableRow(node)
{
    return new StatsTableRow(
        node.Primary, 
        node.Secondary, 
        node.GetViews()
    )
}