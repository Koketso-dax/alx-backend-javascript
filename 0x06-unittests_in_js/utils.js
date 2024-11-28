/**
 * Utility Module
 */

class Utils {
  /**
   * @param {String} type: operation to perform (SUM, SUBTRACT, DIVIDE)
   * @param {Number} a: first number
   * @param {Number} b: second number
   * @returns {Number} result of the operation
   */
  static calculateNumber(type, a, b) {
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
}

module.exports = Utils;
