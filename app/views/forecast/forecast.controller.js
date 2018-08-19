(function() {
    'use strict'

    angular
        .module('app')
        .controller('forecastController', forecastController);

    forecastController.$inject = ['sharedService'];

    function forecastController(sharedService) {
        var vm = this;
        vm.city = '';

        activate();

        function activate() {
            vm.city = sharedService.get('city');
        }
    }

}());