const http = require('http');

http.createServer(router).listen(3000);

console.log('Listening for http from port 3000')

function router(req, res){
    console.log('New petition!:')
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hi, I already know how to use node.js HTTP');
            res.end();
            break;
        default:
            res.write('error 404: I dont know what you want');
            res.end();
            break;
        }
            
    // res.writeHead(201, { 'Content-Type': 'text/plain' });
    // res.write('Hi, I already know how to use node.js HTTP');
    // res.end();
}