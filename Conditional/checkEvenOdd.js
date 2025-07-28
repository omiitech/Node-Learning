const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (num) => {
    const n = Number(num);
    if (n % 2 === 0) console.log('Even');
    else console.log('Odd');
    readline.close();
});