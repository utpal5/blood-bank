//import exoress
const express = require("express");
const { testController } = require("../controllers/testController");

//router object use the router funtionality
const router = express.Router();
//routes
//add test controller file automatically import 
router.get("/",testController);

//export
module.exports = router;