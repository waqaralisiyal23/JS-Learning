// Object literal : Object.prototype
let obj = {
    name: "Waqar Ali Siyal",
    channel: "Code With Waqar",
    address: "Mars"
}

// Object using constructor
function Student(givenName){
    this.name = givenName;
}

Student.prototype.getName = function (){
    return this.name;
}

Student.prototype.setName = function (newName){
  this.name = newName;
}

let std1 = new Student("Waqar");
console.log(std1);
console.log(std1.getName());
std1.setName('Waqar Ali Siyal');
console.log(std1.getName());

