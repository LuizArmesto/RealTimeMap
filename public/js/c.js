requirejs = {
  paths: {
    'tpl': '../tpl',
    'text': 'lib/require/text',
    'dust': 'lib/dust',
    'leaflet': 'lib/leaflet',
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'socket.io': 'lib/socket.io',
    'backbone.io': 'lib/backbone.io',
    'backbone.leaflet': 'lib/backbone.leaflet'
  },
   shim: {
    'dust': {
      exports: 'dust'
    },
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
      deps: ['backbone.io', 'leaflet'],
      exports: 'Backbone.Leaflet'
    },
    'socket.io': { 
      exports: 'io'
    },
    'backbone.io': { 
      deps: ['backbone', 'socket.io'],
      exports: 'Backbone.io'
    }
  }
};
