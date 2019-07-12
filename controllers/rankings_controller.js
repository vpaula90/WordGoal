var db  = require('../models');

exports.index = function(req, res) {
  db.Student.findAll({raw: true}).then(function(data) {
    console.log('hello');
    
  
    var hbobj = {
      students:data
    }
    res.render("data/ranking", hbobj)
   
  })
};

// exports.getStudentData = function (req, res) {
//   db.Student.findAll({ raw: true }).then(function (data) {
//     console.log('hello');//this console to terminal and not console in html page
//     for (var i = 0; i < data.length; i++) {
//       console.log("info coming from controller:", data[i].first_name);
//     }
//     var hbobj = {
//       students:data
//     }
//     res.render("data/students", hbobj)

//   });
// };

exports.getStudentInfo = function (req, res) {
  db.Student.findAll({ raw: true }).then(function (data) {
    var Sequelize = require('sequelize');
const Op = Sequelize.Op;
    console.log('hello');//this console to terminal and not console in html page
    for (var i = 0; i < data.length; i++) {
      // console.log("info coming from controller:", data[i].word_count);
      db.Student.findAll({  attributes: [['AVG (word_count)', 'AVG (word_count)']],
      where: {[Op.and]: [{homeroom_id: {[Op.eq]: "UTA"}}]},
    });
      console.log(data)
    }
    var hbobj = {
      students:data
      
    }

    res.render("data/ranking", hbobj)

  });
};