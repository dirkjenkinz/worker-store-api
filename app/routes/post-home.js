const express = require('express');
const router = express.Router();

const { postHome } = require('../handlers/post-home-handler');

router.get('/', postHome);
module.exports = router;
