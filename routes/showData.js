var express = require('express');
var router  = express.Router();

var showData_controller = require('../controllers/showData_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', showData_controller.index);

router.post('/new', isAuthenticated, showData_controller.createTrip);

// router get accessing the database with students info
router.get('/dataInfo', showData_controller.display);


// var queryString = "SELECT * FROM students WHERE word_count > 100000";
// // router get accessing the database with students info
// router.get("/dataInfo", function(req, res) {
//     console.log("here");
//     var queryString = "SELECT * FROM students WHERE word_count > 50000";
//     connection.query(queryString, function(err, result) {
//       if (err) throw err;
//       res.json({
//         here: result
//         });
//     });

// });
  module.exports = router;