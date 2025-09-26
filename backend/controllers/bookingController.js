const Booking = require('../models/Booking.js');

exports.createBooking = async (req, res) => {
  const { clientName, email, service, date } = req.body;
  
  try {
    // Check if slot is available
    const existingBooking = await Booking.findOne({ date });
    if (existingBooking) {
      return res.status(400).json({ message: 'This time slot is already booked' });
    }
    
    const newBooking = new Booking({
      clientName,
      email,
      service,
      date: new Date(date),
      status: 'pending'
    });
    
    const savedBooking = await newBooking.save();
    
    // Send confirmation email (using nodemailer or SendGrid)
    // sendConfirmationEmail(savedBooking);
    
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ date: 1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};