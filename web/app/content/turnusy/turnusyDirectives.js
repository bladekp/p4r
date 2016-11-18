/**
 * Created by bladekp on 02.05.16.
 */
'use strict';

angular.module('p4r.turnusy')

.directive('filtr', function() {
    return {
        restrict: 'E',
        templateUrl: 'content/turnusy/turnusyFiltr.html'
    };
})

.directive('listaTurnusow', function() {
    return {
        restrict: 'E',
        templateUrl: 'content/turnusy/turnusyLista.html'
    };
})

.directive('rekord', function() {
    return {
        restrict: 'E',
        templateUrl: 'content/turnusy/turnusyRekord.html'
    };
})

.directive('datepicker', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ngModelCtrl) {
            element.datepicker({
                dateFormat: "yy-mm-dd",
                dayNames: [ "Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota" ],
                dayNamesMin: [ "nie", "pn", "wt", "śr", "czw", "pt", "sob" ],
                monthNames: [ "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień" ],
                nextText: "Następny",
                prevText: "Poprzedni",
                firstDay: 1
            });
        }
    }
});