define(function (require) {
  'use strict';

  var Leaflet = require('leaflet'),
      BackboneLeaflet = require('backbone.leaflet'),
      BackboneIO = require('backbone.io');

  Leaflet.Icon.Default.imagePath = '/js/lib/images';

  var MainView = require('views/main');

  BackboneIO.connect();

  var Point = BackboneLeaflet.GeoModel.extend({
    idAttribute: '_id',
    keepId: true
  });

  var Points = BackboneLeaflet.GeoCollection.extend({
    model: Point,
    url: '/api/points',
    backend: 'mybackend',
    initialize: function () {
      this.bindBackend();
    }
  });

  var points = new Points();
  window.points = points;
  points.fetch();

  var mainView = new MainView({
    el: '#main',
    collection: points
  });

  mainView.render();
});
