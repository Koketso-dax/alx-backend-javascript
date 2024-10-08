/**
 * returns an updated map for all items with
 * initial quantity at 1.
 * @param {Map} map 
 * @returns {Map} updated map. 
 */
export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw Error('Cannot process');
    }
  
    for (const [key] of map) {
      if (map.get(key) === 1) map.set(key, 100);
    }
  
    return map;
  }