/**
 * calculateNumber(a, b) - returns the sum | diff | mul | div of a and b.
 * @param {String} type: operation to perform (SUM, SUBTRACT, DIVIDE)
 * @param {Number} a: first number
 * @param {Number} b: second number
 * @returns {Number} result of the operation
 */

function calculateNumber(type, a, b) {
  const aNum = Math.round(a);
  const bNum = Math.round(b);
  if (type === 'SUM') {
    return aNum + bNum;
  }
  if (type === 'SUBTRACT') {
    return aNum - bNum;
  }
  if (type === 'DIVIDE') {
    if (bNum === 0) {
      return 'Error';
    }
    return aNum / bNum;
  }
  return 'Error';
}

module.exports = calculateNumber;
