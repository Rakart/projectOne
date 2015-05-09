'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl:  'about/about.html',
    controller:   'about'
  });
}])

.controller('about', ['$scope', function($scope) {
  $scope.twitter  = {
    'icon': 'about/twitter.png',
    'url' : 'http://twitter.com/MrRakart' };

  $scope.mail     = {
    'icon': 'about/mail.png',
    'url' : 'mailto:carlos.greblo@gmail.com' };

  $scope.github   = {
    'icon': 'about/github-icon.png',
    'url' : 'http://github.com/Rakart' }
}]);
