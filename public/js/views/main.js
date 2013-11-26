/**
 * The main view.
 *
 * @module views/main
 *
 * @example
 *  var MainView = require('views/main.js'),
 *      mainView = new MainView({
 *        el: '#main',
 *        collection: points  // @see collections/points
 *      })
 *
 * @author Luiz Armesto
 */
define(function (require) {
  'use strict';

  var Dust = require('dust'),
      _ = require('underscore'),
      Backbone = require('backbone');

  var MapView = require('views/map'),
      TopbarView = require('views/topbar');


  // Loads the templates used by MainView
  var mainTpl = Dust.compile(require('text!tpl/main.dust'), 'main');
  Dust.loadSource(mainTpl);


  /**
   * @constructor
   * @alias module:views/main
   */
  var exports = Backbone.View.extend({

    initialize: function () {
      // Instantiates all subviews
      this.mapView = new MapView({
        collection: this.collection
      });
      this.topbarView = new TopbarView();
      // Creates an array containing all subviews
      this.subviews = [
        { view: this.mapView, el: '#map' },
        { view: this.topbarView, el: '#topbar' }
      ]
    },

    render: function () {
      var that = this;

      Dust.render('main', {}, function (err, out) {
        var _subviews = _(that.subviews);
        // Prevents subviews's element from being destroyed
        _subviews.each(function (subview) {
          subview.view.$el.detach();
        });
        // Adds the rendered template
        that.$el.html(out);
        // Adds subview's elements
        _subviews.each(function (subview) {
          that.$(subview.el).append(subview.view.$el);
          // Renders subviews
          subview.view.render();
        });
      });
      this.mapView.map.invalidateSize();
      this;
    }

  });

  return exports;
});
