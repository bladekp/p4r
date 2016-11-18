(function(){
'use strict';

angular.module('p4r.turnusy')

.controller('TurnusyCtrl', TurnusyCtrl);

    function TurnusyCtrl() {
        this.lista = [
            {
                nazwaZakladu: 'Ośrodek w Szklarskiej Porębie',
                przeznaczenieZakladu: 'Dla pracownikow',
                dataOd: '2001-01-01',
                dataDo: '2015-05-11',
                dataDodaniaSkierowan: '2016-02-10',
                dataDodaniaEpikryz: '2015-12-02'
            },
            {
                nazwaZakladu: 'Ośrodek w Horyńcu Zdroju',
                przeznaczenieZakladu: 'Dla pracowników',
                dataOd: '2011-11-15',
                dataDo: '2012-10-12',
                dataDodaniaSkierowan: '2012-02-10',
                dataDodaniaEpikryz: '2013-12-02'
            },
            {
                nazwaZakladu: 'Ośrodek w Iwoniczu Zdroju',
                przeznaczenieZakladu: 'Dla dzieci',
                dataOd: '2001-01-01',
                dataDo: '2015-05-11',
                dataDodaniaSkierowan: '2016-02-10',
                dataDodaniaEpikryz: '2015-12-02'
            }
        ];

        this.zwinieta = false;
    }

}());
