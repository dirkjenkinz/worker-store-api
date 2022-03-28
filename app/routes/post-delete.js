const express = require('express');
const router = express.Router();
const { postDelete } = require('../handlers/post-delete-handler');
router.get('/', postDelete);
module.exports = router;
