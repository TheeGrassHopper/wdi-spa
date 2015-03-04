'use strict';

angular.module('httpService', [])

.factory('httpService', ['$http', function ($http) {
  function isInDev() {
      return false;
  }
  function protocolAndHost () {
      if (isInDev()) {
          return 'http://localhost:8000';
      }
      return 'http://www.omdbapi.com';
  }
  function pathAndQuery (search) {
      if (isInDev()) {
          return '/mock-data/';
      }
      if (search) {
          return '/?s=';
      }
      return '/?t=';
  }
  function querySuffix (search) {
      if (isInDev()) {
          if (search) {
            return '-search.json'
          }
          return '-title.json';
      }
      return '&y=&plot=short&r=json';
  }
  function buildUrl(search, title) {
      return protocolAndHost() + pathAndQuery(search) + title + querySuffix(search);
  }

  return {
      detail: function (title) {
          return $http.get(buildUrl(false, title));
        },
      search: function (title) {
          return $http.get(buildUrl(true, title));
      }
  };
}]);
