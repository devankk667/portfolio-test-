const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes.js');
const portfolioRoutes = require('./routes/portfolioRoutes.js');
const bookingRoutes = require('./routes/bookingRoutes.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});