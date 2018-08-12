(function() {
    'use strict';

    angular
        .module('app')
        .config(function($routeProvider) {

        $routeProvider
        .when('/', { 
            templateUrl: 'views/homepage/homepage.html',
            controller: 'homepageController as vm'
        })
        .when('/forecast', {
            templateUrl: 'views/forecast/forecast.html',
            controller: 'forecastController as vm'
        });
    });
})();