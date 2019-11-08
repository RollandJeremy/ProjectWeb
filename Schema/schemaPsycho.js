const mongoose = require("mongoose");
const psychoSchema = mongoose.Schema({
  id: {
    type: Number,
    trim: true,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  pays: {
    type: String,
    required: true
  },
  arme: {
    type: String,
    required: true
  },
  statut: {
    type: String,
    required: true
  },
  actual: {
    type: String,
    required: true
  },
  killnumber: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("Psycho", psychoSchema);
