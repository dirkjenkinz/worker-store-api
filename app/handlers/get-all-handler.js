const { getLocationsAPI } = require('../api');
const { logger } = require('../utils');

const getAllLocations = async (req, res) => {
    
    logger.info('get all handler');

    const response = await getLocationsAPI();
    logger.debug(response);
    let list = response.data;
    list.sort((a,b) => {
        return a.locationName - b.locationName;
    });

    res.render('pages/all', {
        rc: response.status,
        list: list
    });
};

module.exports = { getAllLocations };