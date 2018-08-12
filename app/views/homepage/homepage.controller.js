(function() {
    'use strict'

    angular
        .module('app')
        .controller('homepageController', homepageController);

    homepageController.$inject = ['homepageService'];

        
    function homepageController(homepageService) {
        var vm = this;
        vm.selectedCity;
        vm.cities = [];

        activate();

        function activate() {
            vm.cities = homepageService.getCities();
        }
    }

})();