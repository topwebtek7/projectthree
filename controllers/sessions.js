var express = require('express');
router = express.Router();
var User = require('../helpers/auth.js');

//LOGIN

router.post('/login', /*authHelpers.loginUser,*/ function(req, res){
	res.redirect(`/show/$(req.session.currentUser._id`);

});

module.exports = router;