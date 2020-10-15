let today = new Date();
console.log(today);
console.log(typeof(today));

let otherDate = new Date('8-4-2003 04:54:08');        // m-d-yyyy
console.log(otherDate);
otherDate = new Date('June 13 1976');
console.log(otherDate);
otherDate = new Date('02/23/2000');                  // mm/dd/yyyy
console.log(otherDate);
otherDate.setDate(16);
otherDate.setMonth(4);
otherDate.setFullYear(1996);
otherDate.setHours(18);
otherDate.setMinutes(23);
otherDate.setSeconds(8);
console.log(otherDate);

console.log(today.getDay());                 // 0 - sunday, 1 - monday, 2 - tuesday, .....
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getDate());
console.log(today.getTime());                // returns timestamp
console.log(today.getMilliseconds());
console.log(today.getMonth());
console.log(today.getFullYear());