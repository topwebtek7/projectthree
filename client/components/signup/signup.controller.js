SignupController.$inject = ['$state', 'UsersService']; // add inject UsersService, $state

function SignupController($state, UsersService) {       // add inject UsersService, $state
  const vm = this;

  vm.addNewUser = addNewUser;
  vm.newUser = {};

  activate();

  function activate(){
  }

  function addNewUser(){
    UsersService
      .addNewUser(vm.newUser)
      .then(function(){
        vm.newUser = {};
        $state.go('show');
      });
  }
}

module.exports = SignupController;
