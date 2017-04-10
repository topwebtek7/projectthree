LoginController.$inject = ['AuthService'];

function LoginController(AuthService) {
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
      console.log("function working");
      vm.current = response.data.user;
      console.log("the user id is" + current.userId);
    })
  }
}



module.exports = LoginController;
