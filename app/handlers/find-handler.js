const { logger } = require('../utils');
const { getWorker } = require('../api');

const postFind = async (req, res) => {
  logger.info('post find handler');
  const errors = checkForErrors(req.body);
    if (errors.length > 0) {
        const errorList = errors[errors.length - 1];
        res.render('pages/find', {
            "errors": errors,
            "workerId": req.body["worker-id"],
            "errorList": errorList,
            "data": ''
        });
        return;
    };
  let response = await getWorker(req.body["worker-id"]);
  logger.debug(response);
  
  res.render('pages/find', { 
    data: response,
    workerId: req.body["worker-id"],
  });
};

const checkForErrors = ((body) => {
  const coordinateRegex = /^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$/
  let errors = [];
  let errorList = {};
  
  if (body['worker-id'].length === 0) {
      errors.push(
          {
              text: 'Worker ID is mandatory',
              href: '#worker-id'
          }
      );
      errorList.worker = 'Worker ID is mandatory';
  } else if (body['worker-id'].length !== 8) {
      errors.push(
          {
              text: 'Worker ID must be exactly 8 digits long',
              href: '#worker-id'
          }
      );
      errorList.worker = 'Worker ID must be exactly 8 digits long';
  };
  
  if (errors.length > 0) {
      errors.push(errorList);
  };

  return errors;
});

module.exports = { postFind };
