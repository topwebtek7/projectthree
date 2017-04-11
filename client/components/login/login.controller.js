LoginController.$inject = ['$state', 'AuthService'];

function LoginController($state, AuthService) {
  const vm = this;

  vm.loginUnauth = loginUnauth;
  vm.login = {};

  function loginUnauth() {
    console.log("Hit login button");
    AuthService
    .loginUser(
      vm.login.email,
      vm.login.password
    ).then(function resolve(response) {
      const data = response.data;
      if( data.success){                    // check if response is success means authenticated
          vm.current = data.user;
          $state.go('show');                  // go to show page
      }else {
          console.log(data.message);
      }
    })
  }
}



module.exports = LoginController;
