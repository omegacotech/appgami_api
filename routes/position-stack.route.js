var express = require('express');
var router = express.Router();

const controller = require('../controllers/position-stack.controller')


router.post('/', (req, res) => controller.oneCall(req, res));

module.exports = router;
