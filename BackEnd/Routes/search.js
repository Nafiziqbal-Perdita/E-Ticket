const express = require("express");
const searchInSohoz = require("./sohoj");
const searchInJatri=require("./jatri");
// const { middleware1 } = require("../first");
const router = express.Router();

router.use(express.json());

router.post("/search/sohoj", searchInSohoz, (request, response) => {
//   const { post } = response.locals;

console.log(request.body);

  console.log("Sohoj route");
  //   response.send("hello");
});

router.post('/search/jatri', searchInJatri , (request,response) => {
   
console.log(request.body);
console.log("jatri route");

})




module.exports = router;
