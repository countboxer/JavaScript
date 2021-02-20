// Example code - map, filter, reduce
// Written on 2019-07-17

// map -> takes each item in the array and alters it; returns a new array
let animals = ['Lion', 'Tiger', 'Black Bear', 'Armadillo', 'Kangaroo'];
let animalsWithS = animals.map(item => item + 's');
console.log(animalsWithS);

// filter -> returns an array of all of the items that meet the condition
// passed to the callback function
let filteredAnimals = animals.filter(ani => ani == 'Lion');
console.log(filteredAnimals);

let intArray = [1, 2, 3, 4, 5, 6];
intArray = intArray.filter(number => number % 2 == 0);
console.log(intArray);

// reduce -> takes an array and returns one value from whatever computation
// has been done on it
let numbers = [1, 3, 5, 7, 9];
let total = numbers.reduce((prevVal, curVal, index, array) => {
    return prevVal + curVal;
});
console.log(total);
