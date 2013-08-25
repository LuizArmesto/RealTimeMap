/**
 * The top bar view.
 *
 * @module views/topbar
 *
 * @example
 *  var TopbarView = require('views/topbar.js'),
 *      topbarView = new TopbarView({
 *        el: '#topbar',
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

  // Loads the templates used by MainView
  var topbarTpl = Dust.compile(require('text!tpl/topbar.dust'), 'topbar');
  Dust.loadSource(topbarTpl);


  /**
   * @constructor
   * @alias module:views/topbar
   */
  var exports = Backbone.View.extend({

    initialize: function () {
    },

    render: function () {
      var that = this;

      Dust.render('topbar', {}, function (err, out) {
        // Adds the rendered template
        that.$el.html(out);
      });

      this;
    }

  });

  return exports;
});
