const express = require("express");
const searchInSohoz = require("./sohoj");
// const { middleware1 } = require("../first");
const router = express.Router();

router.use(express.json());

router.post("/search", searchInSohoz, (request, response) => {
//   const { post } = response.locals;

console.log(request.body);

  console.log("main route");
  //   response.send("hello");
});

module.exports = router;
