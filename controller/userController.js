const User = require("../models/userModal");
const lodash = require("lodash");
const asyncHandler = require("express-async-handler");
const { Error } = require("mongoose");
const bcrypt = require("bcrypt");
const getAccessToken = require("../middlewares/getAccessToken");

//@desc Registering new users
//@route POST /user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  if (
    lodash.isNil(name) ||
    lodash.isNil(email) ||
    lodash.isNil(password) ||
    lodash.isNil(role)
  ) {
    res.status(400);
    throw Error("User info given not found");
  }

  // Checking for existing users
  const existingUser = await User.findOne({ email });
  if (!lodash.isNil(existingUser)) {
    res.status(400);
    throw Error("User already registered");
  }

  const hashedPassword = bcrypt.hash(password, 10);

  const createdUser = await User.create({
    name,
    email,
    role,
    password: hashedPassword, // NOTE: Storing  hashed password instead of storing real password due user security issues
  });

  const accessToken = getAccessToken({
    userId: createdUser.id,
    userEmail: createdUser.email,
  });

  res.status(200).json({
    isSuccess: true,
    message: "User registered successfully",
    data: {
      name: createdUser.name,
      email: createdUser.email,
      token: accessToken,
    },
  });
});

//@desc Login new users
//@route POST /user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  console.log("Login user: ", req.body);
});

//@desc Registering new users
//@route POST /user/current
//@access public
const getUser = asyncHandler(async (req, res) => {
  console.log("Get user: ", req.body);
});

module.exports = { registerUser, loginUser, getUser };
