// Pretend that this response is coming from the server
const students = [
    {name: 'Waqar', suject: 'Javascript'},
    {name: 'Usama', suject: 'Machine Learning'},
    {name: 'Uzair', suject: 'Java'},
]

function enrollStudent(student){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 3000);
    });
}

function getStudents(){
    setTimeout(() => {
        let str = '';
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}

let newStudent = {name:"Ahmed", subject:"Python"};
// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("Some error occured");
});