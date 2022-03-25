const { postWorker } = require('../api');
const url = require('url');

const postAdd = async (req, res) => {
  console.log('postAddHandler');
  const u = url.parse(req.originalUrl, true);
  console.log(u.query);
  const response = await postWorker(u.query['worker-id'], u.query.name, [u.query.latitude, u.query.longitude], u.query.home);
  console.log(response)
  res.render('pages/landing');
};

module.exports = { postAdd };