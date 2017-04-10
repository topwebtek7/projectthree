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

var testStudents = [
    { firstName: 'David', lastName: 'Davis', assignments: seededAssignments},
    { firstName: 'Aylin', lastName: 'Jobs', assignments: seededAssignments},
    { firstName: 'Gibby', lastName: 'Smith', assignments: seededAssignments},
    { firstName: 'Jenny', lastName: 'Davis', assignments: seededAssignments},
    { firstName: 'Jill', lastName: 'Davis', assignments: seededAssignments},
];


var users = [
    {
        username: 'TestWoman',
        email: 'abc@abc.com',
        password: 'abc',
        students: testStudents
    },
    {
        username: 'TestMan',
        email: 'abc@abc.com',
        password: 'abc',
        students: testStudents
    }
];
function seedStudents() {
    // for (student of testStudents) {
    //     var newStudent = new Student(student);
    //     newStudent.save();
    // }

    Assignment.remove({})
        .then(function(){
            return Assignment.create(seededAssignments);
        })
        .then(function(assignments){
            console.log(assignments);
            var assignmentsList = [];
            for(assignment of assignments){
            	assignmentsList.push(assignment._id);
			}
			return assignmentsList;
        })
		.then(function(assignments){
            Student.remove({})
                .then(function(){
                    return Student.create(testStudents);
                })
                .then(function(sts){
                    console.log(sts);
                })
                .then(function(){
                    mongoose.connection.close(function () {
                        console.log('Mongoose connection disconnected');
                    });
                });
		});


}

seedStudents();



