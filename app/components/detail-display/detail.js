'use strict';

angular.module('wdiSpa.detail-display', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/detail/:title', {
            templateUrl: 'components/detail-display/detail.html',
            controller: 'DetailCtrl'
        });
    }])

    .controller('DetailCtrl', ['HttpService', '$scope', '$routeParams', function (httpService, $scope, $routeParams) {
        httpService.detail($routeParams.title)
            .success(function (data) {
                $scope.detail = data;
            });
    }]);