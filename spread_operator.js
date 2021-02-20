// Example code - spread operator
// Written on 2019-07-17

// concatenate two arrays
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let concat = [...arr1, ...arr2]
console.log(concat)

// pass an array of values to a function
function dev(x, y, z) {
    return x + y + z
}
var args = [2, 4, 6]
console.log(dev(...args))