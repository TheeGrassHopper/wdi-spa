'use strict';

describe('wdiSpa.detail-display module', function() {
  var scope, detailCtrl;

  beforeEach(module('wdiSpa.detail-display'));
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