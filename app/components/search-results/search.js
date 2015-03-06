'use strict';

angular.module('wdiSpa.search-results', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search/:title?', {
    templateUrl: 'components/search-results/search.html',
    controller: 'SearchResultsCtrl'
  });
  //$routeProvider.when('/search', {
  //  templateUrl: 'components/search-results/search.html',
  //  controller: 'SearchResultsCtrl'
  //});
}])

.controller('SearchResultsCtrl', ['HttpService', '$scope', '$routeParams', '$location', function(httpService, $scope, $routeParams, $location) {

  if ($routeParams.title) {
      httpService.search($routeParams.title)
      .success(function (data) {
        $scope.search = data.Search;
        $scope.response = data.Error;
            console.log(data);
      });
  }
}])

.directive('searchUi', ['$location', function($location) {
  var searchFunction = function () {
    if (this.title) {
      $location.path('/search/' + this.title);
    }
  };

  return {
    link: function link(scope, element, attrs) {
      scope.search = searchFunction;
    },
    scope: {
      'wdiTitle': '='
    },
    templateUrl: 'components/search-results/search-ui.html'
  }
}]);
