const router = require('express').Router();
const requestController = require('../controllers/request');

router.get('/send_request', requestController.sendRequest);

module.exports = router;