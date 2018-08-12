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
                'Wroclaw',
                'Tokio',
                'New York',
                'Berlin',
                'Beijing'
            ]
        }
    }


})();