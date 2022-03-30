const express = require('express');
const router = express.Router();
const { postDelete } = require('../handlers/delete-worker-handler');
router.get('/', deleteWorker);
module.exports = router;
