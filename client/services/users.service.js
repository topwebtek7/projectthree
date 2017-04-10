angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;
		self.updateUser = updateUser;
		/*self.addNewAssignment = addNewAssignment;*/

	function loadCurrent(id) {

		return $http
		.get('/api/users/' + id);
	} 


	function updateUser(id) {

		return $http
		.put('/api/users/' + id);
	}
}
