'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'home'
  });
}])

.controller('home', ['$scope', '$log', function($scope, $log) {
  $scope.$log = $log;
  $scope.username = 'User1';
  $scope.loggedIn = new Date();

}]);
