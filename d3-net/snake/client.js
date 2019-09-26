const net = require('net');
const { IP, PORT } = require('./constants')
let conn = null;

// CONNECTS WITH GAME SERVER...
const connect = function() {
  conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8'); 

  // NOTIFYING CONNECTION HAS BEEN MADE...
  conn.on('connect', () => {
    console.log('Connection established!');
    conn.write('Name: JXX');
  })

  // ON DATA FROM SERVER...
  conn.on('data', data => {
    console.log(data);
  })
  console.log(conn);
  return conn;
}

module.exports = { connect };
