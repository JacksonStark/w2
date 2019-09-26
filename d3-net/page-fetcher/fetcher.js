const fs = require('fs');
const request = require('request');
let input = process.argv.slice(2);
let website = input[0];
let fileLocation = input[1];

// OBTAIN INFO...
const info = (webpage, callback) => {
  request(webpage, (error, response, body) => {
    callback(body);
  });
}


// CREATE OR OVERWRITE FILE..
const write = (infoResult) => {
  fs.writeFile(fileLocation, infoResult, (err) => {
    if (err) {
      return console.log(`There was an error!`);
    }
    return console.log(`Downloaded and saved ${Buffer.byteLength(infoResult)} bytes to ${fileLocation}`);
  })
}

info(website, write);