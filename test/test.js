const { assert } = require('chai');
const fibo = require('../fibonacci');

const n = 6;

describe('Calculate the Fibonacci series of number', () => {
  it(`Function Fibonacci series of ${n}`, () => {
    const resultArray = fibo.fibFunction(n);
    const testArray = [0, 1, 1, 2, 3, 5];

    assert.equal(resultArray.toString(), testArray.toString());
  });
});
