const express = require('express');

const router = new express.Router();

router.get('/test', (req, res) => {
  	res.send(`I'm a test`);
});

module.exports = router;