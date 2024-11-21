console.group('Conversación')
    console.log('Hola');
        console.group();
            console.log('bla bla bla');
            console.log('bla bla bla');
            console.log('bla bla bla');
        console.groupEnd();
    console.log('Adios');
console.groupEnd('Final');

function function1(){
    console.group('This is the function 1');
    console.log('This also');
    console.log('This also');
    function2();
    console.log("we're back at 1")
    console.groupEnd('function 1');
}

function function2(){
    console.group('function 2');
    console.log('Now we are at function 2');
    console.groupEnd('function 2');

}

console.log('We started');
function1();
console.groupEnd('Final');

console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.countReset('times');
console.count('times');
console.count('times');
console.count('times');