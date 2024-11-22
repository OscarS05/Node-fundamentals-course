console.time('Todo el código');

console.time('bucle');
let suma = 0;
for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');


console.time('bucle2');
let suma2 = 0;
for (let j = 0; j < 1000000000; j++) {
    suma += 1;
}
console.timeEnd('bucle2');

console.time('asincrono');
console.log('Empieza código asincrono');

asincrona()
    .then(() => {
        console.timeEnd('asincrono')
    });

console.timeEnd('Todo el código');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Temina el proceso asincrono');
            resolve();
        }, 1000);
    });
}