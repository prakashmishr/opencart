const express = require('express');
const router = express.Router();

const getForgotPasswordController = require('../controller/getForgotPasswordController')
const postForgotPasswordController = require('../controller/postForgotPasswordController')

router.route('/password')
.get(getForgotPasswordController)
.post(postForgotPasswordController)

module.exports = router;

