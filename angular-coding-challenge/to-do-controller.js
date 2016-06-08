angular.module('todoApp',[]);
angular.module('todoApp').controller('todoCtrl',['$scope',function($scope){
  var id = 0;
  $scope.tasks = [];
  $scope.currView = 'all';
  $scope.changeView = function(val) {
    $scope.currView = val;
  };
  $scope.removeTask = function(ind) {
    $scope.tasks.splice(ind, 1);
  };
  $scope.compTasks = function() {
    var cnt = 0;
    for (var i = 0; i < $scope.tasks.length; i++) {
      if ($scope.tasks[i].IsCompleted) {
        cnt++;
      }
    }
    return cnt;
  };
  $scope.addTask = function() {
    $scope.tasks.push({ ID : id++,Subject : $scope.newTask,IsCompleted : false });
    $scope.newTask = '';
  };
}]);