var db = require('../models');

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


    res.render("data/students", hbobj)

  });
};