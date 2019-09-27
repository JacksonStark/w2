const request = require('request-promise-native');


// FETCH IP FUNCTION
const fetchMyIP = () => {
  return request("https://api.ipify.org/?format=json");
};


// FETCH COORDS BY IP FUNCTION
const fetchCoordsByIP = (body) => { 
  const ip = JSON.parse(body).ip
  return request(`https://ipvigilante.com/${ip}`);
  };

// FETCH ISS FLYOVER TIMES
const fetchISSFlyOverTimes = (body) => {
  const { latitude, longitude } = JSON.parse(body).data
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`);
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(data => {
    const flyTimes = JSON.parse(data).response;
    return flyTimes;
  });
};




module.exports = { nextISSTimesForMyLocation };