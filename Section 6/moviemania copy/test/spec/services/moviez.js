'use strict';

describe('Service: Moviez', function () {

  // load the service's module
  beforeEach(module('moviemaniaApp'));

  // instantiate service
  var Moviez;
  beforeEach(inject(function (_Moviez_) {
    Moviez = _Moviez_;
  }));

  it('should do something', function () {
    expect(!!Moviez).toBe(true);
  });

});
