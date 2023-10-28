import * as assert from 'assert';

import { isMap, isSet } from './index';

describe('isMap', function() {
  it('return true if value is a Map', function() {
    assert.ok(isMap(new Map()));
  });
});
describe('isSet', function() {
  it('return true if value is a Set', function() {
    assert.ok(isSet(new Set()));
  });
});
