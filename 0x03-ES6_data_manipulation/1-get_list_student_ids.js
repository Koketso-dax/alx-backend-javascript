/**
 * returns id's of records in a list
 * @param {Array} list
 * 
 * @returns {Array} id's of records in a list.
 *
 */

export default function getListStudentIds(list) {
    if (Array.isArray(list)) {
      return list.map((obj) => obj.id);
    }
    return [];
  }
