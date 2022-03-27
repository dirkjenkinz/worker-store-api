const express = require('express');
const router = express.Router();

const { postAdd } = require('../handlers/post-add-handler');
router.get('/', postAdd);
module.exports = router;
