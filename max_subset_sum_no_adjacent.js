// Write a function that takes in an array of positive integers and returns the
// maximum sum of non-adjacent elements in the array.

const maxSubsetSumNoAdjacent = (array) => {
    const arrayLength = array.length;
    if(!arrayLength) return 0;
    if(arrayLength === 1) return array[arrayLength-1];
    const newArray = new Array(arrayLength);
    for(let counter = 0; counter < arrayLength; counter++) newArray[counter] = new Array(2);
    newArray[0][0] = 0;
    newArray[0][1] = array[0];
    for(let counter = 1; counter < arrayLength; counter++) {
        newArray[counter][0] = Math.max(newArray[counter-1][0], newArray[counter-1][1])
        newArray[counter][1] = newArray[counter-1][0] + array[counter];
    }
    return Math.max(newArray[arrayLength - 1][0], newArray[arrayLength - 1][1]);
}

//Function Call
const result = maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])
console.log(result)