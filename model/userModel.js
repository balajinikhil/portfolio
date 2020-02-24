const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"]
  },
  email: {
    type: String,
    required: [true, "Please tell us your email"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "please enter your password"],
    select: false
  },
  passwordCreatedAt: {
    type: Date,
    default: Date.now()
  }
});

userSchema.pre("save", function(next) {
  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.checkPassword = function(password, reqPass) {
  return bcrypt.compare(password, reqPass);
};

const User = mongoose.model("users", userSchema);

module.exports = User;
