const express = require('express');
const router = express.Router();
const getResetPasswordController = require('../controller/getResetPasswordController');
const postResetPasswordController = require('../controller/postResetPasswordController');


router.route("/password/:token")
.get(getResetPasswordController)

router.route("/password/reset")
.post(postResetPasswordController)

module.exports = router;