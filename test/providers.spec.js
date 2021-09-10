const {
  describe, it,
} = require('mocha');
const {assert} = require('chai');
const providers = require('../dist/providers');

describe('Providers config', function() {
  it('should be object', function() {
    assert.isObject(providers);
  });
  it('should not be empty', function() {
    assert.isAbove(Object.keys(providers).length, 0);
  });
});
