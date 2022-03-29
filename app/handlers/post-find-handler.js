const { getWorker } = require('../api');
const url = require('url');
const { logger } = require('../utils');

const postFind = async (req, res) => {
  logger.info('post find handler');
  const u = url.parse(req.originalUrl, true);
  const response = await getWorker(u.query.workerId);
  logger.info('response=', response);
  res.render('pages/find', { 
    data: response,
  });
};

module.exports = { postFind };