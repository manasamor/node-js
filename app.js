// Import required modules
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body "Hello World"
  res.end('Hello World\n');
});

// Start the server to listen on the specified port and hostname
server.listen(port, hostname, () => {
  // Once the server is started, print a message indicating the server is running
  console.log(`Server running at http://${hostname}:${port}/`);
});
