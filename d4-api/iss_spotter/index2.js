const { nextISSTimesForMyLocation } = require('./iss_promised');


// PRINT FLY TIMES
const printFlyTimes = (flyTimes) => {
  for (const fly of flyTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(fly.risetime);
    const duration = fly.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  };
}

// ERROR CHECKER & PRINT INITIATOR
nextISSTimesForMyLocation()
.then(flyTimes => {
  printFlyTimes(flyTimes);
})
.catch(error => {
  console.log('It did not work:\n\n', error.message);
});