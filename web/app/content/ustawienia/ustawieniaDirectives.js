/**
 * Created by bladekp on 02.05.16.
 */
'use strict';

angular.module('p4r.ustawienia')

.directive('listaUstawien', function() {
    return {
        restrict: 'E',
        templateUrl: 'content/ustawienia/ustawieniaLista.html'
    };
})

.directive('mycheckbox', function() {
   return {
         restrict: 'A',
            link: function (scope, element, attrs, ngModelCtrl) {
                element.uniform({selectAutoWidth:false});
            }
        }
    });

