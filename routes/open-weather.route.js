var express = require('express');
var router = express.Router();

const controller = require('../controllers/open-weather.controller')

/* GET home page. */
router.post('/onecall', (req, res) => controller.oneCall(req, res));
router.get('/weather/:query', (req, res) => controller.weather(req, res));
router.get('/weather/hourly/:query', (req, res) => controller.hourly(req, res));

module.exports = router;
