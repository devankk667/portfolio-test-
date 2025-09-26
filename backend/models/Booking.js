const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  clientName: String,
  email: String,
  service: String,
  date: Date,
  status: String // pending, confirmed, completed
});

module.exports = mongoose.model('Booking', bookingSchema);