const axios = require('axios');
const { logger } = require('./utils');
const config = require('./config/config');

const findWorkersByHome = async (home) => {
    logger.info('findWorkersByHome');
    try {
        const response = await axios.get(`${config.api}/findByHome/${home}`);
        return response;
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    };
};

const getWorker = async (id) => {
    logger.info('getWorker');
    try {
        const response = await axios.get(`${config.api}/${id}`);
        return response.data;
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const deleteWorkerAPI = async (id) => {
    logger.info('deleteWorker');
    try {
        const response = await axios.delete(`${config.api}/${id}`);
        return response.status
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const getAllWorkers = async () => {
    logger.info('API - getAllworkers');
    try {
        const response = await axios.get(`${config.api}`)
        return response
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const postWorker = async (id, name, latitude, longitude, home) => {
    logger.info('postWorker');
    const body = {
        workerId: parseInt(id),
        name: name,
        location: {
            latitude: Number(latitude),
            longitude: Number(longitude),
        },
        home: home,
    }
    try {
        response = await axios.post(`${config.api}`, body);
        return response.status
    } catch (error) {
        logger.error(error.response.statusText);
        return error.response.status;
    }
};

const updateWorker = async (id, name, location, home) => {
    logger.info('updateWorker');
    const long = location[0];
    const lat = location[1];
    const body = {
        workerId: parseInt(id),
        name: name,
        location: {
            longitude: Number(long),
            latitude: Number(lat),
        },
        home: home,
    }
    try {
        response = await axios.put(`${config.api}`, body);
        return response.status;
    } catch (error) {
        logger.error('error:', error.response.status);
        return error.response.status;
    }
};

module.exports = {
    getWorker,
    getAllWorkers,
    postWorker,
    updateWorker,
    findWorkersByHome,
    deleteWorkerAPI
};