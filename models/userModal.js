const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please give user name"],
    },
    email: {
      type: String,
      required: [true, "Please give user email"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "manager"],
      default: "User",
      required: [true, "Please give user role"],
    },
    password: {
      type: String,
      required: [true, "Please give password"],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("UserSchema", userSchema);
