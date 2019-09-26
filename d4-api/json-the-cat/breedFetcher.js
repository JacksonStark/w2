const request = require("request");

// FETCH FUNCTION...
const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    
      // Failure guardrails
      if (err) {
        throw new Error("There was an error with your input!");
      }

      // Convert JSON to object
      const data = JSON.parse(body);

      // Send error to callback
      if (!data.length) {
        err = "Breed not found";
        callback(err);

        // Send description to callback
      } else {
        callback(err, data[0]["description"]);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
