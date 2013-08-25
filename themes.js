/**
 * Backend themes module.
 *
 * This module is responsible for all backend theme manipulation.
 *
 * @module themes
 * @author Luiz Armesto
 */

var fs = require('fs');

/**
 * Gets the themes path.
 *
 * @return {string} The path were the themes are located.
 */
exports.getThemesPath = function () {
  return __dirname + '/public/theme';
};

/**
 * Gets the list of themes.
 *
 * List all themes installed, displaying the info got from "theme.json" files.
 *
 * @return {array} An array containing objects with all themes info.
 */
exports.getThemeList = function () {
  var themes = fs.readdirSync(this.getThemesPath()),
      themeList = [],
      that = this;

  themes.forEach(function (theme) {
    var themeInfo = that.getThemeInfo(theme);
    if (themeInfo) {
      themeList.push(themeInfo);
    }
  });

  return themeList;
};

/**
 * Gets the info from a given theme.
 *
 * Provides a object containing the info got from theme "theme.json" file
 * from the given theme.
 *
 * @param {string} themeId The theme identifier. This is the theme's directory name.
 * @return {object} The theme info.
 */
exports.getThemeInfo = function (themeId) {
  var themePath = this.getThemesPath() + '/' + themeId,
      themeInfoPath = themePath + '/theme.json',
      themeInfo = {};
  try {
    themeInfo = JSON.parse(fs.readFileSync(themeInfoPath, 'utf-8'));
    themeInfo.id = themeId;
    themeInfo.baseUrl = '/theme/' + themeId;
  } catch (e) {
    console.warn('Failed to load "' + themePath + '/theme.json":', e);
  } finally {
    return themeInfo;
  }
};
