const axios = require('axios');
const findWorkersByHome = async (home) => {
    let response = await axios.get(`http://localhost:8080/v1/workers/findByHome/${home}`);
    return response;
};

const getWorker = async (id) => {
    console.log('getWorker:', id);
    try {
        let response = await axios.get(`http://localhost:8080/v1/workers/${id}`);
        return response
    } catch (error) {
        return error.response.status;
    }
};

const getAllWorkers = async () =>{
    console.log('getAllWorkers');
    try {
        let response = await axios.get(`http://localhost:8080/v1/workers`);
        return response
    } catch (error) {
        console.log('Error =', error)
        return error.response;
    }
};

const postWorker = async (id, name, location, home) => {
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
        console.log('error=', error.response.data);
        return error.response.status;
    }
};

const updateWorker = async (id, name, location, home) => {
    console.log(id,'<<<')
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
        return error.response.status;
    }
};

module.exports = { 
    getWorker, 
    getAllWorkers, 
    postWorker,
    updateWorker,
    findWorkersByHome
};