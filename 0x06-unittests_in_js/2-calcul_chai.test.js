/**
 * Test calculateNumber using chai expect
 */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should return the difference of two rounded numbers', () => {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should return the division of two rounded numbers', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should return "Error" when attempting to divide by 0', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
