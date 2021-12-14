var express = require('express');
var router = express.Router();

const controller = require('../controllers/open-weather.controller')

/* GET home page. */
router.post('/onecall', (req, res) => controller.oneCall(req, res));

module.exports = router;
