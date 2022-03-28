const { logger } = require("../utils");

const getHome = async (req, res) => {
    logger.info('get home handler');
    res.render('pages/home');
};

module.exports = { getHome };