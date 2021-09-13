import {describe, it} from 'mocha';
import  {assert} from 'chai';
import providers from '../dist/providers';

describe('Providers config', function() {
  it('should be object', function() {
    assert.isArray(providers);
  });
  it('should not be empty', function() {
    assert.isAbove(providers.length, 0);
  });
});
