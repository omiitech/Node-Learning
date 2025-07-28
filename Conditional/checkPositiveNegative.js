const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (num) => {
    const n = Number(num);
    if (n > 0) console.log('Positive');
    else if (n < 0) console.log('Negative');
    else console.log('Zero');
    readline.close();
});