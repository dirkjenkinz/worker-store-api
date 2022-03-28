const { postWorker } = require('../api');
const url = require('url');

const postAdd = async (req, res) => {
  console.log('postAddHandler');
  const u = url.parse(req.originalUrl, true);
  const response = await postWorker(u.query['worker-id'], u.query.name, [u.query.latitude, u.query.longitude], u.query.home);
  res.render('pages/added-worker', {
    response: response,
    details: u.query
  });
};

module.exports = { postAdd };