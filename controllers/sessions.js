var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var User = require('../models/user');
var Student = require('../models/student');
var Assignment = require('../models/assignment');
var logger = require('morgan');
var User = require('../models/User');



//=============================
// LOGIN INDEX
//=============================

router.post('/', function loginAction(request, response) {
	console.log("we made it!!!!!!!!"); 
	var email = request.body.email;
	var password = request.body.password;

	User.findOne({email: email, password: password}, function(error, user) {
        console.log(error);
		if(error) {
			response.json({message: 'Could not find the user b/c:' + error});
		}else {
			if(user) {
                response.json({success: true, user: user});
            }else {
                response.json({success: false, message: "Authentication failed"});
			}
		}

	});
});


//=============================
// LOGIN POST
//=============================

module.exports = router;
