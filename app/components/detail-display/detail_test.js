'use strict';

describe('myApp.detail-display module', function() {
  var scope, detailCtrl;

  beforeEach(module('myApp.detail-display'));
  beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      detailCtrl = $controller('DetailCtrl', {$scope: scope});
  }));

  describe('detail-display controller', function(){
    it('should ....', inject(function($controller) {
      expect(detailCtrl).toBeDefined();
    }));
  });
});