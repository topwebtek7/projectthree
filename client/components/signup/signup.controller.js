SignupController.$inject = ['UsersService'];

function SignupController(UsersService) {
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
