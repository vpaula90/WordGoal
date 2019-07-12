var db = require('../models');
// var connection = require("../config/connection.js"); //this is linking to my database

// exports.index = function(req, res) {
//   db.Student.findAll({raw: true}).then(function(data) {
//     for (var i = 0; i < data.length; i++) {
//       console.log("info coming from controller:", data[i].first_name);
//     }
//     // console.log('hello');
//     // res.json({
//     //   here: data
//     // });
//     // console.log(data)
//     // res.render("data/students", { arr: data })
//     // res.render('data/wordcount');
//     var hbobj = {
//       students:data
//     }
//     res.render("data/students", hbobj)
   
//   })
// };
//omar did this exports.displau
exports.getStudentData = function (req, res) {
  db.Student.findAll({ raw: true }).then(function (data) {
    console.log('hello');//this console to terminal and not console in html page
    for (var i = 0; i < data.length; i++) {
      console.log("info coming from controller:", data[i].first_name);
    }
    var hbobj = {
      students:data
    }
    res.render("data/students", hbobj)

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



  // console.log('hello');
  // res.json({
  // here: data
  // });
  // var hbobj = {
  //   students:data
  // }
  // res.render("InputData", hbobj)
  // console.log(data)
  // res.render("data/students", { arr: data })