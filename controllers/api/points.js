exports.delete = function (req, res) {
  console.log('---> Delete point');
  res.statusCode = 404;
  return res.send('Error 404');
};
