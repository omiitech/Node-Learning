const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let marks = [];
let i = 1;

function askMark() {
    if (i <= 5) {
        readline.question(`Enter marks of subject ${i}: `, (mark) => {
            const m = Number(mark);
            if (m < 0 || m > 100) {
                console.log('Invalid marks! Must be between 0 and 100.');
                readline.close();
            } else {
                marks.push(m);
                i++;
                askMark();
            }
        });
    } else {
        const pass = marks.every(m => m >= 35);
        console.log(pass ? 'Student Passed 🎉' : 'Student Failed 😢');
        readline.close();
    }
}
askMark();