// Creating a Element
let liElement = document.createElement('li');
liElement.className = 'childul';         // Adding a class name to the li element
liElement.id = 'createdLi';
liElement.setAttribute('title', 'mytitle');
liElement.innerText = 'Created in JS';
// Another way of adding text
// let textNode = document.createTextNode('Created in JS and appended using DOM');
// liElement.appendChild(textNode);
console.log(liElement);

let ul = document.querySelector('ul.this');        // Gets the first ul with class name 'this'
ul.appendChild(liElement);

// Replacing a Element
let h3Element = document.createElement('h3');
h3Element.id = 'createdH3';
h3Element.className = 'h3heading';
let textNode = document.createTextNode('This is created in JS');
h3Element.appendChild(textNode);
// Another way
// h3Element.innerText = 'This is created in JS';

let child2 = document.getElementById('secondChild');
child2.replaceWith(h3Element);

let myul = document.getElementById('myul');
myul.replaceChild(liElement, document.getElementById('li3'));

// Set, Get, check and remove attributes in a element
let h3ElementId = h3Element.getAttribute('id');
let h3ElementClass = h3Element.getAttribute('class');
console.log(h3ElementId);
console.log(h3ElementClass);
console.log(h3Element.hasAttribute('class'));
console.log(h3Element.hasAttribute('href'));
h3Element.removeAttribute('class');
h3Element.setAttribute('title', 'h3 element title');
console.log(h3Element);

// Removing a Element
myul.removeChild(document.getElementById('li5'));
let child4 = document.getElementById('fourthChild');
child4.remove();