const http = require('http');
http
    .createServer((req, res) => {
        console.log('request มาอีกแล้ว');
        res.write('Hello from node web serrver ');
        res.write(`<html>
    <head>
    </head>
    <body>
        <h1> yes </h1>
    </body>
    </html>`);
        res.end();
    })
    .listen(80);
console.log('one');
console.log('two');
console.log('three');
