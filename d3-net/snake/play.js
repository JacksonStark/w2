const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

// PASSING RESULT OF CONNECT AS PARAMATER TO SETUP-INPUT...
setupInput(connect());