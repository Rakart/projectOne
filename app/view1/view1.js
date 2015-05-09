'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'WorkingDirectory'
  });
}])

.controller('WorkingDirectory', ['$scope', '$log', function($scope, $log) {
  $scope.$log = $log;
  $scope.username = 'User1';
  $scope.loggedIn = new Date();

}]);
