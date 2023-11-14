const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Register a user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists!!!");
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ msg: "user registered successfully" });
});

//@desc Login a user
//@route GET /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: "user authenticated successfully" });
});

//@desc Register a user
//@route GET /api/users/register
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json({ msg: "current user info" });
});

module.exports = { registerUser, loginUser, currentUser };
