const net = require('net');
const stdin = process.stdin
stdin.resume()


// CONNECTING TO SERVER...
const conn = net.createConnection({ 
  host: '192.168.88.169',
  port: 2341
});

conn.setEncoding('utf8');

// ONCE CONNECTED...
conn.on('connect', () => {
  conn.write('Hello from client!');
})

stdin.on('data', data => {
  console.log(data);
  if (data === '33') {
    conn.end();
    process.exit();
  } // \q quitting
  
  conn.write(data)
})

// // ON MESSAGE FROM SERVER...
// conn.on('data', (data) => {
//   console.log('Server says:', data);
// });