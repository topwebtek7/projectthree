angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
		const self = this;

		self.loadCurrent = loadCurrent;
		self.addNewAssignment = addNewAssignment;

	function loadCurrent(id) {

		return $http.get('/api/users/' + id);
	} 


	function addNewAssignment(newAssignment) {

		return $http
		.post('/api/users', newAssignment);
	}
}
