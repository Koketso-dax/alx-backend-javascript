/**
 * async testing, waiting for a Promise
 * getPaymentTokenFromAPI - takes boolean argument success
 * and returns a resolved promise with the object {data: 'Successful response from the API'}
 * @param {boolean} success - determines if the Promise should be resolved or rejected
 * @returns {Promise} - a Promise that resolves with the data object or rejects with an error
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Check if the success argument is truthy
    if (success) {
      // If success is true, resolve the Promise with the data object
      resolve({ data: 'Successful response from the API' });
    } else {
      // If success is false, reject the Promise with an empty object
      reject();
    }
  });
}

module.exports = getPaymentTokenFromAPI;
