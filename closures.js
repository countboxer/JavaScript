// A closure is a stateful function that is returned by another function. It
// acts as a container to remember variables and parameters from its parent
// scope even if the parent function has finished executing.

// closure is a function that has access to the scope that encloses that function.

// original
function sayHello() {
    const greeting = "Hello original World";

    return function() { // anonymous function
        console.log(greeting)
    }
}

// #1
function sayHello1() {
    const greeting = "Hello #1 World";

    return function hello() { // named function
        console.log(greeting)
    }
}

// #2
function sayHello2() {
    const greeting = "Hello #2 World";

    function hello() { // named function
        console.log(greeting)
    }

    return hello; // return inner function on a different line
}

// #3
function sayHello3() {
    const greeting = "Hello #3 World";
    const hello = () => { // arrow function
        console.log(greeting)
    }

    return hello;
}

const hello = sayHello();
hello();
const hello1 = sayHello1();
hello1();
const hello2 = sayHello2();
hello2();
const hello3 = sayHello3();
hello3();

//----------//
function counter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
//console.log(count) // Reference error: count is not defined

const incrementBananaCount = counter();
const incrementAppleCount = counter();
console.log(incrementBananaCount()); // 1
console.log(incrementBananaCount()); // 2
console.log(incrementAppleCount()); // 1

//----------//
let Dog1 = (function() {
    let name = "Suzy";

    const getName = () => {
        return name;
    }

    const changeName = (newName) => {
        name = newName;
    }

    return {
        getName: getName,
        changeName: changeName
    }
}())

//console.log(name); // undefined
console.log(Dog1.getName()) // Suzy
Dog1.changeName("Pink")
console.log(Dog1.getName()) // Pink

//----------//

for(var i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i)
    }, 1000)
}

for(var i=0; i<5; i++) {
    setTimeout((function(index) {
        return function() {
            console.log(index);
        }
    }(i)), 2000)
}
