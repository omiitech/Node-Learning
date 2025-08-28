for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('Fizz Buzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Bu-zz');
    else console.log(i);
}