const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates waqar object
let waqar = Object.create(proto);
waqar.name = "Waqar";
waqar.role = "Programmer";
console.log(waqar);
waqar.changeName("Waqar Ali Siyal");
console.log(waqar);

// This creates waqar2 object
const waqar2 = Object.create(proto, {
    name: { value: "Waqar", writable: true },
    role: { value: "Programmer" },
});
console.log(waqar2);
waqar2.changeName("Waqar Ali Siyal");
console.log(waqar2)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let waqarObj = new Employee("Waqar", 100000, 5);
console.log(waqarObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let programmer = new Programmer("Waqar", 2000, 0, "Javascript");
console.log(programmer);