'use strict';

// Declare app level module which depends on views, and components
angular.module('wdiSpa', [
  'ngRoute',
  'wdiSpa.detail-display',
  'wdiSpa.search-results'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/search'});
}]);
