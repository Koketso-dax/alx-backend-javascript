const { describe, it } = require('mocha');
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
/**
 * test sendPaymentRequestToApi with args (100, 20) and (10, 10)
 */

describe('sendPaymentRequestToApi', () => {
  beforeEach('Set up spy to use for each test', () => {
    sinon.spy(console, 'log');
  });
  afterEach('restore spy after each test', () => {
    console.log.restore();
  });
  it('check that console.log is called with the right arg', () => {
    sendPaymentRequestToApi(100, 20);

    // eslint-disable-next-line no-unused-expressions
    expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('check that console.log is called with the right arg', () => {
    sendPaymentRequestToApi(10, 10);

    // eslint-disable-next-line no-unused-expressions
    expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
