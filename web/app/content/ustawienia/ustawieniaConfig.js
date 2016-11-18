'use strict';

angular.module('p4r.ustawienia', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ustawienia', {
    templateUrl: 'content/ustawienia/ustawienia.html',
    controller: 'UstawieniaCtrl',
    controllerAs: 'ustawienia'
  });
}]);

