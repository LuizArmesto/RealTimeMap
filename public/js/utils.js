/**
 * A collection of miscellaneous functions.
 *
 * Module containing some functions used by other modules.
 * Should be loaded using `RequireJS`.
 *
 * @module utils
 *
 * @example
 *  var utils = require('utils');
 *
 * @author Luiz Armesto
 */
define(function (require) {
  'use strict';

  /**
   * @alias module:utils
   */
  var exports = {
    /**
     * Loads style sheets dynamically.
     *
     * @example
     * var utils = require('utils');
     * utils.loadCss('/some/path/to.css');
     *
     * @param {string} url The url of the style sheet.
     * @return {dom} The link element used to load the style sheet.
     */
    loadCss: function (url) {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
      return link;
    }
  };

  return exports;
});
