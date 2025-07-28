const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (n) => {
    for (let i = 1; i <= Number(n); i++) {
        console.log(`Cube of ${i} is ${i * i * i}`);
    }
    readline.close();
});