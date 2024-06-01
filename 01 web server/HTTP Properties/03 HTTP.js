const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request Headers:', req.headers); 
  res.end('Check the console for the request headers\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running`);
});
