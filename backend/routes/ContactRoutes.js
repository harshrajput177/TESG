const express = require('express');
const router = express.Router();
const { submitProposal } = require('../controller/ContactUsCon');

// @route   POST /api/proposal/submit
// @desc    Submit a proposal form
router.post('/submit', submitProposal);

module.exports = router;
