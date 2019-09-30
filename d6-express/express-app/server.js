const express = require("express");
const app = express();
const port = 111;

app.listen(port, () => {
  console.log("Server running");
});

app.get('/parks', (req, res) => {
  res.send('The Parks You\'ve Seen');
});

app.listen(port => {
  console.log('Server Running');
});

