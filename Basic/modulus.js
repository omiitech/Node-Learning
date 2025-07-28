const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number: ', (a) => {
    readline.question('Enter second number: ', (b) => {
        if (Number(b) !== 0) {
            console.log(`Modulus: ${Number(a) % Number(b)}`);
        } else {
            console.log('Error: Division by zero');
        }
        readline.close();
    });
});