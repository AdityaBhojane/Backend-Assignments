

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('HTTP Method:', req.method); 
  res.end('Check the console for the HTTP method');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running`);
});

// By default Browser sent GET request 
// when we refresh it shows GET GET two time (same reason)



