function swap(input, counter, inner_counter) {
    const temp = input[counter]
    input[counter] = input[inner_counter]
    input[inner_counter] = temp
}

function sorting(input) {
    const inputCount = input.length
    for (let counter = 0; counter < inputCount; counter++) {
        
        for (let inner_counter = (counter+1); inner_counter < inputCount; inner_counter++) {
            if(input[counter] > input[inner_counter]) swap(input, counter, inner_counter)
        }
    }
}

function binary_search(input, search) {
    sorting(input)
    let searching = true;

    while(searching) {
        middleIndex = Math.ceil(input.length/2)
        if(input[middleIndex] === search) searching = false
        else if(input[middleIndex] > search) input = input.slice(0, middleIndex)
        else input = input.slice(-middleIndex)
        console.log(middleIndex, input)
    }
    return middleIndex
}

const input = [10, 20, 80, 30, 60, 50, 
    110, 100, 130, 170, 40]
    
const search = 100;
const count = input.length;

//Call Linear Search
const result = binary_search(input, search, count)

if(result) console.log(`Result is found at index ${result}`) 
else console.log(`Result is not there in the input`)