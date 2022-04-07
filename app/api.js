const axios = require('axios');
const { logger } = require('./utils');
const config = require('./config/config');

const getLocationAPI = async (name) => {
    logger.info('get location API');
    try {
        const response = await axios.get(`${config.api}/${name}`);
        return response.data;
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const deleteLocationAPI = async (name) => {
    logger.info('delete location API');
    try {
        const response = await axios.delete(`${config.api}/${name}`);
        return response.status
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const getLocationsAPI = async () => {
    logger.info('get locations API');
    try {
        const response = await axios.get(`${config.api}`);
        return response
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

<<<<<<< HEAD
const postWorker = async (id, name, latitude, longitude, home) => {
    logger.info('postWorker');
=======
const postLocationAPI = async (name, latitude, longitude) => {
    logger.info('post location API');
>>>>>>> e155e2651fd4095056f677b117c54a97f3e9ae50
    const body = {
        locationName: name,
        location: {
            latitude: Number(latitude),
<<<<<<< HEAD
            longitude: Number(longitude),
        },
        home: home,
=======
            longitude: Number(longitude)
        }
>>>>>>> e155e2651fd4095056f677b117c54a97f3e9ae50
    }
    try {
        response = await axios.post(`${config.api}`, body);
        return response.status
    } catch (error) {
        logger.error(error.response.statusText);
        return error.response.status;
    }
};

const updateLocationAPI = async (name, latitude, longitude) => {
    logger.info('update location API');
    const body = {
        name: name,
        location: {
            latitude: Number(latitude),
            longitude: Number(longitude),
        }
    };
    try {
        response = await axios.put(`${config.api}`, body);
        return response.status;
    } catch (error) {
        logger.error('error:', error.response.status);
        return error.response.status;
    }
};

module.exports = {
    getLocationAPI,
    deleteLocationAPI,
    getLocationsAPI,
    postLocationAPI,
    updateLocationAPI,
};