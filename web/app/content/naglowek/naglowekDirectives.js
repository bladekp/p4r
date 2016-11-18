/**
 * Created by bladekp on 02.05.16.
 */
'use strict';

angular.module('p4r')

.directive('naglowek', function() {
    return {
        restrict: 'E',
        templateUrl: 'content/naglowek/naglowek.html'
    };
});