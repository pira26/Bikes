const express = require('express');
const router = new express.Router();

const bike = require('./bike');

router.use('/bike', bike);

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;