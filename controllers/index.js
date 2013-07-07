exports.index = function (req, res) {
    console.log("Homepage...");
    res.render('index', { title: 'Express' });
};
