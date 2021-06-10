const populateUI = require('./util2.js');

describe('populateUI', function() {
  test('Invalid value', function() {
    expect(populateUI(100)).toMatch('Seat number not valid');
  });
  test('seat selected for valid value', function() {
    expect(populateUI(217)).toMatch('Seat number not valid');
  });
  test('Invalid value', function() {
    expect(populateUI(467)).toMatch('Seat number not valid');
  });

});
