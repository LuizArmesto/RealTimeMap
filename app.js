var express = require('express'),
    http = require('http'),
    path = require('path'),
    routes = require('./app/routes'),
    mongoose = require('mongoose'),
    backboneio = require('backbone.io');

var secret = 'your secret here',
    port = process.env.PORT || 3700;

var app = express(),
    server = http.createServer(app);

var dust = require('dustjs-linkedin'),
    cons = require('consolidate');

app.engine('dust', cons.dust);

app.set('port', port);
app.set('views', __dirname + '/views');
app.set('view engine', 'dust');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(secret));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

mongoose.connect('mongodb://localhost/realtimemap');
mongoose.connection.on('open', function () {
  console.log('Connected to Mongoose') ;
});
var Schema = new mongoose.Schema({
  type: String,
  geometry: Object,
  properties: Object
});
var Point = mongoose.connection.model('Point', Schema);

routes.initialize(app);

server.listen(app.get('port'), process.env.IP, function () {
  console.log('Express server listening on port ' + app.get('port'));
});

var backend = backboneio.createBackend();
backend.use(backboneio.middleware.mongooseStore(Point));

backboneio.listen(server, { mybackend: backend });
