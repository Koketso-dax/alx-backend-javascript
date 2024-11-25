/**
 * This program  display the message
 * "Welcome to Holberton School, what is your name?"
 * Followed by a new line.
 * After the user enters their name and displays
 * Your name is: INPUT
 * display "This important software is now closing" when the user
 * closes it
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
