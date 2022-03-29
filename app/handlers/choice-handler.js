const url = require('url');

const getChoice = async (req, res) => {
    const u = url.parse(req.originalUrl, true);
    const what = u.query['what-do-you-want-to-do'];
    if (what === 'all') {
        res.redirect('/all');
    } else if (what === 'add') {
        res.redirect('/add');
    } else if (what === 'home') {
        res.redirect('/home');
    } else {
        res.redirect('/find');
    }
};

module.exports = { getChoice };