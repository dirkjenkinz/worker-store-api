const { logger } = require("../utils");
const { postWorker } = require('../api');

const postAdd = async (req, res) => {
    logger.info('post add handler');
    console.log('body=', req.body);
    const response = await postWorker(
        req.body['worker-id'],
        req.body.name,
        [req.body.latitude, req.body.longitude],
        req.body.home
    );
    res.render('pages/added-worker', {
        response: response,
        details: req.body
    });
};

module.exports = { postAdd };
