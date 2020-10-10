/* Data Types in JS
1. Primitive data type   --> Memory Allocation in Stack
    i) String       --> 'Waqar'
    ii) Numbers     --> 34
    iii) Boolean    --> true, false
    iv) Null
    v) Undefined    --> var name;   default value in it is undefined
    vi) Symbol      --> introduced in ES6
2. Reference data type   --> Memory Allocation in Heap
    i) Arrays
    ii) Object literals
    iii) functions
    iv) Dates
*/

// Primitive Data Types
// String
let name = 'Waqar Ali Siyal';
console.log('My String is: ' + name);
console.log('Data type is: ' + (typeof name));

// Numbers
let marks = 34;
console.log('My Number is: ' + marks);
console.log('Data type is: ' + (typeof marks));

// Boolean
let isDriver = true;
console.log('My Boolean is: ' + isDriver);
console.log('Data type is: ' + (typeof isDriver));

// Null
let nullVar = null;
console.log('Data type is: ' + (typeof nullVar));

// Null
let undef = undefined;
console.log('Data type is: ' + (typeof undefined));

// Reference Data types
// Arrays
let myarr = [1,2,3,4,5,6,false, 'string'];
console.log('Data types is: ' + (typeof myarr));

// Object literals
let stMarks = {
    waqar: 89,
    usama: 82,
    imtiaz: 78,
    uzair: 88
}
console.log(typeof stMarks);

// functions
function findName() {
    
}
console.log(typeof findName);

// dates
let date = new Date();
console.log(typeof date);
