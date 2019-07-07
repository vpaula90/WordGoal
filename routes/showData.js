var express = require('express');
var router  = express.Router();

var showData_controller = require('../controllers/showData_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', showData_controller.index);

router.post('/new', isAuthenticated, showData_controller.createTrip);

module.exports = router;