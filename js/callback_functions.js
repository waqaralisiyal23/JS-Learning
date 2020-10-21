// Pretend that this response is coming from the server
const students = [
    {name: 'Waqar', suject: 'Javascript'},
    {name: 'Usama', suject: 'Machine Learning'},
    {name: 'Uzair', suject: 'Java'},
]

function enrollStudent(student, callback){
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
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
enrollStudent(newStudent, getStudents);           // enrolls in 3 sec
// getStudents();                       // fetches in 1 sec
// So we will get only three objects becuase we are getting the students before adding the new one 
// because we are getting students in 1 sec and new student will add after 3 secs
// so here will use callback function to solve this issue. A function which takes another function
// is a callback function and we pass getStudents as a callback to enrollStudent so that it can
// get students after adding a new one