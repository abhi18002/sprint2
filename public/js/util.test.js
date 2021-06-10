const validate = require('./util.js');

describe('validate', function() {
  test('should login using correct username and password ', function() {
    expect(validate("user1","login1")).toBe(true);
  });
  test('should not login ', function() {
    expect(validate("user","lol")).toBe(false);
  });

});
