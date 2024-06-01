const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  // Set status code to 200 (OK)
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running`);
});


