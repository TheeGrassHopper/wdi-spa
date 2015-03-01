'use strict';

// Declare app level module which depends on views, and components
angular.module('wdiSpa', [
  'ngRoute',
  'wdiSpa.detail-display',
  'wdiSpa.search-results'
]).
config(['$routeProvider', '$provide', function($routeProvider, $provide) {
  $routeProvider.otherwise({redirectTo: '/search'});

  $provide.factory('HttpService', function ($http) {
    return $http;
  });
}]);
