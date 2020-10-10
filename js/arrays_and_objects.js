// Arrays
let marks = [66, 74, 70, 82, 90, 98];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 87, [3, 5]];
const arr = new Array(23, 45, 21, 'Orange');     // Another way of creating array

console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(arr);

console.log(`Marks Array Length: ${marks.length}`);
console.log(Array.isArray('ssaij'));
console.log(Array.isArray(fruits));

marks[0] = 60;
console.log(marks);
console.log(marks[0]);
console.log(fruits[1]);
console.log(mixed[2]);
console.log(arr[3]);

let val = marks.indexOf(90);     //returns index if found else -1
console.log(val);

// Mutating or Modifying arrays
marks.push(100);      // pushes at last
marks.unshift(92);       // pushes at first
console.log(marks);

marks.pop();           // removes last element
console.log(marks);

marks.shift();           // removes first element
console.log(marks);

marks.splice(1, 2);       // 1 index se lekr 2 elements remove krdega, first argument is from where to start and second argument is how many elements to remove
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [55, 58, 80];
marks = marks.concat(marks2);
console.log(marks);

// Objects
let myObj = {
    name: 'Waqar',
    'channel name': 'Code With Waqar',           // to give space in key
    isActive: true,
    numArr: [1,2,3,4]
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj['channel name']);
console.log(myObj['isActive']);
console.log(myObj.numArr);



