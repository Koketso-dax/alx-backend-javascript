/**
 * express http server that returns "Hello Holberton School!"
 * in the body of endpoint '/'
 */
const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
