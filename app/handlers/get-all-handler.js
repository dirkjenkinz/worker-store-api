const { getLocationsAPI } = require('../api');
const { logger } = require('../utils');

const getAllLocations = async (req, res) => {
    logger.info('get all handler');
<<<<<<< HEAD
    const response = await getAllWorkers();
    console.log(response.data)
    logger.debug(response);

=======
    const response = await getLocationsAPI();
>>>>>>> e155e2651fd4095056f677b117c54a97f3e9ae50
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