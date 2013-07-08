define(function (require) {
  'use strict';

  var Dust = require('dust'),
      Backbone = require('backbone');

  var MapView = require('views/map');

  // Loads the templates used by MainView
  var mainTpl = Dust.compile(require('text!tpl/main.dust'), 'main');
  Dust.loadSource(mainTpl);

  var MainView = Backbone.View.extend({
    initialize: function () {
      this.mapView = new MapView({
        collection: this.collection
      });
    },
    render: function () {
      var that = this;
      Dust.render('main', {}, function (err, out) {
        that.mapView.$el.detach();
        that.$el.html(out);
        that.$('#map').append(that.mapView.$el);
        that.mapView.render();
      });
    }
  });
  
  return MainView;
});
