'use strict';

angular.module('p4r.turnusy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/turnusy', {
    templateUrl: 'content/turnusy/turnusy.html',
    controller: 'TurnusyCtrl',
    controllerAs: 'turnusy'
  });
}]);

