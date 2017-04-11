var mongoose = require('mongoose');
var User = require('./models/user.js');
var Student = require('./models/student.js');
var Assignment = require('./models/assignment.js');

mongoose.Promise = global.Promise;

// var db = mongoose.connect('mongodb://localhost/project-three');
mongoose.connect('mongodb://localhost:27017/three');


var seededAssignments = [
    {
        name: 'Test on Plants',
        assignmentType: 'Test',
        dateCreated: '',
        pointsEarned: 0,
        pointsMax: 20
    },
    {
        name: 'Deciduous Project',
        assignmentType: 'Project',
        dateCreated: '',
        pointsEarned: 0,
        pointsMax: 50
    }
];
function getStudentsSeedData(assignments){
    return [
        { firstName: 'David', lastName: 'Davis', assignments: assignments},
        { firstName: 'Aylin', lastName: 'Jobs', assignments: assignments},
        { firstName: 'Gibby', lastName: 'Smith', assignments: assignments},
        { firstName: 'Jenny', lastName: 'Davis', assignments: assignments},
        { firstName: 'Jill', lastName: 'Davis', assignments: assignments},
    ]
}
// var testStudents = ;


function getUsersSeedData(students){
    return [
        {
            username: 'TestWoman',
            email: 'abc@abc.com',
            password: 'abc',
            students: students
        },
        {
            username: 'TestMan',
            email: 'abc@abc.com',
            password: 'abc',
            students: students
        }
    ]
}

// Seed Database with relations
function seedDatabase() {
    Assignment.remove({})
        .then(function(){
            return Assignment.create(seededAssignments);
        })
        .then(function(assignments){
            var assignmentsList = [];
            for(assignment of assignments){
                assignmentsList.push(assignment._id);
            }
            console.log(assignmentsList);
            return assignmentsList;
        })
        .then(function(assignments){
            var testStudents = getStudentsSeedData(assignments);
            Student.remove({})
                .then(function(){
                    return Student.create(testStudents);
                })
                .then(function(students){

                    var studentsList = [];
                    for(student of students){
                        studentsList.push(student._id);
                    }

                    console.log(studentsList);
                    return studentsList;
                })
                .then(function(sts){
                    var users = getUsersSeedData(sts);
                    User.remove({})
                        .then(function(){
                            return User.create(users);
                        })
                        .then(function(users){
                            // console.log(users);
                        })
                        .then(function(){
                            mongoose.connection.close(function () {
                                console.log('Mongoose connection disconnected');
                            });
                        });

                })
        });


}

seedDatabase();

