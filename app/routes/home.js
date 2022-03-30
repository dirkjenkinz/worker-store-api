const express = require('express');
const router = express.Router();

const { getHome, postHome } = require('../handlers/home-handler');

router.get('/', getHome);
router.post('/', postHome);

module.exports = router;
