// Example code - callback, promise, async/await
// Written on 2019-07-17

// callback
const functionWithACallback = (callback) => {
    //do some work then call the callback once done
    console.log('You called this function!');
    setTimeout(() => {
        callback('I am done');
    }, 1000)
};

const myCallbackFunction = () => {
    // the function we want to call when the work is done
    const myCallback = console.log
    // this will call myCallback once it is finished
    functionWithACallback(myCallback);
};

myCallbackFunction();

//----------//

// promises
const getPromise1 = () => Promise.resolve('My return value');

const myPromisesFunction = () => {
    getPromise1()
    .then(val => {
        console.log(val); // prints 'My return value'
    }) // If there is an error in any of the above promises, catch it here
    .catch(error => {
        console.error(error.message);
    });
}

myPromisesFunction();

//----------//

// async/await
const getPromise2 = () => Promise.resolve('My return value');
// the function is marked with the async keyword
const myAsyncFunction = async () => {
    // tell the interpreter we want to wait on the response
    try {
        const val = await getPromise2();
        // execute when the promise above is resolved
        console.log(val); // prints 'My return value'
    } catch (error) {
        console.error(error.message);
    }
}

myAsyncFunction();