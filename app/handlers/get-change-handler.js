const url = require('url');
const { logger } = require('../utils');

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

module.exports = { getChange };