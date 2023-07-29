const express = require("express"); // Adding Express
const searchRoute = require("./Routes/search");

const app = express(); // Initializing Express

app.use(express.json());
app.use('/',searchRoute);

// app.post("/", (request, response) => {
//   response.send("everything okay");
// });

// Making Express listen on port 7000
app.listen(7000, function () {
  console.log("Running on port 7000.");
});
