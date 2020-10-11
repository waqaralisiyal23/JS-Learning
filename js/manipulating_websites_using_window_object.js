// let a = window;    // window is a global object we can use its methods and properties directly
// window.alert('Hello Waqar');
// alert('How are you?');          // we can call it directly without using window object because it is global

// let x = prompt("This will destroy your name.. Type your name: ");
// console.log(x);

// let y = confirm("Are you sure you want to delete this page");    // returns true if ok pressed and false if cancel pressed
// console.log(y);

// document object contains all the things like head body etc and it is called DOM

// let var1 = window.innerWidth;
// let var2 = window.innerHeight;
let var1 = innerWidth;         // same as above two lines
let var2 = innerHeight;
console.log(var1, var2);

// let var3 = window.screenX;
// let var4 = window.scrollY;
let var3 = scrollX;         // same as above two lines
let var4 = scrollY;
console.log(var3, var4);

// let var5 = window.location;
let var5 = location.toString();
console.log(var5);

// let var = window.history;
let var6 = history;
console.log(var6);