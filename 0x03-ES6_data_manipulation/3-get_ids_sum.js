/**
 * Sums up values of id in list.
 * 
 * @param {Array} list - List of objects.
 * 
 * @returns {Number} Sum of values of id in list.
 * 
 */

export default function getStudentIdsSum(list) {
  return list.reduce((sum, student) => sum + student.id, 0);
}
