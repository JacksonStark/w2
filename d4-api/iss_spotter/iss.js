const request = require("request");

// FETCH IP FUNCTION
const fetchMyIP = callback => {
  request("https://api.ipify.org/?format=json", (err, response, body) => {

    // If an error is thrown
    if (err) {
      callback(err, null);
      return;
    }

    // If status code is invalid
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // All is well: pass the coordinates!
    const ip = JSON.parse(body);
    callback(null, ip['ip']);
  });
};


// FETCH COORDS BY IP FUNCTION
const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/${ip}`, (err, response, body) => {

    // If an error is thrown
    if (err) {
      callback(err, null);
      return;
    }

    // If status code is invalid
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching Coordinates. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // All is well: pass the coordinates!
    const { latitude, longitude } = JSON.parse(body).data;
    callback(null, { latitude, longitude });
  });

}

// FETCH ISS FLYOVER TIMES
const fetchISSFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (err, response, body) => {

    // If an error is thrown
    if (err) {
      callback(err, null);
      return;
    }

    // If status code is invalid
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS Fly Over Times. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    // All is well: pass the passTimes!
    const flyTimes = JSON.parse(body).response;
    callback(null, flyTimes);
  });
}

// CALLBACK WATERFALL
const nextISSTimesForMyLocation = callback => {
  fetchMyIP((error, ip) => {
    if (error) {
      callback(error, null);
      return;
    }
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        callback(error, null)
        return;
      }
      fetchISSFlyOverTimes(coords, (error, flyTimes) => {
        if (error) {
          callback(error, null);
        }
        callback(null, flyTimes);
      });
    });
  });
}


module.exports = { nextISSTimesForMyLocation };