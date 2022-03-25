const getChange = async (req, res) => {
    console.log('getChangeHandler');
    res.render('pages/change');
};

module.exports = { getChange };