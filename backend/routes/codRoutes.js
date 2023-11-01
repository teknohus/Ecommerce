const express = require('express');
const {processCODPayment } = require('../controllers/codController');

const router = express.Router();

router.route('/payment/cod').post(processCODPayment)

module.exports = router;