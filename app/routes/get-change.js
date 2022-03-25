const express = require('express');
const router = express.Router();

const { getChange } = require('../handlers/get-change-handler');

router.get('/', getChange);
module.exports = router;
