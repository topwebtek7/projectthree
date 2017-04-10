angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;
<<<<<<< HEAD
		self.addNewAssignment = addNewAssignment;
		self.deleteUser = deleteUser;
=======
		self.updateUser = updateUser;
		/*self.addNewAssignment = addNewAssignment;*/
>>>>>>> 89318e0729c570dcfd53c257140563b8a765ca9f


<<<<<<< HEAD
	function loadCurrent(id) {
		return $http.get('/api/users/' + id);
	}

	function addNewAssignment(newAssignment) {
=======
		return $http
		.get('/api/users/' + id);
	} 


	function updateUser(id) {

>>>>>>> 89318e0729c570dcfd53c257140563b8a765ca9f
		return $http
		.patch('/api/users/' + id );
	}

	function deleteUser(user) {
		return $http.delete("/api/users/" + user._id);	
	}
}
