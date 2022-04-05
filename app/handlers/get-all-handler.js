const { getAllWorkers } = require('../api');
const { logger } = require('../utils');

const getAllDetails = async (req, res) => {
    logger.info('get all handler');
    const response = await getAllWorkers();
    logger.debug(response);

    let list = response.data;
    list.sort((a,b) => {
        return a.workerId - b.workerId;
    });

    res.render('pages/all', {
        rc: response.status,
        list: list,
    });
};

module.exports = { getAllDetails };