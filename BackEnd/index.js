const express = require("express"); // Adding Express
const searchRoute = require("./Routes/search");

const app = express(); // Initializing Express

app.use(express.json());
// this is a essential code  for cors prolem solution 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/',searchRoute);



// app.post("/", (request, response) => {
//   response.send("everything okay");
// });

// Making Express listen on port 7000
app.listen(7000, function () {
  console.log("Running on port 7000.");
});
