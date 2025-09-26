const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogPostSchema = new Schema({
  title: String,
  slug: String,
  content: String,
  category: String,
  author: String,
  image: String,
  publishedAt: Date
});

module.exports = mongoose.model('BlogPost', blogPostSchema);