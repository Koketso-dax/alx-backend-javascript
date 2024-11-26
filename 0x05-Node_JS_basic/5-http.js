/**
 * node http server exported as app that returns
 * plain text "Hello Holberton School!" in body '/'
 * path '/students' returns "This is the list of our students"
 * followed by the same content as 3-read_file_async.js
 * CSV file can contain empty lines (at the end) - and they
 * are not a valid student!
 */
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1234;
const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      await countStudents(process.argv[2]);
    } catch (error) {
      res.end(error.message);
    }
    res.end();
  }
}).listen(port);

module.exports = app;
