CreateAssignmentController.$inject = ['$stateParams', 'UsersService'];

function CreateAssignmentController($stateParams, UsersService) {
  const vm = this;

  vm.addNewAssignment = addNewAssignment;
  vm.newAssignmnet = {};

	activate();

	function activate() {
		addNewAssignment();
	}

	function addNewAssignment() {
/*		CriminalsService
			.loadCurrent($stateParams.criminalId)
			.then(function resolve(response){
				vm.current = response.data.criminal;
			});	*/
	}
}

module.exports = CreateAssignmentController;
