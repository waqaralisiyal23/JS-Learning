let mathObj = Math;
console.log(mathObj)

console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(5.6));             // rounds using rounding rules
console.log(Math.ceil(5.3));              // always removes the point and adds 1
console.log(Math.floor(5.3));              // always removes the point
console.log(Math.abs(-6));                 // makes the number positive if it is negativie and if it positive the it remains positive
console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));
console.log(Math.max(3,6,1,8,45,76,3,7));             // returns maximum number
console.log(Math.min(3,6,1,8,45,76,3,7));             // returns minimum number
console.log(Math.random());                           // returns random number between 0 to 1 in points
console.log(100 * Math.random());                           // returns random number between 0 to 100 in points
console.log(10 + (100-10) * Math.random());                           // returns random number between 10 to 100 in points
console.log( Math.floor( 10 + (100-10) * Math.random() ) );                           // returns random number between 10 to 100 but removes point