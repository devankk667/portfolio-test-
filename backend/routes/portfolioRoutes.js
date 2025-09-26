const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/PortfolioItem.js');

router.get('/', async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;