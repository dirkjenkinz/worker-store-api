const url = require('url');
const { logger, makeTitleCase } = require('../utils');
const { updateWorker } = require('../api');

const getChange = async (req, res) => {
  logger.info('change handler - get');
  const u = url.parse(req.originalUrl, true);
  const what = u.query['what-do-you-want-to-do'];
  res.render('pages/change', {
    workerId: u.query.workerId,
    name: u.query.name,
    latitude: u.query.latitude,
    longitude: u.query.longitude,
    home: u.query.home
  });
};

const postChange = async (req, res) => {
  logger.info('change handler - post');
  const errors = checkForErrors(req.body);
  if (errors.length > 0) {
    const errorList = errors[errors.length - 1];
    res.render('pages/add', {
      errors: errors,
      workerId: req.body.workerId,
      name: req.body.name,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      home: req.body.home,
      errorList: errorList,
    });
    return;
  };
  const home = makeTitleCase(req.body.home);

  const response = await updateWorker(
    req.body.workerId,
    req.body.name,
    req.body.latitude,
    req.body.longitude,
    req.body.home
  );
  logger.debug(response);

  res.redirect('/all');
};

const checkForErrors = ((body) => {
  const coordinateRegex = /^-?[0-9]{1,3}(?:\.[0-9]{1,2})?$/

  let errors = [];
  let errorList = {};
  
  if (body.workerId.length === 0) {
      errors.push(
          {
              text: 'Worker ID is mandatory',
              href: '#workerId'
          }
      );
      errorList.worker = 'Worker ID is mandatory';
  } else if (body.workerId.length !== 8) {
      errors.push(
          {
              text: 'Worker ID must be exactly 8 digits long',
              href: '#workerId'
          }
      );
      errorList.worker = 'Worker ID must be exactly 8 digits long';
  };

  if (body.name.length == 0) {
      errors.push(
          {
              text: 'Name is mandatory',
              href: '#name'
          }
      );
      errorList.name = 'Name is mandatory';
  };

  if (body.latitude.length == 0) {
      errors.push(
          {
              text: 'Latitude is mandatory',
              href: '#latitude'
          }
      );
      errorList.latitude = 'Latitude is mandatory';
  } else if (!coordinateRegex.test(body.latitude)) { 
      errors.push(
          {
              text: 'Incorrect format for latitude',
              href: '#latitude'
          }
      );
      errorList.latitude = 'Incorrect format for latitude';
  };

  if (body.longitude.length == 0) {
      errors.push(
          {
              text: 'Longitude is mandatory',
              href: '#longitude'
          }
      );
      errorList.longitude = 'Longitude is mandatory';
  } else if (!coordinateRegex.test(body.longitude)) { 
      errors.push(
          {
              text: 'Incorrect format for longitude',
              href: '#longitude'
          }
      );
      errorList.longitude = 'Incorrect format for longitude';
  };

  if (body.home.length == 0) {
      errors.push(
          {
              text: 'Home is mandatory',
              href: '#home'
          }
      );
      errorList.home = 'Home is Mandatory';
  };
  
  if (errors.length > 0) {
      errors.push(errorList);
  };

  return errors;
});

module.exports = { getChange, postChange };
