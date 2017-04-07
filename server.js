const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('process.env.MONGODB_URI', function(err) {
  console.log("Mongo DB connected!");
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function() {
  console.log("We are up and running...");
});
