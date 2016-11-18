'use strict';

angular.module('p4r.haslo', ['ngRoute','ngDialog'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/haslo', {
    templateUrl: 'content/haslo/haslo.html',
    controller: 'HasloCtrl',
    controllerAs: 'haslo'
  });
}])

