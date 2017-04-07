var mongoose = require('mongoose');
var Student = require('./models/student.js');


mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost/project-three');
//var db = mongoose.connect('mongodb://localhost:27017/criminals-app');

var seededAssignments = [ {
	name: 'Test on Plants',
	assignmentType: 'Test',
	dateCreated: '',
	pointsEarned: 0, 
	pointsMax: 20},

	{
	name: 'Deciduous Project',
	assignmentType: 'Project',
	dateCreated: '', 
	pointsEarned: 0,
	pointsMax: 50}	
];

var students = [
	{ firstName: 'David', lastName: 'Davis', assignments: [seededAssignments]},
	{ firstName: 'Aylin', lastName: 'Jobs', assignments: [seededAssignments]},
	{ firstName: 'Gibby', lastName: 'Smith', assignments: [seededAssignments]},
	{ firstName: 'Jenny', lastName: 'Davis', assignments: [seededAssignments]},
	{ firstName: 'Jill', lastName: 'Davis', assignments: [seededAssignments]},
	];	

Student.remove({})
  .then(function(){
  	return Student.create(students);
  })
  .then(function(students){
  	console.log(students);
  })
  .then(function(){
  	mongoose.connection.close(function () {
  	  console.log('Mongoose connection disconnected');
  	});
  });
  