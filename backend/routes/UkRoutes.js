const express = require('express');
const { submitContactForm } = require('../controller/Uk-ControllerForm');
const router = express.Router();

// POST - Save new contact form
router.post('/Ukcontact', submitContactForm);

module.exports = router;