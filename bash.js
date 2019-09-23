//output a prompt
process.stdout.write('prompt > ');

//the stdin 'data' even fires after a user types in a line 
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
})