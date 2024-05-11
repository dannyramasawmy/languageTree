export const RandomRange = (start, end) =>
    (Math.random() * (end - start)) + start;

export const RandomIntRange = (start, end) => 
    Math.floor(RandomRange(start, end + 1)); 

export const RandomElementInArray = (arr) =>
    arr[RandomIntRange(0, arr.length - 1)];

