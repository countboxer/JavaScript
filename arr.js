// Example code - for..of and for..in
// Written on 2019-07-17

// for..of using an array; returns the value
let arr = [2, 4, 6];
for (item of arr) {
    console.log(item);
}

// for..in using an array; returns the index
for (idx in arr) {
    console.log("Index ", idx, " has a value of ", arr[idx]);
}

// for..in using an object; returns the key
let obj = { a: 1, b: 2, c: 3 };
for (item in obj) {
    console.log("key = ", item, ", value = ", obj[item]);
}
