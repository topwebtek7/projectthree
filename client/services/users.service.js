angular
	.module('gradeBook')
	.service('UsersService', UsersService);

UsersService.$inject = ['$http'];

function UsersService($http) {
	const self = this;

	self.loadCurrent = loadCurrent;

function loadCurrent(id) {

	return $http.get('/api/users/' + id);
	} 
}