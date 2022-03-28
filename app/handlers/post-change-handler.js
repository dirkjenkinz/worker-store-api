const { updateWorker } = require('../api');
const url = require('url');
const { logger } = require('../utils');

const postChange = async (req, res) => {
  logger.info('post change handler');
  const u = url.parse(req.originalUrl, true);
  const response = await updateWorker(u.query.workerId, u.query.name, [u.query.latitude, u.query.longitude], u.query.home);
  res.redirect('/all');
};

module.exports = { postChange };