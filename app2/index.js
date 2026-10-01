const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from APP 2');
});

server.listen(3002, () => {
  console.log('APP 2 running on port 3002');
});