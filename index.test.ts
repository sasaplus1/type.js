import * as BaseAssert from 'assert';

import { instanceOf } from './index';

const { isMap, isSet } = instanceOf;

function isChai(value: unknown): value is Chai.ChaiStatic {
  return typeof value === 'object' && value !== null && 'assert' in value;
}

const assert = isChai(BaseAssert) ? BaseAssert.assert : BaseAssert.strict;

describe('type', function() {
  context('isMap', function() {
    it('return true if value is a Map', function() {
      assert.strictEqual(isMap(new Map()), true);
    });
  });
  context('isSet', function() {
    it('return true if value is a Set', function() {
      assert.strictEqual(isSet(new Set()), true);
    });
  });
});

// TODO: need test within iframe
