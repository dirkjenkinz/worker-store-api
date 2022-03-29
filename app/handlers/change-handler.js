const url = require('url');
const { logger } = require('../utils');
const { updateWorker } = require('../api');

const getChange = async (req, res) => {
  logger.info('get change handler');
  const u = url.parse(req.originalUrl, true);
  const what = u.query['what-do-you-want-to-do'];
  res.render('pages/change', {
    workerId: u.query.workerId,
    name: u.query.name,
    latitude: u.query.latitude,
    longitude: u.query.longitude,
    home: u.query.home
  });
};

const postChange = async (req, res) => {
  logger.info('post change handler');

  const response = await updateWorker(
    req.body.workerId, req.body.name,
    [req.body.latitude,
    req.body.longitude],
    req.body.home
  );

  res.redirect('/all');
};

module.exports = { getChange, postChange };