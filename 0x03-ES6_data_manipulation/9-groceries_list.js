/**
 *  returns a map of groceries with properties name & quantity.
 * @returns {Map} (name, quantity)
 */
export default function groceriesList() {
    const finalMap = new Map();
    const obj = {
      Apples: 10,
      Tomatoes: 10,
      Pasta: 1,
      Rice: 1,
      Banana: 5,
    };
  
    const list = Array.from(Object.keys(obj));
  
    list.map((item) => finalMap.set(item, obj[item]));
    return finalMap;
  }