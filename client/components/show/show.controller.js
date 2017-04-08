ShowController.$inject = ['$stateParams', 'UsersService'];

function ShowController($stateParams, UsersService) {
  const vm = this;
  vm.current = {};
  const userId = '58e8f03b22c5dc033454ed1b';

  activate();

  function activate() {
  	loadCurrent();
  }

  function loadCurrent(userId) {
  	console.log($stateParams);

  	UsersService
  		.loadCurrent($stateParams.userId)
  		.then(function resolve(response) {
  			vm.current = response.data.user;
  		})
  }

}

module.exports = ShowController;
