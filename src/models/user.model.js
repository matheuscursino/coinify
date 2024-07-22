const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;