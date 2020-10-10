const age = 19;
if (age == 19) {
    console.log('Age is 19');
}
else if (age == 65) {
    console.log('Age is 65');
}
else {
    console.log('None of the age matched');
}

const age2 = '65';
if (age2 == 19) {
    console.log('Age is 19');
}
else if (age2 === 65) {                    // to compare value and type use triple euqals to
    console.log('Age is 65');
}
else if (age2 !== 65) {
    console.log('Age is not 65');       // to compare both value and type that both are not equal use !==
}
else {
    console.log('None of the age matched');
}


if (typeof vari !== 'undefined') {
    console.log('vari is defined');
}
else {
    console.log('vari is undefined');
}

let doesDrive = true;
let age3 = 15;
if (doesDrive && age3 > 18) {
    console.log('You can drive');
}
else {
    console.log('You cannot drive');
}

let a = true;
let b = false;
if (a || b) {
    console.log('if block')
}
else {
    console.log('else block')
}

// Turnary operator
let age4 = 45;
console.log(age4 == 45 ? 'Age is 45' : 'Age is not 45');

// Switch case statements
let age5 = 20;
switch (age5) {
    case 18:
        console.log('You are 18');
        break;
    case 20:
        console.log('You are 20');
        break;
    case 24:
        console.log('You are 24');
        break;
    default:
        console.log('None of the case matched');
        break;
}
