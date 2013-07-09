var home = require('../controllers/index'),
    api = require('../controllers/api');

exports.initialize = function (app) {
    app.get('/', home.index);
    app.delete('/api/points/:id', api.points.delete);
};
