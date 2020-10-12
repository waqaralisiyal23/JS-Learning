let btn = document.getElementById('btn');
btn.addEventListener('click', btnClick);
btn.addEventListener('dblclick', btnDoubleClick);
btn.addEventListener('mousedown', btnMouseDown);

function btnClick(e) {
    // console.log('Thanks', e);
    e.preventDefault();              // by default type = submit pe form submit huta hai tou us default ko khtm krne ke liye ye use krte hain
}

function btnDoubleClick(){
    console.log('Thanks its a double click');
}

function btnMouseDown(){
    console.log('Thanks its a Mouse Down');
}


document.querySelector('.no').addEventListener('mouseenter', function(){
    console.log('You entered no');
});

document.querySelector('.no').addEventListener('mouseleave', function(){
    console.log('You leaved no');
});

document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetY})`;
    console.log('You triggered mouse move event');
});