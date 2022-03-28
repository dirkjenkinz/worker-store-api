const { logger } = require("../utils");

const getAdd = async (req, res) => {
    logger.info('get add handler');
    res.render('pages/add');
};

module.exports = { getAdd };