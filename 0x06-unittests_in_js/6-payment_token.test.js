const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
/**
 * test getPaymentTokenFromAPI function using done callback
 */

describe('getPaymentTokenFromAPI', () => {
  it('getPaymentTokenFromAPI(true) returns a resolved promise', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        chai.expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
