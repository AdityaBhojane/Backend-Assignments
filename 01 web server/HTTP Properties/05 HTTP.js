

const http = require('http');

const server = http.createServer((req, res) => {
  // Set content type header to indicate JSON data
  res.setHeader('Content-Type', 'application/json');

  // Set custom header
  res.setHeader('X-Custom-Header', 'Hello from Server');

  // Send JSON response
  res.end(JSON.stringify({ message: 'Hello, World!' }));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});



