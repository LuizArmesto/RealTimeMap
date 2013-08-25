/**
 * Theme module.
 *
 * This module is responsible to handle all customization allowed using
 * themes.
 *
 * @module themes
 *
 * @example
 * var theme = require('themes');
 * theme.load('theme_name');
 *
 * @author Luiz Armesto
 */
define(function (require) {
  'use strict';

  var utils = require('utils');

  /*
   * @alias module:themes
   */
  var exports = {

    /**
     * Gets the path of the given theme.
     *
     * @param {string} theme The theme which the path will be given.
     * @return {string} The theme path.
     */
    getThemePath: function (theme) {
      return '/theme/' + theme + '/';
    },

    /**
     * Loads the given theme.
     *
     * @param {string} theme The theme which will be loaded.
     */
    loadTheme: function (theme) {
      utils.loadCss(this.getThemePath(theme) + "css/style.css");
    }
  };

  return exports;
});
