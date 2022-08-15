const express = require('express');
const router = express.Router();  //Creates a new router object.

const homePageGetControler = require('../controller/homePageGetController');

router.route('/').get(homePageGetControler);

module.exports = router;
