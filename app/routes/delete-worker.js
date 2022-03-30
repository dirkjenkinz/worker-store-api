const express = require('express');
const router = express.Router();
const { deleteWorker } = require('../handlers/delete-worker-handler');
router.get('/', deleteWorker);
module.exports = router;
