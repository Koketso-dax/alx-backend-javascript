const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    const { database } = parsedUrl.query;
    if (!database) {
      res.end('Database parameter is missing');
      return;
    }

    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database\n');
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.map((line) => line.split(','));

      const fields = students[0];
      const firstNames = students.slice(1).filter((student) => student[fields.indexOf('field')] === 'CS').map((student) => student[fields.indexOf('firstname')]);
      const lastNames = students.slice(1).filter((student) => student[fields.indexOf('field')] === 'SWE').map((student) => student[fields.indexOf('firstname')]);

      res.write(
        `Number of students: ${firstNames.length + lastNames.length}\n`,
      );
      res.write(
        `Number of students in CS: ${firstNames.length}. List: ${firstNames.join(', ')}\n`,
      );
      res.write(
        `Number of students in SWE: ${lastNames.length}. List: ${lastNames.join(', ')}\n`,
      );
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
