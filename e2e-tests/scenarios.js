'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /search when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/search");
  });


  describe('search', function() {

    beforeEach(function() {
      browser.get('index.html#/search');
    });


    it('should render search when user navigates to /search', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for search results/);
    });

  });


  describe('detail', function() {

    beforeEach(function() {
      browser.get('index.html#/detail');
    });


    it('should render detail when user navigates to /detail', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for detail display/);
    });

  });
});
