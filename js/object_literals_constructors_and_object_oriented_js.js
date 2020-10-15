console.log('Check1');

// Object literals for creating objects
let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function(){
        console.log('Car is running')
    },
};

console.log(car);
console.log(car.name);
console.log(car.topSpeed);
console.log(car.run());

// Creating a constructor
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    };
    this.analyze = function() {
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`);
    };
}

let car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar("Marutu Alto", 80);
car3 = new GeneralCar("Mercedes", 200);
console.log(car1, car2, car3);

console.log(car1.name);
console.log(car1.topSpeed);
console.log(car1.run());
console.log(car1.analyze());
