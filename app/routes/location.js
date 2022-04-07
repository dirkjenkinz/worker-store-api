const express = require('express');
const router = express.Router();

const { postLocation } = require('../handlers/location-handler');

router.post('/', postLocation);

module.exports = router;
