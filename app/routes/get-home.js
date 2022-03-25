const express = require('express');
const router = express.Router();

const { getHome } = require('../handlers/get-home-handler');

router.get('/', getHome);
module.exports = router;
