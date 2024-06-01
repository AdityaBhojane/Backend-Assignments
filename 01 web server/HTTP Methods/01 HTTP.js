
const http = require('http');

const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Write data to the response body
  res.write('Hello, ');

  // Write more data to the response body
  res.write('World!\n');

  // End the response
  res.end('End of response\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});


