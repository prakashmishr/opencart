const express = require('express');
const router = express.Router();
const getEmailConfirmRequestController = require('../controller/getEmailConfirmRequestController')

router.route('/:token')
.get(getEmailConfirmRequestController)
// .post(postEmailConfirmRequestController)

module.exports = router;