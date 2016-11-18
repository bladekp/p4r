'use strict';

angular.module('p4r.zaloguj', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/zaloguj', {
    templateUrl: 'content/zaloguj/zaloguj.html'
  });
}]);