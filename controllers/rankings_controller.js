var db  = require('../models');

exports.index = function(req, res) {
  res.render('data/ranking');
};

exports.showRanks = function(req, res) {
  db.Students.findAll({
    where: {
      homeroom_id: req.user.id
    }
  }).then(function(dbStudent) {
    console.log(dbStudent);
    res.render('data/ranking', {
      layout: 'students',
      student: dbStudent
    });
  });
};

exports.createTrip = function(req, res) {

  console.log(req.user);
  
  req.body.homeroom_id = req.user.username;

  db.Students.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};

