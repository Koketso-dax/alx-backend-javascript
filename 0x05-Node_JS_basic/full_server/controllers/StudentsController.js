import readDatabase from '../utils';

/**
 * StudentController module
 */

class StudentController {
  static async getAllStudents(req, res) {
    const PATH = process.argv[2];
    try {
      const students = await readDatabase(PATH);
      const response = ['This is the list of our students'];
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      for (const field of fields) {
        response.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const PATH = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const students = await readDatabase(PATH);
      const response = [`List: ${students[major].join(', ')}`];
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentController;
