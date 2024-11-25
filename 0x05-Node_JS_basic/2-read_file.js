/**
 * countStudents - counts number of students by field
 * Reads the csv database file synchronously
 * If the database is not available, throw an error with
 * the text "Cannot load the database"
 * If the database is available, log the following message to
 * the console "Number of students: NUMBER_OF_STUDENTS"
 * format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
 * CSV file can contain empty lines (at the end) - and they are not
 * a valid student!
 */
const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line.trim() !== '').slice(1);
    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    console.log(`Number of students: ${students.length}`);
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
