const express = require('express');
const router = express.Router();

const getAdminDashController = require('../controller/getAdminDashController')

router.route('/dashboard')
.get(getAdminDashController);

module.exports = router;