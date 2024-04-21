// Importing required modules
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send a response
  res.end('<h1>Hello world</h1>');
});

// Set the port number
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
