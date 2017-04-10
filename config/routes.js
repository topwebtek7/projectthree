var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var usersController = require('../controllers/users');


router.route('/users/:id')


  .delete(usersController.removeUser);


module.exports = router;
