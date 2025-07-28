const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number: ', (a) => {
    readline.question('Enter second number: ', (b) => {
        const x = Number(a);
        const y = Number(b);
        if (x > y) console.log(`${x} is greatest`);
        else if (y > x) console.log(`${y} is greatest`);
        else console.log('Both are equal');
        readline.close();
    });
});