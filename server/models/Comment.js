const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
  name: String,
  email: String,
  text: String,
  date: { type: Date, default: Date.now },
  parent: { type: String, default: 'top' },
  post: { type: String, required: true },
});

module.exports = mongoose.model('Comment', Comment);
