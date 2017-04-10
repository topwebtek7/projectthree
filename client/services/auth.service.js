angular
	.module('gradeBook')
	.service('AuthService', AuthService);

AuthService.$inject = ['$http'];
function AuthService($http) {
    const self = this;

    self.loginUser = loginUser;

    function loginUser(email, password) {
  		console.log("user services" + password);
  		return $http.post('api/sessions/', {
  			email: email,
  			password: password
  		});
  	}
}
