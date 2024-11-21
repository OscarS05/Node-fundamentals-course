const { exec, spawn } = require('child_process');

// exec('node console.js', (err, stdout, sterr) => {
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// });


let process = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function (data){
    console.log(data.toString());
});

process.on('exit', function (){
    console.log('The process finished');
});