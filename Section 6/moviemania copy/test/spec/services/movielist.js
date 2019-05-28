'use strict';

describe('Service: MovieList', function () {

  // load the service's module
  beforeEach(module('moviemaniaApp'));

  // instantiate service
  var MovieList;
  beforeEach(inject(function (_MovieList_) {
    MovieList = _MovieList_;
  }));

  it('should do something', function () {
    expect(!!MovieList).toBe(true);
  });

});
