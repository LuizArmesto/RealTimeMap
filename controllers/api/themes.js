var fs = require('fs'),
    themes = require('../../themes');

exports.list = function (req, res) {
  return res.json(themes.getThemeList());
};

exports.get = function (req, res) {
  return res.json(themes.getThemeInfo());
};
