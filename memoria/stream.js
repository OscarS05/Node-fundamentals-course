const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('UTF8');
// readableStream.on('data', function(chunk){
//     console.log(chunk.toString());
//     data += chunk;
// });
// // Aunque usar data y luego end no parezca dar mucha diferencia es poque es un archivo pequeño
// // La diferencia se va a notar cuando sea un archivo muy grande
// readableStream.on('end', function(){
//     console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');


// Stream de transformación que al mismo tiempo puede leer y escribir
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

var mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);