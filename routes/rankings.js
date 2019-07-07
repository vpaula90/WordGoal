var express = require('express');
var router  = express.Router();

var rankings_controller = require('../controllers/rankings_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', rankings_controller.index);

router.post('/new', isAuthenticated, rankings_controller.createTrip);

module.exports = router;