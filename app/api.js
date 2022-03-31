const axios = require('axios');
const { logger } = require('./utils');
const findWorkersByHome = async (home) => {
    logger.info('findWorkersByHome');
    let response = await axios.get(`http://localhost:8080/v1/workers/findByHome/${home}`);
    return response;
};

const getWorker = async (id) => {
    logger.info('getWorker');
    try {
        let response = await axios.get(`http://localhost:8080/v1/workers/${id}`);
        return response.data;
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const deleteWorkerAPI = async (id) => {
    logger.info('deleteWorker');
    try {
        let response = await axios.delete(`http://localhost:8080/v1/workers/${id}`);
        return response.status
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const getAllWorkers = async () =>{
    logger.info('getAllworkers');
    try {
        let response = await axios.get(`http://localhost:8080/v1/workers`);
        return response
    } catch (error) {
        logger.error(error.response.status);
        return error.response.status;
    }
};

const postWorker = async (id, name, location, home) => {
    logger.info('postWorker');
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
        response = await axios.post('http://localhost:8080/v1/workers', body);
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
        response = await axios.put('http://localhost:8080/v1/workers', body);
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