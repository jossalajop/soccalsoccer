const express = require('express');
const { show, showtodosjugadores } = require('../controller/todosjugadores.controller');
const router = express.Router();

router.get('/', showtodosjugadores)

module.exports = router