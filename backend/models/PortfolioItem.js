const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioItemSchema = new Schema({
  title: String,
  description: String,
  category: String, // bridal, editorial, etc.
  images: [String],
  featured: Boolean
});

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);