/**
 * Returns a new ArrayBuffer with an Int8 value
 * at a specific position.
 * @param {Number} length
 * @param {Number} position
 * @param {Number} value
 * @returns {DataView} Array Buffer.
 */

export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const newBuffer = new ArrayBuffer(length);
  const int8 = new Int8Array(newBuffer, 0, length);
  int8.set([value], position);
  return new DataView(newBuffer);
}
