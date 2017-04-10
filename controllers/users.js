var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user');
var Student = require('../models/student');
var Assignment = require('../models/assignment');

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

router.delete('/:id', function destroyAction(request, response) {
  var id = req.params.id;

  User.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete criminal b/c:' + error});

    response.json({message: 'Criminal successfully deleted'});
  }).select('-__v');
});


module.exports = router;
