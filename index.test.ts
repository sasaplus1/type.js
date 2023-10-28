import * as assert from 'assert';

import { instanceOf } from './index';

const { isMap, isSet } = instanceOf;

describe('type', function() {
  context('isMap', function() {
    it('return true if value is a Map', function() {
      assert.ok(isMap(new Map()));
    });
  });
  context('isSet', function() {
    it('return true if value is a Set', function() {
      assert.ok(isSet(new Set()));
    });
  });
});
