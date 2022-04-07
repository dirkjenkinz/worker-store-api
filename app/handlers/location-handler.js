const { logger, makeTitleCase } = require("../utils");
const { findlocation } = require('../api');

const postLocation = async (req, res) => {
  logger.info('post location handler');
  const errors = checkForErrors(req.body);
  if (errors.length > 0) {
    const errorList = errors[errors.length - 1];
    res.render('pages/home', {
      errors: errors,
      errorList: errorList,
      locationName: req.body.locationName,
      latitude: req.body.latitude,
      longitude: req.body.longitude
    });
    return;
  };

  const home = makeTitleCase(req.body.home);
  const response = await findWorkersByHome(home);
  logger.debug(response);

  let list = response.data;
  list.sort((a, b) => {
    return a.workerId - b.workerId;
  });

  res.render('pages/home', {
    data: list,
    home:   home,
  });
};

const checkForErrors = ((body) => {
  let errors = [];
  let errorList = {};

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

module.exports = { postLocation };
