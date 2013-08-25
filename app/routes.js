var home = require('../controllers/index'),
    api = require('../controllers/api');

exports.initialize = function (app) {
    app.get('/', home.index);
    app.get('/api/themes', api.themes.list);
    app.delete('/api/points/:id', api.points.delete);
};
