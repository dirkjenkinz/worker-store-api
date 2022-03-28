const { updateWorker } = require('../api');
const url = require('url');

const postChange = async (req, res) => {
  console.log('postChangeHandler');
  const u = url.parse(req.originalUrl, true);
  const response = await updateWorker(u.query.workerId, u.query.name, [u.query.latitude, u.query.longitude], u.query.home);
  console.log(response)
  res.redirect('/all');
};

module.exports = { postChange };