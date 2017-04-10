var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var logger = require('morgan'); /*---this caused an error with GET*/
//var methodOverride = require('method-override');
var User = require('../models/User');

//=============================
// Show Page (User Logged In)
//=============================

router.get('/:id', function showAction(request, response) {
	var id = request.params.id;

	User.findById({_id: id}, function(error, user) {
		if(error) response.json({message: 'Could not find the user b/c:' + error});

		response.json({user: user});
	});
});

function updateStudents (newAssignment, user) {
  for (var i = 0; i < user.students.length; i++){
    const student = user.students[i];
    student.assignments.push(newAssignment);
  }
}

router.put('/:id', function updateAction(request, response) {

  // update user and the users students and anything touching the db
  console.log ('I made it to the put');

  // Solving the problem
  // Find the current user
  // Loop over each of that user's students
  // For each student, push an assignment object
    // Some come from req.body info
    // Some are hardcoded (such as pointsEarned being 0)
  // Save the user

  // Find the current user
  User
    .findById(request.params.id)
    .exec(function pushAssignmentToAllStudents(err, user) {
      // Loop over each of that user's students
      user.students.forEach(function pushAssignment(student, index) {
        // For each student, push an assignment object
          // Some come from req.body info
          // Some are hardcoded (such as pointsEarned being 0)
        const assignment = new Assignment({
          name: request.body.name,
          assignmentType: request.body.assignmentType,
          pointsEarned: 0,
          pointsMax: request.body.pointsEarned,
        }); // leave this for you to do

        student.assignments.push(assignment);
      });

      response.send({ user : user})
    })
    // Save the user
    
    .save(function(err, user) {
        if (err) { console.log(err); }

        console.log(user);
        });


});

/*var writers = [req.body.favorite1, req.body.favorite2, req.body.favorite3];
  var books = [req.body.book1, req.body.book2, req.body.book3];

  User.findByIdAndUpdate(req.params.id, {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    favoriteWriters: writers,
    favoriteBooks: books
  }, {new: true})
  .exec(function(err, user) {
    if (err) { console.log(err); }

    console.log(user);
    res.redirect('/users');
  });
 }

router.patch('/:id', function updateAction(request, response) {
  var id = request.params.id;
  console.log("router: " + request.body);

  User.findById({_id: id}, function(error, user) {
    if(error) response.json({message: 'Could not find user b/c:' + error});*/
    
    /*console.log("router test: " + request.body.students[1].assignment[2].name)*/
    
    /*for (var i = 0; i < request.body.students.length; i++) {
    	for (var j = 0; j < request.body.students[i].assignments.length; j++) {
    		if (request.body.students[i]) user.students[i].assignments[j] = request.body.students[i].assignment[j];
    	}
    }*/

/*
    if(request.body.name) criminal.name = request.body.name;
    if(request.body.location) criminal.location = request.body.location;
    if(request.body.status) criminal.status = request.body.status;
*/
   /* user.save(function(error) {
      if(error) response.json({messsage: 'Could not update user b/c:' + error});

      response.json({message: 'User/teacher successfully updated', user: user});
    });
  }).select('-__v');
});*/

module.exports = router;