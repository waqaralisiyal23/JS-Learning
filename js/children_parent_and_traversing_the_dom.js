let firstContainer = document.querySelector('.container');
console.log(firstContainer.childNodes);          // includes text, new lines, comments and everything
console.log(firstContainer.children);            // includes only elements

let nodeName = firstContainer.childNodes[0].nodeName;      // Gets the name of first child node
let nodeType = firstContainer.childNodes[0].nodeType;
console.log(nodeName);
console.log(nodeType);
/* 
Node Types
1 - element
2 - Attribute
3 - Text Node
8 - Comment
9 - document
10 - docType
*/

let firstDivContainer = document.querySelector('div.container');     // First div which has container class will be selected
console.log(firstDivContainer.children);
console.log(firstDivContainer.children[1].children);
console.log(firstDivContainer.children[1].children[0].children);

console.log(firstDivContainer.firstChild);              // Gets the first child, where child includes text, line change, comments and all things
console.log(firstDivContainer.firstElementChild);       // Gets the first element, where child includes only elements
console.log(firstDivContainer.lastChild);
console.log(firstDivContainer.lastElementChild);

console.log(firstDivContainer.childElementCount);           // Counts the number of child elements

console.log(firstDivContainer.firstElementChild.parentNode);       // Gets the parent of first child elements
console.log(firstDivContainer.firstElementChild.nextSibling);         // Gets the next child of the parent, where child includes text, line change, comments and all things
console.log(firstDivContainer.firstElementChild.nextElementSibling);         // Gets the next child of the parent, where child includes includes only elements
console.log(firstDivContainer.firstElementChild.nextElementSibling.nextElementSibling);    // Gets the next child of the parent, where child includes includes only elements