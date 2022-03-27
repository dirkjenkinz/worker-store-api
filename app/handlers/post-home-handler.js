const { findWorkersByHome } = require('../api');
const url = require('url');

const postHome = async (req, res) => {
  console.log('postHomeHandler');
  const u = url.parse(req.originalUrl, true);
  const response = await findWorkersByHome(u.query.home);
  res.render('pages/home-list', { 
    data: response.data,
    home: u.query.home,
  });
};

module.exports = { postHome };