/**
 * readDatabase - accepts path as argument and reads database
 * asychronously and returns a promise. If file not accessible
 * or not found, rejects with error, else resolves with data.
 * If the file can be read, the function returns an object of arrays
 * of the firstname of students per field
 * @param {String} path: path to database file
 * @returns {Promise} - promise with data or error
 */
const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      for (const line of lines.slice(1)) {
        const [firstname, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      }

      resolve(students);
    });
  });
}

module.exports = readDatabase;
