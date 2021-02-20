// Example code - closures
// Written on 2019-07-17

// global variable is changed
let name1 = "Charles";
function getMyName1() {
    console.log("[getMyName1] Name is " + name1);
}
name1 = "Jeffrey";
getMyName1();

//----------

// parent variable is not changed
function getMyName2() {
    let name2 = "Charles";
    return function() {
        console.log("[getMyName2] Name is " + name2);
    }
}
 let name2 = "Jeffrey";
 let myname = getMyName2();
 myname();

//----------

// shows the difference between a global variable and a closure variable
let globalName = "Main";
function getData() {
    let closureName = "Sample";
    function innerFunction() {
        console.log("Closure name is " + closureName + ", Global name is " + globalName);
    }
    innerFunction();
}
getData();

//----------

let userClosure = require('./user_closure');
let closureResult = userClosure();
closureResult.getFirstName();
closureResult.showFullName();