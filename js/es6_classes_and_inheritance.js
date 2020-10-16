class Employee {
    constructor(name, experience, division){
        this.name = name;
        this.experience = experience;
        this.division = division;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(name, experience, division, language, github){
        super(name, experience, division);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

let emp1 = new Employee("Waqar Ali Siyal", 10, 'Division');
console.log(emp1);
console.log(emp1.slogan());
console.log(emp1.joiningYear());
console.log(Employee.add(5,6));

let programmer = new Programmer('Waqar Ali Siyal', 10, 'Division', 'python', "siraiwaqarali")
console.log(programmer);
console.log(programmer.slogan());
console.log(programmer.favoriteLanguage());
console.log(Programmer.multiply(5, 7));