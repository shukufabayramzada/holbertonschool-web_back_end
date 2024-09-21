// 1-stdin.js
const os = require('os');

process.stdout.write(
  `Welcome to Holberton School, what is your name?${os.EOL}`
);

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}${os.EOL}`);

  process.stdout.write(`This important software is now closing${os.EOL}`);

  process.exit();
});
