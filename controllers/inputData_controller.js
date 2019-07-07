var db  = require('../models');

exports.index = function(req, res) {
  db.InputD.findAll({
    where: {
      UserId: req.user.id
    }
  }).then(function(dbTrip) {
    console.log(dbTrip);
    res.render('inputData/inputData.handlebars', {
      layout: 'students',
      inputData: dbTrip
    });
  });
};

exports.createTrip = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.InputD.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
