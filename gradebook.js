
var students = [];
// var gradeList = [
//     [student, grade]
// ];
var studentList;

function addStudent (firstName, lastName) {
    firstName = prompt('Type student first name');
    lastName = prompt('Type student last name');

    var student = {
        firstName: firstName,
        lastName: lastName,
    };
    students.push(student);

    console.log('Student added successfully:');
    console.log(student);

    

   return student;
    
}


document.getElementById("addStudent").addEventListener("click", function(){
    document.getElementById("studentList").innerHTML = '<p>' + students[0].lastName.toUpperCase() + ', ' + students[0].firstName.toUpperCase() + '</p>';
});

  
  
  
  
  
  
  
  
  