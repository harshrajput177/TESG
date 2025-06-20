const express = require('express');
const router = express.Router();
const { submitContactForm } = require('../controller/QueryCon');

router.post('/query', submitContactForm);

module.exports = router;

