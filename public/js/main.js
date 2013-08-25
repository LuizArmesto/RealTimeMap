/**
 * The App main module.
 *
 * This module contains the code responsible to initialize the app.
 * Should be set to 'data-main' attribute of `RequireJS` script tag.
 *
 * @module main
 *
 * @example
 * <html>
 *   <head>
 *     <script src="/js/config.js"></script>
 *     <script data-main="/js/main" src="/js/lib/require.js"></script>
 *   </head>
 * </html>
 *
 * @author Luiz Armesto
 */
define(function (require) {
  'use strict';

  var Leaflet = require('leaflet'),
      BackboneLeaflet = require('backbone.leaflet'),
      BackboneIO = require('backbone.io');

  // Configures required libs
  Leaflet.Icon.Default.imagePath = '/js/lib/images';

  BackboneIO.connect();

  var themes = require('themes'),
      mobile = require('mobile'),
      MainView = require('views/main');

  // Prepares to run correctly on mobile phones
  mobile.initialize();
  // Loads the default theme
  themes.loadTheme('default');

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
