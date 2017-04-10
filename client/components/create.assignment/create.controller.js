CreateAssignmentController.$inject = ['$stateParams', 'UsersService'];

function CreateAssignmentController($stateParams, UsersService) {
  const vm = this;

  //vm.loadCurrent = loadCurrent;
  vm.addNewAssignment = addNewAssignment; //attaching the function to vm
  vm.newAssignment = {};                  //initializing newAssignment
  vm.current = {};
  
  
  

  activate();

  function activate() {
  	addNewAssignment();
  }

  function addNewAssignment() {
  	console.log('this is from addNewAssignment' + vm.newAssignment.name);

    UsersService
      .loadCurrent($stateParams.userId)
      .then(function resolve(response) {
        vm.current = response.data.user;

        for (var i = 0; i < vm.current.students.length; i++){
          vm.current.students[i].assignments.push(vm.newAssignment);
        }
        console.log("vm current " + vm.current.username)
        console.log("ass2" + vm.current.students[3].assignments[1].name);
        console.log("ass3" + vm.current.students[3].assignments[2].name);
      });

    UsersService
      .updateUser(vm.current._id)
      .then(function resolve(response) {
        console.log(vm.current);
      })

      vm.current = {};

  }


  

  /*function loadCurrent() {
  	console.log($stateParams);
  	UsersService
  		.loadCurrent($stateParams.userId)
  		.then(function resolve(response) {
  			vm.current = response.data.user;
  		})

  	for (var i = 0; i < vm.current.students.length; i++) {
  		console.log(i);
  	}
  	
   addNewAssignment();
  }

	function addNewAssignment() {*/
		/*UserService
			.addAssignment(vm.newAssignment)
			.then(function resolve(response){
				vm.newAssignment;
			});*/	
}

module.exports = CreateAssignmentController;
