const express = require('express');
const router = express.Router();

const { postChange } = require('../handlers/post-change-handler');

router.get('/', postChange);
module.exports = router;