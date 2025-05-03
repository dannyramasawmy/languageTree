/**
 * Get a random floating-point number within the given range (inclusive)
 * @param {number} start - the start of the range
 * @param {number} end - the end of the range
 * @returns a random number within the given range
 */
export const RandomRange = (start, end) =>
    (Math.random() * (end - start)) + start;

/**
 * Get a random integer number within the given range (inclusive)
 * @param {number} start - the start of the range
 * @param {number} end - the end of the range
 * @returns a random integer number within the given range
 */
export const RandomIntRange = (start, end) => 
    Math.floor(RandomRange(start, end + 1)); 

/**
 * Returns a random element from an array.
 *
 * @template T
 * @param {T[]} arr - An array of any type
 * @returns {T} - A value from the same type as the array elements
 */
export const RandomElementInArray = (arr) =>
    arr[RandomIntRange(0, arr.length - 1)];

