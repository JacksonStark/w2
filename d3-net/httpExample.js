/* 
 * SETUP
 * Our usual client setup code
 * Connect to example.com website's HTTP server using our TCP library
 * HTTP servers typically run on port 80
 */
const net = require('net');
const conn = net.createConnection({ 
  host: 'example.com',
  port: 80
});
conn.setEncoding('UTF8');
