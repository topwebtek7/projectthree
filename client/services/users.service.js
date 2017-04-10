angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;
		self.addNewAssignment = addNewAssignment;
		self.addNewUser = addNewUser;
		self.updateUser = updateUser;
		/*self.addNewAssignment = addNewAssignment;*/
		self.deleteUser = deleteUser;

	function loadCurrent(id) {
		return $http.get('/api/users/' + id);
	}

	function addNewAssignment(newAssignment) {

		return $http.get('/api/users/' + id);
	}

	function addNewUser(id) {
		return $http.post('/api/users/', newUser);
	}

	function updateUser(id) {

<<<<<<< HEAD
		return $http
		.put('/api/users/' + id);
=======
		return $http.patch('/api/users/' + id );
	}

	function deleteUser(user) {
		console.log("My user id is not working");
		return $http.delete('/api/users/' + user._id);
>>>>>>> 2ff25a0febd9403dc4e66e2d1b105153d24c0aba
	}
}
