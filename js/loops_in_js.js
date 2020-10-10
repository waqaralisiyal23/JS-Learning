// for loop
for(let i=0; i<10; i++){
    console.log(i);
}

// while loop
let j=0;
while(j<10){
    console.log(j);
    j++;
}

// do while loop
let k=0;
do{
    console.log(k);
    k++;
}while(k<10);

// break 
for(let i=0; i<10;i++){
    console.log(i);
    if(i==5){
        break;
    }
}

outerLoop: for(let i=1; i<=3;i++){
    for(let j=1; j<=3;j++){
        console.log(i, j);
        if(i==2 && j==2){
            break outerLoop;
        }
    }
}

// continue
for(let i=0; i<10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

outerLoop2: for(let i=1; i<=3;i++){
    for(let j=1; j<=3;j++){
        if(i==2 && j==2){
            continue outerLoop2;
        }
        console.log(i, j);
    }
}

// Iterating all elements in arrays
let arr = [2,5,6,7,9,12];
// using for loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
// using for each loop
arr.forEach(function(element){
    console.log(element)
});
arr.forEach(function(element, index){
    console.log(element, index);
});

// Iterating object
let obj = {
    name: 'Waqar Ali Siyal',
    age: 20,
    type: 'Programmer',
    os: 'Windows'
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`);
}