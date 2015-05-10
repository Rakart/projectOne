'use strict';

angular.module('myApp.blog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'blog/blog.html',
    controller: 'blog'
  });
}])

.controller('blog', ['$scope', function($scope) {


  $scope.blogPosts = /* GET request here from carlosgreblo.blogspot.sg */
  [{
    'title'       : 'My First Post',
    'id'          : '01',
    'description' : 'Hello World, contents of the blog post will appear here.',
    'updated_on'  : '01-01-2015' /* GET resuest for timestamp here from carlosgreblo.blogspot.sg */
  },
  {
    'title'       : 'My Second Post',
    'id'          : '02',
    'description' : 'Hello World, contents of the second blog post should appear here.',
    'updated_on'  : '02-01-2015' /* GET resuest for timestamp here from carlosgreblo.blogspot.sg */
  }];

}]);

/* google api key - AIzaSyAGARYaRxzO7N_XlSnwc7_OcWc-KGV-0Fo */
