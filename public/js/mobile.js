/**
 * Mobile module.
 *
 * Contains functions used only by mobile version.
 * Because this is focused on mobile, don't need to mantain compatibility
 * with desktop browsers, especially old IE versions.
 *
 * @module mobile
 *
 * @author Luiz Armesto
 */
define(function (require) {
  'use strict';

  var logger = require('logger');

  /**
   * Hides the Address bar from Android phones.
   *
   * @private
   */
  var hideAddressbar = function () {
    if (document.documentElement.scrollHeight < (
        window.outerHeight / window.devicePixelRatio)) {
      document.documentElement.style.height = (
          window.outerHeight / window.devicePixelRatio) + 'px';
    }
    setTimeout(window.scrollTo(1, 1), 0);
  };

  /**
   * @alias module:mobile
   */
  var exports = {
    /**
     * Does everything needed by mobile phones.
     */
    initialize: function () {
      if (!this.isMobile()) {
        logger.info('Not running in a mobile device. The mobile support will not be initialized.');
        return;
      }
      logger.info('Initializing the mobile support.');
      this.handleEvents();
      // Try to hide the address bar in the case of the "load" event
      // already occurred.
      hideAddressbar();
    },

    /**
     * Checks if is running in a mobile device.
     *
     * @return {boolean} True if is running in a known mobile device, otherwise False.
     */
    isMobile: function () {
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i).test(navigator.userAgent);
    },

    /**
     * Handles specific events to mobile phones.
     */
    handleEvents: function () {
      logger.info('Listening mobile events.');
      window.addEventListener('load', function () {
          logger.debug('"load" event triggered from "window" object.');
          hideAddressbar();
      });
      window.addEventListener('orientationchange', function () {
          logger.debug('"orientationchange" event triggered from "window" object.');
          hideAddressbar();
      });
    }
  };

  return exports;
});
