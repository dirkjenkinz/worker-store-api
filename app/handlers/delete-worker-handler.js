const { deleteWorkerAPI } = require('../api');
const url = require('url');
const { logger } = require('../utils');

const deleteWorker = async (req, res) => {
  logger.info('delete worker handler');
  const u = url.parse(req.originalUrl, true);
  const response = await deleteWorkerAPI(u.query.workerId);
  logger.debug(response);
  
  res.redirect('/all');
};

module.exports = { deleteWorker };