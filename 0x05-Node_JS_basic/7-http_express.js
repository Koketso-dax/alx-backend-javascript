/**
 * small express server to read from db and return plain text
 */
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express()
const PORT = 1245;
const PATH = process.argv.length > 2 ? process.argv[2] : '';

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(PATH)
    .then((data) => {
      res.send(`This is the list of our students\n${data.join('\n')}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
