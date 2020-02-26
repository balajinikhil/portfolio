const mongoose = require("mongoose");
const validator = require("validator");

const contactSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: [true, "Please tell us your name"]
  },
  email: {
    type: String,
    required: [true, "please tell us your mail"],
    validate: validator.isEmail
  },
  message: {
    type: String
  }
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
