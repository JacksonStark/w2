const { nextISSTimesForMyLocation } = require("./iss");

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
nextISSTimesForMyLocation((error, flyTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printFlyTimes(flyTimes)
})
