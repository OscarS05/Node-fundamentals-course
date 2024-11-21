let fs = require('fs');

function read(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    });
}

function write(ruta, content, cb) {
    fs.writeFile(ruta, content, (err) => {
        if(err){
            console.log('I have not been able to write it', err);
        }
        console.log(__dirname);
        console.log('It has been written correctly');
    });
}

function deleteFunction(ruta, cb) {
    fs.unlink(ruta, cb);
}
// write(__dirname + '/file1.txt', 'I am a new file', console.log)
// read(__dirname + '/file.txt');
deleteFunction(__dirname + '/file.txt', console.log);