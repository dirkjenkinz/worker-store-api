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
    console.log(config.api);
    console.log('>>>>', name)
    try {
        const response = await axios.delete(`${config.api}/${name}`);
        console.log('response=', response)
        return response.status
    } catch (error) {
        console.log('error=', error)
        logger.error(error.response.status);
        return error.response.status;
    }
};

const getLocationsAPI = async () => {
    logger.info('get locations API');
    try {
        const response = await axios.get(`${config.api}`);
        console.log(response.data)
        return response
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const postLocationAPI = async (name, latitude, longitude) => {
    logger.info('post location API');
    console.log(name, latitude, longitude);
    const body = {
        locationName: name,
        location: {
            latitude: Number(latitude),
            longitude: Number(longitude)
        }
    }
    try {
        console.log('body=', body);
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
            longitude: Number(long),
            latitude: Number(lat),
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