const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('monogodb://localhost:project-3', function() {
  console.log("Mongo DB connected!");
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log("We are up and running...");
});
