const { logger } = require("../utils");
const { findWorkersByHome } = require('../api');

const postHome = async (req, res) => {
  logger.info('post home handler');

  const errors = checkForErrors(req.body);
    if (errors.length > 0) {
        const errorList = errors[errors.length - 1];
        res.render('pages/home', {
            "errors": errors,
            "errorList": errorList,
            "home": req.body.home
        });
        return;
    };

  const response = await findWorkersByHome(req.body.home);
  res.render('pages/home-list', { 
    data: response.data,
    home: req.body.home,
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

module.exports = { postHome };
