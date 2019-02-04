const mongoose = require('mongoose');

const Person = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  source: String,
});

module.exports = mongoose.model('Person', Person);
