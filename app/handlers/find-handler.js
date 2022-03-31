const { logger } = require('../utils');
const { getWorker } = require('../api');

const postFind = async (req, res) => {
  logger.info('post find handler');
  if (req.body.workerId.length === 0){
    res.render('pages/find');
    return;
  };
  let response = await getWorker(req.body.workerId);
  logger.info('response=', response);
  if (response === 500) response = '';
  
  res.render('pages/find', { 
    data: response,
  });
};

module.exports = { postFind };
