angular.module('toDoApp', [])
.controller('toDoController', ['$scope', function($scope) {
  var id = 0;
  $scope.tasks = [{
    id : 1,
    taskDescription : 'hello moto',
    completed : false
  }];
  $scope.addTask = function() {
    $scope.tasks.push({
      id : id++,
      taskDescription : $scope.taskDesc,
      completed : false
    });
    $scope.taskDesc = '';
  };

  $scope.removeTask = function(index) {
    $scope.tasks.splice(index, 1);
  };

  $scope.completedTasks = function() {
    var count = 0;
    for (var i = 0; i < $scope.task.length; i++) {
      if ($scope.tasks[i].completed) {
        count++;
      }
    }
    return count;
  };
}]);