/**
 * Tests for calculateNumber function
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('rounds floating points to whole numbers', () => {
    assert.strictEqual(calculateNumber(2.0, 5.0), 7);
  });

  it('rounds {a} if it is a floating point fraction', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounds {b} if it is a floating point fraction', () => {
    assert.strictEqual(calculateNumber(3.0, 1.2), 4);
  });

  it('rounds both {a} and {b} if they are floating point fractions', () => {
    assert.strictEqual(calculateNumber(1.3, 5.7), 7);
  });

  it('rounds both {a} and {b} if they are floating point with trails', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
