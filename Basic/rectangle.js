const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter length: ', (l) => {
    readline.question('Enter breadth: ', (b) => {
        const length = Number(l);
        const breadth = Number(b);
        console.log(`Area: ${length * breadth}`);
        console.log(`Perimeter: ${2 * (length + breadth)}`);
        readline.close();
    });
});