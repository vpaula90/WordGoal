var express = require('express');
var router  = express.Router();

var data_controller = require('../controllers/data_controller');

router.get('/', data_controller.index);

module.exports = router;

