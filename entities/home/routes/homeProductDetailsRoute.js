const express = require('express');
const router = express.Router(); 

const postProductDetailsController = require('../controller/postProductDetailsController')

router.route('/details')
.post(postProductDetailsController)

module.exports = router;