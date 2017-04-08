ShowController.$inject = ['$stateParams', '$scope', 'UsersService'];



function ShowController($stateParams, $scope, UsersService) {
  const vm = this;
  vm.current = {};
  vm.studentsGrades = [];

  
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


   // console.log("Number of students" + vm.current.students};


   // for (var i = 0; i < vm.current[0].students.length; i++) {
   //   vm.studentsGrades[i] = vm.current.students[i].assignment[0].pointsEarned + 
   //   vm.current.students[i].assignment[0].pointsEarned;
   //   console.log(vm.studentsGrades[i]);
   // 
  }

$scope.getSumPointsEarned = function(student){
    var total = Number(0);
    for(var i = 0; i < student.assignments.length; i++){
        var points = Number(student.assignments[i].pointsEarned);
        total += points;
    }
    return total;
}

$scope.getSumPointsMax = function(student){
    var total = Number(0);
    for(var i = 0; i < 2; i++){
        var points = Number(student.assignments[i].pointsMax);
        total += points;
    }
    return total;
}
  

}

module.exports = ShowController;
