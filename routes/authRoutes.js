
const express = require("express");
const {
    registerController, loginController, currentUserController,
  } = require("../controllers/authController");
const router = express.Router();

const authMiddelware = require("../middlewares/authMiddelware");
//routes 
router.post("/register",registerController);


//LOGIN || POST
router.post("/login", loginController);

//GET CURRENT USER || GET
router.get("/current-user", authMiddelware, currentUserController);

module.exports = router;