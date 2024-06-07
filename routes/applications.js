const express = require('express');
const router = express.Router();
const applicationCtrl = require('../controllers/applications.js');

router.get('/', applicationCtrl.index);
router.get('/new', applicationCtrl.new);
router.get('/:applicationId', applicationCtrl.show);
router.get('/:applicationId/edit', applicationCtrl.edit);
router.post('/', applicationCtrl.create);
router.put('/applicationId', applicationCtrl.update);
router.delete('/:applicationId', applicationCtrl.deleteApplication);

module.exports = router;
