const { deleteWorker } = require('../api');
const url = require('url');

const postDelete = async (req, res) => {
  console.log('postDeleteHandler');
  const u = url.parse(req.originalUrl, true);
  const response = await deleteWorker(u.query.workerId);
  console.log(response)
  res.render('pages/deleted-worker', {
    response: response,
    id: u.query.workerId,
  });
};

module.exports = { postDelete };