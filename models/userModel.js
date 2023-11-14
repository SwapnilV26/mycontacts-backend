const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
    },
    email: {
      type: String,
      required: [true, "Please enter the user email address"],
      unique: [true, "This email address is already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestapms: true,
  }
);

module.exports = mongoose.model("User", userSchema);
