const { findWorkersByHome } = require('../api');
const url = require('url');

const postHome = async (req, res) => {
  console.log('postHomeHandler');
  const u = url.parse(req.originalUrl, true);
  console.log(u.query);
  const response = await findWorkersByHome(u.query.home);
  console.log(response.data)
  res.render('pages/home-list', { data: response.data});
};

module.exports = { postHome };