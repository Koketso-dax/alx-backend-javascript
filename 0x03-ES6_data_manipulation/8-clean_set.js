/**
 * returns a string of all the set values that start with a specific string
 * @param {Set} set
 * @param {String} startString
 * @returns {Set} filtered set.
 */
export default function cleanSet(set, startString) {
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) return '';

  const filteredList = [...set].filter((word) => word && word.startsWith(startString));

  return filteredList.map((word) => word.slice(startString.length)).join('-');
}
