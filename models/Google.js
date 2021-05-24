/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
const mongoose = require('mongoose');

const GoogleSchema = new mongoose.Schema({
  googleId: {
    type: String, // type of data
    required: true, // input is required
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },

});

module.exports = Google = mongoose.model('User', GoogleSchema);
