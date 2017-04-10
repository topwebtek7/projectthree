var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var usersController = require('../controllers/users');

router.route('/users')
  .post(usersController.createUser);


router.route('/users/:id')
  .delete(usersController.destroyAction)
  .put(usersController.updateAction);


module.exports = router;
