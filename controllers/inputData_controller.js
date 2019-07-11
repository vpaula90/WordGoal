var db  = require('../models');

exports.index = function(req, res) {
  db.Student.findAll({raw: true}).then(function(data) {
    console.log('hello');
    // res.json({
    //   here: data
    // });
 // console.log(data)
    // res.render("data/students", { arr: data })
  // res.render('data/wordcount');
    var hbobj = {
      students:data
    }
    res.render("data/wordcount", hbobj)
   
  })
};

exports.createTrip = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
  req.body.UserId = req.user.id;

  db.InputD.create(req.body).then(function(dbPost) {
    res.json(dbPost);
  });
};
