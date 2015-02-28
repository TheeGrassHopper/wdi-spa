'use strict';

angular.module('myApp.detail-display', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail', {
    templateUrl: 'components/detail-display/detail.html',
    controller: 'DetailCtrl'
  });
}])

.controller('DetailCtrl', [function() {

}]);