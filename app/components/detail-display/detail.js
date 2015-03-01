'use strict';

angular.module('wdiSpa.detail-display', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail', {
    templateUrl: 'components/detail-display/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', ['$http', '$scope', function($http, $scope) {
  $http.get('http://localhost:8000/mock-data/big-title.json')
    .success(function (data) {
        $scope.detail = data;
    });
}]);