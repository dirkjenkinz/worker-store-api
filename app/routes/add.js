const express = require('express');
const router = express.Router();
const { getAdd, postAdd } = require('../handlers/add-handler');
router.get('/', getAdd);
router.post('/', postAdd);
module.exports = router;
