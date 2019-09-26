const net = require('net');

const server = net.createServer();

// SERVER INITIATED AND LISTENING...
server.listen(2341, () => {
  console.log('Server listening on port 2341!');
});

// ON NEW CONNECTION FROM CLIENT
server.on('connection', (client) => {
  console.log('New connection');
  client.write('Hello there!');
  client.setEncoding('utf8');
  client.on('data', (data) => {
    console.log('Message from client:', data);
  });

});




