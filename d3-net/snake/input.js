let connection;

// INPUT HANDLER...
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  } else if (data === 'w') {
    connection.write('Move: up');
  } else if (data === 's') {
    connection.write('Move: down');
  } else if (data === 'a') {
    connection.write('Move: left');
  } else if (data === 'd') {
    connection.write ('Move: right');
  } else if (data === 'q') {
    connection.write ('Say: OMG');
  } else if (data === 'r') {
    connection.write ('Say: LOL');
  } else if (data === 'e') {
    connection.write ('Say: MY NAME IS JAKE');
  } else if (data === 'f') {
    connection.write ('Say: WHO EVEN R U??');
  }
}


// INPUT SETUP...
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

module.exports = { setupInput };
