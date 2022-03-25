const { updateWorker } = require('../api');
const url = require('url');

const postChange = async (req, res) => {
  console.log('postChangeHandler');
  const u = url.parse(req.originalUrl, true);
  console.log('======');
  console.log(u.query);
  console.log('=====')
  const response = await updateWorker(u.query.workerId, u.query.name, [u.query.latitude, u.query.longitude], u.query.home);
  console.log(response)
  res.render('pages/landing');
};

module.exports = { postChange };