angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;

		self.addNewAssignment = addNewAssignment;
		self.deleteUser = deleteUser;

		self.updateUser = updateUser;
		/*self.addNewAssignment = addNewAssignment;*/

	function loadCurrent(id) {
		return $http.get('/api/users/' + id);
	}

	function addNewAssignment(newAssignment) {

		return $http
		.get('/api/users/' + id);
	}


	function updateUser(id) {

		return $http
		.patch('/api/users/' + id );
	}

	function deleteUser(user) {
		return $http.delete("/api/users/" + user._id);
	}
}
