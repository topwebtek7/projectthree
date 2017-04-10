require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function (err) {
  console.log(err);
  process.exit(-1);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

var usersController = require('./controllers/users.js');
app.use('/api/users', usersController);

app.listen(process.env.PORT || 3000, function() {
  console.log("We are up and running...");
});
