var home = require('../controllers/index');

exports.initialize = function (app) {
    app.get('/', home.index);
};
