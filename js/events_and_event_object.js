// document.getElementById('heading').addEventListener('click', function(){
//     console.log('You have clicked the heading');
//     location.href = '//codewithharry.com';          // moves to this site
// });

// To print event object
document.getElementById('heading').addEventListener('click', function(e){
    // console.log('You have clicked the heading');
    console.log(e);
    console.log(e.target);                // Gives the target where we have clicked
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(Array.from(e.target.classList));             // to make it array
    console.log(e.offsetX);                 // relative to element 
    console.log(e.offsetY);
    console.log(e.clientX);                   // relative to browser
    console.log(e.clientY);
});

document.getElementById('heading').addEventListener('mouseover', function(e){
    // console.log('You have clicked the heading');
    console.log(e);
    console.log(e.target);                // Gives the target where we have clicked
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(Array.from(e.target.classList));             // to make it array
    console.log(e.offsetX);                 // relative to element 
    console.log(e.offsetY);
    console.log(e.clientX);                   // relative to browser
    console.log(e.clientY);
});


