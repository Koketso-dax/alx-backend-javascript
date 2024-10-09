/**
 *  returns a boolean if all the elements in the array
 * exist within the set.
 * @param {Set} set
 * @param {Array} array
 * @returns {Boolean} true if all elements in array exist in set.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((val) => set.has(val));
}
