'use strict';

// Declare app level module which depends on views, and components
angular.module('wdiSpa', [
    'ngRoute',
    'wdiSpa.detail-display',
    'wdiSpa.search-results',
    'httpService'
]).
    config(['$routeProvider', '$provide', function ($routeProvider, $provide) {
        $routeProvider.otherwise({redirectTo: '/search'});

        $provide.factory('HttpService', function (httpService) {
            return httpService;
        });
    }]);
