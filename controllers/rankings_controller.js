var db  = require('../models');

exports.index = function(req, res) {
  res.render('data/ranking');
};

exports.createTrip = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.InputD.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
