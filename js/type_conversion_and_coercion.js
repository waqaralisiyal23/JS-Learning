// type conversion
let myVar;
myVar = 34;
console.log(myVar, (typeof myVar));

let convertNumToStr = String(myVar);
console.log(convertNumToStr, (typeof convertNumToStr));

let booleanVar = true;
console.log(booleanVar, (typeof booleanVar));

let convertBoolToStr = String(booleanVar);
console.log(convertBoolToStr, (typeof convertBoolToStr));

let date = new Date();
console.log(date, (typeof date));

let convertDateToStr = String(date);
console.log(convertDateToStr, (typeof convertDateToStr));

let arr = [1,2,3,4,5];
console.log(arr, (typeof arr));

let convertArrayToString = String(arr);
console.log(convertArrayToString, (typeof convertArrayToString));

// sab types ke sath toString() bhi use kr skte hain
let i = 8;
console.log(i.toString());


let str1 = '1234';
console.log(str1, (typeof str1));

let convertStr1toNum = Number(str1);
console.log(convertStr1toNum, (typeof convertStr1toNum));

let convertBoolToNum = Number(booleanVar);
console.log(convertBoolToNum, (typeof convertBoolToNum));


let number = '34.098';
console.log(number, (typeof number));

console.log(parseInt(number));
console.log(parseFloat(number));
console.log(45.5678765.toFixed(3));

// type coercion
let myStr = '698';
let myNum = 34;
console.log(myStr+myNum);
console.log(Number(myStr)+myNum);

