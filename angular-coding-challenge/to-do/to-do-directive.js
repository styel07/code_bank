angular.module('toDoApp', [])
.controller('toDoDirective', ['$scope', function($scope) {
  $scope.message = "I am a Directive";
}]);