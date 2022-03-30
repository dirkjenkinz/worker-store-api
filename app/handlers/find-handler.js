const { logger } = require('../utils');
const { getWorker } = require('../api');
const url = require('url');

const postFind = async (req, res) => {
  logger.info('post find handler');
  const u = url.parse(req.originalUrl, true);
  let response = await getWorker(u.query.workerId);
  logger.info('response=', response);

  if (response === 500) response = '';
  
  res.render('pages/find', { 
    data: response,
  });
};

module.exports = { postFind };
