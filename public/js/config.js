requirejs.config({
  paths: {
    'leaflet': 'lib/leaflet',
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'backbone.leaflet': 'lib/backbone.leaflet'
  },
   shim: {
    'leaflet': {
      exports: 'L'
    },
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.leaflet': {
      deps: ['backbone', 'leaflet']
    }
  }
});
