function greet(name, thank='Thank You'){
    console.log(`
        Happy Birthday ${name} Let's light 
        the candles and celebrate this special 
        day of your life. Happy birthday. ... 
        On this day of happiness and joy, I'd 
        like to wish you a lifetime full of 
        success, because a person as amazing as 
        you, deserves all of their dreams to 
        come true. Happy Birthday!
        ${thank}
    `);     
}

function sum(num1, num2){
    return num1+num2;
}

let findVolume = function(length, breadth, height){
    return length*breadth*height;
}

function findPerimeter(sumFunction){
    let val = sumFunction(4,6);
    return 2*val;
}

greet('Waqar Ali Siyal', 'Thanks a lot');
console.log('');
greet('Ahmed Ali Siyal');
console.log('');

let sumOfNums = sum(10, 5);
console.log(`Sum is ${sumOfNums}`);

let volume = findVolume(2, 4, 6);
console.log(`Volume is ${volume}`);

let perimeter = findPerimeter(sum);
console.log(`Perimeter is ${perimeter}`);

let myObj = {
    name: 'Waqar Ali Siyal',
    game: function(){
        return 'GTA';
    }
}
console.log(myObj.game());

