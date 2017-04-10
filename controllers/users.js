var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user');
var Student = require('../models/student');
var Assignment = require('../models/assignment');
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


//======================
// USER REGISTRATION
//======================
router.post('/', function createUser(req, res){
	console.log('body:',request.body);

  var user = new User(request.body);

  user.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate user b/c:' + error});

    response.json({user: user});
  });
});


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

var id = request.params.id

  User
    .findById({_id : id}, function(error, user) {
      if (error) console ("Error in the patch")
      .exec(function pushAssignmentToAllStudents(err, user) {
        // Loop over each of that user's students
        user.students.forEach(function pushAssignment(student, index) {
          // For each student, push an assignment object
            // Some come from req.body info
            // Some are hardcoded (such as pointsEarned being 0)
          const assignment = new Assignment({
/*            name: request.body.name,
            assignmentType: request.body.assignmentType,
            pointsEarned: 0,
            pointsMax: request.body.pointsEarned,
*/          name: "routerTest",
            assignmentType: "Project",
            pointsEarned: 0,
            pointsMax: 40
          }); // leave this for you to do

          student.assignments.push(assignment);
        });

      })
      // Save the user
      
      user.save(function(err, user) {
          if (err) { 
            console.log("The save is may not be working" + err);
            response.send({ message: "Save is not working!"}) }

          response.send({ user : user})
          console.log(user);
          });

    })

		//no need to redirect in this situation
		//redirection can happen on the client side
  
});



//=============================
// Delete User
//=============================
router.delete('/:id', function destroyAction(request, response) {
  var id = request.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete criminal b/c:' + error});

    response.json({message: 'Criminal successfully deleted'});
  });
});

module.exports = router;
