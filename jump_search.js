
function linear_search(index) {
    let loop_counter = index - jump;
    for (let counter = loop_counter; counter < index; counter++) {
        if(input[counter] == search) return counter
    }

}

function jump_search() {
    let searching = true;
    let counter = 0;
    while(searching) {
        if(!counter && input[counter] == search) searching = false;
        else if(input[counter] == search) searching = false;
        if(input[counter] > search) {
            counter = linear_search(counter)
            searching = false;
        }
        if(searching) counter = counter + jump;
    }
    return counter;
}

const input = [0,1,1,3,4,10,18,19,20,26,31,56,59,71,75,78,80]
    
const search = 56;
const jump = Math.floor(Math.sqrt(input.length));
const count = input.length;

//Call Linear Search
const result = jump_search()

if(result) console.log(`Result is found at index ${result}`) 
else console.log(`Result is not there in the input`)