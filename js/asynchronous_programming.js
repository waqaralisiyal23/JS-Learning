/*
An asynchronous model allows multiple things to happen at the same time
In a synchronous programming model, things happen one at a time
Few ways to write asynchronous code in javascript:
-> async/await
-> Callbacks
-> promises
*/

setTimeout(() => {
    for (let index = 0; index < 4000; index++) {
        console.log(`The index number is ${index}`);
    }
}, 100);

console.log('Done Printing');
