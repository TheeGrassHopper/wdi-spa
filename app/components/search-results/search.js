'use strict';

angular.module('myApp.search-results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'components/search-results/search.html',
    controller: 'SearchResultsCtrl'
  });
}])

.controller('SearchResultsCtrl', [function() {

}]);