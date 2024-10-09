/**
 * Filters students by city.
 *
 * @param {Array} list.
 *
 * @param {String} city.
 *
 * @returns {Array} Filtered array of students by city.
 *
 */

export default function getStudentsByLocation(list, city) {
  return list.filter((student) => student.location === city);
}
