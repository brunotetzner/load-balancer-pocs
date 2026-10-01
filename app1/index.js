const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from APP 1');
});

server.listen(3001, () => {
  console.log('APP 1 running on port 3001');
});