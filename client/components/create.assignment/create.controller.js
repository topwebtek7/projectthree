CreateAssignmentController.$inject = ['$stateParams', 'UsersService'];

function CreateAssignmentController($stateParams, UsersService) {
  const vm = this;

  //vm.loadCurrent = loadCurrent;
  vm.addNewAssignment = addNewAssignment; //attaching the function to vm
  vm.newAssignment = {};                  //initializing newAssignment
  vm.current = {};
  vm.updatedStudents = {};
  
  activate();

  function activate() {
  	addNewAssignment();
  }

  function addNewAssignment() {
  	console.log('this is from addNewAssignment' + vm.newAssignment.name);

    //how the form data make it to the controller server-side???

    UsersService
      .updateUser($stateParams.userId)
      .then(function resolve(response) {
        vm.current = response.data.user;
      });
  }
}
 
module.exports = CreateAssignmentController;

      