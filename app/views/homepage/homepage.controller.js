(function() {
    'use strict'

    angular
        .module('app')
        .controller('homepageController', homepageController);

    homepageController.$inject = ['homepageService', 'sharedService'];

        
    function homepageController(homepageService, sharedService) {
        var vm = this;
        vm.selectedCity;
        vm.cities = [];

        vm.setCity = setCity;

        activate();

        function activate() {
            vm.cities = homepageService.getCities();
        }

        function setCity(value) {
            sharedService.put('city', value);
        }
    }

})();