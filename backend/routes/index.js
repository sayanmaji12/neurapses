const express = require('express');
const route = require('./v1/route');
const router = express.Router();


router.use('/v1', route);

module.exports = router;