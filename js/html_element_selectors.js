/*
Element Selectors
1) Single Element Selector
2) Multi Element Selector
*/

// Single Element Selector
let element = document.getElementById('firstChild');
element.style.color = 'red';
console.log(element);
console.log(element.className);
console.log(element.childNodes);
console.log(element.parentNode);

element.innerHTML = '<b> Waqar is a Good Boy <b>';
console.log(element.innerHTML);

let element2 = document.getElementById('secondChild');
element2.style.color = 'green';
console.log(element2);

element2.innerText = 'Mobile App Developer';
console.log(element2.innerText);

let sel = document.querySelector('#thirdChild');           // # for id
console.log(sel);
sel = document.querySelector('.child');                  // . for class - selects the first one which has class child
console.log(sel);
sel = document.querySelector('div');                  // . for tags we can write direct tag name and selects the first tag
console.log(sel);

// Multi Element Selector
let elements = document.getElementsByClassName('child');
console.log(elements);
console.log(elements[0]);
console.log(elements[2]);
Array.from(elements).forEach(function(element){
    element.style.color = 'blue';
    console.log(element.innerText);
});
// Another way
// for (let index = 0; index < elements.length; index++) { 
//     const elem = elements[index];
//     elem.style.color = 'blue';
//     console.log(elem.innerText);
// }

let elements2 = document.getElementsByTagName('div');
console.log(elements2);