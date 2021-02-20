// Example code - a closure using a parent variable
// Written on 2019-07-17

// The function doIncrement contains a parent variable and returns a function that uses that variable
function doIncrement(){
    let counter = 5;
    return function(){
        counter ++;
        return counter;
    }
}

let increment = doIncrement();
console.log(increment());
console.log(increment());
console.log(increment());
