define(function (require) {
  'use strict';

  var Leaflet = require('leaflet'),
      Backbone = require('backbone'),
      BackboneLeaflet = require('backbone.leaflet');

  var utils = require('utils');

  var MapView = BackboneLeaflet.MapView.extend({
    className: 'fullscreen',
    events: {
      'click map': 'onClick'
    },

    initialize: function () {
      // Loads the required style sheets
      utils.loadCss('/css/leaflet.css');
    },

    onClick: function (e) {
      var lat = e.latlng.lat,
          lng = e.latlng.lng,
          n = this._n || 1,
          geoJSON = {
            "type": "Feature",
            "geometry": { "type": "Point", "coordinates": [lng, lat] },
            "properties": { "name": "Unnamed Point " + n, "active": true }
          };
          this.collection.create(geoJSON);
          this._n = ++n;
    }
  });

  return MapView;
});

