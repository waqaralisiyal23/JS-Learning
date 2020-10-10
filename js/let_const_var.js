// Varibales in JS
// var, let, const

var name = 'Waqar Ali Siyal';
var channel;
var marks = 34;
channel = 'Code With Waqar';
console.log(name, channel, marks);

/* Rules for creating js variables
 1. Cannot start with numbers
 2. Can start with letters, _ or $
 3. Are case sensitive
 */

var $city = 'Karachi';
var _price = 8.8;
console.log($city, _price);

// We cannot change the value of const variable once assigned and have to intialize it while creation
const PI = 3.14;    
console.log(PI);

// var ka global scope huta hai or let ka block mn scope huta hai
{
    let name = 'Waqar';  //local variable
    console.log(name);
    name = 'Waqar Ali';  //local variable changes
    console.log(name);
}
console.log(name);

// const for array, we can perform operations on const arrays but cannot reinitialize them
const arr1 = [2,4,6,8];
arr1.push(10);
console.log(arr1);

/* Most Common Programming Case Types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/
