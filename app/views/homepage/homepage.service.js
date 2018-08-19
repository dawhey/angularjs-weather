(function() {

    angular
        .module('app')
        .factory('homepageService', homepageService);

    function homepageService() {
        return {
            getCities: getCities
        }

        function getCities() {
            return [
                'Wroclaw, PL',
                'Tokio, JP',
                'New York, NY',
                'Berlin, DE',
                'Beijing, CN'
            ]
        }
    }
})();