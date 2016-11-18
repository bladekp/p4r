(function() {

    'use strict';

    angular.module('p4r', [
        'ngRoute',
        'p4r.ustawienia',
        'p4r.turnusy',
        'p4r.zaloguj',
        'p4r.haslo'
    ])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                otherwise({redirectTo: '/zaloguj'});
        }])

        .controller('AppCtrl', ['$scope', '$location', function ($scope, $location) {
            $scope.currentPath = $location.path();

            $scope.user = {
                nameAndSurname: 'Adam Małysz'
            };

        }]);

}());