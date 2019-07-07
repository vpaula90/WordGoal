var express = require('express');
var router  = express.Router();

var inputData_controller = require('../controllers/inputData_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', inputData_controller.index);

router.post('/new', isAuthenticated, inputData_controller.createTrip);

module.exports = router;