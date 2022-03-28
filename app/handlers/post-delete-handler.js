const { deleteWorker } = require('../api');
const url = require('url');
const { logger } = require('../utils');

const postDelete = async (req, res) => {
  logger.info('post delete handler');
  const u = url.parse(req.originalUrl, true);
  const response = await deleteWorker(u.query.workerId);
  res.redirect('/all');
};

module.exports = { postDelete };