/**
 * simple server using node http module
 * listens on port 1234
 * displays "Hello Holberton School!"
 * in page body for any endpoint as plain text
 */
const http = require('http');

const port = 1234;
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
}).listen(port);

module.exports = app;
