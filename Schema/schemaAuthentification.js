const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../Config/config");

const authentificationScheme = mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    trim: true,
    //unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

authentificationScheme.methods = {
  authentification: function(password) {
    return passwordHash.verify(password, this.password);
  },
  pass: function() {
    return jwt.encode(this, config.secret);
  }
};

module.exports = mongoose.model("Authentification", authentificationScheme);
