const getHome = async (req, res) => {
    console.log('getHomeHandler');
    res.render('pages/home');
};

module.exports = { getHome };