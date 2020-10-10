const name = 'Waqar Ali Siyal';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let str = 'String';
str = str.concat(' Concatenation');
console.log(str);


console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str[0]);
console.log(str[3]);
console.log(str.charAt(0));
console.log(str.charAt(3));
console.log(str.indexOf('n'));   //returns index if found else returns -1
console.log(str.lastIndexOf('n'));
console.log(str.endsWith('tion'));
console.log(str.includes('ing'));
console.log(str.substring(2, 6));    // 2 index se 5 tk string return hugi
console.log(str.slice(0, 4));
console.log(str.slice(-4));        //returns last four elements

let arr = str.split(' ');
console.log(arr[0]);
console.log(arr[1]);

console.log(str.replace('Concatenation', 'Replaced'));

// template literals
let myStr = `Hello ${name}`;
console.log(myStr);

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
    <h1> This is Heading </h1>
    <p> You like ${fruit1} and ${fruit2}</p>
`;
document.body.innerHTML = myHtml;