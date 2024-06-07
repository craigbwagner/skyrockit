const express = require('express');
const router = express.Router();
const applicationCtrl = require('../controllers/applications.js');

router.get('/', applicationCtrl.index);
router.get('/new', applicationCtrl.new);
router.post('/', applicationCtrl.create);

module.exports = router;
