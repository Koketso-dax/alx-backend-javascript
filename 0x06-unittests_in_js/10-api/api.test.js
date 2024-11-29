/* eslint-disable no-tabs */
const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET',
  };
  it('check correct status code', (done) => {
    request(options, (_err, res, _body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('check correct content', (done) => {
    request(options, (_err, _res, body) => {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('check correct content length', (done) => {
    request(options, (_err, res, _body) => {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });

});

describe("Cart page", () => {
  it("check correct status code for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (_err, res, _body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check correct content for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (_err, _res, body) => {
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });
  it("check correct status code for incorrect url", (done) => {
    request.get("http://localhost:7865/cart/kim", (_err, res, _body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available Payments page', () => {
  const options = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET',
  };
  it('check correct status code', (done) => {
    request(options, (_err, res, _body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('check correct content', (done) => {
    request(options, (_err, _res, body) => {
      const response = JSON.parse(body);
      expect(response).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('check correct status code and content for valid userName', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: { userName: 'testuser' } },
      (_err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.contain('Welcome testuser');
        done();
      }
    );
  });

  it('check correct status code and content for missing userName', (done) => {
    request.post(
      'http://localhost:7865/login',
      { json: {} },
      (_err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.contain('userName is required');
        done();
      }
    );
  });
});
