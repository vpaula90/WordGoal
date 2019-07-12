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


exports.getStudentData = function (req, res) {
  db.Student.findAll({ raw: true }).then(function (data) {

    var met = [];
    var almostMet = [];
    var didntMeet = [];

    console.log(data);

    for (var i = 0; i < data.length; i++) {
      if (data[i].word_count > 100000) {

        met.push(
          {
            first_name: data[i].first_name,
            last_name: data[i].last_name,
            word_count: data[i].word_count
          }
        );

      }

      else if (data[i].word_count < 100000 && data[i].word_count > 50000) {

        almostMet.push(        
          {
            first_name: data[i].first_name,
            last_name: data[i].last_name,
            word_count: data[i].word_count
          }
        );

      }

      else if (data[i].word_count < 50000) {

        didntMeet.push(
          {
            first_name: data[i].first_name,
            last_name: data[i].last_name,
            word_count: data[i].word_count
          }
        );
      }

    }
    //pass filtered data into view
    // three sets of data - students who met, who almost met and who didn't meet
    //sub problems:
    // arrays of data - three different arrays 

    var hbobj = {
      // student: data
      met: met,
      almostMet: almostMet,
      didntMeet: didntMeet
    }

    console.log("HBOBJ!", JSON.stringify(hbobj));

    res.render("data/students", hbobj)

  });
};