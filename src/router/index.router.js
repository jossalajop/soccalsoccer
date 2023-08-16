const express = require('express');
const { show } = require('../controller/index.controller');
const router = express.Router();

router.get('/',show)


module.exports = router;