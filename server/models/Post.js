const mongoose = require('mongoose');

const Post = new mongoose.Schema({
  title: String,
  tags: String,
  category: String,
  date: { type: Date, default: Date.now },
  comments: String,
  latestPosts: String,
  content: String,
  url: String,
  image: String,
  description: String,
});

module.exports = mongoose.model('Post', Post);
