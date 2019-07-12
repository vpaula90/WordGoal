var db  = require('../models');
// var connection = require("../config/connection.js"); //this is linking to my database

exports.index = function(req, res) {
  res.render('data/students');
};

exports.createTrip = function(req, res) {x

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.InputD.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};

exports.display = function(req, res) {
    db.Student.findAll({raw: true}).then(function(data) {
      console.log('hello');
      res.json({
      here: data
      });
      // var hbobj = {
      //   students:data
      // }
      // res.render("InputData", hbobj)
      // console.log(data)
      // res.render("data/students", { arr: data })
    });

    //res.render('showdData', {here: result})
    // var queryString = "SELECT * FROM students";
    // connection.query(queryString, function(err, result) {
    //   console.log("testing")
    //   if (err) throw err;
    //   res.json({
    //     here: result
    //     });
    // });
}
