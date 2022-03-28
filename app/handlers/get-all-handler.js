const { getAllWorkers } = require('../api');
const { logger } = require('../utils');

const getAllDetails = async (req, res) => {
    logger.info('get all handler');
    const response = await getAllWorkers();
    res.render('pages/all', {
        rc: response.status,
        list: response.data,
    });
};

module.exports = { getAllDetails };