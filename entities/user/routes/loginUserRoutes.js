const express = require('express');
const router = express.Router();

const loginGetController = require('../controller/loginGetController')
const loginPostController = require('../controller/loginPostController')

router.route('/')
.get(loginGetController)
.post(loginPostController);

module.exports = router;