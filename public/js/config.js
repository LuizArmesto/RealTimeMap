/**
 * RequireJS configuration file.
 *
 * This configuration file should be loaded before the require.js file.
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
var cfg = {
  paths: {
    /* Templates path */
    'tpl': '../tpl',
    /* RequireJS plugins */
    'text': 'lib/require/text',
    /* Libs */
    'dust': 'lib/dust',
    'leaflet': 'lib/leaflet',
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'socket.io': 'lib/socket.io',
    'backbone.io': 'lib/backbone.io',
    'backbone.leaflet': 'lib/backbone.leaflet'
    /* App modules */
  },
   /* Configuring libs to be used as AMD modules */
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

try {
  requirejs.config(cfg);
} catch (e) {
  requirejs = cfg;
}
