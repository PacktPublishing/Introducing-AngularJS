'use strict';

describe('Service: Movies', function () {

  // load the service's module
  beforeEach(module('moviemaniaApp'));

  // instantiate service
  var Movies;
  beforeEach(inject(function (_Movies_) {
    Movies = _Movies_;
  }));

  it('should do something', function () {
    expect(!!Movies).toBe(true);
  });

});
