// window.localStorage - but window is global object so we can use directly localStorage

// Data is stored in key value pairs in local storage
// Set the items to storage
localStorage.setItem('name', 'Waqar Ali Siyal');
localStorage.setItem('age', 20);

// Get the items from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name);
console.log(age);

// Clear a particular key
localStorage.removeItem('age');
console.log(localStorage.getItem('age'));          // now it will print null because there is now key with name 'age'.

// We cannot store array in localStorage, so we will store array using json
let fruits = ['Apple', 'Banana', 'Orange'];
localStorage.setItem('fruits', JSON.stringify(fruits));
let retreiveFruits = JSON.parse(localStorage.getItem('fruits'));
console.log(retreiveFruits);

// localStorage.clear();    - clears the entire local storage

// Session Storage
sessionStorage.setItem('sessionName', 'Waqar Ali Siyal');
sessionStorage.setItem('sessionAge', 20);
sessionStorage.setItem('sessionFruits', JSON.stringify(fruits));

// Local and Session storage are same just difference is that after closing browser or when session
// ends all data cleans up and session storage becomes empty