const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter radius: ', (r) => {
    const radius = Number(r);
    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;
    console.log(`Area: ${area}`);
    console.log(`Circumference: ${circumference}`);
    readline.close();
});