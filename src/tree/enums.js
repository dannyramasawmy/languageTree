/**
 * Represents the level of a node in the tree.
 * @readonly
 * @enum {number}
 */
export const TreeDepth = {
    /** The root node (top level) */
    ROOT: 0,
    /** A branching node (has children) */
    BRANCH: 1,
    /** A leaf node (no children) */
    LEAF: 2
};
