const getAdd = async (req, res) => {
    console.log('getAddHandler');
    res.render('pages/add');
};

module.exports = { getAdd };