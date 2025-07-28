const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number: ', (a) => {
    readline.question('Enter second number: ', (b) => {
        readline.question('Enter third number: ', (c) => {
            const x = Number(a), y = Number(b), z = Number(c);
            console.log(`Greatest: ${Math.max(x, y, z)}`);
            readline.close();
        });
    });
});