/*
You have to create a div and inject it into the page which contains a heading. Whenever someone 
clicks on the div, it should be converted into an editable item, whenever user clicks away (blur), save
the note into the local storage.
*/

let divElement = document.createElement('div');
divElement.setAttribute('id', 'myDivElem');
divElement.setAttribute('class', 'elem');
divElement.setAttribute('style', 'border: 2px solid black; width: 154px; margin: 34px; padding: 23px');

// Add text to that created element
let val = localStorage.getItem('text');
let textNode;
if (val==null){
    textNode = document.createTextNode('This is my element. click to edit it');
}
else{
    textNode = document.createTextNode(val);
}
divElement.appendChild(textNode);

let container = document.querySelector('.container');                  // selects first element which has container class
let firstChild = document.getElementById('firstChild');

// Insert the element before the first child
container.insertBefore(divElement, firstChild);

// Add event listener to divElement
divElement.addEventListener('click', function(){
    let noOfTextAreas = document.getElementsByClassName('textArea').length;
    if(noOfTextAreas==0){
        let html = divElement.innerHTML;
        divElement.innerHTML = `<textarea class="textArea form-control" id="textArea" rows="3">${html}</textarea>`;
    }
    // listen for the blur event on textarea, The blur event fires when an element has lost focus.
    let textArea = document.getElementById('textArea');
    textArea.addEventListener('blur', function() {
        divElement.innerHTML = textArea.value;
        localStorage.setItem('text', textArea.value);
    });
});
