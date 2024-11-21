// const process = require('process');

process.on('beforeExit', () => {
    console.log('Ale, el proceso va a terminar');
});

process.on('');

process.on('exit', () => {
    console.log('Ale, el proceso acabo');
    setTimeout(() => {
        console.log('Ale, esto no se va a acabar nunca');
    }, 0);
});

process.on('uncaughtException', (err, origen) => {
    console.log('Se nos ha olvidado capturar un error');
    // console.log(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

functionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');