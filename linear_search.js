function linear_search(input, search) {
    for(let counter = 0; counter < input.length; counter++) {
        if(input[counter] === search) return counter

    }
    return -1
}

const input = [10, 20, 80, 30, 60, 50, 
    110, 100, 130, 170]
    
const search = 170;

//Call Linear Search
const result = linear_search(input, search)

if(result) console.log(`Result is found at index ${result}`) 
else console.log(`Result is not there in the input`)