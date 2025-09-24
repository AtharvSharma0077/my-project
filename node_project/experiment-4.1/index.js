const http = require('http');
const handler0 = function(req, res)  {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello, World!\n');
}



function handler1  (req, res)  {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello, World!\n');
}
const handler2 = (req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello, World!\n');
}

const server = http.createServer( handler0);

const port = 3000;
server.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});