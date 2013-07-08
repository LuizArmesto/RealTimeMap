define(function (require) {
  'use strict';

  var Leaflet = require('leaflet'),
      BackboneLeaflet = require('backbone.leaflet'),
      BackboneIO = require('backbone.io');

  Leaflet.Icon.Default.imagePath = '/js/lib/images';

  var MainView = require('views/main');

  BackboneIO.connect();

  var Points = BackboneLeaflet.GeoCollection.extend({
    backend: 'mybackend',
    initialize: function () {
      var that = this;
      this.bind('backend:create', function (model) {
        console.log(model);
        that.add(model);
      });
      this.bind('backend:update', function (model) {
        that.get(model.id).set(model);
      });
      this.bind('backend:delete', function (model) {
        that.remove(model.id);
      });
    }
  });

  var points = new Points();

  var mainView = new MainView({
    el: '#main',
    collection: points
  });

  mainView.render();
});
