/**
 * Logger module.
 *
 * Handles the log messages, adding usefull informations and providing more
 * granularity then using `console` directly.
 *
 * Important: Avoid the use of dependencies, because this module is supoosed
 * to be used by all others modules.
 *
 * @module logger
 *
 * @author Luiz Armesto
 */
define(function (require) {
  'use strict';

  // TODO: Use the requirejs configuration
  var DEBUG = true,
      INFO = true;

  /**
   * Gets the current time string.
   *
   * @private
   * @return {string} The current time formated string.
   */
  var nowString = function () {
    var now = new Date();
    return now.toString();
  };

  /**
   * @alias module:logger
   */
  var exports = {

    /**
     * Displays a debug message.
     */
    debug: function () {
      var args = [].slice.apply(arguments);
      args.unshift('[Debug - ' + nowString() + ']');
      if (DEBUG && window.console) { console.log.apply(console, args); }
    },

    /**
     * Displays an info message.
     */
    info: function () {
      var args = [].slice.apply(arguments);
      args.unshift('[Info - ' + nowString() + ']');
      if (INFO && window.console) { console.log.apply(console, args); }
    },

    /**
     * Displays an info message.
     */
    log: function () {
      this.info.apply(this, [].slice.apply(arguments));
    },

    /**
     * Displays a warning message.
     */
    warn: function () {
      var args = [].slice.apply(arguments);
      args.unshift('[Warn - ' + nowString() + ']');
      if (window.console) { console.warn.apply(console, args); }
    },

    /**
     * Displays an error message.
     */
    error: function () {
      var args = [].slice.apply(arguments);
      args.unshift('[Info - ' + nowString() + ']');
      if (window.console) { console.error.apply(console, args); }
    }
  };

  return exports;
});
