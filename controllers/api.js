exports.points = {
  delete: function (req, res) {
    console.log("==============================> Foi");

    res.statusCode = 404;
    return res.send('Error 404');
  }
};
