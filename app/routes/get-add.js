const express = require('express');
const router = express.Router();

const { getAdd } = require('../handlers/get-add-handler');

router.get('/', getAdd);
module.exports = router;
