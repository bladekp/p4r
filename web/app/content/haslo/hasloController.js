/**
 * Created by bladekp on 02.05.16.
 */
(function(){

'use strict';

angular.module('p4r.haslo')

.controller('HasloCtrl', ['ngDialog', function (ngDialog) {
    this.showDialog = function () {
        ngDialog.open({ template: 'content/haslo/dialog.html', className: 'ngdialog-theme-default' });
    };
}]);

}());