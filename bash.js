//output a prompt
process.stdout.write('prompt > ');

//the stdin 'data' even fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const pwdFunc = require('./pwd.js');
    pwdFunc();
  } else if (cmd === 'ls') {
    const lsFunc = require('./ls.js');
    lsFunc();
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
