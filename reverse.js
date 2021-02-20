// Example code - Four different ways to reverse a string
//		one line, for loop, Array.reduce(), recursion
// Written on 2019-07-17

// Solution 1: Using array reverse() method
const x = 'test string to be reversed';

function reverseString_1_1(string) {
	//convert the string to an array
	let array = string.split("");

	//Use the reverse method
	array.reverse()

	//Convert it back to a string and return
	return array.join("")
}

// One line
const reverseString_1_2 = (string) => string.split("").reverse().join('');

console.log("Solution 1-1: " + reverseString_1_1(x));
console.log("Solution 1-2: " + reverseString_1_2(x));

// Solution 2: Good Ol' For-loop
function reverseString_2_1(str) {
	let reverseString = "";

	for (let character of str) {
		reverseString = character + reverseString;
	}

	return reverseString
}
console.log("Solution 2-1: " + reverseString_2_1('123456'));

// Solution 3: Using the Array.reduce() method
function reverseString_3_1(string) {
	//convert the string to an array
	const array = string.split('');

	//use the reduce method to convert the array to a reversed string
	const reversedString = array.reduce((reversed, character) => {
		return character + reversed
	}, '')

	return reversedString
}

// This function above can further be reduced to :
const reverseString_3_2 = (string) => {
	return string.split('').reduce((reversed, character) => character + reversed, '')
}

// Making it a one-liner and shortening the name of the variables used in the reduce method.
const reverseString_3_3 = (string) => string.split('').reduce((rev, char) => char + rev, '')

console.log("Solution 3-1: " + reverseString_3_1('hello world'));
console.log("Solution 3-2: " + reverseString_3_2('hello world'));
console.log("Solution 3-3: " + reverseString_3_3('hello world'));


// Solution 4: Using recursion
function reverseString_4_1(string){
	//base case: if str is empty return str
	if(string === ""){
		return string
	} else{
		return reverseString_4_1(string.substring(1)) + string[0]
	}
}

//We can use a ternary operator instead of if-else statements.
function reverseString_4_2(string){
	return string ? reverseString_4_2(string.substring(1)) + string[0] : string
}

console.log("Solution 4-1: " + reverseString_4_1('test string #1'));
console.log("Solution 4-2: " + reverseString_4_2('test string #2'));