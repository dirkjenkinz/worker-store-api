const { logger } = require("../utils");
const { findWorkersByHome } = require('../api');

const getHome = async (req, res) => {
    logger.info('get home handler');
    res.render('pages/home');
};

const postHome = async (req, res) => {
  logger.info('post home handler');
  const response = await findWorkersByHome(req.body.home);
  res.render('pages/home-list', { 
    data: response.data,
    home: u.query.home,
  });
};

module.exports = { getHome, postHome };

