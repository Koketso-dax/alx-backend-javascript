const Utils = require('./utils');
/**
 * sendPaymentRequestToApi - uses calculateNumber with SUM
 * to determine shipping + totalAmount
 * @param {Number} totalAmount: total amount of the order
 * @param {Number} totalShipping: shipping cost
 * @returns {Number} totalAmount + totalshipping
 */

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const request = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${request}`);
};

module.exports = sendPaymentRequestToApi;
