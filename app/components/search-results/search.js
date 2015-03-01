'use strict';

angular.module('wdiSpa.search-results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'components/search-results/search.html',
    controller: 'SearchResultsCtrl'
  });
}])

.controller('SearchResultsCtrl', [function() {

}]);