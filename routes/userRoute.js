const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/user/register").post(registerUser);

router.route("/user/login").post(loginUser);

router.route("/user/current").get(getUser);

module.exports = router;
