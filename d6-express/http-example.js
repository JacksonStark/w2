// Call the http library
const http = require('http');

// Creaste the sever using http library
const server = http.createServer((request, response) => {
  
  // Set the content header
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the string to the response
  response.end('Hello World\n');

});

// Make the server listen on port 3000
server.listen(3000);
