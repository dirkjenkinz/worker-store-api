const { getWorker } = require('../api');
const url = require('url');
const { logger } = require('../utils');

const getWorkerDetails = async (req, res) => {
    logger.info('workers handler');
    const response = await getWorker(21882000);
    logger.debug(response);

    res.render('pages/workers', {
        rc: response.status,
        id: response.data.workerId,
        name: response.data.name,
        lat: response.data.location.latitude,
        long: response.data.location.longitude,
        home: response.data.home,
    });
};

module.exports = { getWorkerDetails };