const express = require('express');
const router = express.Router();
const applicationCtrl = require('../controllers/applications.js');

router.get('/', applicationCtrl.index);

module.exports = router;
