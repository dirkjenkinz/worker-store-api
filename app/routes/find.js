const express = require('express');
const router = express.Router();
const { postFind } = require('../handlers/find-handler')
router.post('/', postFind);

module.exports = router;
