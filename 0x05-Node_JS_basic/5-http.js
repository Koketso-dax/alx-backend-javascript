const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 */
const countStudents = async (dataPath) => {
  if (!dataPath) {
    throw new Error('Cannot load the database');
  }

  const data = await fs.readFile(dataPath, 'utf-8');
  const fileLines = data.trim().split('\n');
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(',');
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(',');
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];

    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }

    const studentEntries = studentPropNames.map((propName, idx) => [
      propName,
      studentPropValues[idx],
    ]);

    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const reportParts = [
    `Number of students: ${Object.values(studentGroups).reduce((acc,
      group) => acc + group.length, 0)}`,
  ];

  for (const [field, group] of Object.entries(studentGroups)) {
    reportParts.push(`Number of students in ${field}:
      ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
  }

  return reportParts.join('\n');
};

const handleRequest = async (req, res) => {
  const routes = {
    '/': 'Hello Holberton School!',
    '/students': async () => {
      const responseParts = ['This is the list of our students'];
      try {
        const report = await countStudents(DB_FILE);
        responseParts.push(report);
      } catch (err) {
        responseParts.push(err.message);
      }
      return responseParts.join('\n');
    },
  };

  const responseText = await (
    routes[req.url] instanceof Function ? routes[req.url]() : routes[req.url]
  );

  if (responseText) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(responseText));
    res.statusCode = 200;
    res.end(responseText);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};

app.on('request', handleRequest);

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
