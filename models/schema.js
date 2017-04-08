var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.promise = global.Promise;

var AssignmentSchema = new Schema({
		       name: String,
	 assignmentType: String,
	 	dateCreated: Date,
	   pointsEarned: Number,
	 	  pointsMax: Number,
	 	    // dueDate: Date

});

var StudentSchema = new Schema({
	firstName: String,
	 lastName: String,
	 //schoolId: Number,
	 //   image: String,
  assignments: [AssignmentSchema],
});

var UserSchema = new Schema({
		username: String,
		email: String,
		password: String,
		students: [StudentSchema],
});

AssignmentSchema.pre('save', function(next){
    now = new Date();

    if ( !this.dateCreated ) {
        this.dateCreated = now;
    }
    next();
});

//might add a non-MVP classModel

var UserModel = mongoose.model("User", UserSchema);
var StudentModel = mongoose.model("Student", StudentSchema);
var AssignmentModel = mongoose.model("Assignment", AssignmentSchema);

module.exports = {
	User: UserModel,
	Student: StudentModel,
	Assignment: AssignmentModel
};
