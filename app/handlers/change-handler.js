const url = require('url');
const { logger } = require('../utils');
const { updateWorker } = require('../api');

const getChange = async (req, res) => {
  logger.info('change handler - get');
  const u = url.parse(req.originalUrl, true);
  const what = u.query['what-do-you-want-to-do'];
  res.render('pages/change', {
    name: u.query.name,
    latitude: u.query.latitude,
    longitude: u.query.longitude,
  });
};

const postChange = async (req, res) => {
  logger.info('change handler - post');
  const response = await updateWorker(
    req.body.name,
    [req.body.latitude,
    req.body.longitude],
  );
  logger.debug(response);
  
  res.redirect('/all');
};

module.exports = { getChange, postChange };