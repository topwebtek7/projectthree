var mongoose = require('mongoose');
var Student = require('./models/student.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost/project-three');
//var db = mongoose.connect('mongodb://localhost:27017/criminals-app');

var students = [
	{ firstName: 'David', lastName: 'Davis', assignments: []},
	{ firstName: 'Aylin', lastName: 'Jobs', assignments: []},
	{ firstName: 'Gibby', lastName: 'Smith', assignments: []},
	{ firstName: 'Jenny', lastName: 'Davis', assignments: []},
	{ firstName: 'Jill', lastName: 'Davis', assignments: []},
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
  