// Example code - lots of small examples
// Written on 2019-07-17

const array = [1, 5, 6, 7, 8, 12, 15];
const newArr1 = array.filter((num) => num % 2 === 0);
//newArr1 = [6, 8, 12]
console.log(newArr1);

const newArr2 = array.map((num) => num * 10);
//newArr2 = [10, 50, 60, 70, 80, 120, 150]
console.log(newArr2);

const newArr3 = array.filter((num) => num % 2 === 0).map((num) => num * 10);
//newArr3 = [60, 80, 120]
console.log(newArr3);

//----------//

const arr = ["pepper", "carrot", "onion"];

const [veggieA, veggieB, veggieC] = arr;
console.log(veggieA); //"pepper"
console.log(veggieB); //"carrot"
console.log(veggieC); //"onion"

const book = { title: "The Hobbit", author: "JRR Tolkien", year: 1937 };
const { title : bookTitle , author : bookAuthor, year: bookYear } = book;
console.log(bookTitle);
console.log(bookAuthor);
console.log(bookYear);

let a, b;
[a, b] = ["carrot", "onion"];
console.log(a);
console.log(b);

let c = 1;
let d = 2;
[c, d] = [d, c];
console.log(c); //2
console.log(d); //1

//----------//

let ourArr = [1, 2, 3, 4, 5, 6, 7, 8] //An array with 8 elements
let splicedStuff = ourArr.splice(3, 3) //We remove 3 elements starting from index 3
console.log(ourArr) //1,2,3,7,8
console.log(splicedStuff) //4,5,6

let ourArr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let splicedStuff2 = ourArr2.splice(3, 3, 'four', 'five') //This time, we replace two of the three elements we remove
console.log(ourArr2) //1,2,3,four,five,7,8
console.log(splicedStuff2) //4,5,6

let ourArr3 = [1, 2, 3, 4, 5, 6, 7, 8]; //Let's start with the same array, 'cause why not?
let slicedStuff3 = ourArr3.slice(3, 6) //We take elements from indexes 3-5
console.log(ourArr3) //1,2,3,4,5,6,7,8 original array untouched
console.log(slicedStuff3) //4,5,6
